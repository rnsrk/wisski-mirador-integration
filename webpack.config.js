const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: 'mirador-integration.js',
    path: path.resolve(__dirname, './'),
    publicPath: './',
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
    })
  ],
  resolve: {
    fallback: { "url": false }
  },
};