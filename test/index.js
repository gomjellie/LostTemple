/**
 * test files on examples directory
 */

const expect = require("chai").expect;
const fs = require("fs");

describe('lost-temple', function () {
  const lostTemple = require('../lib');

  it("check tokenizer.txt tokenize", function (done) {
    const source = fs.readFileSync(`${__dirname}/sources/tokenizer.txt`).toString();
    const tokens = lostTemple.tokenizer(source);

    expect(tokens).to.eql([
      { type: 'paren', value: '(' },
      { type: "name", value: "add" },
      { type: "number", value: "2" },
      { type: "paren", value: "(" },
      { type: "name", value: "subtract" },
      { type: "number", value: "4" },
      { type: "number", value: "2" },
      { type: "paren", value: ")" },
      { type: "paren", value: ")" },
    ]);
    done();
  });
});
