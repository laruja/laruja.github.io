# React

- 什么是React
- React基本原理

### 什么是React
React是Facebook创建的开源项目，用于在前端构建用户**界面UI**
React是MVC应用程序的**视图层**（模型视图控制器）
React可以创建**组建**--定制的可重复使用的HTML元素
React使用state和props简化**数据存储和处理**方式

this.props--单向数据流
this.state--更新组件私有数据  this.setState()

- React     :react顶级API
- React DOM :添加特定于DOM的方法

##### 使用方式2种
1. 直接将库加载到静态HTML页面中，动态呈现React和Babel。缺点：效率低，难维护
2. Create React App。该环境可：创建实时开发服务器，使用webpack自动编译React、JSX和ES6、auto-prefix CSS文件、使用ESLint测试警告代码错误
##### React中为什么用JSX--JavaScript XML
易于理解和编写

##### 组件--2种
1. simple组件(函数)
2. class组件(类)


[].filter // 不会更改原数组，会创建新数组 

小动画为什么用svg+css的animation属性而不是gif

svg：可变大小
gif：大小固定？