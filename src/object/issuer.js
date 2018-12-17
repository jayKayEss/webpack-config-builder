"use strict"
const BaseObject = require('../trait/baseObject')
const HasProperty = require('../trait/hasProperty')
const HasArray = require('../trait/hasArray')
const HasConditionals = require('../trait/hasConditionals')

const DefaultConfig = (environment) => {
  return {}
}

const Issuer = (prev) => {
  let previous = prev || DefaultConfig
  let instance = BaseObject(previous)

  instance.test = HasProperty('test', previous, Issuer)
  instance.include = HasArray('include', previous, Issuer)
  instance.exclude = HasArray('exclude', previous, Issuer)

  instance.if = HasConditionals.IfFunc(previous, Issuer)
  instance.ifEnv = HasConditionals.IfEnv(previous, Issuer)
  instance.unlessEnv = HasConditionals.UnlessEnv(previous, Issuer)

  return instance
}

module.exports = Issuer
