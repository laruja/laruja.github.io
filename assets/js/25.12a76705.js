(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{269:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("函数作用域 var")])]),t._v(" "),s("li",[s("p",[t._v("块作用域 let const(定义的对象地址不可变值可以变)")])]),t._v(" "),s("li",[s("p",[t._v("全局作用域")])]),t._v(" "),s("li",[s("p",[t._v("this作用域")]),t._v(" "),s("p",[s("em",[t._v("this[运行时的变量 谁调用指向谁]")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("this.m = 1000;\nvar obj = {\n    m:100,\n    test:function(){\n        alert(this.m);//100\n        return function(){\n            alert(this.m);//1000\n        }\n    }\n}\n(obj.test())();\n")])])])])]),t._v(" "),s("h6",{attrs:{id:"改变作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改变作用域"}},[t._v("#")]),t._v(" 改变作用域")]),t._v(" "),s("ul",[s("li",[t._v("call apply 改变作用域")]),t._v(" "),s("li",[t._v("bind 生成新函数")]),t._v(" "),s("li",[t._v("箭头函数 有词法作用域")]),t._v(" "),s("li",[t._v("变量提升")]),t._v(" "),s("li")])])}),[],!1,null,null,null);a.default=e.exports}}]);