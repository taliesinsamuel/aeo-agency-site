"""/about — why Answered Labs exists and who is behind it."""

from components import (
    AUDIT, INSIGHTS, RESEARCH, WORK, L, cta, esc, xlinks,
)

UP = ""

ORIGIN = "https://answeredlabs.com"

GAP = """<section class="alr-section alr-section--white">
  <div class="alr-wrap">
    <div class="alr-measure">
      <p class="alr-eyebrow">Why we started</p>
      <h2 class="alr-h2">The gap we kept seeing</h2>
      <p class="alr-lead" style="margin-top:22px">A business can be genuinely excellent and still be almost invisible in AI-driven discovery. We kept seeing the same pattern: a company with real customers, real expertise, a strong service, a good reputation and a perfectly capable website simply would not appear when someone asked an AI assistant who they should use.</p>
      <p class="alr-lead" style="margin-top:18px">Usually, the problem was not that the business was weak. The problem was that the evidence available to the system did not reflect the quality of the business clearly enough.</p>
      <p class="alr-lead" style="margin-top:18px">Its services might be described vaguely. Important information might conflict across the website, business profiles and third-party listings. The company might be absent from sources that repeatedly appear around the relevant questions. Its reputation might be obvious to existing customers but poorly represented in the places an AI system can retrieve and verify.</p>
      <p class="alr-lead" style="margin-top:18px">Meanwhile, a competitor that was not obviously better at the actual work could appear again and again because the web made that business easier to understand and easier to substantiate.</p>
      <p class="alr-lead" style="margin-top:18px">That gap is what Answered Labs was built around. Not trying to game a model, but doing the more durable work of making a business legible across the web: clear about what it does, consistent wherever it appears, supported by credible evidence and measurable across the questions customers actually ask.</p>
      <div class="alr-pull">
        <p>Being good at the work and being findable are two different problems. Plenty of businesses have solved the first one and assumed it would take care of the second.</p>
      </div>
    </div>
  </div>
</section>"""


FOUNDERS = [
    (
        "taliesin-kauffmann",
        "Taliesin Kauffmann",
        "Co-founder",
        "Taliesin works across AI discovery, positioning and go-to-market strategy, "
        "with a focus on how businesses become the answer in both conventional search "
        "and AI systems. Before Answered Labs he worked in strategy consulting and "
        "product marketing at technology companies including Seal and Vertice, shaping "
        "positioning, launching AI and software products, and turning complex technical "
        "capabilities into clear commercial narratives. At Answered Labs his work sits "
        "at the intersection of AEO, SEO and product strategy: defining how a company "
        "should be understood by search and AI systems, then turning that into the "
        "structured content and positioning customers actually evaluate.",
    ),
    (
        "emerson-kauffmann",
        "Emerson Kauffmann",
        "Co-founder",
        "Emerson works on the technical foundation of search and AI visibility: how "
        "websites are built, structured and interpreted by search engines and AI "
        "systems. His work spans AEO, SEO, web development and software "
        "implementation, with an emphasis on the underlying mechanics that decide "
        "whether content is discoverable at all. At Answered Labs he is responsible "
        "for translating strategy into execution, making sure site architecture, "
        "structured content, performance and technical SEO all support how information "
        "is surfaced and understood. His focus is on making visibility something that "
        "is engineered rather than assumed.",
    ),
]

SYNTHESIS = (
    "Together, that gives Answered Labs a view of the problem from both sides: what a "
    "business needs to say and prove to become a credible answer, and how the "
    "underlying website and technical systems make that information discoverable in "
    "the first place."
)


def founders():
    cards = []
    for anchor, name, role, bio in FOUNDERS:
        cards.append(
            """<div class="alr-founder alr-rv">
      <h3 class="alr-founder-name" id="{anchor}">{name}</h3>
      <p class="alr-founder-role">{role}</p>
      <p>{bio}</p>
    </div>""".format(
                anchor=anchor, name=esc(name), role=esc(role), bio=esc(bio)
            )
        )
    return """<section class="alr-section alr-section--paper alr-who">
  <div class="alr-wrap">
    <div class="alr-who-head">
      <p class="alr-eyebrow">Who we are</p>
      <h2 class="alr-h2">Built across strategy, content and technology.</h2>
    </div>
    <div class="alr-founders">{cards}</div>
    <p class="alr-who-synthesis">{synthesis}</p>
  </div>
</section>""".format(cards="".join(cards), synthesis=esc(SYNTHESIS))


