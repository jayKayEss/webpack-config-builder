const assert = require('assert')

const hasANestedObject = (Type, property) => {
  describe(`#${property}()`, function() {
    it('is a nested object', function() {
      var config = Type()
        [property]((type) => type)
        .generate()
      assert.deepEqual(config[property], {})
    })
  })
}

module.exports = hasANestedObject
