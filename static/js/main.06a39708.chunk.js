(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var r=e(8),c=e.n(r),a=e(3),o=e(7),s=e(1),u=e.n(s),i=e(2),d=(e(15),e(0)),l=function(t){var n=t.goods;return Object(d.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.color,r=t.name;return Object(d.jsx)("li",{"data-cy":"good",style:{color:e},children:r},n)}))})},p=e(9),f="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json";function b(){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(f);case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var h=function(){var t=Object(a.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:return n=t.sent,t.abrupt("return",Object(p.a)(n).sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(i.useState)([]),n=Object(o.a)(t,2),e=n[0],r=n[1],c=Object(i.useState)(!1),s=Object(o.a)(c,2),p=s[0],f=s[1],j=function(){var t=Object(a.a)(u.a.mark((function t(n){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n();case 3:e=t.sent,r(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),f(!0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){j(b)},children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){j(h)},children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){j(v)},children:"Load red goods"}),p?Object(d.jsx)("h2",{style:{color:"red"},children:"An error occurred when loading goods"}):Object(d.jsx)(l,{goods:e})]})};c.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.06a39708.chunk.js.map