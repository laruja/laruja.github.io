# react api学习笔记

- 父子通信
- 

### 基础
1. jsx
    - what--
        JavaScript的语法扩展，类似模版语言具有JavaScript全部功能
        JSX 仅仅只是 React.createElement(component, props, ...children) 函数的语法糖
    - why--
        1. 视觉辅助作用
        2. 显示更多的错误和警告
        3. 可防止XSS注入攻击
            cross-sit-scripting跨站脚本攻击，React DOM在渲染所有输入内容前默认会进行转译 转译成字符串，以此防止XSS
    - how--
        1. javascript表达式{}
        2. 字符串""
        3. 属性名小写驼峰
        4. 可包含多个子元素

2. 元素渲染
    - what--
        ReactDOM.render(element,document.getElementById('idname'));
        tips:React元素是创建开销极小的普通对象。ReactDOM会负责更新DOM与React元素保持一致。
    - how--    
        Babel把JSX转义成React.createElement()函数调用
        React.createElement()预先执行一些检查保证代码正确
        React读取JSX转化的对象构建DOM且保持随时更新
    
3. 组件&Props
    - 组件
        - what--
            组件：由元素构成，类似JavaScript函数，接受任意的入参(即props)，返回React元素(描述页面展示内容)
            组件分为：
                - 函数组件
                ```js
                function Welcom(props){
                    return <h1>hello,{props.name}</h1>
                }
                ```
                - class组件
                ```js
                class Welcome extends ReactComponent{
                    render(){
                        return <h1>hello,{this.props.name}</h1>
                    }
                }
                ```
        - why--
            将UI拆分成[独立可复用]的代码片段。尤其在大型用中需要构建可复用组件库。
        - how--
            - 首字母小写原生DOM，首字母大写自定义组件
            - 可组合可拆分
    - props(组件公有)
        React组件必须像纯函数[纯函数]一样保护其props不被更改
        this.props可能会异步更新
*[独立可复用]:独立可复用组件的候选项：UI中有一部分被多次使用，或者组件本身足够复杂
*[纯函数]:不会改变入参，相同入参多次调用返回相同结果

4. State&生命周期
    - State(当前组件私有)
        - why--
            允许React组件随用户操作、网络响应或其他变化而动态更改输出内容
        - how--
            构造函数中赋值(唯一一处赋值的地方)
            ```js
            class Clock extends React.Component{
                constructor(props){
                    super(props);
                    this.state = {date:new Date()};
                    render(){return (...)}
                }
            }
            ```

            this.setState()修改  ps:不要直接修改
            [不可依赖this.state的值更新下一个状态]-->解决：setState()接收一个函数而不是一个对象
            ```js
            this.setState((state,props)=>{
                
            })
            ```

            单向数据流，数据向下流动。组件无状态。

    - 生命周期
        挂载 componentDidMount(){}
        卸载 componentWillUnmount(){}
*[不可依赖this.state的值更新下一个状态]:React出于性能考虑，可能会把多个setState()调用合并成一个调用，this.state可能会异步更新

5. 事件处理
    - how--
        命名采用小驼峰
        JSX语法中传入函数作为事件处理函数
        不能通过返回false阻止默认行为，要显示调用preventDefault
        ```js
        fucntion ActionLink(){
            function handleClick(e){
                // e是合成事件，根据W3C规范定义。无跨浏览器兼容性问题
                e.preventDefault();
                console.log('The link was clicked.');
            }
            return(
                <a href="#" onClick={handleClick}>
                    click me
                </a>
            );
        }
        ```
        在DOM元素初始渲染时添加监听器。class组件中，有三种方式：
            1. 构造函数中绑定this
            2. class fields
            3. 回调中使用箭头函数--引发性能问题:每次渲染LoggingButton是都会创建不同的回调函数，当该回调函数作为props传入子组件是，这些组件可能会进行额外的重新渲染。
        ```js
         // 构造函数中绑定this
        class LoggingButton extends React.Component{
            constructor(props){
                super(props);
                this.state = {isToggleOn:true};
                // 为了在回调中使用 `this`，这个绑定是必不可少的
                this.handleClick = this.handleClick.bind(this);
            }
            handleClick(){
                this.setState(state=>({
                    isToggleOn: !isToggleOn
                }));
            }

            render(){
                return (
                    <button onClick={this.handleClick}>
                        {this.state.isToggleOn?'ON':'OFF'}
                    </button>
                );
            }
        }
        ReactDOM.render(
            <Toggle />,
            document.getElementById('root')
        );

         // class fields:确保handleClick内的this已被绑定。public class fields是实验性的语法
        class LoggingButton extends React.Component{
            constructor(props){
                super(props);
                this.state = {isToggleOn:true};
            }
            handleClick = ()=>{
                console.log('this is :',this);
                this.setState(state=>({
                    isToggleOn: !isToggleOn
                }));
            }

            render(){
                return (
                    <button onClick={this.handleClick}>
                        {this.state.isToggleOn?'ON':'OFF'}
                    </button>
                );
            }
        }

        // 回调中使用箭头函数
        class LoggingButton extends React.Component{
            constructor(props){
                super(props);
                this.state = {isToggleOn:true};
            }
            handleClick(){
                console.log('this is :',this);
                this.setState(state=>({
                    isToggleOn: !isToggleOn
                }));
            }

            render(){
                return (
                    <button onClick={() => this.handleClick()}>
                        {this.state.isToggleOn?'ON':'OFF'}
                    </button>
                );
            }
        }
        ```
        4. 向事件处理中传递参数
            1. 箭头函数:事件对象需显示传递
            2. Function.prototype.bind：事件对象隐式传递
            ```js
            <button onClick={(e)=>{this.deleteRow(id,e)}}>Delete Row</button>
            <button onClick={this.deleteRow.bind(this,id)}>Delete Row</button>
            ```
