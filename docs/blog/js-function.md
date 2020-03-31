# function
1. 函数是对象？
    prototype.__proto__===Object.prototype [函数有prototype,对象只有__proto__]
```
// 函数 & 对象
var testF = function () { console.log("函数 & 对象") }
var obj = new Object();
var arr = new Array();
testF.constructor === Function
testF.constructor === Function.prototype.constructor
obj.constructor === Object
arr.constructor ===Array
// 函数testF的prototype是它自己 prototype的constructor是testF它自己
testF.prototype.constructor === testF
testF.__proto__ === Function.prototype
Function.prototype.__proto__ === Object.prototype
obj.__proto__ === Object.prototype
obj.__proto__.__proto__ === null
Object.__proto__ === Function.prototype

arr.__proto__ === Array.prototype
arr.__proto__.__proto__ === Object.prototype

``` 
![function]
![object]


[function]:img/function1.png
[object]:img/object1.png

