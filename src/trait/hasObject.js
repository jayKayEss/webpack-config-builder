"use strict"

const HasObject = (name, previous, Type, Subtype) => {
  return (block) => {
    var nested = block(Subtype())
    return Type((environment) => {
      var data = previous(environment)
      data[name] = nested.generate(environment)
      return data
    })
  }
}

module.exports = HasObject
