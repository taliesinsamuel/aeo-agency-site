<style id="aeo-seo-style">
/* ============================================================
   SEO SECTION — homepage-only. Strategy workspace animation.
   Coherent Answered Labs blue / cool-slate connection system.
   ============================================================ */
#aeo-seo{
  background:transparent!important;
  margin-top:calc(-1 * var(--aeo-stack-exit-pull,0px));
  position:relative;
  z-index:1;
}
#aeo-seo .aeo-plat-bg{display:none}
#aeo-seo .aeo-plat-inner{padding-bottom:clamp(28px,3.4vw,48px)}

/* Descenders (g/p/q/y/j) clip under background-clip:text + tight line-height.
   Scoped fix only — preserve global .aeo-h2 elsewhere. */
#aeo-seo .aeo-h2{
  line-height:1.2;
  padding:.1em 0 .2em;
  overflow:visible;
  -webkit-box-decoration-break:clone;
  box-decoration-break:clone;
  /* Keep gradient paint box large enough for full glyph metrics */
  background-origin:padding-box;
  -webkit-background-origin:padding-box;
  background-size:100% 130%;
  background-position:center 35%;
}

@media (prefers-reduced-motion:reduce){
  #aeo-seo{margin-top:0}
}

.aeo-seo-card{
  --seo-blue:#266df0;
  --seo-blue-soft:#5c8bf5;
  --seo-blue-hi:#8bb4ff;
  --seo-blue-dim:rgba(38,109,240,.42);
  --seo-ink:#f2f4f7;
  --seo-mute:#8a93a3;
  --seo-mute-2:#6a7280;
  --seo-line:#262b33;
  --seo-line-2:#2e3540;
  --seo-bg:#0b0d10;
  --seo-raised:#12161c;
  --seo-raised-2:#161b22;
  --seo-path-idle:rgba(130,148,175,.16);
  --seo-path-active:var(--seo-blue);
  position:relative;
  max-width:1180px;margin:0 auto;
  background:
    radial-gradient(46% 56% at 28% 50%,rgba(38,109,240,.055),transparent 68%),
    linear-gradient(180deg,#101318 0%,var(--seo-bg) 54%,#090b0e 100%);
  border:1px solid var(--seo-line);
  border-radius:var(--aeo-r-2xl);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 24px 56px -34px rgba(0,0,0,.55);
  overflow:hidden;
  color:var(--seo-ink);
  box-sizing:border-box;
}
.aeo-seo-card *{box-sizing:border-box}

.aeo-seo-card-head{
  display:flex;align-items:center;justify-content:space-between;gap:16px;
  padding:11px 22px;
  border-bottom:1px solid var(--seo-line);
  font-size:11px;font-weight:500;letter-spacing:.04em;
  text-transform:uppercase;color:var(--seo-mute-2);
}
.aeo-seo-card-head-r{
  color:#5c6573;font-variant-numeric:tabular-nums;
  letter-spacing:.06em;text-transform:none;font-size:11px;
}

.aeo-seo-canvas{
  position:relative;
  width:100%;
  height:clamp(460px,52vw,540px);
  min-height:460px;
  padding:28px 28px 30px;
}
.aeo-seo-canvas::before{
  content:"";position:absolute;inset:16px 18px 18px;
  border:1px solid rgba(255,255,255,.028);
  border-radius:14px;
  background:
    radial-gradient(38% 48% at 26% 50%,rgba(38,109,240,.04),transparent 72%),
    linear-gradient(180deg,rgba(255,255,255,.01),transparent 42%);
  pointer-events:none;
}

.aeo-seo-svg{
  position:absolute;inset:0;width:100%;height:100%;
  pointer-events:none;z-index:1;overflow:visible;
}
.aeo-seo-path-base{
  fill:none;stroke:var(--seo-path-idle);stroke-width:1.15;
  stroke-linecap:round;stroke-linejoin:round;
}
.aeo-seo-path-active{
  fill:none;stroke:var(--seo-path-active);stroke-width:1.35;
  stroke-linecap:round;stroke-linejoin:round;
  opacity:0;stroke-opacity:.92;
}
.aeo-seo-path-active.is-draw{opacity:1}
.aeo-seo-path-active.is-done{stroke-opacity:.55}
.aeo-seo-signal{
  fill:#c5d9ff;
  opacity:0;
  pointer-events:none;
}

/* Hub — root node */
.aeo-seo-hub{
  position:absolute;z-index:4;
  left:24%;top:50%;
  width:148px;height:148px;
  margin:-74px 0 0 -74px;
  opacity:0;transform:scale(.97);
  transition:opacity .55s cubic-bezier(.22,1,.36,1),transform .55s cubic-bezier(.22,1,.36,1);
}
.aeo-seo-hub.is-on{opacity:1;transform:scale(1)}
.aeo-seo-hub-shell{
  position:absolute;inset:0;border-radius:999px;
  background:
    radial-gradient(70% 70% at 50% 42%,rgba(38,109,240,.07),transparent 58%),
    radial-gradient(120% 90% at 36% 24%,rgba(255,255,255,.04),transparent 48%),
    linear-gradient(180deg,#161b22,#10141a 56%,#0c1015);
  border:1px solid rgba(160,176,200,.14);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.04),
    inset 0 0 0 1px rgba(0,0,0,.35),
    0 18px 36px -20px rgba(0,0,0,.75);
  transition:border-color .4s ease,box-shadow .4s ease,background .4s ease;
}
.aeo-seo-hub.is-on .aeo-seo-hub-shell{
  border-color:rgba(170,188,214,.18);
}
.aeo-seo-hub.is-lit .aeo-seo-hub-shell{
  border-color:rgba(92,139,245,.28);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    inset 0 0 0 1px rgba(0,0,0,.3),
    0 0 0 1px rgba(38,109,240,.06),
    0 18px 36px -20px rgba(0,0,0,.75);
}
.aeo-seo-hub-ring{
  position:absolute;inset:-5px;border-radius:inherit;pointer-events:none;opacity:0;
  transition:opacity .5s ease;
}
.aeo-seo-hub.is-on .aeo-seo-hub-ring{opacity:.55}
.aeo-seo-hub.is-lit .aeo-seo-hub-ring{opacity:1}
.aeo-seo-hub-ring svg{width:100%;height:100%;display:block}
.aeo-seo-hub-ring .seg{
  fill:none;stroke-width:1.1;stroke-linecap:round;
  stroke:rgba(130,148,175,.22);
}
.aeo-seo-hub-ring .seg-a{stroke:rgba(38,109,240,.38)}
.aeo-seo-hub-ring .seg-b{stroke:rgba(92,139,245,.28)}
.aeo-seo-hub-label{
  position:absolute;inset:0;z-index:2;
  display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;
}
.aeo-seo-hub-kicker{
  font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;
  color:#6f7886;margin-bottom:4px;
}
.aeo-seo-hub-title{
  font-family:"Inter Display",Inter,sans-serif;
  font-size:19px;font-weight:600;letter-spacing:-.022em;color:var(--seo-ink);line-height:1.15;
}
.aeo-seo-anchors{position:absolute;inset:0;z-index:5;pointer-events:none}
.aeo-seo-anchor{
  position:absolute;width:6px;height:6px;margin:-3px 0 0 -3px;border-radius:999px;
  background:#1a212b;border:1px solid rgba(140,156,178,.28);
  transition:background .35s ease,border-color .35s ease,box-shadow .35s ease,transform .35s ease;
  transform:scale(1);
}
.aeo-seo-anchor.is-pulse{
  background:var(--seo-blue-soft);border-color:var(--seo-blue-hi);
  box-shadow:0 0 0 3px rgba(38,109,240,.16);
  transform:scale(1.15);
}
.aeo-seo-anchor.is-on{
  background:var(--seo-blue);border-color:rgba(139,180,255,.75);
  box-shadow:0 0 0 2px rgba(11,13,16,.55);
  transform:scale(1);
}

/* Workstream nodes — compact technical panels, vertical stack */
.aeo-seo-mod{
  position:absolute;z-index:3;
  display:grid;grid-template-columns:auto 1fr auto;align-items:center;column-gap:9px;
  min-height:56px;
  width:278px;
  left:58%;
  background:linear-gradient(180deg,var(--seo-raised-2) 0%,var(--seo-raised) 100%);
  border:1px solid var(--seo-line-2);
  border-radius:9px;
  padding:9px 12px 9px 0;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
  opacity:.3;
  transform:translate3d(0,6px,0);
  pointer-events:none;
  transition:opacity .5s cubic-bezier(.22,1,.36,1),transform .55s cubic-bezier(.22,1,.36,1),border-color .45s ease,background .45s ease,box-shadow .45s ease;
}
.aeo-seo-mod.is-on{
  opacity:1;
  transform:translate3d(0,0,0);
  border-color:rgba(92,139,245,.32);
  background:linear-gradient(180deg,#191e27 0%,#141920 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.045),0 10px 24px -18px rgba(0,0,0,.55);
  pointer-events:auto;
}
.aeo-seo-mod-bar{
  width:2px;align-self:stretch;margin:11px 0;border-radius:0 2px 2px 0;
  background:var(--seo-blue);opacity:.18;transition:opacity .35s ease;
}
.aeo-seo-mod.is-on .aeo-seo-mod-bar{opacity:.9}
.aeo-seo-mod-main{min-width:0;padding-left:10px}
.aeo-seo-mod-top{display:flex;align-items:baseline;gap:7px;min-width:0}
.aeo-seo-mod-idx{
  font-size:9px;font-weight:600;letter-spacing:.06em;color:#555e6b;
  font-variant-numeric:tabular-nums;flex:0 0 auto;
}
.aeo-seo-mod-title{
  font-size:13.5px;font-weight:600;letter-spacing:-.015em;color:var(--seo-ink);line-height:1.25;
  opacity:.55;transition:opacity .3s ease;
}
.aeo-seo-mod.is-on .aeo-seo-mod-title{opacity:1;transition-delay:.05s}
.aeo-seo-mod-detail{
  margin-top:2px;font-size:11px;font-weight:500;color:var(--seo-mute);line-height:1.35;
  opacity:.4;transition:opacity .3s ease;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
}
.aeo-seo-mod.is-on .aeo-seo-mod-detail{opacity:1;transition-delay:.1s}
.aeo-seo-mod-dot{
  width:5px;height:5px;border-radius:999px;margin-right:1px;align-self:start;margin-top:9px;
  border:1px solid rgba(140,156,178,.22);background:transparent;
  transition:background .3s ease,border-color .3s ease,box-shadow .3s ease;
}
.aeo-seo-mod.is-on .aeo-seo-mod-dot{
  background:var(--seo-blue);border-color:var(--seo-blue-soft);
  box-shadow:0 0 0 2px rgba(38,109,240,.12);
}

/* Deliberate vertical stack — equal spacing, shared left edge */
.aeo-seo-mod[data-i="0"]{top:8%}
.aeo-seo-mod[data-i="1"]{top:26.5%}
.aeo-seo-mod[data-i="2"]{top:45%}
.aeo-seo-mod[data-i="3"]{top:63.5%}
.aeo-seo-mod[data-i="4"]{top:82%}

.aeo-seo-canvas.is-resetting .aeo-seo-mod.is-on{
  transition:opacity 1s cubic-bezier(.4,0,.2,1),transform 1s cubic-bezier(.4,0,.2,1),border-color 1s ease!important;
  opacity:.28!important;
  transform:translate3d(0,3px,0)!important;
  border-color:var(--seo-line-2)!important;
}
.aeo-seo-canvas.is-resetting .aeo-seo-path-active.is-draw{
  transition:opacity 1s cubic-bezier(.4,0,.2,1),stroke-opacity 1s ease!important;
  opacity:.12!important;
}
.aeo-seo-canvas.is-resetting .aeo-seo-anchor.is-on,
.aeo-seo-canvas.is-resetting .aeo-seo-anchor.is-pulse{
  transition:background .9s ease,border-color .9s ease,box-shadow .9s ease,transform .9s ease!important;
  background:#1a212b!important;
  border-color:rgba(140,156,178,.28)!important;
  box-shadow:none!important;
  transform:scale(1)!important;
}
.aeo-seo-canvas.is-resetting .aeo-seo-hub{
  transition:opacity 1.15s ease!important;
  opacity:.85!important;
}
.aeo-seo-canvas.is-resetting .aeo-seo-mod-title,
.aeo-seo-canvas.is-resetting .aeo-seo-mod-detail,
.aeo-seo-canvas.is-resetting .aeo-seo-mod-bar,
.aeo-seo-canvas.is-resetting .aeo-seo-mod-dot{
  transition:opacity .9s ease!important;
}

@media (max-width:980px) and (min-width:761px){
  .aeo-seo-hub{left:20%;width:136px;height:136px;margin:-68px 0 0 -68px}
  .aeo-seo-mod{left:52%;width:min(278px,42vw)}
  .aeo-seo-hub-title{font-size:17px}
}

@media (max-width:760px){
  .aeo-seo-card-head{padding:11px 16px}
  .aeo-seo-canvas{height:auto;min-height:0;padding:18px 14px 20px}
  .aeo-seo-svg{display:none}
  .aeo-seo-hub{
    position:relative;left:auto;top:auto;margin:6px auto 20px;
    width:132px;height:132px;
  }
  .aeo-seo-hub-title{font-size:17px}
  .aeo-seo-anchors{display:none}
  .aeo-seo-mods{display:flex;flex-direction:column;gap:10px}
  .aeo-seo-mod{
    position:relative;left:auto!important;top:auto!important;width:100%!important;
    transform:translate3d(0,8px,0);
  }
  .aeo-seo-mod.is-on{transform:translate3d(0,0,0)}
}

@media (prefers-reduced-motion:reduce){
  .aeo-seo-hub,.aeo-seo-mod,.aeo-seo-mod-title,.aeo-seo-mod-detail,
  .aeo-seo-hub-shell,.aeo-seo-hub-ring,.aeo-seo-anchor,.aeo-seo-path-active{transition:none!important}
  .aeo-seo-hub,.aeo-seo-hub.is-on{opacity:1;transform:none}
  .aeo-seo-mod,.aeo-seo-mod.is-on{opacity:1;transform:none}
  .aeo-seo-mod-title,.aeo-seo-mod-detail{opacity:1!important}
  .aeo-seo-path-active{opacity:1;stroke-opacity:.55}
  .aeo-seo-hub-ring{opacity:1}
  .aeo-seo-signal{display:none}
}
</style>
<template id="aeo-seo-tpl">
<section class="aeo-plat aeo-seo" id="aeo-seo">
  <div class="aeo-plat-inner">
    <div class="aeo-plat-intro">
      <span class="aeo-pill aeo-pill-center">Search Engine Optimization</span>
      <h2 class="aeo-h2">Build stronger SEO foundations.</h2>
      <p class="aeo-lead">We improve your technical SEO, site structure and content so search engines can crawl, understand and rank your business.</p>
    </div>
    <div class="aeo-seo-card" id="aeo-seo-card" aria-label="SEO strategy workspace">
      <div class="aeo-seo-card-head">
        <span>SEO strategy</span>
        <span class="aeo-seo-card-head-r">5 workstreams</span>
      </div>
      <div class="aeo-seo-canvas" id="aeo-seo-canvas">
        <svg class="aeo-seo-svg" id="aeo-seo-svg" aria-hidden="true"></svg>
        <div class="aeo-seo-hub" id="aeo-seo-hub">
          <div class="aeo-seo-hub-ring" aria-hidden="true">
            <svg viewBox="0 0 100 100">
              <circle class="seg" cx="50" cy="50" r="46" stroke-dasharray="8 10" transform="rotate(-90 50 50)"/>
              <path class="seg seg-a" d="M74 18 A44 44 0 0 1 92 50"/>
              <path class="seg seg-b" d="M92 52 A44 44 0 0 1 70 88"/>
            </svg>
          </div>
          <div class="aeo-seo-hub-shell"></div>
          <div class="aeo-seo-anchors" id="aeo-seo-anchors" aria-hidden="true"></div>
          <div class="aeo-seo-hub-label">
            <div class="aeo-seo-hub-kicker">SEO</div>
            <div class="aeo-seo-hub-title">Strategy</div>
          </div>
        </div>
        <div class="aeo-seo-mods" id="aeo-seo-mods"></div>
      </div>
    </div>
  </div>
</section>
</template>
<script id="aeo-seo-script">
(function(){
  var reduce=false;try{reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){}

  /*
   * Absolute timeline (ms from sequence start).
   * Build ~5.8s · hold ~3.6s · reset ~1.05s · brief pause · loop.
   */
  var T={
    HUB_ON:0,
    HUB_LIT:580,
    L0:780,
    L1:1880,
    L2:2980,
    L3:4080,
    L4:5180,
    COMPLETE:6100,
    HOLD_END:9700,
    RESET_END:10750,
    LOOP:11100
  };
  var LINE_MS=720;
  var MOD_LEAD=0.82;
  var SIGNAL_R=2.4;

  var LEVERS=[
    {id:1,title:"Technical SEO",detail:"Crawlability · Indexing · Schema",t:T.L0},
    {id:2,title:"Search Demand & Intent",detail:"Keywords · Buyer questions · Competitors",t:T.L1},
    {id:3,title:"Site Architecture",detail:"Services · Locations · Internal links",t:T.L2},
    {id:4,title:"Content & On-page",detail:"Service pages · Location pages · FAQs",t:T.L3},
    {id:5,title:"Authority & Local Signals",detail:"Links · Reviews · Citations",t:T.L4}
  ];

  function isMobile(){return window.matchMedia("(max-width:760px)").matches;}
  function pad(n){return n<10?"0"+n:String(n);}
  function easeOut(p){return 1-Math.pow(1-p,3);}
  function easeInOut(p){return p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;}
  function clamp01(p){return p<0?0:p>1?1:p;}

  function buildMods(root){
    var wrap=root.querySelector("#aeo-seo-mods");if(!wrap)return;
    var html="",i,L;
    for(i=0;i<LEVERS.length;i++){
      L=LEVERS[i];
      html+='<div class="aeo-seo-mod" data-i="'+i+'" data-id="'+L.id+'">'+
        '<span class="aeo-seo-mod-bar" aria-hidden="true"></span>'+
        '<div class="aeo-seo-mod-main">'+
          '<div class="aeo-seo-mod-top">'+
            '<span class="aeo-seo-mod-idx">'+pad(L.id)+'</span>'+
            '<span class="aeo-seo-mod-title">'+L.title+'</span>'+
          '</div>'+
          '<div class="aeo-seo-mod-detail">'+L.detail+'</div>'+
        '</div>'+
        '<span class="aeo-seo-mod-dot" aria-hidden="true"></span>'+
      '</div>';
    }
    wrap.innerHTML=html;
  }

  function placeAnchors(root){
    var host=root.querySelector("#aeo-seo-anchors");
    if(!host)return;
    if(isMobile()){host.innerHTML="";return;}
    /* Ports fan toward the right-side stack */
    var angles=[-42,-21,0,21,42];
    var html="",i,a,x,y;
    for(i=0;i<angles.length;i++){
      a=angles[i]*Math.PI/180;
      x=50+Math.cos(a)*46.5;
      y=50+Math.sin(a)*46.5;
      html+='<span class="aeo-seo-anchor" data-i="'+i+'" style="left:'+x+'%;top:'+y+'%"></span>';
    }
    host.innerHTML=html;
  }

  function layoutPaths(root){
    var canvas=root.querySelector("#aeo-seo-canvas");
    var svg=root.querySelector("#aeo-seo-svg");
    var hub=root.querySelector("#aeo-seo-hub");
    if(!canvas||!svg||!hub)return [];
    if(isMobile()){svg.innerHTML="";return [];}

    var cr=canvas.getBoundingClientRect();
    var hr=hub.getBoundingClientRect();
    var w=cr.width,h=cr.height;
    if(w<40||h<40)return [];
    var hx=hr.left-cr.left+hr.width/2;
    var hy=hr.top-cr.top+hr.height/2;
    var hradius=hr.width/2;
    var mods=[].slice.call(root.querySelectorAll(".aeo-seo-mod"));
    var ns="http://www.w3.org/2000/svg";
    var paths=[];
    svg.setAttribute("viewBox","0 0 "+w+" "+h);
    svg.setAttribute("width",String(w));
    svg.setAttribute("height",String(h));
    svg.innerHTML="";

    var anchors=[].slice.call(root.querySelectorAll(".aeo-seo-anchor"));
    mods.forEach(function(mod,i){
      var mr=mod.getBoundingClientRect();
      var ex=mr.left-cr.left;
      var ey=mr.top-cr.top+mr.height/2;
      /* Line origin = geometric center of the matching port dot (same geometry). */
      var anc=anchors[i];
      var ar=anc?anc.getBoundingClientRect():null;
      var sx,sy;
      if(ar){
        sx=ar.left-cr.left+ar.width/2;
        sy=ar.top-cr.top+ar.height/2;
      }else{
        var dx=ex-hx,dy=ey-hy,len=Math.hypot(dx,dy)||1;
        sx=hx+(dx/len)*(hradius-1);
        sy=hy+(dy/len)*(hradius-1);
      }
      var tx=ex-0.5;
      var ty=ey;

      /* Consistent horizontal-biased Bezier: leave hub cleanly, settle into node */
      var spanX=tx-sx;
      var c1x=sx+spanX*0.38;
      var c1y=sy+(ty-sy)*0.12;
      var c2x=tx-spanX*0.22;
      var c2y=ty;
      var d="M"+sx.toFixed(2)+","+sy.toFixed(2)+
            " C"+c1x.toFixed(2)+","+c1y.toFixed(2)+" "+
            c2x.toFixed(2)+","+c2y.toFixed(2)+" "+
            tx.toFixed(2)+","+ty.toFixed(2);

      var base=document.createElementNS(ns,"path");
      base.setAttribute("class","aeo-seo-path-base");
      base.setAttribute("d",d);
      svg.appendChild(base);

      var act=document.createElementNS(ns,"path");
      act.setAttribute("class","aeo-seo-path-active");
      act.setAttribute("d",d);
      svg.appendChild(act);

      var signal=document.createElementNS(ns,"circle");
      signal.setAttribute("class","aeo-seo-signal");
      signal.setAttribute("r",String(SIGNAL_R));
      signal.setAttribute("cx",sx.toFixed(2));
      signal.setAttribute("cy",sy.toFixed(2));
      svg.appendChild(signal);

      var plen=act.getTotalLength();
      act.style.strokeDasharray=String(plen);
      act.style.strokeDashoffset=String(plen);

      paths.push({base:base,act:act,signal:signal,len:plen,start:LEVERS[i].t,sx:sx,sy:sy});
    });
    return paths;
  }

  function setInitial(root,paths,opts){
    opts=opts||{};
    var hub=root.querySelector("#aeo-seo-hub");
    var canvas=root.querySelector("#aeo-seo-canvas");
    if(canvas)canvas.classList.remove("is-resetting");
    if(hub){
      if(opts.keepHub){
        hub.classList.add("is-on");
        hub.classList.remove("is-lit");
      }else{
        hub.classList.remove("is-on","is-lit");
      }
    }
    [].slice.call(root.querySelectorAll(".aeo-seo-mod")).forEach(function(m){m.classList.remove("is-on");});
    [].slice.call(root.querySelectorAll(".aeo-seo-anchor")).forEach(function(a){a.classList.remove("is-on","is-pulse");});
    (paths||[]).forEach(function(P){
      P.act.classList.remove("is-draw","is-done");
      P.act.style.strokeDasharray=String(P.len);
      P.act.style.strokeDashoffset=String(P.len);
      P.act.style.opacity="";
      if(P.signal){
        P.signal.style.opacity="0";
        P.signal.setAttribute("cx",P.sx.toFixed(2));
        P.signal.setAttribute("cy",P.sy.toFixed(2));
      }
    });
  }

  function setComplete(root,paths){
    var hub=root.querySelector("#aeo-seo-hub");
    var canvas=root.querySelector("#aeo-seo-canvas");
    if(canvas)canvas.classList.remove("is-resetting");
    if(hub){hub.classList.add("is-on","is-lit");}
    [].slice.call(root.querySelectorAll(".aeo-seo-mod")).forEach(function(m){m.classList.add("is-on");});
    [].slice.call(root.querySelectorAll(".aeo-seo-anchor")).forEach(function(a){
      a.classList.remove("is-pulse");a.classList.add("is-on");
    });
    (paths||[]).forEach(function(P){
      P.act.classList.add("is-draw","is-done");
      P.act.style.strokeDashoffset="0";
      if(P.signal)P.signal.style.opacity="0";
    });
  }

  function applyFrame(root,paths,elapsed,mobile){
    var hub=root.querySelector("#aeo-seo-hub");
    var mods=[].slice.call(root.querySelectorAll(".aeo-seo-mod"));
    var anchors=[].slice.call(root.querySelectorAll(".aeo-seo-anchor"));
    var canvas=root.querySelector("#aeo-seo-canvas");

    if(elapsed>=T.HOLD_END){
      if(canvas)canvas.classList.add("is-resetting");
      (paths||[]).forEach(function(P){if(P.signal)P.signal.style.opacity="0";});
      return "RESET";
    }
    if(canvas)canvas.classList.remove("is-resetting");

    if(elapsed<T.HUB_ON){
      if(hub)hub.classList.remove("is-on","is-lit");
    }else{
      if(hub)hub.classList.add("is-on");
      if(elapsed>=T.HUB_LIT&&hub)hub.classList.add("is-lit");
    }

    LEVERS.forEach(function(L,i){
      var local=elapsed-L.t;
      var mod=mods[i];
      var anc=anchors[i];
      var P=paths[i];

      if(local<0){
        if(mod)mod.classList.remove("is-on");
        if(anc)anc.classList.remove("is-on","is-pulse");
        if(P){
          P.act.classList.remove("is-draw","is-done");
          P.act.style.strokeDashoffset=String(P.len);
          if(P.signal)P.signal.style.opacity="0";
        }
        return;
      }

      if(P&&!mobile){
        var p=clamp01(local/LINE_MS);
        var drawn=easeOut(p);
        P.act.classList.add("is-draw");
        P.act.style.strokeDashoffset=String(P.len*(1-drawn));

        /* Port brightens while signal travels, then settles */
        if(anc){
          if(p<1){anc.classList.add("is-pulse");anc.classList.remove("is-on");}
          else{anc.classList.remove("is-pulse");anc.classList.add("is-on");}
        }

        /* Subtle travelling highlight along the active path */
        if(P.signal){
          if(p>0.02&&p<0.98){
            var pt=P.act.getPointAtLength(P.len*drawn);
            P.signal.setAttribute("cx",pt.x.toFixed(2));
            P.signal.setAttribute("cy",pt.y.toFixed(2));
            var fade=p<.12?easeInOut(p/.12):(p>.82?easeInOut((1-p)/.18):1);
            P.signal.style.opacity=String(0.42*fade);
          }else{
            P.signal.style.opacity="0";
          }
        }

        if(p>=1)P.act.classList.add("is-done");
        else P.act.classList.remove("is-done");

        if(local>=LINE_MS*MOD_LEAD){if(mod)mod.classList.add("is-on");}
        else if(mod)mod.classList.remove("is-on");
      }else{
        if(anc){anc.classList.remove("is-pulse");anc.classList.add("is-on");}
        if(local>=90){if(mod)mod.classList.add("is-on");}
        else if(mod)mod.classList.remove("is-on");
      }
    });

    if(elapsed>=T.COMPLETE)return "COMPLETE";
    return "PLAY";
  }

  function wire(sec){
    buildMods(sec);
    placeAnchors(sec);
    var card=sec.querySelector("#aeo-seo-card");
    var canvas=sec.querySelector("#aeo-seo-canvas");
    if(!card||!canvas)return;

    var ctrl={
      phase:"idle",
      raf:0,
      paths:[],
      t0:0,
      visible:false,
      armed:true
    };

    function stopRaf(){
      if(ctrl.raf){cancelAnimationFrame(ctrl.raf);ctrl.raf=0;}
    }

    function paintInitial(opts){
      placeAnchors(sec);
      ctrl.paths=layoutPaths(sec);
      setInitial(sec,ctrl.paths,opts);
    }

    function startSequence(){
      if(reduce){
        placeAnchors(sec);
        ctrl.paths=layoutPaths(sec);
        setComplete(sec,ctrl.paths);
        ctrl.phase="complete-static";
        return;
      }
      stopRaf();
      paintInitial();
      ctrl.phase="primed";
      requestAnimationFrame(function(){
        requestAnimationFrame(function(){
          if(!ctrl.visible)return;
          ctrl.phase="playing";
          ctrl.t0=performance.now();
          tick(ctrl.t0);
        });
      });
    }

    function tick(now){
      if(ctrl.phase!=="playing"&&ctrl.phase!=="holding"&&ctrl.phase!=="resetting")return;
      if(!ctrl.visible){stopRaf();ctrl.phase="paused";return;}
      var elapsed=now-ctrl.t0;
      var mobile=isMobile();

      if(elapsed>=T.LOOP){
        /* Soft loop: keep Strategy hub present; fade branches only */
        paintInitial({keepHub:true});
        ctrl.t0=performance.now();
        ctrl.raf=requestAnimationFrame(tick);
        return;
      }

      if(elapsed>=T.HOLD_END){
        ctrl.phase="resetting";
        applyFrame(sec,ctrl.paths,elapsed,mobile);
      }else if(elapsed>=T.COMPLETE){
        ctrl.phase="holding";
        applyFrame(sec,ctrl.paths,elapsed,mobile);
      }else{
        ctrl.phase="playing";
        applyFrame(sec,ctrl.paths,elapsed,mobile);
      }
      ctrl.raf=requestAnimationFrame(tick);
    }

    function onEnter(){
      if(!ctrl.armed&&ctrl.phase!=="paused"&&ctrl.phase!=="idle")return;
      ctrl.visible=true;
      ctrl.armed=false;
      startSequence();
    }

    function onLeave(){
      ctrl.visible=false;
      stopRaf();
      if(ctrl.phase==="playing"||ctrl.phase==="holding"||ctrl.phase==="resetting"||ctrl.phase==="primed"){
        ctrl.phase="paused";
      }
    }

    function rearmIfAbove(){
      var r=sec.getBoundingClientRect();
      var vh=window.innerHeight||1;
      if(r.top>vh){
        paintInitial();
        ctrl.armed=true;
        ctrl.phase="idle";
        stopRaf();
      }
    }

    paintInitial();

    if(reduce||!("IntersectionObserver" in window)){
      setComplete(sec,layoutPaths(sec));
      return;
    }

    function cardVisibleRatio(){
      var r=card.getBoundingClientRect();
      var vh=window.innerHeight||1;
      var visible=Math.max(0,Math.min(r.bottom,vh)-Math.max(r.top,0));
      return r.height>0?visible/r.height:0;
    }

    function tryStartFromVisibility(){
      var ratio=cardVisibleRatio();
      if(ratio>=0.28){
        if(ctrl.phase==="paused"){
          ctrl.visible=true;
          startSequence();
        }else if(ctrl.armed||ctrl.phase==="idle"){
          onEnter();
        }
      }else if(ratio===0){
        onLeave();
        rearmIfAbove();
      }
    }

    var io=new IntersectionObserver(function(){
      tryStartFromVisibility();
    },{threshold:[0,0.2,0.28,0.35,0.5,0.75,1],rootMargin:"0px"});
    io.observe(card);

    window.addEventListener("scroll",function(){
      tryStartFromVisibility();
      if(!ctrl.visible)rearmIfAbove();
    },{passive:true});
    requestAnimationFrame(tryStartFromVisibility);

    var resizeT=null;
    window.addEventListener("resize",function(){
      clearTimeout(resizeT);
      resizeT=setTimeout(function(){
        placeAnchors(sec);
        ctrl.paths=layoutPaths(sec);
        if(reduce){setComplete(sec,ctrl.paths);return;}
        if(ctrl.phase==="holding"||ctrl.phase==="complete-static"){
          setComplete(sec,ctrl.paths);
        }else if(ctrl.visible&&(ctrl.phase==="playing"||ctrl.phase==="paused"||ctrl.phase==="idle")){
          startSequence();
        }else{
          setInitial(sec,ctrl.paths);
        }
      },140);
    });

    sec.__aeoSeoCtrl=ctrl;
    sec.__aeoSeoRestart=function(){ctrl.armed=true;ctrl.visible=true;startSequence();};
  }

  function mount(){
    if(document.getElementById("aeo-seo"))return;
    var plat=document.getElementById("aeo-platform");if(!plat)return;
    var tpl=document.getElementById("aeo-seo-tpl");if(!tpl)return;
    plat.parentNode.insertBefore(tpl.content.cloneNode(true),plat.nextSibling);
    wire(document.getElementById("aeo-seo"));
  }
  var n=0,iv=setInterval(function(){mount();if(++n>70)clearInterval(iv);},150);
  document.addEventListener("DOMContentLoaded",mount);
  window.addEventListener("load",mount);
  var mo=new MutationObserver(function(){if(!document.getElementById("aeo-seo"))mount();});
  try{mo.observe(document.body||document.documentElement,{childList:true,subtree:true});}catch(e){}
  setTimeout(function(){try{mo.disconnect();}catch(e){}},11000);
})();
</script>
