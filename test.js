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
})
