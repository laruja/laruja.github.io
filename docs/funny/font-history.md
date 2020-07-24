# 前端发展历程

1990年至今20年内，从最早的纯静态页面到JavaScript跨时代到诞生
从PC端到移动端
从依赖后端到前端可自由打包开发
从早期的网景Navigator浏览器到现在各家浏览器

洪荒时代
Prortotype时代
jQuery时代
后jQuery时期
三大框架割据时代
小程序时代
...

1. 洪荒时代1990～1994年：WWW[World Wide Web]诞生，浏览器诞生，JavaScript诞生。
1990年Web浏览器诞生
1991年WWW[World Wide Web]诞生，Web页面在Internet上首次登场，静态页面
    最初用来科学家们共享传递信息，全世界的Web服务器仅有几十台，从可视化方式和传递数量上看仅比电报强一点。
1993年CGI[Common Gateway Interface]出现，后端可动态生成页面

特点：页面内容更新完全由后端生成。整页刷新+早期网速==>非常慢
升级改进方向：编写语言，浏览器，HTML

1994年网景公司成立，发布第一款商业浏览器Navigator；
    微软推出IE浏览器；
    PHP诞生：将动态内容嵌入到HTML中，提升编写页面的效率与可读性，性能比一般CGI高
            其界定符、循环语句等深刻影响了后来的ASP、JSP乃至JavaScript前端模版引擎。
    W3C小组成立，负责HTML发展路径促进通用协议的发展
1995年网景JavaScript诞生 & 微软VBScript诞生
        JavaScript主要语言特征：
            1. 借鉴C语言基本语法
            2. 借鉴Java语言的数据类型和内存管理
            3. 借鉴Scheme语言，将函数提升到第一等公民的地位
            4. 借鉴Self语言，使用基于原型(Prototype)的继承机制
        VBScript--静态语言，提供类

    早期JavaScript没有灵魂：无包管理机制
                        无像Java与C++那样的打辅助用的SDK
                        内置方法少，数组只有push pop shift unshift splice sort reverse concat join等操作
                        动态调用欠缺，Function的apply、call没有出现
特点：JavaScript方法欠缺，性能低(eval or Function? 哪种循环方式? parseInt or ~~?)
升级改进方向：完善语言特性-->prototype，提高性能-->jQuery

2. 浏览器战争1994～2005年：
IE vs 网景， IE vs 火狐， IE vs 谷歌
特点：有ECMA-262(JavaScript规范文档) & W3C(HTML与CSS规范文档)，
    微软没有按照规范实现JavaScript、HTML、CSS，导致前端兼容问题
解决办法：CSS Hack、浏览器判定、特性侦测。
        事件绑定兼容性大神Dean Edwrad的IE7.js、IE8.js(处理了大量Hack，如IE中如何测量元素宽高，操作DOM的兼容)是一切Polyfill[2]的起源

3. Prototype时期2005～2009年：
2006年jQuery发布，其竞争对手有Dojo、Prototype、ExtJS、MooTools
Ruby大牛Sam Stephenson所作：JavaScript基础类库Prototype （还解决了动画特效&Ajax）
                        & Function.prototype.bind 
                        & 数组方法
国内有着深厚后端背景的高手已经入场
特点：prototype bind 数组方法，扒脚本、分享弹层、日历等小组件技术
    开发模式是选择一个核心库，找一些组件或者扒别人的脚本
    前端开发离不开后端--没有模块机制，用PHP打包(打包--雅虎34条军规之一，可以减少请求数；同时可以进行混淆防止代码小偷窥探)
改进方向：前后端分离

4. jQuery时期2009～2012年：
Sizzle选择器引擎研发成功，jQuery取得压倒性优势
特点：解决浏览器兼容性问题，
    打破开发者编程思维(由先封装一个类-->传入DOM-->类方法操作DOM 到以DOM为中心：一个或多个DOM变成jQuery对象进行链式操作)
    注重前后端分离，要求不能污染Object原型对象，不能污染window全局变量
    jQuery在国内非常流行

    jQuery促进了：
        促进人们对CSS1～CSS3选择器对学习
        浏览器原生选择器引擎document.querySelectorAll、Element.matches的诞生
        提高人们对domReady(DOMContentLoaded事件)的认识
        促进了Promise与requestAnimateFrame的诞生
        降低前端门槛
      大量jQuery插件与UI库

    出现jQuery-like库 --Zepto.js---->移动互联网时代
    Web Page向Web App进化
改进方向：jQuery的Ajax存在依赖时出现回调地狱--改进-->Deffered Promise

    前端模块加载、统一异步机制、打造大型MVC框架，打包脚本Node.js 
5. 后jQuery时期2012～2016年：
起点：RequireJS诞生
结束：RN出现

特点：解决了前端模块定义问题，模块打包问题(Node.js)，JavaScript不依靠其他语言创造了一套自己的工具链
    依赖jQuery插件，引入过多影响到页面解析与呈现导致白屏问题(body中所有东西都是动态生成的)
   jQuery导致的全局污染，插件质量问题-->引入模块机制，出现CommonJS--分化出RequireJS即AMD：支持各种插件，简单明了，提供shim机制加载非AMD规范编写的JavaScript代码
   阿里推出SeaJS即CMD--被淘汰
    统一两种规范AMD Node.js模块(CommonJS)，支持老式的全局变量规范
    前端模版：由jQuery的$.html $.append $.before等将符合HTML结构的字符串转换成DOM插入到页面上

    前端模版--分离HTML到不同文件然后插入数据
    前端路由-->SPA

    MEAN架构JavaScript全栈开发先锋
        MVC框架：Backbone.js--MVC模型 强依赖于jQuery
            Backbone.js作者--编译语言CoffeeScript 其中箭头函数、类机制、解构赋值等语法糖影响了后来的ES6
        MVVM框架：较MVC框架多了一个数据绑定功能
                谷歌Angular     --数据绑定：将函数体转译成setter() getter()函数
                微软Knockout.js --数据绑定：使用函数代替属性的技巧。影响了Mobx
                苹果Ember.js    --数据绑定：基于Object.defineProperty

       开发方式由原来的：早期都是找一个核心库，再搜刮一大堆插件，然后自己写业务代码，最后后端打包 变为
            大公司将后端开发经验挪用过来，用Node.js开发了一套CLI，里面包含了脚手架生成， 打包脚本、语法风格检测、环境变量插入，代码复杂度检测，代码提交时自动跑单元测试， 图片与JS压缩等功能。ESLint、JSLint、JSHint、CSS Lint、 htmllint等就是那时期出现的。

改进方向： 
6. 三大框架割据时代2016～至今：
7. 小程序时代2017～至今：




1990-2000前半部分    https://zhuanlan.zhihu.com/p/68030183
2019                https://zhuanlan.zhihu.com/p/93534477
electron            https://zhuanlan.zhihu.com/p/96041706
前中后的js                    https://zhuanlan.zhihu.com/p/126615118
    目标：解决业务问题&提升生成效率
https://mp.weixin.qq.com/s/WWqsd-SnILUWbiKEnSArDQ
https://zhuanlan.zhihu.com/p/126615118
https://www.cnblogs.com/rubylouvre/archive/2009/09/15/1566722.html