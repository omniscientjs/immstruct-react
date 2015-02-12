var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './js/index'
  ],
  output: {
    path: __dirname + '/build/',
    filename: '[name].entry.js',
    publicPath: '/build'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [ 'react-hot' ]
      },
    ]
  }
};
