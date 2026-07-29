<style id="aeo-chrome-style">
/* ---- shared tokens / classes (available on every page) ---- */
.aeo-plat{position:relative;background:#fff;font-family:var(--font-inter),"Inter",system-ui,sans-serif;overflow:hidden}
.aeo-plat *{box-sizing:border-box}
.aeo-plat-inner{position:relative;z-index:1;max-width:1200px;margin:0 auto;padding:clamp(64px,8vw,120px) 24px clamp(72px,9vw,128px)}
.aeo-plat-intro{text-align:center;max-width:860px;margin:0 auto clamp(40px,5vw,66px)}
.aeo-pill{display:inline-flex;align-items:center;gap:7px;font-size:12.5px;font-weight:600;letter-spacing:.01em;color:var(--color-blue-600,#245bc2);background:var(--color-blue-100,#e8f0ff);border:1px solid rgba(38,109,240,.16);padding:5px 12px;border-radius:999px}
.aeo-pill::before{content:"";width:6px;height:6px;border-radius:999px;background:linear-gradient(135deg,#266df0,#8c6ef5);animation:aeo-pill-pulse 2.4s ease-in-out infinite}
@keyframes aeo-pill-pulse{0%,100%{opacity:.45;transform:scale(.85)}50%{opacity:1;transform:scale(1)}}
.aeo-pill-center{margin:0 auto 18px}
.aeo-h2{font-family:"Inter Display",Inter,sans-serif;font-weight:600;font-size:clamp(32px,4.4vw,54px);line-height:1.02;letter-spacing:-.025em;margin:0;text-wrap:balance;background:linear-gradient(180deg,#1c1d1f 55%,#3d4c66);-webkit-background-clip:text;background-clip:text;color:transparent}
.aeo-lead{font-size:clamp(17px,1.4vw,20px);line-height:1.4;color:var(--color-black-700,#6f7988);margin:18px auto 0;max-width:60ch;font-weight:500;text-wrap:balance}
.aeo-blob{position:absolute;border-radius:50%;filter:blur(90px);opacity:.55;will-change:transform;display:block;pointer-events:none}
.aeo-blob-a{width:54vw;height:54vw;background:radial-gradient(circle at 35% 35%,rgba(38,109,240,.20),rgba(38,109,240,0) 62%);top:-14%;left:-16%;animation:aeo-drift-a 26s ease-in-out infinite alternate}
.aeo-blob-b{width:50vw;height:50vw;background:radial-gradient(circle at 60% 40%,rgba(140,110,245,.16),rgba(140,110,245,0) 62%);bottom:-16%;right:-14%;animation:aeo-drift-b 32s ease-in-out infinite alternate}
.aeo-blob-c{width:38vw;height:38vw;background:radial-gradient(circle at 50% 50%,rgba(38,190,170,.13),rgba(38,190,170,0) 60%);top:32%;left:40%;animation:aeo-drift-c 38s ease-in-out infinite alternate}
@keyframes aeo-drift-a{to{transform:translate(9vw,7vh) scale(1.12)}}
@keyframes aeo-drift-b{to{transform:translate(-7vw,-8vh) scale(1.08)}}
@keyframes aeo-drift-c{to{transform:translate(-6vw,6vh) scale(1.15)}}
.aeo-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:44px;padding:0 22px;border-radius:12px;font-size:14.5px;font-weight:600;text-decoration:none;cursor:pointer;border:1px solid transparent;transition:transform .25s cubic-bezier(.33,1,.68,1),box-shadow .25s,background .2s;font-family:inherit}
.aeo-btn:hover{transform:translateY(-1px)}
.aeo-btn--primary{background:linear-gradient(180deg,#2f2f33,#161618);color:#fff;box-shadow:0 1px 2px rgba(16,16,16,.2),inset 0 1px 0 rgba(255,255,255,.08)}
.aeo-btn--primary:hover{box-shadow:0 6px 18px -6px rgba(28,29,31,.45),inset 0 1px 0 rgba(255,255,255,.08)}
.aeo-btn--blue{background:linear-gradient(180deg,#3d7bf3,#2260da);color:#fff;box-shadow:0 1px 2px rgba(16,16,16,.18),inset 0 1px 0 rgba(255,255,255,.16)}
.aeo-btn--blue:hover{box-shadow:0 8px 22px -6px rgba(38,109,240,.55),inset 0 1px 0 rgba(255,255,255,.16)}
.aeo-btn--ghost{background:#fff;color:#1c1d1f;border-color:var(--color-white-600,#dee2e7);box-shadow:0 1px 2px rgba(16,16,16,.05)}
.aeo-btn--ghost:hover{background:var(--color-white-200,#fafafb)}

/* ---- hero aurora ---- */
.aeo-hero{position:relative}
.aeo-hero::before{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(42% 46% at 16% 10%,rgba(38,109,240,.10),transparent 70%),radial-gradient(36% 42% at 84% 6%,rgba(140,110,245,.10),transparent 70%),radial-gradient(30% 36% at 55% 58%,rgba(38,190,170,.07),transparent 72%);animation:aeo-hero-hue 20s ease-in-out infinite alternate}
@keyframes aeo-hero-hue{to{filter:hue-rotate(16deg)}}

/* ---- simplified nav ---- */
.aeo-nav{display:flex;gap:6px;align-items:center;font-size:14px;font-weight:500}
.aeo-nav a{color:var(--color-black-300,#232529);text-decoration:none;padding:7px 13px;border-radius:9px;transition:background .18s}
.aeo-nav a:hover{background:var(--color-white-300,#f3f4f6)}
.aeo-brand{font-family:"Inter Display",Inter,sans-serif;font-weight:700;font-size:19px;letter-spacing:-.02em;color:#1c1d1f;white-space:nowrap}
.aeo-brand i{font-style:normal;color:#266df0}

/* ---- rebuilt footer ---- */
.aeo-foot{width:100%;background:#0e0f11;color:#e6e8ec;font-family:var(--font-inter),"Inter",system-ui,sans-serif;position:relative;overflow:hidden}
.aeo-foot *{box-sizing:border-box}
.aeo-foot-glow{position:absolute;left:50%;top:-40%;width:80vw;height:60vh;transform:translateX(-50%);background:radial-gradient(50% 60% at 50% 40%,rgba(38,109,240,.16),transparent 70%);filter:blur(60px);pointer-events:none}
.aeo-foot-inner{position:relative;max-width:1200px;margin:0 auto;padding:64px 24px 36px}
.aeo-foot-top{display:flex;justify-content:space-between;gap:48px;flex-wrap:wrap;padding-bottom:44px;border-bottom:1px solid rgba(255,255,255,.08)}
.aeo-foot-brand{max-width:320px}
.aeo-foot-brand .aeo-brand{color:#fff;font-size:22px}
.aeo-foot-brand p{margin:12px 0 0;font-size:14px;line-height:1.55;color:#9aa2af;font-weight:500}
.aeo-foot-cols{display:flex;gap:clamp(36px,6vw,96px);flex-wrap:wrap}
.aeo-foot-col h4{margin:0 0 14px;font-size:12.5px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:#8d95a3}
.aeo-foot-col a{display:block;color:#d3d7de;text-decoration:none;font-size:14px;font-weight:500;padding:5px 0;transition:color .18s}
.aeo-foot-col a:hover{color:#fff}
.aeo-foot-bottom{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;padding-top:26px;font-size:13px;color:#8d95a3;font-weight:500}
.aeo-foot-bottom a{color:#c6cbd4;text-decoration:none}
.aeo-foot-bottom a:hover{color:#fff}
@media (prefers-reduced-motion: reduce){.aeo-blob,.aeo-hero::before,.aeo-pill::before{animation:none}}
</style>
<script id="aeo-chrome-script">
(function(){
  function fixLinks(){
    var as=document.querySelectorAll("a[href]");
    for(var i=0;i<as.length;i++){
      var a=as[i],h=a.getAttribute("href")||"";
      if(!h)continue;
      if(/^(#|mailto:|tel:)/.test(h))continue;
      if(/^(\.\/|pricing\.html|contact\.html|index\.html)/.test(h))continue;
      if(h.indexOf("./#")===0)continue;
      var n=null;
      if(/sign-in/i.test(h))n="contact.html";
      else if(/app\.eSOZMHKB8k26|app\.attio/i.test(h))n="contact.html";
      else if(/pricing/i.test(h))n="pricing.html";
      else if(h.charAt(0)==="/"&&h.length>1)n="./";
      else if(h==="/")n="./";
      else if(/^https?:\/\//i.test(h)&&h.indexOf("127.0.0.1")===-1)n="./";
      if(n)a.setAttribute("href",n);
      // hide sign-in style links
      if(/^\s*(sign in|log in)\s*$/i.test(a.textContent||""))a.style.display="none";
    }
  }
  function fixNav(){
    var header=document.querySelector("header");if(!header)return;
    var nav=header.querySelector("nav");
    if(nav&&nav.getAttribute("data-aeo")!=="1"){
      nav.setAttribute("data-aeo","1");
      nav.innerHTML='<div class="aeo-nav"><a href="./">Home</a><a href="./#aeo-platform">What we do</a><a href="pricing.html">Pricing</a><a href="contact.html">Free audit</a></div>';
    }
    // swap Attio logo for wordmark
    var logo=header.querySelector('a[href="./"] svg, a[href="/"] svg');
    if(logo){
      var link=logo.closest("a");
      if(link&&link.getAttribute("data-aeo")!=="1"){
        link.setAttribute("data-aeo","1");
        link.setAttribute("href","./");
        link.innerHTML='<span class="aeo-brand">Answered<i>.</i></span>';
      }
    }
  }
  function fixFooter(){
    var f=document.querySelector("footer");
    if(!f||f.getAttribute("data-aeo")==="1")return;
    f.setAttribute("data-aeo","1");
    f.removeAttribute("class");
    f.className="aeo-foot";
    f.innerHTML='<div class="aeo-foot-glow"></div><div class="aeo-foot-inner">'+
      '<div class="aeo-foot-top">'+
        '<div class="aeo-foot-brand"><span class="aeo-brand">Answered<i>.</i></span><p>The answer engine optimization agency for local businesses. Be the business AI recommends.</p></div>'+
        '<div class="aeo-foot-cols">'+
          '<div class="aeo-foot-col"><h4>What we do</h4><a href="./#aeo-platform">AI visibility tracking</a><a href="./#aeo-platform">Site structure &amp; schema</a><a href="./#aeo-platform">Content AI quotes</a><a href="./#aeo-platform">Reviews &amp; citations</a></div>'+
          '<div class="aeo-foot-col"><h4>Company</h4><a href="pricing.html">Pricing</a><a href="contact.html">Free audit</a><a href="contact.html">Book a call</a></div>'+
          '<div class="aeo-foot-col"><h4>Contact</h4><a href="mailto:hello@answered.agency">hello@answered.agency</a><a href="contact.html">Get in touch</a></div>'+
        '</div>'+
      '</div>'+
      '<div class="aeo-foot-bottom"><span>\u00a9 2026 Answered. All rights reserved.</span><span>Tracking ChatGPT \u00b7 Perplexity \u00b7 Gemini \u00b7 Claude</span></div>'+
    '</div>';
  }
  function tick(){fixNav();fixFooter();fixLinks();}
  var n=0,iv=setInterval(function(){tick();if(++n>60)clearInterval(iv);},160);
  document.addEventListener("DOMContentLoaded",tick);
  window.addEventListener("load",tick);
  var mo=new MutationObserver(tick);
  try{mo.observe(document.body||document.documentElement,{childList:true,subtree:true});}catch(e){}
  setTimeout(function(){try{mo.disconnect();}catch(e){}},10000);
})();
</script>
