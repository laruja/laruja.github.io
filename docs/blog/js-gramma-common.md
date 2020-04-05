# 常用语法

- 常用语法
- 小技巧

- 语法--变量
- 区分大小写，使用[unicode](https://baike.baidu.com/item/Unicode/750500?fr=aladdin)字符集 
ps:utf-8是unicode的一种实现
- 有3种声明方式
    1. var ---存在全局或整个函数块：全局污染，变量提升
    2. let ---块级作用域，编译时初始化暂时性死区(不会变量提升)，不会在全局对象中新建属性，
    3. const--块级作用域，只读，常量
- 变量名支持字母数字下划线_$和unicode、unicode转义字符
- 变量提升&函数提升
    - 变量提升：先使用变量再声明，不会引发异常；提升到函数或语句的最前面；提升后值为undefined
    - 函数提升：函数声明会被提升到顶部，函数表达式不会被提升

### 小技巧
1. 创建私有成员变量
    1. var IIFE
    2. 闭包
    3. let
### es6实用语法
- 对象字面量
    1. 在创建时设置原型
    2. 简写属性赋值，方法定义
    3. 支持父方法调用
    4. 使用表达式动态计算属性名
    ```javascript
    var obj = {
        // __proto__
        __proto__: theProtoObj,
        // Shorthand for ‘handler:  handler’
        handler,
        // Methods
        toString() {
         // Super calls
         return "d " + super.toString();
        },
        // Computed (dynamic) property  names
        [ 'prop_' + (() => 42)() ]: 42
    };
    ```
- 模版字符串


