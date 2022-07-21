/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
CKEDITOR.plugins.add("basicstyles",{lang:"af,ar,az,bg,bn,bs,ca,cs,cy,da,de,de-ch,el,en,en-au,en-ca,en-gb,eo,es,es-mx,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,oc,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",icons:"bold,italic,underline,strike,subscript,superscript,code",hidpi:!0,init:function(e){var t=0,s=function(s,n,r,c){if(c){var o=new CKEDITOR.style(c),l=i[r]
l.unshift(o),e.attachStyleStateChange(o,(function(t){!e.readOnly&&e.getCommand(r).setState(t)})),e.addCommand(r,new CKEDITOR.styleCommand(o,{contentForms:l})),e.ui.addButton&&e.ui.addButton(s,{label:n,command:r,toolbar:"basicstyles,"+(t+=10)})}},i={bold:["strong","b",["span",function(e){var t=e.styles["font-weight"]
return"bold"==t||+t>=700}]],italic:["em","i",["span",function(e){return"italic"==e.styles["font-style"]}]],underline:["u",["span",function(e){return"underline"==e.styles["text-decoration"]}]],strike:["s","strike",["span",function(e){return"line-through"==e.styles["text-decoration"]}]],subscript:["sub"],superscript:["sup"],code:["code"]},n=e.config,r=e.lang.basicstyles
s("Bold",r.bold,"bold",n.coreStyles_bold),s("Italic",r.italic,"italic",n.coreStyles_italic),s("Underline",r.underline,"underline",n.coreStyles_underline),s("Strike",r.strike,"strike",n.coreStyles_strike),s("Subscript",r.subscript,"subscript",n.coreStyles_subscript),s("Superscript",r.superscript,"superscript",n.coreStyles_superscript),s("Code",r.code,"code",n.coreStyles_code),e.setKeystroke([[CKEDITOR.CTRL+66,"bold"],[CKEDITOR.CTRL+73,"italic"],[CKEDITOR.CTRL+85,"underline"]])}}),CKEDITOR.config.coreStyles_bold={element:"strong",overrides:"b"},CKEDITOR.config.coreStyles_italic={element:"em",overrides:"i"},CKEDITOR.config.coreStyles_underline={element:"u"},CKEDITOR.config.coreStyles_strike={element:"s",overrides:"strike"},CKEDITOR.config.coreStyles_subscript={element:"sub"},CKEDITOR.config.coreStyles_superscript={element:"sup"},CKEDITOR.config.coreStyles_code={element:"code"}
