"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function routes(fastify, options) {
    fastify.get("/", async (request, reply) => {
        return { hello: "world" };
    });
}
exports.default = routes;
