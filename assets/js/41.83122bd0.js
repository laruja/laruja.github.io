(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{286:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[t._v("#")]),t._v(" 对象")]),t._v(" "),s("ul",[s("li",[t._v("本质")]),t._v(" "),s("li",[t._v("创建方式")]),t._v(" "),s("li",[t._v("基本操作")]),t._v(" "),s("li",[t._v("常用内置对象")]),t._v(" "),s("li",[t._v("机制(待续)")])]),t._v(" "),s("h3",{attrs:{id:"一、本质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、本质"}},[t._v("#")]),t._v(" 一、本质")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("js对象是键和值之间的映射。键是一个字符串或者Symbol，值可以是任意类型的值。符合数据结构中散列表Hash table结构。\n")])])]),s("h3",{attrs:{id:"二、创建方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、创建方式"}},[t._v("#")]),t._v(" 二、创建方式")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("    2种,生成的对象相同\n")])])]),s("ol",[s("li",[s("p",[t._v("构造形式       var obj = new Object()    "),s("em",[t._v("逐个添加属性")])])]),t._v(" "),s("li",[s("p",[t._v("声明(文字)形式  var obj = {}             "),s("em",[t._v("可添加多个键值对 "),s("strong",[t._v("常用")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("创建一个空对象var obj = Object.create(null)")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ø "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj11 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"/assets/%E5%88%9B%E5%BB%BA%E7%A9%BA%E5%AF%B9%E8%B1%A1.png",alt:"创建空对象"}})])]),t._v(" "),s("li",[s("p",[t._v("缺点：同一个接口创建很多对象，会产生大量的重复代码 "),s("a",{attrs:{href:"javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1"}},[t._v("1")])])])])]),t._v(" "),s("li",[s("p",[t._v("工厂模式")])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPerson")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("job "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" job"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sayName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPerson")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ni"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s e"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPerson")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ge"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Doctor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("优点：解决了创建多个对象的问题\n缺点：无法知道对象类型")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("构造函数模式")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("job "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" job"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sayName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ni"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s e"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ge"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Doctor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("优点：可知道对象类型\n缺点：重新创建方法;将方法定义在外面则非封装")])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("原型模式")])]),t._v(" "),s("p",[t._v("结论：构造器定义属性，原型定义方法。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"/assets/%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1.png",alt:"创建对象"}})]),t._v(" "),s("h3",{attrs:{id:"三、操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、操作"}},[t._v("#")]),t._v(" 三、操作")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("属性名"),s("em",[t._v("是字符串非则自动转换成字符串")]),t._v("和值")]),t._v(" "),s("ul",[s("li",[s("p",[t._v('访问 两种方式访问值: .和[" "]')]),t._v(" "),s("ol",[s("li",[t._v(".操作符 要求属性名满足标识符的命名规范")]),t._v(" "),s("li",[t._v('[" "]  属性名可以是任意'),s("a",{attrs:{href:"https://www.cnblogs.com/tsingke/p/10853936.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTF-8/Unicode"),s("OutboundLink")],1),t._v("字符串[该字符串可在程序中构造]")])])]),t._v(" "),s("li",[s("p",[t._v("计算属性名")]),t._v(" "),s("ul",[s("li",[t._v("场景:Symbol")])])]),t._v(" "),s("li",[s("p",[t._v("属性访问的函数:可能有隐式绑定this   [super?][简易函数声明语法？]")])]),t._v(" "),s("li",[s("p",[s("em",[t._v("数组的特殊之处")])]),t._v(" "),s("ul",[s("li",[t._v('添加命名属性[.baz/["baz"]]，不会增加数组长度')]),t._v(" "),s("li",[t._v("添加命名属性[形如3,3会变成数值下标]，会增加数组长度")])])]),t._v(" "),s("li",[s("p",[t._v("es6实用语法")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// __proto__")]),t._v("\n    __proto__"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" theProtoObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Shorthand for ‘handler:  handler’")]),t._v("\n    handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Methods")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Super calls")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Computed (dynamic) property  names")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prop_'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("对象字面量\n"),s("ol",[s("li",[t._v("在创建时设置原型")]),t._v(" "),s("li",[t._v("简写属性赋值，方法定义")]),t._v(" "),s("li",[t._v("支持父方法调用")]),t._v(" "),s("li",[t._v("使用表达式动态计算属性名")])])])])]),t._v(" "),s("li",[s("p",[t._v("判断属性名是否存在")]),t._v(" "),s("ol",[s("li",[t._v('in             检查原型链:\n"a" in obj')]),t._v(" "),s("li",[t._v("hasOwnProperty 检查对象本身,不检查原型链:\n"),s("ol",[s("li",[t._v('obj.hasOwnProperty("a")')]),t._v(" "),s("li",[t._v('Object.prototype.hasOwnProperty.call(obj,"a")[针对如Object.create(null)创建的对象，没有连接到Object.prototype]')])])])])]),t._v(" "),s("li",[s("p",[t._v("判断是否可枚举")]),t._v(" "),s("ol",[s("li",[t._v("存在、访问有值但不在for..in循环中")]),t._v(" "),s("li",[t._v("propertyIsEnumerable(..) 属性名直接存在对象中且满足enumerable:true")]),t._v(" "),s("li",[t._v("Object.keys(..) 返回该对象所有可枚举属性")]),t._v(" "),s("li",[t._v("Object.getOwnPropertyNames(..)返回该对象所有属性")])])])])]),t._v(" "),s("li",[s("p",[t._v("遍历")]),t._v(" "),s("ul",[s("li",[t._v("对象属性:for..in 遍历对象可枚举属性列表\n"),s("ul",[s("li",[t._v("不同js引擎下遍历顺序不同")])])]),t._v(" "),s("li",[t._v("数组下标:for循环  遍历数值索引的数组,遍历下标来指向值\n"),s("ul",[s("li",[t._v("数组辅助迭代器\n"),s("ul",[s("li",[t._v("forEach(..)")]),t._v(" "),s("li",[t._v("every(..)")]),t._v(" "),s("li",[t._v("some(..)")])])])])]),t._v(" "),s("li",[t._v("遍历值:for..of*(ES6)* "),s("em",[t._v("原理:向被访问对象请求一个迭代器对象，通过迭代器对象的next()遍历所有返   回值（数组--有内置的@@iterator）")])])])]),t._v(" "),s("li",[s("p",[t._v("复制 详见js copy")])])]),t._v(" "),s("h3",{attrs:{id:"四、常用内置对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、常用内置对象"}},[t._v("#")]),t._v(" 四、常用"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"}},[t._v("内置对象"),s("OutboundLink")],1)]),t._v(" "),s("ol",[s("li",[t._v("基本：Object、Function、Boolean、Symbol、Error")]),t._v(" "),s("li",[t._v("数字和日期：Number、BigInt、Math、Date")]),t._v(" "),s("li",[t._v("字符串：String、RegExp")]),t._v(" "),s("li",[t._v("可索引的集合：Array数组、Typed Arrays("),s("em",[t._v("es6中新定义")]),t._v(")类型数组")])]),t._v(" "),s("blockquote",[s("p",[t._v("tips:\n1. string、number、boolean:js引擎运行中会把基本类型中的string、number、boolean字面量自动转成对象类型\n2. undefined、null:没有构造形式，只有文字形式\n3. Date:只有构造形式，没有文字形式\n4. Object、Array、Function、RegExp:有构造形式有文字形式，是对象，不是字面量\n5. Error:抛异常时自动创建，很少显示[new Error(..)]创建 *")])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("使用键的集合：Map、Set、WeakMap、WeakSet\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map",target:"_blank",rel:"noopener noreferrer"}},[t._v("Map"),s("OutboundLink")],1),t._v(" & "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set",target:"_blank",rel:"noopener noreferrer"}},[t._v("Set"),s("OutboundLink")],1),t._v(" 区别：Set元素唯一")]),t._v(" "),s("li",[t._v("Map & WeakMap 区别：\n"),s("ul",[s("li",[t._v("Map能记住键的原始插入顺序，键值都可以是任意值。对象键可枚举。垃圾收集器可优化后面的枚举")]),t._v(" "),s("li",[t._v("WeakMap弱引用，不可枚举，"),s("strong",[t._v("键是对象")]),t._v("值任意，不干扰垃圾回收机制")])])]),t._v(" "),s("li",[t._v("Set & WeakSet 区别：\n"),s("ul",[s("li",[t._v("WeakSet值只能是对象")]),t._v(" "),s("li",[t._v("WeakSet弱引用，不可枚举，对象无其他引用则会被垃圾回收")]),t._v(" "),s("li",[t._v("WeakSet适合做涉及大量对象时的跟踪对象引用")])])])])]),t._v(" "),s("li",[t._v("结构化数据：JSON "),s("em",[t._v("轻量级 用于构建通用的数据结构")]),t._v("、ArrayBuffer、DateView\n"),s("ul",[s("li",[t._v("ArrayBuffer 通用 固定长度 原始二进制数据缓冲区")]),t._v(" "),s("li",[t._v("DateView 视图可以从二进制ArrayBuffer对象中读写多种数值类型 底层接口 不用考虑不同平台字节序问题")]),t._v(" "),s("li",[t._v("JSON 用于序列化对象、数组、数值、字符串、布尔值和null")])])]),t._v(" "),s("li",[t._v("控制抽象对象：Promise、Generator、AsyncFunction\n"),s("ul",[s("li",[t._v("Promise")]),t._v(" "),s("li",[t._v("Generator")]),t._v(" "),s("li",[t._v("AsyncFunction async的构造函数")])])]),t._v(" "),s("li",[t._v("反射：Reflect、Proxy")]),t._v(" "),s("li",[t._v("国际化Intl 支持多语言处理")]),t._v(" "),s("li",[t._v("WebAssembly")])]),t._v(" "),s("h6",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("em",[t._v("验证环境:chrome79.0.3945.88 && firefox71.0")])])])}),[],!1,null,null,null);a.default=e.exports}}]);