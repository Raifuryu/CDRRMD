"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function routes(fastify, options) {
    fastify.addHook("onResponse", async (request, reply) => {
        fastify.log.info(`Responding: ${reply.elapsedTime}`);
    });
    fastify.get("/", {
        handler: async (request, reply) => {
            const connection = await fastify.mysql.getConnection();
            const [rows, fields] = await connection.query("SELECT * FROM persons");
            connection.release();
            return reply.code(200).send(rows);
        },
    });
    fastify.post("/create", {
        handler: async (request, reply) => {
            const participantsDetails = request.body;
            const connection = await fastify.mysql.getConnection();
            // Insert into persons table
            const [personRows] = (await connection.query("INSERT INTO persons (first_name, middle_name, last_name, extension_name, nickname, occupation, birth_date, birth_place, blood_type, gender, civil_status, isLGBTQ, isPWD) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
                participantsDetails.first_name,
                participantsDetails.middle_name || "",
                participantsDetails.last_name,
                participantsDetails.extension_name || "",
                participantsDetails.nickname,
                participantsDetails.occupation || "",
                participantsDetails.birth_date,
                participantsDetails.birth_place,
                participantsDetails.blood_type,
                participantsDetails.gender,
                participantsDetails.civil_status,
                participantsDetails.isLGBTQ,
                participantsDetails.isPWD,
            ]));
            // Retrieve the ID of the newly inserted person
            const personId = personRows.insertId;
            // Insert into persons_address table
            await connection.query("INSERT INTO persons_address (fk_person_id, fk_barangay_id, full_address, sitio) VALUES (?, ?, ?, ?)", [
                personId,
                participantsDetails.barangay,
                participantsDetails.full_address || "",
                participantsDetails.sitio || "",
            ]);
            // Insert into phone_numbers table
            const [phone_numberRows] = (await connection.query("INSERT INTO phone_numbers (contact_number) VALUES (?)", [participantsDetails.contact_number]));
            const phone_number_id = phone_numberRows.insertId;
            await connection.query("INSERT INTO persons_phone_numbers (fk_person_id, fk_phone_number_id) VALUES (?, ?)", [personId, phone_number_id]);
            // Insert into email_address table
            const [email_addressRows] = (await connection.query("INSERT INTO email_addresses (email_address) VALUES (?)", [participantsDetails.email_address]));
            const email_address_id = email_addressRows.insertId;
            await connection.query("INSERT INTO persons_email_addresses (fk_person_id, fk_email_address_id) VALUES (?, ?)", [personId, email_address_id]);
            if (participantsDetails.isUnemployed === "false")
                await connection.query("INSERT INTO persons_offices (fk_person_id, fk_office_id) VALUES (?, ?)", [personId, participantsDetails.office]);
            connection.release();
            return reply.code(200).send({ message: "Person created successfully" });
        },
    });
}
exports.default = routes;
