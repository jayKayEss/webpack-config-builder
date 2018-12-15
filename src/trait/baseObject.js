"use strict"

const BaseObject = (previous) => {
  return {
    generate: (environment) => {
      return previous(environment)
    }
  }
}

module.exports = BaseObject
