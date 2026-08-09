<style id="aeo-home-style">
/* ---- how it works: pixel materialisation entrance (scroll = trigger only) ---- */
.aeo-proc{overflow-x:clip;background:transparent}
.aeo-proc .aeo-plat-bg{display:none}
.aeo-proc .aeo-plat-inner{display:none}
/* The stack's sticky-exit pull (--aeo-stack-exit-pull, set by
   sizeStackPin) is applied to #aeo-seo now, since that section is the
   stack's immediate next sibling — see seo_section.frag. #aeo-process
   just needs its own normal positioning here. */
#aeo-process{
  position:relative;
  z-index:1;
}
/* stats band sits directly under the process section */
#aeo-stats .aeo-stats-inner{padding-top:clamp(36px,4vw,64px)}

.aeo-proc-scrub{position:relative;height:auto}
.aeo-proc-pin{
  position:relative;height:auto;
  display:flex;flex-direction:column;align-items:center;justify-content:flex-start;
  overflow:visible;box-sizing:border-box;
  padding:clamp(28px,4vh,56px) 0 clamp(36px,5vh,72px);
  gap:clamp(18px,2.4vh,28px);
}
.aeo-proc-intro{
  position:relative;z-index:2;text-align:center;
  max-width:720px;margin:0 auto;padding:0 24px;
  flex:0 0 auto;
  opacity:0;
  transform:translate3d(0,6px,0);
  transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1);
  will-change:opacity,transform;
}
.aeo-proc-intro.is-in{opacity:1;transform:none}
.aeo-proc-intro .aeo-pill{margin-bottom:6px}
.aeo-proc-intro .aeo-h2{margin:0;font-size:clamp(22px,2.6vw,34px)}
.aeo-proc-intro .aeo-lead{margin:8px auto 0;max-width:46ch;font-size:clamp(14px,1.1vw,16px)}

.aeo-proc-stage{
  position:relative;z-index:1;width:100%;max-width:1440px;margin:0 auto;
  padding:0 18px;box-sizing:border-box;flex:0 1 auto;
}

/* three equal-width cards — final geometry fixed; reveal is clip-only */
.aeo-steps{
  display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
  gap:clamp(16px,1.6vw,24px);align-items:stretch;
}
.aeo-step{
  --aeo-orb-size:clamp(132px,12vw,168px);
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
  opacity:1;
  transform:none;
}
/* Pending = layout reserved, nothing painted (no ghost outlines / borders). */
.aeo-step.aeo-px-pending{
  opacity:0;visibility:hidden;
  border-color:transparent;
  box-shadow:none;
}
/* Live: mask defines stair-stepped silhouette — disable CSS radius so
   hard background-grid squares form the corner, not a smooth clip. */
