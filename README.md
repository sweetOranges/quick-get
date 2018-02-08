# quick-get
使用表达式快速的安全的对数据进行获取

#简介
在前端开发工作中，为了防止取到不存在的变量，我们往往会先判断值是否存在，比如hasOwnProperty。当数据层次结构比较深的时候，这些判断就比较麻烦。

#特性

1. 快速失败：查询到不存在的属性时，立即失败
2. 表达式友好：对象属性用 . 查询，数组索引用 [index] 查询

# 使用方式

## 数组 ##
	console.log('array', 0 == get([0, 1], '[0]'));
## 字符串 ##
	console.log('string', 'a' == get('abc', '[0]'));
## 操作数组 ##
	console.log('array', 0 == get([0, 1], '[0]'));
## 对象 ##
	console.log('object', 'e' == get({a: {b: {c:{d:'e'}}}}, 'a.b.c.d'));
## 操作数组 ##
	console.log('array', 0 == get([0, 1], '[0]'));
## 基本属性 ##
	console.log('invalid', 0 == get(false, '[0]', 'invalid'));
