/*! For license information please see 609.8a5bf337.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[609],{9966:function(t,e,n){n.d(e,{Ku:function(){return f},Pg:function(){return s},Ph:function(){return l},tx:function(){return h},Df:function(){return u},Be:function(){return c}});var r=n(5861),o=n(1243);function i(){i=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new E(r||[]);return o(a,"_invoke",{value:Z(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",d="executing",v="completed",m={};function g(){}function y(){}function x(){}var b={};l(b,c,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(S([])));j&&j!==n&&r.call(j,c)&&(b=j);var _=x.prototype=g.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function Z(e,n,r){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=F(c,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var s=h(e,n,r);if("normal"===s.type){if(o=r.done?v:"suspendedYield",s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=v,r.method="throw",r.arg=s.arg)}}}function F(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,F(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=h(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function S(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return y.prototype=x,o(_,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:y,configurable:!0}),y.displayName=l(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},O(k.prototype),l(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new k(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(_),l(_,s,"Generator"),l(_,c,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=S,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:S(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a="8770560c7097e815657709cb3d71f99c",c="https://image.tmdb.org/t/p/w500",u=function(t){return(0,o.Z)("/trending/movie/day",{params:{api_key:a,page:t}})},s=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r,c,u,s,l,f,h;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("/movie/".concat(e),{params:{api_key:a,language:"en-US"}});case 2:return n=t.sent,r=n.data,c=r.title,u=r.poster_path,s=r.release_date,l=r.genres,f=r.overview,h=r.vote_average,t.abrupt("return",{title:c,posterPath:u,releaseDate:s,genres:l,overview:f,voteAverage:h});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("/search/movie",{params:{api_key:a,language:"en-US",query:e,include_adult:!1}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("/movie/".concat(e,"/credits"),{params:{api_key:a,language:"en-US"}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast.map((function(t){return{id:t.id,name:t.name,character:t.character,profilePath:t.profile_path}})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("/movie/".concat(e,"/reviews"),{params:{api_key:a,language:"en-US"}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},5e3:function(t,e,n){n.d(e,{Z:function(){return s}});var r,o=n(168),i=n(1087),a=(0,n(5867).ZP)(i.rU)(r||(r=(0,o.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 16px 16px;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),c=n(9128),u=n(184),s=function(t){var e=t.to,n=t.children;return(0,u.jsxs)(a,{to:e,children:[(0,u.jsx)(c.jTe,{size:"24"}),n]})}},5984:function(t,e,n){var r=n(5867),o=n(407),i=(0,r.ZP)("div")(o.Dh,o.bK,o.$_,o.GQ,o.eC,o.Oq,o.Cg,o.FK);e.Z=i},6431:function(t,e,n){n.d(e,{Z:function(){return c}});var r,o=n(168),i=n(5867).ZP.p(r||(r=(0,o.Z)(["\n  position: relative;\n  margin-top: ","px;\n  color: ",";\n  text-align: center;\n  font-size: ",";\n"])),(function(t){return t.theme.space[6]}),(function(t){return t.theme.colors.white}),(function(t){return t.theme.fontSizes.xl})),a=n(184),c=function(t){var e=t.children;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i,{children:e})})}},4609:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var r,o,i,a,c,u,s,l,f=n(9439),h=n(2791),p=n(7689),d=n(807),v=n.n(d),m=n(9966),g=n(6431),y=n(5e3),x=n(5984),b=n(168),w=n(5867),j=n(1087),_=w.ZP.section(r||(r=(0,b.Z)(["\n  display: flex;\n  /* flex-direction: column; */\n  gap: ","px;\n  margin-bottom: ","px;\n  padding-left: 16px;\n"])),(function(t){return t.theme.space[5]}),(function(t){return t.theme.space[6]})),O=w.ZP.h1(o||(o=(0,b.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  margin-bottom: ","px;\n"])),(function(t){return t.theme.colors.primaryText}),(function(t){return t.theme.fontSizes.xl}),(function(t){return t.theme.fontWeights.bold}),(function(t){return t.theme.space[5]})),k=w.ZP.h2(i||(i=(0,b.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  margin-bottom: ","px;\n  \n"])),(function(t){return t.theme.colors.primaryText}),(function(t){return t.theme.fontSizes.m}),(function(t){return t.theme.fontWeights.bold}),(function(t){return t.theme.space[5]})),Z=w.ZP.p(a||(a=(0,b.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  margin-bottom: ","px;\n  margin-right: ","px;\n"])),(function(t){return t.theme.colors.black}),(function(t){return t.theme.fontSizes.m}),(function(t){return t.theme.fontWeights.normal}),(function(t){return t.theme.space[5]}),(function(t){return t.theme.space[9]})),F=w.ZP.section(c||(c=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  border-top: 1px solid black;\n \n"])),(function(t){return t.theme.space[6]}),(function(t){return t.theme.space[6]}),(function(t){return t.theme.space[6]})),P=w.ZP.h2(u||(u=(0,b.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  margin-bottom: ","px;\n"])),(function(t){return t.theme.colors.primaryText}),(function(t){return t.theme.fontSizes.l}),(function(t){return t.theme.fontWeights.bold}),(function(t){return t.theme.space[5]})),L=w.ZP.ul(s||(s=(0,b.Z)(["\n  display: flex;\n  gap: ","px;\n  margin-bottom: ","px;\n"])),(function(t){return t.theme.space[6]}),(function(t){return t.theme.space[6]})),E=(0,w.ZP)(j.OL)(l||(l=(0,b.Z)(["\n  padding-left: ","px;\n  padding-right: ","px;\n  padding-bottom: ","px;\n  padding-top: ","px;\n  border-radius: ",";\n  font-weight: 600;\n  font-size: ",";\n\n  &.active {\n    background-color: ",";\n    color: ",";\n  }\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(t){return t.theme.space[4]}),(function(t){return t.theme.space[4]}),(function(t){return t.theme.space[3]}),(function(t){return t.theme.space[3]}),(function(t){return t.theme.radii.normal}),(function(t){return t.theme.fontSizes.l}),(function(t){return t.theme.colors.secondaryText}),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.hoverColor}),(function(t){return t.theme.colors.white})),S=n(184),C=function(){var t,e,n=(0,h.useState)(null),r=(0,f.Z)(n,2),o=r[0],i=r[1],a=(0,h.useState)(null),c=(0,f.Z)(a,2),u=c[0],s=c[1],l=(0,p.UO)().movieId,d=null!==(t=null===(e=(0,p.TH)().state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/";return(0,h.useEffect)((function(){(0,m.Pg)(Number(l)).then((function(t){i(t),s(null)})).catch((function(t){console.log(t.status_message),s(t.status_message),i(null)}))}),[l]),(0,S.jsxs)("main",{children:[(0,S.jsx)(y.Z,{to:d,children:" Go back "}),!o&&u&&(0,S.jsx)(g.Z,{children:"Please reload the page."}),o&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(_,{children:[(0,S.jsx)("img",{src:m.Be+o.posterPath,alt:o.title,width:250}),(0,S.jsxs)(x.Z,{as:"div",display:"flex",flexDirection:"column",children:[(0,S.jsxs)(O,{children:[o.title," (",new Date(o.releaseDate).getFullYear(),")"]}),(0,S.jsxs)(Z,{children:[" User score: ",o.voteAverage.toFixed(1)]}),(0,S.jsx)(k,{children:"Overview"}),(0,S.jsx)(Z,{children:o.overview}),(0,S.jsx)(k,{children:"Genres: "}),o.genres.map((function(t){return t.name.toLowerCase()})).join(", ")]})]}),(0,S.jsxs)(F,{children:[(0,S.jsx)(P,{children:"Additional information"}),(0,S.jsxs)(L,{children:[(0,S.jsxs)("li",{children:[" ",(0,S.jsx)(E,{to:"cast",state:{from:d},children:"Cast"})]}),(0,S.jsxs)("li",{children:[" ",(0,S.jsx)(E,{to:"reviews",state:{from:d},children:"Reviews"})]})]}),(0,S.jsx)(h.Suspense,{fallback:(0,S.jsx)(v(),{loading:!0,color:"#35495e",cssOverride:{display:"block",margin:"0 auto"},height:150,"aria-label":"Loading Spinner"}),children:(0,S.jsx)(p.j3,{})})]})]})]})}},807:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,o)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return i(e,t),e},c=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var u=a(n(2791)),s=n(8945),l=n(7074),f=n(779),h=(0,l.createAnimation)("BarLoader","0% {left: -35%;right: 100%} 60% {left: 100%;right: -90%} 100% {left: 100%;right: -90%}","long"),p=(0,l.createAnimation)("BarLoader","0% {left: -200%;right: 100%} 60% {left: 107%;right: -8%} 100% {left: 107%;right: -8%}","short");e.default=function(t){var e=t.loading,n=void 0===e||e,o=t.color,i=void 0===o?"#000000":o,a=t.speedMultiplier,l=void 0===a?1:a,d=t.cssOverride,v=void 0===d?{}:d,m=t.height,g=void 0===m?4:m,y=t.width,x=void 0===y?100:y,b=c(t,["loading","color","speedMultiplier","cssOverride","height","width"]),w=r({display:"inherit",position:"relative",width:(0,s.cssValue)(x),height:(0,s.cssValue)(g),overflow:"hidden",backgroundColor:(0,f.calculateRgba)(i,.2),backgroundClip:"padding-box"},v),j=function(t){return{position:"absolute",height:(0,s.cssValue)(g),overflow:"hidden",backgroundColor:i,backgroundClip:"padding-box",display:"block",borderRadius:2,willChange:"left, right",animationFillMode:"forwards",animation:"".concat(1===t?h:p," ").concat(2.1/l,"s ").concat(2===t?"".concat(1.15/l,"s"):""," ").concat(1===t?"cubic-bezier(0.65, 0.815, 0.735, 0.395)":"cubic-bezier(0.165, 0.84, 0.44, 1)"," infinite")}};return n?u.createElement("span",r({style:w},b),u.createElement("span",{style:j(1)}),u.createElement("span",{style:j(2)})):null}},7074:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.createAnimation=void 0;e.createAnimation=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var o=document.createElement("style");document.head.appendChild(o);var i=o.sheet,a="\n    @keyframes ".concat(r," {\n      ").concat(e,"\n    }\n  ");return i&&i.insertRule(a,0),r}},779:function(t,e){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.calculateRgba=void 0,function(t){t.maroon="#800000",t.red="#FF0000",t.orange="#FFA500",t.yellow="#FFFF00",t.olive="#808000",t.green="#008000",t.purple="#800080",t.fuchsia="#FF00FF",t.lime="#00FF00",t.teal="#008080",t.aqua="#00FFFF",t.blue="#0000FF",t.navy="#000080",t.black="#000000",t.gray="#808080",t.silver="#C0C0C0",t.white="#FFFFFF"}(n||(n={}));e.calculateRgba=function(t,e){if(Object.keys(n).includes(t)&&(t=n[t]),"#"===t[0]&&(t=t.slice(1)),3===t.length){var r="";t.split("").forEach((function(t){r+=t,r+=t})),t=r}var o=(t.match(/.{2}/g)||[]).map((function(t){return parseInt(t,16)})).join(", ");return"rgba(".concat(o,", ").concat(e,")")}},8945:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.cssValue=e.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(t){if("number"===typeof t)return{value:t,unit:"px"};var e,r=(t.match(/^[0-9.]*/)||"").toString();e=r.includes(".")?parseFloat(r):parseInt(r,10);var o=(t.match(/[^0-9]*$/)||"").toString();return n[o]?{value:e,unit:o}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}e.parseLengthAndUnit=r,e.cssValue=function(t){var e=r(t);return"".concat(e.value).concat(e.unit)}}}]);
//# sourceMappingURL=609.8a5bf337.chunk.js.map