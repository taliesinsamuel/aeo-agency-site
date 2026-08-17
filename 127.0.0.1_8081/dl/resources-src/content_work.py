"""/work — outcomes, measurement and the reasoning behind the numbers."""

import re

from components import (
    ABOUT, AUDIT, INSIGHTS, PRICING, RESEARCH, WORK, L, arrow, crumbs, cta, esc, hero, xlinks,
)

UP = ""  # rendered at /work


def _fmt_count(n, decimals):
    if decimals:
        return ("%." + str(int(decimals)) + "f") % float(n)
    return str(int(round(float(n))))


def _figure_parts(figure):
    m = re.match(r"^([^\d\-]*)(-?\d+(?:\.\d+)?)(.*)$", figure)
    if not m:
        return figure, "", "0", "", 0
    prefix, raw, suffix = m.group(1), m.group(2), m.group(3)
    decimals = len(raw.split(".")[1]) if "." in raw else 0
    return figure, prefix, raw, suffix, decimals


def figure_html(figure, extra_class=""):
    final, prefix, raw, suffix, decimals = _figure_parts(figure)
    return (
        '<span class="alr-figure {extra}" data-alr-anim>'
        '<span class="alr-figure-slot">'
        '<span class="alr-figure-sizer" aria-hidden="true">{final}</span>'
        '<span class="alr-figure-live" data-alr-figure data-to="{raw}" '
        'data-prefix="{prefix}" data-suffix="{suffix}" data-decimals="{decimals}">{final}</span>'
        "</span></span>"
    ).format(
        extra=esc(extra_class),
        final=esc(final),
        raw=esc(raw),
        prefix=esc(prefix),
        suffix=esc(suffix),
        decimals=decimals,
    )


def _label_html(b):
    label = b["label"]
    count = b.get("count")
    decimals = int(b.get("decimals") or 0)
    if count is None:
        return "%s: %s" % (esc(b["key"]), esc(label))
    formatted = _fmt_count(count, decimals)
    suffix = label[len(formatted):] if label.startswith(formatted) else label
    return (
        '%s: <span class="alr-count-n" data-alr-n data-to="%s" data-decimals="%s">%s</span>%s'
        % (esc(b["key"]), esc(str(count)), decimals, esc(formatted), esc(suffix))
    )


def bars(result):
    rows = []
    for i, b in enumerate(result.get("bars", [])):
        rows.append(
            """<div class="alr-bar-row">
          <span class="alr-bar-key">{key}</span>
          <span class="alr-bar-track"><span class="alr-bar-fill{mod}" style="--alw:{pct}%;--ald:{delay}ms"></span></span>
          <span class="alr-bar-val" data-alr-n data-to="{pct}" data-decimals="0" data-suffix="%">{pct}%</span>
        </div>""".format(
                key=esc(b["key"]),
                mod=" alr-bar-fill--now" if b.get("highlight") else "",
                pct=b["value"],
                delay=i * 90,
            )
        )
    labels = " ".join(
        '<span class="alr-small">%s</span>' % _label_html(b)
        for b in result.get("bars", [])
    )
    return (
        '<div class="alr-compare" data-alr-anim>'
        '<div class="alr-bars alr-rv">%s</div>'
        '<p class="alr-small" style="margin:12px 0 0;display:flex;flex-wrap:wrap;gap:4px 18px">%s</p>'
        "</div>"
        % ("".join(rows), labels)
    )


def lead_result(r):
    """The opening figure gets the most space on the page."""
    return """<section class="alr-section alr-section--white">
  <div class="alr-wrap">
    <div class="alr-stat-hero alr-rv">
      <div>
        <p class="alr-eyebrow alr-eyebrow--accent">{category}</p>
        {figure}
        <h2 class="alr-h3" style="margin-top:20px;max-width:22ch">{headline}</h2>
      </div>
      <div>
        <p class="alr-lead">{summary}</p>
        <p class="alr-body" style="margin-top:18px">{detail}</p>
        <div class="alr-result-notes" style="border-top-color:var(--al-rule)">
          <div>
            <p class="alr-note-label">What changed</p>
            <p class="alr-body" style="font-size:15.5px">{changed}</p>
          </div>
          <div>
            <p class="alr-note-label">How we measure it</p>
            <p class="alr-body" style="font-size:15.5px">{measure}</p>
          </div>
        </div>
        <div style="margin-top:28px">{bars}</div>
      </div>
    </div>
  </div>
</section>""".format(
        category=esc(r["category"]),
        figure=figure_html(r["figure"], "alr-figure--blue"),
        headline=esc(r["headline"]),
        summary=esc(r["summary"]),
        detail=esc(r["detail"]),
        changed=esc(r["whatChanged"]),
        measure=esc(r["howWeMeasure"]),
        bars=bars(r),
    )


