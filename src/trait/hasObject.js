"use strict"

const HasObject = (name, previous, Type, Subtype) => {
  return (block) => {
    let nested = block(Subtype())
    return Type((environment) => {
      let data = previous(environment)
      data[name] = nested.generate(environment)
      return data
    })
  }
}

module.exports = HasObject
