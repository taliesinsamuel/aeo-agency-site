<style id="aeo-story-style">
/* ============================================================
   FOCAL CHOREOGRAPHY
   --aeo-f is a single 0/1 state, resting or focused, flipped once by
   an IntersectionObserver purely on how much of the product window is
   on screen (see wireFocus) — no scroll-pixel maths, no scrubbing, no
   continuous interpolation while the visitor scrolls.

   The pop itself lives entirely on .aeo-focus-scale: a dedicated wrapper
   inserted around .aeo-stage that owns exactly one property (scale).
   A transform never triggers layout, so nothing below the hero needs
   reserved growth room and nothing reflows when the state flips — the
   internal chat demo keeps animating its own entrance/typing/token
   transforms one layer down, completely independently, so the two
   never compete for the same property on the same element.
   ============================================================ */
.aeo-hero{--aeo-f:0}

.aeo-focus-scale{
  display:block;width:100%;
  scale:calc(1 + .085 * var(--aeo-f));
  transform-origin:50% 62%;
  transition:scale .38s var(--aeo-e-out);
  will-change:scale;
}
.aeo-focus-scale>.aeo-stage{width:100%;isolation:isolate}
@media (max-width:767px){
  /* smaller stage, smaller pop — enough to read, never enough to overflow */
  .aeo-focus-scale{scale:calc(1 + .04 * var(--aeo-f))}
}
/* the product demo should hand off to the story section right after it,
   not float in a void above it */
.aeo-hero [class~="h-svh"]{padding-bottom:20px!important}

/* supporting cues ride the same --aeo-f signal but stay secondary: same
   duration/easing bucket, no scale, no movement of their own — they only
   ever fade or dim, so they can never read as a second "resize." */
.aeo-focus-lift,.aeo-focus-head,.aeo-hero::before,.aeo-focus-grid,
.aeo-focus-host .aeo-stage::after,.aeo-focus-host .aeo-window::after{
  transition-duration:.48s;transition-timing-function:var(--aeo-e);
}

/* deeper cast shadow is a separate pre-rasterised layer rather than a
   growing box-shadow on the window itself, which would re-rasterise on
   every frame — fading a flat layer in/out is pure compositor work */
.aeo-focus-lift{
  position:absolute;inset:0;z-index:-1;border-radius:18px;pointer-events:none;
  opacity:var(--aeo-f);will-change:opacity;
  transition-property:opacity;
  box-shadow:
    0 46px 84px -24px rgb(28 29 31 / .17),
    0 118px 190px -74px rgb(28 29 31 / .40),
    0 44px 92px -52px rgb(38 109 240 / .34);
}
/* glass reads thicker: the rim brightens and a specular forms on the top edge */
.aeo-focus-host .aeo-window::after{
  background:linear-gradient(180deg,rgb(255 255 255 / calc(.22 * var(--aeo-f))),transparent 9%);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / calc(.9 + .1 * var(--aeo-f))),
    inset 0 0 0 1px rgb(255 255 255 / calc(.5 + .34 * var(--aeo-f)));
  transition-property:background,box-shadow;
}
/* the lit volume behind the window opens up as attention arrives — it
   already scales for free as a descendant of .aeo-focus-scale, so this
   layer only ever needs to fade, never resize itself */
.aeo-focus-host .aeo-stage::after{
  content:"";position:absolute;z-index:-1;left:50%;top:2%;width:100%;height:96%;
  transform:translateX(-50%);border-radius:50%;pointer-events:none;
  background:radial-gradient(50% 50% at 50% 52%,rgba(38,109,240,.30),rgba(140,110,245,.15) 44%,transparent 72%);
  filter:blur(70px);opacity:var(--aeo-f);will-change:opacity;
  transition-property:opacity;
}

/* the headline settles back rather than disappearing, and the gap
   between it and the interface closes as its weight transfers across */
.aeo-focus-head{
  translate:0 calc(11px * var(--aeo-f));
  opacity:calc(1 - .44 * var(--aeo-f));
  will-change:opacity,translate;
  transition-property:opacity,translate;
}
.aeo-hero::before{opacity:calc(1 - .32 * var(--aeo-f));transition-property:opacity}
.aeo-focus-grid{opacity:calc(1 - .40 * var(--aeo-f))!important;transition-property:opacity}

