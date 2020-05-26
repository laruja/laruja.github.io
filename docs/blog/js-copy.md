# js copy

> 改变数据有2中方式：1.直接修改变量值；2.用新数据替换旧数据。而第二种方式在js中又有两种手段，通常被成为浅克隆&深克隆

### 定义

>浅克隆：创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

>深克隆：将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象

### 浅克隆

1. - Object.assign({目标对象},源对象1,源对象2...)
        - 原理:目标对象=遍历源对象的可枚举的自有键[enumerable.owned.key]
```js
Object.assign(target, ...sources)

// 测试用例
let target = {};
let source = { a: { b: 2 } };
Object.assign(target, source);
target.a===source.a   //true

// 延伸--新数据替换旧数据
// player 的值没有改变, 但是 newPlayer 的值是 {score: 2, name: 'Jeff'}
let player = {score: 1, name: 'Jeff'};
// 方法一
let newPlayer = Object.assign({}, player, {score: 2});
// 方法二 使用对象展开语法，就可以写成：
let newPlayer = {...player, score: 2};
```
ps:虽然对于数据类型是对象复制的是地址，但如果复制后改变该对象类型为基本类型再转变成对象，则修改复制后的对象不会修改原对象内容

### 深克隆
1. 丐中丐：业务最实用

```js
let co = JSON.parse(JSON.stringify(o));
//正则、拷贝函数、循环引用等
//测试用例
// 1
let o = {"person": {"name": "pig","age": "18","sex": "man","hometown": {"province": "江西省","city": "抚州市","county": "崇仁县" } }}
// 2
function Obj() {
    this.func = function () {
        alert(1) 
    };
    this.obj = {a:1};
    this.arr = [1,2,3];
    this.und = undefined;
    this.reg = /123/;
    this.date = new Date(0);
    this.NaN = NaN
    this.infinity = Infinity
    this.sym = Symbol(1)
    this.set = new Set([1,2,3])
    this.map = new Map([['a',1],['b',9]])
}

let obj1 = new Obj();
Object.defineProperty(obj1,'innumerable',{
    enumerable:false,
    value:'innumerable'
})

console.log({obj1});

let str = JSON.stringify(obj1);
let obj2 = JSON.parse(str);

console.log({obj2});
```
2. ms终极
```js
const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)

const deepClone = function (obj, hash = new WeakMap()) {

    if (hash.has(obj)) return hash.get(obj)

    let type = [Date,RegExp,Set,Map,WeakMap,WeakSet]

    if (type.includes(obj.constructor)) return new obj.constructor(obj);      

    //如果成环了,参数obj = obj.loop = 最初的obj 会在WeakMap中找到第一次放入的obj提前返回第一次放入WeakMap的cloneObj

    let allDesc = Object.getOwnPropertyDescriptors(obj);  //遍历传入参数所有键的特性

    let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc); //继承原型

    hash.set(obj, cloneObj)

   for (let key of Reflect.ownKeys(obj)) {   //Reflect.ownKeys(obj)可以拷贝不可枚举属性和符号类型

        // 如果值是引用类型(非函数)则递归调用deepClone

        cloneObj[key] =

            (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ?
            
                deepClone(obj[key], hash) : obj[key];

    }

    return cloneObj;

};

// 测试用例

let obj = {

    bigInt: BigInt(12312),
    set:new Set([2]),
    map:new Map([['a',22],['b',33]]),
    num: 0,
    str: '',
    boolean: true,
    unf: undefined,
    nul: null,
    obj: {
        name: '我是一个对象',
        id: 1
    },

    arr: [0, 1, 2],

   func: function () {
       console.log('我是一个函数')
   },

    date: new Date(0),

    reg: new RegExp('/我是一个正则/ig'),

    [Symbol('1')]: 1,

};

Object.defineProperty(obj, 'innumerable', {
    enumerable: false,
   value: '不可枚举属性'
});

obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj
let cloneObj = deepClone(obj);

console.log('obj', obj);
console.log('cloneObj', cloneObj);

for (let key of Object.keys(cloneObj)) {

    if (typeof cloneObj[key] === 'object' || typeof cloneObj[key] === 'function') {

       console.log(`${key}相同吗？ `, cloneObj[key] === obj[key])

    }

}

```

3. 基础版本
```js
function deepCopy(obj) {
  if(typeof obj === "object") {
      if(obj.constructor === Array) {
        var newArr = []
        for(var i = 0; i < obj.length; i++) newArr.push(obj[i])
        return newArr
      } else {
         var newObj = {}
         for(var key in obj) {
              newObj[key] = this.deepCopy(obj[key])
          }
         return newObj
     }
  } else {
     return obj
 }
}
```

4. [复杂版本](https://github.com/lodash/lodash/blob/master/.internal/baseClone.js)正确但无ms意义版本

