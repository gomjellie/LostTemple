
const { tokenizer } = require("./lex");
const { parser } = require("./sem");
const { transformer } = require("./transformer");

module.exports = {
  transpile,
  tokenizer,
  parser,
  transformer,
};

function transpile(originCode) {
  return new Promise((resolve, reject) => {
    try {
      const tokens = tokenizer(originCode);
      const ast = parser(tokens);
      transformer(ast);
      resolve(ast);
    }
    catch (e) {
      reject(e.stack)
    }
  });
}
