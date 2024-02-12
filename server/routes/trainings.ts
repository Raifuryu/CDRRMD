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
        Body: {
          first_name: string;
          middle_name: string;
          last_name: string;
          extension_name: string;
          nickname: string;
          gender: string;
          isLGBTQ: string;
          civil_status: string;
          birth_date: string;
          birth_place: string;
          occupation: string;
          blood_type: string;
          barangay: number;
          street: string;
          sitio: string;
          contact_number: string;
          email_address: string;
        };
        Params: {
          id: number;
        };
      }>,
      reply: FastifyReply
    ) => {
      const id = request.params.id;
      const participant = request.body;
      const connection = await fastify.mysql.getConnection();

      const [rows, fields] = await connection.query(
        `
        INSERT INTO persons (first_name, middle_name, last_name, extension_name, nickname, gender, isLGBTQ, civil_status, birth_date, birth_place, occupation, blood_type)
        SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
        WHERE NOT EXISTS (
            SELECT 1 FROM persons
            WHERE first_name = ?
            AND last_name = ?
            AND birth_date = ?
        )
        LIMIT 1
        ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id);

        SET @person_id = LAST_INSERT_ID();

        INSERT INTO persons_address (fk_person_id, fk_barangay_id, street, sitio)
        SELECT @person_id, ?, ?, ?
        WHERE NOT EXISTS (
            SELECT 1 FROM persons_address
            WHERE fk_person_id = @person_id
            AND fk_barangay_id = ?
        )
        LIMIT 1;

        INSERT INTO phone_numbers (fk_person_id, contact_number)
        SELECT @person_id, ?
        WHERE NOT EXISTS (
            SELECT 1 FROM phone_numbers
            WHERE fk_person_id = @person_id
            AND contact_number = ?
        )
        LIMIT 1;

        INSERT INTO email_address (fk_person_id, email_address)
        SELECT @person_id, ?
        WHERE NOT EXISTS (
            SELECT 1 FROM email_address
            WHERE fk_person_id = @person_id
            AND email_address = ?
        )
        LIMIT 1;

        INSERT INTO trainings_participants (fk_training_id, fk_participant_id)
        SELECT ?, @person_id
        WHERE NOT EXISTS (
            SELECT 1 FROM trainings_participants
            WHERE fk_training_id = ?
            AND fk_participant_id = @person_id
        )
        LIMIT 1;
        `,
        [
          participant.first_name,
          participant.middle_name || "",
          participant.last_name,
          participant.extension_name || "",
          participant.nickname,
          participant.gender,
          participant.isLGBTQ,
          participant.civil_status,
          participant.birth_date,
          participant.birth_place,
          participant.occupation,
          participant.blood_type,
          participant.first_name, // Duplicate check: First Name
          participant.last_name, // Duplicate check: Last Name
          participant.birth_date, // Duplicate check: Birth Date
          participant.barangay, // For persons_address
          participant.street || "", // For persons_address
          participant.sitio || "", // For persons_address
          participant.barangay, // For persons_address duplicate check
          participant.contact_number, // For phone_numbers
          participant.contact_number, // For phone_numbers duplicate check
          participant.email_address, // For email_address
          participant.email_address, // For email_address duplicate check
          id, // For trainings_participants
          id, // For trainings_participants duplicate check
        ]
      );
    },
  });
}

export default routes;
