import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteShorthandOptions,
} from "fastify";

async function routes(
  fastify: FastifyInstance,
  options: RouteShorthandOptions
) {
  fastify.addHook(
    "onResponse",
    async (request: FastifyRequest, reply: FastifyReply) => {
      fastify.log.info(`Responding: ${reply.elapsedTime}`);
    }
  );

  fastify.get("/", {
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const connection = await fastify.mysql.getConnection();

      const [rows, fields] = await connection.query(
        "SELECT persons.person_id as id, persons.first_name, persons.middle_name, persons.last_name, persons.extension_name, persons_offices.designation, offices.office_name, offices.acronym, phone_numbers.contact_number, email_addresses.email_address FROM persons LEFT JOIN persons_offices ON persons.person_id = persons_offices.fk_person_id LEFT JOIN offices ON persons_offices.fk_office_id =  offices.office_id LEFT JOIN persons_phone_numbers ON persons.person_id = persons_phone_numbers.fk_person_id LEFT JOIN phone_numbers ON persons_phone_numbers.fk_phone_number_id = phone_numbers.phone_number_id LEFT JOIN persons_email_addresses ON persons.person_id = persons_email_addresses.fk_person_id LEFT JOIN email_addresses ON persons_email_addresses.fk_email_address_id = email_addresses.email_address_id ORDER BY persons.last_name"
      );
      connection.release();

      return reply.code(200).send(rows);
    },
  });
}

export default routes;
