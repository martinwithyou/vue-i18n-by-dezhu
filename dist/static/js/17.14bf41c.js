webpackJsonp([17],{188:function(e,t,a){var n=a(75)(a(642),a(722),null,null);e.exports=n.exports},642:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},methods:{handleDelete:function(){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleEdit:function(){var e=this;this.$prompt("请输入您的编辑内容","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:" ",inputErrorMessage:"邮箱格式不正确"}).then(function(t){var a=t.value;e.$message({type:"success",message:"你的邮箱是: "+a})}).catch(function(){e.$message({type:"info",message:"取消输入"})})}}}},722:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"info"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=17.14bf41c.js.map