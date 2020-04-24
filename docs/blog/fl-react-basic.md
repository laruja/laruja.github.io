# react api学习笔记

- 父子通信
- 

### 基础
- 父子组件->子组件传值：
    1. 父定义属性如value，子通过this.props.value引用

- 交互：
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

