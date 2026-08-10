#!/usr/bin/env python3
"""Central Answered Labs SEO / AEO configuration and HTML head injection.

Used by build_hero.py. Canonical production host: https://answeredlabs.com
Never emit localhost / 127.0.0.1 in production metadata.
"""
from __future__ import annotations

import html as html_lib
import json
import os
import re
from typing import Any

CANONICAL_ORIGIN = "https://answeredlabs.com"
ORG_ID = CANONICAL_ORIGIN + "/#organization"
SITE_ID = CANONICAL_ORIGIN + "/#website"
LOGO_URL = CANONICAL_ORIGIN + "/assets/answered-labs-website-logo-black.svg"
OG_IMAGE = CANONICAL_ORIGIN + "/og-image.png"
OG_IMAGE_WIDTH = 1200
OG_IMAGE_HEIGHT = 630
CONTACT_EMAIL = "hello@answeredlabs.com"
INDEXNOW_KEY = "a8f3c2e91b7d4e0f6a5c8b2d9e1f4a70"
ORG_DESCRIPTION = (
    "Answered Labs is an answer engine optimization agency for local businesses. "
    "We improve websites, content, structured data and authority so AI search systems "
    "and search engines can understand, cite and recommend the business."
)

PAGES: dict[str, dict[str, Any]] = {
    "home": {
        "path": "/",
        "title": "Answer Engine Optimization Agency for Local Businesses | Answered Labs",
        "description": (
            "Answered Labs is an answer engine optimization agency for local businesses, "
            "focused on improving visibility across AI search and traditional search."
        ),
        "og_type": "website",
    },
    "pricing": {
        "path": "/pricing",
        "title": "AEO Pricing & Answer Engine Optimization Plans | Answered Labs",
        "description": (
            "Explore Answered Labs AEO pricing and plans for AI visibility, "
            "site structure, content, authority and SEO."
        ),
        "og_type": "website",
        "file": "pricing.html",
    },
    "free_audit": {
        "path": "/free-audit",
        "title": "Free AEO Audit & AI Visibility Check | Answered Labs",
        "description": (
            "Request a free AEO and AI visibility audit from Answered Labs and identify "
            "opportunities to improve how AI systems understand and recommend your business."
        ),
        "og_type": "website",
        "file": "contact.html",
    },
    "book": {
        "path": "/book",
        "title": "Book an AEO Strategy Call | Answered Labs",
        "description": (
            "Book an AEO strategy call with Answered Labs to discuss AI visibility, "
            "answer engine optimization and SEO."
        ),
        "og_type": "website",
        "file": "book.html",
    },
    "privacy": {
        "path": "/privacy",
        "title": "Privacy Policy | Answered Labs",
        "description": "Read the Answered Labs Privacy Policy.",
        "og_type": "website",
        "file": "privacy.html",
    },
    "terms": {
        "path": "/terms",
        "title": "Terms of Use | Answered Labs",
        "description": "Read the Answered Labs Terms of Use.",
        "og_type": "website",
        "file": "terms.html",
    },
    "notfound": {
        "path": "/404",
        "title": "Page Not Found | Answered Labs",
        "description": "The page you are looking for does not exist.",
        "og_type": "website",
        "file": "404.html",
        "robots": "noindex, nofollow",
    },
}

