const assert = require('assert')

const conditionalsCanBeCalled = (Type) => {
  describe('#if()', function() {
    it('executes if true', function() {
      var executed = false
      Type()
        .if(true, (type) => {
          executed = true
          return type
        })
        .generate()
      assert(executed, "callback should execute")
    })

    it("doesn't execute if false", function() {
      var executed = false
      Type()
        .if(false, (type) => {
          executed = true
          return type
        })
        .generate()
      assert(!executed, "callback should not execute")
    })
  })

  describe('#ifEnv()', function() {
    it("matches the environment", function() {
      var executed = false
      Type()
        .ifEnv('production', (type) => {
          executed = true
          return type
        })
        .generate('production')
      assert(executed, "callback should execute")
    })

    it("doesn't match the environment", function() {
      var executed = false
      Type()
        .ifEnv('production', (type) => {
          executed = true
          return type
        })
        .generate('development')
      assert(!executed, "callback should not execute")
    })
  })

  describe('#unlessEnv()', function() {
    it("matches the environment", function() {
      var executed = false
      Type()
        .unlessEnv('development', (type) => {
          executed = true
          return type
        })
        .generate('production')
      assert(executed, "callback should execute")
    })

    it("doesn't match the environment", function() {
      var executed = false
      Type()
        .unlessEnv('development', (type) => {
          executed = true
          return type
        })
        .generate('development')
      assert(!executed, "callback should not execute")
    })
  })
}

module.exports = conditionalsCanBeCalled
