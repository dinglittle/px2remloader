/**
 * AST 语法树
 * CSS 语法树
 */
// CSS 第三方模块, 把CSS源代码转成AST语法树
const css = require('css')
// 整数/小数 px
// \d+ px  => 整数px
// \b+(\.\d+)? px => 整数.整数 px
const pxRegExp = /\b(\d+(\.\d+)?)px\b/;
class Px2rem{
  constructor(config) {

    this.config = config
  }
  generateRem (cssText) {
    let self = this; // 缓存 this
    function processRules (rules) {
      for (let i = 0; i < rules.length; i++){
        let rule = rules[i];
        // 声明
        let declarations = rule.declarations;
        // 找 px
        for (let j = 0; j < declarations.length; j++){
          let declaration = declarations[j]
          if (declaration.type == 'declaration' && pxRegExp.test(declaration.value)) {
            declaration.value = self._getCalcValue('rem',declaration.value)
          }
        }

      }
    }
    // css 转成语法树
    var astObj = css.parse(cssText)
    // console.log(JSON.stringify(astObj,null,2))
    processRules(astObj.stylesheet.rules)
    console.log('新语法树')
    console.log(astObj)
    // 返回新的语法树
    return css.stringify(astObj)
    return cssText
  }

  _getCalcValue (type, value) {
    console.log('type==',type)
    // rem 单位(1rem宽度); 精度
    let { remUnit, remPrecision } = this.config
    console.log('_getCalcValue')
    console.log(remUnit,remPrecision)
    return value.replace(pxRegExp, (_, $1) => {
      // $1 匹配中的第一个子项
      let val = (parseFloat($1) / remUnit).toFixed(remPrecision)
      return val+type // 750/75 = 10rem
    })
  }
}

module.exports = Px2rem

