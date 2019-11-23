'use strict'

const assert = require('assert')
const efn = require('.')

describe('efn()', function () {
  it('should return a bound function', function () {
    class Test {
      a () { return this.b() }
      b () { return 'value' }
    }

    const test = new Test()
    const callback = efn(test, 'a')
    assert.strictEqual(callback(), 'value')
  })

  it('should return undefined if the function does not exist', function () {
    class Test {}
    assert.strictEqual(typeof efn(new Test(), 'a'), 'undefined')
  })

  it('should return a non-function as-is', function () {
    class Test {
      get a () { return 123 }
    }
    assert.strictEqual(efn(new Test(), 'a'), 123)
  })
})
