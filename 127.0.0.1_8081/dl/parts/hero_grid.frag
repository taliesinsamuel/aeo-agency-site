<style id="aeo-sqfield-style">
/* ============================================================
   SQUARE FIELD — one continuous interactive background
   ------------------------------------------------------------
   Replaces the old hero-only grey mesh with a single dense field
   of tiny monochrome square cells that spans the hero through the
   stacked cards and the "From invisible to recommended in 90 days"
   process section — then stops immediately before the metrics
   band (#aeo-stats). All of the field math lives in the script
   below; this stylesheet only removes Attio's old hero background
   layers, opens up the section backgrounds this field needs to
   show through, and positions the single canvas.
   ============================================================ */

/* Attio's three hero-background layers, matched by distinctive
   fragments of their own inline style/class strings so the exact
   same repeating-linear-gradient pattern reused elsewhere on the
   page (e.g. the footer CTA band) is left completely alone — this
   only fires inside .aeo-hero, and only for these three layers. */
.aeo-hero [style*="90% 80% at 50% 100%"],
.aeo-hero [class*="repeating-linear-gradient(90deg"],
.aeo-hero [style*="106.6667% at 50% 0%"]{display:none!important}

/* Opaque section backgrounds would sit in front of the single
   fixed, page-level canvas no matter how negative its z-index.
   Opening these boxes (flat white/surface at rest) lets one shared
   canvas read as continuous behind the whole pre-metrics region.
   #aeo-story is already transparent; #aeo-stats keeps its dark band. */
.aeo-hero,#aeo-platform,#aeo-process,.aeo-proc{background:transparent!important}

