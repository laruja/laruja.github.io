# 数据类型

- 机器中的数据类型
- js中的数据类型
    - 如何判断js中的数据类型
    - 如何转换js中的数据类型
    

### 机器中的数据类型
    基于数字电子学的底层数据，用0或1表示

### [js数据类型--8种](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%B1%BB%E5%9E%8B)
     js有2类数据类型：简单数据类型(基本类型) 复杂数据类型(引用类型)
- 基本类型：在内存中占用固定大小，保存在栈内存中
    1. Undefined
    2. Null
    3. Number
    4. String
    5. Boolean
    6. Symbol 
    7. Bigint  值---栈
- 引用类型：值是对象，保存在堆内存中
    8. Object  值---堆

#### 判断数据类型

1. 基本类型-[typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)
2. 引用类型-instanceof
```
typeof false //boolean
typeof .2   //number
typeof NaN  //number
typeof ''   //string
typeof undefined //undefined
typeof not_defined_var //undefined
typeof Symbol() //symbol;
typeof Symbol //function
typeof null //object

typeof alert //function
typeof new Date() //object;
typeof Date //function;
typeof Date() //string
typeof [] //Object
```
#### 类型转换
- 字符串转数字

    parseInt() parseFloat() 一元加法运算符(如+"123")
- 数字转字符串


    123+"str"
