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
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const connection = await fastify.mysql.getConnection();

      const [rows, fields] = await connection.query("SELECT * FROM policies");
      connection.release();

      return reply.code(200).send(rows);
    },
  });

  fastify.post("/create", {
    handler: async (
      request: FastifyRequest<{
        Body: {
          number: number;
          name: string;
          dateApproved: string;
          category: string;
          type: string;
        };
      }>,
      reply: FastifyReply
    ) => {
      const connection = await fastify.mysql.getConnection();

      const [row, fields] = await connection.query(
        "INSERT INTO policies (policy_number, name, date_approved, category, type) VALUES (?, ?, ?, ?, ?)",
        [
          request.body.number,
          request.body.name,
          request.body.dateApproved,
          request.body.category,
          request.body.type,
        ]
      );

      connection.release();

      reply.code(201).send("Success");
    },
  });
}

export default routes;
