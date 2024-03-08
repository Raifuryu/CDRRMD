"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function routes(fastify, options) {
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
            const [rows] = await connection.query("SELECT * FROM offices_categories INNER JOIN categories ON offices_categories.fk_category_id = categories.category_id INNER JOIN offices ON offices_categories.fk_office_id = offices.office_id WHERE category_id = 1", [type]);
            connection.release();
            return reply.code(200).send(rows);
        },
    });
    fastify.post("/create", {
        handler: async (request, reply) => {
            const organization = request.body;
            const connection = await fastify.mysql.getConnection();
            const [row] = (await connection.query("SELECT * FROM offices WHERE office_name = ? OR acronym = ?", [organization.organization_name, organization.acronym]));
            if (row[0].isEmpty()) {
                await connection.query("INSERT INTO offices (office_name, acronym, office_contact_number, office_email_address, full_address, sitio, fk_barangay_id ) VALUES (?, ?, ?, ?, ?, ?, ?)", [
                    organization.organization_name,
                    organization.acronym || "",
                    organization.contact_number,
                    organization.email_address,
                    organization.full_address || "",
                    organization.sitio || "",
                    organization.barangay,
                ]);
                connection.release();
                reply.code(201).send("Success");
            }
        },
    });
}
exports.default = routes;
