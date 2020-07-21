(this["webpackJsonpcovid-info-kerala"]=this["webpackJsonpcovid-info-kerala"]||[]).push([[0],{368:function(e,t,a){e.exports=a(467)},377:function(e,t,a){},378:function(e,t,a){},467:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),o=a(65),l=(a(377),a(378),a(27)),u=a(350),s=a.n(u);var d=Object(o.b)((function(e){return{covidInfo:e.covidInfo.covidInfo}}))((function(e){var t=e.covidInfo;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{labelRowsPerPage:14,data:t,columns:[{title:"District",field:"district"},{title:"Active",field:"active"},{title:"Confirmed",field:"confirmed"},{title:"Deceased",field:"deceased"},{title:"Recovered",field:"recovered"}],title:"Covid Cases",options:{paging:!1}}))})),m=a(3),v=a(353),f=a.n(v),E=a(354),O=a.n(E);var p=function(e){return function(t){var a=t.isLoading,n=t.message,c=Object(m.a)(t,["isLoading","message"]);return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{active:a,spinner:r.a.createElement(O.a,null),text:n})):r.a.createElement(e,c)}};var b=Object(o.b)((function(e){return{isLoading:e.covidInfo.isLoading}}))(p((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null))}))),g=a(240),h=a.n(g),_=a(356),I=a(59),j=a(357),C=a.n(j),F=function(e){return{type:"FETCH_COVID_INFO_SUCCESS",payload:e}},y=function(e){return Object.keys(e).map((function(t){return Object(I.a)({district:t},e[t])}))},w=a(314),D=Object(w.a)({container:{height:"100%",padding:20,overflowY:"auto"}});var T=Object(o.b)(null,(function(e){return{getCovidData:function(){return e(function(){var e=Object(_.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_COVID_INFO_START",payload:void 0}),e.prev=1,e.next=4,C.a.get("https://api.covid19india.org/state_district_wise.json");case 4:200!==(a=e.sent).status?t({type:"FETCH_COVID_INFO_FAIL"}):t(F(y(a.data.Kerala.districtData))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t({type:"FETCH_COVID_INFO_FAIL"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.getCovidData,a=D();return Object(n.useEffect)((function(){t()}),[]),r.a.createElement("div",{className:a.container},r.a.createElement(b,null))}));var L=function(e){return r.a.createElement("div",null,r.a.createElement("span",null,"this is the About"))},S=a(495),N=a(306),k=a(95);var x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement(N.a,null,r.a.createElement(k.a,{variant:"h6"},"Covid Info Kerala"))))};var A=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{style:{height:"64px"}},r.a.createElement(x,null)),r.a.createElement("main",{className:"main-container"},t))},V=a(494),H=a(112),R=a(324),P=a(117),U=a(120),B=Object(H.a)({palette:{primary:R.a}}),J=(Object(H.a)({palette:{primary:P.a}}),Object(H.a)({palette:{primary:U.a}}),a(496));var K=function(){return r.a.createElement(V.a,{theme:B},r.a.createElement(J.a,null),r.a.createElement(A,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(T,null)),r.a.createElement(l.a,{exact:!0,path:"/about"},r.a.createElement(L,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(180),W=a(54),X=Object(W.b)({}),Y=a(58),$=a(358),q=a.n($),z=a(359),G={},Q={covidInfo:[],isLoading:!1},Z=Object(Y.c)({basic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD":return Object(I.a)(Object(I.a)({},e),n);default:return e}},covidInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_COVID_INFO_START":return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0});case"FETCH_COVID_INFO_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,covidInfo:n});case"FETCH_COVID_INFO_FAIL":return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,covidInfo:Object(I.a)({},e)});default:return e}}}),ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.d,te=Object(Y.e)(Z,ee(Object(Y.a)(q.a,z.a)));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:te},r.a.createElement(M.a,{history:X},r.a.createElement(K,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[368,1,2]]]);
//# sourceMappingURL=main.7d708a55.chunk.js.map