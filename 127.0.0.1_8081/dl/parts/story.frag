<style id="aeo-story-style">
/* ============================================================
   FOCAL CHOREOGRAPHY
   --aeo-f is a single 0/1 state, resting or focused, flipped once by
   an IntersectionObserver when the product window has naturally
   arrived on screen (see wireFocus). Every property below is a calc()
   off that number, but since it only ever lands on 0 or 1, the change
   plays out as one ordinary CSS transition rather than a per-frame
   scroll interpolation — nothing here is scrubbed, pinned or tied to
   the scroll wheel. The growth room is still reserved up front, so
   the document height stays constant and nothing below the hero ever
   moves when the state flips.
   ============================================================ */
.aeo-hero{--aeo-f:0;--aeo-winh:clamp(360px,42vw,660px);--aeo-wing:44px}
/* one duration/easing shared by every focus property, so the state
   reads as a single coherent move rather than several parts arriving
   on their own schedules */
.aeo-focus-host,.aeo-focus-host .aeo-window,.aeo-focus-host .aeo-window::after,
.aeo-focus-host .aeo-stage::before,.aeo-focus-host .aeo-stage::after,
.aeo-focus-lift,.aeo-focus-head,.aeo-hero::before,.aeo-focus-grid,
.aeo-mobile-slot .aeo-window{
  transition-duration:.68s;transition-timing-function:var(--aeo-e);
}

/* the slot the product window lives in: it widens, it never detaches */
.aeo-focus-host{
  display:flex;align-items:center;justify-content:center;
  min-height:calc(var(--aeo-winh) + var(--aeo-wing));
  width:calc(66.6667% + 9% * var(--aeo-f))!important;
  max-width:calc(1440px + 190px * var(--aeo-f))!important;
  transition-property:width,max-width;
}
@media (min-width:1024px){
  /* rest is Attio's 75%; peak lands just under the 80% ceiling */
  .aeo-focus-host{width:calc(75% + 4.6% * var(--aeo-f))!important}
}
/* the reserved growth room is taken back out of the hero's tail padding
   so the section is exactly as tall as it was before */
.aeo-hero [class~="h-svh"]{padding-bottom:40px!important}
.aeo-focus-host>.aeo-stage{width:100%;isolation:isolate}

/* elevation and edge light ride the same number */
.aeo-focus-host .aeo-window{
  height:calc(var(--aeo-winh) + var(--aeo-wing) * var(--aeo-f));
  translate:0 calc(-15px * var(--aeo-f));
  border-color:rgb(28 29 31 / calc(.09 - .025 * var(--aeo-f)));
  contain:layout style;
  transition-property:height,translate,border-color;
}
/* The deeper cast shadow is a separate layer rather than a growing box-shadow
   on the window itself: a wide blur re-rasterises every time its radius moves,
   whereas fading a pre-rasterised layer in is pure compositor work. */
.aeo-focus-lift{
  position:absolute;inset:0;z-index:-1;border-radius:18px;pointer-events:none;
  translate:0 calc(-15px * var(--aeo-f));
  opacity:var(--aeo-f);will-change:opacity;
  transition-property:opacity,translate;
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
/* the lit volume behind the window opens up as attention arrives */
.aeo-focus-host .aeo-stage::before{scale:calc(1 + .13 * var(--aeo-f));transition-property:scale}
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
  /* Attio swaps to a separate scene here: no resizing, just depth */
  .aeo-focus-host{min-height:0}
  .aeo-mobile-slot .aeo-window{
    translate:0 calc(-7px * var(--aeo-f));
    box-shadow:
      0 1px 2px rgb(16 17 20 / .05),
      0 calc(18px + 14px * var(--aeo-f)) calc(36px + 26px * var(--aeo-f)) -20px rgb(28 29 31 / calc(.26 + .09 * var(--aeo-f)));
    transition-property:translate,box-shadow;
  }
  .aeo-focus-head{translate:0 calc(6px * var(--aeo-f));opacity:calc(1 - .3 * var(--aeo-f))}
}
@media (prefers-reduced-motion:reduce){
  .aeo-focus-host,.aeo-focus-host .aeo-window,.aeo-focus-host .aeo-window::after,
  .aeo-focus-host .aeo-stage::before,.aeo-focus-host .aeo-stage::after,
  .aeo-focus-lift,.aeo-focus-head,.aeo-hero::before,.aeo-focus-grid,
  .aeo-mobile-slot .aeo-window{transition:none}
}

