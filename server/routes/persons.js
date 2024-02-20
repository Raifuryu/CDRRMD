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
            try {
                await connection.beginTransaction(); // Start a transaction
                // Insert into persons table
                const [personRows, personFields] = (await connection.query("INSERT INTO persons (first_name, middle_name, last_name, extension_name, nickname, occupation, birth_date, birth_place, blood_type, gender, civil_status, isLGBTQ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
                    participantsDetails.first_name,
                    participantsDetails.middle_name || "",
                    participantsDetails.last_name,
                    participantsDetails.extension_name || "",
                    participantsDetails.nickname,
                    participantsDetails.occupation,
                    participantsDetails.birth_date,
                    participantsDetails.birth_place,
                    participantsDetails.blood_type,
                    participantsDetails.gender,
                    participantsDetails.civil_status,
                    participantsDetails.isLGBTQ,
                ]));
                // Retrieve the ID of the newly inserted person
                const personId = personRows.insertId;
                // Insert into persons_address table
                await connection.query("INSERT INTO persons_address (fk_person_id, fk_barangay_id, street, sitio) VALUES (?, ?, ?, ?)", [
                    personId,
                    participantsDetails.barangay,
                    participantsDetails.street || "",
                    participantsDetails.sitio || "",
                ]);
                // Insert into phone_numbers table
                await connection.query("INSERT INTO phone_numbers (fk_person_id, contact_number) VALUES (?, ?)", [personId, participantsDetails.contact_number]);
                // Insert into email_address table
                await connection.query("INSERT INTO email_address (fk_person_id, email_address) VALUES (?, ?)", [personId, participantsDetails.email_address]);
                await connection.commit(); // Commit the transaction
                return reply.code(200).send({ message: "Person created successfully" });
            }
            catch (error) {
                await connection.rollback(); // Rollback the transaction if an error occurs
                throw error;
            }
            finally {
                connection.release(); // Release the connection in any case
            }
        },
    });
}
exports.default = routes;
