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
  fastify.get("/", {
    handler: async (
      request: FastifyRequest<{
        Body: { trainingName: string };
      }>,
      reply: FastifyReply
    ) => {
      fastify.addHook(
        "onResponse",
        async (request: FastifyRequest, reply: FastifyReply) => {
          fastify.log.info(`Responding: ${reply.elapsedTime}`);
        }
      );

      const connection = await fastify.mysql.getConnection();

      const [rows, fields] = await connection.query("SELECT * FROM trainings");
      connection.release();
      return reply.code(200).send(rows);
    },
  });
}

export default routes;