/* ============================================================
   AEO STATISTICS — a keynote beat, not a content block.
   Every character is in the DOM from the first paint at opacity 0,
   so writing is a paint change only: the line breaks are decided
   once, nothing reflows mid-sentence and the section contributes
   zero layout shift. Scroll is the only clock.
   ============================================================ */
.aeo-story{
  /* shorter runway and a small landing pad, not a long parked hold: the
     reader should reach "the shift" soon after the product demo and keep
     moving soon after the last figure lands */
  --aeo-scrub:82svh;--aeo-hold:8svh;
  position:relative;background:transparent;
  font-family:var(--aeo-mono);
  height:calc(100svh + var(--aeo-scrub) + var(--aeo-hold));
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
  .aeo-story{--aeo-scrub:74svh;--aeo-hold:6svh}
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

    var desk=null,i;
    for(i=0;i<stages.length;i++){
      var h=stages[i].parentNode;
      if(!h||!h.classList||h.classList.contains("aeo-mobile-slot"))continue;
      h.classList.add("aeo-focus-host");
      if(!stages[i].querySelector(".aeo-focus-lift")){
        var lift=document.createElement("i");
        lift.className="aeo-focus-lift";
        lift.setAttribute("aria-hidden","true");
        stages[i].insertBefore(lift,stages[i].firstChild);
      }
      if(!desk)desk=h;
    }
    var mob=hero.querySelector(".aeo-mobile-slot");

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

    // two states only: resting (0) or focused (1). The flip is driven by
    // how much of the product window is actually on screen, not by scroll
    // position, so nothing here scrubs, pins or tracks the wheel — it is a
    // single CSS transition (see --aeo-f above) fired at most once per
    // direction change.
    //
    // The page must always paint the resting state first: on short
    // viewports the window can already be >45% visible before the visitor
    // has scrolled a single pixel, and snapping straight into "focused" on
    // load would read as the page loading pre-transformed rather than the
    // visitor arriving at it. So the very first observer callback (which
    // only reports the state as it already is at mount time) is allowed to
    // release the hero into resting position but never to jump it straight
    // to focused — only a real scroll can do that.
    var focused=false,scrolled=false;
    function currentRatio(){
      var t=(desk&&desk.offsetParent)?desk:((mob&&mob.offsetParent)?mob:null);
      if(!t)return 0;
      var r=t.getBoundingClientRect(),vh=window.innerHeight||0;
      if(!r.height||!vh)return 0;
      var visible=Math.min(r.bottom,vh)-Math.max(r.top,0);
      return(visible<0?0:visible)/r.height;
    }
    function setFocused(on){
      if(on&&!scrolled)return;
      if(on===focused)return;
      focused=on;
      hero.style.setProperty("--aeo-f",on?"1":"0");
    }
    // opening the gate is the moment the visitor first moves at all — the
    // IntersectionObserver below only reports when the ratio crosses one of
    // its listed thresholds, which a first, tiny scroll delta may not do,
    // so the state is evaluated directly right here rather than waiting
    // for the observer to happen to fire again on its own.
    window.addEventListener("scroll",function(){
      if(scrolled)return;
      scrolled=true;
      setFocused(currentRatio()>=0.45);
    },{passive:true,once:true});
    if(!("IntersectionObserver" in window))return;

    var io=new IntersectionObserver(function(entries){
      for(var k=0;k<entries.length;k++){
        var e=entries[k];
        // the hidden breakpoint slot (desktop vs. mobile) never accrues a
        // real ratio, so only the one actually on screen ever fires this
        if(e.target.offsetParent===null)continue;
        // "naturally reached" = the window is roughly 40-50% visible
        setFocused(e.intersectionRatio>=0.45);
      }
    },{threshold:[0,.15,.3,.45,.6,.75,.9]});
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
      // typing owns almost all of the pinned travel; only a small landing
      // pad is left afterwards so the last figure doesn't vanish the
      // instant it lands, not a long parked hold
      var scrub=travel*(narrow()?0.9257:0.9111);
      // writing starts well before the section is even pinned, so the
      // first characters are already forming as it rises into view rather
      // than after a blank, content-free beat
      var from=box.top-vh*0.75,span=box.top+scrub-from;
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
