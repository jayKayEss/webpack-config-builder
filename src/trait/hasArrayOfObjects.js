"use strict"

const HasArrayOfObjects = (name, previous, Type, Subtype) => {
  return (block) => {
    let nested = block(Subtype())
    return Type((environment) => {
      let data = previous(environment)
      let newEntry = nested.generate(environment)
      data[name] = data[name] ? [...data[name], newEntry] : [newEntry]
      return data
    })
  }
}

module.exports = HasArrayOfObjects
