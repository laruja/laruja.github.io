# Vue & React & Angular

- 三者异同点
- 适用场景

### Vue & React & Angular
主要区别：
1. Vue 是渐进式框架：声明式渲染->组件系统->客户端路由->大规模状态管理->构建工具。主张最少，提供足够的选择
2. Angular ：必须使用它的模块机制；必须使用它的依赖注入；必须使用它的特殊形式的组件
3. React ：函数式编程的理念

总体上vue学习成本较低，能够快速上手按需构建应用

### Vue & React
相同：
1. 使用Virtual DOM
2. 提供响应式和组件化的视图组件
3. 洋葱模型核心库+ 路由库 全局状态管理
4. 运行时耗能基本相当
不同：
1. 优化
    - react应用中，组件状态变化时会以该组件为根重新渲染整个组件子树；避免子组件重新渲染需要使用PureComponent或者手动实现shouldComponentUpdate方法(需保证该组件的整个子树的渲染输出都是该组件的props所决定的，否则优化会导致难以察觉的渲染结果不一致)，同时可能需要使用不可变数据结构使组件更容易被优化。组件优化伴随心智负担。
    - vue应用中，组件依赖在渲染过程中自动追踪，系统能精确识别需要被重渲染的组件，并且没有子树问题限制。开发者不需要考虑此类优化。
2. 实现理念
    - react ：一切都是javascript。html用jsx表达，css也趋于纳入javascript中处理。
        - jsx是使用xml语法编写js的一种语法糖：
            1. 使用js构建视图页面，如使用临时变量、js流程控制、直接引用js作用域中的值...
            2. 开发工具对jsx对支持比vue模版先进，如linting、类型检查、编辑器的自动完成
            3. jsx是基于js之上的一套语法，如果需要实现vue DSL中的功能需要更多的代码
    - vue ：整体思想是拥抱经典web技术，在其上扩展。
        - 模版：
            1. 已有应用迁移到vue更容易
            2. 学习成本底 设计师和新手开发者容易理解和参与到项目中
            3. 可以使用其他模板预处理器，如Pug
            4. 模版需要学习DSL
    
    结论：
        - 偏视图表现类组件--使用模版
        - 偏逻辑类组件-----使用jsx或者渲染函数
3. 组件作用域内的css
    - react 中css作用域通过CSS-in-JS方案实现，如styled-components、glamorous、emotion
        1. 面向组件样式范例，不同于普通css编写过程
        2. 构建时支持将css提取到单独的样式表，但bundle里需要运行时程序，需要权衡bundle尺寸和运行时开销
    - vue 
        1. 主流库也支持vue，如styled-components-vue、vue-emotion
        2. vue设置样式默认方法是单文件组件里类似style的标签，通过scoped标识唯一
        3. 单文件组件里样式设置灵活。<style>标签内，通过vue-loader可以使用预处理器、后处理器、深度集成CSS Modules 
4. 规模
- 向上扩展 大型应用-> 路由，状态管理
    - react 大型应用：路由库，状态管理库由社区维护
        - 路由
        - 状态管理：Flux、Redux      
        - 提供create-react-app，存在局限：
            1. 不允许在项目生成时进行配置
            2. 只提供一个构建单页面应用的默认选项
            3. 不能用用户自建的预设配置构建项目
    - vue 大型应用：路由库，状态管理库由官方维护支持且与核心库同步更新 
        - 路由vue-router
        - 状态管理vuex
        - 提供CLI脚手架，通过交互的方式构建项目、快速开发组件原型
            1. 运行时可通过插件进行扩展
            2. 提供了各种用途的模版
- 向下扩展
    - react 学习曲线陡峭 需要知道jsx和es2015(虽然babel可以实时编译代码，但不推荐用于生产环境??编译后打包也不行？有待考究)            
    - vue 类似jQuery 直接放到<script>标签中即可
5. 原生渲染
- react ：react native可同时跨多平台开发
- vue ：weex可运行在浏览器端、IOS、Android，发展中！；NativeScript-Vue [NativeScript](https://nativescript-vue.org/)插件

### Vue & Angular1
1. vue 早期借鉴了angular1 语法类似如v-if vs ng-if
2. vue api比angular1简单
3. vue 更加灵活 致力于开发者专注在应用本身，angualr1必须遵循其制定的规则
4. vue 在不同组件间强制使用单向数据流，使应用中数据流更加清晰易懂；angular使用双向绑定
5. vue 中指令只封装DOM操作，组件代表一个自给自足的独立单元(有自己的视图和数据逻辑)；angular中每件事都由指令来做，组件是一种特殊的指令
6. vue 易优化(不使用脏检查)基于依赖追踪的观察系统并且异步队列更新，所有数据变化都是独立触发(没有明确依赖关系的条件下)；angular中watcher越来越多时会变得越来越慢(作用域内每一次变化 所有watcher都要重新计算，且watcher触发另一个更新脏检查循环可能要运行多次)，需要解决脏检查循环问题需要用深奥的技术

### Vue & Angular2
Angular2较Angular1新增了组件系统，重写了大部分原有实现，api发生了完全的变化
- TypeScript 静态类型检查，在大规模应用中非常有用，中小型规模项目中优势不明显
    - vue适合中小型项目
    - angular + TS 适合大型复杂项目 
    - vue + TS整合不深入，提供了类型声明和组件装饰器
- 运行时性能都很快
- 体积
    - vue + vuex + vue router gzip后30kb ；
    - 最近angular版本使用了AOT和tree-shaking技术后最终代码体积减小许多，angular-cli生成默认项目尺寸65kb
- 灵活 vue较灵活
- 学习曲线
    - vue 只需要有html+js基础
    - angular较陡峭

参考列表：
1. [vuejs官网框架对比](https://cn.vuejs.org/v2/guide/comparison.html)