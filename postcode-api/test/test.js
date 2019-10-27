const expect = require('expect.js');
var db = require("../db");

it('db.connect should connect succesfully', function (done) {
    db.connect(function (err, result) {
        if (err) {
            done(err);
            return;
        }
        expect(result.serverStatus).to.equal(2);
        done();
    });
});

it('should get error', function (done) {
    db.connect(function () {
        const query = `
            SELECT huisnummer.huisnummer, huisnummer.toevoeging, postcode.postcode, postcode.straat, plaats.plaats
            FROM huisnummer
            INNER JOIN postcode ON huisnummer.FK_postcode = postcode.postcode
            INNER JOIN plaats ON postcode.FK_idplaats = plaats.idplaats
            WHERE postcode.postcode = "3311JJ"
            AND huisnummer.huisnummer = 101
            AND huisnummer.toevoeging IS NULL
        `;

        db.query(query, function (error, results) {
            if (error) {
                done();
            }
        });
    });
});