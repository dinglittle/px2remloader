const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 返回的是loader的绝对路径
const px2rem2LoaderPath = path.resolve(__dirname,'loaders/px2rem2-loader.js')
console.log(px2rem2LoaderPath)
module.exports = {
  mode: 'development',
  devtool:false,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'main.js'
  },
  //
  // resolveLoaders: {
    // 1. 别名
    // alias: {
    //   'px2rem2-loader':px2rem2LoaderPath
    // }
    // 2. 目录
    // modules:['loaders','node_modules']
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            // loader: 'px2rem2-loader',
            // 3. 直接放绝对路径
            loader:px2rem2LoaderPath,
            options: {
              remUnit: 75, // 1rem == 多少
              remPrecision:8 // 小数
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ]
}