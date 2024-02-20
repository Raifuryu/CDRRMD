"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function routes(fastify, options) {
    fastify.addHook("onResponse", async (request, reply) => {
        fastify.log.info(`Responding: ${reply.elapsedTime}`);
    });
    fastify.get("/", {
        handler: async (request, reply) => {
            const connection = await fastify.mysql.getConnection();
            const [rows, fields] = await connection.query("SELECT * FROM policies");
            connection.release();
            return reply.code(200).send(rows);
        },
    });
    fastify.post("/create", {
        handler: async (request, reply) => {
            const connection = await fastify.mysql.getConnection();
            const [row, fields] = await connection.query("INSERT INTO policies (policy_number, name, date_approved, category, type) VALUES (?, ?, ?, ?, ?)", [
                request.body.number,
                request.body.name,
                request.body.dateApproved,
                request.body.category,
                request.body.type,
            ]);
            connection.release();
            reply.code(201).send("Success");
        },
    });
}
exports.default = routes;
