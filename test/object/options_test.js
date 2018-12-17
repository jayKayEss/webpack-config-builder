"use strict"
const assert = require('assert')
const conditionalsCanBeCalled = require('../helper/conditionals')
const Options = require('../../src/object/options')

describe('Options', function() {
  describe('#set()', function() {
    it('sets an arbitrary key', function() {
      var config = Options()
        .set('foo', 'bar')
        .generate()
      assert.deepEqual(config, {foo: 'bar'})
    })

    it('merges option keys', function() {
      var previous = (environment) => {
        return {foo: 'bar'}
      }
      var config = Options(previous)
        .set('bar', 'baz')
        .generate()
      assert.deepEqual(config, {foo: 'bar', bar: 'baz'})
    })
  })
  conditionalsCanBeCalled(Options)
})
