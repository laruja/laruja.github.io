# 构建web应用的几种方式（待完善）

- spa
- mpa
- mpa + spa
- mpa + spa 优化性能
- serverless + 微前端

### 一、spa单页应用 特初级(无手工配置 webpack 工程化阶段；es6-10/TS)
应用场景：传统webapp，简单
实现方式：
- vue-cli   : vue+vue-router+ vuex+/vue-rx
- react-cli : react + react-router mobx/rudux
特点：
一次性加载公共资源，单页面跳转仅刷新局部资源
弊端：spa单页白屏时间过长
解析过程：        
        index.html <div id="app"></div> 1kb + js操作
        如vue项目的加载过程
        1. network加载vue.js -> vue-router.js -> vues runtime...
        2. webpack包管理机制 -> common.js chunk main.js
        3. new Vue({
            router "/index.js"-> async包 index.js
            data vuex -> index -> data
            view html->虚拟dom
            真实dom插入后用户才能看见页面
        })
### 二、mpa多页应用 直出(直接渲染)
应用场景：适用于企业官网
优势：解决了 SEO + 秒开率(1秒内打开页面的概率) 的问题
1. seo页面直出(直接渲染)ssr
2. mpa解决白屏时间过长问题，可见即操作。
     <div id="app">
        mpa->填充 如大小有100kb
    </div>
    index.html 100kb会造成用户等待时间过长，解决办法bigpipe 通过buffer数据形态 3kb ->4kb->5kb...
    (mpa不在乎所使用的js框架，jquery也可)
实现方式：
- 现阶段nodejs + 模版(如swing)
- 原来jsp、php 、java...(jsp php之后启用ajax web2.0时代。 该方式的弊端：ajax接口数据无法被爬虫抓取[google的seo能够识别js获取到的内容；百度不可以]。nodejs+javascript替代了php、java...)

### 三、mpa + spa
所有路由转回到index.html 利用spa假路由退回index.html，通过history-fallback插件实现
vue-> dist ->node渲染核心index.html 用插件转回
spa vue-router假路由
mpa koa-router真路由(对应真实资源)

tips:hash & history 区别
- hash #/routea
- history /routea
pushstate融合spa&mpa
hashchange监听路由变化

node核心作用：
1. 直出
2. proxy代理削减json

存在问题：
- 落地页性能弱

### 四、mpa + spa混合应用(性能优化) 终级解决方案
直接刷新用node
站内切页用spa
```javascript
(header == xmlHttpRequest){
    //站内的切页 webpack
    ctx.body = {
        html:"",
        js:""
    }
    //输出进去
}else{
    //bigpie 整个页面全部bigpipe chunk的输出
    ctx.render("index").pipe();
}
```

通过nodejs使落地页直出，单页
- diy方式：nodejs --header标记区分站内切页和落地页
    - 落地页直出
    - 切走单页

koa2-connect-history-api-fallback (nginx也可实现这种效果)
- react ssr/vue ssr 同构 (存在问题：next nuxt开发成本学习曲线)

提升性能：bigpipe chunk输出

存在的问题：
- node(next nuxt开发成本学习曲线)
- 前后端资源协调
- 上线部署
- 稳定性
- 机器扩容

### 五、serverless + 微前端 终极解决方案
- 继承了mpa + spa混合应用优秀特性
- 自动部署 
- 扩容