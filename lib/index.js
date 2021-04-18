
const { tokenizer } = require("./lex");
const { parser } = require("./syntax");
const { transformer } = require("./transformer");
const { codeGenerator } = require("./codeGenerator");

module.exports = {
  transpile,
  tokenizer,
  parser,
  transformer,
  codeGenerator,
};

function transpile(originCode) {
  return new Promise((resolve, reject) => {
    try {
      const tokens = tokenizer(originCode);
      const ast = parser(tokens);
      const ret = codeGenerator(ast);
      resolve(ret);
    }
    catch (e) {
      reject(e.stack)
    }
  });
}
