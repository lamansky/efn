# Extracted Function (efn)

```javascript
module.exports = (obj, key) => obj[key].bind(obj)
```

If you assign an object method to a variable (or pass it to a function as a callback argument) and then call it later, the method will be called without being bound to the object. In other words, it’ll have no `this` context. To fix this, use this module to “extract” the method from the object.

This module provides the same functionality as the proposed [unary bind operator](https://github.com/tc39/proposal-bind-operator).

## Installation

Requires [Node.js](https://nodejs.org/) 4.0.0 or above.

```bash
npm i efn
```

## API

The module exports a single function.

### Parameters

1. `obj` (object): The object from which you want to extract a method.
2. `key` (string, number, or symbol): The key that points to the function you’re extracting.

### Return Value

The extracted function, bound to `obj`.

## Example

```javascript
class Test {
  a () { return this.b() }
  b () { return 'value' }
}

const test = new Test()

// Before:

test.a() // 'value'

const callback = test.a
callback() // Throws TypeError: Cannot read property 'b' of undefined

// After:

const efn = require('efn')

const extracted = efn(test, 'a')
extracted() // 'value'
```

## Related

This module is part of the `fn` family of modules.

* [ffn](https://github.com/lamansky/ffn): Filtering Function
* [jfn](https://github.com/lamansky/jfn): Joined Function
* [mfn](https://github.com/lamansky/mfn): Memoized Function
* [ofn](https://github.com/lamansky/ofn): Overloaded Function
* [pfn](https://github.com/lamansky/pfn): Possible Function
* [qfn](https://github.com/lamansky/qfn): Qualified Function
* [vfn](https://github.com/lamansky/vfn): Variadic Function
* [wfn](https://github.com/lamansky/wfn): Wrapper Function
* [xfn](https://github.com/lamansky/xfn): Extended Function
* [3fn](https://github.com/lamansky/3fn): Three-Way Comparison Function
