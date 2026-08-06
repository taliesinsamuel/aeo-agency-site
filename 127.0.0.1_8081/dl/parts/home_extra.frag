<style id="aeo-home-style">
/* ---- how it works ---- */
.aeo-proc .aeo-plat-inner{padding-top:clamp(56px,7vw,104px)}
/* frosted panel holding the three steps — one object, three faces */
.aeo-steps{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid rgba(28,29,31,.08);border-radius:var(--aeo-r-xl);background:linear-gradient(180deg,rgba(255,255,255,.82),rgba(255,255,255,.56));-webkit-backdrop-filter:saturate(170%) blur(12px);backdrop-filter:saturate(170%) blur(12px);box-shadow:var(--aeo-sh-3);overflow:hidden}
.aeo-step{padding:clamp(28px,3vw,44px) clamp(24px,2.6vw,38px);position:relative;opacity:0;transform:translateY(22px);isolation:isolate;transition:opacity .8s var(--aeo-e),transform .8s var(--aeo-e)}
.aeo-step.in{opacity:1;transform:none}
.aeo-step+.aeo-step{border-left:1px dashed var(--aeo-line-dash)}
/* the activated surface is a separate layer that fades in behind the
   content, so children only ever need to transition color/opacity —
   never fighting a background-color transition on the same element */
