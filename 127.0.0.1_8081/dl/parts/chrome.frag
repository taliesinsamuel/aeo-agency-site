<style id="aeo-chrome-style">
/* ============================================================
   DESIGN TOKENS — single source of truth for every aeo-* class.
   Loaded on every page (home + subpages) before any other frag.
   ============================================================ */
:root{
  --aeo-ink:#1c1d1f;
  --aeo-ink-2:#3a4150;
  --aeo-ink-3:#6f7988;
  --aeo-ink-4:#8f99a8;
  --aeo-ink-5:#a4adba;
  --aeo-line:#e9ecf1;
  --aeo-line-strong:#dee2e7;
  --aeo-line-dash:#e2e5ea;
  --aeo-surface:#fff;
  --aeo-surface-2:#fafafb;
  --aeo-surface-3:#f3f4f6;
  --aeo-accent:#266df0;
  --aeo-accent-lo:#5c8bf5;
  --aeo-accent-hi:#1f5ad4;
  --aeo-accent-ink:#245bc2;
  --aeo-accent-soft:#e8f0ff;
  --aeo-violet:#8c6ef5;
  --aeo-teal:#2dbfa8;
  --aeo-night:#0e0f11;
  --aeo-night-2:#15171a;

  --aeo-r-sm:10px;
  --aeo-r-md:12px;
  --aeo-r-lg:16px;
  --aeo-r-xl:20px;
  --aeo-r-2xl:24px;

  /* easing: -out for entrances, -e for interaction, -spring for pops */
  --aeo-e:cubic-bezier(.22,1,.36,1);
  --aeo-e-out:cubic-bezier(.33,1,.68,1);
  --aeo-e-spring:cubic-bezier(.34,1.32,.52,1);

  /* elevation ladder — every aeo surface picks a rung, never a one-off */
  --aeo-sh-1:0 1px 2px rgba(16,17,20,.05);
  --aeo-sh-2:0 1px 2px rgba(16,17,20,.05),0 6px 14px -8px rgba(16,17,20,.14);
  --aeo-sh-3:0 1px 2px rgba(16,17,20,.05),0 14px 30px -14px rgba(16,17,20,.16),0 32px 64px -48px rgba(16,17,20,.24);
  --aeo-sh-4:0 1px 2px rgba(16,17,20,.05),0 24px 48px -24px rgba(16,17,20,.18),0 64px 120px -72px rgba(16,17,20,.28);
  --aeo-sh-lift:0 2px 4px rgba(16,17,20,.05),0 30px 60px -28px rgba(38,109,240,.24),0 72px 130px -80px rgba(16,17,20,.30);
  --aeo-ring:0 0 0 3px rgba(38,109,240,.18);

  --aeo-grad-accent:linear-gradient(135deg,#266df0,#8c6ef5);
  --aeo-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E");
}
/* Technical display face, self-hosted so it costs one request and never
   blocks. Only the AEO statistics section uses it. */
@font-face{
  font-family:"Geist Mono";
  src:url("assets/fonts/geistmono.woff2") format("woff2");
  font-weight:100 900;
  font-style:normal;
  font-display:swap;
}
:root{--aeo-mono:"Geist Mono",ui-monospace,SFMono-Regular,"SF Mono","JetBrains Mono","IBM Plex Mono",Menlo,monospace}
html{scroll-padding-top:88px}
@media (prefers-reduced-motion:no-preference){html{scroll-behavior:smooth}}
::selection{background:rgba(38,109,240,.16);color:var(--aeo-ink)}

/* ---- shared section shell ---- */
/* overflow:hidden lives on the bg decoration layer, not on .aeo-plat
   itself: an ancestor with overflow other than visible becomes the
   containing scrollport for any position:sticky descendant (e.g. the
   stacked-card pin below), which silently turns "sticky" into "stuck at
   its flow position" instead of "pinned to the viewport". Clipping the
   ambient blobs one level down gets the same visual result without ever
   putting a non-viewport scrollport in the ancestor chain. */
.aeo-plat{position:relative;background:var(--aeo-surface);font-family:var(--font-inter),"Inter",system-ui,sans-serif}
.aeo-plat *{box-sizing:border-box}
.aeo-plat-bg{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0}
.aeo-plat-inner{position:relative;z-index:1;max-width:1200px;margin:0 auto;padding:clamp(64px,8vw,120px) 24px clamp(72px,9vw,128px)}
.aeo-plat-intro{text-align:center;max-width:860px;margin:0 auto clamp(44px,5vw,70px)}

/* ---- eyebrow pill ----
   Reused verbatim from the real Attio badge component (the "Platform" tag
   above "The intelligent system that never sleeps" in the CRM showcase
   further down this page): inline-flex, h-6, rounded-lg (8px), bg-blue-100,
   px-1.5, 14px/500 text-blue-600, leading-5, tracking -0.14px. No icon, no
   dot, no border, no shadow — just the label. */
.aeo-pill{display:inline-flex;align-items:center;height:24px;border-radius:8px;background:#e8f0ff;padding:0 6px;font-size:14px;font-weight:500;letter-spacing:-.14px;line-height:20px;color:#245bc2}
.aeo-pill-center{margin:0 auto 18px}

/* ---- headings / lead ---- */
.aeo-h2{font-family:"Inter Display",Inter,sans-serif;font-weight:600;font-size:clamp(32px,4.4vw,54px);line-height:1.04;letter-spacing:-.028em;margin:0;text-wrap:balance;background:linear-gradient(176deg,#131417 42%,#41506a);-webkit-background-clip:text;background-clip:text;color:transparent}
.aeo-lead{font-size:clamp(16.5px,1.35vw,19.5px);line-height:1.52;color:var(--aeo-ink-3);margin:18px auto 0;max-width:58ch;font-weight:500;letter-spacing:-.008em;text-wrap:balance}

/* ---- ambient blobs ---- */
.aeo-blob{position:absolute;border-radius:50%;filter:blur(90px);opacity:.55;will-change:transform;display:block;pointer-events:none}
.aeo-blob-a{width:54vw;height:54vw;background:radial-gradient(circle at 35% 35%,rgba(38,109,240,.20),rgba(38,109,240,0) 62%);top:-14%;left:-16%;animation:aeo-drift-a 26s ease-in-out infinite alternate}
.aeo-blob-b{width:50vw;height:50vw;background:radial-gradient(circle at 60% 40%,rgba(140,110,245,.16),rgba(140,110,245,0) 62%);bottom:-16%;right:-14%;animation:aeo-drift-b 32s ease-in-out infinite alternate}
.aeo-blob-c{width:38vw;height:38vw;background:radial-gradient(circle at 50% 50%,rgba(38,190,170,.13),rgba(38,190,170,0) 60%);top:32%;left:40%;animation:aeo-drift-c 38s ease-in-out infinite alternate}
@keyframes aeo-drift-a{to{transform:translate(9vw,7vh) scale(1.12)}}
@keyframes aeo-drift-b{to{transform:translate(-7vw,-8vh) scale(1.08)}}
@keyframes aeo-drift-c{to{transform:translate(-6vw,6vh) scale(1.15)}}

/* ============================================================
   BUTTON SYSTEM — one geometry, three skins.
   Hover = 1.5px rise + shadow bloom + gradient travel + sheen.
   Gradient travel uses background-position (not a pseudo overlay)
   so the label always stays above the moving light.
   ============================================================ */
.aeo-btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:44px;padding:0 22px;border-radius:var(--aeo-r-md);font-size:14.5px;font-weight:600;letter-spacing:-.006em;text-decoration:none;cursor:pointer;border:1px solid transparent;font-family:inherit;overflow:hidden;-webkit-tap-highlight-color:transparent;background-repeat:no-repeat;transition:transform .3s var(--aeo-e),box-shadow .3s var(--aeo-e),background-color .25s var(--aeo-e),background-position .7s var(--aeo-e),border-color .25s var(--aeo-e),color .2s var(--aeo-e)}
.aeo-btn::after{content:"";position:absolute;top:0;bottom:0;left:0;width:38%;border-radius:inherit;background:linear-gradient(100deg,transparent,rgba(255,255,255,.4),transparent);transform:translateX(-160%) skewX(-14deg);opacity:0;pointer-events:none}
.aeo-btn:hover{transform:translateY(-1.5px)}
.aeo-btn:active{transform:translateY(0) scale(.985);transition-duration:.09s}
.aeo-btn:focus-visible{outline:none;box-shadow:var(--aeo-ring),var(--aeo-sh-2)}
@keyframes aeo-sheen{0%{opacity:0;transform:translateX(-160%) skewX(-14deg)}22%{opacity:1}100%{opacity:0;transform:translateX(420%) skewX(-14deg)}}

.aeo-btn--primary{background-image:linear-gradient(112deg,#2c2c31,#141416 44%,#2c2c31);background-size:230% 100%;background-position:0 0;color:#fff;box-shadow:0 1px 2px rgba(16,17,20,.18),0 6px 14px -8px rgba(16,17,20,.32),inset 0 1px 0 rgba(255,255,255,.10)}
.aeo-btn--primary:hover{background-position:100% 0;box-shadow:0 1px 2px rgba(16,17,20,.18),0 14px 30px -10px rgba(16,17,20,.44),inset 0 1px 0 rgba(255,255,255,.15)}

.aeo-btn--blue{background-image:linear-gradient(112deg,#4b87f6,#2260da 46%,#4079f1 78%,#5d95f8);background-size:230% 100%;background-position:0 0;color:#fff;box-shadow:0 1px 2px rgba(16,17,20,.16),0 8px 20px -10px rgba(38,109,240,.48),inset 0 1px 0 rgba(255,255,255,.24)}
.aeo-btn--blue:hover{background-position:100% 0;box-shadow:0 2px 4px rgba(16,17,20,.14),0 16px 32px -10px rgba(38,109,240,.6),inset 0 1px 0 rgba(255,255,255,.3)}

.aeo-btn--ghost{background-color:var(--aeo-surface);color:var(--aeo-ink);border-color:var(--aeo-line-strong);box-shadow:var(--aeo-sh-1)}
.aeo-btn--ghost:hover{background-color:var(--aeo-surface-2);border-color:#ccd3de;box-shadow:var(--aeo-sh-2)}

.aeo-btn--primary:hover::after,.aeo-btn--blue:hover::after{animation:aeo-sheen .9s var(--aeo-e) forwards}

/* The hero CTAs are Attio's own components. Re-skin them in place so the most
   important buttons on the site share the language above. */
.aeo-hero .button-primary,.aeo-hero .button-outline{height:44px!important;padding:0 22px!important;border-radius:var(--aeo-r-md)!important;font-size:14.5px!important;font-weight:600!important;letter-spacing:-.006em}
.aeo-hero .button-primary{background-image:linear-gradient(112deg,#2c2c31,#141416 44%,#2c2c31)!important;background-size:230% 100%!important;background-position:0 0;color:#fff!important;border-color:transparent!important;box-shadow:0 1px 2px rgba(16,17,20,.18),0 6px 14px -8px rgba(16,17,20,.32),inset 0 1px 0 rgba(255,255,255,.10);transition:background-position .7s var(--aeo-e),box-shadow .3s var(--aeo-e),transform .3s var(--aeo-e)!important}
.aeo-hero .button-primary:hover{background-position:100% 0;transform:translateY(-1.5px);box-shadow:0 1px 2px rgba(16,17,20,.18),0 14px 30px -10px rgba(16,17,20,.44),inset 0 1px 0 rgba(255,255,255,.15)}
.aeo-hero .button-outline{background-color:var(--aeo-surface)!important;border-color:var(--aeo-line-strong)!important;color:var(--aeo-ink)!important;box-shadow:var(--aeo-sh-1);transition:background-color .25s var(--aeo-e),border-color .25s var(--aeo-e),box-shadow .3s var(--aeo-e),transform .3s var(--aeo-e)!important}
.aeo-hero .button-outline:hover{background-color:var(--aeo-surface-2)!important;border-color:#ccd3de!important;box-shadow:var(--aeo-sh-2);transform:translateY(-1.5px)}
.aeo-hero .button-primary:active,.aeo-hero .button-outline:active{transform:translateY(0) scale(.985)}
.aeo-hero .button-ghost{transition:opacity .2s var(--aeo-e)!important}
.aeo-hero .button-ghost:hover{opacity:.68}
.aeo-hero input[type="text"],.aeo-hero input[type="email"]{border-radius:var(--aeo-r-md)!important;transition:border-color .22s var(--aeo-e),box-shadow .22s var(--aeo-e)!important}
.aeo-hero input[type="text"]:focus,.aeo-hero input[type="email"]:focus{outline:none!important;border-color:var(--aeo-accent)!important;box-shadow:var(--aeo-ring)!important}

/* ============================================================
   SCROLL REVEAL — opt-in via [data-aeo-rv]; --d carries stagger.
   ============================================================ */
[data-aeo-rv]{opacity:0;transform:translateY(18px);transition:opacity .85s var(--aeo-e) var(--aeo-d,0ms),transform .85s var(--aeo-e) var(--aeo-d,0ms)}
[data-aeo-rv].in{opacity:1;transform:none}

/* ---- hero aurora (--aeo-par is driven by the parallax loop) ---- */
.aeo-hero{position:relative}
.aeo-hero h1{letter-spacing:-.032em;text-wrap:balance}
.aeo-hero::before{content:"";position:absolute;inset:-10% 0 0;z-index:0;pointer-events:none;will-change:transform;transform:translate3d(0,var(--aeo-par,0px),0);background:radial-gradient(42% 46% at 16% 10%,rgba(38,109,240,.11),transparent 70%),radial-gradient(36% 42% at 84% 6%,rgba(140,110,245,.10),transparent 70%),radial-gradient(34% 40% at 52% 52%,rgba(38,190,170,.07),transparent 72%);animation:aeo-hero-hue 20s ease-in-out infinite alternate}
@keyframes aeo-hero-hue{to{filter:hue-rotate(16deg)}}

/* ---- header: turns to glass once you leave the hero ---- */
header{transition:background-color .35s var(--aeo-e),box-shadow .35s var(--aeo-e),backdrop-filter .35s var(--aeo-e)}
header[data-aeo-scrolled="1"]{background-color:rgba(255,255,255,.82)!important;-webkit-backdrop-filter:saturate(180%) blur(16px);backdrop-filter:saturate(180%) blur(16px);box-shadow:0 1px 0 rgba(16,17,20,.06),0 10px 30px -24px rgba(16,17,20,.4)}

/* ---- nav ----
   A true 3-column grid, not flex space-between: the two outer columns
   are always equal width (1fr each), so the middle column is genuinely
   centered on the header's own axis regardless of how wide the brand or
   the Book a Call button happen to be — not "centered" only because the
   leftover flex space happened to be even. */
.aeo-nav{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:16px;width:100%;font-size:15px;font-weight:500}
.aeo-nav-brand{display:inline-flex;align-items:center;justify-self:start;text-decoration:none;padding:4px 2px}
.aeo-nav-brand .aeo-brand{transition:opacity .2s var(--aeo-e)}
.aeo-nav-brand:hover .aeo-brand{opacity:.72}
.aeo-nav-links{position:relative;display:flex;align-items:center;gap:2px;justify-self:center}
/* font size/weight, colour, radius and hover/active tints are lifted
   verbatim from Attio's own nav (.button-ghost): 15px/500, #2e3238 at
   rest, a light-grey #f3f4f6 pill with #232529 text on hover, 10px
   corners, 36px-tall targets — reused as-is, only the copy changed. */
.aeo-nav-links a{position:relative;z-index:1;color:#2e3238;text-decoration:none;padding:9px 12px;border-radius:10px;letter-spacing:-.006em;white-space:nowrap;transition:color .3s var(--aeo-e)}
/* one shared surface travels between links instead of each owning its own
   pill — sized/positioned in JS from the hovered link's own rect, so it
   reads as a single highlight sliding across the bar, not separate boxed
   buttons flashing on and off */
.aeo-nav-hl{position:absolute;top:0;left:0;z-index:0;height:100%;width:0;border-radius:10px;background:#f3f4f6;opacity:0;pointer-events:none;transition:opacity .16s var(--aeo-e),transform .22s var(--aeo-e),width .22s var(--aeo-e);will-change:transform,width}
@media (hover:hover) and (pointer:fine){
  .aeo-nav-links a:hover{color:#232529}
}
/* min-width:max-content restores the grid item's natural content size —
   without it, a grid track shrinks an overflow:hidden child down to 0
   before it shrinks any sibling that doesn't clip its own overflow,
   which is what was squeezing the button's label into two lines on
   narrower widths */
.aeo-nav-right{justify-self:end;min-width:max-content}
/* identical box model to "Get your free audit" (.aeo-btn / Attio's own
   button-primary re-skin): 44px tall, 0 22px, 12px corners, 14.5px — the
   nav CTA and the hero CTA read as literally the same button. */
.aeo-nav-book{height:44px;padding:0 22px;border-radius:var(--aeo-r-md);font-size:14.5px}
/* Its own compositing layer, isolated from the glass header's backdrop-filter
   behind it — some engines render a faint pale halo around a rounded,
   overflow:hidden child sitting on a blurred backdrop otherwise. The sheen
   flourish (::after) is dropped entirely here too: one less moving part on
   the one button that has to sit rock-solid, un-glitched, in a fixed header. */
.aeo-nav-book{isolation:isolate;will-change:transform}
.aeo-nav-book::after{content:none;display:none}
@media (max-width:760px){
  .aeo-nav{gap:8px;grid-template-columns:auto 1fr auto}
  .aeo-nav-links{gap:0;justify-self:end}
  .aeo-nav-links a{padding:7px 9px;font-size:13px}
  .aeo-nav-links a:first-child{display:none}
  .aeo-nav-book{height:38px;padding:0 16px;font-size:13px}
}
.aeo-nav-book-short{display:none}
@media (max-width:420px){
  .aeo-nav-book{padding:0 13px}
  .aeo-nav-book-full{display:none}
  .aeo-nav-book-short{display:inline}
}
.aeo-brand{font-family:"Inter Display",Inter,sans-serif;font-weight:700;font-size:19px;letter-spacing:-.025em;color:var(--aeo-ink);white-space:nowrap}
.aeo-brand i{font-style:normal;color:var(--aeo-accent);text-shadow:0 0 12px rgba(38,109,240,.45)}

/* ============================================================
   FOOTER — atmospheric dark close with noise + hairline seam.
   ============================================================ */
.aeo-foot{width:100%;background:linear-gradient(180deg,#101215,var(--aeo-night) 42%,#0a0b0d);color:#e6e8ec;font-family:var(--font-inter),"Inter",system-ui,sans-serif;position:relative;overflow:hidden}
.aeo-foot *{box-sizing:border-box}
.aeo-foot::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(38,109,240,.55) 22%,rgba(140,110,245,.5) 55%,transparent);pointer-events:none}
.aeo-foot::after{content:"";position:absolute;inset:0;background-image:var(--aeo-noise);opacity:.035;mix-blend-mode:overlay;pointer-events:none}
.aeo-foot-glow{position:absolute;left:50%;top:-40%;width:80vw;height:60vh;transform:translateX(-50%);background:radial-gradient(50% 60% at 50% 40%,rgba(38,109,240,.18),transparent 70%);filter:blur(60px);pointer-events:none;animation:aeo-foot-breathe 14s ease-in-out infinite alternate}
@keyframes aeo-foot-breathe{to{opacity:.62;transform:translateX(-50%) scale(1.12)}}
.aeo-foot-inner{position:relative;z-index:1;max-width:1200px;margin:0 auto;padding:64px 24px 36px}
.aeo-foot-top{display:flex;justify-content:space-between;gap:48px;flex-wrap:wrap;padding-bottom:44px;border-bottom:1px solid rgba(255,255,255,.08)}
.aeo-foot-brand{max-width:320px}
.aeo-foot-brand .aeo-brand{color:#fff;font-size:22px}
.aeo-foot-brand .aeo-brand i{color:#6f9dfa}
.aeo-foot-brand p{margin:12px 0 0;font-size:14px;line-height:1.58;color:#9aa2af;font-weight:500}
.aeo-foot-cols{display:flex;gap:clamp(36px,6vw,96px);flex-wrap:wrap}
.aeo-foot-col h4{margin:0 0 14px;font-size:12.5px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:#8d95a3}
.aeo-foot-col a{display:block;width:fit-content;color:#d3d7de;text-decoration:none;font-size:14px;font-weight:500;padding:5px 0;transition:color .22s var(--aeo-e),transform .28s var(--aeo-e)}
.aeo-foot-col a:hover{color:#fff;transform:translateX(3px)}
.aeo-foot-bottom{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;padding-top:26px;font-size:13px;color:#8d95a3;font-weight:500}
.aeo-foot-bottom a{color:#c6cbd4;text-decoration:none;transition:color .2s var(--aeo-e)}
.aeo-foot-bottom a:hover{color:#fff}

@media (prefers-reduced-motion: reduce){
  .aeo-blob,.aeo-hero::before,.aeo-foot-glow{animation:none}
  .aeo-hero::before{transform:none}
  [data-aeo-rv]{opacity:1;transform:none;transition:none}
  .aeo-btn::after{animation:none!important}
}
</style>
<script id="aeo-chrome-script">
(function(){
  var reduce=false;try{reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){}
  var fine=true;try{fine=window.matchMedia("(pointer:fine)").matches;}catch(e){}

  function fixLinks(){
    var as=document.querySelectorAll("a[href]");
    for(var i=0;i<as.length;i++){
      var a=as[i],h=a.getAttribute("href")||"";
      if(!h)continue;
      if(/^(#|mailto:|tel:)/.test(h))continue;
      if(/^(\.\/|pricing\.html|contact\.html|book\.html|index\.html)/.test(h))continue;
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
    // Attio ships a dark promo bar above the nav. It has no job here, and it is
    // also the element that used to capture the wordmark, so it goes first.
    var banner=header.querySelector(".site-banner");
    if(banner&&banner.style.display!=="none")banner.style.display="none";
    var nav=header.querySelector("nav");
    if(nav&&nav.getAttribute("data-aeo")!=="1"){
      nav.setAttribute("data-aeo","1");
      nav.innerHTML='<div class="aeo-nav">'+
        '<a class="aeo-nav-brand" href="./"><span class="aeo-brand">Answered<i>.</i></span></a>'+
        '<div class="aeo-nav-links"><span class="aeo-nav-hl" aria-hidden="true"></span><a href="./">Home</a><a href="pricing.html">Pricing</a><a href="contact.html">Free audit</a></div>'+
        '<div class="aeo-nav-right"><a class="aeo-btn aeo-btn--primary aeo-nav-book" href="book.html">'+
          '<span class="aeo-nav-book-full">Book a Call</span><span class="aeo-nav-book-short" aria-hidden="true">Call</span>'+
        '</a></div>'+
      '</div>';
    }
  }
  /* ---- nav: one highlight surface that travels between links on hover ---- */
  function wireNavHighlight(){
    var wrap=document.querySelector(".aeo-nav-links");
    if(!wrap||!fine||wrap.getAttribute("data-aeo-hl")==="1")return;
    var hl=wrap.querySelector(".aeo-nav-hl");
    if(!hl)return;
    wrap.setAttribute("data-aeo-hl","1");
    function moveTo(a){
      var wr=wrap.getBoundingClientRect(),r=a.getBoundingClientRect();
      hl.style.width=r.width+"px";
      hl.style.transform="translateX("+(r.left-wr.left)+"px)";
      hl.style.opacity="1";
    }
    var links=wrap.querySelectorAll("a");
    for(var i=0;i<links.length;i++){
      links[i].addEventListener("pointerenter",function(){moveTo(this);});
    }
    wrap.addEventListener("pointerleave",function(){hl.style.opacity="0";});
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
          '<div class="aeo-foot-col"><h4>Company</h4><a href="pricing.html">Pricing</a><a href="contact.html">Free audit</a><a href="book.html">Book a call</a></div>'+
          '<div class="aeo-foot-col"><h4>Contact</h4><a href="mailto:hello@answered.agency">hello@answered.agency</a><a href="contact.html">Get in touch</a></div>'+
        '</div>'+
      '</div>'+
      '<div class="aeo-foot-bottom"><span>\u00a9 2026 Answered. All rights reserved.</span><span>Tracking ChatGPT \u00b7 Perplexity \u00b7 Gemini \u00b7 Claude</span></div>'+
    '</div>';
  }

  /* ---- dead CTAs ----
     Attio wires its hero and closing CTAs to app logic that no longer exists,
     so they render as <button>s that go nowhere. On mobile that left the hero
     with no working call to action at all. */
  var CTA_RE=/^\s*(book a call|get (your|my) free audit|start for free|talk to sales)\s*$/i;
  var CTA_BOOK_RE=/^\s*book a call\s*$/i;
  function fixCtas(){
    var btns=document.querySelectorAll("button");
    for(var i=0;i<btns.length;i++){
      var b=btns[i];
      if((b.getAttribute("type")||"")==="submit")continue;
      var t=(b.textContent||"").replace(/\s+/g," ").trim();
      if(!CTA_RE.test(t))continue;
      var a=document.createElement("a");
      a.setAttribute("href",CTA_BOOK_RE.test(t)?"book.html":"contact.html");
      a.setAttribute("data-aeo-cta","1");
      a.className=b.className;
      a.innerHTML=b.innerHTML;
      b.parentNode.replaceChild(a,b);
    }
    var forms=document.querySelectorAll("form");
    for(var f=0;f<forms.length;f++){
      var fm=forms[f];
      if(fm.id==="aeo-audit-form"||fm.id==="aeo-book-form")continue;
      if(fm.getAttribute("data-aeo-cta"))continue;
      fm.setAttribute("data-aeo-cta","1");
      fm.addEventListener("submit",function(ev){
        ev.preventDefault();
        window.location.href="contact.html";
      });
    }
  }

  /* ---- header glass state ---- */
  function wireHeader(){
    var h=document.querySelector("header");
    if(!h||h.getAttribute("data-aeo-hdr")==="1")return;
    h.setAttribute("data-aeo-hdr","1");
    var last=null;
    function upd(){
      var on=(window.pageYOffset||document.documentElement.scrollTop||0)>28?"1":"0";
      if(on!==last){last=on;h.setAttribute("data-aeo-scrolled",on);}
    }
    window.addEventListener("scroll",upd,{passive:true});
    upd();
  }

  /* ---- scroll reveal: shared observer, exposed for other frags ---- */
  var rvIO=null;
  function revealIO(){
    if(rvIO||reduce||!("IntersectionObserver" in window))return rvIO;
    rvIO=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(!e.isIntersecting)return;
        rvIO.unobserve(e.target);
        e.target.classList.add("in");
      });
    },{threshold:.15,rootMargin:"0px 0px -6% 0px"});
    return rvIO;
  }
  function observe(list,step,base){
    var io=revealIO();
    for(var i=0;i<list.length;i++){
      var n=list[i];
      if(!n||!n.getAttribute)continue;
      if(n.getAttribute("data-aeo-rv"))continue;
      n.setAttribute("data-aeo-rv","1");
      var d=(base||0)+i*(step||0);
      if(d)n.style.setProperty("--aeo-d",d+"ms");
      if(io)io.observe(n);else n.classList.add("in");
    }
  }
  // Section intros animate in as a staggered group; anything the other
  // fragments tag with [data-aeo-rv-auto] joins the same choreography.
  function scanReveal(){
    var intros=document.querySelectorAll(".aeo-plat-intro");
    for(var i=0;i<intros.length;i++){
      if(intros[i].getAttribute("data-aeo-scan"))continue;
      intros[i].setAttribute("data-aeo-scan","1");
      observe(intros[i].children,90,0);
    }
    var manual=document.querySelectorAll("[data-aeo-rv-auto]:not([data-aeo-rv])");
    for(var j=0;j<manual.length;j++){
      manual[j].removeAttribute("data-aeo-rv-auto");
      observe([manual[j]],0,0);
    }
  }
  window.__aeoReveal=function(nodes,step,base){observe(nodes,step==null?90:step,base||0);};

  /* ============================================================
     SCROLL ENGINE — one rAF-throttled loop for every scroll-driven
     effect on the page. Subscribers register a read pass and a write
     pass; the engine runs every read before any write so no effect can
     force a second layout inside the same frame.
     ============================================================ */
  var subs=[],queued=false,vh=0;
  function measure(){vh=window.innerHeight||document.documentElement.clientHeight||0;}
  function frame(){
    queued=false;
    var y=window.pageYOffset||document.documentElement.scrollTop||0,i;
    for(i=0;i<subs.length;i++){if(subs[i].r)try{subs[i].r(y,vh);}catch(e){}}
    for(i=0;i<subs.length;i++){if(subs[i].w)try{subs[i].w(y,vh);}catch(e){}}
  }
  function kick(){if(queued)return;queued=true;requestAnimationFrame(frame);}
  measure();
  window.addEventListener("scroll",kick,{passive:true});
  window.addEventListener("resize",function(){measure();kick();},{passive:true});
  window.addEventListener("orientationchange",function(){measure();kick();},{passive:true});
  // Late-loading fonts and images move things; re-run once they land.
  window.addEventListener("load",function(){measure();kick();});
  window.__aeoScroll=function(read,write){subs.push({r:read,w:write});kick();};
  window.__aeoScrollKick=kick;

  /* ---- hero aurora parallax: background drifts slower than content ---- */
  function wireParallax(){
    if(reduce)return;
    var hero=document.querySelector(".aeo-hero");
    if(!hero||hero.getAttribute("data-aeo-par")==="1")return;
    hero.setAttribute("data-aeo-par","1");
    window.__aeoScroll(null,function(y){
      if(y>1400)return;
      hero.style.setProperty("--aeo-par",(y*0.14).toFixed(1)+"px");
    });
  }

  /* ---- pointer-tracked highlight for card surfaces ---- */
  window.__aeoSpotlight=function(node){
    if(!fine||reduce||!node||node.getAttribute("data-aeo-spot")==="1")return;
    node.setAttribute("data-aeo-spot","1");
    node.addEventListener("pointermove",function(ev){
      var r=node.getBoundingClientRect();
      node.style.setProperty("--aeo-mx",((ev.clientX-r.left)/r.width*100).toFixed(1)+"%");
      node.style.setProperty("--aeo-my",((ev.clientY-r.top)/r.height*100).toFixed(1)+"%");
    },{passive:true});
  };

  function tick(){fixNav();wireNavHighlight();fixFooter();fixLinks();fixCtas();wireHeader();wireParallax();scanReveal();}
  var n=0,iv=setInterval(function(){tick();if(++n>80)clearInterval(iv);},160);
  document.addEventListener("DOMContentLoaded",tick);
  window.addEventListener("load",tick);
  var mo=new MutationObserver(tick);
  try{mo.observe(document.body||document.documentElement,{childList:true,subtree:true});}catch(e){}
  setTimeout(function(){try{mo.disconnect();}catch(e){}},13000);
})();
</script>
