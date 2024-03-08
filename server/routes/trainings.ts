import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteShorthandOptions,
} from "fastify";
import fs from "fs";
import util from "util";
import { pipeline } from "stream";
import path from "path";
import { FieldPacket, RowDataPacket } from "mysql2";

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
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const connection = await fastify.mysql.getConnection();
      const [rows] = await connection.query(
        "SELECT trainings.*, (SELECT COUNT(*) FROM trainings_participants WHERE trainings_participants.fk_training_id = trainings.training_id) AS pax, trainings_courses.*, offices.office_name AS trainer FROM trainings LEFT JOIN trainings_courses ON trainings.fk_course_id = trainings_courses.training_course_id LEFT JOIN offices ON trainings.fk_trainer_id = offices.office_id WHERE trainings.status != 4 ORDER BY trainings.start_date DESC;"
      );
      connection.release();

      return rows;
    },
  });

  fastify.get("/courses", {
    handler: async (
      request: FastifyRequest<{
        Body: { trainingName: string };
      }>,
      reply: FastifyReply
    ) => {
      const connection = await fastify.mysql.getConnection();

      const [rows, fields] = await connection.query(
        "SELECT * FROM trainings_courses"
      );
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
        "SELECT trainings.*, (SELECT COUNT(*) FROM trainings_participants WHERE trainings_participants.fk_training_id = trainings.training_id) AS pax, trainings_courses.*, offices.office_name AS trainer FROM trainings LEFT JOIN trainings_courses ON trainings.fk_course_id = trainings_courses.training_course_id LEFT JOIN offices ON trainings.fk_trainer_id = offices.office_id WHERE trainings.training_id = ?;",
        [id]
      );

      connection.release();

      reply.code(200).send(rows);
    },
  });

  fastify.get("/:id/trainee", {
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
      const [row] = (await connection.query(
        "SELECT * FROM trainings_trainees WHERE fk_training_id = ?",
        [id]
      )) as [RowDataPacket, FieldPacket[]];

      if (row.length !== 0) {
        const [rows] = await connection.query(
          "SELECT * FROM offices LEFT JOIN offices_addresses ON offices_addresses.fk_office_id = offices.office_id LEFT JOIN offices_phone_numbers ON offices_phone_numbers.fk_office_id = offices.office_id LEFT JOIN phone_numbers ON phone_numbers.phone_number_id = offices_phone_numbers.fk_phone_number_id LEFT JOIN offices_email_addresses ON offices_email_addresses.fk_office_id = offices.office_id LEFT JOIN email_addresses ON email_addresses.email_address_id = offices_email_addresses.office_email_address_id WHERE office_id = ?;",
          [row[0].fk_trainee_id]
        );
        reply.code(200).send(rows);
      } else {
        reply.code(200).send({ found: false });
      }

      connection.release();
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

      const connection = await fastify.mysql.getConnection();
      const [rows] = await connection.query(
        "SELECT * FROM trainings_participants LEFT JOIN persons ON trainings_participants.fk_participant_id = persons.person_id LEFT JOIN persons_address ON persons_address.fk_person_id = persons.person_id LEFT JOIN address_barangays ON persons_address.fk_barangay_id = address_barangays.barangay_id LEFT JOIN persons_phone_numbers ON persons.person_id = persons_phone_numbers.person_contact_number_id LEFT JOIN phone_numbers ON phone_numbers.phone_number_id = persons_phone_numbers.fk_phone_number_id LEFT JOIN persons_email_addresses ON persons.person_id = persons_email_addresses.fk_person_id LEFT JOIN email_addresses ON email_addresses.email_address_id = persons_email_addresses.fk_email_address_id WHERE trainings_participants.fk_training_id = ?",
        [id]
      );

      connection.release();
      reply.code(200).send(rows);
    },
  });

  fastify.get("/:year/:id/AAR", {
    handler: async (
      request: FastifyRequest<{
        Params: {
          id: number;
          year: number;
        };
      }>,
      reply: FastifyReply
    ) => {
      const id = request.params.id;
      const year = request.params.year;
      const stream = fs.createReadStream(
        `./uploads/trainings/${year}/${id}/AAR.pdf`
      );
      reply.header("Content-Type", "application/pdf");
      await reply.send(stream);
    },
  });

  fastify.get("/:year/:id/documentations/:documentationNumber", {
    handler: async (
      request: FastifyRequest<{
        Params: {
          id: number;
          year: number;
          documentationNumber: number;
        };
      }>,
      reply: FastifyReply
    ) => {
      const id = request.params.id;
      const year = request.params.year;
      const documentationNumber = request.params.documentationNumber;
      const stream = fs.createReadStream(
        `./uploads/trainings/${year}/${id}/${documentationNumber}.jpg`
      );
      reply.header("Content-Type", "image/jpeg");
      await reply.send(stream);
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
      let start_date = new Date();
      const id = request.params.id;
      const data = await request.file();
      const connection = await fastify.mysql.getConnection();
      const [row] = (await connection.query(
        `SELECT start_date FROM trainings WHERE training_id = ${id}`
      )) as [RowDataPacket, FieldPacket[]];

      start_date = new Date(row[0].start_date);
      // Check if directory exists, if not create it

      const directoryPath = `./uploads/trainings/${start_date.getFullYear()}/${id}`;
      if (!fs.existsSync(directoryPath)) {
        await fs.promises.mkdir(directoryPath, { recursive: true });
      }

      // Handle the case where data is undefined
      if (data) {
        await connection.query(
          `UPDATE trainings SET after_activity_report = 'true' WHERE training_id = ${id}`
        );
        const filePath = `${directoryPath}/AAR.pdf`;
        await fs.unlink(filePath, (err) => {});
        const writeStream = fs.createWriteStream(filePath);
        data.file.pipe(writeStream);

        const [rows] = (await connection.query(
          `SELECT * FROM trainings WHERE after_activity_report = 'true' AND documentations = 'true' AND training_id = ${id}`
        )) as [RowDataPacket, FieldPacket[]];

        if (rows[0]) {
          await connection.query(
            `UPDATE trainings SET status = 0 WHERE training_id = ${id}`
          );
        }
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

  fastify.post("/:id/upload/documentation", {
    handler: async (
      request: FastifyRequest<{
        Params: {
          id: number;
        };
      }>,
      reply: FastifyReply
    ) => {
      let start_date = new Date();
      const id = request.params.id;
      const data = await request.files();
      const connection = await fastify.mysql.getConnection();
      const [row, fields] = (await connection.query(
        `SELECT start_date FROM trainings WHERE training_id = ${id}`
      )) as [RowDataPacket, FieldPacket[]];

      start_date = new Date(row[0].start_date);
      // Check if directory exists, if not create it

      const directoryPath = `./uploads/trainings/${start_date.getFullYear()}/${id}`;

      // Check if directory exists, if not create it
      if (!fs.existsSync(directoryPath)) {
        await fs.promises.mkdir(directoryPath, { recursive: true });
      }

      // Handle the case where data is undefined
      if (data) {
        for await (const part of data) {
          const filename = path.join(directoryPath, part.filename);
          await pump(part.file, fs.createWriteStream(filename));
        }
        await connection.query(
          `UPDATE trainings SET documentations = 'true' WHERE training_id = ${id}`
        );

        const [rows] = (await connection.query(
          `SELECT * FROM trainings WHERE after_activity_report = 'true' AND documentations = 'true' AND training_id = ${id}`
        )) as [RowDataPacket, FieldPacket[]];

        if (rows[0]) {
          await connection.query(
            `UPDATE trainings SET status = 0 WHERE training_id = ${id}`
          );
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
          course: string;
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
      const [row] = (await connection.query(
        "INSERT INTO trainings(fk_trainer_id, fk_course_id, venue, contact_person, contact_person_number, remarks, start_date, end_date) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
        [
          training.trainer,
          training.course,
          training.venue,
          training.contact_person,
          training.contact_person_number,
          training.remarks || "",
          training.start_date,
          training.end_date,
        ]
      )) as [RowDataPacket, FieldPacket[]];

      await connection.query(
        "INSERT INTO trainings_trainees(fk_training_id, fk_trainee_id) VALUES(?, ?)",
        [row.insertId, training.trainee]
      );

      connection.release();
      reply.code(201).send({ success: true });
    },
  });

  fastify.post("/create/mixed", {
    handler: async (
      request: FastifyRequest<{
        Body: {
          course: string;
          venue: string;
          trainer: string;
          trainee: number;
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
      const [row] = (await connection.query(
        "INSERT INTO trainings(fk_trainer_id, fk_course_id, venue, contact_person, contact_person_number, remarks, start_date, end_date) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
        [
          training.trainer,
          training.course,
          training.venue,
          training.contact_person,
          training.contact_person_number,
          training.remarks || "",
          training.start_date,
          training.end_date,
        ]
      )) as [RowDataPacket, FieldPacket[]];

      connection.release();
      reply.code(201).send({ success: true });
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
        await connection.query(
          "INSERT INTO trainings_participants(fk_training_id, fk_participant_id) VALUES(?,?)",
          [id, value]
        );
      });
      connection.release();
      reply.send({ success: true });
    },
  });

  fastify.put("/:id", {
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
        "UPDATE trainings SET status = ? WHERE training_id = ?;",
        [4, id]
      );
      connection.release();
      reply.code(201).send({ success: true });
    },
  });

  fastify.put("/:id/status", {
    handler: async (
      request: FastifyRequest<{
        Body: {
          remarks: string;
        };
        Params: {
          id: number;
        };
      }>,
      reply: FastifyReply
    ) => {
      const id = request.params.id;
      const remarks = request.body.remarks;
      const connection = await fastify.mysql.getConnection();
      await connection.query(
        "UPDATE trainings SET status = ?, remarks = ? WHERE id = ?;",
        [2, remarks || "", id]
      );
      connection.release();
      reply.code(201).send({ success: true });
    },
  });
}

export default routes;
