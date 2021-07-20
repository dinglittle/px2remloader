## px2rem
将语法树对应数据,转换

主要处理语法树中的 `rules`=>`declarations`=>`value` ( px => rem )

**CSS: CSS 解析器/字符串器。**

### 旧样式
```css
 #root{
   width: 750px;
   height: 750px;
 }
```
### 旧语法树
```javascript
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
```javascript
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