<style id="aeo-book-style">
.aeo-book-wrap{max-width:820px;margin:0 auto}
.aeo-book-head{text-align:center;margin-bottom:clamp(28px,3.6vw,40px)}
.aeo-book-head h1{font-family:"Inter Display",Inter,sans-serif;font-weight:600;font-size:clamp(30px,4vw,44px);line-height:1.08;letter-spacing:-.028em;margin:0 0 10px;color:var(--aeo-ink);text-wrap:balance}
.aeo-book-head p{margin:0;font-size:15.5px;line-height:1.55;color:var(--aeo-ink-3);font-weight:500}
/* context carried over from pricing / the free-audit form — same visual
   language as chips elsewhere, so it reads as one system */
.aeo-book-ctx{display:none;align-items:center;justify-content:center;gap:7px;margin:16px auto 0;padding:7px 14px 7px 12px;border-radius:999px;background:var(--aeo-accent-soft);border:1px solid rgba(38,109,240,.16);font-size:12.5px;font-weight:600;color:var(--aeo-accent-ink);width:fit-content}
.aeo-book-ctx.show{display:flex}
.aeo-book-ctx svg{width:14px;height:14px;flex:none}

.aeo-book-card{position:relative;background:linear-gradient(180deg,#fff,#fcfdff);border:1px solid rgba(28,29,31,.09);border-radius:var(--aeo-r-xl);padding:clamp(14px,2vw,22px);box-shadow:var(--aeo-sh-4);overflow:hidden}
.aeo-book-card::before{content:"";position:absolute;inset:0;border-radius:inherit;padding:1.5px;background:linear-gradient(135deg,rgba(38,109,240,.45),rgba(140,110,245,.24) 45%,rgba(38,109,240,0) 75%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;pointer-events:none;z-index:1}

.aeo-cal-embed{position:relative;z-index:0;width:100%;min-width:280px;min-height:720px;height:720px}
.aeo-cal-embed iframe{width:100%!important;min-width:280px;height:100%!important;border:0}
.aeo-cal-loading{display:flex;align-items:center;justify-content:center;min-height:320px;font-size:14px;font-weight:500;color:var(--aeo-ink-4)}

.aeo-book-done{text-align:center;padding:48px 18px}
.aeo-book-done-ic{width:56px;height:56px;border-radius:999px;background:linear-gradient(135deg,#16a34a,#0d8a3f);color:#fff;display:inline-flex;align-items:center;justify-content:center;margin-bottom:18px;box-shadow:0 14px 30px -12px rgba(22,163,74,.55);animation:aeo-bpop .5s cubic-bezier(.33,1.4,.68,1) both}
.aeo-book-done-ic svg{width:26px;height:26px}
@keyframes aeo-bpop{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}
.aeo-book-done h3{font-family:"Inter Display",Inter,sans-serif;font-size:22px;font-weight:600;letter-spacing:-.022em;color:var(--aeo-ink);margin:0 0 8px}
.aeo-book-done p{font-size:14.5px;line-height:1.6;color:var(--aeo-ink-3);font-weight:500;margin:0}

@media (max-width:640px){
  .aeo-cal-embed{min-height:980px;height:980px}
}
@media (prefers-reduced-motion: reduce){
  .aeo-book-done-ic{animation:none}
}
</style>
<template id="aeo-book-tpl">
<section class="aeo-plat aeo-subpage" id="aeo-book-page">
  <div class="aeo-plat-bg"><i class="aeo-blob aeo-blob-a" style="opacity:.5"></i><i class="aeo-blob aeo-blob-b" style="opacity:.4"></i></div>
  <div class="aeo-plat-inner">
    <div class="aeo-book-wrap">
      <div class="aeo-book-head" data-aeo-rv-auto>
        <span class="aeo-pill aeo-pill-center">Book a call</span>
        <h1>Let&rsquo;s talk about getting you recommended</h1>
        <p>Pick a time that works. 30 minutes, no pressure. Just your numbers and a plan.</p>
        <div class="aeo-book-ctx" id="aeo-book-ctx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12.5l2.5 2.5L16 9"/><circle cx="12" cy="12" r="9.5"/></svg><span id="aeo-book-ctx-text"></span></div>
      </div>
      <div class="aeo-book-card" data-aeo-rv-auto id="aeo-book-card">
        <div class="aeo-cal-loading" id="aeo-cal-loading">Loading calendar&hellip;</div>
        <div class="aeo-cal-embed" id="aeo-cal-embed" hidden></div>
      </div>
    </div>
  </div>
</section>
</template>
<script id="aeo-book-script">
(function(){
  var CHECK='<svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var PLAN_LABEL={core:"Core plan \u00b7 $2,500/mo",premium:"Premium plan \u00b7 $5,000/mo",custom:"Custom plan"};
  var PLAN_NAME={core:"Core",premium:"Premium",custom:"Custom"};

  function readContext(){
    var out={plan:"",source:"",email:"",website:""};
    try{
      var qs=new URLSearchParams(window.location.search);
      out.plan=(qs.get("plan")||"").toLowerCase();
      out.source=(qs.get("source")||"").toLowerCase();
      out.email=qs.get("email")||"";
      out.website=qs.get("website")||"";
    }catch(e){}
    return out;
  }

  function showDone(card){
    if(!card||card.getAttribute("data-aeo-done")==="1")return;
    card.setAttribute("data-aeo-done","1");
    card.innerHTML='<div class="aeo-book-done">'+
      '<span class="aeo-book-done-ic">'+CHECK+'</span>'+
      '<h3>You\u2019re booked</h3>'+
      '<p>Thanks. Your call is confirmed. Check your email for the calendar invite and details.</p></div>';
  }

  function wireBooking(root){
    if(!root||root.getAttribute("data-aeo-wired"))return;
    root.setAttribute("data-aeo-wired","1");

    var params=readContext();
    var ctx=root.querySelector("#aeo-book-ctx");
    var ctxText=root.querySelector("#aeo-book-ctx-text");
    if(ctx&&ctxText){
      var ctxLabel="";
      if(params.source==="audit"){
        ctxLabel="Free audit call"+(PLAN_NAME[params.plan]?" \u00b7 "+PLAN_NAME[params.plan]+" plan interest":"");
      }else if(PLAN_LABEL[params.plan]){
        ctxLabel=PLAN_LABEL[params.plan];
      }
      if(ctxLabel){ctxText.textContent=ctxLabel;ctx.classList.add("show");}
    }

    var card=root.querySelector("#aeo-book-card");
    var embed=root.querySelector("#aeo-cal-embed");
    var loading=root.querySelector("#aeo-cal-loading");
    var I=window.__aeoIntegrations||{};
    var baseUrl=I.calendlyUrl||"https://calendly.com/tali-answeredlabs/30min";

    function onMsg(e){
      if(!(window.__aeoIsCalendlyEvent&&window.__aeoIsCalendlyEvent(e)))return;
      if(e.data.event==="calendly.event_scheduled")showDone(card);
    }
    window.addEventListener("message",onMsg);

    function boot(){
      if(!window.Calendly||typeof window.Calendly.initInlineWidget!=="function"){
        if(loading)loading.textContent="Couldn\u2019t load the calendar. Please refresh or email hello@answeredlabs.com.";
        return;
      }
      if(loading)loading.hidden=true;
      if(embed)embed.hidden=false;
      var prefill={};
      if(params.email)prefill.email=params.email;
      var utm={
        utmSource:"answered_website",
        utmMedium:params.source==="audit"?"free_audit":"book_a_call",
        utmCampaign:params.plan?("plan_"+params.plan):"book_a_call"
      };
      if(params.website)utm.utmContent=params.website.slice(0,200);
      try{
        var url=baseUrl;
        if(params.email)url+=(url.indexOf("?")>=0?"&":"?")+"email="+encodeURIComponent(params.email);
        window.Calendly.initInlineWidget({
          url:url,
          parentElement:embed,
          prefill:prefill,
          utm:utm,
          resize:true
        });
      }catch(err){
        if(loading){loading.hidden=false;loading.textContent="Couldn\u2019t load the calendar. Please refresh.";}
        if(embed)embed.hidden=true;
      }
    }

    if(typeof window.__aeoLoadCalendly==="function")window.__aeoLoadCalendly(boot);
    else boot();
  }

  function mount(){
    var main=document.querySelector("main");if(!main)return;
    if(!document.getElementById("aeo-book-page")){
      var tpl=document.getElementById("aeo-book-tpl");if(!tpl)return;
      main.insertBefore(tpl.content.cloneNode(true),main.firstChild);
    }
    wireBooking(document.getElementById("aeo-book-page"));
    var kids=main.children;
    for(var i=0;i<kids.length;i++){
      var k=kids[i];
      if(k.id==="aeo-book-page")continue;
      if(k.style.display!=="none")k.style.display="none";
    }
  }
  var n=0,iv=setInterval(function(){mount();if(++n>70)clearInterval(iv);},150);
  document.addEventListener("DOMContentLoaded",mount);
  window.addEventListener("load",mount);
  var mo=new MutationObserver(mount);
  try{mo.observe(document.body||document.documentElement,{childList:true,subtree:true});}catch(e){}
  setTimeout(function(){try{mo.disconnect();}catch(e){}},11000);
})();
</script>