NOTE = """<section class="alr-section alr-section--white">
  <div class="alr-wrap">
    <div class="alr-measure">
      <p class="alr-eyebrow">Our position</p>
      <div class="alr-note alr-rv" style="margin-top:20px">
        <p>Answer engine optimization is a young category, and confidence has moved faster than evidence.</p>
        <p>A lot of what is sold as AEO today is familiar SEO work with a new label: the same audits, the same content programmes and the same authority tactics, with ChatGPT added to the presentation. Much of that work can still be useful. Strong search visibility, good technical foundations and genuinely useful content all matter. But calling conventional SEO “AEO” does not address what has actually changed.</p>
        <p>Generated answers introduce a different set of questions. Is the business being retrieved at all? Does the system understand what it does and where it operates? Which sources are being used to verify it? Is the business cited but never named? Does it appear in ChatGPT but disappear in Gemini? Does the answer change when the wording, location or retrieval path changes? Those are not questions a conventional rank report can answer.</p>
        <p>Answered Labs was built around measuring those things directly.</p>
        <p>We test real customer questions across the systems people actually use. We record who appears, who does not, which sources are cited and how those patterns change over time. We compare that with search visibility, website structure, entity consistency, reputation and the wider evidence available across the web. Then we use the findings to decide what should change.</p>
        <p>That matters because AEO should not be a checklist of tactics borrowed from SEO and assumed to work everywhere. It should be an evidence-led discipline. Test the question. Measure the baseline. Understand why competitors are appearing. Make the changes that address the actual problem. Run the same test again.</p>
        <p>The systems themselves will keep changing. Models update, retrieval behaviour shifts and sources that matter today may matter differently next year. Our approach is built for that reality. We do not need the underlying systems to remain static, because the work is measured against what they are actually doing now.</p>
        <p>What does remain remarkably consistent is the foundation: businesses perform better when they are easy to discover, clearly described, technically accessible, supported by credible information and consistently represented across the web. Our job is to identify where that chain breaks, fix it, and measure whether the business becomes more visible as a result.</p>
        <div class="alr-sig">
          <b>Taliesin Kauffmann</b> and <b>Emerson Kauffmann</b><br>Co-founders, Answered Labs
        </div>
      </div>
    </div>
  </div>
</section>"""


BELIEFS = [
    (
        "Discovery is changing",
        "People increasingly expect an answer rather than a page of links to evaluate themselves. That does not make search obsolete, and we would be suspicious of anyone claiming it does, but it does change what being findable means. A list of ten blue links rewarded whoever could earn the click. An answer rewards whoever the system is willing to name. Those are related problems, and they are not the same problem, which is why the businesses doing well in one are not automatically doing well in the other.",
    ),
    (
        "A recommendation has to be earned",
        "Assistants are cautious about recommending businesses, and they should be. Naming a specific company to a specific person is a claim, and a system will only make it when it has enough reliable information to believe the claim is reasonable. That means the question is rarely how to persuade a model. It is whether enough good information exists, in enough places, for the model to justify saying your name rather than someone else's.",
    ),
    (
        "The website is only one part of the picture",
        "A great deal of what determines whether a business gets recommended sits outside its own site. Directory entries, review platforms, professional bodies, local press, industry listings and ordinary mentions elsewhere all contribute to what the wider web appears to think. You cannot control most of that, which is uncomfortable, but you can influence a fair amount of it and you can at least make sure the parts you do control are accurate and consistent.",
    ),
    (
        "SEO and AEO reinforce one another",
        "It is commercially convenient to present these as rivals, with one replacing the other, and we think that framing is wrong. Several AI experiences retrieve from live search results, so ranking well feeds being cited. Meanwhile the work that makes a page genuinely useful to a reader is largely the same work that makes it usable to a model. We treat them as one connected system, because in practice that is how they behave.",
    ),
    (
        "Measurement matters",
        "If visibility is improving there should eventually be something observable to point at. Not a guarantee, and not a straight line, because these systems are noisy enough that any single result proves very little. But across a fixed set of questions, over a reasonable period, a real improvement should show up. If it does not, we would rather find that out and change what we are doing than write a report explaining why the number is unimportant.",
    ),
]


def beliefs():
    rows = []
    for i, (title, body) in enumerate(BELIEFS):
        rows.append(
            """<div class="alr-belief alr-rv">
      <div class="alr-belief-num">{num}</div>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>""".format(num="%02d" % (i + 1), title=esc(title), body=esc(body))
        )
    return """<section class="alr-section alr-section--paper">
  <div class="alr-wrap">
    <div style="max-width:50ch;margin-bottom:clamp(26px,3.5vw,44px)">
      <p class="alr-eyebrow">What we believe</p>
      <h2 class="alr-h2">Five things we keep coming back to</h2>
    </div>
    {rows}
  </div>
</section>""".format(rows="".join(rows))


