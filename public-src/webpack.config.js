const path = require('path')
const webpack = require('webpack')

const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackViewPlugins = require('./webpack.view-plugins')
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

process.noDeprecation = true

const dist = path.resolve(__dirname, '../public')

module.exports = {
  devtool: process.env.DEV_TOOL,
  context: `${__dirname}`,
  entry: {
    index: './entrypoint.js',
  },
  output: {
    path: `${dist}`,
    filename: 'js/[name].js',
  },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.ejs'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules\/(?!(dom7|swiper)\/).*/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'env',
                  {
                    targets: { browsers: require('./browserlist') },
                    useBuiltIns: true,
                    debug: false,
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                ident: 'postcss',
                plugins: loader => [
                  require('autoprefixer')({
                    browsers: require('./browserlist'),
                    grid: true,
                  }),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'compressed',
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.ejs$/,
        loader: `ejs-view-loader`,
        options: {
          watch: `${__dirname}/ejs/**/*.ejs`,
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),

    new CopyWebpackPlugin([
      { from: `${__dirname}/static`, to: `${dist}/` },
    ]),

    new BrowserSyncPlugin(require('./bs.config')),

    ...webpackViewPlugins,

    new HtmlBeautifyPlugin({
        config: {
            html: {
                indent_size: 4,
                indent_with_tabs: true,
                preserve_newlines: true,
                indent_inner_html: false,
                unformatted: ['inline','noscript'],
                extra_liners: ['head', 'body', 'html'],
                end_with_newline: true,
            }
        },
        replace: [ ' type="text/javascript"' ]
    }),

  ],
}
