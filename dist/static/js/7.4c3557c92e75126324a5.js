webpackJsonp([7],{580:function(t,e,r){function s(t){r(620)}var a=r(9)(r(598),r(632),s,"data-v-782da376",null);t.exports=a.exports},586:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var s=r(63),a=r.n(s),o=r(56),i={computed:a()({},r.i(o.c)(["playlist"])),mounted:function(){this.handlePlaylist(this.playlist)},activated:function(){this.handlePlaylist(this.playlist)},watch:{playlist:function(t){this.handlePlaylist(t)}},methods:{handlePlaylist:function(){throw new Error("component must implement handlePlaylist method")}}}},598:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(63),a=r.n(s),o=r(207),i=r.n(o),n=r(204),c=r.n(n),h=r(208),A=r.n(h),l=r(205),p=r.n(l),u=r(64),d=r.n(u),y=r(201),C=r(56),f=r(586);e.default={mixins:[f.a],components:{MySearchBox:i.a,MySuggestList:c.a,MySearchList:A.a,MyConfirm:p.a,MyScroll:d.a},data:function(){return{hotkey:[],query:"",zhida:!0,refreshDelay:100}},props:{},watch:{query:function(t){var e=this;t||setTimeout(function(){e.$refs.scrollRef.refresh()},20)}},filters:{},methods:a()({},r.i(C.b)(["saveHistory","delHistory","clearHistory"]),{savaHis:function(){this.saveHistory(this.query)},deleteHis:function(t){this.delHistory(t)},showConfirm:function(){this.$refs.confirmRef.show()},confirm:function(){this.clearHistory()},cancel:function(){},onQueryChange:function(t){this.query=t},addQuery:function(t){this.$refs.searchBoxRef.getQuery(t)},_getHotKey:function(){var t=this;r.i(y.b)().then(function(e){0===e.code&&(t.hotkey=e.data.hotkey.slice(0,10))})},blurInput:function(){this.$refs.searchBoxRef.blur()},handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.shortcutRef.style.bottom=e,this.$refs.scrollRef.refresh(),this.$refs.resultRef.style.bottom=e,this.$refs.suggestRef.refresh()}}),computed:a()({},r.i(C.c)(["searchHistory"]),{scrollData:function(){return this.hotkey.concat(this.searchHistory)}}),created:function(){this._getHotKey()},mounted:function(){},destroyed:function(){}}},610:function(t,e,r){e=t.exports=r(575)(!0),e.push([t.i,'.my-search .search-box-wrapper[data-v-782da376]{margin:20px}.my-search .shortcut-wrapper[data-v-782da376]{position:fixed;top:178px;bottom:0;width:100%}.my-search .shortcut-wrapper .shortcut[data-v-782da376]{height:100%;overflow:hidden}.my-search .shortcut-wrapper .shortcut .hot-key[data-v-782da376]{margin:0 20px 20px}.my-search .shortcut-wrapper .shortcut .hot-key .title[data-v-782da376]{margin-bottom:20px;font-size:14px;color:hsla(0,0%,100%,.5)}.my-search .shortcut-wrapper .shortcut .hot-key .item[data-v-782da376]{display:inline-block;padding:5px 10px;margin:0 20px 10px 0;border-radius:6px;background:#333;font-size:14px;color:hsla(0,0%,100%,.3)}.my-search .shortcut-wrapper .shortcut .hot-key .item.special[data-v-782da376]{color:hsla(0,0%,100%,.7)}.my-search .shortcut-wrapper .shortcut .search-history[data-v-782da376]{position:relative;margin:0 20px}.my-search .shortcut-wrapper .shortcut .search-history .title[data-v-782da376]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40px;font-size:14px;color:hsla(0,0%,100%,.5)}.my-search .shortcut-wrapper .shortcut .search-history .title .text[data-v-782da376]{-webkit-box-flex:1;-ms-flex:1;flex:1}.my-search .shortcut-wrapper .shortcut .search-history .title .clear[data-v-782da376]{position:relative}.my-search .shortcut-wrapper .shortcut .search-history .title .clear[data-v-782da376]:before{content:"";position:absolute;top:-10px;left:-10px;right:-10px;bottom:-10px}.my-search .shortcut-wrapper .shortcut .search-history .title .clear .icon-clear[data-v-782da376]{font-size:14px;color:hsla(0,0%,100%,.3)}.my-search .search-result[data-v-782da376]{position:fixed;width:100%;top:178px;bottom:0}',"",{version:3,sources:["C:/Users/Administrator.PC-20180314DQHT/Desktop/vue音乐webApp/vue-music-webapp/src/components/MySearch/MySearch.vue"],names:[],mappings:"AACA,gDACE,WAAa,CACd,AACD,8CACE,eAAgB,AAChB,UAAW,AACX,SAAU,AACV,UAAY,CACb,AACD,wDACI,YAAa,AACb,eAAiB,CACpB,AACD,iEACM,kBAAyB,CAC9B,AACD,wEACQ,mBAAoB,AACpB,eAAgB,AAChB,wBAAgC,CACvC,AACD,uEACQ,qBAAsB,AACtB,iBAAkB,AAClB,qBAAsB,AACtB,kBAAmB,AACnB,gBAAiB,AACjB,eAAgB,AAChB,wBAAgC,CACvC,AACD,+EACU,wBAAgC,CACzC,AACD,wEACM,kBAAmB,AACnB,aAAe,CACpB,AACD,+EACQ,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,YAAa,AACb,eAAgB,AAChB,wBAAgC,CACvC,AACD,qFACU,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACzB,AACD,sFACU,iBAAmB,CAC5B,AACD,6FACY,WAAY,AACZ,kBAAmB,AACnB,UAAW,AACX,WAAY,AACZ,YAAa,AACb,YAAc,CACzB,AACD,kGACY,eAAgB,AAChB,wBAAgC,CAC3C,AACD,2CACE,eAAgB,AAChB,WAAY,AACZ,UAAW,AACX,QAAU,CACX",file:"MySearch.vue",sourcesContent:["\n.my-search .search-box-wrapper[data-v-782da376] {\n  margin: 20px;\n}\n.my-search .shortcut-wrapper[data-v-782da376] {\n  position: fixed;\n  top: 178px;\n  bottom: 0;\n  width: 100%;\n}\n.my-search .shortcut-wrapper .shortcut[data-v-782da376] {\n    height: 100%;\n    overflow: hidden;\n}\n.my-search .shortcut-wrapper .shortcut .hot-key[data-v-782da376] {\n      margin: 0 20px 20px 20px;\n}\n.my-search .shortcut-wrapper .shortcut .hot-key .title[data-v-782da376] {\n        margin-bottom: 20px;\n        font-size: 14px;\n        color: rgba(255, 255, 255, 0.5);\n}\n.my-search .shortcut-wrapper .shortcut .hot-key .item[data-v-782da376] {\n        display: inline-block;\n        padding: 5px 10px;\n        margin: 0 20px 10px 0;\n        border-radius: 6px;\n        background: #333;\n        font-size: 14px;\n        color: rgba(255, 255, 255, 0.3);\n}\n.my-search .shortcut-wrapper .shortcut .hot-key .item.special[data-v-782da376] {\n          color: rgba(255, 255, 255, 0.7);\n}\n.my-search .shortcut-wrapper .shortcut .search-history[data-v-782da376] {\n      position: relative;\n      margin: 0 20px;\n}\n.my-search .shortcut-wrapper .shortcut .search-history .title[data-v-782da376] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        height: 40px;\n        font-size: 14px;\n        color: rgba(255, 255, 255, 0.5);\n}\n.my-search .shortcut-wrapper .shortcut .search-history .title .text[data-v-782da376] {\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n}\n.my-search .shortcut-wrapper .shortcut .search-history .title .clear[data-v-782da376] {\n          position: relative;\n}\n.my-search .shortcut-wrapper .shortcut .search-history .title .clear[data-v-782da376]:before {\n            content: '';\n            position: absolute;\n            top: -10px;\n            left: -10px;\n            right: -10px;\n            bottom: -10px;\n}\n.my-search .shortcut-wrapper .shortcut .search-history .title .clear .icon-clear[data-v-782da376] {\n            font-size: 14px;\n            color: rgba(255, 255, 255, 0.3);\n}\n.my-search .search-result[data-v-782da376] {\n  position: fixed;\n  width: 100%;\n  top: 178px;\n  bottom: 0;\n}\n"],sourceRoot:""}])},620:function(t,e,r){var s=r(610);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r(576)("89dd670e",s,!0,{})},632:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-search"},[r("div",{staticClass:"search-box-wrapper"},[r("my-search-box",{ref:"searchBoxRef",on:{query:t.onQueryChange}})],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],ref:"shortcutRef",staticClass:"shortcut-wrapper"},[r("my-scroll",{ref:"scrollRef",staticClass:"shortcut",attrs:{data:t.scrollData,refreshDelay:t.refreshDelay}},[r("div",[r("div",{staticClass:"hot-key"},[r("h1",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),r("ul",t._l(t.hotkey,function(e){return r("li",{staticClass:"item",on:{click:function(r){t.addQuery(e.k)}}},[r("span",[t._v(t._s(e.k))])])}))]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[r("h1",{staticClass:"title"},[r("span",{staticClass:"text"},[t._v("搜索历史")]),t._v(" "),r("span",{staticClass:"clear",on:{click:t.showConfirm}},[r("i",{staticClass:"icon-clear"})])]),t._v(" "),r("my-search-list",{attrs:{searches:t.searchHistory},on:{select:t.addQuery,delete:t.deleteHis}})],1)])])],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],ref:"resultRef",staticClass:"search-result"},[r("my-suggest-List",{ref:"suggestRef",attrs:{query:t.query,zhida:t.zhida},on:{beforeScroll:t.blurInput,select:t.savaHis}})],1),t._v(" "),r("my-confirm",{ref:"confirmRef",on:{confirm:t.confirm,cancel:t.cancel}}),t._v(" "),r("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=7.4c3557c92e75126324a5.js.map