const assert = require('assert')

const propertyCanBeSet = (Type, property, value) => {
  describe(`#${property}()`, function () {
    it('can be set', function () {
      if (value === undefined) {
        throw new Error('no value provided')
      }

      let config = Type()
        [property](value)
        .generate()
      assert.equal(config[property], value)
    })
  })
}

module.exports = propertyCanBeSet
