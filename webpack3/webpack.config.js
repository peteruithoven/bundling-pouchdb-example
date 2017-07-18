const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BabiliPlugin = require('babili-webpack-plugin');

const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: distPath
  },
  module: {
    rules:  [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },
  plugins: [
    new BabiliPlugin(),
    // new BundleAnalyzerPlugin()
  ],
  // devtool: "eval-source-map", // not production ready!
  devtool: "source-map",
  devServer: {
    contentBase: distPath
  }
};