# Exact visible FAQ copy from parts/pricing.frag (schema must match on-page text).
PRICING_FAQ = [
    {
        "q": "What is answer engine optimization (AEO)?",
        "a": (
            "Answer engine optimization, or AEO, is the work of making your business easier "
            "for AI search tools to find, understand, cite and recommend. We improve your "
            "website, content and wider online presence so your business has a stronger chance "
            "of appearing when customers ask AI who to choose."
        ),
    },
    {
        "q": "Is AEO the same as GEO or AI SEO?",
        "a": (
            "Broadly, yes. AEO, GEO and AI SEO are different names for overlapping work focused "
            "on visibility in AI-generated search and answers. We use AEO because the outcome "
            "is simple: helping your business become one of the answers customers see."
        ),
    },
    {
        "q": "How is AEO different from SEO?",
        "a": (
            "SEO focuses on visibility in traditional search results, while AEO focuses on "
            "visibility in AI-generated answers and recommendations. The two share many of the "
            "same foundations, which is why Answered Labs combines SEO and AEO rather than "
            "treating them as separate services."
        ),
    },
    {
        "q": "Does Answered Labs include SEO?",
        "a": (
            "Yes. SEO is built into Growth, Scale and Custom. We work on crawlability, indexing, "
            "technical issues, schema, internal linking, service and location pages, content and "
            "local search foundations alongside AI visibility."
        ),
    },
    {
        "q": "Why does AEO matter for local service businesses?",
        "a": (
            "Customers are increasingly using AI to compare providers, find local businesses and "
            "decide who to contact. If your business is missing from those answers, a competitor "
            "can enter the customer\u2019s shortlist before they ever reach your website."
        ),
    },
    {
        "q": "Which AI platforms do you optimize for?",
        "a": (
            "We track major answer engines and AI search experiences including ChatGPT, Gemini, "
            "Claude, Perplexity and Google AI search. The exact mix can change as platforms and "
            "customer behaviour change."
        ),
    },
    {
        "q": "How do you measure AI visibility?",
        "a": (
            "We test a defined set of real buyer questions across major AI platforms and track "
            "how often your business appears, which competitors appear and which sources influence "
            "the answers. We combine that with SEO rankings, organic traffic and conversion data "
            "where available so we can measure progress over time rather than relying on a single "
            "screenshot."
        ),
    },
    {
        "q": "What do you actually change?",
        "a": (
            "We change whatever is most likely to be limiting your visibility. That can include "
            "technical SEO, schema, site structure, internal linking, service and location pages, "
            "answer-ready content, Google Business Profile, reviews, citations, business listings, "
            "backlinks and third-party authority."
        ),
    },
    {
        "q": "How long does AEO take to work?",
        "a": (
            "Most engagements use the first 90 days to establish the baseline, fix the foundations, "
            "improve priority pages and start building authority. Some movement can happen sooner, "
            "but meaningful gains depend on your market, competition and the state of your "
            "existing site."
        ),
    },
    {
        "q": "Can you guarantee that ChatGPT or Google will recommend my business?",
        "a": (
            "No. No agency controls what an AI system or search engine chooses to surface. We can "
            "measure where you are missing, improve the signals those systems rely on and keep "
            "testing what moves your visibility."
        ),
    },
    {
        "q": "Do I need a new website?",
        "a": (
            "Usually not. We can work with most existing websites. If the site itself is holding "
            "back search visibility, conversion or our ability to make the right changes, we will "
            "tell you and recommend the cleanest way forward."
        ),
    },
    {
        "q": "Can Answered Labs build a new website for me?",
        "a": (
            "Yes. Custom engagements can include a new website designed and built from scratch, "
            "or a complete rebuild of an existing site. We build the site around search visibility, "
            "conversion and the needs of your business rather than treating it as a separate "
            "design exercise."
        ),
    },
    {
        "q": "Can you work alongside my existing SEO or web agency?",
        "a": (
            "Yes. We can work alongside an existing SEO, paid media, web or internal team. We "
            "agree responsibilities before work starts so there is no duplicated work or "
            "confusion over who is handling what."
        ),
    },
    {
        "q": "Do you work with multi-location businesses?",
        "a": (
            "Yes. Scale and Custom can cover multiple services, cities, locations or brands, with "
            "separate search and AI visibility work where needed. Larger programs are scoped "
            "around the number of markets and the amount of execution required."
        ),
    },
    {
        "q": "What does authority building mean?",
        "a": (
            "Authority building is the work of strengthening the trusted signals about your "
            "business outside your own website. Depending on the market, that can include "
            "reviews, reputable directories, industry sites, earned media, backlinks and other "
            "credible third-party mentions."
        ),
    },
    {
        "q": "Do you use AI to create content?",
        "a": (
            "We use AI where it makes the work faster, but we do not mass-publish generic AI "
            "content. Every page needs to be accurate, useful, specific to your business and "
            "good enough that a real customer would want to read it."
        ),
    },
    {
        "q": "What\u2019s the difference between Growth and Scale?",
        "a": (
            "Growth gives you the complete SEO and AEO foundation plus consistent monthly "
            "execution. Scale increases the amount of content, market coverage, authority work "
            "and monitoring for businesses competing across more services, locations or "
            "search terms."
        ),
    },
    {
        "q": "How much does Answered Labs cost?",
        "a": (
            "Growth is $4,995 per month and Scale is $7,995 per month. Custom is scoped around "
            "the work required, so there is no fixed Custom price."
        ),
    },
    {
        "q": "How are engagements structured?",
        "a": (
            "Every engagement is covered by a service agreement that sets out the scope, price "
            "and term before we start. Month-to-month terms are available. Larger Custom "
            "projects may use a different structure depending on the work involved."
        ),
    },
    {
        "q": "Who is Answered Labs best for?",
        "a": (
            "Answered Labs is built for established US service businesses where search drives "
            "high-value customers and the owner wants the work handled for them. We are "
            "especially well suited to local and multi-location businesses competing in home "
            "services, legal, dental, healthcare and other high-intent service categories."
        ),
    },
    {
        "q": "What do you need from us to get started?",
        "a": (
            "Usually we need access to your website and analytics, your core services and "
            "locations, and a short list of the competitors you care about. If you use Google "
            "Search Console or Google Business Profile, access to those helps too. We handle "
            "the rest."
        ),
    },
    {
        "q": "Is there one trick that makes AI recommend a business?",
        "a": (
            "No. AI visibility comes from a combination of strong search foundations, clear and "
            "useful content, accurate business information and credible signals across the wider "
            "web. We focus on improving that whole system rather than selling a single "
            "technical trick."
        ),
    },
]