#aeo-sqfield{position:fixed;left:0;top:0;width:100%;height:100%;z-index:-1;display:block;pointer-events:none}
</style>
<script id="aeo-sqfield-script">
(function(){
  if(window.__aeoSqFieldBooted)return;
  window.__aeoSqFieldBooted=true;

  var reduce=false; try{reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){}
  // "fine" = a real mouse/trackpad. Touch devices only ever get the
  // ambient flicker — no repulsion physics, and no listeners that could
  // fight a scroll gesture.
  var fine=true; try{fine=window.matchMedia("(pointer:fine)").matches;}catch(e){}

  /* Every tunable the field depends on, in one place.
     Physics gains below are framed as per-tick@60fps values and scaled
     by dt*60 inside the integrator so behaviour stays stable across rates. */
  var CFG={
    spacingDesktop:8.5,      // px between cell centers, viewport >=1024
    spacingTablet:9.2,       // 768-1023
    spacingMobile:10.0,      // <768
    size:4.0,                // px, square side
    color:"0,0,0",
    // Nuanced grayscale ladder — many intermediate steps, no harsh jumps.
    // Clear step lighter: resting field sits in very light grey so copy
    // leads; charcoal accents remain, but rarer and softer.
    aMin:0.020,aMax:0.052,   // majority of squares — very light grey
    aRareMin:0.14,aRareMax:0.21, // soft charcoal accents only
    rareChance:0.08,         // fewer simultaneous dark accents
    sparkleSpawn:0.95,       // keep current quantity of active sparkles
    sparkleDurMin:0.38,      // linger longer through grey ladder
    sparkleDurMax:0.85,
    ambientRetarget:0.55,    // gentle field-wide tonal drift
    ambientLerp:1.35,        // slower ease → smoother gradation
    cursorRadius:125,        // tighter local influence (~34% smaller)
    maxDisplace:18,          // restrained bend — lattice stays legible
    springK:0.045,           // a touch tighter than the chaotic pass
    damping:0.940,           // ~12% softer recovery / less jitter
    coupleK:0.055,           // light mesh coupling — no liquid waves
    repulse:1.7,             // gentler part-around-cursor
    impulseK:0.00019,        // slightly softer wake impulses
    trailLen:4,              // short, restrained trail
    trailDecay:0.42,         // older samples die quickly
    wakeMaxSpeed:1600,       // needs faster motion before wake boosts
    wakeRadiusBoost:0.18,    // modest radius bloom when moving fast
    wakeDisplaceBoost:0.22,  // modest displace bloom
    settleEps:0.025,
    pointerSmooth:1.35,      // light position lag (~10–15% smoother, not mushy)
    velSmooth:1.05,          // soften abrupt velocity / direction flips
    alphaBins:40             // finer grayscale steps for tonal smoothness
  };

  function clamp(v,a,b){return v<a?a:(v>b?b:v);}
  function rand(a,b){return a+Math.random()*(b-a);}
  // Poisson-ish count from a small expected value (avoids round-to-zero).
  function countFromRate(expected){
    var n=0;
    while(expected>=1){n++;expected-=1;}
    if(Math.random()<expected)n++;
    return n;
  }
  function spacingFor(vw){
    if(vw<768)return CFG.spacingMobile;
    if(vw<1024)return CFG.spacingTablet;
    return CFG.spacingDesktop;
  }

  var canvas=document.createElement("canvas");
  canvas.id="aeo-sqfield";
  canvas.setAttribute("aria-hidden","true");
  document.body.appendChild(canvas);
  var ctx=canvas.getContext("2d");

  var w=0,h=0,dpr=1,spacing=CFG.spacingDesktop,cols=0,rows=0,offX=0,offY=0;
  var homeX=null,homeY=null,curA=null,tgtA=null;
  var dx=null,dy=null,vx=null,vy=null,activeFlag=null;
  var spkT=null,spkDur=null,spkPeak=null; // sparkle envelope per cell
  var activeList=[];
  var binsPool=new Array(CFG.alphaBins);
  for(var _b=0;_b<CFG.alphaBins;_b++)binsPool[_b]=null;
  // Scratch buffers for neighbour coupling (read previous displacements).
  var prevDx=null,prevDy=null;

  /* Shared lattice for other effects (How-it-works pixel resolve).
     Viewport-fixed: cell centres are in CSS viewport coordinates. */
  window.__aeoSqField={
    size:CFG.size,
    spacingDesktop:CFG.spacingDesktop,
    spacingTablet:CFG.spacingTablet,
    spacingMobile:CFG.spacingMobile,
    spacingFor:spacingFor,
    get:function(){
      return {
        size:CFG.size,
        spacing:spacing,
        gap:spacing-CFG.size,
        offX:offX,
        offY:offY,
        cols:cols,
        rows:rows,
        ready:!!(homeX&&cols&&rows)
      };
    },
    /* Viewport CSS centre of lattice cell (gi, gj). */
    cellCenter:function(gi,gj){
      return {x:offX+gi*spacing,y:offY+gj*spacing};
    }
  };

  function buildField(){
    dpr=Math.min(window.devicePixelRatio||1,2);
    w=window.innerWidth; h=window.innerHeight;
    canvas.width=Math.round(w*dpr); canvas.height=Math.round(h*dpr);
    canvas.style.width=w+"px"; canvas.style.height=h+"px";
    ctx.setTransform(dpr,0,0,dpr,0,0);
    spacing=spacingFor(w);
    cols=Math.ceil(w/spacing)+2; rows=Math.ceil(h/spacing)+2;
    offX=(w-(cols-1)*spacing)/2; offY=(h-(rows-1)*spacing)/2;
    if(window.__aeoSqField){
      window.__aeoSqField.size=CFG.size;
      window.__aeoSqField.spacing=spacing;
    }
    var n=cols*rows;
    homeX=new Float32Array(n); homeY=new Float32Array(n);
    curA=new Float32Array(n); tgtA=new Float32Array(n);
    dx=new Float32Array(n); dy=new Float32Array(n);
    vx=new Float32Array(n); vy=new Float32Array(n);
    prevDx=new Float32Array(n); prevDy=new Float32Array(n);
    spkT=new Float32Array(n); spkDur=new Float32Array(n); spkPeak=new Float32Array(n);
    activeFlag=new Uint8Array(n);
    activeList.length=0;
    var i,j,idx,base;
    for(j=0;j<rows;j++){
      for(i=0;i<cols;i++){
        idx=j*cols+i;
        homeX[idx]=offX+i*spacing; homeY[idx]=offY+j*spacing;
        base=rand(CFG.aMin,CFG.aMax);
        curA[idx]=base; tgtA[idx]=base;
        spkT[idx]=0; spkDur[idx]=0; spkPeak[idx]=0;
      }
    }
  }

  // ---- ambient luminance + asynchronous dark sparkles ----
  // Idle cells stay at home; only opacity shimmer/sparkles. Positions
  // move from cursor physics alone.
  function updateIdle(dt){
    var n=cols*rows,i,idx,env,u;
    var ambLerp=1-Math.exp(-CFG.ambientLerp*dt);
    for(i=0;i<n;i++){
      curA[i]+=(tgtA[i]-curA[i])*ambLerp;
      if(spkDur[i]>0){
        spkT[i]+=dt;
        if(spkT[i]>=spkDur[i]){spkDur[i]=0;spkPeak[i]=0;spkT[i]=0;}
      }
    }
    // Slow ambient retargets — pick from a continuous grayscale band.
    var ambPicks=countFromRate(n*0.10*dt);
    for(i=0;i<ambPicks;i++){
      idx=(Math.random()*n)|0;
      if(spkDur[idx]>0)continue;
      // Bias toward mid-tones so the field feels layered, not binary.
      var u=Math.random();
      tgtA[idx]=CFG.aMin+(CFG.aMax-CFG.aMin)*(u*u*0.35+u*0.65);
    }
    // Sparkle spawns: brief darken with smooth ease in/out.
    var spawns=countFromRate(n*CFG.sparkleSpawn*dt);
    for(i=0;i<spawns;i++){
      idx=(Math.random()*n)|0;
      if(spkDur[idx]>0)continue;
      spkT[idx]=0;
      spkDur[idx]=rand(CFG.sparkleDurMin,CFG.sparkleDurMax);
      if(Math.random()<CFG.rareChance){
        // Occasional charcoal peak — still eased via envelope, never near-black.
        spkPeak[idx]=rand(CFG.aRareMin,CFG.aRareMax)-curA[idx];
      }else if(Math.random()<0.45){
        // Mid sparkles — visible but softer than before.
        spkPeak[idx]=rand(0.050,0.105);
      }else{
        // Light sparkles — subtle flicker in the light-grey band.
        spkPeak[idx]=rand(0.020,0.060);
      }
      if(spkPeak[idx]<0.008)spkPeak[idx]=0.008;
    }
  }

  function cellAlpha(idx){
    var a=curA[idx];
    if(spkDur[idx]>0){
      var u=spkT[idx]/spkDur[idx];
      // Smoothstep envelope — softer shoulders than a raw sine flash.
      var s=u*u*(3-2*u);
      var env=s*(1-s)*4; // 0→1→0, peaked mid-life
      a+=spkPeak[idx]*env;
    }
    return a;
  }

  // ---- pointer tracking + short trail (physics input only) ----
  // raw* = latest OS sample; mouse* = lightly smoothed drive for forces.
  var rawPtr={x:-9999,y:-9999,vx:0,vy:0};
  var mouse={x:-9999,y:-9999,active:false,vx:0,vy:0};
  var lastMouse={x:0,y:0,t:0};
  var wake=0;
  var trail=new Array(CFG.trailLen);
  var trailCount=0;
  var trailWrite=0;
  for(var ti=0;ti<CFG.trailLen;ti++)trail[ti]={x:0,y:0,w:0};

  function pushTrail(x,y,weight){
    trail[trailWrite].x=x; trail[trailWrite].y=y; trail[trailWrite].w=weight;
    trailWrite=(trailWrite+1)%CFG.trailLen;
    if(trailCount<CFG.trailLen)trailCount++;
  }

  if(fine){
    window.addEventListener("pointermove",function(e){
      var t=performance.now();
      var mvx=0,mvy=0;
      if(lastMouse.t){
        var dtMs=Math.max(1,t-lastMouse.t);
        mvx=(e.clientX-lastMouse.x)/dtMs*1000;
        mvy=(e.clientY-lastMouse.y)/dtMs*1000;
        var sp=Math.hypot(mvx,mvy);
        // Ease wake up so fast flicks don't snap the force field.
        var wakeTarget=clamp(sp/CFG.wakeMaxSpeed,0,1);
        wake=clamp(Math.max(wake,wake+(wakeTarget-wake)*0.35),0,1);
      }
      lastMouse.x=e.clientX; lastMouse.y=e.clientY; lastMouse.t=t;
      rawPtr.x=e.clientX; rawPtr.y=e.clientY; rawPtr.vx=mvx; rawPtr.vy=mvy;
      mouse.active=true;
    },{passive:true});
    window.addEventListener("pointerdown",function(e){
      rawPtr.x=e.clientX; rawPtr.y=e.clientY;
      mouse.x=e.clientX; mouse.y=e.clientY; mouse.active=true;
      pushTrail(e.clientX,e.clientY,1);
    },{passive:true});
    // Leave stops *new* forces only — velocities keep decaying naturally.
    window.addEventListener("pointerleave",function(){mouse.active=false;});
    window.addEventListener("blur",function(){mouse.active=false;});
  }

  var prevTrailX=-9999,prevTrailY=-9999;
  function smoothPointer(dt){
    if(!fine||!mouse.active)return;
    if(mouse.x<-9000){
      mouse.x=rawPtr.x; mouse.y=rawPtr.y;
      mouse.vx=rawPtr.vx; mouse.vy=rawPtr.vy;
      prevTrailX=mouse.x; prevTrailY=mouse.y;
      pushTrail(mouse.x,mouse.y,1);
      return;
    }
    // Frame-rate independent exponential lerp — small lag, continuous force.
    var pK=1-Math.exp(-CFG.pointerSmooth*60*dt);
    var vK=1-Math.exp(-CFG.velSmooth*60*dt);
    mouse.x+=(rawPtr.x-mouse.x)*pK;
    mouse.y+=(rawPtr.y-mouse.y)*pK;
    mouse.vx+=(rawPtr.vx-mouse.vx)*vK;
    mouse.vy+=(rawPtr.vy-mouse.vy)*vK;
    // Trail only on real motion — idle hover must not keep re-charging the wake.
    var tdx=mouse.x-prevTrailX, tdy=mouse.y-prevTrailY;
    if(tdx*tdx+tdy*tdy>0.64){
      prevTrailX=mouse.x; prevTrailY=mouse.y;
      pushTrail(mouse.x,mouse.y,1);
    }
  }

  function activate(idx){
    if(!activeFlag[idx]){activeFlag[idx]=1;activeList.push(idx);}
  }

  // Marks every cell within the (wake-widened) radius as active so the
  // physics pass below picks it up — cheap because it only ever touches
  // a small rectangle of the grid, never the whole field.
  function markCandidates(effR){
    var pad=effR+spacing*2;
    var i0=clamp(Math.floor((mouse.x-pad-offX)/spacing),0,cols-1);
    var i1=clamp(Math.ceil((mouse.x+pad-offX)/spacing),0,cols-1);
    var j0=clamp(Math.floor((mouse.y-pad-offY)/spacing),0,rows-1);
    var j1=clamp(Math.ceil((mouse.y+pad-offY)/spacing),0,rows-1);
    for(var j=j0;j<=j1;j++){
      var base=j*cols;
      for(var i=i0;i<=i1;i++)activate(base+i);
    }
  }

  // Expand active set by one ring so neighbour coupling can propagate
  // a soft elastic wave without all-to-all work. Only cells with real
  // motion seed the halo — avoids waking the entire grid.
  function expandActiveRing(){
    var len=activeList.length,k,idx,c,r;
    for(k=0;k<len;k++){
      idx=activeList[k];
      if(Math.abs(dx[idx])<0.2&&Math.abs(dy[idx])<0.2&&
         Math.abs(vx[idx])<0.2&&Math.abs(vy[idx])<0.2)continue;
      c=idx%cols; r=(idx-c)/cols;
      if(c>0)activate(idx-1);
      if(c<cols-1)activate(idx+1);
      if(r>0)activate(idx-cols);
      if(r<rows-1)activate(idx+cols);
    }
  }

  // Soft Gaussian influence from a sample point → cell.
  function sampleForce(cx,cy,sx,sy,effR,out){
    var ddx=cx-sx, ddy=cy-sy;
    var d2=ddx*ddx+ddy*ddy;
    var sig=effR*0.55;
    var g=Math.exp(-d2/(2*sig*sig));
    if(g<0.01){out.g=0;return;}
    var dist=Math.sqrt(d2)||0.0001;
    out.g=g; out.nx=ddx/dist; out.ny=ddy/dist;
  }

  var _sf={g:0,nx:0,ny:0};

  // Underdamped spring + repulsion + pointer momentum + neighbour
  // Laplacian. Displacement is continuous; nothing snaps or zeros on
  // pointer leave — motion decays through damping alone.
  function stepActive(dt,effR,maxD){
    var doPush=fine&&mouse.active;
    var farR=effR*2.6, farR2=farR*farR;
    var tick=dt*60; // ~1 at 60fps; keeps CFG gains in per-tick units
    var damp=Math.pow(CFG.damping,tick);
    var i,idx,cx,cy,fx,fy,far,c,r,nCount,avgX,avgY,mag,s;
    var tIdx,tq,impulseScale,spd,push;

    // Snapshot displacements for stable neighbour reads this frame.
    for(i=0;i<activeList.length;i++){
      idx=activeList[i];
      prevDx[idx]=dx[idx]; prevDy[idx]=dy[idx];
    }

    // One-cell halo so coupling can carry a soft ripple outward.
    if(doPush||activeList.length)expandActiveRing();

    i=0;
    while(i<activeList.length){
      idx=activeList[i];
      cx=homeX[idx]+dx[idx]; cy=homeY[idx]+dy[idx];

      // Soft spring home — lower strength, longer recovery.
      fx=-CFG.springK*dx[idx];
      fy=-CFG.springK*dy[idx];

      // Lightweight discrete Laplacian vs 4-neighbours (elastic fabric).
      c=idx%cols; r=(idx-c)/cols;
      nCount=0; avgX=0; avgY=0;
      if(c>0){avgX+=prevDx[idx-1];avgY+=prevDy[idx-1];nCount++;}
      if(c<cols-1){avgX+=prevDx[idx+1];avgY+=prevDy[idx+1];nCount++;}
      if(r>0){avgX+=prevDx[idx-cols];avgY+=prevDy[idx-cols];nCount++;}
      if(r<rows-1){avgX+=prevDx[idx+cols];avgY+=prevDy[idx+cols];nCount++;}
      if(nCount){
        avgX/=nCount; avgY/=nCount;
        fx+=CFG.coupleK*(avgX-dx[idx]);
        fy+=CFG.coupleK*(avgY-dy[idx]);
      }

      far=true;
      if(doPush){
        // Trail samples: newest strongest, older decay fast — fluid wake.
        tq=1;
        for(tIdx=0;tIdx<trailCount;tIdx++){
          var sample=trail[(trailWrite-1-tIdx+CFG.trailLen)%CFG.trailLen];
          if(sample.w<=0)continue;
          sampleForce(cx,cy,sample.x,sample.y,effR,_sf);
          if(_sf.g>0){
            // (A) Soft Gaussian repulsion — no hard circular rim.
            push=maxD*CFG.springK*CFG.repulse*_sf.g*tq;
            fx+=_sf.nx*push;
            fy+=_sf.ny*push;
            far=false;
          }
          tq*=CFG.trailDecay;
        }

        // (B) Momentum from pointer travel — impulse in travel direction.
        spd=Math.hypot(mouse.vx,mouse.vy);
        if(spd>12){
          sampleForce(cx,cy,mouse.x,mouse.y,effR*1.2,_sf);
          if(_sf.g>0){
            impulseScale=CFG.impulseK*_sf.g*(0.3+0.7*wake)*tick;
            fx+=mouse.vx*impulseScale;
            fy+=mouse.vy*impulseScale;
            far=false;
          }
        }

        var ddx=cx-mouse.x, ddy=cy-mouse.y;
        if(ddx*ddx+ddy*ddy<farR2)far=false;
      }

      vx[idx]=(vx[idx]+fx*tick)*damp;
      vy[idx]=(vy[idx]+fy*tick)*damp;
      dx[idx]+=vx[idx]*tick;
      dy[idx]+=vy[idx]*tick;

      mag=Math.sqrt(dx[idx]*dx[idx]+dy[idx]*dy[idx]);
      if(mag>maxD){
        s=maxD/mag; dx[idx]*=s; dy[idx]*=s;
        // Soft clamp — bleed speed, don't kill it.
        vx[idx]*=0.75; vy[idx]*=0.75;
      }

      if(far&&Math.abs(dx[idx])<CFG.settleEps&&Math.abs(dy[idx])<CFG.settleEps&&
         Math.abs(vx[idx])<CFG.settleEps&&Math.abs(vy[idx])<CFG.settleEps){
        dx[idx]=0;dy[idx]=0;vx[idx]=0;vy[idx]=0;activeFlag[idx]=0;
        activeList[i]=activeList[activeList.length-1];
        activeList.pop();
        continue;
      }
      i++;
    }
  }

  function draw(){
    ctx.clearRect(0,0,w,h);
    var n=cols*rows,b;
    for(b=0;b<CFG.alphaBins;b++)binsPool[b]=null;
    var half=CFG.size/2, range=CFG.aRareMax;
    for(var idx=0;idx<n;idx++){
      var a=cellAlpha(idx);
      if(a<=0.004)continue;
      if(a>range)a=range;
      var bi=Math.min(CFG.alphaBins-1,(a/range*CFG.alphaBins)|0);
      var path=binsPool[bi]||(binsPool[bi]=new Path2D());
      path.rect(homeX[idx]+dx[idx]-half,homeY[idx]+dy[idx]-half,CFG.size,CFG.size);
    }
    for(b=0;b<CFG.alphaBins;b++){
      if(!binsPool[b])continue;
      var alpha=((b+0.5)/CFG.alphaBins)*range;
      ctx.fillStyle="rgba("+CFG.color+","+alpha.toFixed(3)+")";
      ctx.fill(binsPool[b]);
    }
  }

  // ---- one continuous field: measure hero-top → metrics-top ----
  var heroEl=null,endEl=null;
  var bounds={heroTop:0,endTop:1e9},boundsReady=false;
  function measureBounds(){
    if(!heroEl){
      var h1=document.querySelector("main h1")||document.querySelector("h1");
      heroEl=h1?h1.closest("section"):null;
    }
    var stats=document.getElementById("aeo-stats");
    var proc=document.getElementById("aeo-process");
    var plat=document.getElementById("aeo-platform");
    var end=stats||proc||plat;
    if(end)endEl=end;
    if(!heroEl||!endEl)return;
    var sy=window.pageYOffset||document.documentElement.scrollTop||0;
    var hr=heroEl.getBoundingClientRect(), er=endEl.getBoundingClientRect();
    bounds.heroTop=hr.top+sy;
    // Clip at the top of the terminator: stats (preferred) or process
    // fallback. Platform-only fallback uses its bottom so the field still
    // covers the stack when later sections have not mounted yet.
    bounds.endTop=(endEl===plat?er.bottom:er.top)+sy;
    boundsReady=true;
  }

  var lastClip="";
  function applyClip(heroVY,endVY,vh){
    var top=clamp(heroVY,0,vh);
    var bottom=clamp(vh-endVY,0,vh);
    var val="inset("+top.toFixed(1)+"px 0px "+bottom.toFixed(1)+"px 0px)";
    if(val!==lastClip){canvas.style.clipPath=val;canvas.style.webkitClipPath=val;lastClip=val;}
  }

  var resizeT=null;
  function onResize(){
    if(resizeT)clearTimeout(resizeT);
    resizeT=setTimeout(function(){buildField();measureBounds();draw();},150);
  }
  window.addEventListener("resize",onResize);

  buildField();
  var boot=0,bootIv=setInterval(function(){
    measureBounds();
    if(++boot>60)clearInterval(bootIv); // ~15s of settling: async section mounts + pin resizing
  },250);

  var lastT=performance.now();
  function frame(now){
    requestAnimationFrame(frame);
    if(!boundsReady)return;
    var sy=window.pageYOffset||document.documentElement.scrollTop||0;
    var vh=window.innerHeight;
    var heroVY=bounds.heroTop-sy, endVY=bounds.endTop-sy;
    if(endVY<=0||heroVY>=vh){lastT=now;return;} // fully out of view
    applyClip(heroVY,endVY,vh);

    var dt=Math.min(0.033,(now-lastT)/1000);
    lastT=now;
    if(dt<=0)dt=1/60;

    if(!reduce){
      wake*=Math.pow(0.90,dt*60);
      // Pointer velocity decays when the cursor idles so impulses don't stick.
      mouse.vx*=Math.pow(0.88,dt*60);
      mouse.vy*=Math.pow(0.88,dt*60);
      rawPtr.vx*=Math.pow(0.88,dt*60);
      rawPtr.vy*=Math.pow(0.88,dt*60);
      // Decay trail weights so old samples lose influence quickly.
      for(var t=0;t<CFG.trailLen;t++)trail[t].w*=Math.pow(0.82,dt*60);

      smoothPointer(dt);
      updateIdle(dt);
      var effR=CFG.cursorRadius*(1+CFG.wakeRadiusBoost*wake);
      var maxD=CFG.maxDisplace*(1+CFG.wakeDisplaceBoost*wake);
      if(fine&&mouse.active)markCandidates(effR);
      // Keep simulating while anything is still moving — no binary off switch.
      if(activeList.length)stepActive(dt,effR,maxD);
    }
    draw();
  }
  requestAnimationFrame(frame);
})();
</script>
