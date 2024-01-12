var express = require("express");
var router = express.Router();
const cors = require("cors");

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "Research&Planning",
  password: "Planning_Forever_2022",
  database: "data_bank",
});

router.use(cors({ origin: true, credentials: true }));

/* GET home page. */
router.get("/", function (req, res, next) {
  connection.query("SELECT * FROM policies", (err, rows, fields) => {
    if (err) {
      console.error("Error executing database query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.status(200).json(rows);
  });
});

router.post("/create", (req, res) => {
  const sql =
    "INSERT INTO policies (policy_number, name, date_approved, category, type) VALUES (?, ?, ?, ?, ?)";
  const values = [
    req.body.number,
    req.body.name,
    req.body.dateApproved,
    req.body.category,
    req.body.type,
  ];

  connection.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error executing database query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    return res.json("created");
  });
});

router.put("/file", (req, res) => {
  res.send("put Request");
});

router.delete("/file", (req, res) => {
  res.send("Delete Request");
});

module.exports = router;
