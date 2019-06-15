const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['datatables.net'],
    index: "./index.js",
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity,
    }),
  ],
  module: {
    rules: []
  },
  resolve: {
    modules: [
      path.resolve(__dirname), 'node_modules',
    ],
    extensions: ['.js'],
    alias: {
      jquery: require.resolve('jquery')
    }
  },
  devtool: 'source-map',
}