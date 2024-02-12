"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("@fastify/mysql"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
async function dbConnector(fastify) {
    fastify.register(mysql_1.default, {
        connectionString: `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
        promise: true,
    });
    fastify.log.info("CONNECTED TO DB");
}
exports.default = (0, fastify_plugin_1.default)(dbConnector);
