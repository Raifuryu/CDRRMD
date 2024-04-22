"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const json2csv_1 = require("json2csv");
const dayjs_1 = __importDefault(require("dayjs"));
const fs_1 = __importDefault(require("fs"));
const util_1 = __importDefault(require("util"));
const path_1 = __importDefault(require("path"));
const pump = util_1.default.promisify(stream_1.pipeline);
async function routes(fastify, options) {
    fastify.addHook("onResponse", async (request, reply) => {
        fastify.log.info(`Responding: ${reply.elapsedTime}`);
    });
    fastify.get("/", {
        handler: async (request, reply) => {
            const connection = await fastify.mysql.getConnection();
            const [rows] = await connection.query("SELECT trainings.*, ( SELECT COUNT(*) FROM trainings_participants WHERE trainings_participants.fk_training_id = trainings.training_id ) AS pax, trainings_courses.*, offices.office_name AS trainee FROM trainings LEFT JOIN trainings_courses ON trainings.fk_course_id = trainings_courses.training_course_id LEFT JOIN trainings_trainees ON trainings.training_id = trainings_trainees.fk_training_id LEFT JOIN offices ON trainings_trainees.fk_trainee_id = offices.office_id WHERE trainings.status != 'Deleted' ORDER BY trainings.start_date DESC");
            connection.release();
            return rows;
        },
    });
    fastify.get("/courses", {
        handler: async (request, reply) => {
            const connection = await fastify.mysql.getConnection();
            const [rows, fields] = await connection.query("SELECT * FROM trainings_courses");
            connection.release();
            return reply.code(200).send(rows);
        },
    });
    fastify.get("/:id", {
        handler: async (request, reply) => {
            const id = request.params.id;
            const connection = await fastify.mysql.getConnection();
            const [rows] = await connection.query("SELECT trainings.*, (SELECT COUNT(*) FROM trainings_participants WHERE trainings_participants.fk_training_id = trainings.training_id) AS pax, trainings_courses.*, offices.office_name AS trainer FROM trainings LEFT JOIN trainings_courses ON trainings.fk_course_id = trainings_courses.training_course_id LEFT JOIN offices ON trainings.fk_trainer_id = offices.office_id WHERE trainings.training_id = ?;", [id]);
            connection.release();
            reply.code(200).send(rows);
        },
    });
    fastify.get("/:id/trainee", {
        handler: async (request, reply) => {
            const id = request.params.id;
            const connection = await fastify.mysql.getConnection();
            const [row] = (await connection.query("SELECT * FROM trainings_trainees WHERE fk_training_id = ?", [id]));
            if (row.length !== 0) {
                const [rows] = await connection.query("SELECT * FROM offices LEFT JOIN offices_addresses ON offices_addresses.fk_office_id = offices.office_id LEFT JOIN offices_phone_numbers ON offices_phone_numbers.fk_office_id = offices.office_id LEFT JOIN phone_numbers ON phone_numbers.phone_number_id = offices_phone_numbers.fk_phone_number_id LEFT JOIN offices_email_addresses ON offices_email_addresses.fk_office_id = offices.office_id LEFT JOIN email_addresses ON email_addresses.email_address_id = offices_email_addresses.office_email_address_id WHERE office_id = ?;", [row[0].fk_trainee_id]);
                reply.code(200).send(rows);
            }
            else {
                reply.code(200).send({ found: false });
            }
            connection.release();
        },
    });
    fastify.get("/:id/participants", {
        handler: async (request, reply) => {
            const id = request.params.id;
            const connection = await fastify.mysql.getConnection();
            const [rows] = await connection.query("SELECT * FROM trainings_participants LEFT JOIN persons ON persons.person_id = trainings_participants.fk_participant_id LEFT JOIN persons_address ON persons_address.fk_person_id = persons.person_id LEFT JOIN address_barangays ON address_barangays.barangay_id = persons_address.fk_barangay_id LEFT JOIN persons_phone_numbers ON persons_phone_numbers.fk_person_id = persons.person_id LEFT JOIN phone_numbers ON phone_numbers.phone_number_id = persons_phone_numbers.fk_phone_number_id LEFT JOIN persons_email_addresses ON persons_email_addresses.fk_person_id = persons.person_id LEFT JOIN email_addresses ON email_addresses.email_address_id = persons_email_addresses.fk_email_address_id WHERE trainings_participants.fk_training_id = ?;", [id]);
            connection.release();
            reply.code(200).send(rows);
        },
    });
    fastify.get("/:year/:id/AAR", {
        handler: async (request, reply) => {
            const id = request.params.id;
            const year = request.params.year;
            const stream = fs_1.default.createReadStream(`./uploads/trainings/${year}/${id}/AAR.pdf`);
            reply.header("Content-Type", "application/pdf");
            await reply.send(stream);
        },
    });
    fastify.get("/:year/:id/documentations/:documentationNumber", {
        handler: async (request, reply) => {
            const id = request.params.id;
            const year = request.params.year;
            const documentationNumber = request.params.documentationNumber;
            const stream = fs_1.default.createReadStream(`./uploads/trainings/${year}/${id}/${documentationNumber}.jpg`);
            reply.header("Content-Type", "image/jpeg");
            await reply.send(stream);
        },
    });
    fastify.get("/:id/certificates", {
        handler: async (request, reply) => {
            const id = request.params.id;
            const connection = await fastify.mysql.getConnection();
            const [rows] = (await connection.query("SELECT CONCAT_WS(' ', persons.first_name, COALESCE(persons.middle_name, ''), persons.last_name, COALESCE(persons.extension_name, '')) AS full_name, trainings_participants.certificate_code FROM trainings_participants LEFT JOIN persons ON persons.person_id = trainings_participants.fk_participant_id WHERE fk_training_id = ?;", [id]));
            const csv = (0, json2csv_1.parse)(rows);
            return reply
                .header("Content-Type", "text/csv")
                .header("Content-Disposition", `attachment; filename="${id}.csv"`)
                .send(csv);
        },
    });
    fastify.post("/:id/upload/AAR", {
        handler: async (request, reply) => {
            let start_date = new Date();
            const id = request.params.id;
            const data = await request.file();
            const connection = await fastify.mysql.getConnection();
            const [row] = (await connection.query(`SELECT start_date FROM trainings WHERE training_id = ${id}`));
            start_date = new Date(row[0].start_date);
            // Check if directory exists, if not create it
            const directoryPath = `./uploads/trainings/${start_date.getFullYear()}/${id}`;
            if (!fs_1.default.existsSync(directoryPath)) {
                await fs_1.default.promises.mkdir(directoryPath, { recursive: true });
            }
            // Handle the case where data is undefined
            if (data) {
                await connection.query(`UPDATE trainings SET after_activity_report = 'true' WHERE training_id = ${id}`);
                const filePath = `${directoryPath}/AAR.pdf`;
                await fs_1.default.unlink(filePath, (err) => { });
                const writeStream = fs_1.default.createWriteStream(filePath);
                data.file.pipe(writeStream);
                const [rows] = (await connection.query(`SELECT * FROM trainings WHERE after_activity_report = 'true' AND documentations = 'true' AND training_id = ${id}`));
                if (rows[0]) {
                    await connection.query(`UPDATE trainings SET status = "Completed" WHERE training_id = ${id}`);
                }
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
            const [row, fields] = (await connection.query(`SELECT start_date FROM trainings WHERE training_id = ${id}`));
            start_date = new Date(row[0].start_date);
            // Check if directory exists, if not create it
            const directoryPath = `./uploads/trainings/${start_date.getFullYear()}/${id}`;
            // Check if directory exists, if not create it
            if (!fs_1.default.existsSync(directoryPath)) {
                await fs_1.default.promises.mkdir(directoryPath, { recursive: true });
            }
            // Handle the case where data is undefined
            if (data) {
                for await (const part of data) {
                    const filename = path_1.default.join(directoryPath, part.filename);
                    await pump(part.file, fs_1.default.createWriteStream(filename));
                }
                await connection.query(`UPDATE trainings SET documentations = 'true' WHERE training_id = ${id}`);
                const [rows] = (await connection.query(`SELECT * FROM trainings WHERE after_activity_report = 'true' AND documentations = 'true' AND training_id = ${id}`));
                if (rows[0]) {
                    await connection.query(`UPDATE trainings SET status = "Completed" WHERE training_id = ${id}`);
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
            const [row] = (await connection.query("INSERT INTO trainings(fk_trainer_id, fk_course_id, venue, contact_person, contact_person_number, remarks, start_date, end_date) VALUES(?, ?, ?, ?, ?, ?, ?, ?)", [
                training.trainer,
                training.course,
                training.venue,
                training.contact_person,
                training.contact_person_number,
                training.remarks || "",
                training.start_date,
                training.end_date,
            ]));
            await connection.query("INSERT INTO trainings_trainees(fk_training_id, fk_trainee_id) VALUES(?, ?)", [row.insertId, training.trainee]);
            connection.release();
            reply.code(201).send({ success: true });
        },
    });
    fastify.post("/create/mixed", {
        handler: async (request, reply) => {
            const training = request.body;
            const connection = await fastify.mysql.getConnection();
            const [row] = (await connection.query("INSERT INTO trainings(fk_trainer_id, fk_course_id, venue, contact_person, contact_person_number, remarks, start_date, end_date) VALUES(?, ?, ?, ?, ?, ?, ?, ?)", [
                training.trainer,
                training.course,
                training.venue,
                training.contact_person,
                training.contact_person_number,
                training.remarks || "",
                training.start_date,
                training.end_date,
            ]));
            connection.release();
            reply.code(201).send({ success: true });
        },
    });
    fastify.post("/:id/create/participants", {
        handler: async (request, reply) => {
            const id = request.params.id;
            const participant = request.body;
            const connection = await fastify.mysql.getConnection();
            for (const value of participant) {
                const [trainingRows] = (await connection.query("SELECT * FROM trainings WHERE training_id = ?", [id]));
                const [courseRow] = (await connection.query("SELECT * FROM trainings_courses WHERE training_course_id = ?", [trainingRows[0].fk_course_id]));
                const [trainingParticipantRow] = (await connection.query("SELECT MAX(training_participant_number) AS largest_participant_number FROM trainings_participants WHERE training_year = ? AND training_abbreviation = ?", [
                    (0, dayjs_1.default)(trainingRows[0].start_date).year(),
                    courseRow[0].course_abbreviation,
                ]));
                const [officeRow] = (await connection.query("SELECT * FROM offices WHERE office_id = ?", [trainingRows[0].fk_trainer_id]));
                const participant_number = (trainingParticipantRow[0].largest_participant_number || 0) + 1;
                const certificate_number = officeRow[0].acronym +
                    "-" +
                    courseRow[0].course_abbreviation +
                    "-" +
                    (0, dayjs_1.default)(trainingRows[0].start_date).year().toString() +
                    "-" +
                    participant_number;
                console.log(certificate_number);
                await connection.query("INSERT INTO trainings_participants(fk_training_id, training_participant_number, fk_participant_id, training_abbreviation, training_year, certificate_code) VALUES(?, ?, ?, ?, ?, ?)", [
                    id,
                    participant_number,
                    value,
                    courseRow[0].course_abbreviation,
                    (0, dayjs_1.default)(trainingRows[0].start_date).year(),
                    certificate_number,
                ]);
            }
            connection.release();
            reply.send({ success: true });
        },
    });
    fastify.put("/:id", {
        handler: async (request, reply) => {
            const id = request.params.id;
            const connection = await fastify.mysql.getConnection();
            const [rows, fields] = await connection.query("UPDATE trainings SET status = ? WHERE training_id = ?;", ["Deleted", id]);
            connection.release();
            reply.code(201).send({ success: true });
        },
    });
    fastify.put("/:id/status", {
        handler: async (request, reply) => {
            const id = request.params.id;
            const remarks = request.body.remarks;
            const connection = await fastify.mysql.getConnection();
            await connection.query("UPDATE trainings SET status = ?, remarks = ? WHERE training_id = ?;", ["Cancelled", remarks || "", id]);
            connection.release();
            reply.code(201).send({ success: true });
        },
    });
}
exports.default = routes;
