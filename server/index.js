"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const database_1 = __importDefault(require("./config/database"));
const trainings_1 = __importDefault(require("./routes/trainings"));
const address_1 = __importDefault(require("./routes/address"));
const agencies_1 = __importDefault(require("./routes/agencies"));
require("dotenv/config");
const fastify = (0, fastify_1.default)({ logger: true });
fastify.register(cors_1.default, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
});
fastify.register(database_1.default);
fastify.register(trainings_1.default, { prefix: "/api/training" });
fastify.register(address_1.default, { prefix: "/api/address" });
fastify.register(agencies_1.default, { prefix: "/api/agencies" });
async function main() {
    fastify.listen({ port: Number(process.env.API_PORT), host: process.env.API_HOST }, function (err, address) {
        if (err) {
            fastify.log.error(err);
            process.exit(1);
        }
    });
}
["SIGINT", "SIGTERM"].forEach((signal) => {
    process.on(signal, async () => {
        await fastify.close();
        process.exit(0);
    });
});
main();
