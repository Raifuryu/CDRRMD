"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function routes(fastify) {
    fastify.addHook("onResponse", async (request, reply) => {
        fastify.log.info(`Responding: ${reply.elapsedTime}`);
    });
    fastify.get("/", {
        handler: async (request, reply) => {
            const connection = await fastify.mysql.getConnection();
            const [rows] = await connection.query("SELECT * FROM offices");
            connection.release();
            return reply.code(200).send(rows);
        },
    });
    fastify.get("/:id", {
        handler: async (request, reply) => {
            const id = request.params.id;
            const connection = await fastify.mysql.getConnection();
            const [rows] = await connection.query("SELECT * FROM offices WHERE office_id = ?", [id]);
            connection.release();
            return reply.code(200).send(rows);
        },
    });
    fastify.get("/type/:type", {
        handler: async (request, reply) => {
            // 1 = government
            // 2 = CSO
            // 3 = Semi-gov
            const type = request.params.type;
            const connection = await fastify.mysql.getConnection();
            console.log(type);
            const [rows] = await connection.query("SELECT * FROM offices_categories INNER JOIN categories ON offices_categories.fk_category_id = categories.category_id INNER JOIN offices ON offices_categories.fk_office_id = offices.office_id WHERE category_id = ?", [type]);
            connection.release();
            return reply.code(200).send(rows);
        },
    });
    fastify.post("/create", {
        handler: async (request, reply) => {
            const organization = request.body;
            const connection = await fastify.mysql.getConnection();
            const [row] = (await connection.query("SELECT * FROM offices WHERE office_name = ? OR acronym = ?", [organization.organization_name, organization.acronym]));
            if (row.length === 0) {
                const [result] = (await connection.query("INSERT INTO offices (office_name, acronym) VALUES (?, ?)", [organization.organization_name, organization.acronym || ""]));
                await connection.query("INSERT INTO offices_addresses (fk_office_id, full_address, sitio, fk_barangay_id) VALUES(?, ?, ?, ?)", [
                    result.insertId,
                    organization.full_address || "",
                    organization.sitio || "",
                    organization.barangay,
                ]);
                await connection.query("INSERT INTO offices_categories (fk_office_id, fk_category_id) VALUES(?, ?)", [result.insertId, organization.organization_type]);
                const [email_id] = (await connection.query("INSERT INTO email_addresses (email_address	) VALUES(?)", [organization.email_address]));
                await connection.query("INSERT INTO offices_email_addresses (fk_office_id, fk_email_address_id	) VALUES(?, ?)", [result.insertId, email_id.insertId]);
                const [phone_number_id] = (await connection.query("INSERT INTO phone_numbers (contact_number) VALUES(?)", [organization.contact_number]));
                await connection.query("INSERT INTO offices_phone_numbers (fk_office_id, fk_phone_number_id	) VALUES(?, ?)", [result.insertId, phone_number_id.insertId]);
                connection.release();
                reply.code(201).send("Success");
            }
        },
    });
}
exports.default = routes;
