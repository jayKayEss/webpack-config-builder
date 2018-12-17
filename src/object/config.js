"use strict"
const BaseObject = require('../trait/baseObject')
const HasProperty = require('../trait/hasProperty')
const HasObject = require('../trait/hasObject')
const HasConditionals = require('../trait/hasConditionals')
const Output = require('./output')

const DefaultConfig = (environment) => {
  return {}
}

const Config = (prev) => {
  let previous = prev || DefaultConfig
  let instance = BaseObject(previous)

  instance.mode = HasProperty('mode', previous, Config)
  instance.entry = HasProperty('entry', previous, Config)
  instance.devtool = HasProperty('devtool', previous, Config)
  instance.context = HasProperty('context', previous, Config)
  instance.target = HasProperty('target', previous, Config)
  instance.stats = HasProperty('stats', previous, Config)

  instance.output = HasObject('output', previous, Config, Output)

  instance.if = HasConditionals.IfFunc(previous, Config)
  instance.ifEnv = HasConditionals.IfEnv(previous, Config)
  instance.unlessEnv = HasConditionals.UnlessEnv(previous, Config)

  return instance
}

module.exports = Config
