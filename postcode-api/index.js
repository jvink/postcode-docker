"use strict";

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var dbConn = require("./db");
var cors = require("cors");
const { PORT } = require("./config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

dbConn.connect();

app.get("/all", function (req, res) {
  const query = `
  SELECT huisnummer.huisnummer, huisnummer.toevoeging, postcode.postcode, postcode.straat, plaats.plaats
  FROM huisnummer
  INNER JOIN postcode ON huisnummer.FK_postcode = postcode.postcode
  INNER JOIN plaats ON postcode.FK_idplaats = plaats.idplaats
  `;

  dbConn.query(query, function (error, results, fields) {
    if (!error) {
      if (results.length < 1) {
        return res.status(404).send({ error: true, result: "Geen adresgegevens gevonden." })
      } else {
        return res.status(200).send({ error: false, result: results });
      }
    } else {
      return res.status(400).send({ error: true, result: error })
    }
  });
});

app.get("/:postcode/:huisnummer/:toevoeging?", function (req, res) {
  let postcode = req.params.postcode;
  let huisnummer = req.params.huisnummer;
  let toevoeging = req.params.toevoeging;

  if (!postcode || !huisnummer) {
    return res.status(400).send({ error: true, message: "Vul aub een geldig postcode en huisnummer in." });
  }

  const query = `
  SELECT huisnummer.huisnummer, huisnummer.toevoeging, postcode.postcode, postcode.straat, plaats.plaats
  FROM huisnummer
  INNER JOIN postcode ON huisnummer.FK_postcode = postcode.postcode
  INNER JOIN plaats ON postcode.FK_idplaats = plaats.idplaats
  WHERE postcode.postcode = "${postcode}"
  AND huisnummer.huisnummer = ${huisnummer}
  ${toevoeging ? `AND huisnummer.toevoeging = "${toevoeging}"` : `AND huisnummer.toevoeging IS NULL`}
  `;

  dbConn.query(query, function (error, results, fields) {

    if (!error) {
      if (results.length < 1) {
        return res.status(404).send({ error: true, result: "Geen adresgegevens gevonden, of het adres is nog niet geregistreerd." })
      } else {
        return res.status(200).send({ error: false, result: results[0] });
      }
    } else {
      return res.status(400).send({ error: true, result: error })
    }
  });
});

app.listen(PORT, function () {
  console.log(`Postcode API running on port: ${PORT}`);
});

module.exports = app;