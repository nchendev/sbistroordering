(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,a,t){e.exports=t(160)},157:function(e,a,t){},160:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),l=t.n(o),i=t(57),c=t(12),m=t(30),s=t.n(m),d=t(68),u=t(9),p=t(205),g=t(207),f=t(208),E=t(209),h=t(206),v=t(24),b=t(98),y=t(40),x=t(38),C=t(204),A=t(227),O=t(203),w=t(200),I=t(202),N=t(199),S=t(223),j=t(198),k=t(201);function W(e){var a=B(),n=r.a.useState(e.amount),o=Object(u.a)(n,2),l=o[0],i=o[1],c=r.a.useState(e.note),m=Object(u.a)(c,2),s=m[0],d=m[1],p=function(a){i(1),d(""),e.setShowDialog(!1)};return r.a.createElement(A.a,{open:e.showDialog,onClose:p,"aria-labelledby":"form-dialog-title"},r.a.createElement(j.a,{className:a.root},r.a.createElement(N.a,{id:"form-dialog-title"},e.menuItem.id+". ",e.menuItem.english+" ",Object(v.a)(Array(parseInt(e.menuItem.spicy))).map((function(e,a){return r.a.createElement(x.a,{icon:y.a,style:{color:"red"}})}))),r.a.createElement(w.a,{dividers:!0},r.a.createElement(k.a,{className:a.media,image:t(94),title:e.menuItem.english}),r.a.createElement(S.a,{margin:"dense",id:"order-amount",label:"Number to Order",type:"number",select:!0,SelectProps:{native:!0},value:l,onChange:function(e){i(e.target.value),console.log(l)},fullWidth:!0},r.a.createElement("option",{value:1},"1"),r.a.createElement("option",{value:2},"2"),r.a.createElement("option",{value:3},"3"),r.a.createElement("option",{value:4},"4"),r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:6},"6"),r.a.createElement("option",{value:7},"7"),r.a.createElement("option",{value:8},"8"),r.a.createElement("option",{value:9},"9"),r.a.createElement("option",{value:10},"10")),r.a.createElement(S.a,{margin:"dense",id:"customer-note",label:"Note/Modifications",text:"test",placeholder:" ",value:s,onChange:function(e){d(e.target.value),console.log(s)},fullWidth:!0}),r.a.createElement(I.a,null,"Any changes may be subject to extra charges."),r.a.createElement(I.a,{align:"right"},"$",(console.log(e.menuItem.price),console.log(l),parseFloat(e.menuItem.price)*l).toFixed(2))),r.a.createElement(O.a,null,r.a.createElement(C.a,{onClick:p,color:"primary"},"Cancel"),r.a.createElement(C.a,{onClick:function(a){console.log("added to order!"),e.addToOrder({id:e.menuItem.id,english:e.menuItem.english,chinese:e.menuItem.chinese,spicy:e.menuItem.spicy,price:e.menuItem.price,amount:l,note:s}),p()},color:"primary"},"Add to Order"))))}var B=Object(p.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120},root:{maxWidth:345},media:{height:140}}})),F=Object(p.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),color:e.palette.text.secondary}}}));var D=function(e){var a=F(),t=r.a.useState(!1),n=Object(u.a)(t,2),o=n[0],l=n[1];return r.a.createElement("div",{className:a.root},r.a.createElement(h.a,{item:!0,onClick:function(e){l(!o)},direction:"column",justify:"flex-start"},r.a.createElement(b.a,{square:!0,className:a.paper},e.menuItem.id+". "+e.menuItem.english+" ",Object(v.a)(Array(parseInt(e.menuItem.spicy))).map((function(e,a){return r.a.createElement(x.a,{icon:y.a,style:{color:"red"}})})))),r.a.createElement(W,{menuItem:e.menuItem,addToOrder:e.addToOrder,showDialog:o,setShowDialog:l,amount:1,note:""}))};var T=function(e){return console.log(typeof e.menuCategory),e.menuCategory.map((function(a){return r.a.createElement(h.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",xs:12,sm:12,md:12,lg:12},r.a.createElement(D,{key:a.english,menuItem:a,addToOrder:e.addToOrder}))}))},q=Object(p.a)((function(e){return{exproot:{width:"100%"},root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{position:"sticky",flexWrap:"nowrap",transform:"translateZ(0)",overflowX:"scroll"},title:{padding:5,margin:5},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},fabSpace:{height:"160px",bottom:0},cat:{marginTop:e.spacing(1)}}}));var R=function(e){console.log(typeof e.menu.Appetizer);var a=q(),t=r.a.useState([]),n=Object(u.a)(t,2),o=n[0],l=n[1];return r.a.createElement("div",null,r.a.createElement("div",{className:a.root},r.a.createElement(d.a,{variant:"h5",className:a.title},"1. Select Category"),r.a.createElement(g.a,{cellHeight:180,className:a.gridList},Object.keys(e.menu).map((function(a,t){return r.a.createElement(f.a,{key:a,style:{height:"fixed",width:"auto"},onClick:function(){return function(a){console.log(typeof a),console.log(a.menuCategory),l(e.menu[a.menuCategory])}({menuCategory:a})}},r.a.createElement(E.a,{component:"div"},a))}))),r.a.createElement(d.a,{variant:"h5",className:a.title},"2. Choose Items"),r.a.createElement(T,{className:a.cat,menuCategory:o,addToOrder:e.addToOrder})))},G=t(32),P=t(210);function Q(e){var a=V(),n=r.a.useState(e.amount),o=Object(u.a)(n,2),l=o[0],i=o[1],c=r.a.useState(e.note),m=Object(u.a)(c,2),s=m[0],d=m[1],p=function(a){i(e.orderItem.amount),d(e.orderItem.note),e.setShowDialog(!1)};return r.a.createElement(A.a,{open:e.showDialog,onClose:p,"aria-labelledby":"form-dialog-title"},r.a.createElement(j.a,{className:a.root},r.a.createElement(N.a,{id:"form-dialog-title"},e.orderItem.id+". ",e.orderItem.english+" ",Object(v.a)(Array(parseInt(e.orderItem.spicy))).map((function(e,a){return r.a.createElement(x.a,{icon:y.a,style:{color:"red"}})}))),r.a.createElement(w.a,{dividers:!0},r.a.createElement(k.a,{className:a.media,image:t(94),title:e.orderItem.english}),r.a.createElement(S.a,{margin:"dense",id:"order-amount",label:"Number to Order",type:"number",select:!0,SelectProps:{native:!0},value:l,onChange:function(e){i(e.target.value),console.log(l)},fullWidth:!0},r.a.createElement("option",{value:1},"1"),r.a.createElement("option",{value:2},"2"),r.a.createElement("option",{value:3},"3"),r.a.createElement("option",{value:4},"4"),r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:6},"6"),r.a.createElement("option",{value:7},"7"),r.a.createElement("option",{value:8},"8"),r.a.createElement("option",{value:9},"9"),r.a.createElement("option",{value:10},"10")),r.a.createElement(S.a,{margin:"dense",id:"customer-note",label:"Note/Modifications",text:"test",placeholder:" ",value:s,onChange:function(e){d(e.target.value),console.log(s)},fullWidth:!0}),r.a.createElement(I.a,null,"Any changes may be subject to extra charges."),r.a.createElement(I.a,{align:"right"},"$",(console.log(e.orderItem.price),console.log(l),(parseFloat(e.orderItem.price)*l).toFixed(2)))),r.a.createElement(O.a,null,r.a.createElement(C.a,{onClick:function(a){console.log("removing from order!"),e.removeFromOrder(e.itemIndex),p()},color:"primary"},"Remove Item"),r.a.createElement(C.a,{onClick:function(a){e.editInOrder(e.itemIndex,l,s),p()},color:"primary"},"Confirm Change"))))}var V=Object(p.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120},root:{maxWidth:345},media:{height:140}}})),Y=Object(p.a)((function(e){return{root:{display:"flex",minWidth:"100%"},details:{display:"flex",flexDirection:"row"},content:{flex:"1 0 auto"}}}));function z(e){var a=Y(),t=(Object(G.a)(),r.a.useState(!1)),n=Object(u.a)(t,2),o=n[0],l=n[1];return r.a.createElement("div",{className:a.root},r.a.createElement(b.a,{square:!0,className:a.root,onClick:function(e){l(!o)}},r.a.createElement("div",{className:a.details},r.a.createElement(P.a,null,r.a.createElement(d.a,null,e.orderItem.amount,"x\xa0",e.orderItem.english),r.a.createElement(d.a,{variant:"subtitle2",color:"textSecondary"},"$",(parseFloat(e.orderItem.price)*e.orderItem.amount).toFixed(2)),r.a.createElement(d.a,{variant:"subtitle1",color:"textSecondary"},e.orderItem.note)))),r.a.createElement(Q,{orderItem:e.orderItem,showDialog:o,setShowDialog:l,amount:e.orderItem.amount,note:e.orderItem.note,itemIndex:e.itemIndex,removeFromOrder:e.removeFromOrder,editInOrder:e.editInOrder}))}var J=Object(p.a)((function(e){return{title:{},orderItem:{minWidth:"100%",flexGrow:1}}}));var L=function(e){console.log(e.order);var a=J();return r.a.createElement("div",null,e.order.map((function(t,n){return r.a.createElement(h.a,{divider:!0,container:!0,direction:"column",justify:"flex-start",alignItems:"stretch"},r.a.createElement(z,{className:a.orderItem,itemIndex:n,orderItem:t,removeFromOrder:e.removeFromOrder,editInOrder:e.editInOrder}))})))},U=t(212),M=t(213),H=t(215),X=t(211),$=t(214),K=Object(p.a)((function(e){return{details:{padding:5},tableCell:{maxWidth:"25vw"}}}));function Z(e){var a=K(),t=function(){var a=0;return e.order.forEach((function(e){a+=parseInt(e.amount)*parseInt(e.price)})),a},n=function(){return.045*t()},o=function(){return 2==e.pd?3:0};return r.a.createElement("div",null,r.a.createElement(X.a,{component:b.a},r.a.createElement(U.a,{className:a.table,"aria-label":"simple table"},r.a.createElement(M.a,null,r.a.createElement($.a,{key:"subtotal"},r.a.createElement(H.a,{component:"th",scope:"row",className:a.tableCell},r.a.createElement(d.a,{variant:"subtitle1",className:a.details},"Estimated Subtotal:\xa0\xa0$",t()))),r.a.createElement($.a,{key:"tax"},r.a.createElement(H.a,{component:"th",scope:"row",className:a.tableCell},r.a.createElement(d.a,{variant:"subtitle1",className:a.details},"Estimated Tax:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$",n().toFixed(2)))),r.a.createElement($.a,{key:"delivery"},r.a.createElement(H.a,{component:"th",scope:"row",className:a.tableCell},r.a.createElement(d.a,{variant:"subtitle1",className:a.details},"Delivery Fee:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$",o().toFixed(2)))),r.a.createElement($.a,{key:"total"},r.a.createElement(H.a,{component:"th",scope:"row",className:a.tableCell},r.a.createElement(d.a,{variant:"subtitle1",className:a.details},"Estimated Total:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$",function(){var a=t(),r=n(),l=o(),i=a+r+l;return e.handlePriceChange("subtotal",a.toFixed(2)),e.handlePriceChange("tax",r.toFixed(2)),e.handlePriceChange("fee",l.toFixed(2)),e.handlePriceChange("total",i.toFixed(2)),i}().toFixed(2))))))))}var _=Object(p.a)((function(e){return{title:{}}}));var ee=function(e){return _(),r.a.createElement("div",null,r.a.createElement(L,{order:e.order,removeFromOrder:e.removeFromOrder,editInOrder:e.editInOrder}))},ae=Object(p.a)((function(e){return{root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));function te(e){var a=ae();return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{className:a.paper},r.a.createElement(d.a,null,"Contact Information"),r.a.createElement(S.a,{required:!0,placeholder:"Enter Your Name",label:"Name",onChange:e.handleInfoChange("name"),defaultValue:e.information.name,margin:"normal",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(S.a,{required:!0,placeholder:"Enter Your Address",label:"Address",onChange:e.handleInfoChange("address"),defaultValue:e.information.address,margin:"normal",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(S.a,{required:!0,placeholder:"Enter Your Phone Number",label:"Phone Number",onChange:e.handleInfoChange("phone"),defaultValue:e.information.phone,margin:"normal",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(S.a,{placeholder:"Enter Any Note for Driver",label:"Driver Note",onChange:e.handleInfoChange("driverNote"),defaultValue:e.information.driverNote,margin:"normal",fullWidth:!0}),r.a.createElement("br",null)),r.a.createElement(b.a,{className:a.paper},r.a.createElement(d.a,null,"Payment Details"),r.a.createElement(S.a,{required:!0,placeholder:"Enter Your Credit Card Number",label:"Credit Card",onChange:e.handleInfoChange("cc"),defaultValue:e.information.cc,margin:"normal",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(S.a,{required:!0,placeholder:"Enter Your Credit Card's Expiration Date",label:"Exp",onChange:e.handleInfoChange("exp"),defaultValue:e.information.exp,margin:"normal",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(S.a,{required:!0,placeholder:"Enter Your Credit Card's CVV",label:"CVV",onChange:e.handleInfoChange("cvv"),defaultValue:e.information.cvv,margin:"normal",fullWidth:!0}),r.a.createElement("br",null))))}var ne=Object(p.a)((function(e){return{paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));function re(e){var a=ne();return r.a.createElement("div",null,r.a.createElement(b.a,{elevation:2,className:a.paper},r.a.createElement(d.a,{variant:"h6"},"Would you like to view the menu in English, \u4e2d\u6587, or Both?",r.a.createElement(S.a,{required:!0,margin:"dense",id:"language",label:"English or \u4e2d\u6587",type:"text",select:!0,SelectProps:{native:!0},onChange:e.handleOrderOptionsChange("language"),defaultValue:e.orderOptions.language,fullWidth:!0},r.a.createElement("option",{value:1},"English"),r.a.createElement("option",{value:2},"\u4e2d\u6587"),r.a.createElement("option",{value:3},"Both")))),r.a.createElement(b.a,{elevation:2,className:a.paper},r.a.createElement(d.a,{variant:"h6"},"Will this order be for pickup or delivery?",r.a.createElement(S.a,{required:!0,margin:"dense",id:"pd",label:"Pickup or Delivery",type:"text",select:!0,SelectProps:{native:!0},onChange:e.handleOrderOptionsChange("pd"),defaultValue:e.orderOptions.pd,fullWidth:!0},r.a.createElement("option",{value:1},"Pickup"),r.a.createElement("option",{value:2},"Delivery")))))}var oe=t(217),le=t(218),ie=t(226),ce=t(216),me=t(224),se=t(67),de=t.n(se);function ue(){return r.a.createElement(d.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(ce.a,{color:"inherit",href:"https://szechuanbistro.com"},"Szechuan Bistro")," ",(new Date).getFullYear(),".")}var pe=Object(p.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(/api/image/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ge(e){var a=pe(),t=Object(n.useState)({email:"",password:""}),o=Object(u.a)(t,2),l=o[0],i=o[1],c=Object(n.useState)(""),m=Object(u.a)(c,2),p=m[0],g=m[1],f=Object(n.useState)(!1),E=Object(u.a)(f,2),v=E[0],y=E[1];Object(n.useEffect)((function(){"undefined"!==localStorage.getItem("information")&&null!==localStorage.getItem("information")&&O(JSON.parse(localStorage.getItem("information"))),"undefined"!==sessionStorage.getItem("information")&&null!==sessionStorage.getItem("information")&&O(JSON.parse(sessionStorage.getItem("information")))}));var x=function(e){return function(a){l[e]=a.target.value,i(l),console.log(l)}},A=function(e){v?(localStorage.setItem("information",JSON.stringify(e.information)),sessionStorage.removeItem("information")):(sessionStorage.setItem("information",JSON.stringify(e.information)),localStorage.removeItem("information")),O()},O=function(a){e.history.push({pathname:"/ordersystem",state:{data:a}})};return r.a.createElement(h.a,{container:!0,component:"main",className:a.root},r.a.createElement(oe.a,null),r.a.createElement(h.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(h.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement("img",{src:de.a,style:{height:"15vh"}}),r.a.createElement(d.a,{component:"h1",variant:"h5"},"Szechuan Bistro"),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:x("email")}),r.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:x("password")}),r.a.createElement(le.a,{control:r.a.createElement(ie.a,{value:"remember",color:"primary",checked:v,onClick:function(e){y(!v)}}),label:"Remember me"}),r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(d.a,{variant:"body2",color:"error"},p))),r.a.createElement(C.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(e){var a=l;console.log("calling api"),s.a.post("/api/user/login",a).then((function(e){g(""),console.log(e.data),A(e.data)})).catch((function(e){console.error("error:"+e),console.log(e.response.data),g(e.response.data.message)})),console.log(a)}},"Log In"),r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(ce.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(h.a,{item:!0},r.a.createElement(ce.a,{onClick:function(a){e.history.push("/register")},variant:"body2"},"Don't have an account? Register")))),r.a.createElement(d.a,{component:"h1",variant:"h6"},"Or"),r.a.createElement(C.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(a){e.history.push("/ordersystem")}},"Make Guest Order"),r.a.createElement(me.a,{mt:5},r.a.createElement(ue,null)))))}var fe=t(220),Ee=t(221),he=t(222),ve=Object(p.a)((function(e){return{root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"}}}));function be(e){var a=ve();return r.a.createElement("div",null,r.a.createElement("div",{className:a.root},r.a.createElement(fe.a,{position:"fixed"},r.a.createElement(Ee.a,null,r.a.createElement(d.a,{variant:"h6",className:a.title},"Confirm Order"))),r.a.createElement(Ee.a,null),r.a.createElement(d.a,{variant:"h6",className:(a.title,a.margin)},"Are you sure you're ready to place your order? This is your last chance to make any changes!"),r.a.createElement(b.a,{elevation:0,className:a.fabSpace}),r.a.createElement(h.a,{container:!0,justify:"center"},r.a.createElement(b.a,{className:a.fab},r.a.createElement(he.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.prevStep},"Make Changes")),r.a.createElement(b.a,null,r.a.createElement(he.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.nextStep},"Send Order!")))))}var ye=Object(p.a)((function(e){return{root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"}}}));function xe(e){var a=ye();return r.a.createElement("div",null,r.a.createElement("div",{className:a.root},r.a.createElement(fe.a,{position:"fixed"},r.a.createElement(Ee.a,null,r.a.createElement(d.a,{variant:"h6",className:a.title},"Order Submitted"))),r.a.createElement(Ee.a,null),r.a.createElement(d.a,{variant:"h6",className:(a.title,a.margin)},"Thank you for ordering from Szechuan Bistro! We will be in contact shortly through phone by 405-752-8889 to confirm your order! Deliveries should be made within the hour, and pickup orders should be ready in 15 minutes. ",r.a.createElement("br",null)," Thank you for your patronage, we hope to serve you again soon."),e.callAPI(),r.a.createElement(b.a,{elevation:0,className:a.fabSpace})))}var Ce=Object(p.a)((function(e){return{root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"}}}));function Ae(e){var a=Ce();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(fe.a,{position:"fixed"},r.a.createElement(Ee.a,null,r.a.createElement(d.a,{variant:"h6",className:a.title},"Contact and Payment Details"))),r.a.createElement(Ee.a,null),r.a.createElement(te,{information:e.information,handleInfoChange:e.handleInfoChange}),r.a.createElement(b.a,{elevation:0,className:a.fabSpace}),r.a.createElement(h.a,{container:!0,justify:"center"},r.a.createElement(b.a,{className:a.fab},r.a.createElement(he.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.prevStep},"Review Order")),r.a.createElement(b.a,null,r.a.createElement(he.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.nextStep},"Continue")))))}var Oe=Object(p.a)((function(e){return{root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"}}}));function we(e){var a=Oe();return r.a.createElement("div",null,r.a.createElement("div",{className:a.root},r.a.createElement(fe.a,{position:"fixed"},r.a.createElement(Ee.a,null,r.a.createElement(d.a,{variant:"h6",className:a.title},"Order Options"))),r.a.createElement(Ee.a,null),r.a.createElement(re,{orderOptions:e.orderOptions,handleOrderOptionsChange:e.handleOrderOptionsChange}),r.a.createElement(b.a,{elevation:0,className:a.fabSpace}),r.a.createElement(h.a,{container:!0,justify:"center"},r.a.createElement(b.a,{className:a.fab},r.a.createElement(he.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab),onClick:e.nextStep},"Continue to Order")))))}var Ie=Object(p.a)((function(e){return{root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"}}}));function Ne(e){var a=Ie();return r.a.createElement("div",null,r.a.createElement("div",{className:a.root},r.a.createElement(fe.a,{position:"fixed"},r.a.createElement(Ee.a,null,r.a.createElement(d.a,{variant:"h6",className:a.title},"Menu"))),r.a.createElement(Ee.a,null),r.a.createElement(b.a,{elevation:2,className:a.paper},r.a.createElement(R,{menu:e.menu,addToOrder:e.addToOrder})),r.a.createElement(b.a,{elevation:0,className:a.fabSpace}),r.a.createElement(h.a,{container:!0,justify:"center"},r.a.createElement(b.a,{className:a.fab},r.a.createElement(he.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.prevStep},"Options")),r.a.createElement(b.a,null,r.a.createElement(he.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.nextStep},"Review Order")))))}var Se=Object(p.a)((function(e){return{root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"}}}));function je(e){var a=Se();return r.a.createElement("div",null," ",r.a.createElement("div",{className:a.root},r.a.createElement(fe.a,{position:"fixed"},r.a.createElement(Ee.a,null,r.a.createElement(d.a,{variant:"h6",className:a.title},"Review Order"))),r.a.createElement(Ee.a,null),r.a.createElement(b.a,{elevation:2,className:a.paper},r.a.createElement(d.a,{variant:"h6",className:(a.title,a.margin)},"Your Order"),r.a.createElement(ee,{order:e.order,removeFromOrder:e.removeFromOrder,editInOrder:e.editInOrder})),r.a.createElement(b.a,null,r.a.createElement(Z,{order:e.order,price:e.price,handlePriceChange:e.handlePriceChange,pd:e.pd})),r.a.createElement(b.a,{elevation:0,className:a.fabSpace}),r.a.createElement(h.a,{container:!0,justify:"center"},r.a.createElement(b.a,{className:a.fab},r.a.createElement(he.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.prevStep},"Add Items")),r.a.createElement(b.a,null,r.a.createElement(he.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.nextStep},"Continue")))))}function ke(e){var a=r.a.useState({language:1,pd:1}),t=Object(u.a)(a,2),o=t[0],l=t[1],i=r.a.useState({}),c=Object(u.a)(i,2),m=c[0],d=c[1],p=r.a.useState([]),g=Object(u.a)(p,2),f=g[0],E=g[1],h=r.a.useState({name:"",address:"",phone:"",driverNotes:"",cc:"",exp:"",cvv:""}),b=Object(u.a)(h,2),y=b[0],x=b[1],C=r.a.useState({subtotal:"0",tax:"0",fee:"0",total:"0"}),A=Object(u.a)(C,2),O=A[0],w=A[1],I=r.a.useState(1),N=Object(u.a)(I,2),S=N[0],j=N[1];Object(n.useEffect)((function(){console.log("trigger use effect hook"),s.a.get("https://www.neckch.in/sbistro/menu.json").then((function(e){return d(e.data)})),null!==e.location.state.information&&"undefined"!==e.location.state.information&&(console.log("information found"),console.log(e.location.state.information),x(e.location.state.information))}),[]);var k=function(){j(S+1)},W=function(){j(S-1)};switch(S){case 1:return r.a.createElement(we,{orderOptions:o,handleOrderOptionsChange:function(e){return function(a){o[e]=parseInt(a.target.value),l(o),console.log(o)}},nextStep:k});case 2:return r.a.createElement(Ne,{menu:m,addToOrder:function(e){console.log(JSON.stringify(e)),E([].concat(Object(v.a)(f),[e])),console.log(JSON.stringify(f))},prevStep:W,nextStep:k});case 3:return r.a.createElement(je,{order:f,removeFromOrder:function(e){console.log(e);var a=f.slice(0);E([].concat(Object(v.a)(a.slice(0,e)),Object(v.a)(a.slice(e+1))))},editInOrder:function(e,a,t){console.log("editing order");var n=f[e];n.amount=a,n.note=t,E([].concat(Object(v.a)(f.slice(0,e)),[n],Object(v.a)(f.slice(e+1))))},price:O,handlePriceChange:function(e,a){console.log("hit"),O[e]=a,w(O)},pd:o.pd,prevStep:W,nextStep:k});case 4:return r.a.createElement(Ae,{information:y,handleInfoChange:function(e){return function(a){y[e]=a.target.value,x(y)}},prevStep:W,nextStep:k});case 5:return r.a.createElement(be,{prevStep:W,nextStep:k});case 6:return r.a.createElement(xe,{callAPI:function(){var e={orderOptions:o,order:f,information:y,price:O};return console.log("calling api"),s.a.post("/api/twilio",e).then((function(e){return console.log(e.data)})).catch((function(e){console.error(e)})),console.log(e),JSON.stringify(e)}})}}var We=Object(p.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(/api/image/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Be(e){var a=We(),t=r.a.useState({fname:"",lname:"",email:"",password:"",password2:""}),n=Object(u.a)(t,2),o=n[0],l=n[1],i=r.a.useState(""),c=Object(u.a)(i,2),m=c[0],p=c[1],g=function(e){return function(a){o[e]=a.target.value,l(o),console.log(o)}};return r.a.createElement(h.a,{container:!0,component:"main",className:a.root},r.a.createElement(oe.a,null),r.a.createElement(h.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(h.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement("img",{src:de.a,style:{height:"15vh"}}),r.a.createElement(d.a,{component:"h1",variant:"h5"},"Szechuan Bistro"),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0,xs:12,sm:6},r.a.createElement(S.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:g("fname")})),r.a.createElement(h.a,{item:!0,xs:12,sm:6},r.a.createElement(S.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:g("lname")})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(S.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:g("email")})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(S.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:g("password")})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(S.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",type:"password",id:"password2",autoComplete:"current-password",onChange:g("password2")}))),r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(d.a,{variant:"body2",color:"error"},m))),r.a.createElement(C.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(){return function(e){var a=o;console.log("calling api"),s.a.post("/api/user/register",a).then((function(e){var a="";Object.keys(e.data).length>1?(console.log("there was errors!"),e.data.errors.forEach((function(e){console.log("error: "+e),a+=e+"\n"}))):console.log("there were no errors"),p(a)})).catch((function(e){console.error(e)})),console.log(a)}()}},"Register"),r.a.createElement(h.a,{container:!0,justify:"flex-end"},r.a.createElement(h.a,{item:!0},r.a.createElement(ce.a,{onClick:function(a){e.history.push("/")},variant:"body2"},"Already have an account? Log In")))))))}t(157),t(158);function Fe(){return r.a.createElement(d.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(ce.a,{color:"inherit",href:"https://szechuanbistro.com"},"Szechuan Bistro")," ",(new Date).getFullYear(),".")}var De=function(){return r.a.createElement(i.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/ordersystem",component:ke,Copyright:Fe}),r.a.createElement(c.a,{path:"/register",component:Be,Copyright:Fe}),r.a.createElement(c.a,{path:"/",component:ge,Copyright:Fe})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,a,t){e.exports=t.p+"static/media/logo.b1d6964c.png"},94:function(e,a){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAQTGF2YzU4LjM1LjEwMAD/2wBDAAgEBAQEBAUFBQUFBQYGBgYGBgYGBgYGBgYHBwcICAgHBwcGBgcHCAgICAkJCQgICAgJCQoKCgwMCwsODg4RERT/xABtAAEBAQEBAQAAAAAAAAAAAAAAAQIDBwQBAQEBAQEBAAAAAAAAAAAAAAABAgMFBBABAQEAAgEDBQEBAQAAAAAAAAEREgIDEyFBcWEx8FHhwbERAQEBAQEAAwEBAAAAAAAAAAABESFREgJhMYH/wAARCABkAGQDASIAAhEAAxEA/9oADAMBAAIRAxEAPwD2a6mqlfXHmWptNRVTTTRA1dpADWtGZ+1UNalXWT90XWtN+4HV2frFqX3VlUoAIABRUII0IqVVX2QFVU9z3Bi1KWoqUVARUIaCiEoNLKyorW+yfP8AwioLKahornqWpqWtMX7Lq6yaHya01nTQv2a01nSUTa3L74rOrqLrWms6aLrYztNpkX5X9c6jViWKxUDDBP4aB9fwvDqKRQIqLIiwjSQ/8QU36mGDX+Ficfdq2JsJpcTinHGuUTlF6nE4nE5HKHU4mYuGxdh04YuJyiztDqzFww05RF4YZ9zkcg1818vdnt5e5Wezo4232rfL3h63dmgm32ter3/qXy90qX4/fgiW32tet3J5u+sL8qbfa16vfdanl7/1z/jURdvtdJ5u563dg/xL/Wpbl7Vvm76ev5Gb+UVn5fb2v//Z"}},[[131,1,2]]]);
//# sourceMappingURL=main.776b563e.chunk.js.map