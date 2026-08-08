<style id="aeo-home-style">
/* ---- how it works — scroll-choreographed process ---- */
.aeo-proc{overflow-x:clip;background:transparent}
.aeo-proc .aeo-plat-bg{display:none}
.aeo-proc .aeo-plat-inner{display:none}
/* Pull this section into the stack's sticky-exit distance (set by
   sizeStackPin as --aeo-stack-exit-pull) so "From invisible…" arrives
   after a short pause instead of ~1 viewport of blank scroll. */
#aeo-process{
  margin-top:calc(-1 * var(--aeo-stack-exit-pull,0px));
  position:relative;
  z-index:1;
}
@media (prefers-reduced-motion:reduce){
  #aeo-process{margin-top:0}
}
/* stats band sits directly under the process scrub — tighten its top only */
#aeo-stats .aeo-stats-inner{padding-top:clamp(36px,4vw,64px)}

/* Compact sticky runway: enter → hold → exit, then next section.
   No oversized vh multiplier / dead white scroll. */
.aeo-proc-scrub{
  --aeo-proc-scrub:148svh;
  position:relative;
  height:calc(100svh + var(--aeo-proc-scrub));
}
.aeo-proc-pin{
  position:sticky;top:0;height:100svh;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  overflow:hidden;box-sizing:border-box;
  padding:clamp(8px,1.2vh,18px) 0 clamp(10px,1.6vh,20px);
  gap:clamp(10px,1.5vh,18px);
}
.aeo-proc-intro{
  --aeo-intro:0;
  position:relative;z-index:2;text-align:center;
  max-width:720px;margin:0 auto;padding:0 24px;
  flex:0 0 auto;
  opacity:var(--aeo-intro);
  transform:translate3d(0,calc((1 - var(--aeo-intro)) * 16px),0);
  will-change:opacity,transform;
}
.aeo-proc-intro .aeo-pill{margin-bottom:6px}
.aeo-proc-intro .aeo-h2{margin:0;font-size:clamp(22px,2.6vw,34px)}
.aeo-proc-intro .aeo-lead{margin:8px auto 0;max-width:46ch;font-size:clamp(14px,1.1vw,16px)}

.aeo-proc-stage{
  position:relative;z-index:1;width:100%;max-width:1440px;margin:0 auto;
  padding:0 18px;box-sizing:border-box;flex:0 1 auto;
}

