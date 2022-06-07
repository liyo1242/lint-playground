'use strict';

// copy from https://github.com/jsx-eslint/eslint-plugin-react/blob/b9aa04b10d9bb0b7274ad314ca125ddefd9fbdb3/lib/util/report.js

const semver = require('semver');
const eslintPkg = require('eslint/package.json');

module.exports = function report(context, message, messageId, data) {
  context.report(
    Object.assign(
      messageId && semver.satisfies(eslintPkg.version, '>= 4.15') ? { messageId } : { message },
      data
    )
  );
};