
const { tokenizer } = require("./lex");
const { parser } = require("./sem");

module.exports = {
  cat2c: cat2c,
  tokenizer: tokenizer,
  parser,
};

function cat2c(originCode) {
  return new Promise((resolve, reject) => {
    try {
      const tokens = tokenizer(originCode);
      resolve(tokens);
    }
    catch (e) {
      reject(e.stack)
    }
  });
}
