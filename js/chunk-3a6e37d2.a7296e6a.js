(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a6e37d2"],{"159b":function(t,e,a){var n=a("da84"),i=a("fdbc"),r=a("17c2"),s=a("9112");for(var o in i){var l=n[o],c=l&&l.prototype;if(c&&c.forEach!==r)try{s(c,"forEach",r)}catch(u){c.forEach=r}}},"17c2":function(t,e,a){"use strict";var n=a("b727").forEach,i=a("a640"),r=a("ae40"),s=i("forEach"),o=r("forEach");t.exports=s&&o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"25f0":function(t,e,a){"use strict";var n=a("6eeb"),i=a("825a"),r=a("d039"),s=a("ad6d"),o="toString",l=RegExp.prototype,c=l[o],u=r((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),p=c.name!=o;(u||p)&&n(RegExp.prototype,o,(function(){var t=i(this),e=String(t.source),a=t.flags,n=String(void 0===a&&t instanceof RegExp&&!("flags"in l)?s.call(t):a);return"/"+e+"/"+n}),{unsafe:!0})},"2eba":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"battleinfo"},[a("div",{staticClass:"battleinfo-table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableDataL,"cell-style":t.tableCellStyle,"header-cell-style":t.tableHeaderCellStyleL}},[a("el-table-column",{attrs:{label:"我的团队"}},[a("el-table-column",{attrs:{prop:"displayName",label:"玩家昵称",width:"200","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{prop:"ship.name",label:"使用船只",width:"200","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"left",overflow:"hidden"}},[a("el-image",{staticStyle:{width:"24px",height:"24px"},attrs:{src:e.row.shipIconURL}}),e.row.ship.is_premium?a("span",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(t.tierStrings[e.row.ship.tier])+" "+t._s(e.row.ship.name))]):t._e(),e.row.ship.is_premium?t._e():a("span",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(t.tierStrings[e.row.ship.tier])+" "+t._s(e.row.ship.name))])],1)]}}])}),a("el-table-column",{attrs:{align:"center",prop:"matches",label:"匹配次数",width:"80"}}),a("el-table-column",{attrs:{align:"center",prop:"winrate",label:"胜率",width:"80"}}),a("el-table-column",{attrs:{align:"center",prop:"avgdmg",label:"场均伤害",width:"80"}}),a("el-table-column",{attrs:{align:"center",prop:"ship_matches",label:"船只次数",width:"80"}}),a("el-table-column",{attrs:{align:"center",prop:"ship_winrate",label:"船只胜率",width:"80"}}),a("el-table-column",{attrs:{align:"center",prop:"ship_avgdmg",label:"船只场均",width:"80"}})],1)],1)],1),a("div",{staticClass:"battleinfo-table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableDataR,"cell-style":t.tableCellStyle,"header-cell-style":t.tableHeaderCellStyleR}},[a("el-table-column",{attrs:{label:"敌军"}},[a("el-table-column",{attrs:{prop:"displayName",label:"玩家昵称",width:"200","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"使用船只",width:"200","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"left",overflow:"hidden"}},[a("el-image",{staticStyle:{width:"24px",height:"24px"},attrs:{src:e.row.shipIconURL}}),e.row.ship.is_premium?a("span",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(t.tierStrings[e.row.ship.tier])+" "+t._s(e.row.ship.name))]):t._e(),e.row.ship.is_premium?t._e():a("span",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(t.tierStrings[e.row.ship.tier])+" "+t._s(e.row.ship.name))])],1)]}}])}),a("el-table-column",{attrs:{align:"center",prop:"matches",label:"匹配次数",width:"80"}}),a("el-table-column",{attrs:{align:"center",prop:"winrate",label:"胜率",width:"80"}}),a("el-table-column",{attrs:{align:"center",prop:"avgdmg",label:"场均伤害",width:"80"}}),a("el-table-column",{attrs:{align:"center",prop:"ship_matches",label:"船只次数",width:"80"}}),a("el-table-column",{attrs:{align:"center",prop:"ship_winrate",label:"船只胜率",width:"80"}}),a("el-table-column",{attrs:{align:"center",prop:"ship_avgdmg",label:"船只场均",width:"80"}})],1)],1)],1)])},i=[],r=(a("4160"),a("b0c0"),a("4ec9"),a("d3b7"),a("25f0"),a("3ca3"),a("159b"),a("ddb0"),{name:"BattleInfo",data:function(){return{battleData:{},lastBattleData:{},timeout:null,lastStatus:!0,tableDataL:[],tableDataR:[],shipsMap:new Map,playersMap:new Map,tierStrings:{1:"I",2:"II",3:"III",4:"IV",5:"V",6:"VI",7:"VII",8:"VIII",9:"IX",10:"X"},encyclopedia:JSON.parse(localStorage.getItem("encyclopedia"))}},mounted:function(){this.getBattleData()},methods:{tableCellStyle:function(t){var e=t.row,a=(t.column,t.rowIndex,t.columnIndex);return e.private?{background:"#333",color:"#DDD","font-weight":"bold"}:0==a&&0===e.relation?{background:"#555",color:"#FC8","font-weight":"bold"}:0==a?{background:"#555",color:"#DDD","font-weight":"bold"}:1==a?e.ship.is_premium?{background:"#555",color:"#FC8","font-weight":"bold"}:{background:"#555",color:"#DDD","font-weight":"bold"}:{background:"#555555FF",color:"#DDD"}},tableHeaderCellStyleL:function(t){t.row;var e=t.rowIndex,a=t.columnIndex;return 0===e&&0===a?{background:"#67C23A",color:"#FFFFFF","font-size":"24px"}:1===e?{background:"rgb(225, 243, 216)",color:"#333333"}:""},tableHeaderCellStyleR:function(t){t.row;var e=t.rowIndex,a=t.columnIndex;return 0===e&&0===a?{background:"#F56C6C",color:"#FFFFFF","font-size":"24px"}:1===e?{background:"rgb(253, 226, 226)",color:"#666666"}:""},getBattleData:function(){var t=this;this.$http.get("http://127.0.0.1:65000/tempArenaInfo.json").then((function(e){t.success(e)})).catch((function(e){e.response?404===e.response.status&&t.errorBattle():e.request&&t.errorServer()}))},success:function(t){this.battleData=t.data,this.battleData.dateTime!==this.lastBattleData.dateTime&&(this.lastBattleData=this.battleData,this.$notify.success({title:"已连接到对局",message:"对局数据获取中，请稍作等待",position:"bottom-right",duration:5e3}),this.createPlayersMap()),this.lastStatus||this.$notify.success({title:"已连接到对局",message:"对局数据获取中，请稍作等待",position:"bottom-right",duration:5e3}),this.lastStatus=!0,this.setTimeout(1e3)},errorServer:function(){this.$notify.error({title:"无法连接到游戏服务",dangerouslyUseHTMLString:!0,message:'请确保数据服务已安装<br>如未安装可以<a href="/YojigenWowsInfoServerSetup.exe"><strong>点击这里下载</strong></a><br>如已安装可以<a href="YojigenWowsInfoServer://open"><strong>点击这里启动</strong></a>',position:"bottom-right",duration:1e4}),this.lastStatus=!1,this.setTimeout(1e4)},errorBattle:function(){this.$notify.warning({title:"无法找到对局",message:"若已开始对局，请您等待片刻",position:"bottom-right",duration:5e3}),this.lastStatus=!1,this.setTimeout(5e3)},setTimeout:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){"BattleInfo"===e.$route.name?e.getBattleData():clearTimeout(e.timeout)}),t)})),createPlayersMap:function(){var t=this;this.playersMap=new Map;var e=this.battleData.vehicles,a=/^:.+:$/;e.forEach((function(e,n){a.test(e.name)?t.playersMap.set(e.name,{name:e.name,clan:"",displayName:"",accountID:0,shipID:e.shipId,relation:e.relation,ship:{},shipIconURL:"",typeRank:0,tierRank:0,nationRank:0,matches:"电脑",winrate:"电脑",avgdmg:"电脑",ship_matches:"电脑",ship_winrate:"电脑",ship_avgdmg:"电脑",private:!0}):t.playersMap.set(e.name,{name:e.name,clan:"",displayName:"",accountID:0,shipID:e.shipId,relation:e.relation,ship:{},shipIconURL:"",typeRank:0,tierRank:0,nationRank:0,matches:"",winrate:"",avgdmg:"",ship_matches:"",ship_winrate:"",ship_avgdmg:"",private:!1})})),this.getPlayersData(),this.getShipsData()},getPlayersData:function(){var t=this,e="",a="",n=/^:.+:$/;this.playersMap.forEach((function(t,e){n.test(t.name)||(a=a+t.name+",")})),a=a.substr(0,a.length-1),this.$http.post("https://api.worldofwarships.asia/wows/account/list/",this.$qs.stringify({application_id:this.$env.VUE_APP_APPLICATION_ID,search:a,type:"exact"})).then((function(a){var i=a.data.data;i.forEach((function(e,a){var n=t.playersMap.get(e.nickname);n.accountID=e.account_id})),t.playersMap.forEach((function(t,a){n.test(t.name)||(e=e+t.accountID+",")})),t.playersMap.forEach((function(e,a){n.test(e.name)||t.$http.post("https://api.worldofwarships.asia/wows/clans/accountinfo/",t.$qs.stringify({application_id:t.$env.VUE_APP_APPLICATION_ID,account_id:e.accountID,extra:"clan",fields:"clan.tag"})).then((function(t){if(t.data.data[e.accountID]){var a=t.data.data[e.accountID].clan;a&&(e.clan=a.tag)}}))})),e=e.substr(0,e.length-1),t.$http.post("https://api.worldofwarships.asia/wows/account/info/",t.$qs.stringify({application_id:t.$env.VUE_APP_APPLICATION_ID,account_id:e})).then((function(e){var a=e.data.data;for(var n in a){var i=a[n],r=t.playersMap.get(i.nickname);i.statistics?(r.matches=i.statistics.pvp.battles,r.winrate=t.$util.calculatedPercentString(i.statistics.pvp.wins,i.statistics.pvp.battles,2),r.avgdmg=100*parseInt(i.statistics.pvp.damage_dealt/i.statistics.pvp.battles/100),r.private=!1):(r.matches="无数据",r.winrate="无数据",r.avgdmg="无数据",r.private=!0)}t.formatData()})),t.playersMap.forEach((function(e,a){n.test(e.name)||t.$http.post("https://api.worldofwarships.asia/wows/ships/stats/",t.$qs.stringify({application_id:t.$env.VUE_APP_APPLICATION_ID,account_id:e.accountID,ship_id:e.shipID})).then((function(a){var n=a.data.data[e.accountID];n?(e.ship_matches=n[0].pvp.battles,e.ship_winrate=t.$util.calculatedPercentString(n[0].pvp.wins,n[0].pvp.battles,2),e.ship_avgdmg=100*parseInt(n[0].pvp.damage_dealt/n[0].pvp.battles/100),e.private=!1):(e.ship_matches="无数据",e.ship_winrate="无数据",e.ship_avgdmg="无数据",e.private=!0),t.formatData()}))}))}))},getShipsData:function(){var t=this,e="";this.playersMap.forEach((function(t,a){e=e+t.shipID+","})),e=e.substr(0,e.length-1),this.$http.post("https://api.worldofwarships.asia/wows/encyclopedia/ships/",this.$qs.stringify({application_id:this.$env.VUE_APP_APPLICATION_ID,ship_id:e,language:"zh-cn"})).then((function(e){var a=e.data.data,n=JSON.parse(localStorage.getItem("zh_CN"));for(var i in a)n&&n.ships[i]&&(a[i].name=n.ships[i]),t.shipsMap.set(parseInt(i),a[i]);t.formatData()}))},formatData:function(){var t=this;this.tableDataL=[],this.tableDataR=[];var e=[],a=[],n=[];this.playersMap.forEach((function(a,n){var i=t.shipsMap.get(a.shipID);a.clan?a.displayName="["+a.clan+"]"+a.name:a.displayName=a.name,i&&(a.ship=i,"usa"===i.nation?a.rank=0:"uk"===i.nation?a.rank=1:"france"===i.nation?a.rank=2:"germany"===i.nation?a.rank=3:"italy"===i.nation?a.rank=4:"japan"===i.nation?a.rank=5:"ussr"===i.nation?a.rank=6:"pan_asia"===i.nation?a.rank=7:"europe"===i.nation?a.rank=8:"pan_america"===i.nation&&(a.rank=9),"AirCarrier"===i.type?a.typeRank=0:"Battleship"===i.type?a.typeRank=1:"Cruiser"===i.type?a.typeRank=2:"Destroyer"===i.type&&(a.typeRank=3),a.tierRank=a.ship.tier),i.is_premium?a.shipIconURL=t.encyclopedia.ship_type_images[i.type].image_premium:a.shipIconURL=t.encyclopedia.ship_type_images[i.type].image_elite,e.push(a)})),e.forEach((function(t,e){2!==t.relation?a.push(t):n.push(t)})),this.tableDataL=this.formartRank(a),this.tableDataR=this.formartRank(n)},formartRank:function(t){var e=t;return e.sort((function(t,e){return t.typeRank-e.typeRank||e.tierRank-t.tierRank||t.nationRank-e.nationRank})),e}}}),s=r,o=(a("cb5f"),a("2877")),l=Object(o["a"])(s,n,i,!1,null,"4b05390e",null);e["default"]=l.exports},"3ca3":function(t,e,a){"use strict";var n=a("6547").charAt,i=a("69f3"),r=a("7dd0"),s="String Iterator",o=i.set,l=i.getterFor(s);r(String,"String",(function(t){o(this,{type:s,string:String(t),index:0})}),(function(){var t,e=l(this),a=e.string,i=e.index;return i>=a.length?{value:void 0,done:!0}:(t=n(a,i),e.index+=t.length,{value:t,done:!1})}))},4160:function(t,e,a){"use strict";var n=a("23e7"),i=a("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4ec9":function(t,e,a){"use strict";var n=a("6d61"),i=a("6566");t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6547:function(t,e,a){var n=a("a691"),i=a("1d80"),r=function(t){return function(e,a){var r,s,o=String(i(e)),l=n(a),c=o.length;return l<0||l>=c?t?"":void 0:(r=o.charCodeAt(l),r<55296||r>56319||l+1===c||(s=o.charCodeAt(l+1))<56320||s>57343?t?o.charAt(l):r:t?o.slice(l,l+2):s-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},6566:function(t,e,a){"use strict";var n=a("9bf2").f,i=a("7c73"),r=a("e2cc"),s=a("0366"),o=a("19aa"),l=a("2266"),c=a("7dd0"),u=a("2626"),p=a("83ab"),f=a("f183").fastKey,h=a("69f3"),d=h.set,v=h.getterFor;t.exports={getConstructor:function(t,e,a,c){var u=t((function(t,n){o(t,u,e),d(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),p||(t.size=0),void 0!=n&&l(n,t[c],t,a)})),h=v(e),g=function(t,e,a){var n,i,r=h(t),s=m(t,e);return s?s.value=a:(r.last=s={index:i=f(e,!0),key:e,value:a,previous:n=r.last,next:void 0,removed:!1},r.first||(r.first=s),n&&(n.next=s),p?r.size++:t.size++,"F"!==i&&(r.index[i]=s)),t},m=function(t,e){var a,n=h(t),i=f(e);if("F"!==i)return n.index[i];for(a=n.first;a;a=a.next)if(a.key==e)return a};return r(u.prototype,{clear:function(){var t=this,e=h(t),a=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete a[n.index],n=n.next;e.first=e.last=void 0,p?e.size=0:t.size=0},delete:function(t){var e=this,a=h(e),n=m(e,t);if(n){var i=n.next,r=n.previous;delete a.index[n.index],n.removed=!0,r&&(r.next=i),i&&(i.previous=r),a.first==n&&(a.first=i),a.last==n&&(a.last=r),p?a.size--:e.size--}return!!n},forEach:function(t){var e,a=h(this),n=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:a.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),r(u.prototype,a?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),p&&n(u.prototype,"size",{get:function(){return h(this).size}}),u},setStrong:function(t,e,a){var n=e+" Iterator",i=v(e),r=v(n);c(t,e,(function(t,e){d(this,{type:n,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,a=t.last;while(a&&a.removed)a=a.previous;return t.target&&(t.last=a=a?a.next:t.state.first)?"keys"==e?{value:a.key,done:!1}:"values"==e?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),u(e)}}},"65f0":function(t,e,a){var n=a("861d"),i=a("e8b5"),r=a("b622"),s=r("species");t.exports=function(t,e){var a;return i(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?n(a)&&(a=a[s],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},"6d61":function(t,e,a){"use strict";var n=a("23e7"),i=a("da84"),r=a("94ca"),s=a("6eeb"),o=a("f183"),l=a("2266"),c=a("19aa"),u=a("861d"),p=a("d039"),f=a("1c7e"),h=a("d44e"),d=a("7156");t.exports=function(t,e,a){var v=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),m=v?"set":"add",b=i[t],y=b&&b.prototype,w=b,S={},_=function(t){var e=y[t];s(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:function(t,a){return e.call(this,0===t?0:t,a),this})};if(r(t,"function"!=typeof b||!(g||y.forEach&&!p((function(){(new b).entries().next()})))))w=a.getConstructor(e,t,v,m),o.REQUIRED=!0;else if(r(t,!0)){var I=new w,D=I[m](g?{}:-0,1)!=I,x=p((function(){I.has(1)})),k=f((function(t){new b(t)})),R=!g&&p((function(){var t=new b,e=5;while(e--)t[m](e,e);return!t.has(-0)}));k||(w=e((function(e,a){c(e,w,t);var n=d(new b,e,w);return void 0!=a&&l(a,n[m],n,v),n})),w.prototype=y,y.constructor=w),(x||R)&&(_("delete"),_("has"),v&&_("get")),(R||D)&&_(m),g&&y.clear&&delete y.clear}return S[t]=w,n({global:!0,forced:w!=b},S),h(w,t),g||a.setStrong(w,t,v),w}},7156:function(t,e,a){var n=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var r,s;return i&&"function"==typeof(r=e.constructor)&&r!==a&&n(s=r.prototype)&&s!==a.prototype&&i(t,s),t}},a640:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},ad6d:function(t,e,a){"use strict";var n=a("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,a){var n=a("83ab"),i=a("d039"),r=a("5135"),s=Object.defineProperty,o={},l=function(t){throw t};t.exports=function(t,e){if(r(o,t))return o[t];e||(e={});var a=[][t],c=!!r(e,"ACCESSORS")&&e.ACCESSORS,u=r(e,0)?e[0]:l,p=r(e,1)?e[1]:void 0;return o[t]=!!a&&!i((function(){if(c&&!n)return!0;var t={length:-1};c?s(t,1,{enumerable:!0,get:l}):t[1]=1,a.call(t,u,p)}))}},b0c0:function(t,e,a){var n=a("83ab"),i=a("9bf2").f,r=Function.prototype,s=r.toString,o=/^\s*function ([^ (]*)/,l="name";n&&!(l in r)&&i(r,l,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(t){return""}}})},b727:function(t,e,a){var n=a("0366"),i=a("44ad"),r=a("7b0b"),s=a("50c4"),o=a("65f0"),l=[].push,c=function(t){var e=1==t,a=2==t,c=3==t,u=4==t,p=6==t,f=5==t||p;return function(h,d,v,g){for(var m,b,y=r(h),w=i(y),S=n(d,v,3),_=s(w.length),I=0,D=g||o,x=e?D(h,_):a?D(h,0):void 0;_>I;I++)if((f||I in w)&&(m=w[I],b=S(m,I,y),t))if(e)x[I]=b;else if(b)switch(t){case 3:return!0;case 5:return m;case 6:return I;case 2:l.call(x,m)}else if(u)return!1;return p?-1:c||u?u:x}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},bb2f:function(t,e,a){var n=a("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},cb5f:function(t,e,a){"use strict";var n=a("f0e8"),i=a.n(n);i.a},ddb0:function(t,e,a){var n=a("da84"),i=a("fdbc"),r=a("e260"),s=a("9112"),o=a("b622"),l=o("iterator"),c=o("toStringTag"),u=r.values;for(var p in i){var f=n[p],h=f&&f.prototype;if(h){if(h[l]!==u)try{s(h,l,u)}catch(v){h[l]=u}if(h[c]||s(h,c,p),i[p])for(var d in r)if(h[d]!==r[d])try{s(h,d,r[d])}catch(v){h[d]=r[d]}}}},e8b5:function(t,e,a){var n=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f0e8:function(t,e,a){},f183:function(t,e,a){var n=a("d012"),i=a("861d"),r=a("5135"),s=a("9bf2").f,o=a("90e3"),l=a("bb2f"),c=o("meta"),u=0,p=Object.isExtensible||function(){return!0},f=function(t){s(t,c,{value:{objectID:"O"+ ++u,weakData:{}}})},h=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,c)){if(!p(t))return"F";if(!e)return"E";f(t)}return t[c].objectID},d=function(t,e){if(!r(t,c)){if(!p(t))return!0;if(!e)return!1;f(t)}return t[c].weakData},v=function(t){return l&&g.REQUIRED&&p(t)&&!r(t,c)&&f(t),t},g=t.exports={REQUIRED:!1,fastKey:h,getWeakData:d,onFreeze:v};n[c]=!0},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-3a6e37d2.a7296e6a.js.map