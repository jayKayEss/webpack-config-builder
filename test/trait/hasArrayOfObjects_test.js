"use strict"
const assert = require('assert')
const BaseObject = require('../../src/trait/baseObject')
const HasArrayOfObjects = require('../../src/trait/hasArrayOfObjects')

describe('hasArrayOfObjects', function() {
  it('passes an object to the callback', function() {
    let passed = undefined
    const previous = (environment) => {
      return {}
    }
    const foo = HasArrayOfObjects('foo', previous, BaseObject, BaseObject)
    foo((object) => {
      passed = object
    })
    assert.notStrictEqual(passed, undefined)
  })

  it('composes a nested object', function() {
    const previous = (environment) => {
      return {}
    }
    const foo = HasArrayOfObjects('foo', previous, BaseObject, BaseObject)
    const config = foo((object) => {
      return BaseObject((previous) => {
        return 'baz'
      })
    }).generate()

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
    const foo = HasArrayOfObjects('foo', previous, BaseObject, BaseObject)
    const config = foo((object) => {
      return BaseObject((previous) => {
        return 'baz'
      })
    }).generate()

    let expected = {
      foo: ['bar', 'baz']
    }
    assert.deepEqual(config, expected)
  })
})