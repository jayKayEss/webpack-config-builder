const assert = require('assert')

const arrayPropertyCanBeSet = (Type, property) => {
  describe(`#${property}()`, function() {
    it('is an array of objects', function() {
      let config = Type()
        [property]('foo')
        .generate()
      assert.deepEqual(config[property], ['foo'])
    })

    it('appends new values', function() {
      let config = Type()
        [property]('foo')
        [property]('bar')
        .generate()
      assert.deepEqual(config[property], ['foo', 'bar'])
    })
  })
}

module.exports = arrayPropertyCanBeSet
