(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"1cTF":function(e,t,n){"use strict";n.r(t),n.d(t,"LoginScreen",(function(){return de})),n.d(t,"styles",(function(){return pe}));var a=n("KEM+"),i=n.n(a),r=n("ERkP"),o=n("pxuL"),s=n("6/RC"),c=n("zh9S"),l=n("RqPI"),d=n("oEGd"),p=n("hqKg"),u=n("3XMw"),h=n.n(u),m=n("aTAq"),g=n("G6rE");const b={BadSessionLoginVerification:h.a.f8ad0091,ExpiredLoginVerification:h.a.h2c7767e,OverLimitLoginVerificationAttempts:h.a.e83047c2,OfflineCodeSync:h.a.g4b108ee},y=Object(p.createSelector)(((e,t)=>l.d(e)||(Object(m.a)(t.location.query.login_verification_error)?b[t.location.query.login_verification_error]:void 0)),((e,t)=>t.location.query&&(Object(m.a)(t.location.query.username_or_email)?t.location.query.username_or_email:void 0)),l.i,((e,t)=>!!t.location.pathname&&("/login/check"===t.location.pathname||"/login/check/"===t.location.pathname)),((e,t)=>"true"===t.location.query.username_disabled),((e,t)=>"true"===t.location.query.email_disabled),((e,t)=>"true"===t.location.query.phone_disabled),g.e.selectLoggedInUser,((e,t,n,a,i,r,o,s)=>({errorMessage:e,loginId:t,loginReturnPath:n,loggedInUser:s,shouldChallenge:a,shouldDisableUsernameLogin:i,shouldDisableEmailLogin:r,shouldDisablePhoneLogin:o}))),f={scribeAction:c.c,scribePageImpression:c.d};var _=Object(d.g)(y,f),v=n("7JQg"),w=(n("kYxP"),n("MvUL"),n("SrtL")),C=n("lUZE"),x=n("8jkQ"),E=n("yoO3"),S="LoginPage_Continue_Button",L=n("sgih"),I=n("mw9i"),k=n("t62R"),R=n("oSwX"),F=n("jV+4"),T=n("/yvb"),D=n("Irs7");const O=h.a.d98c140e,z=h.a.e55188f0,P=h.a.d55d8fe1,B=h.a.c3d89aca,U=h.a.g806008e;class V extends r.Component{constructor(...e){super(...e),i()(this,"_handleContinuePress",(()=>{const{analytics:e,history:t,location:n}=this.props,{query:a}=n,i=a&&a.redirect_after_login?a.redirect_after_login.toString():void 0,r=i&&x.b.makeSafeForTwitterRedirect(i);i&&r?(e.scribeAction("redirect"),window.location.assign(r)):(e.scribeAction("redirecthome"),t.replace("/home"))})),i()(this,"_handleSwitchAccountPress",(()=>{const{analytics:e,history:t}=this.props;e.scribeAction("switch"),t.replace("/account/switch")}))}render(){const{loggedInUser:e}=this.props;return r.createElement(E.a,null,r.createElement(w.a,{title:O}),r.createElement(L.a,{type:"full"},r.createElement(I.a,{style:[pe.root,pe.center],withGutter:!0},r.createElement(C.a,{style:pe.icon}),r.createElement(k.c,{accessibilityRole:"heading",align:"center",size:"xLarge",style:pe.heading,weight:"bold"},z),r.createElement(R.default,{size:"jumbo",uri:e.profile_image_url_https}),r.createElement(F.a,{badgeContext:"account",isProtected:e.protected,isVerified:e.verified,name:e.name,screenName:e.screen_name,style:[pe.gutter,pe.center],withStackedLayout:!0}),r.createElement(k.c,{align:"center",style:pe.gutter},P),r.createElement(T.a,{onPress:this._handleContinuePress,style:pe.gutter,testID:S,type:"primary"},B),r.createElement(k.c,{accessibilityRole:"link",align:"center",color:"link",onPress:this._handleSwitchAccountPress,style:pe.gutter},U))))}}var M=Object(D.a)(V,{page:"login",section:"continue"}),j=n("s9SB"),A=n.n(j),H=n("cnVF"),K=n("YeIG"),W=n("2qJZ"),N=n("6oVL"),q=n("Lam0"),X=n("5FtR"),$=n("mrHL"),J=n("Es6L"),G=n("MWbm"),Q=n("4zmP"),Y=n("pjBI"),Z=n("rHpw"),ee=n("XJCT");const te=h.a.d1091f50,ne=h.a.eab9ceb1,ae=h.a.g2b8acd4,ie=h.a.bdc9d8a2,re=h.a.c2ab20ab,oe=h.a.id312f0a,se=h.a.caac124e,ce=h.a.ab77e0b8,le={page:"login"};class de extends r.Component{constructor(e,t){const{loginId:n}=e;super(e,t),i()(this,"_renderLogin",(()=>r.createElement(E.a,null,r.createElement(w.a,{title:ie}),r.createElement(G.a,{style:[pe.root,pe.container]},this._renderContent())))),i()(this,"_renderContent",(()=>{const{errorMessage:e,loginId:t,loginReturnPath:n,shouldChallenge:a,shouldDisableUsernameLogin:i,shouldDisableEmailLogin:o,shouldDisablePhoneLogin:s}=this.props,{autoSubmit:c,recaptchaSuccessToken:l,recaptchaTermAccepted:d,passwordValue:p,usernameValue:u}=this.state,h=!!l,m=a&&!h,g=!(a&&d),b=Object(W.c)(this.context.featureSwitches)&&a;return r.createElement(r.Fragment,null,r.createElement(G.a,{style:pe.marginHorizontal},r.createElement(C.a,{style:pe.icon}),r.createElement(k.c,{accessibilityRole:"heading",extendedWidth:!0,size:"jumbo",style:pe.heading,weight:"bold"},ae),e?r.createElement(Q.a,{text:e,type:"danger"}):null,g?this._renderAlternativeLoginMethodCopy():null,h?r.createElement(k.c,{style:pe.passedChallengeCopy},re):null),r.createElement(N.a,{autoSubmit:c,deregisterServiceWorkerBeforeSubmit:b,hideSubmitButton:m,loginReturnPath:n,submitButtonDisabled:this._hasMissingFields(),submitButtonSize:"normalLarge",submitButtonStyle:pe.submitButton},r.createElement(ee.b,{autoFocus:!t,onChange:this._handleUsernameFieldChange,onSubmitEditing:this._handleSubmitEditing,value:u,withEmailDisabled:o,withPhoneDisabled:s,withUsernameDisabled:i}),m?null:r.createElement(ee.a,{autoFocus:!!t,onChange:this._handlePasswordFieldChange,onSubmitEditing:this._handleSubmitEditing,value:p}),a?r.createElement("input",{defaultValue:l,name:"g-recaptcha-response",style:{display:"none"}}):null),r.createElement(G.a,{style:pe.marginHorizontal},a&&!h?this._renderRecaptcha():null,r.createElement(k.c,{align:"center",style:pe.links},r.createElement(Y.a,null,r.createElement(k.c,{link:{pathname:"https://twitter.com/account/begin_password_reset",external:!0,openInSameFrame:!0}},te),r.createElement(k.c,{link:"/i/flow/signup"},ne)))))})),i()(this,"_renderAlternativeLoginMethodCopy",(()=>{const{shouldDisableUsernameLogin:e,shouldDisableEmailLogin:t,shouldDisablePhoneLogin:n}=this.props;let a;return e?a=oe:n?a=ce:t&&(a=se),n||t||e?r.createElement(k.c,{color:"red500"},a):null})),i()(this,"_renderRecaptcha",(()=>{const{usernameValue:e}=this.state;return r.createElement(q.a,{nextButtonDisabled:!e,onChange:this._handleRecaptchaStateChange,onConsent:this._handleRecaptchaTermAccepted,withConsentForm:!0})})),i()(this,"_hasMissingFields",(()=>{const{usernameValue:e,passwordValue:t}=this.state;return!e||!t})),i()(this,"_handlePasswordFieldChange",(e=>{this.setState({passwordValue:e.target.value})})),i()(this,"_handleUsernameFieldChange",(e=>{this.setState({usernameValue:e.target.value})})),i()(this,"_handleSubmitEditing",(()=>{this._hasMissingFields()||this.setState({autoSubmit:!0})})),i()(this,"_handleRecaptchaStateChange",(e=>{const{scribeAction:t}=this.props,n=e?"passed":"expired";t({...le,section:"recaptcha",action:n}),e&&this.setState({recaptchaSuccessToken:e})})),i()(this,"_handleRecaptchaTermAccepted",(()=>{const{scribeAction:e}=this.props;e({...le,section:"recaptcha",component:"terms",action:"accepted"}),this.setState({recaptchaTermAccepted:!0})})),this._continueEnabled=this.context.featureSwitches.isTrue("responsive_web_continue_as_always_enabled")||"true"===e.location.query.showContinuePrompt&&this.context.featureSwitches.isTrue("responsive_web_continue_as_param_enabled"),this._shouldRedirectToOCFLoginFlow=this.context.featureSwitches.isTrue("stateful_login_enabled"),this.state={autoSubmit:!1,recaptchaTermAccepted:!1,usernameValue:n||"",passwordValue:""}}UNSAFE_componentWillMount(){this._unsetFlashMessage(this.props)}componentDidMount(){const{errorMessage:e,scribeNamespace:t,scribePageImpression:n,shouldChallenge:a}=this.props;Object(J.a)()&&this.context.setSideNavSupport(!1),e&&n({...t,section:"error"}),a&&n({...t,section:"recaptcha"})}UNSAFE_componentWillUpdate(e){this._unsetFlashMessage(e)}componentWillUnmount(){Object(J.a)()&&this.context.setSideNavSupport(!0)}render(){const{errorMessage:e,loggedInUser:t,history:n,location:a}=this.props;if(this._continueEnabled&&t&&!e)return r.createElement(M,{history:n,location:a,loggedInUser:t});if(this._shouldRedirectToOCFLoginFlow){const e=s.canUseDOM&&!Object(K.a)(a.query)?btoa(JSON.stringify(a.query)):"",t=e?encodeURIComponent(JSON.stringify({requested_variant:e})):"",n=t?`/i/flow/login?input_flow_data=${t}`:"/i/flow/login";return r.createElement(X.a,{to:n})}return this._renderLogin()}_unsetFlashMessage(e){const{errorMessage:t}=e;t&&Object($.b)(A.a.serialize(H.k,"",{expires:new Date(0),path:"/",domain:".twitter.com",secure:!0}))}}i()(de,"contextType",o.a);const pe=Z.a.create((e=>({root:{marginTop:e.spaces.space20},marginHorizontal:{marginHorizontal:Z.a.theme.spaces.space16},container:{maxWidth:400,marginHorizontal:"auto",width:"100%",paddingHorizontal:e.componentDimensions.gutterHorizontal},links:{marginTop:e.spaces.space20},passedChallengeCopy:{marginVertical:e.spaces.space16},submitButton:{marginVertical:e.spaces.space12,marginHorizontal:e.spaces.space12},icon:{alignSelf:"flex-start",color:e.colors.brandColor,height:e.spaces.space40},heading:{marginHorizontal:0,marginTop:e.spaces.space32,marginBottom:e.spaces.space12},center:{flexDirection:"column",alignItems:"center"},gutter:{marginVertical:e.componentDimensions.gutterVertical}})));t.default=Object(v.c)(le)(_(de))},"6oVL":function(e,t,n){"use strict";var a=n("KEM+"),i=n.n(a),r=(n("kYxP"),n("MvUL"),n("ERkP")),o=n("s9SB"),s=n.n(o),c=n("3XMw"),l=n.n(c),d=n("cnVF"),p=n("Ukpf"),u=n("BTou"),h=n("mrHL"),m="LoginForm_Login_Button",g=n("fEA7"),b=n.n(g),y=n("MWbm"),f=n("Irs7"),_=n("/yvb"),v=n("rHpw");const w=l.a.e919c3bc;class C extends r.Component{constructor(...e){super(...e),i()(this,"_mobileLoginToken",b.a.v1().replace(/-/g,"")),i()(this,"_handleSubmit",(()=>{const{analytics:e,deregisterServiceWorkerBeforeSubmit:t,onSubmit:n}=this.props;return e.scribe({action:"submit"}),t?(u.a.deregisterServiceWorker((()=>{this._setLoginCookie(),n?n(this._form.elements):this._form.submit()})),!1):(u.a.flushHTMLCache(),this._setLoginCookie(),n?(n(this._form.elements),!1):void 0)})),i()(this,"_handleSubmitButtonClick",(()=>{!1!==this._handleSubmit()&&this._form.submit()})),i()(this,"_setFormRef",(e=>{e&&(this._form=e)})),i()(this,"_setLoginCookie",(()=>{const e=new Date(Date.now());e.setTime(e.getTime()+3e5),Object(h.b)(s.a.serialize(d.n,this._mobileLoginToken,{domain:void 0,expires:e,path:"/",secure:!0}))}))}componentDidUpdate(e){this.props.autoSubmit&&!e.autoSubmit&&this._handleSubmitButtonClick()}componentDidMount(){p.a.inject("https://twitter.com/i/js_inst?c_name=ui_metrics")}render(){const{children:e,hideSubmitButton:t,horizontalLayout:n,formActionUrl:a,loginReturnPath:i,submitButtonDisabled:o,submitButtonLabel:s,submitButtonSize:c,submitButtonStyle:l,submitButtonType:d}=this.props,[p,u]="string"==typeof i?i.split("?"):[],h=`${encodeURI(p||"/")}${u?`?${u}`:""}`,g=r.createElement(y.a,{style:n&&x.horizontalFields},r.createElement("input",{name:"redirect_after_login",type:"hidden",value:h}),r.createElement("input",{name:"remember_me",type:"hidden",value:"1"}),r.createElement("input",{name:"authenticity_token",type:"hidden",value:this._mobileLoginToken}),r.createElement("input",{name:"wfa",type:"hidden",value:"1"}),r.createElement("input",{autoComplete:"off",name:"ui_metrics",type:"hidden"}),e,t?null:r.createElement(y.a,{style:n&&x.loginButtonContainer},r.createElement(_.a,{disabled:o,onPress:this._handleSubmitButtonClick,size:c,style:l,testID:m,type:d},s)));return r.createElement(y.a,{style:x.loginForm},r.createElement("form",{action:a,children:g,method:"post",noValidate:!0,onSubmit:this._handleSubmit,ref:this._setFormRef}))}}i()(C,"defaultProps",{autoSubmit:!1,deregisterServiceWorkerBeforeSubmit:!1,formActionUrl:"/sessions",hideSubmitButton:!1,submitButtonDisabled:!1,submitButtonLabel:w,submitButtonType:"primary"});const x=v.a.create((e=>({horizontalFields:{flexDirection:"row",justifyContent:"center",alignItems:"stretch"},loginForm:{width:"100%"},loginButtonContainer:{flexDirection:"column",justifyContent:"center"}})));t.a=Object(f.a)(C,{element:"inline_login_form"})},Lam0:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n("KEM+"),i=n.n(a),r=n("ERkP"),o=n.n(r),s=n("aWzz"),c=n.n(s);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){var t,n;function a(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(d(t)),t.handleErrored=t.handleErrored.bind(d(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(d(t)),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},i.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.props.onChange&&this.props.onChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored()},i.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.props.onChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},i.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return o.a.createElement("div",l({},t,{ref:this.handleRecaptchaRef}))},a}(o.a.Component);p.displayName="ReCAPTCHA",p.propTypes={sitekey:c.a.string.isRequired,onChange:c.a.func,grecaptcha:c.a.object,theme:c.a.oneOf(["dark","light"]),type:c.a.oneOf(["image","audio"]),tabindex:c.a.number,onExpired:c.a.func,onErrored:c.a.func,size:c.a.oneOf(["compact","normal","invisible"]),stoken:c.a.string,hl:c.a.string,badge:c.a.oneOf(["bottomright","bottomleft","inline"])},p.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var u=n("oXkQ"),h=n.n(u);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var g={},b=0;function y(){return"undefined"!=typeof window&&window.recaptchaOptions||{}}var f,_,v="onloadcallback",w=y(),C=(f=function(){var e=y(),t=e.lang?"&hl="+e.lang:"";return"https://"+(e.useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+v+"&render=explicit"+t},_=(_={callbackName:v,globalName:"grecaptcha",removeOnUnmount:w.removeOnUnmount||!1})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,a;function i(e,n){var a;return(a=t.call(this,e,n)||this).state={},a.__scriptURL="",a}a=t,(n=i).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a;var o=i.prototype;return o.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+b++),this.__scriptLoaderID},o.setupScriptURL=function(){return this.__scriptURL="function"==typeof f?f():f,this.__scriptURL},o.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},o.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=g[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[_.callbackName]},o.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),a=_,i=a.globalName,r=a.callbackName,o=a.scriptId;if(i&&void 0!==window[i]&&(g[t]={loaded:!0,observers:{}}),g[t]){var s=g[t];return s&&(s.loaded||s.errored)?void this.asyncScriptLoaderHandleLoad(s):void(s.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},g[t]={loaded:!1,observers:c};var l=document.createElement("script");l.src=t,l.async=!0,o&&(l.id=o);var d=function(e){if(g[t]){var n=g[t].observers;for(var a in n)e(n[a])&&delete n[a]}};r&&"undefined"!=typeof window&&(window[r]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),l.onload=function(){var e=g[t];e&&(e.loaded=!0,d((function(t){return!r&&(t(e),!0)})))},l.onerror=function(){var e=g[t];e&&(e.errored=!0,d((function(t){return t(e),!0})))},document.body.appendChild(l)},o.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===_.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var a=g[e];a&&(delete a.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===_.removeOnUnmount&&delete g[e])},o.render=function(){var t=_.globalName,n=this.props,a=(n.asyncScriptOnLoad,n.forwardedRef),i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!=typeof window&&(i[t]=void 0!==window[t]?window[t]:void 0),i.ref=a,Object(r.createElement)(e,i)},i}(r.Component),a=Object(r.forwardRef)((function(e,t){return Object(r.createElement)(n,m({},e,{forwardedRef:t}))}));return a.displayName="AsyncScriptLoader("+t+")",a.propTypes={asyncScriptOnLoad:c.a.func},h()(a,e)})(p),x=n("MWbm"),E=n("t62R"),S=n("/yvb"),L=n("rHpw"),I=n("3XMw"),k=n.n(I);const R=k.a.c1df579e,F=k.a.b60eba9e,T=k.a.ba939777,D=k.a.bc6efc72;class O extends r.Component{constructor(e,t){super(e,t),i()(this,"_handlePass",(e=>{const{onChange:t}=this.props;t&&setTimeout((()=>t(e)),1e3)})),i()(this,"_handleConsent",(()=>{const{onConsent:e}=this.props;this.setState({termsAccepted:!0}),e&&e()})),this.state={termsAccepted:!1}}_renderConsentForm(){const{nextButtonDisabled:e}=this.props;return r.createElement(x.a,null,r.createElement(E.c,{style:z.guideCopy},F),r.createElement(x.a,{style:z.button},r.createElement(S.a,{disabled:e,onPress:this._handleConsent,size:"normalLarge",type:"secondary"},R)),r.createElement(E.c,{color:"gray600"},r.createElement(k.a.I18NFormatMessage,{$i18n:"hc37d3ba"},r.createElement(E.c,{link:"https://policies.google.com/privacy"},D))))}_renderRecaptcha(){const{withConsentForm:e}=this.props;return r.createElement(r.Fragment,null,e?r.createElement(x.a,{style:z.recaptchaTitle},r.createElement(E.c,{style:z.guideCopy},T)):null,r.createElement(x.a,{style:z.container},r.createElement(C,{onChange:this._handlePass,sitekey:"6LfOP30UAAAAAFBC4jbzu890rTdXBXBNHx9eVZEX"})))}render(){const{withConsentForm:e}=this.props,{termsAccepted:t}=this.state;return e&&!t?this._renderConsentForm():this._renderRecaptcha()}}const z=L.a.create((e=>({container:{margin:"auto",transitionProperty:"opacity",transitionDelay:"2s"},button:{paddingVertical:e.spaces.space20},guideCopy:{paddingTop:e.spaces.space12},recaptchaTitle:{paddingBottom:e.spaces.space20}})))},Oib4:function(e,t,n){"use strict";var a=n("ERkP"),i=n("Lsrn"),r=n("k/Ka");const o=(e={})=>Object(r.a)("svg",{...e,style:[i.a.root,e.style],viewBox:"0 0 24 24"},a.createElement("g",null,a.createElement("path",{d:"M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm.025 16.468c-.708 0-1.28-.574-1.28-1.28 0-.71.572-1.282 1.28-1.282.708 0 1.28.573 1.28 1.28.002.708-.57 1.282-1.28 1.282zM14.47 7.636l-1.815 6.098c-.063.212-.258.357-.48.357h-.298c-.222 0-.416-.145-.48-.356L9.583 7.636c-.045-.152-.016-.316.08-.442.093-.127.24-.2.4-.2h3.927c.157 0 .306.073.4.2.094.126.124.29.08.442z"})));o.metadata={width:24,height:24},t.a=o},Ukpf:function(e,t,n){"use strict";const a={inject(e){const t=document.createElement("script");t.async=!0,t.src=e;const n=document.body;n&&n.appendChild(t)}};t.a=a},XJCT:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return E}));var a=n("97Jx"),i=n.n(a),r=n("ERkP"),o=n("t62R"),s=n("3XMw"),c=n.n(s),l=n("p+r5");const d=Object.freeze({password:"password",username:"username_or_email"});var p=({name:e,...t})=>r.createElement(l.a,i()({autoCapitalize:"none",autoCorrect:!1,name:`session[${e}]`,spellCheck:"false"},t));const u=c.a.d1091f50,h=r.createElement(o.c,{link:{external:!0,pathname:"https://twitter.com/account/begin_password_reset",openInSameFrame:!0}},u),m=c.a.dec3c9b8,g=({helperText:e,label:t,withForgotPasswordLink:n,...a})=>r.createElement(p,i()({},a,{helperText:n?h:e,label:t||m,name:d.password,type:"password"}));g.defaultProps={autoFocus:!1,withForgotPasswordLink:!1};var b=g,y=n("v6aA"),f=e=>e.isTrue("responsive_web_login_input_type_email_enabled")?"email":void 0;const _=c.a.e1ec8c17,v=c.a.d0a750f2,w=c.a.e2dd29b5,C=c.a.jb4eb245,x=({autoFocus:e,label:t,withUsernameDisabled:n,withEmailDisabled:a,withPhoneDisabled:o,...s})=>{const{featureSwitches:c}=r.useContext(y.a);let l=_;return n?l=v:o?l=C:a&&(l=w),r.createElement(p,i()({},s,{autoFocus:e,label:t||l,name:d.username,type:f(c)}))};x.defaultProps={autoFocus:!0,withUsernameDisabled:!1,withPhoneDisabled:!1,withEmailDisabled:!1};var E=x},"p+r5":function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n("97Jx"),i=n.n(a),r=n("KEM+"),o=n.n(r),s=n("ERkP"),c=n("t62R"),l=n("piX5"),d=n("3XMw"),p=n.n(d),u=n("tI3i"),h=n.n(u),m=n("oQhu"),g=n("rHpw"),b=n("aITJ"),y=n("MWbm"),f=(n("aWzz"),n("Oib4")),_=n("WtWS"),v=n("ioan");const w=e=>e.length,C=(e,t=w)=>t(e);class x extends s.Component{constructor(e){super(e),o()(this,"_blurOnBackspaceKeyUpForKaiOS",!1),o()(this,"_isLabelLarge",(()=>{const{isFocused:e,actualCount:t}=this.state;return!t&&!e})),o()(this,"_getTextInputStyle",Object(m.a)((e=>[E.root,!e&&E.disabled]))),o()(this,"_calculateLength",(e=>C(e,this.props.calculateLength))),o()(this,"_shouldRenderDisplayCount",(()=>{const{isFocused:e}=this.state,t=this._isFormInvalid();return Boolean((e||t)&&this._getMaxDisplayCount())})),o()(this,"_isInvalidNumber",(()=>{var e,t,n,a,i;const{type:r}=this.props,o=null==(e=this._textInput)||null==(t=e._textInputNode)?void 0:t.value,s=null==(n=this._textInput)||null==(a=n._textInputNode)||null==(i=a.validity)?void 0:i.badInput;return"number"===r&&""===o&&!0===s})),o()(this,"_getActualCount",(e=>{let t=e.length;return this._isInvalidNumber()&&(t=1),t})),o()(this,"_handleBlur",(e=>{const{onBlur:t}=this.props,{value:n}=e.currentTarget,a=this._calculateLength(n),i=this._getActualCount(n);this.setState({isFocused:!1,displayCount:a,actualCount:i}),t&&t(e)})),o()(this,"_handleChange",(e=>{const{onChange:t}=this.props,{value:n}=e.currentTarget,a=this._calculateLength(n),i=this._getActualCount(n);this.setState({isFocused:!0,displayCount:a,actualCount:i}),t&&t(e)})),o()(this,"_handleFocus",(e=>{const{onFocus:t}=this.props;this.setState({isFocused:!0}),t&&t(e)})),o()(this,"_handleKeyPress",(e=>{const{multiline:t,onKeyPress:n,onSubmitEditing:a}=this.props;n&&n(e),e.isDefaultPrevented()||"Enter"!==e.key||e.shiftKey||t||!a||(e.preventDefault(),a(e))})),o()(this,"_handleKeyDown",(e=>{const{onKeyDown:t}=this.props,{displayCount:n}=this.state,a=0===n;b.b.isKaiOS()&&"Backspace"===e.key&&a?this._blurOnBackspaceKeyUpForKaiOS=a:t&&t(e)})),o()(this,"_handleKeyUp",(e=>{const{onKeyUp:t}=this.props;b.b.isKaiOS()&&"Backspace"===e.key&&this._blurOnBackspaceKeyUpForKaiOS&&(e.preventDefault(),this.blur()),t&&t(e)})),o()(this,"_setTextInputRef",(e=>{this._textInput=e})),o()(this,"_checkComponentPropsUsageCorrectness",(e=>{const{defaultValue:t,maxLength:n,validLength:a,value:i,onChange:r}=e,o=!!r,s="string"==typeof i,c="string"==typeof t;h()(!(!c&&s&&!o),"A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined."),h()(!(n&&a&&a>n),"Max length should be equal or greater than valid length."),h()(!(void 0!==n&&n<=0||void 0!==a&&a<=0),"Set editable to false instead of limiting the valid character count to 0.")})),o()(this,"_exceedsValidLength",(e=>{const t=this._getMaxDisplayCount();return!!t&&e>t})),o()(this,"_getMaxDisplayCount",(()=>this.props.validLength||this.props.maxLength)),this._checkComponentPropsUsageCorrectness(e);const{defaultValue:t,value:n}=e;this.state={displayCount:this._calculateLength(n||t||""),actualCount:w(n||t||""),isFocused:!1}}componentDidUpdate(e){const{validLength:t,maxLength:n,onChange:a,value:i}=this.props,{validLength:r,maxLength:o,onChange:s,value:c}=e;r===t&&n===o&&!!a===!!s&&"string"==typeof i===("string"==typeof c)||this._checkComponentPropsUsageCorrectness(this.props)}static getDerivedStateFromProps(e,t){const{calculateLength:n,value:a}=e,i="string"==typeof a?C(a,n):0;return"string"==typeof a&&i!==t.displayCount?{displayCount:i,actualCount:a.length}:null}render(){const{accessibilityLabel:e,errorText:t,helperText:n,style:a,editable:i}=this.props,{isFocused:r}=this.state,o=this._isFormInvalid();return s.createElement(y.a,{style:[S.root,a]},s.createElement(y.a,{accessibilityLabel:e,accessibilityRole:"label",style:[l.a.border,S.textInputFormStyle,o&&l.a.invalidBorderColor,r&&o&&l.a.focusedBorderInvalid,r&&!o&&l.a.focusedBorderValid,!i&&l.a.disabled]},s.createElement(y.a,{style:S.textInputFormWrapper},s.createElement(y.a,{style:[S.textInputHeader]},this._renderLabel(),this._shouldRenderDisplayCount()?this._renderDisplayCount():null),this._renderTextInput())),s.createElement(y.a,{style:[S.sidePadding,S.underTextInputForm]},s.createElement(y.a,{style:S.subtextWrapper},n?this._renderHelperText():null,o&&t?this._renderErrorText():null)))}_renderLabel(){const{label:e}=this.props,{isFocused:t}=this.state,n=t?"primary":"gray600",a=this._isFormInvalid()?"red500":n,i=this._isLabelLarge();return s.createElement(c.c,{color:i?"gray600":a,numberOfLines:1,size:i?"large":"small",style:[S.textInputHeaderItem,i&&S.placeholderText,S.transition]},e)}_renderTextInput(){const{accessibilityLabel:e,calculateLength:t,editable:n,errorText:a,helperText:r,Icon:o,invalid:l,label:d,maxLength:p,onBlur:u,onChange:h,onSubmitEditing:m,onFocus:g,onKeyDown:b,onKeyPress:f,onKeyUp:_,showValidationIcon:w,style:C,validLength:x,...S}=this.props,L=this.getValue(),I=this._calculateLength(L),k=p?p+L.length-I:void 0;return s.createElement(y.a,{style:E.container},o&&!this._isLabelLarge()?this._renderIcon():null,s.createElement(c.c,{size:"large",style:E.wrapper},s.createElement(v.a,i()({},S,{editable:n,maxLength:k,onBlur:this._handleBlur,onChange:this._handleChange,onFocus:this._handleFocus,onKeyDown:this._handleKeyDown,onKeyPress:this._handleKeyPress,onKeyUp:this._handleKeyUp,ref:this._setTextInputRef,style:this._getTextInputStyle(n)}))),w&&!this._isLabelLarge()?this._renderValidationIcon():null)}_renderHelperText(){return s.createElement(y.a,{accessibilityLiveRegion:"polite"},s.createElement(c.c,{color:"gray600",size:"small",style:S.subtext},this.props.helperText))}_renderErrorText(){return s.createElement(y.a,{accessibilityLiveRegion:"assertive"},s.createElement(c.c,{color:"red500",size:"small",style:S.subtext},this.props.errorText))}_renderDisplayCount(){const{displayCount:e}=this.state,t=this._getMaxDisplayCount(),n=this._exceedsValidLength(e),a=t&&p.a.ia24dc8c(t),i=p.a.ia24dc8c(e);return s.createElement(y.a,{accessibilityLiveRegion:"polite",style:[S.textInputHeaderItem,S.displayCount]},s.createElement(c.c,{color:n?"red500":"gray600",size:"small"},a?`${i} / ${a}`:""))}_renderIcon(){const{Icon:e}=this.props,{isFocused:t}=this.state,n=[S.icon,t&&S.focusedIcon];return e&&s.createElement(e,{style:n})}_renderValidationIcon(){return this._isFormInvalid()?s.createElement(f.a,{style:[S.validationIcon,l.a.invalidColor]}):s.createElement(_.a,{style:[S.validationIcon,l.a.validColor]})}_isFormInvalid(){const{displayCount:e}=this.state;return this.props.invalid||this._exceedsValidLength(e)||this._isInvalidNumber()}blur(){this._textInput&&this._textInput.blur()}getValue(){return this._textInput&&this._textInput.getValue()||""}focus(){this._textInput&&this._textInput.focus()}isValidLength(){const e=this.getValue(),t=this._calculateLength(e);return!this._exceedsValidLength(t)}}o()(x,"defaultProps",{autoComplete:"on",autoCorrect:!0,autoFocus:!1,editable:!0,invalid:!1}),x.propTypes={};const E=g.a.create((e=>({container:{flexDirection:"row",flexGrow:1,flexShrink:1,overflow:"hidden",paddingBottom:e.spaces.space8,paddingHorizontal:e.spaces.space8,paddingTop:e.spaces.space12,marginTop:e.spaces.space16},root:{backgroundColor:"transparent",borderRadius:e.borderRadii.none,borderWidth:e.borderWidths.none,boxSizing:"border-box",color:"inherit",fontFamily:"inherit",fontSize:"inherit",textAlign:"inherit",outlineStyle:"none",padding:0},wrapper:{alignItems:"center",display:"flex",fontSize:e.fontSizes.headline2,width:"100%"},disabled:{color:e.colors.gray600}}))),S=g.a.create((e=>({root:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical},textInputFormStyle:{flexDirection:"row"},textInputFormWrapper:{flexGrow:1,flexShrink:1},textInputHeader:{flexDirection:"row",justifyContent:"space-between",position:"absolute",height:"100%",width:"100%"},textInputHeaderItem:{paddingTop:e.spaces.space8,paddingHorizontal:e.spaces.space8,fontSize:"small"},placeholderText:{paddingTop:e.spaces.space16,fontSize:e.fontSizes.headline2,userSelect:"none"},displayCount:{flexGrow:1,alignItems:"flex-end"},sidePadding:{paddingHorizontal:e.spaces.space8},underTextInputForm:{flexDirection:"row"},subtextWrapper:{flexDirection:"column",flex:1,paddingRight:e.spaces.space20,paddingTop:e.spaces.space2},subtext:{alignSelf:"flex-start"},focusedIcon:{color:e.colors.primary},icon:{alignSelf:"center",color:e.colors.gray600,paddingRight:e.spaces.space4},validationIcon:{alignSelf:"center",paddingLeft:e.spaces.space4},transition:{transition:"transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)"}})))},piX5:function(e,t,n){"use strict";const a=n("rHpw").a.create((e=>({border:{borderRadius:e.borderRadii.small,borderWidth:e.borderWidths.small,borderColor:e.colors.gray200},focusedBorderValid:{boxShadow:`0 0 0 ${e.borderWidths.small} ${e.colors.primary}`,borderColor:e.colors.primary},focusedBorderInvalid:{boxShadow:`0 0 0 ${e.borderWidths.small} ${e.colors.red500}`},invalidBorderColor:{borderColor:e.colors.red500},invalidColor:{color:e.colors.red500},validColor:{color:e.colors.primary},disabled:{cursor:"default",opacity:.5,backgroundColor:e.colors.gray50,borderColor:e.colors.gray50}})));t.a=a}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Login.23daa4f5.js.map