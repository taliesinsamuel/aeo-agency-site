<!-- Answered Labs analytics: GA4 + Microsoft Clarity (non-visual measurement only). -->
<script id="aeo-analytics">
(function () {
  if (window.__aeoAnalytics && window.__aeoAnalytics.__ready) return;

  var GA_ID = "G-2RQXEQDB8Q";
  var CLARITY_ID = "y0bieh6np4";
  var ATTR_KEY = "aeo_attr_v1";
  var CTX_KEY = "aeo_booking_ctx_v1";
  var BOOK_DEDUP_KEY = "aeo_book_done_v1";
  var ATTR_TTL_MS = 90 * 24 * 60 * 60 * 1000;
  var PROD_HOST = { "answeredlabs.com": 1, "www.answeredlabs.com": 1 };

  var host = "";
  try { host = (location.hostname || "").toLowerCase(); } catch (e) {}
  var debug = false;
  try { debug = /(?:^|[?&])analytics_debug=1(?:&|$)/.test(location.search || ""); } catch (e) {}
  var allow = !!PROD_HOST[host] || debug;

  var started = { free_audit: false };
  var bookedKeys = {};
  var calendlyOpenOnce = {};
  var listenersBound = false;

  function now() { return Date.now(); }
  function safeCall(fn) {
    try { return fn(); } catch (e) { return undefined; }
  }
  function pagePath() {
    try { return location.pathname || "/"; } catch (e) { return "/"; }
  }
  function isInternalHost(h) {
    h = String(h || "").toLowerCase();
    return !h || h === host || h === "answeredlabs.com" || h === "www.answeredlabs.com" ||
      h === "127.0.0.1" || h === "localhost";
  }
  function cleanParam(v, max) {
    v = String(v == null ? "" : v).trim();
    if (!v) return "";
    if (/@/.test(v)) return "";
    return v.slice(0, max || 80);
  }
  function readStorage(key) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return null;
      var obj = JSON.parse(raw);
      if (!obj || typeof obj !== "object") return null;
      if (obj.exp && obj.exp < now()) {
        localStorage.removeItem(key);
        return null;
      }
      return obj;
    } catch (e) { return null; }
  }
  function writeStorage(key, obj) {
    try {
      obj.exp = now() + ATTR_TTL_MS;
      localStorage.setItem(key, JSON.stringify(obj));
    } catch (e) {}
  }
  function readSession(key) {
    try {
      var raw = sessionStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }
  function writeSession(key, obj) {
    try { sessionStorage.setItem(key, JSON.stringify(obj)); } catch (e) {}
  }

  function captureAttribution() {
    var qs;
    try { qs = new URLSearchParams(location.search || ""); } catch (e) { qs = null; }
    var utm = {
      source: qs ? cleanParam(qs.get("utm_source")) : "",
      medium: qs ? cleanParam(qs.get("utm_medium")) : "",
      campaign: qs ? cleanParam(qs.get("utm_campaign")) : "",
      content: qs ? cleanParam(qs.get("utm_content")) : "",
      term: qs ? cleanParam(qs.get("utm_term")) : ""
    };
    var refHost = "";
    try {
      if (document.referrer) refHost = cleanParam(new URL(document.referrer).hostname, 120);
    } catch (e) {}
    if (isInternalHost(refHost)) refHost = "";

    var hasUtm = !!(utm.source || utm.medium || utm.campaign || utm.content || utm.term);
    var isAcquisition = hasUtm || !!refHost;
    var touch = {
      source: utm.source || (refHost ? "referral" : "direct"),
      medium: utm.medium || (refHost ? "referral" : "none"),
      campaign: utm.campaign || "",
      content: utm.content || "",
      term: utm.term || "",
      landing_page: pagePath(),
      referrer: refHost,
      ts: now()
    };

    var store = readStorage(ATTR_KEY) || { first: null, latest: null };
    if (!store.first) store.first = touch;
    if (isAcquisition) store.latest = touch;
    else if (!store.latest) store.latest = touch;
    writeStorage(ATTR_KEY, store);
    return store;
  }

  function getAttribution() {
    return readStorage(ATTR_KEY) || captureAttribution();
  }

  function setBookingContext(ctx) {
    var cur = readSession(CTX_KEY) || {};
    var next = {
      booking_source: cleanParam((ctx && ctx.booking_source) || cur.booking_source || "", 40) || "other",
      cta_location: cleanParam((ctx && ctx.cta_location) || cur.cta_location || "", 40) || "unknown"
    };
    writeSession(CTX_KEY, next);
    return next;
  }
  function getBookingContext() {
    return readSession(CTX_KEY) || { booking_source: "other", cta_location: "unknown" };
  }

  function gtag() {
    if (!window.dataLayer) return;
    window.dataLayer.push(arguments);
  }

  function initGA4() {
    if (!allow || window.__aeoGA4Init) return;
    window.__aeoGA4Init = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || gtag;
    window.gtag("js", new Date());
    var cfg = { anonymize_ip: true, send_page_view: true };
    if (debug) cfg.debug_mode = true;
    window.gtag("config", GA_ID, cfg);

    if (document.getElementById("aeo-gtag-js")) return;
    var s = document.createElement("script");
    s.id = "aeo-gtag-js";
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
  }

  function initClarity() {
    if (!allow || window.__aeoClarityInit) return;
    window.__aeoClarityInit = true;
    if (document.getElementById("aeo-clarity-js")) return;
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      t.id = "aeo-clarity-js";
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", CLARITY_ID);
    safeCall(function () {
      var a = getAttribution();
      var latest = (a && a.latest) || {};
      if (latest.source) window.clarity("set", "utm_source", String(latest.source).slice(0, 64));
      if (latest.medium) window.clarity("set", "utm_medium", String(latest.medium).slice(0, 64));
      if (latest.campaign) window.clarity("set", "utm_campaign", String(latest.campaign).slice(0, 64));
      window.clarity("set", "page_type", pageType());
    });
  }

  function pageType() {
    var p = pagePath();
    if (/contact|free-audit/i.test(p)) return "free_audit";
    if (/book/i.test(p)) return "book";
    if (/pricing/i.test(p)) return "pricing";
    if (/privacy/i.test(p)) return "privacy";
    if (/terms/i.test(p)) return "terms";
    if (p === "/" || /index\.html$/i.test(p)) return "home";
    return "other";
  }

  function trackGA4(name, params) {
    if (!allow) return;
    safeCall(function () {
      if (typeof window.gtag !== "function") return;
      var p = params ? Object.assign({}, params) : {};
      p.page_path = p.page_path || pagePath();
      window.gtag("event", name, p);
    });
  }

  function trackClarity(name) {
    if (!allow) return;
    safeCall(function () {
      if (typeof window.clarity === "function") window.clarity("event", name);
    });
  }

  function track(name, params, clarityToo) {
    trackGA4(name, params || {});
    if (clarityToo) trackClarity(name);
  }

  function calendlyUtm(extra) {
    var a = getAttribution();
    var latest = (a && a.latest) || {};
    var first = (a && a.first) || {};
    var pick = function (k, fb) {
      return cleanParam(latest[k] || first[k] || fb || "", 80);
    };
    var out = {
      utmSource: pick("source", "answered_website") || "answered_website",
      utmMedium: pick("medium", "website") || "website",
      utmCampaign: pick("campaign", ""),
      utmContent: pick("content", ""),
      utmTerm: pick("term", "")
    };
    if (extra && typeof extra === "object") {
      if (extra.utmMedium) out.utmMedium = cleanParam(extra.utmMedium, 80) || out.utmMedium;
      if (extra.utmCampaign) out.utmCampaign = cleanParam(extra.utmCampaign, 80) || out.utmCampaign;
      if (extra.utmContent) out.utmContent = cleanParam(extra.utmContent, 80) || out.utmContent;
    }
    return out;
  }

  function onCalendlyOpen(meta) {
    var ctx = setBookingContext(meta || {});
    var key = ctx.booking_source + "|" + pagePath();
    if (calendlyOpenOnce[key]) return;
    calendlyOpenOnce[key] = 1;
    track("calendly_open", {
      booking_source: ctx.booking_source,
      cta_location: ctx.cta_location,
      page_path: pagePath()
    }, true);
  }

  function onCalendlyScheduled(payload) {
    var uri = "";
    try {
      uri = (payload && payload.invitee && payload.invitee.uri) ||
        (payload && payload.event && payload.event.uri) || "";
    } catch (e) {}
    var dedupe = cleanParam(uri, 200) || ("sess_" + pagePath() + "_" + (getBookingContext().booking_source || "other"));
    if (bookedKeys[dedupe]) return;
    var prev = readSession(BOOK_DEDUP_KEY) || {};
    if (prev[dedupe]) return;
    bookedKeys[dedupe] = 1;
    prev[dedupe] = now();
    writeSession(BOOK_DEDUP_KEY, prev);

    var ctx = getBookingContext();
    track("book_call_completed", {
      booking_source: ctx.booking_source || "other",
      cta_location: ctx.cta_location || "unknown",
      page_path: pagePath()
    }, true);
  }

  function inferCtaLocation(el) {
    if (!el || !el.closest) return "unknown";
    if (el.closest(".aeo-nav")) return "navbar";
    if (el.closest(".aeo-foot")) return "footer";
    if (el.closest(".aeo-hero")) return "hero";
    if (el.closest(".aeo-price") || el.closest(".aeo-price-grid") || el.closest("#aeo-pricing-style") ||
        (el.closest("#aeo-page") && /pricing\.html|\/pricing/i.test(pagePath()))) return "pricing";
    if (el.closest("#aeo-seo")) return "seo_section";
    if (el.closest(".aeo-close") || el.closest(".aeo-final")) return "final_cta";
    if (el.closest("#aeo-audit-card") || el.closest("#aeo-contact-page")) return "free_audit";
    return "unknown";
  }

  function hrefOf(a) {
    return (a && (a.getAttribute("href") || a.href)) || "";
  }

  function isFreeAuditHref(h) {
    return /contact\.html(?:[?#]|$)|\/contact(?:[?#]|$)|\/free-audit(?:[?#]|$)/i.test(h);
  }
  function isBookHref(h) {
    return /book\.html(?:[?#]|$)|\/book(?:[?#]|$)/i.test(h);
  }

  function bindClicks() {
    if (listenersBound) return;
    listenersBound = true;
    document.addEventListener("click", function (ev) {
      var a = ev.target && ev.target.closest ? ev.target.closest("a") : null;
      if (!a) return;
      var h = hrefOf(a);
      if (!h) return;
      var loc = inferCtaLocation(a);

      if (/^mailto:hello@answeredlabs\.com/i.test(h)) {
        track("mailto_click", { link_location: loc, page_path: pagePath() });
        return;
      }

      var serviceMap = {
        visibility: "ai_visibility",
        "site-structure": "site_structure",
        content: "content",
        authority: "authority"
      };
      var m = h.match(/#(?:\.\/)?(visibility|site-structure|content|authority)\b/i) ||
        h.match(/[/#](visibility|site-structure|content|authority)\b/i);
      if (m && a.closest(".aeo-foot")) {
        track("service_deeplink_click", {
          service: serviceMap[m[1].toLowerCase()] || m[1].toLowerCase(),
          page_path: pagePath()
        });
      }

      if (isFreeAuditHref(h)) {
        setBookingContext({ booking_source: "free_audit", cta_location: loc });
        track("free_audit_cta_click", { cta_location: loc, page_path: pagePath() });
        return;
      }

      if (isBookHref(h)) {
        var plan = "";
        try { plan = cleanParam(new URL(a.href, location.href).searchParams.get("plan"), 40); } catch (e) {}
        var bookingSource = plan ? "pricing" : "direct_book_call";
        if (loc === "pricing") bookingSource = "pricing";
        setBookingContext({ booking_source: bookingSource, cta_location: loc });
        if (loc === "pricing" || plan) {
          var planName = ({ growth: "Growth", scale: "Scale", custom: "Custom" })[plan] || plan || "unknown";
          track("pricing_cta_click", {
            plan_name: planName,
            cta_location: "pricing",
            destination_type: "book_call",
            page_path: pagePath()
          });
        }
        track("book_call_click", { cta_location: loc, page_path: pagePath() });
      }
    }, true);
  }

  function bindCalendlyMessages() {
    window.addEventListener("message", function (e) {
      if (!(window.__aeoIsCalendlyEvent && window.__aeoIsCalendlyEvent(e))) return;
      if (e.data && e.data.event === "calendly.event_scheduled") {
        onCalendlyScheduled(e.data.payload || {});
      }
    });
  }

  function markFreeAuditStart() {
    if (started.free_audit) return;
    started.free_audit = true;
    track("free_audit_start", { page_path: pagePath() }, true);
  }

  function onGenerateLead(meta) {
    var ctx = setBookingContext({
      booking_source: "free_audit",
      cta_location: (meta && meta.cta_location) || getBookingContext().cta_location || "free_audit"
    });
    track("generate_lead", {
      lead_type: "free_audit",
      cta_location: ctx.cta_location,
      page_path: pagePath(),
      booking_source: "free_audit"
    }, true);
  }

  function onFreeAuditError(errorType) {
    track("free_audit_error", {
      error_type: cleanParam(errorType || "server_error", 40) || "server_error",
      page_path: pagePath()
    }, true);
  }

  function updateConsent(state) {
    /* Consent-aware stub for a future CMP. Do not invent granted consent. */
    safeCall(function () {
      if (typeof window.gtag === "function" && state && typeof state === "object") {
        window.gtag("consent", "update", state);
      }
    });
    safeCall(function () {
      if (typeof window.clarity === "function" && state && (state.analytics_storage || state.ad_storage)) {
        window.clarity("consentv2", {
          ad_Storage: state.ad_storage === "granted" ? "granted" : "denied",
          analytics_Storage: state.analytics_storage === "granted" ? "granted" : "denied"
        });
      }
    });
  }

  captureAttribution();
  if (allow) {
    initGA4();
    initClarity();
  }
  bindClicks();
  bindCalendlyMessages();

  if (/\/book(?:\.html)?(?:[?#]|$)/i.test(pagePath()) || /book\.html$/i.test(pagePath())) {
    setBookingContext({
      booking_source: (function () {
        try {
          var qs = new URLSearchParams(location.search || "");
          if ((qs.get("source") || "").toLowerCase() === "audit") return "free_audit";
          if (qs.get("plan")) return "pricing";
        } catch (e) {}
        var cur = getBookingContext();
        return cur.booking_source || "direct_book_call";
      })(),
      cta_location: getBookingContext().cta_location || "unknown"
    });
  }

  window.__aeoAnalytics = {
    __ready: true,
    allow: allow,
    debug: debug,
    track: track,
    trackGA4: trackGA4,
    trackClarity: trackClarity,
    getAttribution: getAttribution,
    calendlyUtm: calendlyUtm,
    setBookingContext: setBookingContext,
    getBookingContext: getBookingContext,
    onCalendlyOpen: onCalendlyOpen,
    markFreeAuditStart: markFreeAuditStart,
    onGenerateLead: onGenerateLead,
    onFreeAuditError: onFreeAuditError,
    updateConsent: updateConsent,
    inferCtaLocation: inferCtaLocation
  };
})();
</script>
