var express = require("express");
var router = express.Router();
const cors = require("cors");
var connection = require("./connection.js");

router.use(cors({ origin: true, credentials: true }));

/* GET users listing. */
router.get("/", function (req, res, next) {
  connection.query(
    "SELECT * FROM persons INNER JOIN phone_numbers ON phone_numbers.fk_person_id = persons.id INNER JOIN persons_offices ON persons_offices.fk_person_id = persons.id INNER JOIN offices ON offices.id = persons_offices.fk_office_id;",
    (err, rows, fields) => {
      if (err) {
        console.error("Error executing database query:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.status(200).json(rows);
    }
  );
});

module.exports = router;
