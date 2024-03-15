"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function routes(fastify, options) {
    fastify.addHook("onResponse", async (request, reply) => {
        fastify.log.info(`Responding: ${reply.elapsedTime}`);
    });
    fastify.get("/", {
        handler: async (request, reply) => {
            const connection = await fastify.mysql.getConnection();
            const [rows, fields] = await connection.query("SELECT LDRRMP.*, LDRRMP_pillars.*, LDRRMP_objectives.*, LDRRMP_outcomes.*, CONCAT(LDRRMP_objectives.objective_number, '.', LDRRMP_programs_projects.pp_number, ' ',LDRRMP_programs_projects.program_project) AS program_project, LDRRMP_programs_projects.status FROM LDRRMP INNER JOIN LDRRMP_pillars ON LDRRMP.fk_pillar_id = LDRRMP_pillars.pillar_id INNER JOIN LDRRMP_objectives ON LDRRMP.fk_objective_id = LDRRMP_objectives.objective_id INNER JOIN LDRRMP_outcomes ON LDRRMP.fk_outcome_id = LDRRMP_outcomes.outcome_id INNER JOIN LDRRMP_programs_projects ON LDRRMP.fk_program_project_id = LDRRMP_programs_projects.program_project_id;;");
            connection.release();
            return reply.code(200).send(rows);
        },
    });
}
exports.default = routes;
