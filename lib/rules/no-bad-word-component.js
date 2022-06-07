'use strict';

const elementType = require('jsx-ast-utils/elementType')
const isCreateElement = require('../util/isCreateElement');
const report = require('../util/report');

// * eslint will show this string template on vscode to notice you
const messages = {
  noBadWord: 'React component <{{name}}> must not contain bad word, as Gandalf will punish you',
};

const badWordRegex = /[s|S]hit/g;

// * code path analysis is here https://eslint.org/docs/developer-guide/code-path-analysis

module.exports = {
  meta: {
    messages,
  },
  create(context) {
    return {
      CallExpression(node) {
        if (isCreateElement(node, context) && node.arguments.length > 0 && node.arguments[0].type === 'Literal') {
          const name = node.arguments[0].value;
          if (typeof name !== 'string' || name.search(badWordRegex) === -1 ) return undefined;
          report(context, messages.noBadWord, 'noBadWord', {
            node,
            data: {
              name,
            },
          });
        }
      },
      JSXOpeningElement(node) {
        const name = elementType(node);
        if (typeof name !== 'string' || name.search(badWordRegex) === -1) return undefined;
        report(context, messages.noBadWord, 'noBadWord', {
          node,
          data: {
            name,
          },
        });
      },
    }
  }
}