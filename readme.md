# efn

Extract a Function.

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
