"use strict"
const assert = require('assert')
const Config = require('../src/config')

describe('Config', function() {
  describe('#mode()', function() {
    it('can be set', function() {
      var config = Config()
        .mode('development')
        .generate()
      assert.equal('development', config["mode"])
    })
  })

  describe('#entry()', function() {
    it('can be set', function() {
      var config = Config()
        .entry('src/main.js')
        .generate()
      assert.equal('src/main.js', config["entry"])
    })
  })

  describe('#devtool()', function() {
    it('can be set', function() {
      var config = Config()
        .devtool('source-map')
        .generate()
      assert.equal('source-map', config["devtool"])
    })
  })

  describe('#context()', function() {
    it('can be set', function() {
      var config = Config()
        .context(__dirname)
        .generate()
      assert.equal(__dirname, config["context"])
    })
  })

  describe('#target()', function() {
    it('can be set', function() {
      var config = Config()
        .target('web')
        .generate()
      assert.equal('web', config["target"])
    })
  })

  describe('#stats()', function() {
    it('can be set', function() {
      var config = Config()
        .stats('errors-only')
        .generate()
      assert.equal('errors-only', config["stats"])
    })
  })

  describe('#if()', function() {
    it('executes if true', function() {
      var config = Config()
        .mode('development')
        .if(true, (config) => config.mode('production'))
        .generate()
      assert.equal('production', config["mode"])
    })

    it("doesn't execute if false", function() {
      var config = Config()
        .mode('development')
        .if(false, (config) => config.mode('production'))
        .generate()
      assert.equal('development', config["mode"])
    })
  })

  describe('#ifEnv()', function() {
    it("matches the environment", function() {
      var config = Config()
        .mode('development')
        .ifEnv('production', (config) => config.mode('production'))
        .generate('production')
      assert.equal('production', config["mode"])
    })

    it("doesn't match the environment", function() {
      var config = Config()
        .mode('development')
        .ifEnv('production', (config) => config.mode('production'))
        .generate('development')
      assert.equal('development', config["mode"])
    })
  })

  describe('#unlessEnv()', function() {
    it("matches the environment", function() {
      var config = Config()
        .mode('development')
        .unlessEnv('development', (config) => config.mode('production'))
        .generate('production')
      assert.equal('production', config["mode"])
    })

    it("doesn't match the environment", function() {
      var config = Config()
        .mode('development')
        .unlessEnv('development', (config) => config.mode('production'))
        .generate('development')
      assert.equal('development', config["mode"])
    })
  })
})
