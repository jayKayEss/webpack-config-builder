"use strict"
const BaseObject = require('../trait/baseObject')
const HasProperty = require('../trait/hasProperty')
const HasArray = require('../trait/hasArray')
const HasObject = require('../trait/hasObject')
const HasArrayOfObjects = require('../trait/hasArrayOfObjects')
const HasConditionals = require('../trait/hasConditionals')
const Issuer = require('./issuer')
const Use = require('./use')

const DefaultConfig = (environment) => {
  return {}
}

const Rule = (prev) => {
  let previous = prev || DefaultConfig
  let instance = BaseObject(previous)

  instance.test = HasProperty('test', previous, Rule)
  instance.include = HasArray('include', previous, Rule)
  instance.exclude = HasArray('exclude', previous, Rule)
  instance.issuer = HasObject('issuer', previous, Rule, Issuer)
  instance.enforce = HasProperty('enforce', previous, Rule)
  instance.use = HasArrayOfObjects('use', previous, Rule, Use)

  instance.if = HasConditionals.IfFunc(previous, Rule)
  instance.ifEnv = HasConditionals.IfEnv(previous, Rule)
  instance.unlessEnv = HasConditionals.UnlessEnv(previous, Rule)

  return instance
}

module.exports = Rule
