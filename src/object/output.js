"use strict"
const BaseObject = require('../trait/baseObject')
const HasProperty = require('../trait/hasProperty')
const HasConditionals = require('../trait/hasConditionals')

const DefaultConfig = (environment) => {
  return {}
}

const Output = (previous) => {
  var previous = previous || DefaultConfig
  var instance = BaseObject(previous)

  instance.path = HasProperty('path', previous, Output)
  instance.filename = HasProperty('filename', previous, Output)
  instance.publicPath = HasProperty('publicPath', previous, Output)
  instance.library = HasProperty('library', previous, Output)
  instance.libraryTarget = HasProperty('libraryTarget', previous, Output)

  instance.if = HasConditionals.IfFunc(previous, Output)
  instance.ifEnv = HasConditionals.IfEnv(previous, Output)
  instance.unlessEnv = HasConditionals.UnlessEnv(previous, Output)

  return instance
}

module.exports = Output
