"use strict";

module.exports = {
  plugins: ['@darraghor/nestjs-typed'],
  extends: [
    './node',
    'plugin:@darraghor/nestjs-typed/recommended'
  ],
  rules: {
    "@darraghor/nestjs-typed/injectable-should-be-provided": "off"
  },
};
