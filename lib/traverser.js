
/**
 * AST를 순회하는 함수
 * @param {Object} ast :abstrct syntax tree which is returned from parser()
 * @param {Object} visitor : describes actions
 * visitor = {
 *   Program: {
 *     enter(node, parent) {},
 *     exit(node, parent) {},
 *   },
 *   CallExpression: {
 *     enter(node, parent) {},
 *     ...
 *   },
 *   ...
 * }
 */
function traverser(ast, visitor) {
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  function traverseNode(node, parent) {
    let methods = visitor[node.type];

    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    switch (node.type) {
    case 'Program':
      traverseArray(node.body, node);
      break;

    case 'CallExpression':
      traverseArray(node.params, node);
      break;
    
    case 'NumberLiteral':
    case 'StringLiteral':
      break;
    
    default:
      throw new TypeError(node.type);
    }

    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  traverseNode(ast, null);
}

exports.traverser = traverser;
