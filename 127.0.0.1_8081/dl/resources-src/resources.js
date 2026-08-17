/* ============================================================
   ANSWERED LABS / RESOURCES — progressive enhancement.

   Everything here is optional. With this file blocked the pages still
   render completely: content is visible, the contents list is a plain
   anchor list, and the bars sit at their final width.

   No dependencies, no analytics, no third-party calls.
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;
  if (!body || body.className.indexOf("alr") === -1) return;

  var reduce = false;
  try {
    reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {}

  var canObserve = "IntersectionObserver" in window;

  /* ---- entrance reveal --------------------------------------
     The class is only added once we know the observer exists, so a
     browser without it never gets stuck on the hidden state. */
  if (canObserve && !reduce) {
    body.classList.add("alr-js");
    var io = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (!entries[i].isIntersecting) continue;
          io.unobserve(entries[i].target);
          entries[i].target.classList.add("is-in");
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    var rv = document.querySelectorAll(".alr-rv");
    for (var i = 0; i < rv.length; i++) io.observe(rv[i]);
  }

  /* ---- article contents ------------------------------------- */
  var toc = document.querySelector("[data-alr-toc]");
  if (toc && canObserve) {
    var links = toc.querySelectorAll("a[href^='#']");
    var map = {};
    var targets = [];
    for (var j = 0; j < links.length; j++) {
      var id = decodeURIComponent(links[j].getAttribute("href").slice(1));
      var el = document.getElementById(id);
      if (!el) continue;
      map[id] = links[j];
      targets.push(el);
    }

    var current = null;
    function setCurrent(link) {
      if (link === current) return;
      if (current) current.removeAttribute("aria-current");
      if (link) link.setAttribute("aria-current", "true");
      current = link;
    }

    // Track which headings are on screen and highlight the topmost one.
    // Using a set rather than "last intersecting" keeps the highlight
    // correct when scrolling upward past several short sections.
    var visible = [];
    var spy = new IntersectionObserver(
      function (entries) {
        for (var k = 0; k < entries.length; k++) {
          var e = entries[k];
          var idx = visible.indexOf(e.target);
          if (e.isIntersecting && idx === -1) visible.push(e.target);
          else if (!e.isIntersecting && idx !== -1) visible.splice(idx, 1);
        }
        // Between two sections, or scrolled back above the first heading,
        // nothing sits in the band. Fall back to the heading the reader is
        // underneath rather than leaving the last match highlighted.
        if (!visible.length) {
          var y = window.pageYOffset + 130;
          var behind = null;
          for (var q = 0; q < targets.length; q++) {
            if (targets[q].getBoundingClientRect().top + window.pageYOffset <= y) behind = targets[q];
          }
          setCurrent(behind ? map[behind.id] : map[targets[0].id]);
          return;
        }
        var top = visible[0];
        for (var m = 1; m < visible.length; m++) {
          if (visible[m].offsetTop < top.offsetTop) top = visible[m];
        }
        setCurrent(map[top.id]);
      },
      { rootMargin: "-100px 0px -62% 0px", threshold: 0 }
    );
    for (var n = 0; n < targets.length; n++) spy.observe(targets[n]);
  }

  /* ---- work result counts -----------------------------------
     Each [data-alr-anim] unit (one headline figure, or one Before/After
     block) has its own state. Play when that unit is meaningfully on
     screen. Reset instantly, with no transition, only after it is
     fully gone. The user never sees a count-down or a bar shrink. */
  var animUnits = document.querySelectorAll("[data-alr-anim]");
  if (animUnits.length && canObserve) {
    var DURATION = 920;
    var ENTER = 0.2;
    var running = [];

    function fmt(n, decimals) {
      if (decimals) return Number(n).toFixed(decimals);
      return String(Math.round(n));
    }
    function ease(t) {
      if (t <= 0) return 0;
      if (t >= 1) return 1;
      var x = t;
      var i;
      for (i = 0; i < 6; i++) {
        var xx = x * x;
        var fx = (0.58 * xx + -0.24 * x + 0.66) * x - t;
        var dx = 1.74 * xx + -0.48 * x + 0.66;
        if (Math.abs(dx) < 1e-6) break;
        x -= fx / dx;
      }
      return ((x - 3) * x + 3) * x;
    }
    function writeNode(el, t) {
      var to = parseFloat(el.getAttribute("data-to") || "0");
      var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
      var prefix = el.getAttribute("data-prefix") || "";
      var suffix = el.getAttribute("data-suffix") || "";
      el.textContent = prefix + fmt(to * t, decimals) + suffix;
    }
    function nodesOf(unit) {
      return unit.querySelectorAll("[data-alr-figure], [data-alr-n]");
    }
    function stateOf(unit) {
      return unit.getAttribute("data-alr-state") || "hidden";
    }
    function findRun(unit) {
      for (var i = 0; i < running.length; i++) {
        if (running[i].unit === unit) return running[i];
      }
      return null;
    }
    function stopRun(unit) {
      var run = findRun(unit);
      if (!run) return;
      cancelAnimationFrame(run.id);
      running.splice(running.indexOf(run), 1);
    }
    function resetUnit(unit) {
      if (stateOf(unit) === "hidden") return;
      stopRun(unit);
      unit.classList.add("is-resetting");
      unit.classList.remove("is-counting");
      var nodes = nodesOf(unit);
      for (var i = 0; i < nodes.length; i++) writeNode(nodes[i], 0);
      unit.offsetWidth;
      unit.classList.remove("is-resetting");
      unit.setAttribute("data-alr-state", "hidden");
    }
    function playUnit(unit) {
      var state = stateOf(unit);
      if (state === "playing" || state === "shown") return;
      var nodes = nodesOf(unit);
      for (var i = 0; i < nodes.length; i++) writeNode(nodes[i], 0);
      unit.classList.remove("is-resetting");
      unit.offsetWidth;
      unit.classList.add("is-counting");
      unit.setAttribute("data-alr-state", "playing");
      var start = performance.now();
      var run = { unit: unit, id: 0 };
      running.push(run);
      function tick(now) {
        var t = Math.min(1, (now - start) / DURATION);
        var e = ease(t);
        for (var k = 0; k < nodes.length; k++) writeNode(nodes[k], e);
        if (t < 1) {
          run.id = requestAnimationFrame(tick);
        } else {
          running.splice(running.indexOf(run), 1);
          unit.setAttribute("data-alr-state", "shown");
        }
      }
      run.id = requestAnimationFrame(tick);
    }
    function visibleRatio(el) {
      var r = el.getBoundingClientRect();
      var vh = window.innerHeight || 0;
      if (r.height <= 0 || vh <= 0) return 0;
      var shown = Math.min(r.bottom, vh) - Math.max(r.top, 0);
      return shown / r.height;
    }

    if (reduce) {
      for (var c = 0; c < animUnits.length; c++) {
        animUnits[c].classList.add("is-counting");
        animUnits[c].setAttribute("data-alr-state", "shown");
      }
    } else {
      body.classList.add("alr-js");
      for (var d = 0; d < animUnits.length; d++) {
        animUnits[d].setAttribute("data-alr-state", "shown");
        resetUnit(animUnits[d]);
      }

      var io = new IntersectionObserver(
        function (entries) {
          for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            if (entry.intersectionRatio >= ENTER) playUnit(entry.target);
            else if (entry.intersectionRatio === 0) resetUnit(entry.target);
          }
        },
        { threshold: [0, 0.2, 0.35, 0.5, 1], rootMargin: "0px" }
      );
      for (var e = 0; e < animUnits.length; e++) io.observe(animUnits[e]);

      requestAnimationFrame(function () {
        for (var g = 0; g < animUnits.length; g++) {
          if (visibleRatio(animUnits[g]) >= ENTER) playUnit(animUnits[g]);
        }
      });
    }
  }

  void root;
})();
