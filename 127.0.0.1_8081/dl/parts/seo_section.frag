<style id="aeo-seo-style">
/* ============================================================
   SEARCH FOUNDATIONS — homepage-only secondary service intro.
   Sits between #aeo-platform (stacked cards) and #aeo-process
   ("How it works"). Deliberately NOT position:sticky — a plain
   flow section with an intersection-triggered entrance, same
   family as #aeo-process, to avoid any sticky-range overlap.
   ============================================================ */
#aeo-seo{
  background:transparent!important;
  /* Relocated from #aeo-process (home_extra.frag): this pulls the
     section up into the stacked-cards' own sticky-exit runway so it
     arrives shortly after the stack releases, not after a dead
     extra viewport of scroll. #aeo-process no longer needs this
     since #aeo-seo is now the stack's immediate next sibling. */
  margin-top:calc(-1 * var(--aeo-stack-exit-pull,0px));
  position:relative;
  z-index:1;
}
#aeo-seo .aeo-plat-bg{display:none}
/* Slightly reduced bottom padding: #aeo-process supplies its own
   top padding right after this section, so the two shouldn't add
   in full — same handoff pattern #aeo-platform already uses. */
#aeo-seo .aeo-plat-inner{padding-bottom:clamp(28px,3.4vw,48px)}
@media (prefers-reduced-motion:reduce){
  #aeo-seo{margin-top:0}
}

.aeo-seo-card{
  position:relative;
  max-width:1180px;margin:0 auto;
  background:#fff;
  background-image:linear-gradient(180deg,#fff,#fbfcfe);
  border:1px solid rgba(28,29,31,.09);
  border-radius:var(--aeo-r-2xl);
  box-shadow:var(--aeo-sh-4);
  padding:clamp(28px,3.2vw,44px) clamp(24px,3vw,40px);
  overflow:hidden;
  box-sizing:border-box;
}
.aeo-seo-card *{box-sizing:border-box}
.aeo-seo-grid{
  display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);
  gap:clamp(28px,3.4vw,48px);align-items:start;
}
.aeo-seo-score,.aeo-seo-feed{min-width:0}
/* .aeo-vis-area's class rule sets fill:url(#aeoVisFill) (platform.frag's
   own gradient id) which would win over the inline fill attribute below;
   point this instance at its own gradient instead. */
