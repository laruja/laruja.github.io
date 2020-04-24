# [vue](https://github.com/vuejs/vue)

- 
- 
- 

### 优点
1. 体积小 -- 压缩后33k
2. 运行效率高 -- 基于虚拟dom（一种可以预先通过js进行各种计算，把最终的dom操作计算出来并优化的技术，由于这个dom操作属于预处理操作，并没有真实的操作dom，所以叫做虚拟dom）
3. 双向数据绑定 -- 开发者不再去操作dom对象，把更多的精力投入到业务逻辑上
4. 生态丰富、学习成本低 -- 市场上拥有大量成熟稳定的基于vue.js的ui框架、常用组件！拿来即用实现快速开发！对初学者友好、入门容易、学习资料多

### vue基本api

### [浏览器history的api](https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/history)

browser.history.xxx()返回Promise
需要扩展程序在其manifest.json文件中获取history的许可
- 查找浏览器历史记录中出现过的页面
    browser.history.search()
- 移除浏览器历史记录中的单个页面
    browser.history.deleteUrl()
- 向浏览器历史记录中添加页面
    browser.history.addUrl()
- 移除所有浏览器历史记录中的页面
    browser.history.deleteAll()

- 获取用户对单个页面对所有访问记录的集合
    browser.history.getVisits()
- 移除给定期间内任意页面的访问记录的集合
    browser.history.deleteRange

- 描述浏览器如何转到特定页面
    history.TransitionType
- 提供浏览器历史记录中单个特定页面的详细信息
    history.HistoryItem
- 描述对一个页面的单次访问
    history.VisitItem


### 什么是发布订阅设计模式 [参考](https://blog.csdn.net/ZZB_Bin/article/details/80229456)
    
    ![发布订阅](/assets/发布订阅.png)

### 什么是AST(Abstract Syntax Tree)抽象语法树 [参考](https://zhuanlan.zhihu.com/p/32189701)


### [js事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop) [微任务 宏任务](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide)



### vue MVVM机制


 

# Vue核心特点
    1. 声明式渲染
    2. 响应式数据绑定
    3. 组件化开发
    4. Virtual DOM：框架层面封装处理dom操作，开发者不必频繁更新dom操作，同时在性能方面框架能够规避浏览器性能瓶颈问题

# vue3
5. computed.js
    - vue2 