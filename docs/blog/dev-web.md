# 构建web应用的几种方式

- serverless + 微前端
- mpa + spa 优化性能
- mpa + spa
- mpa
- spa

- spa
- mpa
- mpa + spa
- mpa + spa 优化性能
- serverless + 微前端

### 一、spa单页应用
vue-cli
react-cli

### 二、mpa多页应用
nodejs + 模版
利于seo ssr服务端渲染
### 三、mpa + spa混合应用
spa vue-router假路由
mpa koa-router真路由(对应真实资源)

tips:hash & history 区别
    - hash #/routea
    - history /routea
### 四、mpa + spa混合应用(优化性能)
通过nodejs使落地页直出，单页
- nodejs koa2-connect-history-api-fallback (nginx也可实现这种效果)
- react ssr/vue ssr 同构 (next nuxt开发成本学习曲线)

提升性能：bigpipe chunk输出
### 五、serverless + 微前端
自动部署 扩容