# Service names/descriptions mirror visible homepage card copy.
SERVICES = [
    {
        "id": CANONICAL_ORIGIN + "/#service-ai-visibility",
        "name": "Understand how often AI mentions you",
        "description": (
            "We ask AI the questions your customers ask, hundreds of times a month, and count "
            "how often your name comes back."
        ),
    },
    {
        "id": CANONICAL_ORIGIN + "/#service-site-structure",
        "name": "Make your site easy for AI to read",
        "description": (
            "We structure your site with schema so AI can clearly read your services, "
            "locations and hours."
        ),
    },
    {
        "id": CANONICAL_ORIGIN + "/#service-content",
        "name": "Create content that AI quotes",
        "description": (
            "We write the pages AI pulls from, and cites, when it answers your customers\u2019 questions."
        ),
    },
    {
        "id": CANONICAL_ORIGIN + "/#service-authority",
        "name": "Show up in the sources AI checks",
        "description": (
            "We build the reviews, citations and mentions AI looks at before recommending you."
        ),
    },
]


def esc(s: str) -> str:
    return html_lib.escape(s, quote=True)


def abs_url(path: str) -> str:
    if path.startswith("http://") or path.startswith("https://"):
        return path
    if not path.startswith("/"):
        path = "/" + path
    if path != "/" and path.endswith("/"):
        path = path.rstrip("/")
    return CANONICAL_ORIGIN + path


def organization_schema() -> dict[str, Any]:
    return {
        "@type": "Organization",
        "@id": ORG_ID,
        "name": "Answered Labs",
        "url": CANONICAL_ORIGIN + "/",
        "logo": {"@type": "ImageObject", "url": LOGO_URL},
        "email": CONTACT_EMAIL,
        "description": ORG_DESCRIPTION,
    }


def website_schema() -> dict[str, Any]:
    return {
        "@type": "WebSite",
        "@id": SITE_ID,
        "name": "Answered Labs",
        "url": CANONICAL_ORIGIN + "/",
        "publisher": {"@id": ORG_ID},
        "inLanguage": "en-US",
        "description": ORG_DESCRIPTION,
    }


