(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{138:function(e,a,t){e.exports=t(169)},166:function(e,a,t){},169:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),i=t.n(o),l=t(59),c=t(12),m=t(30),s=t.n(m),u=t(70),d=t(9),g=t(218),p=t(220),f=t(221),h=t(222),E=t(219),v=t(24),b=t(106),y=t(41),I=t(39),x=t(217),C=t(240),O=t(216),S=t(213),w=t(215),A=t(212),N=t(236),j=t(211),k=t(214);function W(e){var a=B(),n=r.a.useState(e.amount),o=Object(d.a)(n,2),i=o[0],l=o[1],c=r.a.useState(e.note),m=Object(d.a)(c,2),s=m[0],u=m[1],g=function(a){l(1),u(""),e.setShowDialog(!1)};return r.a.createElement(C.a,{open:e.showDialog,onClose:g,"aria-labelledby":"form-dialog-title"},r.a.createElement(j.a,{className:a.root},r.a.createElement(A.a,{id:"form-dialog-title"},e.menuItem.id+". ",e.menuItem.english+" ",Object(v.a)(Array(parseInt(e.menuItem.spicy))).map((function(e,a){return r.a.createElement(I.a,{icon:y.a,style:{color:"red"}})}))),r.a.createElement(S.a,{dividers:!0},r.a.createElement(k.a,{className:a.media,image:t(97),title:e.menuItem.english}),r.a.createElement(N.a,{margin:"dense",id:"order-amount",label:"Number to Order",type:"number",select:!0,SelectProps:{native:!0},value:i,onChange:function(e){l(e.target.value),console.log(i)},fullWidth:!0},r.a.createElement("option",{value:1},"1"),r.a.createElement("option",{value:2},"2"),r.a.createElement("option",{value:3},"3"),r.a.createElement("option",{value:4},"4"),r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:6},"6"),r.a.createElement("option",{value:7},"7"),r.a.createElement("option",{value:8},"8"),r.a.createElement("option",{value:9},"9"),r.a.createElement("option",{value:10},"10")),r.a.createElement(N.a,{margin:"dense",id:"customer-note",label:"Note/Modifications",text:"test",placeholder:" ",value:s,onChange:function(e){u(e.target.value),console.log(s)},fullWidth:!0}),r.a.createElement(w.a,null,"Any changes may be subject to extra charges."),r.a.createElement(w.a,{align:"right"},"$",(console.log(e.menuItem.price),console.log(i),parseFloat(e.menuItem.price)*i).toFixed(2))),r.a.createElement(O.a,null,r.a.createElement(x.a,{onClick:g,color:"primary"},"Cancel"),r.a.createElement(x.a,{onClick:function(a){console.log("added to order!"),e.addToOrder({id:e.menuItem.id,english:e.menuItem.english,chinese:e.menuItem.chinese,spicy:e.menuItem.spicy,price:e.menuItem.price,amount:i,note:s}),g()},color:"primary"},"Add to Order"))))}var B=Object(g.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120},root:{maxWidth:345},media:{height:140}}})),F=Object(g.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),color:e.palette.text.secondary}}}));var D=function(e){var a=F(),t=r.a.useState(!1),n=Object(d.a)(t,2),o=n[0],i=n[1];return r.a.createElement("div",{className:a.root},r.a.createElement(E.a,{item:!0,onClick:function(e){i(!o)},direction:"column",justify:"flex-start"},r.a.createElement(b.a,{square:!0,className:a.paper},e.menuItem.id+". "+e.menuItem.english+" ",Object(v.a)(Array(parseInt(e.menuItem.spicy))).map((function(e,a){return r.a.createElement(I.a,{icon:y.a,style:{color:"red"}})})))),r.a.createElement(W,{menuItem:e.menuItem,addToOrder:e.addToOrder,showDialog:o,setShowDialog:i,amount:1,note:""}))};var T=function(e){return console.log(typeof e.menuCategory),e.menuCategory.map((function(a){return r.a.createElement(E.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",xs:12,sm:12,md:12,lg:12},r.a.createElement(D,{key:a.english,menuItem:a,addToOrder:e.addToOrder}))}))},q=Object(g.a)((function(e){return{exproot:{width:"100%"},root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{position:"sticky",flexWrap:"nowrap",transform:"translateZ(0)",overflowX:"scroll"},title:{padding:5,margin:5},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},fabSpace:{height:"160px",bottom:0},cat:{marginTop:e.spacing(1)}}}));var R=function(e){console.log(typeof e.menu.Appetizer);var a=q(),t=r.a.useState([]),n=Object(d.a)(t,2),o=n[0],i=n[1];return r.a.createElement("div",null,r.a.createElement("div",{className:a.root},r.a.createElement(u.a,{variant:"h5",className:a.title},"1. Select Category"),r.a.createElement(p.a,{cellHeight:180,className:a.gridList},Object.keys(e.menu).map((function(a,t){return r.a.createElement(f.a,{key:a,style:{height:"fixed",width:"auto"},onClick:function(){return function(a){console.log(typeof a),console.log(a.menuCategory),i(e.menu[a.menuCategory])}({menuCategory:a})}},r.a.createElement(h.a,{component:"div"},a))}))),r.a.createElement(u.a,{variant:"h5",className:a.title},"2. Choose Items"),r.a.createElement(T,{className:a.cat,menuCategory:o,addToOrder:e.addToOrder})))},G=t(32),P=t(223);function Q(e){var a=V(),n=r.a.useState(e.amount),o=Object(d.a)(n,2),i=o[0],l=o[1],c=r.a.useState(e.note),m=Object(d.a)(c,2),s=m[0],u=m[1],g=function(a){l(e.orderItem.amount),u(e.orderItem.note),e.setShowDialog(!1)};return r.a.createElement(C.a,{open:e.showDialog,onClose:g,"aria-labelledby":"form-dialog-title"},r.a.createElement(j.a,{className:a.root},r.a.createElement(A.a,{id:"form-dialog-title"},e.orderItem.id+". ",e.orderItem.english+" ",Object(v.a)(Array(parseInt(e.orderItem.spicy))).map((function(e,a){return r.a.createElement(I.a,{icon:y.a,style:{color:"red"}})}))),r.a.createElement(S.a,{dividers:!0},r.a.createElement(k.a,{className:a.media,image:t(97),title:e.orderItem.english}),r.a.createElement(N.a,{margin:"dense",id:"order-amount",label:"Number to Order",type:"number",select:!0,SelectProps:{native:!0},value:i,onChange:function(e){l(e.target.value),console.log(i)},fullWidth:!0},r.a.createElement("option",{value:1},"1"),r.a.createElement("option",{value:2},"2"),r.a.createElement("option",{value:3},"3"),r.a.createElement("option",{value:4},"4"),r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:6},"6"),r.a.createElement("option",{value:7},"7"),r.a.createElement("option",{value:8},"8"),r.a.createElement("option",{value:9},"9"),r.a.createElement("option",{value:10},"10")),r.a.createElement(N.a,{margin:"dense",id:"customer-note",label:"Note/Modifications",text:"test",placeholder:" ",value:s,onChange:function(e){u(e.target.value),console.log(s)},fullWidth:!0}),r.a.createElement(w.a,null,"Any changes may be subject to extra charges."),r.a.createElement(w.a,{align:"right"},"$",(console.log(e.orderItem.price),console.log(i),(parseFloat(e.orderItem.price)*i).toFixed(2)))),r.a.createElement(O.a,null,r.a.createElement(x.a,{onClick:function(a){console.log("removing from order!"),e.removeFromOrder(e.itemIndex),g()},color:"primary"},"Remove Item"),r.a.createElement(x.a,{onClick:function(a){e.editInOrder(e.itemIndex,i,s),g()},color:"primary"},"Confirm Change"))))}var V=Object(g.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120},root:{maxWidth:345},media:{height:140}}})),z=Object(g.a)((function(e){return{root:{display:"flex",minWidth:"100%"},details:{display:"flex",flexDirection:"row"},content:{flex:"1 0 auto"}}}));function J(e){var a=z(),t=(Object(G.a)(),r.a.useState(!1)),n=Object(d.a)(t,2),o=n[0],i=n[1];return r.a.createElement("div",{className:a.root},r.a.createElement(b.a,{square:!0,className:a.root,onClick:function(e){i(!o)}},r.a.createElement("div",{className:a.details},r.a.createElement(P.a,null,r.a.createElement(u.a,null,e.orderItem.amount,"x\xa0",e.orderItem.english),r.a.createElement(u.a,{variant:"subtitle2",color:"textSecondary"},"$",(parseFloat(e.orderItem.price)*e.orderItem.amount).toFixed(2)),r.a.createElement(u.a,{variant:"subtitle1",color:"textSecondary"},e.orderItem.note)))),r.a.createElement(Q,{orderItem:e.orderItem,showDialog:o,setShowDialog:i,amount:e.orderItem.amount,note:e.orderItem.note,itemIndex:e.itemIndex,removeFromOrder:e.removeFromOrder,editInOrder:e.editInOrder}))}var Y=Object(g.a)((function(e){return{title:{},orderItem:{minWidth:"100%",flexGrow:1}}}));var L=function(e){console.log(e.order);var a=Y();return r.a.createElement("div",null,e.order.map((function(t,n){return r.a.createElement(E.a,{divider:!0,container:!0,direction:"column",justify:"flex-start",alignItems:"stretch"},r.a.createElement(J,{className:a.orderItem,itemIndex:n,orderItem:t,removeFromOrder:e.removeFromOrder,editInOrder:e.editInOrder}))})))},U=t(225),H=t(226),M=t(228),X=t(224),$=t(227),K=Object(g.a)((function(e){return{details:{padding:5},tableCell:{maxWidth:"25vw"}}}));function Z(e){var a=K(),t=function(){var a=0;return e.order.forEach((function(e){a+=parseInt(e.amount)*parseInt(e.price)})),a},n=function(){return.045*t()},o=function(){return 2==e.pd?3:0};return r.a.createElement("div",null,r.a.createElement(X.a,{component:b.a},r.a.createElement(U.a,{className:a.table,"aria-label":"simple table"},r.a.createElement(H.a,null,r.a.createElement($.a,{key:"subtotal"},r.a.createElement(M.a,{component:"th",scope:"row",className:a.tableCell},r.a.createElement(u.a,{variant:"subtitle1",className:a.details},"Estimated Subtotal:\xa0\xa0$",t()))),r.a.createElement($.a,{key:"tax"},r.a.createElement(M.a,{component:"th",scope:"row",className:a.tableCell},r.a.createElement(u.a,{variant:"subtitle1",className:a.details},"Estimated Tax:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$",n().toFixed(2)))),r.a.createElement($.a,{key:"delivery"},r.a.createElement(M.a,{component:"th",scope:"row",className:a.tableCell},r.a.createElement(u.a,{variant:"subtitle1",className:a.details},"Delivery Fee:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$",o().toFixed(2)))),r.a.createElement($.a,{key:"total"},r.a.createElement(M.a,{component:"th",scope:"row",className:a.tableCell},r.a.createElement(u.a,{variant:"subtitle1",className:a.details},"Estimated Total:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$",function(){var a=t(),r=n(),i=o(),l=a+r+i;return e.handlePriceChange("subtotal",a.toFixed(2)),e.handlePriceChange("tax",r.toFixed(2)),e.handlePriceChange("fee",i.toFixed(2)),e.handlePriceChange("total",l.toFixed(2)),l}().toFixed(2))))))))}var _=Object(g.a)((function(e){return{title:{}}}));var ee=function(e){return _(),r.a.createElement("div",null,r.a.createElement(L,{order:e.order,removeFromOrder:e.removeFromOrder,editInOrder:e.editInOrder}))},ae=Object(g.a)((function(e){return{root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));function te(e){var a=ae();return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{className:a.paper},r.a.createElement(u.a,null,"Contact Information"),r.a.createElement(N.a,{required:!0,placeholder:"Enter Your Name",label:"Name",onChange:e.handleInfoChange("name"),defaultValue:e.information.name,margin:"normal",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(N.a,{required:!0,placeholder:"Enter Your Address",label:"Address",onChange:e.handleInfoChange("address"),defaultValue:e.information.address,margin:"normal",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(N.a,{required:!0,placeholder:"Enter Your Phone Number",label:"Phone Number",onChange:e.handleInfoChange("phone"),defaultValue:e.information.phone,margin:"normal",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(N.a,{placeholder:"Enter Any Note for Driver",label:"Driver Note",onChange:e.handleInfoChange("driverNote"),defaultValue:e.information.driverNote,margin:"normal",fullWidth:!0}),r.a.createElement("br",null)),r.a.createElement(b.a,{className:a.paper},r.a.createElement(u.a,null,"Payment Details"),r.a.createElement(N.a,{required:!0,placeholder:"Enter Your Credit Card Number",label:"Credit Card",onChange:e.handleInfoChange("cc"),defaultValue:e.information.cc,margin:"normal",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(N.a,{required:!0,placeholder:"Enter Your Credit Card's Expiration Date",label:"Exp",onChange:e.handleInfoChange("exp"),defaultValue:e.information.exp,margin:"normal",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(N.a,{required:!0,placeholder:"Enter Your Credit Card's CVV",label:"CVV",onChange:e.handleInfoChange("cvv"),defaultValue:e.information.cvv,margin:"normal",fullWidth:!0}),r.a.createElement("br",null))))}var ne=Object(g.a)((function(e){return{paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));function re(e){var a=ne();return r.a.createElement("div",null,r.a.createElement(b.a,{elevation:2,className:a.paper},r.a.createElement(u.a,{variant:"h6"},"Would you like to view the menu in English, \u4e2d\u6587, or Both?",r.a.createElement(N.a,{required:!0,margin:"dense",id:"language",label:"English or \u4e2d\u6587",type:"text",select:!0,SelectProps:{native:!0},onChange:e.handleOrderOptionsChange("language"),defaultValue:e.orderOptions.language,fullWidth:!0},r.a.createElement("option",{value:1},"English"),r.a.createElement("option",{value:2},"\u4e2d\u6587"),r.a.createElement("option",{value:3},"Both")))),r.a.createElement(b.a,{elevation:2,className:a.paper},r.a.createElement(u.a,{variant:"h6"},"Will this order be for pickup or delivery?",r.a.createElement(N.a,{required:!0,margin:"dense",id:"pd",label:"Pickup or Delivery",type:"text",select:!0,SelectProps:{native:!0},onChange:e.handleOrderOptionsChange("pd"),defaultValue:e.orderOptions.pd,fullWidth:!0},r.a.createElement("option",{value:1},"Pickup"),r.a.createElement("option",{value:2},"Delivery")))))}var oe=t(230),ie=t(231),le=t(239),ce=t(229),me=t(237),se=t(48),ue=t.n(se);function de(){return r.a.createElement(u.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(ce.a,{color:"inherit",href:"https://szechuanbistro.com"},"Szechuan Bistro")," ",(new Date).getFullYear(),".")}var ge=Object(g.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(/api/image/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function pe(e){var a=ge(),t=Object(n.useState)({email:"",password:""}),o=Object(d.a)(t,2),i=o[0],l=o[1],c=Object(n.useState)(""),m=Object(d.a)(c,2),g=m[0],p=m[1],f=Object(n.useState)(!1),h=Object(d.a)(f,2),v=h[0],y=h[1];Object(n.useEffect)((function(){"undefined"!==localStorage.getItem("information")&&null!==localStorage.getItem("information")&&O(localStorage.getItem("information")),"undefined"!==sessionStorage.getItem("information")&&null!==sessionStorage.getItem("information")&&O(sessionStorage.getItem("information"))}));var I=function(e){return function(a){i[e]=a.target.value,l(i),console.log(i)}},C=function(e){v?(localStorage.setItem("information",JSON.stringify(e.information)),sessionStorage.removeItem("information")):(sessionStorage.setItem("information",JSON.stringify(e.information)),localStorage.removeItem("information")),O()},O=function(a){e.history.push({pathname:"/ordersystem"})};return r.a.createElement(E.a,{container:!0,component:"main",className:a.root},r.a.createElement(oe.a,null),r.a.createElement(E.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(E.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement("img",{src:ue.a,style:{height:"15vh"}}),r.a.createElement(u.a,{component:"h1",variant:"h5"},"Szechuan Bistro"),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:I("email")}),r.a.createElement(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:I("password")}),r.a.createElement(ie.a,{control:r.a.createElement(le.a,{value:"remember",color:"primary",checked:v,onClick:function(e){y(!v)}}),label:"Remember me"}),r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(u.a,{variant:"body2",color:"error"},g))),r.a.createElement(x.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(e){var a=i;console.log("calling api"),s.a.post("/api/user/login",a).then((function(e){p(""),console.log(e.data),C(e.data)})).catch((function(e){console.error("error:"+e),console.log(e.response.data),p(e.response.data.message)})),console.log(a)}},"Log In"),r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(ce.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(E.a,{item:!0},r.a.createElement(ce.a,{onClick:function(a){e.history.push("/register")},variant:"body2"},"Don't have an account? Register")))),r.a.createElement(u.a,{component:"h1",variant:"h6"},"Or"),r.a.createElement(x.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(a){e.history.push("/ordersystem")}},"Make Guest Order"),r.a.createElement(me.a,{mt:5},r.a.createElement(de,null)))))}var fe=t(233),he=t(234),Ee=t(232),ve=t(235),be=t(98),ye=t.n(be),Ie=t(241),xe=t(105),Ce=t(104),Oe=Object(g.a)((function(e){return Object(Ce.a)({root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"}},"menuButton",{marginRight:e.spacing(2)})}));function Se(e){var a=Oe(),t=r.a.useState(!1),o=Object(d.a)(t,2),i=o[0],l=o[1],c=r.a.useState(""),m=Object(d.a)(c,2),s=m[0],g=m[1],p=r.a.useState(null),f=Object(d.a)(p,2),h=f[0],E=f[1],v=Boolean(h),b=localStorage;Object(n.useEffect)((function(){null!==b.getItem("information")&&"undefined"!==b.getItem("information")||(b=sessionStorage),"undefined"!==b.getItem("information")&&null!==b.getItem("information")&&(l(!0),g(JSON.parse(b.getItem("information")).name))}));return r.a.createElement("div",null,r.a.createElement(fe.a,{position:"fixed"},r.a.createElement(he.a,null,r.a.createElement("img",{src:ue.a,height:"40vh",width:"40vh",className:a.margin}),r.a.createElement(u.a,{variant:"h6",className:a.title},e.title),i&&r.a.createElement("div",null,r.a.createElement(Ee.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){E(e.currentTarget)},color:"inherit"},r.a.createElement(ye.a,{fontSize:"large"})),r.a.createElement(xe.a,{id:"menu-appbar",anchorEl:h,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:v,onClose:function(){E(null)}},r.a.createElement(u.a,{variant:"h6",className:a.title},"Hello ",s),r.a.createElement(Ie.a,{onClick:function(a){l(!1),g(""),b.removeItem("information"),b=localStorage,e.resetInformationState(),console.log("logging user out")}},"Logout"))))),r.a.createElement(he.a,null))}var we=Object(g.a)((function(e){return{root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"}}}));function Ae(e){var a=we();return r.a.createElement("div",null,r.a.createElement("div",{className:a.root},r.a.createElement(Se,{title:"Confirm",resetInformationState:e.resetInformationState}),r.a.createElement(u.a,{variant:"h6",className:(a.title,a.margin)},"Are you sure you're ready to place your order? This is your last chance to make any changes!"),r.a.createElement(b.a,{elevation:0,className:a.fabSpace}),r.a.createElement(E.a,{container:!0,justify:"center"},r.a.createElement(b.a,{className:a.fab},r.a.createElement(ve.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.prevStep},"Make Changes")),r.a.createElement(b.a,null,r.a.createElement(ve.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.nextStep},"Send Order!")))))}var Ne=Object(g.a)((function(e){return{root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"}}}));function je(e){var a=Ne();return r.a.createElement("div",null,r.a.createElement("div",{className:a.root},r.a.createElement(Se,{title:"Confirmed",resetInformationState:e.resetInformationState}),r.a.createElement(u.a,{variant:"h6",className:(a.title,a.margin)},"Thank you for ordering from Szechuan Bistro! We will be in contact shortly through phone by 405-752-8889 to confirm your order! Deliveries should be made within the hour, and pickup orders should be ready in 15 minutes. ",r.a.createElement("br",null)," Thank you for your patronage, we hope to serve you again soon."),e.callAPI(),r.a.createElement(b.a,{elevation:0,className:a.fabSpace})))}var ke=Object(g.a)((function(e){return{root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"}}}));function We(e){var a=ke(),t=function(){var a=localStorage;"undefined"!==a.getItem("information")&&null!==a.getItem("information")||(a=sessionStorage),"undefined"!==a.getItem("information")&&null!==a.getItem("information")&&e.information!==JSON.parse(a.getItem("information"))&&a.setItem("information",JSON.stringify(e.information))};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(Se,{title:"Contact and Payment Details",resetInformationState:e.resetInformationState}),r.a.createElement(te,{information:e.information,handleInfoChange:e.handleInfoChange}),r.a.createElement(b.a,{elevation:0,className:a.fabSpace}),r.a.createElement(E.a,{container:!0,justify:"center"},r.a.createElement(b.a,{className:a.fab},r.a.createElement(ve.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:function(){t(),e.prevStep()}},"Review Order")),r.a.createElement(b.a,null,r.a.createElement(ve.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:function(){t(),e.nextStep()}},"Continue")))))}var Be=Object(g.a)((function(e){return{root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"}}}));function Fe(e){var a=Be();return r.a.createElement("div",null,r.a.createElement("div",{className:a.root},r.a.createElement(Se,{title:"Order Options",resetInformationState:e.resetInformationState}),r.a.createElement(re,{orderOptions:e.orderOptions,handleOrderOptionsChange:e.handleOrderOptionsChange}),r.a.createElement(b.a,{elevation:0,className:a.fabSpace}),r.a.createElement(E.a,{container:!0,justify:"center"},r.a.createElement(b.a,{className:a.fab},r.a.createElement(ve.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab),onClick:e.nextStep},"Continue to Order")))))}var De=Object(g.a)((function(e){return{root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"}}}));function Te(e){var a=De();return r.a.createElement("div",null,r.a.createElement("div",{className:a.root},r.a.createElement(Se,{title:"Order from our menu",resetInformationState:e.resetInformationState}),r.a.createElement(b.a,{elevation:2,className:a.paper},r.a.createElement(R,{menu:e.menu,addToOrder:e.addToOrder})),r.a.createElement(b.a,{elevation:0,className:a.fabSpace}),r.a.createElement(E.a,{container:!0,justify:"center"},r.a.createElement(b.a,{className:a.fab},r.a.createElement(ve.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.prevStep},"Options")),r.a.createElement(b.a,null,r.a.createElement(ve.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.nextStep},"Review Order")))))}var qe=Object(g.a)((function(e){return{root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"}}}));function Re(e){var a=qe();return r.a.createElement("div",null," ",r.a.createElement("div",{className:a.root},r.a.createElement(Se,{title:"Review your Order",resetInformationState:e.resetInformationState}),r.a.createElement(b.a,{elevation:2,className:a.paper},r.a.createElement(u.a,{variant:"h6",className:(a.title,a.margin)},"Your Order"),r.a.createElement(ee,{order:e.order,removeFromOrder:e.removeFromOrder,editInOrder:e.editInOrder})),r.a.createElement(b.a,null,r.a.createElement(Z,{order:e.order,price:e.price,handlePriceChange:e.handlePriceChange,pd:e.pd})),r.a.createElement(b.a,{elevation:0,className:a.fabSpace}),r.a.createElement(E.a,{container:!0,justify:"center"},r.a.createElement(b.a,{className:a.fab},r.a.createElement(ve.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.prevStep},"Add Items")),r.a.createElement(b.a,null,r.a.createElement(ve.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.nextStep},"Continue")))))}function Ge(e){var a=r.a.useState({language:1,pd:1}),t=Object(d.a)(a,2),o=t[0],i=t[1],l=r.a.useState({}),c=Object(d.a)(l,2),m=c[0],u=c[1],g=r.a.useState([]),p=Object(d.a)(g,2),f=p[0],h=p[1],E=r.a.useState({name:"",address:"",phone:"",driverNotes:"",cc:"",exp:"",cvv:""}),b=Object(d.a)(E,2),y=b[0],I=b[1],x=r.a.useState({subtotal:"0",tax:"0",fee:"0",total:"0"}),C=Object(d.a)(x,2),O=C[0],S=C[1],w=r.a.useState(1),A=Object(d.a)(w,2),N=A[0],j=A[1];Object(n.useEffect)((function(){console.log("trigger use effect hook"),s.a.get("https://www.neckch.in/sbistro/menu.json").then((function(e){return u(e.data)})),"undefined"!==localStorage.getItem("information")&&null!==localStorage.getItem("information")?I(JSON.parse(localStorage.getItem("information"))):"undefined"!==sessionStorage.getItem("information")&&null!==sessionStorage.getItem("information")&&I(JSON.parse(sessionStorage.getItem("information")))}),[]);var k=function(){j(N+1)},W=function(){j(N-1)},B=function(){I({name:"",address:"",phone:"",driverNotes:"",cc:"",exp:"",cvv:""})};switch(N){case 1:return r.a.createElement(Fe,{orderOptions:o,handleOrderOptionsChange:function(e){return function(a){o[e]=parseInt(a.target.value),i(o),console.log(o)}},nextStep:k,resetInformationState:B});case 2:return r.a.createElement(Te,{menu:m,addToOrder:function(e){console.log(JSON.stringify(e)),h([].concat(Object(v.a)(f),[e])),console.log(JSON.stringify(f))},prevStep:W,nextStep:k,resetInformationState:B});case 3:return r.a.createElement(Re,{order:f,removeFromOrder:function(e){console.log(e);var a=f.slice(0);h([].concat(Object(v.a)(a.slice(0,e)),Object(v.a)(a.slice(e+1))))},editInOrder:function(e,a,t){console.log("editing order");var n=f[e];n.amount=a,n.note=t,h([].concat(Object(v.a)(f.slice(0,e)),[n],Object(v.a)(f.slice(e+1))))},price:O,handlePriceChange:function(e,a){console.log("hit"),O[e]=a,S(O)},pd:o.pd,prevStep:W,nextStep:k,resetInformationState:B});case 4:return r.a.createElement(We,{information:y,handleInfoChange:function(e){return function(a){y[e]=a.target.value,I(y)}},prevStep:W,nextStep:k,resetInformationState:B});case 5:return r.a.createElement(Ae,{prevStep:W,nextStep:k,resetInformationState:B});case 6:return r.a.createElement(je,{callAPI:function(){var e={orderOptions:o,order:f,information:y,price:O};return console.log("calling api"),s.a.post("/api/twilio",e).then((function(e){return console.log(e.data)})).catch((function(e){console.error(e)})),console.log(e),JSON.stringify(e)},resetInformationState:B})}}var Pe=Object(g.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(/api/image/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Qe(e){var a=Pe(),t=r.a.useState({fname:"",lname:"",email:"",password:"",password2:""}),n=Object(d.a)(t,2),o=n[0],i=n[1],l=r.a.useState(""),c=Object(d.a)(l,2),m=c[0],g=c[1],p=function(e){return function(a){o[e]=a.target.value,i(o),console.log(o)}};return r.a.createElement(E.a,{container:!0,component:"main",className:a.root},r.a.createElement(oe.a,null),r.a.createElement(E.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(E.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement("img",{src:ue.a,style:{height:"15vh"}}),r.a.createElement(u.a,{component:"h1",variant:"h5"},"Szechuan Bistro"),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(N.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:p("fname")})),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(N.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:p("lname")})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(N.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:p("email")})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(N.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:p("password")})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(N.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",type:"password",id:"password2",autoComplete:"current-password",onChange:p("password2")}))),r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(u.a,{variant:"body2",color:"error"},m))),r.a.createElement(x.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(){return function(e){var a=o;console.log("calling api"),s.a.post("/api/user/register",a).then((function(e){var a="";Object.keys(e.data).length>1?(console.log("there was errors!"),e.data.errors.forEach((function(e){console.log("error: "+e),a+=e+"\n"}))):console.log("there were no errors"),g(a)})).catch((function(e){console.error(e)})),console.log(a)}()}},"Register"),r.a.createElement(E.a,{container:!0,justify:"flex-end"},r.a.createElement(E.a,{item:!0},r.a.createElement(ce.a,{onClick:function(a){e.history.push("/")},variant:"body2"},"Already have an account? Log In")))))))}t(166),t(167);function Ve(){return r.a.createElement(u.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(ce.a,{color:"inherit",href:"https://szechuanbistro.com"},"Szechuan Bistro")," ",(new Date).getFullYear(),".")}var ze=function(){return r.a.createElement(l.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/ordersystem",component:Ge,Copyright:Ve}),r.a.createElement(c.a,{path:"/register",component:Qe,Copyright:Ve}),r.a.createElement(c.a,{path:"/",component:pe,Copyright:Ve})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,a,t){e.exports=t.p+"static/media/logo.b1d6964c.png"},97:function(e,a){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAQTGF2YzU4LjM1LjEwMAD/2wBDAAgEBAQEBAUFBQUFBQYGBgYGBgYGBgYGBgYHBwcICAgHBwcGBgcHCAgICAkJCQgICAgJCQoKCgwMCwsODg4RERT/xABtAAEBAQEBAQAAAAAAAAAAAAAAAQIDBwQBAQEBAQEBAAAAAAAAAAAAAAABAgMFBBABAQEAAgEDBQEBAQAAAAAAAAEREgIDEyFBcWEx8FHhwbERAQEBAQEAAwEBAAAAAAAAAAABESFREgJhMYH/wAARCABkAGQDASIAAhEAAxEA/9oADAMBAAIRAxEAPwD2a6mqlfXHmWptNRVTTTRA1dpADWtGZ+1UNalXWT90XWtN+4HV2frFqX3VlUoAIABRUII0IqVVX2QFVU9z3Bi1KWoqUVARUIaCiEoNLKyorW+yfP8AwioLKahornqWpqWtMX7Lq6yaHya01nTQv2a01nSUTa3L74rOrqLrWms6aLrYztNpkX5X9c6jViWKxUDDBP4aB9fwvDqKRQIqLIiwjSQ/8QU36mGDX+Ficfdq2JsJpcTinHGuUTlF6nE4nE5HKHU4mYuGxdh04YuJyiztDqzFww05RF4YZ9zkcg1818vdnt5e5Wezo4232rfL3h63dmgm32ter3/qXy90qX4/fgiW32tet3J5u+sL8qbfa16vfdanl7/1z/jURdvtdJ5u563dg/xL/Wpbl7Vvm76ev5Gb+UVn5fb2v//Z"}},[[138,1,2]]]);
//# sourceMappingURL=main.18e79683.chunk.js.map