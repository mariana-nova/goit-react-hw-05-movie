"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[877],{877:function(r,t,e){e.r(t),e.d(t,{default:function(){return h}});var n=e(861),c=e(439),a=e(757),o=e.n(a),u=e(791),s=e(87),i=e(256),p=e(184),h=function(){var r=(0,u.useState)(""),t=(0,c.Z)(r,2),e=t[0],a=t[1],h=(0,u.useState)([]),l=(0,c.Z)(h,2),v=l[0],f=l[1],d=function(){var r=(0,n.Z)(o().mark((function r(){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.z1)(e);case 3:t=r.sent,f(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"background",children:[(0,p.jsx)("h2",{className:"title",children:"Seeker"}),(0,p.jsxs)("div",{children:[(0,p.jsx)("input",{type:"text",placeholder:"LOOK FOR YOUR MOVIE",value:e,onChange:function(r){return a(r.target.value)}}),(0,p.jsx)("button",{onClick:d,children:"Search"})]}),(0,p.jsx)("ul",{children:v.map((function(r){return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"/movies/".concat(r.id),children:r.title})},r.id)}))})]})}},256:function(r,t,e){e.d(t,{Hx:function(){return l},SU:function(){return s},Ug:function(){return h},Y5:function(){return p},z1:function(){return i}});var n=e(861),c=e(757),a=e.n(c),o=e(243),u="1623f57533b97bebcbc907a2a1164d19",s=function(){var r=(0,n.Z)(a().mark((function r(){var t,e,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(u));case 3:return t=r.sent,e=t.data,n=e.results.filter((function(r){return r.title})),r.abrupt("return",n);case 9:throw r.prev=9,r.t0=r.catch(0),console.error("Error fetching popular movies:",r.t0),r.t0;case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(t));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&append_to_response=credits,reviews"));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u));case 3:return e=r.sent,r.abrupt("return",e.data.cast);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching cast:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching reviews:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=877.41fc5d97.chunk.js.map