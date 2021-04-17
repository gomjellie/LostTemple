
/**
 * test files on examples directory
 */
const { expect } = require("chai");
const fs = require("fs");

exports.lispTest = () => describe('lisp', function () {
  const lostTemple = require('../lib');

  it("tests tokenizer.txt tokenize", function (done) {
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
    console.dir(tokens, { depth: null });
    done();
  });

  it("tests semantic parser with input tokenizer.txt", function (done) {
    const source = fs.readFileSync(`${__dirname}/sources/tokenizer.txt`).toString();
    const tokens = lostTemple.tokenizer(source);
    const ast = lostTemple.parser(tokens);

    console.dir(ast, { depth: null });
    done();
  });

  it("tests transformer", function (done) {
    const source = fs.readFileSync(`${__dirname}/sources/tokenizer.txt`).toString();
    const tokens = lostTemple.tokenizer(source);
    const ast = lostTemple.parser(tokens);
    const transformed = lostTemple.transformer(ast);

    console.dir(transformed, { depth: null });
    done();
  });

  it("tests transfiler", function (done) {
    const source = fs.readFileSync(`${__dirname}/sources/tokenizer.txt`).toString();
    const tokens = lostTemple.tokenizer(source);
    const ast = lostTemple.parser(tokens);
    const transformed = lostTemple.transformer(ast);
    const generatedCode = lostTemple.codeGenerator(transformed);

    console.log(generatedCode);
    done();
  })
});
