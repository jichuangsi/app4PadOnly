(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80918218"],{"008f":function(t,e,s){t.exports=s.p+"img/classroom.5ba8854a.png"},"11e0":function(t,e,s){t.exports=s.p+"img/政治_03.a9be9fa2.png"},"1eb9":function(t,e,s){t.exports=s.p+"img/地理_03.931a0491.png"},3632:function(t,e,s){t.exports=s.p+"img/化学_03.5824189b.png"},"3fca":function(t,e,s){},"4eeb":function(t,e,s){t.exports=s.p+"img/数学_03.54dc204a.png"},"4f30":function(t,e,s){"use strict";var n=s("3fca"),i=s.n(n);i.a},"50ae":function(t,e,s){t.exports=s.p+"img/英语_03.89d9615c.png"},5489:function(t,e,s){},"89a2":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"testindex"},[s("public-header",{attrs:{header:t.header},on:{click:function(e){t.bollen=!t.bollen}}}),t.pageShow?s("scroll-content",{ref:"myscrollfull",attrs:{tips:t.tips},on:{load:t.loadData,reload:t.reloadData,init:t.mescrollInit}},[s("div",{staticClass:"navbox"},t._l(t.nav,function(e,n){return s("div",{key:n,class:{navcolor:t.navindex==n},on:{click:function(s){t.navclick(e,n)}}},[t._v(t._s(e))])})),s("div",{attrs:{slot:"empty"},slot:"empty"},[t._v("无任何数据")]),t._l(t.workList,function(e){return e.subjectName==t.navtext||"全科"==t.navtext?s("testlist",{key:e.index,attrs:{studenttest:e}}):t._e()}),t.testState?s("div",{staticClass:"history"},[t._v("上拉查看历史信息")]):t._e()],2):t._e(),t.loading?s("loading"):t._e()],1)},i=[],a=(s("20d6"),s("ac6a"),s("be94")),o=(s("cadf"),s("551c"),s("097d"),s("d67f")),c=s("15d6"),r=s("8c36"),u=s("2f62"),l=s("4360"),d=s("b594"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testList"},[n("div",{staticClass:"task_content"},[n("div",{staticClass:"task_warp",class:{progress:"PROGRESS"===t.studenttest.testStatus}},[n("div",{staticClass:"task",class:{green:"PROGRESS"===t.studenttest.testStatus,gray:"FINISH"==t.studenttest.testStatus||"COMPLETED"==t.studenttest.testStatus}},[n("div",{staticClass:"testInfo",on:{"&click":function(e){e.stopPropagation(),t.gotest(t.studenttest.testId)}}},[n("div",{staticClass:"subject"},[n("div",{staticClass:"subject_img"},[null==t.studenttest.subjectId?n("img",{attrs:{src:s("008f")}}):t._e(),1==t.studenttest.subjectId?n("img",{attrs:{src:s("9ee1")}}):t._e(),2==t.studenttest.subjectId?n("img",{attrs:{src:s("4eeb")}}):t._e(),3==t.studenttest.subjectId?n("img",{attrs:{src:s("50ae")}}):t._e(),4==t.studenttest.subjectId?n("img",{attrs:{src:s("e1f0")}}):t._e(),5==t.studenttest.subjectId?n("img",{attrs:{src:s("1eb9")}}):t._e(),6==t.studenttest.subjectId?n("img",{attrs:{src:s("11e0")}}):t._e(),7==t.studenttest.subjectId?n("img",{attrs:{src:s("be85")}}):t._e(),8==t.studenttest.subjectId?n("img",{attrs:{src:s("a0cf")}}):t._e(),9==t.studenttest.subjectId?n("img",{attrs:{src:s("3632")}}):t._e()])]),n("div",{staticClass:"testInfo0"},[n("div",{staticClass:"testInfo1"},[n("div",{staticClass:"task_name"},[t._v(t._s(t.studenttest.testName)+"\n                                "),n("span",{staticClass:"task_status"},[t._v("("+t._s(t.tips())+")")])])]),n("div",{staticClass:"testInfo2"},[n("div",{staticClass:"item"},[t._v("发布时间:"+t._s(t.time(t.studenttest.testPublishTime)))]),n("div",{staticClass:"teacher"},[t._v("老师:"+t._s(t.studenttest.teacherName))])]),n("div",{staticClass:"testInfo3"},[n("div",{staticClass:"item"},[t._v("结束时间:"+t._s(t.time(t.studenttest.testEndTime)))])])])])])])])])},m=[],p={name:"testlist",props:{studenttest:{type:Object,default:function(){return{}}}},computed:{},mounted:function(){console.log(this.studenttest)},methods:{time:function(t){if(0===t)return"暂无";var e=parseInt(t),s=new Date(e),n=s.getMonth()+1>10?0+(s.getMonth()+1):s.getMonth()+1,i=s.getDate(),a=s.getHours(),o=s.getMinutes();return n+"月"+i+"日\t"+a+":"+o},gotest:function(t){l["a"].commit("SET_TESTID",t),console.log(t),this.$router.push({path:"@/pages/student/test/test-objective",name:"tesobjective"})},tips:function(){return"FINISH"==this.studenttest.testStatus||"COMPLETED"==this.studenttest.testStatus?"终止提交":this.studenttest.completed?"已完成":"待完成"}}},g=p,h=(s("a384"),s("2877")),v=Object(h["a"])(g,f,m,!1,null,null,null);v.options.__file="testlist.vue";var _=v.exports,b={data:function(){return{bollen:!0,navtext:"全科",navindex:0,nav:["全科","语文","数学","英语","政治","地理","历史","生物","物理","化学"],header:{title:"考试"},title:"考试",workList:[],testPage:100,testState:!0,loading:!0,pageShow:!1,tips:"没有更多考试",mescroll:null,tabFired:!1}},components:{PublicHeader:o["a"],ScrollContent:c["a"],Loading:r["a"],testlist:_},computed:Object(a["a"])({},Object(u["b"])(["testList","isTNew"])),mounted:function(){if(this.testList&&0!==this.testList.length)this.pageShow=!0,this.loading=!1,this.workList=this.testList;else{var t=this,e=navigator.connection.type;"unknown"===e?document.addEventListener("online",function(){t.tabFired||(t.gettestList(),t.tabFired=!0)}):this.gettestList()}},activated:function(){this.tabFired=!1,this.isTNew?(l["a"].commit("SET_TESTHISTORY",[]),this.gettestList(),this.mescroll.resetUpScroll(),l["a"].commit("IS_TNEW",!1)):this.checkComplete(this.workList)},methods:{navclick:function(t,e){this.navindex=e,this.navtext=t},mescrollInit:function(t){this.mescroll=t},gettestList:function(){var t=this;this.$store.dispatch("getTestList").then(function(e){t.pageShow=!0,t.loading=!1,t.workList=t.testList,t.checkComplete(t.workList)}).catch(function(e){console.log("err in getTestList"+e),t.pageShow=!0,t.loading=!1})},loadData:function(t){var e=this;setTimeout(function(){Object(d["c"])(t).then(function(s){console.log(s.data.data.content),l["a"].commit("SET_TESTHISTORY",s.data.data.content),e.workList=e.testList,e.removeRepeat(e.workList,"testId"),e.testPage=s.data.data.pageCount,e.testPage===t&&(e.testState=!1),e.$refs.myscrollfull.endByPage(s.data.data.pageSize,s.data.data.pageCount)}).catch(function(t){console.log("err",t),e.mescroll.endErr()})},2e3)},reloadData:function(){var t=this;setTimeout(function(){var e=[];e=t.workList,t.$store.dispatch("getTestList").then(function(s){t.workList=t.testList;var n=t.workList;if(e&&e.length>0){var i=[];e.forEach(function(t,s){var a=n.findIndex(function(e){return e.testId===t.testId});-1===a&&i.push(e[s])});var a=n.findIndex(function(t){return"FINISH"===t.testStatus||"COMPLETED"===t.testStatus});i.forEach(function(e,s){e.testStatus="FINISH",-1===a?t.workList.push(e):t.workList.splice(a++,0,e)}),t.removeRepeat(t.workList,"testId"),t.checkComplete(t.workList)}}).catch(function(e){console.log(e),t.mescroll.endErr()}),t.$refs.myscrollfull.endSuccess()},1e3)},removeRepeat:function(t,e){for(var s=0;s<t.length;s++)for(var n=s+1;n<t.length;n++)t[s][e]===t[n][e]&&(t.splice(n,1),n-=1)},checkComplete:function(t){var e=0;t.forEach(function(t,s){t.completed||e++}),0===e?this.$emit("messageout",{message:null,type:2}):this.$emit("message",{message:e,type:2})},time:function(t){var e=parseInt(t),s=new Date(e),n=s.getMonth()+1>10?0+(s.getMonth()+1):s.getMonth()+1,i=s.getDate(),a=s.getHours(),o=s.getMinutes();return n+"月"+i+"日\t"+a+":"+o}}},L=b,S=(s("4f30"),Object(h["a"])(L,n,i,!1,null,null,null));S.options.__file="testindex.vue";e["default"]=S.exports},"9ee1":function(t,e,s){t.exports=s.p+"img/语文_03.551dcdb4.png"},a0cf:function(t,e,s){t.exports=s.p+"img/物理_03.5d7bde16.png"},a384:function(t,e,s){"use strict";var n=s("5489"),i=s.n(n);i.a},a879:function(t,e,s){},ac6a:function(t,e,s){for(var n=s("cadf"),i=s("0d58"),a=s("2aba"),o=s("7726"),c=s("32e9"),r=s("84f2"),u=s("2b4c"),l=u("iterator"),d=u("toStringTag"),f=r.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(m),g=0;g<p.length;g++){var h,v=p[g],_=m[v],b=o[v],L=b&&b.prototype;if(L&&(L[l]||c(L,l,f),L[d]||c(L,d,v),r[v]=f,_))for(h in n)L[h]||a(L,h,n[h],!0)}},b865:function(t,e,s){"use strict";var n=s("a879"),i=s.n(n);i.a},be85:function(t,e,s){t.exports=s.p+"img/生物_03.b5bc8e45.png"},d67f:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"classroomHeader"},[t.header.url?s("router-link",{staticClass:"previous_page item",attrs:{tag:"div",to:t.header.url}},[t._v("返回\n    ")]):t._e(),s("div",{staticClass:"title item"},[t._v(t._s(t.header.title))]),""!==t.jump.name?s("router-link",{staticClass:"jump item",attrs:{to:t.jump.url,tag:"div"}},[t._v(t._s(t.jump.name))]):t._e()],1)},i=[],a={name:"classroomHeader",props:{header:{type:Object,default:function(){return{}}},jump:{tyPe:Object,default:function(){return{name:"",url:""}}}},data:function(){return{}},methods:{backPage:function(){this.$emit("backPage")}}},o=a,c=(s("b865"),s("2877")),r=Object(c["a"])(o,n,i,!1,null,null,null);r.options.__file="PublicHeader.vue";e["a"]=r.exports},e1f0:function(t,e,s){t.exports=s.p+"img/历史_03.b38afcce.png"}}]);