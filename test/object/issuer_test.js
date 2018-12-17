"use strict"
const propertyCanBeSet = require('../helper/property')
const arrayPropertyCanBeSet = require('../helper/array')
const conditionalsCanBeCalled = require('../helper/conditionals')
const Issuer = require('../../src/object/issuer')

describe('Issuer', function() {
  propertyCanBeSet(Issuer,'test', /foo/)
  arrayPropertyCanBeSet(Issuer, 'include')
  arrayPropertyCanBeSet(Issuer, 'exclude')
  conditionalsCanBeCalled(Issuer)
})
