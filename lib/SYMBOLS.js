
const PARENTHESIS = ["(", ")"];

const DOUBLE_QUOTE = '"';
const QUOTE = "'";
const BACK_QUOTE = '`';
const QUOTES = [QUOTE, BACK_QUOTE, DOUBLE_QUOTE];

const NEWLINE = /[\n\r]/;
const WHITESPACE = /[^\S\n\r]/; // white space except new line
const NUMBER = /[0-9]/;
const LETTER = /[a-zA-Z]/;
// characters that are not matched with WHITESPACE, NUMBERS, LETTERS
const SPECIALCHAR = /[^a-z0-9()\s[\]{}'"`;]/; 

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

const SINGLELINE_COMMENT = /^\/\//;
const MULTILINE_COMMENT = /(^\/\*)|(\*\/$)/; // /* 혹은 */

module.exports = {
  PARENTHESIS,
  NEWLINE,
  WHITESPACE,
  NUMBER,
  DOUBLE_QUOTE,
  QUOTE,
  BACK_QUOTE,
  QUOTES,
  LETTER,
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
  SPECIALCHAR,

  SINGLELINE_COMMENT,
  MULTILINE_COMMENT
};
