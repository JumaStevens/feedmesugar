const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./common.config')


// directories
const rootDir = path.resolve(__dirname, '../../')
const srcDir = path.resolve(rootDir, 'app/vue/')
const distDir = path.resolve(rootDir, 'firebase/public/')


// webpack configurations
module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    contentBase: distDir,
  },
  devtool: '#eval-source-map',
  performance: {
    hints: 'warning'
  }
})
