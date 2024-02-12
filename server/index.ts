import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import databaseConfig from "./config/database";
import trainingRoute from "./routes/trainings";
import addressRoute from "./routes/address";
import agenciesRoute from "./routes/agencies";

import "dotenv/config";

const fastify = Fastify({ logger: true });

fastify.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});
fastify.register(databaseConfig);
fastify.register(trainingRoute, { prefix: "/api/training" });
fastify.register(addressRoute, { prefix: "/api/address" });
fastify.register(agenciesRoute, { prefix: "/api/agencies" });

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
