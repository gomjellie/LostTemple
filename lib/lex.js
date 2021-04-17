
const PARENTHESIS = ["(", ")"];
const WHITESPACE = /\s/;
const NUMBERS = /[0-9]/;
const QUOTE = '"';
const LETTERS = /[a-z]/i;

/**
 * Lexical Analysis 를 수행한다.
 * 토큰을 잘라서 토큰 오브젝트들을 배열로 묶어서 반환함.
 * @param {String} input : 소스코드 스트링
 * @returns {Array} 
 */
function tokenizer(input) {
  let current = 0;
  let tokens = [];

  while (current < input.length) {
    let char = input[current];

    if (PARENTHESIS.includes(char)) {
      tokens.push({
        type: 'paren',
        value: char,
      });
      current++;
      continue;
    }

    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    if (NUMBERS.test(char)) {
      let value = '';

      while (NUMBERS.test(char)) {
        value = value.concat(char);
        char = input[++current];
      }

      tokens.push({ type: 'number', value });
      continue;
    }

    if (char === QUOTE) {
      let value = '';
      char = input[++current];

      while (char !== QUOTE) {
        value += char;
        char = input[++current];
      }

      char = input[++current];

      tokens.push({ type: 'string', value });
      continue;
    }

    if (LETTERS.test(char)) {
      let value = '';

      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({ type: 'name', value });
      continue;
    }

    throw new TypeError(`No rule for character : ${char}`);
  }
  return tokens;
}

exports.tokenizer = tokenizer;
