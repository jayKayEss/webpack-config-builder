"use strict"
const BaseObject = require('./trait/baseObject')
const HasProperty = require('./trait/hasProperty')
const HasConditionals = require('./trait/hasConditionals')

const DefaultConfig = (environment) => {
  return {}
}

const Config = (previous) => {
  var previous = previous || DefaultConfig
  var instance = BaseObject(previous)

  instance.mode = HasProperty('mode', previous, Config)
  instance.entry = HasProperty('entry', previous, Config)
  instance.devtool = HasProperty('devtool', previous, Config)
  instance.context = HasProperty('context', previous, Config)
  instance.target = HasProperty('target', previous, Config)
  instance.stats = HasProperty('stats', previous, Config)

  instance.if = HasConditionals.IfFunc(previous, Config)
  instance.ifEnv = HasConditionals.IfEnv(previous, Config)
  instance.unlessEnv = HasConditionals.UnlessEnv(previous, Config)

  return instance
}

module.exports = Config