.aeo-step::before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(135deg,var(--aeo-accent-lo),var(--aeo-accent) 46%,var(--aeo-accent-hi));opacity:0;transition:opacity .18s var(--aeo-e)}
.aeo-step:hover::before{opacity:1}
.aeo-step-num{display:inline-flex;align-items:center;justify-content:center;min-width:30px;height:30px;padding:0 8px;border-radius:9px;font-family:"Inter Display",Inter,sans-serif;font-size:13px;font-weight:700;letter-spacing:.03em;color:var(--aeo-accent-ink);background:linear-gradient(180deg,#f0f5ff,var(--aeo-accent-soft));box-shadow:inset 0 0 0 1px rgba(38,109,240,.16),0 1px 2px rgba(38,109,240,.08);margin-bottom:18px;transition:background .18s var(--aeo-e),color .18s var(--aeo-e),box-shadow .18s var(--aeo-e)}
.aeo-step h3{font-family:"Inter Display",Inter,sans-serif;font-weight:600;font-size:clamp(19px,1.7vw,23px);letter-spacing:-.02em;color:var(--aeo-ink);margin:0 0 10px;transition:color .18s var(--aeo-e)}
.aeo-step p{margin:0;font-size:15px;line-height:1.58;letter-spacing:-.006em;color:var(--aeo-ink-3);font-weight:500;transition:color .18s var(--aeo-e)}
@media (hover:hover) and (pointer:fine){
  .aeo-step:hover .aeo-step-num{background:rgba(255,255,255,.16);color:#fff;box-shadow:inset 0 0 0 1px rgba(255,255,255,.32),0 1px 2px rgba(16,17,20,.1)}
  .aeo-step:hover h3{color:#fff;text-shadow:0 1px 12px rgba(255,255,255,.25)}
  .aeo-step:hover p{color:rgba(255,255,255,.88)}
}
@media (max-width:860px){.aeo-steps{grid-template-columns:1fr}.aeo-step+.aeo-step{border-left:none;border-top:1px dashed var(--aeo-line-dash)}}

/* ---- stats band (dark) ---- */
.aeo-stats{position:relative;background:linear-gradient(180deg,#101215,var(--aeo-night) 55%,#0c0d0f);overflow:hidden;font-family:var(--font-inter),"Inter",system-ui,sans-serif}
.aeo-stats *{box-sizing:border-box}
/* gradient hairline in, grain over the whole band */
.aeo-stats::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(38,109,240,.5) 28%,rgba(140,110,245,.45) 62%,transparent);pointer-events:none;z-index:2}
.aeo-stats::after{content:"";position:absolute;inset:0;background-image:var(--aeo-noise);opacity:.04;mix-blend-mode:overlay;pointer-events:none;z-index:2}
.aeo-stats-bg{position:absolute;inset:0;pointer-events:none}
.aeo-stats-bg i{position:absolute;border-radius:50%;filter:blur(80px);display:block}
.aeo-stats-bg i:nth-child(1){width:46vw;height:46vw;left:-12%;top:-60%;background:radial-gradient(circle,rgba(38,109,240,.22),transparent 65%);animation:aeo-drift-a 28s ease-in-out infinite alternate}
.aeo-stats-bg i:nth-child(2){width:40vw;height:40vw;right:-10%;bottom:-70%;background:radial-gradient(circle,rgba(140,110,245,.18),transparent 65%);animation:aeo-drift-b 34s ease-in-out infinite alternate}
.aeo-stats-inner{position:relative;max-width:1200px;margin:0 auto;padding:clamp(56px,6vw,88px) 24px;display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
.aeo-stat{text-align:center;padding:0 12px;opacity:0;transform:translateY(18px);transition:opacity .7s cubic-bezier(.33,1,.68,1),transform .7s cubic-bezier(.33,1,.68,1)}
.aeo-stat.in{opacity:1;transform:none}
.aeo-stat+.aeo-stat{border-left:1px dashed rgba(255,255,255,.12)}
.aeo-stat-num{display:inline-block;font-family:"Inter Display",Inter,sans-serif;font-size:clamp(40px,4.6vw,60px);font-weight:700;line-height:1;letter-spacing:-.025em;background:linear-gradient(176deg,#fff 38%,#7fa7f5);-webkit-background-clip:text;background-clip:text;color:transparent;font-variant-numeric:tabular-nums;filter:drop-shadow(0 8px 24px rgba(38,109,240,.28))}
.aeo-stat-label{margin-top:13px;font-size:14.5px;line-height:1.5;letter-spacing:-.006em;color:#9aa2af;font-weight:500}
@media (max-width:860px){.aeo-stats-inner{grid-template-columns:1fr;gap:36px}.aeo-stat+.aeo-stat{border-left:none;border-top:1px dashed rgba(255,255,255,.12);padding-top:32px}}

/* ---- closing CTA (Attio's markup, our surface) ---- */
.aeo-final{position:relative;background:linear-gradient(180deg,#0d0f12,#0a0b0d)!important}
.aeo-final::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;z-index:3;background:linear-gradient(90deg,transparent,rgba(38,109,240,.5) 28%,rgba(140,110,245,.45) 62%,transparent);pointer-events:none}
.aeo-final::after{content:"";position:absolute;inset:0;z-index:3;background-image:var(--aeo-noise);opacity:.05;mix-blend-mode:overlay;pointer-events:none}
.aeo-final-glow{position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(46% 62% at 50% 112%,rgba(38,109,240,.32),transparent 68%),radial-gradient(34% 48% at 16% -14%,rgba(140,110,245,.20),transparent 70%);animation:aeo-final-breathe 13s ease-in-out infinite alternate}
@keyframes aeo-final-breathe{to{opacity:.7}}
.aeo-final h2{background:linear-gradient(176deg,#fff 44%,#9db9f2);-webkit-background-clip:text;background-clip:text;color:transparent}
.aeo-final .button-primary,.aeo-final .button-outline{height:44px!important;padding:0 22px!important;border-radius:var(--aeo-r-md)!important;font-size:14.5px!important;font-weight:600!important;letter-spacing:-.006em}
.aeo-final .button-primary{background-image:linear-gradient(112deg,#4b87f6,#2260da 46%,#4079f1 78%,#5d95f8)!important;background-size:230% 100%!important;background-position:0 0;color:#fff!important;border-color:transparent!important;box-shadow:0 1px 2px rgba(0,0,0,.3),0 10px 24px -8px rgba(38,109,240,.55),inset 0 1px 0 rgba(255,255,255,.24);transition:background-position .7s var(--aeo-e),box-shadow .3s var(--aeo-e),transform .3s var(--aeo-e)!important}
.aeo-final .button-primary:hover{background-position:100% 0;transform:translateY(-1.5px);box-shadow:0 2px 4px rgba(0,0,0,.3),0 18px 34px -8px rgba(38,109,240,.68),inset 0 1px 0 rgba(255,255,255,.3)}
.aeo-final .button-outline{background:rgba(255,255,255,.06)!important;border-color:rgba(255,255,255,.18)!important;color:#e8eaef!important;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);transition:background-color .25s var(--aeo-e),border-color .25s var(--aeo-e),color .2s,transform .3s var(--aeo-e)!important}
.aeo-final .button-outline:hover{background:rgba(255,255,255,.12)!important;border-color:rgba(255,255,255,.32)!important;color:#fff!important;transform:translateY(-1.5px)}
.aeo-final .button-primary:active,.aeo-final .button-outline:active{transform:translateY(0) scale(.985)}

@media (prefers-reduced-motion: reduce){
  .aeo-step,.aeo-stat{opacity:1;transform:none;transition:none}
  .aeo-final-glow{animation:none}
}
</style>
<template id="aeo-home-tpl">
<section class="aeo-plat aeo-proc" id="aeo-process">
  <div class="aeo-plat-bg"><i class="aeo-blob aeo-blob-b" style="opacity:.35"></i></div>
  <div class="aeo-plat-inner">
    <div class="aeo-plat-intro">
      <span class="aeo-pill aeo-pill-center">How it works</span>
      <h2 class="aeo-h2">From invisible to recommended in 90 days</h2>
      <p class="aeo-lead">A simple monthly system. No jargon, no dashboards to learn &mdash; just your name showing up more often.</p>
    </div>
    <div class="aeo-steps">
      <div class="aeo-step"><span class="aeo-step-num">01</span><h3>Audit</h3><p>We test hundreds of real customer questions across ChatGPT, Perplexity, Gemini and Claude, and benchmark you against every competitor in your area.</p></div>
      <div class="aeo-step"><span class="aeo-step-num">02</span><h3>Fix and publish</h3><p>Schema, site structure, AI-ready pages and citations &mdash; we fix what AI can&rsquo;t read and write the content it wants to quote.</p></div>
      <div class="aeo-step"><span class="aeo-step-num">03</span><h3>Track and grow</h3><p>You get a monthly mention-rate report in plain English. We double down on what&rsquo;s working until you&rsquo;re the answer.</p></div>
    </div>
  </div>
</section>
<section class="aeo-stats" id="aeo-stats">
  <div class="aeo-stats-bg"><i></i><i></i></div>
  <div class="aeo-stats-inner">
    <div class="aeo-stat"><div class="aeo-stat-num" data-v="3.2" data-dec="1" data-suf="&times;">0</div><div class="aeo-stat-label">average lift in AI mentions within 90 days</div></div>
    <div class="aeo-stat"><div class="aeo-stat-num" data-v="500" data-suf="+">0</div><div class="aeo-stat-label">real customer questions tested every month</div></div>
    <div class="aeo-stat"><div class="aeo-stat-num" data-v="4" data-suf="">0</div><div class="aeo-stat-label">AI engines tracked around the clock</div></div>
  </div>
</section>
</template>
<script id="aeo-home-script">
(function(){
  var HIDE=["Live from day one","Universal Context","All of the signals","SDK. API.","Run at any scale","Trusted by 30,000+","Better as you grow"];
  var reduce=false;try{reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){}
  // Attio wraps some scroll-choreographed content in plain <div>s rather than
  // <section>s. Those wrappers are sticky and tall, so left in place they punch
  // a blank hole in the page and float over whatever follows.
  function hideSections(){
    var main=document.querySelector("main");
    var cands=[].slice.call(document.querySelectorAll("main section"));
    if(main)cands=cands.concat([].slice.call(main.children));
    for(var i=0;i<cands.length;i++){
      var s=cands[i];
      if(!s||s.nodeType!==1)continue;
      var tag=s.tagName;
      if(tag==="SCRIPT"||tag==="STYLE"||tag==="TEMPLATE"||tag==="LINK")continue;
      if(s.id&&s.id.indexOf("aeo")===0)continue;
      if(s.getAttribute("data-aeo-hidden"))continue;
      // never hide a wrapper that holds our own content
      if(s.querySelector('[id^="aeo-"],.aeo-hero,.aeo-window'))continue;
      var t=s.textContent||"";
      for(var j=0;j<HIDE.length;j++){
        if(t.indexOf(HIDE[j])!==-1){s.style.display="none";s.setAttribute("data-aeo-hidden","1");break;}
      }
    }
    hideSpacers();
    dressFinalCta();
  }
  // Attio leaves empty grid-spacer blocks between sections; with its own
  // content gone they read as unexplained white voids.
  function hideSpacers(){
    var main=document.querySelector("main");if(!main)return;
    var kids=main.children;
    for(var i=0;i<kids.length;i++){
      var k=kids[i];
      if(k.tagName!=="DIV")continue;
      if(k.getAttribute("data-aeo-hidden"))continue;
      if((k.textContent||"").trim()!=="")continue;
      if(k.querySelector("img,svg,canvas,video,picture"))continue;
      if(!k.offsetHeight)continue;
      k.style.display="none";k.setAttribute("data-aeo-hidden","1");
    }
  }
  function dressFinalCta(){
    var main=document.querySelector("main");if(!main)return;
    var kids=main.children;
    for(var i=0;i<kids.length;i++){
      var k=kids[i];
      if(k.tagName!=="SECTION")continue;
      if(k.getAttribute("data-aeo-final"))continue;
      if((k.textContent||"").indexOf("Be the business AI recommends")===-1)continue;
      k.setAttribute("data-aeo-final","1");
      k.classList.add("aeo-final");
      var glow=document.createElement("div");
      glow.className="aeo-final-glow";
      glow.setAttribute("aria-hidden","true");
      k.insertBefore(glow,k.firstChild);
    }
  }
  // Each counter owns exactly one in-flight rAF loop (node._aeoRaf) and at
  // most one pending start delay (node._aeoTO), so re-triggering it always
  // cancels whatever was running first — no two loops can ever write the
  // same node in the same frame, and nothing keeps ticking after reset.
  function cancelCount(node){
    if(node._aeoRaf){cancelAnimationFrame(node._aeoRaf);node._aeoRaf=null;}
    if(node._aeoTO){clearTimeout(node._aeoTO);node._aeoTO=null;}
  }
  function countTo(node,to,dur,dec,suffix){
    cancelCount(node);
    var t0=null;
    function step(ts){
      if(t0==null)t0=ts;
      var p=Math.min(1,(ts-t0)/dur),e=1-Math.pow(1-p,3),v=to*e;
      node.textContent=(dec?v.toFixed(dec):Math.round(v))+suffix;
      node._aeoRaf=p<1?requestAnimationFrame(step):null;
    }
    node._aeoRaf=requestAnimationFrame(step);
  }
  function wire(sec){
    var steps=sec.parentNode.querySelectorAll(".aeo-step");
    var stats=document.querySelectorAll("#aeo-stats .aeo-stat");
    function startStat(st,delay){
      var n=st.querySelector(".aeo-stat-num");
      st.classList.add("in");
      if(!n)return;
      var suf=n.getAttribute("data-suf");suf=suf==null?"":suf;
      var to=parseFloat(n.getAttribute("data-v")),dec=parseInt(n.getAttribute("data-dec")||"0",10);
      cancelCount(n);
      n._aeoTO=setTimeout(function(){n._aeoTO=null;countTo(n,to,1300,dec,suf);},delay||0);
    }
    function stopStat(st){
      st.classList.remove("in");
      var n=st.querySelector(".aeo-stat-num");
      if(!n)return;
      cancelCount(n);
      n.textContent="0";
    }
    if(reduce||!("IntersectionObserver" in window)){
      steps.forEach(function(s){s.classList.add("in");});
      stats.forEach(function(s){startStat(s,0);});
      return;
    }
    // steps intro once and stay put
    var stepIO=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(!e.isIntersecting)return;
        stepIO.unobserve(e.target);
        var delay=(e.target.getAttribute("data-i")||0)*130;
        setTimeout(function(){e.target.classList.add("in");},delay);
      });
    },{threshold:.25});
    steps.forEach(function(s,i){s.setAttribute("data-i",i);stepIO.observe(s);});
    // stats replay every time the band crosses into/out of view
    var statIO=new IntersectionObserver(function(es){
      es.forEach(function(e){
        var el=e.target;
        if(e.isIntersecting)startStat(el,(el.getAttribute("data-i")||0)*130);
        else stopStat(el);
      });
    },{threshold:.25});
    stats.forEach(function(s,i){s.setAttribute("data-i",i);statIO.observe(s);});
  }
  function mount(){
    hideSections();
    if(document.getElementById("aeo-process"))return;
    var plat=document.getElementById("aeo-platform");if(!plat)return;
    var tpl=document.getElementById("aeo-home-tpl");if(!tpl)return;
    var frag=tpl.content.cloneNode(true);
    plat.parentNode.insertBefore(frag,plat.nextSibling);
    wire(document.getElementById("aeo-process"));
  }
  var n=0,iv=setInterval(function(){mount();if(++n>70)clearInterval(iv);},150);
  document.addEventListener("DOMContentLoaded",mount);
  window.addEventListener("load",mount);
  var mo=new MutationObserver(function(){hideSections();if(!document.getElementById("aeo-process"))mount();});
  try{mo.observe(document.body||document.documentElement,{childList:true,subtree:true});}catch(e){}
  setTimeout(function(){try{mo.disconnect();}catch(e){}},11000);
})();
</script>
