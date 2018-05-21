/**
  * A typed array of 1-bit boolean values. The contents are initialized to 0. If the
  * requested number of bytes could not be allocated an exception is raised.
  */
 interface BooleanArray {
  /**
    * The size in bytes of each element in the array.
    */
  readonly BYTES_PER_ELEMENT: number

  /**
    * The ArrayBuffer instance referenced by the array.
    */
  readonly buffer: ArrayBufferLike

  /**
    * The length in bytes of the array.
    */
  readonly byteLength: number

  /**
    * The offset in bytes of the array.
    */
  readonly byteOffset: number

  /**
    * Returns the this object after copying a section of the array identified by start and end
    * to the same array starting at position target
    * @param target If target is negative, it is treated as length+target where length is the
    * length of the array.
    * @param start If start is negative, it is treated as length+start. If end is negative, it
    * is treated as length+end.
    * @param end If not specified, length of the this object is used as its default value.
    */
  // copyWithin(target: number, start: number, end?: number): this

  /**
    * Determines whether all the members of an array satisfy the specified test.
    * @param callbackfn A function that accepts up to three arguments. The every method calls
    * the callbackfn function for each element in array1 until the callbackfn returns false,
    * or until the end of the array.
    * @param thisArg An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */
  // every(callbackfn: (value: boolean, index: number, array: BooleanArray) => boolean, thisArg?: any): boolean

  /**
      * Returns the this object after filling the section identified by start and end with value
      * @param value value to fill array section with
      * @param start index to start filling the array at. If start is negative, it is treated as
      * length+start where length is the length of the array.
      * @param end index to stop filling the array at. If end is negative, it is treated as
      * length+end.
      */
  // fill(value: boolean, start?: number, end?: number): this

  /**
    * Returns the elements of an array that meet the condition specified in a callback function.
    * @param callbackfn A function that accepts up to three arguments. The filter method calls
    * the callbackfn function one time for each element in the array.
    * @param thisArg An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */
  // filter(callbackfn: (value: boolean, index: number, array: BooleanArray) => any, thisArg?: any): BooleanArray

  /**
    * Returns the value of the first element in the array where predicate is true, and undefined
    * otherwise.
    * @param predicate find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found, find
    * immediately returns that element value. Otherwise, find returns undefined.
    * @param thisArg If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */
  // find(predicate: (value: boolean, index: number, obj: BooleanArray) => boolean, thisArg?: any): boolean | undefined

  /**
    * Returns the index of the first element in the array where predicate is true, and -1
    * otherwise.
    * @param predicate find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found,
    * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
    * @param thisArg If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */
  // findIndex(predicate: (value: boolean, index: number, obj: BooleanArray) => boolean, thisArg?: any): number

  /**
    * Performs the specified action for each element in an array.
    * @param callbackfn  A function that accepts up to three arguments. forEach calls the
    * callbackfn function one time for each element in the array.
    * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */
  // forEach(callbackfn: (value: boolean, index: number, array: BooleanArray) => void, thisArg?: any): void

  /**
    * Returns the index of the first occurrence of a value in an array.
    * @param searchElement The value to locate in the array.
    * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
    *  search starts at index 0.
    */
  // indexOf(searchElement: boolean, fromIndex?: number): number

  /**
    * Adds all the elements of an array separated by the specified separator string.
    * @param separator A string used to separate one element of an array from the next in the
    * resulting String. If omitted, the array elements are separated with a comma.
    */
  // join(separator?: string): string

  /**
    * Returns the index of the last occurrence of a value in an array.
    * @param searchElement The value to locate in the array.
    * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
    * search starts at index 0.
    */
  // lastIndexOf(searchElement: boolean, fromIndex?: number): number

  /**
    * The length of the array.
    */
  readonly length: number

  /**
    * Calls a defined callback function on each element of an array, and returns an array that
    * contains the results.
    * @param callbackfn A function that accepts up to three arguments. The map method calls the
    * callbackfn function one time for each element in the array.
    * @param thisArg An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */
  // map(callbackfn: (value: boolean, index: number, array: BooleanArray) => boolean, thisArg?: any): BooleanArray

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param initialValue If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */
  // reduce(callbackfn: (previousValue: boolean, currentValue: boolean, currentIndex: number, array: BooleanArray) => boolean): boolean
  // reduce(callbackfn: (previousValue: boolean, currentValue: boolean, currentIndex: number, array: BooleanArray) => boolean, initialValue: boolean): boolean

  /**
    * Calls the specified callback function for all the elements in an array. The return value of
    * the callback function is the accumulated result, and is provided as an argument in the next
    * call to the callback function.
    * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
    * callbackfn function one time for each element in the array.
    * @param initialValue If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */
  // reduce<U>(callbackfn: (previousValue: U, currentValue: boolean, currentIndex: number, array: BooleanArray) => U, initialValue: U): U

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param initialValue If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an
    * argument instead of an array value.
    */
  // reduceRight(callbackfn: (previousValue: boolean, currentValue: boolean, currentIndex: number, array: BooleanArray) => boolean): boolean
  // reduceRight(callbackfn: (previousValue: boolean, currentValue: boolean, currentIndex: number, array: BooleanArray) => boolean, initialValue: boolean): boolean

  /**
    * Calls the specified callback function for all the elements in an array, in descending order.
    * The return value of the callback function is the accumulated result, and is provided as an
    * argument in the next call to the callback function.
    * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
    * the callbackfn function one time for each element in the array.
    * @param initialValue If initialValue is specified, it is used as the initial value to start
    * the accumulation. The first call to the callbackfn function provides this value as an argument
    * instead of an array value.
    */
  // reduceRight<U>(callbackfn: (previousValue: U, currentValue: boolean, currentIndex: number, array: BooleanArray) => U, initialValue: U): U

  /**
    * Reverses the elements in an Array.
    */
  // reverse(): BooleanArray

  /**
    * Sets a value or an array of values.
    * @param array A typed or untyped array of values to set.
    * @param offset The index in the current array at which the values are to be written.
    */
  // set(array: ArrayLike<boolean>, offset?: number): void

  /**
    * Returns a section of an array.
    * @param start The beginning of the specified portion of the array.
    * @param end The end of the specified portion of the array.
    */
  // slice(start?: number, end?: number): BooleanArray

  /**
    * Determines whether the specified callback function returns true for any element of an array.
    * @param callbackfn A function that accepts up to three arguments. The some method calls the
    * callbackfn function for each element in array1 until the callbackfn returns true, or until
    * the end of the array.
    * @param thisArg An object to which the this keyword can refer in the callbackfn function.
    * If thisArg is omitted, undefined is used as the this value.
    */
  // some(callbackfn: (value: boolean, index: number, array: BooleanArray) => boolean, thisArg?: any): boolean

  /**
    * Sorts an array.
    * @param compareFn The name of the function used to determine the order of the elements. If
    * omitted, the elements are sorted in ascending, ASCII character order.
    */
  // sort(compareFn?: (a: boolean, b: boolean) => number): this

  /**
    * Gets a new BooleanArray view of the ArrayBuffer store for this array, referencing the elements
    * at begin, inclusive, up to end, exclusive.
    * @param begin The index of the beginning of the array.
    * @param end The index of the end of the array.
    */
  // subarray(begin: number, end?: number): BooleanArray

  /**
    * Converts a number to a string by using the current locale.
    */
  toLocaleString(): string

  /**
    * Returns a string representation of an array.
    */
  toString(): string

  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, boolean]>

  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>

  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<boolean>

  [index: number]: boolean
  [Symbol.iterator](): IterableIterator<boolean>
}

interface BooleanArrayConstructor {
  readonly prototype: BooleanArray
  new (): BooleanArray
  new (length: number): BooleanArray
  new (arrayOrArrayBuffer: ArrayLike<boolean> | ArrayBufferLike): BooleanArray
  new (buffer: ArrayBufferLike, byteOffset: number, length?: number): BooleanArray

  /**
    * The size in bytes of each element in the array.
    */
  readonly BYTES_PER_ELEMENT: number

  /**
    * Returns a new array from a set of elements.
    * @param items A set of elements to include in the new array object.
    */
  of(...items: boolean[]): BooleanArray

  /**
    * Creates an array from an array-like or iterable object.
    * @param arrayLike An array-like or iterable object to convert to an array.
    * @param mapfn A mapping function to call on every element of the array.
    * @param thisArg Value of 'this' used to invoke the mapfn.
    */
  from(arrayLike: ArrayLike<boolean>, mapfn?: (v: boolean, k: number) => boolean, thisArg?: any): BooleanArray
}

declare const BooleanArray: BooleanArrayConstructor
export = BooleanArray
