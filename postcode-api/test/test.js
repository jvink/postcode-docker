const expect = require('expect.js');

it('result has error', function (done) {
    const error = true;

    if (!error) {
        expect(error).not.to.be.ok();
        if (results.isArray()) {
            expect(results).to.be.an('array');
            if (results.length < 1) {
                expect(results).to.have.length(0);
                done();
            } else {
                expect(results.length).to.be.greaterThan(0);
                done();
            }
        } else {
            expect(results).to.not.be.an('array');
            done();
        }
    } else {
        expect(error).to.be.ok();
        done();
    }
});

it('result has no error and result is not array', function (done) {
    const error = undefined;
    const results = {};

    if (!error) {
        expect(error).not.to.be.ok();
        if (Array.isArray(results)) {
            expect(results).to.be.an('array');
            if (results.length < 1) {
                expect(results).to.have.length(0);
                done();
            } else {
                expect(results.length).to.be.greaterThan(0);
                done();
            }
        } else {
            expect(results).to.not.be.an('array');
            done();
        }
    } else {
        expect(error).to.be.ok();
        done();
    }
});

it('result has no error and result is array of length 0', function (done) {
    const error = undefined;
    const results = [];

    if (!error) {
        expect(error).not.to.be.ok();
        if (Array.isArray(results)) {
            expect(results).to.be.an('array');
            if (results.length < 1) {
                expect(results).to.have.length(0);
                done();
            } else {
                expect(results.length).to.be.greaterThan(0);
                done();
            }
        } else {
            expect(results).to.not.be.an('array');
            done();
        }
    } else {
        expect(error).to.be.ok();
        done();
    }
});

it('result has no error and result is array of length > 0', function (done) {
    const error = undefined;
    const results = [1, 2, 3];

    if (!error) {
        expect(error).not.to.be.ok();
        if (Array.isArray(results)) {
            expect(results).to.be.an('array');
            if (results.length < 1) {
                expect(results).to.have.length(0);
                done();
            } else {
                expect(results.length).to.be.greaterThan(0);
                done();
            }
        } else {
            expect(results).to.not.be.an('array');
            done();
        }
    } else {
        expect(error).to.be.ok();
        done();
    }
});