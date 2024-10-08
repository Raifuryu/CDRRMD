import fastifyMysql, { MySQLPool, MySQLPromisePool } from "@fastify/mysql";
import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";

declare module "fastify" {
  interface FastifyInstance {
    mysql: MySQLPromisePool;
  }
}

async function dbConnector(fastify: FastifyInstance) {
  fastify.register(fastifyMysql, {
    connectionString: `mysql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
    promise: true,
  });

  fastify.log.info("CONNECTED TO DB");
}

export default fastifyPlugin(dbConnector);
