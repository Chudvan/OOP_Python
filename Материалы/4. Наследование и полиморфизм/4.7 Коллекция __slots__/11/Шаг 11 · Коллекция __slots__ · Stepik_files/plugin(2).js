/**
 * This plugin is based on official Code Snippet plugin
 * (https://ckeditor.com/cke4/addon/codesnippet)
 *
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
"use strict";(function(){var e=!CKEDITOR.env.ie||CKEDITOR.env.version>8
function t(e){CKEDITOR.tools.extend(this,e),this.queue=[],this.init?this.init(CKEDITOR.tools.bind((function(){for(var e;e=this.queue.pop();)e.call(this)
this.ready=!0}),this)):this.ready=!0}CKEDITOR.plugins.add("codesnippet",{requires:"widget,dialog",lang:"ar,az,bg,ca,cs,da,de,de-ch,el,en,en-au,en-gb,eo,es,es-mx,et,eu,fa,fi,fr,fr-ca,gl,he,hr,hu,id,it,ja,km,ko,ku,lt,lv,nb,nl,no,oc,pl,pt,pt-br,ro,ru,sk,sl,sq,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",icons:"codesnippet",hidpi:!0,beforeInit:function(e){e._.codesnippet={},this.setHighlighter=function(t){e._.codesnippet.highlighter=t
var i=e._.codesnippet.langs=e.config.codeSnippet_languages||t.languages
e._.codesnippet.langsRegex=new RegExp("(?:^|\\s)language-("+CKEDITOR.tools.objectKeys(i).join("|")+")(?:\\s|$)")}},onLoad:function(){CKEDITOR.dialog.add("codeSnippet",this.path+"dialogs/codesnippet.js")},init:function(t){t.ui.addButton&&t.ui.addButton("CodeSnippet",{label:t.lang.codesnippet.button,command:"codeSnippet",toolbar:"insert,30",click:function(){var e=this._getSelectedText(t)
e?t.insertHtml("<pre><code>"+e+"</code></pre>"):t.execCommand(this.command)},_getSelectedText(e){var t=e.getSelection().getSelectedText()
return t&&(t=CKEDITOR.tools.htmlEncode(t.trim())),t}}),function(t){var i=t.config.codeSnippet_codeClass||"hljs",n=/\r?\n/g,o=new CKEDITOR.dom.element("textarea"),s=t.lang.codesnippet
t.widgets.add("codeSnippet",{allowedContent:"pre; code(language-*)",requiredContent:"pre",styleableElements:"pre",template:'<pre><code class="'+i+'"></code></pre>',dialog:"codeSnippet",pathName:s.pathName,mask:!0,parts:{pre:"pre",code:"code"},highlight:function(){var i=this,o=this.data,s=function(t){i.parts.code.setHtml(e?t:t.replace(n,"<br>"))}
s(CKEDITOR.tools.htmlEncode(o.code)),t._.codesnippet.highlighter.highlight(o.code,o.lang,(function(e){t.fire("lockSnapshot"),s(e),t.fire("unlockSnapshot")}))},data:function(){var e=this.data,t=this.oldData
e.code&&this.parts.code.setHtml(CKEDITOR.tools.htmlEncode(e.code)),t&&e.lang!=t.lang&&this.parts.code.removeClass("language-"+t.lang),e.lang&&this.parts.code.addClass("language-"+e.lang),e.code&&this.highlight(),this.oldData=CKEDITOR.tools.copy(e)},upcast:function(e,n){if("pre"==e.name){var s,a=h(e)
if(1==a.length&&"code"==(s=a[0]).name&&1==s.children.length&&s.children[0].type==CKEDITOR.NODE_TEXT){var l=t._.codesnippet.langsRegex.exec(s.attributes.class)
return l&&(n.lang=l[1]),o.setHtml(s.getHtml()),n.code=o.getValue(),s.addClass(i),e}}},downcast:function(e){var t=e.getFirst("code")
return t.children.length=0,t.removeClass(i),t.add(new CKEDITOR.htmlParser.text(CKEDITOR.tools.htmlEncode(this.data.code))),e}})
var a=/^[\s\n\r]*$/
function h(e){for(var t,i=[],n=e.children,o=n.length-1;o>=0;o--)(t=n[o]).type==CKEDITOR.NODE_TEXT&&t.value.match(a)||i.push(t)
return i}}(t)},afterInit:function(t){if(!t._.codesnippet.highlighter){var i=new CKEDITOR.plugins.codesnippet.highlighter({languages:{apache:"Apache",bash:"Bash",coffeescript:"CoffeeScript",cpp:"C++",cs:"C#",css:"CSS",diff:"Diff",html:"HTML",http:"HTTP",ini:"INI",java:"Java",javascript:"JavaScript",json:"JSON",makefile:"Makefile",markdown:"Markdown",nginx:"Nginx",objectivec:"Objective-C",perl:"Perl",php:"PHP",python:"Python",ruby:"Ruby",sql:"SQL",vbscript:"VBScript",xhtml:"XHTML",xml:"XML"},init:function(i){var n=this
if(!t.config.codeSnippet_highlightjsLib)throw new Error("codeSnippet_highlightjsLib is required")
if(!t.config.codeSnippet_highlightjsThemes)throw new Error("codeSnippet_highlightjsThemes is required")
var o=function(){n.hljs=window.hljs,i()}
if(e)if("hljs"in window)o()
else{let e=t.config.codeSnippet_highlightjsLib
CKEDITOR.scriptLoader.load(e,o)}if(t.addContentsCss){let e=t.config.codeSnippet_theme||"default",i=t.config.codeSnippet_highlightjsThemes
t.addContentsCss(i.replace("{THEME}",e))}},highlighter:function(e,t,i){var n
t?n=!!this.hljs.getLanguage(t)?this.hljs.highlight(t,e,!0):{value:e}:n=this.hljs.highlightAuto(e)
n&&i(n.value)}})
this.setHighlighter(i)}}}),CKEDITOR.plugins.codesnippet={highlighter:t},t.prototype.highlight=function(){var e=arguments
this.ready?this.highlighter.apply(this,e):this.queue.push((function(){this.highlighter.apply(this,e)}))}})()
