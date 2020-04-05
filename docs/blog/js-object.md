# 对象

- 本质
- 创建方式
- 操作
- 常用内置对象
- 机制

### 一、本质

    js对象是键和值之间的映射。键是一个字符串或者Symbol，值可以是任意类型的值。符合数据结构中散列表Hash table结构。

### 创建方式2种,生成的对象相同
1. 构造形式       var obj = new Object()    *逐个添加属性*
2. 声明(文字)形式  var obj = {}             *可添加多个键值对 **常用*** 
    - 创建一个空对象var obj = Object.create(null)
        ```javascript
        var ø = Object.create(null);
        var obj11 = Object.create({});
        ```
        ![创建空对象](/assets/创建空对象.png)

    - 缺点：同一个接口创建很多对象，会产生大量的重复代码 [1]

3. 工厂模式
```javascript
function createPerson(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name);
    };
    return o;
}
var person1 = createPerson("Ni",29,"s e");
var person2 = createPerson("Ge",27,"Doctor");
```
>优点：解决了创建多个对象的问题
>缺点：无法知道对象类型
4. 构造函数模式
```javascript
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name);
    };
}
var person1 = new Person("Ni",29,"s e");
var person2 = new Person("Ge",27,"Doctor");
```
>优点：可知道对象类型
>缺点：重新创建方法;将方法定义在外面则非封装
5. 原型模式

结论：构造器定义属性，原型定义方法。

```javascript
var obj1 = new Object();
var obj2 = {};
```
![创建对象](/assets/创建对象.png) 
    
