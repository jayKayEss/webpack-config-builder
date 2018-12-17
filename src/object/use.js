"use strict"
const BaseObject = require('../trait/baseObject')
const HasProperty = require('../trait/hasProperty')
const HasObject = require('../trait/hasObject')
const HasConditionals = require('../trait/hasConditionals')
const Options = require('./options')

const DefaultConfig = (environment) => {
  return {}
}

const Use = (prev) => {
  let previous = prev || DefaultConfig
  let instance = BaseObject(previous)

  instance.loader = HasProperty('loader', previous, Use)
  instance.options = HasObject('options', previous, Use, Options)

  instance.if = HasConditionals.IfFunc(previous, Use)
  instance.ifEnv = HasConditionals.IfEnv(previous, Use)
  instance.unlessEnv = HasConditionals.UnlessEnv(previous, Use)

  return instance
}

module.exports = Use
