"""/research — the questions we keep testing, and how we test them."""

from components import (
    INSIGHTS, WORK, L, cta, esc, hero, xlinks,
)

UP = ""
ORIGIN = "https://answeredlabs.com"

# Areas of active study, not projects with operational stages. Each one is a
# question we keep returning to, followed by what our own testing currently
# suggests. Nothing here is presented as a finished study.
STUDIES = [
    (
        "Local AI recommendations",
        "What makes one business appear when someone asks an AI assistant for a recommendation, while another doesn't?",
        "AI recommendations appear to depend on much more than traditional ranking position. Systems need to understand what a business does, where it operates, whether it is relevant to the exact request, and whether enough trustworthy information exists across the web to support recommending it. Businesses with clear service information, strong third-party signals and consistent entity data tend to give an AI system more confidence than businesses whose online presence is fragmented or ambiguous.",
    ),
    (
        "Citation sources",
        "Which websites and sources do AI systems rely on when deciding what businesses to mention?",
        "A company's own website matters, but it is rarely the whole picture. AI systems can draw on directories, review platforms, publications, industry sites and other pages that independently describe the business. This means citation visibility is partly an authority problem: the more consistently credible sources confirm who a business is and what it is known for, the easier it becomes for an assistant to substantiate a recommendation.",
    ),
    (
        "Cross-platform visibility",
        "Why can a business be highly visible in ChatGPT but almost absent from Gemini or Perplexity?",
        "There is no single AI ranking. Different systems retrieve information differently, use different sources and may weigh those sources differently. A business can therefore have strong visibility on one platform and weak visibility on another. We think the useful goal is not to optimise for one model in isolation, but to build an online presence that is sufficiently clear and authoritative to travel across multiple discovery systems.",
    ),
    (
        "Review signals",
        "How much do review volume, rating, recency and reputation influence AI recommendations?",
        "Reviews appear to matter both directly and indirectly. They provide evidence of reputation, reveal what customers repeatedly associate with a business and create signals across platforms that AI systems can retrieve. Raw review volume alone is unlikely to explain visibility, though. Recency, consistency, subject matter and the authority of the platform carrying those reviews can all change what the wider web appears to know about a company.",
    ),
    (
        "Entity consistency",
        "Does consistent information about a business across the web make it easier for AI systems to understand and recommend it?",
        "Probably, and this is one of the clearest principles behind our work. When a company's name, services, locations, positioning and other core facts are described consistently across its own site and third-party sources, there is less ambiguity for a system to resolve. Conflicting or thin information makes it harder to establish what the business actually is and when it should be considered relevant.",
    ),
    (
        "Search and AI overlap",
        "How closely does traditional Google visibility correlate with visibility in AI-generated answers?",
        "The two are connected, but they are not the same thing. Strong search visibility can make useful information easier to discover and can strengthen the web signals AI systems rely on, but appearing prominently in search does not guarantee recommendation inside an AI answer. AI discovery adds another layer: the system must understand the business well enough, and trust the available evidence enough, to actually include it in the answer.",
    ),
]


def studies():
    cards = []
    for title, question, finding in STUDIES:
        cards.append(
            """<article class="alr-card alr-card--hover alr-study alr-rv">
      <h3 class="alr-h3">{title}</h3>
      <p class="alr-study-q">{question}</p>
      <div class="alr-study-note">
        <p class="alr-note-label">What we're seeing</p>
        <p class="alr-body" style="font-size:15.5px">{finding}</p>
      </div>
    </article>""".format(
                title=esc(title),
                question=esc(question),
                finding=esc(finding),
            )
        )
    return """<section class="alr-section alr-section--white" style="padding-top:0">
  <div class="alr-wrap">
    <div style="max-width:52ch;margin-bottom:clamp(28px,4vw,44px)">
      <p class="alr-eyebrow">The programme</p>
      <h2 class="alr-h2">What we're studying</h2>
      <p class="alr-dek">Six questions we keep returning to as we test how businesses appear across search and AI systems.</p>
    </div>
    <div class="alr-grid alr-grid--3 alr-studies">{cards}</div>
  </div>
</section>""".format(cards="".join(cards))


METHOD = """<section class="alr-section alr-section--paper">
  <div class="alr-wrap">
    <div class="alr-measure" style="margin-inline:0">
      <p class="alr-eyebrow">Method</p>
      <h2 class="alr-h2">How we investigate AI discovery</h2>
      <p class="alr-lead" style="margin-top:20px">We test real customer questions across major AI platforms, record which businesses are recommended and which sources are cited, then compare those results with signals across websites, search visibility, reviews and the wider web. We repeat tests over time and across different prompts to separate one-off answers from patterns that appear consistently.</p>
      <p class="alr-lead" style="margin-top:18px">As the evidence grows, we use those observations to refine our own work and publish the findings that are useful enough to share. Where we make a stronger claim, we want to be able to show what we tested and how we reached it.</p>
    </div>
  </div>
</section>"""


def build():
    body = (
        hero(
            "Research",
            "Researching how businesses get discovered by&nbsp;AI.",
            "We test how AI systems find, understand, cite and recommend businesses, then publish what we learn.",
        )
        + studies()
        + METHOD
        + """<section class="alr-section alr-section--white">
  <div class="alr-wrap">
    <div style="max-width:50ch;margin-bottom:26px">
      <p class="alr-eyebrow">Related</p>
      <h2 class="alr-h2">Explore our thinking</h2>
      <p class="alr-dek">Analysis, explanations and practical guidance on how search and AI discovery are changing.</p>
    </div>
    %s
  </div>
</section>"""
        % xlinks(
            [
                (
                    "AEO vs SEO",
                    "Where the two disciplines overlap, and where they genuinely differ.",
                    "/insights/aeo-vs-seo",
                ),
                (
                    "How AI recommends local businesses",
                    "What we understand so far about local recommendation behaviour.",
                    "/insights/how-ai-recommends-local-businesses",
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
            "description": "The six questions Answered Labs is actively studying about how AI systems find, cite and recommend businesses, and how we test them.",
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
            "description": "What we are studying about AI recommendation, citation sources, cross-platform visibility, review signals and entity consistency, and how we test it.",
            "body": body,
            "schema_nodes": schema,
        },
    }
