(function(e){function t(t){for(var n,o,c=t[0],i=t[1],d=t[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==s[i]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=i;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"05ac":function(e,t,a){"use strict";a("2e3e")},"25f1":function(e,t,a){},"2e3e":function(e,t,a){},3740:function(e,t,a){"use strict";a("25f1")},"4fc8":function(e,t,a){"use strict";a("9b89")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[e._v("~ Best Zi Char ~")]),a("navbar"),a("router-view")],1)},r=[],o={data:function(){return{}}},c=o,i=(a("034f"),a("2877")),d=Object(i["a"])(c,s,r,!1,null,null,null),l=d.exports,u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"counter"},[a("button",{style:e.buttonStyle,on:{click:e.decrease}},[e._v("-")]),a("span",[e._v(" "+e._s(e.counter)+" ")]),a("button",{style:e.buttonStyle,on:{click:e.increase}},[e._v("+")])])},f=[],b={props:{item:{type:Object}},data:function(){return{counter:0,buttonStyle:{"background-color":"pink","font-size":"30px","border-radius":"7px",border:"1px solid black",height:"45px",width:"45px"}}},methods:{decrease:function(){this.counter>0&&(this.counter=this.counter-1),this.$emit("counter",this.item,this.counter)},increase:function(){this.counter<=9?this.counter=this.counter+1:alert("You cannot buy more than 10 items."),this.$emit("counter",this.item,this.counter)}}},m=b,p=(a("4fc8"),Object(i["a"])(m,u,f,!1,null,null,null)),h=p.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("order",[a("span",[e._v("Menu:")]),a("ul",e._l(e.itemsSelected,(function(t){return a("li",{key:t},[a("p",[e._v(e._s(t[0])+" x "+e._s(t[1]))])])})),0),a("button",{on:{click:function(t){e.findTotal(),e.sendOrder()}}},[e._v("Add Order")])])],1)},v=[],y=(a("b680"),a("d41b")),g={apiKey:"AIzaSyBzx_QXne9s_W-pNWiWFUWFsyYuDJIfBZE",authDomain:"bt3103-week-6-2ad45.firebaseapp.com",projectId:"bt3103-week-6-2ad45",storageBucket:"bt3103-week-6-2ad45.appspot.com",messagingSenderId:"1030793458280",appId:"1:1030793458280:web:8bc7adbb8160c2db3fc1dd",measurementId:"G-54GC858WZ0"};y["a"].initializeApp(g);var _=y["a"].firestore(),k=_,w={data:function(){return{subtotal:0}},props:{itemsSelected:{type:Array}},methods:{findTotal:function(){this.subtotal=0;for(var e=0;e<this.itemsSelected.length;e++)this.subtotal+=this.itemsSelected[e][1]*this.itemsSelected[e][2];return this.subtotal},sendOrder:function(){for(var e=0,t=0,a=0,n=0,s=0,r=0,o=0;o<this.itemsSelected.length;o++)"Prawn omelette"===this.itemsSelected[o][0]?e=this.itemsSelected[o][1]:"Dry Beef Hor Fun"===this.itemsSelected[o][0]?t=this.itemsSelected[o][1]:"Mapo Tofu"===this.itemsSelected[o][0]?a=this.itemsSelected[o][1]:"Pork Fried Rice"===this.itemsSelected[o][0]?n=this.itemsSelected[o][1]:"Cereal Prawn"===this.itemsSelected[o][0]?s=this.itemsSelected[o][1]:r=this.itemsSelected[o][1];k.collection("orders").add({prawnOmelette:e,dryBeefHorFun:t,mapoTofu:a,porkFriedRice:n,cerealPrawn:s,sambalKangKung:r}).then((function(){location.reload()}))}},computed:{grandtotal:function(){return(1.07*this.subtotal).toFixed(2)}}},S=w,x=(a("d960"),Object(i["a"])(S,j,v,!1,null,null,null)),I=x.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ul",[a("li",[a("b",[a("router-link",{attrs:{to:"/",exact:""}},[e._v("Home")])],1)]),a("li",[a("b",[a("router-link",{attrs:{to:"/orders",exact:""}},[e._v("Orders")])],1)]),a("li",[a("b",[a("router-link",{attrs:{to:"/dashboard",exact:""}},[e._v("Dashboard")])],1)])])])},z=[],C=(a("3740"),{}),F=Object(i["a"])(C,O,z,!1,null,"2cb4b275",null),P=F.exports,E=a("2145"),B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ul",{attrs:{id:"items"}},e._l(e.items,(function(t){return a("li",{key:t},[a("h2",[e._v(e._s(t.name))]),a("img",{attrs:{src:t.imageURL,alt:"Food image"}}),a("p",[e._v(" $"+e._s(t.price)+" ")]),a("qty",{attrs:{item:t},on:{counter:e.onCounter}})],1)})),0),a("basket",{attrs:{itemsSelected:e.itemsSelected}})],1)},T=[],K=(a("4160"),a("a434"),a("b0c0"),a("159b"),{data:function(){return{items:[],itemsSelected:[]}},methods:{onCounter:function(e,t){if(0===this.itemsSelected.length&&t>0)this.itemsSelected.push([e.name,t,e.price]);else for(var a=0;a<this.itemsSelected.length;a++){var n=this.itemsSelected[a],s=n[0];if(s===e.name&&t>0){this.itemsSelected.splice(a,1,[e.name,t,e.price]);break}if(s===e.name&&0==t){this.itemsSelected.splice(a,1);break}s!=e.name&&a==this.itemsSelected.length-1&&this.itemsSelected.push([e.name,t,e.price])}},fetchItems:function(){var e=this;k.collection("menu").get().then((function(t){t.docs.forEach((function(t){e.items.push(t.data())}))}))}},created:function(){this.fetchItems()}}),$=K,M=(a("af85"),Object(i["a"])($,B,T,!1,null,"0411a05a",null)),R=M.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ul",{attrs:{id:"orders"}},e._l(e.orders,(function(t){return a("li",{key:t},[a("ul",{attrs:{id:"order"}},[a("p",[e._v(" Cereal Prawn: "+e._s(t[1].cerealPrawn)),a("br"),e._v(" Dry Beef Hor Fun: "+e._s(t[1].dryBeefHorFun)),a("br"),e._v(" Mapo Tofu: "+e._s(t[1].mapoTofu)),a("br"),e._v(" Pork Fried Rice: "+e._s(t[1].porkFriedRice)),a("br"),e._v(" Prawn omelette: "+e._s(t[1].prawnOmelette)),a("br"),e._v(" Sambal Kang Kung: "+e._s(t[1].sambalKangKung)+" ")]),a("buttons",[a("button",{attrs:{id:t[0]},on:{click:function(t){return e.deleteItem(t)}}},[e._v("Delete")]),a("button",{attrs:{id:t[0]},on:{click:function(t){return e.route(t)}}},[e._v("Modify")])])],1)])})),0)])},H=[],A={data:function(){return{orders:[]}},methods:{fetchItems:function(){var e=this;k.collection("orders").get().then((function(t){t.docs.forEach((function(t){e.orders.push([t.id,t.data()])}))}))},deleteItem:function(e){for(var t=e.target.getAttribute("id"),a=0;a<this.orders.length;a++)this.orders[a][0]===t&&k.collection("orders").doc(this.orders[a][0]).delete().then((function(){location.reload()}))},route:function(e){var t=e.target.getAttribute("id");this.$router.push({name:"Modify",params:{docId:t}})}},created:function(){this.fetchItems()}},U=A,W=(a("05ac"),Object(i["a"])(U,D,H,!1,null,"39a190bb",null)),q=W.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[a("label",{attrs:{for:"0"}},[e._v("Cereal Prawn: "+e._s(e.datapacket.cerealPrawn))]),a("br"),a("input",{attrs:{id:"0",value:"0",type:"number",min:"0"}}),a("br"),a("label",{attrs:{for:"1"}},[e._v("Dry Beef Hor Fun: "+e._s(e.datapacket.dryBeefHorFun))]),a("br"),a("input",{attrs:{id:"1",value:"0",type:"number",min:"0"}}),a("br"),a("label",{attrs:{for:"2"}},[e._v("Mapo Tofu: "+e._s(e.datapacket.mapoTofu))]),a("br"),a("input",{attrs:{id:"2",value:"0",type:"number",min:"0"}}),a("br"),a("label",{attrs:{for:"3"}},[e._v("Pork Fried Rice: "+e._s(e.datapacket.porkFriedRice))]),a("br"),a("input",{attrs:{id:"3",value:"0",type:"number",min:"0"}}),a("br"),a("label",{attrs:{for:"4"}},[e._v("Prawn omelette: "+e._s(e.datapacket.prawnOmelette))]),a("br"),a("input",{attrs:{id:"4",value:"0",type:"number",min:"0"}}),a("br"),a("label",{attrs:{for:"5"}},[e._v("Sambal Kang Kung: "+e._s(e.datapacket.sambalKangKung))]),a("br"),a("input",{attrs:{id:"5",value:"0",type:"number",min:"0"}}),a("br")]),a("button",{attrs:{type:"button"},on:{click:function(t){return e.updateOrder()}}},[e._v("Update Order")])])},J=[],L={data:function(){return{docId:this.$route.params.docId,datapacket:{}}},methods:{fetchItems:function(){var e=this;k.collection("orders").doc(this.docId).get().then((function(t){e.datapacket=t.data()}))},updateOrder:function(){var e=this;k.collection("orders").doc(this.docId).update({cerealPrawn:document.getElementById("0").value,dryBeefHorFun:document.getElementById("1").value,mapoTofu:document.getElementById("2").value,porkFriedRice:document.getElementById("3").value,prawnOmelette:document.getElementById("4").value,sambalKangKung:document.getElementById("5").value}).then((function(){e.$router.push({path:"/orders"})}))}},created:function(){this.fetchItems()}},Z=L,G=(a("941e"),Object(i["a"])(Z,N,J,!1,null,"1f74ee54",null)),Y=G.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chart"},[a("h1",[e._v("Bar Chart")]),a("barchart"),a("h1",[e._v("Line Chart")]),a("axios")],1)},X=[],V={},ee=Object(i["a"])(V,Q,X,!1,null,null,null),te=ee.exports,ae=[{path:"/",component:R},{path:"/orders",component:q},{path:"/modify",name:"Modify",component:Y},{path:"/dashboard",name:"Dashboard",component:te}],ne=a("ef82"),se={extends:ne["a"],data:function(){return{datacollection:{labels:[],datasets:[{backgroundColor:[],data:[0,0,0,0,0,0]}]},options:{legend:{display:!1},title:{display:!0,text:"Total Number of each dish"},responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{min:0}}]}}}},methods:{fetchItems:function(){var e=this;k.collection("orders").get().then((function(t){t.forEach((function(t){e.datacollection.datasets[0].data[0]+=parseInt(t.data().prawnOmelette),e.datacollection.datasets[0].data[1]+=parseInt(t.data().dryBeefHorFun),e.datacollection.datasets[0].data[2]+=parseInt(t.data().sambalKangKung),e.datacollection.datasets[0].data[3]+=parseInt(t.data().porkFriedRice),e.datacollection.datasets[0].data[4]+=parseInt(t.data().mapoTofu),e.datacollection.datasets[0].data[5]+=parseInt(t.data().cerealPrawn)}))})),k.collection("menu").get().then((function(t){t.forEach((function(t){e.datacollection.labels.push(t.data().name),e.datacollection.datasets[0].backgroundColor.push(t.data().color)})),e.renderChart(e.datacollection,e.options)}))}},created:function(){this.fetchItems()}},re=a("fe1f"),oe=a.n(re),ce={extends:ne["b"],data:function(){return{datacollection:{labels:[],datasets:[{label:"west",data:[],borderColor:"red",fill:!1},{label:"national",data:[],borderColor:"blue",fill:!1},{label:"east",data:[],borderColor:"yellow",fill:!1},{label:"central",data:[],borderColor:"green",fill:!1},{label:"south",data:[],borderColor:"orange",fill:!1},{label:"north",data:[],borderColor:"purple",fill:!1}]},options:{legend:{position:"top"},title:{display:!0,text:"PSI Twenty Four Hourly (By Region)"},responsive:!0,maintainAspectRatio:!1}}},methods:{fetchItems:function(){var e=this;oe.a.get("https://api.data.gov.sg/v1/environment/psi?date=2021-02-23").then((function(t){for(var a in e.results=t.data.items,e.results)e.datacollection.datasets[0].data.push(e.results[a]["readings"]["psi_twenty_four_hourly"]["west"]),e.datacollection.datasets[1].data.push(e.results[a]["readings"]["psi_twenty_four_hourly"]["national"]),e.datacollection.datasets[2].data.push(e.results[a]["readings"]["psi_twenty_four_hourly"]["east"]),e.datacollection.datasets[3].data.push(e.results[a]["readings"]["psi_twenty_four_hourly"]["central"]),e.datacollection.datasets[4].data.push(e.results[a]["readings"]["psi_twenty_four_hourly"]["south"]),e.datacollection.datasets[5].data.push(e.results[a]["readings"]["psi_twenty_four_hourly"]["north"]),e.datacollection.labels.push(e.results[a]["timestamp"]+"");e.renderChart(e.datacollection,e.options)}))}},created:function(){this.fetchItems()}};n["a"].use(E["a"]),n["a"].config.productionTip=!1,n["a"].component("qty",h),n["a"].component("basket",I),n["a"].component("navbar",P),n["a"].component("barchart",se),n["a"].component("axios",ce);var ie=new E["a"]({routes:ae,mode:"history"});new n["a"]({render:function(e){return e(l)},router:ie}).$mount("#app")},"85ec":function(e,t,a){},"941e":function(e,t,a){"use strict";a("c98d")},"9b89":function(e,t,a){},"9f0c":function(e,t,a){var n={"./af":"f818","./af.js":"f818","./ar":"b5ba","./ar-dz":"9d08","./ar-dz.js":"9d08","./ar-kw":"fd3d","./ar-kw.js":"fd3d","./ar-ly":"0df6","./ar-ly.js":"0df6","./ar-ma":"f5f8","./ar-ma.js":"f5f8","./ar-sa":"86cd","./ar-sa.js":"86cd","./ar-tn":"5830","./ar-tn.js":"5830","./ar.js":"b5ba","./az":"9fdf","./az.js":"9fdf","./be":"4d36","./be.js":"4d36","./bg":"e883","./bg.js":"e883","./bm":"4298","./bm.js":"4298","./bn":"2b2e","./bn-bd":"b971","./bn-bd.js":"b971","./bn.js":"2b2e","./bo":"a8fe","./bo.js":"a8fe","./br":"ab02","./br.js":"ab02","./bs":"cac3","./bs.js":"cac3","./ca":"727c","./ca.js":"727c","./cs":"db15","./cs.js":"db15","./cv":"2866","./cv.js":"2866","./cy":"e2e0","./cy.js":"e2e0","./da":"d190","./da.js":"d190","./de":"5731","./de-at":"6776","./de-at.js":"6776","./de-ch":"6bd9","./de-ch.js":"6bd9","./de.js":"5731","./dv":"7827","./dv.js":"7827","./el":"3350","./el.js":"3350","./en-au":"e68e","./en-au.js":"e68e","./en-ca":"b4a9","./en-ca.js":"b4a9","./en-gb":"2e0f","./en-gb.js":"2e0f","./en-ie":"2007","./en-ie.js":"2007","./en-il":"30dc","./en-il.js":"30dc","./en-in":"5259","./en-in.js":"5259","./en-nz":"fa4c","./en-nz.js":"fa4c","./en-sg":"590d","./en-sg.js":"590d","./eo":"fb0d","./eo.js":"fb0d","./es":"bd0c","./es-do":"fe85","./es-do.js":"fe85","./es-mx":"3f53","./es-mx.js":"3f53","./es-us":"c1c2","./es-us.js":"c1c2","./es.js":"bd0c","./et":"8e51","./et.js":"8e51","./eu":"8047","./eu.js":"8047","./fa":"ace3","./fa.js":"ace3","./fi":"3512","./fi.js":"3512","./fil":"9519","./fil.js":"9519","./fo":"296d","./fo.js":"296d","./fr":"62ae","./fr-ca":"f520","./fr-ca.js":"f520","./fr-ch":"a9d9","./fr-ch.js":"a9d9","./fr.js":"62ae","./fy":"bb83","./fy.js":"bb83","./ga":"faac","./ga.js":"faac","./gd":"4f30","./gd.js":"4f30","./gl":"1f7c","./gl.js":"1f7c","./gom-deva":"835f","./gom-deva.js":"835f","./gom-latn":"daa2","./gom-latn.js":"daa2","./gu":"59f1","./gu.js":"59f1","./he":"b952","./he.js":"b952","./hi":"3630","./hi.js":"3630","./hr":"d705","./hr.js":"d705","./hu":"10c9","./hu.js":"10c9","./hy-am":"4b6a","./hy-am.js":"4b6a","./id":"74fa","./id.js":"74fa","./is":"c329","./is.js":"c329","./it":"ee47","./it-ch":"baae","./it-ch.js":"baae","./it.js":"ee47","./ja":"6b6c","./ja.js":"6b6c","./jv":"ce38","./jv.js":"ce38","./ka":"7ad5","./ka.js":"7ad5","./kk":"1868","./kk.js":"1868","./km":"af4b","./km.js":"af4b","./kn":"6933","./kn.js":"6933","./ko":"3b09","./ko.js":"3b09","./ku":"d7a2","./ku.js":"d7a2","./ky":"44da","./ky.js":"44da","./lb":"3aac","./lb.js":"3aac","./lo":"4d72","./lo.js":"4d72","./lt":"5337","./lt.js":"5337","./lv":"9a31","./lv.js":"9a31","./me":"c9ef","./me.js":"c9ef","./mi":"e590","./mi.js":"e590","./mk":"0492","./mk.js":"0492","./ml":"62fe","./ml.js":"62fe","./mn":"5f6e","./mn.js":"5f6e","./mr":"aa17","./mr.js":"aa17","./ms":"61d0","./ms-my":"8aef","./ms-my.js":"8aef","./ms.js":"61d0","./mt":"695b","./mt.js":"695b","./my":"e0ea","./my.js":"e0ea","./nb":"41e0","./nb.js":"41e0","./ne":"d02b","./ne.js":"d02b","./nl":"69b6","./nl-be":"0728","./nl-be.js":"0728","./nl.js":"69b6","./nn":"fc22","./nn.js":"fc22","./oc-lnc":"8d44","./oc-lnc.js":"8d44","./pa-in":"fa72","./pa-in.js":"fa72","./pl":"8021","./pl.js":"8021","./pt":"cf2a","./pt-br":"97ff","./pt-br.js":"97ff","./pt.js":"cf2a","./ro":"3b5b","./ro.js":"3b5b","./ru":"6883","./ru.js":"6883","./sd":"e8a1","./sd.js":"e8a1","./se":"7db1","./se.js":"7db1","./si":"1386","./si.js":"1386","./sk":"d645","./sk.js":"d645","./sl":"e61f","./sl.js":"e61f","./sq":"ee34","./sq.js":"ee34","./sr":"ea94","./sr-cyrl":"1ab0","./sr-cyrl.js":"1ab0","./sr.js":"ea94","./ss":"e78a","./ss.js":"e78a","./sv":"010c","./sv.js":"010c","./sw":"1450","./sw.js":"1450","./ta":"aa14","./ta.js":"aa14","./te":"beb6","./te.js":"beb6","./tet":"27da","./tet.js":"27da","./tg":"4bde","./tg.js":"4bde","./th":"2dd6","./th.js":"2dd6","./tk":"478a","./tk.js":"478a","./tl-ph":"a36c","./tl-ph.js":"a36c","./tlh":"86c9","./tlh.js":"86c9","./tr":"6755","./tr.js":"6755","./tzl":"5cfd","./tzl.js":"5cfd","./tzm":"4812","./tzm-latn":"6636","./tzm-latn.js":"6636","./tzm.js":"4812","./ug-cn":"ab75","./ug-cn.js":"ab75","./uk":"9f61","./uk.js":"9f61","./ur":"adf5","./ur.js":"adf5","./uz":"fb6d","./uz-latn":"9d50","./uz-latn.js":"9d50","./uz.js":"fb6d","./vi":"99a5","./vi.js":"99a5","./x-pseudo":"c3cf","./x-pseudo.js":"c3cf","./yo":"3ed5","./yo.js":"3ed5","./zh-cn":"eb15","./zh-cn.js":"eb15","./zh-hk":"b7e2","./zh-hk.js":"b7e2","./zh-mo":"b829","./zh-mo.js":"b829","./zh-tw":"1abb","./zh-tw.js":"1abb"};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="9f0c"},af85:function(e,t,a){"use strict";a("ec50")},c812:function(e,t,a){},c98d:function(e,t,a){},d960:function(e,t,a){"use strict";a("c812")},ec50:function(e,t,a){}});
//# sourceMappingURL=app.a6c3fa78.js.map