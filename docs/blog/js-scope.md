# 作用域
1. 函数作用域 var
2. 块作用域 let const(定义的对象地址不可变值可以变)
3. 全局作用域
4. this作用域


    *this[运行时的变量 谁调用指向谁]*
    ```
    this.m = 1000;
    var obj = {
        m:100,
        test:function(){
            alert(this.m);//100
            return function(){
                alert(this.m);//1000
            }
        }
    }
    (obj.test())();
    ```
###### 改变作用域
+ call apply 改变作用域
+ bind 生成新函数
+ 箭头函数 有词法作用域
+ 变量提升
+ 