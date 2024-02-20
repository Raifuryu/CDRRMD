import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteShorthandOptions,
} from "fastify";

async function routes(
  fastify: FastifyInstance,
  options: RouteShorthandOptions
) {
  fastify.addHook(
    "onResponse",
    async (request: FastifyRequest, reply: FastifyReply) => {
      fastify.log.info(`Responding: ${reply.elapsedTime}`);
    }
  );

  fastify.get("/", {
    handler: async (
      request: FastifyRequest<{
        Body: { trainingName: string };
      }>,
      reply: FastifyReply
    ) => {
      const connection = await fastify.mysql.getConnection();

      const [rows, fields] = await connection.query("SELECT * FROM offices");
      connection.release();

      return reply.code(200).send(rows);
    },
  });

  fastify.get("/:id", {
    handler: async (
      request: FastifyRequest<{
        Params: {
          id: number;
        };
      }>,
      reply: FastifyReply
    ) => {
      const id = request.params.id;
      const connection = await fastify.mysql.getConnection();

      const [rows, fields] = await connection.query(
        "SELECT * FROM offices WHERE id = ?",
        [id]
      );
      connection.release();

      return reply.code(200).send(rows);
    },
  });

  fastify.post("/create", {
    handler: async (
      request: FastifyRequest<{
        Body: {
          organization_name: string;
          acronym: string;
          contact_number: string;
          email_address: string;
          full_address: string;
          sitio: string;
          barangay: string;
        };
      }>,
      reply: FastifyReply
    ) => {
      const organization = request.body;
      const connection = await fastify.mysql.getConnection();

      const [row, fields] = await connection.query(
        "INSERT INTO offices (office_name, acronym, office_contact_number, office_email_address, full_address, sitio, fk_barangay_id ) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          organization.organization_name,
          organization.acronym,
          organization.contact_number,
          organization.email_address,
          organization.full_address,
          organization.sitio,
          organization.barangay,
        ]
      );

      connection.release();

      reply.code(201).send("Success");
    },
  });
}

export default routes;