BUILDING = """<section class="alr-section alr-section--white">
  <div class="alr-wrap">
    <div class="alr-measure">
      <p class="alr-eyebrow">What we're building</p>
      <h2 class="alr-h2">A practice and a research habit, pointed at the same problem</h2>
      <p class="alr-lead" style="margin-top:22px">Answered Labs is meant to be one thing rather than two. Client work, experiments, research, technical implementation, content and measurement all feed the same understanding of how AI-driven discovery actually behaves, and each one is more useful because of the others.</p>
      <p class="alr-lead" style="margin-top:18px">In practice that means client work throws up questions we cannot answer from experience, so we test them. Testing produces findings that are worth publishing, which is what Research is for. Publishing forces us to be precise about method, which makes the findings more trustworthy to us as well as to anyone reading. And what survives that process is what we apply to the next engagement.</p>
      <p class="alr-lead" style="margin-top:18px">We are early. The research programme is small and the published body of work is smaller. But we would rather grow it slowly and be able to stand behind it than fill a page with confident claims and hope nobody checks.</p>
    </div>
  </div>
</section>"""


def build():
    body = (
        """<section class="alr-section alr-section--white alr-about-hero">
  <div class="alr-wrap">
    <p class="alr-eyebrow">About Answered Labs</p>
    <h1 class="alr-display">We built Answered Labs for the way people find businesses&nbsp;now.</h1>
    <p class="alr-dek">For years, online discovery meant searching, scanning a page of links and deciding where to click. Increasingly, customers ask AI systems what to buy, where to go, who to hire and which companies they should trust. That changes what it means to be findable. It is no longer enough for a business to have a good website or rank well for a handful of searches. AI systems have to understand what the business does, connect it to the right questions, find evidence that supports it and have enough confidence to include it in an answer. Answered Labs exists to help businesses become easier to find, understand, verify and recommend in that environment.</p>
  </div>
</section>"""
        + GAP
        + founders()
        + NOTE
        + beliefs()
        + BUILDING
        + """<section class="alr-section alr-section--white" style="padding-top:0">
  <div class="alr-wrap">
    <div style="max-width:50ch;margin-bottom:26px">
      <p class="alr-eyebrow">Read on</p>
      <h2 class="alr-h2">Where to go next</h2>
    </div>
    %s
  </div>
</section>"""
        % xlinks(
            [
                ("Work", "What we measure, and what the numbers actually mean.", L(UP, WORK)),
                ("Research", "What we are currently testing, and how.", L(UP, RESEARCH)),
                ("Insights", "Our writing on AEO, AI search and discovery.", L(UP, INSIGHTS)),
            ]
        )
        + cta(
            UP,
            "See where your business appears",
            "We will run your prompts, show you who is being recommended today and tell you what we think is in the way.",
        )
    )

    schema = [
        {
            "@type": "AboutPage",
            "@id": ORIGIN + "/about#webpage",
            "url": ORIGIN + "/about",
            "name": "About Answered Labs",
            "description": "Why Answered Labs exists, what we believe about AI-driven discovery, and the people behind it.",
            "isPartOf": {"@id": ORIGIN + "/#website"},
            "about": {"@id": ORIGIN + "/#organization"},
            "publisher": {"@id": ORIGIN + "/#organization"},
        },
        {
            "@type": "Person",
            "@id": ORIGIN + "/about#taliesin-kauffmann",
            "name": "Taliesin Kauffmann",
            "jobTitle": "Co-founder",
            "worksFor": {"@id": ORIGIN + "/#organization"},
            "url": ORIGIN + "/about#taliesin-kauffmann",
        },
        {
            "@type": "Person",
            "@id": ORIGIN + "/about#emerson-kauffmann",
            "name": "Emerson Kauffmann",
            "jobTitle": "Co-founder",
            "worksFor": {"@id": ORIGIN + "/#organization"},
            "url": ORIGIN + "/about#emerson-kauffmann",
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": ORIGIN + "/"},
                {"@type": "ListItem", "position": 2, "name": "About", "item": ORIGIN + "/about"},
            ],
        },
    ]

    return {
        "file": "about.html",
        "priority": "0.8",
        "page": {
            "slug": "about",
            "depth": 0,
            "title": "About Answered Labs: the people and the thinking | Answered Labs",
            "description": "Why we started Answered Labs, what we believe about AI-driven discovery, and how we approach research, measurement and client work.",
            "body": body,
            "schema_nodes": schema,
        },
    }
