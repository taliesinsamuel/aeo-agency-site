<style id="aeo-plat-style">
/* Shared tokens and the .aeo-plat / .aeo-pill / .aeo-h2 / .aeo-blob
   primitives all live in chrome.frag, which is injected first. Only
   platform-specific styles belong below. */

/* Soft seam out of the hero instead of a hard 1px rule. */
#aeo-platform::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(28,29,31,.10) 25%,rgba(28,29,31,.10) 75%,transparent);z-index:2;pointer-events:none}

/* ============================================================
   STACKED CARDS — the four demonstrations behave like a deck of
   premium panels. Card 1 rests in place; each following card rises
   from below and settles on top, covering (not replacing) the one
   beneath. Scroll position maps to a single 0–1 progress per card via
   the shared rAF-throttled engine (window.__aeoScroll); every frame
   only ever touches transform/filter/opacity, so this stays smooth
   under fast scrolling. The card underneath eases back very slightly
   (scale + a few px of lift) as the next one arrives, which is what
   sells the "physical stack" read without any rotation or bounce.
   ============================================================ */
.aeo-stack{
  position:relative;
  --aeo-stack-slot:54svh;--aeo-stack-hold:4svh;
  height:calc(100svh + var(--aeo-stack-slot) * 3 + var(--aeo-stack-hold));
}
.aeo-stack-pin{
  position:sticky;top:0;height:100svh;overflow:hidden;
  box-sizing:border-box;
}
.aeo-card{
  position:absolute;left:50%;top:50%;
  transform:translate(-50%,-50%);
  width:min(1180px,calc(100% - 12px));
  max-height:min(560px,calc(100svh - 128px));
  will-change:transform;
  background:linear-gradient(180deg,#fff,#fbfcfe);
  border:1px solid rgba(28,29,31,.08);
  border-radius:var(--aeo-r-2xl);
  box-shadow:var(--aeo-sh-4);
  transition:box-shadow .3s var(--aeo-e),border-color .3s var(--aeo-e);
}
/* thin, sharp brand-blue ring only — no halo, no blur, no soft outer glow */
.aeo-card::before{
  content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;
  opacity:0;transition:opacity .2s var(--aeo-e);
  box-shadow:0 0 0 1.5px var(--aeo-accent);
}
@media (hover:hover) and (pointer:fine){
  .aeo-card:hover::before{opacity:1}
}
.aeo-card-inner{display:grid;grid-template-columns:minmax(0,0.82fr) minmax(0,1.18fr);align-items:center;height:100%;overflow:hidden;border-radius:inherit}
.aeo-row-copy{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:15px;padding:clamp(28px,3.4vw,52px) clamp(24px,2.8vw,42px);height:100%;box-sizing:border-box}
.aeo-row-viz{display:flex;align-items:center;justify-content:center;padding:clamp(20px,2.4vw,36px) clamp(24px,2.8vw,42px) clamp(20px,2.4vw,36px) 0;height:100%;box-sizing:border-box;min-width:0}
@media (prefers-reduced-motion:reduce){.aeo-card{transition:none}}
.aeo-h3{font-family:"Inter Display",Inter,sans-serif;font-weight:600;font-size:clamp(23px,2.5vw,33px);line-height:1.1;letter-spacing:-.024em;color:var(--aeo-ink);margin:0;text-wrap:balance}
.aeo-rtext{font-size:clamp(15px,1.1vw,16.5px);line-height:1.55;letter-spacing:-.008em;color:var(--aeo-ink-3);font-weight:500;margin:0;max-width:42ch}

/* ---- shared panel: IDENTICAL dimensions across all four ---- */
.aeo-panel{position:relative;width:100%;max-width:560px;height:430px;border-radius:var(--aeo-r-xl);overflow:hidden;font-family:var(--font-inter),"Inter",system-ui,sans-serif;text-align:left;box-shadow:var(--aeo-sh-4);transition:transform .55s var(--aeo-e),box-shadow .55s var(--aeo-e)}
.aeo-panel:hover{transform:translateY(-5px);box-shadow:var(--aeo-sh-lift)}
/* light that tracks the pointer — the surface reacts, nothing moves */
.aeo-panel::before{content:"";position:absolute;inset:0;z-index:3;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .5s var(--aeo-e);background:radial-gradient(280px circle at var(--aeo-mx,50%) var(--aeo-my,0%),rgba(38,109,240,.12),transparent 62%)}
.aeo-panel:hover::before{opacity:1}
.aeo-panel--code::before{background:radial-gradient(280px circle at var(--aeo-mx,50%) var(--aeo-my,0%),rgba(120,170,255,.15),transparent 62%)}
.aeo-panel::after{content:"";position:absolute;inset:0;z-index:4;border-radius:inherit;padding:1px;background:linear-gradient(135deg,rgba(38,109,240,.35),rgba(140,110,245,.18) 40%,rgba(38,109,240,0) 70%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;pointer-events:none;transition:background .5s var(--aeo-e)}
.aeo-panel:hover::after{background:linear-gradient(135deg,rgba(38,109,240,.6),rgba(140,110,245,.34) 42%,rgba(38,109,240,.06) 72%)}

/* ===== viz 1: visibility analytics panel (no window chrome) ===== */
.aeo-panel--vis{background:linear-gradient(180deg,#fff,#fcfdff);border:1px solid rgba(28,29,31,.09);padding:20px 22px 16px;display:flex;flex-direction:column}
.aeo-vis-wrap{display:flex;flex-direction:column;flex:1;transition:opacity .4s cubic-bezier(.33,1,.68,1)}
.aeo-vis-top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
.aeo-vis-label{font-size:12.5px;font-weight:600;color:var(--color-black-700,#6f7988);margin-bottom:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:290px}
.aeo-vis-score{display:flex;align-items:baseline;gap:10px}
.aeo-vis-num{font-family:"Inter Display",Inter,sans-serif;font-size:38px;font-weight:700;line-height:1;letter-spacing:-.02em;color:var(--color-black-100,#1c1d1f);font-variant-numeric:tabular-nums}
.aeo-vis-delta{font-size:12.5px;font-weight:600;color:#0f8a4f}
.aeo-vis-toggle{display:inline-flex;padding:3px;border-radius:10px;background:var(--color-white-300,#f3f4f6);border:1px solid var(--color-white-500,#e4e7ec);flex:none}
.aeo-vis-toggle span{font-size:12px;font-weight:600;color:var(--color-black-700,#6f7988);padding:4px 10px;border-radius:7px}
.aeo-vis-toggle span.on{background:#fff;color:var(--color-black-100,#1c1d1f);box-shadow:0 1px 2px rgba(16,16,16,.12)}
.aeo-vis-chart{position:relative;height:84px;margin:14px 0 0}
.aeo-vis-chart svg{width:100%;height:100%;display:block;overflow:visible}
.aeo-vis-line{fill:none;stroke:var(--color-blue-500,#266df0);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke}
.aeo-vis-area{fill:url(#aeoVisFill);opacity:0;transition:opacity .8s ease .35s}
.aeo-vis-area.in{opacity:1}
.aeo-vis-dates{display:flex;justify-content:space-between;font-size:10px;font-weight:500;color:var(--color-black-900,#a4adba);padding:5px 2px 0;font-variant-numeric:tabular-nums}
.aeo-vis-models{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:13px 0;margin-top:9px;border-top:1px solid var(--color-white-400,#edeff3);border-bottom:1px solid var(--color-white-400,#edeff3)}
.aeo-vm{display:flex;flex-direction:column;align-items:flex-start;gap:6px}
.aeo-vm-top{display:inline-flex;align-items:center;gap:6px}
.aeo-vm-logo{width:20px;height:20px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;flex:none;box-shadow:0 1px 2px rgba(16,16,16,.12)}
.aeo-vm-logo svg{width:12px;height:12px;display:block}
.aeo-vm-name{font-size:10.5px;font-weight:600;color:var(--color-black-800,#8f99a8);white-space:nowrap}
.aeo-vm-pct{font-size:17px;font-weight:700;color:var(--color-black-100,#1c1d1f);font-variant-numeric:tabular-nums;letter-spacing:-.01em}
.aeo-vis-rank{margin-top:13px;display:flex;flex-direction:column;gap:9px}
.aeo-vr{display:flex;align-items:center;gap:10px}
.aeo-vr-rank{width:11px;font-size:12px;font-weight:600;color:var(--color-black-800,#a4adba);flex:none;font-variant-numeric:tabular-nums}
.aeo-vr-name{width:94px;font-size:12.5px;font-weight:600;color:var(--color-black-300,#232529);flex:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.aeo-vr-track{flex:1;height:8px;border-radius:999px;background:var(--color-white-400,#edeff3);overflow:hidden}
.aeo-vr-fill{height:100%;width:0;border-radius:999px;background:var(--color-white-700,#cfd4db);transition:width 1s cubic-bezier(.33,1,.68,1)}
.aeo-vr-val{width:34px;text-align:right;font-size:12.5px;font-weight:600;color:var(--color-black-700,#6f7988);font-variant-numeric:tabular-nums;flex:none}
.aeo-vr.you .aeo-vr-name{color:var(--color-blue-600,#245bc2);font-weight:700}
.aeo-vr.you .aeo-vr-rank{color:var(--color-blue-600,#245bc2)}
.aeo-vr.you .aeo-vr-track{background:var(--color-blue-100,#e8f0ff)}
.aeo-vr.you .aeo-vr-fill{background:linear-gradient(90deg,var(--color-blue-400,#5c8bf5),var(--color-blue-500,#266df0));box-shadow:0 0 12px -2px rgba(38,109,240,.6)}
.aeo-vr.you .aeo-vr-val{color:var(--color-blue-600,#245bc2)}

/* ===== viz 2: code editor pane ===== */
.aeo-panel--code{background:linear-gradient(180deg,#0e141c,#0b1016);border:1px solid #1c2430;display:flex;flex-direction:column}
.aeo-ed-tab{display:flex;align-items:center;gap:9px;height:42px;padding:0 15px;background:linear-gradient(180deg,#1a212b,#161b22);border-bottom:1px solid #1f2530;flex:none;box-shadow:inset 0 1px 0 rgba(255,255,255,.05)}
.aeo-ed-dots{display:flex;gap:7px;margin-right:5px}
.aeo-ed-dot{width:11px;height:11px;border-radius:999px;display:block}
.aeo-ed-fname{font-size:12.5px;font-weight:600;color:#9aa4b2;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
.aeo-ed-lang{margin-left:auto;font-size:10.5px;font-weight:700;color:#5b6472;letter-spacing:.06em}
.aeo-ed-body{flex:1;overflow:hidden;position:relative}
.aeo-code{margin:0;padding:15px 0;list-style:none;font-family:ui-monospace,SFMono-Regular,Menlo,"Roboto Mono",monospace;font-size:12.5px;line-height:1.92;position:relative}
.aeo-cl{display:flex;position:relative}
.aeo-cl .ln{width:46px;flex:none;text-align:right;padding-right:16px;color:#495261;user-select:none}
.aeo-cl .cd{color:#c9d1d9;white-space:pre;padding-right:16px}
.aeo-cl.hl{background:rgba(56,110,240,.12);box-shadow:inset 3px 0 0 #3b82f6}
.aeo-cl .type{display:inline-block;overflow:hidden;white-space:pre;vertical-align:bottom;width:0px}
.tok-key{color:#7ee787}
.tok-str{color:#a5d6ff}
.tok-num{color:#f0883e}
.aeo-cd-caret{display:inline-block;width:7px;height:1em;transform:translateY(2px);background:#3b82f6;animation:aeo-blink2 1s steps(1) infinite}
@keyframes aeo-blink2{0%,50%{opacity:1}50.01%,100%{opacity:0}}
.aeo-ed-foot{position:absolute;left:0;right:0;bottom:0;display:flex;align-items:center;gap:10px;height:30px;padding:0 15px;background:#161b22;border-top:1px solid #1f2530;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;color:#5b6472}
.aeo-ed-ok{display:inline-flex;align-items:center;gap:5px;color:#3fb950;font-weight:600}
.aeo-ed-ok svg{width:11px;height:11px}

/* ===== viz 3: ChatGPT conversation ===== */
.aeo-panel--chat{background:linear-gradient(180deg,#fff,#fcfdff);border:1px solid rgba(28,29,31,.09);display:flex;flex-direction:column;padding:20px 22px 18px}
.aeo-c3-wrap{flex:1;display:flex;flex-direction:column;min-height:0;transition:opacity .4s cubic-bezier(.33,1,.68,1)}
.aeo-c3-scroll{flex:1;display:flex;flex-direction:column;gap:16px;overflow:hidden}
.aeo-c3-user{display:flex;justify-content:flex-end}
.aeo-c3-user .b{max-width:82%;background:var(--color-white-300,#f3f4f6);color:var(--color-black-100,#1c1d1f);font-size:14px;line-height:1.5;font-weight:500;padding:10px 15px;border-radius:18px 18px 5px 18px;opacity:0;transform:translateY(4px);transition:opacity .35s,transform .35s}
.aeo-c3-user .b.in{opacity:1;transform:none}
.aeo-c3-ai{display:flex;gap:11px;transition:opacity .3s}
.aeo-c3-av{width:26px;height:26px;border-radius:999px;background:#000;color:#fff;display:inline-flex;align-items:center;justify-content:center;flex:none}
.aeo-c3-av svg{width:15px;height:15px}
.aeo-c3-ans{flex:1;min-width:0;font-size:14px;line-height:1.6;color:var(--color-black-100,#1c1d1f);min-height:112px;padding-top:2px}
.aeo-c3-ans .aeo-tok{white-space:pre-wrap}
.aeo-c3-biz{font-weight:700;color:var(--color-blue-600,#245bc2)}
.aeo-cite{display:inline-flex;align-items:center;gap:4px;vertical-align:baseline;margin:0 2px;padding:1px 8px 1px 6px;border-radius:7px;background:var(--color-white-300,#f3f4f6);border:1px solid var(--color-white-500,#e4e7ec);font-size:11.5px;font-weight:600;color:var(--color-black-600,#505967);white-space:nowrap}
.aeo-cite svg{width:11px;height:11px;flex:none}
.aeo-c3-src{display:flex;align-items:center;gap:12px;margin-top:14px;padding:12px 13px;border:1px solid var(--color-white-500,#e4e7ec);border-radius:13px;background:var(--color-white-200,#fafafb);opacity:0;transform:translateY(6px);transition:opacity .4s cubic-bezier(.33,1,.68,1),transform .4s cubic-bezier(.33,1,.68,1)}
.aeo-c3-src.in{opacity:1;transform:none}
.aeo-c3-src-ic{width:34px;height:34px;border-radius:9px;background:var(--color-blue-100,#e8f0ff);color:var(--color-blue-600,#245bc2);display:inline-flex;align-items:center;justify-content:center;flex:none}
.aeo-c3-src-ic svg{width:18px;height:18px}
.aeo-c3-src-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.aeo-c3-src-t{font-size:13px;font-weight:700;color:var(--color-black-100,#1c1d1f);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.aeo-c3-src-m{font-size:12px;color:var(--color-black-800,#8f99a8);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}

/* ===== viz 4: ChatGPT Activity / sources panel ===== */
.aeo-panel--act{background:linear-gradient(180deg,#fff,#fcfdff);border:1px solid rgba(28,29,31,.09);padding:18px 22px 14px;display:flex;flex-direction:column}
.aeo-act-status{display:flex;align-items:center;gap:11px;font-size:13.5px;font-weight:600;color:var(--color-black-200,#202124);padding-bottom:14px;border-bottom:1px solid var(--color-white-400,#edeff3)}
.aeo-act-spin{width:15px;height:15px;border-radius:999px;border:2px solid var(--color-white-600,#dee2e7);border-top-color:var(--color-black-500,#3d434d);animation:aeo-spin .7s linear infinite;flex:none}
@keyframes aeo-spin{to{transform:rotate(360deg)}}
.aeo-act-check{width:17px;height:17px;border-radius:999px;background:#16a34a;color:#fff;display:none;align-items:center;justify-content:center;flex:none}
.aeo-act-check svg{width:10px;height:10px}
.aeo-panel--act.done .aeo-act-spin{display:none}
.aeo-panel--act.done .aeo-act-check{display:inline-flex}
.aeo-act-q{margin-left:auto;font-size:11.5px;font-weight:500;color:var(--color-black-800,#a4adba);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:46%}
.aeo-act-srchead{font-size:12.5px;font-weight:600;color:var(--color-black-700,#6f7988);margin:13px 0 1px;opacity:0;transition:opacity .3s}
.aeo-panel--act.done .aeo-act-srchead{opacity:1}
.aeo-act-list{display:flex;flex-direction:column}
.aeo-act-row{display:flex;align-items:center;gap:11px;padding:9px 2px;border-top:1px solid var(--color-white-400,#edeff3);opacity:0;transform:translateY(6px);transition:opacity .4s cubic-bezier(.33,1,.68,1),transform .4s cubic-bezier(.33,1,.68,1)}
.aeo-act-row:first-child{border-top:none}
.aeo-act-row.in{opacity:1;transform:none}
.aeo-act-fav{width:27px;height:27px;border-radius:8px;background:linear-gradient(180deg,#fff,#f6f7f9);border:1px solid var(--color-white-500,#e4e7ec);display:inline-flex;align-items:center;justify-content:center;flex:none;box-shadow:0 1px 2px rgba(16,17,20,.06)}
.aeo-act-fav svg{width:15px;height:15px;display:block}
.aeo-act-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}
.aeo-act-dom{font-size:12.5px;font-weight:600;color:var(--color-black-200,#202124)}
.aeo-act-desc{font-size:11.5px;color:var(--color-black-800,#8f99a8);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}

@media (max-width:860px){
  /* minmax(0,1fr) not 1fr: the code panel's pre-formatted lines have a wide
     min-content, and an auto minimum lets them stretch the column past the
     viewport. Stack copy above viz inside the card and let the card grow
     to fit both rather than clipping either. */
  .aeo-card{max-height:min(640px,calc(100svh - 96px));overflow-y:auto}
  .aeo-card-inner{grid-template-columns:minmax(0,1fr);grid-auto-rows:min-content;height:auto;min-height:100%}
  .aeo-row-copy,.aeo-row-viz{min-width:0;height:auto}
  .aeo-row-copy{padding-bottom:8px;gap:10px}
  .aeo-row-viz{padding-top:4px}
  .aeo-rtext{max-width:none}
  .aeo-stack{--aeo-stack-slot:56svh;--aeo-stack-hold:4svh}
}
@media (max-width:520px){
  .aeo-row-copy{padding:22px 18px 6px}
  .aeo-row-viz{padding:2px 16px 18px}
  .aeo-panel{height:392px;border-radius:var(--aeo-r-lg)}
  /* four engine names side by side have a wider min-content than a phone,
     so the model row becomes 2x2 rather than being clipped */
  .aeo-panel--vis{padding:16px 16px 12px;height:428px}
  .aeo-vis-models{grid-template-columns:repeat(2,1fr);gap:12px 10px;padding:11px 0;margin-top:7px}
  .aeo-vis-chart{height:64px;margin-top:10px}
  .aeo-vis-num{font-size:32px}
  /* the range toggle is chrome, not information — drop it and give the
     headline metric the full width instead of squeezing both */
  .aeo-vis-toggle{display:none}
  .aeo-vis-top>div:first-child{min-width:0}
  .aeo-vis-label{max-width:100%}
  .aeo-vis-score{flex-wrap:wrap}
  .aeo-vis-rank{margin-top:11px;gap:8px}
  .aeo-vr-name{width:86px}
  .aeo-panel--chat,.aeo-panel--act{padding-left:16px;padding-right:16px}
}
/* No-JS / unsupported-observer fallback: lay the cards out normally so the
   content is never lost, just less choreographed. */
.aeo-stack.aeo-stack--static{height:auto}
.aeo-stack.aeo-stack--static .aeo-stack-pin{position:static;height:auto;display:flex;flex-direction:column;gap:28px;padding:32px 0}
.aeo-stack.aeo-stack--static .aeo-card{position:relative;left:auto;top:auto;width:100%;max-width:1180px;margin:0 auto;transform:none!important;filter:none!important}

@media (prefers-reduced-motion: reduce){
  .aeo-stack{height:auto}
  .aeo-stack-pin{position:static;height:auto;display:flex;flex-direction:column;gap:28px;padding:32px 0}
  .aeo-card{position:relative;left:auto;top:auto;width:100%;max-width:1180px;margin:0 auto;transform:none!important;filter:none!important}
  .aeo-panel,.aeo-panel::before,.aeo-panel::after,.aeo-card::before{transition:none}
}
</style>
<script id="aeo-plat-script">
(function(){
  function A(){return window.__AEO||null;}
  function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;}
  function sleep(ms){return new Promise(function(r){setTimeout(r,ms);});}
  function toks(str){return str.match(/\S+\s*|\s+/g)||[];}
  function countTo(node,to,dur,suffix){
    suffix=suffix||"";var from=parseInt(node.textContent,10)||0,t0=null;
    function step(ts){if(t0==null)t0=ts;var p=Math.min(1,(ts-t0)/dur);var e=1-Math.pow(1-p,3);node.textContent=Math.round(from+(to-from)*e)+suffix;if(p<1)requestAnimationFrame(step);}
    requestAnimationFrame(step);
  }
  var reduce=false;try{reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){}
  function alive(root){return document.body.contains(root);}

  var CHECK='<svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var YELP='<svg viewBox="0 0 24 24" fill="#FF1A1A"><path d="m7.6885 15.1415-3.6715.8483c-.3769.0871-.755.183-1.1452.155-.2611-.0188-.5122-.0414-.7606-.213a1.179 1.179 0 0 1-.331-.3594c-.3486-.5519-.3656-1.3661-.3697-2.0004a6.2874 6.2874 0 0 1 .3314-2.0642 1.857 1.857 0 0 1 .1073-.2474 2.3426 2.3426 0 0 1 .1255-.2165 2.4572 2.4572 0 0 1 .1563-.1975 1.1736 1.1736 0 0 1 .399-.2831 1.082 1.082 0 0 1 .4592-.0837c.2355.0016.5139.052.91.1734.0555.0191.1237.0382.1856.0572.3277.1013.7048.2404 1.1499.3987.6863.2404 1.3663.487 2.0463.7397l1.2117.4423c.2217.0807.4363.18.6412.297.174.0984.3273.2298.4512.387a1.217 1.217 0 0 1 .192.4309 1.2205 1.2205 0 0 1-.872 1.4522c-.0468.0151-.0852.0239-.1085.0293l-1.105.2553-.0031-.001zM18.8208 7.565a1.8506 1.8506 0 0 0-.2042-.1754 2.4082 2.4082 0 0 0-.2077-.1394 2.3607 2.3607 0 0 0-.2269-.109 1.1705 1.1705 0 0 0-.482-.0796 1.0862 1.0862 0 0 0-.4498.1263c-.2107.1048-.4388.2732-.742.5551-.042.0417-.0947.0886-.142.133-.2502.2351-.5286.5252-.8599.863a114.6363 114.6363 0 0 0-1.5166 1.5629l-.8962.9293a4.1897 4.1897 0 0 0-.4466.5483 1.541 1.541 0 0 0-.2364.5459 1.2199 1.2199 0 0 0 .0107.4518l.0046.02a1.218 1.218 0 0 0 1.4184.923 1.162 1.162 0 0 0 .1105-.0213l4.7781-1.104c.3766-.087.7587-.1667 1.097-.3631.2269-.1316.4428-.262.5909-.5252a1.1793 1.1793 0 0 0 .1405-.4683c.0733-.6512-.2668-1.3908-.5403-1.963a6.2792 6.2792 0 0 0-1.2001-1.7103zM8.9703.0754a8.6724 8.6724 0 0 0-.83.1564c-.2754.066-.548.1383-.8146.2236-.868.2844-2.0884.8063-2.295 1.8065-.1165.5655.1595 1.1439.3737 1.66.2595.6254.614 1.1889.9373 1.7777.8543 1.5545 1.7245 3.0993 2.5922 4.6457.259.4617.5416 1.0464 1.043 1.2856a1.058 1.058 0 0 0 .1013.0383c.2248.0851.4699.1016.7041.0471a4.3015 4.3015 0 0 0 .0418-.0097 1.2136 1.2136 0 0 0 .5658-.3397 1.1033 1.1033 0 0 0 .079-.0822c.3463-.435.3454-1.0833.3764-1.6134.1042-1.771.2139-3.5423.3009-5.3142.0332-.6712.1055-1.3333.0655-2.0096-.0328-.5579-.0368-1.1984-.3891-1.6563-.6218-.8073-1.9476-.741-2.8523-.6158z"/></svg>';
  var GOOG='<svg viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
  var TRUST='<svg viewBox="0 0 24 24" fill="#00B67A"><path d="M17.227 16.67l2.19 6.742-7.413-5.388 5.223-1.354zM24 9.31h-9.165L12.005.589l-2.84 8.723L0 9.3l7.422 5.397-2.84 8.714 7.422-5.388 4.583-3.326L24 9.311z"/></svg>';
  var FB='<svg viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.8V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z"/></svg>';
  var REDDIT='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#FF4500"/><ellipse cx="12" cy="13.6" rx="6.4" ry="4.2" fill="#fff"/><circle cx="4.9" cy="12.6" r="1.6" fill="#fff"/><circle cx="19.1" cy="12.6" r="1.6" fill="#fff"/><circle cx="9.6" cy="13.1" r="1.1" fill="#FF4500"/><circle cx="14.4" cy="13.1" r="1.1" fill="#FF4500"/><path d="M9.5 15.9c1.5 1.1 3.5 1.1 5 0" stroke="#FF4500" stroke-width="1" fill="none" stroke-linecap="round"/><path d="M12 9.4l.9-3.3 2.9.7" stroke="#fff" stroke-width="1.1" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16.4" cy="6.2" r="1.2" fill="#fff"/></svg>';
  var FILE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>';
  var PAGE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h4"/></svg>';

  /* ---------- rotating business scenarios (shared across all four) ---------- */
  var SCN=[
    {ind:"HVAC",city:"Phoenix",biz:"Desert Peak Air & Cooling",dom:"desertpeakair.com",type:"HVACBusiness",
     areas:["Phoenix","Scottsdale","Mesa"],hours:"Mo-Su 07:00-21:00",tel:"+1-602-555-0184",
     rate:71,delta:"+18 in last 30 days",m:[78,69,64,58],path:0,
     q:"who does same-day AC repair in Phoenix on weekends?",
     pre:"Yes \u2014 ",mid:" offers same-day AC repair across Phoenix, including weekends, with no weekend call-out fee and a typical response time of about two hours.",
     srcT:"Weekend and emergency AC service",srcM:"Same-day availability, response times and service areas across Phoenix.",
     worked:4,
     srcs:["5-star review: \u201cfixed our AC on a Sunday in under two hours\u201d","Local listing \u00b7 4.9 (312 reviews) \u00b7 Open now","r/phoenix thread recommending them for weekend callouts","41 recommendations in Phoenix neighborhood groups","Rated Excellent \u00b7 286 verified reviews"]},
    {ind:"Dental",city:"Austin",biz:"Lakeline Family Dental",dom:"lakelinedental.com",type:"Dentist",
     areas:["Austin","Cedar Park","Round Rock"],hours:"Mo-Sa 08:00-18:00",tel:"+1-512-555-0139",
     rate:64,delta:"+12 in last 30 days",m:[72,61,58,49],path:1,
     q:"any dentist in Austin that takes emergency walk-ins on Saturdays?",
     pre:"",mid:" takes emergency walk-ins on Saturdays from 8am to 2pm, offers same-day crowns, and new-patient exams start at $79.",
     srcT:"Emergency and Saturday appointments",srcM:"Walk-in policy, Saturday hours and same-day treatment options.",
     worked:3,
     srcs:["\u201cgot me in the same morning for a cracked tooth\u201d \u00b7 5 stars","Local listing \u00b7 4.8 (204 reviews) \u00b7 Open Saturdays","r/Austin: most-upvoted answer for emergency dentists","33 recommendations in Austin parent groups","Rated Excellent \u00b7 178 verified reviews"]},
    {ind:"Plumbing",city:"Charlotte",biz:"Queen City Plumbing Co.",dom:"queencityplumbing.com",type:"Plumber",
     areas:["Charlotte","Matthews","Concord"],hours:"24/7",tel:"+1-704-555-0142",
     rate:58,delta:"+15 in last 30 days",m:[66,55,52,44],path:2,
     q:"emergency plumber in Charlotte that can come out tonight?",
     pre:"",mid:" runs 24/7 emergency callouts across Charlotte with a 90-minute average response time and upfront, flat-rate pricing.",
     srcT:"24/7 emergency plumbing",srcM:"Response times, flat-rate pricing and after-hours coverage in Charlotte.",
     worked:5,
     srcs:["5-star review: \u201cburst pipe at 11pm \u2014 there by midnight\u201d","Local listing \u00b7 4.9 (441 reviews) \u00b7 Open 24 hours","r/Charlotte thread on reliable emergency plumbers","57 recommendations in Charlotte community groups","Rated Excellent \u00b7 352 verified reviews"]},
    {ind:"Legal",city:"Miami",biz:"Rivera & Marsh Injury Law",dom:"riveramarsh.com",type:"Attorney",
     areas:["Miami","Coral Gables","Hialeah"],hours:"Mo-Fr 08:00-19:00",tel:"+1-305-555-0117",
     rate:67,delta:"+14 in last 30 days",m:[74,63,60,52],path:0,
     q:"personal injury lawyer in Miami with a free consultation?",
     pre:"Yes \u2014 ",mid:" offers free consultations across Miami and works on a no-win, no-fee basis, with over $40M recovered for clients.",
     srcT:"Free consultation \u2014 personal injury",srcM:"Case types, fee structure and consultation booking for Miami clients.",
     worked:4,
     srcs:["5-star review: \u201cthey handled everything after my accident\u201d","Local listing \u00b7 4.9 (188 reviews)","r/Miami thread on trustworthy injury lawyers","29 recommendations in Miami community groups","Rated Excellent \u00b7 143 verified reviews"]}
  ];

  var PLATFORM_HTML=
  '<div class="aeo-plat-bg"><i class="aeo-blob aeo-blob-a"></i><i class="aeo-blob aeo-blob-b"></i><i class="aeo-blob aeo-blob-c"></i></div>'+
  '<div class="aeo-plat-inner">'+
    '<div class="aeo-plat-intro">'+
      '<span class="aeo-pill aeo-pill-center">Answer Engine Optimization Agency</span>'+
      '<h2 class="aeo-h2">How we help customers find your business through AI</h2>'+
      '<p class="aeo-lead">We optimize your website, content and online presence so you appear when customers search with AI.</p>'+
    '</div>'+
    '<div class="aeo-stack" id="aeo-stack">'+
      '<div class="aeo-stack-pin">'+
        '<div class="aeo-card" data-card="1"><div class="aeo-card-inner"><div class="aeo-row-copy"><span class="aeo-pill">Visibility</span><h3 class="aeo-h3">Understand how often AI mentions you</h3><p class="aeo-rtext">We ask AI the questions your customers ask, hundreds of times a month, and count how often your name comes back.</p></div><div class="aeo-row-viz"><div class="aeo-panel aeo-panel--vis" id="aeo-viz-vis"></div></div></div></div>'+
        '<div class="aeo-card" data-card="2"><div class="aeo-card-inner"><div class="aeo-row-copy"><span class="aeo-pill">Site Structure</span><h3 class="aeo-h3">Make your site easy for AI to read</h3><p class="aeo-rtext">We structure your site with schema so AI can clearly read your services, locations and hours.</p></div><div class="aeo-row-viz"><div class="aeo-panel aeo-panel--code" id="aeo-viz-web"></div></div></div></div>'+
        '<div class="aeo-card" data-card="3"><div class="aeo-card-inner"><div class="aeo-row-copy"><span class="aeo-pill">Content</span><h3 class="aeo-h3">Create content that AI quotes</h3><p class="aeo-rtext">We write the pages AI pulls from, and cites, when it answers your customers\u2019 questions.</p></div><div class="aeo-row-viz"><div class="aeo-panel aeo-panel--chat" id="aeo-viz-content"></div></div></div></div>'+
        '<div class="aeo-card" data-card="4"><div class="aeo-card-inner"><div class="aeo-row-copy"><span class="aeo-pill">Authority</span><h3 class="aeo-h3">Show up in the sources AI checks</h3><p class="aeo-rtext">We build the reviews, citations and mentions AI looks at before recommending you.</p></div><div class="aeo-row-viz"><div class="aeo-panel aeo-panel--act" id="aeo-viz-auth"></div></div></div></div>'+
      '</div>'+
    '</div>'+
  '</div>';

  /* ================= viz 1: visibility analytics panel ================= */
  var VPATHS=[
    "M2,84 C26,82 40,73 62,75 C86,77 100,59 124,57 C146,55 160,65 184,51 C208,37 222,43 246,31 C270,20 284,16 298,10",
    "M2,80 C24,80 42,68 64,70 C88,72 104,54 126,56 C148,58 164,44 188,42 C212,40 228,30 250,26 C270,22 286,18 298,12",
    "M2,86 C28,84 44,78 66,72 C90,66 102,68 126,60 C150,52 166,56 188,46 C210,36 226,38 248,28 C268,19 284,14 298,9"
  ];
  function startVisibility(){
    var root=document.getElementById("aeo-viz-vis");if(!root)return;
    var a=A();var oa=a?a.aiSvg(a.P_OPENAI):"",px=a?a.aiSvg(a.P_PPLX):"",gm=a?a.GEM_SVG:"",cl=a?a.aiSvg(a.P_CLAUDE):"";
    var models=[
      {n:"ChatGPT",bg:"#000",col:"#fff",logo:oa},
      {n:"Perplexity",bg:"#20808D",col:"#fff",logo:px},
      {n:"Gemini",bg:"#fff",col:"#000",logo:gm,extra:"border:1px solid #d9dde3"},
      {n:"Claude",bg:"#D97757",col:"#fff",logo:cl}
    ];
    var mh="";models.forEach(function(m){
      mh+='<div class="aeo-vm"><span class="aeo-vm-top"><span class="aeo-vm-logo" style="background:'+m.bg+';color:'+m.col+';'+(m.extra||"")+'">'+m.logo+'</span><span class="aeo-vm-name">'+m.n+'</span></span><span class="aeo-vm-pct">0%</span></div>';
    });
    var rh="";["You","Competitor A","Competitor B"].forEach(function(nm,i){
      rh+='<div class="aeo-vr'+(i===0?" you":"")+'"><span class="aeo-vr-rank">'+(i+1)+'</span><span class="aeo-vr-name">'+nm+'</span><span class="aeo-vr-track"><span class="aeo-vr-fill"></span></span><span class="aeo-vr-val">0%</span></div>';
    });
    var dates='<span>Apr 12</span><span>Apr 13</span><span>Apr 14</span><span>Apr 15</span><span>Apr 16</span><span>Apr 17</span><span>Apr 18</span>';
    root.innerHTML='<div class="aeo-vis-wrap">'+
      '<div class="aeo-vis-top">'+
        '<div><div class="aeo-vis-label" id="aeo-vis-label">Mention rate</div><div class="aeo-vis-score"><span class="aeo-vis-num" id="aeo-vis-num">0%</span><span class="aeo-vis-delta" id="aeo-vis-delta"></span></div></div>'+
        '<div class="aeo-vis-toggle"><span>7d</span><span class="on">30d</span><span>90d</span></div>'+
      '</div>'+
      '<div class="aeo-vis-chart"><svg viewBox="0 0 300 100" preserveAspectRatio="none">'+
        '<defs><linearGradient id="aeoVisFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#266df0" stop-opacity=".18"/><stop offset="1" stop-color="#266df0" stop-opacity="0"/></linearGradient></defs>'+
        '<path class="aeo-vis-area" d=""/>'+
        '<path class="aeo-vis-line" d=""/>'+
      '</svg></div>'+
      '<div class="aeo-vis-dates">'+dates+'</div>'+
      '<div class="aeo-vis-models">'+mh+'</div>'+
      '<div class="aeo-vis-rank">'+rh+'</div></div>';
    var wrap=root.querySelector(".aeo-vis-wrap");
    var num=document.getElementById("aeo-vis-num"),label=document.getElementById("aeo-vis-label"),delta=document.getElementById("aeo-vis-delta");
    var line=root.querySelector(".aeo-vis-line"),area=root.querySelector(".aeo-vis-area");
    var pcts=root.querySelectorAll(".aeo-vm-pct"),fills=root.querySelectorAll(".aeo-vr-fill"),vals=root.querySelectorAll(".aeo-vr-val");
    (async function(){
      var si=0;
      while(alive(root)){
        var sc=SCN[si%SCN.length];
        var d=VPATHS[sc.path];
        label.textContent="Mention rate \u00b7 "+sc.ind+" in "+sc.city;
        delta.textContent=sc.delta;
        area.setAttribute("d",d+" L298,100 L2,100 Z");
        line.setAttribute("d",d);
        // reset
        line.style.transition="none";area.classList.remove("in");
        num.textContent="0%";
        var i;
        for(i=0;i<pcts.length;i++)pcts[i].textContent="0%";
        var ranks=[sc.rate,sc.rate-19,sc.rate-33];
        for(i=0;i<fills.length;i++){fills[i].style.transition="none";fills[i].style.width="0%";vals[i].textContent="0%";}
        var len=460;try{len=line.getTotalLength();}catch(e){}
        line.style.strokeDasharray=len;line.style.strokeDashoffset=len;
        line.getBoundingClientRect();
        if(reduce){
          num.textContent=sc.rate+"%";area.classList.add("in");line.style.strokeDashoffset="0";
          for(i=0;i<pcts.length;i++)pcts[i].textContent=sc.m[i]+"%";
          for(i=0;i<fills.length;i++){fills[i].style.width=ranks[i]+"%";vals[i].textContent=ranks[i]+"%";}
          return;
        }
        await sleep(200);if(!alive(root))return;
        line.style.transition="stroke-dashoffset 1.25s cubic-bezier(.33,1,.68,1)";
        line.style.strokeDashoffset="0";
        countTo(num,sc.rate,1200,"%");area.classList.add("in");
        await sleep(1150);if(!alive(root))return;
        for(i=0;i<pcts.length;i++){(function(elp,v){countTo(elp,v,600,"%");})(pcts[i],sc.m[i]);await sleep(110);}
        await sleep(300);if(!alive(root))return;
        for(i=0;i<fills.length;i++){fills[i].style.transition="width 1s cubic-bezier(.33,1,.68,1)";fills[i].style.width=ranks[i]+"%";countTo(vals[i],ranks[i],900,"%");}
        await sleep(4200);if(!alive(root))return;
        wrap.style.opacity="0";
        await sleep(420);if(!alive(root))return;
        si++;
        wrap.style.opacity="1";
      }
    })();
  }

  /* ================= viz 2: code editor pane (rotating typed schema) ================= */
  function startStructure(){
    var root=document.getElementById("aeo-viz-web");if(!root)return;
    function K(x){return '<span class="tok-key">"'+x+'"</span>';}
    function ST(x){return '<span class="tok-str">"'+x+'"</span>';}
    function NM(x){return '<span class="tok-num">'+x+'</span>';}
    function dyn(sc){
      return {
        type:'  '+K('@type')+': '+ST(sc.type)+',',
        name:'  '+K('name')+': '+ST(sc.biz)+',',
        areas:'  '+K('areaServed')+': ['+sc.areas.map(function(x){return ST(x);}).join(', ')+'],',
        tel:'  '+K('telephone')+': '+ST(sc.tel)+',',
        hours:'  '+K('openingHours')+': '+ST(sc.hours)+','
      };
    }
    var rows=[
      {c:'{'},
      {c:'  '+K('@context')+': '+ST('https://schema.org')+','},
      {k:'type',hl:1},
      {k:'name'},
      {k:'areas',hl:1},
      {k:'tel'},
      {k:'hours',hl:1},
      {c:'  '+K('priceRange')+': '+ST('$$')+','},
      {c:'  '+K('aggregateRating')+': { '+K('ratingValue')+': '+NM('4.9')+', '+K('reviewCount')+': '+NM('312')+' }'},
      {c:'}'}
    ];
    var body='<ol class="aeo-code" id="aeo-code">';
    rows.forEach(function(r,i){
      var inner=r.k?'<span class="type" data-k="'+r.k+'"></span>':r.c;
      body+='<li class="aeo-cl'+(r.hl?' hl':'')+'"><span class="ln">'+(i+1)+'</span><span class="cd">'+inner+'</span></li>';
    });
    body+='</ol>';
    root.innerHTML='<div class="aeo-ed-tab"><span class="aeo-ed-dots"><span class="aeo-ed-dot" style="background:#ff5f57"></span><span class="aeo-ed-dot" style="background:#febc2e"></span><span class="aeo-ed-dot" style="background:#28c840"></span></span><span class="aeo-ed-fname">schema.json</span><span class="aeo-ed-lang">JSON-LD</span></div>'+
      '<div class="aeo-ed-body">'+body+'<div class="aeo-ed-foot"><span class="aeo-ed-ok" id="aeo-ed-ok"></span><span style="margin-left:auto">UTF-8 \u00b7 LF \u00b7 schema.org</span></div></div>';
    var code=document.getElementById("aeo-code"),ok=document.getElementById("aeo-ed-ok");
    var types=root.querySelectorAll(".type");
    var meas=el("span");meas.style.cssText="position:absolute;visibility:hidden;white-space:pre;left:-9999px;top:0";code.appendChild(meas);
    function width(html){meas.innerHTML=html;return meas.getBoundingClientRect().width;}
    async function typeIn(tp,html){
      tp.innerHTML=html;
      var w=width(html),n=Math.max(4,(tp.textContent||"").length),dur=Math.min(.85,n*.019);
      var caret=el("span","aeo-cd-caret");tp.parentNode.appendChild(caret);
      tp.getBoundingClientRect();
      tp.style.transition="width "+dur+"s steps("+n+",end)";
      tp.style.width=w+"px";
      await sleep(dur*1000+110);
      caret.remove();
    }
    async function wipe(tp){
      var n=Math.max(4,(tp.textContent||"").length),dur=Math.min(.32,n*.007);
      tp.style.transition="width "+dur+"s steps("+n+",end)";
      tp.style.width="0px";
      await sleep(dur*1000+70);
    }
    (async function(){
      var si=0,first=true;
      while(alive(root)){
        var sc=SCN[si%SCN.length],d=dyn(sc);
        ok.innerHTML="";
        if(reduce){
          for(var r=0;r<types.length;r++){types[r].innerHTML=d[types[r].getAttribute("data-k")];types[r].style.width="auto";}
          ok.innerHTML=CHECK+" Valid \u00b7 read by AI crawlers";
          return;
        }
        var i,tp;
        if(first){await sleep(300);if(!alive(root))return;first=false;}
        for(i=0;i<types.length;i++){
          if(!alive(root))return;
          tp=types[i];
          if((tp.textContent||"").length)await wipe(tp);
          await typeIn(tp,d[tp.getAttribute("data-k")]);
          await sleep(120);
        }
        ok.innerHTML=CHECK+" Valid \u00b7 read by AI crawlers";
        await sleep(4200);if(!alive(root))return;
        si++;
      }
    })();
  }

  /* ================= viz 3: ChatGPT conversation (rotating Q&A) ================= */
  function startContent(){
    var root=document.getElementById("aeo-viz-content");if(!root)return;
    var a=A();var avatar=a?a.aiSvg(a.P_OPENAI):"";
    root.innerHTML='<div class="aeo-c3-wrap">'+
      '<div class="aeo-c3-scroll">'+
        '<div class="aeo-c3-user"><span class="b" id="aeo-c3-q"></span></div>'+
        '<div class="aeo-c3-ai" id="aeo-c3-ai" style="opacity:0"><span class="aeo-c3-av">'+avatar+'</span><div class="aeo-c3-ans" id="aeo-c3-ans"></div></div>'+
      '</div>'+
      '<div class="aeo-c3-src" id="aeo-c3-src"><span class="aeo-c3-src-ic">'+PAGE+'</span><div class="aeo-c3-src-main"><span class="aeo-c3-src-t" id="aeo-c3-src-t"></span><span class="aeo-c3-src-m" id="aeo-c3-src-m"></span></div></div></div>';
    var wrap=root.querySelector(".aeo-c3-wrap");
    var q=document.getElementById("aeo-c3-q"),ai=document.getElementById("aeo-c3-ai"),ans=document.getElementById("aeo-c3-ans"),
        src=document.getElementById("aeo-c3-src"),srcT=document.getElementById("aeo-c3-src-t"),srcM=document.getElementById("aeo-c3-src-m");
    function cite(dom){return '<span class="aeo-cite">'+FILE+dom+'</span>';}
    (async function(){
      var si=0;
      while(alive(root)){
        var sc=SCN[si%SCN.length];
        q.classList.remove("in");q.textContent=sc.q;
        ai.style.opacity="0";ans.innerHTML="";
        src.classList.remove("in");srcT.textContent=sc.srcT;srcM.textContent=sc.srcM;
        if(reduce){
          q.classList.add("in");ai.style.opacity="1";
          ans.innerHTML='<span class="aeo-tok">'+sc.pre+'</span><span class="aeo-c3-biz">'+sc.biz+'</span><span class="aeo-tok">'+sc.mid+' </span>'+cite(sc.dom);
          src.classList.add("in");return;
        }
        await sleep(260);if(!alive(root))return;
        q.classList.add("in");
        await sleep(680);if(!alive(root))return;
        ai.style.opacity="1";
        ans.innerHTML='<span class="aeo-think"><span></span><span></span><span></span></span>';
        await sleep(1000);if(!alive(root))return;
        ans.innerHTML="";
        var i,sp;
        var pre=toks(sc.pre);
        for(i=0;i<pre.length;i++){if(!alive(root))return;sp=el("span","aeo-tok");sp.textContent=pre[i];ans.appendChild(sp);await sleep(30);}
        var b=el("span","aeo-c3-biz");b.textContent=sc.biz;b.style.opacity="0";ans.appendChild(b);
        await sleep(60);b.style.transition="opacity .3s";b.style.opacity="1";
        var mid=toks(sc.mid+" ");
        for(i=0;i<mid.length;i++){if(!alive(root))return;sp=el("span","aeo-tok");sp.textContent=mid[i];ans.appendChild(sp);await sleep(24);}
        var chip=el("span",null,cite(sc.dom)).firstChild;chip.style.opacity="0";ans.appendChild(chip);
        await sleep(60);chip.style.transition="opacity .3s";chip.style.opacity="1";
        await sleep(320);if(!alive(root))return;
        src.classList.add("in");
        await sleep(3600);if(!alive(root))return;
        wrap.style.opacity="0";
        await sleep(420);if(!alive(root))return;
        si++;
        wrap.style.opacity="1";
      }
    })();
  }

  /* ================= viz 4: ChatGPT Activity / sources (5 sources, rotating) ================= */
  function startAuthority(){
    var root=document.getElementById("aeo-viz-auth");if(!root)return;
    var doms=[{ic:YELP,d:"yelp.com"},{ic:GOOG,d:"google.com"},{ic:REDDIT,d:"reddit.com"},{ic:FB,d:"facebook.com"},{ic:TRUST,d:"trustpilot.com"}];
    var rows="";doms.forEach(function(s){
      rows+='<div class="aeo-act-row"><span class="aeo-act-fav">'+s.ic+'</span><div class="aeo-act-main"><span class="aeo-act-dom">'+s.d+'</span><span class="aeo-act-desc"></span></div></div>';
    });
    root.innerHTML=
      '<div class="aeo-act-status"><span class="aeo-act-spin"></span><span class="aeo-act-check">'+CHECK+'</span><span class="aeo-act-txt" id="aeo-act-txt">Searching the web\u2026</span><span class="aeo-act-q" id="aeo-act-q"></span></div>'+
      '<div class="aeo-act-srchead">Sources \u00b7 5</div>'+
      '<div class="aeo-act-list">'+rows+'</div>';
    var txt=document.getElementById("aeo-act-txt"),qEl=document.getElementById("aeo-act-q");
    var rowsEl=root.querySelectorAll(".aeo-act-row"),descs=root.querySelectorAll(".aeo-act-desc");
    (async function(){
      var si=0;
      while(alive(root)){
        var sc=SCN[si%SCN.length],i;
        root.classList.remove("done");
        qEl.textContent="\u201c"+sc.q+"\u201d";
        for(i=0;i<rowsEl.length;i++){rowsEl[i].classList.remove("in");descs[i].textContent=sc.srcs[i]||"";}
        if(reduce){
          root.classList.add("done");txt.textContent="Worked for "+sc.worked+"s";
          for(i=0;i<rowsEl.length;i++)rowsEl[i].classList.add("in");
          return;
        }
        txt.textContent="Searching the web\u2026";
        await sleep(900);if(!alive(root))return;
        txt.textContent="Thinking\u2026";
        await sleep(800);if(!alive(root))return;
        root.classList.add("done");txt.textContent="Worked for "+sc.worked+"s";
        await sleep(260);
        for(i=0;i<rowsEl.length;i++){if(!alive(root))return;rowsEl[i].classList.add("in");await sleep(100);}
        await sleep(4200);if(!alive(root))return;
        si++;
      }
    })();
  }

  /* ---- start each loop when it first scrolls into view ---- */
  function onceInView(elem,fn){
    if(!elem)return;
    if(reduce||!("IntersectionObserver" in window)){fn();return;}
    var done=false;
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&!done){done=true;io.disconnect();fn();}});},{threshold:.3});
    io.observe(elem);
  }
  /* ================= stacked-card scroll choreography =================
     Card 1 is always "arrived" (progress 1). Each later card owns an equal
     slice of the section's scroll travel; within its slice its own
     progress runs 0→1 and it slides up from 100vh below to centered. Once
     a slice is behind the reader (progress pinned at 1) it stays there —
     recomputed from scroll position every frame, so scrolling back up
     reverses the exact same path with no extra state to unwind. The card
     directly underneath a rising one eases back a few px and scales down
     a hair, which is the only cue given for "being covered" — no fade,
     no rotation, nothing that reads as the card disappearing. */
  function wireStack(sec){
    var cards=[].slice.call(sec.querySelectorAll(".aeo-card"));
    var n=cards.length;
    if(!n)return;
    if(reduce||!window.__aeoScroll||!("IntersectionObserver" in window)||n<2){
      sec.classList.add("aeo-stack--static");
      cards.forEach(function(c){c.style.transform="none";});
      return;
    }
    var slots=n-1;
    var box={top:0,h:0,vh:0,y:0};
    window.__aeoScroll(function(y,vh){
      var r=sec.getBoundingClientRect();
      box.top=r.top+y;box.h=r.height;box.vh=vh;box.y=y;
    },function(){
      var vh=box.vh,travel=box.h-vh;
      if(!vh||travel<=0)return;
      var g=(box.y-box.top)/travel;
      g=g<0?0:(g>1?1:g);
      var i,p,prog=[1];
      for(i=1;i<n;i++){
        var s=(i-1)/slots,e=i/slots;
        p=(g-s)/(e-s);
        prog.push(p<0?0:(p>1?1:p));
      }
      for(i=0;i<n;i++){
        var slide=(1-prog[i])*100;
        var nextP=i<n-1?prog[i+1]:0;
        var scale=(1-0.035*nextP).toFixed(4),lift=(-18*nextP).toFixed(2);
        cards[i].style.transform="translate(-50%,-50%) translateY("+lift+"px) scale("+scale+") translateY("+slide.toFixed(3)+"vh)";
        cards[i].style.filter=nextP>0?"brightness("+(1-0.05*nextP).toFixed(3)+")":"";
        cards[i].style.zIndex=String(i+1);
      }
    });
  }

  var started=false;
  function findAttioPlatform(){
    var secs=document.querySelectorAll("section");var best=null;
    for(var i=0;i<secs.length;i++){
      if(secs[i].id==="aeo-platform")continue;
      if(secs[i].textContent.indexOf("The intelligent system that never sleeps")!==-1){
        if(!best||secs[i].textContent.length<best.textContent.length)best=secs[i];
      }
    }
    return best;
  }
  function mountPlatform(){
    if(document.getElementById("aeo-platform"))return;
    var attio=findAttioPlatform();if(!attio)return;
    attio.style.display="none";attio.setAttribute("data-aeo-hidden","1");
    var sec=el("section","aeo-plat");sec.id="aeo-platform";sec.innerHTML=PLATFORM_HTML;
    attio.parentNode.insertBefore(sec,attio);
    if(!started){
      started=true;
      var stackEl=sec.querySelector("#aeo-stack");
      if(stackEl)wireStack(stackEl);
      if(window.__aeoSpotlight)sec.querySelectorAll(".aeo-panel").forEach(window.__aeoSpotlight);
      onceInView(document.getElementById("aeo-viz-vis"),startVisibility);
      onceInView(document.getElementById("aeo-viz-web"),startStructure);
      onceInView(document.getElementById("aeo-viz-content"),startContent);
      onceInView(document.getElementById("aeo-viz-auth"),startAuthority);
      if(window.__aeoAfterPlatform)try{window.__aeoAfterPlatform(sec);}catch(e){}
    }
  }

  var n=0,iv=setInterval(function(){mountPlatform();if(++n>60)clearInterval(iv);},150);
  document.addEventListener("DOMContentLoaded",mountPlatform);
  window.addEventListener("load",mountPlatform);
  var mo=new MutationObserver(function(){
    if(!document.getElementById("aeo-platform"))mountPlatform();
    var a=document.querySelector('[data-aeo-hidden]');if(a&&a.style.display!=="none")a.style.display="none";
  });
  try{mo.observe(document.body||document.documentElement,{childList:true,subtree:true});}catch(e){}
  setTimeout(function(){try{mo.disconnect();}catch(e){}},10000);
})();
</script>
