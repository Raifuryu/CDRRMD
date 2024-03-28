import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteShorthandOptions,
} from "fastify";
import { connect } from "http2";

import { FieldPacket, ResultSetHeader } from "mysql2";

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

      const [rows, fields] = await connection.query("SELECT * FROM persons");
      connection.release();

      return reply.code(200).send(rows);
    },
  });

  fastify.post("/create", {
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
          isPWD: string;
          civil_status: string;
          birth_date: string;
          birth_place: string;
          occupation: string;
          blood_type: string;
          barangay: string;
          full_address: string;
          sitio: string;
          contact_number: string;
          email_address: string;
          isUnemployed: string;
          office: number;
        };
      }>,
      reply: FastifyReply
    ) => {
      const person = request.body;
      const connection = await fastify.mysql.getConnection();

      // Insert into persons table
      const [personRows] = (await connection.query(
        "INSERT INTO persons (first_name, middle_name, last_name, extension_name, nickname, occupation, birth_date, birth_place, blood_type, gender, civil_status, isLGBTQ, isPWD) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          person.first_name,
          person.middle_name || "",
          person.last_name,
          person.extension_name || "",
          person.nickname || "",
          person.occupation || "",
          person.birth_date || "",
          person.birth_place || "",
          person.blood_type || "",
          person.gender || "",
          person.civil_status || "",
          person.isLGBTQ,
          person.isPWD,
        ]
      )) as [ResultSetHeader, FieldPacket[]];

      // Retrieve the ID of the newly inserted person
      const personId: number = personRows.insertId;

      // Insert into persons_address table
      console.log(person.barangay);
      if (person.barangay !== undefined)
        await connection.query(
          "INSERT INTO persons_address (fk_person_id, fk_barangay_id, full_address, sitio) VALUES (?, ?, ?, ?)",
          [
            personId,
            person.barangay,
            person.full_address || "",
            person.sitio || "",
          ]
        );

      // Insert into phone_numbers table
      const [phone_numberRows] = (await connection.query(
        "INSERT INTO phone_numbers (contact_number) VALUES (?)",
        [person.contact_number]
      )) as [ResultSetHeader, FieldPacket[]];

      const phone_number_id = phone_numberRows.insertId;

      await connection.query(
        "INSERT INTO persons_phone_numbers (fk_person_id, fk_phone_number_id) VALUES (?, ?)",
        [personId, phone_number_id]
      );

      console.log(person.email_address);
      // Insert into email_address table
      if (person.email_address !== undefined) {
        const [email_addressRows] = (await connection.query(
          "INSERT INTO email_addresses (email_address) VALUES (?)",
          [person.email_address]
        )) as [ResultSetHeader, FieldPacket[]];

        const email_address_id = email_addressRows.insertId;

        await connection.query(
          "INSERT INTO persons_email_addresses (fk_person_id, fk_email_address_id) VALUES (?, ?)",
          [personId, email_address_id]
        );
      }

      if (person.isUnemployed === "false")
        await connection.query(
          "INSERT INTO persons_offices (fk_person_id, fk_office_id) VALUES (?, ?)",
          [personId, person.office]
        );

      connection.release();

      return reply.code(200).send({ message: "Person created successfully" });
    },
  });
}

export default routes;
