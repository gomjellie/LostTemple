/**
 * test files on examples directory
 */

const expect = require("chai").expect;

const fs = require("fs");
const util = require('util');

describe('lost-temple', function () {
  const lostTemple = require('../lib');

  // it('check gugu.cat -> gugu.c', function (done) {
  //   readFile("./example/gugu.cat")
  //     .then(lostTemple.cat2c)
  //     .then((res) => {
  //       expect(res).to.equal(String(fs.readFileSync("./example/gugu.c")));
  //       done();
  //     })
  //     .catch(console.error);
  // });

  // it('check helloWorld.cat -> helloWorld.c', function (done) {
  //   readFile("./example/helloWorld.cat")
  //     .then(lostTemple.cat2c)
  //     .then((res) => {
  //       expect(res).to.equal(String(fs.readFileSync("./example/helloWorld.c")));
  //       done();
  //     })
  //     .catch(console.error);
  // });
});

