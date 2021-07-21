## 思路
- 为什么会想到使用Loader
- 如何使用
- 它有什么问题
- 我如何改进它


### 什么是loader
loader就是一个函数,通过读取旧代码,转换成新代码

## 几个概念
### [amfe-flexible ](https://github.com/amfe/lib-flexible)

已经不建议使用
amfe-flexible是配置可伸缩布局方案，主要是将1rem设为viewWidth/10。

### [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem#readme)
`px` 转成 `rem`

### [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport/blob/HEAD/README_CN.md)
主流方案
将 `px` 转换成 `vw`

## [px2rem](./doc/px2rem.md)
将语法树对应数据,转换

主要处理语法树中的 `rules`=>`declarations`=>`value` ( px => rem )

## [px2rem2-loader](./px2rem2-loader.md)

 * loader 本质是一个函数, 参数是上一个loader的内容或原代码
 * 经过一些处理, 把结果返回给下一个loader或者webpack

## webpack.config.js 引用loader方式
### 方式一:别名
### 方式二:目录

```
resolveLoaders: {
  1. 别名
  alias: {
    'px2rem2-loader':px2rem2LoaderPath
  }
  2. 目录
  modules:['loaders','node_modules']
},


```
### 方式三:直接放绝对路径
```
// 返回的是loader的绝对路径
const px2rem2LoaderPath = path.resolve(__dirname, 'loaders/px2rem2-loader.js')

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
            loader: px2rem2LoaderPath,
            options: {
              remUnit: 75, // 1rem == 多少
              remPrecision: 8 ,// 小数
              exclude: /antd\.css/,// 解决 三份库也转rem问题
            },
          }
        ]
      }
    ]
  },
```


 ## 问题
三方库本身已经做了rem 转换, 我们再转一遍会出问题

方式一:
在px2rem-loader 中新增参数,
```
console.log(this.resource) // 当前正在转换的模块的绝对路径
  if (options.exclude && options.exclude.test(this.resource)) {
    return source; // 不转换, 直接返回
  }
```

配置项中正则排查
```
options: {
  remUnit: 75, // 1rem == 多少
  remPrecision: 8 ,// 小数
  exclude: /antd\.css/,// 解决 三份库也转rem问题
},
```


方式二:
直接排除 exclude, 然后单独处理
```
{
  test: /\.css$/,
  exclued:/antd\.css$/,
}
```

## 扫盲
### html-webpack-plugin
https://www.webpackjs.com/plugins/html-webpack-plugin/

HtmlWebpackPlugin简化了HTML文件的创建，以便为你的webpack包提供服务。这对于在文件名中包含每次会随着编译而发生变化哈希的 webpack bundle 尤其有用。 你可以让插件为你生成一个HTML文件，使用lodash模板提供你自己的模板，或使用你自己的loader。