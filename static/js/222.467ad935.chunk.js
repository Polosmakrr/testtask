"use strict";(self.webpackChunktesttask=self.webpackChunktesttask||[]).push([[222],{4222:function(e,t,n){n.d(t,{Ix:function(){return S},Am:function(){return V}});var o=n(4942),r=n(1413);function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=n(885),s=n(907);var c=n(181);function u(e){return function(e){if(Array.isArray(e))return(0,s.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,c.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n(2791);function d(e){var t,n,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=d(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function f(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=d(e))&&(o&&(o+=" "),o+=t);return o}var p=["delay","staleId"],m=["theme","type"];function v(e){return"number"==typeof e&&!isNaN(e)}function g(e){return"boolean"==typeof e}function y(e){return"string"==typeof e}function h(e){return"function"==typeof e}function T(e){return y(e)||h(e)?e:null}function E(e){return 0===e||e}function b(e){return(0,l.isValidElement)(e)||y(e)||h(e)||v(e)}var C={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},I={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function _(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var o=e.children,a=e.position,s=e.preventExitTransition,u=e.done,d=e.nodeRef,f=e.isIn,p=r?t+"--"+a:t,m=r?n+"--"+a:n,v=(0,l.useRef)(),g=(0,l.useRef)(0);function y(e){if(e.target===d.current){var t=d.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",y),t.removeEventListener("animationcancel",y),0===g.current&&"animationcancel"!==e.type&&(t.className=v.current)}}function h(){var e=d.current;e.removeEventListener("animationend",h),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,u,c):u()}return(0,l.useLayoutEffect)((function(){!function(){var e=d.current;v.current=e.className,e.className+=" "+p,e.addEventListener("animationend",y),e.addEventListener("animationcancel",y)}()}),[]),(0,l.useEffect)((function(){f||(s?h():function(){g.current=1;var e=d.current;e.className+=" "+m,e.addEventListener("animationend",h)}())}),[f]),l.createElement(l.Fragment,null,o)}}function O(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var L={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,u([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}};function N(e){var t=(0,l.useReducer)((function(e){return e+1}),0),n=(0,i.Z)(t,2)[1],o=(0,l.useState)([]),r=(0,i.Z)(o,2),s=r[0],c=r[1],d=(0,l.useRef)(null),f=(0,l.useRef)(new Map).current,m=function(e){return-1!==s.indexOf(e)},C=(0,l.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return f.get(e)}}).current;function I(e){var t=e.containerId;!C.props.limit||t&&C.containerId!==t||(C.count-=C.queue.length,C.queue=[])}function _(e){c((function(t){return E(e)?t.filter((function(t){return t!==e})):[]}))}function N(){var e=C.queue.shift();Z(e.toastContent,e.toastProps,e.staleId)}function R(e,t){var o=t.delay,r=t.staleId,i=a(t,p);if(b(e)&&!function(e){return!d.current||C.props.enableMultiContainer&&e.containerId!==C.props.containerId||f.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,c=i.updateId,u=i.data,m=C.props,I=function(){return _(s)},R=null==c;R&&C.count++;var k,P,w={toastId:s,updateId:c,containerId:i.containerId,isLoading:i.isLoading,theme:i.theme||m.theme,icon:null!=i.icon?i.icon:m.icon,isIn:!1,key:i.key||C.toastKey++,type:i.type,closeToast:I,closeButton:i.closeButton,rtl:m.rtl,position:i.position||m.position,transition:i.transition||m.transition,className:T(i.className||m.toastClassName),bodyClassName:T(i.bodyClassName||m.bodyClassName),style:i.style||m.toastStyle,bodyStyle:i.bodyStyle||m.bodyStyle,onClick:i.onClick||m.onClick,pauseOnHover:g(i.pauseOnHover)?i.pauseOnHover:m.pauseOnHover,pauseOnFocusLoss:g(i.pauseOnFocusLoss)?i.pauseOnFocusLoss:m.pauseOnFocusLoss,draggable:g(i.draggable)?i.draggable:m.draggable,draggablePercent:i.draggablePercent||m.draggablePercent,draggableDirection:i.draggableDirection||m.draggableDirection,closeOnClick:g(i.closeOnClick)?i.closeOnClick:m.closeOnClick,progressClassName:T(i.progressClassName||m.progressClassName),progressStyle:i.progressStyle||m.progressStyle,autoClose:!i.isLoading&&(k=i.autoClose,P=m.autoClose,!1===k||v(k)&&k>0?k:P),hideProgressBar:g(i.hideProgressBar)?i.hideProgressBar:m.hideProgressBar,progress:i.progress,role:i.role||m.role,deleteToast:function(){var e=O(f.get(s),"removed");f.delete(s),L.emit(4,e);var t=C.queue.length;if(C.count=E(s)?C.count-1:C.count-C.displayedToast,C.count<0&&(C.count=0),t>0){var o=E(s)?1:C.props.limit;if(1===t||1===o)C.displayedToast++,N();else{var r=o>t?t:o;C.displayedToast=r;for(var a=0;a<r;a++)N()}}else n()}};h(i.onOpen)&&(w.onOpen=i.onOpen),h(i.onClose)&&(w.onClose=i.onClose),w.closeButton=m.closeButton,!1===i.closeButton||b(i.closeButton)?w.closeButton=i.closeButton:!0===i.closeButton&&(w.closeButton=!b(m.closeButton)||m.closeButton);var x=e;(0,l.isValidElement)(e)&&!y(e.type)?x=(0,l.cloneElement)(e,{closeToast:I,toastProps:w,data:u}):h(e)&&(x=e({closeToast:I,toastProps:w,data:u})),m.limit&&m.limit>0&&C.count>m.limit&&R?C.queue.push({toastContent:x,toastProps:w,staleId:r}):v(o)?setTimeout((function(){Z(x,w,r)}),o):Z(x,w,r)}}function Z(e,t,n){var o=t.toastId;n&&f.delete(n);var r={content:e,props:t};f.set(o,r),c((function(e){return[].concat(u(e),[o]).filter((function(e){return e!==n}))})),L.emit(4,O(r,null==r.props.updateId?"added":"updated"))}return(0,l.useEffect)((function(){return C.containerId=e.containerId,L.cancelEmit(3).on(0,R).on(1,(function(e){return d.current&&_(e)})).on(5,I).emit(2,C),function(){return L.emit(3,C)}}),[]),(0,l.useEffect)((function(){C.props=e,C.isToastActive=m,C.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(f.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:d,isToastActive:m}}function R(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Z(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function k(e){var t=(0,l.useState)(!1),n=(0,i.Z)(t,2),o=n[0],r=n[1],a=(0,l.useState)(!1),s=(0,i.Z)(a,2),c=s[0],u=s[1],d=(0,l.useRef)(null),f=(0,l.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,l.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,T=e.closeOnClick;function E(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",O),document.addEventListener("touchmove",_),document.addEventListener("touchend",O);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=R(t.nativeEvent),f.y=Z(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(){if(f.boundingRect){var t=f.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&f.x>=r&&f.x<=a&&f.y>=n&&f.y<=o?I():C()}}function C(){r(!0)}function I(){r(!1)}function _(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&I(),f.x=R(t),f.y=Z(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function O(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",O),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",O);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,l.useEffect)((function(){p.current=e})),(0,l.useEffect)((function(){return d.current&&d.current.addEventListener("d",C,{once:!0}),h(e.onOpen)&&e.onOpen((0,l.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;h(e.onClose)&&e.onClose((0,l.isValidElement)(e.children)&&e.children.props)}}),[]),(0,l.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||I(),window.addEventListener("focus",C),window.addEventListener("blur",I)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",I))}}),[e.pauseOnFocusLoss]);var L={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return m&&v&&(L.onMouseEnter=I,L.onMouseLeave=C),T&&(L.onClick=function(e){y&&y(e),f.canCloseOnClick&&g()}),{playToast:C,pauseToast:I,isRunning:o,preventExitTransition:c,toastRef:d,eventHandlers:L}}function P(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return l.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},l.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function w(e){var t=e.delay,n=e.isRunning,a=e.closeToast,i=e.type,s=e.hide,c=e.className,u=e.style,d=e.controlledProgress,p=e.progress,m=e.rtl,v=e.isIn,g=e.theme,y=(0,r.Z)((0,r.Z)({},u),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:s?0:1});d&&(y.transform="scaleX("+p+")");var T=f("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+g,"Toastify__progress-bar--"+i,{"Toastify__progress-bar--rtl":m}),E=h(c)?c({rtl:m,type:i,defaultClassName:T}):f(T,c);return l.createElement("div",(0,o.Z)({role:"progressbar","aria-hidden":s?"true":"false","aria-label":"notification timer",className:E,style:y},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){v&&a()}))}w.defaultProps={type:I.DEFAULT,hide:!1};var x=function(e){var t=e.theme,n=e.type,o=a(e,m);return l.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},o))},B={info:function(e){return l.createElement(x,(0,r.Z)({},e),l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return l.createElement(x,(0,r.Z)({},e),l.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return l.createElement(x,(0,r.Z)({},e),l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return l.createElement(x,(0,r.Z)({},e),l.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return l.createElement("div",{className:"Toastify__spinner"})}},A=function(e){var t=k(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,s=e.closeButton,c=e.children,u=e.autoClose,d=e.onClick,p=e.type,m=e.hideProgressBar,v=e.closeToast,g=e.transition,T=e.position,E=e.className,b=e.style,C=e.bodyClassName,I=e.bodyStyle,_=e.progressClassName,O=e.progressStyle,L=e.updateId,N=e.role,R=e.progress,Z=e.rtl,P=e.toastId,x=e.deleteToast,A=e.isIn,M=e.isLoading,S=e.icon,D=e.theme,F=f("Toastify__toast","Toastify__toast-theme--"+D,"Toastify__toast--"+p,{"Toastify__toast--rtl":Z}),z=h(E)?E({rtl:Z,position:T,type:p,defaultClassName:F}):f(F,E),H=!!R,q=B[p],U={theme:D,type:p},Q=q&&q(U);return!1===S?Q=void 0:h(S)?Q=S(U):l.isValidElement(S)?Q=l.cloneElement(S,U):y(S)?Q=S:M&&(Q=B.spinner()),l.createElement(g,{isIn:A,done:x,position:T,preventExitTransition:o,nodeRef:a},l.createElement("div",(0,r.Z)((0,r.Z)({id:P,onClick:d,className:z},i),{},{style:b,ref:a}),l.createElement("div",(0,r.Z)((0,r.Z)({},A&&{role:N}),{},{className:h(C)?C({type:p}):f("Toastify__toast-body",C),style:I}),Q&&l.createElement("div",{className:f("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},Q),l.createElement("div",null,c)),function(e){if(e){var t={closeToast:v,type:p,theme:D};return h(e)?e(t):l.isValidElement(e)?l.cloneElement(e,t):void 0}}(s),(u||H)&&l.createElement(w,(0,r.Z)((0,r.Z)({},L&&!H?{key:"pb-"+L}:{}),{},{rtl:Z,theme:D,delay:u,isRunning:n,isIn:A,closeToast:v,hide:m,type:p,style:O,className:_,controlledProgress:H,progress:R}))))},M=_({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),S=(_({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),_({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),_({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,l.forwardRef)((function(e,t){var n=N(e),o=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=e.className,c=e.style,u=e.rtl,d=e.containerId;function p(e){var t=f("Toastify__toast-container","Toastify__toast-container--"+e,{"Toastify__toast-container--rtl":u});return h(s)?s({position:e,rtl:u,defaultClassName:t}):f(t,T(s))}return(0,l.useEffect)((function(){t&&(t.current=a.current)}),[]),l.createElement("div",{ref:a,className:"Toastify",id:d},o((function(e,t){var n=t.length?(0,r.Z)({},c):(0,r.Z)((0,r.Z)({},c),{},{pointerEvents:"none"});return l.createElement("div",{className:p(e),style:n,key:"container-"+e},t.map((function(e,n){var o=e.content,a=e.props;return l.createElement(A,(0,r.Z)((0,r.Z)({},a),{},{isIn:i(a.toastId),style:{"--nth":n+1,"--len":t.length},key:"toast-"+a.key,closeButton:!0===a.closeButton?P:a.closeButton}),o)})))})))})));S.displayName="ToastContainer",S.defaultProps={position:C.TOP_RIGHT,transition:M,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:P,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var D,F=new Map,z=[];function H(){return Math.random().toString(36).substring(2,9)}function q(e){return e&&(y(e.toastId)||v(e.toastId))?e.toastId:H()}function U(e,t){return F.size>0?L.emit(0,e,t):z.push({content:e,options:t}),t.toastId}function Q(e,t){return(0,r.Z)((0,r.Z)({},t),{},{type:t&&t.type||e,toastId:q(t)})}function j(e){return function(t,n){return U(t,Q(e,n))}}function V(e,t){return U(e,Q(I.DEFAULT,t))}V.loading=function(e,t){return U(e,Q(I.DEFAULT,(0,r.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},V.promise=function(e,t,n){var o,a=t.pending,i=t.error,s=t.success;a&&(o=y(a)?V.loading(a,n):V.loading(a.render,(0,r.Z)((0,r.Z)({},n),a)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(e,t,a){if(null!=t){var i=(0,r.Z)((0,r.Z)((0,r.Z)({type:e},c),n),{},{data:a}),s=y(t)?{render:t}:t;return o?V.update(o,(0,r.Z)((0,r.Z)({},i),s)):V(s.render,(0,r.Z)((0,r.Z)({},i),s)),a}V.dismiss(o)},l=h(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",i,e)})),l},V.success=j(I.SUCCESS),V.info=j(I.INFO),V.error=j(I.ERROR),V.warning=j(I.WARNING),V.warn=V.warning,V.dark=function(e,t){return U(e,Q(I.DEFAULT,(0,r.Z)({theme:"dark"},t)))},V.dismiss=function(e){return L.emit(1,e)},V.clearWaitingQueue=function(e){return void 0===e&&(e={}),L.emit(5,e)},V.isActive=function(e){var t=!1;return F.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},V.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=F.get(n||D);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,a=n.content,i=(0,r.Z)((0,r.Z)((0,r.Z)({},o),t),{},{toastId:t.toastId||e,updateId:H()});i.toastId!==e&&(i.staleId=e);var s=i.render||a;delete i.render,U(s,i)}}),0)},V.done=function(e){V.update(e,{progress:1})},V.onChange=function(e){return L.on(4,e),function(){L.off(4,e)}},V.POSITION=C,V.TYPE=I,L.on(2,(function(e){D=e.containerId||e,F.set(D,e),z.forEach((function(e){L.emit(0,e.content,e.options)})),z=[]})).on(3,(function(e){F.delete(e.containerId||e),0===F.size&&L.off(0).off(1).off(5)}))}}]);
//# sourceMappingURL=222.467ad935.chunk.js.map