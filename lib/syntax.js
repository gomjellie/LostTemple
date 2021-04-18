
/**
 * build AST(Abstract Syntax Tree)
 * @param {Array} tokens
 * @returns {Object}
 */


/**
 * @summary
 * Syntax Parser
 * @description
 * AST(Abstract Syntax Tree)를 생성한다.
 * @example code () => { if (true) { console.log(10); }}
 * @example input 
 * [
 *   { type: 'paren', value: '(' },
 *   { type: 'paren', value: ')' },
 *   { type: 'fatcomma', value: '=>' },
 *   { type: 'brace', value: '{' },
 *   { type: 'name', value: 'if' },
 *   { type: 'paren', value: '(' },
 *   { type: 'name', value: 'true' },
 *   { type: 'paren', value: ')' },
 *   { type: 'brace', value: '{' },
 *   { type: 'name', value: 'console' },
 *   { type: 'dot', value: '.' },
 *   { type: 'name', value: 'log' },
 *   { type: 'paren', value: '(' },
 *   { type: 'number', value: '10' },
 *   { type: 'paren', value: ')' },
 *   { type: 'semicolon', value: ';' },
 *   { type: 'brace', value: '}' },
 *   { type: 'brace', value: '}' }
 * ]
 * @example output
 * {
 *   type: 'Program',
 *   body: [
 *     { type: 'paren', name: '(' },
 *     { type: 'paren', name: ')' },
 *     { type: 'fatcomma', name: '=>' },
 *     {
 *       type: 'CompoundStatement',
 *       name: 'anonymous',
 *       statements: [
 *         { type: 'name', name: 'if' },
 *         { type: 'paren', name: '(' },
 *         { type: 'name', name: 'true' },
 *         { type: 'paren', name: ')' },
 *         {
 *           type: 'CompoundStatement',
 *           name: 'anonymous',
 *           statements: [
 *             { type: 'name', name: 'console' },
 *             { type: 'dot', name: '.' },
 *             { type: 'name', name: 'log' },
 *             { type: 'paren', name: '(' },
 *             { type: 'NumberLiteral', value: '10' },
 *             { type: 'paren', name: ')' },
 *             { type: 'semicolon', name: ';' }
 *           ]
 *         }
 *       ]
 *     }
 *   ]
 * }
 * @param {Array.<{type: String, value: String}>} tokens
 * @returns {Object} AST
 */
function parser(tokens) {
  let current = 0;
  let ecStack = []; // Executable Context Stack

  function walk() {
    let token = tokens[current];

    if (token.type === 'number') {
      current++;

      return {
        type: 'NumberLiteral',
        value: token.value,
      }
    }

    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      }
    }

    if (
      token.type === 'brace' &&
      token.value === '{'
    ) {
      let node = {
        type: 'CompoundStatement', // context에 따라서 Object Literal인 경우도 있음.
        name: 'anonymous',
        statements: [],
      };

      token = tokens[++current];

      while (
        (token.type !== 'brace' || token.value !== '}')
      ) {
        node.statements.push(walk());
        token = tokens[current];
      }

      current++;
      return node;
    }

    current++;
    return {
      type: token.type,
      name: token.value,
    }
    // throw new TypeError(token.type);
  }

  let ast = {
    type: 'Program',
    body: [],
  };

  while (current < tokens.length) {
    ast.body.push(walk());
  }

  return ast;
}

/*
const fs = require("fs");
const { tokenizer } = require("./lex");
const source = fs.readFileSync(`${__dirname}/../test/sources/brace0.js`).toString();
const tokens = tokenizer(source);
// 일단 whitespace 없이함
const filteredTokens = tokens.filter((token) => !['whitespace', 'newline'].includes(token.type));

console.dir(filteredTokens, { depth: null, maxArrayLength: null });

const ast = parser(filteredTokens);
console.dir(ast, { depth: null, maxArrayLength: null });
*/

exports.parser = parser;
