/**
 * loader 本质是一个函数, 参数是上一个loader的内容或原代码
 * 经过一些处理, 把结果返回给下一个loader或者webpack
 */
 let Px2rem = require('./px2rem')
 // 只要安装了 webpack , 就得到这个模块
 // 通过他可以获得loader配置的参数对象
 let loaderUtils = require('loader-utils')

function loader (source) {
   // 通过 getOptions 方法可以获得用户在 webpack.config.js 里配置的参数对象 {remUnit:75,remPrecision:8}
  //  let options = loaderUtils.getOptions(this)
  console.log(this.resource) // 当前正在转换的模块的绝对路径
  if (options.exclude && options.exclude.test(this.resource)) {
    return source; // 不转换, 直接返回
  }

   let px2rem = new Px2rem({remUnit:75,remPrecision:8});
   let targetSource = px2rem.generateRem(source)// 生成rem
   return targetSource
 }
 module.exports = loader

 let source = `
 #root{
   width: 750px;
   height: 750px;
 }
 `
 loader(source)
