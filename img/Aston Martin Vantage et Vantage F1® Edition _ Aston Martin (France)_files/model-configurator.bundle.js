(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{266:function(t,e,i){"use strict";i.r(e),i.d(e,"modelConfiguratorController",(function(){return c}));var s=i(6),r=i.n(s),n=i(69),o=i(76),a=i(79);class d{constructor(t){this.el=t,this.config=Object(n.a)(this.el.getAttribute("data-config-id")),this.config&&this.init()}init(){this.initDOM(),this.initMethods(),this.generateHTML(),this.initBindings(),o.a.call(this),this.changeContent(this.initialConfig);var t=[...this.buttons].filter(t=>t.getAttribute("btid")===window.AMLConfig.modelBodyTypeId)[0]||this.buttons[0];this.changeModel(t)}initDOM(){this.interiorHref=this.el.querySelector('[fid="interiorHref"]'),this.detailsHref=this.el.querySelector('[fid="detailsHref"]'),this.pictureContainer=this.el.querySelector('[fid="pictureContainer"]'),this.buttonsContainer=this.el.querySelector('[fid="buttonsContainer"]'),this.createButton=this.el.querySelector('[fid="CreateYourOwnBtn"]'),this.pictures=[],this.buttons=[]}initMethods(){this.generateHTML=()=>{var t=this.el.querySelector('[fid="modelBtn"]'),e=this.el.querySelector('[fid="picture"]'),i=document.createDocumentFragment(),s=document.createDocumentFragment();r()(this.config,n=>{r()(n.models,r=>{var o=t.cloneNode();o.setAttribute("targetid",r.id),o.setAttribute("btid",n.bodyType),o.textContent=r.name,i.appendChild(o),this.buttons.push(o);var a=e.cloneNode(!0);a.setAttribute("targetid",r.id),s.appendChild(a),this.pictures.push(a)})}),t.parentNode.replaceChild(i,t),e.parentNode.replaceChild(s,e)},this.onChangeBtnClick=t=>{this.changeModel(t.target)},this.changeModel=t=>{var e,i=t.getAttribute("targetid"),s=this.pictureContainer.querySelector("[".concat("targetid",'="').concat(i,'"]'));r()(this.config,i=>{i.bodyType===t.getAttribute("btid")&&r()(i.models,i=>{i.id===t.getAttribute("targetid")&&(e=i.image?i.image:{alt:"",src:[{media:"(min-width: 768px)",srcset:""},{media:"(min-width: 1px)",srcset:""}]},i.configuratorURL&&i.configuratorURL.length?(this.createButton.href=i.configuratorURL,this.createButton.classList.remove("hidden")):(this.createButton.href="#",this.createButton.classList.add("hidden")),i.interiorHref&&i.interiorHref.length?(this.interiorHref.href=i.interiorHref,this.interiorHref.classList.remove("hidden")):(this.interiorHref.href="#",this.interiorHref.classList.add("hidden")))})}),s.classList.contains("ready")||(a.a.swapPicture(s,e),s.classList.add("ready"));var n=this.pictureContainer.querySelector(".active");n&&(n.classList.remove("active"),n.setAttribute("aria-hidden",!0)),s.classList.add("active"),s.setAttribute("aria-hidden",!1);var o=this.buttonsContainer.querySelector(".active");o&&o.classList.remove("active"),t.classList.add("active")},this.toggleVisible=t=>{t?this.el.classList.add("model-configurator--hidden"):this.el.classList.remove("model-configurator--hidden")},this.changeContent=t=>{var e=this.queue?this.queue:t;this.currentBodyType=e.bodyType,this.detailsHref&&this.detailsHref.setAttribute("href",e.detailsHref),r()(this.buttons,t=>{t.getAttribute("btid")===e.bodyType?(t.classList.remove("hidden"),t.setAttribute("aria-hidden",!1)):(t.classList.add("hidden"),t.setAttribute("aria-hidden",!0))}),this.toggleVisible(!1),this.busy=!1,this.queue=null},this.onBodyTypeChange=t=>{this.busy&&r()(this.config,e=>{e.bodyType===t.detail&&(this.queue=e)}),r()(this.config,e=>{if(e.bodyType===t.detail){var i=this.buttonsContainer.querySelector("[".concat("btid",'="').concat(e.bodyType,'"]'));this.changeModel(i),this.busy||t.detail===this.currentBodyType||(this.toggleVisible(!0),this.busy=!0,setTimeout(()=>this.changeContent(e),300))}})}}initBindings(){r()(this.buttons,t=>{t.addEventListener("click",this.onChangeBtnClick)}),document.addEventListener("bodytype-switch",this.onBodyTypeChange)}}e.default=d;var c=new class{constructor(){this.blocks=[]}init(){r()(document.body.querySelectorAll("[data-model-configurator]"),t=>{this.blocks.push(new d(t))})}}},69:function(t,e,i){"use strict";e.a=t=>{var e=document.querySelector("script#".concat(t));return e&&e.textContent?JSON.parse(e.textContent):null}},76:function(t,e,i){"use strict";i(81);e.a=function(){var t,e;window.AMLConfig.modelBodyTypeId=window.AMLConfig.modelBodyTypeId||(e=new URL(document.location.href).searchParams.get("body")||null,null===(t=document.querySelector('.sticky-nav .body-type-switch [data-bodytype-name="'.concat(e,'"]')))||void 0===t?void 0:t.getAttribute("data-bodytype-id")),this.initialConfig=this.config.filter(t=>t.bodyType===window.AMLConfig.modelBodyTypeId)[0]||this.config&&this.config[0]}},79:function(t,e,i){"use strict";var s=i(6),r=i.n(s);e.a=new class{swapPicture(t,e){var i=t.querySelectorAll("source");i.length?r()(i,(t,i)=>{t.setAttribute("data-srcset",e.src[i].srcset)}):r()(e.src.reverse(),(i,s)=>{var r=document.createElement("source");r.setAttribute("media",e.src[s].media),r.setAttribute("data-srcset",e.src[s].srcset),document.documentElement.classList.contains("ie")?t.insertBefore(r,t.childNodes[0]):t.prepend(r)});var s=t.querySelector("img");s&&(s.setAttribute("alt",e.alt),s.classList.add("lazyload"),document.documentElement.classList.contains("ie")&&s.setAttribute("src",e.src[e.src.length-1].srcset))}swapImage(t,e){t&&(t.setAttribute("alt",e.alt),t.setAttribute("data-src",e.src),t.classList.add("lazyload"))}}}}]);
//# sourceMappingURL=model-configurator.bundle.js.map