var express = require("express");
var router = express.Router();
const cors = require("cors");
var connection = require("./connection.js");

router.use(cors({ origin: true, credentials: true }));

/* GET users listing. */
router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM trainings WHERE id = ?",
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

module.exports = router;
