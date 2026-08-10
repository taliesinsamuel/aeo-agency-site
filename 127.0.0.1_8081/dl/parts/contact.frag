<style id="aeo-contact-style">
.aeo-subpage .aeo-plat-inner{padding-top:clamp(120px,14vw,170px)}

/* ONE outer surface — homepage .aeo-card inset stroke + panel elevation (--aeo-sh-4) */
.aeo-contact-shell{
  background:#fff;background-image:linear-gradient(180deg,#fff,#fbfcfe);
  border:none;border-radius:var(--aeo-r-2xl);
  box-shadow:inset 0 0 0 1px rgba(28,29,31,.08),var(--aeo-sh-4);
  padding:0;
}

/* ---- intro (top of shell) ---- */
.aeo-contact-intro{
  text-align:center;
  padding:clamp(36px,4.2vw,52px) clamp(28px,4vw,56px) clamp(24px,3vw,32px);
}
.aeo-contact-intro .aeo-h2{margin:0 auto;font-size:clamp(30px,4vw,48px);line-height:1.02}

/* ---- lower two columns inside same shell ---- */
.aeo-contact-body{
  position:relative;
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(0,1fr);
  gap:0;
  /* Stretch both columns to equal height */
  align-items:stretch;
  border-top:1px solid var(--aeo-line);
}
/* Full-height vertical divider — anchored to the lower section, not column content */
.aeo-contact-body::after{
  content:"";
  position:absolute;
  top:0;bottom:0;left:50%;
  width:1px;
  background:var(--aeo-line);
  pointer-events:none;
}

