'use strict';

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-bad-word-component');
const parsers = require('../../helpers/parser');

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};
const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('no-bad-word-component', rule, {
  valid: parsers.all([
    {
      code: '<Test />'
    },
    {
      code: '<TestComponent />'
    },
    {
      code: 'React.createElement("TestComponent")',
    }
  ]),
  invalid: parsers.all([
    {
      code: '<shit />',
      errors: [{ message: 'React component <shit> must not contain bad word, as Gandalf will punish you' }],
      features: ['jsx namespace'],
    },
    {
      code: '<Shit />',
      errors: [{ message: 'React component <Shit> must not contain bad word, as Gandalf will punish you' }],
      features: ['jsx namespace'],
    },
    {
      code: '<TestShit />',
      errors: [{ message: 'React component <TestShit> must not contain bad word, as Gandalf will punish you' }],
      features: ['jsx namespace'],
    },
    {
      code: 'React.createElement("Shit")',
      errors: [{ message: 'React component <Shit> must not contain bad word, as Gandalf will punish you' }],
      features: ['jsx namespace'],
    },
  ])
})