#aeo-seo-area{fill:url(#aeoSeoFill)}
/* 3 mini-stats instead of the 4-engine grid this class is normally used for */
#aeo-seo-mini-stats{grid-template-columns:repeat(3,1fr)}
.aeo-seo-feed-head{font-size:12.5px;font-weight:600;letter-spacing:.01em;color:var(--aeo-ink-3);margin:0 0 12px}
/* neutral icon slot -> green "done" badge, geometry borrowed from .aeo-act-fav */
.aeo-seo-check{background:linear-gradient(180deg,#22c55e,#16a34a)!important;border-color:transparent!important}
.aeo-seo-check svg{color:#fff}
.aeo-seo-feed .aeo-act-dom{font-weight:600;white-space:normal;line-height:1.35}

.aeo-seo-keywords{margin-top:clamp(22px,2.6vw,30px);padding-top:clamp(18px,2vw,24px);border-top:1px solid var(--aeo-line)}
.aeo-seo-kw-row{
  display:flex;align-items:center;justify-content:space-between;gap:16px;
  padding:10px 2px;
  opacity:0;transform:translateY(6px);
  transition:opacity .4s var(--aeo-e-out),transform .4s var(--aeo-e-out);
}
.aeo-seo-kw-row.in{opacity:1;transform:none}
.aeo-seo-kw-row+.aeo-seo-kw-row{border-top:1px dashed var(--aeo-line-dash)}
.aeo-seo-kw-term{font-size:13.5px;font-weight:600;color:var(--aeo-ink);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}
.aeo-seo-kw-pos{display:flex;align-items:center;gap:8px;flex:none;font-variant-numeric:tabular-nums}
.aeo-seo-kw-old{font-size:13px;font-weight:600;color:var(--aeo-ink-4);text-decoration:line-through}
.aeo-seo-kw-arrow{color:var(--aeo-ink-5);font-size:13px}
.aeo-seo-kw-new{font-size:14px;font-weight:700;color:#0f8a4f}

@media (max-width:860px){
  .aeo-seo-grid{grid-template-columns:1fr;gap:28px}
  .aeo-seo-card{padding:24px 20px}
}
@media (max-width:520px){
  #aeo-seo-mini-stats{grid-template-columns:repeat(3,1fr);gap:6px 8px}
  .aeo-vm-name{font-size:9.5px}
  .aeo-vm-pct{font-size:15px}
  .aeo-seo-kw-term{font-size:12.5px}
}
@media (prefers-reduced-motion:reduce){
  .aeo-seo-kw-row{opacity:1;transform:none;transition:none}
}
</style>
<template id="aeo-seo-tpl">
<section class="aeo-plat aeo-seo" id="aeo-seo">
  <div class="aeo-plat-inner">
    <div class="aeo-plat-intro">
      <span class="aeo-pill aeo-pill-center">Search foundations</span>
      <h2 class="aeo-h2">AI visibility starts with strong search foundations.</h2>
      <p class="aeo-lead">We improve the technical SEO, content and authority signals that help both search engines and AI understand, trust and recommend your business.</p>
    </div>
    <div class="aeo-seo-card" id="aeo-seo-card" data-aeo-rv-auto>
      <div class="aeo-seo-grid">
        <div class="aeo-seo-score">
          <div class="aeo-vis-wrap">
            <div class="aeo-vis-top">
              <div>
                <div class="aeo-vis-label">Search visibility</div>
                <div class="aeo-vis-score"><span class="aeo-vis-num" id="aeo-seo-score-num">72</span><span class="aeo-vis-delta" id="aeo-seo-score-delta"></span></div>
              </div>
            </div>
            <div class="aeo-vis-chart">
              <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                <defs><linearGradient id="aeoSeoFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#266df0" stop-opacity=".18"/><stop offset="1" stop-color="#266df0" stop-opacity="0"/></linearGradient></defs>
                <path class="aeo-vis-area" id="aeo-seo-area" fill="url(#aeoSeoFill)" d="M2,78 C40,74 66,66 96,62 C130,58 156,50 188,40 C220,30 250,24 298,10 L298,100 L2,100 Z"/>
                <path class="aeo-vis-line" id="aeo-seo-line" d="M2,78 C40,74 66,66 96,62 C130,58 156,50 188,40 C220,30 250,24 298,10"/>
              </svg>
            </div>
            <div class="aeo-vis-models" id="aeo-seo-mini-stats">
              <div class="aeo-vm"><span class="aeo-vm-top"><span class="aeo-vm-name">Technical health</span></span><span class="aeo-vm-pct" id="aeo-seo-stat-tech" data-to="94" data-suf="%">0%</span></div>
              <div class="aeo-vm"><span class="aeo-vm-top"><span class="aeo-vm-name">Indexed pages</span></span><span class="aeo-vm-pct" id="aeo-seo-stat-idx" data-to="128" data-suf="/132">0/132</span></div>
              <div class="aeo-vm"><span class="aeo-vm-top"><span class="aeo-vm-name">Organic visibility</span></span><span class="aeo-vm-pct" id="aeo-seo-stat-org" data-to="24" data-pre="+" data-suf="%">+0%</span></div>
            </div>
          </div>
        </div>
        <div class="aeo-seo-feed">
          <div class="aeo-seo-feed-head">Live optimization feed</div>
          <div class="aeo-act-list" id="aeo-seo-feed-list"></div>
        </div>
      </div>
      <div class="aeo-seo-keywords" id="aeo-seo-keywords"></div>
    </div>
  </div>
</section>
</template>
<script id="aeo-seo-script">
(function(){
  var reduce=false;try{reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){}
  var CHECK='<svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var FEED=[
    "Missing LocalBusiness schema added",
    "Service page title improved",
    "Duplicate metadata fixed",
    "Internal links added",
    "Location page indexed",
    "FAQ structure improved",
    "Core service page expanded",
    "Review markup validated"
  ];
  var KEYWORDS=[
    {term:"personal injury lawyer miami",from:8,to:3},
    {term:"car accident attorney miami",from:12,to:5},
    {term:"free consultation injury lawyer",from:14,to:6}
  ];

  function alive(root){return document.body.contains(root);}
  function countFromTo(node,from,to,dur){
    var t0=null;
    function step(ts){
      if(t0==null)t0=ts;
      var p=Math.min(1,(ts-t0)/dur),e=1-Math.pow(1-p,3);
      node.textContent=Math.round(from+(to-from)*e);
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function countStat(node,dur){
    var to=parseFloat(node.getAttribute("data-to")||"0");
    var pre=node.getAttribute("data-pre")||"";
    var suf=node.getAttribute("data-suf")||"";
    var t0=null;
    function step(ts){
      if(t0==null)t0=ts;
      var p=Math.min(1,(ts-t0)/dur),e=1-Math.pow(1-p,3);
      node.textContent=pre+Math.round(to*e)+suf;
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function sleep(ms){return new Promise(function(r){setTimeout(r,ms);});}

  function buildFeed(root){
    var list=root.querySelector("#aeo-seo-feed-list");if(!list)return[];
    var html="";
    FEED.forEach(function(txt){
      html+='<div class="aeo-act-row"><span class="aeo-act-fav aeo-seo-check">'+CHECK+'</span><div class="aeo-act-main"><span class="aeo-act-dom">'+txt+'</span></div></div>';
    });
    list.innerHTML=html;
    return[].slice.call(list.querySelectorAll(".aeo-act-row"));
  }
  function buildKeywords(root){
    var wrap=root.querySelector("#aeo-seo-keywords");if(!wrap)return[];
    var html="";
    KEYWORDS.forEach(function(k){
      html+='<div class="aeo-seo-kw-row"><span class="aeo-seo-kw-term">\u201c'+k.term+'\u201d</span>'+
        '<span class="aeo-seo-kw-pos"><span class="aeo-seo-kw-old" data-from="'+k.from+'">#'+k.from+'</span>'+
        '<span class="aeo-seo-kw-arrow">\u2192</span>'+
        '<span class="aeo-seo-kw-new" data-to="'+k.to+'">#'+k.to+'</span></span></div>';
    });
    wrap.innerHTML=html;
    return[].slice.call(wrap.querySelectorAll(".aeo-seo-kw-row"));
  }

  function showFinal(root){
    var scoreNum=root.querySelector("#aeo-seo-score-num"),delta=root.querySelector("#aeo-seo-score-delta");
    if(scoreNum)scoreNum.textContent="89";
    if(delta)delta.textContent="+17";
    var area=root.querySelector("#aeo-seo-area"),line=root.querySelector("#aeo-seo-line");
    if(area)area.classList.add("in");
    if(line){line.style.strokeDasharray="";line.style.strokeDashoffset="0";}
    ["#aeo-seo-stat-tech","#aeo-seo-stat-idx","#aeo-seo-stat-org"].forEach(function(sel){
      var n=root.querySelector(sel);if(!n)return;
      countStat(n,1);
    });
    root.querySelectorAll(".aeo-act-row").forEach(function(r){r.classList.add("in");});
    root.querySelectorAll(".aeo-seo-kw-row").forEach(function(r){r.classList.add("in");});
  }

  function play(root){
    var scoreNum=root.querySelector("#aeo-seo-score-num"),delta=root.querySelector("#aeo-seo-score-delta");
    var area=root.querySelector("#aeo-seo-area"),line=root.querySelector("#aeo-seo-line");
    var feedRows=[].slice.call(root.querySelectorAll(".aeo-act-row"));
    var kwRows=[].slice.call(root.querySelectorAll(".aeo-seo-kw-row"));
    if(reduce){showFinal(root);return;}

    if(scoreNum)countFromTo(scoreNum,72,89,900);
    setTimeout(function(){if(alive(root)&&delta)delta.textContent="+17";},950);

    if(line){
      var len=460;try{len=line.getTotalLength();}catch(e){}
      line.style.strokeDasharray=len;line.style.strokeDashoffset=len;
      line.getBoundingClientRect();
      line.style.transition="stroke-dashoffset 1.1s cubic-bezier(.33,1,.68,1)";
      requestAnimationFrame(function(){line.style.strokeDashoffset="0";});
    }
    setTimeout(function(){if(alive(root)&&area)area.classList.add("in");},250);

    var statSel=["#aeo-seo-stat-tech","#aeo-seo-stat-idx","#aeo-seo-stat-org"];
    statSel.forEach(function(sel,i){
      setTimeout(function(){
        if(!alive(root))return;
        var n=root.querySelector(sel);if(n)countStat(n,650);
      },300+i*110);
    });

    (async function(){
      await sleep(650);
      for(var i=0;i<feedRows.length;i++){
        if(!alive(root))return;
        feedRows[i].classList.add("in");
        await sleep(95);
      }
      await sleep(300);
      for(var j=0;j<kwRows.length;j++){
        if(!alive(root))return;
        kwRows[j].classList.add("in");
        await sleep(130);
      }
    })();
  }

  function wire(sec){
    buildFeed(sec);
    buildKeywords(sec);
    var card=sec.querySelector("#aeo-seo-card");
    if(!card)return;
    if(reduce||!("IntersectionObserver" in window)){showFinal(sec);return;}
    var done=false;
    var io=new IntersectionObserver(function(entries){
      for(var i=0;i<entries.length;i++){
        if(entries[i].isIntersecting&&!done){
          done=true;io.disconnect();play(sec);
        }
      }
    },{threshold:.28});
    io.observe(card);
  }

  function mount(){
    if(document.getElementById("aeo-seo"))return;
    var plat=document.getElementById("aeo-platform");if(!plat)return;
    var tpl=document.getElementById("aeo-seo-tpl");if(!tpl)return;
    var frag=tpl.content.cloneNode(true);
    plat.parentNode.insertBefore(frag,plat.nextSibling);
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