.aeo-cbenefits{
  display:flex;flex-direction:column;gap:2px;
  padding:clamp(28px,3.2vw,40px) clamp(24px,3vw,40px) clamp(28px,3.2vw,40px) clamp(28px,3.4vw,48px);
}
.aeo-cbenefits h2{
  font-family:"Inter Display",Inter,sans-serif;font-weight:600;
  font-size:clamp(22px,2.2vw,28px);letter-spacing:-.024em;color:var(--aeo-ink);
  margin:0 0 8px;text-wrap:balance
}
.aeo-cbenefits>p{
  margin:0 0 20px;font-size:15px;line-height:1.58;color:var(--aeo-ink-3);font-weight:500
}
.aeo-cb{
  display:flex;align-items:flex-start;gap:13px;
  padding:14px 4px 14px 0;
  border-top:1px solid var(--aeo-line);
}
.aeo-cb:first-of-type{border-top:none;padding-top:2px}
.aeo-cb-ic{
  width:30px;height:30px;border-radius:9px;
  background:linear-gradient(180deg,#f0f5ff,var(--aeo-accent-soft));
  color:var(--aeo-accent-ink);
  display:inline-flex;align-items:center;justify-content:center;flex:none;
  box-shadow:inset 0 0 0 1px rgba(38,109,240,.14)
}
.aeo-cb-ic svg{width:16px;height:16px}
.aeo-cb-t{font-size:15px;font-weight:600;letter-spacing:-.012em;color:var(--aeo-ink);margin-bottom:3px}
.aeo-cb-m{font-size:13.5px;line-height:1.55;color:var(--aeo-ink-3);font-weight:500}
.aeo-cmail{margin-top:20px;padding-top:16px;border-top:1px solid var(--aeo-line);font-size:14px;color:var(--aeo-ink-3);font-weight:500}
.aeo-cmail a{color:var(--aeo-accent-ink);text-decoration:none;font-weight:600;border-bottom:1px solid rgba(38,109,240,.22);transition:border-color .2s var(--aeo-e)}
.aeo-cmail a:hover{border-color:rgba(38,109,240,.65)}

/* form column — content region, not a nested card */
.aeo-form-panel{
  position:relative;
  height:100%;
  box-sizing:border-box;
  padding:clamp(28px,3.2vw,40px) clamp(28px,3.4vw,48px) clamp(28px,3.2vw,40px) clamp(24px,3vw,40px);
}
.aeo-form-h{font-family:"Inter Display",Inter,sans-serif;font-size:19px;font-weight:600;letter-spacing:-.018em;color:var(--aeo-ink);margin:0 0 4px}
.aeo-form-s{font-size:13.5px;color:var(--aeo-ink-4);font-weight:500;margin:0 0 22px}
.aeo-field{margin-bottom:15px}
.aeo-field label{display:block;font-size:12.5px;font-weight:600;color:#505967;margin-bottom:6px;transition:color .2s var(--aeo-e)}
.aeo-field:focus-within label{color:var(--aeo-ink)}
.aeo-field input{width:100%;height:44px;padding:0 14px;border:1px solid var(--aeo-line-strong);border-radius:var(--aeo-r-md);background:var(--aeo-surface);font-size:14.5px;font-weight:500;letter-spacing:-.006em;color:var(--aeo-ink);font-family:inherit;outline:none;box-shadow:inset 0 1px 2px rgba(16,17,20,.03);transition:border-color .22s var(--aeo-e),box-shadow .22s var(--aeo-e),background-color .22s var(--aeo-e);-webkit-appearance:none;appearance:none;box-sizing:border-box}
.aeo-field input:hover{border-color:#ccd3de}
.aeo-field input::placeholder{color:var(--aeo-ink-5)}
.aeo-field input:focus{border-color:#aab3c0;background-color:#fff;box-shadow:0 0 0 3px rgba(28,29,31,.08),inset 0 1px 2px rgba(16,17,20,.02)}
.aeo-field-err{display:none;margin-top:6px;font-size:12px;font-weight:600;color:#e5484d}
.aeo-field-err.show{display:block}

/* CTA matches nav .aeo-nav-book: solid black, white label, no sheen */
.aeo-form-panel .aeo-btn{
  width:100%;margin-top:8px;
  isolation:isolate;will-change:transform;
  background-image:none!important;background-color:#141416!important;
  border-color:#141416;background-clip:border-box;color:#fff;
  box-shadow:0 1px 2px rgba(16,17,20,.18),0 6px 14px -8px rgba(16,17,20,.32);
}
.aeo-form-panel .aeo-btn:hover{
  background-image:none!important;background-color:#141416!important;background-position:0 0;
  border-color:#141416;color:#fff;
  box-shadow:0 1px 2px rgba(16,17,20,.18),0 14px 30px -10px rgba(16,17,20,.44);
}
.aeo-form-panel .aeo-btn::after{content:none;display:none}
.aeo-form-panel .aeo-btn:disabled{opacity:.72;cursor:wait}
.aeo-form-fine{margin:14px 0 0;text-align:center;font-size:12.5px;color:#a4adba;font-weight:500}
.aeo-form-fine a{color:#8b93a3;text-decoration:none;border-bottom:1px solid rgba(139,147,163,.35);transition:color .2s var(--aeo-e),border-color .2s var(--aeo-e)}
.aeo-form-fine a:hover{color:#5c6572;border-color:rgba(92,101,114,.55)}
.aeo-form-err{display:none;margin:12px 0 0;padding:10px 12px;border-radius:var(--aeo-r-md);background:rgba(229,72,77,.08);border:1px solid rgba(229,72,77,.22);font-size:12.5px;font-weight:600;color:#e5484d;line-height:1.45}
.aeo-form-err.show{display:block}
.aeo-form-err a{color:inherit;font-weight:700;text-decoration:underline;text-underline-offset:2px}
.aeo-hp{position:absolute!important;left:-10000px!important;top:auto!important;width:1px!important;height:1px!important;overflow:hidden!important;opacity:0!important;pointer-events:none!important}
.aeo-field input.aeo-invalid,.aeo-field input.aeo-invalid:focus{border-color:#e5484d;box-shadow:0 0 0 3px rgba(229,72,77,.16);animation:aeo-shake .32s var(--aeo-e-out)}
@keyframes aeo-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}

.aeo-audit-step2{display:none}
.aeo-audit-step2.show{display:block}
.aeo-audit-meta{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 14px}
.aeo-audit-chip{display:inline-flex;align-items:center;gap:6px;padding:6px 11px;border-radius:8px;background:#e8f0ff;border:none;font-size:12px;font-weight:600;color:#245bc2;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.aeo-cal-embed{width:100%;min-width:280px;min-height:720px;height:720px;margin:0 -6px}
.aeo-cal-embed iframe{width:100%!important;min-width:280px;height:100%!important;border:0}
.aeo-cal-loading{display:flex;align-items:center;justify-content:center;min-height:240px;font-size:14px;font-weight:500;color:var(--aeo-ink-4)}

.aeo-audit-done{text-align:center;padding:36px 6px}
.aeo-audit-done-ic{width:56px;height:56px;border-radius:999px;background:linear-gradient(135deg,#16a34a,#0d8a3f);color:#fff;display:inline-flex;align-items:center;justify-content:center;margin-bottom:18px;box-shadow:0 14px 30px -12px rgba(22,163,74,.55);animation:aeo-apop .5s cubic-bezier(.33,1.4,.68,1) both}
.aeo-audit-done-ic svg{width:26px;height:26px}
@keyframes aeo-apop{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}
.aeo-audit-done h3{font-family:"Inter Display",Inter,sans-serif;font-size:22px;font-weight:600;letter-spacing:-.022em;color:var(--aeo-ink);margin:0 0 8px}
.aeo-audit-done p{font-size:14.5px;line-height:1.6;color:var(--aeo-ink-3);font-weight:500;margin:0}

@media (max-width:860px){
  .aeo-contact-body{grid-template-columns:1fr}
  .aeo-contact-body::after{display:none}
  .aeo-form-panel{border-top:1px solid var(--aeo-line)}
  .aeo-cbenefits,.aeo-form-panel{
    padding:clamp(24px,4vw,32px) clamp(22px,4vw,36px);
  }
}
@media (max-width:640px){
  .aeo-contact-intro{padding:28px 20px 26px}
  .aeo-cbenefits,.aeo-form-panel{padding:24px 18px 26px}
  .aeo-cal-embed{min-height:980px;height:980px;margin:0}
}
@media (prefers-reduced-motion: reduce){
  .aeo-field input.aeo-invalid{animation:none}
  .aeo-audit-done-ic{animation:none}
}
</style>
<template id="aeo-page-tpl">
<section class="aeo-plat aeo-subpage" id="aeo-page">
  <div class="aeo-plat-bg"><i class="aeo-blob aeo-blob-a"></i><i class="aeo-blob aeo-blob-b"></i></div>
  <div class="aeo-plat-inner">
    <div class="aeo-contact-shell">
      <div class="aeo-contact-intro">
        <span class="aeo-pill aeo-pill-center">Free audit</span>
        <h1 class="aeo-h2">See how AI talks about your business</h1>
      </div>
      <div class="aeo-contact-body">
        <div class="aeo-cbenefits">
          <h2>What you get in your audit</h2>
          <p>Delivered in 3&ndash;5 business days. No commitment, no sales pressure. The data is yours either way.</p>
          <div class="aeo-cb"><span class="aeo-cb-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l5-6 4 4 6-8 3 4"/></svg></span><div><div class="aeo-cb-t">Your mention rate, measured</div><div class="aeo-cb-m">We run hundreds of real customer questions across ChatGPT, Perplexity, Gemini and Claude and count how often you come up.</div></div></div>
          <div class="aeo-cb"><span class="aeo-cb-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3.2 3.2 0 0 1 0 6M17.5 20a5.5 5.5 0 0 0-3-4.9"/></svg></span><div><div class="aeo-cb-t">Competitor comparison</div><div class="aeo-cb-m">Who AI recommends instead of you right now, and why they win.</div></div></div>
          <div class="aeo-cb"><span class="aeo-cb-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/></svg></span><div><div class="aeo-cb-t">Site readability report</div><div class="aeo-cb-m">Everything on your site AI can&rsquo;t read today: schema, structure and missing pages.</div></div></div>
          <div class="aeo-cb"><span class="aeo-cb-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span><div><div class="aeo-cb-t">30-minute walkthrough</div><div class="aeo-cb-m">A call on what the numbers mean and the fastest path to moving them.</div></div></div>
          <p class="aeo-cmail">Prefer email? <a href="mailto:hello@answeredlabs.com">hello@answeredlabs.com</a></p>
        </div>
        <div class="aeo-form-panel" id="aeo-audit-card">
          <form id="aeo-audit-form" novalidate>
            <h3 class="aeo-form-h">Request your free audit</h3>
            <p class="aeo-form-s">Takes 30 seconds. Then pick a time for your free walkthrough call.</p>
            <div class="aeo-field">
              <label for="af-web">Website URL</label>
              <input id="af-web" name="web" type="text" placeholder="yourbusiness.com" required autocomplete="url">
              <div class="aeo-field-err" id="af-web-err">Enter your business website</div>
            </div>
            <div class="aeo-field">
              <label for="af-email">Business email</label>
              <input id="af-email" name="email" type="email" placeholder="you@yourbusiness.com" required autocomplete="email">
              <div class="aeo-field-err" id="af-email-err">Enter a valid business email</div>
            </div>
            <div class="aeo-hp" aria-hidden="true">
              <label for="af-company">Company</label>
              <input id="af-company" name="company_name" type="text" tabindex="-1" autocomplete="off">
            </div>
            <button class="aeo-btn aeo-btn--primary" type="submit" id="aeo-audit-continue" aria-busy="false">Schedule my free audit call</button>
            <div class="aeo-form-err" id="aeo-audit-form-err" role="alert" aria-live="polite"></div>
            <p class="aeo-form-fine">No commitment. We never sell your data. <a href="privacy.html">Privacy</a></p>
          </form>
          <div class="aeo-audit-step2" id="aeo-audit-step2">
            <h3 class="aeo-form-h">Pick a time for your audit call</h3>
            <p class="aeo-form-s">We&rsquo;ll review your site beforehand and walk through the findings live.</p>
            <div class="aeo-audit-meta" id="aeo-audit-meta"></div>
            <div class="aeo-cal-loading" id="aeo-audit-cal-loading">Loading calendar&hellip;</div>
            <div class="aeo-cal-embed" id="aeo-audit-cal-embed" hidden></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script id="aeo-page-script">
(function(){
  var CHECK='<svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function isEmail(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);}
  function normalizeWebsite(raw){
    var v=(raw||"").trim();
    if(!v)return "";
    // Accept example.com / www.example.com / https://example.com
    if(!/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(v))v="https://"+v;
    try{
      var u=new URL(v);
      if(!u.hostname||u.hostname.indexOf(".")===-1)return "";
      return u.href;
    }catch(e){return "";}
  }
  function markInvalid(inp,errEl,msg){
    if(!inp)return;
    inp.classList.remove("aeo-invalid");
    inp.getBoundingClientRect();
    inp.classList.add("aeo-invalid");
    if(errEl){errEl.textContent=msg||errEl.textContent;errEl.classList.add("show");}
    inp.addEventListener("input",function clear(){
      inp.classList.remove("aeo-invalid");
      if(errEl)errEl.classList.remove("show");
      inp.removeEventListener("input",clear);
    });
  }
  function esc(s){
    return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  function showSuccess(card,email){
    if(!card||card.getAttribute("data-aeo-done")==="1")return;
    card.setAttribute("data-aeo-done","1");
    card.innerHTML='<div class="aeo-audit-done">'+
      '<span class="aeo-audit-done-ic">'+CHECK+'</span>'+
      '<h3>You\u2019re booked</h3>'+
      '<p>Your free audit call is confirmed'+(email?' for <b>'+esc(email)+'</b>':'')+'. Check your email for the calendar invite. We\u2019ll review your site before we meet.</p></div>';
  }

  function mountCalendly(email,website){
    var step2=document.getElementById("aeo-audit-step2");
    var embed=document.getElementById("aeo-audit-cal-embed");
    var loading=document.getElementById("aeo-audit-cal-loading");
    var meta=document.getElementById("aeo-audit-meta");
    var I=window.__aeoIntegrations||{};
    var baseUrl=I.calendlyUrl||"https://calendly.com/tali-answeredlabs/30min";
    if(meta){
      var host=website.replace(/^https?:\/\//,"").replace(/\/$/,"");
      meta.innerHTML=
        (host?'<span class="aeo-audit-chip">'+esc(host)+'</span>':"")+
        (email?'<span class="aeo-audit-chip">'+esc(email)+'</span>':"");
    }
    if(step2)step2.classList.add("show");

    function boot(){
      if(!window.Calendly||typeof window.Calendly.initInlineWidget!=="function"){
        if(loading)loading.textContent="Couldn\u2019t load the calendar. Please refresh or email hello@answeredlabs.com.";
        return;
      }
      if(loading)loading.hidden=true;
      if(embed)embed.hidden=false;
      try{
        var url=baseUrl;
        if(email)url+=(url.indexOf("?")>=0?"&":"?")+"email="+encodeURIComponent(email);
        window.Calendly.initInlineWidget({
          url:url,
          parentElement:embed,
          prefill:{email:email||""},
          utm:{
            utmSource:"answered_website",
            utmMedium:"free_audit",
            utmCampaign:"free_audit",
            utmContent:(website||"").slice(0,200)
          },
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

  function wireForm(){
    var form=document.getElementById("aeo-audit-form");
    if(!form||form.getAttribute("data-aeo"))return;
    form.setAttribute("data-aeo","1");
    var card=document.getElementById("aeo-audit-card");
    var btn=document.getElementById("aeo-audit-continue");
    var webInp=document.getElementById("af-web");
    var emailInp=document.getElementById("af-email");
    var webErr=document.getElementById("af-web-err");
    var emailErr=document.getElementById("af-email-err");
    window.addEventListener("message",function(e){
      if(!(window.__aeoIsCalendlyEvent&&window.__aeoIsCalendlyEvent(e)))return;
      if(e.data.event==="calendly.event_scheduled"){
        showSuccess(card,emailInp?emailInp.value.trim():"");
      }
    });

    var formErr=document.getElementById("aeo-audit-form-err");
    var hpInp=document.getElementById("af-company");
    function showFormError(msg){
      if(!formErr)return;
      var text=msg||"Something went wrong. Please try again.";
      // Keep hello@answeredlabs.com clickable without exposing raw HTML from API errors.
      formErr.textContent="";
      var parts=String(text).split(/(hello@answeredlabs\.com)/g);
      for(var i=0;i<parts.length;i++){
        if(parts[i]==="hello@answeredlabs.com"){
          var a=document.createElement("a");
          a.href="mailto:hello@answeredlabs.com";
          a.textContent="hello@answeredlabs.com";
          formErr.appendChild(a);
        }else if(parts[i]){
          formErr.appendChild(document.createTextNode(parts[i]));
        }
      }
      formErr.classList.add("show");
    }
    function clearFormError(){
      if(!formErr)return;
      formErr.textContent="";
      formErr.classList.remove("show");
    }
    function unlock(){
      form.removeAttribute("data-aeo-locked");
      if(btn){
        btn.disabled=false;
        btn.removeAttribute("aria-busy");
        btn.setAttribute("aria-busy","false");
        btn.textContent="Schedule my free audit call";
      }
    }

    form.addEventListener("submit",function(ev){
      ev.preventDefault();
      if(form.getAttribute("data-aeo-locked")==="1")return;
      clearFormError();

      var rawWeb=(webInp.value||"").trim();
      var email=(emailInp.value||"").trim().toLowerCase();
      var website=normalizeWebsite(rawWeb);
      var ok=true;

      if(!rawWeb||!website){
        markInvalid(webInp,webErr,"Enter a valid website (e.g. yourbusiness.com)");
        ok=false;
      }
      if(!email||!isEmail(email)){
        markInvalid(emailInp,emailErr,"Enter a valid business email");
        if(ok&&emailInp)emailInp.focus();
        ok=false;
      }
      if(!ok){
        if(!website&&webInp)webInp.focus();
        return;
      }

      form.setAttribute("data-aeo-locked","1");
      if(btn){
        btn.disabled=true;
        btn.setAttribute("aria-busy","true");
        btn.textContent="Saving\u2026";
      }

      function goSchedule(){
        form.style.display="none";
        mountCalendly(email,website);
        try{
          var step2=document.getElementById("aeo-audit-step2");
          if(step2)step2.scrollIntoView({behavior:"smooth",block:"start"});
        }catch(e){}
      }

      // CRM upsert must succeed before Calendly opens.
      // Booking confirmation UI only appears after calendly.event_scheduled.
      if(typeof window.__aeoSubmitFreeAudit!=="function"){
        showFormError("Booking is temporarily unavailable. Email hello@answeredlabs.com.");
        unlock();
        return;
      }
      window.__aeoSubmitFreeAudit({
        email:email,
        website:website,
        company_name:hpInp?hpInp.value:""
      },function(err){
        if(err){
          var code=err&&err.message?String(err.message):"";
          if(code==="rate_limited")showFormError("Too many attempts. Please wait a minute and try again.");
          else if(code==="email_invalid"||code==="email_required"){markInvalid(emailInp,emailErr,"Enter a valid business email");clearFormError();}
          else if(code==="website_invalid"){markInvalid(webInp,webErr,"Enter a valid website (e.g. yourbusiness.com)");clearFormError();}
          else if(code==="service_unavailable"||code==="crm_auth_failed"||code==="crm_unavailable"||code==="crm_rejected"||code==="upstream_timeout"||code.indexOf("HTTP_")==0){
            showFormError("We couldn\u2019t save your details. Please try again, or email hello@answeredlabs.com.");
          }
          else showFormError("We couldn\u2019t save your details. Please try again, or email hello@answeredlabs.com.");
          unlock();
          return;
        }
        goSchedule();
      });
    });
  }

  function mount(){
    var main=document.querySelector("main");if(!main)return;
    if(!document.getElementById("aeo-page")){
      var tpl=document.getElementById("aeo-page-tpl");if(!tpl)return;
      main.insertBefore(tpl.content.cloneNode(true),main.firstChild);
      if(window.__aeoReveal){
        window.__aeoReveal([document.querySelector(".aeo-contact-shell")],0,0);
      }
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