def webpage_schema(page_key: str) -> dict[str, Any]:
    page = PAGES[page_key]
    url = abs_url(page["path"])
    return {
        "@type": "WebPage",
        "@id": url + "#webpage",
        "url": url,
        "name": page["title"],
        "description": page["description"],
        "isPartOf": {"@id": SITE_ID},
        "publisher": {"@id": ORG_ID},
        "inLanguage": "en-US",
    }


def services_schema() -> dict[str, Any]:
    return {
        "@type": "ItemList",
        "@id": CANONICAL_ORIGIN + "/#services",
        "name": "Answer Engine Optimization services",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": i + 1,
                "item": {
                    "@type": "Service",
                    "@id": svc["id"],
                    "name": svc["name"],
                    "description": svc["description"],
                    "provider": {"@id": ORG_ID},
                    "serviceType": "Answer Engine Optimization",
                    "areaServed": "US",
                    "url": CANONICAL_ORIGIN + "/",
                },
            }
            for i, svc in enumerate(SERVICES)
        ],
    }


def faq_schema() -> dict[str, Any]:
    return {
        "@type": "FAQPage",
        "@id": abs_url("/pricing") + "#faq",
        "mainEntity": [
            {
                "@type": "Question",
                "name": item["q"],
                "acceptedAnswer": {"@type": "Answer", "text": item["a"]},
            }
            for item in PRICING_FAQ
        ],
    }


def offers_schema() -> dict[str, Any]:
    """Visible Pricing page plans only. Amounts and blurbs match on-page copy."""
    return {
        "@type": "OfferCatalog",
        "@id": abs_url("/pricing") + "#offers",
        "name": "Answered Labs AEO pricing plans",
        "itemListElement": [
            {
                "@type": "Offer",
                "name": "Growth",
                "description": "SEO and AI visibility, handled together.",
                "price": "4995",
                "priceCurrency": "USD",
                "url": abs_url("/pricing"),
                "seller": {"@id": ORG_ID},
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "4995",
                    "priceCurrency": "USD",
                    "unitText": "MONTH",
                },
            },
            {
                "@type": "Offer",
                "name": "Scale",
                "description": (
                    "More coverage and faster execution for competitive or multi-location businesses."
                ),
                "price": "7995",
                "priceCurrency": "USD",
                "url": abs_url("/pricing"),
                "seller": {"@id": ORG_ID},
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "7995",
                    "priceCurrency": "USD",
                    "unitText": "MONTH",
                },
            },
            {
                "@type": "Offer",
                "name": "Custom",
                "description": "Built around your business, market and growth goals.",
                "url": abs_url("/pricing"),
                "seller": {"@id": ORG_ID},
            },
        ],
    }


def audit_service_schema() -> dict[str, Any]:
    return {
        "@type": "Service",
        "@id": abs_url("/free-audit") + "#service",
        "name": "Free AEO & AI Visibility Audit",
        "description": (
            "A free answer engine optimization and AI visibility audit covering mention rate, "
            "competitor comparison, site readability and a walkthrough call."
        ),
        "provider": {"@id": ORG_ID},
        "serviceType": "Answer Engine Optimization audit",
        "url": abs_url("/free-audit"),
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free AEO and AI visibility audit for local businesses.",
            "url": abs_url("/free-audit"),
        },
    }


def build_jsonld(page_key: str) -> list[dict[str, Any]]:
    graph: list[dict[str, Any]] = [
        organization_schema(),
        website_schema(),
        webpage_schema(page_key),
    ]
    if page_key == "home":
        graph.append(services_schema())
    if page_key == "pricing":
        graph.append(faq_schema())
        graph.append(offers_schema())
    if page_key == "free_audit":
        graph.append(audit_service_schema())
    return graph


