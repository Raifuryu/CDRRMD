import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteShorthandOptions,
} from "fastify";

async function routes(
  fastify: FastifyInstance,
  options: RouteShorthandOptions
) {
  fastify.addHook(
    "onResponse",
    async (request: FastifyRequest, reply: FastifyReply) => {
      fastify.log.info(`Responding: ${reply.elapsedTime}`);
    }
  );

  fastify.get("/", {
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const connection = await fastify.mysql.getConnection();

      const [rows, fields] = await connection.query(
        "SELECT * FROM persons INNER JOIN phone_numbers ON phone_numbers.fk_person_id = persons.person_id INNER JOIN persons_offices ON persons_offices.fk_person_id = persons.person_id INNER JOIN offices ON offices.office_id = persons_offices.fk_office_id;"
      );
      connection.release();

      return reply.code(200).send(rows);
    },
  });
}

export default routes;
