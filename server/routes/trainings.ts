import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteShorthandOptions,
} from "fastify";
import fs from "fs";
import util from "util";
import { Stream, pipeline } from "stream";

const pump = util.promisify(pipeline);

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

  fastify.post("/:id/upload/AAR", {
    handler: async (
      request: FastifyRequest<{
        Params: {
          id: number;
        };
      }>,
      reply: FastifyReply
    ) => {
      const id = request.params.id;
      const data = await request.file();

      // Check if directory exists, if not create it
      const directoryPath = `./uploads/${id}`;
      if (!fs.existsSync(directoryPath)) {
        await fs.promises.mkdir(directoryPath, { recursive: true });
      }

      // Handle the case where data is undefined
      if (data) {
        const connection = await fastify.mysql.getConnection();
        const [rows, fields] = await connection.query(
          `UPDATE trainings SET after_activity_report = 'true' WHERE id = ${id}`
        );
        const filePath = `./uploads/${id}/AAR.pdf`;
        await fs.unlink(filePath, (err) => {});
        const writeStream = fs.createWriteStream(filePath);
        data.file.pipe(writeStream);

        // Return response once file is uploaded
        data.file.on("end", () => {
          reply.code(200).send({ success: true });
        });
      } else {
        reply
          .code(400)
          .send({ success: false, message: "No file data received" });
      }
    },
  });

  fastify.post("/:id/upload/documentations", {
    handler: async (
      request: FastifyRequest<{
        Params: {
          id: number;
        };
      }>,
      reply: FastifyReply
    ) => {
      const id = request.params.id;
      const data = await request.file();

      // Check if directory exists, if not create it
      const directoryPath = `./uploads/${id}`;
      if (!fs.existsSync(directoryPath)) {
        await fs.promises.mkdir(directoryPath, { recursive: true });
      }

      // Handle the case where data is undefined
      if (data) {
        for (const part of data) {
          const connection = await fastify.mysql.getConnection();
          const [rows, fields] = await connection.query(
            `UPDATE trainings SET documentations = 'true' WHERE id = ${id}`
          );
          const filePath = `./uploads/${id}/AAR.pdf`;
          const writeStream = fs.createWriteStream(filePath);
          data.file.pipe(writeStream);
        }
        reply.code(200).send({ success: true });
      } else {
        reply
          .code(400)
          .send({ success: false, message: "No file data received" });
      }
    },
  });

  fastify.post("/create", {
    handler: async (
      request: FastifyRequest<{
        Body: {
          title: string;
          venue: string;
          trainer: string;
          trainee: string;
          contact_person: string;
          contact_person_number: string;
          remarks: string;
          start_date: string;
          end_date: string;
        };
        Params: {
          id: number;
        };
      }>,
      reply: FastifyReply
    ) => {
      const training = request.body;
      const connection = await fastify.mysql.getConnection();
      const [rows, fields] = await connection.query(
        "INSERT INTO trainings(fk_office_id, title, venue, trainer, contact_person, contact_person_number, remarks, start_date, end_date) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          training.trainee,
          training.title,
          training.venue,
          training.trainer,
          training.contact_person,
          training.contact_person_number,
          training.remarks,
          training.start_date,
          training.end_date,
        ]
      );

      connection.release();
      reply.code(201).send("success");
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
