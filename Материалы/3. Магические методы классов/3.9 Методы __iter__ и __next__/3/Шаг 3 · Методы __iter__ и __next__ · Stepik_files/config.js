/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */
function configureLinkDialog(e){e.minHeight=170,e.minWidth=400
var t=e.getContents("info"),a=t.get("url")
a.onKeyUp=function(){},a.setup=function(e){this.allowOnChange=!1
var t=""
if("email"===e.type)t="mailto:"+e.email.address
else if(e.url){t=("string"==typeof e.url.protocol?e.url.protocol:"")+e.url.url}this.setValue(t),this.focus(),this.allowOnChange=!0},a.commit=function(e){e.url||(e.url={}),e.url.url=this.getValue(),e.url.protocol="",e.type="url",this.allowOnChange=!1},t.remove("linkType"),t.remove("protocol"),t.remove("anchorOptions"),t.remove("emailOptions"),t.remove("telOptions"),t.remove("browse")
var i=t.get("linkDisplayText")
t.elements.removeObject(i),t.elements.push(i)}CKEDITOR.editorConfig=function(e){e.autoUpdateElement=!1,e.autoGrow_onStartup=!0,e.autoGrow_bottomSpace=25
var t=+getComputedStyle(document.documentElement).getPropertyValue("--z-ckeditor-base")
e.baseFloatZIndex=t||1e4,e.katexLibJs=CKEDITOR.getUrl("../katex/katex.js"),e.katexLibCss=CKEDITOR.getUrl("../katex/katex.css"),e.codeSnippet_highlightjsLib=CKEDITOR.getUrl("../highlightjs/highlight.pack.js"),e.codeSnippet_highlightjsThemes=CKEDITOR.getUrl("../highlightjs/styles/{THEME}.css"),e.codeSnippet_theme="googlecode",e.codeSnippet_languages={"no-highlight":"No highlight","1c":"1C",actionscript:"ActionScript",apache:"Apache",applescript:"AppleScript",avrasm:"Avrasm",axapta:"Axapta",bash:"Bash",brainfuck:"Brainfuck",clojure:"Clojure",cmake:"CMake",coffeescript:"CoffeeScript",cpp:"C++",cs:"C#",css:"CSS",d:"D",dart:"Dart",delphi:"Delphi",diff:"Diff",django:"Django",dos:"Dos",erlang:"Erlang",glsl:"GLSL",go:"Go",haskell:"Haskell",html:"HTML",http:"HTTP",ini:"INI",java:"Java",javascript:"JavaScript",json:"JSON",kotlin:"Kotlin",lisp:"Lisp",lua:"Lua",makefile:"Makefile",markdown:"Markdown",matlab:"MATLAB",mel:"Mel",nginx:"Nginx",objectivec:"Objective-C",parser3:"Parser 3",perl:"Perl",php:"PHP",profile:"Profile",python:"Python",r:"R",rib:"Rib",rsl:"Rsl",ruby:"Ruby",rust:"Rust",scala:"Scala",smalltalk:"Smalltalk",sql:"SQL",tex:"TeX",vala:"Vala",vbscript:"VBScript",vhdl:"VHDL",xhtml:"XHTML",xml:"XML",yaml:"YAML"},e.codemirror={matchTags:!1,onLoad(e,t){e.display.wrapper.classList.add("cke_enable_context_menu")}},e.toolbarGroups=[{name:"clipboard",groups:["clipboard","undo"]},{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"styles",groups:["styles"]},{name:"editing",groups:["find","selection","spellchecker","editing"]},{name:"colors",groups:["colors"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi","paragraph"]},{name:"links",groups:["links"]},{name:"insert",groups:["insert"]},{name:"tools",groups:["tools"]},{name:"document",groups:["mode","document","doctools"]},{name:"forms",groups:["forms"]},{name:"others",groups:["others"]},{name:"about",groups:["about"]}],e.toolbar_StepEditToolbar=[{name:"clipboard",items:["Undo","Redo"]},{name:"basicstyles",items:["Bold","Italic","Underline","Code"]},{name:"styles",items:["Styles"]},{name:"paragraph",items:["TextColor","NumberedList","BulletedList","Blockquote","-","JustifyLeft","JustifyCenter","JustifyRight"]},{name:"links",items:["Link","Unlink"]},{name:"insert",items:["image-uploadcare","Image","Katex","Table","CodeSnippet"]},{name:"document",items:["Source"]}],e.toolbar_CommentToolbar=[{name:"basicstyles",items:["Bold","Italic","Underline","Code"]},{name:"styles",items:["Styles"]},{name:"paragraph",items:["NumberedList","BulletedList","Blockquote"]},{name:"links",items:["Link","Unlink"]},{name:"insert",items:["image-uploadcare","Image","Katex","CodeSnippet"]}],e.toolbar_AnnouncementToolbar=[{name:"basicstyles",items:["Bold","Italic","Underline"]},{name:"styles",items:["Styles"]},{name:"paragraph",items:["NumberedList","BulletedList"]},{name:"links",items:["Link","Unlink"]},{name:"insert",items:["image-uploadcare","Image","CodeSnippet"]},{name:"document",items:["Source"]}],e.toolbar_InstructionToolbar=[{name:"basicstyles",items:["Bold","Italic","Underline","Code"]},{name:"styles",items:["Styles"]},{name:"paragraph",items:["NumberedList","BulletedList","Blockquote"]},{name:"links",items:["Link","Unlink"]},{name:"insert",items:["image-uploadcare","Image","Katex","CodeSnippet"]},{name:"document",items:["Source"]}],e.toolbar_InstructionRubricToolbar=[{name:"basicstyles",items:["Bold","Italic","Underline","Code"]},{name:"styles",items:["Styles"]},{name:"paragraph",items:["NumberedList","BulletedList","Blockquote"]},{name:"links",items:["Link","Unlink"]},{name:"insert",items:["image-uploadcare","Image","Katex","CodeSnippet"]}],e.toolbar_FreeAnswerQuizToolbar=[{name:"clipboard",items:["Undo","Redo"]},{name:"basicstyles",items:["Bold","Italic","Underline","Code"]},{name:"styles",items:["Styles"]},{name:"paragraph",items:["NumberedList","BulletedList"]},{name:"links",items:["Link","Unlink"]},{name:"insert",items:["image-uploadcare","Image","Katex","CodeSnippet"]}],e.toolbar_CourseDescriptionToolbar=[{name:"clipboard",items:["Undo","Redo"]},{name:"basicstyles",items:["Bold","Italic","Underline"]},{name:"styles",items:["Styles"]},{name:"paragraph",items:["NumberedList","BulletedList"]},{name:"links",items:["Link","Unlink"]},{name:"insert",items:["image-uploadcare","Image","CodeSnippet"]},{name:"document",items:["Source"]}],e.toolbar_CourseRequirementsToolbar=[{name:"basicstyles",items:["Bold","Italic","Underline"]},{name:"paragraph",items:["NumberedList","BulletedList"]},{name:"links",items:["Link","Unlink"]}],e.toolbar_CourseLearningFormatToolbar=[{name:"basicstyles",items:["Bold","Italic","Underline"]},{name:"paragraph",items:["NumberedList","BulletedList"]},{name:"links",items:["Link","Unlink"]}],e.toolbar_ReviewTextToolbar=[{name:"basicstyles",items:["Bold","Italic","Underline","Code"]},{name:"styles",items:["Styles"]},{name:"paragraph",items:["NumberedList","BulletedList","Blockquote"]},{name:"links",items:["Link","Unlink"]},{name:"insert",items:["Katex","CodeSnippet"]},{name:"document",items:["Source"]}],e.colorButton_colors="66cc66,64b0f4,a03881,ff4363",e.linkShowAdvancedTab=!1,e.linkShowTargetTab=!1,e.linkDefaultProtocol="https://",e.magicline_color="rgba(133, 214, 133)",e.resize_enabled=!1,e.imageUploadcare_libraryUrl=CKEDITOR.getUrl("../uploadcare.js"),e.imageUploadcare_hideDefaultImageToolbarButton=!0,e.clipboard_handleImages=!1,e.disableNativeSpellChecker=!1,e.extraAllowedContent={"*":{styles:{color:!0,"background-color":!0,background:!0,"font-size":!0,"font-variant":!0,"object-fit":!0,"text-align":!0,border:!0,"border-width":!0,"border-style":!0,"border-color":!0}},abbr:{attributes:["title"]},"sub sup":!0,"tt code kbd samp":!0,"i cite em var address dfn":!0,"details summary":!0,iframe:{attributes:["!src","width","height","sandbox","scrolling","allowfullscreen"]},audio:{attributes:["!src","controls"]},"kotlin-runnable":{attributes:["theme","data-target-platform","args","data-min-compiler-version","data-highlight-only","data-version","indent","auto-indent"]},"model-viewer":{attributes:["!src"]},th:{attributes:["colspan","rowspan"]}}},CKEDITOR.on("dialogDefinition",(function(e){var t=e.data.name,a=e.data.definition
"link"==t&&configureLinkDialog(a)}))