@media (max-width:767px){
  .aeo-focus-head{translate:0 calc(6px * var(--aeo-f));opacity:calc(1 - .3 * var(--aeo-f))}
}
@media (prefers-reduced-motion:reduce){
  .aeo-focus-scale,.aeo-focus-lift,.aeo-focus-head,.aeo-hero::before,.aeo-focus-grid,
  .aeo-focus-host .aeo-stage::after,.aeo-focus-host .aeo-window::after{transition:none}
}

/* ============================================================
   AEO STATISTICS — a keynote beat, not a content block.
   Every character is in the DOM from the first paint at opacity 0,
   so writing is a paint change only: the line breaks are decided
   once, nothing reflows mid-sentence and the section contributes
   zero layout shift. Scroll is the only clock.
   ============================================================ */
.aeo-story{
  /* short runway and a near-zero landing pad: the reader should reach
     "the shift" almost immediately after the product demo, move through
     it briskly, and be released the instant the last figure lands —
     never a long parked hold with nothing changing on screen */
  --aeo-scrub:52svh;--aeo-hold:3svh;
  position:relative;background:transparent;
  font-family:var(--aeo-mono);
  height:calc(100svh + var(--aeo-scrub) + var(--aeo-hold));
  margin-top:-20px;
}
.aeo-story-pin{
  position:sticky;top:0;height:100svh;
  display:flex;align-items:center;justify-content:center;
  padding:calc(var(--site-header-height,64px) + 12px) 24px 24px;
}
.aeo-story-stage{width:100%;max-width:1080px}
.aeo-story-eyebrow{
  margin:0 0 clamp(20px,3.4vh,42px);
  font-size:clamp(11px,1.05vw,13px);font-weight:600;
  letter-spacing:.22em;text-transform:uppercase;
  color:var(--aeo-ink-4);opacity:var(--aeo-sin,0);
}
.aeo-story-list{list-style:none;margin:0;padding:0}
.aeo-story-item+.aeo-story-item{margin-top:clamp(22px,3.7vh,46px)}
.aeo-story-line{
  margin:0;font-size:clamp(17px,min(2.45vw,3.9vh),36px);line-height:1.4;
  font-weight:500;letter-spacing:-.018em;color:#14161a;
}
.aeo-story-src{
  display:block;margin-top:clamp(7px,1.1vh,13px);
  font-size:clamp(9.5px,.8vw,11.5px);font-weight:500;
  letter-spacing:.14em;text-transform:uppercase;
  color:var(--aeo-ink-5);opacity:0;
}
.aeo-ch{position:relative;opacity:0}
.aeo-ch.on{opacity:1}
/* only the values carry colour; the gradient is interpolated per
   character so a long value reads as one continuous ramp while each
   glyph still owns its own opacity */
.aeo-num{text-shadow:0 6px 26px rgba(38,109,240,.22)}
.aeo-num .aeo-ch{font-weight:700}
/* the cursor is a zero-width pseudo-element that always sits AFTER the
   character it's attached to, so it can never add a pixel of width and
   re-wrap the line. It is only ever attached to a character that is
   already visible (or to the invisible zero-width home marker before
   the first character), so it can never inherit a hidden ancestor's
   opacity:0 and vanish mid-type. */
.aeo-ch.cur::after{
  content:"";position:absolute;top:.1em;bottom:.06em;width:.075em;min-width:2px;
  right:-.09em;
  background:linear-gradient(180deg,#4b87f6,#1f5ad4);border-radius:1px;
  box-shadow:0 0 14px rgba(38,109,240,.5);
  animation:aeo-story-blink 1.05s steps(1) infinite;
}
/* solid while the reader is actually writing, blinking when they stop */
.aeo-story-stage.writing .aeo-ch.cur::after{animation:none;opacity:1}
@keyframes aeo-story-blink{0%,55%{opacity:1}55.01%,100%{opacity:0}}
.aeo-sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}

@media (max-width:767px){
  .aeo-story{--aeo-scrub:48svh;--aeo-hold:3svh}
  .aeo-story-pin{padding-left:26px;padding-right:26px}
  .aeo-story-line{font-size:clamp(16.5px,4.6vw,21px);line-height:1.46;letter-spacing:-.012em}
  .aeo-story-item+.aeo-story-item{margin-top:clamp(22px,3.4vh,34px)}
  .aeo-story-src{font-size:9.5px;letter-spacing:.1em}
}

