(window.webpackJsonp=window.webpackJsonp||[]).push([[36,27],{741:function(e,t,c){"use strict";c.r(t);var n={props:{label:{type:String},value:{type:Array},inputValue:{type:String},checked:{type:Boolean,default:!1}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},o=c(7),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"form-check form-switch"},[c("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:e.inputValue,checked:e.checked,checked:Array.isArray(e.model)?e._i(e.model,e.inputValue)>-1:e.model},on:{change:function(t){var c=e.model,n=t.target,o=!!n.checked;if(Array.isArray(c)){var r=e.inputValue,l=e._i(c,r);n.checked?l<0&&(e.model=c.concat([r])):l>-1&&(e.model=c.slice(0,l).concat(c.slice(l+1)))}else e.model=o}}}),e._v(" "),c("label",{staticClass:"form-check-label"},[e._v(e._s(e.$t(e.label)))])])}),[],!1,null,null,null);t.default=component.exports},772:function(e,t,c){"use strict";c.r(t);var n=c(14),o=c(10),r=(c(76),c(55),c(66),c(38),c(25),c(37),c(12),c(52),c(36),c(53),c(0)),l=c(54),d=c(741);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,c)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=r.a.extend({components:{CheckboxInput:d.default},layout:"config",data:function(){return{checkedOpt:["profile","notifications","invitations"]}},computed:{profileChecked:function(){return this.checkedOpt.includes("profile")},notificationsChecked:function(){return this.checkedOpt.includes("notifications")},invitationsChecked:function(){return this.checkedOpt.includes("invitations")}},methods:f(f(f({savePrivacy:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var c,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.showLoading(),t.next=4,e.$apiAuth.put("/skoll-parameter-server-api/support/security/policy",{notifications:e.notificationsChecked,profileViewable:e.profileChecked,receiveInvitations:e.invitationsChecked});case 4:e.hideLoading(),c={title:"success",message:"configview.privacy.updated",type:"success",timer:5e3},e.showToastWithProps(c),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),e.hideLoading(),n={title:"error",message:t.t0.response.data.message,type:"danger",timer:5e3},e.showToastWithProps(n);case 14:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},Object(l.b)("loading",["showLoading","hideLoading"])),Object(l.b)("toast",["showToastWithProps"])),Object(l.b)("user",["setSocialMedias"]))}),k=c(7),component=Object(k.a)(v,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"card"},[c("div",{staticClass:"card-body"},[c("h4",{staticClass:"mb-3",domProps:{innerHTML:e._s(e.$t("configview.privacy.title"))}}),e._v(" "),c("p",{staticClass:"text-muted"},[e._v(e._s(e.$t("configview.privacy.subtitle")))]),e._v(" "),c("CheckboxInput",{attrs:{inputValue:"profile",checked:e.profileChecked,label:"configview.privacy.profile"},model:{value:e.checkedOpt,callback:function(t){e.checkedOpt=t},expression:"checkedOpt"}}),e._v(" "),c("CheckboxInput",{attrs:{inputValue:"notifications",checked:e.notificationsChecked,label:"configview.privacy.notifications"},model:{value:e.checkedOpt,callback:function(t){e.checkedOpt=t},expression:"checkedOpt"}}),e._v(" "),c("CheckboxInput",{attrs:{inputValue:"invitations",checked:e.invitationsChecked,label:"configview.privacy.invitations"},model:{value:e.checkedOpt,callback:function(t){e.checkedOpt=t},expression:"checkedOpt"}}),e._v(" "),c("div",{staticClass:"d-flex justify-content-end"},[c("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:e.savePrivacy}},[e._v("\n        "+e._s(e.$t("form.save"))+"\n      ")])])],1)])}),[],!1,null,"aabd168e",null);t.default=component.exports}}]);