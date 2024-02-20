"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function routes(fastify, options) {
    fastify.addHook("onResponse", async (request, reply) => {
        fastify.log.info(`Responding: ${reply.elapsedTime}`);
    });
    fastify.get("/", {
        handler: async (request, reply) => {
            const connection = await fastify.mysql.getConnection();
            const [rows, fields] = await connection.query("SELECT * FROM offices");
            connection.release();
            return reply.code(200).send(rows);
        },
    });
    fastify.get("/:id", {
        handler: async (request, reply) => {
            const id = request.params.id;
            const connection = await fastify.mysql.getConnection();
            const [rows, fields] = await connection.query("SELECT * FROM offices WHERE id = ?", [id]);
            connection.release();
            return reply.code(200).send(rows);
        },
    });
    fastify.post("/create", {
        handler: async (request, reply) => {
            const organization = request.body;
            const connection = await fastify.mysql.getConnection();
            const [row, fields] = await connection.query("INSERT INTO offices (office_name, acronym, office_contact_number, office_email_address, full_address, sitio, fk_barangay_id ) VALUES (?, ?, ?, ?, ?, ?, ?)", [
                organization.organization_name,
                organization.acronym,
                organization.contact_number,
                organization.email_address,
                organization.full_address,
                organization.sitio,
                organization.barangay,
            ]);
            connection.release();
            reply.code(201).send("Success");
        },
    });
}
exports.default = routes;
