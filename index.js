'use strict'

module.exports = function efn (obj, key) {
  let value = obj[key]
  if (typeof value === 'function') value = value.bind(obj)
  return value
}
