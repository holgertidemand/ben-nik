const ServerTimestamp = require('./ServerTimestamp').TimeStamp
const isObject = require('lodash/isObject')
const isEqual = require('lodash/isEqual')

/**
 * Creates a new flat object from given. Either returns new object or add new
 * flat properties in given.
 *
 * Example:
 *
 * const obj = {
 *   name: {
 *     firstName: "John",
 *     surname: "Johnson"
 *   }
 * }
 *
 * flatten(obj)
 *
 * Result:
 *
 * {
 *   "/name/firstName": "John",
 *   "/name/surname": "Johnson"
 * }
 *
 * @param  {Object} input       Normal object to convert into flat one
 * @param  {String} reference   Reference path to parent object if exists
 * @param  {[Object]} output    Result object to add new flat props
 * @return {Object}             Flat object
 */
module.exports = function flatten(input, reference = '', output = {}) {
  Object.keys(input).forEach(key => {
    const value = input[key]

    if (isObject(value) && !isEqual(value, ServerTimestamp)) {
      flatten(value, `${reference}/${key}`, output)
    } else {
      output[`${reference}/${key}`] = value
    }
  })

  return output
}
