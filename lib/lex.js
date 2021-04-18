
const {
  PARENTHESIS,
  NEWLINE,
  WHITESPACE,
  NUMBER,
  QUOTES,
  LETTER,
  ASSIGN,
  SEMICOLON,
  CMPS,
  ARITHMETICS,
  BRACES,
  BRACKETS,
  DOT,
  FATCOMMA,
  COMMA,
  FOR,
  WHILE,
  FUNCTION,
  SPECIALCHAR,
  ARITHARITHS,
  SINGLELINE_COMMENT,
  MULTILINE_COMMENT,
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

    if (BRACKETS.includes(char)) {
      tokens.push({
        type: 'bracket',
        value: char,
      });
      current++;
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

    if (WHITESPACE.test(char)) {
      let value = '';
      while (WHITESPACE.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({ type: 'whitespace', value });
      continue;
    }

    if (NEWLINE.test(char)) {
      tokens.push({ type: 'newline', value: char });
      current++;
      continue;
    }

    if (SEMICOLON === char) {
      tokens.push({
        type: 'semicolon',
        value: char,
      });
      current++;
      continue;
    }

    if (NUMBER.test(char)) {
      let value = '';

      while (NUMBER.test(char)) {
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

    if (LETTER.test(char)) {
      let value = '';

      while (LETTER.test(char)) {
        value += char;
        char = input[++current];
      }

      if (value === FOR)
        tokens.push({ type: 'for', value });
      else if (value === WHILE)
        tokens.push({ type: 'while', value });
      else if (value === FUNCTION)
        tokens.push({ type: 'function', value });
      else
        tokens.push({ type: 'name', value });
      continue;
    }

    if (SPECIALCHAR.test(char)) {
      let value = "";

      while (SPECIALCHAR.test(char)) {
        value += char;
        char = input[++current];
      }

      if (value === '*/') {
        value;
      }

      if (ASSIGN === value)
        tokens.push({ type: 'assign', value });
      else if (BRACES.includes(value))
        tokens.push({ type: 'brace', value });
      else if (CMPS.includes(value))
        tokens.push({ type: 'cmp', value });
      else if (ARITHMETICS.includes(value))
        tokens.push({ type: 'arith', value });
      else if (ARITHARITHS.includes(value))
        tokens.push({ type: 'aritharith', value });
      else if (DOT === value)
        tokens.push({ type: 'DOT', value });
      else if (COMMA === value)
        tokens.push({ type: 'comma', value });
      else if (FATCOMMA === value)
        tokens.push({ type: 'fatcomma', value });
      else if (SINGLELINE_COMMENT.test(value))
        tokens.push({ type: 'singleComment', value });
      else if (MULTILINE_COMMENT.test(value.trim()))
        tokens.push({ type: 'multiComment', value });
      else
        tokens.push({ type: '???', value });
      continue;
    }

    throw new TypeError(`No rule for character : ${char}(${char.charCodeAt()})`);
  }
  return tokens;
}

const fs = require("fs");

const source = fs.readFileSync(`${__dirname}/../test/sources/comment.js`).toString();
const tokens = tokenizer(source);

console.dir(tokens, { depth: null });
const str = tokens.reduce((acc, v) => {
  return acc + v.value;
}, "");
console.log(str);

exports.tokenizer = tokenizer;
