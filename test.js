const assert = require('assert')
const util = require('util')

const BooleanArray = require('./')

assert.strictEqual(BooleanArray.name, 'BooleanArray')
assert.strictEqual(BooleanArray[Symbol.species], BooleanArray)

{
  const a = new BooleanArray()

  assert.ok(a instanceof BooleanArray)
  assert.strictEqual(a.length, 0)
  assert.strictEqual(a[0], undefined)
}

{
  const a = new BooleanArray(4)

  assert.strictEqual(util.inspect(a), 'BooleanArray [ false, false, false, false ]')
}

{
  const a = new BooleanArray(8)

  assert.strictEqual(a[0], false)
  assert.strictEqual(a[1], false)
  assert.strictEqual(a[2], false)
  assert.strictEqual(a[3], false)
  assert.strictEqual(a[4], false)
  assert.strictEqual(a[5], false)
  assert.strictEqual(a[6], false)
  assert.strictEqual(a[7], false)
  assert.strictEqual(a[8], undefined)

  a[0] = true

  assert.strictEqual(a[0], true)
  assert.strictEqual(a[1], false)
  assert.strictEqual(a[2], false)
  assert.strictEqual(a[3], false)
  assert.strictEqual(a[4], false)
  assert.strictEqual(a[5], false)
  assert.strictEqual(a[6], false)
  assert.strictEqual(a[7], false)

  a[3] = true

  assert.strictEqual(a[0], true)
  assert.strictEqual(a[1], false)
  assert.strictEqual(a[2], false)
  assert.strictEqual(a[3], true)
  assert.strictEqual(a[4], false)
  assert.strictEqual(a[5], false)
  assert.strictEqual(a[6], false)
  assert.strictEqual(a[7], false)

  a[0] = false

  assert.strictEqual(a[0], false)
  assert.strictEqual(a[1], false)
  assert.strictEqual(a[2], false)
  assert.strictEqual(a[3], true)
  assert.strictEqual(a[4], false)
  assert.strictEqual(a[5], false)
  assert.strictEqual(a[6], false)
  assert.strictEqual(a[7], false)

  a[7] = true

  assert.strictEqual(a[0], false)
  assert.strictEqual(a[1], false)
  assert.strictEqual(a[2], false)
  assert.strictEqual(a[3], true)
  assert.strictEqual(a[4], false)
  assert.strictEqual(a[5], false)
  assert.strictEqual(a[6], false)
  assert.strictEqual(a[7], true)
}

{
  const a = new BooleanArray([true, false, false])

  assert.strictEqual(a.length, 3)
  assert.strictEqual(a.byteLength, 1)

  assert.strictEqual(a[0], true)
  assert.strictEqual(a[1], false)
  assert.strictEqual(a[2], false)
  assert.strictEqual(a[3], undefined)
}

{
  const a = BooleanArray.of(true, true, false, true, false, false, false, true)

  assert.strictEqual(a.byteLength, 1)
  assert.strictEqual(a[0], true)
  assert.strictEqual(a[1], true)
  assert.strictEqual(a[2], false)
  assert.strictEqual(a[3], true)
  assert.strictEqual(a[4], false)
  assert.strictEqual(a[5], false)
  assert.strictEqual(a[6], false)
  assert.strictEqual(a[7], true)
}

{
  const a = BooleanArray.from([true, true, false, true, false, false, false, true])

  assert.strictEqual(a.byteLength, 1)
  assert.strictEqual(a[0], true)
  assert.strictEqual(a[1], true)
  assert.strictEqual(a[2], false)
  assert.strictEqual(a[3], true)
  assert.strictEqual(a[4], false)
  assert.strictEqual(a[5], false)
  assert.strictEqual(a[6], false)
  assert.strictEqual(a[7], true)
}

{
  const a = BooleanArray.from([1, 1, 0, 1, 0, 0, 0, 1], Boolean)

  assert.strictEqual(a.byteLength, 1)
  assert.strictEqual(a[0], true)
  assert.strictEqual(a[1], true)
  assert.strictEqual(a[2], false)
  assert.strictEqual(a[3], true)
  assert.strictEqual(a[4], false)
  assert.strictEqual(a[5], false)
  assert.strictEqual(a[6], false)
  assert.strictEqual(a[7], true)
}

{
  const a = BooleanArray.from({ length: 8 }, () => true)

  assert.strictEqual(a.byteLength, 1)
  assert.strictEqual(a[0], true)
  assert.strictEqual(a[1], true)
  assert.strictEqual(a[2], true)
  assert.strictEqual(a[3], true)
  assert.strictEqual(a[4], true)
  assert.strictEqual(a[5], true)
  assert.strictEqual(a[6], true)
  assert.strictEqual(a[7], true)
}

