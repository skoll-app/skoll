(window.webpackJsonp=window.webpackJsonp||[]).push([[13,12],{683:function(t,e,n){var content=n(688);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("87f8683e",content,!0,{sourceMap:!1})},686:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({props:{comment:{type:Object,required:!0}}}),r=(n(687),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-inline-flex align-items-center my-2"},[n("img",{staticClass:"profile-img me-2",attrs:{src:"assets/img/user.png",alt:"profile"}}),t._v(" "),n("div",{staticClass:"comment"},[n("p",{staticClass:"text-muted m-0 lh-1"},[n("span",{staticClass:"text-primary"},[t._v("@"+t._s(t.comment.user.firstName))]),t._v("\n      "+t._s(t._f("truncate")(t.comment.text))+"\n    ")])])])}),[],!1,null,"645b7f54",null);e.default=component.exports},687:function(t,e,n){"use strict";n(683)},688:function(t,e,n){var o=n(63)(!1);o.push([t.i,".comment[data-v-645b7f54]{font-size:12px}",""]),t.exports=o},689:function(t,e,n){var content=n(706);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("6c082c4a",content,!0,{sourceMap:!1})},705:function(t,e,n){"use strict";n(689)},706:function(t,e,n){var o=n(63)(!1);o.push([t.i,".comments-container[data-v-19377729]::-webkit-scrollbar{display:none}.comments-container[data-v-19377729]{-ms-overflow-style:none;scrollbar-width:none}",""]),t.exports=o},732:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(686),c=o.a.extend({components:{Comment:r.default},props:{comments:{type:Array,required:!0}}}),l=(n(705),n(7)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mh-100 overflow-auto comments-container"},t._l(t.comments,(function(t,i){return n("Comment",{key:i,attrs:{comment:t}})})),1)}),[],!1,null,"19377729",null);e.default=component.exports;installComponents(component,{Comment:n(686).default})}}]);