# 闭包

- 什么是闭包
- 闭包作用

### 什么是闭包
> 闭包是一个有权访问另一个函数作用域中变量的函数<sup>1</sup>。实现方式：函数内部定义其他函数
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

1. 实现公有变量
```js
// 累加器 定义一个定时器，计算点击网页的次数
let addCount = (()=>{
   let count = 0;
    return ()=>{
        console.log(count);
        return count++;
    }
})();

document.body.addEventListener("click", addCount);
// 点击一次->输出1
// 点击两次->输出2
```

2. 可以做缓存(存储结构)
```js
let isFirstLoad = ()=>{
    let list = [];
    return (option)=>{
        if(list.indexOf(option)>=0){
            console.log("已存在");
        }else{
            list.push(option);
            console.log("首次传入");
        }
    }
}
let ifl = isFirstLoad();
ifl("🍎");
ifl("🍊");
ifl("🍎");
```

3. 可以实现封装，属性私有化
```js

```

4. 模块化开发，防止污染全局变量
```js

```

参考资料：
1. 《Javascript高级程序设计(第3版)》