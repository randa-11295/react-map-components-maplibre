(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1262:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,c,l,u;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(c=s;0!=c--;)if(!e(t[c],a[c]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!e(c.value[1],a.get(c.value[0])))return!1;return!0}if(o&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((s=t.length)!=a.length)return!1;for(c=s;0!=c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((s=(l=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(r&&t instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!t.$$typeof)&&!e(t[l[c]],a[l[c]]))return!1;return!0}return t!=t&&a!=a}(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},1263:function(e,t,r){"use strict";var n=function(){};e.exports=n},643:function(e,t,r){"use strict";r.r(t),r.d(t,"WithTooltipPure",(function(){return Ge})),r.d(t,"WithToolTipState",(function(){return Ke})),r.d(t,"WithTooltip",(function(){return Ke}));r(21),r(47),r(35),r(11),r(22),r(17),r(15),r(30),r(23),r(24),r(13),r(38),r(25),r(51);var n=r(0),o=r.n(n),i=r(4),a=r(8),s=r.n(a),c=r(6),l=r(2),u=r(119),f=r(140),p=n.createContext(),d=n.createContext();function h(e){var t=e.children,r=n.useState(null),o=r[0],i=r[1],a=n.useRef(!1);n.useEffect((function(){return function(){a.current=!0}}),[]);var s=n.useCallback((function(e){a.current||i(e)}),[]);return n.createElement(p.Provider,{value:o},n.createElement(d.Provider,{value:s},t))}var m=function(e){return Array.isArray(e)?e[0]:e},g=function(e){if("function"==typeof e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},v=function(e,t){if("function"==typeof e)return g(e,t);null!=e&&(e.current=t)},y=function(e){return e.reduce((function(e,t){var r=t[0],n=t[1];return e[r]=n,e}),{})},b="undefined"!=typeof window&&window.document&&window.document.createElement?n.useLayoutEffect:n.useEffect;function w(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function O(e){return e instanceof w(e).Element||e instanceof Element}function x(e){return e instanceof w(e).HTMLElement||e instanceof HTMLElement}function k(e){return"undefined"!=typeof ShadowRoot&&(e instanceof w(e).ShadowRoot||e instanceof ShadowRoot)}var C=Math.max,T=Math.min,j=Math.round;function E(e,t){void 0===t&&(t=!1);var r=e.getBoundingClientRect(),n=1,o=1;if(x(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(n=j(r.width)/a||1),i>0&&(o=j(r.height)/i||1)}return{width:r.width/n,height:r.height/o,top:r.top/o,right:r.right/n,bottom:r.bottom/o,left:r.left/n,x:r.left/n,y:r.top/o}}function R(e){var t=w(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function P(e){return e?(e.nodeName||"").toLowerCase():null}function S(e){return((O(e)?e.ownerDocument:e.document)||window.document).documentElement}function A(e){return E(S(e)).left+R(e).scrollLeft}function H(e){return w(e).getComputedStyle(e)}function M(e){var t=H(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function B(e,t,r){void 0===r&&(r=!1);var n,o,i=x(t),a=x(t)&&function(e){var t=e.getBoundingClientRect(),r=j(t.width)/e.offsetWidth||1,n=j(t.height)/e.offsetHeight||1;return 1!==r||1!==n}(t),s=S(t),c=E(e,a),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!r)&&(("body"!==P(t)||M(s))&&(l=(n=t)!==w(n)&&x(n)?{scrollLeft:(o=n).scrollLeft,scrollTop:o.scrollTop}:R(n)),x(t)?((u=E(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=A(s))),{x:c.left+l.scrollLeft-u.x,y:c.top+l.scrollTop-u.y,width:c.width,height:c.height}}function L(e){var t=E(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function D(e){return"html"===P(e)?e:e.assignedSlot||e.parentNode||(k(e)?e.host:null)||S(e)}function W(e,t){var r;void 0===t&&(t=[]);var n=function e(t){return["html","body","#document"].indexOf(P(t))>=0?t.ownerDocument.body:x(t)&&M(t)?t:e(D(t))}(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=w(n),a=o?[i].concat(i.visualViewport||[],M(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(W(D(a)))}function V(e){return["table","td","th"].indexOf(P(e))>=0}function U(e){return x(e)&&"fixed"!==H(e).position?e.offsetParent:null}function F(e){for(var t=w(e),r=U(e);r&&V(r)&&"static"===H(r).position;)r=U(r);return r&&("html"===P(r)||"body"===P(r)&&"static"===H(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&x(e)&&"fixed"===H(e).position)return null;for(var r=D(e);x(r)&&["html","body"].indexOf(P(r))<0;){var n=H(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}var N=r(640);function z(e){var t=new Map,r=new Set,n=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||function e(o){r.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(n){if(!r.has(n)){var o=t.get(n);o&&e(o)}})),n.push(o)}(e)})),n}var X={placement:"bottom",modifiers:[],strategy:"absolute"};function Y(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function q(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?X:o;return function(e,t,r){void 0===r&&(r=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},X,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,u={state:s,setOptions:function(r){var o="function"==typeof r?r(s.options):r;f(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:O(e)?W(e):e.contextElement?W(e.contextElement):[],popper:W(t)};var a=function(e){var t=z(e);return N.g.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}(function(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,s.options.modifiers)));return s.orderedModifiers=a.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:u,options:n});c.push(i||function(){})}})),u.update()},forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,r=e.popper;if(Y(t,r)){s.rects={reference:B(t,F(r),"fixed"===s.options.strategy),popper:L(r)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var o=s.orderedModifiers[n],i=o.fn,a=o.options,c=void 0===a?{}:a,f=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:f,instance:u})||s)}else s.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){f(),l=!0}};if(!Y(e,t))return u;function f(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!l&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var I={passive:!0};function _(e){return e.split("-")[0]}function $(e){return e.split("-")[1]}function J(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function G(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?_(o):null,a=o?$(o):null,s=r.x+r.width/2-n.width/2,c=r.y+r.height/2-n.height/2;switch(i){case N.m:t={x:s,y:r.y-n.height};break;case N.c:t={x:s,y:r.y+r.height};break;case N.k:t={x:r.x+r.width,y:c};break;case N.f:t={x:r.x-n.width,y:c};break;default:t={x:r.x,y:r.y}}var l=i?J(i):null;if(null!=l){var u="y"===l?"height":"width";switch(a){case N.l:t[l]=t[l]-(r[u]/2-n[u]/2);break;case N.e:t[l]=t[l]+(r[u]/2-n[u]/2)}}return t}var K={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Q(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,f=e.isFixed,p=a.x,d=void 0===p?0:p,h=a.y,m=void 0===h?0:h,g="function"==typeof u?u({x:d,y:m}):{x:d,y:m};d=g.x,m=g.y;var v=a.hasOwnProperty("x"),y=a.hasOwnProperty("y"),b=N.f,O=N.m,x=window;if(l){var k=F(r),C="clientHeight",T="clientWidth";if(k===w(r)&&"static"!==H(k=S(r)).position&&"absolute"===s&&(C="scrollHeight",T="scrollWidth"),k=k,o===N.m||(o===N.f||o===N.k)&&i===N.e)O=N.c,m-=(f&&x.visualViewport?x.visualViewport.height:k[C])-n.height,m*=c?1:-1;if(o===N.f||(o===N.m||o===N.c)&&i===N.e)b=N.k,d-=(f&&x.visualViewport?x.visualViewport.width:k[T])-n.width,d*=c?1:-1}var E,R=Object.assign({position:s},l&&K),P=!0===u?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:j(t*n)/n||0,y:j(r*n)/n||0}}({x:d,y:m}):{x:d,y:m};return d=P.x,m=P.y,c?Object.assign({},R,((E={})[O]=y?"0":"",E[b]=v?"0":"",E.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+m+"px)":"translate3d("+d+"px, "+m+"px, 0)",E)):Object.assign({},R,((t={})[O]=y?m+"px":"",t[b]=v?d+"px":"",t.transform="",t))}var Z={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,(function(e){return Z[e]}))}var te={start:"end",end:"start"};function re(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function ne(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&k(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function oe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ie(e,t){return t===N.o?oe(function(e){var t=w(e),r=S(e),n=t.visualViewport,o=r.clientWidth,i=r.clientHeight,a=0,s=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,s=n.offsetTop)),{width:o,height:i,x:a+A(e),y:s}}(e)):O(t)?function(e){var t=E(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):oe(function(e){var t,r=S(e),n=R(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=C(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=C(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+A(e),c=-n.scrollTop;return"rtl"===H(o||r).direction&&(s+=C(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(S(e)))}function ae(e,t,r){var n="clippingParents"===t?function(e){var t=W(D(e)),r=["absolute","fixed"].indexOf(H(e).position)>=0&&x(e)?F(e):e;return O(r)?t.filter((function(e){return O(e)&&ne(e,r)&&"body"!==P(e)})):[]}(e):[].concat(t),o=[].concat(n,[r]),i=o[0],a=o.reduce((function(t,r){var n=ie(e,r);return t.top=C(n.top,t.top),t.right=T(n.right,t.right),t.bottom=T(n.bottom,t.bottom),t.left=C(n.left,t.left),t}),ie(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function se(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ce(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}function le(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,i=r.boundary,a=void 0===i?N.d:i,s=r.rootBoundary,c=void 0===s?N.o:s,l=r.elementContext,u=void 0===l?N.i:l,f=r.altBoundary,p=void 0!==f&&f,d=r.padding,h=void 0===d?0:d,m=se("number"!=typeof h?h:ce(h,N.b)),g=u===N.i?N.j:N.i,v=e.rects.popper,y=e.elements[p?g:u],b=ae(O(y)?y:y.contextElement||S(e.elements.popper),a,c),w=E(e.elements.reference),x=G({reference:w,element:v,strategy:"absolute",placement:o}),k=oe(Object.assign({},v,x)),C=u===N.i?k:w,T={top:b.top-C.top+m.top,bottom:C.bottom-b.bottom+m.bottom,left:b.left-C.left+m.left,right:C.right-b.right+m.right},j=e.modifiersData.offset;if(u===N.i&&j){var R=j[o];Object.keys(T).forEach((function(e){var t=[N.k,N.c].indexOf(e)>=0?1:-1,r=[N.m,N.c].indexOf(e)>=0?"y":"x";T[e]+=R[r]*t}))}return T}function ue(e,t,r){return C(e,T(t,r))}function fe(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function pe(e){return[N.m,N.k,N.c,N.f].some((function(t){return e[t]>=0}))}var de=q({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,c=w(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach((function(e){e.addEventListener("scroll",r.update,I)})),s&&c.addEventListener("resize",r.update,I),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",r.update,I)})),s&&c.removeEventListener("resize",r.update,I)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=G({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=r.roundOffsets,c=void 0===s||s,l={placement:_(t.placement),variation:$(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Q(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Q(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];x(o)&&P(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});x(n)&&P(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=N.h.reduce((function(e,r){return e[r]=function(e,t,r){var n=_(e),o=[N.f,N.m].indexOf(n)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[N.f,N.k].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(r,t.rects,i),e}),{}),s=a[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,c=r.fallbackPlacements,l=r.padding,u=r.boundary,f=r.rootBoundary,p=r.altBoundary,d=r.flipVariations,h=void 0===d||d,m=r.allowedAutoPlacements,g=t.options.placement,v=_(g),y=c||(v===g||!h?[ee(g)]:function(e){if(_(e)===N.a)return[];var t=ee(e);return[re(e),t,re(t)]}(g)),b=[g].concat(y).reduce((function(e,r){return e.concat(_(r)===N.a?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,l=void 0===c?N.h:c,u=$(n),f=u?s?N.n:N.n.filter((function(e){return $(e)===u})):N.b,p=f.filter((function(e){return l.indexOf(e)>=0}));0===p.length&&(p=f);var d=p.reduce((function(t,r){return t[r]=le(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[_(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:u,rootBoundary:f,padding:l,flipVariations:h,allowedAutoPlacements:m}):r)}),[]),w=t.rects.reference,O=t.rects.popper,x=new Map,k=!0,C=b[0],T=0;T<b.length;T++){var j=b[T],E=_(j),R=$(j)===N.l,P=[N.m,N.c].indexOf(E)>=0,S=P?"width":"height",A=le(t,{placement:j,boundary:u,rootBoundary:f,altBoundary:p,padding:l}),H=P?R?N.k:N.f:R?N.c:N.m;w[S]>O[S]&&(H=ee(H));var M=ee(H),B=[];if(i&&B.push(A[E]<=0),s&&B.push(A[H]<=0,A[M]<=0),B.every((function(e){return e}))){C=j,k=!1;break}x.set(j,B)}if(k)for(var L=function(e){var t=b.find((function(t){var r=x.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return C=t,"break"},D=h?3:1;D>0;D--){if("break"===L(D))break}t.placement!==C&&(t.modifiersData[n]._skip=!0,t.placement=C,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,c=r.boundary,l=r.rootBoundary,u=r.altBoundary,f=r.padding,p=r.tether,d=void 0===p||p,h=r.tetherOffset,m=void 0===h?0:h,g=le(t,{boundary:c,rootBoundary:l,padding:f,altBoundary:u}),v=_(t.placement),y=$(t.placement),b=!y,w=J(v),O="x"===w?"y":"x",x=t.modifiersData.popperOffsets,k=t.rects.reference,j=t.rects.popper,E="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,R="number"==typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(x){if(i){var A,H="y"===w?N.m:N.f,M="y"===w?N.c:N.k,B="y"===w?"height":"width",D=x[w],W=D+g[H],V=D-g[M],U=d?-j[B]/2:0,z=y===N.l?k[B]:j[B],X=y===N.l?-j[B]:-k[B],Y=t.elements.arrow,q=d&&Y?L(Y):{width:0,height:0},I=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=I[H],K=I[M],Q=ue(0,k[B],q[B]),Z=b?k[B]/2-U-Q-G-R.mainAxis:z-Q-G-R.mainAxis,ee=b?-k[B]/2+U+Q+K+R.mainAxis:X+Q+K+R.mainAxis,te=t.elements.arrow&&F(t.elements.arrow),re=te?"y"===w?te.clientTop||0:te.clientLeft||0:0,ne=null!=(A=null==P?void 0:P[w])?A:0,oe=D+ee-ne,ie=ue(d?T(W,D+Z-ne-re):W,D,d?C(V,oe):V);x[w]=ie,S[w]=ie-D}if(s){var ae,se="x"===w?N.m:N.f,ce="x"===w?N.c:N.k,fe=x[O],pe="y"===O?"height":"width",de=fe+g[se],he=fe-g[ce],me=-1!==[N.m,N.f].indexOf(v),ge=null!=(ae=null==P?void 0:P[O])?ae:0,ve=me?de:fe-k[pe]-j[pe]-ge+R.altAxis,ye=me?fe+k[pe]+j[pe]-ge-R.altAxis:he,be=d&&me?function(e,t,r){var n=ue(e,t,r);return n>r?r:n}(ve,fe,ye):ue(d?ve:de,fe,d?ye:he);x[O]=be,S[O]=be-fe}t.modifiersData[n]=S}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=_(r.placement),c=J(s),l=[N.f,N.k].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return se("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ce(e,N.b))}(o.padding,r),f=L(i),p="y"===c?N.m:N.f,d="y"===c?N.c:N.k,h=r.rects.reference[l]+r.rects.reference[c]-a[c]-r.rects.popper[l],m=a[c]-r.rects.reference[c],g=F(i),v=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,y=h/2-m/2,b=u[p],w=v-f[l]-u[d],O=v/2-f[l]/2+y,x=ue(b,O,w),k=c;r.modifiersData[n]=((t={})[k]=x,t.centerOffset=x-O,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&ne(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=le(t,{elementContext:"reference"}),s=le(t,{altBoundary:!0}),c=fe(a,n),l=fe(s,o,i),u=pe(c),f=pe(l);t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}}]}),he=r(1262),me=r.n(he),ge=[],ve=function(){},ye=function(){return Promise.resolve(null)},be=[];function we(e){var t=e.placement,r=void 0===t?"bottom":t,o=e.strategy,i=void 0===o?"absolute":o,a=e.modifiers,s=void 0===a?be:a,c=e.referenceElement,l=e.onFirstUpdate,u=e.innerRef,f=e.children,d=n.useContext(p),h=n.useState(null),g=h[0],w=h[1],O=n.useState(null),x=O[0],k=O[1];n.useEffect((function(){v(u,g)}),[u,g]);var C=n.useMemo((function(){return{placement:r,strategy:i,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:null!=x,options:{element:x}}])}}),[r,i,l,s,x]),T=function(e,t,r){void 0===r&&(r={});var o=n.useRef(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||ge},a=n.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],c=a[1],l=n.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,r=Object.keys(t.elements);c({styles:y(r.map((function(e){return[e,t.styles[e]||{}]}))),attributes:y(r.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),u=n.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[l,{name:"applyStyles",enabled:!1}])};return me()(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,l]),f=n.useRef();return b((function(){f.current&&f.current.setOptions(u)}),[u]),b((function(){if(null!=e&&null!=t){var n=(r.createPopper||de)(e,t,u);return f.current=n,function(){n.destroy(),f.current=null}}}),[e,t,r.createPopper]),{state:f.current?f.current.state:null,styles:s.styles,attributes:s.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}}(c||d,g,C),j=T.state,E=T.styles,R=T.forceUpdate,P=T.update,S=n.useMemo((function(){return{ref:w,style:E.popper,placement:j?j.placement:r,hasPopperEscaped:j&&j.modifiersData.hide?j.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:j&&j.modifiersData.hide?j.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:E.arrow,ref:k},forceUpdate:R||ve,update:P||ye}}),[w,k,r,j,E,P,R]);return m(f)(S)}var Oe=r(1263),xe=r.n(Oe);function ke(e){var t=e.children,r=e.innerRef,o=n.useContext(d),i=n.useCallback((function(e){v(r,e),g(o,e)}),[r,o]);return n.useEffect((function(){return function(){return v(r,null)}})),n.useEffect((function(){xe()(Boolean(o),"`Reference` should not be used outside of a `Manager` component.")}),[o]),m(t)({ref:i})}var Ce=o.a.createContext({}),Te=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.forEach((function(e){return e&&e.apply(void 0,r)}))}},je=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)},Ee=function(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)},Re=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).observer=void 0,t.tooltipRef=void 0,t.handleOutsideClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.handleOutsideRightClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideRightClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.addOutsideClickHandler=function(){document.body.addEventListener("touchend",t.handleOutsideClick),document.body.addEventListener("click",t.handleOutsideClick)},t.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",t.handleOutsideClick),document.body.removeEventListener("click",t.handleOutsideClick)},t.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",t.handleOutsideRightClick)},t.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",t.handleOutsideRightClick)},t.getTooltipRef=function(e){t.tooltipRef=e,Ee(t.props.innerRef,e)},t.getArrowProps=function(e){return void 0===e&&(e={}),Object(l.a)({},e,{style:Object(l.a)({},e.style,t.props.arrowProps.style)})},t.getTooltipProps=function(e){return void 0===e&&(e={}),Object(l.a)({},e,t.isTriggeredBy("hover")&&{onMouseEnter:Te(t.props.clearScheduled,e.onMouseEnter),onMouseLeave:Te(t.props.hideTooltip,e.onMouseLeave)},{style:Object(l.a)({},e.style,t.props.style)})},t.contextValue={isParentNoneTriggered:"none"===t.props.trigger,addParentOutsideClickHandler:t.addOutsideClickHandler,addParentOutsideRightClickHandler:t.addOutsideRightClickHandler,parentOutsideClickHandler:t.handleOutsideClick,parentOutsideRightClickHandler:t.handleOutsideRightClick,removeParentOutsideClickHandler:t.removeOutsideClickHandler,removeParentOutsideRightClickHandler:t.removeOutsideRightClickHandler},t}Object(u.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;if((this.observer=new MutationObserver((function(){e.props.update()}))).observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var t=this.context,r=t.removeParentOutsideClickHandler,n=t.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),r&&r(),n&&n()}},r.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},r.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var e=this.context,t=e.isParentNoneTriggered,r=e.addParentOutsideClickHandler,n=e.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!t&&r&&r(),!t&&n&&n()}},r.render=function(){var e=this.props,t=e.arrowProps,r=e.placement,n=e.tooltip;return o.a.createElement(Ce.Provider,{value:this.contextValue},n({arrowRef:t.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:r,tooltipRef:this.getTooltipRef}))},r.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(n.Component);Re.contextType=Ce;var Pe=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={tooltipShown:t.props.defaultTooltipShown},t.hideTimeout=void 0,t.showTimeout=void 0,t.popperOffset=void 0,t.setTooltipState=function(e){var r=function(){return t.props.onVisibilityChange(e.tooltipShown)};t.isControlled()?r():t.setState(e,r)},t.clearScheduled=function(){clearTimeout(t.hideTimeout),clearTimeout(t.showTimeout)},t.showTooltip=function(e){var r=e.pageX,n=e.pageY;t.clearScheduled();var o={tooltipShown:!0};t.props.followCursor&&(o=Object(l.a)({},o,{pageX:r,pageY:n})),t.showTimeout=window.setTimeout((function(){return t.setTooltipState(o)}),t.props.delayShow)},t.hideTooltip=function(){t.clearScheduled(),t.hideTimeout=window.setTimeout((function(){return t.setTooltipState({tooltipShown:!1})}),t.props.delayHide)},t.toggleTooltip=function(e){var r=e.pageX,n=e.pageY,o=t.getState()?"hideTooltip":"showTooltip";t[o]({pageX:r,pageY:n})},t.clickToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.contextMenuToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.getTriggerProps=function(e){return void 0===e&&(e={}),Object(l.a)({},e,t.isTriggeredBy("click")&&{onClick:Te(t.clickToggle,e.onClick),onTouchEnd:Te(t.clickToggle,e.onTouchEnd)},t.isTriggeredBy("right-click")&&{onContextMenu:Te(t.contextMenuToggle,e.onContextMenu)},t.isTriggeredBy("hover")&&Object(l.a)({onMouseEnter:Te(t.showTooltip,e.onMouseEnter),onMouseLeave:Te(t.hideTooltip,e.onMouseLeave)},t.props.followCursor&&{onMouseMove:Te(t.showTooltip,e.onMouseMove)}),t.isTriggeredBy("focus")&&{onFocus:Te(t.showTooltip,e.onFocus),onBlur:Te(t.hideTooltip,e.onBlur)})},t}Object(u.a)(t,e);var r=t.prototype;return r.componentWillUnmount=function(){this.clearScheduled()},r.render=function(){var e=this,t=this.props,r=t.children,n=t.tooltip,i=t.placement,a=t.trigger,s=t.getTriggerRef,u=t.modifiers,p=t.closeOnReferenceHidden,d=t.usePortal,m=t.portalContainer,g=t.followCursor,v=t.getTooltipRef,y=t.mutationObserverOptions,b=Object(c.a)(t,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),w=o.a.createElement(we,Object(l.a)({innerRef:v,placement:i,modifiers:[{name:"followCursor",enabled:g,phase:"main",fn:function(t){e.popperOffset=t.state.rects.popper}}].concat(u)},b),(function(t){var r=t.ref,i=t.style,s=t.placement,c=t.arrowProps,u=t.isReferenceHidden,f=t.update;if(g&&e.popperOffset){var d=e.state,h=d.pageX,m=d.pageY,v=e.popperOffset,b=v.width,w=v.height,O=h+b>window.pageXOffset+document.body.offsetWidth?h-b:h,x=m+w>window.pageYOffset+document.body.offsetHeight?m-w:m;i.transform="translate3d("+O+"px, "+x+"px, 0"}return o.a.createElement(Re,Object(l.a)({arrowProps:c,closeOnReferenceHidden:p,isReferenceHidden:u,placement:s,update:f,style:i,tooltip:n,trigger:a,mutationObserverOptions:y},{clearScheduled:e.clearScheduled,hideTooltip:e.hideTooltip,innerRef:r}))}));return o.a.createElement(h,null,o.a.createElement(ke,{innerRef:s},(function(t){var n=t.ref;return r({getTriggerProps:e.getTriggerProps,triggerRef:n})})),this.getState()&&(d?Object(f.createPortal)(w,m):w))},r.isControlled=function(){return void 0!==this.props.tooltipShown},r.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},r.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(n.Component);Pe.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:function(){},placement:"right",portalContainer:je()?document.body:null,trigger:"hover",usePortal:je(),mutationObserverOptions:{childList:!0,subtree:!0},modifiers:[]};var Se=Pe,Ae=(r(89),r(45),r(216),r(36),r(175)),He=r.n(Ae),Me=r(139);function Be(){return(Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Le(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var De,We,Ve=He()(1e3)((function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t.split("-")[0]===e?r:n})),Ue=i.styled.div({position:"absolute",borderStyle:"solid"},(function(e){var t=e.placement,r=0,n=0;switch(!0){case t.startsWith("left")||t.startsWith("right"):n=8;break;case t.startsWith("top")||t.startsWith("bottom"):r=8}return{transform:"translate3d(".concat(r,"px, ").concat(n,"px, 0px)")}}),(function(e){var t=e.theme,r=e.color,n=e.placement;return{bottom:"".concat(Ve("top",n,-8,"auto"),"px"),top:"".concat(Ve("bottom",n,-8,"auto"),"px"),right:"".concat(Ve("left",n,-8,"auto"),"px"),left:"".concat(Ve("right",n,-8,"auto"),"px"),borderBottomWidth:"".concat(Ve("top",n,"0",8),"px"),borderTopWidth:"".concat(Ve("bottom",n,"0",8),"px"),borderRightWidth:"".concat(Ve("left",n,"0",8),"px"),borderLeftWidth:"".concat(Ve("right",n,"0",8),"px"),borderTopColor:Ve("top",n,t.color[r]||r||"light"===t.base?Object(Me.c)(t.background.app):Object(Me.a)(t.background.app),"transparent"),borderBottomColor:Ve("bottom",n,t.color[r]||r||"light"===t.base?Object(Me.c)(t.background.app):Object(Me.a)(t.background.app),"transparent"),borderLeftColor:Ve("left",n,t.color[r]||r||"light"===t.base?Object(Me.c)(t.background.app):Object(Me.a)(t.background.app),"transparent"),borderRightColor:Ve("right",n,t.color[r]||r||"light"===t.base?Object(Me.c)(t.background.app):Object(Me.a)(t.background.app),"transparent")}})),Fe=i.styled.div((function(e){return{display:e.hidden?"none":"inline-block",zIndex:2147483647}}),(function(e){var t=e.theme,r=e.color;return e.hasChrome?{background:t.color[r]||r||"light"===t.base?Object(Me.c)(t.background.app):Object(Me.a)(t.background.app),filter:"\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ",borderRadius:2*t.appBorderRadius,fontSize:t.typography.size.s1}:{}})),Ne=function(e){var t=e.placement,r=e.hasChrome,n=e.children,i=e.arrowProps,a=e.tooltipRef,s=e.arrowRef,c=e.color,l=Le(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return o.a.createElement(Fe,Be({hasChrome:r,placement:t,ref:a},l,{color:c}),r&&o.a.createElement(Ue,Be({placement:t,ref:s},i,{color:c})),n)};function ze(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Xe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Xe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Xe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ye(){return(Ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function qe(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Ie(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Ne.displayName="Tooltip",Ne.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var _e=s.a.document,$e=i.styled.div(De||(De=Ie(["\n  display: inline-block;\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),Je=i.styled.g(We||(We=Ie(["\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),Ge=function(e){var t=e.svg,r=e.trigger,n=(e.closeOnClick,e.placement),i=e.modifiers,a=e.hasChrome,s=e.tooltip,c=e.children,l=e.tooltipShown,u=e.onVisibilityChange,f=qe(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),p=t?Je:$e;return o.a.createElement(Se,{placement:n,trigger:r,modifiers:i,tooltipShown:l,onVisibilityChange:u,tooltip:function(e){var t=e.getTooltipProps,r=e.getArrowProps,n=e.tooltipRef,i=e.arrowRef,c=e.placement;return o.a.createElement(Ne,Ye({hasChrome:a,placement:c,tooltipRef:n,arrowRef:i,arrowProps:r()},t()),"function"==typeof s?s({onHide:function(){return u(!1)}}):s)}},(function(e){var t=e.getTriggerProps,r=e.triggerRef;return o.a.createElement(p,Ye({ref:r},t(),f),c)}))};Ge.displayName="WithTooltipPure",Ge.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var Ke=function(e){var t=e.startOpen,r=e.onVisibilityChange,i=qe(e,["startOpen","onVisibilityChange"]),a=ze(Object(n.useState)(t||!1),2),s=a[0],c=a[1],l=Object(n.useCallback)((function(e){r&&!1===r(e)||c(e)}),[r]);return Object(n.useEffect)((function(){var e=function(){return l(!1)};_e.addEventListener("keydown",e,!1);var t=Array.from(_e.getElementsByTagName("iframe")),r=[];return t.forEach((function(t){var n=function(){try{t.contentWindow.document&&(t.contentWindow.document.addEventListener("click",e),r.push((function(){try{t.contentWindow.document.removeEventListener("click",e)}catch(e){}})))}catch(e){}};n(),t.addEventListener("load",n),r.push((function(){t.removeEventListener("load",n)}))})),function(){_e.removeEventListener("keydown",e),r.forEach((function(e){e()}))}})),o.a.createElement(Ge,Ye({},i,{tooltipShown:s,onVisibilityChange:l}))};Ke.displayName="WithToolTipState"}}]);
//# sourceMappingURL=1.ee4d872e.iframe.bundle.js.map