{
  const view = Uint8Array.of(0b11001100, 0b01010101)
  const a = new BooleanArray(view.buffer, view.byteOffset, 16)

  assert.strictEqual(a.byteLength, 2)
  assert.strictEqual(a[0x0], true)
  assert.strictEqual(a[0x1], true)
  assert.strictEqual(a[0x2], false)
  assert.strictEqual(a[0x3], false)
  assert.strictEqual(a[0x4], true)
  assert.strictEqual(a[0x5], true)
  assert.strictEqual(a[0x6], false)
  assert.strictEqual(a[0x7], false)
  assert.strictEqual(a[0x8], false)
  assert.strictEqual(a[0x9], true)
  assert.strictEqual(a[0xA], false)
  assert.strictEqual(a[0xB], true)
  assert.strictEqual(a[0xC], false)
  assert.strictEqual(a[0xD], true)
  assert.strictEqual(a[0xE], false)
  assert.strictEqual(a[0xF], true)
}

{
  const a = BooleanArray.of(true, false, false, true, false, true, false, true)
  const keys = a.keys()
  const values = a.values()
  const entries = a.entries()

  assert.deepStrictEqual(keys.next(), { value: 0, done: false })
  assert.deepStrictEqual(keys.next(), { value: 1, done: false })
  assert.deepStrictEqual(keys.next(), { value: 2, done: false })
  assert.deepStrictEqual(keys.next(), { value: 3, done: false })
  assert.deepStrictEqual(keys.next(), { value: 4, done: false })
  assert.deepStrictEqual(keys.next(), { value: 5, done: false })
  assert.deepStrictEqual(keys.next(), { value: 6, done: false })
  assert.deepStrictEqual(keys.next(), { value: 7, done: false })
  assert.deepStrictEqual(keys.next(), { value: undefined, done: true })

  assert.deepStrictEqual(values.next(), { value: true, done: false })
  assert.deepStrictEqual(values.next(), { value: false, done: false })
  assert.deepStrictEqual(values.next(), { value: false, done: false })
  assert.deepStrictEqual(values.next(), { value: true, done: false })
  assert.deepStrictEqual(values.next(), { value: false, done: false })
  assert.deepStrictEqual(values.next(), { value: true, done: false })
  assert.deepStrictEqual(values.next(), { value: false, done: false })
  assert.deepStrictEqual(values.next(), { value: true, done: false })
  assert.deepStrictEqual(values.next(), { value: undefined, done: true })

  assert.deepStrictEqual(entries.next(), { value: [0, true], done: false })
  assert.deepStrictEqual(entries.next(), { value: [1, false], done: false })
  assert.deepStrictEqual(entries.next(), { value: [2, false], done: false })
  assert.deepStrictEqual(entries.next(), { value: [3, true], done: false })
  assert.deepStrictEqual(entries.next(), { value: [4, false], done: false })
  assert.deepStrictEqual(entries.next(), { value: [5, true], done: false })
  assert.deepStrictEqual(entries.next(), { value: [6, false], done: false })
  assert.deepStrictEqual(entries.next(), { value: [7, true], done: false })
  assert.deepStrictEqual(entries.next(), { value: undefined, done: true })
}

{
  const a = BooleanArray.of(true, false, false)
  const keys = a.keys()
  const values = a.values()
  const entries = a.entries()

  assert.deepStrictEqual(keys.next(), { value: 0, done: false })
  assert.deepStrictEqual(keys.next(), { value: 1, done: false })
  assert.deepStrictEqual(keys.next(), { value: 2, done: false })
  assert.deepStrictEqual(keys.next(), { value: undefined, done: true })

  assert.deepStrictEqual(values.next(), { value: true, done: false })
  assert.deepStrictEqual(values.next(), { value: false, done: false })
  assert.deepStrictEqual(values.next(), { value: false, done: false })
  assert.deepStrictEqual(values.next(), { value: undefined, done: true })

  assert.deepStrictEqual(entries.next(), { value: [0, true], done: false })
  assert.deepStrictEqual(entries.next(), { value: [1, false], done: false })
  assert.deepStrictEqual(entries.next(), { value: [2, false], done: false })
  assert.deepStrictEqual(entries.next(), { value: undefined, done: true })
}

{
  assert.strictEqual(BooleanArray.of().toString(), '')
  assert.strictEqual(BooleanArray.of(true).toString(), 'true')
  assert.strictEqual(BooleanArray.of(false, true).toString(), 'false,true')
  assert.strictEqual(BooleanArray.of(true, false, true).toString(), 'true,false,true')

  assert.strictEqual(BooleanArray.of().toString(), '')
  assert.strictEqual(BooleanArray.of(true).toString(), 'true')
  assert.strictEqual(BooleanArray.of(false, true).toString(), 'false,true')
  assert.strictEqual(BooleanArray.of(true, false, true).toString(), 'true,false,true')
}

{
  const a = BooleanArray.of(true, false, false)

  assert.strictEqual('0' in a, true)
  assert.strictEqual('1' in a, true)
  assert.strictEqual('2' in a, true)
  assert.strictEqual('3' in a, false)
}
