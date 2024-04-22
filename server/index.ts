import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import fastifyMultipart from "@fastify/multipart";
import cors from "@fastify/cors";
import databaseConfig from "./config/database";
import trainingRoute from "./routes/trainings";
import addressRoute from "./routes/address";
import agenciesRoute from "./routes/agencies";
import personsRoute from "./routes/persons";
import MnE from "./routes/MnE";
import dataBanking from "./routes/dataBanking";
import directory from "./routes/directory";

import "dotenv/config";

const fastify = Fastify({ logger: true });

fastify.register(fastifyMultipart, {
  limits: {
    fileSize: 100000000, // For multipart forms, the max file size in bytes
    files: 3, // Max number of file fields
  },
});

fastify.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});
fastify.register(databaseConfig);

fastify.get("/", {
  handler: async () => {
    return { success: true };
  },
});

fastify.register(personsRoute, { prefix: "/api/persons" });
fastify.register(trainingRoute, { prefix: "/api/training" });
fastify.register(addressRoute, { prefix: "/api/address" });
fastify.register(agenciesRoute, { prefix: "/api/agencies" });
fastify.register(MnE, { prefix: "/api/monitoring-and-evaluation" });
fastify.register(dataBanking, { prefix: "/api/file" });
fastify.register(directory, { prefix: "/api/directory" });

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
