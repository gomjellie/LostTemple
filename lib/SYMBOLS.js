
const PARENTHESIS = ["(", ")"];

const DOUBLE_QUOTE = '"';
const QUOTE = "'";
const BACK_QUOTE = '`';
const QUOTES = [QUOTE, BACK_QUOTE, DOUBLE_QUOTE];

const WHITESPACE = /\s/;
const NUMBERS = /[0-9]/;
const LETTERS = /[a-z]/i;
const SPECIALCHARS = /[^a-z0-9\s()[\]{}'"`;]/i;

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

const PLUSPLUS = '++';
const MINUSMINUS = '--';

const ARITHARITHS = [PLUSPLUS, MINUSMINUS];
const ARITHMETICS = [PLUS, MINUS, MULTIPLY, DIVIDE];
const BRACES = ['{', '}'];
const BRACKETS = ['[', ']'];

const DOT = '.';
const FATCOMMA = '=>';
const COMMA = ',';
const FOR = 'for';
const WHILE = 'while';
const FUNCTION = 'function';

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

  ARITHARITHS,
  ARITHMETICS,
  BRACES,
  BRACKETS,

  DOT,
  FATCOMMA,
  COMMA,
  FOR,
  WHILE,
  FUNCTION,
  SPECIALCHARS,
};
