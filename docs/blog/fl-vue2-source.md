# vue2源码解读

### 实现核心
> 通过正则匹配模版 with运行
ps: vue3实现核心--打包构建AST createNode
### 目录结构
- 运行时 & 编译时
### 观察者模式
- ![vue观察者模式](/assets/vue观察者模式.png)

    - directive与watcher一一对应
    - 实现--注册 & 分发
        - 除ie8：通过Object.defineProperty() 的get()、set()方法监听数据变化
        - ie8 无Object.defineProperty(),使用__defineGetter__ & __defineSetter__ 

    - vue3 监听通过Proxy实现 (ie不支持Proxy)
- 为啥重写Array
    1. 频繁操作数组中已监听数据会频繁触发get() set()，影响性能
    2. 无法监听新增的数组元素
