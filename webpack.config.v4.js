const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
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
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor'],
    //   minChunks: Infinity,
    // }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          reuseExistingChunk: true,
          chunks: 'all',
          minChunks: Infinity,
        }
      }
    }
  },
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