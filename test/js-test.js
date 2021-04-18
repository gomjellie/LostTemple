
/**
 * test files on examples directory
 */
// const { expect } = require("chai");
const { expect } = require("chai");
const fs = require("fs");

exports.jsTest = () => describe('js', function () {
  const lostTemple = require('../lib');

  it("tests gugu.js tokenize", function (done) {
    const source = fs.readFileSync(`${__dirname}/sources/gugu.js`).toString();
    const tokens = lostTemple.tokenizer(source);

    console.dir(tokens, { depth: null });
    const str = tokens.reduce((acc, v) => {
      return acc + v.value;
    }, "");
    console.log(str);

    const unknownTypedToken = tokens.filter((token) => token.type === '???');
    expect(unknownTypedToken).to.eql([]);
    done();
  });

  it("tests arrow.js tokenize", function (done) {
    const source = fs.readFileSync(`${__dirname}/sources/arrow.js`).toString();
    const tokens = lostTemple.tokenizer(source);

    console.dir(tokens, { depth: null });
    const str = tokens.reduce((acc, v) => {
      return acc + v.value;
    }, "");
    console.log(str);
    const unknownTypedToken = tokens.filter((token) => token.type === '???');
    expect(unknownTypedToken).to.eql([]);
    done();
  });
});
