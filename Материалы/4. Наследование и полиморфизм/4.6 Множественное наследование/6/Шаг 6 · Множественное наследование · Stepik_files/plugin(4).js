CKEDITOR.plugins.add("image-svgfix",{afterInit:function(i){var t=i.widgets.registered.image
if(t){var e=t.data,a=this
t.data=function(){e.apply(this,arguments),this.wrapper&&a._applySvgSizeFix(this)}}},onLoad:function(){CKEDITOR.addCss('.cke_widget_image.cke_image_nocaption.cke_widget_inline[data-unsized-svg] > img[data-widget="image"]:not([width]):not([height]), .cke_widget_image.cke_image_nocaption.cke_widget_block[data-unsized-svg] > [data-widget="image"] img:not([width]):not([height]) { width: 100vw; } .cke_widget_image:not(.cke_image_nocaption) .cke_image_resizer_wrapper { width: 100%; }')},_applySvgSizeFix:function(i){var t=function(){0===this.width&&0===this.height&&void 0===this.attributes.width&&void 0===this.attributes.height&&(150===this.naturalHeight||300===this.naturalWidth||0===this.naturalHeight&&0===this.naturalWidth)&&i.wrapper.setAttribute("data-unsized-svg","")}
i.wrapper.removeAttribute("data-unsized-svg")
var e=i.parts.image.$
e.complete?t.apply(e):e.onload=function(){i.wrapper&&t.apply(this)}}})
