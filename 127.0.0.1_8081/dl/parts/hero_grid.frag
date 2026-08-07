<style id="aeo-herogrid-style">
/* ============================================================
   HERO BACKGROUND — subtle interactive grey mesh
   ------------------------------------------------------------
   Replaces Attio's own hero background (a blue-tinted radial
   wash + a repeating-linear-gradient of 1px white "rain" lines
   every 8px, plus a soft vignette used to fade both out) with a
   quiet, monochrome cross-grid that drifts almost imperceptibly
   at rest and bends toward the cursor like a mesh under gravity.
   All of the actual field math lives in the script below; this
   stylesheet only removes Attio's old layers and positions the
   canvas that replaces them.
   ============================================================ */

/* Attio's three hero-background layers, matched by distinctive
   fragments of their own inline style/class strings so the exact
   same repeating-linear-gradient pattern reused elsewhere on the
   page (e.g. the footer CTA band) is left completely alone — this
   only fires inside .aeo-hero, and only for these three layers. */
.aeo-hero [style*="90% 80% at 50% 100%"],
.aeo-hero [class*="repeating-linear-gradient(90deg"],
.aeo-hero [style*="106.6667% at 50% 0%"]{display:none!important}

.aeo-hero-grid-mount{position:absolute;inset:0;overflow:hidden}
.aeo-hero-grid-mount canvas{position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none}
</style>
<script id="aeo-herogrid-script">
(function(){
  if(window.__aeoHeroGridBooted)return;
  window.__aeoHeroGridBooted=true;

  var reduce=false; try{reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){}
  // "fine" = a real mouse/trackpad. On touch devices the cursor-gravity
  // field never engages at all — ambient drift is all mobile ever gets.
  var fine=true; try{fine=window.matchMedia("(pointer:fine)").matches;}catch(e){}

  /* ------------------------------------------------------------
     Every tunable the field depends on, in one place, so the whole
     effect can be re-balanced without hunting through the math.
     ------------------------------------------------------------ */
  var CFG={
    spacingDesktop:52,        // px between grid lines, viewport >=1024
    spacingTablet:64,         // 768-1023
    spacingMobile:78,         // <768 — sparser: cheaper, and cleaner on a small screen
    lineColor:"164,173,186",  // matches this site's own --aeo-ink-5 token (chrome.frag)
    baseAlphaOpen:0.26,       // grid strength over open background — deliberately faint
    baseAlphaMin:0.045,       // grid strength once fully suppressed near text/UI
    safeFalloff:120,          // px over which suppression eases back out to baseAlphaOpen
    ambientAmp:1.6,           // px, idle sway amplitude — kept tiny on purpose
    ambientSpeed:0.00016,     // rad/ms for the slow primary sway component (~39s/cycle)
    cursorRadius:230,         // px, Gaussian falloff radius of the gravity field (no hard edge)
    cursorStrength:34,        // px, pull at the field's exact center before capping
    cursorMaxPullRatio:0.55,  // fraction of the current grid spacing — the hard displacement cap,
                               // so lines can bend but never cross over their neighbours
    posSmoothing:0.10,        // 0-1/frame, how fast the tracked point chases the raw cursor (inertia)
    influenceInSpeed:0.09,    // 0-1/frame, how fast gravity "switches on" when the cursor arrives
    influenceOutSpeed:0.045,  // 0-1/frame, how fast it releases when the cursor leaves (slower = lingers)
    safeRecalcMs:500,         // how often text-safe rects are re-measured (cheap, but no need every frame)
    alphaBins:12              // batches strokes into this many alpha buckets so a frame only ever
                               // issues ~12 canvas state changes, regardless of grid density
  };

  function clamp(v,a,b){return v<a?a:(v>b?b:v);}
  function lerp(a,b,t){return a+(b-a)*t;}
  function smoothstep(a,b,x){
    if(a===b)return x<a?0:1;
    var t=clamp((x-a)/(b-a),0,1);
    return t*t*(3-2*t);
  }
  function spacingFor(vw){
    if(vw<768)return CFG.spacingMobile;
    if(vw<1024)return CFG.spacingTablet;
    return CFG.spacingDesktop;
  }

  /* One instance per mounted canvas (desktop hero + mobile hero each
     get their own — see boot() below). Everything about a single
     mesh's geometry, ambient drift, cursor field and text-safe
     dimming is self-contained here. */
  function makeGrid(canvas){
    var ctx=canvas.getContext("2d");
    var w=0,h=0,dpr=1,spacing=CFG.spacingDesktop,cols=0,rows=0;
    var baseX=[],baseY=[],px=null,py=null;
    var safeRects=[],lastSafeCalc=0;
    var target={x:-9999,y:-9999},cur={x:-9999,y:-9999},influence=0,hovering=false;
    var t0=performance.now();
    var phaseSeed=Math.random()*1000; // decorrelates multiple grid instances from each other

    function size(){
      var host=canvas.parentElement;
      var r=host.getBoundingClientRect();
      w=Math.max(1,r.width); h=Math.max(1,r.height);
      dpr=Math.min(window.devicePixelRatio||1,2);
      canvas.width=Math.round(w*dpr); canvas.height=Math.round(h*dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);
      spacing=spacingFor(window.innerWidth);
      cols=Math.ceil(w/spacing)+2; rows=Math.ceil(h/spacing)+2;
      // center the (slightly overscanned) grid on the box so the ambient
      // sway and cursor pull never reveal a gap at any edge
      var offX=(w-(cols-1)*spacing)/2, offY=(h-(rows-1)*spacing)/2;
      baseX=new Array(cols); baseY=new Array(rows);
      for(var i=0;i<cols;i++)baseX[i]=offX+i*spacing;
      for(var j=0;j<rows;j++)baseY[j]=offY+j*spacing;
      px=new Float32Array(cols*rows); py=new Float32Array(cols*rows);
    }
    size();

    // Text-safe zones: headline, sub-line, hero CTAs and the ChatGPT
    // mock — measured live off the real DOM so this tracks any
    // viewport/typography reflow with zero hardcoded coordinates.
    function collectSafeRects(){
      var hero=canvas.closest(".aeo-hero");
      if(!hero){safeRects=[];return;}
      var host=canvas.parentElement.getBoundingClientRect();
      var els=[];
      var h1=hero.querySelector("h1"); if(h1)els.push(h1);
      hero.querySelectorAll("p").forEach(function(p){
        if(/recommended by/i.test(p.textContent||""))els.push(p);
      });
      hero.querySelectorAll('a[class*="button-primary"],a[class*="button-ghost"]').forEach(function(a){
        els.push(a);
      });
      var win=hero.querySelector(".aeo-window"); if(win)els.push(win);
      safeRects=els.map(function(el){
        var r=el.getBoundingClientRect();
        return {left:r.left-host.left,top:r.top-host.top,right:r.right-host.left,bottom:r.bottom-host.top};
      });
    }

    // Returns 0..1: how much of the base opacity should survive at
    // (x,y). 1 = open space, floors out near any safe rect. Uses the
    // *nearest* rect's suppression (the strongest one wins) so the
    // falloff reads as one continuous field, never a rectangular cutout.
    function safeFactor(x,y){
      if(!safeRects.length)return 1;
      var floor=CFG.baseAlphaMin/CFG.baseAlphaOpen;
      var min=1;
      for(var k=0;k<safeRects.length;k++){
        var rc=safeRects[k];
        var dx=Math.max(rc.left-x,0,x-rc.right);
        var dy=Math.max(rc.top-y,0,y-rc.bottom);
        var d=Math.sqrt(dx*dx+dy*dy);
        var f=floor+(1-floor)*smoothstep(0,CFG.safeFalloff,d);
        if(f<min)min=f;
      }
      return min;
    }

    function update(now){
      if(canvas.offsetWidth===0)return; // current breakpoint hides this variant — skip all work
      var elapsed=now-t0;
      if(now-lastSafeCalc>CFG.safeRecalcMs){lastSafeCalc=now;collectSafeRects();}

      influence=lerp(influence,hovering?1:0,hovering?CFG.influenceInSpeed:CFG.influenceOutSpeed);
      cur.x=lerp(cur.x,target.x,CFG.posSmoothing);
      cur.y=lerp(cur.y,target.y,CFG.posSmoothing);

      var doCursor=fine&&!reduce&&influence>0.002;
      var ambientAmp=reduce?0:CFG.ambientAmp;
      var maxPull=spacing*CFG.cursorMaxPullRatio;

      for(var j=0;j<rows;j++){
        for(var i=0;i<cols;i++){
          var bx=baseX[i],by=baseY[j],ax=0,ay=0;
          if(ambientAmp>0){
            // two summed sines per axis, phase-shifted per grid point —
            // ripples irregularly across the mesh instead of the whole
            // thing bobbing in lockstep like one obvious sine wave
            var p1=phaseSeed+i*0.53+j*0.31, p2=phaseSeed+i*0.21-j*0.44;
            ax=ambientAmp*(Math.sin(elapsed*CFG.ambientSpeed+p1)*0.6+Math.sin(elapsed*CFG.ambientSpeed*1.37+p2)*0.4);
            ay=ambientAmp*(Math.cos(elapsed*CFG.ambientSpeed*0.83+p2)*0.6+Math.cos(elapsed*CFG.ambientSpeed*1.21+p1)*0.4);
          }
          var gx=bx+ax, gy=by+ay;
          if(doCursor){
            var dx=cur.x-gx, dy=cur.y-gy;
            var dist=Math.sqrt(dx*dx+dy*dy)||0.0001;
            // Gaussian falloff — smooth to zero with no visible radius/edge
            var g=Math.exp(-(dist*dist)/(2*CFG.cursorRadius*CFG.cursorRadius));
            var pull=Math.min(CFG.cursorStrength*influence*g,maxPull);
            gx+=(dx/dist)*pull; gy+=(dy/dist)*pull;
          }
          var idx=j*cols+i;
          px[idx]=gx; py[idx]=gy;
        }
      }
      draw();
    }

    // Binning every segment's alpha into a fixed number of buckets
    // means a frame only ever issues CFG.alphaBins stroke() calls —
    // the geometry (moveTo/lineTo, no rasterization cost) can scale
    // with grid density for free.
    function draw(){
      ctx.clearRect(0,0,w,h);
      var bins=new Array(CFG.alphaBins);
      function addSeg(x0,y0,x1,y1,factor){
        if(factor<=0.02)return;
        var bi=Math.min(CFG.alphaBins-1,Math.floor(factor*CFG.alphaBins));
        var path=bins[bi]||(bins[bi]=new Path2D());
        path.moveTo(x0,y0); path.lineTo(x1,y1);
      }
      var i,j,i0,i1,j0,j1,mx,my;
      for(j=0;j<rows;j++){
        for(i=0;i<cols-1;i++){
          i0=j*cols+i; i1=i0+1;
          mx=(px[i0]+px[i1])*0.5; my=(py[i0]+py[i1])*0.5;
          addSeg(px[i0],py[i0],px[i1],py[i1],safeFactor(mx,my));
        }
      }
      for(i=0;i<cols;i++){
        for(j=0;j<rows-1;j++){
          j0=j*cols+i; j1=j0+cols;
          mx=(px[j0]+px[j1])*0.5; my=(py[j0]+py[j1])*0.5;
          addSeg(px[j0],py[j0],px[j1],py[j1],safeFactor(mx,my));
        }
      }
      ctx.lineWidth=1;
      for(var b=0;b<CFG.alphaBins;b++){
        if(!bins[b])continue;
        var alpha=((b+0.5)/CFG.alphaBins)*CFG.baseAlphaOpen;
        ctx.strokeStyle="rgba("+CFG.lineColor+","+alpha.toFixed(3)+")";
        ctx.stroke(bins[b]);
      }
    }

    var resizeT=null;
    window.addEventListener("resize",function(){
      if(resizeT)clearTimeout(resizeT);
      resizeT=setTimeout(size,150);
    });

    return{
      update:update,
      onPointer:function(clientX,clientY){
        var r=canvas.getBoundingClientRect();
        if(clientX>=r.left&&clientX<=r.right&&clientY>=r.top&&clientY<=r.bottom){
          hovering=true; target.x=clientX-r.left; target.y=clientY-r.top;
        }else{
          hovering=false;
        }
      },
      onLeaveWindow:function(){hovering=false;}
    };
  }

  var grids=[];
  function mountInto(container,afterEl){
    if(!container||container.querySelector(".aeo-hero-grid-mount"))return;
    var mount=document.createElement("div");
    mount.className="aeo-hero-grid-mount";
    mount.setAttribute("aria-hidden","true");
    var canvas=document.createElement("canvas");
    mount.appendChild(canvas);
    if(afterEl&&afterEl.parentElement===container){
      // some layouts (the mobile hero scene) have an *opaque* fill div
      // as the container's own first child, painted purely to guarantee
      // a solid backdrop — inserting before it would just get silently
      // painted over, so this drops the mesh in right after it instead
      container.insertBefore(mount,afterEl.nextSibling);
    }else{
      // first child = painted behind every real sibling already in this
      // container, matching the z-0 layering Attio's own background sat in
      container.insertBefore(mount,container.firstChild);
    }
    grids.push(makeGrid(canvas));
  }

  function boot(){
    var h1=document.querySelector("main h1")||document.querySelector("h1");
    var hero=h1?h1.closest("section"):null;
    if(!hero)return false;
    hero.classList.add("aeo-hero");
    // Both the desktop and mobile hero variants carry their own copy of
    // Attio's decorative wash div (see the CSS hide-rules above) — using
    // that same fingerprint to locate each variant's mount point keeps
    // this in lockstep with whichever nesting each layout happens to use,
    // rather than hardcoding two separate, fragile class-name guesses.
    var washes=hero.querySelectorAll('[style*="90% 80% at 50% 100%"]');
    if(washes[0])mountInto(washes[0].parentElement); // desktop: bg layer has no opaque fill sibling
    if(washes[1]){
      var innerWrap=washes[1].parentElement.parentElement; // mobile: wash -> masked wrapper -> real container
      mountInto(innerWrap,innerWrap?innerWrap.firstElementChild:null);
    }
    return grids.length>0;
  }

  var tries=0,bootIv=setInterval(function(){
    if(boot()||++tries>60)clearInterval(bootIv);
  },150);

  if(fine){
    window.addEventListener("pointermove",function(e){
      for(var k=0;k<grids.length;k++)grids[k].onPointer(e.clientX,e.clientY);
    },{passive:true});
    window.addEventListener("pointerleave",function(){
      for(var k=0;k<grids.length;k++)grids[k].onLeaveWindow();
    });
  }

  function frame(now){
    for(var k=0;k<grids.length;k++)grids[k].update(now);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
</script>
