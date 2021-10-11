const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const view = `${__dirname}/ejs`;
const dist = path.resolve(__dirname, '../public');

/**
 * _接頭辞なしを集める
 */
const compileFiles = glob.sync(`${view}/**/!(_)*.ejs`).map(file => {
  return `${path.relative(view, file)}`;
});

const plugins = compileFiles.map(file => {
  return new HtmlWebpackPlugin({
    template: `${view}/${file}`,
    filename: `${dist}/${file.replace(/\.ejs/, '.html')}`,
    inject: false,
  });
});

module.exports = plugins;