def head_block(page_key: str) -> str:
    page = PAGES[page_key]
    title = page["title"]
    desc = page["description"]
    url = abs_url(page["path"])
    og_type = page.get("og_type", "website")
    robots = page.get("robots")

    parts = [
        f"<title>{esc(title)}</title>",
        f'<meta name="description" content="{esc(desc)}">',
        f'<link rel="canonical" href="{esc(url)}">',
        '<meta name="theme-color" content="#1c1d1f">',
        f'<meta property="og:title" content="{esc(title)}">',
        f'<meta property="og:description" content="{esc(desc)}">',
        f'<meta property="og:type" content="{esc(og_type)}">',
        f'<meta property="og:url" content="{esc(url)}">',
        '<meta property="og:site_name" content="Answered Labs">',
        '<meta property="og:locale" content="en_US">',
        f'<meta property="og:image" content="{esc(OG_IMAGE)}">',
        f'<meta property="og:image:secure_url" content="{esc(OG_IMAGE)}">',
        f'<meta property="og:image:width" content="{OG_IMAGE_WIDTH}">',
        f'<meta property="og:image:height" content="{OG_IMAGE_HEIGHT}">',
        '<meta property="og:image:alt" content="Answered Labs: Be the business AI recommends.">',
        '<meta name="twitter:card" content="summary_large_image">',
        f'<meta name="twitter:title" content="{esc(title)}">',
        f'<meta name="twitter:description" content="{esc(desc)}">',
        f'<meta name="twitter:image" content="{esc(OG_IMAGE)}">',
        '<link rel="apple-touch-icon" href="/apple-touch-icon.png">',
        '<link rel="manifest" href="/site.webmanifest">',
    ]
    if robots:
        parts.append(f'<meta name="robots" content="{esc(robots)}">')
        parts.append(f'<meta name="googlebot" content="{esc(robots)}">')

    if page_key != "notfound":
        ld = {"@context": "https://schema.org", "@graph": build_jsonld(page_key)}
        parts.append(
            '<script type="application/ld+json">'
            + json.dumps(ld, ensure_ascii=True, separators=(",", ":"))
            + "</script>"
        )
    return "\n".join(parts)


_ATTIO_META_RE = re.compile(
    r'<meta\b[^>]*(?:name|property)=["\'](?:description|robots|googlebot|theme-color|og:[^"\']+|twitter:[^"\']+)["\'][^>]*>\s*',
    re.I,
)
_TITLE_RE = re.compile(r"<title>.*?</title>\s*", re.I | re.S)
_CANONICAL_RE = re.compile(r'<link\b[^>]*rel=["\']canonical["\'][^>]*>\s*', re.I)
_APPLE_RE = re.compile(r'<link\b[^>]*rel=["\']apple-touch-icon["\'][^>]*>\s*', re.I)
_MANIFEST_RE = re.compile(r'<link\b[^>]*rel=["\']manifest["\'][^>]*>\s*', re.I)
_ATTIO_LD_ID_RE = re.compile(
    r'<script\b[^>]*id=["\']homepage-(?:organization|website|software-app)["\'][^>]*>.*?</script>\s*',
    re.I | re.S,
)
_ATTIO_LD_NAME_RE = re.compile(
    r'<script\b[^>]*type=["\']application/ld\+json["\'][^>]*>\{[^<]*?"name"\s*:\s*"Attio"[^<]*?\}</script>\s*',
    re.I | re.S,
)
_IMAGE_PRELOAD_RE = re.compile(
    r'<link\b(?=[^>]*rel=["\']preload["\'])(?=[^>]*as=["\']image["\'])[^>]*>\s*',
    re.I,
)
_AL_LD_RE = re.compile(
    r'<script\b[^>]*type=["\']application/ld\+json["\'][^>]*>\{[^<]*?"@graph"[^<]*?answeredlabs\.com[^<]*?\}</script>\s*',
    re.I | re.S,
)


def strip_attio_seo(html: str) -> str:
    html = _TITLE_RE.sub("", html, count=1)
    html = _ATTIO_META_RE.sub("", html)
    html = _CANONICAL_RE.sub("", html)
    html = _APPLE_RE.sub("", html)
    html = _MANIFEST_RE.sub("", html)
    html = _ATTIO_LD_ID_RE.sub("", html)
    html = _ATTIO_LD_NAME_RE.sub("", html)
    html = _AL_LD_RE.sub("", html)
    # Drop heavy Attio image preloads that waste bandwidth and confuse LCP.
    html = _IMAGE_PRELOAD_RE.sub("", html)
    return html


