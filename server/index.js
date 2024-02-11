"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const mysql_1 = __importDefault(require("@fastify/mysql"));
const trainings_1 = __importDefault(require("./routes/trainings"));
require("dotenv/config");
const fastify = (0, fastify_1.default)({ logger: true });
fastify.register(mysql_1.default, {
    connectionString: `mysql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
});
fastify.register(trainings_1.default, { prefix: "/training" });
fastify.listen({ port: 3000, host: "localhost" }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
