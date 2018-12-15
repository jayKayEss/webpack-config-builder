"use strict"
const assert = require('assert')
const BaseObject = require('../../src/trait/baseObject')
const HasProperty = require('../../src/trait/hasProperty')

describe('HasProperty', function() {
  it('sets a property', function() {
    const previous = (environment) => {
      return {}
    }
    const foo = HasProperty('foo', previous, BaseObject)
    const instance = foo("bar")
    assert.equal("bar", instance.generate()["foo"])
  })
})
