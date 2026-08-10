<style id="aeo-seo-style">
/* ============================================================
   SEO SECTION — homepage-only. Strategy workspace animation.
   Accents from .aeo-step--lime / --violet / --cyan below.
   ============================================================ */
#aeo-seo{
  background:transparent!important;
  margin-top:calc(-1 * var(--aeo-stack-exit-pull,0px));
  position:relative;
  z-index:1;
}
#aeo-seo .aeo-plat-bg{display:none}
#aeo-seo .aeo-plat-inner{padding-bottom:clamp(28px,3.4vw,48px)}
@media (prefers-reduced-motion:reduce){
  #aeo-seo{margin-top:0}
}

.aeo-seo-card{
  --seo-lime:#7af5b4;
  --seo-lime-hi:#d8f86e;
  --seo-violet:#e0a8ff;
  --seo-violet-hi:#f0c8ff;
  --seo-cyan:#2af7f8;
  --seo-cyan-hi:#8accff;
  --seo-ink:#f5f6f7;
  --seo-mute:#8e97a5;
  --seo-line:#262b33;
  --seo-bg:#0b0d10;
  --seo-raised:#14181e;
  position:relative;
  max-width:1180px;margin:0 auto;
  background:
    radial-gradient(42% 58% at 34% 48%,rgba(122,245,180,.04),transparent 62%),
    radial-gradient(36% 48% at 72% 28%,rgba(224,168,255,.035),transparent 64%),
    radial-gradient(40% 52% at 76% 78%,rgba(42,247,248,.03),transparent 66%),
    linear-gradient(180deg,#111419 0%,var(--seo-bg) 52%,#090b0e 100%);
  border:1px solid var(--seo-line);
  border-radius:var(--aeo-r-2xl);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.04),0 24px 56px -34px rgba(0,0,0,.55);
  overflow:hidden;
  color:var(--seo-ink);
  box-sizing:border-box;
}
.aeo-seo-card *{box-sizing:border-box}

