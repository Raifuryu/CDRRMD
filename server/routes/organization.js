var express = require("express");
var router = express.Router();
const cors = require("cors");
var connection = require("./connection.js");

router.use(cors({ origin: true, credentials: true }));

/* GET home page. */
router.get("/", function (req, res, next) {
  connection.query("SELECT * FROM offices", (err, rows, fields) => {
    if (err) {
      console.error("Error executing database query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.status(200).json(rows);
  });
});

router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM offices WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (err) {
        console.error("Error executing database query:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.status(200).json(rows);
    }
  );
});

router.post("/create", (req, res) => {
  const sql =
    "INSERT INTO offices (office_name, acronym, office_contact_number, office_email_address, full_address, sitio, fk_barangay_id ) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.organization_name,
    req.body.acronym,
    req.body.contact_number,
    req.body.email_address,
    req.body.full_address,
    req.body.sitio,
    req.body.barangay,
  ];

  console.log(req.body);

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
