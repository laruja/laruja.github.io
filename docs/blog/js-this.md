# this

- this作用
- es6之前的this指向
- es6之后的this指向

### this作用

    为了隐式传递对象引用，可以将API设计的更加简洁易于复用，因为当模式越来越复杂显示传递上下文对象会让代码越来越混乱
    
### es6之前的this
- 指向：运行时绑定，谁调用指向谁 (ps:词法作用域是编写时绑定)，this的上下文取决于函数调用时的各种条件

- this绑定规则优先级：new绑定>显示绑定>隐式绑定>默认绑定
    1. new绑定：由new调用？==绑定到新创建到对象
    2. 显示绑定：由call或者apply(或者bing)调用？==绑定到指定的对象
    3. 隐式绑定：由上下文调用？==绑定到那个上下文对象
    4. 默认绑定：严格模式下==绑定到undefined，否则==绑定到全局对象

- ECMAScript 3/5中 固定this方式：
    1. 将this值分配给封闭的变量 var that = this
    

### es6之后的this指向 

    箭头函数的this根据外层词法作用域决定，==绑定在当前所属对象的顶级作用域。也就是说箭头函数不会创建自己的this，它只会从自己的作用域的上一层继承this。
    
    （保护全局对象
        ø = Object.create(null) ）
    
    

### new的过程

    1. 创建一个全新的对象
    2. 这个新对象会被执行[[原型]]连接
    3. 这个新对象会绑定函数调用的this
    4. 如果函数没有返回其他对象，那么new表达式的函数调用会自动返回这个新对象。

    默认绑定
        非严格模式 window
        严格模式 undefined
    隐式绑定
        函数引用有上下文对象时,绑定到该上下文象(对内部包含函数引用)
        ...隐式丢失
    显示绑定
        call apply
        硬绑定
        ```
        function bind(fn,obj){
            return function(){
                returnfn.apply(obj,arguments);
            }
        }
        ```
        ES5 bind
        API调用的上下文(call apply实现)    

    new绑定 
        绑定到新对象上
