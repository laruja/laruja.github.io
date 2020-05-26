# 闭包

- 什么是闭包
- 闭包作用

### 什么是闭包
        函数内部定义其他函数
```js
function makeAdder(a){
    return function(b){
        return a + b;
    } 
}
var add5 = makeAdder(5);
add5(6); // 11
```
产生闭包的根本原因是：作用域对象有被add5引用，因而不会被垃圾回收

### 闭包作用
1. 保存状态