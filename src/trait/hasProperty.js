"use strict"

const HasProperty = (name, previous, Type) => {
  return (value) => {
    return Type((environment) => {
      let data = previous(environment)
      data[name] = value
      return data
    })
  }
}

module.exports = HasProperty
