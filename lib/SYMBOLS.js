
const PARENTHESIS = ["(", ")"];
const WHITESPACE = /\s/;

const DOUBLE_QUOTE = '"';
const QUOTE = "'";
const BACK_QUOTE = '`';
const QUOTES = [QUOTE, BACK_QUOTE, DOUBLE_QUOTE];

const NUMBERS = /[0-9]/;
const LETTERS = /[a-z]/i;

const ASSIGN = '=';
const SEMICOLON = ';';

const CMP_GT = '>';
const CMP_LT = '<';
const CMP_GTE = '>=';
const CMP_LTE = '<=';
const CMP_EQL = '==';

const CMPS = [CMP_GT, CMP_GTE, CMP_LT, CMP_LTE, CMP_EQL];

const PLUS = '+';
const MINUS = '-';
const MULTIPLY = '*';
const DIVIDE = '/';

const ARITHMETICS = [PLUS, MINUS, MULTIPLY, DIVIDE];
const BRACES = ['{', '}'];
const BRACKETS = ['[', ']'];

const DOT = '.';

module.exports = {
  PARENTHESIS,
  WHITESPACE,
  NUMBERS,
  DOUBLE_QUOTE,
  QUOTE,
  BACK_QUOTE,
  QUOTES,
  LETTERS,
  ASSIGN,
  SEMICOLON,

  CMP_GT,
  CMP_LT,
  CMP_GTE,
  CMP_LTE,
  CMP_EQL,
  CMPS,

  ARITHMETICS,
  BRACES,
  BRACKETS,

  DOT,
};
