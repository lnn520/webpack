const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');
const { Template } = require("webpack");
module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
    filename: '[name].[contenthash].js'
  },
  plugins:[new HtmlWebpackPlugin(
      {
          title:'MY APP',
          template:'./src/assets/index.html'
      }
  )],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
    ],
  },
};