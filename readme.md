# `BooleanArray`

A typed array of 1-bit boolean values.

## Installation

```sh
npm install --save boolean-array
```

## Usage

```js
const BooleanArray = require('./')

const flags = new BooleanArray(10)

flags[0] = true
flags[3] = true
flags[8] = true

console.log(flags)
//=> BooleanArray [ true, false, false, true, false, false, false, false, true, false ]
```

## Implementation status

&nbsp; | Constructor
----- | -----
✅ | `new BooleanArray()`
✅ | `new BooleanArray(length)`
✅ | `new BooleanArray(typedArray)`
✅ | `new BooleanArray(object)`
✅ | `new BooleanArray(buffer [, byteOffset [, length]])`

&nbsp; | Property
----- | -----
✅ | `BooleanArray.BYTES_PER_ELEMENT`
✅ | `BooleanArray.name`
✅ | `BooleanArray.prototype`
✅ | `BooleanArray.prototype.buffer`
✅ | `BooleanArray.prototype.byteLength`
✅ | `BooleanArray.prototype.byteOffset`
✅ | `BooleanArray.prototype.length`
✅ | `get BooleanArray[@@species]`

&nbsp; | Method
----- | -----
✅ | `BooleanArray.from()`
✅ | `BooleanArray.of()`
❌ | `BooleanArray.prototype.copyWithin()`
✅ | `BooleanArray.prototype.entries()`
❌ | `BooleanArray.prototype.every()`
❌ | `BooleanArray.prototype.fill()`
❌ | `BooleanArray.prototype.filter()`
❌ | `BooleanArray.prototype.find()`
❌ | `BooleanArray.prototype.findIndex()`
❌ | `BooleanArray.prototype.forEach()`
❌ | `BooleanArray.prototype.includes()`
❌ | `BooleanArray.prototype.indexOf()`
❌ | `BooleanArray.prototype.join()`
✅ | `BooleanArray.prototype.keys()`
❌ | `BooleanArray.prototype.lastIndexOf()`
❌ | `BooleanArray.prototype.map()`
❌ | `BooleanArray.prototype.reduce()`
❌ | `BooleanArray.prototype.reduceRight()`
❌ | `BooleanArray.prototype.reverse()`
❌ | `BooleanArray.prototype.set()`
❌ | `BooleanArray.prototype.slice()`
❌ | `BooleanArray.prototype.some()`
❌ | `BooleanArray.prototype.sort()`
❌ | `BooleanArray.prototype.subarray()`
✅ | `BooleanArray.prototype.toLocaleString()`
✅ | `BooleanArray.prototype.toString()`
✅ | `BooleanArray.prototype.values()`
✅ | `BooleanArray.prototype[@@iterator]()`
