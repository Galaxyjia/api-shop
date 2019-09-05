(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{196:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"文档和mock工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文档和mock工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 文档和mock工具")]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("ul",[n("li",[t._v("api-shop 提供了一个基于vue和element-ui的api接口在线文档和mock工具页面")])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(71),alt:"An image"}})]),t._v(" "),n("h2",{attrs:{id:"配置文档路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置文档路由","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置文档路由")]),t._v(" "),n("ul",[n("li",[t._v("在ApiShop组件实例中，有一个方法render_documents(request,url)")]),t._v(" "),n("li",[t._v("和它配套的，必须有一个get_api_data(request,url)方法，用于文档获取接口数据。")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# flask例子，省略了conf配置和引入部分代码。")]),t._v("\naf "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ApiShop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n@app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/<regex(\"([\\s\\S]*)\"):url>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("methods"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PUT'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DELETE'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PATCH'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" url"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'documents/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里配置的就是访问文档的路由")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" af"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("render_documents"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" url"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api_data'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里是文档需要的数据接口")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" af"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_api_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" af"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api_entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h4",{attrs:{id:"这样，在浏览器中就可以通过-yourhost-api-documents-访问到在线文档，把它给你的前端组员，可以减少很多不必要的沟通。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#这样，在浏览器中就可以通过-yourhost-api-documents-访问到在线文档，把它给你的前端组员，可以减少很多不必要的沟通。","aria-hidden":"true"}},[t._v("#")]),t._v(" 这样，在浏览器中就可以通过 "),n("code",[t._v("yourhost/api/documents/")]),t._v("  访问到在线文档，把它给你的前端组员，可以减少很多不必要的沟通。")]),t._v(" "),n("h4",{attrs:{id:"内置的在线文档还提供了一个简单的mock工具，方便前端人员调试接口。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内置的在线文档还提供了一个简单的mock工具，方便前端人员调试接口。","aria-hidden":"true"}},[t._v("#")]),t._v(" 内置的在线文档还提供了一个简单的mock工具，方便前端人员调试接口。")]),t._v(" "),n("h2",{attrs:{id:"自定义文档模板"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义文档模板","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义文档模板")]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("ul",[n("li",[t._v("你如果不满意文档样式，可以自行编写文档模板。")])])]),t._v(" "),n("h3",{attrs:{id:"文档页面业务流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文档页面业务流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 文档页面业务流程")]),t._v(" "),n("ol",[n("li",[t._v("页面加载完成后，请优先访问你配置好的api_data接口，获取所有的接口数据。")]),t._v(" "),n("li",[t._v("根据接口数据包渲染你的页面和配置mock工具")]),t._v(" "),n("li",[t._v("在ApiShop实例化的时候，将新的文档实际路径写到options.document项目中")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'document'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BASE_DIR "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/static/document.html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请填写绝对路径")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=r.exports},71:function(t,s,a){t.exports=a.p+"assets/img/demo.7342f254.png"}}]);