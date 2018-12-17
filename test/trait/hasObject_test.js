"use strict"
const assert = require('assert')
const BaseObject = require('../../src/trait/baseObject')
const HasObject = require('../../src/trait/hasObject')

describe('hasObject', function() {
  it('passes an object to the callback', function() {
    var passed = undefined
    const previous = (environment) => {
      return {}
    }
    const foo = HasObject('foo', previous, BaseObject, BaseObject)
    foo((object) => {
      passed = object
    })
    assert.notStrictEqual(passed, undefined)
  })

  it('composes a nested object', function() {
    const previous = (environment) => {
      return {}
    }
    const foo = HasObject('foo', previous, BaseObject, BaseObject)
    const config = foo((object) => {
      return BaseObject((previous) => {
        return { bar: 'baz' }
      })
    }).generate()

    var expected = {
      foo: {
        bar: 'baz'
      }
    }
    assert.deepEqual(config, expected)
  })
})