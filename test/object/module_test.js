"use strict"
const propertyCanBeSet = require('../helper/property')
const hasANestedObject = require('../helper/object')
const hasArrayOfObjects = require('../helper/objectArray')
const conditionalsCanBeCalled = require('../helper/conditionals')
const Module = require('../../src/object/module')

describe('Module', function() {
  hasArrayOfObjects(Module, 'rule', 'rules')
  conditionalsCanBeCalled(Module)
})
