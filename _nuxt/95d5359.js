(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{239:function(t,e,r){"use strict";r.r(e);r(22);var n=r(3),c={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,c=n.blog||"index",e.next=4,r("posts",c).fetch();case 4:return l=e.sent,e.abrupt("return",{page:l});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.page.title}}},l=r(8),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"card"},[r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image is-3by1"},[null!=t.page.image?r("img",{attrs:{src:"/blog/"+t.page.image,alt:""}}):r("img",{attrs:{src:"/blog/code.jpeg",alt:""}})])]),t._v(" "),r("div",{staticClass:"card-content"},[r("div",{},[r("div",{},[r("a",{attrs:{href:""}},[r("h1",{staticClass:"title is-4"},[t._v(t._s(t.page.title))])])])]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"content"},[r("p",[t._v("\n          "+t._s(t.page.description)+"\n        ")]),t._v(" "),r("hr"),t._v(" "),r("nuxt-content",{attrs:{document:t.page}})],1),t._v(" "),r("div",[r("hr"),t._v(" "),r("time",{staticClass:"tag",attrs:{datetime:t.page.date}},[t._v(t._s(t.page.date))]),t._v(" "),t._l(t.page.tags,(function(e){return r("a",{key:e,staticClass:"tag is-primary is-light ml-1",attrs:{href:""}},[t._v(t._s(e))])})),t._v(" "),r("br")],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);