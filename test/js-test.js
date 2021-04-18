
/**
 * test files on examples directory
 */
const { expect } = require("chai");
const fs = require("fs");

exports.tokenizTest = () => describe('tokenizer', function () {
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

  it("tests comment.js tokenize", function (done) {
    const source = fs.readFileSync(`${__dirname}/sources/comment.js`).toString();
    const tokens = lostTemple.tokenizer(source);

    console.dir(tokens, { depth: null });
    const str = tokens.reduce((acc, v) => {
      return acc + v.value;
    }, "");
    console.log(str);
    done();
  });

  it("tests braces.js tokenize", function (done) {
    const source = fs.readFileSync(`${__dirname}/sources/braces.js`).toString();
    const tokens = lostTemple.tokenizer(source);

    console.dir(tokens, { depth: null, maxArrayLength: null });
    const str = tokens.reduce((acc, v) => {
      return acc + v.value;
    }, "");
    console.log(str);
    done();
  });
});


exports.sementicTest = () => describe('js', function () {
  const lostTemple = require('../lib');

  it("tests brace0.js parser", function (done) {
    const source = fs.readFileSync(`${__dirname}/sources/brace3.js`).toString();
    const tokens = lostTemple.tokenizer(source);
    // 일단 
    const filteredTokens = tokens.filter((token) => !['whitespace', 'newline'].includes(token.type));
    
    console.dir(filteredTokens, { depth: null, maxArrayLength: null });
    
    const ast = lostTemple.parser(filteredTokens);
    console.dir(ast, { depth: null, maxArrayLength: null });
    
    done();
  });
});
