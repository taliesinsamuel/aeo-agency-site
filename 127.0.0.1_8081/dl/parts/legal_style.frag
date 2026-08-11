<script>document.documentElement.classList.add("aeo-legal-page");</script>
<style id="aeo-legal-style">
/* ============================================================
   LEGAL PAGES — Privacy / Terms only
   Dark continuous canvas matching the existing footer family.
   ============================================================ */
html.aeo-legal-page{
  background:#0e0f11!important;
  color-scheme:dark;
}
html.aeo-legal-page body{
  background-color:#0e0f11!important;
}
html.aeo-legal-page body > div.flex,
html.aeo-legal-page main{
  background:#0e0f11!important;
}
html.aeo-legal-page #aeo-floatfield{
  display:none!important;
  visibility:hidden!important;
}
html.aeo-legal-page .aeo-plat-bg,
html.aeo-legal-page .aeo-blob{
  display:none!important;
}

.aeo-legal{
  --aeo-legal-ink:#f5f6f7;
  --aeo-legal-body:#b6bcc6;
  --aeo-legal-meta:#8d95a3;
  --aeo-legal-rule:rgba(255,255,255,.08);
  --aeo-legal-link:#5c8bf5;
  --aeo-legal-link-hover:#8aaff8;
  --aeo-legal-col:800px;
  --aeo-legal-page:1200px;
  position:relative;
  color:var(--aeo-legal-body);
}
.aeo-subpage.aeo-legal.aeo-plat{
  background:
    radial-gradient(58% 42% at 18% 0%,rgba(28,52,96,.18),transparent 62%),
    radial-gradient(46% 36% at 82% 18%,rgba(20,40,78,.12),transparent 68%),
    linear-gradient(180deg,#101215 0%,#0e0f11 42%,#0c0d10 100%)!important;
}
.aeo-subpage.aeo-legal .aeo-plat-inner{
  max-width:var(--aeo-legal-page);
  margin:0 auto;
  padding:
    clamp(96px,12vw,120px)
    clamp(20px,4vw,48px)
    clamp(96px,10vw,120px);
}

.aeo-legal-shell{
  max-width:var(--aeo-legal-col);
  margin:0;
}

.aeo-legal-intro{
  margin:0 0 clamp(56px,7vw,80px);
  /* Sit on the dark legal canvas — never inherit site-nav white <header> paint. */
  background:transparent!important;
  background-color:transparent!important;
  background-image:none!important;
  box-shadow:none!important;
  -webkit-backdrop-filter:none!important;
  backdrop-filter:none!important;
  border:0!important;
  opacity:1!important;
}
.aeo-legal-kicker{
  display:inline-block;
  margin:0 0 16px;
  font-size:12.5px;
  font-weight:600;
  letter-spacing:.08em;
  text-transform:uppercase;
  color:var(--aeo-accent);
  line-height:1.2;
}
.aeo-legal-intro h1{
  margin:0 0 16px;
  font-family:"Inter Display",Inter,sans-serif;
  font-size:clamp(38px,4.8vw,56px);
  font-weight:600;
  letter-spacing:-.028em;
  line-height:1.05;
  color:var(--aeo-legal-ink);
  text-wrap:balance;
}
.aeo-legal-lede{
  margin:0;
  max-width:650px;
  font-size:clamp(16px,1.35vw,18px);
  line-height:1.55;
  font-weight:500;
  color:var(--aeo-legal-body);
}
.aeo-legal-meta{
  margin:18px 0 0;
  font-size:14px;
  font-weight:500;
  color:var(--aeo-legal-meta);
}

.aeo-legal-doc{
  max-width:var(--aeo-legal-col);
}
.aeo-legal-doc > h2{
  margin:0;
  padding:clamp(28px,3.2vw,36px) 0 12px;
  border-top:1px solid var(--aeo-legal-rule);
  font-family:"Inter Display",Inter,sans-serif;
  font-size:clamp(19px,1.7vw,21px);
  font-weight:600;
  letter-spacing:-.018em;
  line-height:1.3;
  color:var(--aeo-legal-ink);
}
.aeo-legal-doc > h2:first-child{
  border-top:none;
  padding-top:0;
}
.aeo-legal-doc p{
  margin:0 0 18px;
  font-size:16px;
  line-height:1.7;
  font-weight:500;
  color:var(--aeo-legal-body);
}
.aeo-legal-doc ul{
  margin:0 0 18px;
  padding:0 0 0 1.2em;
}
.aeo-legal-doc li{
  margin:0 0 9px;
  font-size:16px;
  line-height:1.7;
  font-weight:500;
  color:var(--aeo-legal-body);
  padding-left:.15em;
}
.aeo-legal-doc li::marker{
  color:#6f7784;
}
.aeo-legal-doc strong{
  color:#e8eaee;
  font-weight:600;
}
.aeo-legal-doc a{
  color:var(--aeo-legal-link);
  text-decoration:none;
  border-bottom:1px solid rgba(92,139,245,.35);
  font-weight:600;
  transition:color .2s var(--aeo-e),border-color .2s var(--aeo-e);
  overflow-wrap:anywhere;
}
.aeo-legal-doc a:hover{
  color:var(--aeo-legal-link-hover);
  border-bottom-color:rgba(138,175,248,.7);
}
.aeo-legal-doc a:focus-visible{
  outline:2px solid rgba(92,139,245,.7);
  outline-offset:3px;
  border-radius:2px;
}
.aeo-legal-placeholder{
  color:#d7dbe2;
  font-weight:600;
}

/* Footer sits in the same dark family — avoid a hard seam. */
html.aeo-legal-page .aeo-foot{
  background:linear-gradient(180deg,#0e0f11 0%,#0c0d10 28%,#0a0b0d 100%);
}
html.aeo-legal-page .aeo-foot::before{
  opacity:.55;
}

@media (max-width:860px){
  .aeo-subpage.aeo-legal .aeo-plat-inner{
    padding-left:48px;
    padding-right:48px;
  }
}
@media (max-width:640px){
  .aeo-subpage.aeo-legal .aeo-plat-inner{
    padding-left:22px;
    padding-right:22px;
    padding-top:104px;
    padding-bottom:88px;
  }
  .aeo-legal-intro{margin-bottom:48px}
  .aeo-legal-doc > h2{padding-top:28px}
}
@media (prefers-reduced-motion:reduce){
  .aeo-legal-doc a{transition:none}
}
</style>
