"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{76:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(861),a=t(439),u=t(757),c=t.n(u),i=t(689),s=t(791),o=t(574),f="Cast_castGallery__CjqGL",p="Cast_castItem__-Jcfe",d=t(686),v=t.n(d),l=t(184),h=function(){var e=(0,i.UO)().id,n=(0,s.useState)([]),t=(0,a.Z)(n,2),u=t[0],d=t[1];(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.IQ)(e);case 3:t=n.sent,r=[],t.cast.forEach((function(e){r.find((function(n){return n.id===e.id}))||r.push(e)})),d(r),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),n.t0.response,v().Notify.failure("Oops \u2013 something went wrong!");case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]);var h=u.map((function(e){var n=e.id,t=e.profile_path,r=e.name;return(0,l.jsxs)("li",{className:p,children:[(0,l.jsx)("img",{src:(0,o.Et)(t,200),alt:r}),(0,l.jsxs)("p",{children:[" ",r]})]},n)}));return(0,l.jsx)(l.Fragment,{children:u&&u.length>0?(0,l.jsx)("ul",{className:f,children:h}):(0,l.jsx)("div",{children:"We don't have any cast for this movie"})})}},574:function(e,n,t){t.d(n,{Df:function(){return s},Et:function(){return v},IQ:function(){return d},Pg:function(){return o},et:function(){return p},gH:function(){return f}});var r=t(861),a=t(757),u=t.n(a),c=t(912).Z.create({baseURL:"https://api.themoviedb.org/3/"}),i="https://image.tmdb.org/t/p/w",s=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/popular?api_key=1db949d546d8184041e5d93169d90d9f&language=en-US&page=1");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(n,"?api_key=1db949d546d8184041e5d93169d90d9f&language=en-US&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("search/movie?api_key=1db949d546d8184041e5d93169d90d9f&language=en-US&page=1&include_adult=false&query=".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(n,"/reviews?api_key=1db949d546d8184041e5d93169d90d9f&language=en-US&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(n,"/credits?api_key=1db949d546d8184041e5d93169d90d9f&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return e?i+n+e:"https://via.placeholder.com/".concat(n,"x").concat(1.5*n)}}}]);
//# sourceMappingURL=76.df31adbb.chunk.js.map