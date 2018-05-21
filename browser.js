const reIndex = /^(0|([1-9][0-9]*))$/

const kGet = Symbol('get')
const kSet = Symbol('set')
const kView = Symbol('view')

class BooleanArray {
  get BYTES_PER_ELEMENT () { return (1 / 8) }

  constructor (...args) {
    if (typeof args[0] === 'undefined') {
      this.length = 0
      this.byteLength = 0
      this.buffer = new ArrayBuffer(0)
      this.byteOffset = 0

      this[kView] = new Uint8Array(this.buffer, this.byteOffset, this.byteLength)

      return this
    }

    if (typeof args[0] === 'number') {
      this.length = args[0]
      this.byteLength = Math.ceil(args[0] / 8)
      this.buffer = new ArrayBuffer(this.byteLength)
      this.byteOffset = 0

      this[kView] = new Uint8Array(this.buffer, this.byteOffset, this.byteLength)

      return this
    }

    if (args[0] instanceof ArrayBuffer) {
      this.buffer = args[0]
      this.byteOffset = (args[1] || 0)
      this.length = (args[2] || ((this.buffer.byteLength - this.byteOffset) * 8))
      this.byteLength = Math.ceil(this.length / 8)

      this[kView] = new Uint8Array(this.buffer, this.byteOffset, this.byteLength)

      return this
    }

    if (typeof args[0] === 'object') {
      const items = Array.from(args[0])

      this.length = items.length
      this.byteLength = Math.ceil(this.length / 8)
      this.buffer = new ArrayBuffer(this.byteLength)
      this.byteOffset = 0

      this[kView] = new Uint8Array(this.buffer, this.byteOffset, this.byteLength)

      for (let idx = 0; idx < items.length; idx++) {
        this[kSet](idx, items[idx])
      }

      return this
    }

    throw new Error('Not implemented')
  }

  [kGet] (offset) {
    const byteOffset = (offset / 8) | 0
    const bitOffset = (offset % 8) | 0
    const mask = 0x80 >> bitOffset

    return Boolean(this[kView][byteOffset] & mask)
  }

  [kSet] (offset, value) {
    const byteOffset = (offset / 8) | 0
    const bitOffset = (offset % 8) | 0
    const mask = 0x80 >> bitOffset

    if (value) {
      this[kView][byteOffset] = this[kView][byteOffset] | mask
    } else {
      this[kView][byteOffset] = this[kView][byteOffset] & ~mask
    }

    return true
  }

  toString () {
    if (this.length === 0) return ''

    let str = ''
    let first = true

    for (const value of this.values()) {
      if (first) {
        first = false
      } else {
        str += ','
      }

      str += (value ? 'true' : 'false')
    }

    return str
  }

  toLocaleString () {
    return this.toString()
  }

  * keys () {
    for (let idx = 0; idx < this.length; idx++) yield idx
  }

  * values () {
    let left = this.length

    for (const byte of this[kView]) {
      if (left-- === 0) break; yield Boolean(byte & 0x80)
      if (left-- === 0) break; yield Boolean(byte & 0x40)
      if (left-- === 0) break; yield Boolean(byte & 0x20)
      if (left-- === 0) break; yield Boolean(byte & 0x10)
      if (left-- === 0) break; yield Boolean(byte & 0x08)
      if (left-- === 0) break; yield Boolean(byte & 0x04)
      if (left-- === 0) break; yield Boolean(byte & 0x02)
      if (left-- === 0) break; yield Boolean(byte & 0x01)
    }
  }

  * entries () {
    let index = 0
    let left = this.length

    for (const byte of this[kView]) {
      if (left-- === 0) break; yield [index++, Boolean(byte & 0x80)]
      if (left-- === 0) break; yield [index++, Boolean(byte & 0x40)]
      if (left-- === 0) break; yield [index++, Boolean(byte & 0x20)]
      if (left-- === 0) break; yield [index++, Boolean(byte & 0x10)]
      if (left-- === 0) break; yield [index++, Boolean(byte & 0x08)]
      if (left-- === 0) break; yield [index++, Boolean(byte & 0x04)]
      if (left-- === 0) break; yield [index++, Boolean(byte & 0x02)]
      if (left-- === 0) break; yield [index++, Boolean(byte & 0x01)]
    }
  }

  [Symbol.iterator] () {
    return this.values()
  }
}

function build (items) {
  const Klass = this[Symbol.species]
  const array = new Klass(items.length)

  for (let idx = 0; idx < items.length; idx++) {
    array[idx] = items[idx]
  }

  return array
}

BooleanArray.of = function (...items) {
  return build.call(this, items)
}

BooleanArray.from = function (source, mapFn, thisArg) {
  if (source instanceof Array && mapFn == null) {
    return build.call(this, source)
  }

  return build.call(this, Array.from(source, mapFn, thisArg))
}

const proxyHandler = {
  has (target, property) {
    if (reIndex.test(String(property))) {
      const index = Number(property)

      if (index < target.length) return true
    }

    return Reflect.has(target, property)
  },

  get (target, property, receiver) {
    if (reIndex.test(String(property))) {
      const index = Number(property)

      if (index < target.length) return target[kGet](index)
    }

    return Reflect.get(target, property, receiver)
  },

  set (target, property, value, receiver) {
    if (reIndex.test(property)) {
      const index = Number(property)

      if (index < target.length) return target[kSet](index, value)
    }

    return Reflect.set(target, property, value, receiver)
  }
}

module.exports = new Proxy(BooleanArray, {
  construct (Target, args) {
    return new Proxy(new Target(...args), proxyHandler)
  }
})

/**
 * The species accessor property returns the default constructor for typed array objects. Subclass constructors may over-ride it to change the constructor assignment.
 */
BooleanArray[Symbol.species] = module.exports
