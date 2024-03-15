import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteShorthandOptions,
} from "fastify";
import { FieldPacket, RowDataPacket } from "mysql2";

async function routes(fastify: FastifyInstance) {
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

      const [rows] = await connection.query("SELECT * FROM offices");
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

      const [rows] = await connection.query(
        "SELECT * FROM offices WHERE office_id = ?",
        [id]
      );
      connection.release();

      return reply.code(200).send(rows);
    },
  });

  fastify.get("/type/:type", {
    handler: async (
      request: FastifyRequest<{
        Params: {
          type: string;
        };
      }>,
      reply: FastifyReply
    ) => {
      // 1 = government
      // 2 = CSO
      // 3 = Semi-gov
      const type = request.params.type;
      const connection = await fastify.mysql.getConnection();

      console.log(type);

      const [rows] = await connection.query(
        "SELECT * FROM offices_categories INNER JOIN categories ON offices_categories.fk_category_id = categories.category_id INNER JOIN offices ON offices_categories.fk_office_id = offices.office_id WHERE category_id = ?",
        [type]
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
          organization_type: string;
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

      const [row] = (await connection.query(
        "SELECT * FROM offices WHERE office_name = ? OR acronym = ?",
        [organization.organization_name, organization.acronym]
      )) as [RowDataPacket, FieldPacket[]];

      if (row.length === 0) {
        const [result] = (await connection.query(
          "INSERT INTO offices (office_name, acronym) VALUES (?, ?)",
          [organization.organization_name, organization.acronym || ""]
        )) as [RowDataPacket, FieldPacket[]];

        await connection.query(
          "INSERT INTO offices_addresses (fk_office_id, full_address, sitio, fk_barangay_id) VALUES(?, ?, ?, ?)",
          [
            result.insertId,
            organization.full_address || "",
            organization.sitio || "",
            organization.barangay,
          ]
        );

        await connection.query(
          "INSERT INTO offices_categories (fk_office_id, fk_category_id) VALUES(?, ?)",
          [result.insertId, organization.organization_type]
        );

        const [email_id] = (await connection.query(
          "INSERT INTO email_addresses (email_address	) VALUES(?)",
          [organization.email_address]
        )) as [RowDataPacket, FieldPacket[]];

        await connection.query(
          "INSERT INTO offices_email_addresses (fk_office_id, fk_email_address_id	) VALUES(?, ?)",
          [result.insertId, email_id.insertId]
        );

        const [phone_number_id] = (await connection.query(
          "INSERT INTO phone_numbers (contact_number) VALUES(?)",
          [organization.contact_number]
        )) as [RowDataPacket, FieldPacket[]];

        await connection.query(
          "INSERT INTO offices_phone_numbers (fk_office_id, fk_phone_number_id	) VALUES(?, ?)",
          [result.insertId, phone_number_id.insertId]
        );

        connection.release();

        reply.code(201).send("Success");
      }
    },
  });
}

export default routes;
