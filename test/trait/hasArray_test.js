"use strict"
const assert = require('assert')
const BaseObject = require('../../src/trait/baseObject')
const HasArray = require('../../src/trait/HasArray')

describe('HasArray', function() {
  it('composes a nested object', function() {
    const previous = (environment) => {
      return {}
    }
    const foo = HasArray('foo', previous, BaseObject, BaseObject)
    const config = foo('baz')
      .generate()

    let expected = {
      foo: ['baz']
    }
    assert.deepEqual(config, expected)
  })

  it('appends data to the array', function() {
    const previous = (environment) => {
      return {
        foo: ['bar']
      }
    }
    const foo = HasArray('foo', previous, BaseObject, BaseObject)
    const config = foo('baz')
      .generate()

    let expected = {
      foo: ['bar', 'baz']
    }
    assert.deepEqual(config, expected)
  })
})