<style id="aeo-pricing-style">
.aeo-subpage .aeo-plat-inner{padding-top:clamp(120px,14vw,170px)}
.aeo-price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;align-items:stretch}
.aeo-price{position:relative;display:flex;flex-direction:column;background:linear-gradient(180deg,#fff,#fcfdff);border:1px solid rgba(28,29,31,.09);border-radius:var(--aeo-r-xl);padding:30px 28px;box-shadow:var(--aeo-sh-3);transition:transform .5s var(--aeo-e),box-shadow .5s var(--aeo-e),border-color .3s var(--aeo-e);opacity:0;transform:translateY(22px)}
.aeo-price.in{opacity:1;transform:none}
.aeo-price:hover{transform:translateY(-6px);border-color:rgba(38,109,240,.22);box-shadow:var(--aeo-sh-lift)}
.aeo-price--hot{border-color:transparent;z-index:1}
/* the popular plan gets a slowly travelling gradient rim and its own glow */
.aeo-price--hot::before{content:"";position:absolute;inset:0;border-radius:inherit;padding:1.5px;background:linear-gradient(135deg,#266df0,#8c6ef5 35%,#2dbfa8 60%,#266df0);background-size:220% 220%;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;pointer-events:none;animation:aeo-rim 9s ease-in-out infinite alternate}
@keyframes aeo-rim{to{background-position:100% 100%}}
.aeo-price--hot:hover{border-color:transparent}
.aeo-price-flag{position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:11.5px;font-weight:700;letter-spacing:.03em;color:#fff;background:var(--aeo-grad-accent);padding:5px 14px;border-radius:999px;white-space:nowrap;box-shadow:0 6px 16px -6px rgba(38,109,240,.6),inset 0 1px 0 rgba(255,255,255,.28)}
.aeo-price-name{font-family:"Inter Display",Inter,sans-serif;font-size:19px;font-weight:600;color:var(--aeo-ink);letter-spacing:-.018em}
.aeo-price-sub{margin-top:6px;font-size:13.5px;line-height:1.55;color:var(--aeo-ink-3);font-weight:500;min-height:40px}
.aeo-price-amount{display:flex;align-items:baseline;gap:7px;margin:18px 0 4px}
.aeo-price-num{font-family:"Inter Display",Inter,sans-serif;font-size:44px;font-weight:700;letter-spacing:-.03em;color:var(--aeo-ink);line-height:1;font-variant-numeric:tabular-nums}
.aeo-price-per{font-size:14px;font-weight:500;color:var(--aeo-ink-4)}
.aeo-price-feats{margin:20px 0 26px;padding:18px 0 0;border-top:1px solid var(--aeo-line);display:flex;flex-direction:column;gap:11px;flex:1}
.aeo-price-feat{display:flex;align-items:flex-start;gap:10px;font-size:14px;line-height:1.5;color:var(--aeo-ink-2);font-weight:500}
.aeo-price-feat svg{width:12px;height:12px;flex:none;margin-top:3px;padding:3px;border-radius:999px;color:#16a34a;background:rgba(22,163,74,.10);box-sizing:content-box}
.aeo-price-feat.dim{color:var(--aeo-ink-4)}
.aeo-price .aeo-btn{width:100%}
.aeo-price-note{text-align:center;margin:26px auto 0;font-size:13.5px;color:var(--aeo-ink-4);font-weight:500}
@media (min-width:961px){
  .aeo-price--hot.in{transform:translateY(-10px)}
  .aeo-price--hot:hover{transform:translateY(-16px)}
}

/* FAQ */
.aeo-faq{max-width:760px;margin:clamp(72px,9vw,120px) auto 0}
.aeo-faq-h{text-align:center;margin-bottom:34px}
.aeo-faq details{border:1px solid var(--aeo-line);border-radius:var(--aeo-r-lg);background:linear-gradient(180deg,#fff,#fcfdfe);margin-bottom:12px;overflow:hidden;transition:box-shadow .35s var(--aeo-e),border-color .25s var(--aeo-e)}
.aeo-faq details:hover{border-color:#dbe0e8;box-shadow:var(--aeo-sh-2)}
.aeo-faq details[open]{border-color:rgba(38,109,240,.18);box-shadow:0 1px 2px rgba(16,17,20,.05),0 18px 40px -26px rgba(28,29,31,.30)}
.aeo-faq summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:14px;padding:17px 18px 17px 20px;font-size:15.5px;font-weight:600;letter-spacing:-.012em;color:var(--aeo-ink);font-family:inherit;transition:color .2s var(--aeo-e)}
.aeo-faq summary::-webkit-details-marker{display:none}
.aeo-faq summary:hover{color:var(--aeo-accent-ink)}
.aeo-faq summary:focus-visible{outline:none;box-shadow:inset var(--aeo-ring)}
.aeo-faq summary::after{content:"";width:26px;height:26px;flex:none;border-radius:999px;background-color:var(--aeo-surface-3);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M6 8.5l4 4 4-4' stroke='%236f7988' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-position:center;background-repeat:no-repeat;background-size:13px;transition:transform .4s var(--aeo-e),background-color .25s var(--aeo-e)}
.aeo-faq details[open] summary::after{transform:rotate(180deg);background-color:var(--aeo-accent-soft)}
.aeo-faq-wrap{overflow:hidden;height:0;transition:height .42s var(--aeo-e)}
.aeo-faq-a{padding:0 20px 18px;font-size:14.5px;line-height:1.65;color:#5b6472;font-weight:500}

/* CTA band */
.aeo-cta-band{position:relative;margin-top:clamp(72px,9vw,120px);border-radius:var(--aeo-r-2xl);background:linear-gradient(180deg,#12141a,var(--aeo-night) 60%,#0a0b0d);overflow:hidden;text-align:center;padding:clamp(52px,6vw,84px) 28px;box-shadow:0 30px 70px -40px rgba(16,17,20,.55)}
.aeo-cta-band::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:2;box-shadow:inset 0 1px 0 rgba(255,255,255,.10),inset 0 0 0 1px rgba(255,255,255,.05)}
.aeo-cta-band::after{content:"";position:absolute;inset:0;background-image:var(--aeo-noise);opacity:.05;mix-blend-mode:overlay;pointer-events:none;z-index:2}
.aeo-cta-band .bg{position:absolute;inset:0;pointer-events:none;overflow:hidden;border-radius:inherit}
.aeo-cta-band .bg i{position:absolute;border-radius:50%;filter:blur(70px);display:block}
.aeo-cta-band .bg i:nth-child(1){width:44vw;height:44vw;left:-10%;top:-70%;background:radial-gradient(circle,rgba(38,109,240,.30),transparent 65%);animation:aeo-drift-a 24s ease-in-out infinite alternate}
.aeo-cta-band .bg i:nth-child(2){width:38vw;height:38vw;right:-8%;bottom:-80%;background:radial-gradient(circle,rgba(140,110,245,.24),transparent 65%);animation:aeo-drift-b 30s ease-in-out infinite alternate}
.aeo-cta-band h2{position:relative;z-index:1;font-family:"Inter Display",Inter,sans-serif;font-weight:600;font-size:clamp(28px,3.6vw,44px);letter-spacing:-.028em;line-height:1.06;margin:0 0 14px;background:linear-gradient(176deg,#fff 42%,#9db9f2);-webkit-background-clip:text;background-clip:text;color:transparent;text-wrap:balance}
.aeo-cta-band p{position:relative;z-index:1;margin:0 auto 30px;font-size:16px;line-height:1.55;color:#aab1bd;font-weight:500;max-width:48ch}
.aeo-cta-band .aeo-btn{position:relative;z-index:3}
@media (max-width:960px){.aeo-price-grid{grid-template-columns:1fr;max-width:460px;margin:0 auto}}
@media (prefers-reduced-motion: reduce){
  .aeo-price{opacity:1;transform:none;transition:none}
  .aeo-price--hot::before{animation:none}
  .aeo-faq-wrap{transition:none}
  .aeo-faq summary::after{transition:none}
}
</style>
<template id="aeo-page-tpl">
<section class="aeo-plat aeo-subpage" id="aeo-page">
  <div class="aeo-plat-bg"><i class="aeo-blob aeo-blob-a"></i><i class="aeo-blob aeo-blob-b"></i></div>
  <div class="aeo-plat-inner">
    <div class="aeo-plat-intro">
      <span class="aeo-pill aeo-pill-center">Pricing</span>
      <h1 class="aeo-h2" style="font-size:clamp(38px,5vw,62px)">Plans that pay for themselves</h1>
      <p class="aeo-lead">Straightforward monthly retainers, matched to how much ground you need to cover. No long-term contracts. You stay because it works.</p>
    </div>
    <div class="aeo-price-grid">
      <div class="aeo-price">
        <div class="aeo-price-name">Core</div>
        <div class="aeo-price-sub">Get found by AI, measured and moving in the right direction.</div>
        <div class="aeo-price-amount"><span class="aeo-price-num">$2,500</span><span class="aeo-price-per">/month</span></div>
        <div class="aeo-price-feats">
          <div class="aeo-price-feat"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>AI visibility baseline across ChatGPT, Perplexity, Gemini &amp; Claude</div>
          <div class="aeo-price-feat"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Buyer-question research for your market</div>
          <div class="aeo-price-feat"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Schema markup on core pages (Organization, LocalBusiness, FAQ)</div>
          <div class="aeo-price-feat"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>3&ndash;5 answer-ready pages optimized every month</div>
          <div class="aeo-price-feat"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Monthly AI-mention tracking &amp; reporting call</div>
        </div>
        <a class="aeo-btn aeo-btn--ghost" href="book.html?plan=core">Start with Core</a>
      </div>
      <div class="aeo-price aeo-price--hot">
        <span class="aeo-price-flag">Most popular</span>
        <div class="aeo-price-name">Premium</div>
        <div class="aeo-price-sub">Everything it takes to become the answer in your market.</div>
        <div class="aeo-price-amount"><span class="aeo-price-num">$5,000</span><span class="aeo-price-per">/month</span></div>
        <div class="aeo-price-feats">
          <div class="aeo-price-feat"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Everything in Core</div>
          <div class="aeo-price-feat"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Broader buyer-intent prompt coverage, tracked against named competitors</div>
          <div class="aeo-price-feat"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>6&ndash;10 pages or content pieces built every month</div>
          <div class="aeo-price-feat"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Citation &amp; authority building across directories and review platforms</div>
          <div class="aeo-price-feat"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Weekly AI-mention monitoring, quarterly strategy review</div>
        </div>
        <a class="aeo-btn aeo-btn--blue" href="book.html?plan=premium">Start with Premium</a>
      </div>
      <div class="aeo-price">
        <div class="aeo-price-name">Custom</div>
        <div class="aeo-price-sub">For multi-location or complex accounts that need a bespoke plan.</div>
        <div class="aeo-price-amount"><span class="aeo-price-num">Custom</span></div>
        <div class="aeo-price-feats">
          <div class="aeo-price-feat"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Everything in Premium</div>
          <div class="aeo-price-feat"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Custom AI-search strategy for multi-location or complex accounts</div>
          <div class="aeo-price-feat"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Website rebuild for AI readability and conversion</div>
          <div class="aeo-price-feat"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Larger-scale authority &amp; PR-led citation campaigns</div>
          <div class="aeo-price-feat"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Dedicated strategist and custom reporting cadence</div>
        </div>
        <a class="aeo-btn aeo-btn--ghost" href="book.html?plan=custom">Talk to us</a>
      </div>
    </div>
    <p class="aeo-price-note">Prices in USD. Month to month. Cancel anytime. Everything we build stays yours.</p>
    <div class="aeo-faq">
      <div class="aeo-faq-h"><span class="aeo-pill aeo-pill-center">FAQ</span><h2 class="aeo-h2" style="font-size:clamp(26px,3vw,38px)">Questions, answered</h2></div>
      <details open><summary>What is answer engine optimization?</summary><div class="aeo-faq-wrap"><div class="aeo-faq-a">When customers ask ChatGPT, Perplexity, Gemini or Claude &ldquo;who&rsquo;s the best plumber near me?&rdquo;, those engines pick a handful of businesses to recommend. AEO is the work of making sure your business is one of them: structured data, content the engines want to quote, and the reviews and citations they check before recommending anyone.</div></div></details>
      <details><summary>How long until I see results?</summary><div class="aeo-faq-wrap"><div class="aeo-faq-a">Most clients see their mention rate start moving within 30&ndash;60 days. The full effect typically lands around 90 days, once new pages and citations have been crawled and picked up by the engines.</div></div></details>
      <details><summary>How do you measure &ldquo;recommended by AI&rdquo;?</summary><div class="aeo-faq-wrap"><div class="aeo-faq-a">Every month we run hundreds of real customer questions through each AI engine and count how often your business is named. That gives you a mention rate: a single number you can watch climb, benchmarked against your competitors.</div></div></details>
      <details><summary>Do I need a new website?</summary><div class="aeo-faq-wrap"><div class="aeo-faq-a">No. We work with your existing site. We add structured data, fix what AI can&rsquo;t read, and publish new pages inside your current setup. You keep full ownership of everything.</div></div></details>
      <details><summary>What happens if I cancel?</summary><div class="aeo-faq-wrap"><div class="aeo-faq-a">Everything stays yours: the schema, the pages, the citations and the reviews. There are no lock-ins and nothing is removed. Most of the work keeps compounding after we stop.</div></div></details>
    </div>
    <div class="aeo-cta-band">
      <div class="bg"><i></i><i></i></div>
      <h2>Be the business AI recommends.</h2>
      <p>Start with a free audit. See your mention rate, your competitors&rsquo;, and exactly what it takes to win.</p>
      <a class="aeo-btn aeo-btn--blue" href="contact.html">Get your free audit</a>
    </div>
  </div>
</section>
</template>
<script id="aeo-page-script">
(function(){
  var reduce=false;try{reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){}

  /* <details> has no animatable height, so we drive the wrapper ourselves and
     only flip the open attribute at the edges of the transition. */
  function wireFaq(){
    var list=document.querySelectorAll(".aeo-faq details");
    if(!list.length)return;
    function collapse(d,instant){
      var w=d.querySelector(".aeo-faq-wrap");
      if(!w||!d.open)return;
      if(instant||reduce){d.open=false;w.style.height="";return;}
      w.style.height=w.scrollHeight+"px";
      w.getBoundingClientRect();
      w.style.height="0px";
      w.addEventListener("transitionend",function h(){
        w.removeEventListener("transitionend",h);
        d.open=false;w.style.height="";
      });
    }
    function expand(d){
      var w=d.querySelector(".aeo-faq-wrap");
      d.open=true;
      if(!w)return;
      if(reduce){w.style.height="auto";return;}
      w.style.height="0px";
      w.getBoundingClientRect();
      w.style.height=w.scrollHeight+"px";
      w.addEventListener("transitionend",function h(){
        w.removeEventListener("transitionend",h);
        if(d.open)w.style.height="auto";
      });
    }
    for(var i=0;i<list.length;i++){
      (function(d){
        if(d.getAttribute("data-aeo")==="1")return;
        d.setAttribute("data-aeo","1");
        var w=d.querySelector(".aeo-faq-wrap");
        if(d.open&&w)w.style.height="auto";
        var sum=d.querySelector("summary");
        if(!sum)return;
        sum.addEventListener("click",function(ev){
          ev.preventDefault();
          if(d.open){collapse(d);return;}
          for(var j=0;j<list.length;j++)if(list[j]!==d)collapse(list[j]);
          expand(d);
        });
      })(list[i]);
    }
  }
  function mount(){
    var main=document.querySelector("main");if(!main)return;
    if(!document.getElementById("aeo-page")){
      var tpl=document.getElementById("aeo-page-tpl");if(!tpl)return;
      main.insertBefore(tpl.content.cloneNode(true),main.firstChild);
      reveal();
      wireFaq();
      if(window.__aeoReveal){
        window.__aeoReveal(document.querySelectorAll(".aeo-faq details"),70,0);
        window.__aeoReveal([document.querySelector(".aeo-cta-band")],0,0);
      }
    }
    var kids=main.children;
    for(var i=0;i<kids.length;i++){
      var k=kids[i];
      if(k.id==="aeo-page")continue;
      if(k.style.display!=="none")k.style.display="none";
    }
  }
  function reveal(){
    var cards=document.querySelectorAll(".aeo-price");
    var reduce=false;try{reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){}
    if(reduce||!("IntersectionObserver" in window)){cards.forEach(function(c){c.classList.add("in");});return;}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(!e.isIntersecting)return;io.unobserve(e.target);
      var d=(e.target.getAttribute("data-i")||0)*140;
      (function(t){setTimeout(function(){t.classList.add("in");},d);})(e.target);
    });},{threshold:.15});
    cards.forEach(function(c,i){c.setAttribute("data-i",i);io.observe(c);});
  }
  var n=0,iv=setInterval(function(){mount();if(++n>70)clearInterval(iv);},150);
  document.addEventListener("DOMContentLoaded",mount);
  window.addEventListener("load",mount);
  var mo=new MutationObserver(mount);
  try{mo.observe(document.body||document.documentElement,{childList:true,subtree:true});}catch(e){}
  setTimeout(function(){try{mo.disconnect();}catch(e){}},11000);
})();
</script>
