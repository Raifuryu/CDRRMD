import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteShorthandOptions,
} from "fastify";
import { connect } from "http2";

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

      const [rows, fields] = await connection.query("SELECT * FROM trainings");
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
        "SELECT * FROM trainings WHERE id = ?",
        [id]
      );

      connection.release();

      return reply.code(200).send(rows);
    },
  });

  fastify.get("/:id/participants", {
    handler: async (
      request: FastifyRequest<{
        Params: {
          id: number;
        };
      }>,
      reply: FastifyReply
    ) => {
      const id = request.params.id;
      let participants = [];

      const connection = await fastify.mysql.getConnection();
      const [rows, fields] = await connection.query(
        "SELECT * FROM trainings_participants LEFT JOIN persons ON trainings_participants.fk_participant_id = persons.id LEFT JOIN persons_address ON persons_address.fk_person_id = persons.id LEFT JOIN barangay ON persons_address.fk_barangay_id = barangay.id LEFT JOIN phone_numbers ON phone_numbers.fk_person_id = persons.id LEFT JOIN email_address ON email_address.fk_person_id = persons.id WHERE trainings_participants.fk_training_id = ?",
        [id]
      );

      connection.release();
      reply.code(200).send(rows);
    },
  });

  fastify.post("/:id/create/participants", {
    handler: async (
      request: FastifyRequest<{
        Body: [];
        Params: {
          id: number;
        };
      }>,
      reply: FastifyReply
    ) => {
      const id = request.params.id;
      const participant = request.body;
      const connection = await fastify.mysql.getConnection();
      participant.map(async (value) => {
        const [rows, fields] = await connection.query(
          "INSERT INTO trainings_participants(fk_training_id, fk_participant_id) VALUES(?,?)",
          [id, value]
        );
      });
      connection.release();
      reply.code(201).send("success");
    },
  });
}

export default routes;
