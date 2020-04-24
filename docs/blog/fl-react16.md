# react16

- 基本



- 无外层div包裹 用fragements <></> <React.Fragment>
- 函数组件
函数
节省了生命周期useEffect ps:vue3 watchEffect

    vue3也有函数组件
    vue3引了ts break change


- 高阶组件
更高程度到抽象


- 纯组件 添加了shouldComponentUpdate，同样组件同样输出
子组件变化diff到根组件变化更新 浪费

bug：包裹对象会报错--解决 用immutable


- 插槽 portals
子组件渲染到父组件  类似vue slot ps:vue3 protal

- 异步组件和suspense
  vue3 suspense

    - vue lazy组件 lazy ()=>import("./")
- hook 

- context api

- 复杂的类型 immutable原理
- useMemo(对比memo更高级些) memo 简单把函数组件变成类似于纯组件的方式
- 组件传值 子->父  父->子 通常用props或者emiter 观察者模式
    provider ps:vue3 provider
- ref对象引用 ref.current.value 可传递ref，强调能调用HTML元素

    ps： vue3核心源码核心使用：ref. 展平ref.current.value

- 捕获错误

- hooks 勾子
useXXX 对应原react的XXX功能

useEffect + useState +useContent + useCallback + useMemo + useRef
类似函数：useCallback +              useMemo + memo
         在useMemo基础上封装函数     有条件的memo  监听props
- fiber

- 生命周期
15 
16

- 面试
vue源码
react源码
angular。。。vue3会替代