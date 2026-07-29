<style id="aeo-contact-style">
.aeo-subpage .aeo-plat-inner{padding-top:clamp(120px,14vw,170px)}
.aeo-contact-grid{display:grid;grid-template-columns:minmax(0,0.9fr) minmax(0,1.1fr);gap:clamp(32px,5vw,72px);align-items:start}
.aeo-cbenefits{display:flex;flex-direction:column;gap:2px}
.aeo-cbenefits h2{font-family:"Inter Display",Inter,sans-serif;font-weight:600;font-size:clamp(24px,2.4vw,32px);letter-spacing:-.02em;color:#1c1d1f;margin:0 0 8px;text-wrap:balance}
.aeo-cbenefits>p{margin:0 0 22px;font-size:15.5px;line-height:1.55;color:#6f7988;font-weight:500}
.aeo-cb{display:flex;align-items:flex-start;gap:13px;padding:15px 0;border-top:1px dashed #e2e5ea}
.aeo-cb-ic{width:30px;height:30px;border-radius:9px;background:var(--color-blue-100,#e8f0ff);color:var(--color-blue-600,#245bc2);display:inline-flex;align-items:center;justify-content:center;flex:none}
.aeo-cb-ic svg{width:16px;height:16px}
.aeo-cb-t{font-size:15px;font-weight:600;color:#1c1d1f;margin-bottom:3px}
.aeo-cb-m{font-size:13.5px;line-height:1.5;color:#6f7988;font-weight:500}
.aeo-cmail{margin-top:24px;font-size:14px;color:#6f7988;font-weight:500}
.aeo-cmail a{color:var(--color-blue-600,#245bc2);text-decoration:none;font-weight:600}

.aeo-form-card{position:relative;background:#fff;border:1px solid var(--color-white-600,#dee2e7);border-radius:20px;padding:30px 30px 26px;box-shadow:0 1px 2px rgba(16,16,16,.04),0 26px 54px -30px rgba(28,29,31,.22)}
.aeo-form-card::before{content:"";position:absolute;inset:0;border-radius:inherit;padding:1.5px;background:linear-gradient(135deg,rgba(38,109,240,.5),rgba(140,110,245,.28) 45%,rgba(38,109,240,0) 75%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;pointer-events:none}
.aeo-form-h{font-family:"Inter Display",Inter,sans-serif;font-size:19px;font-weight:600;color:#1c1d1f;margin:0 0 4px}
.aeo-form-s{font-size:13.5px;color:#8f99a8;font-weight:500;margin:0 0 22px}
.aeo-field{margin-bottom:15px}
.aeo-field label{display:block;font-size:12.5px;font-weight:600;color:#505967;margin-bottom:6px}
.aeo-field input,.aeo-field select{width:100%;height:44px;padding:0 14px;border:1px solid var(--color-white-600,#dee2e7);border-radius:11px;background:var(--color-white-100,#fff);font-size:14.5px;font-weight:500;color:#1c1d1f;font-family:inherit;outline:none;transition:border-color .2s,box-shadow .2s;-webkit-appearance:none;appearance:none;box-sizing:border-box}
.aeo-field input:focus,.aeo-field select:focus{border-color:#266df0;box-shadow:0 0 0 3px rgba(38,109,240,.14)}
.aeo-field select{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M6 8l4 4 4-4' stroke='%238f99a8' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;background-size:16px;cursor:pointer}
.aeo-field-row{display:grid;grid-template-columns:1fr 1fr;gap:13px}
.aeo-form-card .aeo-btn{width:100%;margin-top:8px}
.aeo-form-fine{margin:14px 0 0;text-align:center;font-size:12.5px;color:#a4adba;font-weight:500}
.aeo-form-done{text-align:center;padding:40px 8px}
.aeo-form-done-ic{width:56px;height:56px;border-radius:999px;background:linear-gradient(135deg,#16a34a,#0d8a3f);color:#fff;display:inline-flex;align-items:center;justify-content:center;margin-bottom:18px;box-shadow:0 14px 30px -12px rgba(22,163,74,.55);animation:aeo-pop-in .5s cubic-bezier(.33,1.4,.68,1) both}
.aeo-form-done-ic svg{width:26px;height:26px}
@keyframes aeo-pop-in{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}
.aeo-form-done h3{font-family:"Inter Display",Inter,sans-serif;font-size:22px;font-weight:600;color:#1c1d1f;margin:0 0 8px}
.aeo-form-done p{font-size:14.5px;line-height:1.55;color:#6f7988;font-weight:500;margin:0}
@media (max-width:860px){.aeo-contact-grid{grid-template-columns:1fr}}
</style>
<template id="aeo-page-tpl">
<section class="aeo-plat aeo-subpage" id="aeo-page">
  <div class="aeo-plat-bg"><i class="aeo-blob aeo-blob-a"></i><i class="aeo-blob aeo-blob-b"></i></div>
  <div class="aeo-plat-inner">
    <div class="aeo-plat-intro">
      <span class="aeo-pill aeo-pill-center">Free audit</span>
      <h1 class="aeo-h2" style="font-size:clamp(38px,5vw,62px)">See how AI talks about your business</h1>
      <p class="aeo-lead">Real data, free: your mention rate, your competitors&rsquo;, and exactly what it takes to become the answer.</p>
    </div>
    <div class="aeo-contact-grid">
      <div class="aeo-cbenefits">
        <h2>What you get in your audit</h2>
        <p>Delivered in 3&ndash;5 business days. No commitment, no sales pressure &mdash; the data is yours either way.</p>
        <div class="aeo-cb"><span class="aeo-cb-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l5-6 4 4 6-8 3 4"/></svg></span><div><div class="aeo-cb-t">Your mention rate, measured</div><div class="aeo-cb-m">We run hundreds of real customer questions across ChatGPT, Perplexity, Gemini and Claude and count how often you come up.</div></div></div>
        <div class="aeo-cb"><span class="aeo-cb-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3.2 3.2 0 0 1 0 6M17.5 20a5.5 5.5 0 0 0-3-4.9"/></svg></span><div><div class="aeo-cb-t">Competitor comparison</div><div class="aeo-cb-m">Who AI recommends instead of you right now, and why they win.</div></div></div>
        <div class="aeo-cb"><span class="aeo-cb-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/></svg></span><div><div class="aeo-cb-t">Site readability report</div><div class="aeo-cb-m">Everything on your site AI can&rsquo;t read today &mdash; schema, structure and missing pages.</div></div></div>
        <div class="aeo-cb"><span class="aeo-cb-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span><div><div class="aeo-cb-t">30-minute walkthrough</div><div class="aeo-cb-m">A plain-English call on what the numbers mean and the fastest path to moving them.</div></div></div>
        <p class="aeo-cmail">Prefer email? <a href="mailto:hello@answered.agency">hello@answered.agency</a></p>
      </div>
      <div class="aeo-form-card">
        <form id="aeo-audit-form" novalidate>
          <h3 class="aeo-form-h">Request your free audit</h3>
          <p class="aeo-form-s">Takes 30 seconds. Results in 3&ndash;5 business days.</p>
          <div class="aeo-field"><label for="af-biz">Business name</label><input id="af-biz" name="biz" type="text" placeholder="e.g. Lakeline Family Dental" required></div>
          <div class="aeo-field"><label for="af-web">Website</label><input id="af-web" name="web" type="text" placeholder="yourbusiness.com" required></div>
          <div class="aeo-field-row">
            <div class="aeo-field"><label for="af-city">City</label><input id="af-city" name="city" type="text" placeholder="Austin, TX" required></div>
            <div class="aeo-field"><label for="af-ind">Industry</label><select id="af-ind" name="ind"><option>HVAC</option><option>Plumbing</option><option>Dental</option><option>Legal</option><option>Med spa</option><option>Home services</option><option>Other</option></select></div>
          </div>
          <div class="aeo-field"><label for="af-email">Work email</label><input id="af-email" name="email" type="email" placeholder="you@yourbusiness.com" required></div>
          <button class="aeo-btn aeo-btn--blue" type="submit">Request my free audit</button>
          <p class="aeo-form-fine">No commitment. We never share your data.</p>
        </form>
      </div>
    </div>
  </div>
</section>
</template>
<script id="aeo-page-script">
(function(){
  function wireForm(){
    var form=document.getElementById("aeo-audit-form");
    if(!form||form.getAttribute("data-aeo"))return;
    form.setAttribute("data-aeo","1");
    form.addEventListener("submit",function(ev){
      ev.preventDefault();
      var email=(document.getElementById("af-email")||{}).value||"";
      var card=form.closest(".aeo-form-card");
      var req=form.querySelectorAll("input[required]");
      for(var i=0;i<req.length;i++){
        if(!req[i].value.trim()){req[i].focus();req[i].style.borderColor="#e5484d";return;}
      }
      card.innerHTML='<div class="aeo-form-done">'+
        '<span class="aeo-form-done-ic"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>'+
        '<h3>Request received</h3>'+
        '<p>We&rsquo;re on it. Your audit'+(email?' will land in <b>'+email.replace(/</g,"&lt;")+'</b>':'')+' within 3&ndash;5 business days.</p></div>';
    });
  }
  function mount(){
    var main=document.querySelector("main");if(!main)return;
    if(!document.getElementById("aeo-page")){
      var tpl=document.getElementById("aeo-page-tpl");if(!tpl)return;
      main.insertBefore(tpl.content.cloneNode(true),main.firstChild);
    }
    wireForm();
    var kids=main.children;
    for(var i=0;i<kids.length;i++){
      var k=kids[i];
      if(k.id==="aeo-page")continue;
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
