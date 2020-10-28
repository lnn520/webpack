const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
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
      }),
    ],
    module: {
        rules: [
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:["file-loader"]
            },
            // 有问题
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader'], // 将 Less 文件编译为 CSS 文件
              },
            {
                     test: /\.styl$/,
                     //把loader:改为use:
                     use: ['style-loader','css-loader','stylus-loader'], // 将 Less 文件编译为 CSS 文件 
                   },
          {
            test: /\.scss$/i,
            use: [
              // 将 JS 字符串生成为 style 节点
              'style-loader',
              // 将 CSS 转化成 CommonJS 模块
              'css-loader',
              // 将 Sass 编译成 CSS
            //   'sass-loader',
              {
                  loader:"sass-loader",
                  options:{implementation:require('dart-sass')}
              }
            ], 
          },
        ],
      },
};
