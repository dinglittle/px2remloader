## 思路
- 为什么会想到使用Loader
- 如何使用
- 它有什么问题
- 我如何改进它


### 什么是loader
loader就是一个函数,通过读取旧代码,转换成新代码


## [px2rem](./doc/px2rem.md)
将语法树对应数据,转换

主要处理语法树中的 `rules`=>`declarations`=>`value` ( px => rem )

## [px2rem2-loader](./px2rem2-loader.md)

 * loader 本质是一个函数, 参数是上一个loader的内容或原代码
 * 经过一些处理, 把结果返回给下一个loader或者webpack