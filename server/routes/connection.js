const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "Research&Planning",
  password: "Planning_Forever_2022",
  database: "CDRRMD",
});

module.exports = connection;
