"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function routes(fastify, options) {
    fastify.addHook("onResponse", async (request, reply) => {
        fastify.log.info(`Responding: ${reply.elapsedTime}`);
    });
    fastify.get("/", {
        handler: async (request, reply) => {
            const connection = await fastify.mysql.getConnection();
            const [rows, fields] = await connection.query("SELECT * FROM persons INNER JOIN phone_numbers ON phone_numbers.fk_person_id = persons.person_id INNER JOIN persons_offices ON persons_offices.fk_person_id = persons.person_id INNER JOIN offices ON offices.office_id = persons_offices.fk_office_id;");
            connection.release();
            return reply.code(200).send(rows);
        },
    });
}
exports.default = routes;
