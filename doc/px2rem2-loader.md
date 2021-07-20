## px2rem2-loader

### 关键点
- loaderUtils
- generateRem

```javascript
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
  let options = loaderUtils.getOptions(this)
  let px2rem = new Px2rem(options);
  let targetSource = px2rem.generateRem(source)// 生成rem
  console.log(source)
  console.log(targetSource)
  return targetSource
}
module.exports = loader
```