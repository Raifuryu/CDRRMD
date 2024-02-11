const express = require("express");
const router = express.Router();
const cors = require("cors");
const connection = require("./connection.js");

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

router.get("/:trainingId/participants", async function (req, res, next) {
  const id = req.params.trainingId;
  let participant_details = [];
  connection.query(
    "SELECT * FROM trainings_participants WHERE fk_training_id = ?",
    [id],
    (err, rows, fields) => {
      if (err) {
        console.error("Error executing database query:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      // Using Promise.all to wait for all asynchronous queries to finish
      const promises = rows.map((row) => {
        return new Promise((resolve, reject) => {
          connection.query(
            "SELECT * FROM persons INNER JOIN persons_address ON persons.id = persons_address.fk_person_id LEFT JOIN phone_numbers ON persons.id = phone_numbers.fk_person_id LEFT JOIN email_address ON persons.id = email_address.fk_person_id LEFT JOIN barangay ON persons_address.fk_barangay_id = barangay.id WHERE persons.id = ?;",
            [row.fk_participant_id],
            (err, row, fields) => {
              if (err) {
                reject(err);
              } else {
                participant_details.push(row);
                resolve();
              }
            }
          );
        });
      });

      // Wait for all promises to resolve
      Promise.all(promises)
        .then(() => {
          res.status(200).json(participant_details);
        })
        .catch((error) => {
          console.error("Error executing database query:", error);
          res.status(500).json({ error: "Internal Server Error" });
        });
    }
  );
});

router.post("/:trainingId/create/participants", async function (req, res) {
  const participantsData = req.body;
  const trainingId = req.params.trainingId;

  try {
    for (const values of participantsData) {
      const rows = await query(
        "SELECT * FROM persons WHERE first_name = ? AND last_name = ?",
        [values.first_name, values.last_name]
      );

      let person_id = 0;

      if (rows && rows.length === 0) {
        const insertRows = await query(
          "INSERT INTO persons (first_name, middle_name, last_name, extension_name, nickname, gender, isLGBTQ, civil_status, birth_date, birth_place, occupation, blood_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            values.first_name,
            values.middle_name || "",
            values.last_name,
            values.extension_name || "",
            values.nickname,
            values.gender,
            values.isLGBTQ,
            values.civil_status,
            values.birth_date,
            values.birth_place,
            values.occupation,
            values.blood_type,
          ]
        );
        person_id = insertRows.insertId;
        console.log("Inserted Person");
        await insertAddress(
          person_id,
          values.barangay,
          values.street,
          values.sitio
        );
      } else {
        person_id = rows[0].id;
        await insertAddress(
          person_id,
          values.barangay,
          values.street,
          values.sitio
        );
      }

      await insertEmailAddress(person_id, values.email_address);
      await insertPhoneNumber(person_id, values.contact_number);
      await insertTrainingParticipant(trainingId, person_id);
    }
  } catch (error) {
    console.log("Error completing request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }

  res.status(200).json("Success");
});

async function query(sql, values) {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

async function insertAddress(personId, barangay, street, sitio) {
  const addressRows = await query(
    "SELECT * FROM persons_address WHERE fk_person_id = ? AND fk_barangay_id = ?",
    [personId, barangay]
  );
  if (addressRows && addressRows.length === 0) {
    await query(
      "INSERT INTO persons_address (fk_person_id, fk_barangay_id, street, sitio) VALUES (?, ?, ?, ?)",
      [personId, barangay, street || "", sitio || ""]
    );
    console.log("Inserted Address");
  }
}

async function insertPhoneNumber(personId, number) {
  const numbersRows = await query(
    "SELECT * FROM phone_numbers WHERE fk_person_id = ? AND contact_number = ?",
    [personId, number]
  );
  if (numbersRows && numbersRows.length === 0) {
    await query(
      "INSERT INTO phone_numbers (fk_person_id, contact_number) VALUES (?, ?)",
      [personId, number]
    );
    console.log("Inserted Phone Number");
  }
}
async function insertEmailAddress(personId, email_address) {
  const numbersRows = await query(
    "SELECT * FROM email_address WHERE fk_person_id = ? AND email_address = ?",
    [personId, email_address]
  );
  if (numbersRows && numbersRows.length === 0) {
    await query(
      "INSERT INTO email_address (fk_person_id, email_address) VALUES (?, ?)",
      [personId, email_address]
    );
    console.log("Inserted Email Address");
  }
}

async function insertTrainingParticipant(trainingId, personId) {
  const participantsRows = await query(
    "SELECT * FROM trainings_participants WHERE fk_training_id = ? AND fk_participant_id = ?",
    [trainingId, personId]
  );
  if (participantsRows && participantsRows.length === 0) {
    await query(
      "INSERT INTO trainings_participants (fk_training_id, fk_participant_id) VALUES (?, ?)",
      [trainingId, personId]
    );
    console.log("Inserted Training Participant");
  }
}

module.exports = router;
