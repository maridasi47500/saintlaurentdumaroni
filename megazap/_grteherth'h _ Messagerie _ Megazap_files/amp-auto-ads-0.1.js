;
(self.AMP=self.AMP||[]).push({m:0,v:"2203172113000",n:"amp-auto-ads",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function i(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,r)}return i}function r(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?i(Object(e),!0).forEach((function(i){n(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}function u(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,n){if(t){if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=function(){var t=this;this.promise=new Promise((function(n,i){t.resolve=n,t.reject=i}))};function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,n){if(n&&("object"===f(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var l=Array.isArray;function d(t,n){var i=t.length-n.length;return i>=0&&t.indexOf(n,i)==i}var v=Object.prototype,p=(v.hasOwnProperty,v.toString);function m(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function g(t,n,i,r,e,u,o,a,c,s,f){return t}function b(t){return JSON.parse(t)}var y=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return n}}function S(t){var n,i=m();if(!t)return i;for(;n=y.exec(t);){var r=w(n[1],n[1]),e=n[2]?w(n[2].replace(/\+/g," "),n[2]):"";i[r]=e}return i}var A=self.AMP_CONFIG||{},j=("string"==typeof A.thirdPartyFrameRegex?new RegExp(A.thirdPartyFrameRegex):A.thirdPartyFrameRegex,("string"==typeof A.cdnProxyRegex?new RegExp(A.cdnProxyRegex):A.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function C(t){if(!self.document||!self.document.head)return null;if(self.location&&j.test(self.location.origin))return null;var n=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return n&&n.getAttribute("content")||null}A.thirdPartyUrl,A.thirdPartyFrameHost,A.cdnUrl||C("runtime-host"),A.errorReportingUrl,A.betaErrorReportingUrl,A.localDev,A.geoApiUrl||C("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var M=self.__AMP_LOG;function O(t,n){throw new Error("failed to call initLogConstructor")}function x(t){return M.user||(M.user=P()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(M.user.win,t)?M.userForEmbed||(M.userForEmbed=P()):M.user}function P(t){return O()}function k(t,n,i,r,e,u,o,a,c,s,f){return t}function E(t,n,i,r,e,u,o,a,c,s,f){return x().assert(t,n,i,r,e,u,o,a,c,s,f)}function I(t){return(t.ownerDocument||t).defaultView}function N(t,n){return _(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function R(t,n){return _((i=q(t),(r=q(i)).isSingleDoc()?r.win:r),n);var i,r}function q(t){return t.nodeType?(n=I(t),N(n,"ampdoc")).getAmpDoc(t):t;var n}function _(t,n){k(function(t,n){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}(t,n));var i=function(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return i.obj||(k(i.ctor),k(i.context),i.obj=new i.ctor(i.context),k(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}var T,D="__AMP__EXPERIMENT_TOGGLES";function U(t,n){return t.replace(/^|,/g,"$&".concat(n," "))}function z(t,n,i){return function(t,n){for(var i in n)t.setAttribute(i,n[i]);return t}(t.createElement(n),i)}var B=function(t){return R(t,"documentInfo").get()},F=function(t){return N(t,"extensions")},$=function(t){return R(t,"viewport")};function G(t,n,i,r){var e=[],u=r&&null!=r.value&&""!==r.value?encodeURIComponent(r.name)+"="+encodeURIComponent(String(r.value)):null,o=i-t.length;u&&(o-=u.length+1);for(var a=Object.keys(n),c=0;c<a.length;c++){var s=a[c],f=n[s];if(null!=f&&""!==f){var h=encodeURIComponent(s)+"=",l=encodeURIComponent(String(f)),d=h.length+l.length+1;if(d>o){var v=l.substr(0,o-h.length-1).replace(/%\w?$/,"");v&&e.push(h+v),u&&e.push(u);break}e.push(h+l),o-=d}}return e.length?t+"?"+e.join("&"):t}var Y="amp-auto-ads",K={"type":!0,"rtc-config":!0,"layout":!0,"height":!0,"width":!0,"sticky":!0},L="attributes";function X(t,n){return t[n]?(i=t[n],"[object Object]"!==p.call(i)||l(t[n])?(x().warn(Y,n+" property not an object"),{}):function(t){var n={};for(var i in t)if(K[i]||i.startsWith("data-")){var r=f(t[i]);"number"==r||"string"==r||"boolean"==r?n[i]=String(t[i]):x().warn(Y,"Attribute type not supported: "+r)}else x().warn(Y,"Attribute not whitlisted: "+i);return n}(t[n])):{};var i}var J,Z,H=function(){function t(t){this.pr=t,this.dr=0,this.mr=0,this.gr=m()}var n=t.prototype;return n.has=function(t){return!!this.gr[t]},n.get=function(t){var n=this.gr[t];if(n)return n.access=++this.mr,n.payload},n.put=function(t,n){this.has(t)||this.dr++,this.gr[t]={payload:n,access:this.mr},this.yr()},n.yr=function(){if(!(this.dr<=this.pr)){var t,n=this.gr,i=this.mr+1;for(var r in n){var e=n[r].access;e<i&&(i=e,t=r)}void 0!==t&&(delete n[t],this.dr--)}},t}();function Q(t,n){return J||(J=self.document.createElement("a"),Z=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new H(100))),function(t,n,i){if(i&&i.has(n))return i.get(n);t.href=n,t.protocol||(t.href=t.href);var r,e={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname),("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)&&(e.port="",e.host=e.hostname),r=t.origin&&"null"!=t.origin?t.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href,e.origin=r;var u=e;return i&&i.put(n,u),u}(J,t,n?null:Z)}new Set(["c","v","a","ad"]);var V=function(){function t(t){this.tS=t}var n=t.prototype;return n.isEnabled=function(){return!0},n.isResponsiveEnabled=function(){return!0},n.getConfigUrl=function(){var t=B(this.tS),n=Q(t.canonicalUrl).hostname,i=I(this.tS);return G("//pagead2.googlesyndication.com/getconfig/ama",{"client":this.tS.getAttribute("data-ad-client"),"plah":n,"ama_t":"amp","url":t.canonicalUrl,"debug_experiment_id":(/(?:#|,)deid=([\d,]+)/i.exec(i.location.hash)||[])[1]||null},4096)},n.filterConfig=function(t){return I(this.tS).adsbygoogle&&t.stickyAdAttributes&&(t.stickyAdAttributes["data-no-fill"]="true"),t},n.getAttributes=function(){var t={"type":"adsense","data-ad-client":this.tS.getAttribute("data-ad-client")},n=this.tS.getAttribute("data-ad-host"),i=this.tS.getAttribute("data-ad-host-channel");return n&&(t["data-ad-host"]=n,i&&(t["data-ad-host-channel"]=i)),t},n.getDefaultAdConstraints=function(){var t=$(this.tS).getSize().height;return{initialMinSpacing:t,subsequentMinSpacing:[{adCount:3,spacing:2*t},{adCount:6,spacing:3*t}],maxAdCount:8}},n.getSizing=function(){return{}},t}(),W=function(){function t(t){this.tS=t}var n=t.prototype;return n.isEnabled=function(){return!0},n.isResponsiveEnabled=function(){return!1},n.getConfigUrl=function(){var t=B(this.tS);return G("//analytics.alright.network/amp/",{"p":this.tS.getAttribute("data-publisher-id"),"t":this.tS.getAttribute("data-page-type"),"c":this.tS.getAttribute("data-content-category")||"","u":t.canonicalUrl,"w":window.screen.width,"h":window.screen.height},4096)},n.filterConfig=function(t){return t},n.getAttributes=function(){return{"width":300,"height":250,"layout":"responsive","data-multi-size-validation":"false","type":"doubleclick","data-ad":"alright"}},n.getDefaultAdConstraints=function(){var t=$(this.tS).getSize().height;return{initialMinSpacing:t,subsequentMinSpacing:[{adCount:3,spacing:2*t},{adCount:6,spacing:3*t}],maxAdCount:8}},n.getSizing=function(){return{width:300,height:250}},t}(),tt=function(){function t(t){this.tS=t}var n=t.prototype;return n.isEnabled=function(t){return!0},n.isResponsiveEnabled=function(){return!0},n.getConfigUrl=function(){var t=B(this.tS),n=this.tS.getAttribute("data-account-id");return n?G("https://v3.denakop.com/ad-request",{"a":n,"v":"amp","u":t.canonicalUrl},4096):G("//v2.denakop.com/ad-request/amp",{"p":this.tS.getAttribute("data-publisher-id"),"t":this.tS.getAttribute("data-tag-id"),"u":t.canonicalUrl},4096)},n.filterConfig=function(t){return t},n.getAttributes=function(){return{"data-multi-size-validation":"false","type":"doubleclick","data-ad":"denakop","style":"position:relative !important"}},n.getDefaultAdConstraints=function(){var t=$(this.tS).getSize().height;return{initialMinSpacing:t,subsequentMinSpacing:[{adCount:4,spacing:2*t},{adCount:8,spacing:3*t}],maxAdCount:20}},n.getSizing=function(){return{}},t}(),nt=function(){function t(t){this.tS=t}var n=t.prototype;return n.isEnabled=function(t){return!0},n.isResponsiveEnabled=function(){return!1},n.getConfigUrl=function(){var t=B(this.tS),n=Q(t.canonicalUrl).hostname;return G("//pagead2.googlesyndication.com/getconfig/ama",{"client":this.tS.getAttribute("data-ad-legacy-client"),"plah":n,"ama_t":"amp","url":t.canonicalUrl},4096)},n.filterConfig=function(t){return t},n.getAttributes=function(){return{"type":"doubleclick","data-slot":this.tS.getAttribute("data-slot"),"json":this.tS.getAttribute("data-json")}},n.getDefaultAdConstraints=function(){var t=$(this.tS).getSize().height;return{initialMinSpacing:t,subsequentMinSpacing:[{adCount:3,spacing:2*t},{adCount:6,spacing:3*t}],maxAdCount:8}},n.getSizing=function(){var t=function(t,n){try{return b(t)}catch(t){return null}}(this.tS.getAttribute("data-experiment"));return t?{height:t.height?Number(t.height):250,width:t.width?Number(t.width):void 0}:{}},t}(),it=function(){function t(t){this.tS=t,this.pvid64=0}var n=t.prototype;return n.isEnabled=function(t){return!0},n.isResponsiveEnabled=function(){return!1},n.getConfigUrl=function(){var t=this,n=0;B(this.tS).pageViewId64.then((function(n){t.pvid64=n}));var i=window.location,r=i.hash,e=i.host,u=i.pathname,o=i.search,a=Object.assign(S(r),S(o)),c=B(this.tS),s=u.match(/amp\/fi\/(\d+)\//);null!=s&&2==s.length&&(n=s[1]);var f=a.fi_reveal,h=a.fi_demand,l=a.fi_geo,d=a.disable_fi,v=a.fi_cdnhost||(n?e:"cdn.firstimpression.io"),p=a.fi_cdnpath||(n?"/amp-preview.php":"/delivery/amp.php"),m=this.tS.getAttribute("data-website-id"),g=this.tS.getAttribute("data-targeting"),b={"id":m,"url":c.canonicalUrl,"w":window.screen.width,"h":window.screen.height};return g&&(b.targeting=g),void 0!==f&&(b.fi_reveal=f),void 0!==h&&(b.fi_demand=h),l&&(b.fi_geo=l),d&&(b.disable_fi=d),n&&(b.preview_id=n),G("https://"+v+p,b,4096)},n.filterConfig=function(t){return t},n.getAttributes=function(){return{"type":"firstimpression","data-pvid64":this.pvid64}},n.getDefaultAdConstraints=function(){var t=$(this.tS).getSize().height;return{initialMinSpacing:t,subsequentMinSpacing:[{adCount:3,spacing:2*t},{adCount:6,spacing:3*t}],maxAdCount:8}},n.getSizing=function(){return{height:1}},t}(),rt=function(){function t(t){this.tS=t}var n=t.prototype;return n.isEnabled=function(){return!0},n.isResponsiveEnabled=function(){return!1},n.getConfigUrl=function(){var t=this.tS.dataset,n=t.host||"https://tags.premiumads.com.br";return G("".concat(n,"/autoads/").concat(t.publisher),{},4096)},n.filterConfig=function(t){return t},n.getAttributes=function(){var t=this.tS.dataset;return{"type":"doubleclick","data-ad":"premiumads","layout":t.layout||"fixed","style":t.style||"margin: 15px auto; position: relative !important; display: block !important;"}},n.getDefaultAdConstraints=function(){var t=$(this.tS).getSize().height;return{initialMinSpacing:t,subsequentMinSpacing:[{adCount:3,spacing:2*t},{adCount:6,spacing:3*t}],maxAdCount:8}},n.getSizing=function(){return{}},t}(),et=function(){function t(t){this.tS=t}var n=t.prototype;return n.isEnabled=function(t){var n=this.tS.getAttribute("data-website-id");return!(!n||!n.match(/^[0-9]+$/))},n.isResponsiveEnabled=function(){return!0},n.getConfigUrl=function(){var t=B(this.tS);return G("https://api.bounceexchange.com/bounce/amp",{"w_id":this.tS.getAttribute("data-website-id"),"calling_url":t.sourceUrl},4096)},n.filterConfig=function(t){return t},n.getAttributes=function(){return{"type":"wunderkind","data-ad":"wunderkind","layout":"responsive","height":"75vw","width":"100vw"}},n.getDefaultAdConstraints=function(){return{initialMinSpacing:$(this.tS).getSize().height,subsequentMinSpacing:[],maxAdCount:10}},n.getSizing=function(){return{}},t}();function ut(t){if(g(function(t){var n=t.tagName;return n.startsWith("AMP-")&&!("AMP-STICKY-AD-TOP-PADDING"==n||"AMP-BODY"==n)}(t)),t.createdCallback)return Promise.resolve(t);if(!t.__AMP_UPG_PRM){var n=new a;t.__AMP_UPG_PRM=n.promise,t.__AMP_UPG_RES=n.resolve}var i=t.__AMP_UPG_PRM;return g(i),i}function ot(t){return(n=I(t),N(n,"vsync")).measurePromise((function(){return function(t){for(var n=t.ownerDocument.body,i=0,r=0,e=t;e&&e!=n;e=e.offsetParent)i+=e.offsetLeft,r+=e.offsetTop;var u=t.offsetHeight;return function(t,n,i,r){return{left:t,top:n,width:i,height:r,bottom:n+r,right:t+i,x:t,y:n}}(i,r,t.offsetWidth,u)}(t)}));var n}var at="amp-auto-ads",ct=["AMP-SIDEBAR","AMP-APP-BANNER"],st={1:function(t,n){t.parentNode.insertBefore(n,t)},4:function(t,n){t.parentNode.insertBefore(n,t.nextSibling)},2:function(t,n){t.insertBefore(n,t.firstChild)},3:function(t,n){t.appendChild(n)}},ft=function(){function t(t,n,i,r,e,u){this.ampdoc=t,this.Aa=R(n,"mutator"),this.nS=n,this.iS=i,this.rS=r,this.eS=e,this.uS=u,this.oS=null,this.Pi=0}var n=t.prototype;return n.getAdElement=function(){return this.oS},n.getEstimatedPosition=function(){var t=this;return ot(this.nS).then((function(n){return t.aS(n)}))},n.aS=function(t){switch(this.iS){case 1:case 2:return t.top;case 3:case 4:return t.bottom;default:throw new Error("Unknown position")}},n.placeAd=function(t,n,i,r){var e=this;return this.getEstimatedPosition().then((function(u){return e.ampdoc.win.scrollY>u?(e.Pi=0,e.Pi):i.isTooNearAnAd(u).then((function(i){if(i)return e.Pi=3,e.Pi;var u=r&&e.cS(e.nS);return e.oS=u?e.sS(t):e.fS(t,n.width),e.rS(e.nS,e.getAdElement()),u?ut(e.getAdElement()).then((function(){return e.getAdElement().build()})).then((function(){var t=!e.getAdElement().classList.contains("i-amphtml-layout-awaiting-size");return e.Pi=t?2:1,e.Pi})):e.hS(n).then((function(t){return ut(e.getAdElement()).then((function(){return e.getAdElement().build()})).then((function(){return e.Aa.requestChangeSize(e.getAdElement(),t.height,t.width,t.margins)})).then((function(){return e.Pi=2,e.Pi}),(function(){return e.Pi=1,e.Pi}))}))}))}))},n.hS=function(t){return Promise.resolve({height:t.height||250,margins:this.uS})},n.fS=function(t,n){var i=r(r({"layout":n?"fixed":"fixed-height","height":"0","width":n||"auto","class":"i-amphtml-layout-awaiting-size"},t),this.eS);return z(this.ampdoc.win.document,"amp-ad",i)},n.sS=function(t){var n=r(r({"width":"100vw","height":"0","layout":"fixed","class":"i-amphtml-layout-awaiting-size","data-auto-format":"rspv","data-full-width":""},t),this.eS);return z(this.ampdoc.win.document,"amp-ad",n)},n.cS=function(t){return $(t).getSize().width<488},t}();function ht(t,n){var i=n.placements;if(!i)return x().info(at,"No placements in config"),[];var r=[];return i.forEach((function(n){!function(t,n,i){var r=st[n.pos];if(r){var e=n.anchor;if(e){var u=lt(t.getRootNode(),e);if(u.length){var o=void 0;if(n.style){var a=parseInt(n.style.top_m,10),c=parseInt(n.style.bot_m,10);(a||c)&&(o={top:a||void 0,bottom:c||void 0})}u.forEach((function(e){if(function(t,n){var i=1==n||4==n?t.parentElement:t;if(!i)return x().warn(at,"Parentless anchor with BEFORE/AFTER position."),!1;var r=i;return!ct.some((function(t){return i=t,!!((n=r).closest?n.closest(i):function(t,n,i){var r;for(r=t;r&&void 0!==r;r=r.parentElement)if(n(r))return r;return null}(n,(function(t){return function(t,n){var i=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!i&&i.call(t,n)}(t,i)})))&&(x().warn(at,"Placement inside denylisted ancestor: "+t),!0);var n,i}))}(e,n.pos)){var u=X(n,L);i.push(new ft(t,e,n.pos,r,u,o))}}))}else x().warn(at,"No anchor element found")}else x().warn(at,"No anchor in placement")}else x().warn(at,"No injector for position")}(t,n,r)})),r}function lt(t,n){var i=n.selector;if(!i)return x().warn(at,"No selector in anchor"),[];var r=[].slice.call(function(t,n){return(void 0!==T?T:T=function(t){try{var n=t.ownerDocument,i=n.createElement("div"),r=n.createElement("div");return i.appendChild(r),i.querySelector(":scope div")===r}catch(t){return!1}}(t))?t.querySelectorAll(U(n,":scope")):function(t,n){var i=t.classList,r="i-amphtml-scoped";i.add(r);var e=U(n,".".concat(r)),u=t.querySelectorAll(e);return i.remove(r),u}(t,n)}(t.documentElement||t,i)),e=n.min_c||0;if(e>0&&(r=r.filter((function(t){return t.textContent.length>=e}))),"number"==typeof n.index||!n.all){var u=r[n.index||0];r=u?[u]:[]}if(0==r.length)return[];if(n.sub){var o=[];return r.forEach((function(t){o=o.concat(lt(t,n.sub))})),o}return r}var dt=function(){function t(t,n,i,r){var e=arguments.length>4&&void 0!==arguments[4]&&arguments[4];this.lS=t.slice(0),this.dS=n,this.vS=i,this.pS=r,this.mS=0,this.gS=e}var n=t.prototype;return n.run=function(){var t,n=this;return this.pS.isMaxAdCountReached()?(t=function(){return n.bS()},new Promise((function(n){n(t())}))):this.yS().then((function(t){return t?n.run():n.bS()}))},n.bS=function(){return{adsPlaced:this.mS,totalAdsOnPage:this.pS.getAdCount()}},n.yS=function(){var t=this,n=this.lS.shift();return n?n.placeAd(this.dS,this.vS,this.pS,this.gS).then((function(i){return 2==i?(t.pS.addAd(n.getAdElement()),t.mS++,!0):t.yS()})):(x().info("amp-auto-ads","unable to fulfill ad strategy"),Promise.resolve(!1))},t}(),vt="amp-auto-ads",pt=function(){function t(t,n){this.wS=t,this.SS=n.initialMinSpacing,this.AS=n.subsequentMinSpacing.slice(0).sort((function(t,n){return t.adCount-n.adCount})),this.jS=n.maxAdCount,this.CS=this.MS()}var n=t.prototype;return n.addAd=function(t){this.wS.push(t),this.CS=this.MS()},n.getAdCount=function(){return this.wS.length},n.isMaxAdCountReached=function(){return this.getAdCount()>=this.jS},n.isTooNearAnAd=function(t){return this.OS(t,0)},n.OS=function(t,n){var i=this;return n>=this.wS.length?Promise.resolve(!1):this.xS(t,this.wS[n]).then((function(r){return r<i.CS||i.OS(t,n+1)}))},n.xS=function(t,n){return ot(n).then((function(n){return t>=n.top&&t<=n.bottom?0:Math.min(Math.abs(t-n.top),Math.abs(t-n.bottom))}))},n.MS=function(){for(var t=this.getAdCount(),n=this.SS,i=0;i<this.AS.length;i++){var r=this.AS[i];r.adCount<=t&&(n=r.spacing)}return n},t}();function mt(t,n){if(!t)return null;var i=parseFloat(t);return isNaN(i)||i<0?null:d(t,"px")?i:d(t,"vp")?i*n:null}var gt=function(){function t(t,n,i){this.ampdoc=t,this.dS=n,this.PS=i}var n=t.prototype;return n.run=function(){return this.kS()?(x().warn("amp-auto-ads","Auto ads may not work because of already existing <amp-sticky-ad>."),Promise.resolve(!1)):this.ES()?("top"===this.dS.sticky?(F(this.ampdoc.win).installExtensionForDoc(this.ampdoc,"amp-ad","0.1"),this.IS()):(F(this.ampdoc.win).installExtensionForDoc(this.ampdoc,"amp-sticky-ad","1.0"),this.NS()),Promise.resolve(!0)):Promise.resolve(!1)},n.kS=function(){return!!this.ampdoc.getRootNode().querySelector("amp-sticky-ad, amp-ad[sticky]")},n.ES=function(){return x().assertArray(this.PS.optInStatus||[]).includes(2)},n.IS=function(){var t=$(this.ampdoc).getWidth(),n=r(r({},this.dS),{},{"width":String(t),"height":this.dS.height||"100"}),i=z(this.ampdoc.win.document,"amp-ad",n),e=this.ampdoc.getBody();e.insertBefore(i,e.firstChild)},n.NS=function(){var t=this.dS,n=$(this.ampdoc).getWidth(),i=r(r({},t),{},{"width":String(n),"height":t.height||"100"});delete i.sticky;var e=this.ampdoc.win.document,u=z(e,"amp-ad",i),o=z(e,"amp-sticky-ad",{"layout":"nodisplay"});o.appendChild(u);var a=this.ampdoc.getBody();a.insertBefore(o,a.firstChild)},t}(),bt="amp-auto-ads",yt=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}(a,t);var n,i,e=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=s(n);if(i){var e=s(this).constructor;t=Reflect.construct(r,arguments,e)}else t=r.apply(this,arguments);return h(this,t)});function a(){return e.apply(this,arguments)}var f=a.prototype;return f.buildCallback=function(){var t=this,n=this.element.getAttribute("type");if(E(n,"Missing type attribute"),this.RS=function(t,n){return"adsense"==t?new V(n):"alright"==t?new W(n):"denakop"==t?new tt(n):"doubleclick"==t?new nt(n):"firstimpression.io"==t?new it(n):"premiumads"==t?new rt(n):"wunderkind"==t?new et(n):null}(n,this.element),E(this.RS,"No AdNetworkConfig for type: "+n),this.RS.isEnabled(this.win)){var i=this.getAmpDoc();F(this.win).installExtensionForDoc(i,"amp-ad"),this.qS=this.getAmpDoc().whenFirstVisible().then((function(){return t.RS.filterConfig(t._S(t.RS.getConfigUrl()))})),this.TS()||this.DS()}},f.isLayoutSupported=function(){return!0},f.layoutCallback=function(){return this.TS()?this.DS():o||(o=Promise.resolve(void 0))},f._S=function(t){var n,i=this;return(n=this.win,N(n,"xhr")).fetchJson(t,{mode:"cors",method:"GET",credentials:"omit"}).then((function(t){return t.json()})).catch((function(t){return i.user().error(bt,"amp-auto-ads config xhr failed: "+t),null}))},f.TS=function(){return t=this.win,n="auto-ads-layout-callback",i=function(t){var n,i,e,o,a;if(t[D])return t[D];t[D]=m();var c=t[D];g(c);var s=r(r({},null!==(n=t.AMP_CONFIG)&&void 0!==n?n:{}),null!==(i=t.AMP_EXP)&&void 0!==i?i:b((null===(e=t.__AMP_EXP)||void 0===e?void 0:e.textContent)||"{}"));for(var f in s){var h=s[f];"number"==typeof h&&h>=0&&h<=1&&(c[f]=Math.random()<h)}var d=null===(o=t.AMP_CONFIG)||void 0===o?void 0:o["allow-doc-opt-in"];if(l(d)&&d.length){var v=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(v)for(var p,y,w=u((null===(p=v.getAttribute("content"))||void 0===p?void 0:p.split(","))||[],!0);!(y=w()).done;){var A=y.value;d.includes(A)&&(c[A]=!0)}}Object.assign(c,function(t){var n,i="";try{var r;"localStorage"in t&&(i=null!==(r=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==r?r:"")}catch(t){(M.dev||(M.dev=O())).warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var e,o=(null===(n=i)||void 0===n?void 0:n.split(/\s*,\s*/g))||[],a=m(),c=u(o,!0);!(e=c()).done;){var s=e.value;s&&("-"==s[0]?a[s.substr(1)]=!1:a[s]=!0)}return a}(t));var j=null===(a=t.AMP_CONFIG)||void 0===a?void 0:a["allow-url-opt-in"];if(l(j)&&j.length)for(var C,x=S(t.location.originalHash||t.location.hash),P=u(j,!0);!(C=P()).done;){var k=C.value,E=x["e-".concat(k)];"1"==E&&(c[k]=!0),"0"==E&&(c[k]=!1)}return c}(t),!!i[n];var t,n,i},f.DS=function(){var t=this,n=this.getAmpDoc();return this.qS.then((function(i){if(i){var e=i.noConfigReason;e&&t.user().warn(bt,e);var u=ht(n,i),o=r(r({},t.RS.getAttributes()),X(i,L)),a=t.RS.getSizing(),c=function(t,n){var i=n.adConstraints;if(!i)return null;var r=$(t).getHeight(),e=mt(i.initialMinSpacing,r);if(null==e)return x().warn(vt,"Invalid initial min spacing"),null;var u=(i.subsequentMinSpacing||[]).map((function(t){var n=t.adCount;if(null==n)return x().warn(vt,"No subsequentMinSpacing adCount specified"),null;var i=mt(t.spacing,r);return null==i?(x().warn(vt,"Invalid subsequent min spacing"),null):{adCount:n,spacing:i}}));return-1!=u.indexOf(null)?null:null==i.maxAdCount?(x().warn(vt,"No maxAdCount specified"),null):{initialMinSpacing:e,subsequentMinSpacing:u,maxAdCount:i.maxAdCount}}(n,i)||t.RS.getDefaultAdConstraints(),s=new pt(function(t){return[].slice.call(t.getRootNode().querySelectorAll("AMP-AD")).filter((function(t){return!t.parentElement||"AMP-STICKY-AD"!=t.parentElement.tagName}))}(n),c);new dt(u,o,a,s,t.RS.isResponsiveEnabled()).run();var f=r(r({},o),X(i,"stickyAdAttributes"));new gt(n,f,i).run()}}))},a}(t.BaseElement);t.registerElement(bt,yt)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-auto-ads-0.1.js.map