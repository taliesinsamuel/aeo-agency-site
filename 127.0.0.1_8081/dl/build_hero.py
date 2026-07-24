#!/usr/bin/env python3
import glob, os

HEAD = "Be the business that AI recommends"
SUB = "We get local businesses recommended by ChatGPT, Perplexity, Gemini and Claude."
BADGE = "Best AEO agency 2026"

SRC = "original-attio-backup.html.bak"
LIVE = [f for f in glob.glob("*.html") if "backup" not in f][0]

html = open(SRC, encoding="utf-8").read()

# --- 1. text edits (all occurrences incl. RSC payload => no flash, hydration-safe) ---
html = html.replace("Welcome to agentic revenue.", HEAD)
html = html.replace(
    "Attio is the CRM that builds pipeline, advances deals, and grows accounts around the clock.",
    SUB,
)
html = html.replace("GTM lessons from Elena Verna and more", BADGE)

# --- 1b. reveal content that attio hides at opacity:0 until its scroll-animation
#         JS fires (that JS doesn't run in the static capture) ---
html = html.replace("filter:blur(1.5px);opacity:0", "")

# --- 1c. CTA copy: make the free offer explicit everywhere ---
html = html.replace("Start for free", "Get your free audit")

# --- 2. injected style + script (mounts chat animation into attio's mockup slot) ---
INJECT = r"""
<style id="aeo-style">
.aeo-window{position:relative;display:flex;flex-direction:column;width:100%;height:clamp(360px,42vw,660px);background:var(--color-white-100,#fff);border:1px solid var(--color-white-600,#dee2e7);border-radius:16px;overflow:hidden;box-shadow:0 1px 2px rgba(16,16,16,.04),0 24px 48px -24px rgba(28,29,31,.22),0 60px 120px -60px rgba(28,29,31,.28);font-family:var(--font-inter),"Inter",system-ui,sans-serif;text-align:left;pointer-events:auto}
.aeo-titlebar{display:flex;align-items:center;height:46px;padding:0 16px;border-bottom:1px solid var(--color-white-400,#edeff3);flex:none}
.aeo-lights{display:flex;gap:7px}
.aeo-lights span{width:11px;height:11px;border-radius:999px}
.aeo-lights span:nth-child(1){background:#ff5f57}
.aeo-lights span:nth-child(2){background:#febc2e}
.aeo-lights span:nth-child(3){background:#28c840}
.aeo-title{flex:1;display:flex;align-items:center;justify-content:center;gap:7px;font-size:13px;font-weight:600;color:var(--color-black-300,#232529);letter-spacing:-.1px}
.aeo-title-logo{display:inline-flex;width:15px;height:15px;color:#000}
.aeo-title-logo svg{width:100%;height:100%;display:block}
.aeo-titlebar-spacer{width:47px}
.aeo-chatarea{flex:1;display:flex;flex-direction:column;min-height:0;position:relative}
.aeo-scroll{flex:1;overflow:hidden;display:flex;justify-content:center}
.aeo-thread{width:100%;max-width:720px;padding:clamp(18px,2.6vw,34px) clamp(18px,2.4vw,30px) 8px;transition:opacity .4s cubic-bezier(.33,1,.68,1),transform .4s cubic-bezier(.33,1,.68,1)}
.aeo-msg + .aeo-msg{margin-top:clamp(16px,2vw,24px)}
.aeo-role{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:var(--color-black-600,#505967);margin-bottom:9px}
.aeo-av{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:999px;font-size:11px;font-weight:600}
.aeo-av-user{background:var(--color-black-100,#1c1d1f);color:#fff}
.aeo-av-ai{background:#fff;color:#000;border:1px solid var(--color-white-600,#dee2e7)}
.aeo-av-ai svg{width:15px;height:15px;display:block}
.aeo-body{font-size:clamp(15px,1.15vw,17px);line-height:1.62;letter-spacing:-.1px;color:var(--color-black-100,#1c1d1f)}
.aeo-user .aeo-body{font-weight:500}
.aeo-caret{display:inline-block;width:2px;height:1.05em;margin-left:1px;transform:translateY(2px);background:var(--color-blue-500,#266df0);animation:aeo-blink 1s steps(1) infinite}
@keyframes aeo-blink{0%,50%{opacity:1}50.01%,100%{opacity:0}}
.aeo-think{display:inline-flex;align-items:center;gap:5px;height:24px}
.aeo-think span{width:7px;height:7px;border-radius:999px;background:var(--color-black-800,#8f99a8);animation:aeo-dot 1.1s ease-in-out infinite}
.aeo-think span:nth-child(2){animation-delay:.15s}
.aeo-think span:nth-child(3){animation-delay:.3s}
@keyframes aeo-dot{0%,100%{opacity:.25;transform:translateY(0)}40%{opacity:1;transform:translateY(-2px)}}
.aeo-tok{white-space:pre-wrap;opacity:0;transform:translateY(3px);animation:aeo-in .2s forwards}
@keyframes aeo-in{to{opacity:1;transform:none}}
.aeo-biz{display:inline-block;padding:1px 7px;margin:0 1px;border-radius:6px;background:var(--color-blue-100,#e8f0ff);color:var(--color-blue-600,#245bc2);font-weight:600;box-shadow:inset 0 0 0 1px rgba(38,109,240,.16);opacity:0;transform:scale(.9);animation:aeo-pop .28s cubic-bezier(.33,1,.68,1) forwards}
@keyframes aeo-pop{to{opacity:1;transform:none}}
.aeo-sources{margin-top:clamp(14px,1.6vw,20px);opacity:0;transform:translateY(6px);transition:opacity .35s cubic-bezier(.33,1,.68,1),transform .35s cubic-bezier(.33,1,.68,1)}
.aeo-sources.show{opacity:1;transform:none}
.aeo-sources-label{font-size:12px;font-weight:600;color:var(--color-black-900,#a4adba);margin-bottom:9px}
.aeo-chips{display:flex;flex-wrap:wrap;gap:8px}
.aeo-chip{display:inline-flex;align-items:center;gap:7px;padding:6px 11px 6px 9px;border-radius:9px;border:1px solid var(--color-white-600,#dee2e7);background:var(--color-white-200,#fafafb);font-size:13px;font-weight:600;color:var(--color-black-300,#232529)}
.aeo-chip svg{width:15px;height:15px;display:block;flex:none}
.aeo-yelp{color:#d32323}
.aeo-inputbar{flex:none;display:flex;justify-content:center;padding:0 clamp(14px,2vw,24px) clamp(14px,1.8vw,22px)}
.aeo-input{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;max-width:720px;padding:11px 11px 11px 16px;border:1px solid var(--color-white-600,#dee2e7);border-radius:14px;background:var(--color-white-100,#fff);box-shadow:0 1px 2px rgba(16,16,16,.04)}
.aeo-input-ph{font-size:15px;color:var(--color-black-800,#8f99a8)}
.aeo-input-actions{display:inline-flex;align-items:center;gap:12px}
.aeo-auto{font-size:13px;font-weight:500;color:var(--color-black-600,#505967)}
.aeo-send{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:9px;background:var(--color-blue-500,#266df0);color:#fff}
.aeo-send svg{width:16px;height:16px}
/* neutralize attio's sticky-scroll choreography so the hero scrolls normally
   and the chat window never overlaps the headline/subline/CTAs */
.aeo-hero{position:relative}
.aeo-hero [class*="sticky"]{position:static!important}
.aeo-hero [class~="h-svh"]{height:auto!important;min-height:0!important;margin-top:64px;padding-top:0!important;padding-bottom:80px!important;align-items:flex-start!important}
.aeo-hero [class*="100svh"]{position:absolute!important;inset:0!important;height:100%!important;min-height:0!important}
.aeo-hero [class*="-mb-["]{margin-bottom:0!important}
/* AI engine logo tiles under the sub-line */
.aeo-ai-row{display:inline-flex;align-items:center;gap:7px;vertical-align:middle;margin-left:4px}
.aeo-ai-sq{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:7px;box-shadow:0 1px 2px rgba(16,16,16,.14)}
.aeo-ai-sq svg{width:15px;height:15px;display:block}
/* Mobile: Attio swaps to a separate md:hidden scene — keep chat readable there */
@media (max-width:767px){
  .aeo-window{height:min(52vh,420px);border-radius:14px}
  [data-home-hero="mobile-scene"] .aeo-mobile-slot{position:relative;z-index:10;margin:2rem 1rem 1.5rem;pointer-events:auto;opacity:1!important;transform:none!important;filter:none!important;visibility:visible!important}
  [data-home-hero="mobile-scene"] .aeo-window{height:min(48vh,400px);opacity:1!important}
  .aeo-body{font-size:14.5px}
  .aeo-thread{padding:16px 14px 8px}
}
@media (prefers-reduced-motion: reduce){.aeo-caret{animation:none}.aeo-think span{animation:none}.aeo-tok,.aeo-biz{animation:none;opacity:1;transform:none}}
</style>
<script id="aeo-script">
(function(){
  var HEAD=%%HEAD%%, SUB=%%SUB%%, BADGE=%%BADGE%%;
  var ITEMS=[
    {biz:"dentist",city:"Austin"},
    {biz:"law firm",city:"Miami"},
    {biz:"med spa",city:"Dallas"},
    {biz:"HVAC company",city:"Phoenix"},
    {biz:"plumber",city:"Charlotte"},
    {biz:"contractor",city:"Nashville"},
    {biz:"accountant",city:"Tampa"}
  ];
  var G_LOGO='<svg viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
  var YELP_LOGO='<svg viewBox="0 0 24 24" fill="#d32323"><path d="M10.9 3.2c.9-.3 1.6.1 1.6 1v6.2c0 1.2-1.5 1.6-2.2.6L6.7 6.2c-.5-.8-.2-1.6.7-1.9l3.5-1.1z"/><path d="M9.6 13.1c1 .1 1.3 1.4.4 2L5.8 18c-.8.5-1.7-.1-1.6-1l.1-3.7c0-.9.9-1.4 1.7-1l3.6.8z"/><path d="M10.6 15.9c.8-.5 1.8.1 1.7 1.1l-.4 4.5c-.1.9-1 1.3-1.7.6l-2.4-2.5c-.6-.7-.3-1.6.6-1.9l2.2-1.3z"/><path d="M14.8 15.1c-.6-.8.2-1.9 1.2-1.6l4.4 1.3c.9.3 1 1.3.2 1.8l-3 1.9c-.8.5-1.7-.1-1.6-1l-.2-2.4z"/><path d="M14.8 10.6c-.9-.2-1-1.4-.2-1.9l5-3c.8-.5 1.7.1 1.5 1l-1 4.4c-.2.9-1.2 1.2-1.9.5l-3.4-1z"/></svg>';
  var FB_LOGO='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1877F2"/><path fill="#fff" d="M15.6 12.5l.5-3.1h-2.9V7.3c0-.9.4-1.7 1.8-1.7h1.3V3s-1.2-.2-2.3-.2c-2.3 0-3.9 1.4-3.9 4v2.6H7.4v3.1h2.6V21h3.2v-8.5h2.4z"/></svg>';
  var SEND='<svg viewBox="0 0 18 18" fill="none"><path d="M9 14V4M9 4l-4 4M9 4l4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var AI='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.1419.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>';

  // real AI-engine brand logos (source: Simple Icons)
  var P_OPENAI="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z";
  var P_PPLX="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z";
  var P_GEM="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81";
  var P_CLAUDE="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z";
  function aiSvg(p){return '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="'+p+'"/></svg>';}
  var GEM_SVG='<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="aeoGem" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4285F4"/><stop offset=".52" stop-color="#9168C0"/><stop offset="1" stop-color="#D96570"/></linearGradient></defs><path fill="url(#aeoGem)" d="'+P_GEM+'"/></svg>';
  function aiTile(name,bg,col,inner,extra){return '<span class="aeo-ai-sq" title="'+name+'" style="background:'+bg+';color:'+col+';'+(extra||'')+'">'+inner+'</span>';}
  var AI_ROW='<span class="aeo-ai-row" data-aeo-ai="1">'+
    aiTile("ChatGPT","#000","#fff",aiSvg(P_OPENAI))+
    aiTile("Perplexity","#20808D","#fff",aiSvg(P_PPLX))+
    aiTile("Gemini","#fff","#000",GEM_SVG,"border:1px solid #d9dde3")+
    aiTile("Claude","#D97757","#fff",aiSvg(P_CLAUDE))+
  '</span>';
  var SUB_HTML='We get local businesses recommended by '+AI_ROW;
  // expose brand logos for the platform section animations
  window.__AEO={aiSvg:aiSvg,aiTile:aiTile,P_OPENAI:P_OPENAI,P_PPLX:P_PPLX,P_GEM:P_GEM,P_CLAUDE:P_CLAUDE,GEM_SVG:GEM_SVG};

  var WINDOW_HTML=
    '<div class="aeo-window">'+
      '<div class="aeo-titlebar"><div class="aeo-lights"><span></span><span></span><span></span></div><div class="aeo-title"><span class="aeo-title-logo">'+AI+'</span>ChatGPT</div><div class="aeo-titlebar-spacer"></div></div>'+
      '<div class="aeo-chatarea">'+
        '<div class="aeo-scroll"><div class="aeo-thread">'+
          '<div class="aeo-msg aeo-user"><div class="aeo-role"><span class="aeo-av aeo-av-user">A</span>You</div><div class="aeo-body aeo-q"></div></div>'+
          '<div class="aeo-msg aeo-ai"><div class="aeo-role"><span class="aeo-av aeo-av-ai">'+AI+'</span>ChatGPT</div><div class="aeo-body aeo-a"></div>'+
            '<div class="aeo-sources"><div class="aeo-sources-label">Sources</div><div class="aeo-chips">'+
              '<span class="aeo-chip aeo-yelp">'+YELP_LOGO+'Yelp</span>'+
              '<span class="aeo-chip">'+G_LOGO+'Google</span>'+
              '<span class="aeo-chip">'+FB_LOGO+'Facebook</span>'+
            '</div></div>'+
          '</div>'+
        '</div></div>'+
        '<div class="aeo-inputbar"><div class="aeo-input"><span class="aeo-input-ph">Ask anything&hellip;</span><div class="aeo-input-actions"><span class="aeo-auto">Auto</span><span class="aeo-send">'+SEND+'</span></div></div></div>'+
      '</div>'+
    '</div>';

  var heroSection=null, reduce=false;
  try{reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){}

  function getHero(){
    if(heroSection&&document.contains(heroSection))return heroSection;
    var h1=document.querySelector("main h1")||document.querySelector("h1");
    heroSection=h1?h1.closest("section"):null;
    if(heroSection)heroSection.classList.add("aeo-hero");
    return heroSection;
  }
  function applyText(){
    var s=getHero(); if(!s)return;
    s.querySelectorAll("h1").forEach(function(h){ if(h.textContent!==HEAD)h.textContent=HEAD; });
    s.querySelectorAll("p").forEach(function(p){ var t=p.textContent||""; if((/recommended by|Attio is the CRM/.test(t))&&!p.querySelector(".aeo-ai-row"))p.innerHTML=SUB_HTML; });
  }
  function findMobileMock(){
    var scene=document.querySelector('[data-home-hero="mobile-scene"]');
    if(!scene)return null;
    var host=null;
    scene.querySelectorAll("div").forEach(function(d){
      var c=d.className||"";
      if(/mt-10/.test(c)&&/mb-6/.test(c)&&/rounded-l-lg/.test(c))host=d;
    });
    return host;
  }
  function mountInto(host, mobile){
    if(!host)return;
    if(mobile){
      host.classList.add("aeo-mobile-slot");
      host.removeAttribute("aria-hidden");
      host.style.opacity="1";
      host.style.transform="none";
      host.style.filter="none";
      host.style.visibility="visible";
    }
    if(host.querySelector(".aeo-window"))return;
    if(mobile)host.className="aeo-mobile-slot";
    host.innerHTML=WINDOW_HTML;
    host.style.pointerEvents="auto";
    if(mobile){
      host.style.opacity="1";
      host.style.transform="none";
      host.style.filter="none";
      host.style.visibility="visible";
    }
    var win=host.querySelector(".aeo-window");
    if(win)startAnim(win);
  }
  function mount(){
    // Desktop Attio slot (hidden below md via .hidden.md:block ancestor)
    var layer=document.querySelector('[class~="h-svh"]');
    if(layer){
      var host=layer.querySelector('[class*="w-2/3"]')||layer;
      mountInto(host,false);
    }
    // Mobile Attio slot (shown below md via .md:hidden ancestor)
    mountInto(findMobileMock(),true);
  }
  function tick(){ applyText(); mount(); }

  function sleep(ms){return new Promise(function(r){setTimeout(r,ms);});}
  function words(str){return str.match(/\S+\s*|\s+/g)||[];}

  function startAnim(win){
    if(!win)return;
    var myGen=(win._aeoGen=(win._aeoGen||0)+1);
    (async function(){
      var i=0;
      while(win._aeoGen===myGen&&document.body.contains(win)){
        var q=win.querySelector(".aeo-q"),a=win.querySelector(".aeo-a"),
            sources=win.querySelector(".aeo-sources"),thread=win.querySelector(".aeo-thread");
        if(!q||!a){return;}
        var it=ITEMS[i];
        var question="What's the best "+it.biz+" in "+it.city+"?";
        // reset
        thread.style.opacity="1";thread.style.transform="none";
        a.innerHTML="";sources.classList.remove("show");
        q.textContent="";
        var caret=document.createElement("span");caret.className="aeo-caret";
        var tn=document.createTextNode("");q.appendChild(tn);q.appendChild(caret);

        if(reduce){
          tn.data=question;caret.remove();
          renderAnswer(a,it,true);sources.classList.add("show");return;
        }
        // 1. type
        for(var c=1;c<=question.length;c++){ if(win._aeoGen!==myGen)return; tn.data=question.slice(0,c); await sleep(42); }
        await sleep(520); if(win._aeoGen!==myGen)return; caret.remove();
        // 2. thinking
        a.innerHTML='<span class="aeo-think"><span></span><span></span><span></span></span>';
        await sleep(850); if(win._aeoGen!==myGen)return;
        // 3. stream answer
        a.innerHTML="";
        var toks=[]; words("Based on reviews and reputation, ").forEach(function(w){toks.push({t:w});});
        toks.push({biz:true});
        words(" is consistently recommended for "+it.biz+" services in "+it.city+". Known for quality, professionalism, and strong client outcomes.").forEach(function(w){toks.push({t:w});});
        for(var n=0;n<toks.length;n++){
          if(win._aeoGen!==myGen)return;
          var sp=document.createElement("span");
          if(toks[n].biz){sp.className="aeo-biz";sp.textContent="Your Business";}
          else{sp.className="aeo-tok";sp.textContent=toks[n].t;}
          a.appendChild(sp);
          await sleep(28);
        }
        // 4. sources
        await sleep(320); if(win._aeoGen!==myGen)return;
        sources.classList.add("show");
        await sleep(3400); if(win._aeoGen!==myGen)return;
        // 5. fade out
        thread.style.opacity="0";thread.style.transform="translateY(6px)";
        await sleep(460); if(win._aeoGen!==myGen)return;
        i=(i+1)%ITEMS.length;
      }
    })();
  }
  function renderAnswer(a,it,full){
    a.innerHTML="";
    var s1=document.createElement("span");s1.className="aeo-tok";s1.textContent="Based on reviews and reputation, ";a.appendChild(s1);
    var b=document.createElement("span");b.className="aeo-biz";b.textContent="Your Business";a.appendChild(b);
    var s2=document.createElement("span");s2.className="aeo-tok";s2.textContent=" is consistently recommended for "+it.biz+" services in "+it.city+". Known for quality, professionalism, and strong client outcomes.";a.appendChild(s2);
  }

  // run for a while to survive Next.js hydration, then rely on observer briefly
  var n=0,iv=setInterval(function(){tick();if(++n>50)clearInterval(iv);},140);
  document.addEventListener("DOMContentLoaded",tick);
  window.addEventListener("load",tick);
  var mo=new MutationObserver(function(){applyText();mount();});
  try{mo.observe(document.body||document.documentElement,{childList:true,subtree:true});}catch(e){}
  setTimeout(function(){try{mo.disconnect();}catch(e){}},9000);
})();
</script>
"""

