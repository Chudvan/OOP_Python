(function(){const e={PUBLIC_KEY:window.UPLOADCARE_PUBLIC_KEY,CDN_BASE:window.UPLOADCARE_CDN_BASE||"https://ucarecdn.com/",UPLOAD_BASE:window.UPLOADCARE_UPLOAD_BASE||"https://upload.uploadcare.com/"}
async function t(t){if("undefined"==typeof uploadcare){const e=t.config.imageUploadcare_libraryUrl
if(!e)return void t.showNotification("Image Widget is not available.","warning")
var n=t.showNotification("Image Widget is loading...","progress",0)
if(!await new Promise((t=>CKEDITOR.scriptLoader.load(e,t,this,!0))))return void n.update({message:"Image Widget load error.",type:"warning",important:!0})
n.update({progress:1}),n.hide()}uploadcare.openDialog(null,{publicKey:e.PUBLIC_KEY,crop:"free, 16:9, 4:3, 1:1",validators:[a]}).done((function(e){var a=t.showNotification("Image is uploading...","progress",0)
e.progress((function(e){a.update({progress:e.progress})})).done((function(e){a.update({progress:1})
o({src:e.cdnUrl,alt:"",width:e.crop?e.crop.width:e.originalImageInfo.width,height:e.crop?e.crop.height:e.originalImageInfo.height,name:e.name},(function(e){t.insertHtml(e.outerHTML),a.update({message:"Image uploaded.",type:"success",important:!0})}))})).fail((function(e,t){const o="Unable to insert image: "+e
a.update({message:o,type:"warning",important:!0}),console.error("image-uploadcare-ckeditor-plugin ::",o,t)}))})).fail((function(e){}))}function a(e){let t
if(t=e.isStored?e.mimeType:e.sourceInfo&&e.sourceInfo.file&&e.sourceInfo.file.type,t&&!t.startsWith("image/"))throw new Error("image")}function o(e,t=null){const a=new Image
for(let o in e)a[o]=e[o]
return a.onload=a.onerror=function(){a.onload=null,a.onerror=null,t&&t(a)},a}async function n(t,a,o,n){t.fire("lockSnapshot",{dontUpdate:!0})
const i=t.showNotification("Image is uploading...","progress",0)
try{a.setAttribute("data-uploading",n.dropBatchIndex)
const c=t.getSelection().getSelectedElement(),d=`img[data-uploading="${n.dropBatchIndex}"]`,m=!!c&&(c.$.matches(d)||c.$.querySelector(d))
let l,u=void 0
m&&(u=t.createRange(),u.moveToPosition(c,CKEDITOR.POSITION_AFTER_END)),t.insertHtml(a.outerHTML,"html",u)
try{l=await o((e=>{i.update({progress:e.progress})}))}catch(s){const e="Unable to upload image: "+(s.message||"Something went wrong :(")
throw new Error(e)}const g={src:e.CDN_BASE+l.file_id+"/",alt:"",width:l.image_info&&l.image_info.width,height:l.image_info&&l.image_info.height,name:l.original_filename||l.filename}
if(""!==t.mode&&"source"!==t.mode||(i.update({message:"Image uploaded. Waiting for you to return to wysiwyg...",type:"success",important:!0}),await new Promise(((e,a)=>{let o=null
const n=a=>{"wysiwyg"===t.mode&&(t.removeListener("mode",n),clearTimeout(o),e())}
t.on("mode",n),o=setTimeout((()=>{t.removeListener("mode",n),e()}),6e4)}))),"wysiwyg"===t.mode){const{imgElement:e,imgWidget:o}=r(t,a)
if(o){!(!o.data.width&&!o.data.height)&&(delete g.width,delete g.height),o.setData(g),o.parts.image.removeAttribute("data-uploading"),o.parts.image.removeAttribute("data-cke-saved-name"),o.parts.image.setAttribute("name",g.name)}else e&&(e.removeAttribute("data-uploading"),e.removeAttribute("data-cke-saved-name"),e.setAttributes(g))}i.update({message:"Image uploaded.",type:"success",important:!0})}catch(s){const e=s.message||"Image upload error."
if(i.update({message:e,type:"warning",important:!0}),console.error("image-uploadcare-ckeditor-plugin ::",e,s),"wysiwyg"===t.mode){const{imgElement:e,imgWidget:o}=r(t,a)
o?t.widgets.del(o):e&&e.remove()}}finally{t.fire("unlockSnapshot"),t.fire("saveSnapshot")}}function r(e,t){const a=e.document?e.document.findOne(`img[src="${t.src}"][name="${t.name}"]`):null
let o=a?e.widgets.getByElement(a):null
return o&&"image"!==o.name&&(o=null),{imgElement:a,imgWidget:o}}async function i(t,a){const o=new URL(e.UPLOAD_BASE+"from_url/status/")
o.searchParams.append("token",t)
const n=await fetch(o)
if(!n.ok){const e=await n.text()
throw new Error(e)}const r=await n.json(),{status:s}=r
switch(s){case"progress":a({progress:r.done/r.total})
break
case"success":return a({progress:1}),r
case"error":throw new Error(r.error)
case"unknown":case"waiting":default:a({progress:0})}return await new Promise((e=>setTimeout(e,500))),await i(...arguments)}CKEDITOR.plugins.add("image-uploadcare",{requires:"notification",onLoad:function(){CKEDITOR.addCss("img[data-uploading] {opacity: 0.3}")},init:function(a){a.addCommand("image-uploadcare-insert",{allowedContent:"img[!src,alt,width,height,name,data-uploading]",requiredContent:"img[src,alt,width,height,name]",exec:t}),a.ui.addButton("image-uploadcare",{label:"Insert Image",icon:"image",command:"image-uploadcare-insert",toolbar:"insert,10"}),a.config.imageUploadcare_hideDefaultImageToolbarButton&&a.once("contentDom",(function(){var e=this.config.toolbarLocation,t=this.ui.space(e)
if(t){var a=t.findOne(".cke_button__image")
a&&a.setStyle("display","none")}}))
let r=-1
a.on("paste",(async function(t){const s=function(t){const a={files:[],urls:[]}
if("html"!==t.data.type||!t.data.dataTransfer||t.data.dataTransfer.getTransferType()!==CKEDITOR.DATA_TRANSFER_EXTERNAL||!["paste","drop"].includes(t.data.method))return a
const o=t.data.dataTransfer.getFilesCount()
for(let e=0;e<o;e++){let o=t.data.dataTransfer.getFile(e)
o.type.startsWith("image/")&&a.files.push(o)}if(0===o){const o=t.data.dataTransfer.getData("text/html")
if(o&&o.trim().match(/^<img[^>]+>$/)){const o=t.data.dataTransfer.getData("text/plain")
o&&!o.startsWith(e.CDN_BASE)&&a.urls.push(o)}}return a}(t)
if(0===s.files.length&&0===s.urls.length)return
t.cancel(),r++
const c={dropBatchIndex:r}
s.files.forEach((t=>{(async function(t,a,r){const i=URL.createObjectURL(a)
try{const s=o({src:i,name:a.name},(()=>{t.execCommand("autogrow")})),c=t=>async function(t,a){const o=e.UPLOAD_BASE+"base/",n=new FormData
n.append("UPLOADCARE_PUB_KEY",e.PUBLIC_KEY),n.append("UPLOADCARE_STORE","1"),n.append(t.name,t)
const r=await fetch(o,{method:"POST",body:n})
if(!r.ok){const e=await r.text()
throw new Error(e)}const i=await r.json()
a({progress:.5})
const s=i[t.name]
if(!s)throw new Error(`Upload response does not have the file id for "${t.name}".`)
const c=await async function(t){const a=new URL(e.UPLOAD_BASE+"info/")
a.searchParams.append("pub_key",e.PUBLIC_KEY),a.searchParams.append("file_id",t)
const o=await fetch(a)
if(!o.ok){const e=await o.text()
throw new Error(e)}return await o.json()}(s)
return a({progress:1}),c}(a,t)
await n(t,s,c,r)}finally{URL.revokeObjectURL(i)}})(a,t,c)})),s.urls.forEach((t=>{(async function(t,a,r){const s=o({src:a,name:"image"+Date.now()},(()=>{t.execCommand("autogrow")})),c=t=>async function(t,a){const o=e.UPLOAD_BASE+"from_url/",n=new FormData
n.append("pub_key",e.PUBLIC_KEY),n.append("store","1"),n.append("source_url",t)
const r=await fetch(o,{method:"POST",body:n})
if(!r.ok){const e=await r.text()
throw new Error(e)}const s=await r.json(),{type:c}=s
if("file_info"===c){a({progress:1})
return s}if("token"===c){const e=s.token
return await i(e,a)}throw new Error("Unknown upload response type: "+c)}(a,t)
await n(t,s,c,r)})(a,t,c)}))}))}})})()
