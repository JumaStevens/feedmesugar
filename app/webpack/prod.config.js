const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const commonConfig = require('./common.config')

// directories
const rootDir = path.resolve(__dirname, '../../')
const srcDir = path.resolve(rootDir, 'app/vue/')
const distDir = path.resolve(rootDir, 'firebase/public/')


// webpack configurations
module.exports = merge(commonConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [ new UglifyJsPlugin() ]
  },
  devtool: '#source-map',
  performance: {
    hints: 'error'
  }
})
