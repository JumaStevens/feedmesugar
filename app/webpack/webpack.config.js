const webpack = require('webpack')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('babel-polyfill')


// directories
const rootDir = path.resolve(__dirname, '../../')
const srcDir = path.resolve(rootDir, 'app/vue/')
const distDir = path.resolve(rootDir, 'firebase/public/')


const config = {
  entry: ['babel-polyfill', path.join(srcDir, 'main')],
  output: {
    path: distDir,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.join(srcDir, 'assets/sass/global.sass')
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [
              { removeDoctype: true },
              { removeComments: true }
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(['public'], { root: distDir }),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      title: 'Feed Me Sugar',
      appMountId: 'vue-app',
      meta: [
        { name: 'author', content: 'Juma Stevens' },
        { name: 'description', content: 'Online Store' },
        { name: 'keywords', content: 'store, online, clothing, fashion, shop' }
      ],
      mobile: true
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~': srcDir,
      '~comp': path.join(srcDir, 'components')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    contentBase: distDir,
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}


// export
module.exports = config
