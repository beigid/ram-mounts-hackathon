webpackJsonp([1],{"+Gxq":function(t,n,e){"use strict";var s=e("fnDg").a;var a=e("VU/8")(s,null,!1,function(t){e("4veK")},null,null);n.a=a.exports},"3mnt":function(t,n){},"4veK":function(t,n){},"6DK9":function(t,n){},BdH8:function(t,n){},GK12:function(t,n){},"HUt/":function(t,n,e){"use strict";var s=e("qRo1").a;var a=e("VU/8")(s,null,!1,function(t){e("n9mN")},null,null);n.a=a.exports},JCpY:function(t,n,e){"use strict";var s=e("rKsW").a;var a=e("VU/8")(s,null,!1,function(t){e("xBwK")},null,null);n.a=a.exports},JDVb:function(t,n,e){"use strict";var s=e("9NuQ").a;var a=e("VU/8")(s,null,!1,function(t){e("Y9O/")},null,null);n.a=a.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("7+uW");$(document).ready(function(){$(".navbar-toggler").click(function(){$(".logo").fadeToggle()})});var a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"pos-f-t"},[e("div",{staticClass:"collapse",attrs:{id:"navbarToggleExternalContent"}},[e("div",{staticClass:"bgdark p-4"},[e("h4",{staticClass:"text-white"},[t._v("Navigate to different views!")]),t._v(" "),e("br"),e("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("br"),e("router-link",{attrs:{to:"/Inventory"}},[t._v("Inventory")]),t._v(" "),e("br"),e("router-link",{attrs:{to:"/Promos"}},[t._v("Promotions")]),t._v(" "),e("br"),e("router-link",{attrs:{to:"/Shipping"}},[t._v("Shipping")]),t._v(" "),e("br"),e("router-link",{attrs:{to:"/Order"}},[t._v("Order")])],1)]),t._v(" "),t._m(0)]),t._v(" "),e("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("nav",{staticClass:"navbar navbar-dark"},[n("img",{staticClass:"logo",attrs:{src:e("QJSR")}}),this._v(" "),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])])}]};var r=e("VU/8")({name:"App"},a,!1,function(t){e("Xgr5")},null,null).exports,i=e("/ocq"),o=e("mtWM"),c=e.n(o),l={name:"Inventory",data:function(){return{results:null,errors:[]}},filters:{currency:function(t){return"$"+t/100}},mounted:function(){var t=this;c.a.get("http://jst.edchavez.com/api/inventory/getInventory").then(function(n){t.results=n.data}).catch(function(n){t.errors.push(n)})}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"inventory"},[e("h1",{staticClass:"display-4"},[t._v("Inventory List")]),t._v(" "),e("table",{attrs:{id:"invTable"}},[t._m(0),t._v(" "),e("tbody",t._l(t.results.items,function(n){return e("tr",[e("td",[t._v(" "+t._s(n.name)+" ")]),t._v(" "),e("td",[t._v(" "+t._s(n.description)+" ")]),t._v(" "),e("td",[t._v(" "+t._s(t._f("currency")(n.price))+" ")]),t._v(" "),e("td",[t._v(" "+t._s(n.itemId)+" ")]),t._v(" "),e("td",[t._v(" "+t._s(!0===n.inStock?"Yes":"No")+" ")])])}))])])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",[t._v(" Name")]),t._v(" "),e("th",[t._v(" Description")]),t._v(" "),e("th",[t._v(" Price")]),t._v(" "),e("th",[t._v(" Item ID")]),t._v(" "),e("th",[t._v(" In Stock?")])])])}]};var v=e("VU/8")(l,u,!1,function(t){e("pA1u")},"data-v-04ad56d7",null).exports,d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 col-md-offset-3"},[e("div",{staticClass:"lead-form"},[e("h1",{staticClass:"text-center"},[t._v("Hackathon!")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.startingZip,expression:"startingZip"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Starting Zip"},domProps:{value:t.startingZip},on:{input:function(n){n.target.composing||(t.startingZip=n.target.value)}}}),t._v(" "),e("span",{staticClass:"city-span"},[t._v(t._s(t.startingCity))])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.endingZip,expression:"endingZip"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ending Zip"},domProps:{value:t.endingZip},on:{input:function(n){n.target.composing||(t.endingZip=n.target.value)}}}),t._v(" "),e("span",{staticClass:"city-span"},[t._v(t._s(t.endingCity))])])]),t._v(" "),t._m(0)])])])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("button",{staticClass:"btn btn-primary btn-block",attrs:{id:"submit-form"}},[this._v("Submit")])])])}]};var _=e("VU/8")({name:"Home",data:function(){return{msg:"Welcome to my Hackathon Project!"}}},d,!1,function(t){e("3mnt")},"data-v-2ea6885b",null).exports,p={name:"Order",data:function(){return{results:null,errors:[],submitted:!1}},filters:{currency:function(t){return"$"+t/100}},methods:{handleData:function(){var t=this;c.a.post("http://jst.edchavez.com/api/order",{merchantId:"sample string 1",orderItems:[{qtyOrdered:1,name:"sample string 2",description:"sample string 3",price:4,itemId:"sample string 5",inStock:!0,stock:1}],taxTotal:2,shippingTotal:3,merchantOrderReference:"sample string 5",orderId:"sample string 6x",orderDate:1,signature:"sample string 7"}).then(function(n){t.results=n.data,t.submitted=!0}).catch(function(n){t.errors=push(n)})}}},m={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"order"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title has-text-centered"},[t._v("Vue.js Form Processing")]),t._v(" "),e("div",{staticClass:"box boxFix"},[e("form",{attrs:{id:"merchant-form"}},[t._m(0),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Quantity (available "+t._s(t.obj.orderItems[0].stock)+" )")]),t._v(" "),e("input",{staticClass:"input",attrs:{type:"text",name:"email"}})]),t._v(" "),t._m(1),t._v(" "),e("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:function(n){return n.preventDefault(),t.handleData(n)}}},[t._v(" Submit\n    ")]),t._v(" "),t.submitted?e("div",[e("p",[e("br"),t._v(" "+t._s(t.results.status="Congratulations! Your order has been submitted")+"  ")]),t._v(" "),e("p",[e("br"),t._v(" "+t._s(t.results.message)+" ")])]):t._e()])])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[this._v("Name")]),this._v(" "),n("input",{staticClass:"input",attrs:{type:"text",name:"name"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[this._v("Quantity")]),this._v(" "),n("input",{staticClass:"input",attrs:{type:"email",name:"email"}})])}]};var f=e("VU/8")(p,m,!1,function(t){e("6DK9")},"data-v-497781c4",null).exports,h={name:"Inventory",data:function(){return{results:null,errors:[]}},filters:{currency:function(t){return"$"+t/100}},mounted:function(){var t=this;c.a.get("http://jst.edchavez.com/api/promo").then(function(n){t.results=n.data}).catch(function(n){t.errors.push(n)})}},g={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"promos"},[e("h1",{staticClass:"display-4"},[t._v("Promotions")]),t._v(" "),e("table",{attrs:{id:"invTable"}},[t._m(0),t._v(" "),e("tbody",t._l(t.results,function(n){return e("tr",[e("td",[t._v(" "+t._s(n.promotionName)+" ")]),t._v(" "),e("td",[t._v(" "+t._s(n.start)+"  - "+t._s(n.end))]),t._v(" "),e("td",[t._v(" "+t._s(n.minimumOrderValue)+" ")]),t._v(" "),e("td",[t._v(" "+t._s(n.promoAmt)+" ")]),t._v(" "),e("td",[t._v(" "+t._s(n.promoId)+" ")]),t._v(" "),e("td",[t._v(" "+t._s(n.promotionType)+" ")])])}))])])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",[t._v("Promotion Name")]),t._v(" "),e("th",[t._v(" Duration (Start to End)")]),t._v(" "),e("th",[t._v(" Minimum Order Value")]),t._v(" "),e("th",[t._v(" Promo Amounts")]),t._v(" "),e("th",[t._v(" Promo ID")]),t._v(" "),e("th",[t._v(" Promotion Type")])])])}]};var b=e("VU/8")(h,g,!1,function(t){e("xvoN")},"data-v-3f31d8d0",null).exports,C={name:"Shipping",data:function(){return{results:null,errors:[]}},filters:{currency:function(t){return"$"+t/100}},mounted:function(){var t=this;c.a.get("http://jst.edchavez.com/api/shipping").then(function(n){t.results=n.data}).catch(function(n){t.errors.push(n)})}},y={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"shipping"},[e("h1",{staticClass:"display-4"},[t._v("Shipping Options")]),t._v(" "),e("table",{attrs:{id:"invTable"}},[t._m(0),t._v(" "),e("tbody",t._l(t.results,function(n){return e("tr",[e("td",[t._v(" "+t._s(n.shipOptionId)+" ")]),t._v(" "),e("td",[t._v(" "+t._s(n.shipOptionName)+" ")]),t._v(" "),e("td",[t._v(" "+t._s(t._f("currency")(n.shipCost))+" ")]),t._v(" "),e("td",[t._v(" "+t._s(n.carrierName)+" ")])])}))])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("thead",[n("tr",[n("th",[this._v(" Shipping Options ID")]),this._v(" "),n("th",[this._v(" Shipping Option Name")]),this._v(" "),n("th",[this._v(" Shipping Cost")]),this._v(" "),n("th",[this._v(" Carrier Name")])])])}]};var x=e("VU/8")(C,y,!1,function(t){e("BdH8")},"data-v-3dd1cfd4",null).exports,k=e("e6fC");s.a.use(i.a),s.a.use(k.a);var E=new i.a({routes:[{path:"/",name:"home",component:_},{path:"/inventory",name:"inventory",component:v},{path:"/order",name:"order",component:f},{path:"/promos",name:"promos",component:b},{path:"/shipping",name:"shipping",component:x}]});e("GK12");s.a.config.productionTip=!1,new s.a({el:"#app",router:E,components:{App:r},template:"<App/>"})},QJSR:function(t,n,e){t.exports=e.p+"static/img/ram-mounts.70510e8.jpg"},Xgr5:function(t,n){},"Y9O/":function(t,n){},dW2o:function(t,n){},n9mN:function(t,n){},pA1u:function(t,n){},r15W:function(t,n,e){"use strict";var s=e("E9Zr").a;var a=e("VU/8")(s,null,!1,function(t){e("dW2o")},null,null);n.a=a.exports},xBwK:function(t,n){},xvoN:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.96e645a54e6452dc79c7.js.map