@media (prefers-reduced-motion:reduce){
  .aeo-hero{--aeo-f:0}
  .aeo-story{height:auto;padding:clamp(64px,9vw,120px) 0}
  .aeo-story-pin{position:static;height:auto;padding:0 24px}
  .aeo-story-eyebrow{opacity:1}
  .aeo-ch{opacity:1}
  .aeo-story-src{opacity:1!important}
  .aeo-ch.cur::after{display:none}
}
</style>
<script id="aeo-story-script">
(function(){
  var reduce=false;try{reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){}
  function narrow(){try{return window.matchMedia("(max-width:767px)").matches;}catch(e){return false;}}

  /* ============================================================
     FEATURE 1 — emphasis transfers to the product demonstration
     ============================================================ */
  function wireFocus(){
    var hero=document.querySelector(".aeo-hero");
    if(!hero||hero.getAttribute("data-aeo-focus")==="1")return;
    var stages=hero.querySelectorAll(".aeo-stage");
    if(!stages.length)return;                      // chat window not mounted yet
    hero.setAttribute("data-aeo-focus","1");

    var desk=null,mob=null,i;
    for(i=0;i<stages.length;i++){
      var st=stages[i],h=st.parentNode;
      if(!h||!h.classList)continue;
      var isMobile=h.classList.contains("aeo-mobile-slot");
      if(!isMobile)h.classList.add("aeo-focus-host");
      // The pop lives on a dedicated wrapper one level above the stage,
      // so the outer transform (scale) and the stage's own internal
      // animation (entrance keyframe, chat typing/tokens) each own a
      // different element and never fight over the same property.
      var scaleWrap=document.createElement("div");
      scaleWrap.className="aeo-focus-scale";
      h.insertBefore(scaleWrap,st);
      scaleWrap.appendChild(st);
      if(!isMobile&&!st.querySelector(".aeo-focus-lift")){
        var lift=document.createElement("i");
        lift.className="aeo-focus-lift";
        lift.setAttribute("aria-hidden","true");
        st.insertBefore(lift,st.firstChild);
      }
      if(isMobile){if(!mob)mob=h;}else{if(!desk)desk=h;}
    }

    // the headline group is the last ancestor of the h1 that does not
    // also contain the product window
    var h1=hero.querySelector("h1"),head=null,n=h1&&h1.parentNode,guard=0;
    while(n&&n!==hero&&guard++<10){
      if(n.querySelector(".aeo-stage"))break;
      head=n;n=n.parentNode;
    }
    if(head)head.classList.add("aeo-focus-head");
    var grids=hero.querySelectorAll('[class*="repeating-linear-gradient"]');
    for(i=0;i<grids.length;i++)grids[i].classList.add("aeo-focus-grid");

    if(reduce)return;

    // One state, one clean signal: how much of the product window is
    // actually on screen, straight from IntersectionObserver — no scroll
    // distance, no pixel thresholds, nothing scrubbed. Separate enter/exit
    // ratios (rather than one shared value) give the flip a small
    // hysteresis band so it can't flicker back and forth right at the
    // boundary, and a short cooldown after every flip stops it being
    // re-triggered mid-transition.
    //
    // IntersectionObserver always delivers one synchronous callback the
    // instant observe() is called, reporting whatever ratio is already
    // true at that exact moment — on a tall or wide viewport the demo can
    // already be substantially visible before the visitor has scrolled a
    // single pixel. That very first callback is deliberately ignored: the
    // pop is a response to arriving at the section while scrolling, never
    // a condition that's simply already true on first paint. Every
    // callback after that first one is a real ratio change (scrolling, or
    // a resize), and is acted on immediately.
    var ENTER_RATIO=0.55,EXIT_RATIO=0.3,COOLDOWN=260;
    var focused=false,lastFlip=0,booted=false;
    function applyFocused(on){
      if(on===focused)return;
      var now=Date.now();
      if(now-lastFlip<COOLDOWN)return;
      lastFlip=now;
      focused=on;
      hero.style.setProperty("--aeo-f",on?"1":"0");
    }
    if(!("IntersectionObserver" in window))return;
    var io=new IntersectionObserver(function(entries){
      var want=null,k,e,r;
      for(k=0;k<entries.length;k++){
        e=entries[k];
        // the hidden breakpoint slot (desktop vs. mobile) never accrues a
        // real ratio, so only the one actually on screen ever fires this
        if(e.target.offsetParent===null)continue;
        r=e.intersectionRatio;
        if(r>=ENTER_RATIO)want=true;
        else if(r<=EXIT_RATIO)want=false;
      }
      if(!booted){booted=true;return;}
      if(want===true)applyFocused(true);
      else if(want===false)applyFocused(false);
    },{threshold:[0,.1,.2,.3,.4,.55,.7,.85,1]});
    if(desk)io.observe(desk);
    if(mob)io.observe(mob);
  }

  /* ============================================================
     FEATURE 2 — scroll-scrubbed AEO statistics
     Every figure below is published and verifiable; the source sits
     under each line.
     ============================================================ */
  var BEAT=16;
  var STATS=[
    {p:[["n","45%"],["t"," of consumers now ask AI to find a local business. A year ago it was "],["n","6%"],["t","."]],
     s:"BrightLocal \u00b7 Local Consumer Review Survey 2026"},
    {p:[["n","900 million"],["t"," people use ChatGPT every week."]],
     s:"OpenAI \u00b7 February 2026"},
    {p:[["n","68%"],["t"," of Google searches now end without a single click."]],
     s:"SparkToro \u00b7 Similarweb clickstream, 2026"},
    {p:[["t","Visitors who arrive from AI convert "],["n","42%"],["t"," better."]],
     s:"Adobe Analytics \u00b7 March 2026"}
  ];
  var C0=[74,128,242],C1=[27,79,196];
  function ramp(i,len){
    var t=len>1?i/(len-1):0,c=[0,0,0];
    for(var k=0;k<3;k++)c[k]=Math.round(C0[k]+(C1[k]-C0[k])*t);
    return "rgb("+c[0]+","+c[1]+","+c[2]+")";
  }

  var SEQ=[],ITEMS=[],stage=null,total=0,HOME=null;
  function build(){
    var sec=document.createElement("section");
    sec.className="aeo-story";sec.id="aeo-story";
    sec.setAttribute("aria-label","Why answer engine optimization matters");
    var pin=document.createElement("div");pin.className="aeo-story-pin";
    stage=document.createElement("div");stage.className="aeo-story-stage";
    var eb=document.createElement("p");eb.className="aeo-story-eyebrow";
    eb.textContent="The shift";eb.setAttribute("aria-hidden","true");
    stage.appendChild(eb);
    var list=document.createElement("ol");list.className="aeo-story-list";

    for(var si=0;si<STATS.length;si++){
      var st=STATS[si],plain="";
      var li=document.createElement("li");li.className="aeo-story-item";
      var p=document.createElement("p");p.className="aeo-story-line";
      p.setAttribute("aria-hidden","true");
      if(si===0){
        // permanently-visible, zero-width home for the caret before any
        // character has been typed — never enters SEQ, never toggled
        HOME=document.createElement("span");
        HOME.className="aeo-ch on";
        HOME.setAttribute("aria-hidden","true");
        p.appendChild(HOME);
      }
      for(var pi=0;pi<st.p.length;pi++){
        var isNum=st.p[pi][0]==="n",txt=st.p[pi][1],holder=p;
        plain+=txt;
        if(isNum){holder=document.createElement("span");holder.className="aeo-num";p.appendChild(holder);}
        for(var ci=0;ci<txt.length;ci++){
          var ch=document.createElement("span");
          ch.className="aeo-ch";ch.textContent=txt.charAt(ci);
          if(isNum)ch.style.color=ramp(ci,txt.length);
          holder.appendChild(ch);
          SEQ.push(ch);
        }
      }
      li.appendChild(p);
      var src=document.createElement("span");
      src.className="aeo-story-src";src.textContent=st.s;
      src.setAttribute("aria-hidden","true");
      li.appendChild(src);
      // one accessible copy of the sentence, free of the per-character spans
      var sr=document.createElement("span");
      sr.className="aeo-sr";sr.textContent=plain+" Source: "+st.s;
      li.appendChild(sr);
      ITEMS.push({end:SEQ.length,src:src,a:-1});
      if(si<STATS.length-1)for(var b=0;b<BEAT;b++)SEQ.push(null);
      list.appendChild(li);
    }
    total=SEQ.length;
    stage.appendChild(list);
    pin.appendChild(stage);
    sec.appendChild(pin);
    return sec;
  }

  function revealAll(){
    for(var i=0;i<SEQ.length;i++)if(SEQ[i])SEQ[i].classList.add("on");
    for(var j=0;j<ITEMS.length;j++)ITEMS[j].src.style.opacity="1";
  }

  function wireStory(sec){
    if(reduce||!window.__aeoScroll){revealAll();return;}
    var idx=0,shown=0,curEl=null,pulse=null,sin=-1,nextSin=0;

    // the caret always sits directly after the last character that is
    // actually on screen — never on the next, still-invisible one — so it
    // can never detach from the text and is always the true insertion
    // point, forward or backward.
    function moveCaret(at){
      var el=null,i;
      for(i=(at<total?at:total)-1;i>=0;i--){if(SEQ[i]){el=SEQ[i];break;}}
      if(!el)el=HOME;
      if(el===curEl)return;
      if(curEl)curEl.classList.remove("cur");
      el.classList.add("cur");
      curEl=el;
    }
    function fadeSources(at){
      for(var i=0;i<ITEMS.length;i++){
        var it=ITEMS[i],a=(at-(it.end-20))/20;
        a=a<0?0:(a>1?1:a);
        if(it.a===a)continue;
        it.a=a;it.src.style.opacity=a.toFixed(3);
      }
    }
    function writing(){
      stage.classList.add("writing");
      if(pulse)clearTimeout(pulse);
      pulse=setTimeout(function(){stage.classList.remove("writing");},240);
    }

    var box={top:0,h:0,vh:0,y:0};
    window.__aeoScroll(function(y,vh){
      var r=sec.getBoundingClientRect();
      box.top=r.top+y;box.h=r.height;box.vh=vh;box.y=y;
    },function(){
      var vh=box.vh,travel=box.h-vh;
      if(travel<=0||!vh)return;
      // typing owns nearly all of the pinned travel; only a sliver is left
      // afterwards so the last figure has a breath before the section
      // releases — never a long parked hold with nothing moving
      var scrub=travel*(narrow()?0.975:0.965);
      // writing starts as soon as the section begins rising into view —
      // by the time it is fully pinned, the first fact is already well
      // underway, so there is no blank, content-free beat once scrolling
      // "arrives" at the section
      var from=box.top-vh*1.05,span=box.top+scrub-from;
      var p=span>0?(box.y-from)/span:0;
      p=p<0?0:(p>1?1:p);
      idx=Math.round(p*total);

      if(idx!==shown){
        var i;
        if(idx>shown){for(i=shown;i<idx;i++)if(SEQ[i])SEQ[i].classList.add("on");}
        else{for(i=shown-1;i>=idx;i--)if(SEQ[i])SEQ[i].classList.remove("on");}
        shown=idx;
        moveCaret(idx);
        fadeSources(idx);
        writing();
      }
      nextSin=(box.y-(box.top-vh*0.9))/(vh*0.5);
      nextSin=nextSin<0?0:(nextSin>1?1:nextSin);
      if(Math.abs(nextSin-sin)>=0.01){sin=nextSin;stage.style.setProperty("--aeo-sin",sin.toFixed(3));}
    });
    moveCaret(0);
  }

  function mountStory(){
    if(document.getElementById("aeo-story"))return;
    var h1=document.querySelector("main h1");if(!h1)return;
    var hero=h1.closest("section");if(!hero)return;
    var sec=build();
    hero.parentNode.insertBefore(sec,hero.nextSibling);
    wireStory(sec);
    if(window.__aeoScrollKick)window.__aeoScrollKick();
  }

  function tick(){mountStory();wireFocus();}
  var n=0,iv=setInterval(function(){tick();if(++n>70)clearInterval(iv);},150);
  document.addEventListener("DOMContentLoaded",tick);
  window.addEventListener("load",tick);
  var mo=new MutationObserver(tick);
  try{mo.observe(document.body||document.documentElement,{childList:true,subtree:true});}catch(e){}
  setTimeout(function(){try{mo.disconnect();}catch(e){}},11000);
})();
</script>
