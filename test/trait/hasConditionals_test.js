"use strict"
const assert = require('assert')
const BaseObject = require('../../src/trait/baseObject')
const HasConditionals = require('../../src/trait/hasConditionals')

describe('HasConditionals', function() {
  describe('#If()', function() {
    it('respects true', function() {
      const previous = (environment) => {
        return "Test Pending"
      }
      const ifFunc = HasConditionals.IfFunc(previous, BaseObject)
      const instance = ifFunc(true, (instance) => {
          let data = instance.generate();
          assert.equal("Test Pending", data)
          return BaseObject((environment) => {
            return "Test OK"
          })
      })
      assert.equal("Test OK", instance.generate())
    })

    it('respects false', function() {
      const previous = (environment) => {
        return "Test OK"
      }
      const ifFunc = HasConditionals.IfFunc(previous, BaseObject)
      const instance = ifFunc(false, (instance) => {
          return BaseObject((environment) => {
            return "Test NOT OK"
          })
      })
      assert.equal("Test OK", instance.generate())
    })
  })

  describe('#IfEnv()', function() {
    it ('matches the environment', function() {
      const previous = (environment) => {
        return "Test Pending"
      }
      const ifFunc = HasConditionals.IfEnv(previous, BaseObject)
      const instance = ifFunc('testing', (instance) => {
          let data = instance.generate();
          assert.equal("Test Pending", data)
          return BaseObject((environment) => {
            return "Test OK"
          })
      })
      assert.equal("Test OK", instance.generate('testing'))
    })

    it("doesn't match the environment", function() {
      const previous = (environment) => {
        return "Test OK"
      }
      const ifFunc = HasConditionals.IfEnv(previous, BaseObject)
      const instance = ifFunc('production', (instance) => {
          return BaseObject((environment) => {
            return "Test NOT OK"
          })
      })
      assert.equal("Test OK", instance.generate('testing'))
    })
  })

  describe('#UnlessEnv', function() {
    it('matches the environment', function() {
      const previous = (environment) => {
        return "Test OK"
      }
      const ifFunc = HasConditionals.UnlessEnv(previous, BaseObject)
      const instance = ifFunc('testing', (instance) => {
          return BaseObject((environment) => {
            return "Test NOT OK"
          })
      })
      assert.equal("Test OK", instance.generate('testing'))
    })

    it("doesn't match the environment", function() {
      const previous = (environment) => {
        return "Test Pending"
      }
      const ifFunc = HasConditionals.UnlessEnv(previous, BaseObject)
      const instance = ifFunc('production', (instance) => {
          let data = instance.generate();
          assert.equal("Test Pending", data)
          return BaseObject((environment) => {
            return "Test OK"
          })
      })
      assert.equal("Test OK", instance.generate('testing'))
    })
  })
})
