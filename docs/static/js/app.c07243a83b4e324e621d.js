webpackJsonp([1],{"+Gxq":function(t,e,n){"use strict";var a=n("fnDg").a;var r=n("VU/8")(a,null,!1,function(t){n("4veK")},null,null);e.a=r.exports},"4veK":function(t,e){},GK12:function(t,e){},"HUt/":function(t,e,n){"use strict";var a=n("qRo1").a;var r=n("VU/8")(a,null,!1,function(t){n("n9mN")},null,null);e.a=r.exports},"Hr/5":function(t,e){},"I/bE":function(t,e){},JCpY:function(t,e,n){"use strict";var a=n("rKsW").a;var r=n("VU/8")(a,null,!1,function(t){n("xBwK")},null,null);e.a=r.exports},JDVb:function(t,e,n){"use strict";var a=n("9NuQ").a;var r=n("VU/8")(a,null,!1,function(t){n("Y9O/")},null,null);e.a=r.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW");$(document).ready(function(){$(".navbar-toggler").click(function(){$(".logo").fadeToggle()})});var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"pos-f-t"},[n("div",{staticClass:"collapse",attrs:{id:"navbarToggleExternalContent"}},[n("div",{staticClass:"bgdark p-4"},[n("h4",{staticClass:"text-white"},[t._v("Navigate to different views!")]),t._v(" "),n("br"),n("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("br"),n("router-link",{staticClass:"link",attrs:{to:"/Inventory"}},[t._v("Inventory")]),t._v(" "),n("br"),n("router-link",{staticClass:"link",attrs:{to:"/Promos"}},[t._v("Promotions")]),t._v(" "),n("br"),n("router-link",{staticClass:"link",attrs:{to:"/Shipping"}},[t._v("Shipping")]),t._v(" "),n("br"),n("router-link",{staticClass:"link",attrs:{to:"/Order"}},[t._v("Order")])],1)]),t._v(" "),t._m(0)]),t._v(" "),n("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar navbar-dark"},[e("img",{staticClass:"logo",attrs:{src:n("QJSR")}}),this._v(" "),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])])}]};var s=n("VU/8")({name:"App"},r,!1,function(t){n("SR6C")},null,null).exports,i=n("/ocq"),o=n("mtWM"),c=n.n(o),l={name:"Inventory",data:function(){return{results:null,errors:[]}},filters:{currency:function(t){return"$"+t/100}},mounted:function(){var t=this;c.a.get("http://jst.edchavez.com/api/inventory/getInventory").then(function(e){t.results=e.data}).catch(function(e){t.errors.push(e)})}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inventory"},[n("h1",{staticClass:"display-4"},[t._v("Inventory List")]),t._v(" "),n("table",{attrs:{id:"invTable"}},[t._m(0),t._v(" "),n("tbody",t._l(t.results.items,function(e){return n("tr",[n("td",[t._v(" "+t._s(e.name)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.description)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(t._f("currency")(e.price))+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.itemId)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(!0===e.inStock?"Yes":"No")+" ")])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v(" Name")]),t._v(" "),n("th",[t._v(" Description")]),t._v(" "),n("th",[t._v(" Price")]),t._v(" "),n("th",[t._v(" Item ID")]),t._v(" "),n("th",[t._v(" In Stock?")])])])}]};var v=n("VU/8")(l,u,!1,function(t){n("I/bE")},"data-v-9305c15e",null).exports,d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container"},[n("div",{staticClass:"col-md-12 col-md-offset-3"},[n("div",{staticClass:"lead-form"},[n("h1",{staticClass:"text-center display-4"},[t._v("Hackathon!")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"text"},[n("p",[t._v(" "+t._s(t.msg)+" ")]),t._v(" "),n("p",[t._v(" Please navigate to the various areas to check inventory, shipping costs, promotions, and submit an order! ")])])])])])])},staticRenderFns:[]};var _=n("VU/8")({name:"Home",data:function(){return{msg:"Welcome to my Hackathon Project!"}}},d,!1,function(t){n("damC")},"data-v-2877d953",null).exports,p={name:"Order",data:function(){return{results:null,errors:[],submitted:!1,name:"",quantity:"",description:"",isHidden:!1}},filters:{currency:function(t){return"$"+t+".00"}},methods:{handleData:function(){var t=this;c.a.post("http://jst.edchavez.com/api/order",{merchantId:"sample string 1",orderItems:[{qtyOrdered:1,name:"sample string 2",description:"sample string 3",price:4,itemId:"sample string 5",inStock:!0,stock:1}],taxTotal:2,shippingTotal:3,merchantOrderReference:"sample string 5",orderId:"sample string 6x",orderDate:1,signature:"sample string 7"}).then(function(e){t.results=e.data,t.submitted=!0}).catch(function(e){t.errors=push(e)})}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order"},[n("div",{staticClass:"container"},[n("h1",{staticClass:" display-4"},[t._v("Order Form")]),t._v(" "),n("div",{staticClass:"box boxFix"},[n("form",{attrs:{id:"merchant-form"}},[t.isHidden?t._e():n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",name:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),t.isHidden?t._e():n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Quantity ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"input",attrs:{type:"number",name:"email"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}})]),t._v(" "),t.isHidden?t._e():n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Description of Item Specifics")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"input",attrs:{type:"email",name:"email"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:[function(e){return e.preventDefault(),t.handleData(e)},function(e){t.isHidden=!0}]}},[t._v(" Submit\n    ")]),t._v(" "),t.submitted?n("div",[n("br"),n("b",[t._v(" "+t._s(t.results.status="Congratulations! Your order has been submitted")+" ")]),t._v(" "),n("br"),t._v(" Quantity "+t._s(t.quantity)+" of "+t._s(t.name)+" has been processed.\n        "),n("p",[n("br"),n("b",[t._v(" Transaction ID:")]),t._v(" "+t._s(t.results.transactionId)+" ")]),t._v(" "),n("p",[n("b",[t._v(" Merchant ID:")]),t._v(" "+t._s(t.results.submittedOrder.merchantId)+" ")]),t._v(" "),n("p",[n("b",[t._v(" Tax total:")]),t._v(" "+t._s(t.results.submittedOrder.taxTotal)+" ")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("b",[t._v(" Price:")]),t._v(" "+t._s(t._f("currency")(t.results.submittedOrder.orderItems[0].price))+" ")])]):t._e()])])])])},staticRenderFns:[]};var f=n("VU/8")(p,m,!1,function(t){n("pN0J")},"data-v-7afcd0e2",null).exports,h={name:"Inventory",data:function(){return{results:null,errors:[]}},filters:{currency:function(t){return"$"+t/100}},mounted:function(){var t=this;c.a.get("http://jst.edchavez.com/api/promo").then(function(e){t.results=e.data}).catch(function(e){t.errors.push(e)})}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"promos"},[n("h1",{staticClass:"display-4"},[t._v("Promotions")]),t._v(" "),n("table",{attrs:{id:"invTable"}},[t._m(0),t._v(" "),n("tbody",t._l(t.results,function(e){return n("tr",[n("td",[t._v(" "+t._s(e.promotionName)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.start)+"  - "+t._s(e.end))]),t._v(" "),n("td",[t._v(" "+t._s(e.minimumOrderValue)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.promoAmt)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.promoId)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.promotionType)+" ")])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Promotion Name")]),t._v(" "),n("th",[t._v(" Duration (Start to End)")]),t._v(" "),n("th",[t._v(" Minimum Order Value")]),t._v(" "),n("th",[t._v(" Promo Amounts")]),t._v(" "),n("th",[t._v(" Promo ID")]),t._v(" "),n("th",[t._v(" Promotion Type")])])])}]};var b=n("VU/8")(h,g,!1,function(t){n("UllY")},"data-v-0b2af390",null).exports,C={name:"Shipping",data:function(){return{results:null,errors:[]}},filters:{currency:function(t){return"$"+t/100}},mounted:function(){var t=this;c.a.get("http://jst.edchavez.com/api/shipping").then(function(e){t.results=e.data}).catch(function(e){t.errors.push(e)})}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shipping"},[n("h1",{staticClass:"display-4"},[t._v("Shipping Options")]),t._v(" "),n("table",{attrs:{id:"invTable"}},[t._m(0),t._v(" "),n("tbody",t._l(t.results,function(e){return n("tr",[n("td",[t._v(" "+t._s(e.shipOptionId)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.shipOptionName)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(t._f("currency")(e.shipCost))+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.carrierName)+" ")])])}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v(" Shipping Options ID")]),this._v(" "),e("th",[this._v(" Shipping Option Name")]),this._v(" "),e("th",[this._v(" Shipping Cost")]),this._v(" "),e("th",[this._v(" Carrier Name")])])])}]};var x=n("VU/8")(C,y,!1,function(t){n("Hr/5")},"data-v-d92c19ec",null).exports,I=n("e6fC");a.a.use(i.a),a.a.use(I.a);var k=new i.a({routes:[{path:"/",name:"home",component:_},{path:"/inventory",name:"inventory",component:v},{path:"/order",name:"order",component:f},{path:"/promos",name:"promos",component:b},{path:"/shipping",name:"shipping",component:x}]});n("GK12");a.a.config.productionTip=!1,new a.a({el:"#app",router:k,components:{App:s},template:"<App/>"})},QJSR:function(t,e,n){t.exports=n.p+"static/img/ram-mounts.70510e8.jpg"},SR6C:function(t,e){},UllY:function(t,e){},"Y9O/":function(t,e){},dW2o:function(t,e){},damC:function(t,e){},n9mN:function(t,e){},pN0J:function(t,e){},r15W:function(t,e,n){"use strict";var a=n("E9Zr").a;var r=n("VU/8")(a,null,!1,function(t){n("dW2o")},null,null);e.a=r.exports},xBwK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c07243a83b4e324e621d.js.map