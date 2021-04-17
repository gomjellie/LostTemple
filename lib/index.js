
const { tokenizer } = require("./lex");
const { parser } = require("./sem");
const { traverser } = require("./traverser");

module.exports = {
  transpile,
  tokenizer,
  parser,
  traverser,
};

function transpile(originCode) {
  return new Promise((resolve, reject) => {
    try {
      const tokens = tokenizer(originCode);
      const ast = parser(tokens);
      traverser(ast, null);
      resolve(ast);
    }
    catch (e) {
      reject(e.stack)
    }
  });
}