def ensure_lang(html: str) -> str:
    def repl(m: re.Match[str]) -> str:
        tag = m.group(0)
        if re.search(r"\blang=", tag, flags=re.I):
            return re.sub(r'\blang=(["\'])[^"\']*\1', 'lang="en"', tag, count=1, flags=re.I)
        return tag[:-1] + ' lang="en">'

    return re.sub(r"<html\b[^>]*>", repl, html, count=1, flags=re.I)


def apply_page_seo(html: str, page_key: str) -> str:
    """Replace Attio head SEO with Answered Labs production metadata + JSON-LD."""
    html = strip_attio_seo(html)
    html = ensure_lang(html)
    block = head_block(page_key)
    if re.search(r"<head\b[^>]*>", html, flags=re.I):
        # Use a callable replacer so JSON-LD "\uXXXX" sequences are not
        # interpreted as re.sub backslash escapes.
        html = re.sub(
            r"(<head\b[^>]*>)",
            lambda m: m.group(1) + "\n" + block + "\n",
            html,
            count=1,
            flags=re.I,
        )
    return html


def scrub_attio_external_links(html: str) -> str:
    """Point leftover Attio scrape hosts at the homepage so crawlers avoid 404 traps."""
    return re.sub(
        r'href=(["\'])https?://(?:[\w-]+\.)*(?:attio\.com|eSOZMHKB8k26\.com|9rWGDM7ILjb3\.com)[^"\']*\1',
        r'href=\1/\1',
        html,
        flags=re.I,
    )


def neutralize_attio_shell_copy(html: str) -> str:
    """Neutralize leftover Attio scrape phrases that are not painted but still crawlable.

    These strings sit in zero-size / replaced shell nodes. Replacing them does not
    change the approved Answered Labs UI, and prevents Attio copy from polluting
    snippets and AI retrieval.
    """
    pairs = [
        (r"Welcome to agentic revenue\.?", "Answered Labs"),
        (
            r"Attio is the CRM that builds pipeline, advances deals, and grows accounts around the clock\.?",
            "Answered Labs helps local businesses get recommended by AI search.",
        ),
        (
            r"The system for revenue teams to build pipeline, accelerate deals, and grow accounts around the clock\.?",
            ORG_DESCRIPTION,
        ),
        (r"Attio:\s*The CRM for agentic revenue", "Answered Labs"),
        (r"Agentic revenue runs on Attio\.?", "Be the business AI recommends."),
        (r"Build anything on Attio\.?", "Build stronger SEO foundations."),
        (r"Trusted by 30,000\+ customers\. From first agent to enterprise scale\.", ORG_DESCRIPTION),
    ]
    for pat, repl in pairs:
        html = re.sub(pat, repl, html, flags=re.I)
    return html


# Matches chrome.frag footer markup so JS skip (data-aeo=1) keeps visual parity.
CRAWLABLE_FOOTER = (
    '<footer class="aeo-foot" data-aeo="1" aria-label="Site footer">'
    '<div class="aeo-foot-glow"></div><div class="aeo-foot-inner">'
    '<div class="aeo-foot-top">'
    '<div class="aeo-foot-brand">'
    '<a href="/" aria-label="Answered Labs home">'
    '<img class="aeo-logo" src="/assets/answered-labs-website-logo-white.svg" '
    'alt="Answered Labs" width="242" height="26" decoding="async"></a>'
    "<p>The answer engine optimization agency for local businesses. "
    "Be the business AI recommends.</p></div>"
    '<div class="aeo-foot-cols">'
    '<div class="aeo-foot-col"><h4>What we do</h4>'
    '<a href="/#visibility">AI visibility tracking</a>'
    '<a href="/#site-structure">Site structure &amp; schema</a>'
    '<a href="/#content">Content AI quotes</a>'
    '<a href="/#authority">Reviews &amp; citations</a></div>'
    '<div class="aeo-foot-col"><h4>Company</h4>'
    '<a href="/pricing">Pricing</a>'
    '<a href="/free-audit">Free audit</a>'
    '<a href="/book">Book a call</a>'
    '<a href="/privacy">Privacy</a>'
    '<a href="/terms">Terms</a></div>'
    '<div class="aeo-foot-col"><h4>Contact</h4>'
    f'<a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>'
    '<a href="/free-audit">Get in touch</a></div>'
    "</div></div>"
    '<div class="aeo-foot-bottom"><span>&#169; 2026 Answered Labs. All rights reserved.</span>'
    '<span><a href="/privacy">Privacy</a> &#183; <a href="/terms">Terms</a></span></div>'
    "</div></footer>"
)