def support_result(r):
    return """<article class="alr-result alr-rv">
    <div class="alr-result-head">
      <div>
        <p class="alr-eyebrow alr-eyebrow--accent">{category}</p>
        {figure}
        <h3 class="alr-h3" style="margin-top:16px;max-width:20ch">{headline}</h3>
      </div>
      <div>
        <p class="alr-lead">{summary}</p>
        <p class="alr-body" style="margin-top:16px">{detail}</p>
      </div>
    </div>
    <div class="alr-result-notes">
      <div>
        <p class="alr-note-label">What changed</p>
        <p class="alr-body" style="font-size:15.5px">{changed}</p>
      </div>
      <div>
        <p class="alr-note-label">How we measure it</p>
        <p class="alr-body" style="font-size:15.5px">{measure}</p>
      </div>
    </div>
    <div style="margin-top:26px;max-width:34rem">{bars}</div>
  </article>""".format(
        category=esc(r["category"]),
        figure=figure_html(r["figure"], "alr-figure--sm"),
        headline=esc(r["headline"]),
        summary=esc(r["summary"]),
        detail=esc(r["detail"]),
        changed=esc(r["whatChanged"]),
        measure=esc(r["howWeMeasure"]),
        bars=bars(r),
    )


BEHIND = """<section class="alr-section alr-section--paper">
  <div class="alr-wrap">
    <div class="alr-measure">
      <h2 class="alr-h2">What sits behind the number</h2>
      <p class="alr-lead" style="margin-top:20px">There is no setting that makes a business rank inside ChatGPT. Anyone who tells you otherwise is selling something they have not tested. What actually moves is slower and less dramatic: a model can only recommend a business it can find, parse and have some reason to trust, and each of those is a separate problem.</p>
      <p class="alr-lead" style="margin-top:18px">So the work is rarely one thing. A change of the size shown above usually comes from several of these moving at once, and which ones matter varies by business:</p>
      <ul class="alr-lead" style="margin-top:18px;padding-left:1.2em">
        <li>technical site architecture, so pages can be crawled and read</li>
        <li>content that answers the question a customer actually asked</li>
        <li>entity clarity, meaning the web agrees on what this business is</li>
        <li>search visibility, because assistants still lean on search results</li>
        <li>authoritative third-party mentions and accurate directory listings</li>
        <li>local signals, for businesses that serve a specific area</li>
        <li>reviews and the public reputation attached to the name</li>
        <li>citations from sources a model already treats as reliable</li>
        <li>structured information that removes ambiguity</li>
        <li>internal linking, page quality, relevance and authority</li>
      </ul>
      <div class="alr-callout alr-callout--note">
        <p class="alr-callout-title">Worth saying plainly</p>
        <p>We cannot guarantee a position in an AI answer, and neither can anyone else. These systems are probabilistic, they change without notice, and the same question can return different companies on different days. What can be done is to make a business a much more likely answer, and then to watch whether that is happening.</p>
      </div>
    </div>
  </div>
</section>"""


