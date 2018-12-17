"use strict"
const propertyCanBeSet = require('../helper/property')
const hasANestedObject = require('../helper/object')
const conditionalsCanBeCalled = require('../helper/conditionals')
const Use = require('../../src/object/use')

describe('Use', function() {
  propertyCanBeSet(Use,'loader', 'foo-loader')
  hasANestedObject(Use, 'options')
  conditionalsCanBeCalled(Use)
})
