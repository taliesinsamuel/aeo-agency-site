<style id="aeo-sqfield-pale-style">
/* ============================================================
   SQUARE FIELD — pale-blue color variant
   ------------------------------------------------------------
   Injected only on /pricing, /free-audit, and /book. The lattice
   itself is the homepage field (hero_grid.frag). This fragment
   only recolors the ground, lifts the page shell so the canvas
   can sit at z-index 0 (same layering the old float field used),
   and opts the shared script into the pale-blue variant.
   Homepage never loads this file.
   ============================================================ */

/* Featured Insights cover ground: theme.css .alr-cover */
html.aeo-sqfield-pale{
  background:#f2f5fb;
  background-image:linear-gradient(160deg,#f2f5fb,#e8eef8);
}
html.aeo-sqfield-pale body{background-color:transparent!important}

/* Attio's opaque body would hide z-index:-1; match the prior
   secondary-page stack (canvas at 0, shell above it). */
html.aeo-sqfield-pale #aeo-sqfield{z-index:0}
html.aeo-sqfield-pale body > div.flex,
html.aeo-sqfield-pale .aeo-foot{
  position:relative;
  z-index:1;
}

/* Open the light subpage shell so the fixed canvas shows through.
   Cards, forms, FAQ rows, and dark bands keep their own surfaces. */
html.aeo-sqfield-pale .aeo-subpage.aeo-plat{background:transparent!important}

/* Ensure intentionally dark regions remain opaque above the field. */
html.aeo-sqfield-pale .aeo-cta-band,
html.aeo-sqfield-pale .aeo-foot{isolation:isolate}
</style>
<script>
document.documentElement.classList.add("aeo-sqfield-pale");
/* Color is --al-accent-ink / Featured cover --alf-rgb. */
window.__aeoSqFieldVariant={id:"pale-blue",color:"36, 91, 194"};
</script>
