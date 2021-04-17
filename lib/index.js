
const { tokenizer } = require("./lex");

module.exports = {
  cat2c: cat2c,
  tokenizer: tokenizer,
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
