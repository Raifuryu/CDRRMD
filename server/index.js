"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const multipart_1 = __importDefault(require("@fastify/multipart"));
const cors_1 = __importDefault(require("@fastify/cors"));
const database_1 = __importDefault(require("./config/database"));
const trainings_1 = __importDefault(require("./routes/trainings"));
const address_1 = __importDefault(require("./routes/address"));
const agencies_1 = __importDefault(require("./routes/agencies"));
const persons_1 = __importDefault(require("./routes/persons"));
const MnE_1 = __importDefault(require("./routes/MnE"));
const dataBanking_1 = __importDefault(require("./routes/dataBanking"));
const directory_1 = __importDefault(require("./routes/directory"));
require("dotenv/config");
const fastify = (0, fastify_1.default)({ logger: true });
fastify.register(multipart_1.default, {
    limits: {
        fileSize: 100000000, // For multipart forms, the max file size in bytes
        files: 3, // Max number of file fields
    },
});
fastify.register(cors_1.default, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
});
fastify.register(database_1.default);
fastify.get("/", {
    handler: async () => {
        return { success: true };
    },
});
fastify.register(persons_1.default, { prefix: "/api/persons" });
fastify.register(trainings_1.default, { prefix: "/api/training" });
fastify.register(address_1.default, { prefix: "/api/address" });
fastify.register(agencies_1.default, { prefix: "/api/agencies" });
fastify.register(MnE_1.default, { prefix: "/api/monitoring-and-evaluation" });
fastify.register(dataBanking_1.default, { prefix: "/api/file" });
fastify.register(directory_1.default, { prefix: "/api/directory" });
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
