webpackJsonp([29,13],{324:function(e,i,t){i=e.exports=t(4)(!0),i.push([e.id,".cs_imgdetail img{width:100%}","",{version:3,sources:["C:/Users/Administrator/Desktop/demo/vue4/SLS/vue2/src/pages/wfw/images.vue"],names:[],mappings:"AACA,kBACI,UAAY,CACf",file:"images.vue",sourcesContent:["\n.cs_imgdetail img{\n    width: 100%;\n}\n\n"],sourceRoot:""}])},411:function(e,i,t){var s=t(324);"string"==typeof s&&(s=[[e.id,s,""]]);t(5)(s,{});s.locals&&(e.exports=s.locals)},483:function(e,i,t){t(411);var s=t(3)(t(713),t(531),null,null);e.exports=s.exports},531:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("el-dialog",{staticClass:"cs_imgdetail",attrs:{title:"证件照片"},model:{value:e.dialogTableVisible,callback:function(i){e.dialogTableVisible=i},expression:"dialogTableVisible"}},[t("img",{attrs:{src:e.imgsrc}})])},staticRenderFns:[]}},713:function(e,i){(function(e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{dialogTableVisible:!1,imgsrc:""}},created:function(){var i=this,t=e.eventHub;t.$on("detailimg",function(e){i.dialogTableVisible=!0,i.imgsrc=e})}}}).call(i,function(){return this}())}});
//# sourceMappingURL=29.7e73aad149de936bf6ae.js.map