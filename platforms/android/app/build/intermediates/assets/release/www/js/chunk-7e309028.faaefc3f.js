(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e309028"],{"07ce":function(t,e,o){"use strict";var a=o("2fca"),s=o.n(a);s.a},"0e09":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[t._m(0),o("div",{staticClass:"login_content"},[o("div",{staticClass:"account"},[o("label",{staticClass:"iconfont"},[t._v("")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"账号"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})]),o("div",{staticClass:"password"},[o("label",{staticClass:"iconfont"},[t._v("")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),o("div",{staticClass:"pws-yn"},[o("div",{staticClass:"left",on:{click:t.selection}},[o("div",{class:{color:1==t.boolean}},[t._v("✔")]),t._v("记住账号密码\n        ")])]),o("div",{staticClass:"loginButton",on:{click:t.submitLogin}},[t._v("登录")])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:o("cfe5"),alt:"logo"}})])}],n=(o("5fc6"),o("5af2")),c=o.n(n),i=(o("96cf"),o("1da1")),r=(o("cadf"),o("551c"),o("097d"),o("7ded")),l={name:"login",data:function(){return{account:"",password:"",boolean:!1}},mounted:function(){this.login()},methods:{login:function(){if(localStorage.getItem("token"))this.$router.push({path:"/studentIndex",name:"studentIndex"});else{var t=localStorage.getItem("account"),e=localStorage.getItem("password");t&&e&&(this.account=t,this.password=e,this.boolean=!0)}},selection:function(){0==this.boolean?this.boolean=!0:(this.boolean=!1,localStorage.removeItem("account"),localStorage.removeItem("password"))},submitLogin:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.boolean&&(localStorage.setItem("account",this.account),localStorage.setItem("password",this.password)),t.prev=1,t.next=4,Object(r["a"])(this.account,this.password);case 4:e=t.sent,this.$store.state.userroute?this.$router.push({path:this.$store.state.userroute}):e&&this.$router.push({path:"/studentIndex",name:"studentIndex"}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),c()({message:t.t0,position:"middle",duration:1e3});case 11:case"end":return t.stop()}},t,this,[[1,8]])}));return function(){return t.apply(this,arguments)}}()}},u=l,d=(o("07ce"),o("2877")),p=Object(d["a"])(u,a,s,!1,null,"16a76972",null);p.options.__file="login.vue";e["default"]=p.exports},"2fca":function(t,e,o){},cfe5:function(t,e,o){t.exports=o.p+"img/logo.a58c9887.png"}}]);