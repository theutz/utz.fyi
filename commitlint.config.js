const conv = require('@commitlint/config-conventional')
const convTypes = conv.rules['type-enum'][2]

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [...convTypes, 'content']],
  },
}
