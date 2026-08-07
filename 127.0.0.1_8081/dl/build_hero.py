#!/usr/bin/env python3
import glob, os, re

HEAD = "Be the business that AI recommends"
HEAD_HTML = "Be the business that AI recommends"
SUB = "We get local businesses recommended by ChatGPT, Perplexity, Gemini and Claude."

SRC = "original-attio-backup.html.bak"
LIVE = [f for f in glob.glob("*.html") if f.startswith("ua=")][0]

# The page-saving tool left every /_next/... script, style, and image reference as a
# root-absolute URL, but the actual files only exist under eSOZMHKB8k26.com/_next/...,
# with query strings folded into the filename (e.g. "foo.svg?dpl=X" -> "foo_dpl=X.svg",
# and "/_next/image?url=A&w=B" saved as a literal directory "/_next/image/url=A&w=B").
# Without this rewrite every JS/CSS/image request 404s and the page renders blank.
def fix_next_asset_paths(html):
    def repl(m):
        # raw is "_next/..." whether the source had it as a root-absolute ref
        # or already prefixed with "../../eSOZMHKB8k26.com" (the save tool did
        # this for some <img> tags, but left the query string double-encoded).
        raw = m.group(2)
        # Some srcset/preload entries are double percent-encoded (%3D for "=",
        # %26 for "&", %252F for "%2F") while the saved-on-disk names use a single
        # encoding pass. Normalizing first collapses every variant to one shape.
        raw = raw.replace("%3D", "=").replace("%26", "&").replace("%25", "%")
        img_m = re.match(r"_next/image[?/](.*)", raw, re.S)
        if img_m:
            # The saved file's name preserves a literal "%2F" (not a real slash),
            # but Python's http.server URL-decodes %XX before the filesystem
            # lookup, turning %2F into an actual "/" and breaking the match.
            # Escaping "%" as "%25" here means it survives exactly one decode
            # pass intact and lands back on the literal disk filename.
            fixed = "_next/image/" + img_m.group(1).replace("%", "%25")
        elif "?" in raw:
            base, query = raw.split("?", 1)
            dot = base.rfind(".")
            fixed = f"{base[:dot]}_{query}{base[dot:]}" if dot != -1 else f"{base}_{query}"
        else:
            fixed = raw
        return "../../eSOZMHKB8k26.com/" + fixed

    # Matches every /_next/... reference, whether root-absolute or already
    # relative-but-still-mis-encoded, and rewrites it idempotently so both
    # shapes converge on the same correct, disk-matching relative path.
    # Parens are excluded too so unquoted CSS url(...) values terminate at
    # the closing paren instead of swallowing the rest of the declaration.
    return re.sub(r'(\.\./\.\./eSOZMHKB8k26\.com)?/(_next/[^"\'\\,\s()]+)', repl, html)

html = open(SRC, encoding="utf-8").read()

# --- 1. text edits (all occurrences incl. RSC payload => no flash, hydration-safe) ---
html = html.replace("Welcome to agentic revenue.", HEAD_HTML)
html = html.replace(
    "Attio is the CRM that builds pipeline, advances deals, and grows accounts around the clock.",
    SUB,
)

# --- 1a. drop Attio's own top-of-hero badge entirely (not just its text) ---
# it's a flex child of a gap-9 column ahead of <h1>, so removing the node
# (rather than swapping its label) also removes its reserved gap for free —
# the headline moves up on its own with no leftover blank space.
BADGE_RE = re.compile(
    r'<div style="filter:blur\(1\.5px\);opacity:0"><div data-visual-test="blackout">'
    r'<a href="https://atlas\.eSOZMHKB8k26\.com".*?</a></div></div>',
    re.S,
)
html = BADGE_RE.sub("", html)

# --- 1b. reveal content that attio hides at opacity:0 until its scroll-animation
#         JS fires (that JS doesn't run in the static capture) ---
html = html.replace("filter:blur(1.5px);opacity:0", "")

# --- 1c. CTA copy: make the free offer explicit everywhere ---
html = html.replace("Start for free", "Get your free audit")

# --- 1d. final CTA + misc copy for the agency site ---
html = html.replace("Agentic revenue runs on Attio.", "Be the business AI recommends.")
html = html.replace("Talk to sales", "Book a call")
html = html.replace("Send me a demo", "Get my free audit")

