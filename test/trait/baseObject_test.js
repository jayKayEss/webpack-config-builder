"use strict"
const assert = require('assert')
const BaseObject = require('../../src/trait/baseObject')

describe('BaseObject', function() {
  describe('constructor', function() {
    it('accepts a callback', function() {
      let callback = (environment) => {
        return "Test OK"
      }
      let instance = BaseObject(callback)
      assert.equal("Test OK", instance.generate())
    })

    it('passes environment to the callback', function() {
      let callback = (environment) => {
        return `Test OK ${environment}`
      }
      let instance = BaseObject(callback)
      assert.equal("Test OK testing", instance.generate('testing'))
    })
  })
})
