(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{727:function(t,e,r){var content=r(752);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("5e3e70e6",content,!0,{sourceMap:!1})},751:function(t,e,r){"use strict";r(727)},752:function(t,e,r){var c=r(63)(!1);c.push([t.i,".main-profile-img-container[data-v-91f58f04]{margin-right:80px}.main-profile-img-container .main-profile-img[data-v-91f58f04]{height:150px;width:150px}.user-info p[data-v-91f58f04]{margin-bottom:.5rem!important}.posts-images .col-4[data-v-91f58f04]{margin-bottom:1rem}",""]),t.exports=c},765:function(t,e,r){"use strict";r.r(e);var c=r(13),l=(r(60),r(75),r(0).a.extend({asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$apiAuth,e.next=3,r.get("/client/");case 3:return c=e.sent,e.abrupt("return",{user:c.data.data});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.user.firstName||"nada",meta:[{hid:this.user.userName||"username",name:"".concat(this.user.firstName," ").concat(this.user.lastName)||"name-xx",content:this.user.about||"about-xx",ogImage:this.user.logo||"logo-xx"}]}},data:function(){return{user:{}}}})),n=(r(751),r(7)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"no-centered"},[r("div",{staticClass:"container pages-content__section-secondary"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-9"},[r("div",{staticClass:"d-flex justify-content-center"},[t._m(0),t._v(" "),r("div",{staticClass:"user-info"},[r("h3",{staticClass:"uppercase"},[t._v("\n              "+t._s(t.user.firstName)+" "+t._s(t.user.lastName)+"\n            ")]),t._v(" "),r("p",[t._v(t._s(t.user.userName))]),t._v(" "),r("p",[t._v(t._s(t.user.totalpublications)+" "),r("span",{staticClass:"text-muted"},[t._v("publicaciones")])]),t._v(" "),r("p",[t._v(t._s(t.user.about))]),t._v(" "),r("NuxtLink",{staticClass:"btn btn-warning btn-sm",attrs:{to:"/account/edit"}},[t._v("Editar perfil")])],1)]),t._v(" "),r("hr",{staticClass:"mt-5 mb-3"}),t._v(" "),r("div",{staticClass:"row posts-images"},[r("div",{staticClass:"col-4"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img-fluid",attrs:{src:"/assets/img/mock/1.jpg",alt:""}})]),t._v(" "),r("div",{staticClass:"col-4"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img-fluid",attrs:{src:"/assets/img/mock/2.jpg",alt:""}})]),t._v(" "),r("div",{staticClass:"col-4"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img-fluid",attrs:{src:"/assets/img/mock/3.jpg",alt:""}})]),t._v(" "),r("div",{staticClass:"col-4"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img-fluid",attrs:{src:"/assets/img/mock/4.jpg",alt:""}})]),t._v(" "),r("div",{staticClass:"col-4"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img-fluid",attrs:{src:"/assets/img/mock/5.jpg",alt:""}})]),t._v(" "),r("div",{staticClass:"col-4"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img-fluid",attrs:{src:"/assets/img/mock/6.jpg",alt:""}})]),t._v(" "),r("div",{staticClass:"col-4"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img-fluid",attrs:{src:"/assets/img/mock/7.jpg",alt:""}})])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-profile-img-container"},[e("img",{staticClass:"main-profile-img",attrs:{src:"/assets/img/user-3x.png",alt:""}})])}],!1,null,"91f58f04",null);e.default=component.exports}}]);