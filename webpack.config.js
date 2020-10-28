const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
    
    mode:'development',
    devServer:{
        contentBase:'./dist',
    },
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