(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),s("h2",{attrs:{id:"javascript到底是面向对象还是基于对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript到底是面向对象还是基于对象"}},[t._v("#")]),t._v(" JavaScript到底是面向对象还是基于对象？")]),t._v(" "),s("p",[t._v('首先说结论，我认为JavaScript是面向对象的，但是其对象和之前所理解的"基于类的对象"不太一样，在ES6之前JavaScript都没有类的概念，但是已经明确了对象在JavaScript中的作用：')]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("语言和宿主的基础设施由对象来提供，并且ECMAScript程序即是一系列互相通讯的对象集合")])]),t._v(" "),s("p",[t._v("对象(Object),通俗理解可以是任何看得见、摸得着甚至是可抽象的任何事物，在语言中，其实也是对其的一种抽象，个人认为，可以描述为，某些或者某类具有一定特征的事物(代码或者概念，这里其实理解过于片面了，我总觉得深入理解可以作为一个哲学概念)")]),t._v(" "),s("p",[t._v("如果是这样的话，JavaScript确实是可以说是一种面向对象的语言，但是其对象的描述方式不同于用类来描述，而是采用了原型的方式。")]),t._v(" "),s("h2",{attrs:{id:"javascript对象的特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript对象的特征"}},[t._v("#")]),t._v(" JavaScript对象的特征？")]),t._v(" "),s("p",[t._v("对象具有的特征如下：")]),t._v(" "),s("ol",[s("li",[t._v("对象具有唯一标识性(唯一标识可以看做是其地址值)")]),t._v(" "),s("li",[t._v("对象具有行为")]),t._v(" "),s("li",[t._v("对象具有状态")])]),t._v(" "),s("p",[t._v('行为和状态在JavaScript对象中的体现是"属性"，对象的属性，大家都是常用的，并且其具有动态性，可以在运行的时候给对象添加属性等')]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tobj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vera"')]),t._v("\n")])])]),s("p",[t._v("其中，JavaScript对象的属性分为数据属性和访问器属性，这就会涉及到常用的API,"),s("code",[t._v("Obejct.defineproperty")]),t._v("和"),s("code",[t._v("Object.getOwnPropertyDescripter")]),t._v(",前者是改变其属性的特征，后者是获取其属性的特征")]),t._v(" "),s("h3",{attrs:{id:"数据属性和访问器属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据属性和访问器属性"}},[t._v("#")]),t._v(" 数据属性和访问器属性")]),t._v(" "),s("p",[t._v("下面具体介绍数据属性和访问器属性：")]),t._v(" "),s("h4",{attrs:{id:"一、数据属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、数据属性"}},[t._v("#")]),t._v(" 一、数据属性")]),t._v(" "),s("p",[t._v("数据属性就是用来描述对象的键值对，如上"),s("code",[t._v('Obj.o="vera"')]),t._v("，其具有的特征值为：")]),t._v(" "),s("ul",[s("li",[t._v("value:属性的值")]),t._v(" "),s("li",[t._v("writable:是否可写，就是可不可以改变当前属性的值")]),t._v(" "),s("li",[t._v("enumerable:是不是可以枚举")]),t._v(" "),s("li",[t._v("configurable:该属性是不是可以配置，那就对应了删除操作和后期用"),s("code",[t._v("Obejct.defineproperty")]),t._v("对该属性进行特征值的修改")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("writable和configurable的区别")]),t._v(" "),s("p",[s("code",[t._v("writable：false")]),t._v("之后，修改该属性的值，不会起作用，但是可以删除，也可以配置该对象\n"),s("code",[t._v("configurable：false")]),t._v("之后，可以修改该属性的值，但是不能进行配置了，也不能删除，相当于状态固定了，但是可以改值")])]),t._v(" "),s("p",[t._v("需要注意的是，同一个"),s("code",[t._v("defineproperty")]),t._v("操作，会一次性修改该属性的状态，不会因为先配置"),s("code",[t._v("configurable：false")]),t._v("就报错哦❤")]),t._v(" "),s("h4",{attrs:{id:"二、访问器属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、访问器属性"}},[t._v("#")]),t._v(" 二、访问器属性")]),t._v(" "),s("ul",[s("li",[t._v("getter:读取属性的时候会被调用")]),t._v(" "),s("li",[t._v("setter:设置属性的时候会被调用")]),t._v(" "),s("li",[t._v("enumerable:同上")]),t._v(" "),s("li",[t._v("configrable:同上")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"o"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setter"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getter"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"常见应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见应用"}},[t._v("#")]),t._v(" 常见应用")]),t._v(" "),s("h3",{attrs:{id:"字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),s("ul",[s("li",[t._v("删除字符串左边/右边空格")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"   hhhh"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^\\s*/g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hhhh    "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\s*$/g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("ES6"),s("code",[t._v("trim")]),t._v("系列方法，"),s("code",[t._v("trimLeft")]),t._v(" "),s("code",[t._v("trimRight")]),t._v(" "),s("code",[t._v("trim")]),t._v("也可以实现")]),t._v(" "),s("ul",[s("li",[t._v("typeof可以返回哪些数据类型\n基础数据类型都可以正确表示，包括symbol，引用数据类型，\n"),s("code",[t._v("typeof NaN")]),t._v(" // number\n"),s("code",[t._v("typeof null")]),t._v(" // object")]),t._v(" "),s("li",[t._v("自己写函数实现字符串的反转\n反向遍历+charAt()/str[]拼接 转为数组reverse()")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n")])])]),s("ul",[s("li",[t._v("常见的字符串操作")])]),t._v(" "),s("ol",[s("li",[t._v("插入 基于拼接+子串")]),t._v(" "),s("li",[t._v("删除 基于拼接+子串")]),t._v(" "),s("li",[t._v("替换 "),s("code",[t._v("repalce")])]),t._v(" "),s("li",[t._v("定位 "),s("code",[t._v("indexOf")]),t._v(" "),s("code",[t._v("charAt")])]),t._v(" "),s("li",[t._v("拼接 "),s("code",[t._v("concat")])]),t._v(" "),s("li",[t._v("转换为数组 "),s("code",[t._v("split")])]),t._v(" "),s("li",[t._v("子串 "),s("code",[t._v("substr")]),t._v(" "),s("code",[t._v("substring")]),t._v(" "),s("code",[t._v("slice")])]),t._v(" "),s("li",[t._v("匹配 "),s("code",[t._v("match")]),t._v(" 返回数组")]),t._v(" "),s("li",[t._v("删除空格 如上")])]),t._v(" "),s("h3",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);a.default=n.exports}}]);