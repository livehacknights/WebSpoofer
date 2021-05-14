if (self.CavalryLogger) { CavalryLogger.start_js(["G03+IXJ"]); }

__d("Toggler",["csx","invariant","$","Arbiter","ArbiterMixin","CSS","ContextualThing","DOM","DataStore","Event","Focus","Keys","Parent","TabbableElements","TimeSlice","createArrayFromMixed","emptyFunction","ge","getContextualParent","getObjectValues","killswitch","mixin","queryThenMutateDOM","setImmediate"],(function(a,b,c,d,e,f,g,h){var i=[],j,k=!1;function l(){k||(k=!0,b("setImmediate")(function(){k=!1}))}var m=function(){m=b("emptyFunction"),b("Event").listen(document.documentElement,"click",function(a){if(k)return;var c=a.getTarget();i.forEach(function(a){a.clickedTarget=c,a.active&&!a.sticky&&!b("ContextualThing").containsIncludingLayers(a.getActive(),c)&&!a.inTargetFlyout(c)&&a.inActiveDialog()&&!a.isIgnoredByModalLayer(c)&&a.hide()})},b("Event").Priority.URGENT)},n=function(d){babelHelpers.inheritsLoose(c,d);function c(){var a;a=d.call(this)||this;a.active=null;a.togglers={};a.setSticky(!1);i.push(babelHelpers.assertThisInitialized(a));a.subscribe(["show","hide"],c.inform.bind(c));return m()||babelHelpers.assertThisInitialized(a)}var e=c.prototype;e.focusFirstTabbableDescendant=function(a,c){if(!b("killswitch")("TOGGLER_FAST_SHOW")){c.$Toggler2&&c.$Toggler2.cancel();var d=null;c.$Toggler2=b("queryThenMutateDOM")(function(){var c=a.querySelector(".uiToggleFlyout");c&&(d=b("TabbableElements").findFirst(c)||c)},function(){delete c.$Toggler2,d&&(d.tabIndex==null&&(d.tabIndex=-1),b("Focus").setWithoutOutline(d))})}else{var e=a.querySelector(".uiToggleFlyout");if(e){e=b("TabbableElements").find(e)[0]||e;e.tabIndex==null&&(e.tabIndex=-1);b("Focus").setWithoutOutline(e)}}};e.show=function(a){var c=o(this,a),d=c.active;if(a!==d){d&&c.hide();c.active=a;b("CSS").addClass(a,"openToggler");d=b("DOM").scry(a,'a[rel="toggle"]');d.length>0&&d[0].getAttribute("data-target")&&b("CSS").removeClass(b("$")(d[0].getAttribute("data-target")),"toggleTargetClosed");this.focusFirstTabbableDescendant(a,c);d.length>0&&(b("DOM").appendContent(a,c.getToggler("next")),b("DOM").prependContent(a,c.getToggler("prev")));b("Event").listen(a,"keydown",function(d){if(b("Event").getKeyCode(d)===b("Keys").ESC&&c.isShown()){var e=b("DOM").scry(a,'a[rel="toggle"]')[0];e&&e.focus();c.hide();d.kill()}});a.getAttribute("data-toggle-wc")&&(c.__continuation=b("TimeSlice").getGuardedContinuation("Toggler.show inform"));c.inform("show",c,"state")}};e.hide=function(a){var c=o(this,a);c.$Toggler2&&c.$Toggler2.cancel();var d=c.active;if(d&&(!a||a===d)){b("CSS").removeClass(d,"openToggler");a=b("DOM").scry(d,'a[rel="toggle"]');a.length>0&&a[0].getAttribute("data-target")&&b("CSS").addClass(b("$")(a[0].getAttribute("data-target")),"toggleTargetClosed");b("getObjectValues")(c.togglers).forEach(b("DOM").remove);d.getAttribute("data-toggle-wc")&&(c.__continuation=b("TimeSlice").getGuardedContinuation("Toggler.hide inform"));c.inform("hide",c,"state");c.active=null}};e.toggle=function(a){var b=o(this,a);b.active===a?b.hide():b.show(a);l()};e.getActive=function(){return o(this).active};e.isShown=function(){return o(this).active&&b("CSS").hasClass(o(this).active,"openToggler")};c.isNodeShown=function(a){return b("CSS").hasClass(a,"openToggler")};e.inTargetFlyout=function(a){var c=p(this.getActive());return Boolean(c&&b("ContextualThing").containsIncludingLayers(c,a))};e.inActiveDialog=function(){var c=a.Dialog&&a.Dialog.getCurrent();return!c||b("DOM").contains(c.getRoot(),this.getActive())};e.isIgnoredByModalLayer=function(a){a=!!b("Parent").bySelector(a,"._3qw");var c=!!b("Parent").bySelector(this.getActive(),"._3qw");return a&&!c};e.getToggler=function(a){var c=o(this);c.togglers[a]||(c.togglers[a]=b("DOM").create("button",{className:"hideToggler",onfocus:function(){var a=b("DOM").scry(c.active,'a[rel="toggle"]')[0];a&&a.focus();c.hide()},style:{right:a==="next"?"0":""}}),c.togglers[a].setAttribute("type","button"));return this.togglers[a]};e.setSticky=function(a){var c=o(this);a=a!==!1;a!==c.sticky&&(c.sticky=a,a?c.$Toggler1&&c.$Toggler1.unsubscribe():c.$Toggler1=b("Arbiter").subscribe("pre_page_transition",c.hide.bind(c,null)));return c};e.setPrePageTransitionCallback=function(a){var c=o(this);c.$Toggler1&&c.$Toggler1.unsubscribe();c.$Toggler1=b("Arbiter").subscribe("pre_page_transition",a)};c.bootstrap=function(a){a=a.parentNode;a!=null||h(0,3354);var b=c.getInstance(a);b!=null||h(0,3355);b.toggle(a)};c.createInstance=function(a){var d=new c().setSticky(!0);b("DataStore").set(a,"toggler",d);return d};c.destroyInstance=function(a){var c=b("DataStore").get(a,"toggler");c&&c.$Toggler2&&c.$Toggler2.cancel();b("DataStore").remove(a,"toggler")};c.getInstance=function(a){a=a;while(a){var d=b("DataStore").get(a,"toggler");if(d)return d;if(a instanceof Element)if(b("CSS").hasClass(a,"uiToggleContext"))return c.createInstance(a);else if(!b("killswitch")("JEWEL_TOGGLER_INSTANCE_FIXES")&&b("CSS").hasClass(a,"uiToggleFlyout"))return c.createInstance(a).setSticky(!1);a=b("getContextualParent")(a)}return j=j||new c()};c.listen=function(a,d,e){return c.subscribe(b("createArrayFromMixed")(a),function(a,b){if(b.getActive()===d){if(b.__continuation){var c=b.__continuation;delete b.__continuation;return c(function(){return e(a,b)})}return e(a,b)}})};return c}(b("mixin")(b("ArbiterMixin")));e.exports=n;Object.assign(n,n.prototype,b("ArbiterMixin"));Object.assign(n,{subscribe:function(a){return function(c,d){c=b("createArrayFromMixed")(c);c.includes("show")&&i.forEach(function(a){a.getActive()&&setTimeout(d.bind(null,"show",a),0)});return a(c,d)}}(n.subscribe.bind(n))});function o(a,b){return a instanceof n?a:n.getInstance(b)}function p(a){a=b("DOM").scry(a,'a[rel="toggle"]');return a.length>0&&a[0].getAttribute("data-target")?b("ge")(a[0].getAttribute("data-target")):null}}),null);
__d("shield",[],(function(a,b,c,d,e,f){e.exports=a;function a(a,b){for(var c=arguments.length,d=new Array(c>2?c-2:0),e=2;e<c;e++)d[e-2]=arguments[e];if(typeof a!=="function")throw new TypeError("shield expects a function as the first argument");return function(){return a.apply(b,d)}}}),null);
__d("FullScreen",["ArbiterMixin","CSS","Event","Keys","UserAgent","UserAgent_DEPRECATED","mixin","throttle"],(function(a,b,c,d,e,f){var g={},h=!1;function i(a){b("Event").getKeyCode(a)===b("Keys").ESC&&a.stopPropagation()}function j(){h||(document.addEventListener("keydown",i,!0),h=!0)}function k(){h&&(document.removeEventListener("keydown",i,!0),h=!1)}a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.onChange=function(){var a=d.isFullScreen(),c=document.body;c&&b("CSS").conditionClass(c,"fullScreen",a);d.inform("changed");a||k()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.listenForEvent=function(a){var c=b("throttle")(this.onChange,0,this);g[a.id]||(g[a.id]=!0,b("Event").listen(a,{webkitfullscreenchange:c,mozfullscreenchange:c,MSFullscreenChange:c,fullscreenchange:c}))};d.enableFullScreen=function(a){this.listenForEvent(a);a=a;if(a.webkitRequestFullScreen)b("UserAgent_DEPRECATED").chrome()?a.webkitRequestFullScreen==null?void 0:a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):a.webkitRequestFullScreen==null?void 0:a.webkitRequestFullScreen();else if(a.mozRequestFullScreen)a.mozRequestFullScreen();else if(a.msRequestFullscreen)j(),a.msRequestFullscreen==null?void 0:a.msRequestFullscreen();else if(a.requestFullScreen)a.requestFullScreen==null?void 0:a.requestFullScreen();else return!1;return!0};d.disableFullScreen=function(){var a=document;if(a.webkitCancelFullScreen)a.webkitCancelFullScreen();else if(a.mozCancelFullScreen)a.mozCancelFullScreen();else if(a.msExitFullscreen)a.msExitFullscreen();else if(a.cancelFullScreen)a.cancelFullScreen();else if(a.exitFullScreen)a.exitFullScreen();else return!1;return!0};d.isFullScreen=function(){var a=document;return Boolean(a.webkitIsFullScreen||a.fullScreen||a.mozFullScreen||a.msFullscreenElement)};d.toggleFullScreen=function(a){if(this.isFullScreen()){this.disableFullScreen();return!1}else return this.enableFullScreen(a)};d.isSupportedWithKeyboardInput=function(){return this.isSupported()&&!b("UserAgent").isBrowser("Safari")};d.isSupported=function(){var a=document,b=a.webkitFullscreenEnabled||a.mozFullScreenEnabled||a.msFullscreenEnabled||a.fullscreenEnabled;return Boolean(b||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen||a.cancelFullScreen||a.exitFullScreen)};return c}(b("mixin")(b("ArbiterMixin")));c=new a();d=b("throttle")(c.onChange,0,c);b("Event").listen(document,{webkitfullscreenchange:d,mozfullscreenchange:d,MSFullscreenChange:d,fullscreenchange:d});f=c;e.exports=f}),null);
__d("UITinyViewportAction",["Arbiter","ArbiterMixin","CSS","Event","FullScreen","getDocumentScrollElement","queryThenMutateDOM","throttle"],(function(a,b,c,d,e,f){var g=document.documentElement,h,i,j,k,l=!1,m=!1,n=!1,o={init:function(a){a=b("throttle")(function(){if(b("FullScreen").isFullScreen())return;b("queryThenMutateDOM")(function(){k=k||b("getDocumentScrollElement")(),i=g.clientWidth<k.scrollWidth-1,j=g.clientHeight<400,h=j||i},function(){if(h!==l||i!==m||j!==n){var a;(a=b("CSS")).conditionClass(g,"tinyViewport",h);a.conditionClass(g,"tinyWidth",i);a.conditionClass(g,"tinyHeight",j);a.conditionClass(g,"canHaveFixedElements",!h);o.inform("change",h);b("Arbiter").inform("tinyViewport/change",{tiny:h,tinyWidth:i,tinyHeight:j},"state");l=h;m=i;n=j}},"TinyViewport")});a();b("Arbiter").subscribe("quickling/response",a);b("Event").listen(window,"resize",a);b("FullScreen").subscribe("changed",a)},isTiny:function(){return h},isTinyWidth:function(){return i},isTinyHeight:function(){return j}};Object.assign(o,b("ArbiterMixin"));e.exports=o}),null);
__d("Button",["csx","cx","invariant","CSS","DOM","DataStore","Event","Parent","emptyFunction","isNode"],(function(a,b,c,d,e,f,g,h,i){var j="uiButtonDisabled",k="uiButtonDepressed",l="_42fr",m="_42fs",n="button:blocker",o="href",p="ajaxify";function q(a,c){var d=b("DataStore").get(a,n);c?d&&(d.remove(),b("DataStore").remove(a,n)):d||b("DataStore").set(a,n,b("Event").listen(a,"click",b("emptyFunction").thatReturnsFalse,b("Event").Priority.URGENT))}function r(a){a=b("Parent").byClass(a,"uiButton")||b("Parent").bySelector(a,"._42ft");if(!a)throw new Error("invalid use case");return a}function s(a){return b("DOM").isNodeOfType(a,"a")}function t(a){return b("DOM").isNodeOfType(a,"button")}function u(a){return b("CSS").matchesSelector(a,"._42ft")}var v={getInputElement:function(a){a=r(a);if(s(a))throw new Error("invalid use case");if(t(a)){a instanceof HTMLButtonElement||i(0,21261);return a}return b("DOM").find(a,"input")},isEnabled:function(a){return!(b("CSS").hasClass(r(a),j)||b("CSS").hasClass(r(a),l))},setEnabled:function(a,c){a=r(a);var d=u(a)?l:j;b("CSS").conditionClass(a,d,!c);if(s(a)){d=a.getAttribute("href");var e=a.getAttribute("ajaxify"),f=b("DataStore").get(a,o,"#"),g=b("DataStore").get(a,p);c?(d||a.setAttribute("href",f),!e&&g&&a.setAttribute("ajaxify",g),a.removeAttribute("tabIndex")):(d&&d!==f&&b("DataStore").set(a,o,d),e&&e!==g&&b("DataStore").set(a,p,e),a.removeAttribute("href"),a.removeAttribute("ajaxify"),a.setAttribute("tabIndex","-1"));q(a,c)}else{f=v.getInputElement(a);f.disabled=!c;q(f,c)}},setDepressed:function(a,c){a=r(a);var d=u(a)?m:k;b("CSS").conditionClass(a,d,c)},isDepressed:function(a){a=r(a);var c=u(a)?m:k;return b("CSS").hasClass(a,c)},setLabel:function(a,c){a=r(a);if(u(a)){var d=[];c&&d.push(c);var e=b("DOM").scry(a,".img");for(var f=0;f<e.length;f++){var g=e[f],h=g.parentNode;h.classList&&(h.classList.contains("_4o_3")||h.classList.contains("_-xe"))?a.firstChild===h?d.unshift(h):d.push(h):a.firstChild==g?d.unshift(g):d.push(g)}b("DOM").setContent(a,d)}else if(s(a)){h=b("DOM").find(a,"span.uiButtonText");b("DOM").setContent(h,c)}else v.getInputElement(a).value=c;g=u(a)?"_42fv":"uiButtonNoText";b("CSS").conditionClass(a,g,!c)},getIcon:function(a){a=r(a);return b("DOM").scry(a,".img")[0]},setIcon:function(a,c){if(c&&!b("isNode")(c))return;var d=v.getIcon(a);if(!c){d&&b("DOM").remove(d);return}b("CSS").addClass(c,"customimg");d!=c&&(d?b("DOM").replace(d,c):b("DOM").prependContent(r(a),c))}};a=v;e.exports=a}),null);
__d("flattenArray",[],(function(a,b,c,d,e,f){e.exports=a;function a(a){var b=[];g(a,b);return b}function g(a,b){var c=a.length,d=0;while(c--){var e=a[d++];Array.isArray(e)?g(e,b):b.push(e)}}}),null);
__d("JSXDOM",["DOM","FbtResultBase","flattenArray"],(function(a,b,c,d,e,f){a=["a","blockquote","br","button","canvas","checkbox","dd","div","dl","dt","em","form","h1","h2","h3","h4","h5","h6","hr","i","iframe","img","input","label","li","option","p","pre","select","span","strong","table","tbody","thead","td","textarea","th","tr","ul","video"];var g={};a.forEach(function(a){var c=function(c,d){arguments.length>2&&(d=Array.prototype.slice.call(arguments,1));!d&&c&&(d=c.children,delete c.children);d&&(d=Array.isArray(d)?d:[d],d=d.map(function(a){return a instanceof b("FbtResultBase")?a.flattenToArray():a}),d=b("flattenArray")(d));return b("DOM").create(a,c,d)};g[a]=c});e.exports=g}),null);
__d("classWithMixins",[],(function(a,b,c,d,e,f){e.exports=a;function a(a,b){var c=function(){a.apply(this,arguments)};c.prototype=Object.assign(Object.create(a.prototype),b.prototype);return c}}),null);
__d("Animation",["BrowserSupport","CSS","DOM","DataStore","Style","clearInterval","clearTimeout","getVendorPrefixedName","requestAnimationFrame","setIntervalAcrossTransitions","setTimeoutAcrossTransitions","shield"],(function(a,b,c,d,e,f){var g=b("requestAnimationFrame"),h=[],i;function j(b){if(a==this)return new j(b);else this.obj=b,this._reset_state(),this.queue=[],this.last_attr=null,this.unit="px",this.behaviorOverrides={ignoreUserScroll:!1}}function k(a){if(b("BrowserSupport").hasCSS3DTransforms())return n(a);else return m(a)}function l(a){return a.toFixed(8)}function m(a){a=[a[0],a[4],a[1],a[5],a[12],a[13]];return"matrix("+a.map(l).join(",")+")"}function n(a){return"matrix3d("+a.map(l).join(",")+")"}function o(a,b){a||(a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);var c=[];for(var d=0;d<4;d++)for(var e=0;e<4;e++){var f=0;for(var g=0;g<4;g++)f+=a[d*4+g]*b[g*4+e];c[d*4+e]=f}return c}var p=0;j.prototype._reset_state=function(){this.state={attrs:{},duration:500}};j.prototype.stop=function(){this._reset_state();this.queue=[];return this};j.prototype._build_container=function(){if(this.container_div){this._refresh_container();return}if(this.obj.firstChild&&this.obj.firstChild.__animation_refs){this.container_div=this.obj.firstChild;this.container_div.__animation_refs++;this._refresh_container();return}var a=document.createElement("div");a.style.padding="0px";a.style.margin="0px";a.style.border="0px";a.__animation_refs=1;var b=this.obj.childNodes;while(b.length)a.appendChild(b[0]);this.obj.appendChild(a);this._orig_overflow=this.obj.style.overflow;this.obj.style.overflow="hidden";this.container_div=a;this._refresh_container()};j.prototype._refresh_container=function(){this.container_div.style.height="auto",this.container_div.style.width="auto",this.container_div.style.height=this.container_div.offsetHeight+this.unit,this.container_div.style.width=this.container_div.offsetWidth+this.unit};j.prototype._destroy_container=function(){if(!this.container_div)return;if(!--this.container_div.__animation_refs){var a=this.container_div.childNodes;while(a.length)this.obj.appendChild(a[0]);this.obj.removeChild(this.container_div)}this.container_div=null;this.obj.style.overflow=this._orig_overflow};var q=1,r=2,s=3;j.prototype._attr=function(a,b,c){a=a.replace(/-[a-z]/gi,function(a){return a.substring(1).toUpperCase()});var d=!1;switch(a){case"background":this._attr("backgroundColor",b,c);return this;case"backgroundColor":case"borderColor":case"color":b=w(b);break;case"opacity":b=parseFloat(b,10);break;case"height":case"width":b=="auto"?d=!0:b=parseInt(b,10);break;case"borderWidth":case"lineHeight":case"fontSize":case"margin":case"marginBottom":case"marginLeft":case"marginRight":case"marginTop":case"padding":case"paddingBottom":case"paddingLeft":case"paddingRight":case"paddingTop":case"bottom":case"left":case"right":case"top":case"scrollTop":case"scrollLeft":b=parseInt(b,10);break;case"rotateX":case"rotateY":case"rotateZ":b=parseInt(b,10)*Math.PI/180;break;case"translateX":case"translateY":case"translateZ":case"scaleX":case"scaleY":case"scaleZ":b=parseFloat(b,10);break;case"rotate3d":this._attr("rotateX",b[0],c);this._attr("rotateY",b[1],c);this._attr("rotateZ",b[2],c);return this;case"rotate":this._attr("rotateZ",b,c);return this;case"scale3d":this._attr("scaleZ",b[2],c);case"scale":this._attr("scaleX",b[0],c);this._attr("scaleY",b[1],c);return this;case"translate3d":this._attr("translateZ",b[2],c);case"translate":this._attr("translateX",b[0],c);this._attr("translateY",b[1],c);return this;default:throw new Error(a+" is not a supported attribute!")}this.state.attrs[a]===void 0&&(this.state.attrs[a]={});d&&(this.state.attrs[a].auto=!0);switch(c){case s:this.state.attrs[a].start=b;break;case r:this.state.attrs[a].by=!0;case q:this.state.attrs[a].value=b;break}};function t(a){var c,d=parseInt((c=b("Style")).get(a,"paddingLeft"),10),e=parseInt(c.get(a,"paddingRight"),10),f=parseInt(c.get(a,"borderLeftWidth"),10);c=parseInt(c.get(a,"borderRightWidth"),10);return a.offsetWidth-(d?d:0)-(e?e:0)-(f?f:0)-(c?c:0)}function u(a){var c,d=parseInt((c=b("Style")).get(a,"paddingTop"),10),e=parseInt(c.get(a,"paddingBottom"),10),f=parseInt(c.get(a,"borderTopWidth"),10);c=parseInt(c.get(a,"borderBottomWidth"),10);return a.offsetHeight-(d?d:0)-(e?e:0)-(f?f:0)-(c?c:0)}j.prototype.setUnit=function(a){this.unit=a;return this};j.prototype.to=function(a,b){b===void 0?this._attr(this.last_attr,a,q):(this._attr(a,b,q),this.last_attr=a);return this};j.prototype.by=function(a,b){b===void 0?this._attr(this.last_attr,a,r):(this._attr(a,b,r),this.last_attr=a);return this};j.prototype.from=function(a,b){b===void 0?this._attr(this.last_attr,a,s):(this._attr(a,b,s),this.last_attr=a);return this};j.prototype.duration=function(a){this.state.duration=a?a:0;return this};j.prototype.checkpoint=function(a,b){a===void 0&&(a=1);this.state.checkpoint=a;this.queue.push(this.state);this._reset_state();this.state.checkpointcb=b;return this};j.prototype.blind=function(){this.state.blind=!0;return this};j.prototype.hide=function(){this.state.hide=!0;return this};j.prototype.show=function(){this.state.show=!0;return this};j.prototype.ease=function(a){this.state.ease=a;return this};j.prototype.CSSAnimation=function(a){var b={duration:this.state.duration};this.state.ondone&&(b.callback=this.state.ondone);a(this.obj,b)};j.prototype.go=function(){var a=Date.now();this.queue.push(this.state);for(var b=0;b<this.queue.length;b++)this.queue[b].start=a-p,this.queue[b].checkpoint&&(a+=this.queue[b].checkpoint*this.queue[b].duration);x(this);return this};j.prototype._show=function(){b("CSS").show(this.obj)};j.prototype._hide=function(){b("CSS").hide(this.obj)};j.prototype.overrideBehavior=function(a){this.behaviorOverrides=babelHelpers["extends"]({},this.behaviorOverrides,a);return this};j.prototype._frame=function(c){var d=!0,e=!1,f;function g(a){return document.documentElement[a]||document.body[a]}function h(a,b){return a===document.body?g(b):a[b]}function i(a,b){return b.lastScrollTop!==void 0&&b.lastScrollTop!==h(a.obj,"scrollTop")||b.lastScrollLeft!==void 0&&b.lastScrollLeft!==h(a.obj,"scrollLeft")}function j(a,b){b.lastScrollTop=h(a.obj,"scrollTop"),b.lastScrollLeft=h(a.obj,"scrollLeft")}for(var l=0;l<this.queue.length;l++){var m=this.queue[l];if(m.start>c){d=!1;continue}m.checkpointcb&&(this._callback(m.checkpointcb,c-m.start),m.checkpointcb=null);if(m.started===void 0){m.show&&this._show();for(var n in m.attrs){if(m.attrs[n].start!==void 0)continue;switch(n){case"backgroundColor":case"borderColor":case"color":f=w(b("Style").get(this.obj,n=="borderColor"?"borderLeftColor":n));m.attrs[n].by&&(m.attrs[n].value[0]=Math.min(255,Math.max(0,m.attrs[n].value[0]+f[0])),m.attrs[n].value[1]=Math.min(255,Math.max(0,m.attrs[n].value[1]+f[1])),m.attrs[n].value[2]=Math.min(255,Math.max(0,m.attrs[n].value[2]+f[2])));break;case"opacity":f=b("Style").getOpacity(this.obj);m.attrs[n].by&&(m.attrs[n].value=Math.min(1,Math.max(0,m.attrs[n].value+f)));break;case"height":f=u(this.obj);m.attrs[n].by&&(m.attrs[n].value+=f);break;case"width":f=t(this.obj);m.attrs[n].by&&(m.attrs[n].value+=f);break;case"scrollLeft":case"scrollTop":f=h(this.obj,n);m.attrs[n].by&&(m.attrs[n].value+=f);j(this,m);break;case"rotateX":case"rotateY":case"rotateZ":case"translateX":case"translateY":case"translateZ":f=b("DataStore").get(this.obj,n,0);m.attrs[n].by&&(m.attrs[n].value+=f);break;case"scaleX":case"scaleY":case"scaleZ":f=b("DataStore").get(this.obj,n,1);m.attrs[n].by&&(m.attrs[n].value+=f);break;default:f=parseInt(b("Style").get(this.obj,n),10)||0;m.attrs[n].by&&(m.attrs[n].value+=f);break}m.attrs[n].start=f}if(m.attrs.height&&m.attrs.height.auto||m.attrs.width&&m.attrs.width.auto){this._destroy_container();for(var n in{height:1,width:1,fontSize:1,borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1,paddingLeft:1,paddingRight:1,paddingTop:1,paddingBottom:1})m.attrs[n]&&(this.obj.style[n]=m.attrs[n].value+(typeof m.attrs[n].value==="number"?this.unit:""));m.attrs.height&&m.attrs.height.auto&&(m.attrs.height.value=u(this.obj));m.attrs.width&&m.attrs.width.auto&&(m.attrs.width.value=t(this.obj))}m.started=!0;m.blind&&this._build_container()}var p=(c-m.start)/m.duration;p>=1?(p=1,m.hide&&this._hide()):d=!1;var q=m.ease?m.ease(p):p;!e&&p!=1&&m.blind&&(e=!0);for(var n in m.attrs)switch(n){case"backgroundColor":case"borderColor":case"color":m.attrs[n].start[3]!=m.attrs[n].value[3]?this.obj.style[n]="rgba("+v(q,m.attrs[n].start[0],m.attrs[n].value[0],!0)+","+v(q,m.attrs[n].start[1],m.attrs[n].value[1],!0)+","+v(q,m.attrs[n].start[2],m.attrs[n].value[2],!0)+","+v(q,m.attrs[n].start[3],m.attrs[n].value[3],!1)+")":this.obj.style[n]="rgb("+v(q,m.attrs[n].start[0],m.attrs[n].value[0],!0)+","+v(q,m.attrs[n].start[1],m.attrs[n].value[1],!0)+","+v(q,m.attrs[n].start[2],m.attrs[n].value[2],!0)+")";break;case"opacity":b("Style").set(this.obj,"opacity",v(q,m.attrs[n].start,m.attrs[n].value));break;case"height":case"width":this.obj.style[n]=q==1&&m.attrs[n].auto?"auto":v(q,m.attrs[n].start,m.attrs[n].value,!0)+this.unit;break;case"scrollLeft":case"scrollTop":var r=this.obj===document.body;if(!this.behaviorOverrides.ignoreUserScroll&&i(this,m))delete m.attrs.scrollTop,delete m.attrs.scrollLeft;else{var s=v(q,m.attrs[n].start,m.attrs[n].value,!0);!r?this.obj[n]=s:n=="scrollLeft"?a.scrollTo(s,g("scrollTop")):a.scrollTo(g("scrollLeft"),s);j(this,m)}break;case"translateX":case"translateY":case"translateZ":case"rotateX":case"rotateY":case"rotateZ":case"scaleX":case"scaleY":case"scaleZ":b("DataStore").set(this.obj,n,v(q,m.attrs[n].start,m.attrs[n].value,!1));break;default:this.obj.style[n]=v(q,m.attrs[n].start,m.attrs[n].value,!0)+this.unit;break}r=null;s=b("DataStore").get(this.obj,"translateX",0);q=b("DataStore").get(this.obj,"translateY",0);var x=b("DataStore").get(this.obj,"translateZ",0);(s||q||x)&&(r=o(r,[1,0,0,0,0,1,0,0,0,0,1,0,s,q,x,1]));s=b("DataStore").get(this.obj,"scaleX",1);q=b("DataStore").get(this.obj,"scaleY",1);x=b("DataStore").get(this.obj,"scaleZ",1);(s-1||q-1||x-1)&&(r=o(r,[s,0,0,0,0,q,0,0,0,0,x,0,0,0,0,1]));s=b("DataStore").get(this.obj,"rotateX",0);s&&(r=o(r,[1,0,0,0,0,Math.cos(s),Math.sin(-s),0,0,Math.sin(s),Math.cos(s),0,0,0,0,1]));q=b("DataStore").get(this.obj,"rotateY",0);q&&(r=o(r,[Math.cos(q),0,Math.sin(q),0,0,1,0,0,Math.sin(-q),0,Math.cos(q),0,0,0,0,1]));x=b("DataStore").get(this.obj,"rotateZ",0);x&&(r=o(r,[Math.cos(x),Math.sin(-x),0,0,Math.sin(x),Math.cos(x),0,0,0,0,1,0,0,0,0,1]));s=b("getVendorPrefixedName")("transform");if(s)if(r){q=k(r);b("Style").set(this.obj,s,q)}else d&&b("Style").set(this.obj,s,null);p==1&&(this.queue.splice(l--,1),this._callback(m.ondone,c-m.start-m.duration))}!e&&this.container_div&&this._destroy_container();return!d};j.prototype.ondone=function(a){this.state.ondone=a;return this};j.prototype._callback=function(a,b){a&&(p=b,a.call(this),p=0)};function v(a,b,c,d){return(d?parseInt:parseFloat)((c-b)*a+b,10)}function w(a){var b=/^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i.exec(a);if(b)return[parseInt(b[1].length==1?b[1]+b[1]:b[1],16),parseInt(b[2].length==1?b[2]+b[2]:b[2],16),parseInt(b[3].length==1?b[3]+b[3]:b[3],16),1];else{b=/^rgba? *\(([0-9]+), *([0-9]+), *([0-9]+)(?:, *([0-9\.]+))?\)$/.exec(a);if(b)return[parseInt(b[1],10),parseInt(b[2],10),parseInt(b[3],10),b[4]?parseFloat(b[4]):1];else if(a=="transparent")return[255,255,255,0];else throw new Error("Named color attributes are not supported.")}}function x(a){h.push(a),h.length===1&&(g?g(z):i=b("setIntervalAcrossTransitions")(z,20)),g&&y(),z(Date.now(),!0)}function y(){if(!g)throw new Error("Ending timer only valid with requestAnimationFrame");var a=0;for(var c=0;c<h.length;c++){var d=h[c];for(var e=0;e<d.queue.length;e++){var f=d.queue[e].start+d.queue[e].duration;f>a&&(a=f)}}i&&(b("clearTimeout")(i),i=null);f=Date.now();a>f&&(i=b("setTimeoutAcrossTransitions")(b("shield")(z),a-f))}function z(a,c){a=Date.now();for(var c=c===!0?h.length-1:0;c<h.length;c++)try{h[c]._frame(a)||h.splice(c--,1)}catch(a){h.splice(c--,1)}h.length===0?i&&(g?b("clearTimeout")(i):b("clearInterval")(i),i=null):g&&g(z)}j.ease={};j.ease.begin=function(a){return Math.sin(Math.PI/2*(a-1))+1};j.ease.end=function(a){return Math.sin(.5*Math.PI*a)};j.ease.both=function(a){return.5*Math.sin(Math.PI*(a-.5))+.5};j.prependInsert=function(a,c){j.insert(a,c,b("DOM").prependContent)};j.appendInsert=function(a,c){j.insert(a,c,b("DOM").appendContent)};j.insert=function(a,c,d){b("Style").set(c,"opacity",0),d(a,c),new j(c).from("opacity",0).to("opacity",1).duration(400).go()};e.exports=j}),null);