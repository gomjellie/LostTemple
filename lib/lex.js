
const {
  PARENTHESIS,
  WHITESPACE,
  NUMBERS,
  QUOTES,
  LETTERS,
  ASSIGN,
  SEMICOLON,
  CMPS,
  ARITHMETICS,
  BRACES,
  BRACKETS,
  DOT,
} = require("./SYMBOLS");

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

    if (QUOTES.includes(char)) {
      const qt = char;
      let value = '';
      char = input[++current];

      while (char !== qt) {
        value += char;
        char = input[++current];
      }

      char = input[++current];

      tokens.push({ type: 'string', value: `${qt}${value}${qt}` });
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

    if (char === ASSIGN) {
      tokens.push({
        type: 'assign',
        value: char,
      });
      current++;
      continue;
    }

    if (char === SEMICOLON) {
      tokens.push({
        type: 'semicolon',
        value: char,
      });
      current++;
      continue;
    }

    if (CMPS.includes(char)) {
      tokens.push({
        type: 'cmp',
        value: char,
      });
      current++;
      continue;
    }

    if (ARITHMETICS.includes(char)) {
      const arith = char;
      let value = char;
      char = input[++current];

      while (char === arith) {
        value += char;
        char = input[++current];
      }
      if (value.length > 1) 
        tokens.push({ type: 'aritharith', value });
      else
        tokens.push({ type: 'arith', value });

      continue;
    }

    if (BRACES.includes(char)) {
      tokens.push({
        type: 'brace',
        value: char,
      });
      current++;
      continue;
    }

    if (BRACKETS.includes(char)) {
      tokens.push({
        type: 'bracket',
        value: char,
      });
      current++;
      continue;
    }

    if (DOT === char) {
      tokens.push({
        type: 'dot',
        value: char,
      });
      current++;
      continue;
    }

    throw new TypeError(`No rule for character : ${char}`);
  }
  return tokens;
}

exports.tokenizer = tokenizer;
