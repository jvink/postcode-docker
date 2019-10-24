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

it('db.connect should retrieve address by zipcode and housenumber', function (done) {
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
            if (!error) {
                expect(results).to.be.an('array');

                if (results.length < 1) {
                    expect(results[0]).to.have.length(0);

                    done();
                } else {
                    expect(results[0]).to.be.an('object');
                    expect(results[0]).to.eql({
                        huisnummer: 101,
                        toevoeging: null,
                        postcode: '3311JJ',
                        straat: 'Draai',
                        plaats: 'Dordrecht'
                    });
                    
                    done();
                }
            } else {
                expect(results).to.not.be.ok();
                expect(error).to.be.ok();

                done();
            }
        });
    });
});