.aeo-seo-card-head{
  display:flex;align-items:center;justify-content:space-between;gap:16px;
  padding:12px 22px;
  border-bottom:1px solid var(--seo-line);
  font-size:11px;font-weight:500;letter-spacing:.02em;color:var(--seo-mute);
}
.aeo-seo-card-head-r{color:#6a7280;font-variant-numeric:tabular-nums}

.aeo-seo-canvas{
  position:relative;
  width:100%;
  height:clamp(448px,50vw,520px);
  min-height:448px;
  padding:20px 24px 24px;
}
.aeo-seo-canvas::before{
  content:"";position:absolute;inset:14px 16px 16px;
  border:1px solid rgba(255,255,255,.035);
  border-radius:14px;
  background:
    radial-gradient(42% 55% at 30% 48%,rgba(255,255,255,.03),transparent 70%),
    linear-gradient(180deg,rgba(255,255,255,.012),transparent 40%);
  pointer-events:none;
}

.aeo-seo-svg{
  position:absolute;inset:0;width:100%;height:100%;
  pointer-events:none;z-index:1;overflow:visible;
}
.aeo-seo-path-base{
  fill:none;stroke:rgba(255,255,255,.08);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;
}
.aeo-seo-path-active{
  fill:none;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round;
  opacity:0;
  stroke-opacity:.88;
}
.aeo-seo-path-active.is-draw{opacity:1}
.aeo-seo-signal{opacity:0;pointer-events:none}

/* Hub */
.aeo-seo-hub{
  position:absolute;z-index:4;
  left:28%;top:50%;
  width:152px;height:152px;
  margin:-76px 0 0 -76px;
  opacity:1;transform:scale(.985);
  transition:transform .35s cubic-bezier(.22,1,.36,1);
}
.aeo-seo-hub.is-on{transform:scale(1)}
.aeo-seo-hub-shell{
  position:absolute;inset:0;border-radius:999px;
  background:
    radial-gradient(120% 90% at 34% 26%,rgba(255,255,255,.035),transparent 46%),
    linear-gradient(180deg,#151a21,#0f1318 58%,#0c1015);
  border:1px solid rgba(255,255,255,.09);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 14px 32px -18px rgba(0,0,0,.7);
  transition:background .35s ease,border-color .35s ease,box-shadow .35s ease;
}
.aeo-seo-hub.is-on .aeo-seo-hub-shell{
  background:
    radial-gradient(120% 90% at 34% 26%,rgba(255,255,255,.07),transparent 46%),
    linear-gradient(180deg,#171c24,#10141a 58%,#0d1116);
  border-color:rgba(255,255,255,.12);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.05),0 14px 32px -18px rgba(0,0,0,.7);
}
.aeo-seo-hub-ring{
  position:absolute;inset:-6px;border-radius:inherit;pointer-events:none;opacity:.3;
  transition:opacity .4s ease;
}
.aeo-seo-hub.is-on .aeo-seo-hub-ring{opacity:.55}
.aeo-seo-hub.is-lit .aeo-seo-hub-ring{opacity:1}
.aeo-seo-hub-ring svg{width:100%;height:100%;display:block}
.aeo-seo-hub-ring .seg{fill:none;stroke-width:1.35;stroke-linecap:round;stroke:rgba(255,255,255,.1)}
.aeo-seo-hub-ring .seg-a{stroke:rgba(122,245,180,.55)}
.aeo-seo-hub-ring .seg-b{stroke:rgba(224,168,255,.55)}
.aeo-seo-hub-ring .seg-c{stroke:rgba(42,247,248,.52)}
.aeo-seo-hub-label{
  position:absolute;inset:0;z-index:2;
  display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;
}
.aeo-seo-hub-kicker{
  font-size:10.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#6f7886;margin-bottom:3px;
}
.aeo-seo-hub-title{
  font-family:"Inter Display",Inter,sans-serif;
  font-size:19px;font-weight:600;letter-spacing:-.02em;color:var(--seo-ink);line-height:1.1;
}
.aeo-seo-anchors{position:absolute;inset:0;z-index:5;pointer-events:none}
.aeo-seo-anchor{
  position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:999px;
  background:#1a2028;border:1px solid rgba(255,255,255,.18);
  transition:background .25s ease,border-color .25s ease,box-shadow .25s ease;
}
.aeo-seo-anchor.is-on{
  background:var(--accent);border-color:var(--accent);
  box-shadow:0 0 0 2px rgba(11,13,16,.55);
}

/* Workstream modules — constellation panels, not a uniform stack */
.aeo-seo-mod{
  position:absolute;z-index:3;
  display:grid;grid-template-columns:auto 1fr auto;align-items:center;column-gap:8px;
  min-height:58px;
  background:linear-gradient(180deg,#181d25 0%,#13181f 100%);
  border:1px solid #2a313b;
  border-radius:11px;
  padding:9px 11px 9px 0;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.04);
  opacity:0;
  transform:translate3d(-12px,4px,0);
  pointer-events:none;
}
.aeo-seo-mod.is-on{
  opacity:1;
  transform:translate3d(0,0,0);
  transition:opacity .28s cubic-bezier(.22,1,.36,1),transform .28s cubic-bezier(.22,1,.36,1);
  pointer-events:auto;
}
.aeo-seo-mod-bar{
  width:2px;align-self:stretch;margin:10px 0;border-radius:0 2px 2px 0;
  background:var(--accent);opacity:.28;transition:opacity .25s ease;
}
.aeo-seo-mod.is-on .aeo-seo-mod-bar{opacity:.95}
.aeo-seo-mod-main{min-width:0;padding-left:9px}
.aeo-seo-mod-top{display:flex;align-items:baseline;gap:6px;min-width:0}
.aeo-seo-mod-idx{
  font-size:9px;font-weight:600;letter-spacing:.05em;color:#555e6b;font-variant-numeric:tabular-nums;
  flex:0 0 auto;
}
.aeo-seo-mod-title{
  font-size:13.5px;font-weight:600;letter-spacing:-.014em;color:var(--seo-ink);line-height:1.2;
  opacity:0;transition:opacity .2s ease;
}
.aeo-seo-mod.is-on .aeo-seo-mod-title{opacity:1;transition-delay:.06s}
.aeo-seo-mod-detail{
  margin-top:2px;font-size:11px;font-weight:500;color:var(--seo-mute);line-height:1.3;
  opacity:0;transition:opacity .2s ease;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
}
.aeo-seo-mod.is-on .aeo-seo-mod-detail{opacity:1;transition-delay:.12s}
.aeo-seo-mod-dot{
  width:5px;height:5px;border-radius:999px;margin-right:1px;align-self:start;margin-top:8px;
  border:1px solid rgba(255,255,255,.14);background:transparent;
  transition:background .25s ease,border-color .25s ease;
}
.aeo-seo-mod.is-on .aeo-seo-mod-dot{background:var(--accent);border-color:var(--accent)}

/* Desktop constellation — deliberate fan, varied X offsets */
.aeo-seo-mod[data-i="0"]{--accent:var(--seo-lime); left:52%; top:7%; width:246px}
.aeo-seo-mod[data-i="1"]{--accent:var(--seo-violet); left:61%; top:26%; width:288px}
.aeo-seo-mod[data-i="2"]{--accent:var(--seo-cyan); left:68%; top:45%; width:254px}
.aeo-seo-mod[data-i="3"]{--accent:var(--seo-violet); left:58%; top:64%; width:272px}
.aeo-seo-mod[data-i="4"]{--accent:var(--seo-lime-hi); left:49%; top:82%; width:296px}

.aeo-seo-canvas.is-resetting .aeo-seo-mod.is-on,
.aeo-seo-canvas.is-resetting .aeo-seo-path-active.is-draw{
  transition:opacity .35s ease!important;
  opacity:0!important;
}
.aeo-seo-canvas.is-resetting .aeo-seo-anchor.is-on{
  background:#1a2028!important;border-color:rgba(255,255,255,.18)!important;box-shadow:none!important;
}

@media (max-width:760px){
  .aeo-seo-card-head{padding:11px 16px}
  .aeo-seo-canvas{height:auto;min-height:0;padding:16px 14px 18px}
  .aeo-seo-svg{display:none}
  .aeo-seo-hub{
    position:relative;left:auto;top:auto;margin:4px auto 18px;
    width:148px;height:148px;
  }
  .aeo-seo-anchors{display:none}
  .aeo-seo-mods{display:flex;flex-direction:column;gap:10px}
  .aeo-seo-mod{
    position:relative;left:auto!important;top:auto!important;width:100%!important;
    transform:translate3d(-10px,0,0);
  }
  .aeo-seo-mod.is-on{transform:none}
}

@media (prefers-reduced-motion:reduce){
  .aeo-seo-hub,.aeo-seo-mod,.aeo-seo-mod-title,.aeo-seo-mod-detail,.aeo-seo-hub-shell,.aeo-seo-hub-ring{transition:none!important}
  .aeo-seo-hub,.aeo-seo-hub.is-on{transform:none}
  .aeo-seo-mod,.aeo-seo-mod.is-on{opacity:1;transform:none}
  .aeo-seo-mod-title,.aeo-seo-mod-detail{opacity:1!important}
  .aeo-seo-path-active{opacity:1}
  .aeo-seo-hub-ring{opacity:1}
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
              <path class="seg seg-a" d="M76 20 A41 41 0 0 1 93 52"/>
              <path class="seg seg-b" d="M92 54 A41 41 0 0 1 68 88"/>
              <path class="seg seg-c" d="M66 89 A41 41 0 0 1 28 86"/>
              <path class="seg" d="M26 84 A41 41 0 0 1 7 48"/>
              <path class="seg" d="M8 46 A41 41 0 0 1 34 14"/>
              <path class="seg" d="M36 13 A41 41 0 0 1 74 18"/>
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
   * Active build ~4200, hold 2400, reset 380. Total loop ~7000.
   */
  var T={
    HUB_ON:0,
    HUB_LIT:280,
    L0:500,
    L1:1150,
    L2:1750,
    L3:2450,
    L4:3150,
    COMPLETE:4200,
    HOLD_END:6600,
    RESET_END:6980,
    LOOP:7100
  };
  var LINE_MS=400;
  var MOD_LEAD=0.70; /* module starts when path ~70% drawn */

  var LEVERS=[
    {id:1,title:"Technical SEO",detail:"Crawlability · Indexing · Schema",accent:"#7af5b4",t:T.L0},
    {id:2,title:"Search Demand & Intent",detail:"Keywords · Buyer questions · Competitors",accent:"#e0a8ff",t:T.L1},
    {id:3,title:"Site Architecture",detail:"Services · Locations · Internal links",accent:"#2af7f8",t:T.L2},
    {id:4,title:"Content & On-page",detail:"Service pages · Location pages · FAQs",accent:"#e0a8ff",t:T.L3},
    {id:5,title:"Authority & Local Signals",detail:"Links · Reviews · Citations",accent:"#d8f86e",t:T.L4}
  ];

  function isMobile(){return window.matchMedia("(max-width:760px)").matches;}
  function pad(n){return n<10?"0"+n:String(n);}
  function easeOut(p){return 1-Math.pow(1-p,3);}
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
    var angles=[-48,-24,0,24,48];
    var html="",i,a,x,y;
    for(i=0;i<angles.length;i++){
      a=angles[i]*Math.PI/180;
      x=50+Math.cos(a)*47;
      y=50+Math.sin(a)*47;
      html+='<span class="aeo-seo-anchor" data-i="'+i+'" style="left:'+x+'%;top:'+y+'%;--accent:'+LEVERS[i].accent+'"></span>';
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

    mods.forEach(function(mod,i){
      var mr=mod.getBoundingClientRect();
      var ex=mr.left-cr.left;
      var ey=mr.top-cr.top+mr.height/2;
      var dx=ex-hx,dy=ey-hy,len=Math.hypot(dx,dy)||1;
      var sx=hx+(dx/len)*hradius;
      var sy=hy+(dy/len)*hradius;
      var tx=ex+1,ty=ey;
      /* Vary curvature slightly per branch */
      var k=0.40+i*0.035;
      var c1x=sx+(tx-sx)*k;
      var c1y=sy+(ty-sy)*0.08;
      var c2x=tx-(tx-sx)*0.18;
      var c2y=ty;
      var d="M"+sx.toFixed(1)+","+sy.toFixed(1)+" C"+c1x.toFixed(1)+","+c1y.toFixed(1)+" "+c2x.toFixed(1)+","+c2y.toFixed(1)+" "+tx.toFixed(1)+","+ty.toFixed(1);

      var base=document.createElementNS(ns,"path");
      base.setAttribute("class","aeo-seo-path-base");
      base.setAttribute("d",d);
      svg.appendChild(base);

      var act=document.createElementNS(ns,"path");
      act.setAttribute("class","aeo-seo-path-active");
      act.setAttribute("d",d);
      act.setAttribute("stroke",LEVERS[i].accent);
      svg.appendChild(act);

      var plen=act.getTotalLength();
      act.style.strokeDasharray=String(plen);
      act.style.strokeDashoffset=String(plen);

      paths.push({base:base,act:act,len:plen,start:LEVERS[i].t});
    });
    return paths;
  }

  function setInitial(root,paths){
    var hub=root.querySelector("#aeo-seo-hub");
    var canvas=root.querySelector("#aeo-seo-canvas");
    if(canvas)canvas.classList.remove("is-resetting");
    if(hub)hub.classList.remove("is-on","is-lit");
    [].slice.call(root.querySelectorAll(".aeo-seo-mod")).forEach(function(m){m.classList.remove("is-on");});
    [].slice.call(root.querySelectorAll(".aeo-seo-anchor")).forEach(function(a){a.classList.remove("is-on");});
    (paths||[]).forEach(function(P){
      P.act.classList.remove("is-draw");
      P.act.style.strokeDasharray=String(P.len);
      P.act.style.strokeDashoffset=String(P.len);
      P.act.style.opacity="";
    });
  }

  function setComplete(root,paths){
    var hub=root.querySelector("#aeo-seo-hub");
    if(hub){hub.classList.add("is-on","is-lit");}
    [].slice.call(root.querySelectorAll(".aeo-seo-mod")).forEach(function(m){m.classList.add("is-on");});
    [].slice.call(root.querySelectorAll(".aeo-seo-anchor")).forEach(function(a){a.classList.add("is-on");});
    (paths||[]).forEach(function(P){
      P.act.classList.add("is-draw");
      P.act.style.strokeDashoffset="0";
    });
  }

  function applyFrame(root,paths,elapsed,mobile){
    var hub=root.querySelector("#aeo-seo-hub");
    var mods=[].slice.call(root.querySelectorAll(".aeo-seo-mod"));
    var anchors=[].slice.call(root.querySelectorAll(".aeo-seo-anchor"));
    var canvas=root.querySelector("#aeo-seo-canvas");

    if(elapsed>=T.HOLD_END){
      /* Stay in reset fade until LOOP clears via paintInitial — avoid a completed flash. */
      if(canvas)canvas.classList.add("is-resetting");
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
        if(anc)anc.classList.remove("is-on");
        if(P){
          P.act.classList.remove("is-draw");
          P.act.style.strokeDashoffset=String(P.len);
        }
        return;
      }

      if(anc)anc.classList.add("is-on");

      if(P&&!mobile){
        var p=clamp01(local/LINE_MS);
        P.act.classList.add("is-draw");
        P.act.style.strokeDashoffset=String(P.len*(1-easeOut(p)));
        if(local>=LINE_MS*MOD_LEAD){if(mod)mod.classList.add("is-on");}
        else if(mod)mod.classList.remove("is-on");
      }else{
        /* Mobile: no SVG; reveal shortly after slot time */
        if(local>=80){if(mod)mod.classList.add("is-on");}
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

    function paintInitial(){
      placeAnchors(sec);
      ctrl.paths=layoutPaths(sec);
      setInitial(sec,ctrl.paths);
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
      /* Guarantee initial state paints before timeline advances */
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
        paintInitial();
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
      /* Keep visual wherever it was; re-arm only when fully above later */
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

    /* Build dormant geometry now so first paint is correct */
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
    /* Catch first paint / restored layouts where IO can be late */
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
          /* Restart cleanly after layout change */
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
