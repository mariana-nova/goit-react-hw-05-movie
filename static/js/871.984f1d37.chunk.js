"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[871],{871:function(r,t,e){e.r(t),e.d(t,{default:function(){return f}});var n=e(861),c=e(439),a=e(757),o=e.n(a),u=e(791),s=e(689),i=e(256),p=e(184),f=function(){var r=(0,s.UO)().movieId,t=(0,u.useState)([]),e=(0,c.Z)(t,2),a=e[0],f=e[1];return(0,u.useEffect)((function(){function t(){return(t=(0,n.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.Hx)(r);case 3:e=t.sent,f(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching reviews:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[r]),(0,p.jsxs)("div",{className:"reviews-color",children:[(0,p.jsx)("h2",{children:"Reviews"}),(0,p.jsx)("ul",{children:a.map((function(r){return(0,p.jsxs)("li",{children:[(0,p.jsx)("strong",{children:r.author}),": ",r.content]},r.id)}))})]})}},256:function(r,t,e){e.d(t,{Hx:function(){return h},SU:function(){return s},Ug:function(){return f},Y5:function(){return p},z1:function(){return i}});var n=e(861),c=e(757),a=e.n(c),o=e(243),u="1623f57533b97bebcbc907a2a1164d19",s=function(){var r=(0,n.Z)(a().mark((function r(){var t,e,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(u));case 3:return t=r.sent,e=t.data,n=e.results.filter((function(r){return r.title})),r.abrupt("return",n);case 9:throw r.prev=9,r.t0=r.catch(0),console.error("Error fetching popular movies:",r.t0),r.t0;case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(t));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&append_to_response=credits,reviews"));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u));case 3:return e=r.sent,r.abrupt("return",e.data.cast);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching cast:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching reviews:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=871.984f1d37.chunk.js.map