/* three vertical graphic panels — vertical adaptation of the reference cards */
.aeo-steps{
  display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
  gap:clamp(16px,1.6vw,24px);align-items:stretch;
}
.aeo-step{
  --p:0;--e:0;
  --aeo-orb-size:clamp(168px,40%,206px);
  --aeo-base:#1c2a16;
  --aeo-glow:rgba(140,245,160,.26);
  --aeo-ink-hi:#d2f56a;
  --aeo-ink-mid:rgba(210,245,120,.94);
  --aeo-ink-lo:rgba(214,232,168,.86);
  --aeo-pill:rgba(198,240,110,.72);
  --aeo-orb-a:#d4ffe4;
  --aeo-orb-b:#6cf1ac;
  --aeo-orb-c:#e0f85a;
  --aeo-num:#1c2a16;
  position:relative;
  display:flex;flex-direction:column;
  min-height:clamp(460px,54vh,540px);
  max-height:min(540px,calc(100svh - 144px));
  border-radius:26px;
  background:
    radial-gradient(130% 95% at 96% 0%,var(--aeo-glow),transparent 55%),
    radial-gradient(90% 70% at 8% 100%,rgba(255,255,255,.045),transparent 58%),
    linear-gradient(180deg,color-mix(in srgb,var(--aeo-base) 86%,#fff 14%),var(--aeo-base) 46%,var(--aeo-base));
  border:1px solid rgba(255,255,255,.06);
  box-shadow:none;
  overflow:hidden;isolation:isolate;
  transform:translate3d(calc((1 - var(--p)) * -110vw + var(--e) * 110vw),0,0);
  will-change:transform;
}
/* Card 1 — sampled from green/lime reference */
.aeo-step--lime{
  --aeo-base:#1f3018;
  --aeo-glow:rgba(150,250,170,.32);
  --aeo-ink-hi:#d8f86e;
  --aeo-ink-mid:rgba(214,248,128,.96);
  --aeo-ink-lo:rgba(222,238,178,.9);
  --aeo-pill:rgba(210,245,120,.78);
  --aeo-orb-a:#e2fff0;
  --aeo-orb-b:#7af5b4;
  --aeo-orb-c:#e8ff5c;
  --aeo-num:#1f3018;
}
/* Card 2 — sampled from purple/lilac reference */
.aeo-step--violet{
  --aeo-base:#351f45;
  --aeo-glow:rgba(245,175,245,.34);
  --aeo-ink-hi:#f0c8ff;
  --aeo-ink-mid:rgba(230,184,255,.96);
  --aeo-ink-lo:rgba(228,204,242,.9);
  --aeo-pill:rgba(224,176,255,.78);
  --aeo-orb-a:#ffd8f6;
  --aeo-orb-b:#f4b0f0;
  --aeo-orb-c:#e0a8ff;
  --aeo-num:#351f45;
}
/* Card 3 — sampled from blue/cyan reference */
.aeo-step--cyan{
  --aeo-base:#0d3358;
  --aeo-glow:rgba(50,248,255,.3);
  --aeo-ink-hi:#a6dcff;
  --aeo-ink-mid:rgba(140,204,255,.96);
  --aeo-ink-lo:rgba(176,214,242,.9);
  --aeo-pill:rgba(130,198,255,.78);
  --aeo-orb-a:#d4fbff;
  --aeo-orb-b:#2af7f8;
  --aeo-orb-c:#8accff;
  --aeo-num:#0d3358;
}

/* luminous number orb — top-right focal object (number replaces the symbol) */
.aeo-step-orb{
  position:absolute;z-index:1;
  top:clamp(20px,2.4vw,30px);right:clamp(18px,2vw,28px);
  width:var(--aeo-orb-size);
  aspect-ratio:1 / 1;
  height:auto;
  border-radius:50%;
  display:grid;place-items:center;
  background:
    radial-gradient(125% 100% at 30% 18%,rgba(255,255,255,.62),transparent 42%),
    radial-gradient(95% 95% at 72% 80%,var(--aeo-orb-c),transparent 60%),
    linear-gradient(150deg,var(--aeo-orb-a) 0%,var(--aeo-orb-b) 46%,var(--aeo-orb-c) 100%);
  box-shadow:none;
  pointer-events:none;user-select:none;
}
.aeo-step-orb span{
  display:flex;align-items:center;justify-content:center;
  width:100%;height:100%;
  font-family:"Inter Display",Inter,sans-serif;
  font-size:clamp(84px,54%,112px);font-weight:700;line-height:1;
  letter-spacing:0;color:var(--aeo-num);
  font-variant-numeric:tabular-nums lining-nums;
  text-align:center;
  margin:0;padding:0;
}

.aeo-step-body{
  position:relative;z-index:2;
  display:flex;flex-direction:column;justify-content:space-between;flex:1;
  padding:clamp(30px,3.2vw,40px) clamp(26px,2.6vw,36px) clamp(30px,3vw,40px);
  box-sizing:border-box;
  min-height:0;
  gap:clamp(18px,2.4vh,28px);
}
/* Title sits in a reserved top zone that clears the orb; tags/copy are full-width below */
.aeo-step-upper{position:relative;z-index:2;flex:0 0 auto}
.aeo-step-top{
  position:relative;z-index:2;flex:0 0 auto;
  min-height:calc(var(--aeo-orb-size) + 4px);
  padding-right:calc(var(--aeo-orb-size) + 32px);
  box-sizing:border-box;
}
.aeo-step h3{
  font-family:"Inter Display",Inter,sans-serif;font-weight:600;
  font-size:clamp(30px,2.7vw,38px);letter-spacing:-.035em;line-height:1.08;
  color:var(--aeo-ink-hi);margin:0;
  text-wrap:balance;
  max-width:100%;
  overflow-wrap:normal;word-break:normal;
  hyphens:manual;
}
.aeo-step-tags{
  display:flex;flex-wrap:wrap;gap:9px;
  margin:clamp(16px,2.2vh,24px) 0 0;
}
.aeo-step-tags span{
  display:inline-flex;align-items:center;
  height:32px;padding:0 14px;
  border:1.5px solid var(--aeo-pill);border-radius:999px;
  font-size:13px;font-weight:600;letter-spacing:.01em;
  color:var(--aeo-ink-mid);white-space:nowrap;
  background:rgba(255,255,255,.04);
}
/* Lower band — spaced from tags via body justify/gap, not a crammed footer */
.aeo-step-copy{
  position:relative;z-index:2;
  margin-top:0;
  max-width:34ch;
}
.aeo-step-copy p{
  margin:0;
  font-size:clamp(17px,1.45vw,19.5px);line-height:1.55;letter-spacing:-.006em;
  color:var(--aeo-ink-lo);font-weight:500;
}

@media (max-width:1100px){
  .aeo-step{--aeo-orb-size:140px;min-height:clamp(470px,60vh,600px)}
  .aeo-step-orb span{font-size:76px}
  .aeo-step h3{font-size:27px}
}
@media (max-width:860px){
  .aeo-proc-scrub{height:auto}
  .aeo-proc-pin{
    position:relative;height:auto;overflow:visible;
    padding:8px 0 28px;justify-content:flex-start;gap:20px;
  }
  .aeo-proc-intro{padding:0 16px}
  .aeo-proc-stage{padding:0 16px}
  .aeo-steps{grid-template-columns:1fr;gap:16px}
  .aeo-step{
    --aeo-orb-size:128px;
    min-height:440px;max-height:none;
    transform:translate3d(calc((1 - var(--p)) * -72vw),0,0);
  }
  .aeo-step-orb{top:20px;right:18px}
  .aeo-step-orb span{font-size:70px}
  .aeo-step-body{padding:28px 22px 28px}
  .aeo-step h3{font-size:25px;max-width:14ch}
  .aeo-step-copy{margin-top:22px;max-width:42ch}
}
@media (prefers-reduced-motion:reduce){
  .aeo-proc-scrub{height:auto}
  .aeo-proc-pin{position:static;height:auto;overflow:visible;padding:24px 0 40px}
  .aeo-proc-intro{opacity:1;transform:none}
  .aeo-step{transform:none;--p:1;--e:0}
}

/* ---- stats band (dark) ---- */
.aeo-stats{position:relative;background:linear-gradient(180deg,#101215,var(--aeo-night) 55%,#0c0d0f);overflow:hidden;font-family:var(--font-inter),"Inter",system-ui,sans-serif}
.aeo-stats *{box-sizing:border-box}
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
  <div class="aeo-plat-bg"></div>
  <div class="aeo-plat-inner" aria-hidden="true"></div>
  <div class="aeo-proc-scrub" id="aeo-proc-scrub">
    <div class="aeo-proc-pin">
      <div class="aeo-proc-intro">
        <span class="aeo-pill aeo-pill-center">How it works</span>
        <h2 class="aeo-h2">From invisible to recommended in 90 days</h2>
        <p class="aeo-lead">A simple monthly system. No jargon, no dashboards to learn &mdash; just your name showing up more often.</p>
      </div>
      <div class="aeo-proc-stage">
        <div class="aeo-steps">
          <article class="aeo-step aeo-step--lime">
            <div class="aeo-step-orb" aria-hidden="true"><span>1</span></div>
            <div class="aeo-step-body">
              <div class="aeo-step-upper">
                <div class="aeo-step-top"><h3>Audit your AI visibility</h3></div>
                <div class="aeo-step-tags" aria-hidden="true">
                  <span>AI mentions</span><span>Competitors</span><span>Visibility</span>
                </div>
              </div>
              <div class="aeo-step-copy">
                <p>Find out how often AI mentions your business and where competitors are winning.</p>
              </div>
            </div>
          </article>
          <article class="aeo-step aeo-step--violet">
            <div class="aeo-step-orb" aria-hidden="true"><span>2</span></div>
            <div class="aeo-step-body">
              <div class="aeo-step-upper">
                <div class="aeo-step-top"><h3>Improve what AI reads</h3></div>
                <div class="aeo-step-tags" aria-hidden="true">
                  <span>Site structure</span><span>Content</span><span>Authority</span>
                </div>
              </div>
              <div class="aeo-step-copy">
                <p>Strengthen the site structure, content and authority signals that shape AI recommendations.</p>
              </div>
            </div>
          </article>
          <article class="aeo-step aeo-step--cyan">
            <div class="aeo-step-orb" aria-hidden="true"><span>3</span></div>
            <div class="aeo-step-body">
              <div class="aeo-step-upper">
                <div class="aeo-step-top"><h3>Get recommended</h3></div>
                <div class="aeo-step-tags" aria-hidden="true">
                  <span>Tracking</span><span>Mentions</span><span>Answers</span>
                </div>
              </div>
              <div class="aeo-step-copy">
                <p>Track growing visibility as your business appears more often in AI-generated answers.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
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
      if(s.querySelector('[id^="aeo-"],.aeo-hero,.aeo-window'))continue;
      var t=s.textContent||"";
      for(var j=0;j<HIDE.length;j++){
        if(t.indexOf(HIDE[j])!==-1){s.style.display="none";s.setAttribute("data-aeo-hidden","1");break;}
      }
    }
    hideSpacers();
    dressFinalCta();
  }
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
    var scrub=sec.querySelector(".aeo-proc-scrub")||sec;
    var steps=[].slice.call(sec.querySelectorAll(".aeo-step"));
    var stats=document.querySelectorAll("#aeo-stats .aeo-stat");
    function easeOut(t){
      if(t<=0)return 0;
      if(t>=1)return 1;
      var u=1-t;
      return 1-u*u*u*u*(1+t*1.15);
    }
    function narrow(){
      try{return window.matchMedia("(max-width:860px)").matches;}catch(e){return false;}
    }
    function seg(g,a,b){
      var p=(g-a)/(b-a);
      return easeOut(p<0?0:(p>1?1:p));
    }
    function wireStepsScroll(){
      var intro=sec.querySelector(".aeo-proc-intro");
      if(reduce||!window.__aeoScroll){
        steps.forEach(function(s){s.style.setProperty("--p","1");s.style.setProperty("--e","0");});
        if(intro)intro.style.setProperty("--aeo-intro","1");
        return;
      }
      var box={top:0,h:0,vh:0,y:0};
      window.__aeoScroll(function(y,vh){
        var r=scrub.getBoundingClientRect();
        box.top=r.top+y;box.h=r.height;box.vh=vh;box.y=y;
      },function(){
        var vh=box.vh;if(!vh)return;
        var i,g;

        if(narrow()){
          var start=box.top-vh*0.75;
          var end=box.top+box.h-vh*0.4;
          g=(box.y-start)/(end-start);
          g=g<0?0:(g>1?1:g);
          if(intro)intro.style.setProperty("--aeo-intro",seg(g,0.00,0.18).toFixed(4));
          var enter=[[0.04,0.32],[0.18,0.50],[0.34,0.68]];
          for(i=0;i<steps.length;i++){
            var w=enter[i]||[0,1];
            steps[i].style.setProperty("--p",seg(g,w[0],w[1]).toFixed(4));
            steps[i].style.setProperty("--e","0");
          }
          return;
        }

        var pinEl=scrub.querySelector(".aeo-proc-pin");
        var pinH=Math.min(vh,pinEl?pinEl.getBoundingClientRect().height:vh);
        var travel=box.h-pinH;
        if(travel<=0)return;
        /* Begin only once this section's scrub reaches the viewport —
           not while #aeo-platform's Authority card still owns the screen.
           Tiny lead keeps the handoff immediate without dual-sticky overlap. */
        var lead=vh*0.04;
        var start=box.top-lead;
        var end=box.top+travel;
        g=(box.y-start)/(end-start);
        g=g<0?0:(g>1?1:g);

        /* Before this section's runway: keep cards parked off-screen and
           intro hidden so reverse scroll can't leave a stale entered state. */
        if(g<=0){
          if(intro)intro.style.setProperty("--aeo-intro","0");
          for(i=0;i<steps.length;i++){
            steps[i].style.setProperty("--p","0");
            steps[i].style.setProperty("--e","0");
          }
          return;
        }

        /* Coordinated entrance + reversible exit:
           0.00–0.14  intro (pill/heading/lead) fades in
           0.04–0.18  card 1 left → center
           0.16–0.30  card 2 left → center
           0.28–0.42  card 3 left → center
           0.42–0.55  hold
           0.55–0.70  card 3 center → right
           0.70–0.85  card 2 center → right
           0.85–1.00  card 1 center → right
           Intro fades out with the late exit so reverse scroll feels natural. */
        if(intro){
          var introIn=seg(g,0.00,0.14);
          var introOut=1-seg(g,0.88,1.00);
          intro.style.setProperty("--aeo-intro",Math.min(introIn,introOut).toFixed(4));
        }
        var enterWindows=[[0.04,0.18],[0.16,0.30],[0.28,0.42]];
        var exitWindows=[[0.85,1.00],[0.70,0.85],[0.55,0.70]]; /* card1, card2, card3 */
        for(i=0;i<steps.length;i++){
          var ew=enterWindows[i]||[0,1];
          var xw=exitWindows[i]||[1,1];
          steps[i].style.setProperty("--p",seg(g,ew[0],ew[1]).toFixed(4));
          steps[i].style.setProperty("--e",seg(g,xw[0],xw[1]).toFixed(4));
        }
      });
    }
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
    wireStepsScroll();
    if(reduce||!("IntersectionObserver" in window)){
      stats.forEach(function(s){startStat(s,0);});
      return;
    }
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
