var path = require('path');
var webpack = require('webpack');
 
module.exports = {
 
  debug: false,
 
  entry: {
    index: './src/index.js'
  },
 
  target: 'async-node',
 
  devtool: 'source-map',
 
  output: {
    path: './build',
    filename: '[name].js',
    library: 'choko',
    libraryTarget: 'commonjs2'
  },
 
  resolve: {
    modulesDirectories: [
      'node_modules',
      'src/lib'
    ]
  },
 
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, './src')
      ],
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
 
}