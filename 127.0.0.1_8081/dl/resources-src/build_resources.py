#!/usr/bin/env python3
"""
Builds the Answered Labs Resources pages: /work, /research, /insights,
/about and the individual articles under /insights/.

These are standalone documents. They deliberately do not start from the
saved Attio page the commercial pages are generated from, because that
file carries a large amount of unrelated marketing copy in the DOM, which
works directly against what these pages exist to do. Instead they load the
same webfonts and the same shared chrome fragment, so the header, footer
and navigation are the ones the rest of the site already uses.

Nothing in this script touches the commercial build. It only reads
parts/chrome.frag and writes new files.

Run via `npm run build` (which runs build_hero.py first) or directly:

    python3 resources-src/build_resources.py

Production safety: the build refuses to produce a production bundle while
any publicly rendered result or testimonial is still flagged as demo data.
See assert_no_demo_proof().
"""

import html
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
os.chdir(HERE)

DL = os.path.normpath(os.path.join(HERE, ".."))          # 127.0.0.1_8081/dl
REPO = os.path.normpath(os.path.join(DL, "..", ".."))    # repository root

ORIGIN = "https://answeredlabs.com"

# Both / and /insights/<slug> resolve "../../" to the site root, so one
# prefix serves every page depth for static assets.
ASSETS = "../../eSOZMHKB8k26.com"
SELF = "../../127.0.0.1_8081/dl/resources-src"

FONT_CSS = ASSETS + "/_next/static/chunks/0te5~pn50-xak_dpl=dpl_4gXyZGiaqnpkANs5NvnuaSaJy4YF.css"
FAVICON = ASSETS + "/favicon_favicon.17i4ytxwoisgb.ico_dpl%3Ddpl_4gXyZGiaqnpkANs5NvnuaSaJy4YF.ico"

ORG_ID = ORIGIN + "/#organization"
SITE_ID = ORIGIN + "/#website"

AUTHORS = {
    "taliesin": {
        "name": "Taliesin Kauffmann",
        "role": "Co-founder, Answered Labs",
        "anchor": "taliesin-kauffmann",
        "initials": "TK",
    },
    "emerson": {
        "name": "Emerson Kauffmann",
        "role": "Co-founder, Answered Labs",
        "anchor": "emerson-kauffmann",
        "initials": "EK",
    },
}


def is_production():
    """
    True when this build is producing artefacts intended for the public
    site. Vercel sets VERCEL_ENV=production for production deployments.
    AL_ENV exists so the guard can be exercised locally without pretending
    to be Vercel.
    """
    env = (os.environ.get("AL_ENV") or os.environ.get("VERCEL_ENV") or "").lower()
    if env in ("production", "prod"):
        return True
    return (os.environ.get("NODE_ENV") or "").lower() == "production"


def load_proof():
    with open("proof.demo.json", encoding="utf-8") as f:
        return json.load(f)


def assert_no_demo_proof(proof):
    """
    Hard production blocker.

    Every result and testimonial rendered on /work comes from
    proof.demo.json. While any of those items is still marked
    "isDemo": true, a production build must not be produced, because the
    figures are illustrative and the testimonial identities are invented.

    The guard is intentionally narrow: it only inspects the proof items
    that are actually rendered publicly, and it only fires in production.
    Local development is unaffected.
    """
    if not is_production():
        return

    offenders = []
    for kind in ("results", "testimonials"):
        for item in proof.get(kind, []):
            if item.get("isDemo") is True:
                offenders.append("%s/%s" % (kind, item.get("id", "?")))

    if offenders:
        sys.stderr.write(
            "\n"
            "Production blocked: Resources contains demo proof content. "
            "Replace or verify all demo results/testimonials before deployment.\n"
            "\n"
            "  Source of truth: 127.0.0.1_8081/dl/resources-src/proof.demo.json\n"
            "  Items still flagged isDemo=true (%d):\n" % len(offenders)
        )
        for o in offenders:
            sys.stderr.write("    - %s\n" % o)
        sys.stderr.write(
            "\n"
            "  To publish: replace each figure and quote with a verified value,\n"
            "  set \"isDemo\": false on the items you have verified, and rebuild.\n"
            "  Do not remove this guard to get a passing build.\n\n"
        )
        sys.exit(1)


# ------------------------------------------------------------------
#  Page shell
# ------------------------------------------------------------------
def esc(s):
    return html.escape(s, quote=True)


def up_for(depth):
    return "../" * depth


def breadcrumb_ld(items):
    return {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": i + 1,
                "name": name,
                "item": ORIGIN + path,
            }
            for i, (name, path) in enumerate(items)
        ],
    }


def organization_ld():
    """
    One Organization entity for the whole Resources section, referenced by
    @id everywhere else. Only fields that are true and verifiable are
    included: no invented social profiles, awards, phone numbers or
    addresses.
    """
    return {
        "@type": "Organization",
        "@id": ORG_ID,
        "name": "Answered Labs",
        "url": ORIGIN + "/",
        "description": (
            "Answered Labs is an answer engine optimization agency. We help "
            "businesses become easier to find, understand and recommend across "
            "search and AI-driven discovery."
        ),
        "founder": [
            {"@type": "Person", "name": AUTHORS["taliesin"]["name"],
             "url": ORIGIN + "/about#" + AUTHORS["taliesin"]["anchor"]},
            {"@type": "Person", "name": AUTHORS["emerson"]["name"],
             "url": ORIGIN + "/about#" + AUTHORS["emerson"]["anchor"]},
        ],
        "knowsAbout": [
            "Answer Engine Optimization",
            "AEO",
            "Search Engine Optimization",
            "AI search visibility",
            "Local business discovery",
        ],
    }


