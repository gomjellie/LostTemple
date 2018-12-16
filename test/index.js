/**
 * test files on examples directory
 */

const expect = require("chai").expect;

const fs = require("fs");
const util = require('util');
const readFile = util.promisify(fs.readFile);

describe('lost-temple', function(){
    const lostTemple = require('../lib');

    it('check gugu.cat -> gugu.c', function(done){
        readFile("./example/gugu.cat")
            .then(lostTemple.cat2c)
            .then((res) => { expect(res).to.equal(String(fs.readFileSync("./example/gugu.c")))})
            .then(done())
            .catch((err) => { throw err });
    });

    it('check helloWorld.cat -> helloWorld.c', function(done){
        readFile("./example/helloWorld.cat")
            .then(lostTemple.cat2c)
            .then((res) => { expect(res).to.equal(String(fs.readFileSync("./example/helloWorld.c")))})
            .then(done())
            .catch(console.error);
    });
});