6. 条件渲染
    how--
        if
        简洁方式：内联&& 内联三目运算符
        return null阻止渲染(render方法中返回null不会影响组件的生命周期)
        tips：复杂表达式根据团队风格选择可读性更高的代码风格，复杂条件考虑提取组件
7. 列表&Key
    how--
        key：使用元素id，次之使用元素索引index。不显示指定key,默认使用索引为key
            （使用索引作key的弊端：列表项目顺序发生变化，会导致性能变差，还可能引起组件状态的问题。）
        key放在就近的数组上下文中
        key传递给React，不会传递给组件。
8. 表单
    what--
        HTML中的表单自己维护状态，根据用户输入进行更新
        React中状态保存在组件的state属性中，只能通过setState()更新

        受控组件：state是唯一数据源，渲染表单的React组件控制用户输入过程中表单发生的操作。
    how--通过value属性实现受控组件，可阻止用户更改输入(当value值为undefined或null时变为可编辑)
        input   --> 设置value={this.state.value}    *<input type="file" />是非受控组件*
        textarea--> 设置value={this.state.value}
        select  --> 设置value={this.state.value} 等于option中的value值，代替原HTML中selected
                    选择多个：<select multiple={true} value={['B','C']}>
    how--
        处理多个输入 es6语法 计算属性名称
    非受控组件。。。
    验证、追踪访问字段、处理表单提交完整解决方案-- https://formik.org/（建立在受控组件和管理state的基础上）

9. 状态提升
    what--多个组件反映相同的变化数据，将共享状态提升到附近的共同父组件中

10. 组合 vs 继承
    React推荐使用组合而非继承来实现组件间的代码重用
    非UI功能复用推荐提取为一个单独的javascript模块(函数、对象或类)，组件可以直接import引入而无需通过extend继承它们













---------------------------

### Hook
- what--
    React16.8新增特性。可以在不编写class情况下使用state以及其他React特性
- how--
    1. 只在最顶层使用 Hook
    2. 只在React函数中调用Hook
    插件eslint-plugin-react-hooks支持强制使用如上规则

    
### Redux
- what--
    Redux是一种模式和库，用于使用称为“操作”的事件来管理和更新应用程序状态。它用作需要在整个应用程序中使用的状态的集中存储，其规则确保只能以可预测的方式更新状态。
    Redux可以帮助您处理共享状态管理
- why--
    - 您在应用程序中的许多地方都有大量的应用程序状态
    - 应用状态会随着时间而频繁更新
    - 更新该状态的逻辑可能很复杂
    - 该应用程序具有中型或大型代码库，可能被许多人使用

### 其他详细
组件
props
state
- 父子组件->子组件传值：
    1. 父定义属性如value，子通过this.props.value引用

- 交互：
    命名规范：时间监听On[Event] 处理时间监听方法handle[Event]
    1. onXXX={()=>{}} 用箭头函数替代function 避免this指向造成的困扰 

- 记忆：保留状态（貌似类似v-model）
    1. state  & setState
    ```js
    // 构造函数
    constructor(props){
        // js class中构造函数定义子类要调用super，因此react组件中构造函数必须以super(props)开头
        super(props);
        this.state = {
            value:null,
        }
    }
    // render模版中
    <button onClick={()=>{this.setState({value:'X'})}}>
        {this.state.value}
    </button>
    ```

- 特殊保留属性key & ref
    - key:构建动态列表要指定一个合适的key(React通过key判断哪些组件需要更新，组件不能访问它的key)
        未指定则会把数组索引当作默认key(对列表重新排序、新增、删除操作存在问题，不安全)
        key值不需要全局唯一，只需要在当前同一级元素之前保证唯一即可

