<style id="aeo-book-style">
.aeo-book-wrap{max-width:560px;margin:0 auto}
.aeo-book-head{text-align:center;margin-bottom:clamp(28px,3.6vw,40px)}
.aeo-book-head h1{font-family:"Inter Display",Inter,sans-serif;font-weight:600;font-size:clamp(30px,4vw,44px);line-height:1.08;letter-spacing:-.028em;margin:0 0 10px;color:var(--aeo-ink);text-wrap:balance}
.aeo-book-head p{margin:0;font-size:15.5px;line-height:1.55;color:var(--aeo-ink-3);font-weight:500}
/* context carried over from pricing / the free-audit form — same visual
   language as the in-form summary chip below, so it reads as one system */
.aeo-book-ctx{display:none;align-items:center;justify-content:center;gap:7px;margin:16px auto 0;padding:7px 14px 7px 12px;border-radius:999px;background:var(--aeo-accent-soft);border:1px solid rgba(38,109,240,.16);font-size:12.5px;font-weight:600;color:var(--aeo-accent-ink);width:fit-content}
.aeo-book-ctx.show{display:flex}
.aeo-book-ctx svg{width:14px;height:14px;flex:none}

.aeo-book-card{position:relative;background:linear-gradient(180deg,#fff,#fcfdff);border:1px solid rgba(28,29,31,.09);border-radius:var(--aeo-r-xl);padding:clamp(22px,3vw,32px);box-shadow:var(--aeo-sh-4)}
.aeo-book-card::before{content:"";position:absolute;inset:0;border-radius:inherit;padding:1.5px;background:linear-gradient(135deg,rgba(38,109,240,.45),rgba(140,110,245,.24) 45%,rgba(38,109,240,0) 75%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;pointer-events:none}

.aeo-book-step{font-size:11.5px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--aeo-accent-ink);margin:0 0 6px}
.aeo-book-label{display:block;font-size:12.5px;font-weight:600;color:#505967;margin-bottom:7px}
.aeo-book-field{margin-bottom:22px}
.aeo-book-field input{width:100%;height:46px;padding:0 15px;border:1px solid var(--aeo-line-strong);border-radius:var(--aeo-r-md);background:var(--aeo-surface);font-size:14.5px;font-weight:500;letter-spacing:-.006em;color:var(--aeo-ink);font-family:inherit;outline:none;box-shadow:inset 0 1px 2px rgba(16,17,20,.03);transition:border-color .22s var(--aeo-e),box-shadow .22s var(--aeo-e);box-sizing:border-box}
.aeo-book-field input:hover{border-color:#ccd3de}
.aeo-book-field input::placeholder{color:var(--aeo-ink-5)}
.aeo-book-field input:focus{border-color:var(--aeo-accent);background-color:#fff;box-shadow:var(--aeo-ring),inset 0 1px 2px rgba(16,17,20,.02)}
.aeo-book-field input.aeo-invalid,.aeo-book-field input.aeo-invalid:focus{border-color:#e5484d;box-shadow:0 0 0 3px rgba(229,72,77,.16);animation:aeo-bshake .32s var(--aeo-e-out)}
@keyframes aeo-bshake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}

/* ---- calendar ---- */
.aeo-cal{border-top:1px solid var(--aeo-line);border-bottom:1px solid var(--aeo-line);padding:18px 0;margin-bottom:22px}
.aeo-cal-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.aeo-cal-month{font-size:14.5px;font-weight:600;letter-spacing:-.01em;color:var(--aeo-ink)}
.aeo-cal-nav{display:flex;gap:6px}
.aeo-cal-nav button{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:9px;border:1px solid var(--aeo-line-strong);background:var(--aeo-surface);color:var(--aeo-ink-2);cursor:pointer;transition:background-color .2s var(--aeo-e),border-color .2s var(--aeo-e),color .2s var(--aeo-e),opacity .2s var(--aeo-e)}
.aeo-cal-nav button:hover:not(:disabled){background-color:var(--aeo-surface-2);border-color:#ccd3de;color:var(--aeo-ink)}
.aeo-cal-nav button:disabled{opacity:.35;cursor:default}
.aeo-cal-nav svg{width:15px;height:15px}
.aeo-cal-dow{display:grid;grid-template-columns:repeat(7,1fr);margin-bottom:6px}
.aeo-cal-dow span{text-align:center;font-size:11px;font-weight:600;letter-spacing:.03em;color:var(--aeo-ink-5)}
.aeo-cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:3px}
.aeo-cal-day{position:relative;aspect-ratio:1;display:inline-flex;align-items:center;justify-content:center;border:none;background:none;border-radius:10px;font-size:13.5px;font-weight:600;color:var(--aeo-ink-2);cursor:pointer;font-family:inherit;transition:background-color .16s var(--aeo-e),color .16s var(--aeo-e),transform .16s var(--aeo-e)}
.aeo-cal-day:disabled{color:var(--aeo-ink-5);opacity:.38;cursor:default}
.aeo-cal-day.empty{visibility:hidden;cursor:default}
.aeo-cal-day:not(:disabled):not(.empty):hover{background-color:rgba(38,109,240,.1);color:var(--aeo-accent-ink)}
.aeo-cal-day.today:not(.sel)::after{content:"";position:absolute;bottom:5px;left:50%;width:4px;height:4px;border-radius:999px;background:var(--aeo-accent);transform:translateX(-50%)}
.aeo-cal-day.sel{background:var(--aeo-grad-accent);color:#fff;box-shadow:0 4px 14px -4px rgba(38,109,240,.55)}
.aeo-cal-day.sel:hover{background:var(--aeo-grad-accent)}

.aeo-slots-label{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}
.aeo-slots-label span:first-child{font-size:12.5px;font-weight:600;color:#505967}
.aeo-slots-dur{display:inline-flex;align-items:center;gap:5px;font-size:11.5px;font-weight:600;color:var(--aeo-accent-ink);background:var(--aeo-accent-soft);padding:3px 9px;border-radius:999px}
.aeo-slots{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:24px;max-height:172px;overflow-y:auto;padding-right:2px}
.aeo-slot{border:1px solid var(--aeo-line-strong);background:var(--aeo-surface);border-radius:var(--aeo-r-sm);padding:9px 4px;font-size:13px;font-weight:600;color:var(--aeo-ink-2);cursor:pointer;font-family:inherit;text-align:center;transition:background-color .16s var(--aeo-e),border-color .16s var(--aeo-e),color .16s var(--aeo-e),box-shadow .16s var(--aeo-e)}
.aeo-slot:hover{border-color:#ccd3de;background-color:var(--aeo-surface-2)}
.aeo-slot.sel{background:var(--aeo-grad-accent);border-color:transparent;color:#fff;box-shadow:0 4px 14px -4px rgba(38,109,240,.55)}
.aeo-slots-empty{grid-column:1/-1;text-align:center;font-size:13px;color:var(--aeo-ink-4);font-weight:500;padding:18px 0}

.aeo-book-card .aeo-btn{width:100%}
.aeo-book-fine{margin:14px 0 0;text-align:center;font-size:12px;color:#a4adba;font-weight:500}
.aeo-book-summary{display:none;align-items:center;gap:10px;margin-bottom:18px;padding:11px 13px;border-radius:var(--aeo-r-md);background:var(--aeo-accent-soft);border:1px solid rgba(38,109,240,.16)}
.aeo-book-summary.show{display:flex}
.aeo-book-summary svg{width:17px;height:17px;color:var(--aeo-accent-ink);flex:none}
.aeo-book-summary span{font-size:13px;font-weight:600;color:var(--aeo-accent-ink)}

.aeo-book-done{text-align:center;padding:36px 6px}
.aeo-book-done-ic{width:56px;height:56px;border-radius:999px;background:linear-gradient(135deg,#16a34a,#0d8a3f);color:#fff;display:inline-flex;align-items:center;justify-content:center;margin-bottom:18px;box-shadow:0 14px 30px -12px rgba(22,163,74,.55);animation:aeo-bpop .5s cubic-bezier(.33,1.4,.68,1) both}
.aeo-book-done-ic svg{width:26px;height:26px}
@keyframes aeo-bpop{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}
.aeo-book-done h3{font-family:"Inter Display",Inter,sans-serif;font-size:22px;font-weight:600;letter-spacing:-.022em;color:var(--aeo-ink);margin:0 0 8px}
.aeo-book-done p{font-size:14.5px;line-height:1.6;color:var(--aeo-ink-3);font-weight:500;margin:0}

@media (max-width:520px){
  .aeo-slots{grid-template-columns:repeat(2,1fr)}
}
@media (prefers-reduced-motion: reduce){
  .aeo-book-field input.aeo-invalid{animation:none}
  .aeo-book-done-ic{animation:none}
}
</style>
<template id="aeo-book-tpl">
<section class="aeo-plat aeo-subpage" id="aeo-book-page">
  <div class="aeo-plat-bg"><i class="aeo-blob aeo-blob-a" style="opacity:.5"></i><i class="aeo-blob aeo-blob-b" style="opacity:.4"></i></div>
  <div class="aeo-plat-inner">
    <div class="aeo-book-wrap">
      <div class="aeo-book-head" data-aeo-rv-auto>
        <span class="aeo-pill aeo-pill-center">Book a call</span>
        <h1>Let&rsquo;s talk about getting you recommended</h1>
        <p>Pick a time that works. 30 minutes, no pressure &mdash; just your numbers and a plan.</p>
        <div class="aeo-book-ctx" id="aeo-book-ctx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12.5l2.5 2.5L16 9"/><circle cx="12" cy="12" r="9.5"/></svg><span id="aeo-book-ctx-text"></span></div>
      </div>
      <div class="aeo-book-card" data-aeo-rv-auto>
        <form id="aeo-book-form" novalidate>
          <div class="aeo-book-summary" id="aeo-book-summary"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg><span id="aeo-book-summary-text"></span></div>

          <p class="aeo-book-step">Step 1 &middot; Your email</p>
          <div class="aeo-book-field"><label class="aeo-book-label" for="bf-email">Work email</label><input id="bf-email" name="email" type="email" placeholder="you@yourbusiness.com" required></div>

          <p class="aeo-book-step">Step 2 &middot; Pick a date</p>
          <div class="aeo-cal" id="aeo-cal">
            <div class="aeo-cal-head">
              <span class="aeo-cal-month" id="aeo-cal-month"></span>
              <span class="aeo-cal-nav">
                <button type="button" id="aeo-cal-prev" aria-label="Previous month"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15l-5-5 5-5"/></svg></button>
                <button type="button" id="aeo-cal-next" aria-label="Next month"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 15l5-5-5-5"/></svg></button>
              </span>
            </div>
            <div class="aeo-cal-dow"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span></div>
            <div class="aeo-cal-grid" id="aeo-cal-grid"></div>
          </div>

          <p class="aeo-book-step">Step 3 &middot; Pick a time</p>
          <div class="aeo-slots-label"><span id="aeo-slots-date">Select a date first</span><span class="aeo-slots-dur">30 min</span></div>
          <div class="aeo-slots" id="aeo-slots"></div>

          <button class="aeo-btn aeo-btn--blue" type="submit" id="aeo-book-submit" disabled>Confirm booking</button>
          <p class="aeo-book-fine">No commitment. We&rsquo;ll follow up by email to confirm the invite.</p>
        </form>
      </div>
    </div>
  </div>
</section>
</template>
<script id="aeo-book-script">
(function(){
  var MONTHS=["January","February","March","April","May","June","July","August","September","October","November","December"];
  var CHECK='<svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function fmtDate(d){return MONTHS[d.getMonth()].slice(0,3)+" "+d.getDate();}
  function sameDay(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();}

  /* ---- carry plan / origin context in from pricing or the free-audit
     form, purely via the URL — no backend, nothing to lose if reloaded ---- */
  var PLAN_LABEL={core:"Core plan \u00b7 $2,500/mo",premium:"Premium plan \u00b7 $5,000/mo",custom:"Custom plan"};
  var PLAN_NAME={core:"Core",premium:"Premium",custom:"Custom"};
  function readContext(){
    var out={plan:"",source:"",email:"",website:""};
    try{
      var qs=new URLSearchParams(window.location.search);
      out.plan=(qs.get("plan")||"").toLowerCase();
      out.source=(qs.get("source")||"").toLowerCase();
      out.email=qs.get("email")||"";
      out.website=qs.get("website")||"";
    }catch(e){}
    return out;
  }

  /* deterministic per-day "availability" placeholder — swap for a real
     calendar API later without touching any markup or CSS above */
  function slotsFor(date){
    var seed=date.getFullYear()*372+date.getMonth()*31+date.getDate();
    var dow=date.getDate()===0?0:new Date(date).getDay();
    if(dow===0||dow===6)return [];
    var base=[["9:00 AM"],["9:30 AM"],["10:00 AM"],["10:30 AM"],["11:00 AM"],["1:00 PM"],["1:30 PM"],["2:00 PM"],["2:30 PM"],["3:00 PM"],["3:30 PM"],["4:00 PM"]];
    return base.filter(function(_,i){return (seed+i)%3!==0;}).map(function(x){return x[0];});
  }

  function wireBooking(root){
    if(!root||root.getAttribute("data-aeo-wired"))return;
    root.setAttribute("data-aeo-wired","1");
    var form=root.querySelector("#aeo-book-form");
    var emailInp=root.querySelector("#bf-email");
    var monthLbl=root.querySelector("#aeo-cal-month");
    var grid=root.querySelector("#aeo-cal-grid");
    var prevBtn=root.querySelector("#aeo-cal-prev");
    var nextBtn=root.querySelector("#aeo-cal-next");
    var slotsWrap=root.querySelector("#aeo-slots");
    var slotsDate=root.querySelector("#aeo-slots-date");
    var submitBtn=root.querySelector("#aeo-book-submit");
    var summary=root.querySelector("#aeo-book-summary");
    var summaryText=root.querySelector("#aeo-book-summary-text");
    var ctx=root.querySelector("#aeo-book-ctx");
    var ctxText=root.querySelector("#aeo-book-ctx-text");

    var params=readContext();
    if(params.email)emailInp.value=params.email;
    if(ctx&&ctxText){
      var ctxLabel="";
      if(params.source==="audit"){
        ctxLabel="Free audit call"+(PLAN_NAME[params.plan]?" \u00b7 "+PLAN_NAME[params.plan]+" plan interest":"");
      }else if(PLAN_LABEL[params.plan]){
        ctxLabel=PLAN_LABEL[params.plan];
      }
      if(ctxLabel){ctxText.textContent=ctxLabel;ctx.classList.add("show");}
    }

    var today=new Date();today.setHours(0,0,0,0);
    var minDate=today,maxDate=new Date(today.getFullYear(),today.getMonth(),today.getDate()+56);
    var viewYear=today.getFullYear(),viewMonth=today.getMonth();
    var selectedDate=null,selectedTime=null;

    function updateSubmit(){
      submitBtn.disabled=!(selectedDate&&selectedTime&&emailInp.value.trim());
      if(selectedDate&&selectedTime){
        summary.classList.add("show");
        summaryText.textContent=fmtDate(selectedDate)+" at "+selectedTime+" (30 min)";
      }else{
        summary.classList.remove("show");
      }
    }

    function renderSlots(){
      slotsWrap.innerHTML="";
      if(!selectedDate){
        slotsDate.textContent="Select a date first";
        var ph=document.createElement("div");
        ph.className="aeo-slots-empty";ph.textContent="Pick a date above to see open times";
        slotsWrap.appendChild(ph);
        return;
      }
      slotsDate.textContent=fmtDate(selectedDate);
      var times=slotsFor(selectedDate);
      if(!times.length){
        var e=document.createElement("div");
        e.className="aeo-slots-empty";e.textContent="No times available this day \u2014 try another date";
        slotsWrap.appendChild(e);
        selectedTime=null;
        updateSubmit();
        return;
      }
      times.forEach(function(t){
        var b=document.createElement("button");
        b.type="button";b.className="aeo-slot";b.textContent=t;
        if(t===selectedTime)b.classList.add("sel");
        b.addEventListener("click",function(){
          selectedTime=t;
          slotsWrap.querySelectorAll(".aeo-slot").forEach(function(s){s.classList.remove("sel");});
          b.classList.add("sel");
          updateSubmit();
        });
        slotsWrap.appendChild(b);
      });
    }

    function renderCal(){
      monthLbl.textContent=MONTHS[viewMonth]+" "+viewYear;
      var first=new Date(viewYear,viewMonth,1);
      var startDow=first.getDay();
      var daysInMonth=new Date(viewYear,viewMonth+1,0).getDate();
      grid.innerHTML="";
      for(var i=0;i<startDow;i++){
        var pad=document.createElement("span");pad.className="aeo-cal-day empty";
        grid.appendChild(pad);
      }
      for(var d=1;d<=daysInMonth;d++){
        var date=new Date(viewYear,viewMonth,d);
        var btn=document.createElement("button");
        btn.type="button";btn.className="aeo-cal-day";btn.textContent=String(d);
        var disabled=date<minDate||date>maxDate;
        if(disabled)btn.disabled=true;
        if(sameDay(date,today))btn.classList.add("today");
        if(selectedDate&&sameDay(date,selectedDate))btn.classList.add("sel");
        if(!disabled){
          btn.addEventListener("click",function(dt){return function(){
            selectedDate=dt;selectedTime=null;
            grid.querySelectorAll(".aeo-cal-day").forEach(function(c){c.classList.remove("sel");});
            this.classList.add("sel");
            renderSlots();updateSubmit();
          };}(date));
        }
        grid.appendChild(btn);
      }
      prevBtn.disabled=(viewYear===minDate.getFullYear()&&viewMonth===minDate.getMonth());
      var maxV=new Date(maxDate.getFullYear(),maxDate.getMonth(),1);
      nextBtn.disabled=(viewYear===maxV.getFullYear()&&viewMonth===maxV.getMonth());
    }

    prevBtn.addEventListener("click",function(){
      viewMonth--;if(viewMonth<0){viewMonth=11;viewYear--;}
      renderCal();
    });
    nextBtn.addEventListener("click",function(){
      viewMonth++;if(viewMonth>11){viewMonth=0;viewYear++;}
      renderCal();
    });
    emailInp.addEventListener("input",function(){
      emailInp.classList.remove("aeo-invalid");
      updateSubmit();
    });

    form.addEventListener("submit",function(ev){
      ev.preventDefault();
      var email=emailInp.value.trim();
      if(!email||!selectedDate||!selectedTime){
        if(!email){
          emailInp.classList.remove("aeo-invalid");
          emailInp.getBoundingClientRect();
          emailInp.classList.add("aeo-invalid");
          emailInp.focus();
        }
        return;
      }
      var card=form.closest(".aeo-book-card");
      card.innerHTML='<div class="aeo-book-done">'+
        '<span class="aeo-book-done-ic">'+CHECK+'</span>'+
        '<h3>You\u2019re booked</h3>'+
        '<p>'+fmtDate(selectedDate)+' at '+selectedTime+' &middot; 30 minutes.<br>A confirmation will be sent to <b>'+email.replace(/</g,"&lt;")+'</b> once our calendar is connected.</p></div>';
    });

    renderCal();renderSlots();updateSubmit();
  }

  function mount(){
    var main=document.querySelector("main");if(!main)return;
    if(!document.getElementById("aeo-book-page")){
      var tpl=document.getElementById("aeo-book-tpl");if(!tpl)return;
      main.insertBefore(tpl.content.cloneNode(true),main.firstChild);
    }
    wireBooking(document.getElementById("aeo-book-page"));
    var kids=main.children;
    for(var i=0;i<kids.length;i++){
      var k=kids[i];
      if(k.id==="aeo-book-page")continue;
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
