# 构建web应用的几种方式

- spa
- mpa
- mpa + spa
- mpa + spa 优化性能
- serverless + 微前端

### 一、spa单页应用 特初级
应用场景：传统webapp，简单
- vue-cli   : vue+vue-router+ vuex+/vue-rx
- react-cli : react + react-router mobx/rudux
弊端：无手工配置 webpack 工程化阶段；es6-10/TS

### 二、mpa多页应用
直出
- nodejs + 模版(swing)： 利于seo ssr服务端渲染
- php + smarey

### 三、mpa + spa
所有路由转回到index.html 利用spa假路由退回index.html，通过history-fallback插件实现
vue-> dist ->node渲染核心index.html 用插件转回
spa vue-router假路由
mpa koa-router真路由(对应真实资源)

tips:hash & history 区别
- hash #/routea
- history /routea
### 四、mpa + spa混合应用(性能优化) 中级解决方案
通过nodejs使落地页直出，单页
- diy方式：nodejs --handler？header标记区分站内切页和落地页
    - 落地页直出
    - 切走单页

koa2-connect-history-api-fallback (nginx也可实现这种效果)
- react ssr/vue ssr 同构 (存在问题：next nuxt开发成本学习曲线)

提升性能：bigpipe chunk输出

### 五、serverless + 微前端 终极解决方案
继承了mpa + spa混合应用优秀特性
自动部署 
扩容