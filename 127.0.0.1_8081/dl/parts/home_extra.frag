<style id="aeo-home-style">
/* ---- how it works ---- */
.aeo-proc .aeo-plat-inner{padding-top:clamp(56px,7vw,104px)}
.aeo-steps{display:grid;grid-template-columns:repeat(3,1fr);border:1px dashed #e2e5ea;border-radius:18px;background:rgba(255,255,255,.65);backdrop-filter:blur(6px);overflow:hidden}
.aeo-step{padding:clamp(28px,3vw,44px) clamp(24px,2.6vw,38px);position:relative;opacity:0;transform:translateY(22px);transition:opacity .7s cubic-bezier(.33,1,.68,1),transform .7s cubic-bezier(.33,1,.68,1)}
.aeo-step.in{opacity:1;transform:none}
.aeo-step+.aeo-step{border-left:1px dashed #e2e5ea}
.aeo-step-num{font-family:"Inter Display",Inter,sans-serif;font-size:15px;font-weight:700;letter-spacing:.04em;background:linear-gradient(135deg,#266df0,#8c6ef5);-webkit-background-clip:text;background-clip:text;color:transparent;margin-bottom:16px;display:inline-block}
.aeo-step h3{font-family:"Inter Display",Inter,sans-serif;font-weight:600;font-size:clamp(19px,1.7vw,23px);letter-spacing:-.015em;color:#1c1d1f;margin:0 0 10px}
.aeo-step p{margin:0;font-size:15px;line-height:1.55;color:#6f7988;font-weight:500}
@media (max-width:860px){.aeo-steps{grid-template-columns:1fr}.aeo-step+.aeo-step{border-left:none;border-top:1px dashed #e2e5ea}}

/* ---- stats band (dark) ---- */
.aeo-stats{position:relative;background:#0e0f11;overflow:hidden;font-family:var(--font-inter),"Inter",system-ui,sans-serif}
.aeo-stats *{box-sizing:border-box}
.aeo-stats-bg{position:absolute;inset:0;pointer-events:none}
.aeo-stats-bg i{position:absolute;border-radius:50%;filter:blur(80px);display:block}
.aeo-stats-bg i:nth-child(1){width:46vw;height:46vw;left:-12%;top:-60%;background:radial-gradient(circle,rgba(38,109,240,.22),transparent 65%);animation:aeo-drift-a 28s ease-in-out infinite alternate}
.aeo-stats-bg i:nth-child(2){width:40vw;height:40vw;right:-10%;bottom:-70%;background:radial-gradient(circle,rgba(140,110,245,.18),transparent 65%);animation:aeo-drift-b 34s ease-in-out infinite alternate}
.aeo-stats-inner{position:relative;max-width:1200px;margin:0 auto;padding:clamp(56px,6vw,88px) 24px;display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
.aeo-stat{text-align:center;padding:0 12px;opacity:0;transform:translateY(18px);transition:opacity .7s cubic-bezier(.33,1,.68,1),transform .7s cubic-bezier(.33,1,.68,1)}
.aeo-stat.in{opacity:1;transform:none}
.aeo-stat+.aeo-stat{border-left:1px dashed rgba(255,255,255,.12)}
.aeo-stat-num{font-family:"Inter Display",Inter,sans-serif;font-size:clamp(40px,4.6vw,60px);font-weight:700;line-height:1;letter-spacing:-.02em;background:linear-gradient(180deg,#fff 40%,#7fa7f5);-webkit-background-clip:text;background-clip:text;color:transparent;font-variant-numeric:tabular-nums}
.aeo-stat-label{margin-top:12px;font-size:14.5px;line-height:1.45;color:#9aa2af;font-weight:500}
@media (max-width:860px){.aeo-stats-inner{grid-template-columns:1fr;gap:36px}.aeo-stat+.aeo-stat{border-left:none;border-top:1px dashed rgba(255,255,255,.12);padding-top:32px}}
@media (prefers-reduced-motion: reduce){.aeo-step,.aeo-stat{opacity:1;transform:none;transition:none}}
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
  function hideSections(){
    var secs=document.querySelectorAll("main section");
    for(var i=0;i<secs.length;i++){
      var s=secs[i];
      if(s.id&&s.id.indexOf("aeo")===0)continue;
      if(s.getAttribute("data-aeo-hidden"))continue;
      var t=s.textContent||"";
      for(var j=0;j<HIDE.length;j++){
        if(t.indexOf(HIDE[j])!==-1){s.style.display="none";s.setAttribute("data-aeo-hidden","1");break;}
      }
    }
  }
  function countTo(node,to,dur,dec,suffix){
    var t0=null;
    function step(ts){
      if(t0==null)t0=ts;
      var p=Math.min(1,(ts-t0)/dur),e=1-Math.pow(1-p,3),v=to*e;
      node.textContent=(dec?v.toFixed(dec):Math.round(v))+suffix;
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function wire(sec){
    var steps=sec.parentNode.querySelectorAll(".aeo-step");
    var stats=document.querySelectorAll("#aeo-stats .aeo-stat");
    function showStat(st){
      st.classList.add("in");
      var n=st.querySelector(".aeo-stat-num");
      if(n&&!n.getAttribute("data-done")){
        n.setAttribute("data-done","1");
        var suf=n.getAttribute("data-suf");
        suf=suf==null?"":suf;
        countTo(n,parseFloat(n.getAttribute("data-v")),1300,parseInt(n.getAttribute("data-dec")||"0",10),suf);
      }
    }
    if(reduce||!("IntersectionObserver" in window)){
      steps.forEach(function(s){s.classList.add("in");});
      stats.forEach(showStat);
      return;
    }
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(!e.isIntersecting)return;
        var el=e.target;
        io.unobserve(el);
        var delay=(el.getAttribute("data-i")||0)*130;
        setTimeout(function(){el.classList.contains("aeo-stat")?showStat(el):el.classList.add("in");},delay);
      });
    },{threshold:.25});
    steps.forEach(function(s,i){s.setAttribute("data-i",i);io.observe(s);});
    stats.forEach(function(s,i){s.setAttribute("data-i",i);io.observe(s);});
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
