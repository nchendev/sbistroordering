(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,a){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAQTGF2YzU4LjM1LjEwMAD/2wBDAAgEBAQEBAUFBQUFBQYGBgYGBgYGBgYGBgYHBwcICAgHBwcGBgcHCAgICAkJCQgICAgJCQoKCgwMCwsODg4RERT/xABtAAEBAQEBAQAAAAAAAAAAAAAAAQIDBwQBAQEBAQEBAAAAAAAAAAAAAAABAgMFBBABAQEAAgEDBQEBAQAAAAAAAAEREgIDEyFBcWEx8FHhwbERAQEBAQEAAwEBAAAAAAAAAAABESFREgJhMYH/wAARCABkAGQDASIAAhEAAxEA/9oADAMBAAIRAxEAPwD2a6mqlfXHmWptNRVTTTRA1dpADWtGZ+1UNalXWT90XWtN+4HV2frFqX3VlUoAIABRUII0IqVVX2QFVU9z3Bi1KWoqUVARUIaCiEoNLKyorW+yfP8AwioLKahornqWpqWtMX7Lq6yaHya01nTQv2a01nSUTa3L74rOrqLrWms6aLrYztNpkX5X9c6jViWKxUDDBP4aB9fwvDqKRQIqLIiwjSQ/8QU36mGDX+Ficfdq2JsJpcTinHGuUTlF6nE4nE5HKHU4mYuGxdh04YuJyiztDqzFww05RF4YZ9zkcg1818vdnt5e5Wezo4232rfL3h63dmgm32ter3/qXy90qX4/fgiW32tet3J5u+sL8qbfa16vfdanl7/1z/jURdvtdJ5u563dg/xL/Wpbl7Vvm76ev5Gb+UVn5fb2v//Z"},137:function(e,a,t){e.exports=t(168)},165:function(e,a,t){},168:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),i=t.n(o),l=t(63),c=t(11),m=t(30),s=t.n(m),d=t(42),u=t(7),g=t(222),p=t(217),f=t(240),h=t(220),E=t(244),v=t(214),b=t(113),y=t(241),C=t(216),x=t(215),I=t(48),O=t.n(I);function A(){return r.a.createElement(d.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(v.a,{color:"inherit",href:"https://szechuanbistro.com"},"Szechuan Bistro")," ",(new Date).getFullYear(),".")}var w=Object(x.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(/api/image/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function S(e){var a=w(),t=Object(n.useState)({email:"",password:""}),o=Object(u.a)(t,2),i=o[0],l=o[1],c=Object(n.useState)(""),m=Object(u.a)(c,2),x=m[0],I=m[1],S=Object(n.useState)(!1),N=Object(u.a)(S,2),j=N[0],k=N[1];Object(n.useEffect)((function(){"undefined"!==localStorage.getItem("information")&&null!==localStorage.getItem("information")&&F(localStorage.getItem("information")),"undefined"!==sessionStorage.getItem("information")&&null!==sessionStorage.getItem("information")&&F(sessionStorage.getItem("information"))}));var B=function(e){return function(a){i[e]=a.target.value,l(i),console.log(i)}},W=function(e){j?(localStorage.setItem("information",JSON.stringify(e.information)),sessionStorage.removeItem("information")):(sessionStorage.setItem("information",JSON.stringify(e.information)),localStorage.removeItem("information")),F()},F=function(a){e.history.push({pathname:"/ordersystem"})};return r.a.createElement(C.a,{container:!0,component:"main",className:a.root},r.a.createElement(p.a,null),r.a.createElement(C.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(C.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement("img",{src:O.a,style:{height:"15vh"}}),r.a.createElement(d.a,{component:"h1",variant:"h5"},"Szechuan Bistro"),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:B("email")}),r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:B("password")}),r.a.createElement(h.a,{control:r.a.createElement(E.a,{value:"remember",color:"primary",checked:j,onClick:function(e){k(!j)}}),label:"Remember me"}),r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{item:!0,xs:!0},r.a.createElement(d.a,{variant:"body2",color:"error"},x))),r.a.createElement(g.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(e){var a=i;console.log("calling api"),s.a.post("/api/user/login",a).then((function(e){I(""),console.log(e.data),W(e.data)})).catch((function(e){console.error("error:"+e),console.log(e.response.data),I(e.response.data.message)})),console.log(a)}},"Log In"),r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{item:!0,xs:!0},r.a.createElement(v.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(C.a,{item:!0},r.a.createElement(v.a,{onClick:function(a){e.history.push("/register")},variant:"body2"},"Don't have an account? Register")))),r.a.createElement(d.a,{component:"h1",variant:"h6"},"Or"),r.a.createElement(g.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(a){e.history.push("/ordersystem")}},"Make Guest Order"),r.a.createElement(y.a,{mt:5},r.a.createElement(A,null)))))}var N=t(14),j=t(33),k=t(223),B=t(224),W=t(221),F=t(225),D=t(106),T=t.n(D),P=t(226),q=t(112),R=t(227);Object(x.a)((function(e){return{root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));var z=t(234),L=t(235),V=t(236),Q=t(52),J=t(51),G=t(246),U=t(233),Y=t(230),H=t(232),M=t(229),X=t(228),K=t(231);function $(e){var a=Z(),n=r.a.useState(e.amount),o=Object(u.a)(n,2),i=o[0],l=o[1],c=r.a.useState(e.note),m=Object(u.a)(c,2),s=m[0],d=m[1],p=function(a){l(1),d(""),e.setShowDialog(!1)};return r.a.createElement(G.a,{open:e.showDialog,onClose:p,"aria-labelledby":"form-dialog-title"},r.a.createElement(X.a,{className:a.root},r.a.createElement(M.a,{id:"form-dialog-title"},e.menuItem.id+". ",e.menuItem.english+" ",Object(j.a)(Array(parseInt(e.menuItem.spicy))).map((function(e,a){return r.a.createElement(J.a,{icon:Q.a,style:{color:"red"}})}))),r.a.createElement(Y.a,{dividers:!0},r.a.createElement(K.a,{className:a.media,image:t(108),title:e.menuItem.english}),r.a.createElement(f.a,{margin:"dense",id:"order-amount",label:"Number to Order",type:"number",select:!0,SelectProps:{native:!0},value:i,onChange:function(e){l(e.target.value),console.log(i)},fullWidth:!0},r.a.createElement("option",{value:1},"1"),r.a.createElement("option",{value:2},"2"),r.a.createElement("option",{value:3},"3"),r.a.createElement("option",{value:4},"4"),r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:6},"6"),r.a.createElement("option",{value:7},"7"),r.a.createElement("option",{value:8},"8"),r.a.createElement("option",{value:9},"9"),r.a.createElement("option",{value:10},"10")),r.a.createElement(f.a,{margin:"dense",id:"customer-note",label:"Note/Modifications",text:"test",placeholder:" ",value:s,onChange:function(e){d(e.target.value),console.log(s)},fullWidth:!0}),r.a.createElement(H.a,null,"Any changes may be subject to extra charges."),r.a.createElement(H.a,{align:"right"},"$",(parseFloat(e.menuItem.price)*i).toFixed(2))),r.a.createElement(U.a,null,r.a.createElement(g.a,{onClick:p,color:"primary"},"Cancel"),r.a.createElement(g.a,{onClick:function(a){console.log("added to order!"),e.addToOrder({id:e.menuItem.id,english:e.menuItem.english,chinese:e.menuItem.chinese,spicy:e.menuItem.spicy,price:e.menuItem.price,amount:i,note:s}),p()},color:"primary"},"Add to Order"))))}var Z=Object(x.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120},root:{maxWidth:345},media:{height:140}}})),_=Object(x.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),color:e.palette.text.secondary}}}));var ee=function(e){var a=_(),t=r.a.useState(!1),n=Object(u.a)(t,2),o=n[0],i=n[1];return r.a.createElement("div",{className:a.root},r.a.createElement(C.a,{item:!0,onClick:function(e){i(!o)},direction:"column",justify:"flex-start"},r.a.createElement(b.a,{square:!0,className:a.paper},e.menuItem.id+". "+e.menuItem.english+" ",Object(j.a)(Array(parseInt(e.menuItem.spicy))).map((function(e,a){return r.a.createElement(J.a,{icon:Q.a,style:{color:"red"}})})))),r.a.createElement($,{menuItem:e.menuItem,addToOrder:e.addToOrder,showDialog:o,setShowDialog:i,amount:1,note:""}))},ae=Object(x.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{position:"sticky",flexWrap:"nowrap",transform:"translateZ(0)",overflowX:"scroll"},category:{marginTop:e.spacing(1)},text:{padding:e.spacing(1)}}}));var te=function(e){var a=ae(),t=r.a.useState([]),n=Object(u.a)(t,2),o=n[0],i=n[1];return r.a.createElement("div",{className:a.root},r.a.createElement(d.a,{disablePadding:!0,component:"h4",variant:"subtitle1",align:"center",className:a.text},"1. Select Category"),r.a.createElement(z.a,{cellHeight:180,className:a.gridList},Object.keys(e.menu).map((function(a,t){return r.a.createElement(L.a,{key:a,style:{height:"fixed",width:"auto"},onClick:function(){return function(a){console.log(a.menuCategory+" selected"),i(e.menu[a.menuCategory])}({menuCategory:a})}},r.a.createElement(V.a,{component:"div"},a))}))),r.a.createElement(d.a,{disablePadding:!0,component:"h4",variant:"subtitle1",align:"center",className:a.text},"2. Choose Items"),o.map((function(a){return r.a.createElement(C.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",xs:12},r.a.createElement(ee,{key:a.english,menuItem:a,addToOrder:e.addToOrder}))})))},ne=t(31),re=t(171),oe=t(237);function ie(e){var a=le(),n=e.amount,o=r.a.useState(e.amount),i=Object(u.a)(o,2),l=i[0],c=i[1],m=r.a.useState(e.note),s=Object(u.a)(m,2),d=s[0],p=s[1],h=function(a){c(e.orderItem.amount),p(e.orderItem.note),e.setShowDialog(!1)};return r.a.createElement(G.a,{open:e.showDialog,onClose:h,"aria-labelledby":"form-dialog-title"},r.a.createElement(X.a,{className:a.root},r.a.createElement(M.a,{id:"form-dialog-title"},e.orderItem.id+". ",e.orderItem.english+" ",Object(j.a)(Array(parseInt(e.orderItem.spicy))).map((function(e,a){return r.a.createElement(J.a,{icon:Q.a,style:{color:"red"}})}))),r.a.createElement(Y.a,{dividers:!0},r.a.createElement(K.a,{className:a.media,image:t(108),title:e.orderItem.english}),r.a.createElement(f.a,{margin:"dense",id:"order-amount",label:"Number to Order",type:"number",select:!0,SelectProps:{native:!0},value:l,onChange:function(e){c(e.target.value)},fullWidth:!0},r.a.createElement("option",{value:1},"1"),r.a.createElement("option",{value:2},"2"),r.a.createElement("option",{value:3},"3"),r.a.createElement("option",{value:4},"4"),r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:6},"6"),r.a.createElement("option",{value:7},"7"),r.a.createElement("option",{value:8},"8"),r.a.createElement("option",{value:9},"9"),r.a.createElement("option",{value:10},"10")),r.a.createElement(f.a,{margin:"dense",id:"customer-note",label:"Note/Modifications",text:"test",placeholder:" ",value:d,onChange:function(e){p(e.target.value)},fullWidth:!0}),r.a.createElement(H.a,null,"Any changes may be subject to extra charges."),r.a.createElement(H.a,{align:"right"},"$",(parseFloat(e.orderItem.price)*l).toFixed(2))),r.a.createElement(U.a,null,r.a.createElement(g.a,{onClick:function(a){console.log("removing from order!"),e.removeFromOrder(e.itemIndex),h()},color:"primary"},"Remove Item"),r.a.createElement(g.a,{onClick:function(a){e.editInOrder(e.itemIndex,l-n,d),h()},color:"primary"},"Confirm Change"))))}var le=Object(x.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120},root:{maxWidth:345},media:{height:140}}})),ce=Object(x.a)((function(e){return{root:{display:"flex",minWidth:"100%"},details:{display:"flex",flexDirection:"row"},content:{flex:"1 0 auto"}}}));function me(e){var a=ce(),t=(Object(ne.a)(),r.a.useState(!1)),n=Object(u.a)(t,2),o=n[0],i=n[1];return r.a.createElement("div",null,r.a.createElement(re.a,{className:a.listItem,key:e.orderItem.english,onClick:function(e){i(!o)}},r.a.createElement(oe.a,{primary:e.orderItem.english,secondary:e.orderItem.note}),r.a.createElement(d.a,{variant:"body2"},e.orderItem.amount," x $",e.orderItem.price)),r.a.createElement(ie,{orderItem:e.orderItem,showDialog:o,setShowDialog:i,amount:e.orderItem.amount,note:e.orderItem.note,itemIndex:e.itemIndex,removeFromOrder:e.removeFromOrder,editInOrder:e.editInOrder}))}Object(x.a)((function(e){return{paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));var se=Object(x.a)((function(e){return Object(N.a)({root:{direction:"column",flexGrow:1,justifyContent:"space-between"},paper:{padding:e.spacing(1),marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"}},"menuButton",{marginRight:e.spacing(2)})}));function de(e){var a=se(),t=r.a.useState(!1),o=Object(u.a)(t,2),i=o[0],l=o[1],c=r.a.useState(""),m=Object(u.a)(c,2),s=m[0],g=m[1],p=r.a.useState(null),f=Object(u.a)(p,2),h=f[0],E=f[1],v=Boolean(h),b=localStorage;Object(n.useEffect)((function(){null!==b.getItem("information")&&"undefined"!==b.getItem("information")||(b=sessionStorage),"undefined"!==b.getItem("information")&&null!==b.getItem("information")&&(l(!0),g(JSON.parse(b.getItem("information")).name))}));return r.a.createElement("div",null,r.a.createElement(k.a,{position:"fixed"},r.a.createElement(B.a,null,r.a.createElement("img",{src:O.a,height:"40vh",width:"40vh",className:a.margin}),r.a.createElement(d.a,{variant:"h6",className:a.title},e.title),i&&r.a.createElement("div",null,r.a.createElement(W.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){E(e.currentTarget)},color:"inherit"},r.a.createElement(T.a,{fontSize:"large"})),r.a.createElement(q.a,{id:"menu-appbar",anchorEl:h,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:v,onClose:function(){E(null)}},r.a.createElement(P.a,{disabled:!0,divider:!0},r.a.createElement(d.a,{variant:"h6",className:a.title},"Hello ",s)),r.a.createElement(P.a,{onClick:function(a){l(!1),g(""),b.removeItem("information"),b=localStorage,e.resetInformationState(),console.log("logging user out")}},"Logout"))))),r.a.createElement(B.a,null))}var ue=t(242),ge=t(238);function pe(e){var a=r.a.useState(!1),t=Object(u.a)(a,2),o=t[0],i=t[1],l=r.a.useState(e.options.pickup),c=Object(u.a)(l,2),m=c[0],p=c[1];r.a.useState(m?"primary":"default");var h=r.a.useState(m?"primary":"default"),E=Object(u.a)(h,2),v=E[0],b=E[1],y=r.a.useState(m?"default":"primary"),x=Object(u.a)(y,2),I=x[0],O=x[1],A=function(a){p(!m),b("default"===v?"primary":"default"),O("default"===I?"primary":"default"),e.handlePickupDeliveryToggle()};return Object(n.useEffect)((function(){e.handlePickupDeliveryToggle(),e.handlePickupDeliveryToggle()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{container:!0,spacing:3},r.a.createElement(C.a,{item:!0,xs:6},r.a.createElement(f.a,{required:!0,id:"firstName",name:"firstName",label:"First name",fullWidth:!0,autoComplete:"given-name",onChange:e.handleInfoChange("fname"),defaultValue:e.information.fname})),r.a.createElement(C.a,{item:!0,xs:6},r.a.createElement(f.a,{required:!0,id:"lastName",name:"lastName",label:"Last name",fullWidth:!0,autoComplete:"family-name",onChange:e.handleInfoChange("lname"),defaultValue:e.information.lname})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(f.a,{required:!0,id:"phone",name:"phone",label:"Phone Number",fullWidth:!0,autoComplete:"phone",onChange:e.handleInfoChange("phone"),defaultValue:e.information.phone}))),r.a.createElement(C.a,{container:!0,spacing:6},r.a.createElement(C.a,{item:!0,xs:6,md:4},r.a.createElement(d.a,{gutterBottom:!0},"Would you like to come pick up your order, or have it delivered?")," "),r.a.createElement(C.a,{item:!0,xs:6,md:8},r.a.createElement(g.a,{variant:"contained",color:v,onClick:function(e){return A()}},"Pickup"),r.a.createElement(g.a,{variant:"contained",color:I,onClick:function(e){return A()}},"Delivery"))),m?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h6",gutterBottom:!0},"Delivery Address"),r.a.createElement(C.a,{container:!0,spacing:3},r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(f.a,{required:!0,id:"address",name:"address",label:"Address line",fullWidth:!0,autoComplete:"shipping address-line1",onChange:e.handleInfoChange("address"),defaultValue:e.information.address})),r.a.createElement(C.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(f.a,{required:!0,id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"shipping address-level2",onChange:e.handleInfoChange("city"),defaultValue:e.information.city})),r.a.createElement(C.a,{item:!0,xs:6,sm:8,md:4},r.a.createElement(f.a,{id:"state",name:"state",label:"State",fullWidth:!0,onChange:e.handleInfoChange("state"),value:"OK"})),r.a.createElement(C.a,{item:!0,xs:6,sm:4,md:4},r.a.createElement(f.a,{required:!0,id:"zip",name:"zip",label:"Zip / Postal code",fullWidth:!0,autoComplete:"shipping postal-code",onChange:e.handleInfoChange("zip"),defaultValue:e.information.zip})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(f.a,{required:!0,id:"driverNotes",name:"driverNotes",label:"Note for Driver, Gate Code, etc",fullWidth:!0,onChange:e.handleInfoChange("driverNotes")})),r.a.createElement(C.a,{item:!0,xs:6,md:3},r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(){var a={address:e.information.address,city:e.information.city,state:e.information.state,zip:e.information.zip};if(""!=a.zip){s.a.post("/api/distance",a).then((function(a){console.log("api reply: "),console.log(a.data),"OK"===a.data.status?e.setDeliveryFee(a.data.dfee):"FAILURE"===a.data.status?e.setDeliveryFee(3):"INVALID"===a.data.status&&i(!0)})).catch((function(e){console.error(e)}))}else i(!0)}},"Calculate Delivery Fee")),r.a.createElement(C.a,{item:!0,xs:6,md:9},r.a.createElement(d.a,{gutterBottom:!0},"Estimated fee: ",e.price.dfee)),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(ge.a,{in:o},r.a.createElement(ue.a,{severity:"warning"},"Invalid Address supplied. Please check your information"))))))}function fe(e){var a=r.a.useState(e.options.cash),t=Object(u.a)(a,2),n=t[0],o=t[1],i=r.a.useState(n?"primary":"default"),l=Object(u.a)(i,2),c=l[0],m=l[1],s=r.a.useState(n?"default":"primary"),p=Object(u.a)(s,2),h=p[0],E=p[1],v=function(){o(!n),m("default"===c?"primary":"default"),E("default"===h?"primary":"default"),e.handleCardCashToggle()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"h6",gutterBottom:!0},"Payment method"),r.a.createElement(C.a,{container:!0,spacing:6},r.a.createElement(C.a,{item:!0,xs:8,md:4},r.a.createElement(d.a,{gutterBottom:!0},"Will you pay with Cash or Credit Card?")," "),r.a.createElement(C.a,{item:!0,xs:4,md:8},r.a.createElement(g.a,{variant:"contained",color:c,onClick:v},"Cash"),r.a.createElement(g.a,{variant:"contained",color:h,onClick:v},"Card"))),n?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement(C.a,{container:!0,spacing:3},r.a.createElement(C.a,{item:!0,xs:12,md:6},r.a.createElement(f.a,{required:!0,id:"cardName",label:"Name on card",fullWidth:!0,autoComplete:"cc-name",disabled:n,onChange:e.handlePaymentChange("name"),defaultValue:e.payment.name})),r.a.createElement(C.a,{item:!0,xs:12,md:6},r.a.createElement(f.a,{required:!0,id:"cardNumber",label:"Card number",fullWidth:!0,autoComplete:"cc-number",disabled:n,onChange:e.handlePaymentChange("cc"),defaultValue:e.payment.cc})),r.a.createElement(C.a,{item:!0,xs:12,md:6},r.a.createElement(f.a,{required:!0,id:"expDate",label:"Expiry date",fullWidth:!0,autoComplete:"cc-exp",disabled:n,onChange:e.handlePaymentChange("exp"),defaultValue:e.payment.exp})),r.a.createElement(C.a,{item:!0,xs:12,md:6},r.a.createElement(f.a,{required:!0,id:"cvv",label:"CVV",helperText:"Last three digits on signature strip",fullWidth:!0,autoComplete:"cc-csc",disabled:n,onChange:e.handlePaymentChange("cvv"),defaultValue:e.payment.cvv})),r.a.createElement(C.a,{item:!0,xs:12},"Your credit card details will not be saved in our system"))))}var he=Object(x.a)((function(e){return{listItem:{padding:e.spacing(1,0)},total:{fontWeight:700},title:{marginTop:e.spacing(2)}}}));function Ee(e){var a=he();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"h6",gutterBottom:!0},"Order summary"),r.a.createElement(ye,{order:e.order,removeFromOrder:e.removeFromOrder,editInOrder:e.editInOrder,price:e.price,handlePriceChange:e.handlePriceChange}),r.a.createElement(C.a,{container:!0,spacing:2},r.a.createElement(C.a,{item:!0,xs:12,sm:6},r.a.createElement(d.a,{variant:"h6",gutterBottom:!0,className:a.title},"Contact"),r.a.createElement(d.a,{gutterBottom:!0},e.information.fname+" "+e.information.lname),r.a.createElement(d.a,{gutterBottom:!0},e.information.phone),e.options.pickup?r.a.createElement("div",null,"You will come pick your order up"):r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h6",gutterBottom:!0,className:a.title},"Delivery Address"),r.a.createElement(d.a,{gutterBottom:!0},e.information.address),r.a.createElement(d.a,{gutterBottom:!0},e.information.city+"\n"+e.information.state+"\n"+e.information.zip),r.a.createElement(d.a,{gutterBottom:!0},"note: ",e.information.driverNote))),r.a.createElement(C.a,{item:!0,container:!0,direction:"column",xs:12,sm:6},r.a.createElement(d.a,{variant:"h6",gutterBottom:!0,className:a.title},"Payment details"),e.options.cash?r.a.createElement("div",null,r.a.createElement(d.a,{gutterBottom:!0},"You will pay for your order with cash")):r.a.createElement("div",null,r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{item:!0,xs:6},r.a.createElement(d.a,{gutterBottom:!0},"Card Holder")),r.a.createElement(C.a,{item:!0,xs:6},r.a.createElement(d.a,{gutterBottom:!0},e.payment.name)),r.a.createElement(C.a,{item:!0,xs:6},r.a.createElement(d.a,{gutterBottom:!0},"Card Number")),r.a.createElement(C.a,{item:!0,xs:6},r.a.createElement(d.a,{gutterBottom:!0},e.payment.cc)),r.a.createElement(C.a,{item:!0,xs:6},r.a.createElement(d.a,{gutterBottom:!0},"Expiry Date")),r.a.createElement(C.a,{item:!0,xs:6},r.a.createElement(d.a,{gutterBottom:!0},e.payment.exp)),r.a.createElement(C.a,{item:!0,xs:6},r.a.createElement(d.a,{gutterBottom:!0},"CVV")),r.a.createElement(C.a,{item:!0,xs:6},r.a.createElement(d.a,{gutterBottom:!0},e.payment.cvv)))))))}var ve=t(170),be=Object(x.a)((function(e){return{listItem:{padding:e.spacing(1,0)},total:{fontWeight:700}}}));function ye(e){var a=be();return r.a.createElement("div",null,r.a.createElement(ve.a,{disablePadding:!0},e.order.map((function(a,t){return r.a.createElement(me,{itemIndex:t,orderItem:a,removeFromOrder:e.removeFromOrder,editInOrder:e.editInOrder})})),r.a.createElement(R.a,null),r.a.createElement(re.a,{className:a.listItem},r.a.createElement(oe.a,{primary:"Estimated Subtotal"}),r.a.createElement(d.a,{variant:"subtitle1",className:a.total},"$",e.price.subtotal.toFixed(2))),r.a.createElement(re.a,{className:a.listItem},r.a.createElement(oe.a,{primary:"Estimated Tax"}),r.a.createElement(d.a,{variant:"subtitle1",className:a.total},"$",e.price.tax.toFixed(2))),r.a.createElement(re.a,{className:a.listItem},r.a.createElement(oe.a,{primary:"Estimated Delivery Fee"}),r.a.createElement(d.a,{variant:"subtitle1",className:a.total},isNaN(e.price.dfee)?r.a.createElement("div",null,e.price.dfee):r.a.createElement("div",null,"$",e.price.dfee.toFixed(2)))),r.a.createElement(re.a,{className:a.listItem},r.a.createElement(oe.a,{primary:"Estimated Total"}),r.a.createElement(d.a,{variant:"subtitle1",className:a.total},"$",e.price.total.toFixed(2)))))}var Ce=Object(x.a)((function(e){return{layout:Object(N.a)({width:"fill",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:"80vw",marginLeft:"auto",marginRight:"auto"}),paper:Object(N.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),position:"fixed",minWidth:"80vw"},fabSpace:{margin:e.spacing(1),height:"40px"},text:{padding:e.spacing(1)}}}));function xe(e){var a=Ce();return r.a.createElement("div",null,r.a.createElement("div",{className:a.layout},r.a.createElement(de,{title:"Order from our menu",resetInformationState:e.resetInformationState}),r.a.createElement(b.a,{elevation:2,className:a.paper},r.a.createElement(d.a,{component:"h1",variant:"h4",align:"center",className:a.text},"Menu"),r.a.createElement(R.a,null),r.a.createElement(te,{menu:e.menu,addToOrder:e.addToOrder})),r.a.createElement("div",{elevation:0,className:a.fabSpace}),r.a.createElement(C.a,{container:!0},r.a.createElement(b.a,null,r.a.createElement(F.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab),onClick:e.nextStep},"Review Order")))))}var Ie=Object(x.a)((function(e){return{layout:Object(N.a)({width:"fill",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:"80vw",marginLeft:"auto",marginRight:"auto"}),paper:Object(N.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),margin:{margin:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"},text:{padding:e.spacing(1)}}}));function Oe(e){var a=Ie();return r.a.createElement("div",null,r.a.createElement(de,{title:"Review your Order",resetInformationState:e.resetInformationState}),r.a.createElement("div",null,r.a.createElement("main",{className:a.layout},r.a.createElement(b.a,{className:a.paper},r.a.createElement(d.a,{component:"h1",variant:"h4",align:"center",className:a.text},"Review Order"),r.a.createElement(d.a,{disablePadding:!0,component:"h4",variant:"subtitle1",align:"center",className:a.text},"To make changes to or remove an item, click on it"),r.a.createElement(R.a,null),r.a.createElement(ye,{order:e.order,price:e.price,removeFromOrder:e.removeFromOrder,editInOrder:e.editInOrder,handlePriceChange:e.handlePriceChange})))),r.a.createElement("div",{elevation:0,className:a.fabSpace}),r.a.createElement(C.a,{container:!0,justify:"center"},r.a.createElement(b.a,{className:a.fab},r.a.createElement(F.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.prevStep},"Add Items")),r.a.createElement(b.a,null,r.a.createElement(F.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:e.nextStep},"Continue"))))}var Ae=t(248),we=t(239),Se=t(245);function Ne(){return r.a.createElement(d.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(v.a,{color:"inherit",href:"https://www.nchen.dev/"},"Nick Chen | Szechuan Bistro")," ",(new Date).getFullYear(),".")}var je=Object(x.a)((function(e){return{appBar:{position:"relative"},layout:Object(N.a)({width:"fill",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:"80vw",marginLeft:"auto",marginRight:"auto"}),paper:Object(N.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},fab:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"80vw"},fab2:{margin:0,bottom:e.spacing(1),left:"auto",position:"fixed",minWidth:"40vw"},fabSpace:{margin:e.spacing(1),height:"40px"}}})),ke=["Contact","Payment","Review your order"];function Be(e){var a=je(),t=r.a.useState(0),n=Object(u.a)(t,2),o=n[0],i=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null),r.a.createElement(de,{title:"Szechuan Bistro",resetInformationState:e.resetInformationState}),r.a.createElement("div",null,r.a.createElement("main",{className:a.layout},r.a.createElement(b.a,{className:a.paper},r.a.createElement(d.a,{component:"h1",variant:"h4",align:"center"},"Checkout"),r.a.createElement(Ae.a,{activeStep:o,className:a.stepper},ke.map((function(e){return r.a.createElement(we.a,{key:e},r.a.createElement(Se.a,null,e))}))),r.a.createElement(r.a.Fragment,null,o===ke.length?"success"===e.callAPI()?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"h5",gutterBottom:!0},"Thank you for ordering from Szechuan Bistro!"),r.a.createElement(d.a,{variant:"subtitle1"},"We will be in contact shortly through phone by 405-752-8889 to confirm your order! Deliveries should be made within the hour, and pickup orders should be ready in 15 minutes. ",r.a.createElement("br",null)," Thank you for your patronage, we hope to serve you again soon.")):r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h5",gutterBottom:!0},"Sorry, but something went wrong and your order wasn't placed! Please try again, or give us a call at 405 752 8889.")):r.a.createElement(r.a.Fragment,null,function(a){switch(a){case 0:return r.a.createElement(pe,{information:e.information,handleInfoChange:e.handleInfoChange,handlePickupDeliveryToggle:e.handlePickupDeliveryToggle,options:e.options,price:e.price,setDeliveryFee:e.setDeliveryFee});case 1:return r.a.createElement(fe,{handlePaymentChange:e.handlePaymentChange,payment:e.payment,handleCardCashToggle:e.handleCardCashToggle,options:e.options});case 2:return r.a.createElement(Ee,{information:e.information,payment:e.payment,callAPI:e.callAPI,order:e.order,removeFromOrder:e.removeFromOrder,editInOrder:e.editInOrder,price:e.price,handlePriceChange:e.handlePriceChange,options:e.options});default:throw new Error("Unknown step")}}(o)))),r.a.createElement(Ne,null))),r.a.createElement("div",{elevation:0,className:a.fabSpace}),o!=ke.length&&r.a.createElement(C.a,{container:!0,justify:"center"},r.a.createElement(b.a,{className:a.fab},r.a.createElement(F.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:function(){0===o?e.prevStep():i(o-1)}},0===o?"Edit Order":"Back")),r.a.createElement(b.a,null,r.a.createElement(F.a,{variant:"extended",color:"primary","aria-label":"add",className:(a.margin,a.fab2),onClick:function(){i(o+1)}},o===ke.length-1?"Place order":"Next"))))}function We(e){var a,t=r.a.useState({english:!0,pickup:!1,cash:!1,dfee:0}),o=Object(u.a)(t,2),i=o[0],l=o[1],c=r.a.useState({}),m=Object(u.a)(c,2),d=m[0],g=m[1],p=r.a.useState([]),f=Object(u.a)(p,2),h=f[0],E=f[1],v=r.a.useState({fname:"",lname:"",phone:"",address:"",city:"",state:"OK",zip:"",driverNotes:""}),b=Object(u.a)(v,2),y=b[0],C=b[1],x=r.a.useState({name:"",cc:"",exp:"",cvv:""}),I=Object(u.a)(x,2),O=I[0],A=I[1],w=r.a.useState({subtotal:0,tax:0,dfee:"Not yet calculated",total:0}),S=Object(u.a)(w,2),k=S[0],B=S[1],W=r.a.useState(1),F=Object(u.a)(W,2),D=F[0],T=F[1];Object(n.useEffect)((function(){console.log("trigger use effect hook"),s.a.get("https://www.neckch.in/sbistro/menu.json").then((function(e){return g(e.data)})),"undefined"!==localStorage.getItem("information")&&null!==localStorage.getItem("information")?C(JSON.parse(localStorage.getItem("information"))):"undefined"!==sessionStorage.getItem("information")&&null!==sessionStorage.getItem("information")&&C(JSON.parse(sessionStorage.getItem("information")))}),[]);var P=function(){console.log("proceeding to next step"),T(D+1)},q=function(){console.log("proceeding to next step"),T(D-1)},R=function(e){console.log("removing order item at index"+e);var a=k.subtotal-parseInt(h[e].amount)*parseFloat(h[e].price),t=.09*a,n=k.dfee,r=a+t;isNaN(n)||(r+=n),B({subtotal:a,tax:t,dfee:n,total:r});var o=h.slice(0);E([].concat(Object(j.a)(o.slice(0,e)),Object(j.a)(o.slice(e+1)))),console.log("order after removing item: "+JSON.stringify(h))},z=function(e,a,t){console.log("editing item at index"+e+"; amount: "+a+", note: "+t);var n=k.subtotal+a*parseFloat(h[e].price),r=.09*n,o=k.dfee,i=n+r;isNaN(o)||(i+=o),B({subtotal:n,tax:r,dfee:o,total:i});var l=h[e];l.amount+=a,l.note=t,h[e]=l,E(h),console.log("order after editing item: "+JSON.stringify(h))},L=function(e,a){console.log("hit"),k[e]=a,B(k)},V=function(){C({name:"",address:"",phone:"",driverNotes:"",cc:"",exp:"",cvv:""})};switch(D){case 1:return r.a.createElement(xe,{menu:d,addToOrder:function(e){console.log("adding "+JSON.stringify(e)+" to order");var a=k.subtotal+parseInt(e.amount)*parseFloat(e.price),t=.09*a,n=k.dfee,r=a+t;isNaN(n)||(r+=n),B({subtotal:a,tax:t,dfee:n,total:r}),E([].concat(Object(j.a)(h),[e])),console.log("order after adding item: "+JSON.stringify(h))},resetInformationState:V,prevStep:q,nextStep:P});case 2:return r.a.createElement(Oe,{order:h,price:k,removeFromOrder:R,editInOrder:z,handlePriceChange:L,resetInformationState:V,prevStep:q,nextStep:P});case 3:return r.a.createElement(Be,(a={options:i,handleInfoChange:function(e){return function(a){console.log("editing information."+e+" to be "+a.target.value),y[e]=a.target.value,C(y)}},prevStep:q,information:y,resetInformationState:V,payment:O,handlePaymentChange:function(e){return function(a){console.log("editing payment."+e+" to be "+a.target.value),O[e]=a.target.value,A(O)}},handleCardCashToggle:function(){console.log("user paying with cash: "+O.cash),i.cash=!i.cash,l(i)},order:h,callAPI:function(){var e={options:i,order:h,information:y,payment:O,price:k};console.log("sending in order: "),console.log(e);var a=!1;return s.a.post("/api/twilio",e).then((function(e){console.log("api reply: "+e.data.msg),a=!0})).catch((function(e){console.error(e)})),a}},Object(N.a)(a,"order",h),Object(N.a)(a,"removeFromOrder",R),Object(N.a)(a,"editInOrder",z),Object(N.a)(a,"price",k),Object(N.a)(a,"handlePriceChange",L),Object(N.a)(a,"pd",i.pd),Object(N.a)(a,"handlePickupDeliveryToggle",(function(){console.log("user picking up: "+y.cash),i.pickup=!i.pickup,l(i);var e=isNaN(k.dfee)?0:k.dfee;i.pickup?k.dfee=0:k.dfee=i.dfee,k.total+=k.dfee-e,B(k)})),Object(N.a)(a,"setDeliveryFee",(function(e){console.log("yup here"),i.dfee=e,l(i),k.dfee=e,B(k)})),a))}}var Fe=Object(x.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(/api/image/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function De(e){var a=Fe(),t=r.a.useState({fname:"",lname:"",email:"",password:"",password2:""}),n=Object(u.a)(t,2),o=n[0],i=n[1],l=r.a.useState(""),c=Object(u.a)(l,2),m=c[0],h=c[1],E=function(e){return function(a){o[e]=a.target.value,i(o),console.log(o)}};return r.a.createElement(C.a,{container:!0,component:"main",className:a.root},r.a.createElement(p.a,null),r.a.createElement(C.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(C.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement("img",{src:O.a,style:{height:"15vh"}}),r.a.createElement(d.a,{component:"h1",variant:"h5"},"Szechuan Bistro"),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(C.a,{container:!0,spacing:2},r.a.createElement(C.a,{item:!0,xs:12,sm:6},r.a.createElement(f.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:E("fname")})),r.a.createElement(C.a,{item:!0,xs:12,sm:6},r.a.createElement(f.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:E("lname")})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:E("email")})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:E("password")})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",type:"password",id:"password2",autoComplete:"current-password",onChange:E("password2")}))),r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{item:!0,xs:!0},r.a.createElement(d.a,{variant:"body2",color:"error"},m))),r.a.createElement(g.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(){return function(e){var a=o;console.log("calling api"),s.a.post("/api/user/register",a).then((function(e){var a="";Object.keys(e.data).length>1?(console.log("there was errors!"),e.data.errors.forEach((function(e){console.log("error: "+e),a+=e+"\n"}))):console.log("there were no errors"),h(a)})).catch((function(e){console.error(e)})),console.log(a)}()}},"Register"),r.a.createElement(C.a,{container:!0,justify:"flex-end"},r.a.createElement(C.a,{item:!0},r.a.createElement(v.a,{onClick:function(a){e.history.push("/")},variant:"body2"},"Already have an account? Log In")))))))}t(165),t(166);function Te(){return r.a.createElement(d.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(v.a,{color:"inherit",href:"https://szechuanbistro.com"},"Szechuan Bistro")," ",(new Date).getFullYear(),".")}var Pe=function(){return r.a.createElement(l.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/ordersystem",component:We,Copyright:Te}),r.a.createElement(c.a,{path:"/register",component:De,Copyright:Te}),r.a.createElement(c.a,{path:"/",component:S,Copyright:Te})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,a,t){e.exports=t.p+"static/media/logo.b1d6964c.png"}},[[137,1,2]]]);
//# sourceMappingURL=main.79397234.chunk.js.map