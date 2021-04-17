
/**
 * test files on examples directory
 */
// const { expect } = require("chai");
const fs = require("fs");

exports.jsTest = () => describe('js', function () {
  const lostTemple = require('../lib');

  it("tests gugu.js tokenize", function (done) {
    const source = fs.readFileSync(`${__dirname}/sources/gugu.js`).toString();
    const tokens = lostTemple.tokenizer(source);

    console.dir(tokens, { depth: null });
    
    // expect(tokens).to.eql([
    //   { type: 'paren', value: '(' },
    //   { type: "name", value: "add" },
    //   { type: "number", value: "2" },
    //   { type: "paren", value: "(" },
    //   { type: "name", value: "subtract" },
    //   { type: "number", value: "4" },
    //   { type: "number", value: "2" },
    //   { type: "paren", value: ")" },
    //   { type: "paren", value: ")" },
    // ]);
    done();
  });

});
