(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{42:function(e,t,c){},45:function(e,t,c){},51:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n,a,r=c(0),s=c.n(r),i=c(15),o=c.n(i),u=(c(42),c(11)),l=(c(43),c(3)),p=c(5),j=c.n(p),b=c(10),d=c(19),v=(c(45),c(1)),f=Object(l.f)((function(e){var t=e.children,c=e.history,n=e.location.pathname;return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsxs)("nav",{className:"sider",children:[Object(v.jsx)("i",{onClick:function(){return c.push(S.path)},className:"ri-message-fill ".concat(n===S.path?"active":"")}),Object(v.jsx)("i",{onClick:function(){return c.push(E.path)},className:"ri-todo-fill ".concat(n===E.path?"active":"")}),Object(v.jsx)("i",{onClick:function(){return c.push(F.path)},className:"ri-team-fill ".concat(n===F.path?"active":"")})]}),t]})})),h=c(17),m=(c(51),c(35)),O=c(36),x=c(37),g=c(14),k=(c(52),c(2)),w=c(18),y=c.n(w),N=new(n=function(){function e(){Object(O.a)(this,e),Object(m.a)(this,"coursesInfo",a,this)}return Object(x.a)(e,[{key:"initCourses",value:function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={categories:[],minutes:[],blocks:[]},e.next=4,Promise.allSettled([new Promise(function(){var e=Object(b.a)(j.a.mark((function e(t,c){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://rpback.com/api/games/test_categories?project_id=2");case 3:return n=e.sent,e.abrupt("return",t(n));case 7:e.prev=7,e.t0=e.catch(0),c(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,c){return e.apply(this,arguments)}}()),new Promise(function(){var e=Object(b.a)(j.a.mark((function e(t,c){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://rpback.com/api/games/test_minutes?project_id=2");case 3:return n=e.sent,e.abrupt("return",t(n));case 7:e.prev=7,e.t0=e.catch(0),c(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,c){return e.apply(this,arguments)}}()),new Promise(function(){var e=Object(b.a)(j.a.mark((function e(t,c){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://rpback.com/api/games/test_blocks?project_id=2");case 3:return n=e.sent,e.abrupt("return",t(n));case 7:e.prev=7,e.t0=e.catch(0),c(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,c){return e.apply(this,arguments)}}())]);case 4:return e.sent.forEach((function(e,c){var n,a,r,s,i,o,u;switch(c){case 0:t.categories="fulfilled"===e.status?null===e||void 0===e||null===(n=e.value)||void 0===n||null===(a=n.data)||void 0===a||null===(r=a.categories)||void 0===r?void 0:r.map((function(t,c){var n,a,r,s;return 1===c?null===e||void 0===e||null===(n=e.value)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.categories[2]:2===c?null===e||void 0===e||null===(r=e.value)||void 0===r||null===(s=r.data)||void 0===s?void 0:s.categories[1]:t})):null;break;case 1:t.minutes="fulfilled"===e.status?null===e||void 0===e||null===(s=e.value)||void 0===s||null===(i=s.data)||void 0===i?void 0:i.minutes:null;break;case 2:t.blocks="fulfilled"===e.status?null===e||void 0===e||null===(o=e.value)||void 0===o||null===(u=o.data)||void 0===u?void 0:u.blocks:null}})),this.coursesInfo=t,e.abrupt("return",Promise.resolve([!0,!1]));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",Promise.resolve([!1,!0]));case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"clearAll",value:function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.coursesInfo={categories:[],minutes:[],blocks:[]};case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"coursesData",get:function(){return this.coursesInfo}}]),e}(),a=Object(g.a)(n.prototype,"coursesInfo",[k.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{categories:[],minutes:[],blocks:[]}}}),Object(g.a)(n.prototype,"initCourses",[k.f],Object.getOwnPropertyDescriptor(n.prototype,"initCourses"),n.prototype),Object(g.a)(n.prototype,"clearAll",[k.f],Object.getOwnPropertyDescriptor(n.prototype,"clearAll"),n.prototype),Object(g.a)(n.prototype,"coursesData",[k.g],Object.getOwnPropertyDescriptor(n.prototype,"coursesData"),n.prototype),n),D=N,C=c.p+"static/media/cycle.21a683f6.jpg",P=c.p+"static/media/bricks.5e8b9ed6.jpg",_=c.p+"static/media/sofa.c26366e8.jpg",I=c.p+"static/media/weights.c13708c2.jpg",S={component:Object(h.b)((function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(D.coursesData.categories[0]),s=Object(d.a)(a,2),i=s[0],o=s[1],u=D.coursesData,l=[C,P,_,I];Object(r.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,null===D||void 0===D?void 0:D.initCourses();case 3:t=e.sent,c=Object(d.a)(t,2),c[0],c[1],n(!1);case 9:case"end":return e.stop()}}),e)})))()}),[]),Object(r.useEffect)((function(){o(D.coursesData.categories[0])}),[D.coursesData]);return Object(v.jsx)(f,{children:Object(v.jsxs)("div",{className:"content ".concat(c?"opacity":""),children:[Object(v.jsxs)("div",{className:"flex-space-between full-width wrap",children:[Object(v.jsx)("div",{className:"top-title",children:"Courses"}),Object(v.jsx)("div",{className:"tabs",children:u.categories.map((function(e,t){return Object(v.jsx)("span",{onClick:function(){return o(e)},className:"courses-tab ".concat(i===e?"active":""),children:e},"tab"+t)}))})]}),Object(v.jsx)("div",{className:"tab-content",children:u.blocks.map((function(e,t){return function(e,t){var c;return Object(v.jsxs)("div",{className:"tab-content__block",style:{background:"url(".concat(l[Math.floor(4*Math.random())],") no-repeat center / cover")},children:[Object(v.jsxs)("div",{className:"flex-space-between  full-width",children:[Object(v.jsx)("div",{className:"title",children:e}),Object(v.jsx)("div",{className:"time",children:(null===D||void 0===D||null===(c=D.coursesData)||void 0===c?void 0:c.minutes)?D.coursesData.minutes[t].time+" min":""})]}),Object(v.jsx)("div",{className:"lessons",children:"24 lessons"}),Object(v.jsxs)("div",{className:"play-button-wrapper",children:[" ",Object(v.jsx)("div",{className:"play-button"})]})]},"block"+t)}(e,t)}))})]})})})),exact:!0,path:"/"},E={component:function(){return Object(v.jsx)(f,{children:Object(v.jsx)("div",{className:"content",children:Object(v.jsx)("div",{className:"top-title",children:"Todos"})})})},exact:!0,path:"/todos"},F={component:function(){return Object(v.jsx)(f,{children:Object(v.jsx)("div",{className:"content",children:Object(v.jsx)("div",{className:"top-title",children:"Peoples"})})})},exact:!0,path:"/peoples"},A={component:function(){return Object(v.jsx)(f,{})}},B=function(){return Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,Object(u.a)({},S)),Object(v.jsx)(l.a,Object(u.a)({},E)),Object(v.jsx)(l.a,Object(u.a)({},F)),Object(v.jsx)(l.a,Object(u.a)({},A))]})};Object(k.h)({disableErrorBoundaries:!0});var M={coursesStore:D},T=c(16);var J=function(){return Object(v.jsx)(h.a,Object(u.a)(Object(u.a)({},M),{},{children:Object(v.jsx)(T.a,{children:Object(v.jsx)(B,{})})}))},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};o.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(J,{})}),document.getElementById("root")),L()}},[[71,1,2]]]);
//# sourceMappingURL=main.fbed3ffa.chunk.js.map