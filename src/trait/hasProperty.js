"use strict"

const HasProperty = (name, previous, Type) => {
  return (value) => {
    return Type((environment) => {
      var data = previous(environment)
      data[name] = value
      return data
    })
  }
}

module.exports = HasProperty