def website_ld():
    return {
        "@type": "WebSite",
        "@id": SITE_ID,
        "url": ORIGIN + "/",
        "name": "Answered Labs",
        "publisher": {"@id": ORG_ID},
        "inLanguage": "en",
    }


def render_page(
    slug,
    depth,
    title,
    description,
    body,
    schema_nodes,
    og_type="website",
    og_image=None,
    extra_head="",
):
    """
    Assembles one standalone Resources document.

    slug     canonical path without a leading slash, e.g. "work"
    depth    URL depth: 0 for /work, 1 for /insights/<slug>
    body     the <main> contents
    """
    canonical = ORIGIN + "/" + slug
    og_image = og_image or ("/og/" + slug.replace("/", "-") + ".png")
    og_image_abs = ORIGIN + og_image

    # One Organization and one WebSite entity, referenced by @id from every
    # page-level node, rather than a fresh copy per page.
    nodes = [organization_ld(), website_ld()] + list(schema_nodes)
    graph = {"@context": "https://schema.org", "@graph": nodes}
    ld = json.dumps(graph, ensure_ascii=False, indent=2)

    chrome = open(os.path.join(DL, "parts", "chrome.frag"), encoding="utf-8").read()

    # A development-only marker. It is never written into a production
    # build, so it can never reach the public site.
    devbadge = ""
    if not is_production():
        devbadge = '<div class="alr-devbadge" aria-hidden="true">Local preview</div>'

    return """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="canonical" href="{canonical}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta property="og:type" content="{og_type}">
<meta property="og:site_name" content="Answered Labs">
<meta property="og:locale" content="en_GB">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="{og_image_abs}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{description}">
<meta name="twitter:image" content="{og_image_abs}">
<link rel="icon" href="{favicon}" sizes="32x32" type="image/x-icon">
<link rel="stylesheet" href="{font_css}">
<link rel="stylesheet" href="{self}/theme.css">
{extra_head}<script type="application/ld+json">
{ld}
</script>
</head>
<body class="alr" data-aeo-keep="1">
<a class="alr-skip" href="#alr-main">Skip to content</a>
<div class="alr-hdr-sticky">
  <header class="alr-hdr">
    <div class="alr-hdr-inner">
      <nav aria-label="Primary"></nav>
    </div>
  </header>
</div>
<main id="alr-main">
{body}
</main>
<footer></footer>
{devbadge}
{chrome}
<script src="{self}/resources.js" defer></script>
</body>
</html>
""".format(
        title=esc(title),
        description=esc(description),
        canonical=canonical,
        og_type=og_type,
        og_image_abs=og_image_abs,
        favicon=FAVICON,
        font_css=FONT_CSS,
        self=SELF,
        extra_head=extra_head,
        ld=ld,
        body=body,
        chrome=chrome,
        devbadge=devbadge,
    )


def write(path, content):
    full = os.path.join(DL, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)
    print("wrote %s (%d bytes)" % (path, len(content)))


# ------------------------------------------------------------------
#  Build
# ------------------------------------------------------------------
def main():
    proof = load_proof()
    assert_no_demo_proof(proof)

    # Imported here so the guard runs before any page content is touched.
    import content_work
    import content_about
    import content_research
    import content_insights
    import content_articles

    pages = []
    pages.append(content_work.build(proof))
    pages.append(content_about.build())
    pages.append(content_research.build())
    pages.append(content_insights.build(content_articles.ARTICLES))
    for art in content_articles.ARTICLES:
        pages.append(content_articles.build(art))

    for p in pages:
        write(p["file"], render_page(**p["page"]))

    write_sitemap(pages)
    write_robots()

    if not is_production():
        print(
            "\nNote: demo proof is active (%d results, %d testimonials). "
            "A production build is blocked until these are verified."
            % (len(proof["results"]), len(proof["testimonials"]))
        )


COMMERCIAL_URLS = [
    ("/", "1.0"),
    ("/pricing", "0.9"),
    ("/contact", "0.9"),
    ("/book", "0.8"),
]


def write_sitemap(pages):
    """
    The repository has no sitemap today. This creates one covering both the
    existing commercial routes and the new Resources routes. Templates,
    demo case studies, draft research, API routes and .html duplicates of
    the canonical URLs are all excluded.
    """
    urls = [(ORIGIN + path, prio, None) for path, prio in COMMERCIAL_URLS]
    for p in pages:
        urls.append((ORIGIN + "/" + p["page"]["slug"], p.get("priority", "0.7"), p.get("modified")))

    parts = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for loc, prio, mod in urls:
        parts.append("  <url>")
        parts.append("    <loc>%s</loc>" % loc)
        if mod:
            parts.append("    <lastmod>%s</lastmod>" % mod)
        parts.append("    <priority>%s</priority>" % prio)
        parts.append("  </url>")
    parts.append("</urlset>")
    body = "\n".join(parts) + "\n"

    with open(os.path.join(REPO, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write(body)
    print("wrote sitemap.xml (%d urls)" % len(urls))


def write_robots():
    body = (
        "User-agent: *\n"
        "Allow: /\n"
        "\n"
        "Sitemap: %s/sitemap.xml\n" % ORIGIN
    )
    with open(os.path.join(REPO, "robots.txt"), "w", encoding="utf-8") as f:
        f.write(body)
    print("wrote robots.txt")


if __name__ == "__main__":
    sys.path.insert(0, HERE)
    main()
