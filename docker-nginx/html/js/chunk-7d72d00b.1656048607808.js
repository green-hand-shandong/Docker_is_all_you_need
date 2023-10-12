(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d72d00b"],{"18c4":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("用户管理")]),r("el-breadcrumb-item",[e._v("用户列表")])],1),r("el-card",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:7}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.searchUser},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchUser},slot:"append"})],1)],1),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("添加用户")])],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.userlist,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{prop:"username",label:"用户名"}}),r("el-table-column",{attrs:{prop:"tip",label:"备注"}}),r("el-table-column",{attrs:{label:"权限"},scopedSlots:e._u([{key:"default",fn:function(t){return[-1!==t.row.rights.indexOf("1")?r("el-tag",{attrs:{type:"info"}},[e._v("用户管理")]):e._e(),-1!==t.row.rights.indexOf("2")?r("el-tag",{attrs:{type:"success"}},[e._v("发布任务")]):e._e(),-1!==t.row.rights.indexOf("3")?r("el-tag",{attrs:{type:"warning"}},[e._v("处理任务")]):e._e(),-1!==t.row.rights.indexOf("4")?r("el-tag",{attrs:{type:"warning"}},[e._v("数据管理")]):e._e()]}}])}),r("el-table-column",{attrs:{label:"状态","min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{on:{change:function(r){return e.userStateChanged(t.row)}},model:{value:t.row.status,callback:function(r){e.$set(t.row,"status",r)},expression:"scope.row.status"}})]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.showEditDialog(t.row.username)}}},[e._v("修改密码")]),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.showRightsDialog(t.row.username)}}},[e._v("设置权限")])]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[1,2,5,10],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"添加用户",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.addDialogClosed}},[r("el-form",{ref:"addUserFormRef",staticClass:"demo-ruleForm",attrs:{model:e.addUserForm,rules:e.addUserFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.addUserForm.username,callback:function(t){e.$set(e.addUserForm,"username",t)},expression:"addUserForm.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{model:{value:e.addUserForm.password,callback:function(t){e.$set(e.addUserForm,"password",t)},expression:"addUserForm.password"}})],1),r("el-form-item",{attrs:{label:"备注",prop:"tip"}},[r("el-input",{model:{value:e.addUserForm.tip,callback:function(t){e.$set(e.addUserForm,"tip",t)},expression:"addUserForm.tip"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改密码",visible:e.editDialogVisible,width:"30%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[r("el-form",{ref:"editUserFormRef",staticClass:"demo-ruleForm",attrs:{model:e.editUserForm,rules:e.editUserFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editUserForm.username,callback:function(t){e.$set(e.editUserForm,"username",t)},expression:"editUserForm.username"}})],1),r("el-form-item",{attrs:{label:"新密码",prop:"newpass"}},[r("el-input",{model:{value:e.editUserForm.newpass,callback:function(t){e.$set(e.editUserForm,"newpass",t)},expression:"editUserForm.newpass"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editUser}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"设置用户权限",visible:e.setRightsDialogVisible,width:"30%"},on:{"update:visible":function(t){e.setRightsDialogVisible=t},close:e.setRightsDialogClosed}},[r("el-checkbox",{attrs:{indeterminate:e.rightsDiag.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.rightsDiag.checkAll,callback:function(t){e.$set(e.rightsDiag,"checkAll",t)},expression:"rightsDiag.checkAll"}},[e._v("全选")]),r("div",{staticStyle:{margin:"15px 0"}}),r("el-checkbox-group",{on:{change:e.handleCheckedOptionsChange},model:{value:e.rightsDiag.checkedOptions,callback:function(t){e.$set(e.rightsDiag,"checkedOptions",t)},expression:"rightsDiag.checkedOptions"}},e._l(e.rightsDiag.options,(function(t){return r("el-checkbox",{key:t,staticClass:"cardiacCheckbox",attrs:{label:t}},[e._v(e._s(t))])})),1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.setRightsDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.modifyRights}},[e._v("确 定")])],1)],1)],1)},i=[],a=(r("96cf"),r("1da1")),s=["用户管理","发布任务","处理任务","数据管理"],o={"用户管理":"1","发布任务":"2","处理任务":"3","数据管理":"4"},l={1:"用户管理",2:"发布任务",3:"处理任务",4:"数据管理"},u={data:function(){return{loading:!1,queryInfo:{query:"",pagenum:1,pagesize:5},userlist:[],total:0,dialogVisible:!1,editDialogVisible:!1,addUserForm:{username:"",password:"",tip:""},addUserFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{require:!0,min:5,max:25,message:"用户名长度在 5 到 25 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{require:!0,min:5,max:25,message:"密码长度在 5 到 25 个字符",trigger:"blur"}],tip:[{required:!1},{require:!1,max:10,message:"备注不能超过 20 个字符",trigger:"blur"}]},editUserForm:{username:"",newpass:""},editUserFormRules:{newpass:[{required:!0,message:"请输入密码",trigger:"blur"},{require:!0,min:6,max:15,message:"密码长度在 6 到 15 个字符",trigger:"blur"}]},setRightsDialogVisible:!1,rightsDiag:{userid:"",checkAll:!1,checkedOptions:[],options:s,isIndeterminate:!1}}},methods:{getUserList:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$http.post("user/users",e.queryInfo);case 3:r=t.sent,n=r.data,100===n.status&&(e.userlist=n.data.list,e.total=n.data.total,e.loading=!1);case 6:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryInfo.pagesize=e,this.queryInfo.pagenum=1,this.getUserList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getUserList()},userStateChanged:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.post("user/status",{username:e.username,status:e.status});case 2:n=r.sent,i=n.data,100===i.status&&t.$message({message:e.status?"用户激活":"用户禁用",type:"success"});case 5:case"end":return r.stop()}}),r)})))()},addDialogClosed:function(){this.$refs.addUserFormRef.resetFields()},addUser:function(){var e=this;this.$refs.addUserFormRef.validate(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(r){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("user/register",e.addUserForm);case 4:n=t.sent,i=n.data,100===i.status&&(e.$message({message:i.data,type:"success"}),e.dialogVisible=!1,e.getUserList());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},searchUser:function(){this.queryInfo.pagenum=1,this.getUserList()},showEditDialog:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.editUserForm.username=e,t.editDialogVisible=!0;case 2:case"end":return r.stop()}}),r)})))()},editDialogClosed:function(){this.$refs.editUserFormRef.resetFields()},editUser:function(){var e=this;this.$refs.editUserFormRef.validate(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(r){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("user/password",e.editUserForm);case 4:n=t.sent,i=n.data,100===i.status&&(e.$message({message:i.data,type:"success"}),e.editDialogVisible=!1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},setRightsDialogClosed:function(){this.rightsDiag.checkAll=!1,this.rightsDiag.checkedOptions=[],this.rightsDiag.isIndeterminate=!1,this.rightsDiag.userid=""},showRightsDialog:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,i,a,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("user/previlege/"+e);case 2:if(n=r.sent,i=n.data,100===i.status){for(a=[],s=i.data,o=0;o<s.length;o++)a.push(l[s[o]]);t.rightsDiag.checkedOptions=a,t.rightsDiag.checkAll=a.length===t.rightsDiag.options.length,t.rightsDiag.isIndeterminate=a.length>0&&a.length<t.rightsDiag.options.length,t.rightsDiag.userid=e,t.setRightsDialogVisible=!0}case 5:case"end":return r.stop()}}),r)})))()},handleCheckAllChange:function(e){this.rightsDiag.checkedOptions=e?this.rightsDiag.options:[],this.rightsDiag.isIndeterminate=!1},handleCheckedOptionsChange:function(e){var t=e.length;this.rightsDiag.checkAll=t===this.rightsDiag.options.length,this.rightsDiag.isIndeterminate=t>0&&t<this.rightsDiag.options.length},modifyRights:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(r=[],n=0;n<e.rightsDiag.checkedOptions.length;n++)r.push(o[e.rightsDiag.checkedOptions[n]]);return t.next=4,e.$http.post("user/previlege",{username:e.rightsDiag.userid,rights:r});case 4:i=t.sent,a=i.data,100===a.status&&(e.$message({message:a.data,type:"success"}),e.setRightsDialogVisible=!1,e.getUserList());case 7:case"end":return t.stop()}}),t)})))()}},created:function(){this.getUserList()}},c=u,h=r("2877"),d=Object(h["a"])(c,n,i,!1,null,"412eacce",null);t["default"]=d.exports},"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("d3b7"),r("e6cf");function n(e,t,r,n,i,a,s){try{var o=e[a](s),l=o.value}catch(u){return void r(u)}o.done?t(l):Promise.resolve(l).then(n,i)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var s=e.apply(t,r);function o(e){n(s,i,a,o,l,"next",e)}function l(e){n(s,i,a,o,l,"throw",e)}o(void 0)}))}}},"96cf":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",o=i.toStringTag||"@@toStringTag";function l(e,t,r,n){var i=t&&t.prototype instanceof f?t:f,a=Object.create(i.prototype),s=new L(n||[]);return a._invoke=U(e,r,s),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=l;var c="suspendedStart",h="suspendedYield",d="executing",g="completed",p={};function f(){}function m(){}function v(){}var y={};y[a]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(O([])));w&&w!==r&&n.call(w,a)&&(y=w);var x=v.prototype=f.prototype=Object.create(y);function k(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function D(e){function t(r,i,a,s){var o=u(e[r],e,i);if("throw"!==o.type){var l=o.arg,c=l.value;return c&&"object"===typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then((function(e){t("next",e,a,s)}),(function(e){t("throw",e,a,s)})):Promise.resolve(c).then((function(e){l.value=e,a(l)}),(function(e){return t("throw",e,a,s)}))}s(o.arg)}var r;function i(e,n){function i(){return new Promise((function(r,i){t(e,n,r,i)}))}return r=r?r.then(i,i):i()}this._invoke=i}function U(e,t,r){var n=c;return function(i,a){if(n===d)throw new Error("Generator is already running");if(n===g){if("throw"===i)throw a;return C()}r.method=i,r.arg=a;while(1){var s=r.delegate;if(s){var o=_(s,r);if(o){if(o===p)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===c)throw n=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var l=u(e,t,r);if("normal"===l.type){if(n=r.done?g:h,l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=g,r.method="throw",r.arg=l.arg)}}}function _(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=u(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,p;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function O(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,s=function r(){while(++i<e.length)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return s.next=s}}return{next:C}}function C(){return{value:t,done:!0}}return m.prototype=x.constructor=v,v.constructor=m,v[o]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},k(D.prototype),D.prototype[s]=function(){return this},e.AsyncIterator=D,e.async=function(t,r,n,i){var a=new D(l(t,r,n,i));return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},k(x),x[o]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return o.type="throw",o.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],o=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var l=n.call(s,"catchLoc"),u=n.call(s,"finallyLoc");if(l&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=e,s.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),R(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;R(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=chunk-7d72d00b.1656048607808.js.map