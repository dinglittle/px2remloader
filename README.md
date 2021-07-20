## 思路
- 为什么会想到使用Loader
- 如何使用
- 它有什么问题
- 我如何改进它


什么是loader
loader就是一个函数,通过读取旧代码,转换成新代码


## px2rem
将语法树对应数据,转换

主要处理语法树中的 `rules`=>`declarations`=>`value`

**CSS: CSS 解析器/字符串器。**

### 旧样式
```
 #root{
   width: 750px;
   height: 750px;
 }
```
### 旧语法树
```
{
	"type": "stylesheet",
	"stylesheet": {
		"rules": [{
			"type": "rule",
			"selectors": ["#root"],
			"declarations": [{
				"type": "declaration",
				"property": "width",
				"value": "750px",
				"position": {
					"start": {
						"line": 3,
						"column": 4
					},
					"end": {
						"line": 3,
						"column": 16
					}
				}
			}, {
				"type": "declaration",
				"property": "height",
				"value": "750px",
				"position": {
					"start": {
						"line": 4,
						"column": 4
					},
					"end": {
						"line": 4,
						"column": 17
					}
				}
			}],
			"position": {
				"start": {
					"line": 2,
					"column": 2
				},
				"end": {
					"line": 5,
					"column": 3
				}
			}
		}],
		"parsingErrors": []
	}
}
```


### 新样式
```
#root {
  width: 10.00000000rem;
  height: 10.00000000rem;
}
```

### 新语法树
```
{
	"type": "stylesheet",
	"stylesheet": {
		"rules": [{
			"type": "rule",
			"selectors": ["#root"],
			"declarations": [{
				"type": "declaration",
				"property": "width",
				"value": "10.00000000rem",
				"position": {
					"start": {
						"line": 3,
						"column": 4
					},
					"end": {
						"line": 3,
						"column": 16
					}
				}
			}, {
				"type": "declaration",
				"property": "height",
				"value": "10.00000000rem",
				"position": {
					"start": {
						"line": 4,
						"column": 4
					},
					"end": {
						"line": 4,
						"column": 17
					}
				}
			}],
			"position": {
				"start": {
					"line": 2,
					"column": 2
				},
				"end": {
					"line": 5,
					"column": 3
				}
			}
		}],
		"parsingErrors": []
	}
}
```