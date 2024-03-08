"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function routes(fastify, options) {
    fastify.addHook("onResponse", async (request, reply) => {
        fastify.log.info(`Responding: ${reply.elapsedTime}`);
    });
    fastify.get("/barangays", {
        handler: async (request, reply) => {
            const connection = await fastify.mysql.getConnection();
            const [rows] = await connection.query("SELECT * FROM address_barangays");
            connection.release();
            return reply.code(200).send(rows);
        },
    });
}
exports.default = routes;
