"use strict"
const propertyCanBeSet = require('../helper/property')
const hasANestedObject = require('../helper/object')
const conditionalsCanBeCalled = require('../helper/conditionals')
const Config = require('../../src/object/config')

describe('Config', function() {
  propertyCanBeSet(Config, 'mode', 'development')
  propertyCanBeSet(Config, 'entry', 'src/main.js')
  propertyCanBeSet(Config, 'devtool', 'source-map')
  propertyCanBeSet(Config, 'context', __dirname)
  propertyCanBeSet(Config, 'target', 'web')
  propertyCanBeSet(Config, 'stats', 'errors-only')

  hasANestedObject(Config, 'output')

  conditionalsCanBeCalled(Config)
})
