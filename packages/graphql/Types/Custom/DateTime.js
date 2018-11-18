const { GraphQLScalarType } = require('graphql')

const DateTime = new GraphQLScalarType({
  name: 'DataTime',
  description: 'A vaild time value',
  parseValue: value => new Date(value),
  serialize: value => new Date(value).toISOString(),
  parseLiteral: ast => ast.value,
})

module.exports = { DateTime }
