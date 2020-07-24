# 移动端

- 几种方式
- 原理
- 调试

### 移动端开发的几种方式
0. 原生开发：
    实现方式：android(java|kotlin),ios(swift|Object C)
    优点：
        1.可访问平台全部功能
        2.速度快、性能高、可实现复杂动画，整体用户体验好
    缺点：
        1. 平台特定，开发成本高
        2. 内容固定，动态化弱(改动需重新发版)
1. H5+原生(Cordava Ionic 微信小程序)
    实现方式：原生网页加载控件webview加载H5页面
    优点：解决了原生开发的弊端
    缺点：复杂页面动画性能不好
2. Javascript+原生渲染(React Native、Weex、快应用)
    实现方式：
    优点：
        1.解决了原生开发的弊端
        2.使用web技术栈社区庞大，对于前端人员上手快，开发成本低
        3.原生渲染较方式1性能好
    缺点：
        1.渲染需要js与原生间通讯，如拖动频繁通讯会造成卡顿
        2.js本身缺点--JIT(just in time)，执行效率较AOT(ahead over time)低
        3.依赖原生控件，不同平台的控件需要单独维护，系统更新社区更新滞后会造成隐患
3. 自绘UI+原生(Flutter、QT for mobile(痛点多))
    实现方式：不同平台实现统一接口渲染引擎绘制UI，不依赖系统原生控件
    优点：解决2中UI跨平台的限制，不同平台UI一致性
        flutter
        1.性能高--自绘引擎 直接调用系统api绘制UI，性能和原生控件接近
        2.灵活，组件库易于维护
        3.社区较活跃github、stackoverflow
        4.技术支持google
        5.开发效率 毫秒级热重载
总结：
![移动端](/assets/移动端.png)



### 原理
1. 原生webview内嵌h5页面
2. sdk [flutter](https://codelabs.flutter-io.cn/codelabs/first-flutter-app-pt1-cn/index.html#1)
### 调试
- 数据请求
    通过本地启动服务+调试包转发
- andriod
    chrome浏览器直接打开
- ios
    xcode模拟器的浏览器打开

    - 单独启动ios模拟器
        1. 列出安装的所有可用设备   xcrun instruments -s
        2. 开启指定模拟器   xcrun instruments -w "iPhone 8 (12.0)"



1. xcode参考链接：https://www.jianshu.com/p/c5ad2e2be367