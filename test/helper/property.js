const assert = require('assert')

const propertyCanBeSet = (Type, property, value) => {
  describe(`#${property}()`, function () {
    it('can be set', function () {
      var config = Type()
        [property](value)
        .generate()
      assert.equal(config[property], value)
    })
  })
}

module.exports = propertyCanBeSet
