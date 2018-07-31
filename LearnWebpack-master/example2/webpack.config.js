var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');
var path = require('path');

var optimization = {
  splitChunks: {
      cacheGroups: {
          vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              enforce: true,
              chunks: 'all'
          }
      }
  }
};
var options = {
  fileName: 'manifest.json',
  basePath: './dist/'
}

module.exports = {
  mode: 'development',
  entry: {
    main: './app/index.js',
    vendor: [
      'moment',
      'lodash'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: optimization,
  plugins: [
    new ManifestPlugin()
  ]
}
