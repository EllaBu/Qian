// node内置的path模块，path模块提供了处理文件和目录路径的实用程序。
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 指定打包模式
  mode: 'development',
  entry: {
    // 配置人口文件
    main: ["@babel/polyfill",path.resolve(__dirname, '../src/main.js')]
    // main: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[name].[hash:8].js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
}