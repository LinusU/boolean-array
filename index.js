const util = require('util')

const BooleanArray = require('./browser')

BooleanArray.prototype[util.inspect.custom] = function inspect () {
  return `${this.constructor.name} ${util.inspect(Array.from(this))}`
}

module.exports = BooleanArray
