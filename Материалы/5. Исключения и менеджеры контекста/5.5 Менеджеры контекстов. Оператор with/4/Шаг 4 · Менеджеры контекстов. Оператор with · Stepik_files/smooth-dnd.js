!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).SmoothDnD={})}(this,(function(e){"use strict"
var t,n,o="smooth-dnd-container-instance",r="smooth-dnd-draggable-wrapper",i="animated",a="__smooth_dnd_draggable_translation_value",l="__smooth_dnd_draggable_visibility_value",s="smooth-dnd-ghost",c="smooth-dnd-container",u="smooth-dnd-extra-size-for-insertion",d="smooth-dnd-stretcher-element",f="smooth-dnd-stretcher-instance",g="smooth-dnd-disable-touch-action",p="smooth-dnd-no-user-select",m="smooth-dnd-prevent-auto-scroll-class",v="smooth-dnd-drop-preview-default-class",h="smooth-dnd-drop-preview-inner-class",y="smooth-dnd-drop-preview-constant-class",b="smooth-dnd-drop-preview-flex-container-class",w=Object.freeze({containerInstance:o,defaultGroupName:"@@smooth-dnd-default-group@@",wrapperClass:r,defaultGrabHandleClass:"smooth-dnd-default-grap-handle",animationClass:i,translationValue:a,visibilityValue:l,ghostClass:s,containerClass:c,extraSizeForInsertion:u,stretcherElementClass:d,stretcherElementInstance:f,isDraggableDetached:"smoth-dnd-is-draggable-detached",disbaleTouchActions:g,noUserSelectClass:p,preventAutoScrollClass:m,dropPlaceholderDefaultClass:v,dropPlaceholderInnerClass:h,dropPlaceholderWrapperClass:y,dropPlaceholderFlexContainerClass:b}),x={groupName:void 0,behaviour:"move",orientation:"vertical",getChildPayload:void 0,animationDuration:250,autoScrollEnabled:!0,shouldAcceptDrop:void 0,shouldAnimateDrop:void 0}
function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t]
return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(n=t||(t={})).x="x",n.y="y",n.xy="xy"
var S=function(e,t,n){return"x"===n?{left:Math.max(e.left,t.left),top:e.top,right:Math.min(e.right,t.right),bottom:e.bottom}:{left:e.left,top:Math.max(e.top,t.top),right:e.right,bottom:Math.min(e.bottom,t.bottom)}},O=function(e){var t=e.getBoundingClientRect(),n={left:t.left,right:t.right,top:t.top,bottom:t.bottom}
if(B(e,"x")&&!I(e,"x")){var o=n.right-n.left
n.right=n.right+e.scrollWidth-o}if(B(e,"y")&&!I(e,"y")){var r=n.bottom-n.top
n.bottom=n.bottom+e.scrollHeight-r}return n},R=function(e){var n=window.getComputedStyle(e),o=n.overflow
if("auto"===o||"scroll"===o)return t.xy
var r=n["overflow-x"],i="auto"===r||"scroll"===r,a=n["overflow-y"],l="auto"===a||"scroll"===a
return i&&l?t.xy:i?t.x:l?t.y:null},A=function(e,t){var n=window.getComputedStyle(e),o=n.overflow,r=n["overflow-".concat(t)]
return"auto"===o||"scroll"===o||"auto"===r||"scroll"===r},I=function(e,t){var n=window.getComputedStyle(e),o=n.overflow,r=n["overflow-".concat(t)]
return"auto"===o||"scroll"===o||"hidden"===o||"auto"===r||"scroll"===r||"hidden"===r},B=function(e,t){return"x"===t?e.scrollWidth>e.clientWidth:e.scrollHeight>e.clientHeight},P=function(e,t){var n=e,o=t||O(e)
for(n=e.parentElement;n;)B(n,"x")&&I(n,"x")&&(o=S(o,n.getBoundingClientRect(),"x")),B(n,"y")&&I(n,"y")&&(o=S(o,n.getBoundingClientRect(),"y")),n=n.parentElement
return o},T=function(e,t){for(var n=e;n;){if(n[o]){var r=function(){var e=n[o]
if(t.some((function(t){return t===e})))return{v:e}}()
if("object"===E(r))return r.v}n=n.parentElement}return null},z=function(e,t){for(var n=e;n;){if(n.matches(t))return n
n=n.parentElement}return null},N=function(e,t){return-1<e.className.split(" ").map((function(e){return e})).indexOf(t)},L=function(e,t){if(e){var n=e.className.split(" ").filter((function(e){return e}));-1===n.indexOf(t)&&(n.unshift(t),e.className=n.join(" "))}},M=function(e,t){if(e){var n=e.className.split(" ").filter((function(e){return e&&e!==t}))
e.className=n.join(" ")}},j=function(e){if(e){var t=window.getComputedStyle(e)
if(t)return t.cursor}return null}
function _(e){return!(e.bottom<=e.top||e.right<=e.left)}function F(e){var t=e.element,n=e.draggables
return function(e,o){var i=e,a=i.removedIndex,l=i.addedIndex,s=i.droppedElement,c=null
if(null!==a&&(c=function(e,t){return e.removeChild(e.children[t])}(t,a),n.splice(a,1)),null!==l){var u=window.document.createElement("div")
u.className="".concat(r),u.appendChild(c&&c.firstElementChild?c.firstElementChild:s),function(e,t,n){n>=e.children.length?e.appendChild(t):e.insertBefore(t,e.children[n])}(t,u,l),l>=n.length?n.push(u):n.splice(l,0,u)}o&&o(e)}}var V=Object.freeze({domDropHandler:F,reactDropHandler:function(){return{handler:function(){return function(e,t){t&&t(e)}}}}}),X={size:"offsetWidth",distanceToParent:"offsetLeft",translate:"transform",begin:"left",end:"right",dragPosition:"x",scrollSize:"scrollWidth",offsetSize:"offsetWidth",scrollValue:"scrollLeft",scale:"scaleX",setSize:"width",setters:{translate:function(e){return"translate3d(".concat(e,"px, 0, 0)")}}},H={size:"offsetHeight",distanceToParent:"offsetTop",translate:"transform",begin:"top",end:"bottom",dragPosition:"y",scrollSize:"scrollHeight",offsetSize:"offsetHeight",scrollValue:"scrollTop",scale:"scaleY",setSize:"height",setters:{translate:function(e){return"translate3d(0,".concat(e,"px, 0)")}}}
function Y(e,t,n){e[u]=0
var o,r=(o="horizontal"===t?X:H,{get:function(e,t){return e[o[t]||t]},set:function(e,t,n){e[o[t]]=o.setters[t]?o.setters[t](n):n}}),i={translation:0}
function s(){var t,n
c(e),n=(t=e).getBoundingClientRect(),i.scaleX=t.offsetWidth?(n.right-n.left)/t.offsetWidth:1,i.scaleY=t.offsetHeight?(n.bottom-n.top)/t.offsetHeight:1}function c(e){i.rect=O(e)
var t=P(e,i.rect)
_(t)&&(i.lastVisibleRect=i.visibleRect),i.visibleRect=t}function d(e){var n=e
if(n.tagName){var o=n.getBoundingClientRect()
return"vertical"===t?o.bottom-o.top:o.right-o.left}return r.get(e,"size")*r.get(i,"scale")}function f(e){return r.get(e,"dragPosition")}return window.addEventListener("resize",(function(){c(e)})),setTimeout((function(){s()}),10),{getSize:d,getContainerRectangles:function(){return{rect:i.rect,visibleRect:i.visibleRect,lastVisibleRect:i.lastVisibleRect}},getBeginEndOfDOMRect:function(e){return{begin:r.get(e,"begin"),end:r.get(e,"end")}},getBeginEndOfContainer:function(){return{begin:r.get(i.rect,"begin")+i.translation,end:r.get(i.rect,"end")+i.translation}},getBeginEndOfContainerVisibleRect:function(){return{begin:r.get(i.visibleRect,"begin")+i.translation,end:r.get(i.visibleRect,"end")+i.translation}},getBeginEnd:function(t){var n,o=(n=t,(r.get(n,"distanceToParent")+(n[a]||0))*r.get(i,"scale")+(r.get(i.rect,"begin")+i.translation)-r.get(e,"scrollValue"))
return{begin:o,end:o+d(t)*r.get(i,"scale")}},getAxisValue:f,setTranslation:function(e,t){t?r.set(e.style,"translate",t):e.style.removeProperty("transform"),e[a]=t},getTranslation:function(e){return e[a]},setVisibility:function(e,t){void 0!==e[l]&&e[l]===t||(t?e.style.removeProperty("visibility"):e.style.visibility="hidden",e[l]=t)},isVisible:function(e){return void 0===e[l]||e[l]},isInVisibleRect:function(e,n){var o=i.visibleRect,r=o.left,a=o.top,l=o.right,s=o.bottom
s-a<2&&(s=a+30)
var c=i.rect
return"vertical"===t?e>c.left&&e<c.right&&a<n&&n<s:r<e&&e<l&&n>c.top&&n<c.bottom},setSize:function(e,t){r.set(e,"setSize",t)},getTopLeftOfElementBegin:function(e){var n=0
return{top:"horizontal"===t?(n=e,i.rect.top):(n=i.rect.left,e),left:n}},getScrollSize:function(e){return r.get(e,"scrollSize")},getScrollValue:function(e){return r.get(e,"scrollValue")},setScrollValue:function(e,t){return r.set(e,"scrollValue",t)},invalidate:s,invalidateRects:function(){c(e)},getPosition:function(e){return f(e)},setBegin:function(e,t){r.set(e,"begin",t)}}}function k(e,t,n){var o,r,i,a=n.left,l=n.right,s=n.top,c=n.bottom,u=e.x,d=e.y
if(u<a||l<u||d<s||c<d)return null
i="x"===t?(o=a,r=l,u):(o=s,r=c,d)
var f=r-o,g=400<f?100:f/4
return r-i<g?{direction:"end",speedFactor:(g-(r-i))/g}:i-o<g?{direction:"begin",speedFactor:(g-(i-o))/g}:null}var G=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"y",n=null,o=null,r=null,i=null
return{animate:function(a,l){r=a,i=l,function a(){null===n&&(n=requestAnimationFrame((function(l){null===o&&(o=l)
var s=l-o
o=l
var c,u,d,f=s/1e3*i
u=t,d=f="begin"===r?0-f:f,(c=e)&&(c!==window?"x"===u?c.scrollLeft+=d:c.scrollTop+=d:"x"===u?c.scrollBy(d,0):c.scrollBy(0,d)),n=null,a()})))}()},stop:function(){null!==n&&(cancelAnimationFrame(n),n=null),o=null}}}
function W(e){return function(){return P(e,e.getBoundingClientRect())}}var q,U,J
"undefined"!=typeof window&&((q=Node||Element)&&q.prototype&&!q.prototype.matches&&(q.prototype.matches=q.prototype.matchesSelector||q.prototype.mozMatchesSelector||q.prototype.msMatchesSelector||q.prototype.oMatchesSelector||q.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n}),(U=Node||Element)&&U.prototype&&null==U.prototype.firstElementChild&&Object.defineProperty(U.prototype,"firstElementChild",{get:function(){for(var e,t=this.childNodes,n=0;e=t[n++];)if(1===e.nodeType)return e
return null}}),Array.prototype.some||(Array.prototype.some=function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined")
if("function"!=typeof e)throw new TypeError
for(var t=Object(this),n=t.length>>>0,o=2<=arguments.length?arguments[1]:void 0,r=0;r<n;r++)if(r in t&&e.call(o,t[r],r,t))return!0
return!1}))
var K={overflow:"hidden",display:"block"},Q={height:"100%",display:"table-cell","vertical-align":"top"},Z=(C(J={},".".concat(c),{position:"relative","min-height":"30px","min-width":"30px"}),C(J,".".concat(c,".horizontal"),{display:"table"}),C(J,".".concat(c,".horizontal > .").concat(d),{display:"inline-block"}),C(J,".".concat(c,".horizontal > .").concat(r),Q),C(J,".".concat(c,".vertical > .").concat(r),K),C(J,".".concat(r),{"box-sizing":"border-box"}),C(J,".".concat(r,".horizontal"),Q),C(J,".".concat(r,".vertical"),K),C(J,".".concat(r,".animated"),{transition:"transform ease"}),C(J,".".concat(s),{"box-sizing":"border-box"}),C(J,".".concat(s,".animated"),{transition:"all ease-in-out"}),C(J,".".concat(s," *"),{"pointer-events":"none"}),C(J,".".concat(g," *"),{"touch-actions":"none","-ms-touch-actions":"none"}),C(J,".".concat(p),{"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),C(J,".".concat(h),{flex:"1"}),C(J,".".concat(c,".horizontal > .").concat(y),{height:"100%",overflow:"hidden",display:"table-cell","vertical-align":"top"}),C(J,".".concat(c,".vertical > .").concat(y),{overflow:"hidden",display:"block",width:"100%"}),C(J,".".concat(b),{width:"100%",height:"100%",display:"flex","justify-content":"stretch","align-items":"stretch"}),C(J,".".concat(v),{"background-color":"rgba(150, 150, 150, 0.1)",border:"1px solid #ccc"}),J)
function $(e){return Object.keys(e).reduce((function(t,n){var o=e[n]
return"object"===E(o)?"".concat(t).concat(n,"{").concat($(o),"}"):"".concat(t).concat(n,":").concat(o,";")}),"")}function ee(e){if(e&&"undefined"!=typeof window){var t=window.document.head||window.document.getElementsByTagName("head")[0],n=window.document.createElement("style"),o=$({"body *":{cursor:"".concat(e," !important")}})
return n.type="text/css",n.styleSheet?n.styleSheet.cssText=o:n.appendChild(window.document.createTextNode(o)),t.appendChild(n),n}return null}var te,ne,oe=["mousedown","touchstart"],re=["mousemove","touchmove"],ie=["mouseup","touchend"],ae=null,le=null,se=null,ce=null,ue=[],de=!1,fe=!1,ge=!1,pe=!1,me=null,ve=null,he=null,ye=null,be=(te=null,ne=!1,{start:function(){ne||(ne=!0,function e(){te=requestAnimationFrame((function(){ae.forEach((function(e){return e.layout.invalidateRects()})),setTimeout((function(){null!==te&&e()}),50)}))}())},stop:function(){null!==te&&(cancelAnimationFrame(te),te=null),ne=!1}}),we="undefined"!=typeof window&&!!(window.navigator.userAgent.match(/Android/i)||window.navigator.userAgent.match(/webOS/i)||window.navigator.userAgent.match(/iPhone/i)||window.navigator.userAgent.match(/iPad/i)||window.navigator.userAgent.match(/iPod/i)||window.navigator.userAgent.match(/BlackBerry/i)||window.navigator.userAgent.match(/Windows Phone/i))
function xe(){return ce&&ce.ghostParent?ce.ghostParent:le&&le.parentElement||window.document.body}var Ee=function(){var e,t,n,o=null
function r(n){var o=Pe(n),r=o.clientX,i=o.clientY
if(t)(Math.abs(e.clientX-r)>5||Math.abs(e.clientY-i)>5)&&l()
else if(Math.abs(e.clientX-r)>1||Math.abs(e.clientY-i)>1)return s()}function i(){l()}function a(){l()}function l(){clearTimeout(o),re.forEach((function(e){return window.document.removeEventListener(e,r)}),{passive:!1}),ie.forEach((function(e){return window.document.removeEventListener(e,i)}),{passive:!1}),window.document.removeEventListener("drag",a,{passive:!1})}function s(){clearTimeout(o),l(),n()}return function(l,c,u){e=Pe(l),n=u,(t="number"==typeof c?c:we?200:0)&&(o=setTimeout(s,t)),re.forEach((function(e){return window.document.addEventListener(e,r)}),{passive:!1}),ie.forEach((function(e){return window.document.addEventListener(e,i)}),{passive:!1}),window.document.addEventListener("drag",a,{passive:!1})}}()
function Ce(e){var t=Pe(e)
if(!de&&(void 0===t.button||0===t.button)&&(le=z(t.target,"."+r))){var n=z(le,"."+c),o=ue.filter((function(e){return e.element===n}))[0],i=o.getOptions().dragHandleSelector,a=o.getOptions().nonDragAreaSelector,l=!0
i&&!z(t.target,i)&&(l=!1),a&&z(t.target,a)&&(l=!1),l&&(L(window.document.body,g),L(window.document.body,p),window.document.addEventListener("mouseup",(function e(){M(window.document.body,g),M(window.document.body,p),window.document.removeEventListener("mouseup",e)}))),l&&Ee(t,o.getOptions().dragBeginDelay,(function(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():window.document.selection&&window.document.selection.empty(),Me(t,j(e.target)),re.forEach((function(e){window.document.addEventListener(e,De,{passive:!1})})),ie.forEach((function(e){window.document.addEventListener(e,Be,{passive:!1})}))}))}}function De(e){e.preventDefault()
var t=Pe(e)
if(ce){var n=ce.container.getOptions()
"contain"===n.behaviour?function(e){var t,n,o,r,i=e.clientX,a=e.clientY,l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"vertical",s=ce.container.layout.getBeginEndOfContainerVisibleRect()
r="vertical"===l?(t=a,n="y",o="top",ce.size.offsetHeight):(t=i,n="x",o="left",ce.size.offsetWidth)
var c=s.begin,u=s.end-r,d=Math.max(c,Math.min(u,t+se.positionDelta[o]))
se.topLeft[n]=d,ce.position[n]=Math.max(s.begin,Math.min(s.end,t+se.centerDelta[n])),ce.mousePosition[n]=Math.max(s.begin,Math.min(s.end,t)),ce.position[n]<s.begin+r/2&&(ce.position[n]=s.begin+2),ce.position[n]>s.end-r/2&&(ce.position[n]=s.end-2)}(t,n.orientation):he?"y"===he?(se.topLeft.y=t.clientY+se.positionDelta.top,ce.position.y=t.clientY+se.centerDelta.y,ce.mousePosition.y=t.clientY):"x"===he&&(se.topLeft.x=t.clientX+se.positionDelta.left,ce.position.x=t.clientX+se.centerDelta.x,ce.mousePosition.x=t.clientX):(se.topLeft.x=t.clientX+se.positionDelta.left,se.topLeft.y=t.clientY+se.positionDelta.top,ce.position.x=t.clientX+se.centerDelta.x,ce.position.y=t.clientY+se.centerDelta.y,ce.mousePosition.x=t.clientX,ce.mousePosition.y=t.clientY),_e(),(pe=!me(ce))&&Ae()}else Me(t,j(e.target))}var Se,Oe,Re,Ae=(Se=Ie,Oe=!20,Re=null,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
Re&&clearTimeout(Re),Oe&&!Re?Se.call.apply(Se,[null].concat(t)):Re=setTimeout((function(){Re=null,Se.call.apply(Se,[null].concat(t))}),20)})
function Ie(){pe&&(pe=!1,Te(ce,ae))}function Be(){var e
re.forEach((function(e){window.document.removeEventListener(e,De,{passive:!1})})),ie.forEach((function(e){window.document.removeEventListener(e,Be,{passive:!1})})),ve({reset:!0}),ye&&((e=ye)&&"undefined"!=typeof window&&(window.document.head||window.document.getElementsByTagName("head")[0]).removeChild(e),ye=null),ce&&(be.stop(),Ie(),ge=!0,function(e){function t(){M(se.ghost,"animated"),se.ghost.style.transitionDuration=null,xe().removeChild(se.ghost),function(){Le(de=!1)
for(var e=ae||[],t=e.shift();void 0!==t;)t.handleDrop(ce),t=e.shift()
me=he=ce=se=le=ae=null,ge=!1}()}function n(e,n,o){var r=e.top,i=e.left
L(se.ghost,"animated"),o&&L(se.ghost.firstElementChild,o),se.topLeft.x=i,se.topLeft.y=r,_e(n),setTimeout((function(){t()}),n+20)}function o(e,t){L(se.ghost,"animated"),_e(e,.9,!0),setTimeout((function(){t()}),e+20)}if(ce.targetElement){var r=ue.filter((function(e){return e.element===ce.targetElement}))[0]
!(m=r.getOptions()).shouldAnimateDrop||m.shouldAnimateDrop(ce.container.getOptions(),ce.payload)?n(r.getDragResult().shadowBeginEnd.rect,Math.max(150,r.getOptions().animationDuration/2),r.getOptions().dropClass):t()}else{var i=ue.filter((function(e){return e===ce.container}))[0]
if(i){var a=i.getOptions(),l=a.behaviour,s=a.removeOnDropOut
if("move"!==l&&"contain"!==l||!fe&&s||!i.getDragResult())o(i.getOptions().animationDuration,t)
else{var c=i.layout.getContainerRectangles()
if(!_(c.visibleRect)&&_(c.lastVisibleRect))n({top:c.lastVisibleRect.top,left:c.lastVisibleRect.left},i.getOptions().animationDuration,i.getOptions().dropClass)
else{var u=i.getDragResult(),d=u.removedIndex,f=u.elementSize,g=i.layout
i.getTranslateCalculator({dragResult:{removedIndex:d,addedIndex:d,elementSize:f,pos:void 0,shadowBeginEnd:void 0}})
var p=0<d?g.getBeginEnd(i.draggables[d-1]).end:g.getBeginEndOfContainer().begin
n(g.getTopLeftOfElementBegin(p),i.getOptions().animationDuration,i.getOptions().dropClass)}}}else o(x.animationDuration,t)}var m}())}function Pe(e){return e.touches?e.touches[0]:e}function Te(e,t){var n=!1
t.forEach((function(t){var o=t.handleDrag(e)
n=!!o.containerBoxChanged||!1,o.containerBoxChanged=!1})),n&&(n=!1,requestAnimationFrame((function(){ue.forEach((function(e){e.layout.invalidateRects(),e.onTranslated()}))})))}function ze(e){var t=e,n=null
return function(e){return!(null!==n||!de||ge||(n=requestAnimationFrame((function(){de&&!ge&&(Te(e,t),ve({draggableInfo:e})),n=null})),0))}}function Ne(e,n){return e.getOptions().autoScrollEnabled?function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1500,o=e.reduce((function(e,n){var o=function(e){for(var n=[],o=e.element;o;){var r=R(o)
if(r&&!N(o,m)){var i={}
switch(r){case t.xy:i.x={animator:G(o,"x")},i.y={animator:G(o,"y")}
break
case t.x:i.x={animator:G(o,"x")}
break
case t.y:i.y={animator:G(o,"y")}}n.push({axisAnimations:i,getRect:W(o),scrollerElement:o})}o=o.parentElement}return n}(n).filter((function(t){return!e.find((function(e){return e.scrollerElement===t.scrollerElement}))}))
return[].concat(D(e),D(o))}),[])
return function(e){var t,r,i=e.draggableInfo
if(e.reset)o.forEach((function(e){e.axisAnimations.x&&e.axisAnimations.x.animator.stop(),e.axisAnimations.y&&e.axisAnimations.y.animator.stop()}))
else if(i){t=o,r=i.mousePosition,t.forEach((function(e){var t=e.axisAnimations,n=(0,e.getRect)()
t.x&&(t.x.scrollParams=k(r,"x",n),e.cachedRect=n),t.y&&(t.y.scrollParams=k(r,"y",n),e.cachedRect=n)})),o.forEach((function(e){var t=e.axisAnimations,o=t.x,r=t.y
if(o)if(o.scrollParams){var i=o.scrollParams,a=i.direction,l=i.speedFactor
o.animator.animate(a,l*n)}else o.animator.stop()
if(r)if(r.scrollParams){var s=r.scrollParams,c=s.direction,u=s.speedFactor
r.animator.animate(c,u*n)}else r.animator.stop()}))
var a=o.filter((function(e){return e.cachedRect}))
if(a.length&&1<a.length){var l=function(e,t){for(var n=document.elementFromPoint(t.x,t.y);n;){var o=e.find((function(e){return e.scrollerElement===n}))
if(o)return o
n=n.parentElement}return null}(a,i.mousePosition)
l&&a.forEach((function(e){e!==l&&(e.axisAnimations.x&&e.axisAnimations.x.animator.stop(),e.axisAnimations.y&&e.axisAnimations.y.animator.stop())}))}}}}(n,e.getScrollMaxSpeed()):function(e){return null}}function Le(e){ue.forEach((function(t){var n=e?t.getOptions().onDragStart:t.getOptions().onDragEnd
if(n){var o={isSource:t===ce.container,payload:ce.payload}
t.isDragRelevant(ce.container,ce.payload)?o.willAcceptDrop=!0:o.willAcceptDrop=!1,n(o)}}))}function Me(e,t){if(null!==le){de=!0
var n=ue.filter((function(e){return le.parentElement===e.element}))[0]
n.setDraggables(),he=n.getOptions().lockAxis?n.getOptions().lockAxis.toLowerCase():null,y=le,w=(b=ue.filter((function(e){return y.parentElement===e.element}))[0]).draggables.indexOf(y),x=b.getOptions().getGhostParent,E=y.getBoundingClientRect(),ce={container:b,element:y,size:{offsetHeight:E.bottom-E.top,offsetWidth:E.right-E.left},elementIndex:w,payload:b.getOptions().getChildPayload?b.getOptions().getChildPayload(w):void 0,targetElement:null,position:{x:0,y:0},groupName:b.getOptions().groupName,ghostParent:x?x():null,invalidateShadow:null,mousePosition:null,relevantContainers:null},o=le,r={x:e.clientX,y:e.clientY},i=ce.container,a=t,l=r.x,c=r.y,d=(u=o.getBoundingClientRect()).left,f=u.top,m=d+((g=u.right)-d)/2,v=f+((p=u.bottom)-f)/2,(h=o.cloneNode(!0)).style.zIndex="1000",h.style.boxSizing="border-box",h.style.position="fixed",h.style.top="0px",h.style.left="0px",h.style.transform=null,h.style.removeProperty("transform"),i.shouldUseTransformForGhost()?h.style.transform="translate3d(".concat(d,"px, ").concat(f,"px, 0)"):(h.style.top="".concat(f,"px"),h.style.left="".concat(d,"px")),h.style.width=g-d+"px",h.style.height=p-f+"px",h.style.overflow="visible",h.style.transition=null,h.style.removeProperty("transition"),h.style.pointerEvents="none",h.style.userSelect="none",i.getOptions().dragClass?setTimeout((function(){L(h.firstElementChild,i.getOptions().dragClass)
var e=window.getComputedStyle(h.firstElementChild).cursor
ye=ee(e)})):ye=ee(a),L(h,i.getOptions().orientation||"vertical"),L(h,s),se={ghost:h,centerDelta:{x:m-l,y:v-c},positionDelta:{left:d-l,top:f-c},topLeft:{x:d,y:f}},ce.position={x:e.clientX+se.centerDelta.x,y:e.clientY+se.centerDelta.y},ce.mousePosition={x:e.clientX,y:e.clientY},ae=ue.filter((function(e){return e.isDragRelevant(n,ce.payload)})),ce.relevantContainers=ae,me=ze(ae),ve&&ve({reset:!0,draggableInfo:void 0}),ve=Ne(n,ae),ae.forEach((function(e){return e.prepareDrag(e,ae)})),Le(!0),me(ce),xe().appendChild(se.ghost),be.start()}var o,r,i,a,l,c,u,d,f,g,p,m,v,h,y,b,w,x,E}var je=null
function _e(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],o=se,r=o.ghost,i=o.topLeft,a=i.x,l=i.y,s=!ce.container||ce.container.shouldUseTransformForGhost(),c=s?"translate3d(".concat(a,"px,").concat(l,"px, 0)"):null
if(1!==t&&(c=c?"".concat(c," scale(").concat(t,")"):"scale(".concat(t,")")),0<e)return se.ghost.style.transitionDuration=e+"ms",void requestAnimationFrame((function(){c&&(r.style.transform=c),s||(r.style.left=a+"px",r.style.top=l+"px"),je=null,n&&(r.style.opacity="0")}))
null===je&&(je=requestAnimationFrame((function(){c&&(r.style.transform=c),s||(r.style.left=a+"px",r.style.top=l+"px"),je=null,n&&(r.style.opacity="0")})))}"undefined"!=typeof window&&function(){if("undefined"!=typeof window){var e=window.document.head||window.document.getElementsByTagName("head")[0],t=window.document.createElement("style")
t.id="smooth-dnd-style-definitions"
var n=$(Z)
t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(window.document.createTextNode(n)),e.appendChild(t)}}()
var Fe=("undefined"!=typeof window&&oe.forEach((function(e){window.document.addEventListener(e,Ce,{passive:!1})})),{register:function(e){var t
t=e,ue.push(t),de&&ce&&t.isDragRelevant(ce.container,ce.payload)&&(ae.push(t),t.prepareDrag(t,ae),ve&&ve({reset:!0,draggableInfo:void 0}),ve=Ne(t,ae),me=ze(ae),t.handleDrag(ce))},unregister:function(e){!function(e){if(ue.splice(ue.indexOf(e),1),de&&ce){ce.container===e&&e.fireRemoveElement(),ce.targetElement===e.element&&(ce.targetElement=null)
var t=ae.indexOf(e);-1<t&&(ae.splice(t,1),ve&&ve({reset:!0,draggableInfo:void 0}),ve=Ne(e,ae),me=ze(ae))}}(e)},isDragging:function(){return de},cancelDrag:function(){if(de&&!fe&&!ge){pe=!(fe=!0)
var e=Object.assign({},ce,{targetElement:null,position:{x:Number.MAX_SAFE_INTEGER,y:Number.MAX_SAFE_INTEGER},mousePosition:{x:Number.MAX_SAFE_INTEGER,y:Number.MAX_SAFE_INTEGER}})
ae.forEach((function(t){t.handleDrag(e)})),ce.targetElement=null,ce.cancelDrop=!0,Be(),fe=!1}}})
function Ve(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:x.animationDuration
t?(L(e,i),e.style.transitionDuration=n+"ms"):(M(e,i),e.style.removeProperty("transition-duration"))}function Xe(e){var t=[]
return Array.prototype.forEach.call(e.children,(function(n){if(n.nodeType===Node.ELEMENT_NODE){var o=n
N(n,r)||(o=function(e){if(st.wrapChild){var t=window.document.createElement("div")
return t.className="".concat(r),e.parentElement.insertBefore(t,e),t.appendChild(e),t}return e}(n)),o[a]=0,t.push(o)}else e.removeChild(n)})),t}function He(e){var t,n,o,r,i=e.element,a=e.draggables,l=e.layout,s=e.getOptions,c=(n=(t={element:i,draggables:a,layout:l,getOptions:s}).element,o=t.draggables,r=t.layout,function(){o.forEach((function(e){Ve(e,!1),r.setTranslation(e,0),r.setVisibility(e,!0)})),n[f]&&(n[f].parentNode.removeChild(n[f]),n[f]=null)}),u=(st.dropHandler||F)({element:i,draggables:a,layout:l,getOptions:s})
return function(e,t){var n=t.addedIndex,o=t.removedIndex,r=2<arguments.length&&void 0!==arguments[2]&&arguments[2]
if(c(),!e.cancelDrop&&(e.targetElement||s().removeOnDropOut||r)){var i={removedIndex:o,addedIndex:null!==n?null!==o&&o<n?n-1:n:null,payload:e.payload}
u(i,s().onDrop)}}}function Ye(e){var t=e.element,n=e.getOptions,o=null
return function(e){var r=e.draggableInfo,i=o
return null==o&&r.container.element===t&&"copy"!==n().behaviour&&(i=o=r.elementIndex),{removedIndex:i}}}function ke(e){var t=e.draggables,n=e.layout
return function(e){var o=e.dragResult
null!==o.removedIndex&&n.setVisibility(t[o.removedIndex],!1)}}function Ge(e){var t=e.element,n=e.layout
return function(e){var o=e.draggableInfo,r=document.elementFromPoint(o.position.x,o.position.y)
if(r){var i=T(r,o.relevantContainers)
if(i&&i.element===t)return{pos:n.getPosition(o.position)}}return{pos:null}}}function We(e){var t=e.layout,n=null
return function(e){var o=e.draggableInfo
return null===e.dragResult.pos?n=null:{elementSize:n=n||t.getSize(o.size)}}}function qe(e){var t=e.element
return function(e){var n=e.draggableInfo,o=e.dragResult
!function(e,t){var n=!(2<arguments.length&&void 0!==arguments[2])||arguments[2]
t&&n?e.targetElement=t:e.targetElement===t&&(e.targetElement=null)}(n,t,!!o.pos)}}function Ue(){return function(e){return null!==e.dragResult.pos?{addedIndex:0}:{addedIndex:null}}}function Je(e){var t=e.layout,n=null
return function(e){var o=e.dragResult.addedIndex
if(o===n)return null
n=o
var r=t.getBeginEndOfContainer(),i=r.begin
return r.end,{shadowBeginEnd:{rect:t.getTopLeftOfElementBegin(i)}}}}function Ke(e){var t=e.layout,n=e.element,o=e.getOptions,r=null
return function(e){var i=e.dragResult,a=i.elementSize,l=i.shadowBeginEnd,s=i.addedIndex,c=i.dropPlaceholderContainer,u=o()
if(u.dropPlaceholder){var d="boolean"==typeof u.dropPlaceholder?{}:u.dropPlaceholder,f=d.animationDuration,g=d.className,p=d.showOnTop
if(null===s)return c&&null!==r&&n.removeChild(c),r=null,{dropPlaceholderContainer:void 0}
if(!c){var m=document.createElement("div"),w=document.createElement("div")
w.className=b,m.className="".concat(h," ").concat(g||v),(c=document.createElement("div")).className="".concat(y),c.style.position="absolute",void 0!==f&&(c.style.transition="all ".concat(f,"ms ease")),c.appendChild(w),w.appendChild(m),t.setSize(c.style,a+"px"),c.style.pointerEvents="none",p?n.appendChild(c):n.insertBefore(c,n.firstElementChild)}return r!==s&&l.dropArea&&t.setBegin(c.style,l.dropArea.begin-t.getBeginEndOfContainer().begin+"px"),r=s,{dropPlaceholderContainer:c}}return null}}function Qe(e){var t=nt(e)
return function(e){var n=e.draggableInfo,o=e.dragResult
return n.invalidateShadow?t({draggableInfo:n,dragResult:o}):null}}function Ze(e){var t,n,o,r=(n=(t=e).draggables,o=function(e){var t=e.layout
return function(e,n){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2]
return function e(n,o,r,i){var a=4<arguments.length&&void 0!==arguments[4]&&arguments[4]
if(i<r)return r
if(r===i){var l=t.getBeginEnd(n[r]),s=l.begin,c=l.end
return a?o<(c+s)/2?r:r+1:r}var u=Math.floor((i+r)/2),d=t.getBeginEnd(n[u]),f=d.begin,g=d.end
return o<f?e(n,o,r,u-1,a):g<o?e(n,o,u+1,i,a):a?o<(g+f)/2?u:u+1:u}(e,n,0,e.length-1,o)}}({layout:t.layout}),function(e){var t=e.dragResult,r=t.shadowBeginEnd,i=t.pos
if(r)return r.begin+r.beginAdjustment<=i&&r.end>=i?null:i<r.begin+r.beginAdjustment?o(n,i):i>r.end?o(n,i)+1:n.length
var a=o(n,i,!0)
return null!==a?a:n.length})
return function(e){var t=e.dragResult,n=null
return null!==t.pos&&null===(n=r({dragResult:t}))&&(n=t.addedIndex),{addedIndex:n}}}function $e(){var e=null
return function(t){var n=t.dragResult,o=n.addedIndex,r=n.shadowBeginEnd
o!==e&&null!==e&&r&&(r.beginAdjustment=0),e=o}}function et(e){var t=e.element,n=e.draggables,o=e.layout,r=e.getOptions,i=null
return function(e){var l=e.dragResult,s=l.addedIndex,c=l.removedIndex,u=l.elementSize
if(null===c)if(null!==s){if(!i){var g=o.getBeginEndOfContainer()
g.end=g.begin+o.getSize(t)
var p=o.getScrollSize(t)>o.getSize(t)?g.begin+o.getScrollSize(t)-o.getScrollValue(t):g.end,m=0<n.length?o.getBeginEnd(n[n.length-1]).end-n[n.length-1][a]:g.begin
if(p<m+u){(i=window.document.createElement("div")).className=d+" "+r().orientation
var v=0<n.length?u+m-p:u
return o.setSize(i.style,"".concat(v,"px")),t.appendChild(i),t[f]=i,{containerBoxChanged:!0}}}}else if(i){o.setTranslation(i,0)
var h=i
return i=null,t.removeChild(h),{containerBoxChanged:!(t[f]=null)}}}}function tt(e){var t=e.draggables,n=e.layout,o=null,r=null
return function(e){var i=e.dragResult,a=i.addedIndex,l=i.removedIndex,s=i.elementSize
if(a!==o||l!==r){for(var c=0;c<t.length;c++)if(c!==l){var u=t[c],d=0
null!==l&&l<c&&(d-=s),null!==a&&a<=c&&(d+=s),n.setTranslation(u,d)}return{addedIndex:o=a,removedIndex:r=l}}}}function nt(e){var t=e.draggables,n=e.layout,o=null
return function(e){var r=e.draggableInfo,i=e.dragResult,a=i.addedIndex,l=i.removedIndex,s=i.elementSize,c=i.pos,u=i.shadowBeginEnd
if(null===c)return{shadowBeginEnd:o=null}
if(null===a||!r.invalidateShadow&&a===o)return null
var d=a-1,f=Number.MIN_SAFE_INTEGER,g=0,p=0,m=null,v=null
if(d===l&&d--,-1<d){var h=n.getSize(t[d])
if(v=n.getBeginEnd(t[d]),s<h){var y=(h-s)/2
f=v.end-y}else f=v.end
g=v.end}else v={end:n.getBeginEndOfContainer().begin},g=n.getBeginEndOfContainer().begin
var b=Number.MAX_SAFE_INTEGER,w=a
if(w===l&&w++,w<t.length){var x=n.getSize(t[w])
if(m=n.getBeginEnd(t[w]),s<x){var E=(x-s)/2
b=m.begin+E}else b=m.begin
p=m.begin}else m={begin:n.getContainerRectangles().rect.end},p=n.getContainerRectangles().rect.end-n.getContainerRectangles().rect.begin
var C=v&&m?n.getTopLeftOfElementBegin(v.end):null
return o=a,{shadowBeginEnd:{dropArea:{begin:g,end:p},begin:f,end:b,rect:C,beginAdjustment:u?u.beginAdjustment:0}}}}function ot(){var e=null
return function(t){var n=t.dragResult,o=n.pos,r=n.addedIndex,i=n.shadowBeginEnd
if(null!==o){if(null!=r&&null===e){if(o<i.begin){var a=o-i.begin-5
i.beginAdjustment=a}e=r}}else e=null}}function rt(e){var t=e.getOptions,n=!1,o=t()
return function(e){var t=!!e.dragResult.pos
t!==n&&((n=t)?o.onDragEnter&&o.onDragEnter():o.onDragLeave&&o.onDragLeave())}}function it(e){var t=e.getOptions,n=null,o=t()
return function(e){var t=e.dragResult,r=t.addedIndex,i=t.removedIndex,a=e.draggableInfo,l=a.payload,s=a.element
if(o.onDropReady&&null!==r&&n!==r){var c=n=r
null!==i&&i<r&&c--,o.onDropReady({addedIndex:c,removedIndex:i,payload:l,element:s?s.firstElementChild:void 0})}}}function at(e){return"drop-zone"===e.getOptions().behaviour?lt(e)(Ye,ke,Ge,We,qe,Ue,Je,rt,it):lt(e)(Ye,ke,Ge,We,qe,Qe,Ze,$e,et,tt,nt,Ke,ot,rt,it)}function lt(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o]
var r=n.map((function(t){return t(e)})),i=null
return function(e){return i=r.reduce((function(t,n){return Object.assign(t,n({draggableInfo:e,dragResult:t}))}),i||{addedIndex:null,removedIndex:null,elementSize:null,pos:null,shadowBeginEnd:null})}}}var st=function(e,t){var n=function(e){return function(t){var n,o,i,a,l,s,u,d=Object.assign({},x,t),f=null,g=null,p=(o=w,i=Xe(n=e),a=o(),L(n,"".concat(c," ").concat(a.orientation)),{element:n,draggables:i,getOptions:o,layout:Y(n,a.orientation,a.animationDuration)}),m=at(p),v=He(p),h=function(e,t){var n=[]
function o(){n&&(n.forEach((function(e){return e.removeEventListener("scroll",t)})),window.removeEventListener("scroll",t))}return function(){for(var t=e;t;)(A(t,"x")||A(t,"y"))&&n.push(t),t=t.parentElement}(),{dispose:function(){o(),n=null},start:function(){n&&(n.forEach((function(e){return e.addEventListener("scroll",t)})),window.addEventListener("scroll",t))},stop:o}}(e,(function(){p.layout.invalidateRects(),y()}))
function y(){null!==g&&(g.invalidateShadow=!0,f=m(g),g.invalidateShadow=!1)}function b(e,t){for(var n=Xe(t),o=0;o<n.length;o++)e[o]=n[o]
for(var r=0;r<e.length-n.length;r++)e.pop()}function w(){return d}return{element:e,draggables:p.draggables,isDragRelevant:(l=p,s=l.element,u=l.getOptions,function(e,t){var n=u()
if(n.shouldAcceptDrop)return n.shouldAcceptDrop(e.getOptions(),t)
var o=e.getOptions()
return"copy"!==n.behaviour&&z(s,"."+r)!==e.element&&(e.element===s||!(!o.groupName||o.groupName!==n.groupName))}),layout:p.layout,dispose:function(e){var t
h.dispose(),t=e.element,st.wrapChild&&Array.prototype.forEach.call(t.children,(function(e){e.nodeType===Node.ELEMENT_NODE&&N(e,r)&&(t.insertBefore(e.firstElementChild,e),t.removeChild(e))}))},prepareDrag:function(e,t){var n=e.element,o=p.draggables
b(o,n),e.layout.invalidateRects(),o.forEach((function(e){return Ve(e,!0,w().animationDuration)})),h.start()},handleDrag:function(e){return f=m(g=e)},handleDrop:function(t){h.stop(),f&&f.dropPlaceholderContainer&&e.removeChild(f.dropPlaceholderContainer),g=null,m=at(p),v(t,f),f=null},fireRemoveElement:function(){v(g,Object.assign({},f,{addedIndex:null}),!0),f=null},getDragResult:function(){return f},getTranslateCalculator:function(e){return tt(p)(e)},onTranslated:function(){y()},setDraggables:function(){b(p.draggables,e)},getScrollMaxSpeed:function(){return st.maxScrollSpeed},shouldUseTransformForGhost:function(){return!0===st.useTransformForGhost},getOptions:w,setOptions:function(e){d=!1===(!(1<arguments.length&&void 0!==arguments[1])||arguments[1])?Object.assign({},x,e):Object.assign({},x,d,e)}}}}(e)(t)
return e[o]=n,Fe.register(n),{dispose:function(){Fe.unregister(n),n.dispose(n)},setOptions:function(e){n.setOptions(e)}}}
function ct(e,t,n){Object.defineProperty(e,n,{set:function(e){t[n]=e},get:function(){return t[n]}})}st.wrapChild=!0,st.cancelDrag=function(){Fe.cancelDrag()},st.isDragging=function(){return Fe.isDragging()}
var ut=function(e,t){return console.warn('default export is deprecated. please use named export "smoothDnD"'),st(e,t)}
ut.cancelDrag=function(){st.cancelDrag()},ut.isDragging=function(){return st.isDragging()},ct(ut,st,"useTransformForGhost"),ct(ut,st,"maxScrollSpeed"),ct(ut,st,"wrapChild"),ct(ut,st,"dropHandler"),e.smoothDnD=st,e.constants=w,e.dropHandlers=V,e.default=ut,Object.defineProperty(e,"__esModule",{value:!0})}))
