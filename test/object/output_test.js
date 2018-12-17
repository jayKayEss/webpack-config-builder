"use strict"
const propertyCanBeSet = require('../helper/property')
const conditionalsCanBeCalled = require('../helper/conditionals')
const Output = require('../../src/object/output')

describe('Output', function() {
  propertyCanBeSet(Output, 'path', __dirname)
  propertyCanBeSet(Output, 'filename', 'main.js')
  propertyCanBeSet(Output, 'publicPath', 'public/')
  propertyCanBeSet(Output, 'library', 'FooBar')
  propertyCanBeSet(Output, 'libraryTarget', 'umd')

  conditionalsCanBeCalled(Output)
})