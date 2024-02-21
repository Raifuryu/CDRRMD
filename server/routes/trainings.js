"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const util_1 = __importDefault(require("util"));
const stream_1 = require("stream");
const pump = util_1.default.promisify(stream_1.pipeline);
async function routes(fastify, options) {
    fastify.addHook("onResponse", async (request, reply) => {
        fastify.log.info(`Responding: ${reply.elapsedTime}`);
    });
    fastify.get("/", {
        handler: async (request, reply) => {
            const connection = await fastify.mysql.getConnection();
            const [rows, fields] = await connection.query("SELECT * FROM trainings");
            connection.release();
            return reply.code(200).send(rows);
        },
    });
    fastify.get("/:id", {
        handler: async (request, reply) => {
            const id = request.params.id;
            const connection = await fastify.mysql.getConnection();
            const [rows, fields] = await connection.query("SELECT * FROM trainings WHERE id = ?", [id]);
            connection.release();
            return reply.code(200).send(rows);
        },
    });
    fastify.get("/:id/participants", {
        handler: async (request, reply) => {
            const id = request.params.id;
            let participants = [];
            const connection = await fastify.mysql.getConnection();
            const [rows, fields] = await connection.query("SELECT * FROM trainings_participants LEFT JOIN persons ON trainings_participants.fk_participant_id = persons.id LEFT JOIN persons_address ON persons_address.fk_person_id = persons.id LEFT JOIN barangay ON persons_address.fk_barangay_id = barangay.id LEFT JOIN phone_numbers ON phone_numbers.fk_person_id = persons.id LEFT JOIN email_address ON email_address.fk_person_id = persons.id WHERE trainings_participants.fk_training_id = ?", [id]);
            connection.release();
            reply.code(200).send(rows);
        },
    });
    fastify.get("/:id/documentations", {
        handler: async (request, reply) => {
            let start_date = new Date();
            const id = request.params.id;
            const connection = await fastify.mysql.getConnection();
            const [row, fields] = (await connection.query(`SELECT start_date FROM trainings WHERE id = ${id}`));
            start_date = new Date(row[0].start_date);
            console.log(__dirname);
            fs_1.default.readdir(`../client/public/uploads/trainings/${new Date(start_date).getFullYear()}/${id}/`, (err, files) => {
                console.log(JSON.stringify(files));
                reply.send(JSON.stringify(files));
            });
        },
    });
    fastify.post("/:id/upload/AAR", {
        handler: async (request, reply) => {
            let start_date = new Date();
            const id = request.params.id;
            const data = await request.file();
            const connection = await fastify.mysql.getConnection();
            const [row, fields] = (await connection.query(`SELECT start_date FROM trainings WHERE id = ${id}`));
            start_date = new Date(row[0].start_date);
            // Check if directory exists, if not create it
            const directoryPath = `../client/public/uploads/trainings/${start_date.getFullYear()}/${id}`;
            if (!fs_1.default.existsSync(directoryPath)) {
                await fs_1.default.promises.mkdir(directoryPath, { recursive: true });
            }
            // Handle the case where data is undefined
            if (data) {
                const [rows, fields] = await connection.query(`UPDATE trainings SET after_activity_report = 'true' WHERE id = ${id}`);
                const filePath = `${directoryPath}/AAR.pdf`;
                await fs_1.default.unlink(filePath, (err) => { });
                const writeStream = fs_1.default.createWriteStream(filePath);
                data.file.pipe(writeStream);
                // Return response once file is uploaded
                data.file.on("end", () => {
                    reply.code(200).send({ success: true });
                });
            }
            else {
                reply
                    .code(400)
                    .send({ success: false, message: "No file data received" });
            }
        },
    });
    fastify.post("/:id/upload/documentation", {
        handler: async (request, reply) => {
            let start_date = new Date();
            const id = request.params.id;
            const data = await request.files();
            const connection = await fastify.mysql.getConnection();
            const [row, fields] = (await connection.query(`SELECT start_date FROM trainings WHERE id = ${id}`));
            start_date = new Date(row[0].start_date);
            // Check if directory exists, if not create it
            const directoryPath = `../client/public/uploads/trainings/${start_date.getFullYear()}/${id}`;
            // Check if directory exists, if not create it
            if (!fs_1.default.existsSync(directoryPath)) {
                await fs_1.default.promises.mkdir(directoryPath, { recursive: true });
            }
            // Handle the case where data is undefined
            if (data) {
                for await (const part of data) {
                    const [rows, fields] = await connection.query(`UPDATE trainings SET documentations = 'true' WHERE id = ${id}`);
                    const filePath = `${directoryPath}/${part.filename}`;
                    const writeStream = fs_1.default.createWriteStream(filePath);
                    part.file.pipe(writeStream);
                }
                reply.code(200).send({ success: true });
            }
            else {
                reply
                    .code(400)
                    .send({ success: false, message: "No file data received" });
            }
        },
    });
    fastify.post("/create", {
        handler: async (request, reply) => {
            const training = request.body;
            const connection = await fastify.mysql.getConnection();
            const [rows, fields] = await connection.query("INSERT INTO trainings(fk_office_id, title, venue, trainer, contact_person, contact_person_number, remarks, start_date, end_date) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)", [
                training.trainee,
                training.title,
                training.venue,
                training.trainer,
                training.contact_person,
                training.contact_person_number,
                training.remarks,
                training.start_date,
                training.end_date,
            ]);
            connection.release();
            reply.code(201).send("success");
        },
    });
    fastify.post("/:id/create/participants", {
        handler: async (request, reply) => {
            const id = request.params.id;
            const participant = request.body;
            const connection = await fastify.mysql.getConnection();
            participant.map(async (value) => {
                const [rows, fields] = await connection.query("INSERT INTO trainings_participants(fk_training_id, fk_participant_id) VALUES(?,?)", [id, value]);
            });
            connection.release();
            reply.code(201).send("success");
        },
    });
}
exports.default = routes;