.aeo-step.aeo-px-live{
  opacity:1;visibility:visible;transform:none;
  border-radius:0;
  border-color:rgba(255,255,255,calc(.06 * var(--aeo-px-chrome,0)));
  box-shadow:none;
  /* Hard-edged alpha apertures only — never feather mask edges. */
  -webkit-mask-mode:alpha;mask-mode:alpha;
}
.aeo-step.aeo-px-done,
.aeo-step.is-in{
  opacity:1;visibility:visible;transform:none;
  border-radius:26px;
  border-color:rgba(255,255,255,.06);
  -webkit-mask-image:none!important;mask-image:none!important;
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

/* Number badge: RIGHT column of .aeo-step-top. Never overlaps the title. */
.aeo-step-orb{
  position:relative;z-index:1;
  grid-column:2;grid-row:1;
  width:var(--aeo-orb-size);
  aspect-ratio:1 / 1;
  height:auto;
  justify-self:end;align-self:start;
  flex:none;
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
  font-size:clamp(72px,52%,104px);font-weight:700;line-height:1;
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
.aeo-step-upper{position:relative;z-index:2;flex:0 0 auto}
/* Two protected zones: title (left) | number badge (right). Same rules on every card. */
.aeo-step-top{
  display:grid;
  grid-template-columns:minmax(0,1fr) var(--aeo-orb-size);
  column-gap:clamp(14px,1.6vw,22px);
  align-items:start;
  box-sizing:border-box;
  min-width:0;
}
.aeo-step h3{
  grid-column:1;grid-row:1;min-width:0;
  font-family:"Inter Display",Inter,sans-serif;font-weight:600;
  font-size:clamp(28px,2.55vw,38px);letter-spacing:-.035em;line-height:1.08;
  color:var(--aeo-ink-hi);margin:0;
  text-wrap:balance;
  max-width:100%;
  overflow-wrap:break-word;word-break:normal;
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
  .aeo-step{--aeo-orb-size:132px;min-height:clamp(470px,60vh,600px)}
  .aeo-step-orb span{font-size:70px}
  .aeo-step h3{font-size:26px}
}
@media (max-width:860px){
  .aeo-proc-pin{padding:8px 0 28px;gap:20px}
  .aeo-proc-intro{padding:0 16px}
  .aeo-proc-stage{padding:0 16px}
  .aeo-steps{grid-template-columns:1fr;gap:16px}
  .aeo-step{
    --aeo-orb-size:120px;
    min-height:440px;max-height:none;
  }
  .aeo-step-orb span{font-size:64px}
  .aeo-step-body{padding:28px 22px 28px}
  .aeo-step h3{font-size:25px}
  .aeo-step-copy{margin-top:22px;max-width:42ch}
}
@media (prefers-reduced-motion:reduce){
  .aeo-proc-intro,.aeo-step{transition:none!important;opacity:1;visibility:visible;transform:none;border-radius:26px}
  .aeo-proc-intro.is-in,.aeo-step.is-in,.aeo-step.aeo-px-pending,.aeo-step.aeo-px-live,.aeo-step.aeo-px-done{
    opacity:1;visibility:visible;transform:none;border-radius:26px
  }
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
  .aeo-step,.aeo-stat{opacity:1;visibility:visible;transform:none;transition:none}
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
        <p class="aeo-lead">A simple monthly system. No jargon, no dashboards to learn. Just your name showing up more often.</p>
      </div>
      <div class="aeo-proc-stage">
        <div class="aeo-steps">
          <article class="aeo-step aeo-step--lime">
            <div class="aeo-step-body">
              <div class="aeo-step-upper">
                <div class="aeo-step-top">
                  <h3>Audit your AI visibility</h3>
                  <div class="aeo-step-orb" aria-hidden="true"><span>1</span></div>
                </div>
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
            <div class="aeo-step-body">
              <div class="aeo-step-upper">
                <div class="aeo-step-top">
                  <h3>Improve what AI reads</h3>
                  <div class="aeo-step-orb" aria-hidden="true"><span>2</span></div>
                </div>
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
            <div class="aeo-step-body">
              <div class="aeo-step-upper">
                <div class="aeo-step-top">
                  <h3>Build your AI authority</h3>
                  <div class="aeo-step-orb" aria-hidden="true"><span>3</span></div>
                </div>
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
  /*
   * Background-grid resolve: reveal the REAL card through the SAME lattice
   * as #aeo-sqfield (size 4px, pitch 8.5/9.2/10, centred). Sharp squares,
   * gaps preserved until late expansion, then seamless handoff to DOM.
   */
  function aeoHash2(x,y,seed){
    var n=Math.imul(x+Math.imul(seed,374761393),668265263)^Math.imul(y+Math.imul(seed,1274126177),374761393);
    n=Math.imul(n^(n>>>13),1274126177);
    return ((n>>>0))/4294967296;
  }
  function aeoValueNoise(x,y,seed){
    var x0=Math.floor(x),y0=Math.floor(y);
    var fx=x-x0,fy=y-y0;
    var ux=fx*fx*(3-2*fx),uy=fy*fy*(3-2*fy);
    var a=aeoHash2(x0,y0,seed),b=aeoHash2(x0+1,y0,seed);
    var c=aeoHash2(x0,y0+1,seed),d=aeoHash2(x0+1,y0+1,seed);
    return a+(b-a)*ux+(c-a)*uy+(a-b-c+d)*ux*uy;
  }
  /* 70% fine random + 30% tiny local noise — NO large low-freq blobs. */
  function aeoFineThresh(gi,gj,seed){
    return 0.72*aeoHash2(gi,gj,seed)+0.28*aeoValueNoise(gi/2.2,gj/2.2,seed+11);
  }
  function aeoSqGrid(){
    var api=window.__aeoSqField;
    if(api&&typeof api.get==="function"){
      var g=api.get();
      if(g&&g.ready)return g;
    }
    /* Fallback if field has not booted yet — same CFG numbers. */
    var vw=window.innerWidth||1024;
    var spacing=vw<768?10:vw<1024?9.2:8.5;
    var cols=Math.ceil(vw/spacing)+2,rows=Math.ceil((window.innerHeight||800)/spacing)+2;
    return {
      size:4,
      spacing:spacing,
      gap:spacing-4,
      offX:(vw-(cols-1)*spacing)/2,
      offY:((window.innerHeight||800)-(rows-1)*spacing)/2,
      cols:cols,
      rows:rows,
      ready:true
    };
  }
  function aeoInRoundRect(x,y,w,h,r){
    if(x<0||y<0||x>w||y>h)return false;
    if(x>=r&&x<=w-r)return true;
    if(y>=r&&y<=h-r)return true;
    var cx=x<r?r:w-r,cy=y<r?r:h-r;
    var dx=x-cx,dy=y-cy;
    return dx*dx+dy*dy<=r*r;
  }
  /* Density over pixel phase t∈[0,1]. Absolute times assume START=450, DUR=3100. */
  function aeoDensity(t){
    if(t<=0)return 0;
    if(t>=1)return 1;
    /* Key targets (progress → density): match ~3.5s timeline. */
    var keys=[
      [0.00,0.00],[0.016,0.015],[0.145,0.08],[0.274,0.20],
      [0.403,0.38],[0.532,0.58],[0.661,0.75],[0.774,0.88],
      [0.871,0.96],[0.952,1.00],[1.00,1.00]
    ];
    var i;
    for(i=1;i<keys.length;i++){
      if(t<=keys[i][0]){
        var t0=keys[i-1][0],t1=keys[i][0];
        var d0=keys[i-1][1],d1=keys[i][1];
        var u=(t-t0)/Math.max(1e-6,t1-t0);
        u=u*u*(3-2*u);
        return d0+(d1-d0)*u;
      }
    }
    return 1;
  }
  /* Keep exact background square size until late; close gaps ~3000–3550ms. */
  function aeoDrawSize(t,size0,pitch){
    if(t<=0.82)return size0;
    var u=(t-0.82)/0.18;
    u=u*u*(3-2*u);
    return size0+(pitch+1.25-size0)*u; /* overlap kills hairline seams on DPR snap */
  }
  function aeoPixelReveal(el,seed){
    var canvas=null,ctx=null,cells=null,raf=0,playing=false,done=false,meta=null;
    var cssW=0,cssH=0,dpr=1,radius=26;
    function cancelRaf(){if(raf){cancelAnimationFrame(raf);raf=0;}}
    function clearMask(){
      el.style.webkitMaskImage="";
      el.style.maskImage="";
      el.style.webkitMaskSize="";
      el.style.maskSize="";
      el.style.webkitMaskRepeat="";
      el.style.maskRepeat="";
      el.style.removeProperty("--aeo-px-chrome");
      canvas=null;ctx=null;cells=null;
    }
    function finish(){
      cancelRaf();
      playing=false;done=true;
      clearMask();
      el.classList.remove("aeo-px-live","aeo-px-pending");
      el.classList.add("is-in","aeo-px-done");
    }
    function collectCells(){
      var grid=aeoSqGrid();
      var box=el.getBoundingClientRect();
      cssW=Math.max(1,box.width);
      cssH=Math.max(1,box.height);
      radius=26;
      var br=getComputedStyle(el).borderRadius;
      /* During live we force radius 0; read from done style via constant. */
      dpr=Math.min(window.devicePixelRatio||1,2);
      canvas=document.createElement("canvas");
      canvas.width=Math.max(1,Math.round(cssW*dpr));
      canvas.height=Math.max(1,Math.round(cssH*dpr));
      ctx=canvas.getContext("2d",{alpha:true,willReadFrequently:false});
      ctx.imageSmoothingEnabled=false;
      cells=[];
      var gi,gj,cx,cy,lx,ly;
      /* Infinite lattice with the SAME origin/pitch as #aeo-sqfield —
         do not clamp to the viewport-only cols/rows (cards can straddle). */
      var i0=Math.floor((box.left-grid.offX)/grid.spacing)-1;
      var i1=Math.ceil((box.right-grid.offX)/grid.spacing)+1;
      var j0=Math.floor((box.top-grid.offY)/grid.spacing)-1;
      var j1=Math.ceil((box.bottom-grid.offY)/grid.spacing)+1;
      for(gj=j0;gj<=j1;gj++){
        for(gi=i0;gi<=i1;gi++){
          cx=grid.offX+gi*grid.spacing;
          cy=grid.offY+gj*grid.spacing;
          lx=cx-box.left;
          ly=cy-box.top;
          if(!aeoInRoundRect(lx,ly,cssW,cssH,radius))continue;
          cells.push({
            gi:gi,gj:gj,
            lx:lx,ly:ly,
            thresh:aeoFineThresh(gi,gj,seed)
          });
        }
      }
      meta={
        count:cells.length,
        size:grid.size,
        spacing:grid.spacing,
        gap:grid.gap,
        offX:grid.offX,
        offY:grid.offY
      };
      el.style.webkitMaskSize="100% 100%";
      el.style.maskSize="100% 100%";
      el.style.webkitMaskRepeat="no-repeat";
      el.style.maskRepeat="no-repeat";
      el.style.setProperty("--aeo-px-chrome","0");
      return grid;
    }
    function paint(t){
      if(!ctx||!cells)return;
      var grid=meta;
      var dens=aeoDensity(t);
      var draw=aeoDrawSize(t,grid.size,grid.spacing);
      /* ~100ms local fade at DUR=3100 → soft≈0.032 of progress. */
      var soft=0.035;
      var cw=canvas.width,ch=canvas.height;
      ctx.setTransform(1,0,0,1,0,0);
      ctx.clearRect(0,0,cw,ch);
      ctx.imageSmoothingEnabled=false;
      if(ctx.imageSmoothingQuality)ctx.imageSmoothingQuality="low";
      ctx.fillStyle="#fff";
      var i,c,o,a,sx,sy,sw,cxDev,cyDev;
      sw=Math.max(1,Math.round(draw*dpr));
      for(i=0;i<cells.length;i++){
        c=cells[i];
        o=(dens-c.thresh)/soft;
        if(o<=0)continue;
        if(o>=1)a=1;
        else a=o*o*(3-2*o);
        /* Integer device-pixel squares centred on the shared lattice. */
        cxDev=Math.round(c.lx*dpr);
        cyDev=Math.round(c.ly*dpr);
        sx=cxDev-Math.floor(sw/2);
        sy=cyDev-Math.floor(sw/2);
        ctx.globalAlpha=a;
        ctx.fillRect(sx,sy,sw,sw);
      }
      ctx.globalAlpha=1;
      var url=canvas.toDataURL("image/png");
      el.style.webkitMaskImage="url("+url+")";
      el.style.maskImage="url("+url+")";
      var chrome=0;
      if(t>0.75)chrome=Math.min(1,(t-0.75)/0.20);
      el.style.setProperty("--aeo-px-chrome",chrome.toFixed(3));
    }
    function setPending(){
      cancelRaf();
      playing=false;done=false;
      clearMask();
      el.classList.remove("is-in","aeo-px-live","aeo-px-done");
      el.classList.add("aeo-px-pending");
    }
    function showFinal(){
      cancelRaf();
      playing=false;done=true;
      clearMask();
      el.classList.remove("aeo-px-pending","aeo-px-live");
      el.classList.add("is-in","aeo-px-done");
    }
    function play(cardOffset){
      cancelRaf();
      playing=true;done=false;
      el.classList.remove("aeo-px-pending","aeo-px-done","is-in");
      el.classList.add("aeo-px-live");
      collectCells();
      paint(0);
      var START=450+(cardOffset||0);
      var DUR=3100; /* ~450→3550ms pixel phase */
      var endAt=START+DUR+120;
      var t0=null;
      function frame(now){
        if(t0==null)t0=now;
        var elapsed=now-t0;
        var local=elapsed-START;
        var t=local<=0?0:Math.min(1,local/DUR);
        /* Re-sample lattice against current card rect so viewport-fixed
           background squares stay aligned if layout shifts slightly. */
        if((elapsed|0)%3===0){
          var box=el.getBoundingClientRect();
          if(Math.abs(box.width-cssW)>0.5||Math.abs(box.height-cssH)>0.5){
            collectCells();
          }else{
            /* Refresh local coords from current viewport rect. */
            var g=aeoSqGrid(),i,c;
            for(i=0;i<cells.length;i++){
              c=cells[i];
              c.lx=g.offX+c.gi*g.spacing-box.left;
              c.ly=g.offY+c.gj*g.spacing-box.top;
            }
          }
        }
        paint(t);
        if(elapsed>=endAt){
          finish();
          return;
        }
        raf=requestAnimationFrame(frame);
      }
      raf=requestAnimationFrame(frame);
      return endAt;
    }
    return {
      setPending:setPending,
      showFinal:showFinal,
      play:play,
      isPlaying:function(){return playing;},
      isDone:function(){return done;},
      meta:function(){return meta;},
      /* Dev inspection helper — paint a frozen progress without timers. */
      debugAt:function(t){
        el.classList.remove("aeo-px-pending","aeo-px-done","is-in");
        el.classList.add("aeo-px-live");
        collectCells();
        paint(t);
        return meta;
      }
    };
  }
  function wire(sec){
    var steps=[].slice.call(sec.querySelectorAll(".aeo-step"));
    var intro=sec.querySelector(".aeo-proc-intro");
    var stage=sec.querySelector(".aeo-proc-stage")||sec;
    var triggerEl=intro||stage;
    var stats=document.querySelectorAll("#aeo-stats .aeo-stat");
    /* Time-based pixel entrance: scroll only TRIGGERS. Never scrubs. */
    var STATE_ARMED="armed-hidden";
    var STATE_ANIMATING="animating";
    var STATE_COMPLETED="completed";
    var state=STATE_ARMED;
    var lastY=window.pageYOffset||0,dir="down";
    var wasOutsideTrigger=true;
    var reveals=steps.map(function(el,i){return aeoPixelReveal(el,[101,227,383][i]||(i+1)*97);});
    /* Synchronised composition — tiny seed differences only. */
    var CARD_OFFSETS=[0,40,80];
    /* Expose for visual QA; removed from public API concerns. */
    window.__aeoProcDebug={reveals:reveals,at:function(t){return reveals.map(function(r){return r.debugAt(t);});}};

    function showIntroFinal(){
      if(!intro)return;
      intro.style.transition="none";
      intro.classList.add("is-in");
      void intro.offsetWidth;
      intro.style.transition="";
    }
    function hideIntro(){
      if(!intro)return;
      intro.style.transition="none";
      intro.classList.remove("is-in");
      void intro.offsetWidth;
      intro.style.transition="";
    }
    function showFinal(){
      state=STATE_COMPLETED;
      showIntroFinal();
      for(var i=0;i<reveals.length;i++)reveals[i].showFinal();
    }
    function resetToHidden(){
      /* Only called when section is fully offscreen above the user. */
      hideIntro();
      for(var i=0;i<reveals.length;i++)reveals[i].setPending();
      state=STATE_ARMED;
    }
    function playEntrance(){
      if(state!==STATE_ARMED)return;
      state=STATE_ANIMATING;
      if(intro){
        intro.style.transition="none";
        intro.classList.remove("is-in");
        void intro.offsetWidth;
        intro.style.transition="";
      }
      for(var i=0;i<reveals.length;i++)reveals[i].setPending();
      requestAnimationFrame(function(){
        requestAnimationFrame(function(){
          if(state!==STATE_ANIMATING)return;
          if(intro)intro.classList.add("is-in");
          var end=0;
          for(var j=0;j<reveals.length;j++){
            var e=reveals[j].play(CARD_OFFSETS[j]||0);
            if(e>end)end=e;
          }
          setTimeout(function(){
            if(state===STATE_ANIMATING)state=STATE_COMPLETED;
          },end+30);
        });
      });
    }
    function rearmIfAbove(){
      var r=sec.getBoundingClientRect();
      var vh=window.innerHeight||1;
      /* Re-arm only after the whole section is below the viewport (user above it). */
      if(r.top>vh){
        if(state!==STATE_ARMED)resetToHidden();
        wasOutsideTrigger=true;
      }
    }
    function onDirScroll(){
      var y=window.pageYOffset||0;
      if(Math.abs(y-lastY)>=3){
        dir=y>lastY?"down":"up";
        lastY=y;
      }
      rearmIfAbove();
    }
    function handleTriggerEnter(){
      if(!wasOutsideTrigger)return;
      wasOutsideTrigger=false;
      if(state===STATE_ANIMATING)return;
      /*
       * COMPLETE means we are mid-pass or entered from below — stay final.
       * ARMED means we re-armed only after leaving ABOVE — so this crossing
       * is always a genuine top-to-bottom entry (ignore sticky-scroll dir jitter).
       */
      if(state===STATE_COMPLETED)return;
      if(state===STATE_ARMED)playEntrance();
    }
    function checkTriggerThreshold(){
      var r=triggerEl.getBoundingClientRect();
      var vh=window.innerHeight||1;
      /* ~78% viewport — same discrete threshold as the IO rootMargin. */
      var nowAt=r.top<vh*0.78&&r.bottom>vh*0.1;
      if(nowAt)handleTriggerEnter();
      else wasOutsideTrigger=true;
    }
    function wireStepsEntrance(){
      if(reduce){showFinal();return;}
      /* Initial load: if already meaningfully visible, show final (no surprise clear). */
      var r0=sec.getBoundingClientRect();
      var vh0=window.innerHeight||1;
      if(r0.bottom<=0){
        /* Loaded past the section — keep completed for upward re-entry. */
        showFinal();
      }else if(r0.top<vh0*0.85&&r0.bottom>vh0*0.08){
        showFinal();
      }else{
        resetToHidden();
      }
      window.addEventListener("scroll",onDirScroll,{passive:true});
      /* Discrete threshold on scroll (never scrubs). Complements IO for reliability. */
      window.addEventListener("scroll",checkTriggerThreshold,{passive:true});
      onDirScroll();
      if("IntersectionObserver" in window){
        var io=new IntersectionObserver(function(entries){
          for(var i=0;i<entries.length;i++){
            var e=entries[i];
            if(e.isIntersecting)handleTriggerEnter();
            else wasOutsideTrigger=true;
          }
        },{threshold:0,rootMargin:"0px 0px -22% 0px"});
        io.observe(triggerEl);
      }
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
    wireStepsEntrance();
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
    var anchor=document.getElementById("aeo-seo")||plat;
    anchor.parentNode.insertBefore(frag,anchor.nextSibling);
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