FRAMEWORK_ITEMS = [
    (
        "AI recommendation presence",
        "Does the business appear when customers ask AI systems who they should choose?",
        "This is the headline question and the hardest one to fake. We run a fixed set of prompts written the way a real customer would ask, then record whether the business is named. Frequency across the set matters more than any single answer, because any single answer can be a fluke.",
    ),
    (
        "AI share of voice",
        "Across a defined set of prompts, how often does a company appear relative to competitors?",
        "Presence on its own can be flattering. Share of voice puts it in context by counting who else is being recommended for the same questions, which is usually the moment a client realises which competitors the model already trusts.",
    ),
    (
        "Citation presence",
        "Which websites, profiles and third-party sources are being used to support the recommendation?",
        "Where an assistant shows its sources, those sources are a map of what it currently treats as credible on that topic. Reading that map tells you which parts of the wider web are worth attention, and it often surprises people.",
    ),
    (
        "Search visibility",
        "How well does the company appear across conventional search for relevant non-branded queries?",
        "Conventional ranking has not stopped mattering. Several AI experiences retrieve from a live index, so search visibility feeds recommendation visibility, and it remains a large source of customers in its own right.",
    ),
    (
        "Entity strength",
        "How consistently does the web describe what the company does, where it operates and why it is credible?",
        "A business with three different addresses, two trading names and an unclear service list is expensive for a model to reason about. Consistency is unglamorous work and it is frequently the thing holding everything else back.",
    ),
    (
        "Commercial impact",
        "Does improved visibility result in outcomes the business would actually be pleased to receive?",
        "Qualified website visits, enquiries, bookings, calls, purchases and customers. If the first five measures move and this one does not, something in the chain is wrong and we would rather find that out than celebrate the chart.",
    ),
]


def framework():
    rows = []
    for i, (title, question, body) in enumerate(FRAMEWORK_ITEMS):
        rows.append(
            """<div class="alr-def alr-rv">
      <div class="alr-def-num">{num}</div>
      <div><h3 class="alr-h3">{title}</h3></div>
      <div>
        <p class="alr-body" style="color:var(--al-ink);font-weight:500">{question}</p>
        <p class="alr-body" style="margin-top:10px">{body}</p>
      </div>
    </div>""".format(num="%02d" % (i + 1), title=esc(title), question=esc(question), body=esc(body))
        )
    return """<section class="alr-section alr-section--white">
  <div class="alr-wrap">
    <div style="max-width:56ch;margin-bottom:clamp(28px,4vw,48px)">
      <p class="alr-eyebrow">How we measure</p>
      <h2 class="alr-h2">Six things we track, in this order</h2>
      <p class="alr-dek">Each one answers a different question, and the last one is the only one that pays for the others.</p>
    </div>
    <div class="alr-deflist">{rows}</div>
  </div>
</section>""".format(rows="".join(rows))


PROCESS_NODES = [
    ("01", "Measure", "Establish where the business actually appears today, across prompts and across search, before changing anything."),
    ("02", "Diagnose", "Work out which constraint is binding. Crawlability, clarity, content, reputation or authority."),
    ("03", "Improve", "Fix the constraint. This is usually technical and editorial work on the site itself."),
    ("04", "Build authority", "Earn the third-party signals that give a model a reason to trust the business."),
    ("05", "Measure again", "Re-run the same prompt set. Compare like for like, and be honest when something did not work."),
]


def process():
    nodes = []
    for i, (step, title, copy) in enumerate(PROCESS_NODES):
        nodes.append(
            """<div class="alr-node alr-rv" style="--ald:{delay}ms">
      <span class="alr-node-step">{step}</span>
      <h3 class="alr-node-title">{title}</h3>
      <p class="alr-node-copy">{copy}</p>
    </div>""".format(delay=i * 70, step=step, title=esc(title), copy=esc(copy))
        )
    return """<section class="alr-section alr-section--paper">
  <div class="alr-wrap">
    <div style="max-width:52ch;margin-bottom:clamp(26px,3.5vw,40px)">
      <p class="alr-eyebrow">How the work runs</p>
      <h2 class="alr-h2">A loop, not a launch</h2>
      <p class="alr-dek">The useful part is the last step. Without it the first four are guesswork with an invoice attached.</p>
    </div>
    <div class="alr-process">{nodes}</div>
    <p class="alr-loop">Then back to the beginning</p>
  </div>
</section>""".format(nodes="".join(nodes))


