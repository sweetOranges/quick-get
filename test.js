let get = require('./index')

console.log('array', 0 == get([0, 1], '[0]'));
console.log('string', 'a' == get('abc', '[0]'));
console.log('object', 'e' == get({a: {b: {c:{d:'e'}}}}, 'a.b.c.d'));
console.log('default', false == get({}, 'a', false))
console.log('invalid', 'invalid' == get(false, 'a', 'invalid'))