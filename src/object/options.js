"use strict"
const BaseObject = require('../trait/baseObject')
const HasConditionals = require('../trait/hasConditionals')

const DefaultConfig = (environment) => {
  return {}
}

const Options = (prev) => {
  let previous = prev || DefaultConfig
  let instance = BaseObject(previous)

  instance.set = (name, value) => {
    return Options((environment) => {
      let data = previous(environment)
      data[name] = value
      return data
    })
  }

  instance.if = HasConditionals.IfFunc(previous, Options)
  instance.ifEnv = HasConditionals.IfEnv(previous, Options)
  instance.unlessEnv = HasConditionals.UnlessEnv(previous, Options)

  return instance
}

module.exports = Options

