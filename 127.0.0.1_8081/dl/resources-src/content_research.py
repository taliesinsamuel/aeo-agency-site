"""/research — the investigation programme and the method behind it."""

from components import (
    INSIGHTS, WORK, L, cta, esc, hero, xlinks,
)

UP = ""
ORIGIN = "https://answeredlabs.com"

# Status values are deliberately conservative. Nothing is described as
# finished, because nothing is finished.
PROGRAMME = [
    (
        "AL-01",
        "Local AI recommendations",
        "How systems choose businesses when someone asks for a local recommendation.",
        "We are building a prompt corpus across service categories and cities, and recording which businesses get named, how often the same question returns a different answer, and how much the phrasing of a question changes the shortlist.",
        "Active",
        "active",
    ),
    (
        "AL-02",
        "Citation sources",
        "Which types of websites repeatedly influence AI-generated business answers.",
        "Where assistants expose their sources, we log every cited domain and classify it: the business itself, a directory, a review platform, local press, a professional body, or something else. The aim is a picture of which categories actually carry weight.",
        "Active",
        "active",
    ),
    (
        "AL-03",
        "Cross-platform visibility",
        "How recommendations differ between ChatGPT, Gemini, Perplexity and search-driven AI experiences.",
        "The same question, asked of several systems on the same day, does not produce the same answer. We are measuring how far apart they are and whether a business that is visible in one is reliably visible in the others.",
        "In progress",
        "progress",
    ),
    (
        "AL-04",
        "Review signals",
        "The relationship between public reputation and recommendation presence.",
        "Whether review volume, rating, recency and the content of reviews correlate with being recommended, and whether any of that survives once you control for how well known a business already is.",
        "In progress",
        "progress",
    ),
    (
        "AL-05",
        "Entity consistency",
        "How clearly defined business information affects discovery.",
        "Testing whether businesses whose name, address, category and service description agree across the web are recommended more often than comparable businesses where those details conflict.",
        "Upcoming",
        "",
    ),
    (
        "AL-06",
        "Search and AI overlap",
        "How conventional ranking and AI recommendation presence interact.",
        "Comparing search position for a query against presence in AI answers for the equivalent question, to see how much of one predicts the other and where the two come apart.",
        "Upcoming",
        "",
    ),
]


def programme():
    cards = []
    for ident, title, summary, detail, status, mod in PROGRAMME:
        cards.append(
            """<article class="alr-card alr-card--hover alr-rv">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px">
        <span class="alr-tag">{ident}</span>
        <span class="alr-status{mod}">{status}</span>
      </div>
      <h3 class="alr-h3">{title}</h3>
      <p class="alr-body" style="margin-top:12px;color:var(--al-ink);font-weight:450">{summary}</p>
      <p class="alr-body" style="margin-top:12px;font-size:15px">{detail}</p>
    </article>""".format(
                ident=ident,
                mod=(" alr-status--" + mod) if mod else "",
                status=esc(status),
                title=esc(title),
                summary=esc(summary),
                detail=esc(detail),
            )
        )
    return """<section class="alr-section alr-section--white">
  <div class="alr-wrap">
    <div style="max-width:52ch;margin-bottom:clamp(28px,4vw,44px)">
      <p class="alr-eyebrow">The programme</p>
      <h2 class="alr-h2">What we're investigating</h2>
      <p class="alr-dek">Six open questions. None of them are settled, and we will say so on each report when they are not.</p>
    </div>
    <div class="alr-grid alr-grid--3">{cards}</div>
  </div>
</section>""".format(cards="".join(cards))


METHOD_FIELDS = [
    ("Research question", "Stated before collection begins, not fitted to the result afterwards."),
    ("Prompt corpus", "The exact questions asked, published in full or as a representative sample."),
    ("Platform", "Which assistant or interface, since answers differ between them."),
    ("Model", "Named where it is observable, and marked unknown where it is not."),
    ("Geography", "Where the query was run from, because location changes local answers."),
    ("Sampling logic", "How prompts and businesses were selected, and what that excludes."),
    ("Collection date", "When observations were taken. These systems change underneath you."),
    ("Number of observations", "The actual n, not a description like 'extensive testing'."),
    ("Comparison set", "What the result is being compared against."),
    ("Exclusions", "What was discarded and on what grounds."),
    ("Limitations", "What the study cannot show, stated by us rather than left to the reader."),
    ("Interpretation", "What we think it means, kept clearly separate from what we observed."),
]