import json
INJECT = INJECT.replace("%%HEAD%%", json.dumps(HEAD)).replace("%%SUB%%", json.dumps(SUB)).replace("%%BADGE%%", json.dumps(BADGE))

# ============================================================
#  AEO PLATFORM SECTION  (replaces attio's Platform section)
# ============================================================
PLATFORM = r"""
<style id="aeo-plat-style">
.aeo-plat{background:var(--color-white-200,#fafafb);border-top:1px solid var(--color-white-500,#e4e7ec);font-family:var(--font-inter),"Inter",system-ui,sans-serif}
.aeo-plat *{box-sizing:border-box}
.aeo-plat-inner{max-width:1180px;margin:0 auto;padding:clamp(72px,9vw,132px) 24px}
.aeo-plat-intro{text-align:center;max-width:820px;margin:0 auto}
.aeo-pill{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;letter-spacing:.01em;color:var(--color-blue-600,#245bc2);background:var(--color-blue-100,#e8f0ff);border:1px solid rgba(38,109,240,.16);padding:5px 12px;border-radius:999px;margin-bottom:18px}
.aeo-pill-center{margin:0 auto 4px}
.aeo-h2{font-family:"Inter Display",Inter,sans-serif;font-weight:600;font-size:clamp(32px,4.4vw,54px);line-height:1.02;letter-spacing:-.025em;color:var(--color-black-100,#1c1d1f);margin:16px 0 0;text-wrap:balance}
.aeo-lead{font-size:clamp(17px,1.4vw,20px);line-height:1.4;color:var(--color-black-700,#6f7988);margin:18px auto 0;max-width:60ch;font-weight:500;text-wrap:balance}
.aeo-block{display:grid;grid-template-columns:1fr 1fr;gap:clamp(28px,5vw,88px);align-items:center;padding:clamp(44px,6.5vw,104px) 0}
.aeo-block.rev .aeo-block-copy{order:2}
.aeo-block.rev .aeo-viz{order:1}
.aeo-h3{font-family:"Inter Display",Inter,sans-serif;font-weight:600;font-size:clamp(26px,2.9vw,38px);line-height:1.05;letter-spacing:-.02em;color:var(--color-black-100,#1c1d1f);margin:0 0 16px;text-wrap:balance}
.aeo-body{font-size:clamp(16px,1.25vw,18px);line-height:1.5;color:var(--color-black-700,#6f7988);font-weight:500;max-width:46ch}
.aeo-card{position:relative;background:#fff;border:1px solid var(--color-white-600,#dee2e7);border-radius:18px;box-shadow:0 1px 2px rgba(16,16,16,.04),0 22px 44px -24px rgba(28,29,31,.20),0 60px 110px -70px rgba(28,29,31,.30);overflow:hidden;min-height:340px}
.aeo-card-bar{display:flex;align-items:center;gap:11px;height:44px;padding:0 16px;border-bottom:1px solid var(--color-white-400,#edeff3)}
.aeo-tl{display:flex;gap:6px}
.aeo-tl i{width:10px;height:10px;border-radius:999px;display:block}
.aeo-tl i:nth-child(1){background:#ff5f57}.aeo-tl i:nth-child(2){background:#febc2e}.aeo-tl i:nth-child(3){background:#28c840}
.aeo-card-title{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:var(--color-black-600,#505967)}
.aeo-card-body{padding:20px 22px}
/* shared logo tile */
.aeo-ai-sq{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:8px;box-shadow:0 1px 2px rgba(16,16,16,.14);flex:none}
.aeo-ai-sq svg{width:16px;height:16px;display:block}

.aeo-card-badge{margin-left:auto;display:inline-flex;align-items:center;gap:6px;font-size:11.5px;font-weight:600;color:#127a45;background:#e7f7ee;border:1px solid #cdeeda;border-radius:999px;padding:3px 9px}
.aeo-card-badge .aeo-live-dot{width:6px;height:6px;border-radius:999px;background:#16a34a;animation:aeo-livepulse 1.6s ease-in-out infinite}
@keyframes aeo-livepulse{0%,100%{opacity:.35;transform:scale(.9)}50%{opacity:1;transform:scale(1)}}
.aeo-fadein{animation:aeo-fadein .5s cubic-bezier(.33,1,.68,1) both}
@keyframes aeo-fadein{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}

/* ---- viz 1: AI Visibility (benchmark index) ---- */
.aeo-bm-head{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:20px}
.aeo-bm-label{font-size:13px;font-weight:600;color:var(--color-black-700,#6f7988);margin-bottom:6px}
.aeo-bm-score{display:flex;align-items:baseline;gap:10px}
.aeo-bm-num{font-family:"Inter Display",Inter,sans-serif;font-size:46px;font-weight:700;line-height:1;letter-spacing:-.02em;color:var(--color-black-100,#1c1d1f);font-variant-numeric:tabular-nums}
.aeo-bm-delta{font-size:12px;font-weight:600;color:#0f8a4f;background:#e7f7ee;border-radius:999px;padding:3px 9px}
.aeo-bm-spark{display:flex;align-items:flex-end;gap:3px;height:38px}
.aeo-bm-spark i{width:5px;border-radius:3px;background:var(--color-white-500,#e4e7ec);display:block;transition:height .6s cubic-bezier(.33,1,.68,1),background .6s}
.aeo-bm-spark i.on{background:var(--color-blue-400,#5c8bf5)}
.aeo-bm-row{display:flex;align-items:center;gap:12px;padding:9px 0}
.aeo-bm-av{width:28px;height:28px;border-radius:8px;background:var(--color-white-400,#edeff3);flex:none;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--color-black-700,#6f7988)}
.aeo-bm-name{font-size:14px;font-weight:600;color:var(--color-black-300,#232529);width:118px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:none}
.aeo-bm-track{flex:1;height:9px;border-radius:999px;background:var(--color-white-400,#edeff3);overflow:hidden}
.aeo-bm-fill{height:100%;width:0;border-radius:999px;background:var(--color-black-800,#c3c9d2);transition:width 1.1s cubic-bezier(.33,1,.68,1)}
.aeo-bm-val{width:28px;text-align:right;font-size:13px;font-weight:600;color:var(--color-black-700,#6f7988);font-variant-numeric:tabular-nums;flex:none}
.aeo-bm-row.you .aeo-bm-name{color:var(--color-blue-600,#245bc2);font-weight:700}
.aeo-bm-row.you .aeo-bm-av{background:var(--color-blue-500,#266df0);color:#fff}
.aeo-bm-row.you .aeo-bm-fill{background:linear-gradient(90deg,var(--color-blue-400,#5c8bf5),var(--color-blue-500,#266df0))}
.aeo-bm-row.you .aeo-bm-val{color:var(--color-blue-600,#245bc2)}

/* ---- viz 2: Website Optimization (structured record) ---- */
.aeo-rec-head{display:flex;align-items:center;gap:10px;padding-bottom:16px}
.aeo-rec-fav{width:30px;height:30px;border-radius:8px;background:var(--color-blue-100,#e8f0ff);color:var(--color-blue-600,#245bc2);display:inline-flex;align-items:center;justify-content:center;flex:none}
.aeo-rec-fav svg{width:17px;height:17px}
.aeo-rec-url{font-size:14px;font-weight:600;color:var(--color-black-200,#202124)}
.aeo-rec-prog{display:flex;align-items:center;justify-content:space-between;font-size:12.5px;font-weight:600;color:var(--color-black-700,#6f7988);margin-bottom:8px}
.aeo-rec-pct{color:var(--color-black-100,#1c1d1f);font-variant-numeric:tabular-nums}
.aeo-rec-bar{height:6px;border-radius:999px;background:var(--color-white-400,#edeff3);overflow:hidden;margin-bottom:6px}
.aeo-rec-bar-fill{height:100%;width:0;border-radius:999px;background:linear-gradient(90deg,var(--color-blue-400,#5c8bf5),var(--color-blue-500,#266df0));transition:width .7s cubic-bezier(.33,1,.68,1)}
.aeo-attr{display:flex;align-items:center;gap:12px;padding:12px 2px;border-top:1px solid var(--color-white-400,#edeff3);opacity:0;transform:translateY(6px);transition:opacity .45s cubic-bezier(.33,1,.68,1),transform .45s cubic-bezier(.33,1,.68,1)}
.aeo-attr.in{opacity:1;transform:none}
.aeo-attr-k{width:92px;font-size:13px;color:var(--color-black-800,#8f99a8);font-weight:600;flex:none}
.aeo-attr-v{flex:1;display:flex;gap:6px;flex-wrap:wrap;min-width:0}
.aeo-vchip{padding:3px 9px;border-radius:7px;background:var(--color-white-300,#f3f4f6);border:1px solid var(--color-white-500,#e4e7ec);font-size:12.5px;font-weight:600;color:var(--color-black-300,#232529);white-space:nowrap}
.aeo-attr-ic{width:20px;height:20px;border-radius:999px;background:#16a34a;color:#fff;display:inline-flex;align-items:center;justify-content:center;flex:none;opacity:0;transform:scale(.6);transition:opacity .3s,transform .3s cubic-bezier(.33,1,.68,1)}
.aeo-attr-ic svg{width:12px;height:12px}
.aeo-attr.in .aeo-attr-ic{opacity:1;transform:none}

/* ---- viz 3: Content Optimization (content answers questions) ---- */
.aeo-cc-ctx{font-size:13px;color:var(--color-black-700,#6f7988);font-weight:500;margin-bottom:14px}
.aeo-cc-ctx b{color:var(--color-black-100,#1c1d1f);font-weight:600}
.aeo-cc-doc{border:1px solid var(--color-white-500,#e4e7ec);border-radius:12px;background:var(--color-white-200,#fafafb);padding:16px 16px;min-height:118px}
.aeo-cc-doc-t{font-size:14px;font-weight:700;color:var(--color-black-100,#1c1d1f);margin-bottom:8px}
.aeo-cc-txt{font-size:14px;line-height:1.62;color:var(--color-black-200,#202124);min-height:66px}
.aeo-cc-txt .aeo-tok{white-space:pre-wrap}
.aeo-cc-hl{background:var(--color-blue-100,#e8f0ff);color:var(--color-blue-600,#245bc2);border-radius:5px;padding:0 4px;font-weight:600;box-shadow:inset 0 0 0 1px rgba(38,109,240,.16)}
.aeo-cc-foot{display:flex;align-items:center;gap:10px;margin-top:16px}
.aeo-cc-cov{font-size:12.5px;font-weight:600;color:var(--color-black-700,#6f7988)}
.aeo-cc-cov b{color:var(--color-black-100,#1c1d1f);font-variant-numeric:tabular-nums}
.aeo-cc-dots{display:flex;gap:5px;margin-left:auto}
.aeo-cc-dot{width:16px;height:16px;border-radius:999px;background:var(--color-white-400,#edeff3);color:transparent;display:inline-flex;align-items:center;justify-content:center;transition:background .35s,color .35s,transform .25s}
.aeo-cc-dot svg{width:10px;height:10px}
.aeo-cc-dot.on{background:#16a34a;color:#fff}
.aeo-cc-dot.pop{transform:scale(1.18)}

/* ---- viz 4: Authority Building (trust signals feed) ---- */
.aeo-tr-head{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:16px}
.aeo-tr-num{font-family:"Inter Display",Inter,sans-serif;font-size:44px;font-weight:700;line-height:1;letter-spacing:-.02em;color:var(--color-black-100,#1c1d1f);font-variant-numeric:tabular-nums}
.aeo-tr-stars{display:flex;gap:2px;color:#f5a623;margin-top:6px}
.aeo-tr-stars svg{width:14px;height:14px}
.aeo-tr-stars .off{color:var(--color-white-700,#d4d8de)}
.aeo-tr-delta{font-size:12px;font-weight:600;color:#0f8a4f;background:#e7f7ee;border-radius:999px;padding:3px 9px}
.aeo-tr-feed{position:relative;display:flex;flex-direction:column;gap:8px}
.aeo-tr-item{display:flex;align-items:center;gap:11px;padding:11px 12px;border:1px solid var(--color-white-500,#e4e7ec);border-radius:12px;background:#fff;box-shadow:0 1px 2px rgba(16,16,16,.03)}
.aeo-tr-item.enter{animation:aeo-tr-in .5s cubic-bezier(.33,1,.68,1) both}
@keyframes aeo-tr-in{from{opacity:0;transform:translateY(-10px) scale(.98)}to{opacity:1;transform:none}}
.aeo-tr-logo{width:30px;height:30px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;flex:none;background:var(--color-white-300,#f3f4f6);border:1px solid var(--color-white-500,#e4e7ec)}
.aeo-tr-logo svg{width:17px;height:17px;display:block}
.aeo-tr-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}
.aeo-tr-t{font-size:13.5px;font-weight:600;color:var(--color-black-200,#202124);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.aeo-tr-m{font-size:12px;color:var(--color-black-800,#8f99a8);font-weight:500}
.aeo-tr-pts{font-size:12.5px;font-weight:700;color:#0f8a4f;flex:none;font-variant-numeric:tabular-nums}

/* ---- refinements: realistic avatars, ranks, attribute icons ---- */
.aeo-bm-sub{font-size:12px;color:var(--color-black-800,#8f99a8);font-weight:500;margin-top:4px}
.aeo-bm-rank{width:14px;text-align:center;font-size:12.5px;font-weight:600;color:var(--color-black-800,#a4adba);font-variant-numeric:tabular-nums;flex:none}
.aeo-bm-row.you .aeo-bm-rank{color:var(--color-blue-600,#245bc2)}
.aeo-bm-av{color:#fff;font-size:10.5px;letter-spacing:.02em;box-shadow:inset 0 0 0 1px rgba(255,255,255,.14),0 1px 2px rgba(16,16,16,.12)}
.aeo-bm-trend{display:inline-flex;align-items:center;justify-content:flex-end;gap:1px;font-size:11px;font-weight:600;flex:none;width:34px}
.aeo-bm-trend svg{width:10px;height:10px}
.aeo-bm-trend.up{color:#0f8a4f}
.aeo-bm-trend.flat{color:var(--color-black-900,#a4adba)}
.aeo-bm-fill{background:var(--color-white-700,#cfd4db)}
.aeo-bm-row.you .aeo-bm-track{background:var(--color-blue-100,#e8f0ff)}
.aeo-attr{gap:11px}
.aeo-attr-ico{width:26px;height:26px;border-radius:7px;background:var(--color-white-300,#f3f4f6);border:1px solid var(--color-white-500,#e4e7ec);color:var(--color-black-700,#6f7988);display:inline-flex;align-items:center;justify-content:center;flex:none}
.aeo-attr-ico svg{width:14px;height:14px}
.aeo-attr-k{width:78px}
.aeo-cc-doc-badge{margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:600;color:#127a45;background:#e7f7ee;border:1px solid #cdeeda;border-radius:999px;padding:2px 8px;opacity:0;transition:opacity .4s}
.aeo-cc-doc-badge.in{opacity:1}
.aeo-cc-doc-badge svg{width:11px;height:11px}
.aeo-cc-doc-head{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.aeo-cc-doc-ic{width:20px;height:20px;border-radius:6px;background:var(--color-blue-100,#e8f0ff);color:var(--color-blue-600,#245bc2);display:inline-flex;align-items:center;justify-content:center;flex:none}
.aeo-cc-doc-ic svg{width:12px;height:12px}
.aeo-cc-doc-head .aeo-cc-doc-t{margin:0;flex:1;font-size:14px}
.aeo-tr-logo{width:32px;height:32px;background:#fff}
.aeo-tr-logo svg{width:19px;height:19px}

/* ---- viz 1 engine board additions ---- */
.aeo-bm-legend{display:flex;align-items:center;gap:16px;margin:2px 0 14px;font-size:11.5px;font-weight:500;color:var(--color-black-800,#8f99a8)}
.aeo-bm-legend span{display:inline-flex;align-items:center;gap:6px}
.aeo-bm-legend i{display:inline-block;width:14px;height:8px;border-radius:999px;background:linear-gradient(90deg,#5c8bf5,#266df0)}
.aeo-bm-legend i.mk{width:2px;height:12px;border-radius:1px;background:var(--color-black-700,#6f7988)}
.aeo-bm-track{position:relative;overflow:visible}
.aeo-bm-track>.aeo-bm-fill{position:relative;z-index:1}
.aeo-bm-mark{position:absolute;top:-2px;bottom:-2px;width:2px;border-radius:1px;background:var(--color-black-700,#8f99a8);z-index:2}
.aeo-bm-pill{flex:none;font-size:10.5px;font-weight:600;border-radius:999px;padding:3px 8px;width:80px;text-align:center}
.aeo-bm-pill.good{color:#127a45;background:#e7f7ee;border:1px solid #cdeeda}
.aeo-bm-pill.mid{color:#245bc2;background:var(--color-blue-100,#e8f0ff);border:1px solid rgba(38,109,240,.18)}
.aeo-bm-pill.low{color:#b45309;background:#fef3e2;border:1px solid #f6dcae}
.aeo-bm-av svg{width:17px;height:17px;display:block}
.aeo-bm-eng .aeo-bm-name{width:132px}
.aeo-bm-eng .aeo-bm-val{width:28px}

/* ---- viz 3 content (Attio outreach-list style) ---- */
.aeo-askbar{display:flex;align-items:center;gap:10px;padding:11px 14px;border:1px solid var(--color-white-600,#dee2e7);border-radius:14px;background:#fff;box-shadow:0 1px 2px rgba(16,16,16,.04);margin-bottom:18px}
.aeo-askbar-ph{flex:1;font-size:14.5px;color:var(--color-black-800,#8f99a8);font-weight:500}
.aeo-askbar-go{width:28px;height:28px;border-radius:999px;background:var(--color-blue-100,#e8f0ff);color:var(--color-blue-600,#245bc2);display:inline-flex;align-items:center;justify-content:center;flex:none}
.aeo-askbar-go svg{width:14px;height:14px}
.aeo-clist-label{font-size:13px;font-weight:500;color:var(--color-black-700,#6f7988);margin-bottom:6px}
.aeo-clist{display:flex;flex-direction:column;min-height:236px}
.aeo-clist-row{display:flex;align-items:center;gap:12px;padding:13px 4px;border-top:1px solid var(--color-white-400,#edeff3);opacity:0;transform:translateY(8px);transition:opacity .45s cubic-bezier(.33,1,.68,1),transform .45s cubic-bezier(.33,1,.68,1);pointer-events:none}
.aeo-clist-row.in{opacity:1;transform:none;pointer-events:auto}
.aeo-clist-ico{width:30px;height:30px;border-radius:9px;background:var(--color-white-300,#f3f4f6);border:1px solid var(--color-white-500,#e4e7ec);color:var(--color-black-600,#505967);display:inline-flex;align-items:center;justify-content:center;flex:none}
.aeo-clist-ico svg{width:15px;height:15px}
.aeo-clist-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.aeo-clist-t{font-size:14.5px;font-weight:600;color:var(--color-black-100,#1c1d1f);line-height:1.25}
.aeo-clist-m{font-size:13px;color:var(--color-black-800,#8f99a8);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}

@media (max-width:860px){
  .aeo-block{grid-template-columns:1fr;gap:28px}
  .aeo-block.rev .aeo-block-copy{order:1}
  .aeo-block.rev .aeo-viz{order:2}
  .aeo-body{max-width:none}
}
</style>
<script id="aeo-plat-script">
(function(){
  function A(){return window.__AEO||null;}
  function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;}
  function sleep(ms){return new Promise(function(r){setTimeout(r,ms);});}
  var CHECK='<svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var YELP='<svg viewBox="0 0 24 24" fill="#FF1A1A"><path d="m7.6885 15.1415-3.6715.8483c-.3769.0871-.755.183-1.1452.155-.2611-.0188-.5122-.0414-.7606-.213a1.179 1.179 0 0 1-.331-.3594c-.3486-.5519-.3656-1.3661-.3697-2.0004a6.2874 6.2874 0 0 1 .3314-2.0642 1.857 1.857 0 0 1 .1073-.2474 2.3426 2.3426 0 0 1 .1255-.2165 2.4572 2.4572 0 0 1 .1563-.1975 1.1736 1.1736 0 0 1 .399-.2831 1.082 1.082 0 0 1 .4592-.0837c.2355.0016.5139.052.91.1734.0555.0191.1237.0382.1856.0572.3277.1013.7048.2404 1.1499.3987.6863.2404 1.3663.487 2.0463.7397l1.2117.4423c.2217.0807.4363.18.6412.297.174.0984.3273.2298.4512.387a1.217 1.217 0 0 1 .192.4309 1.2205 1.2205 0 0 1-.872 1.4522c-.0468.0151-.0852.0239-.1085.0293l-1.105.2553-.0031-.001zM18.8208 7.565a1.8506 1.8506 0 0 0-.2042-.1754 2.4082 2.4082 0 0 0-.2077-.1394 2.3607 2.3607 0 0 0-.2269-.109 1.1705 1.1705 0 0 0-.482-.0796 1.0862 1.0862 0 0 0-.4498.1263c-.2107.1048-.4388.2732-.742.5551-.042.0417-.0947.0886-.142.133-.2502.2351-.5286.5252-.8599.863a114.6363 114.6363 0 0 0-1.5166 1.5629l-.8962.9293a4.1897 4.1897 0 0 0-.4466.5483 1.541 1.541 0 0 0-.2364.5459 1.2199 1.2199 0 0 0 .0107.4518l.0046.02a1.218 1.218 0 0 0 1.4184.923 1.162 1.162 0 0 0 .1105-.0213l4.7781-1.104c.3766-.087.7587-.1667 1.097-.3631.2269-.1316.4428-.262.5909-.5252a1.1793 1.1793 0 0 0 .1405-.4683c.0733-.6512-.2668-1.3908-.5403-1.963a6.2792 6.2792 0 0 0-1.2001-1.7103zM8.9703.0754a8.6724 8.6724 0 0 0-.83.1564c-.2754.066-.548.1383-.8146.2236-.868.2844-2.0884.8063-2.295 1.8065-.1165.5655.1595 1.1439.3737 1.66.2595.6254.614 1.1889.9373 1.7777.8543 1.5545 1.7245 3.0993 2.5922 4.6457.259.4617.5416 1.0464 1.043 1.2856a1.058 1.058 0 0 0 .1013.0383c.2248.0851.4699.1016.7041.0471a4.3015 4.3015 0 0 0 .0418-.0097 1.2136 1.2136 0 0 0 .5658-.3397 1.1033 1.1033 0 0 0 .079-.0822c.3463-.435.3454-1.0833.3764-1.6134.1042-1.771.2139-3.5423.3009-5.3142.0332-.6712.1055-1.3333.0655-2.0096-.0328-.5579-.0368-1.1984-.3891-1.6563-.6218-.8073-1.9476-.741-2.8523-.6158z"/></svg>';
  var GOOG='<svg viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
  var TRUST='<svg viewBox="0 0 24 24" fill="#00B67A"><path d="M17.227 16.67l2.19 6.742-7.413-5.388 5.223-1.354zM24 9.31h-9.165L12.005.589l-2.84 8.723L0 9.3l7.422 5.397-2.84 8.714 7.422-5.388 4.583-3.326L24 9.311z"/></svg>';
  var FB='<svg viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.8V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z"/></svg>';

  function engines(){
    var a=A();if(!a)return[];
    return [
      {name:"ChatGPT",bg:"#000",col:"#fff",logo:a.aiSvg(a.P_OPENAI)},
      {name:"Perplexity",bg:"#20808D",col:"#fff",logo:a.aiSvg(a.P_PPLX)},
      {name:"Gemini",bg:"#fff",col:"#000",logo:a.GEM_SVG,extra:"border:1px solid #d9dde3"},
      {name:"Claude",bg:"#D97757",col:"#fff",logo:a.aiSvg(a.P_CLAUDE)}
    ];
  }
  function tile(e){var a=A();return a.aiTile(e.name,e.bg,e.col,e.logo,e.extra);}

  function bar(title,right){return '<div class="aeo-card-bar"><span class="aeo-tl"><i></i><i></i><i></i></span><span class="aeo-card-title">'+(title||'')+'</span>'+(right||'')+'</div>';}
  var LIVE='<span class="aeo-card-badge"><span class="aeo-live-dot"></span>Live</span>';

  var PLATFORM_HTML=
  '<div class="aeo-plat-inner">'+
    '<div class="aeo-plat-intro">'+
      '<span class="aeo-pill aeo-pill-center">Answer Engine Optimization Agency</span>'+
      '<h2 class="aeo-h2">Everything your business needs to be recommended by AI</h2>'+
      '<p class="aeo-lead">We improve every signal AI uses to understand, trust and recommend your business across ChatGPT, Perplexity, Gemini, Claude and Google AI Overviews.</p>'+
    '</div>'+
    '<div class="aeo-block">'+
      '<div class="aeo-block-copy"><span class="aeo-pill">Measure</span><h3 class="aeo-h3">AI Visibility</h3><p class="aeo-body">Understand how AI sees your business, benchmark your visibility against competitors and identify where the biggest opportunities exist.</p></div>'+
      '<div class="aeo-viz"><div class="aeo-card">'+bar("AI visibility",LIVE)+'<div class="aeo-card-body" id="aeo-viz-vis"></div></div></div>'+
    '</div>'+
    '<div class="aeo-block rev">'+
      '<div class="aeo-block-copy"><span class="aeo-pill">Structure</span><h3 class="aeo-h3">Website Optimization</h3><p class="aeo-body">Structure your website so AI can accurately understand your services, locations, expertise and the customers you serve.</p></div>'+
      '<div class="aeo-viz"><div class="aeo-card">'+bar("Site structure")+'<div class="aeo-card-body" id="aeo-viz-web"></div></div></div>'+
    '</div>'+
    '<div class="aeo-block">'+
      '<div class="aeo-block-copy"><span class="aeo-pill">Create</span><h3 class="aeo-h3">Content Optimization</h3><p class="aeo-body">Create and improve the content AI relies on when answering customer questions, comparing businesses and making recommendations.</p></div>'+
      '<div class="aeo-viz"><div class="aeo-card">'+bar("Content")+'<div class="aeo-card-body" id="aeo-viz-content"></div></div></div>'+
    '</div>'+
    '<div class="aeo-block rev">'+
      '<div class="aeo-block-copy"><span class="aeo-pill">Strengthen</span><h3 class="aeo-h3">Authority Building</h3><p class="aeo-body">Strengthen the trust signals AI uses through reviews, citations, business profiles, third-party mentions and wider brand coverage.</p></div>'+
      '<div class="aeo-viz"><div class="aeo-card">'+bar("Trust signals",LIVE)+'<div class="aeo-card-body" id="aeo-viz-auth"></div></div></div>'+
    '</div>'+
  '</div>';

  function countTo(node,to,dur,suffix){
    suffix=suffix||"";var from=parseInt(node.textContent,10)||0,t0=null;
    function step(ts){if(t0==null)t0=ts;var p=Math.min(1,(ts-t0)/dur);var e=1-Math.pow(1-p,3);node.textContent=Math.round(from+(to-from)*e)+suffix;if(p<1)requestAnimationFrame(step);}
    requestAnimationFrame(step);
  }
  function toks(str){return str.match(/\S+\s*|\s+/g)||[];}

  /* ---------------- viz 1: AI Visibility (per engine, real logos) ---------------- */
  function startVisibility(){
    var root=document.getElementById("aeo-viz-vis");if(!root||!A())return;
    var a=A();
    var engs=[
      {name:"ChatGPT",bg:"#000",col:"#fff",logo:a.aiSvg(a.P_OPENAI),v:94,avg:47},
      {name:"Perplexity",bg:"#20808D",col:"#fff",logo:a.aiSvg(a.P_PPLX),v:88,avg:44},
      {name:"Claude",bg:"#D97757",col:"#fff",logo:a.aiSvg(a.P_CLAUDE),v:81,avg:46},
      {name:"AI Overviews",bg:"#fff",col:"#000",logo:GOOG,v:73,avg:52,extra:"border:1px solid #e4e7ec"},
      {name:"Gemini",bg:"#fff",col:"#000",logo:a.GEM_SVG,v:62,avg:55,extra:"border:1px solid #d9dde3"}
    ];
    function pill(v){return v>=80?'<span class="aeo-bm-pill good">Strong</span>':v>=70?'<span class="aeo-bm-pill mid">Growing</span>':'<span class="aeo-bm-pill low">Opportunity</span>';}
    var idx=Math.round(engs.reduce(function(s,e){return s+e.v;},0)/engs.length);
    var head='<div class="aeo-bm-head"><div><div class="aeo-bm-label">AI visibility index</div><div class="aeo-bm-score"><span class="aeo-bm-num" id="aeo-bm-num">0</span><span class="aeo-bm-delta">+45 pts</span></div><div class="aeo-bm-sub">How often AI recommends you, last 30 days</div></div></div>'+
      '<div class="aeo-bm-legend"><span><i></i>Your visibility</span><span><i class="mk"></i>Competitor average</span></div>';
    var body='';
    engs.forEach(function(e){
      body+='<div class="aeo-bm-row aeo-bm-eng"><span class="aeo-bm-av" style="background:'+e.bg+';color:'+e.col+';'+(e.extra||'')+'">'+e.logo+'</span><span class="aeo-bm-name">'+e.name+'</span><span class="aeo-bm-track"><span class="aeo-bm-mark" style="left:'+e.avg+'%"></span><span class="aeo-bm-fill" data-v="'+e.v+'"></span></span><span class="aeo-bm-val" data-v="'+e.v+'">0</span>'+pill(e.v)+'</div>';
    });
    root.innerHTML=head+'<div class="aeo-bm-list">'+body+'</div>';
    var fills=root.querySelectorAll(".aeo-bm-fill"),vals=root.querySelectorAll(".aeo-bm-val"),num=document.getElementById("aeo-bm-num");
    (async function(){
      await sleep(360);if(!document.body.contains(root))return;
      // clean reveal
      for(var i=0;i<fills.length;i++){
        if(!document.body.contains(root))return;
        var v=+fills[i].getAttribute("data-v");
        fills[i].style.width=v+"%";countTo(vals[i],v,760);
        await sleep(150);
      }
      countTo(num,idx,900);
      // continuous loop: re-measure (drift then settle) so it clearly keeps working, never empties
      while(document.body.contains(root)){
        await sleep(3400);if(!document.body.contains(root))return;
        var t1=0;
        for(var d=0;d<fills.length;d++){var bv=+fills[d].getAttribute("data-v");var nv=Math.max(55,Math.min(97,bv+(Math.random()<.5?-3:3)));fills[d].style.width=nv+"%";countTo(vals[d],nv,600);t1+=nv;}
        countTo(num,Math.round(t1/fills.length),600);
        await sleep(1500);if(!document.body.contains(root))return;
        var t2=0;for(var j=0;j<fills.length;j++){var cv=+fills[j].getAttribute("data-v");fills[j].style.width=cv+"%";countTo(vals[j],cv,600);t2+=cv;}
        countTo(num,Math.round(t2/fills.length),600);
      }
    })();
  }

  /* ---------------- viz 2: Website Optimization (structured record) ---------------- */
  function startStructure(){
    var root=document.getElementById("aeo-viz-web");if(!root||!A())return;
    var GLOBE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18"/></svg>';
    var S='stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"';
    var IC={
      biz:'<svg viewBox="0 0 24 24" fill="none" '+S+'><path d="M3 21h18"/><path d="M5 21V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v15"/><path d="M15 21V10h3a1 1 0 0 1 1 1v10"/><path d="M8 9h3M8 13h3"/></svg>',
      svc:'<svg viewBox="0 0 24 24" fill="none" '+S+'><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
      loc:'<svg viewBox="0 0 24 24" fill="none" '+S+'><path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
      hrs:'<svg viewBox="0 0 24 24" fill="none" '+S+'><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
      exp:'<svg viewBox="0 0 24 24" fill="none" '+S+'><path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9z"/></svg>',
      usr:'<svg viewBox="0 0 24 24" fill="none" '+S+'><circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3.2 3.2 0 0 1 0 6M17.5 20a5.5 5.5 0 0 0-3-4.9"/></svg>'
    };
    var attrs=[
      {k:"Business",ic:IC.biz,v:["Your Business"]},
      {k:"Services",ic:IC.svc,v:["Cleanings","Implants","Whitening"]},
      {k:"Locations",ic:IC.loc,v:["Austin","Dallas","+2"]},
      {k:"Hours",ic:IC.hrs,v:["Mon to Sat"]},
      {k:"Expertise",ic:IC.exp,v:["Cosmetic","Family"]},
      {k:"Serves",ic:IC.usr,v:["Families","Professionals"]}
    ];
    var head='<div class="aeo-rec-head"><span class="aeo-rec-fav">'+GLOBE+'</span><span class="aeo-rec-url">yourbusiness.com</span></div>'+
      '<div class="aeo-rec-prog"><span>Understood by AI</span><span class="aeo-rec-pct" id="aeo-rec-pct">0%</span></div>'+
      '<div class="aeo-rec-bar"><span class="aeo-rec-bar-fill" id="aeo-rec-fill"></span></div>';
    var list='';
    attrs.forEach(function(a){
      var chips='';a.v.forEach(function(x){chips+='<span class="aeo-vchip">'+x+'</span>';});
      list+='<div class="aeo-attr"><span class="aeo-attr-ico">'+a.ic+'</span><span class="aeo-attr-k">'+a.k+'</span><span class="aeo-attr-v">'+chips+'</span><span class="aeo-attr-ic">'+CHECK+'</span></div>';
    });
    root.innerHTML=head+list;
    var arows=root.querySelectorAll(".aeo-attr"),fill=document.getElementById("aeo-rec-fill"),pct=document.getElementById("aeo-rec-pct");
    (async function(){
      // one clean reveal, then stays complete (never empties)
      await sleep(480);if(!document.body.contains(root))return;
      for(var i=0;i<arows.length;i++){
        if(!document.body.contains(root))return;
        arows[i].classList.add("in");
        var p=Math.round((i+1)/arows.length*100);
        fill.style.width=p+"%";countTo(pct,p,460,"%");
        await sleep(520);
      }
      // continuous re-scan sweep so it clearly keeps working (never empties)
      while(document.body.contains(root)){
        await sleep(3200);if(!document.body.contains(root))return;
        fill.style.width="88%";countTo(pct,88,380,"%");
        for(var s=0;s<arows.length;s++){
          if(!document.body.contains(root))return;
          var ic=arows[s].querySelector(".aeo-attr-ic");
          if(ic){ic.style.transform="scale(1.24)";(function(x){setTimeout(function(){x.style.transform="";},300);})(ic);}
          await sleep(210);
        }
        fill.style.width="100%";countTo(pct,100,380,"%");
      }
    })();
  }

  /* ---------------- viz 3: Content (Attio outreach-list style) ---------------- */
  function startContent(){
    var root=document.getElementById("aeo-viz-content");if(!root||!A())return;
    var S='stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"';
    var ICO={
      faq:'<svg viewBox="0 0 24 24" fill="none" '+S+'><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 0 1 4.7.9c0 1.5-2.2 2.1-2.2 3.6"/><path d="M12 17h.01"/></svg>',
      price:'<svg viewBox="0 0 24 24" fill="none" '+S+'><path d="M12 3v18"/><path d="M16.5 7.5c0-1.7-2-3-4.5-3s-4.5 1.3-4.5 3 2 3 4.5 3 4.5 1.3 4.5 3-2 3-4.5 3-4.5-1.3-4.5-3"/></svg>',
      hours:'<svg viewBox="0 0 24 24" fill="none" '+S+'><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
      page:'<svg viewBox="0 0 24 24" fill="none" '+S+'><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h4"/></svg>'
    };
    var pages=[
      {t:"Emergency care FAQ",m:"Answers same-day availability",ic:ICO.faq},
      {t:"New patient pricing",m:"Clear first-visit costs",ic:ICO.price},
      {t:"Weekend hours",m:"When you are open",ic:ICO.hours},
      {t:"Service areas page",m:"Cities and neighbourhoods you cover",ic:ICO.page}
    ];
    var ARROW='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>';
    // Pre-render full list so card height never grows and pushes the page
    var listHtml='';
    pages.forEach(function(p){
      listHtml+='<div class="aeo-clist-row"><span class="aeo-clist-ico">'+p.ic+'</span><span class="aeo-clist-main"><span class="aeo-clist-t">'+p.t+'</span><span class="aeo-clist-m">'+p.m+'</span></span></div>';
    });
    root.innerHTML='<div class="aeo-askbar"><span class="aeo-askbar-ph">What should we write next?</span><span class="aeo-askbar-go">'+ARROW+'</span></div>'+
      '<div class="aeo-clist-label" id="aeo-clist-label">Finding pages AI needs&hellip;</div><div class="aeo-clist" id="aeo-clist">'+listHtml+'</div>';
    var rows=root.querySelectorAll(".aeo-clist-row"),label=document.getElementById("aeo-clist-label");
    (async function(){
      while(document.body.contains(root)){
        for(var r=0;r<rows.length;r++)rows[r].classList.remove("in");
        label.textContent="Finding pages AI needs\u2026";
        await sleep(700);if(!document.body.contains(root))return;
        for(var i=0;i<rows.length;i++){
          if(!document.body.contains(root))return;
          rows[i].classList.add("in");
          label.textContent=(i+1)+' pages ready for AI';
          await sleep(520);
        }
        await sleep(3200);
      }
    })();
  }

  /* ---------------- viz 4: Authority Building (trust signals feed) ---------------- */
  function startAuthority(){
    var root=document.getElementById("aeo-viz-auth");if(!root||!A())return;
    var STAR='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"/></svg>';
    var feed=[
      {logo:GOOG,t:"New 5-star review",m:"Google",p:5},
      {logo:TRUST,t:"Rated Excellent",m:"Trustpilot",p:6},
      {logo:YELP,t:"New 5-star review",m:"Yelp",p:4},
      {logo:FB,t:"Recommended by a customer",m:"Facebook",p:6},
      {logo:GOOG,t:"Added to a recommended list",m:"Google",p:5},
      {logo:TRUST,t:"New verified review",m:"Trustpilot",p:5}
    ];
    var stars='';for(var s=0;s<5;s++)stars+=STAR;
    var head='<div class="aeo-tr-head"><div><div class="aeo-bm-label">Authority score</div><div class="aeo-tr-num" id="aeo-tr-num">0</div><div class="aeo-tr-stars">'+stars+'</div></div><span class="aeo-tr-delta" id="aeo-tr-delta">rising</span></div>';
    root.innerHTML=head+'<div class="aeo-tr-feed" id="aeo-tr-feed"></div>';
    var feedEl=document.getElementById("aeo-tr-feed"),num=document.getElementById("aeo-tr-num"),delta=document.getElementById("aeo-tr-delta"),MAXVIS=4;
    (async function(){
      var i=0,score=84;
      countTo(num,84,900);
      await sleep(950);
      while(document.body.contains(root)){
        var f=feed[i%feed.length];
        var item=el("div","aeo-tr-item enter",'<span class="aeo-tr-logo">'+f.logo+'</span><span class="aeo-tr-main"><span class="aeo-tr-t">'+f.t+'</span><span class="aeo-tr-m">'+f.m+'</span></span><span class="aeo-tr-pts">+'+f.p+'</span>');
        feedEl.insertBefore(item,feedEl.firstChild);
        score=Math.min(100,score+f.p);countTo(num,score,700);delta.textContent=score>=100?"Top rated":"+"+f.p+" pts";
        while(feedEl.children.length>MAXVIS)feedEl.removeChild(feedEl.lastChild);
        await sleep(1950);if(!document.body.contains(root))return;
        i++;
      }
    })();
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
    if(!started){started=true;startVisibility();startStructure();startContent();startAuthority();}
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
"""

html = html.replace("</body>", INJECT + PLATFORM + "</body>", 1)

open(LIVE, "w", encoding="utf-8").write(html)
print("wrote", LIVE, "(", len(html), "bytes )")
