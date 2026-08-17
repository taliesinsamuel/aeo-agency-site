"""/insights — the editorial index."""

from components import (
    RESEARCH, WORK, L, cta, esc, hero, xlinks,
)
from content_articles import AUTHOR_META, cover, human_date

UP = ""
ORIGIN = "https://answeredlabs.com"

# Kept deliberately small. A topic only exists once something has been
# written under it.
TOPICS = ["AEO", "AI Search", "ChatGPT", "Local Search", "SEO", "Research"]


def featured(a):
    author = AUTHOR_META[a["author"]]
    return """<a class="alr-featured alr-rv" href="insights/{slug}.html">
    <div>
      <span class="alr-tag">{topic}</span>
      <h2 class="alr-h2" style="margin-top:16px">{title}</h2>
      <p class="alr-dek" style="font-size:17px;margin-top:16px">{dek}</p>
      <div class="alr-metaline" style="margin-top:22px">
        <span>{author}</span>
        <span class="sep">&middot;</span>
        <time datetime="{published}">{published_h}</time>
        <span class="sep">&middot;</span>
        <span>{reading}</span>
      </div>
      <span class="alr-arrow" style="margin-top:22px">Read the article<i aria-hidden="true">&#8594;</i></span>
    </div>
    {cover}
  </a>""".format(
        slug=a["slug"],
        topic=esc(a["topic"]),
        title=esc(a["title"]),
        dek=esc(a["dek"]),
        author=esc(author["name"]),
        published=a["published"],
        published_h=human_date(a["published"]),
        reading=esc(a["reading"]),
        cover=cover(a),
    )


def item(a):
    author = AUTHOR_META[a["author"]]
    return """<a class="alr-item" href="insights/{slug}.html">
    {cover}
    <div>
      <span class="alr-tag">{topic}</span>
      <h3 class="alr-h3" style="margin-top:12px">{title}</h3>
      <p class="alr-body" style="margin-top:10px;font-size:15.5px">{dek}</p>
      <div class="alr-metaline" style="margin-top:14px;font-size:13px">
        <span>{author}</span>
        <span class="sep">&middot;</span>
        <time datetime="{published}">{published_h}</time>
        <span class="sep">&middot;</span>
        <span>{reading}</span>
      </div>
    </div>
    <span class="alr-arrow" aria-hidden="true"><i>&#8594;</i></span>
  </a>""".format(
        slug=a["slug"],
        cover=cover(a),
        topic=esc(a["topic"]),
        title=esc(a["title"]),
        dek=esc(a["dek"]),
        author=esc(author["name"]),
        published=a["published"],
        published_h=human_date(a["published"]),
        reading=esc(a["reading"]),
    )


def topics():
    chips = "".join(
        '<span class="alr-tag" style="height:28px;padding:0 12px;font-size:11.5px">%s</span>' % esc(t)
        for t in TOPICS
    )
    return """<section class="alr-section alr-section--tight alr-section--paper">
  <div class="alr-wrap">
    <p class="alr-eyebrow">Topics</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">{chips}</div>
    <p class="alr-small" style="margin-top:16px;max-width:52ch">We are keeping the taxonomy small until there is enough written to justify more of it. Everything published so far sits under one of these.</p>
  </div>
</section>""".format(chips=chips)


def build(articles):
    lead = articles[0]
    rest = articles[1:]

    body = (
        hero(
            "Insights",
            "How AI is changing the way businesses get&nbsp;found.",
            "Analysis, explanations and practical thinking on AEO, AI search, SEO and the systems shaping online discovery.",
        )
        + """<section class="alr-section alr-section--white" style="padding-top:0">
  <div class="alr-wrap">
    <p class="alr-eyebrow">Featured</p>
    %s
  </div>
</section>"""
        % featured(lead)
        + """<section class="alr-section alr-section--white" style="padding-top:clamp(32px,4vw,56px)">
  <div class="alr-wrap">
    <p class="alr-eyebrow">Latest</p>
    <div class="alr-list">%s</div>
  </div>
</section>"""
        % "".join(item(a) for a in rest)
        + topics()
        + """<section class="alr-section alr-section--white">
  <div class="alr-wrap">
    <div style="max-width:50ch;margin-bottom:26px">
      <p class="alr-eyebrow">Elsewhere</p>
      <h2 class="alr-h2">Beyond the writing</h2>
    </div>
    %s
  </div>
</section>"""
        % xlinks(
            [
                ("Research", "The studies behind the thinking, and the method each one declares.", L(UP, RESEARCH)),
                ("Work", "What we measure for clients, and what the numbers mean.", L(UP, WORK)),
            ]
        )
        + cta(
            UP,
            "Want this applied to your business?",
            "Start with the audit. It shows you the questions, the current answers and what we think is getting in the way.",
        )
    )

    schema = [
        {
            "@type": "CollectionPage",
            "@id": ORIGIN + "/insights#webpage",
            "url": ORIGIN + "/insights",
            "name": "Insights: AEO, AI search and online discovery",
            "description": "Analysis and practical thinking on answer engine optimization, AI search, SEO and how businesses get discovered.",
            "isPartOf": {"@id": ORIGIN + "/#website"},
            "publisher": {"@id": ORIGIN + "/#organization"},
        },
        {
            "@type": "ItemList",
            "@id": ORIGIN + "/insights#list",
            "itemListOrder": "https://schema.org/ItemListOrderDescending",
            "numberOfItems": len(articles),
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": i + 1,
                    "url": "%s/insights/%s" % (ORIGIN, a["slug"]),
                    "name": a["title"],
                }
                for i, a in enumerate(articles)
            ],
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": ORIGIN + "/"},
                {"@type": "ListItem", "position": 2, "name": "Insights", "item": ORIGIN + "/insights"},
            ],
        },
    ]

    return {
        "file": "insights.html",
        "priority": "0.9",
        "page": {
            "slug": "insights",
            "depth": 0,
            "title": "Insights: AEO, AI search and online discovery | Answered Labs",
            "description": "Analysis, explanations and practical thinking on answer engine optimization, AI search, SEO and the systems shaping how businesses get found.",
            "body": body,
            "schema_nodes": schema,
        },
    }
