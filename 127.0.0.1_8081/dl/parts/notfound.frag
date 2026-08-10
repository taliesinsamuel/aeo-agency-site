<style id="aeo-404-style">
.aeo-subpage.aeo-404 .aeo-plat-inner{
  padding-top:clamp(140px,16vw,200px);
  padding-bottom:clamp(72px,10vw,140px);
}
.aeo-404-shell{
  max-width:640px;
  margin:0 auto;
  text-align:center;
}
.aeo-404-shell .aeo-pill{margin:0 auto 16px}
.aeo-404-shell .aeo-h2{
  margin:0 0 12px;
  font-size:clamp(34px,5vw,52px);
  line-height:1.02;
}
.aeo-404-lede{
  margin:0 auto 28px;
  max-width:36ch;
  font-size:16px;
  line-height:1.55;
  color:var(--aeo-ink-3);
  font-weight:500;
}
.aeo-404-actions{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  justify-content:center;
}
.aeo-404-actions .aeo-btn{
  min-width:148px;
  justify-content:center;
}
.aeo-404-actions .aeo-btn--ghost{
  background:#fff;
  color:var(--aeo-ink);
  border:1px solid rgba(28,29,31,.12);
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.6),0 1px 2px rgba(16,17,20,.04);
}
.aeo-404-actions .aeo-btn--ghost:hover{
  border-color:rgba(28,29,31,.2);
  background:#fafbfc;
}
@media (max-width:520px){
  .aeo-404-actions{flex-direction:column;align-items:stretch}
  .aeo-404-actions .aeo-btn{width:100%}
}
</style>
<template id="aeo-page-tpl">
<section class="aeo-plat aeo-subpage aeo-404" id="aeo-page">
  <div class="aeo-plat-bg"><i class="aeo-blob aeo-blob-a"></i><i class="aeo-blob aeo-blob-b"></i></div>
  <div class="aeo-plat-inner">
    <div class="aeo-404-shell">
      <span class="aeo-pill aeo-pill-center">404</span>
      <h1 class="aeo-h2">Page not found</h1>
      <p class="aeo-404-lede">The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.</p>
      <div class="aeo-404-actions">
        <a class="aeo-btn aeo-btn--primary" href="./">Back to home</a>
        <a class="aeo-btn aeo-btn--ghost" href="book.html">Book a call</a>
      </div>
    </div>
  </div>
</section>
</template>
<script id="aeo-page-script">
(function(){
  function mount(){
    var main=document.querySelector("main");if(!main)return;
    if(!document.getElementById("aeo-page")){
      var tpl=document.getElementById("aeo-page-tpl");if(!tpl)return;
      main.insertBefore(tpl.content.cloneNode(true),main.firstChild);
      if(window.__aeoReveal){
        var shell=document.querySelector(".aeo-404-shell");
        if(shell)window.__aeoReveal([shell],0,0);
      }
    }
    var kids=main.children;
    for(var i=0;i<kids.length;i++){
      var k=kids[i];
      if(k.id==="aeo-page")continue;
      if(k.style.display!=="none")k.style.display="none";
    }
  }
  var n=0,iv=setInterval(function(){mount();if(++n>70)clearInterval(iv);},150);
  document.addEventListener("DOMContentLoaded",mount);
  window.addEventListener("load",mount);
})();
</script>
