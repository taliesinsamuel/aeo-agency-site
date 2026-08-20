/* ============================================================
   INSIGHTS COVER FIELD

   The animated square field from the homepage hero, drawn inside the
   article covers on /insights. Loaded by that page only.

   parts/hero_grid.frag is not touched or loaded here. That instance is a
   single viewport-fixed canvas behind the whole document, with cursor
   repulsion physics and a scroll clip, so it cannot be pointed at four
   small boxes. What is reproduced below is its ambient half: the same
   lattice, the same alpha ladder, the same per-cell retarget, the same
   sparkle envelope and the same binned draw, with every constant copied
   across unchanged. Only two things differ, and both are required by the
   brief: the lattice step on small thumbnails, and the colour, which each
   cover supplies through --alf-rgb so the field reads against its own
   background.

   Each cover is its own instance with its own random state, so the four
   never fall into step. One rAF loop drives all of them.
   ============================================================ */
(function () {
  var covers = document.querySelectorAll(".alr-cover[data-alr-field]");
  if (!covers.length || !window.requestAnimationFrame) return;

  var reduce = false;
  try {
    reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {}

  /* Every value here is hero_grid.frag's, except spacingSmall/sizeSmall. */
  var CFG = {
    spacing: 8.5,            // px between cell centres
    size: 4.0,               // px, square side
    // A 128px thumbnail only fits 15 columns of the full lattice, which
    // reads as a checkerboard rather than a field. Small covers step down
    // to a finer grain holding the same square-to-gap ratio, so the
    // texture looks the same, just smaller.
    spacingSmall: 6.4,
    sizeSmall: 3.0,
    smallWidth: 260,         // cover width below which the finer step is used
    aMin: 0.020, aMax: 0.052,      // resting band: the majority of squares
    aRareMin: 0.14, aRareMax: 0.21, // occasional stronger accent
    rareChance: 0.08,
    // Share of cells seeded at accent strength when motion is off. Chosen to
    // land near the accent density the moving field averages
    // (sparkleSpawn * mean duration * rareChance, halved for the envelope),
    // so a frozen cover looks like a still of a live one.
    staticRare: 0.035,
    sparkleSpawn: 0.95,      // sparkle spawns per cell per second
    sparkleDurMin: 0.38,
    sparkleDurMax: 0.85,
    ambientPick: 0.10,       // cells retargeted per cell per second
    ambientLerp: 1.35,
    alphaBins: 40            // one fill per alpha step, not per square
  };

  function rand(a, b) { return a + Math.random() * (b - a); }

  // Poisson-ish count from a small expected value: a cover with 300 cells
  // still gets its fair share of a sub-1 spawn budget per frame.
  function countFromRate(expected) {
    var n = 0;
    while (expected >= 1) { n++; expected -= 1; }
    if (Math.random() < expected) n++;
    return n;
  }

  function Field(el) {
    var cs = getComputedStyle(el);
    this.el = el;
    this.rgb = (cs.getPropertyValue("--alf-rgb") || "").trim() || "36, 91, 194";
    var gain = parseFloat(cs.getPropertyValue("--alf-gain"));
    this.gain = gain > 0 ? gain : 1;
    this.canvas = document.createElement("canvas");
    this.canvas.className = "alr-field";
    this.ctx = this.canvas.getContext("2d");
    this.bins = new Array(CFG.alphaBins);
    this.w = 0; this.h = 0; this.n = 0;
    this.visible = true;
    el.appendChild(this.canvas);
    el.__alrField = this;
    this.measure();
  }

  /* Sizes the canvas to the cover and rebuilds the lattice. A no-op unless
     the box actually changed, so it is safe to call on every resize. */
  Field.prototype.measure = function () {
    var r = this.el.getBoundingClientRect();
    var w = Math.round(r.width), h = Math.round(r.height);
    if (w < 4 || h < 4) { this.n = 0; return; }
    if (w === this.w && h === this.h) return;
    this.w = w; this.h = h;

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(w * dpr);
    this.canvas.height = Math.round(h * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var small = w < CFG.smallWidth;
    this.spacing = small ? CFG.spacingSmall : CFG.spacing;
    this.size = small ? CFG.sizeSmall : CFG.size;
    this.cols = Math.ceil(w / this.spacing) + 1;
    this.rows = Math.ceil(h / this.spacing) + 1;
    this.offX = (w - (this.cols - 1) * this.spacing) / 2;
    this.offY = (h - (this.rows - 1) * this.spacing) / 2;

    var n = this.cols * this.rows;
    this.n = n;
    this.curA = new Float32Array(n);
    this.tgtA = new Float32Array(n);
    this.spkT = new Float32Array(n);
    this.spkDur = new Float32Array(n);
    this.spkPeak = new Float32Array(n);
    for (var i = 0; i < n; i++) {
      var base = rand(CFG.aMin, CFG.aMax);
      // Reduced motion never receives a sparkle, so the accents that would
      // otherwise arrive over time are seeded into the resting field. The
      // frozen field then has the same tonal range as the moving one.
      if (reduce && Math.random() < CFG.staticRare) {
        base = rand(CFG.aRareMin, CFG.aRareMax);
      }
      this.curA[i] = base;
      this.tgtA[i] = base;
    }
    this.draw();
  };

  /* Ambient drift plus asynchronous sparkles. Cells never move: the whole
     effect is per-cell opacity, which is why nothing pulses together. */
  Field.prototype.updateIdle = function (dt) {
    var n = this.n, curA = this.curA, tgtA = this.tgtA;
    var spkT = this.spkT, spkDur = this.spkDur, spkPeak = this.spkPeak;
    var ambLerp = 1 - Math.exp(-CFG.ambientLerp * dt);
    var i, idx, u;

    for (i = 0; i < n; i++) {
      curA[i] += (tgtA[i] - curA[i]) * ambLerp;
      if (spkDur[i] > 0) {
        spkT[i] += dt;
        if (spkT[i] >= spkDur[i]) { spkDur[i] = 0; spkPeak[i] = 0; spkT[i] = 0; }
      }
    }

    // Slow retargets across the resting band, biased toward mid-tones so
    // the field stays layered rather than binary.
    var ambPicks = countFromRate(n * CFG.ambientPick * dt);
    for (i = 0; i < ambPicks; i++) {
      idx = (Math.random() * n) | 0;
      if (spkDur[idx] > 0) continue;
      u = Math.random();
      tgtA[idx] = CFG.aMin + (CFG.aMax - CFG.aMin) * (u * u * 0.35 + u * 0.65);
    }

    // Sparkles: a brief eased lift on one cell, at three strengths.
    var spawns = countFromRate(n * CFG.sparkleSpawn * dt);
    for (i = 0; i < spawns; i++) {
      idx = (Math.random() * n) | 0;
      if (spkDur[idx] > 0) continue;
      spkT[idx] = 0;
      spkDur[idx] = rand(CFG.sparkleDurMin, CFG.sparkleDurMax);
      if (Math.random() < CFG.rareChance) {
        spkPeak[idx] = rand(CFG.aRareMin, CFG.aRareMax) - curA[idx];
      } else if (Math.random() < 0.45) {
        spkPeak[idx] = rand(0.050, 0.105);
      } else {
        spkPeak[idx] = rand(0.020, 0.060);
      }
      if (spkPeak[idx] < 0.008) spkPeak[idx] = 0.008;
    }
  };

  Field.prototype.cellAlpha = function (idx) {
    var a = this.curA[idx];
    if (this.spkDur[idx] > 0) {
      var u = this.spkT[idx] / this.spkDur[idx];
      var s = u * u * (3 - 2 * u);
      var env = s * (1 - s) * 4; // 0 -> 1 -> 0, peaked mid-life
      a += this.spkPeak[idx] * env;
    }
    return a;
  };

  Field.prototype.draw = function () {
    var ctx = this.ctx, n = this.n, bins = this.bins, b;
    ctx.clearRect(0, 0, this.w, this.h);
    if (!n) return;
    for (b = 0; b < CFG.alphaBins; b++) bins[b] = null;

    var half = this.size / 2;
    var range = CFG.aRareMax * this.gain;
    for (var idx = 0; idx < n; idx++) {
      var a = this.cellAlpha(idx) * this.gain;
      if (a <= 0.004) continue;
      if (a > range) a = range;
      var bi = Math.min(CFG.alphaBins - 1, (a / range * CFG.alphaBins) | 0);
      var path = bins[bi] || (bins[bi] = new Path2D());
      path.rect(
        this.offX + (idx % this.cols) * this.spacing - half,
        this.offY + ((idx / this.cols) | 0) * this.spacing - half,
        this.size,
        this.size
      );
    }
    for (b = 0; b < CFG.alphaBins; b++) {
      if (!bins[b]) continue;
      var alpha = ((b + 0.5) / CFG.alphaBins) * range;
      ctx.fillStyle = "rgba(" + this.rgb + "," + alpha.toFixed(3) + ")";
      ctx.fill(bins[b]);
    }
  };

  var fields = [], i;
  for (i = 0; i < covers.length; i++) fields.push(new Field(covers[i]));

  function remeasure() {
    for (var k = 0; k < fields.length; k++) fields[k].measure();
  }

  if (typeof ResizeObserver === "function") {
    var ro = new ResizeObserver(function (entries) {
      for (var k = 0; k < entries.length; k++) {
        var f = entries[k].target.__alrField;
        if (f) f.measure();
      }
    });
    for (i = 0; i < covers.length; i++) ro.observe(covers[i]);
  } else {
    window.addEventListener("resize", remeasure);
  }

  // Nothing is drawn for a cover that is scrolled away.
  if (typeof IntersectionObserver === "function") {
    var io = new IntersectionObserver(function (entries) {
      for (var k = 0; k < entries.length; k++) {
        var f = entries[k].target.__alrField;
        if (f) f.visible = entries[k].isIntersecting;
      }
    }, { rootMargin: "120px" });
    for (i = 0; i < covers.length; i++) io.observe(covers[i]);
  }

  if (reduce) return; // static field already drawn by measure()

  var last = 0;
  function frame(t) {
    var dt = last ? (t - last) / 1000 : 0.016;
    last = t;
    if (dt > 0.05) dt = 0.05; // a backgrounded tab must not fast-forward
    for (var k = 0; k < fields.length; k++) {
      var f = fields[k];
      if (!f.visible || !f.n) continue;
      f.updateIdle(dt);
      f.draw();
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
