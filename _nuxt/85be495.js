(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{741:function(e,t,l){"use strict";l.r(t);var c={props:{label:{type:String},value:{type:Array},inputValue:{type:String},checked:{type:Boolean,default:!1}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},o=l(7),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"form-check form-switch"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:e.inputValue,checked:e.checked,checked:Array.isArray(e.model)?e._i(e.model,e.inputValue)>-1:e.model},on:{change:function(t){var l=e.model,c=t.target,o=!!c.checked;if(Array.isArray(l)){var n=e.inputValue,r=e._i(l,n);c.checked?r<0&&(e.model=l.concat([n])):r>-1&&(e.model=l.slice(0,r).concat(l.slice(r+1)))}else e.model=o}}}),e._v(" "),l("label",{staticClass:"form-check-label"},[e._v(e._s(e.$t(e.label)))])])}),[],!1,null,null,null);t.default=component.exports}}]);