def testimonials(items):
    cards = []
    for i, t in enumerate(items):
        tag = ""
        if t.get("resultTag"):
            tag = '<span class="alr-pill">%s</span>' % esc(t["resultTag"])
        cards.append(
            """<figure class="alr-testimonial alr-rv" style="--ald:{delay}ms">
      <span class="alr-qmark" aria-hidden="true">&ldquo;</span>
      <blockquote>{quote}</blockquote>
      <figcaption class="alr-attrib">
        <span class="alr-attrib-name">{name}</span>
        {tag}
        <span class="alr-attrib-role">{role}, {company} &middot; {industry}</span>
        <span class="alr-logo-slot"></span>
      </figcaption>
    </figure>""".format(
                delay=i * 80,
                quote=esc(t["quote"]),
                name=esc(t["name"]),
                role=esc(t["role"]),
                company=esc(t["company"]),
                industry=esc(t["industry"]),
                tag=tag,
            )
        )
    return """<section class="alr-section alr-section--white">
  <div class="alr-wrap">
    <div style="max-width:50ch;margin-bottom:clamp(26px,3.5vw,40px)">
      <p class="alr-eyebrow">In their words</p>
      <h2 class="alr-h2">What clients notice first</h2>
    </div>
    <div class="alr-grid alr-grid--3">{cards}</div>
  </div>
</section>""".format(cards="".join(cards))


def build(proof):
    results = proof["results"]
    tests = proof["testimonials"]

    body = (
        hero(
            "Work",
            "Visibility you can&nbsp;measure.",
            "Answered Labs improves how businesses are understood, surfaced and recommended across search and AI-driven discovery. We track progress across recommendation presence, citation visibility, organic search, website discovery and the commercial actions that follow.",
            extra="""<div class="alr-strip" style="margin-top:36px;max-width:44rem">
      <span class="alr-strip-item">Measured across <b>5</b> assistants</span>
      <span class="alr-strip-item">Prompt sets of <b>100+</b> questions</span>
      <span class="alr-strip-item">Re-run <b>monthly</b></span>
    </div>""",
        )
        + lead_result(results[0])
        + """<section class="alr-section alr-section--white" style="padding-top:0">
  <div class="alr-wrap">
    <hr class="alr-hr" style="margin-bottom:clamp(40px,5vw,64px)">
    %s
  </div>
</section>"""
        % "".join(support_result(r) for r in results[1:])
        + BEHIND
        + framework()
        + process()
        + testimonials(tests)
        + """<section class="alr-section alr-section--white">
  <div class="alr-wrap">
    <div style="max-width:50ch;margin-bottom:26px">
      <p class="alr-eyebrow">Related</p>
      <h2 class="alr-h2">The thinking underneath</h2>
    </div>
    %s
  </div>
</section>"""
        % xlinks(
            [
                (
                    "Research",
                    "How we test the way assistants find, cite and recommend businesses.",
                    L(UP, RESEARCH),
                ),
                (
                    "How AI recommends local businesses",
                    "The signals that decide who gets named when someone asks for a local recommendation.",
                    L(UP, "insights/how-ai-recommends-local-businesses.html"),
                ),
                (
                    "Pricing",
                    "What engagements cost and what is included at each level.",
                    L(UP, PRICING),
                ),
            ]
        )
        + cta(
            UP,
            "Start with where you actually stand",
            "The free audit shows you the prompts, who is being recommended instead of you, and what is getting in the way.",
        )
    )

    schema = [
        {
            "@type": "WebPage",
            "@id": "https://answeredlabs.com/work#webpage",
            "url": "https://answeredlabs.com/work",
            "name": "Work: visibility you can measure",
            "description": "How Answered Labs measures AI recommendation presence, citation visibility, search visibility and commercial impact.",
            "isPartOf": {"@id": "https://answeredlabs.com/#website"},
            "publisher": {"@id": "https://answeredlabs.com/#organization"},
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://answeredlabs.com/"},
                {"@type": "ListItem", "position": 2, "name": "Work", "item": "https://answeredlabs.com/work"},
            ],
        },
    ]

    return {
        "file": "work.html",
        "priority": "0.9",
        "page": {
            "slug": "work",
            "depth": 0,
            "title": "Work: visibility you can measure | Answered Labs",
            "description": "How we measure AI recommendation presence, citation visibility, non-branded search and the commercial actions that follow, and what sits behind each number.",
            "body": body,
            "schema_nodes": schema,
        },
    }
