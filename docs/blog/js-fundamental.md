# js工作原理

- 引擎
- 编译器
- 作用域

###### 编译器--编译原理：执行前编译
1. 分词/词法分析
2. 解析/语法分析(AST)             ---有性能优化
3. 代码生成(机器指令,创建存储变量)   ---有性能优化

###### 引擎查找
+ LHS查找 目的:对变量赋值
+ RHS查找 目的:获取变量的值
```
    ![avatar](../img/jsLR.png)
```
###### js工作过程
var a=2;
1. var a,编译器问作用域，当前作用域是否有a 有:忽略 继续编译，无:在当前作用域集合中声明a
2. 编译器生成代码(引擎运行时需要)用来处理a=2赋值操作
3. a = 2,引擎问作用域，当前作用域集合是否有a(LHS) 有:使用，无:继续查找(向上查)。找到a赋值，找不到抛ReferenceError异常

非严格模式下：
RHS不成功 抛ReferenceError;
LHS不成功 
    非严格模式:隐式创建全局变量
    严格模式下:ReferenceError
作用域
    是一套规则，用于确定在何处如何查找变量(标识符)。
词法作用域
    定义在词法阶段的作用域，由变量写在哪里决定。
    欺骗词法作用域的2种机制：
        eval--修改词法作用域
        with--创建新作用域
      副作用，影响js引擎在编译阶段对作用域的优化， 使代码变慢 
函数作用域
    属于函数的全部变量都可以在函数范围内使用及复用(包括嵌套的作用域)
块作用域
    变量和函数不仅可以属于所处的作用域，也可以属于某个代码块({})
    如何创建块作用域
        with           ---很慢
        IIFE及时执行函数 ---会改变this、return、break、contine
        try{}catch(){} ---很慢
        let
        const[常量]
提升
    先声明，后赋值。声明[编译]会被提升，赋值操作[执行]不会被提升。
    ⚠️：函数会被提升，函数表达式不会被提升。
    ⚠️：函数提升优先级高于变量
    ⚠️：避免重复声明
    ⚠️：避免在块内部声明函数
```javascript
    debugger;
    alert(a)
    a();
    var a=3;
    function a(){
        alert(10) 
    }
    alert(a)
    a=6;
    a();
    /**
    引擎解析顺序
    function a(){
        alert(10)
    }
    var a//上面已定义，忽略
    执行顺序
    alert(a) //function a(){alert(10)}
    a();     //10
    a=3;
    alert(a) //3
    a=6;
    a();   //TypeError:a is not a function
    **/
```
```javascript
debugger;
var x = 1, 
y = 0,
z = 0;
function add(x) { 
    return (x = x + 1);
}
y = add(x);
console.log(y) 
function add(x) {
    return (x = x + 3);
}
z = add(x); 
console.log(z)

//执行结果4，4（函数作用域，全局作用域中x还是1）
```
作用域闭包
    词法作用域外部

```javascript
VO AO js堆栈 eventloop
function foo() { 
    var a=2;
    this.bar(); 
}
function bar() { 
    console.log( this.a );
}
foo();
```
- [名词解释](https://blog.nixiaolei.com/2019/06/10/%E3%80%90JS%E3%80%91%E4%BB%80%E4%B9%88%E6%98%AFAO-VO-GO/)
    - GO: glbal Context 全局执行上下文.
    首先在js执行的时候会创建一个GO， 被压入 ESC Stack 栈底
    - EC: execution 执行上下文
    在每个函数执行的时候会创建一个EC（执行上下文）
    在函数执行上下文中， 还会有两个东西被创建出来： AO、VO
        - VO: Variable object 变量对象
        - AO: Activation Object 活动对象
    - ESC Stack executions statck 执行上下文栈