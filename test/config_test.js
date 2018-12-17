"use strict"
const assert = require('assert')
const Config = require('../src/index')

let config = Config()
  .mode('production')
  .unlessEnv('production', (config) => config.mode('development'))
  .module((module) => module
    .rule((rule) => rule
      .test(/\.css$/)
      .ifEnv('development', (rule) => rule
        .use((use) => use
          .loader('style-loader')
          .options((options) => options
            .set('sourceMaps', true)
          )
        )
      )
      .use((use) => use
        .loader('css-loader')
        .options((options) => options
          .set('sourceMaps', true)
        )
      )
    )
  )

describe('webpack-config-builder', function() {
  describe('output mode', function() {
    it('can set the mode in production', function() {
      let output = config.generate('production')
      assert.equal(output['mode'], 'production')
    })

    it('can set the mode in development', function() {
      let output = config.generate('development')
      assert.equal(output['mode'], 'development')
    })
  })

  describe('adding loaders', function() {
    it('can add a loader with a test', function() {
      let output = config.generate('production')
      let rule = {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMaps: true
            }
          }
        ]
      }
      assert.deepEqual(output['module']['rules'][0], rule)
    })

    it('can insert an additional loader with a test in development', function() {
      let output = config.generate('development')
      let rule = {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMaps: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMaps: true
            }
          }
        ]
      }
      assert.deepEqual(output['module']['rules'][0], rule)
    })
  })
})