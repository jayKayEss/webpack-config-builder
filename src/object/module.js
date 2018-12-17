"use strict"
const BaseObject = require('../trait/baseObject')
const HasProperty = require('../trait/hasProperty')
const HasArrayOfObjects = require('../trait/hasArrayOfObjects')
const HasConditionals = require('../trait/hasConditionals')
const Rule = require('./rule')

const DefaultConfig = (environment) => {
  return {}
}

const Module = (prev) => {
  let previous = prev || DefaultConfig
  let instance = BaseObject(previous)

  instance.rule = HasArrayOfObjects('rules', previous, Module, Rule)

  instance.if = HasConditionals.IfFunc(previous, Module)
  instance.ifEnv = HasConditionals.IfEnv(previous, Module)
  instance.unlessEnv = HasConditionals.UnlessEnv(previous, Module)

  return instance
}

module.exports = Module