def apply_body_seo_cleanup(html: str) -> str:
    html = scrub_attio_external_links(html)
    html = neutralize_attio_shell_copy(html)
    new_html, n = re.subn(
        r"<footer\b[^>]*>.*?</footer>",
        CRAWLABLE_FOOTER,
        html,
        count=1,
        flags=re.I | re.S,
    )
    if n:
        html = new_html
    return html


def indexable_urls() -> list[str]:
    return [
        abs_url(PAGES[k]["path"])
        for k in ("home", "pricing", "free_audit", "book", "privacy", "terms")
    ]


def write_site_files(repo_root: str) -> None:
    """Write robots.txt, sitemap.xml, llms.txt, IndexNow key, web manifest."""
    robots = """# Answered Labs - https://answeredlabs.com
User-agent: *
Allow: /

# Keep API endpoints out of content discovery
Disallow: /api/

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://answeredlabs.com/sitemap.xml
"""
    with open(os.path.join(repo_root, "robots.txt"), "w", encoding="utf-8") as f:
        f.write(robots)

    urls = indexable_urls()
    sitemap_parts = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for u in urls:
        sitemap_parts.append("  <url>")
        sitemap_parts.append(f"    <loc>{esc(u)}</loc>")
        sitemap_parts.append("  </url>")
    sitemap_parts.append("</urlset>")
    sitemap_parts.append("")
    with open(os.path.join(repo_root, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write("\n".join(sitemap_parts))

    llms = f"""# Answered Labs
> Answer Engine Optimization (AEO) agency for local businesses.

Answered Labs helps local businesses become understood, cited, surfaced and recommended by AI search and answer systems, including ChatGPT, Gemini, Perplexity, Claude and traditional search engines.

## Canonical site
- Home: {CANONICAL_ORIGIN}/
- Pricing: {CANONICAL_ORIGIN}/pricing
- Free AEO audit: {CANONICAL_ORIGIN}/free-audit
- Book an AEO strategy call: {CANONICAL_ORIGIN}/book
- Privacy Policy: {CANONICAL_ORIGIN}/privacy
- Terms of Use: {CANONICAL_ORIGIN}/terms

## What we do
- AI visibility tracking across major answer engines
- Site structure and schema for machine understanding
- Content optimization for AI citations and quotes
- Reviews, citations and third-party authority
- SEO foundations that support AEO

## Contact
- Email: {CONTACT_EMAIL}
- Free audit: {CANONICAL_ORIGIN}/free-audit
"""
    with open(os.path.join(repo_root, "llms.txt"), "w", encoding="utf-8") as f:
        f.write(llms)

    with open(os.path.join(repo_root, INDEXNOW_KEY + ".txt"), "w", encoding="utf-8") as f:
        f.write(INDEXNOW_KEY)

    manifest = {
        "name": "Answered Labs",
        "short_name": "Answered Labs",
        "description": ORG_DESCRIPTION,
        "start_url": "/",
        "scope": "/",
        "display": "browser",
        "background_color": "#ffffff",
        "theme_color": "#1c1d1f",
        "lang": "en-US",
        "icons": [
            {
                "src": "/favicon.svg",
                "sizes": "any",
                "type": "image/svg+xml",
                "purpose": "any",
            },
            {
                "src": "/apple-touch-icon.png",
                "sizes": "180x180",
                "type": "image/png",
            },
            {
                "src": "/favicon.ico",
                "sizes": "48x48",
                "type": "image/x-icon",
            },
        ],
    }
    with open(os.path.join(repo_root, "site.webmanifest"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)
        f.write("\n")
