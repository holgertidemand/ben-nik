/**
 *
 * Resolvers
 *
 */

module.exports = {
  // Queries
  Query: require('./Queries'),

  // Mutations
  Mutation: require('./Mutations'),

  // Types
  Athlete: require('./Types/Athlete'),
  Result: require('./Types/Result'),

  // Custom Types
  DateTime: require('./Types/Custom/DateTime'),
}
