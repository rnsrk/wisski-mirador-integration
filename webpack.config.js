const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
//  debug: true,
  devtool: 'source-map',
  output: {
    filename: 'mirador-integration.js',
    path: path.resolve(__dirname, './'),
    publicPath: './',
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1, // disable creating additional chunks
    })
],
  
};