### 三、操作
- 属性名*是字符串非则自动转换成字符串*和值 

    - 访问 两种方式访问值: .和[" "]
       
        1. .操作符 要求属性名满足标识符的命名规范
        2. [" "]  属性名可以是任意[UTF-8/Unicode](https://www.cnblogs.com/tsingke/p/10853936.html)字符串[该字符串可在程序中构造]
    - 计算属性名
        - [prefix + "bar"]:"hello"
            场景:Symbol
    - 属性访问的函数:可能有隐式绑定this   [super?][简易函数声明语法？]
    - *数组的特殊之处*
        - 添加命名属性[.baz/["baz"]]，不会增加数组长度
        - 添加命名属性[形如3,3会变成数值下标]，会增加数组长度

    - es6实用语法
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
        - 对象字面量
            1. 在创建时设置原型
            2. 简写属性赋值，方法定义
            3. 支持父方法调用
            4. 使用表达式动态计算属性名

    - 判断属性名是否存在
        1. in             检查原型链:
            "a" in obj
        2. hasOwnProperty 检查对象本身,不检查原型链:
            1. obj.hasOwnProperty("a")
            2. Object.prototype.hasOwnProperty.call(obj,"a")[针对如Object.create(null)创建的对象，没有连接到Object.prototype]
    - 判断是否可枚举
        1. 存在、访问有值但不在for..in循环中
        2. propertyIsEnumerable(..) 属性名直接存在对象中且满足enumerable:true
        3. Object.keys(..) 返回该对象所有可枚举属性
        4. Object.getOwnPropertyNames(..)返回该对象所有属性
    
- 遍历
    - 对象属性:for..in 遍历对象可枚举属性列表
        - 不同js引擎下遍历顺序不同
    - 数组下标:for循环  遍历数值索引的数组,遍历下标来指向值
        - 数组辅助迭代器
            - forEach(..)
            - every(..)
            - some(..)
    - 遍历值:for..of*(ES6)* *原理:向被访问对象请求一个迭代器对象，通过迭代器对象的next()遍历所有返   回值（数组--有内置的@@iterator）*
- 
- 浅复制
    - Object.assign({目标对象},源对象1,源对象2...)
        - 原理:目标对象=遍历源对象的可枚举的自有键[enumerable.owned.key]
- 深复制




### 四、常用[内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)
1. 基本：Object、Function、Boolean、Symbol、Error
2. 数字和日期：Number、BigInt、Math、Date
3. 字符串：String、RegExp
4. 可索引的集合：Array数组、Typed Arrays(*es6中新定义*)类型数组

>tips:
    1. string、number、boolean:js引擎运行中会把基本类型中的string、number、boolean字面量自动转成对象类型
    2. undefined、null:没有构造形式，只有文字形式
    3. Date:只有构造形式，没有文字形式
    4. Object、Array、Function、RegExp:有构造形式有文字形式，是对象，不是字面量
    5. Error:抛异常时自动创建，很少显示[new Error(..)]创建 *

5. 使用键的集合：Map、Set、WeakMap、WeakSet
    - [Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) & [Set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set) 区别：Set元素唯一
    - Map & WeakMap 区别：
        - Map能记住键的原始插入顺序，键值都可以是任意值。对象键可枚举。垃圾收集器可优化后面的枚举
        - WeakMap弱引用，不可枚举，**键是对象**值任意，不干扰垃圾回收机制
    - Set & WeakSet 区别：
        - WeakSet值只能是对象
        - WeakSet弱引用，不可枚举，对象无其他引用则会被垃圾回收
        - WeakSet适合做涉及大量对象时的跟踪对象引用
6. 结构化数据：JSON *轻量级 用于构建通用的数据结构*、ArrayBuffer、DateView
    - ArrayBuffer 通用 固定长度 原始二进制数据缓冲区
    - DateView 视图可以从二进制ArrayBuffer对象中读写多种数值类型 底层接口 不用考虑不同平台字节序问题
    - JSON 用于序列化对象、数组、数值、字符串、布尔值和null
7. 控制抽象对象：Promise、Generator、AsyncFunction
    - Promise
    - Generator
    - AsyncFunction async的构造函数
8. 反射：Reflect、Proxy
9. 国际化Intl 支持多语言处理
10. WebAssembly

### 五、机制 待梳理
###### 属性描述
+ writable:false,对属性值修改 静默失败；严格模式下报错TypeError
+ configurable:false,单向操作TypeError。
+ writable可true改为false，反之不可
+ delete 该属性，静默失败
    + 删除对象，不被引用的对象/函数会被垃圾回收
+ enumerable:false,不可枚举 for..in
###### 浅不变性
1. 对象常量
    writable:false configurable:false
2. 禁止扩展
    Object.preventExtensions(..)
    + 非严格模式下，静默失败
    + 严格模式下，TypeError
3. 密封,不可添加属性、不可配置现有属性、不可删除现有属性 可以修改属性值
    + Object.seal(..)
        + 原理:Object.preventExtensions(..) configurable:false        
4. 冻结  ...不可以修改属性值。不会影响对象引用的其他对象
    + Object.freeze(..)
        + 原理:Object.seal() writable:false
    + 深度冻结
        + Object.freeze(..) 在遍历对象上Object.freeze(..)
###### [[Get]]
+ 对象内置
    + 算法：obj.a 在对象中查找是否有名称相同的属性，没有则遍历[[Prototype]]链，都没有返回undefined
+ 如何判断对象是值为undefined还是不存在？
###### [[Put]]
+ 对象存在该属性
    1. 属性是否是访问描述符？是且存在setter调用setter
    2. 属性的数据描述中writable是否是false？是，非严格模式下静默失败严格模式下TypeError
    3. 都不是，将该值设置为属性的值
    对象不存在该属性
###### Getter和Setter
+ getter setter可对单个属性改写默认操作  成对出现

##### 混合对象“类”[结论:在js中模拟类是得不偿失但,虽然能解决当前问题,但会埋下更多但隐患]
+ 类的机制：抽象表示，要操作先实例化
            构造函数初始化实例
+ 类的继承
    + 多态：
            相对多态使用相对引用查找上一层
            继承链的不同层次中一个方法可以被多次定义，调用时自动选择合适的定义
    + 多重继承  ：所有父类的定义都会被复制到子类中
        + js本身不提供多重继承
+ 混入 *模拟类的复制行为，但会产生丑陋且脆弱但语法*
    + 显示混入
        + 显示伪多态，需要手动创建函数关联[导致代码复杂难以阅读维护，避免使用]
            + 遍历源对象，将目标对象中没有的属性值赋给目标对象,同时在目标对象中引用源对象的同名函数
        + 混合复制
            1. 遍历源对象，将源对象中所有属性赋给目标对象.
            2. 通过2步mixin复制对象
        + 寄生继承
            + 将函数挂在源对象的prototype上，new目标对象并返回
        隐式混入   
            + 利用this重新绑定功能      



###### 额外的
1. **constructor instanceof prototype __proto__ typeof**
    + constructor 标识对象类型
    + instanceof 检测对象类型
    + prototype-----函数
    + \_\_proto__ Object.getPrototypeOf ---对象
    + typeof
2. **new做了什么**
    1. 创建一个对象
    2. 将构造函数的作用域赋给新对象(this指向新对象)
    3. 执行构造函数的代码
    4. 返回新对象


###### 参考
[1]:javascript高级程序设计
[2]:你不知道的javascript
[3]:mdn

*验证环境:chrome79.0.3945.88 && firefox71.0*
