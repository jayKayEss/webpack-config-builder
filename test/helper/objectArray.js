const assert = require('assert')

const hasArrayOfObjects = (Type, setter, property) => {
  describe(`#${property}()`, function() {
    it('is an array of objects', function() {
      let config = Type()
        [setter]((type) => type)
        .generate()
      assert.deepEqual(config[property], [{}])
    })
  })
}

module.exports = hasArrayOfObjects
