(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{729:function(t,e,r){"use strict";var n=r(7),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("svg",t._g({attrs:{"data-name":"Layer 1",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},t.$listeners),[e("path",{attrs:{d:"M42 3H28a2 2 0 00-2-2h-4a2 2 0 00-2 2H6a2 2 0 000 4h36a2 2 0 000-4zM39 9a2 2 0 00-2 2v32H11V11a2 2 0 00-4 0v34a2 2 0 002 2h30a2 2 0 002-2V11a2 2 0 00-2-2z"}}),e("path",{attrs:{d:"M21 37V19a2 2 0 00-4 0v18a2 2 0 004 0zM31 37V19a2 2 0 00-4 0v18a2 2 0 004 0z"}})])}),[],!1,null,null,null);e.a=component.exports},735:function(t,e,r){var content=r(765);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("6126588e",content,!0,{sourceMap:!1})},764:function(t,e,r){"use strict";r(735)},765:function(t,e,r){var n=r(63)(!1);n.push([t.i,".main-profile-img-container[data-v-5f311cd8]{margin-right:80px}.main-profile-img-container .main-profile-img[data-v-5f311cd8]{border-radius:50%;height:150px;width:150px}@media(max-width:767px){.main-profile-img-container[data-v-5f311cd8]{margin-right:0;margin-bottom:12px}}@media(min-width:768px)and (max-width:991px){.main-profile-img-container[data-v-5f311cd8]{margin-right:40px}}.user-info p[data-v-5f311cd8]{margin-bottom:.5rem!important}.overlay[data-v-5f311cd8]{width:100%;height:100%;opacity:0;position:absolute;top:0;left:0;transition:.3s ease}.xx:hover .overlay[data-v-5f311cd8]{background-color:#000;opacity:.75}",""]),t.exports=n},771:function(t,e,r){"use strict";r.r(e);var n=r(14),o=(r(56),r(76),r(0)),c=r(729),l=r(7),d=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("svg",t._g({attrs:{viewBox:"0 0 32 32",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},t.$listeners),[e("path",{attrs:{d:"M16 7C9.934 7 4.798 10.776 3 16c1.798 5.224 6.934 9 13 9s11.202-3.776 13-9c-1.798-5.224-6.934-9-13-9z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-width":"2"}}),e("circle",{attrs:{cx:"16",cy:"16",fill:"none",r:"5",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-width":"2"}})])}),[],!1,null,null,null).exports,m=o.a.extend({components:{TrashIcon:c.a,EyeIcon:d},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$apiAuth,e.next=3,r.get("/client/");case 3:return n=e.sent,e.next=6,r.get("/publication/");case 6:return o=e.sent,e.abrupt("return",{user:n.data.data,posts:o.data.data.publicationAvailable});case 8:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.user.firstName||"nada",meta:[{hid:this.user.userName||"username",name:"".concat(this.user.firstName," ").concat(this.user.lastName)||"name-xx",content:this.user.about||"about-xx",ogImage:this.user.logo||"logo-xx"}]}},data:function(){return{user:{},posts:[]}},methods:{handleError:function(t,i){this.$addErrorImg(t);var e=document.getElementById("overlay-img-".concat(i));null==e||e.classList.remove("cursor-pointer");var r=document.getElementById("overlay-eye-".concat(i));null==r||r.classList.add("d-none")}}}),v=(r(764),Object(l.a)(m,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"no-centered"},[e("div",{staticClass:"container pages-content__section-secondary"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-9"},[e("div",{staticClass:"d-flex flex-column flex-md-row justify-content-center align-items-center text-center text-md-start"},[e("div",{staticClass:"main-profile-img-container"},[e("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"main-profile-img",attrs:{"data-src":t.user.logo||"assets/img/user-3x.png",alt:"avatar"}})]),t._v(" "),e("div",{staticClass:"user-info"},[e("h3",{staticClass:"uppercase"},[t._v("\n                "+t._s(t.user.firstName)+" "+t._s(t.user.lastName)+"\n              ")]),t._v(" "),e("p",[t._v(t._s(t.user.userName))]),t._v(" "),e("p",[t._v("\n                "+t._s(t.user.totalpublications)+"\n                "),e("span",{staticClass:"text-muted"},[t._v("publicaciones")])]),t._v(" "),e("p",[t._v(t._s(t.user.about))]),t._v(" "),e("NuxtLink",{staticClass:"btn btn-warning btn-sm",attrs:{to:"/account/edit"}},[t._v("Editar perfil")])],1)]),t._v(" "),e("hr",{staticClass:"mt-3 mt-md-5 mb-3"}),t._v(" "),e("div",{staticClass:"row posts-images"},t._l(t.posts,(function(r,i){return e("div",{key:i,staticClass:"col-12 col-md-6 col-lg-3 mb-4 position-relative"},[e("div",{staticClass:"position-relative xx"},[e("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"w-100 h-100",attrs:{"data-src":r.url,alt:"post.url"},on:{error:function(e){return t.handleError(e,i)}}}),t._v(" "),e("div",{staticClass:"overlay cursor-pointer",attrs:{id:"overlay-img-".concat(i)}},[e("div",{staticClass:"d-flex justify-content-center align-items-center h-100"},[e("EyeIcon",{staticClass:"icon text-white me-2",attrs:{id:"overlay-eye-".concat(i)}}),t._v(" "),e("TrashIcon",{staticClass:"icon text-white"})],1)])])])})),0)])])])])}),[],!1,null,"5f311cd8",null));e.default=v.exports}}]);