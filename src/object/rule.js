"use strict"
const BaseObject = require('../trait/baseObject')
const HasProperty = require('../trait/hasProperty')
const HasConditionals = require('../trait/hasConditionals')

const DefaultConfig = (environment) => {
  return {}
}

const Rule = (prev) => {
  let previous = prev || DefaultConfig
  let instance = BaseObject(previous)

  instance.if = HasConditionals.IfFunc(previous, Rule)
  instance.ifEnv = HasConditionals.IfEnv(previous, Rule)
  instance.unlessEnv = HasConditionals.UnlessEnv(previous, Rule)

  return instance
}

module.exports = Rule
