"use strict"

const HasArray = (name, previous, Type) => {
  return (value) => {
    return Type((environment) => {
      let data = previous(environment)
      data[name] = data[name] ? [...data[name], value] : [value]
      return data
    })
  }
}

module.exports = HasArray
