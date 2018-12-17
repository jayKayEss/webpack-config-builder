"use strict"
const propertyCanBeSet = require('../helper/property')
const arrayPropertyCanBeSet = require('../helper/array')
const hasANestedObject = require('../helper/object')
const hasArrayOfObjects = require('../helper/objectArray')
const conditionalsCanBeCalled = require('../helper/conditionals')
const Rule = require('../../src/object/rule')

describe('Rule', function() {
  propertyCanBeSet(Rule,'test', /foo/)
  arrayPropertyCanBeSet(Rule, 'include')
  arrayPropertyCanBeSet(Rule, 'exclude')
  hasANestedObject(Rule, 'issuer')
  propertyCanBeSet(Rule, 'enforce', 'pre')
  conditionalsCanBeCalled(Rule)
})