def methodology():
    cells = []
    for name, desc in METHOD_FIELDS:
        cells.append(
            '<div class="alr-datacell"><dt>%s</dt><dd style="font-size:13.5px;font-weight:400;color:var(--al-ink-2);line-height:1.5">%s</dd></div>'
            % (esc(name), esc(desc))
        )
    return """<section class="alr-section alr-section--paper">
  <div class="alr-wrap">
    <div class="alr-measure" style="margin-inline:0">
      <p class="alr-eyebrow">Method</p>
      <h2 class="alr-h2">What every report has to declare</h2>
      <p class="alr-lead" style="margin-top:20px">Most claims in this category arrive without a method, which makes them impossible to check and impossible to build on. We would like our own work to be checkable, including by people who disagree with it. So anything published under Research carries the following, whether or not the result is flattering.</p>
    </div>
    <dl class="alr-datagrid" style="margin-top:clamp(28px,3.5vw,40px)">{cells}</dl>
    <div class="alr-callout alr-callout--accent" style="max-width:44rem">
      <p class="alr-callout-title">On uncertainty</p>
      <p>AI systems are probabilistic and they change without notice. A finding that held in one quarter may not hold in the next, and a sample large enough to be interesting is rarely large enough to be conclusive. Where we report a pattern, we will say how confident we are and what would change our mind.</p>
    </div>
  </div>
</section>"""


PUBLISHED = """<section class="alr-section alr-section--white">
  <div class="alr-wrap">
    <div style="max-width:52ch">
      <p class="alr-eyebrow">Published reports</p>
      <h2 class="alr-h2">Nothing here yet</h2>
      <p class="alr-lead" style="margin-top:20px">The studies above are still collecting. When the first report is ready it will appear here in full, with its prompt corpus, its sample size, its limitations and a citation format so it can be referenced properly.</p>
      <p class="alr-lead" style="margin-top:18px">We would rather leave this section empty than fill it with something we have not actually done. In the meantime, our thinking on how these systems behave is in <a class="alr-link" href="insights.html">Insights</a>.</p>
    </div>
  </div>
</section>"""


def build():
    body = (
        hero(
            "Research",
            "Researching how businesses get discovered by&nbsp;AI.",
            "We test how AI systems find, understand, cite and recommend businesses, then publish what we learn.",
            extra="""<div class="alr-strip" style="margin-top:36px;max-width:46rem">
      <span class="alr-strip-item">Studies open <b>6</b></span>
      <span class="alr-strip-item">Currently collecting <b>4</b></span>
      <span class="alr-strip-item">Reports published <b>0</b></span>
      <span class="alr-strip-item">Programme started <b>2026</b></span>
    </div>""",
        )
        + programme()
        + methodology()
        + PUBLISHED
        + """<section class="alr-section alr-section--paper">
  <div class="alr-wrap">
    <div style="max-width:50ch;margin-bottom:26px">
      <p class="alr-eyebrow">Related</p>
      <h2 class="alr-h2">While you wait</h2>
    </div>
    %s
  </div>
</section>"""
        % xlinks(
            [
                (
                    "AEO vs SEO",
                    "Where the two disciplines overlap, and where they genuinely differ.",
                    L(UP, "insights/aeo-vs-seo.html"),
                ),
                (
                    "How AI recommends local businesses",
                    "What we understand so far about local recommendation behaviour.",
                    L(UP, "insights/how-ai-recommends-local-businesses.html"),
                ),
                ("Work", "How the same questions are used to measure client progress.", L(UP, WORK)),
            ]
        )
        + cta(
            UP,
            "Curious what your own prompt set looks like?",
            "The free audit is the small version of this: your questions, your category, and who is currently being recommended.",
        )
    )

    schema = [
        {
            "@type": "CollectionPage",
            "@id": ORIGIN + "/research#webpage",
            "url": ORIGIN + "/research",
            "name": "Research: how businesses get discovered by AI",
            "description": "Answered Labs' research programme into how AI systems find, cite and recommend businesses, and the method every report must declare.",
            "isPartOf": {"@id": ORIGIN + "/#website"},
            "publisher": {"@id": ORIGIN + "/#organization"},
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": ORIGIN + "/"},
                {"@type": "ListItem", "position": 2, "name": "Research", "item": ORIGIN + "/research"},
            ],
        },
    ]

    return {
        "file": "research.html",
        "priority": "0.8",
        "page": {
            "slug": "research",
            "depth": 0,
            "title": "Research: how businesses get discovered by AI | Answered Labs",
            "description": "Our open research programme into AI recommendation, citation sources, cross-platform visibility and entity consistency, and the method every report declares.",
            "body": body,
            "schema_nodes": schema,
        },
    }
