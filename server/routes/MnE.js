"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function routes(fastify, options) {
    fastify.addHook("onResponse", async (request, reply) => {
        fastify.log.info(`Responding: ${reply.elapsedTime}`);
    });
    fastify.get("/", {
        handler: async (request, reply) => {
            const connection = await fastify.mysql.getConnection();
            const [rows, fields] = await connection.query("SELECT LDRRMP.*, pillars.*, objectives.*, outcomes.*, CONCAT(objectives.objective_number, '.', programs_projects.pp_number, ' ',programs_projects.program_project) AS program_project, programs_projects.status FROM LDRRMP INNER JOIN pillars ON LDRRMP.fk_pillar_id = pillars.pillar_id INNER JOIN objectives ON LDRRMP.fk_objective_id = objectives.objective_id INNER JOIN outcomes ON LDRRMP.fk_outcome_id = outcomes.outcome_id INNER JOIN programs_projects ON LDRRMP.fk_program_project_id = programs_projects.program_project_id;;");
            connection.release();
            return reply.code(200).send(rows);
        },
    });
}
exports.default = routes;