# --- 2. injected style + script (mounts chat animation into attio's mockup slot) ---
INJECT = r"""
<style id="aeo-style">
/* stage = the lit volume the product window floats inside */
.aeo-stage{position:relative;width:100%;animation:aeo-stage-in 1s var(--aeo-e,cubic-bezier(.22,1,.36,1)) both}
.aeo-stage::before{content:"";position:absolute;left:50%;top:8%;width:88%;height:84%;transform:translateX(-50%);border-radius:50%;background:radial-gradient(50% 50% at 50% 50%,rgba(38,109,240,.20),rgba(140,110,245,.10) 45%,transparent 72%);filter:blur(58px);opacity:.9;pointer-events:none;animation:aeo-stage-breathe 11s ease-in-out infinite alternate}
@keyframes aeo-stage-in{from{opacity:0;transform:translateY(22px) scale(.975)}to{opacity:1;transform:none}}
@keyframes aeo-stage-breathe{to{opacity:.55;transform:translateX(-50%) scale(1.08)}}
.aeo-window{position:relative;display:flex;flex-direction:column;width:100%;height:clamp(360px,42vw,660px);background:var(--color-white-100,#fff);border:1px solid rgba(28,29,31,.09);border-radius:18px;overflow:hidden;box-shadow:0 1px 2px rgba(16,17,20,.05),0 2px 6px -2px rgba(16,17,20,.08),0 26px 52px -22px rgba(28,29,31,.20),0 70px 130px -70px rgba(28,29,31,.34);font-family:var(--font-inter),"Inter",system-ui,sans-serif;text-align:left;pointer-events:auto;animation:aeo-float 11s ease-in-out 1s infinite alternate}
/* inner rim light — reads as glass thickness, not a border */
.aeo-window::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;box-shadow:inset 0 1px 0 rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.5)}
@keyframes aeo-float{to{transform:translateY(-6px)}}
.aeo-titlebar{position:relative;display:flex;align-items:center;height:46px;padding:0 16px;background:linear-gradient(180deg,rgba(252,253,255,.86),rgba(246,248,251,.72));-webkit-backdrop-filter:saturate(180%) blur(12px);backdrop-filter:saturate(180%) blur(12px);border-bottom:1px solid rgba(28,29,31,.07);flex:none;z-index:2}
.aeo-lights{display:flex;gap:7px}
.aeo-lights span{width:11px;height:11px;border-radius:999px;box-shadow:inset 0 -1px 1px rgba(0,0,0,.14),inset 0 1px 1px rgba(255,255,255,.4)}
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
.aeo-biz{display:inline-block;padding:1px 7px;margin:0 1px;border-radius:7px;background:linear-gradient(180deg,#f1f6ff,#e3edff);color:var(--color-blue-600,#245bc2);font-weight:600;box-shadow:inset 0 0 0 1px rgba(38,109,240,.18),0 1px 2px rgba(38,109,240,.10),0 6px 16px -8px rgba(38,109,240,.5);opacity:0;transform:scale(.9);animation:aeo-pop .34s var(--aeo-e-spring,cubic-bezier(.34,1.32,.52,1)) forwards}
@keyframes aeo-pop{to{opacity:1;transform:none}}
.aeo-sources{margin-top:clamp(14px,1.6vw,20px);opacity:0;transform:translateY(6px);transition:opacity .35s cubic-bezier(.33,1,.68,1),transform .35s cubic-bezier(.33,1,.68,1)}
.aeo-sources.show{opacity:1;transform:none}
.aeo-sources-label{font-size:12px;font-weight:600;color:var(--color-black-900,#a4adba);margin-bottom:9px}
.aeo-chips{display:flex;flex-wrap:wrap;gap:8px}
.aeo-chip{display:inline-flex;align-items:center;gap:7px;padding:6px 11px 6px 9px;border-radius:10px;border:1px solid var(--color-white-600,#dee2e7);background:linear-gradient(180deg,#fff,#f7f8fa);font-size:13px;font-weight:600;color:var(--color-black-300,#232529);box-shadow:0 1px 2px rgba(16,17,20,.05);transition:transform .28s cubic-bezier(.22,1,.36,1),box-shadow .28s cubic-bezier(.22,1,.36,1),border-color .2s}
.aeo-chip:hover{transform:translateY(-1.5px);border-color:#ccd3de;box-shadow:0 1px 2px rgba(16,17,20,.05),0 8px 18px -8px rgba(16,17,20,.24)}
.aeo-chip svg{width:15px;height:15px;display:block;flex:none}
.aeo-yelp{color:#d32323}
.aeo-inputbar{flex:none;display:flex;justify-content:center;padding:0 clamp(14px,2vw,24px) clamp(14px,1.8vw,22px)}
.aeo-input{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;max-width:720px;padding:11px 11px 11px 16px;border:1px solid rgba(28,29,31,.10);border-radius:15px;background:linear-gradient(180deg,#fff,#fbfcfe);box-shadow:0 1px 2px rgba(16,17,20,.05),0 10px 24px -18px rgba(16,17,20,.30),inset 0 1px 0 rgba(255,255,255,.9)}
.aeo-input-ph{font-size:15px;color:var(--color-black-800,#8f99a8)}
.aeo-input-actions{display:inline-flex;align-items:center;gap:12px}
.aeo-auto{font-size:13px;font-weight:500;color:var(--color-black-600,#505967)}
.aeo-send{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:10px;background:linear-gradient(180deg,#4b87f6,#2260da);color:#fff;box-shadow:0 1px 2px rgba(16,17,20,.16),0 6px 14px -6px rgba(38,109,240,.55),inset 0 1px 0 rgba(255,255,255,.28)}
.aeo-send svg{width:16px;height:16px}
/* neutralize attio's sticky-scroll choreography so the hero scrolls normally
   and the chat window never overlaps the headline/subline/CTAs */
.aeo-hero{position:relative}
.aeo-hero h1{text-wrap:balance}
.aeo-hero [class*="sticky"]{position:static!important}
.aeo-hero [class~="h-svh"]{height:auto!important;min-height:0!important;margin-top:64px;padding-top:0!important;padding-bottom:80px!important;align-items:flex-start!important}
.aeo-hero [class*="100svh"]{position:absolute!important;inset:0!important;height:100%!important;min-height:0!important}
.aeo-hero [class*="-mb-["]{margin-bottom:0!important}
/* AI engine logo tiles under the sub-line */
.aeo-ai-row{display:inline-flex;align-items:center;gap:7px;vertical-align:middle;margin-left:4px}
.aeo-ai-sq{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:8px;box-shadow:0 1px 2px rgba(16,17,20,.16),0 4px 10px -4px rgba(16,17,20,.28);transition:transform .3s var(--aeo-e-spring,cubic-bezier(.34,1.32,.52,1)),box-shadow .3s cubic-bezier(.22,1,.36,1)}
.aeo-ai-sq:hover{transform:translateY(-2px) scale(1.06);box-shadow:0 2px 4px rgba(16,17,20,.16),0 10px 20px -6px rgba(16,17,20,.34)}
.aeo-ai-sq svg{width:15px;height:15px;display:block}
/* Mobile: Attio swaps to a separate md:hidden scene — keep chat readable there */
@media (max-width:767px){
  .aeo-window{height:min(52vh,420px);border-radius:15px;animation:none;box-shadow:0 1px 2px rgba(16,17,20,.05),0 18px 36px -20px rgba(28,29,31,.26)}
  .aeo-stage::before{width:96%;filter:blur(38px);opacity:.6}
  [data-home-hero="mobile-scene"] .aeo-mobile-slot{position:relative;z-index:10;margin:2rem 1rem 1.5rem;pointer-events:auto;opacity:1!important;transform:none!important;filter:none!important;visibility:visible!important}
  [data-home-hero="mobile-scene"] .aeo-window{height:min(48vh,400px);opacity:1!important}
  .aeo-body{font-size:14.5px}
  .aeo-thread{padding:16px 14px 8px}
}
@media (prefers-reduced-motion: reduce){.aeo-caret{animation:none}.aeo-think span{animation:none}.aeo-tok,.aeo-biz{animation:none;opacity:1;transform:none}.aeo-stage,.aeo-stage::before,.aeo-window{animation:none}}
</style>
<script id="aeo-script">
(function(){
  var HEAD=%%HEAD%%, HEAD_HTML=%%HEAD_HTML%%, SUB=%%SUB%%;
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
  // The gradient id must be unique per copy: the markup is mounted into both the
  // desktop and mobile slots, and url(#id) resolves to the first match in the
  // document, which may sit inside a display:none subtree and paint nothing.
  var gemSeq=0;
  function gemSvg(){
    var id="aeoGem"+(++gemSeq);
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="'+id+'" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4285F4"/><stop offset=".52" stop-color="#9168C0"/><stop offset="1" stop-color="#D96570"/></linearGradient></defs><path fill="url(#'+id+')" d="'+P_GEM+'"/></svg>';
  }
  function aiTile(name,bg,col,inner,extra){return '<span class="aeo-ai-sq" title="'+name+'" style="background:'+bg+';color:'+col+';'+(extra||'')+'">'+inner+'</span>';}
  function aiRow(){
    return '<span class="aeo-ai-row" data-aeo-ai="1">'+
      aiTile("ChatGPT","#000","#fff",aiSvg(P_OPENAI))+
      aiTile("Perplexity","#20808D","#fff",aiSvg(P_PPLX))+
      aiTile("Gemini","#fff","#000",gemSvg(),"border:1px solid #d9dde3")+
      aiTile("Claude","#D97757","#fff",aiSvg(P_CLAUDE))+
    '</span>';
  }
  function subHtml(){return 'We get local businesses recommended by '+aiRow();}
  // expose brand logos for the platform section animations
  window.__AEO={aiSvg:aiSvg,aiTile:aiTile,P_OPENAI:P_OPENAI,P_PPLX:P_PPLX,P_GEM:P_GEM,P_CLAUDE:P_CLAUDE,gemSvg:gemSvg,get GEM_SVG(){return gemSvg();}};

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
    s.querySelectorAll("h1").forEach(function(h){ if(h.innerHTML!==HEAD_HTML)h.innerHTML=HEAD_HTML; });
    s.querySelectorAll("p").forEach(function(p){ var t=p.textContent||""; if((/recommended by|Attio is the CRM/.test(t))&&!p.querySelector(".aeo-ai-row"))p.innerHTML=subHtml(); });
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
    host.innerHTML='<div class="aeo-stage">'+WINDOW_HTML+'</div>';
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
INJECT = INJECT.replace("%%HEAD%%", json.dumps(HEAD)).replace("%%HEAD_HTML%%", json.dumps(HEAD_HTML)).replace("%%SUB%%", json.dumps(SUB))

# ============================================================
#  AEO PLATFORM SECTION  (replaces attio's Platform section)
# ============================================================
PLATFORM = open("parts/platform.frag", encoding="utf-8").read()

CHROME = open("parts/chrome.frag", encoding="utf-8").read()
HOMEXTRA = open("parts/home_extra.frag", encoding="utf-8").read()
# Scroll choreography for the home page: hero focal transfer + the
# scroll-scrubbed AEO statistics section. Loads after chrome so the
# shared scroll engine (window.__aeoScroll) already exists.
STORY = open("parts/story.frag", encoding="utf-8").read()
# Hero-only background: removes Attio's blue/white vertical-line wash
# and replaces it with a subtle interactive grey mesh.
HEROGRID = open("parts/hero_grid.frag", encoding="utf-8").read()

html = html.replace("</body>", INJECT + HEROGRID + CHROME + PLATFORM + HOMEXTRA + STORY + "</body>", 1)

html = fix_next_asset_paths(html)

open(LIVE, "w", encoding="utf-8").write(html)
print("wrote", LIVE, "(", len(html), "bytes )")

# ============================================================
#  SUBPAGES (pricing, contact) — same Attio chrome, own content
# ============================================================
def build_page(fname, title, frag_path):
    page = open(SRC, encoding="utf-8").read()
    page = re.sub(r"<title>.*?</title>", "<title>" + title + "</title>", page, count=1, flags=re.S)
    page = page.replace("Start for free", "Get your free audit")
    page = page.replace("Talk to sales", "Book a call")
    frag = open(frag_path, encoding="utf-8").read()
    page = page.replace("</body>", CHROME + frag + "</body>", 1)
    page = fix_next_asset_paths(page)
    open(fname, "w", encoding="utf-8").write(page)
    print("wrote", fname, "(", len(page), "bytes )")

build_page("pricing.html", "Pricing — Answered, the AEO agency", "parts/pricing.frag")
build_page("contact.html", "Get your free audit — Answered", "parts/contact.frag")
build_page("book.html", "Book a call — Answered", "parts/book.frag")
