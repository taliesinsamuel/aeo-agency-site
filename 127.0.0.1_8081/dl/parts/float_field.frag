<style id="aeo-floatfield-style">
/* ============================================================
   FLOATING SQUARE FIELD — secondary pages only
   ------------------------------------------------------------
   Dispersed, independently drifting monochrome squares on a white
   canvas. Visual language matches the homepage square field
   (size, flat fill, grayscale alphas) but physics are autonomous
   agents — not a rigid matrix. Injected only via build_page();
   never mounts on the homepage.
   ============================================================ */

/* Fixed viewport canvas under page content. On secondary pages the
   Attio shell paints an opaque body background that hides z-index:-1
   layers, so the canvas sits at z-index:0 and the page shell is lifted
   above it. Dark bands keep their own opaque fills and cover the field. */
html{background:#fff}
body{background-color:transparent!important}

#aeo-floatfield{
  position:fixed;left:0;top:0;width:100%;height:100%;
  z-index:0;display:block;pointer-events:none;
}

/* Lift the Attio page shell (and footer) above the canvas without
   changing content styling — position/z-index only. */
body > div.flex,
.aeo-foot{
  position:relative;
  z-index:1;
}

/* Open the light subpage shell so the fixed canvas shows through.
   Cards, forms, FAQ rows, and dark bands keep their own surfaces. */
.aeo-subpage.aeo-plat{background:transparent!important}

