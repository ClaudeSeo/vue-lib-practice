var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'echo.min.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }
   ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}
