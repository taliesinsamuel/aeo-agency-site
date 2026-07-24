;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="6c0eb186-6462-c1e0-0c85-237c41e4d8df")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,268503,590241,501849,282438,701794,113648,635244,517726,558955,313999,249318,424996,926429,466821,346349,332708,171596,613427,286951,951506,744786,108442,801097,451297,525294,673734,101968,496702,586659,782726,211390,634330,977410,11167,866239,655310,731318,803227,809894,951111,555657,e=>{"use strict";let t,i;try{var a="u">typeof window?window:e.g;a._sentryModuleMetadata=a._sentryModuleMetadata||{},a._sentryModuleMetadata[(new a.Error).stack]=Object.assign({},a._sentryModuleMetadata[(new a.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let r={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},s={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},n={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},o=Object.entries(n),l=o.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),d=o.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),u=Object.entries(d).reduce((e,[t,i])=>{let a=l[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"}),h=Object.entries(l).reduce((e,[t,i])=>{let a=d[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),c={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},m={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},p={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},E={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},v={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},g={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};e.s(["AttributeToStateChangeEventMap",0,h,"AvailabilityStates",0,E,"MediaStateChangeEvents",0,d,"MediaStateReceiverAttributes",0,s,"MediaUIAttributes",0,l,"MediaUIEvents",0,r,"MediaUIProps",0,n,"PointerTypes",0,p,"ReadyStates",0,{HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},"StateChangeEventToAttributeMap",0,u,"StreamTypes",0,v,"TextTrackKinds",0,c,"TextTrackModes",0,m,"VolumeLevels",0,{HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},"WebkitPresentationModes",0,g],590241),e.i(590241);try{var b="u">typeof window?window:e.g;b._sentryModuleMetadata=b._sentryModuleMetadata||{},b._sentryModuleMetadata[(new b.Error).stack]=Object.assign({},b._sentryModuleMetadata[(new b.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}function y(e){return null==e?void 0:e.map(f).join(" ")}function f(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function w(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function A(e){return null==e?void 0:e.map(M).join(" ")}function M(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function _(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function I(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}let k=e=>new Promise(t=>setTimeout(t,e));e.s(["camelCase",0,function(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())},"delay",0,k,"isNumericString",0,function(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))},"isValidNumber",0,I,"parseAudioTrackList",0,function(e){return null==e?void 0:e.split(/\s+/).map(_)},"parseRenditionList",0,function(e){return null==e?void 0:e.split(/\s+/).map(w)},"stringifyAudioTrackList",0,A,"stringifyRenditionList",0,y],501849);try{var T="u">typeof window?window:e.g;T._sentryModuleMetadata=T._sentryModuleMetadata||{},T._sentryModuleMetadata[(new T.Error).stack]=Object.assign({},T._sentryModuleMetadata[(new T.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}try{var S="u">typeof window?window:e.g;S._sentryModuleMetadata=S._sentryModuleMetadata||{},S._sentryModuleMetadata[(new S.Error).stack]=Object.assign({},S._sentryModuleMetadata[(new S.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let L={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."}},R=(null==(ew=globalThis.navigator)?void 0:ew.language)||"en",D=e=>{R=e},C=(e,t={})=>(e=>{var t,i,a;let[r]=R.split("-");return(null==(t=L[R])?void 0:t[e])||(null==(i=L[r])?void 0:i[e])||(null==(a=L.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`);e.s(["setLanguage",0,D,"t",0,C],282438);try{var x="u">typeof window?window:e.g;x._sentryModuleMetadata=x._sentryModuleMetadata||{},x._sentryModuleMetadata[(new x.Error).stack]=Object.assign({},x._sentryModuleMetadata[(new x.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let O=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],P=e=>{if(!I(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>{let i;return e&&(i=1===e?C(O[t].singular):C(O[t].plural),`${e} ${i}`)}).filter(e=>e).join(", ");return i?C("{time} remaining",{time:r}):r};function U(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),s=Math.floor(e/3600),n=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(s=r=a="0"),r=(((s=s>0||o>0?s+":":"")||n>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+s+r+(a=a<10?"0"+a:a)}let N=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});e.s(["emptyTimeRanges",0,N,"formatAsTimePhrase",0,P,"formatTime",0,U,"serializeTimeRanges",0,function(e=N){return Array.from(e).map((t,i)=>[Number(e.start(i).toFixed(3)),Number(e.end(i).toFixed(3))].join(":")).join(" ")}],461645),e.i(461645);try{var B="u">typeof window?window:e.g;B._sentryModuleMetadata=B._sentryModuleMetadata||{},B._sentryModuleMetadata[(new B.Error).stack]=Object.assign({},B._sentryModuleMetadata[(new B.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}class H{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class W extends H{}class $ extends W{constructor(){super(...arguments),this.role=null}}let V={createElement:function(){return new j.HTMLElement},createElementNS:function(){return new j.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},j={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:V,Node:W,Element:$,HTMLElement:class extends ${constructor(){super(...arguments),this.innerHTML=""}get content(){return new j.DocumentFragment}},DocumentFragment:class extends H{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},K="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"u"<typeof window||void 0===window.customElements,F=Object.keys(j).every(e=>e in globalThis),G=K&&!F?j:globalThis,q=K&&!F?V:globalThis.document;e.s(["document",0,q,"globalThis",0,G],701794);try{var Q="u">typeof window?window:e.g;Q._sentryModuleMetadata=Q._sentryModuleMetadata||{},Q._sentryModuleMetadata[(new Q.Error).stack]=Object.assign({},Q._sentryModuleMetadata[(new Q.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let Y=new WeakMap,z=e=>{let t=Y.get(e);return t||Y.set(e,t=new Set),t},Z=new G.ResizeObserver(e=>{for(let t of e)for(let e of z(t.target))e(t)});function X(e,t){z(e).add(t),Z.observe(e)}function J(e,t){let i=z(e);i.delete(t),i.size||Z.unobserve(e)}e.s(["observeResize",0,X,"unobserveResize",0,J],113648);try{var ee="u">typeof window?window:e.g;ee._sentryModuleMetadata=ee._sentryModuleMetadata||{},ee._sentryModuleMetadata[(new ee.Error).stack]=Object.assign({},ee._sentryModuleMetadata[(new ee.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}function et(e){let t={};for(let i of e)t[i.name]=i.value;return t}function ei(e){var t;return null!=(t=ea(e))?t:eo(e,"media-controller")}function ea(e){var t;let{MEDIA_CONTROLLER:i}=s,a=e.getAttribute(i);if(a)return null==(t=ed(e))?void 0:t.getElementById(a)}let er=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},es=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},en=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||en(e,t.getRootNode().host)),eo=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||eo(e.getRootNode().host,t)};function el(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=el(i.shadowRoot))?t:i:null}function ed(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function eu(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function eh(e,t,i,a){let r=a.x-i.x,s=a.y-i.y,n=r*r+s*s;return 0===n?0:Math.max(0,Math.min(1,((e-i.x)*r+(t-i.y)*s)/n))}function ec(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||em(e,t)}function em(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],s=null==r?void 0:r[r.length-1];if(!(null==s?void 0:s.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let n=null==s?void 0:s.sheet.insertRule(`${t}{}`,s.sheet.cssRules.length);return null==(a=s.sheet.cssRules)?void 0:a[n]}function ep(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function eE(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}ep(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function ev(e,t){return e.hasAttribute(t)}function eg(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}ev(e,t)!=i&&e.toggleAttribute(t,i)}function eb(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function ey(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;eb(e,t,void 0)!==a&&e.setAttribute(t,a)}e.s(["closestComposedNode",0,eo,"containsComposedNode",0,en,"getActiveElement",0,el,"getAttributeMediaController",0,ea,"getBooleanAttr",0,ev,"getDocumentOrShadowRoot",0,ed,"getMediaController",0,ei,"getNumericAttr",0,ep,"getOrInsertCSSRule",0,ec,"getPointProgressOnLine",0,eh,"getSlotted",0,es,"getStringAttr",0,eb,"insertCSSRule",0,em,"isElementVisible",0,eu,"namedNodeMapToObject",0,et,"setBooleanAttr",0,eg,"setNumericAttr",0,eE,"setStringAttr",0,ey,"updateIconText",0,er],635244);try{var ef="u">typeof window?window:e.g;ef._sentryModuleMetadata=ef._sentryModuleMetadata||{},ef._sentryModuleMetadata[(new ef.Error).stack]=Object.assign({},ef._sentryModuleMetadata[(new ef.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var ew,eA,eM,e_,eI,ek,eT,eS,eL,eR,eD,eC,ex,eO,eP,eU,eN,eB,eH,eW,e$,eV,ej,eK,eF,eG,eq,eQ,eY,ez,eZ,eX,eJ,e0,e1,e2,e5,e3,e4,e7,e8,e9,e6,te,tt,ti,ta,tr,ts,tn,to,tl,td,tu,th,tc,tm,tp,tE,tv,tg,tb,ty,tf,tw,tA,tM,t_,tI,tk,tT,tS,tL,tR,tD,tC,tx,tO,tP,tU,tN,tB,tH,tW,t$,tV,tj,tK,tF,tG,tq,tQ,tY,tz,tZ,tX,tJ,t0,t1,t2,t5,t3,t4,t7,t8,t9,t6,ie,it,ii,ia,ir,is,io,il,id,iu,ih,ic,im,ip,iE,iv,ig,ib,iy,iw,iA,iM,i_,iI,ik,iT,iS,iL,iR,iD,iC,ix,iO,iP,iU,iN,iB,iH,iW,i$,iV,ij,iK,iF,iG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iq=(e,t,i)=>(iG(e,t,"read from private field"),i?i.call(e):t.get(e)),iQ=(e,t,i,a)=>(iG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class iY extends G.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eA,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=et(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER,l.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iq(this,eA))?void 0:a.unassociateElement)||r.call(a,this),iQ(this,eA,null)),i&&this.isConnected&&(iQ(this,eA,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=iq(this,eA))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i,a;let r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),iQ(this,eA,(i=this,(r=i.getAttribute(s.MEDIA_CONTROLLER))?null==(a=i.getRootNode())?void 0:a.getElementById(r):eo(i,"media-controller"))),this.getAttribute(s.MEDIA_CONTROLLER)&&(null==(t=null==(e=iq(this,eA))?void 0:e.associateElement)||t.call(e,this)),iq(this,eA)&&(iq(this,eA).addEventListener("pointerdown",this),iq(this,eA).addEventListener("click",this),iq(this,eA).hasAttribute("tabindex")||(iq(this,eA).tabIndex=0))}disconnectedCallback(){var e,t,i,a;this.getAttribute(s.MEDIA_CONTROLLER)&&(null==(t=null==(e=iq(this,eA))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=iq(this,eA))||i.removeEventListener("pointerdown",this),null==(a=iq(this,eA))||a.removeEventListener("click",this),iQ(this,eA,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:s,height:n}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>s||l>n||0===s&&0===n)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===p.TOUCH)return void this.handleTap(e);if(d===p.MOUSE||d===p.PEN)return void this.handleMouseClick(e)}}}get mediaPaused(){return ev(this,l.MEDIA_PAUSED)}set mediaPaused(e){eg(this,l.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?r.MEDIA_PLAY_REQUEST:r.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new G.CustomEvent(t,{composed:!0,bubbles:!0}))}}eA=new WeakMap,iY.shadowRootOptions={mode:"open"},iY.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},G.customElements.get("media-gesture-receiver")||G.customElements.define("media-gesture-receiver",iY),e.s(["default",0,iY],517726);try{var iz="u">typeof window?window:e.g;iz._sentryModuleMetadata=iz._sentryModuleMetadata||{},iz._sentryModuleMetadata[(new iz.Error).stack]=Object.assign({},iz._sentryModuleMetadata[(new iz.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var iZ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iX=(e,t,i)=>(iZ(e,t,"read from private field"),i?i.call(e):t.get(e)),iJ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},i0=(e,t,i,a)=>(iZ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),i1=(e,t,i)=>(iZ(e,t,"access private method"),i);let i2={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},i5=Object.values(l);function i3(e,t){var i,a,r;if(!e.isConnected)return;let s=Object.fromEntries((null!=(i=e.getAttribute(i2.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),n=(a=s,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(s).forEach(t=>{if(n.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(d.BREAKPOINTS_CHANGE,{detail:n});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(d.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class i4 extends G.HTMLElement{constructor(){if(super(),iJ(this,eD),iJ(this,ex),iJ(this,eP),iJ(this,eN),iJ(this,eH),iJ(this,eM,void 0),iJ(this,e_,0),iJ(this,eI,null),iJ(this,ek,null),iJ(this,eT,void 0),this.breakpointsComputed=!1,iJ(this,eS,e=>{let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}}),iJ(this,eL,!1),iJ(this,eR,e=>{iX(this,eL)||(setTimeout(()=>{i3(e.target,e.contentRect.width),i0(this,eL,!1)},0),i0(this,eL,!0))}),iJ(this,e$,void 0),iJ(this,eV,()=>{if(!iX(this,e$).assignedElements({flatten:!0}).length){iX(this,eI)&&this.mediaUnsetCallback(iX(this,eI));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=et(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}i0(this,eM,new MutationObserver(iX(this,eS)))}static get observedAttributes(){return[i2.AUTOHIDE,i2.GESTURES_DISABLED].concat(i5).filter(e=>![l.MEDIA_RENDITION_LIST,l.MEDIA_AUDIO_TRACK_LIST,l.MEDIA_CHAPTERS_CUES,l.MEDIA_WIDTH,l.MEDIA_HEIGHT,l.MEDIA_ERROR,l.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==i2.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(i0(this,eI,e),e.localName.includes("-")&&await G.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;iX(this,eM).observe(this,{childList:!0,subtree:!0}),X(this,iX(this,eR));let t=null!=this.getAttribute(i2.AUDIO)?C("audio player"):C("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(i2.USER_INACTIVE,""),i3(this,this.getBoundingClientRect().width);let i=this.querySelector(":scope > slot[slot=media]");i&&(i0(this,e$,i),iX(this,e$).addEventListener("slotchange",iX(this,eV))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=G.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;J(this,iX(this,eR)),clearTimeout(iX(this,ek)),iX(this,eM).disconnect(),this.media&&this.mediaUnsetCallback(this.media),null==(e=G.window)||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),iX(this,e$)&&(iX(this,e$).removeEventListener("slotchange",iX(this,eV)),i0(this,e$,null)),i0(this,eL,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){i0(this,eI,null)}handleEvent(e){switch(e.type){case"pointerdown":i0(this,e_,e.timeStamp);break;case"pointermove":i1(this,eD,eC).call(this,e);break;case"pointerup":i1(this,ex,eO).call(this,e);break;case"mouseleave":i1(this,eP,eU).call(this);break;case"mouseup":this.removeAttribute(i2.KEYBOARD_CONTROL);break;case"keyup":i1(this,eH,eW).call(this),this.setAttribute(i2.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);i0(this,eT,isNaN(t)?0:t)}get autohide(){return(void 0===iX(this,eT)?2:iX(this,eT)).toString()}get breakpoints(){return eb(this,i2.BREAKPOINTS)}set breakpoints(e){ey(this,i2.BREAKPOINTS,e)}get audio(){return ev(this,i2.AUDIO)}set audio(e){eg(this,i2.AUDIO,e)}get gesturesDisabled(){return ev(this,i2.GESTURES_DISABLED)}set gesturesDisabled(e){eg(this,i2.GESTURES_DISABLED,e)}get keyboardControl(){return ev(this,i2.KEYBOARD_CONTROL)}set keyboardControl(e){eg(this,i2.KEYBOARD_CONTROL,e)}get noAutohide(){return ev(this,i2.NO_AUTOHIDE)}set noAutohide(e){eg(this,i2.NO_AUTOHIDE,e)}get autohideOverControls(){return ev(this,i2.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){eg(this,i2.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return ev(this,i2.USER_INACTIVE)}set userInteractive(e){eg(this,i2.USER_INACTIVE,e)}}eM=new WeakMap,e_=new WeakMap,eI=new WeakMap,ek=new WeakMap,eT=new WeakMap,eS=new WeakMap,eL=new WeakMap,eR=new WeakMap,eD=new WeakSet,eC=function(e){if("mouse"!==e.pointerType&&e.timeStamp-iX(this,e_)<250)return;i1(this,eN,eB).call(this),clearTimeout(iX(this,ek));let t=this.hasAttribute(i2.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&i1(this,eH,eW).call(this)},ex=new WeakSet,eO=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(i2.USER_INACTIVE);[this,this.media].includes(e.target)&&t?i1(this,eP,eU).call(this):i1(this,eH,eW).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&i1(this,eH,eW).call(this)},eP=new WeakSet,eU=function(){if(0>iX(this,eT)||this.hasAttribute(i2.USER_INACTIVE))return;this.setAttribute(i2.USER_INACTIVE,"");let e=new G.CustomEvent(d.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},eN=new WeakSet,eB=function(){if(!this.hasAttribute(i2.USER_INACTIVE))return;this.removeAttribute(i2.USER_INACTIVE);let e=new G.CustomEvent(d.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},eH=new WeakSet,eW=function(){i1(this,eN,eB).call(this),clearTimeout(iX(this,ek));let e=parseInt(this.autohide);e<0||i0(this,ek,setTimeout(()=>{i1(this,eP,eU).call(this)},1e3*e))},e$=new WeakMap,eV=new WeakMap,i4.shadowRootOptions={mode:"open"},i4.getTemplateHTML=function(e){return`
    <style>
      
      :host([${l.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${i2.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${i2.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${i2.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${i2.AUDIO}])[${i2.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${i2.AUDIO}])[${i2.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${i2.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${i2.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${i2.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${i2.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${i2.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${i2.USER_INACTIVE}]:not([${l.MEDIA_PAUSED}]):not([${l.MEDIA_IS_AIRPLAYING}]):not([${l.MEDIA_IS_CASTING}]):not([${i2.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${i2.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${i2.USER_INACTIVE}]:not([${i2.NO_AUTOHIDE}]):not([${l.MEDIA_PAUSED}]):not([${l.MEDIA_IS_CASTING}]):not([${i2.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${i2.USER_INACTIVE}][${i2.AUTOHIDE_OVER_CONTROLS}]:not([${i2.NO_AUTOHIDE}]):not([${l.MEDIA_PAUSED}]):not([${l.MEDIA_IS_CASTING}]):not([${i2.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${i2.AUDIO}])[${l.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${iY.shadowRootOptions.mode}">
          ${iY.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},G.customElements.get("media-container")||G.customElements.define("media-container",i4),e.s(["Attributes",0,i2,"MediaContainer",0,i4,"default",0,i4],558955);try{var i7="u">typeof window?window:e.g;i7._sentryModuleMetadata=i7._sentryModuleMetadata||{},i7._sentryModuleMetadata[(new i7.Error).stack]=Object.assign({},i7._sentryModuleMetadata[(new i7.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var i8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},i9=(e,t,i)=>(i8(e,t,"read from private field"),i?i.call(e):t.get(e)),i6=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ae=(e,t,i,a)=>(i8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class at{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){i6(this,eq),i6(this,ej,void 0),i6(this,eK,void 0),i6(this,eF,void 0),i6(this,eG,new Set),ae(this,ej,e),ae(this,eK,t),ae(this,eF,new Set(i))}[Symbol.iterator](){return i9(this,eq,eQ).values()}get length(){return i9(this,eq,eQ).size}get value(){var e;return null!=(e=[...i9(this,eq,eQ)].join(" "))?e:""}set value(e){var t;e!==this.value&&(ae(this,eG,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...i9(this,eq,eQ)][e]}values(){return i9(this,eq,eQ).values()}forEach(e,t){i9(this,eq,eQ).forEach(e,t)}add(...e){var t,i;e.forEach(e=>i9(this,eG).add(e)),(""!==this.value||(null==(t=i9(this,ej))?void 0:t.hasAttribute(`${i9(this,eK)}`)))&&(null==(i=i9(this,ej))||i.setAttribute(`${i9(this,eK)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>i9(this,eG).delete(e)),null==(t=i9(this,ej))||t.setAttribute(`${i9(this,eK)}`,`${this.value}`)}contains(e){return i9(this,eq,eQ).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}ej=new WeakMap,eK=new WeakMap,eF=new WeakMap,eG=new WeakMap,eq=new WeakSet,eQ=function(){return i9(this,eG).size?i9(this,eG):i9(this,eF)},e.s(["AttributeTokenList",0,at],313999);try{var ai="u">typeof window?window:e.g;ai._sentryModuleMetadata=ai._sentryModuleMetadata||{},ai._sentryModuleMetadata[(new ai.Error).stack]=Object.assign({},ai._sentryModuleMetadata[(new ai.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let aa=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?c.CAPTIONS:c.SUBTITLES,language:i,label:r}},ar=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=aa(e);return{...t,...i}}),as=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?aa(e):e):"string"==typeof e?ar(e):[e]:[],an=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,ao=(e=[])=>Array.prototype.map.call(e,an).join(" "),al=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},ad=(e,t=[],i=[])=>{let a=as(i).map(al);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},au=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:al(t);return Array.from(e.textTracks).filter(i)},ah=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(l.MEDIA_SUBTITLES_SHOWING)};e.s(["areSubsOn",0,ah,"formatTextTrackObj",0,an,"getTextTracksList",0,au,"parseTextTracksStr",0,ar,"parseTracks",0,as,"stringifyTextTrackList",0,ao,"updateTracksModeTo",0,ad],249318);try{var ac="u">typeof window?window:e.g;ac._sentryModuleMetadata=ac._sentryModuleMetadata||{},ac._sentryModuleMetadata[(new ac.Error).stack]=Object.assign({},ac._sentryModuleMetadata[(new ac.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let am="exitFullscreen"in q?"exitFullscreen":"webkitExitFullscreen"in q?"webkitExitFullscreen":"webkitCancelFullScreen"in q?"webkitCancelFullScreen":void 0,ap="fullscreenElement"in q?"fullscreenElement":"webkitFullscreenElement"in q?"webkitFullscreenElement":void 0,aE="fullscreenEnabled"in q?"fullscreenEnabled":"webkitFullscreenEnabled"in q?"webkitFullscreenEnabled":void 0;try{var av="u">typeof window?window:e.g;av._sentryModuleMetadata=av._sentryModuleMetadata||{},av._sentryModuleMetadata[(new av.Error).stack]=Object.assign({},av._sentryModuleMetadata[(new av.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let ag=()=>{var e;return t||(t=null==(e=null==q?void 0:q.createElement)?void 0:e.call(q,"video"))},ab=async(e=ag())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([ay(e,i.signal),af(e,t)]);return i.abort(),a},ay=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),af=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await k(10)}return e.volume!==t},aw=/.*Version\/.*Safari\/.*/.test(G.navigator.userAgent),aA=(e=ag())=>(!G.matchMedia("(display-mode: standalone)").matches||!aw)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),aM=(e=ag())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[aE])||i&&"webkitSupportsFullscreen"in i})({documentElement:q,media:e}),a_=aM(),aI=aA(),ak=!!G.WebKitPlaybackTargetAvailabilityEvent,aT=!!G.chrome;try{var aS="u">typeof window?window:e.g;aS._sentryModuleMetadata=aS._sentryModuleMetadata||{},aS._sentryModuleMetadata[(new aS.Error).stack]=Object.assign({},aS._sentryModuleMetadata[(new aS.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let aL=e=>au(e.media,e=>[c.SUBTITLES,c.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),aR=e=>au(e.media,e=>e.mode===m.SHOWING&&[c.SUBTITLES,c.CAPTIONS].includes(e.kind)),aD=(e,t)=>{let i=aL(e),a=aR(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)ad(m.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=G.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...G.navigator.languages]:G.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:s,label:n,kind:o}=t;ad(m.DISABLED,i,a),ad(m.SHOWING,i,[{language:s,label:n,kind:o}])}}},aC=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?ax(e,t):Object.entries(e).every(([e,i])=>e in t&&aC(i,t[e])))),ax=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>aC(e,t[i])))};try{var aO="u">typeof window?window:e.g;aO._sentryModuleMetadata=aO._sentryModuleMetadata||{},aO._sentryModuleMetadata[(new aO.Error).stack]=Object.assign({},aO._sentryModuleMetadata[(new aO.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let aP=Object.values(v),aU=ab().then(e=>i=e),aN=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof G.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=G.customElements.get(t);i&&e instanceof i||(await G.customElements.whenDefined(t),G.customElements.upgrade(e))}))},aB=new G.DOMParser,aH={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==G.localStorage.getItem("media-chrome-pref-muted"),r=i.hasAttribute("muted");if(a){t&&G.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;G.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===G.localStorage.getItem("media-chrome-pref-muted");aH.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?G.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||G.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=G.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;aH.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&I(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[v.LIVE,v.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(aP.includes(r))return r===v.UNKNOWN?a:r;let s=t.duration;return s===1/0?v.LIVE:Number.isFinite(s)?v.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=aH.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===v.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(aH.mediaStreamType.get(e)!==v.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>aL(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>aR(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:s}=t;if(!r)return;let n=e=>{var i;s.defaultSubtitles&&(e&&![c.CAPTIONS,c.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||aD(t,!0))};return r.addEventListener("loadstart",n),null==(i=r.textTracks)||i.addEventListener("addtrack",n),null==(a=r.textTracks)||a.addEventListener("removetrack",n),()=>{var e,t;r.removeEventListener("loadstart",n),null==(e=r.textTracks)||e.removeEventListener("addtrack",n),null==(t=r.textTracks)||t.removeEventListener("removetrack",n)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=au(i,{kind:c.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&aB.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),s=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==s||s.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==s||s.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&en(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!q.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else q.pictureInPictureElement&&q.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let s=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[ap];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===g.FULLSCREEN?i:a})(e);if(!s)return!1;if(s===r||s===i)return!0;if(s.localName.includes("-")){let e=s.shadowRoot;if(!(ap in e))return en(s,r);for(;null==e?void 0:e[ap];){if(e[ap]===r)return!0;e=null==(t=e[ap])?void 0:t.shadowRoot}}return!1})(e),set(e,t,i){var a,r;e?((e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t),!i.detail||(null==(a=t.media)?void 0:a.inert)||null==(r=t.media)||r.focus()):(e=>{var t;let{documentElement:i}=e;if(am){let e=null==(t=null==i?void 0:i[am])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&G.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!a_||!aM(t))return E.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return aI&&aA(t)?(null==t?void 0:t.disablePictureInPicture)?E.UNAVAILABLE:void 0:E.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===i||(null==t?void 0:t.volume)==void 0)return E.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==i&&aU.then(t=>e(t?void 0:E.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return aT&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?E.UNAVAILABLE:void 0:E.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>ak?(null==t?void 0:t.availability)==="not-available"?E.UNAVAILABLE:void 0:E.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:E.UNAVAILABLE:E.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?E.UNAVAILABLE:void 0:E.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}};try{var aW="u">typeof window?window:e.g;aW._sentryModuleMetadata=aW._sentryModuleMetadata||{},aW._sentryModuleMetadata[(new aW.Error).stack]=Object.assign({},aW._sentryModuleMetadata[(new aW.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let a$={[r.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,s;let n,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=au(l,{kind:c.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),n=i.href}}let u=e.mediaDuration.get(t),h=null==(s=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:s.text;return null!=i&&null==h&&(h=""),{mediaPreviewTime:d,mediaPreviewImage:n,mediaPreviewCoords:o,mediaPreviewChapter:h}},[r.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[r.MEDIA_PLAY_REQUEST](e,t){var i,a,r,s;let n=e.mediaStreamType.get(t)===v.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(n&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(s=null==(r=t.options)?void 0:r.seekToLiveOffset)?s:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[r.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[r.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[r.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[r.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[r.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[r.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[r.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let s=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(s)))return;let n=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(s-n,t)},[r.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,s=aL(t),n=as(i),o=null==(a=n[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&G.localStorage.setItem("media-chrome-pref-subtitles-lang",o),ad(m.SHOWING,s,n)},[r.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=aL(t);ad(m.DISABLED,a,null!=i?i:[])},[r.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){aD(t,i)},[r.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[r.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[r.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[r.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[r.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[r.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[r.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[r.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[r.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};try{var aV="u">typeof window?window:e.g;aV._sentryModuleMetadata=aV._sentryModuleMetadata||{},aV._sentryModuleMetadata[(new aV.Error).stack]=Object.assign({},aV._sentryModuleMetadata[(new aV.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}try{var aj="u">typeof window?window:e.g;aj._sentryModuleMetadata=aj._sentryModuleMetadata||{},aj._sentryModuleMetadata[(new aj.Error).stack]=Object.assign({},aj._sentryModuleMetadata[(new aj.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var aK=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aF=(e,t,i)=>(aK(e,t,"read from private field"),i?i.call(e):t.get(e)),aG=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aq=(e,t,i,a)=>(aK(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aQ=(e,t,i)=>(aK(e,t,"access private method"),i);let aY=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],az="defaultsubtitles",aZ="defaultstreamtype",aX="defaultduration",aJ="fullscreenelement",a0="hotkeys",a1="keyboardbackwardseekoffset",a2="keyboardforwardseekoffset",a5="keyboarddownvolumestep",a3="keyboardupvolumestep",a4="keysused",a7="lang",a8="loop",a9="liveedgeoffset",a6="noautoseektolive",re="nodefaultstore",rt="nohotkeys",ri="nomutedpref",ra="nosubtitleslangpref",rr="novolumepref",rs="seektoliveoffset";class rn extends i4{constructor(){super(),aG(this,e5),aG(this,e7),aG(this,e9),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,aG(this,eY,new at(this,a0)),aG(this,ez,void 0),aG(this,eZ,void 0),aG(this,eX,null),aG(this,eJ,void 0),aG(this,e0,void 0),aG(this,e1,e=>{var t;null==(t=aF(this,eZ))||t.dispatch(e)}),aG(this,e2,void 0),aG(this,e4,e=>{let{key:t,shiftKey:i}=e;i&&("/"===t||"?"===t)||aY.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",aF(this,e4))}),this.associateElement(this);let e={};aq(this,eJ,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new G.CustomEvent(h[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(rt,a0,aZ,az,aX,ri,rr,a7,a8,a9,rs,a6)}get mediaStore(){return aF(this,eZ)}set mediaStore(e){var t,i;(aF(this,eZ)&&(null==(t=aF(this,e0))||t.call(this),aq(this,e0,void 0)),aq(this,eZ,e),aF(this,eZ)||this.hasAttribute(re))?aq(this,e0,null==(i=aF(this,eZ))?void 0:i.subscribe(aF(this,eJ))):aQ(this,e5,e3).call(this)}get fullscreenElement(){var e;return null!=(e=aF(this,ez))?e:this}set fullscreenElement(e){var t;this.hasAttribute(aJ)&&this.removeAttribute(aJ),aq(this,ez,e),null==(t=aF(this,eZ))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return ev(this,az)}set defaultSubtitles(e){eg(this,az,e)}get defaultStreamType(){return eb(this,aZ)}set defaultStreamType(e){ey(this,aZ,e)}get defaultDuration(){return ep(this,aX)}set defaultDuration(e){eE(this,aX,e)}get noHotkeys(){return ev(this,rt)}set noHotkeys(e){eg(this,rt,e)}get keysUsed(){return eb(this,a4)}set keysUsed(e){ey(this,a4,e)}get liveEdgeOffset(){return ep(this,a9)}set liveEdgeOffset(e){eE(this,a9,e)}get noAutoSeekToLive(){return ev(this,a6)}set noAutoSeekToLive(e){eg(this,a6,e)}get noVolumePref(){return ev(this,rr)}set noVolumePref(e){eg(this,rr,e)}get noMutedPref(){return ev(this,ri)}set noMutedPref(e){eg(this,ri,e)}get noSubtitlesLangPref(){return ev(this,ra)}set noSubtitlesLangPref(e){eg(this,ra,e)}get noDefaultStore(){return ev(this,re)}set noDefaultStore(e){eg(this,re,e)}attributeChangedCallback(e,t,i){var a,s,n,o,l,d,u,h,c,m,p,E;if(super.attributeChangedCallback(e,t,i),e===rt)i!==t&&""===i?(this.hasAttribute(a0)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===a0)aF(this,eY).value=i;else if(e===az&&i!==t)null==(a=aF(this,eZ))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(az)}});else if(e===aZ)null==(n=aF(this,eZ))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(s=this.getAttribute(aZ))?s:void 0}});else if(e===a9&&i!==t)null==(o=aF(this,eZ))||o.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(a9)?+this.getAttribute(a9):void 0,seekToLiveOffset:this.hasAttribute(rs)?+this.getAttribute(rs):this.hasAttribute(a9)?+this.getAttribute(a9):void 0}});else if(e===rs&&i!==t)null==(l=aF(this,eZ))||l.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(rs)?+this.getAttribute(rs):this.hasAttribute(a9)?+this.getAttribute(a9):void 0}});else if(e===a6)null==(d=aF(this,eZ))||d.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(a6)}});else if(e===aJ){let e=i?null==(u=this.getRootNode())?void 0:u.getElementById(i):void 0;aq(this,ez,e),null==(h=aF(this,eZ))||h.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===a7&&i!==t?(D(i),null==(c=aF(this,eZ))||c.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===a8&&i!==t?null==(m=aF(this,eZ))||m.dispatch({type:r.MEDIA_LOOP_REQUEST,detail:null!=i}):e===rr&&i!==t?null==(p=aF(this,eZ))||p.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(rr)}}):e===ri&&i!==t&&(null==(E=aF(this,eZ))||E.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(ri)}}))}connectedCallback(){var e,t,i;this.associateElement(this),aF(this,eZ)||this.hasAttribute(re)||aQ(this,e5,e3).call(this),null==(e=aF(this,eZ))||e.dispatch({type:"documentelementchangerequest",detail:q}),null==(t=aF(this,eZ))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),aF(this,eZ)&&!aF(this,e0)&&aq(this,e0,null==(i=aF(this,eZ))?void 0:i.subscribe(aF(this,eJ))),void 0!==aF(this,e2)&&aF(this,eZ)&&this.media&&setTimeout(()=>{var e,t,i;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(i=aF(this,eZ))||i.dispatch({type:r.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:aF(this,e2)}))},0),this.hasAttribute(rt)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,s,n;if(null==(e=super.disconnectedCallback)||e.call(this),this.disableHotkeys(),aF(this,eZ)){let e=aF(this,eZ).getState();aq(this,e2,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(i=aF(this,eZ))||i.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),null==(a=aF(this,eZ))||a.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(s=aF(this,eZ))||s.dispatch({type:r.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}aF(this,e0)&&(null==(n=aF(this,e0))||n.call(this),aq(this,e0,void 0)),this.unassociateElement(this),aF(this,eX)&&(aF(this,eX).remove(),aq(this,eX,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=aF(this,eZ))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=aF(this,eZ))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){rE(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=rv(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(r).forEach(t=>{e.addEventListener(t,aF(this,e1))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(r).forEach(t=>{e.removeEventListener(t,aF(this,e1))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),aF(this,eZ)&&Object.entries(aF(this,eZ).getState()).forEach(([t,i])=>{rE([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",aQ(this,e7,e8))}disableHotkeys(){this.removeEventListener("keydown",aQ(this,e7,e8)),this.removeEventListener("keyup",aF(this,e4))}get hotkeys(){return aF(this,eY)}set hotkeys(e){ey(this,a0,e)}keyboardShortcutHandler(e){var t,i,a,s,n,o,l,d,u;let h,c,m,p=e.target;if(!((null!=(a=null!=(i=null==(t=p.getAttribute(a4))?void 0:t.split(" "))?i:null==p?void 0:p.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||aF(this,eY).contains(`no${e.key.toLowerCase()}`)||" "===e.key&&aF(this,eY).contains("nospace"))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&aF(this,eY).contains("noshift+/")))switch(e.key){case" ":case"k":h=aF(this,eZ).getState().mediaPaused?r.MEDIA_PLAY_REQUEST:r.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new G.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"m":h="off"===this.mediaStore.getState().mediaVolumeLevel?r.MEDIA_UNMUTE_REQUEST:r.MEDIA_MUTE_REQUEST,this.dispatchEvent(new G.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"f":h=this.mediaStore.getState().mediaIsFullscreen?r.MEDIA_EXIT_FULLSCREEN_REQUEST:r.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new G.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new G.CustomEvent(r.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(a1)?+this.getAttribute(a1):10;c=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)-e,0),m=new G.CustomEvent(r.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(m);break}case"ArrowRight":case"l":{let e=this.hasAttribute(a2)?+this.getAttribute(a2):10;c=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),m=new G.CustomEvent(r.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(m);break}case"ArrowUp":{let e=this.hasAttribute(a3)?+this.getAttribute(a3):.025;c=Math.min((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)+e,1),m=new G.CustomEvent(r.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(m);break}case"ArrowDown":{let e=this.hasAttribute(a5)?+this.getAttribute(a5):.025;c=Math.max((null!=(l=this.mediaStore.getState().mediaVolume)?l:1)-e,0),m=new G.CustomEvent(r.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(m);break}case"<":c=Math.max((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)-.25,.25).toFixed(2),m=new G.CustomEvent(r.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(m);break;case">":c=Math.min((null!=(u=this.mediaStore.getState().mediaPlaybackRate)?u:1)+.25,2).toFixed(2),m=new G.CustomEvent(r.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(m);break;case"/":case"?":e.shiftKey&&aQ(this,e9,e6).call(this);break;case"p":h=this.mediaStore.getState().mediaIsPip?r.MEDIA_EXIT_PIP_REQUEST:r.MEDIA_ENTER_PIP_REQUEST,m=new G.CustomEvent(h,{composed:!0,bubbles:!0}),this.dispatchEvent(m)}}}eY=new WeakMap,ez=new WeakMap,eZ=new WeakMap,eX=new WeakMap,eJ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e2=new WeakMap,e5=new WeakSet,e3=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=aH,requestMap:r=a$,options:s={},monitorStateOwnersOnlyWithSubscriptions:n=!0})=>{let o,l=[],d={options:{...s}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),h=e=>{void 0==e||aC(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},c=()=>{h(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,s,u,p,E,v,g,b,y,f,w,A,M,_,I;let k=!!o;if(o={...d,...null!=o?o:{},...e},k)return;await aN(...Object.values(e));let T=l.length>0&&0===t&&n,S=d.media!==o.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),R=(null==(s=d.media)?void 0:s.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),D=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(E=o.media)?void 0:E.audioTracks),C=(null==(v=d.media)?void 0:v.remote)!==(null==(g=o.media)?void 0:g.remote),x=d.documentElement!==o.documentElement,O=!!d.media&&(S||T),P=!!(null==(b=d.media)?void 0:b.textTracks)&&(L||T),U=!!(null==(y=d.media)?void 0:y.videoRenditions)&&(R||T),N=!!(null==(f=d.media)?void 0:f.audioTracks)&&(D||T),B=!!(null==(w=d.media)?void 0:w.remote)&&(C||T),H=!!d.documentElement&&(x||T),W=O||P||U||N||B||H,$=0===l.length&&1===t&&n,V=!!o.media&&(S||$),j=!!(null==(A=o.media)?void 0:A.textTracks)&&(L||$),K=!!(null==(M=o.media)?void 0:M.videoRenditions)&&(R||$),F=!!(null==(_=o.media)?void 0:_.audioTracks)&&(D||$),G=!!(null==(I=o.media)?void 0:I.remote)&&(C||$),q=!!o.documentElement&&(x||$),Q=V||j||K||F||G||q;if(!(W||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:s=[],remoteEvents:n=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let c;m[e]||(m[e]={});let p=i=>{h({[e]:t(d,i)})};c=m[e].mediaEvents,i.forEach(t=>{c&&O&&(d.media.removeEventListener(t,c),m[e].mediaEvents=void 0),V&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),c=m[e].textTracksEvents,a.forEach(t=>{var i,a;c&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,c),m[e].textTracksEvents=void 0),j&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),c=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;c&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,c),m[e].videoRenditionsEvents=void 0),K&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),c=m[e].audioTracksEvents,s.forEach(t=>{var i,a;c&&N&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,c),m[e].audioTracksEvents=void 0),F&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),c=m[e].remoteEvents,n.forEach(t=>{var i,a;c&&B&&(null==(i=d.media.remote)||i.removeEventListener(t,c),m[e].remoteEvents=void 0),G&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),c=m[e].rootEvents,l.forEach(t=>{c&&H&&(d.documentElement.removeEventListener(t,c),m[e].rootEvents=void 0),q&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let E=m[e].stateOwnersUpdateHandlers;if(E&&W&&(Array.isArray(E)?E:[E]).forEach(e=>{"function"==typeof e&&e()}),Q){let t=u.map(e=>e(p,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else W&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:s}),{dispatch(e){let{type:t,detail:i}=e;r[t]&&null==u.mediaErrorCode?h(r[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),c())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(az),defaultDuration:this.hasAttribute(aX)?+this.getAttribute(aX):void 0,defaultStreamType:null!=(e=this.getAttribute(aZ))?e:void 0,liveEdgeOffset:this.hasAttribute(a9)?+this.getAttribute(a9):void 0,seekToLiveOffset:this.hasAttribute(rs)?+this.getAttribute(rs):this.hasAttribute(a9)?+this.getAttribute(a9):void 0,noAutoSeekToLive:this.hasAttribute(a6),noVolumePref:this.hasAttribute(rr),noMutedPref:this.hasAttribute(ri),noSubtitlesLangPref:this.hasAttribute(ra)}})},e4=new WeakMap,e7=new WeakSet,e8=function(e){var t;let{metaKey:i,altKey:a,key:r,shiftKey:s}=e,n=s&&("/"===r||"?"===r);if(n&&(null==(t=aF(this,eX))?void 0:t.open)||i||a||!n&&!aY.includes(r))return void this.removeEventListener("keyup",aF(this,e4));let o=e.target,l=o instanceof HTMLElement&&("media-volume-range"===o.tagName.toLowerCase()||"media-time-range"===o.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||aF(this,eY).contains(`no${r.toLowerCase()}`)||" "===r&&aF(this,eY).contains("nospace")||l||e.preventDefault(),this.addEventListener("keyup",aF(this,e4),{once:!0})},e9=new WeakSet,e6=function(){aF(this,eX)||(aq(this,eX,q.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(aF(this,eX))),aF(this,eX).open=!0};let ro=Object.values(l),rl=Object.values(n),rd=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(G.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let o=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,s.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||o)?(n||o).filter(e=>ro.includes(e)):[]},ru=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&G.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof G.customElements.get(e.nodeName.toLowerCase()))&&G.customElements.upgrade(e),rl.some(t=>t in e)||!!rd(e).length},rh=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},rc={[l.MEDIA_SUBTITLES_LIST]:ao,[l.MEDIA_SUBTITLES_SHOWING]:ao,[l.MEDIA_SEEKABLE]:rh,[l.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(rh).join(" "),[l.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[l.MEDIA_RENDITION_LIST]:y,[l.MEDIA_AUDIO_TRACK_LIST]:A},rm=async(e,t,i)=>{var a,r;if(e.isConnected||await k(0),"boolean"==typeof i||null==i)return eg(e,t,i);if("number"==typeof i)return eE(e,t,i);if("string"==typeof i)return ey(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let s=null!=(r=null==(a=rc[t])?void 0:a.call(rc,i))?r:i;return e.setAttribute(t,s)},rp=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;ru(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>rp(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!ru(e)?G.customElements.whenDefined(r).then(()=>{a(e,t)}):a(e,t)},rE=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=rd(e),r=t.toLowerCase();a.includes(r)&&rm(e,r,i)})},rv=(e,t,i)=>{rp(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},n=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(r.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(r.UNREGISTER_MEDIA_STATE_RECEIVER,n);let o=[],l=e=>{let a=e.target;"media"!==a.name&&(o.forEach(e=>rp(e,i)),(o=[...a.assignedElements({flatten:!0})]).forEach(e=>rp(e,t)))};e.addEventListener("slotchange",l);let d=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:o,attributeName:l}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>rp(e,t)),Array.prototype.forEach.call(r,e=>rp(e,i))):"attributes"===n&&l===s.MEDIA_CHROME_ATTRIBUTES&&(ru(o)?t(o):i(o))})});return d.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{rp(e,i),e.removeEventListener("slotchange",l),d.disconnect(),e.removeEventListener(r.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(r.UNREGISTER_MEDIA_STATE_RECEIVER,n)}};G.customElements.get("media-controller")||G.customElements.define("media-controller",rn);try{var rg="u">typeof window?window:e.g;rg._sentryModuleMetadata=rg._sentryModuleMetadata||{},rg._sentryModuleMetadata[(new rg.Error).stack]=Object.assign({},rg._sentryModuleMetadata[(new rg.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let rb="placement",ry="bounds";class rf extends G.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!eu(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=eo(this,"#"+this.bounds))?e:ei(this);if(!a)return;let{x:r,width:s}=a.getBoundingClientRect(),{x:n,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),h=u?parseFloat(u.replace("px","")):0,c=n-r+d-h,m=n+o-(r+s)+d+h;c<0?this.style.setProperty("--media-tooltip-offset-x",`${c}px`):m>0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=et(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[rb,ry]}get placement(){return eb(this,rb)}set placement(e){ey(this,rb,e)}get bounds(){return eb(this,ry)}set bounds(e){ey(this,ry,e)}}rf.shadowRootOptions={mode:"open"},rf.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},G.customElements.get("media-tooltip")||G.customElements.define("media-tooltip",rf),e.s(["default",0,rf],424996);try{var rw="u">typeof window?window:e.g;rw._sentryModuleMetadata=rw._sentryModuleMetadata||{},rw._sentryModuleMetadata[(new rw.Error).stack]=Object.assign({},rw._sentryModuleMetadata[(new rw.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var rA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rM=(e,t,i)=>(rA(e,t,"read from private field"),i?i.call(e):t.get(e)),r_=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rI=(e,t,i,a)=>(rA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let rk="tooltipplacement",rT="disabled",rS="notooltip";class rL extends G.HTMLElement{constructor(){if(super(),r_(this,ts),r_(this,te,void 0),this.preventClick=!1,this.tooltipEl=null,r_(this,tt,e=>{this.preventClick||this.handleClick(e),setTimeout(rM(this,ti),0)}),r_(this,ti,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),r_(this,ta,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",rM(this,ta))}),r_(this,tr,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",rM(this,ta)):this.addEventListener("keyup",rM(this,ta),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=et(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",rk,s.MEDIA_CONTROLLER,l.MEDIA_LANG]}enable(){this.addEventListener("click",rM(this,tt)),this.addEventListener("keydown",rM(this,tr)),this.tabIndex=0}disable(){this.removeEventListener("click",rM(this,tt)),this.removeEventListener("keydown",rM(this,tr)),this.removeEventListener("keyup",rM(this,ta)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,o,d;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=rM(this,te))?void 0:a.unassociateElement)||r.call(a,this),rI(this,te,null)),i&&this.isConnected&&(rI(this,te,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(d=null==(o=rM(this,te))?void 0:o.associateElement)||d.call(o,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===rk&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===l.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),rM(this,ti).call(this)}connectedCallback(){var e,t,i;let{style:a}=ec(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(rI(this,te,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=rM(this,te))?void 0:t.associateElement)||i.call(t,this)),G.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=ts,t=tn,rA(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=rM(this,te))?void 0:e.unassociateElement)||t.call(e,this),rI(this,te,null),this.removeEventListener("mouseenter",rM(this,ti)),this.removeEventListener("focus",rM(this,ti)),this.removeEventListener("click",rM(this,tt))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return eb(this,rk)}set tooltipPlacement(e){ey(this,rk,e)}get mediaController(){return eb(this,s.MEDIA_CONTROLLER)}set mediaController(e){ey(this,s.MEDIA_CONTROLLER,e)}get disabled(){return ev(this,rT)}set disabled(e){eg(this,rT,e)}get noTooltip(){return ev(this,rS)}set noTooltip(e){eg(this,rS,e)}handleClick(e){}}te=new WeakMap,tt=new WeakMap,ti=new WeakMap,ta=new WeakMap,tr=new WeakMap,ts=new WeakSet,tn=function(){this.addEventListener("mouseenter",rM(this,ti)),this.addEventListener("focus",rM(this,ti)),this.addEventListener("click",rM(this,tt));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},rL.shadowRootOptions={mode:"open"},rL.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${rf.shadowRootOptions.mode}">
          ${rf.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},rL.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},rL.getTooltipContentHTML=function(){return""},G.customElements.get("media-chrome-button")||G.customElements.define("media-chrome-button",rL),e.s(["MediaChromeButton",0,rL,"default",0,rL],926429);try{var rR="u">typeof window?window:e.g;rR._sentryModuleMetadata=rR._sentryModuleMetadata||{},rR._sentryModuleMetadata[(new rR.Error).stack]=Object.assign({},rR._sentryModuleMetadata[(new rR.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let rD=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,rC=e=>{let t=e.mediaIsAirplaying?C("stop airplay"):C("start airplay");e.setAttribute("aria-label",t)};class rx extends rL{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_IS_AIRPLAYING,l.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),rC(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===l.MEDIA_IS_AIRPLAYING&&rC(this)}get mediaIsAirplaying(){return ev(this,l.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){eg(this,l.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return eb(this,l.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){ey(this,l.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new G.CustomEvent(r.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}rx.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${l.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${l.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${l.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${l.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${rD}</slot>
      <slot name="exit">${rD}</slot>
    </slot>
  `},rx.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${C("start airplay")}</slot>
    <slot name="tooltip-exit">${C("stop airplay")}</slot>
  `},G.customElements.get("media-airplay-button")||G.customElements.define("media-airplay-button",rx),e.s(["default",0,rx],466821);try{var rO="u">typeof window?window:e.g;rO._sentryModuleMetadata=rO._sentryModuleMetadata||{},rO._sentryModuleMetadata[(new rO.Error).stack]=Object.assign({},rO._sentryModuleMetadata[(new rO.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let rP=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,rU=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,rN=e=>{e.setAttribute("aria-checked",ah(e).toString())};class rB extends rL{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_SUBTITLES_LIST,l.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",C("closed captions")),rN(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===l.MEDIA_SUBTITLES_SHOWING&&rN(this)}get mediaSubtitlesList(){return rH(this,l.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){rW(this,l.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return rH(this,l.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){rW(this,l.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new G.CustomEvent(r.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}rB.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${rP}</slot>
      <slot name="off">${rU}</slot>
    </slot>
  `},rB.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${C("Enable captions")}</slot>
    <slot name="tooltip-disable">${C("Disable captions")}</slot>
  `};let rH=(e,t)=>{let i=e.getAttribute(t);return i?ar(i):[]},rW=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=ao(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};G.customElements.get("media-captions-button")||G.customElements.define("media-captions-button",rB),e.s(["default",0,rB],346349);try{var r$="u">typeof window?window:e.g;r$._sentryModuleMetadata=r$._sentryModuleMetadata||{},r$._sentryModuleMetadata[(new r$.Error).stack]=Object.assign({},r$._sentryModuleMetadata[(new r$.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let rV=e=>{let t=e.mediaIsCasting?C("stop casting"):C("start casting");e.setAttribute("aria-label",t)};class rj extends rL{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_IS_CASTING,l.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),rV(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===l.MEDIA_IS_CASTING&&rV(this)}get mediaIsCasting(){return ev(this,l.MEDIA_IS_CASTING)}set mediaIsCasting(e){eg(this,l.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return eb(this,l.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){ey(this,l.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?r.MEDIA_EXIT_CAST_REQUEST:r.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}}rj.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${l.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${l.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${l.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${l.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},rj.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${C("Start casting")}</slot>
    <slot name="tooltip-exit">${C("Stop casting")}</slot>
  `},G.customElements.get("media-cast-button")||G.customElements.define("media-cast-button",rj),e.s(["default",0,rj],332708);try{var rK="u">typeof window?window:e.g;rK._sentryModuleMetadata=rK._sentryModuleMetadata||{},rK._sentryModuleMetadata[(new rK.Error).stack]=Object.assign({},rK._sentryModuleMetadata[(new rK.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var rF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rG=(e,t,i)=>(rF(e,t,"read from private field"),i?i.call(e):t.get(e)),rq=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rQ=(e,t,i,a)=>(rF(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rY=(e,t,i)=>(rF(e,t,"access private method"),i);let rz="open";class rZ extends G.HTMLElement{constructor(){super(),rq(this,tu),rq(this,tc),rq(this,tp),rq(this,tv),rq(this,tb),rq(this,tf),rq(this,to,!1),rq(this,tl,null),rq(this,td,null)}static get observedAttributes(){return[rz,"anchor"]}get open(){return ev(this,rz)}set open(e){eg(this,rz,e)}handleEvent(e){switch(e.type){case"invoke":rY(this,tv,tg).call(this,e);break;case"focusout":rY(this,tb,ty).call(this,e);break;case"keydown":rY(this,tf,tw).call(this,e)}}connectedCallback(){rY(this,tu,th).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,i){rY(this,tu,th).call(this),e===rz&&i!==t&&(this.open?rY(this,tc,tm).call(this):rY(this,tp,tE).call(this))}focus(){rQ(this,tl,el());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}to=new WeakMap,tl=new WeakMap,td=new WeakMap,tu=new WeakSet,th=function(){if(!rG(this,to)&&(rQ(this,to,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=et(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=ec(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},tc=new WeakSet,tm=function(){var e;null==(e=rG(this,td))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},tp=new WeakSet,tE=function(){var e;null==(e=rG(this,td))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},tv=new WeakSet,tg=function(e){rQ(this,td,e.relatedTarget),en(this,e.relatedTarget)||(this.open=!this.open)},tb=new WeakSet,ty=function(e){var t;!en(this,e.relatedTarget)&&(null==(t=rG(this,tl))||t.focus(),rG(this,td)&&rG(this,td)!==e.relatedTarget&&this.open&&(this.open=!1))},tf=new WeakSet,tw=function(e){var t,i,a,r,s;let{key:n,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(n)&&(e.preventDefault(),e.stopPropagation(),"Tab"===n?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===n&&(null==(s=rG(this,tl))||s.focus(),this.open=!1))},rZ.shadowRootOptions={mode:"open"},rZ.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},rZ.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},G.customElements.get("media-chrome-dialog")||G.customElements.define("media-chrome-dialog",rZ),e.s(["MediaChromeDialog",0,rZ,"default",0,rZ],171596);try{var rX="u">typeof window?window:e.g;rX._sentryModuleMetadata=rX._sentryModuleMetadata||{},rX._sentryModuleMetadata[(new rX.Error).stack]=Object.assign({},rX._sentryModuleMetadata[(new rX.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var rJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r0=(e,t,i)=>(rJ(e,t,"read from private field"),i?i.call(e):t.get(e)),r1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r2=(e,t,i,a)=>(rJ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),r5=(e,t,i)=>(rJ(e,t,"access private method"),i);class r3 extends G.HTMLElement{constructor(){if(super(),r1(this,tD),r1(this,tx),r1(this,tP),r1(this,tN),r1(this,tH),r1(this,t$),r1(this,tj),r1(this,tF),r1(this,tA,void 0),r1(this,tM,void 0),r1(this,t_,void 0),r1(this,tI,void 0),r1(this,tk,{}),r1(this,tT,[]),r1(this,tS,()=>{if(this.range.matches(":focus-visible")){let{style:e}=ec(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),r1(this,tL,()=>{let{style:e}=ec(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),r1(this,tR,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=et(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),r2(this,t_,this.shadowRoot.querySelector("#startpoint")),r2(this,tI,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=r0(this,tA))?void 0:a.unassociateElement)||r.call(a,this),r2(this,tA,null)),i&&this.isConnected&&(r2(this,tA,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=r0(this,tA))?void 0:o.associateElement)||l.call(o,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),r5(this,tx,tO).call(this)):(this.range.setAttribute(e,i),r5(this,tP,tU).call(this)))}connectedCallback(){var e,t,i;let{style:a}=ec(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),r0(this,tk).pointer=ec(this.shadowRoot,"#pointer"),r0(this,tk).progress=ec(this.shadowRoot,"#progress"),r0(this,tk).thumb=ec(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),r0(this,tk).activeSegment=ec(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(r2(this,tA,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=r0(this,tA))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",r0(this,tS)),this.shadowRoot.addEventListener("focusout",r0(this,tL)),r5(this,tx,tO).call(this),X(this.container,r0(this,tR))}disconnectedCallback(){var e,t;r5(this,tP,tU).call(this),null==(t=null==(e=r0(this,tA))?void 0:e.unassociateElement)||t.call(e,this),r2(this,tA,null),this.shadowRoot.removeEventListener("focusin",r0(this,tS)),this.shadowRoot.removeEventListener("focusout",r0(this,tL)),J(this.container,r0(this,tR))}updatePointerBar(e){var t;null==(t=r0(this,tk).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=r0(this,tk).progress)||e.style.setProperty("width",`${i}%`),null==(t=r0(this,tk).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];r2(this,tT,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[s,n]=[0===e,e===i.length-1],o=s?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=n?a:i[e+1],d=`calc(${(l-r)*100}%${s||n?"":" - var(--segments-gap)"})`,u=q.createElementNS("http://www.w3.org/2000/svg","rect"),h=em(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);h.style.setProperty("x",o),h.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return eh(e.clientX,e.clientY,r0(this,t_).getBoundingClientRect(),r0(this,tI).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":r5(this,tF,tG).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":r5(this,tH,tW).call(this,e);break;case"pointerdown":r5(this,tN,tB).call(this,e);break;case"pointerup":r5(this,t$,tV).call(this);break;case"pointerleave":r5(this,tj,tK).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}tA=new WeakMap,tM=new WeakMap,t_=new WeakMap,tI=new WeakMap,tk=new WeakMap,tT=new WeakMap,tS=new WeakMap,tL=new WeakMap,tR=new WeakMap,tD=new WeakSet,tC=function(e){let t=r0(this,tk).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=r0(this,tT).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},tx=new WeakSet,tO=function(){!this.hasAttribute("disabled")&&this.isConnected&&(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},tP=new WeakSet,tU=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),null==(e=G.window)||e.removeEventListener("pointerup",this),null==(t=G.window)||t.removeEventListener("pointermove",this)},tN=new WeakSet,tB=function(e){var t;r2(this,tM,e.composedPath().includes(this.range)),null==(t=G.window)||t.addEventListener("pointerup",this,{once:!0})},tH=new WeakSet,tW=function(e){var t;"mouse"!==e.pointerType&&r5(this,tN,tB).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),null==(t=G.window)||t.addEventListener("pointermove",this)},t$=new WeakSet,tV=function(){var e;null==(e=G.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},tj=new WeakSet,tK=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=G.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=r0(this,tk).activeSegment)||t.style.removeProperty("transform")},tF=new WeakSet,tG=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),r5(this,tD,tC).call(this,e),this.dragging&&("mouse"!==e.pointerType||!r0(this,tM))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},r3.shadowRootOptions={mode:"open"},r3.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},r3.getContainerTemplateHTML=function(e){return""},G.customElements.get("media-chrome-range")||G.customElements.define("media-chrome-range",r3),e.s(["MediaChromeRange",0,r3,"default",0,r3],613427);try{var r4="u">typeof window?window:e.g;r4._sentryModuleMetadata=r4._sentryModuleMetadata||{},r4._sentryModuleMetadata[(new r4.Error).stack]=Object.assign({},r4._sentryModuleMetadata[(new r4.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var r7=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r8=(e,t,i)=>(r7(e,t,"read from private field"),i?i.call(e):t.get(e)),r9=(e,t,i,a)=>(r7(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class r6 extends G.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,tq,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=et(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=r8(this,tq))?void 0:a.unassociateElement)||r.call(a,this),r9(this,tq,null)),i&&this.isConnected&&(r9(this,tq,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=r8(this,tq))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(r9(this,tq,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=r8(this,tq))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=r8(this,tq))?void 0:e.unassociateElement)||t.call(e,this),r9(this,tq,null)}}tq=new WeakMap,r6.shadowRootOptions={mode:"open"},r6.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},G.customElements.get("media-control-bar")||G.customElements.define("media-control-bar",r6),e.s(["default",0,r6],286951);try{var se="u">typeof window?window:e.g;se._sentryModuleMetadata=se._sentryModuleMetadata||{},se._sentryModuleMetadata[(new se.Error).stack]=Object.assign({},se._sentryModuleMetadata[(new se.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var st=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},si=(e,t,i)=>(st(e,t,"read from private field"),i?i.call(e):t.get(e)),sa=(e,t,i,a)=>(st(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class sr extends G.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,tQ,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=et(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=si(this,tQ))?void 0:a.unassociateElement)||r.call(a,this),sa(this,tQ,null)),i&&this.isConnected&&(sa(this,tQ,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=si(this,tQ))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let{style:a}=ec(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(sa(this,tQ,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=si(this,tQ))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=si(this,tQ))?void 0:e.unassociateElement)||t.call(e,this),sa(this,tQ,null)}}tQ=new WeakMap,sr.shadowRootOptions={mode:"open"},sr.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},sr.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},G.customElements.get("media-text-display")||G.customElements.define("media-text-display",sr),e.s(["MediaTextDisplay",0,sr,"default",0,sr],951506);try{var ss="u">typeof window?window:e.g;ss._sentryModuleMetadata=ss._sentryModuleMetadata||{},ss._sentryModuleMetadata[(new ss.Error).stack]=Object.assign({},ss._sentryModuleMetadata[(new ss.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var sn=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},so=(e,t,i)=>(sn(e,t,"read from private field"),i?i.call(e):t.get(e));class sl extends sr{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,tY,void 0),((e,t,i,a)=>(sn(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,tY,this.shadowRoot.querySelector("slot")),so(this,tY).textContent=U(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===l.MEDIA_DURATION&&(so(this,tY).textContent=U(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return ep(this,l.MEDIA_DURATION)}set mediaDuration(e){eE(this,l.MEDIA_DURATION,e)}}tY=new WeakMap,sl.getSlotTemplateHTML=function(e,t){return`
    <slot>${U(t.mediaDuration)}</slot>
  `},G.customElements.get("media-duration-display")||G.customElements.define("media-duration-display",sl),e.s(["default",0,sl],744786);try{var sd="u">typeof window?window:e.g;sd._sentryModuleMetadata=sd._sentryModuleMetadata||{},sd._sentryModuleMetadata[(new sd.Error).stack]=Object.assign({},sd._sentryModuleMetadata[(new sd.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let su={2:C("Network Error"),3:C("Decode Error"),4:C("Source Not Supported"),5:C("Encryption Error")},sh={2:C("A network error caused the media download to fail."),3:C("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:C("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:C("The media is encrypted and there are no keys to decrypt it.")},sc=e=>{var t,i;return 1===e.code?null:{title:null!=(t=su[e.code])?t:`Error ${e.code}`,message:null!=(i=sh[e.code])?i:e.message}};try{var sm="u">typeof window?window:e.g;sm._sentryModuleMetadata=sm._sentryModuleMetadata||{},sm._sentryModuleMetadata[(new sm.Error).stack]=Object.assign({},sm._sentryModuleMetadata[(new sm.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var sp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function sE(e){var t;let{title:i,message:a}=null!=(t=sc(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let sv=[l.MEDIA_ERROR_CODE,l.MEDIA_ERROR_MESSAGE];class sg extends rZ{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,tz,null)}static get observedAttributes(){return[...super.observedAttributes,...sv]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!sv.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=r.code&&null!==sc(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){let{title:e}=sc(r);e&&this.setAttribute("aria-label",e)}}get mediaError(){var e,t;return sp(this,e=tz,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;sp(this,t=tz,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return ep(this,"mediaerrorcode")}set mediaErrorCode(e){eE(this,"mediaerrorcode",e)}get mediaErrorMessage(){return eb(this,"mediaerrormessage")}set mediaErrorMessage(e){ey(this,"mediaerrormessage",e)}}tz=new WeakMap,sg.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${sE({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},sg.formatErrorMessage=sE,G.customElements.get("media-error-dialog")||G.customElements.define("media-error-dialog",sg);try{var sb="u">typeof window?window:e.g;sb._sentryModuleMetadata=sb._sentryModuleMetadata||{},sb._sentryModuleMetadata[(new sb.Error).stack]=Object.assign({},sb._sentryModuleMetadata[(new sb.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var sy=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)},sf=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};class sw extends rZ{constructor(){super(...arguments),sf(this,tZ,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),r=a[0]===this||a.includes(this),s=a.includes(i);r&&!s&&(this.open=!1)}),sf(this,tX,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",sy(this,tZ)),document.addEventListener("keydown",sy(this,tX)))}disconnectedCallback(){this.removeEventListener("click",sy(this,tZ)),document.removeEventListener("keydown",sy(this,tX))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"open"===e&&(this.open?(this.addEventListener("click",sy(this,tZ)),document.addEventListener("keydown",sy(this,tX))):(this.removeEventListener("click",sy(this,tZ)),document.removeEventListener("keydown",sy(this,tX))))}}tZ=new WeakMap,tX=new WeakMap,sw.getSlotTemplateHTML=function(e){let t;return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${t=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>{let i=e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${i}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `}).join(""),`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${t}</table>
  `}
    </slot>
  `},G.customElements.get("media-keyboard-shortcuts-dialog")||G.customElements.define("media-keyboard-shortcuts-dialog",sw),e.s(["default",0,sw],108442);try{var sA="u">typeof window?window:e.g;sA._sentryModuleMetadata=sA._sentryModuleMetadata||{},sA._sentryModuleMetadata[(new sA.Error).stack]=Object.assign({},sA._sentryModuleMetadata[(new sA.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var sM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};let s_=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,sI=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,sk=e=>{let t=e.mediaIsFullscreen?C("exit fullscreen mode"):C("enter fullscreen mode");e.setAttribute("aria-label",t)};class sT extends rL{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,tJ,null)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_IS_FULLSCREEN,l.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sk(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===l.MEDIA_IS_FULLSCREEN&&sk(this)}get mediaFullscreenUnavailable(){return eb(this,l.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){ey(this,l.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return ev(this,l.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){eg(this,l.MEDIA_IS_FULLSCREEN,e)}handleClick(e){var t,i,a,s;sM(this,t=tJ,"write to private field"),i?i.call(this,e):t.set(this,e);let n=(sM(this,a=tJ,"read from private field"),(s?s.call(this):a.get(this))instanceof PointerEvent),o=this.mediaIsFullscreen?new G.CustomEvent(r.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new G.CustomEvent(r.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:n});this.dispatchEvent(o)}}tJ=new WeakMap,sT.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${l.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${l.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${l.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${l.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${s_}</slot>
      <slot name="exit">${sI}</slot>
    </slot>
  `},sT.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${C("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${C("Exit fullscreen mode")}</slot>
  `},G.customElements.get("media-fullscreen-button")||G.customElements.define("media-fullscreen-button",sT),e.s(["default",0,sT],801097);try{var sS="u">typeof window?window:e.g;sS._sentryModuleMetadata=sS._sentryModuleMetadata||{},sS._sentryModuleMetadata[(new sS.Error).stack]=Object.assign({},sS._sentryModuleMetadata[(new sS.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let{MEDIA_TIME_IS_LIVE:sL,MEDIA_PAUSED:sR}=l,{MEDIA_SEEK_TO_LIVE_REQUEST:sD,MEDIA_PLAY_REQUEST:sC}=r,sx=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?C("seek to live"):C("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=C("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class sO extends rL{static get observedAttributes(){return[...super.observedAttributes,sL,sR]}connectedCallback(){super.connectedCallback(),sx(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),sx(this)}get mediaPaused(){return ev(this,l.MEDIA_PAUSED)}set mediaPaused(e){eg(this,l.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return ev(this,l.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){eg(this,l.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new G.CustomEvent(sD,{composed:!0,bubbles:!0})),this.hasAttribute(sR)&&this.dispatchEvent(new G.CustomEvent(sC,{composed:!0,bubbles:!0})))}}sO.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${sL}]:not([${sR}])) slot[name=indicator] > *,
      :host([${sL}]:not([${sR}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${sL}]:not([${sR}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${C("live")}</slot>
  `},G.customElements.get("media-live-button")||G.customElements.define("media-live-button",sO),e.s(["default",0,sO],451297);try{var sP="u">typeof window?window:e.g;sP._sentryModuleMetadata=sP._sentryModuleMetadata||{},sP._sentryModuleMetadata[(new sP.Error).stack]=Object.assign({},sP._sentryModuleMetadata[(new sP.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var sU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sN=(e,t,i)=>(sU(e,t,"read from private field"),i?i.call(e):t.get(e)),sB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sH=(e,t,i,a)=>(sU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let sW="loadingdelay",s$="noautohide",sV=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class sj extends G.HTMLElement{constructor(){if(super(),sB(this,t0,void 0),sB(this,t1,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=et(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER,l.MEDIA_PAUSED,l.MEDIA_LOADING,sW]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===sW&&t!==i?this.loadingDelay=Number(i):e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=sN(this,t0))?void 0:a.unassociateElement)||r.call(a,this),sH(this,t0,null)),i&&this.isConnected&&(sH(this,t0,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=sN(this,t0))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(sH(this,t0,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=sN(this,t0))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sN(this,t0))?void 0:e.unassociateElement)||t.call(e,this),sH(this,t0,null)}get loadingDelay(){return sN(this,t1)}set loadingDelay(e){sH(this,t1,e);let{style:t}=ec(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return ev(this,l.MEDIA_PAUSED)}set mediaPaused(e){eg(this,l.MEDIA_PAUSED,e)}get mediaLoading(){return ev(this,l.MEDIA_LOADING)}set mediaLoading(e){eg(this,l.MEDIA_LOADING,e)}get mediaController(){return eb(this,s.MEDIA_CONTROLLER)}set mediaController(e){ey(this,s.MEDIA_CONTROLLER,e)}get noAutohide(){return ev(this,s$)}set noAutohide(e){eg(this,s$,e)}}t0=new WeakMap,t1=new WeakMap,sj.shadowRootOptions={mode:"open"},sj.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${l.MEDIA_LOADING}]:not([${l.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${l.MEDIA_LOADING}]:not([${l.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${l.MEDIA_LOADING}]:not([${l.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${sV}</slot>
    <div id="status" role="status" aria-live="polite">${C("media loading")}</div>
  `},G.customElements.get("media-loading-indicator")||G.customElements.define("media-loading-indicator",sj),e.s(["default",0,sj],525294);try{var sK="u">typeof window?window:e.g;sK._sentryModuleMetadata=sK._sentryModuleMetadata||{},sK._sentryModuleMetadata[(new sK.Error).stack]=Object.assign({},sK._sentryModuleMetadata[(new sK.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let sF=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,sG=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,sq=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,sQ=e=>{let t="off"===e.mediaVolumeLevel?C("unmute"):C("mute");e.setAttribute("aria-label",t)};class sY extends rL{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),sQ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===l.MEDIA_VOLUME_LEVEL&&sQ(this)}get mediaVolumeLevel(){return eb(this,l.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){ey(this,l.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?r.MEDIA_UNMUTE_REQUEST:r.MEDIA_MUTE_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}}sY.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${l.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${l.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${l.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${l.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${l.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${l.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${l.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${sF}</slot>
      <slot name="low">${sG}</slot>
      <slot name="medium">${sG}</slot>
      <slot name="high">${sq}</slot>
    </slot>
  `},sY.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${C("Mute")}</slot>
    <slot name="tooltip-unmute">${C("Unmute")}</slot>
  `},G.customElements.get("media-mute-button")||G.customElements.define("media-mute-button",sY),e.s(["default",0,sY],673734);try{var sz="u">typeof window?window:e.g;sz._sentryModuleMetadata=sz._sentryModuleMetadata||{},sz._sentryModuleMetadata[(new sz.Error).stack]=Object.assign({},sz._sentryModuleMetadata[(new sz.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let sZ=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,sX=e=>{let t=e.mediaIsPip?C("exit picture in picture mode"):C("enter picture in picture mode");e.setAttribute("aria-label",t)};class sJ extends rL{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_IS_PIP,l.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sX(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===l.MEDIA_IS_PIP&&sX(this)}get mediaPipUnavailable(){return eb(this,l.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){ey(this,l.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return ev(this,l.MEDIA_IS_PIP)}set mediaIsPip(e){eg(this,l.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?r.MEDIA_EXIT_PIP_REQUEST:r.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}}sJ.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${l.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${l.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${l.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${l.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${sZ}</slot>
      <slot name="exit">${sZ}</slot>
    </slot>
  `},sJ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${C("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${C("Exit picture in picture mode")}</slot>
  `},G.customElements.get("media-pip-button")||G.customElements.define("media-pip-button",sJ),e.s(["default",0,sJ],101968);try{var s0="u">typeof window?window:e.g;s0._sentryModuleMetadata=s0._sentryModuleMetadata||{},s0._sentryModuleMetadata[(new s0.Error).stack]=Object.assign({},s0._sentryModuleMetadata[(new s0.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var s1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let s2="rates",s5=[1,1.2,1.5,1.7,2];class s3 extends rL{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,t2,new at(this,s2,{defaultValue:s5})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PLAYBACK_RATE,s2]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===s2&&(s1(this,t2).value=i),e===l.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",C("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return s1(this,t2)}set rates(e){e?Array.isArray(e)?s1(this,t2).value=e.join(" "):"string"==typeof e&&(s1(this,t2).value=e):s1(this,t2).value=""}get mediaPlaybackRate(){return ep(this,l.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){eE(this,l.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(s1(this,t2).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,s=new G.CustomEvent(r.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(s)}}t2=new WeakMap,s3.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},s3.getTooltipContentHTML=function(){return C("Playback rate")},G.customElements.get("media-playback-rate-button")||G.customElements.define("media-playback-rate-button",s3),e.s(["DEFAULT_RATE",0,1,"DEFAULT_RATES",0,s5,"default",0,s3],496702);try{var s4="u">typeof window?window:e.g;s4._sentryModuleMetadata=s4._sentryModuleMetadata||{},s4._sentryModuleMetadata[(new s4.Error).stack]=Object.assign({},s4._sentryModuleMetadata[(new s4.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let s7=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,s8=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,s9=e=>{let t=e.mediaPaused?C("play"):C("pause");e.setAttribute("aria-label",t)};class s6 extends rL{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PAUSED,l.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),s9(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===l.MEDIA_PAUSED||e===l.MEDIA_LANG)&&s9(this)}get mediaPaused(){return ev(this,l.MEDIA_PAUSED)}set mediaPaused(e){eg(this,l.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?r.MEDIA_PLAY_REQUEST:r.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new G.CustomEvent(e,{composed:!0,bubbles:!0}))}}s6.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${l.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${l.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${l.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${l.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${s7}</slot>
      <slot name="pause">${s8}</slot>
    </slot>
  `},s6.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${C("Play")}</slot>
    <slot name="tooltip-pause">${C("Pause")}</slot>
  `},G.customElements.get("media-play-button")||G.customElements.define("media-play-button",s6),e.s(["default",0,s6],586659);try{var ne="u">typeof window?window:e.g;ne._sentryModuleMetadata=ne._sentryModuleMetadata||{},ne._sentryModuleMetadata[(new ne.Error).stack]=Object.assign({},ne._sentryModuleMetadata[(new ne.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let nt="placeholdersrc";class ni extends G.HTMLElement{static get observedAttributes(){return[nt,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=et(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===nt)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return eb(this,nt)}set placeholderSrc(e){ey(this,"src",e)}get src(){return eb(this,"src")}set src(e){ey(this,"src",e)}}ni.shadowRootOptions={mode:"open"},ni.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},G.customElements.get("media-poster-image")||G.customElements.define("media-poster-image",ni),e.s(["default",0,ni],782726);try{var na="u">typeof window?window:e.g;na._sentryModuleMetadata=na._sentryModuleMetadata||{},na._sentryModuleMetadata[(new na.Error).stack]=Object.assign({},na._sentryModuleMetadata[(new na.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var nr=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};class ns extends sr{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,t5,void 0),((e,t,i,a)=>(nr(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,t5,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PREVIEW_CHAPTER,l.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===l.MEDIA_PREVIEW_CHAPTER||e===l.MEDIA_LANG)&&i!==t&&null!=i){var a,r;if((nr(this,a=t5,"read from private field"),r?r.call(this):a.get(this)).textContent=i,""!==i){let e=C("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return eb(this,l.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){ey(this,l.MEDIA_PREVIEW_CHAPTER,e)}}t5=new WeakMap,G.customElements.get("media-preview-chapter-display")||G.customElements.define("media-preview-chapter-display",ns),e.s(["default",0,ns],211390);try{var nn="u">typeof window?window:e.g;nn._sentryModuleMetadata=nn._sentryModuleMetadata||{},nn._sentryModuleMetadata[(new nn.Error).stack]=Object.assign({},nn._sentryModuleMetadata[(new nn.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var no=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nl=(e,t,i)=>(no(e,t,"read from private field"),i?i.call(e):t.get(e)),nd=(e,t,i,a)=>(no(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class nu extends G.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,t3,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=et(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER,l.MEDIA_PREVIEW_IMAGE,l.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(nd(this,t3,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=nl(this,t3))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=nl(this,t3))?void 0:e.unassociateElement)||t.call(e,this),nd(this,t3,null)}attributeChangedCallback(e,t,i){var a,r,n,o,d;[l.MEDIA_PREVIEW_IMAGE,l.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=nl(this,t3))?void 0:a.unassociateElement)||r.call(a,this),nd(this,t3,null)),i&&this.isConnected&&(nd(this,t3,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(d=null==(o=nl(this,t3))?void 0:o.associateElement)||d.call(o,this)))}get mediaPreviewImage(){return eb(this,l.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ey(this,l.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(l.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(l.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(l.MEDIA_PREVIEW_COORDS)}update(){let e,t,i=this.mediaPreviewCoords,a=this.mediaPreviewImage;if(!(i&&a))return;let[r,s,n,o]=i,l=a.split("#")[0],d=getComputedStyle(this),{maxWidth:u,maxHeight:h,minWidth:c,minHeight:m}=d;if("fill"===(d.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain")){let i=parseInt(u)/n,a=parseInt(h)/o,r=parseInt(c)/n,s=parseInt(m)/o;e=i<1?i:Math.max(i,r),t=a<1?a:Math.max(a,s)}else{let i=Math.min(parseInt(u)/n,parseInt(h)/o),a=Math.max(parseInt(c)/n,parseInt(m)/o),r=i<1?i:a>1?a:1;e=r,t=r}let{style:p}=ec(this.shadowRoot,":host"),E=ec(this.shadowRoot,"img").style,v=this.shadowRoot.querySelector("img"),g=1>Math.min(e,t)?"min":"max";p.setProperty(`${g}-width`,"initial","important"),p.setProperty(`${g}-height`,"initial","important"),p.width=`${n*e}px`,p.height=`${o*t}px`;let b=()=>{E.width=`${this.imgWidth*e}px`,E.height=`${this.imgHeight*t}px`,E.display="block"};v.src!==l&&(v.onload=()=>{this.imgWidth=v.naturalWidth,this.imgHeight=v.naturalHeight,b(),v.onload=null},v.src=l,b()),b(),E.transform=`translate(-${r*e}px, -${s*t}px)`}}t3=new WeakMap,nu.shadowRootOptions={mode:"open"},nu.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},G.customElements.get("media-preview-thumbnail")||G.customElements.define("media-preview-thumbnail",nu),e.s(["default",0,nu],634330);try{var nh="u">typeof window?window:e.g;nh._sentryModuleMetadata=nh._sentryModuleMetadata||{},nh._sentryModuleMetadata[(new nh.Error).stack]=Object.assign({},nh._sentryModuleMetadata[(new nh.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var nc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nm=(e,t,i)=>(nc(e,t,"read from private field"),i?i.call(e):t.get(e));class np extends sr{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,t4,void 0),((e,t,i,a)=>(nc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,t4,this.shadowRoot.querySelector("slot")),nm(this,t4).textContent=U(0)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===l.MEDIA_PREVIEW_TIME&&null!=i&&(nm(this,t4).textContent=U(parseFloat(i)))}get mediaPreviewTime(){return ep(this,l.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){eE(this,l.MEDIA_PREVIEW_TIME,e)}}t4=new WeakMap,G.customElements.get("media-preview-time-display")||G.customElements.define("media-preview-time-display",np),e.s(["default",0,np],977410);try{var nE="u">typeof window?window:e.g;nE._sentryModuleMetadata=nE._sentryModuleMetadata||{},nE._sentryModuleMetadata[(new nE.Error).stack]=Object.assign({},nE._sentryModuleMetadata[(new nE.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let nv="seekoffset";class ng extends rL{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_CURRENT_TIME,nv]}connectedCallback(){super.connectedCallback(),this.seekOffset=ep(this,nv,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",C("seek back {seekOffset} seconds",{seekOffset:a})),e===nv&&(this.seekOffset=ep(this,nv,30))}get seekOffset(){return ep(this,nv,30)}set seekOffset(e){eE(this,nv,e),this.setAttribute("aria-label",C("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),er(es(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ep(this,l.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){eE(this,l.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new G.CustomEvent(r.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}ng.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},ng.getTooltipContentHTML=function(){return C("Seek backward")},G.customElements.get("media-seek-backward-button")||G.customElements.define("media-seek-backward-button",ng),e.s(["default",0,ng],11167);try{var nb="u">typeof window?window:e.g;nb._sentryModuleMetadata=nb._sentryModuleMetadata||{},nb._sentryModuleMetadata[(new nb.Error).stack]=Object.assign({},nb._sentryModuleMetadata[(new nb.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}let ny="seekoffset";class nf extends rL{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_CURRENT_TIME,ny]}connectedCallback(){super.connectedCallback(),this.seekOffset=ep(this,ny,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",C("seek forward {seekOffset} seconds",{seekOffset:a})),e===ny&&(this.seekOffset=ep(this,ny,30))}get seekOffset(){return ep(this,ny,30)}set seekOffset(e){eE(this,ny,e),this.setAttribute("aria-label",C("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),er(es(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ep(this,l.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){eE(this,l.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new G.CustomEvent(r.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}nf.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},nf.getTooltipContentHTML=function(){return C("Seek forward")},G.customElements.get("media-seek-forward-button")||G.customElements.define("media-seek-forward-button",nf),e.s(["default",0,nf],866239);try{var nw="u">typeof window?window:e.g;nw._sentryModuleMetadata=nw._sentryModuleMetadata||{},nw._sentryModuleMetadata[(new nw.Error).stack]=Object.assign({},nw._sentryModuleMetadata[(new nw.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var nA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nM=(e,t,i)=>(nA(e,t,"read from private field"),i?i.call(e):t.get(e)),n_=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nI=(e,t,i,a)=>(nA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nk=(e,t,i)=>(nA(e,t,"access private method"),i);let nT={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},nS=[...Object.values(nT),l.MEDIA_CURRENT_TIME,l.MEDIA_DURATION,l.MEDIA_SEEKABLE],nL=["Enter"," "],nR="&nbsp;/&nbsp;",nD=(e,{timesSep:t=nR}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,s]=null!=(a=e.mediaSeekable)?a:[],n=0;Number.isFinite(e.mediaDuration)?n=e.mediaDuration:Number.isFinite(s)&&(n=s);let o=e.remaining?U(0-(n-r)):U(r);return e.showDuration?`${o}${t}${U(n)}`:o};class nC extends sr{constructor(){super(),n_(this,t6),n_(this,it),n_(this,ia),n_(this,is),n_(this,t7,void 0),n_(this,t8,null),n_(this,t9,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!nL.includes(a)?this.removeEventListener("keyup",nM(this,t8)):this.addEventListener("keyup",nM(this,t8))}),nI(this,t7,this.shadowRoot.querySelector("slot")),nM(this,t7).innerHTML=`${nD(this)}`}static get observedAttributes(){return[...super.observedAttributes,...nS,"disabled"]}connectedCallback(){let{style:e}=ec(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",C("playback time")),nk(this,ia,ir).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),nk(this,it,ii).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,i){this.setAttribute("aria-label",C("playback time")),nS.includes(e)?this.update():"disabled"===e&&i!==t?null==i?nk(this,ia,ir).call(this):nk(this,is,io).call(this):e===nT.NO_TOGGLE&&i!==t&&(this.noToggle?nk(this,is,io).call(this):nk(this,ia,ir).call(this)),super.attributeChangedCallback(e,t,i)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return ev(this,nT.REMAINING)}set remaining(e){eg(this,nT.REMAINING,e)}get showDuration(){return ev(this,nT.SHOW_DURATION)}set showDuration(e){eg(this,nT.SHOW_DURATION,e)}get noToggle(){return ev(this,nT.NO_TOGGLE)}set noToggle(e){eg(this,nT.NO_TOGGLE,e)}get mediaDuration(){return ep(this,l.MEDIA_DURATION)}set mediaDuration(e){eE(this,l.MEDIA_DURATION,e)}get mediaCurrentTime(){return ep(this,l.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){eE(this,l.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(l.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(l.MEDIA_SEEKABLE):this.setAttribute(l.MEDIA_SEEKABLE,e.join(":"))}update(){let e=nD(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-description",C("video not loaded, unknown time."));let s=e.remaining?P(0-(r-i)):P(i);if(!e.showDuration)return e.setAttribute("aria-description",s);let n=C("{currentTime} of {totalTime}",{currentTime:s,totalTime:P(r)});e.setAttribute("aria-description",n)})(this),e!==nM(this,t7).innerHTML&&(nM(this,t7).innerHTML=e)}}t7=new WeakMap,t8=new WeakMap,t9=new WeakMap,t6=new WeakSet,ie=function(){nM(this,t8)||(nI(this,t8,e=>{let{key:t}=e;nL.includes(t)?this.toggleTimeDisplay():this.removeEventListener("keyup",nM(this,t8))}),this.addEventListener("keydown",nM(this,t9)),this.addEventListener("click",this.toggleTimeDisplay))},it=new WeakSet,ii=function(){nM(this,t8)&&(this.removeEventListener("keyup",nM(this,t8)),this.removeEventListener("keydown",nM(this,t9)),this.removeEventListener("click",this.toggleTimeDisplay),nI(this,t8,null))},ia=new WeakSet,ir=function(){this.noToggle||this.hasAttribute("disabled")||(this.setAttribute("role","button"),this.enable(),nk(this,t6,ie).call(this))},is=new WeakSet,io=function(){this.removeAttribute("role"),this.disable(),nk(this,it,ii).call(this)},nC.getSlotTemplateHTML=function(e,t){return`
    <slot>${nD(t)}</slot>
  `},G.customElements.get("media-time-display")||G.customElements.define("media-time-display",nC),e.s(["default",0,nC],655310);try{var nx="u">typeof window?window:e.g;nx._sentryModuleMetadata=nx._sentryModuleMetadata||{},nx._sentryModuleMetadata[(new nx.Error).stack]=Object.assign({},nx._sentryModuleMetadata[(new nx.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var nO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nP=(e,t,i)=>(nO(e,t,"read from private field"),i?i.call(e):t.get(e)),nU=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nN=(e,t,i,a)=>(nO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class nB{constructor(e,t,i){nU(this,il,void 0),nU(this,id,void 0),nU(this,iu,void 0),nU(this,ih,void 0),nU(this,ic,void 0),nU(this,im,void 0),nU(this,ip,void 0),nU(this,iE,void 0),nU(this,iv,0),nU(this,ig,(e=performance.now())=>{nN(this,iv,requestAnimationFrame(nP(this,ig))),nN(this,ih,performance.now()-nP(this,iu));let t=1e3/this.fps;if(nP(this,ih)>t){let i,a,r,s;nN(this,iu,e-nP(this,ih)%t);let n=1e3/((e-nP(this,id))/++(i=this,a=ic,{set _(value){nN(i,a,value,r)},get _(){return nP(i,a,s)}})._),o=(e-nP(this,im))/1e3/this.duration,l=nP(this,ip)+o*this.playbackRate;l-nP(this,il).valueAsNumber>0?nN(this,iE,this.playbackRate/this.duration/n):(nN(this,iE,.995*nP(this,iE)),l=nP(this,il).valueAsNumber+nP(this,iE)),this.callback(l)}}),nN(this,il,e),this.callback=t,this.fps=i}start(){0===nP(this,iv)&&(nN(this,iu,performance.now()),nN(this,id,nP(this,iu)),nN(this,ic,0),nP(this,ig).call(this))}stop(){0!==nP(this,iv)&&(cancelAnimationFrame(nP(this,iv)),nN(this,iv,0))}update({start:e,duration:t,playbackRate:i}){let a=e-nP(this,il).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),nN(this,ip,e),nN(this,im,performance.now()),this.duration=t,this.playbackRate=i}}il=new WeakMap,id=new WeakMap,iu=new WeakMap,ih=new WeakMap,ic=new WeakMap,im=new WeakMap,ip=new WeakMap,iE=new WeakMap,iv=new WeakMap,ig=new WeakMap;try{var nH="u">typeof window?window:e.g;nH._sentryModuleMetadata=nH._sentryModuleMetadata||{},nH._sentryModuleMetadata[(new nH.Error).stack]=Object.assign({},nH._sentryModuleMetadata[(new nH.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var nW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n$=(e,t,i)=>(nW(e,t,"read from private field"),i?i.call(e):t.get(e)),nV=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nj=(e,t,i,a)=>(nW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nK=(e,t,i)=>(nW(e,t,"access private method"),i);let nF=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},nG=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class nq extends r3{constructor(){super(),nV(this,iR),nV(this,ix),nV(this,iP),nV(this,iN),nV(this,iH),nV(this,i$),nV(this,ij),nV(this,ib,null),nV(this,iy,void 0),nV(this,iw,void 0),nV(this,iA,void 0),nV(this,iM,void 0),nV(this,i_,void 0),nV(this,iI,void 0),nV(this,ik,void 0),nV(this,iT,void 0),nV(this,iS,void 0),nV(this,iL,()=>{nK(this,iR,iD).call(this)?n$(this,iy).start():n$(this,iy).stop()}),nV(this,iC,e=>{!this.dragging&&(I(e)&&(this.range.valueAsNumber=e),n$(this,iS)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),nj(this,iw,this.shadowRoot.querySelectorAll('[part~="box"]')),nj(this,iM,this.shadowRoot.querySelector('[part~="preview-box"]')),nj(this,i_,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);nj(this,iI,parseInt(e.getPropertyValue("--media-box-padding-left"))),nj(this,ik,parseInt(e.getPropertyValue("--media-box-padding-right"))),nj(this,iy,new nB(this.range,n$(this,iC),60))}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PAUSED,l.MEDIA_DURATION,l.MEDIA_SEEKABLE,l.MEDIA_CURRENT_TIME,l.MEDIA_PREVIEW_IMAGE,l.MEDIA_PREVIEW_TIME,l.MEDIA_PREVIEW_CHAPTER,l.MEDIA_BUFFERED,l.MEDIA_PLAYBACK_RATE,l.MEDIA_LOADING,l.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",C("seek")),n$(this,iL).call(this),nj(this,ib,this.getRootNode()),null==(e=n$(this,ib))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),n$(this,iy).stop(),null==(e=n$(this,ib))||e.removeEventListener("transitionstart",this),nj(this,ib,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===l.MEDIA_CURRENT_TIME||e===l.MEDIA_PAUSED||e===l.MEDIA_ENDED||e===l.MEDIA_LOADING||e===l.MEDIA_DURATION||e===l.MEDIA_SEEKABLE){let e,t,i,a;n$(this,iy).update({start:nF(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),n$(this,iL).call(this),e=this.range,t=P(+nG(this)),i=P(+this.mediaSeekableEnd),a=t&&i?C("{currentTime} of {totalTime}",{currentTime:t,totalTime:i}):C("video not loaded, unknown time."),e.setAttribute("aria-valuetext",a)}else e===l.MEDIA_BUFFERED&&this.updateBufferedBar();(e===l.MEDIA_DURATION||e===l.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=n$(this,iT),this.updateBar())}}get mediaChaptersCues(){return n$(this,iT)}set mediaChaptersCues(e){var t;nj(this,iT,e),this.updateSegments(null==(t=n$(this,iT))?void 0:t.map(e=>({start:nF(this,e.startTime),end:nF(this,e.endTime)})))}get mediaPaused(){return ev(this,l.MEDIA_PAUSED)}set mediaPaused(e){eg(this,l.MEDIA_PAUSED,e)}get mediaLoading(){return ev(this,l.MEDIA_LOADING)}set mediaLoading(e){eg(this,l.MEDIA_LOADING,e)}get mediaDuration(){return ep(this,l.MEDIA_DURATION)}set mediaDuration(e){eE(this,l.MEDIA_DURATION,e)}get mediaCurrentTime(){return ep(this,l.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){eE(this,l.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return ep(this,l.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){eE(this,l.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(l.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(l.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(l.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(l.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(l.MEDIA_SEEKABLE):this.setAttribute(l.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return eb(this,l.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ey(this,l.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return ep(this,l.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){eE(this,l.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return ev(this,l.MEDIA_ENDED)}set mediaEnded(e){eg(this,l.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=nF(this,r)}let{style:a}=ec(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=ec(this.shadowRoot,"#current-rail"),t=ec(this.shadowRoot,'[part~="current-box"]'),i=nK(this,ix,iO).call(this,n$(this,i_)),a=nK(this,iP,iU).call(this,i,this.range.valueAsNumber),r=nK(this,iN,iB).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":nK(this,ij,iK).call(this);break;case"pointermove":nK(this,iH,iW).call(this,e);break;case"pointerup":n$(this,iS)&&nj(this,iS,!1);break;case"pointerdown":nj(this,iS,!0);break;case"pointerleave":nK(this,i$,iV).call(this,null);break;case"transitionstart":en(e.target,this)&&setTimeout(()=>n$(this,iL).call(this),0)}}}ib=new WeakMap,iy=new WeakMap,iw=new WeakMap,iA=new WeakMap,iM=new WeakMap,i_=new WeakMap,iI=new WeakMap,ik=new WeakMap,iT=new WeakMap,iS=new WeakMap,iL=new WeakMap,iR=new WeakSet,iD=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&eu(this)},iC=new WeakMap,ix=new WeakSet,iO=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?eo(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,s=-(a.left-i.left-r/2),n=i.right-a.left-r/2;return{box:{width:r,min:s,max:n},bounds:i,range:a}},iP=new WeakSet,iU=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:s}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(s)){let e=`calc(1 / var(--_range-width) * 100 * ${s}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},iN=new WeakSet,iB=function(e,t){let{width:i,min:a,max:r}=e.box,s=t*e.range.width;if(s<a+n$(this,iI)){let t=e.range.left-e.bounds.left-n$(this,iI);return`${s-i/2+t}px`}if(s>r-n$(this,ik)){let t=e.bounds.right-e.range.right-n$(this,ik);return`${s+i/2-t-e.range.width}px`}return 0},iH=new WeakSet,iW=function(e){let t=[...n$(this,iw)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void nK(this,i$,iV).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=ec(this.shadowRoot,"#preview-rail"),r=ec(this.shadowRoot,'[part~="preview-box"]'),s=nK(this,ix,iO).call(this,n$(this,iM)),n=(e.clientX-s.range.left)/s.range.width;n=Math.max(0,Math.min(1,n));let o=nK(this,iP,iU).call(this,s,n),l=nK(this,iN,iB).call(this,s,n);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${s.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${s.box.width}px`),1>Math.abs(Math.round(n$(this,iA))-Math.round(n*i))&&n>.01&&n<.99||(nj(this,iA,n*i),nK(this,i$,iV).call(this,n$(this,iA)))},i$=new WeakSet,iV=function(e){this.dispatchEvent(new G.CustomEvent(r.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},ij=new WeakSet,iK=function(){n$(this,iy).stop();let e=nG(this);this.dispatchEvent(new G.CustomEvent(r.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},nq.shadowRootOptions={mode:"open"},nq.getContainerTemplateHTML=function(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${l.MEDIA_PREVIEW_IMAGE}], [${l.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${l.MEDIA_PREVIEW_IMAGE}], [${l.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${l.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${l.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${l.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${l.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${l.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${l.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${l.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${l.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${l.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${l.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${l.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${l.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${nu.shadowRootOptions.mode}">
            ${nu.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},G.customElements.get("media-time-range")||G.customElements.define("media-time-range",nq),e.s(["default",0,nq],731318);try{var nQ="u">typeof window?window:e.g;nQ._sentryModuleMetadata=nQ._sentryModuleMetadata||{},nQ._sentryModuleMetadata[(new nQ.Error).stack]=Object.assign({},nQ._sentryModuleMetadata[(new nQ.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}var nY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};class nz extends r3{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,iF,()=>{let e=this.range.value,t=new G.CustomEvent(r.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_VOLUME,l.MEDIA_MUTED,l.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",C("volume")),this.range.addEventListener("input",nY(this,iF))}disconnectedCallback(){this.range.removeEventListener("input",nY(this,iF)),super.disconnectedCallback()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===l.MEDIA_VOLUME||e===l.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return ep(this,l.MEDIA_VOLUME,1)}set mediaVolume(e){eE(this,l.MEDIA_VOLUME,e)}get mediaMuted(){return ev(this,l.MEDIA_MUTED)}set mediaMuted(e){eg(this,l.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return eb(this,l.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){ey(this,l.MEDIA_VOLUME_UNAVAILABLE,e)}}iF=new WeakMap,G.customElements.get("media-volume-range")||G.customElements.define("media-volume-range",nz),e.s(["default",0,nz],803227);try{var nZ="u">typeof window?window:e.g;nZ._sentryModuleMetadata=nZ._sentryModuleMetadata||{},nZ._sentryModuleMetadata[(new nZ.Error).stack]=Object.assign({},nZ._sentryModuleMetadata[(new nZ.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}class nX extends rL{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=C("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===l.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return ev(this,l.MEDIA_LOOP)}set mediaLoop(e){eg(this,l.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new G.CustomEvent(r.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}nX.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${l.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},nX.getTooltipContentHTML=function(){return C("Loop")},G.customElements.get("media-loop-button")||G.customElements.define("media-loop-button",nX),e.s(["default",0,nX],809894);try{var nJ="u">typeof window?window:e.g;nJ._sentryModuleMetadata=nJ._sentryModuleMetadata||{},nJ._sentryModuleMetadata[(new nJ.Error).stack]=Object.assign({},nJ._sentryModuleMetadata[(new nJ.Error).stack],{"_sentryBundlerPluginAppKey:attio/polaris":!0})}catch(e){}e.s([],268503),e.s(["MediaController",0,rn],951111),e.s(["MediaErrorDialog",0,sg],555657)}]);

//# debugId=6c0eb186-6462-c1e0-0c85-237c41e4d8df