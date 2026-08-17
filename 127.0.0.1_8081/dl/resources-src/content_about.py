"""/about — why Answered Labs exists and who is behind it."""

from components import (
    AUDIT, INSIGHTS, RESEARCH, WORK, L, cta, esc, hero, xlinks,
)

UP = ""

ORIGIN = "https://answeredlabs.com"

GAP = """<section class="alr-section alr-section--white">
  <div class="alr-wrap">
    <div class="alr-measure">
      <p class="alr-eyebrow">Why we started</p>
      <h2 class="alr-h2">The gap we kept seeing</h2>
      <p class="alr-lead" style="margin-top:22px">A business can be genuinely excellent and still be close to invisible inside AI-driven discovery. We kept running into the same situation: a company with real customers, real expertise, a good service, a reputation people would vouch for and a website that works perfectly well, which simply does not come up when someone asks an assistant who they should use.</p>
      <p class="alr-lead" style="margin-top:18px">Nothing was broken in the way anyone had been trained to look for. Nobody had made a mistake. The business was just difficult for a machine to understand, or difficult to verify, or absent from the handful of sources the machine happened to trust for that question. Meanwhile a competitor that was not obviously better at the actual job was being named every time.</p>
      <p class="alr-lead" style="margin-top:18px">That gap is what Answered Labs was built around. Not the promise of gaming a model, which is not a thing, but the much less exciting work of making a business easy to find, easy to understand and easy to have confidence in.</p>
      <div class="alr-pull">
        <p>Being good at the work and being findable are two different problems. Plenty of businesses have solved the first one and assumed it would take care of the second.</p>
      </div>
    </div>
  </div>
</section>"""


FOUNDERS = [
    ("taliesin-kauffmann", "Taliesin Kauffmann", "Co-founder"),
    ("emerson-kauffmann", "Emerson Kauffmann", "Co-founder"),
]


def founders():
    cards = []
    for anchor, name, role in FOUNDERS:
        cards.append(
            """<div class="alr-founder alr-rv">
      <h3 class="alr-founder-name" id="{anchor}">{name}</h3>
      <p class="alr-founder-role">{role}</p>
    </div>""".format(anchor=anchor, name=esc(name), role=esc(role))
        )
    return """<section class="alr-section alr-section--paper">
  <div class="alr-wrap">
    <div style="max-width:48ch;margin-bottom:clamp(32px,4.5vw,56px)">
      <p class="alr-eyebrow">Who we are</p>
      <h2 class="alr-h2">Two people, so far</h2>
    </div>
    <div class="alr-founders">{cards}</div>
    <p class="alr-small" style="max-width:52ch;margin-top:clamp(36px,5vw,64px)">We have kept this short on purpose. A list of previous job titles would not tell you much about whether we can help, and we would rather be judged on the research and the writing further down this page.</p>
  </div>
</section>""".format(cards="".join(cards))


NOTE = """<section class="alr-section alr-section--white">
  <div class="alr-wrap">
    <div class="alr-measure">
      <p class="alr-eyebrow">A note from us</p>
      <div class="alr-note alr-rv" style="margin-top:20px">
        <p>Answer engine optimization is a very young category, and it currently has more confident language in it than evidence. You can find a great deal of advice about getting recommended by AI, some of it sensible, much of it asserted with a certainty nobody has earned yet. Very little of it comes with a method attached.</p>
        <p>We would like to work differently, and we are writing this down partly to hold ourselves to it. Test things. Measure them properly, against a fixed set of questions rather than a flattering one. Publish what we find, including the parts that are inconvenient or dull. Apply what holds up to client work, and let that work generate the next set of questions.</p>
        <p>Some of what we currently believe will turn out to be wrong. These systems change without announcement, and a finding from this quarter may not survive the next one. When that happens we would rather say so than quietly update a page. Where we are unsure, we will tell you we are unsure.</p>
        <p>What we are confident about is narrower and more boring than the category's usual pitch: businesses that are easy to find, clearly described and independently vouched for tend to do better in these systems than businesses that are not. Most of our work is the unglamorous business of closing that distance.</p>
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
        hero(
            "About Answered Labs",
            "We built Answered Labs for the way people find businesses&nbsp;now.",
            "For years, online discovery meant searching, scanning a page of links and choosing where to click. Increasingly, customers ask AI systems what to buy, where to go, who to hire and which companies they should trust. Answered Labs exists to help businesses become easier to find, understand and recommend in that environment.",
        )
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