/* Ensure intentionally dark regions remain opaque above the field. */
.aeo-cta-band,.aeo-foot{isolation:isolate}
</style>
<script id="aeo-floatfield-script">
(function(){
  if(window.__aeoFloatFieldBooted)return;
  // Hard guard: never run if the homepage square field is present.
  if(window.__aeoSqFieldBooted||document.getElementById("aeo-sqfield"))return;
  // Privacy / Terms use a continuous dark legal canvas — no starfield.
  try{
    var path=(location.pathname||"").toLowerCase();
    if(/\/(privacy|terms)(\.html)?\/?$/.test(path)||document.documentElement.classList.contains("aeo-legal-page"))return;
  }catch(e){}
  window.__aeoFloatFieldBooted=true;

  var reduce=false; try{reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){}
  var fine=true; try{fine=window.matchMedia("(pointer:fine)").matches;}catch(e){}

  /* Visual constants — density/size/physics stay independent.
     Non-home: homepage tonal ladder (hero_grid.frag); sparkle timing stays non-home. */
  var CFG={
    size:4.0,
    color:"0,0,0",
    // Non-home only: slightly denser + a touch darker than before.
    // Size/physics/sparkle timing unchanged. Homepage uses hero_grid.frag.
    aMin:0.034,aMax:0.082,   // majority — a bit darker still
    aMidMin:0.072,aMidMax:0.135, // light-medium band
    aRareMin:0.17,aRareMax:0.26, // soft charcoal accents only
    aBlackMin:0.17,aBlackMax:0.26, // charcoal tier (kept ≤ aCeil)
    midChance:0.22,
    rareChance:0.11,
    blackChance:0.06,
    aCeil:0.26,
    // Sparkle — timing/rate unchanged; peak shades use palette above
    sparkleSpawn:1.35,
    sparkleDurMin:0.42,
    sparkleDurMax:0.95,
    ambientLerp:1.45,
    // Density — slightly fewer than last pass; still above original
    areaPerParticle:600,
    countMin:1100,
    countMax:2300,
    // Ambient drift (px/s) — unchanged idle look/feel
    driftMin:22,
    driftMax:42,

    /* ---- CURSOR FLOW FIELD (interaction only) ----
       Strong LOCAL pull + fast response. Moving >> stationary.
       Visual/idle CFG above stays locked. */
    // Dynamic influence radius (viewport px)
    radiusStill:190,
    radiusMove:320,
    energyForMaxRadius:170, // moderate speed → near-full moving field
    // Personal orbit offsets — loose irregular cloud, center open
    spaceMin:52,
    spaceMax:150,
    // Per-particle variety
    massMin:0.7,
    massMax:2.1,
    // Base inertial steering toward desired velocity (1/s)
    steerMin:4.0,
    steerMax:7.5,
    // Extra steering boost while under local cursor influence (1/s)
    cursorSteerBoost:12.0,
    // Desired flow toward personal offset (px/s) — still vs moving
    flowStill:55,
    flowMove:310,
    // Modest capped radial accel toward personal offset (px/s²)
    radialAccelStill:90,
    radialAccelMove:320,
    // How much autonomous velocity is retained under influence
    autoRetainMin:0.08,
    autoRetainMax:0.28,
    // Inherit smoothed cursor velocity as local current
    velInheritMin:0.38,
    velInheritMax:0.78,
    // Subtle tangential — secondary to inward attraction
    tangStill:0.16,
    tangMove:0.28,
    // Soft outward push near exact pointer center
    centerClear:38,
    centerPush:58,
    // Presence fade when pointer enters/leaves page (1/s)
    influenceFadeIn:14.0,
    influenceFadeOut:8.0,
    // Pointer smoothing (1/s) — responsive, not laggy
    ptrSmooth:28,
    ptrVelSmooth:16,
    energySmoothUp:18,
    energySmoothDown:4.0,
    // Strength: controlled when still, powerful when moving
    strengthStill:0.42,
    strengthMove:1.15,
    speedCap:420,

    // Soft spatial density balancing (unchanged autonomous layer)
    densCols:6,
    densRows:4,
    densBiasMin:4,
    densBiasMax:11,
    densRetargetMin:1.0,
    densRetargetMax:3.0,
    densUnderRatio:0.78,
    densOverRatio:1.28,
    alphaBins:40 // homepage tonal bin resolution
  };

  function clamp(v,a,b){return v<a?a:(v>b?b:v);}
  function rand(a,b){return a+Math.random()*(b-a);}
  function hypot(x,y){return Math.sqrt(x*x+y*y);}
  function smoothstep(u){u=clamp(u,0,1);return u*u*(3-2*u);}
  // Poisson-ish count from a small expected value (homepage sparkle helper)
  function countFromRate(expected){
    var n=0;
    while(expected>=1){n++;expected-=1;}
    if(Math.random()<expected)n++;
    return n;
  }

  var canvas=document.createElement("canvas");
  canvas.id="aeo-floatfield";
  canvas.setAttribute("aria-hidden","true");
  document.body.appendChild(canvas);
  var ctx=canvas.getContext("2d",{alpha:true});

  var w=0,h=0,dpr=1,count=0;
  var parts=null;
  var half=CFG.size*0.5;

  var densCols=CFG.densCols, densRows=CFG.densRows;
  var densN=densCols*densRows;
  var densCount=new Int16Array(densN);
  var densAvg=0;
  var cellW=1, cellH=1;

  // Pointer — viewport coords (clientX/Y) for fixed canvas
  var ptr={x:-9999,y:-9999,active:false};
  var ptrSmooth={x:-9999,y:-9999};
  var ptrPrev={x:-9999,y:-9999};
  var ptrVel={x:0,y:0};
  var ptrEnergy=0;
  var ptrInfluence=0;

  function pickAlpha(){
    // Homepage resting field: continuous very-light band only.
    // Darker accents arrive via sparkle peaks (same as hero_grid).
    return rand(CFG.aMin,CFG.aMax);
  }

  function countFor(vw,vh){
    var n=Math.round((vw*vh)/CFG.areaPerParticle);
    return clamp(n,CFG.countMin,CFG.countMax);
  }

  function cellIndex(x,y){
    var cx=clamp((x/cellW)|0,0,densCols-1);
    var cy=clamp((y/cellH)|0,0,densRows-1);
    return cy*densCols+cx;
  }

  function cellCenter(idx,out){
    var cx=idx%densCols, cy=(idx/densCols)|0;
    out.x=(cx+rand(0.15,0.85))*cellW;
    out.y=(cy+rand(0.15,0.85))*cellH;
  }

  function pickUnderCell(preferNearX,preferNearY){
    var i,best=-1,bestScore=1e9,score,cx,cy,dx,dy;
    var threshold=densAvg*CFG.densUnderRatio;
    for(i=0;i<densN;i++){
      if(densCount[i]>threshold)continue;
      cx=i%densCols; cy=(i/densCols)|0;
      dx=(cx+0.5)*cellW-preferNearX;
      dy=(cy+0.5)*cellH-preferNearY;
      score=densCount[i]*18+hypot(dx,dy)*0.04+Math.random()*12;
      if(score<bestScore){bestScore=score;best=i;}
    }
    if(best<0){
      best=0;
      for(i=1;i<densN;i++)if(densCount[i]<densCount[best])best=i;
    }
    return best;
  }

  function assignPersonalSpace(p){
    // Irregular polar offset — surrounds cursor; never a perfect ring
    var ang=rand(0,Math.PI*2);
    var rad=rand(CFG.spaceMin,CFG.spaceMax);
    if(Math.random()<0.4)rad*=rand(0.7,1.3);
    p.spaceX=Math.cos(ang)*rad+rand(-16,16);
    p.spaceY=Math.sin(ang)*rad+rand(-16,16);
    var r0=hypot(p.spaceX,p.spaceY);
    if(r0<CFG.spaceMin*0.88&&r0>0.001){
      var s=(CFG.spaceMin*0.88)/r0;
      p.spaceX*=s; p.spaceY*=s;
    }
  }

  function makeParticle(existing){
    var p=existing||{};
    p.x=rand(0,w); p.y=rand(0,h);
    p.mass=rand(CFG.massMin,CFG.massMax);
    p.steer=rand(CFG.steerMin,CFG.steerMax);
    p.autoRetain=rand(CFG.autoRetainMin,CFG.autoRetainMax);
    p.velInherit=rand(CFG.velInheritMin,CFG.velInheritMax);
    p.densBias=rand(CFG.densBiasMin,CFG.densBiasMax);
    p.tangSign=Math.random()<0.5?-1:1;
    p.tangAmt=rand(0.65,1.35);
    p.response=rand(0.75,1.15); // per-particle cursor responsiveness
    var ang=rand(0,Math.PI*2);
    var spd=rand(CFG.driftMin,CFG.driftMax);
    p.driftX=Math.cos(ang)*spd;
    p.driftY=Math.sin(ang)*spd;
    p.vx=p.driftX*(0.85+Math.random()*0.3);
    p.vy=p.driftY*(0.85+Math.random()*0.3);
    assignPersonalSpace(p);
    p.densTx=p.x; p.densTy=p.y;
    p.densTimer=rand(0.2,CFG.densRetargetMax);
    // Homepage-style tonal state (opacity only — no motion coupling)
    p.curA=pickAlpha();
    p.tgtA=p.curA;
    p.a=p.curA;
    p.spkT=0; p.spkDur=0; p.spkPeak=0;
    return p;
  }

  var _densPt={x:0,y:0};

  function resize(){
    dpr=Math.min(window.devicePixelRatio||1,2);
    w=window.innerWidth; h=window.innerHeight;
    canvas.width=Math.round(w*dpr);
    canvas.height=Math.round(h*dpr);
    canvas.style.width=w+"px";
    canvas.style.height=h+"px";
    ctx.setTransform(dpr,0,0,dpr,0,0);

    cellW=w/densCols; cellH=h/densRows;

    var next=countFor(w,h);
    if(!parts||parts.length!==next){
      var old=parts;
      parts=new Array(next);
      var i;
      for(i=0;i<next;i++){
        if(old&&old[i]){
          parts[i]=old[i];
          wrapPos(parts[i]);
        }else{
          parts[i]=makeParticle();
        }
      }
      count=next;
    }
  }

  function wrapPos(p){
    var m=CFG.size*3;
    var spanX=w+2*m, spanY=h+2*m;
    var wrapped=false;
    if(p.x<-m){p.x+=spanX; wrapped=true;}
    else if(p.x>w+m){p.x-=spanX; wrapped=true;}
    if(p.y<-m){p.y+=spanY; wrapped=true;}
    else if(p.y>h+m){p.y-=spanY; wrapped=true;}
    if(wrapped){
      p.densTimer=rand(0.05,0.55);
    }
  }

  function recountDensity(){
    var i,p,idx;
    for(i=0;i<densN;i++)densCount[i]=0;
    for(i=0;i<count;i++){
      p=parts[i];
      idx=cellIndex(p.x,p.y);
      densCount[idx]++;
      p.cell=idx;
    }
    densAvg=count/densN;
  }

  function step(dt){
    if(!parts)return;
    var i,p,dx,dy,dist,fall,u,mx,my,desVx,desVy,blend,steer,sp,inv;
    var densW,ddx,ddy,dd,localFall,overfull,underNeed;
    var toCx,toCy,cDist,tx,ty,flowAmt,tangK,energyN,radius,mix;
    var flowVx,flowVy,tangVx,tangVy,carryVx,carryVy,arrive,radAccel;
    var hasPtr=ptr.active&&fine&&!reduce;

    // Soft cursor presence
    var fadeT=hasPtr?CFG.influenceFadeIn:CFG.influenceFadeOut;
    var fadeBlend=1-Math.exp(-fadeT*dt);
    ptrInfluence+=( (hasPtr?1:0) - ptrInfluence )*fadeBlend;

    var sm=1-Math.exp(-CFG.ptrSmooth*dt);
    var speed=0;
    mx=null; my=null;

    if(ptrInfluence>0.001&&hasPtr){
      if(ptrSmooth.x<-9000){
        ptrSmooth.x=ptr.x; ptrSmooth.y=ptr.y;
        ptrPrev.x=ptr.x; ptrPrev.y=ptr.y;
        ptrVel.x=0; ptrVel.y=0;
        ptrEnergy=0;
      }else{
        var rawVx=(ptr.x-ptrPrev.x)/Math.max(dt,1e-4);
        var rawVy=(ptr.y-ptrPrev.y)/Math.max(dt,1e-4);
        rawVx=clamp(rawVx,-900,900);
        rawVy=clamp(rawVy,-900,900);
        var vsm=1-Math.exp(-CFG.ptrVelSmooth*dt);
        ptrVel.x+=(rawVx-ptrVel.x)*vsm;
        ptrVel.y+=(rawVy-ptrVel.y)*vsm;
        ptrPrev.x=ptr.x; ptrPrev.y=ptr.y;
        ptrSmooth.x+=(ptr.x-ptrSmooth.x)*sm;
        ptrSmooth.y+=(ptr.y-ptrSmooth.y)*sm;
      }
      mx=ptrSmooth.x; my=ptrSmooth.y;
      speed=hypot(ptrVel.x,ptrVel.y);
    }else if(ptrInfluence>0.001){
      ptrVel.x*=Math.exp(-5*dt);
      ptrVel.y*=Math.exp(-5*dt);
      mx=ptrSmooth.x; my=ptrSmooth.y;
      speed=hypot(ptrVel.x,ptrVel.y);
    }else{
      ptrSmooth.x=-9999; ptrSmooth.y=-9999;
      ptrVel.x=0; ptrVel.y=0;
      ptrEnergy=0;
    }

    // Continuous interaction energy from smoothed cursor speed
    if(mx!=null){
      var eTarget=speed;
      var eRate=eTarget>ptrEnergy?CFG.energySmoothUp:CFG.energySmoothDown;
      ptrEnergy+=(eTarget-ptrEnergy)*(1-Math.exp(-eRate*dt));
    }

    energyN=smoothstep(ptrEnergy/CFG.energyForMaxRadius);
    radius=CFG.radiusStill+(CFG.radiusMove-CFG.radiusStill)*energyN;
    var strength=CFG.strengthStill+(CFG.strengthMove-CFG.strengthStill)*energyN;
    var flowCap=CFG.flowStill+(CFG.flowMove-CFG.flowStill)*energyN;
    radAccel=CFG.radialAccelStill+(CFG.radialAccelMove-CFG.radialAccelStill)*energyN;
    tangK=CFG.tangStill+(CFG.tangMove-CFG.tangStill)*energyN;

    recountDensity();

    var driftScale=reduce?0:1;
    var infl=ptrInfluence;

    for(i=0;i<count;i++){
      p=parts[i];
      localFall=0;

      // LAYER 1 — autonomous drift (always on; never replaced)
      desVx=p.driftX*driftScale;
      desVy=p.driftY*driftScale;

      // LAYER 2 — LOCAL cursor FLOW (current distance only; no capture)
      if(infl>0.001&&mx!=null){
        toCx=mx-p.x;
        toCy=my-p.y;
        cDist=hypot(toCx,toCy);

        if(cDist<radius){
          u=1-cDist/radius;
          // Soft falloff — strong nearby, weak at edge, zero outside
          // (single smoothstep; no extra square that killed mid-range feel)
          fall=smoothstep(u)*infl*strength*p.response;
          localFall=fall;

          // Personal flow target around cursor (loose cloud, not center)
          dx=(mx+p.spaceX)-p.x;
          dy=(my+p.spaceY)-p.y;
          dist=hypot(dx,dy);

          if(dist>1){
            inv=1/dist;
            tx=dx*inv;
            ty=dy*inv;

            // Arrival softens only very near personal offset (avoids bounce)
            arrive=dist/(dist+28);
            flowAmt=flowCap*arrive;
            flowVx=tx*flowAmt;
            flowVy=ty*flowAmt;

            // Light tangential — secondary to clear inward attraction
            tangVx=(-ty)*p.tangSign*p.tangAmt*flowAmt*tangK;
            tangVy=(tx)*p.tangSign*p.tangAmt*flowAmt*tangK;

            // Cursor carries a local current while moving
            carryVx=ptrVel.x*p.velInherit;
            carryVy=ptrVel.y*p.velInherit;

            // Strong mix toward cursor flow (still keeps some autonomous pass-through)
            mix=clamp(fall*(1-p.autoRetain),0,0.96);
            desVx=desVx*(1-mix)+(flowVx+tangVx+carryVx)*mix;
            desVy=desVy*(1-mix)+(flowVy+tangVy+carryVy)*mix;

            // Modest capped radial accel — stronger pull without spring tether
            var pull=radAccel*fall*arrive;
            p.vx+=tx*pull*dt;
            p.vy+=ty*pull*dt;
          }

          // Keep pointer center relatively clear
          if(cDist<CFG.centerClear&&cDist>0.5){
            inv=1/cDist;
            var push=(1-cDist/CFG.centerClear)*CFG.centerPush*fall;
            desVx-=toCx*inv*push;
            desVy-=toCy*inv*push;
          }
        }
      }

      // LAYER 3 — weak density circulation
      densW=(1-localFall*0.88)*driftScale;
      if(densW>0.05&&!reduce){
        p.densTimer-=dt;
        overfull=densCount[p.cell]>densAvg*CFG.densOverRatio;
        underNeed=densCount[cellIndex(p.densTx,p.densTy)]>densAvg*CFG.densUnderRatio;
        if(p.densTimer<=0||(overfull&&Math.random()<0.02)||underNeed){
          cellCenter(pickUnderCell(p.x,p.y),_densPt);
          p.densTx=_densPt.x; p.densTy=_densPt.y;
          p.densTimer=rand(CFG.densRetargetMin,CFG.densRetargetMax);
          if(Math.random()<0.55)p.densTimer+=rand(0.2,1.1);
        }
        ddx=p.densTx-p.x; ddy=p.densTy-p.y;
        dd=hypot(ddx,ddy);
        if(dd>8){
          var need=clamp((densAvg*CFG.densUnderRatio-densCount[cellIndex(p.densTx,p.densTy)])/(densAvg+0.001),0,1.2);
          var bias=p.densBias*(0.35+need*0.9)*densW;
          desVx+= (ddx/dd)*bias;
          desVy+= (ddy/dd)*bias;
        }
      }

      // Fast velocity steering under cursor — immediate-feeling, still smooth
      steer=(p.steer+(localFall>0.02?CFG.cursorSteerBoost*localFall:0))/p.mass;
      blend=1-Math.exp(-steer*dt);
      p.vx+=(desVx-p.vx)*blend;
      p.vy+=(desVy-p.vy)*blend;

      sp=hypot(p.vx,p.vy);
      if(sp>CFG.speedCap){
        p.vx*=CFG.speedCap/sp;
        p.vy*=CFG.speedCap/sp;
      }
      if(sp<CFG.driftMin*0.35&&driftScale>0){
        p.vx+=p.driftX*0.08;
        p.vy+=p.driftY*0.08;
      }

      p.x+=p.vx*dt;
      p.y+=p.vy*dt;
      wrapPos(p);
    }

    // Homepage-matched ambient tonal drift + subtle dark sparkles (opacity only)
    if(!reduce) updateTonal(dt);
    else{
      for(i=0;i<count;i++)parts[i].a=parts[i].curA;
    }
  }

  function updateTonal(dt){
    if(!parts||!count)return;
    var i,p,u,s,env;
    var ambLerp=1-Math.exp(-CFG.ambientLerp*dt);

    for(i=0;i<count;i++){
      p=parts[i];
      p.curA+=(p.tgtA-p.curA)*ambLerp;
      if(p.spkDur>0){
        p.spkT+=dt;
        if(p.spkT>=p.spkDur){p.spkDur=0;p.spkPeak=0;p.spkT=0;}
      }
    }

    // Slow ambient retargets — homepage continuous light-grey band
    var ambPicks=countFromRate(count*0.13*dt);
    for(i=0;i<ambPicks;i++){
      p=parts[(Math.random()*count)|0];
      if(p.spkDur>0)continue;
      u=Math.random();
      // Bias toward mid-tones so the field feels layered, not binary.
      p.tgtA=CFG.aMin+(CFG.aMax-CFG.aMin)*(u*u*0.35+u*0.65);
    }

    // Sparkle spawns: same rates/rolls; peak shades = homepage palette
    var spawns=countFromRate(count*CFG.sparkleSpawn*dt);
    for(i=0;i<spawns;i++){
      p=parts[(Math.random()*count)|0];
      if(p.spkDur>0)continue;
      p.spkT=0;
      p.spkDur=rand(CFG.sparkleDurMin,CFG.sparkleDurMax);
      var roll=Math.random();
      if(roll<CFG.blackChance){
        // Occasional charcoal peak — homepage aRare band (was near-black)
        p.spkPeak=rand(CFG.aRareMin,CFG.aRareMax)-p.curA;
      }else if(roll<CFG.blackChance+CFG.rareChance){
        p.spkPeak=rand(CFG.aRareMin,CFG.aRareMax)-p.curA;
      }else if(Math.random()<0.48){
        // Mid sparkles — homepage values
        p.spkPeak=rand(0.050,0.105);
      }else{
        // Light sparkles — homepage values
        p.spkPeak=rand(0.020,0.060);
      }
      if(p.spkPeak<0.008)p.spkPeak=0.008;
    }

    for(i=0;i<count;i++){
      p=parts[i];
      var a=p.curA;
      if(p.spkDur>0){
        u=p.spkT/p.spkDur;
        s=u*u*(3-2*u);
        env=s*(1-s)*4;
        a+=p.spkPeak*env;
      }
      if(a>CFG.aCeil)a=CFG.aCeil;
      p.a=a;
    }
  }

  var bins=new Array(CFG.alphaBins);
  for(var bi=0;bi<CFG.alphaBins;bi++)bins[bi]=[];

  function draw(){
    if(!parts)return;
    ctx.clearRect(0,0,w,h);
    var i,b,p,a,idx,list,j,n;
    for(i=0;i<CFG.alphaBins;i++)bins[i].length=0;
    for(i=0;i<count;i++){
      p=parts[i];
      a=p.a;
      idx=(a*CFG.alphaBins/CFG.aCeil)|0;
      if(idx<0)idx=0; if(idx>=CFG.alphaBins)idx=CFG.alphaBins-1;
      bins[idx].push(i);
    }
    for(b=0;b<CFG.alphaBins;b++){
      list=bins[b]; n=list.length;
      if(!n)continue;
      a=((b+0.5)/CFG.alphaBins)*CFG.aCeil;
      ctx.fillStyle="rgba("+CFG.color+","+a.toFixed(3)+")";
      ctx.beginPath();
      for(j=0;j<n;j++){
        p=parts[list[j]];
        ctx.rect(p.x-half,p.y-half,CFG.size,CFG.size);
      }
      ctx.fill();
    }
  }

  // Document-level pointer tracking — canvas stays pointer-events:none
  if(fine&&!reduce){
    window.addEventListener("pointermove",function(e){
      ptr.x=e.clientX; ptr.y=e.clientY; ptr.active=true;
    },{passive:true});
    window.addEventListener("pointerdown",function(e){
      if(e.pointerType==="mouse"||e.pointerType==="pen"){
        ptr.x=e.clientX; ptr.y=e.clientY; ptr.active=true;
      }
    },{passive:true});
    document.addEventListener("pointerleave",function(){
      ptr.active=false;
    });
    window.addEventListener("blur",function(){ptr.active=false;});
  }

  var lastT=0, raf=0;
  function frame(t){
    if(!lastT)lastT=t;
    var dt=Math.min(0.033,(t-lastT)/1000);
    lastT=t;
    step(dt);
    draw();
    raf=requestAnimationFrame(frame);
  }

  function start(){
    resize();
    if(reduce){
      draw();
      return;
    }
    lastT=0;
    raf=requestAnimationFrame(frame);
  }

  var resizeTimer=0;
  window.addEventListener("resize",function(){
    clearTimeout(resizeTimer);
    resizeTimer=setTimeout(function(){
      resize();
      if(reduce)draw();
    },80);
  });

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",start);
  }else{
    start();
  }
})();
</script>
