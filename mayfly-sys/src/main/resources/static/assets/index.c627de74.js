var H=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var B=(e,o,n)=>o in e?H(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,V=(e,o)=>{for(var n in o||(o={}))Q.call(o,n)&&B(e,n,o[n]);if(A)for(var n of A(o))W.call(o,n)&&B(e,n,o[n]);return e},F=(e,o)=>J(e,K(o));import{b as w,a as X,e as Y}from"./enums.64d64ef5.js";import{s as S,r as N,a as E,z as T,t as U,I as D,e as r,f as v,h,i as l,E as s,k as m,l as z,B as $,o as Z,P as x,w as q,j}from"./vendor.e3fc7715.js";import"./Api.3145ce1a.js";import"./index.5944118c.js";import"./Enum.2b540114.js";var L=S({name:"RoleEdit",props:{visible:{type:Boolean},account:{type:[Boolean,Object]}},setup(e,{emit:o}){const n=N(null),i=E({visible:!1,btnLoading:!1,allRole:[],roles:[],query:{name:null,pageNum:1,pageSize:5},total:0});T(e,(u,a)=>{if(i.visible=u.visible,u.account&&u.account.id!=0)w.roleIds.request({id:e.account.id}).then(p=>{i.roles=p||[],b()});else return});const _=()=>{b()},C=(u,a)=>{let p=i.roles;if(p.includes(a.id)){for(let y=0;y<p.length;y++)if(p[y]===a.id){p.splice(y,1);break}}else p.push(a.id)},d=()=>{setTimeout(()=>{n.value.clearSelection(),i.allRole.forEach(u=>{i.roles.includes(u.id)&&n.value.toggleRowSelection(u,!0)})},50)},g=async()=>{let u=i.roles.join(",");await w.saveRoles.request({id:e.account.id,roleIds:u}),D.success("\u4FDD\u5B58\u6210\u529F!"),f()},f=()=>{i.query.pageNum=1,i.query.name=null,o("update:visible",!1),o("cancel")},c=()=>{i.query.pageNum=1,i.query.name=null,b()},b=async()=>{let u=await X.list.request(i.query);i.allRole=u.list,i.total=u.total,d()};return F(V({},U(i)),{roleTable:n,search:b,handlePageChange:_,select:C,btnOk:g,cancel:f,clear:c})}});const ee={class:"account-dialog"},oe={class:"toolbar"},le={style:{float:"left"}},te={class:"dialog-footer"},ae=m("\u53D6 \u6D88"),se=m("\u786E \u5B9A");function ne(e,o,n,i,_,C){const d=r("el-input"),g=r("el-button"),f=r("el-table-column"),c=r("el-table"),b=r("el-pagination"),u=r("el-dialog");return v(),h("div",ee,[l(u,{title:e.account==null?"":"\u5206\u914D\u201C"+e.account.username+"\u201D\u7684\u89D2\u8272",modelValue:e.visible,"onUpdate:modelValue":o[5]||(o[5]=a=>e.visible=a),"before-close":e.cancel,"show-close":!1},{footer:s(()=>[l("div",te,[l(g,{onClick:o[4]||(o[4]=a=>e.cancel()),size:"small"},{default:s(()=>[ae]),_:1}),l(g,{type:"primary",loading:e.btnLoading,onClick:e.btnOk,size:"small"},{default:s(()=>[se]),_:1},8,["loading","onClick"])])]),default:s(()=>[l("div",oe,[l("div",le,[l(d,{placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D",size:"small",style:{width:"150px"},modelValue:e.query.name,"onUpdate:modelValue":o[1]||(o[1]=a=>e.query.name=a),onClear:o[2]||(o[2]=a=>e.clear()),clearable:""},null,8,["modelValue"]),l(g,{onClick:e.search,type:"success",icon:"el-icon-search",size:"small"},null,8,["onClick"])])]),l(c,{data:e.allRole,border:"",ref:"roleTable",onSelect:e.select,style:{width:"100%"}},{default:s(()=>[l(f,{type:"selection",width:"40"}),l(f,{prop:"name",label:"\u89D2\u8272\u540D\u79F0"}),l(f,{prop:"remark",label:"\u89D2\u8272\u63CF\u8FF0"},{default:s(a=>[m(z(a.row.remark?a.row.remark:"\u6682\u65E0\u63CF\u8FF0"),1)]),_:1})]),_:1},8,["data","onSelect"]),l(b,{onCurrentChange:e.handlePageChange,style:{"text-align":"center","margin-top":"20px"},background:"",layout:"prev, pager, next, total, jumper",total:e.total,"current-page":e.query.pageNum,"onUpdate:current-page":o[3]||(o[3]=a=>e.query.pageNum=a),"page-size":e.query.pageSize},null,8,["onCurrentChange","total","current-page","page-size"])]),_:1},8,["title","modelValue","before-close"])])}L.render=ne;var P=S({name:"AccountEdit",props:{visible:{type:Boolean},account:{type:[Boolean,Object]},title:{type:String}},setup(e,{emit:o}){const n=N(null),i=E({edit:!1,form:{id:null,username:null,password:null,repassword:null},btnLoading:!1,rules:{username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:["change","blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:["change","blur"]}]}});T(e,(d,g)=>{d.account?i.form=V({},d.account):i.form={}});const _=async()=>{let d=i.form.id?w.update:w.save;n.value.validate(g=>{if(g)d.request(i.form).then(f=>{D.success("\u64CD\u4F5C\u6210\u529F"),o("val-change",i.form),i.btnLoading=!0,setTimeout(()=>{i.btnLoading=!1},1e3),n.resetFields(),i.form={}});else return D.error("\u8868\u5355\u586B\u5199\u6709\u8BEF"),!1})},C=()=>{o("update:visible",!1),setTimeout(()=>{o("update:account",null)},800),o("cancel"),setTimeout(()=>{n.value.resetFields(),i.form={}},200)};return F(V({},U(i)),{accountForm:n,btnOk:_,cancel:C})}}),Be="";const ie={class:"account-dialog"},ue={class:"dialog-footer"},re=m("\u53D6 \u6D88"),de=m("\u786E \u5B9A");function ce(e,o,n,i,_,C){const d=r("el-input"),g=r("el-form-item"),f=r("el-form"),c=r("el-button"),b=r("el-dialog");return v(),h("div",ie,[l(b,{title:e.title,modelValue:e.visible,"onUpdate:modelValue":o[5]||(o[5]=u=>e.visible=u),"show-close":!1,width:"35%"},{footer:s(()=>[l("div",ue,[l(c,{onClick:o[4]||(o[4]=u=>e.cancel()),size:"mini"},{default:s(()=>[re]),_:1}),l(c,{type:"primary",loading:e.btnLoading,onClick:e.btnOk,size:"small"},{default:s(()=>[de]),_:1},8,["loading","onClick"])])]),default:s(()=>[l(f,{model:e.form,ref:"accountForm",rules:e.rules,"label-width":"85px",size:"small"},{default:s(()=>[l(g,{prop:"username",label:"\u7528\u6237\u540D:",required:""},{default:s(()=>[l(d,{disabled:e.edit,modelValue:e.form.username,"onUpdate:modelValue":o[1]||(o[1]=u=>e.form.username=u),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D","auto-complete":"off"},null,8,["disabled","modelValue"])]),_:1}),l(g,{prop:"password",label:"\u5BC6\u7801:",required:""},{default:s(()=>[l(d,{type:"password",modelValue:e.form.password,"onUpdate:modelValue":o[2]||(o[2]=u=>e.form.password=u),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",autocomplete:"new-password"},null,8,["modelValue"])]),_:1}),e.edit?$("",!0):(v(),h(g,{key:0,label:"\u786E\u8BA4\u5BC6\u7801:",required:""},{default:s(()=>[l(d,{type:"password",modelValue:e.form.repassword,"onUpdate:modelValue":o[3]||(o[3]=u=>e.form.repassword=u),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",autocomplete:"new-password"},null,8,["modelValue"])]),_:1}))]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}P.render=ce;var M=S({name:"AccountList",components:{RoleEdit:L,AccountEdit:P},setup(){const e=E({chooseId:null,chooseData:null,query:{pageNum:1,pageSize:10},datas:[],total:0,showRoleDialog:{title:"",visible:!1,accountRoles:[]},showResourceDialog:{title:"",visible:!1,resources:[],defaultProps:{children:"children",label:"name"}},roleDialog:{visible:!1,account:null,roles:[]},accountDialog:{visible:!1,data:null}});Z(()=>{n()});const o=a=>{!a||(e.chooseId=a.id,e.chooseData=a)},n=async()=>{let a=await w.list.request(e.query);e.datas=a.list,e.total=a.total},i=async a=>{let p=e.showResourceDialog;p.title='"'+a.username+'" \u7684\u83DC\u5355&\u6743\u9650',p.resources=[],p.resources=await w.resources.request({id:a.id}),p.visible=!0},_=async a=>{let p=e.showRoleDialog;p.title='"'+a.username+'" \u7684\u89D2\u8272\u4FE1\u606F',p.accountRoles=await w.roles.request({id:a.id}),p.visible=!0},C=async a=>{let p=a.id,y=a.status?0:1;await w.changeStatus.request({id:p,status:y}),D.success("\u64CD\u4F5C\u6210\u529F"),n()},d=a=>{e.query.pageNum=a,n()},g=()=>{e.chooseId||D.error("\u8BF7\u9009\u62E9\u8D26\u53F7"),e.roleDialog.visible=!0,e.roleDialog.account=e.chooseData},f=(a=!1)=>{a?e.accountDialog.data=null:e.accountDialog.data=e.chooseData,e.accountDialog.visible=!0},c=()=>{e.roleDialog.visible=!1,e.roleDialog.account=null,n()},b=()=>{e.accountDialog.visible=!1,n()},u=async()=>{try{await w.del.request({id:e.chooseId}),D.success("\u5220\u9664\u6210\u529F"),n()}catch(a){D.error("\u522A\u9664\u5931\u8D25")}};return F(V({},U(e)),{enums:Y,search:n,choose:o,showResources:i,showRoles:_,changeStatus:C,handlePageChange:d,roleEdit:g,editAccount:f,cancel:c,valChange:b,deleteAccount:u})}}),Ne="";const pe={class:"role-list"},me={class:"toolbar"},ge=m("\u6DFB\u52A0"),fe=m("\u7F16\u8F91"),be=m("\u89D2\u8272\u5206\u914D"),ve=m("\u5220\u9664"),he={style:{float:"right"}},ye=l("i",null,null,-1),we=m("\u6B63\u5E38"),_e=m("\u7981\u7528"),Ce=m("\u89D2\u8272"),ke=m("\u83DC\u5355&\u6743\u9650"),De=m("\u7981\u7528"),$e=m("\u542F\u7528"),Re={class:"custom-tree-node"},qe={key:0},Ve={key:1,style:{color:"#67c23a"}};function ze(e,o,n,i,_,C){const d=r("el-button"),g=r("el-input"),f=r("el-radio"),c=r("el-table-column"),b=r("el-tag"),u=r("el-link"),a=r("el-table"),p=r("el-pagination"),y=r("el-dialog"),I=r("el-tree"),O=r("role-edit"),G=r("account-edit"),R=x("auth");return v(),h("div",pe,[l("div",me,[q(l(d,{type:"primary",icon:"el-icon-plus",size:"mini",onClick:o[1]||(o[1]=t=>e.editAccount(!0))},{default:s(()=>[ge]),_:1},512),[[R,"account:add"]]),q(l(d,{disabled:e.chooseId==null,onClick:o[2]||(o[2]=t=>e.editAccount(!1)),type:"primary",icon:"el-icon-edit",size:"mini"},{default:s(()=>[fe]),_:1},8,["disabled"]),[[R,"account:update"]]),q(l(d,{disabled:e.chooseId==null,onClick:o[3]||(o[3]=t=>e.roleEdit()),type:"success",icon:"el-icon-setting",size:"mini"},{default:s(()=>[be]),_:1},8,["disabled"]),[[R,"account:saveRoles"]]),q(l(d,{disabled:e.chooseId==null,onClick:o[4]||(o[4]=t=>e.deleteAccount()),type:"danger",icon:"el-icon-delete",size:"mini"},{default:s(()=>[ve]),_:1},8,["disabled"]),[[R,"account:del"]]),l("div",he,[l(g,{placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D",size:"small",style:{width:"140px"},modelValue:e.query.username,"onUpdate:modelValue":o[5]||(o[5]=t=>e.query.username=t),onClear:o[6]||(o[6]=t=>e.search()),clearable:""},null,8,["modelValue"]),l(d,{onClick:o[7]||(o[7]=t=>e.search()),type:"success",icon:"el-icon-search",size:"mini"})])]),l(a,{data:e.datas,border:"",ref:"table",onCurrentChange:e.choose,"show-overflow-tooltip":""},{default:s(()=>[l(c,{label:"\u9009\u62E9",width:"50px"},{default:s(t=>[l(f,{modelValue:e.chooseId,"onUpdate:modelValue":o[8]||(o[8]=k=>e.chooseId=k),label:t.row.id},{default:s(()=>[ye]),_:2},1032,["modelValue","label"])]),_:1}),l(c,{prop:"username",label:"\u7528\u6237\u540D","min-width":"115"}),l(c,{align:"center",prop:"status",label:"\u72B6\u6001","min-width":"63"},{default:s(t=>[t.row.status==1?(v(),h(b,{key:0,type:"success",size:"mini"},{default:s(()=>[we]),_:1})):$("",!0),t.row.status==0?(v(),h(b,{key:1,type:"danger",size:"mini"},{default:s(()=>[_e]),_:1})):$("",!0)]),_:1}),l(c,{"min-width":"160",prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4"},{default:s(t=>[m(z(e.$filters.dateFormat(t.row.createTime)),1)]),_:1}),l(c,{"min-width":"160",prop:"lastLoginTime",label:"\u6700\u540E\u767B\u5F55\u65F6\u95F4"}),l(c,{"min-width":"120",prop:"remark",label:"\u5907\u6CE8","show-overflow-tooltip":""}),l(c,{label:"\u67E5\u770B\u66F4\u591A","min-width":"150"},{default:s(t=>[l(u,{onClick:j(k=>e.showRoles(t.row),["prevent"]),type:"success"},{default:s(()=>[Ce]),_:2},1032,["onClick"]),l(u,{class:"ml5",onClick:j(k=>e.showResources(t.row),["prevent"]),type:"info"},{default:s(()=>[ke]),_:2},1032,["onClick"])]),_:1}),l(c,{label:"\u64CD\u4F5C","min-width":"200px"},{default:s(t=>[t.row.status==1?q((v(),h(d,{key:0,type:"danger",onClick:k=>e.changeStatus(t.row),icom:"el-icon-tickets",size:"mini",plain:""},{default:s(()=>[De]),_:2},1032,["onClick"])),[[R,"account:changeStatus"]]):$("",!0),t.row.status==0?q((v(),h(d,{key:1,type:"success",onClick:k=>e.changeStatus(t.row),size:"mini",plain:""},{default:s(()=>[$e]),_:2},1032,["onClick"])),[[R,"account:changeStatus"]]):$("",!0)]),_:1})]),_:1},8,["data","onCurrentChange"]),l(p,{onCurrentChange:e.handlePageChange,style:{"text-align":"center"},background:"",layout:"prev, pager, next, total, jumper",total:e.total,"current-page":e.query.pageNum,"onUpdate:current-page":o[9]||(o[9]=t=>e.query.pageNum=t),"page-size":e.query.pageSize},null,8,["onCurrentChange","total","current-page","page-size"]),l(y,{width:"500px",title:e.showRoleDialog.title,modelValue:e.showRoleDialog.visible,"onUpdate:modelValue":o[10]||(o[10]=t=>e.showRoleDialog.visible=t)},{default:s(()=>[l(a,{border:"",data:e.showRoleDialog.accountRoles},{default:s(()=>[l(c,{property:"name",label:"\u89D2\u8272\u540D",width:"125"}),l(c,{property:"creator",label:"\u5206\u914D\u8D26\u53F7",width:"125"}),l(c,{property:"createTime",label:"\u5206\u914D\u65F6\u95F4"},{default:s(t=>[m(z(e.$filters.dateFormat(t.row.createTime)),1)]),_:1})]),_:1},8,["data"])]),_:1},8,["title","modelValue"]),l(y,{title:e.showResourceDialog.title,modelValue:e.showResourceDialog.visible,"onUpdate:modelValue":o[11]||(o[11]=t=>e.showResourceDialog.visible=t),width:"400px"},{default:s(()=>[l(I,{style:{height:"50vh",overflow:"auto"},data:e.showResourceDialog.resources,"node-key":"id",props:e.showResourceDialog.defaultProps,"expand-on-click-node":!1},{default:s(({node:t,data:k})=>[l("span",Re,[k.type==e.enums.ResourceTypeEnum.MENU.value?(v(),h("span",qe,z(t.label),1)):$("",!0),k.type==e.enums.ResourceTypeEnum.PERMISSION.value?(v(),h("span",Ve,z(t.label),1)):$("",!0)])]),_:1},8,["data","props"])]),_:1},8,["title","modelValue"]),l(O,{visible:e.roleDialog.visible,"onUpdate:visible":o[12]||(o[12]=t=>e.roleDialog.visible=t),account:e.roleDialog.account,onCancel:o[13]||(o[13]=t=>e.cancel())},null,8,["visible","account"]),l(G,{visible:e.accountDialog.visible,"onUpdate:visible":o[14]||(o[14]=t=>e.accountDialog.visible=t),account:e.accountDialog.data,"onUpdate:account":o[15]||(o[15]=t=>e.accountDialog.data=t),onValChange:o[16]||(o[16]=t=>e.valChange())},null,8,["visible","account"])])}M.render=ze;export default M;
