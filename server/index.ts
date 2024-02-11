import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import databaseConfig from "./config/database";
import trainingRoute from "./routes/trainings";

import "dotenv/config";

const fastify = Fastify({ logger: true });

fastify.register(databaseConfig);
fastify.register(trainingRoute, { prefix: "/api/training" });

async function main() {
  fastify.listen(
    { port: Number(process.env.API_PORT), host: process.env.API_HOST },
    function (err, address) {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }
    }
  );
}

["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, async () => {
    await fastify.close();

    process.exit(0);
  });
});

main();
