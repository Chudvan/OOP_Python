"use strict"
CKEDITOR.plugins.add("katex",{requires:"widget,dialog",icons:"katex",hidpi:!0,onLoad(){CKEDITOR.dialog.add("katexEdit",this.path+"dialogs/edit.js"),CKEDITOR.addCss('\n        .cke_widget_katex[data-math-display-mode="true"] {\n          display: block;\n          text-align: center;\n        }\n\n        .cke_widget_katex > .cke_widget_element {\n          display: inline-block;\n          overflow: hidden;\n          vertical-align: bottom;\n        }\n\n        .cke_widget_katex[data-math-display-mode="true"] > .cke_widget_element {\n          display: block;\n        }\n\n        .cke_widget_katex .katex-error {\n          font-size: 12px;\n          color: #666 !important;\n        }\n\n        .cke_widget_katex .katex-error::before {\n          content: attr(title);\n\n          display: block;\n          margin: 0 0 6px;\n          padding: 0 0 3px;\n\n          border-bottom: 1px dotted;\n          color: #cc0000;\n        }\n      ')
const t=CKEDITOR.dom.element.prototype.isBlockBoundary
CKEDITOR.dom.element.prototype.isBlockBoundary=function(){const e=t.apply(this,arguments)
try{if(e&&this.getAscendant((t=>t.data&&"katex"===t.data("widget"))))return!1}catch(n){console.error(n)}return e}},init(t){t._.katex={state:"loading"},t.widgets.add("katex",function(t){const e=t.config.katexClass||"math-tex"
return{inline:!0,button:"Math",pathName:"math",dialog:"katexEdit",mask:!0,requiredContent:"span("+e+")",allowedContent:"span(!"+e+")",styleableElements:"span",template:'<span class="'+e+'"></span>',parts:{span:"span"},defaults:{math:"\\(x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}\\)"},_delimiters:t.config.katexDelimiters||[["\\(","\\)",!1],["\\[","\\]",!0],["$$","$$",!0],["$","$",!1]],_katexOptions:Object.assign({output:"html",throwOnError:!1},t.config.katexOptions),renderKatexHtml(e){let n
const a=window.katex
if(a){const{expr:t,displayMode:i}=this.parseMath(e),s=Object.assign({},this._katexOptions,{displayMode:i})
n=a.renderToString(t||"(empty)",s)}else n=`<span data-no-katex="${t._.katex.state}">${CKEDITOR.tools.htmlEncode(e)}</span>`
return n},renderKatex(){t.fire("lockSnapshot")
try{const e=this.renderKatexHtml(this.data.math)
this.parts.span.setHtml(e)}finally{t.fire("unlockSnapshot")}},parseMath(t){if(!t)return{expr:"",delimiter:null,displayMode:!1}
t=t.trim()
const e=this._delimiters.find((e=>t.startsWith(e[0])&&t.endsWith(e[1])))
return e?{expr:t.substring(e[0].length,t.length-e[1].length).trim(),delimiter:e,displayMode:!!e[2]}:{expr:t,delimiter:null,displayMode:!1}},generateMath(t,e){const n=this._delimiters.find((t=>e===!!t[2]))
if(!n)throw new Error("Unable to find math delimiter with displayMode="+e)
return n[0]+t.trim()+n[1]},data(){const t=this.data.math,{displayMode:e}=this.parseMath(t)
this.wrapper.setAttribute("data-math",t),this.wrapper.setAttribute("data-math-display-mode",e),this.renderKatex()},upcast(t,n){if("span"!==t.name||!t.hasClass(e))return null
if(t.children.length>1||t.children[0].type!==CKEDITOR.NODE_TEXT)return null
const a=CKEDITOR.tools.htmlDecode(t.children[0].value),{expr:i}=this.parseMath(a)
return i?(n.math=a,t):(t.children[0].remove(),null)},downcast(t){const e=CKEDITOR.tools.htmlEncode(this.data.math)
return t.children[0].replaceWith(new CKEDITOR.htmlParser.text(e)),t}}}(t)),this.loadLib(t)},loadLib(t){if(t.elementMode===CKEDITOR.ELEMENT_MODE_INLINE)this.attachLibCssToTheDocument(t)
else if(t.addContentsCss){const e=this.getLibCss(t)
t.addContentsCss(e)}if("katex"in window)t._.katex.state="loaded"
else{const e=this.getLibJs(t)
CKEDITOR.scriptLoader.load(e,(e=>{t._.katex.state=e?"loaded":"loaderror",Object.values(t.widgets.instances).filter((t=>"katex"===t.name)).forEach((t=>t.renderKatex()))
const n=CKEDITOR.dialog.getCurrent()
n&&"katexEdit"===n.getName()&&n.updatePreview()}))}},attachLibCssToTheDocument(t,e){const n=this.getLibCss(t)
if(!document.head.querySelector(`link[href="${n}"]`)){const t=document.createElement("link")
t.rel="stylesheet",t.href=n,"function"==typeof e&&(t.onload=()=>e(!0),t.onerror=()=>e(!1)),document.head.appendChild(t)}},getLibCss(t){const e=t.config.katexLibCss
if(!e)throw new Error("ckeditor.config.katexLibCss must be defined")
return e},getLibJs(t){const e=t.config.katexLibJs
if(!e)throw new Error("ckeditor.config.katexLibJs must be defined")
return e}})
