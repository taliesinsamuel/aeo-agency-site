"""
/insights/<slug> — long-form articles.

Each article is a list of (anchor id, H2 heading, body html) sections. The
contents rail, the schema and the internal links are all generated from
that structure, so adding an article never means hand-maintaining a table
of contents.

Editorial rules applied throughout: answer the question in the first
paragraph under each question-led heading, then explain; no invented
statistics; no invented sources; anything uncertain is stated as
uncertain.
"""

from components import (
    ABOUT, AUDIT, BOOK, INSIGHTS, RESEARCH, WORK, L, arrow, crumbs, esc,
)

UP = "../"  # articles are served from /insights/<slug>
ORIGIN = "https://answeredlabs.com"

AUTHOR_META = {
    "taliesin": {"name": "Taliesin Kauffmann", "role": "Co-founder, Answered Labs",
                 "anchor": "taliesin-kauffmann", "initials": "TK"},
    "emerson": {"name": "Emerson Kauffmann", "role": "Co-founder, Answered Labs",
                "anchor": "emerson-kauffmann", "initials": "EK"},
}


def P(*paras):
    return "".join("<p>%s</p>" % p for p in paras)


def UL(*items):
    return "<ul>%s</ul>" % "".join("<li>%s</li>" % i for i in items)


def OL(*items):
    return "<ol>%s</ol>" % "".join("<li>%s</li>" % i for i in items)


def CALLOUT(title, *paras, kind="note"):
    return '<aside class="alr-callout alr-callout--%s"><p class="alr-callout-title">%s</p>%s</aside>' % (
        kind, esc(title), "".join("<p>%s</p>" % p for p in paras)
    )


def PULL(text, cite=None):
    return '<div class="alr-pull"><p>%s</p>%s</div>' % (
        text, ('<cite>%s</cite>' % esc(cite)) if cite else ""
    )


def TABLE(caption, headers, rows):
    head = "".join("<th scope='col'>%s</th>" % esc(h) for h in headers)
    body = ""
    for r in rows:
        cells = "<th scope='row'>%s</th>" % r[0]
        cells += "".join("<td>%s</td>" % c for c in r[1:])
        body += "<tr>%s</tr>" % cells
    return (
        '<div class="alr-tablewrap"><table class="alr-table">'
        "<caption>%s</caption><thead><tr>%s</tr></thead><tbody>%s</tbody>"
        "</table></div>" % (esc(caption), head, body)
    )


# ==================================================================
#  ARTICLE 1
# ==================================================================
A1 = {
    "slug": "what-is-answer-engine-optimization",
    "topic": "AEO",
    "title": "What Is Answer Engine Optimization (AEO)?",
    "dek": "A working definition, how it differs from SEO, what a business can actually influence, and what nobody can promise.",
    "description": "Answer engine optimization is the practice of making a business easy for AI answer engines to find, understand, trust and name. A working definition, how it relates to SEO, and how to measure it.",
    "author": "emerson",
    "published": "2026-08-16",
    "updated": "2026-08-16",
    "reading": "12 min read",
    "cover": "",
    "sections": [
        ("definition", "What is answer engine optimization?", P(
            '<span class="alr-answer">Answer engine optimization (AEO) is the practice of making a business easy for AI answer engines to find, understand, trust and name in a response.</span> It covers the work on a company\'s own website, the information about it elsewhere on the web, and the evidence that supports its credibility.',
            "The name is newer than the idea. What has changed is the destination. For twenty years the goal of being findable online was to occupy a position on a page of results and earn a click. Increasingly the goal is to be the business a system mentions when it answers a question directly, often without any page of results appearing at all.",
            "AEO is the work that makes that more likely. It is not a way to manipulate a model, and there is no setting inside any assistant that a business can adjust. It is closer to the unglamorous discipline of making yourself legible, verifiable and worth mentioning.",
        )),
        ("why", "Why AEO exists", P(
            "Answer engines changed what a query returns. When someone asks an assistant which company they should use, they are usually given a small number of named options with a short justification, rather than a page of links to work through themselves. A shortlist of three is a very different competitive environment from a list of ten.",
            "That compresses the field considerably. There is no second page, and the difference between being named and not being named is total. A business that ranks seventh for a search term still gets some traffic. A business that is not in an assistant's shortlist gets nothing from that conversation.",
            "It also changes what the system needs from you. A search engine can rank a page it does not fully understand, because a human will make the final judgement after clicking. An answer engine is making a recommendation on the user's behalf, so it needs enough information to justify the claim before it makes it.",
        )),
        ("what-engines-do", "What answer engines actually do", P(
            "Broadly, an answer engine interprets the question, retrieves information it thinks is relevant, and composes a response from what it retrieved. The details vary between products and change frequently, but that shape is fairly consistent.",
            "The retrieval step is the one that matters most for a business. Some systems answer partly from what the model absorbed during training, which is fixed at a point in time and heavily weighted toward well documented entities. Others perform a live search and read the results before answering, which is why current search visibility can translate quite directly into being mentioned.",
            "Most consumer products now do some mixture of both, and they do not tell you the ratio. This is one reason results are inconsistent: two people asking the same question can trigger different retrieval paths and receive different companies.",
        )),
        ("sources", "Where the information comes from", P(
            "An answer about a business is assembled from whatever the system can reach and has some reason to trust. In practice that tends to include:",
        ) + UL(
            "the business's own website, if it can be crawled and understood",
            "conventional search results for the equivalent query",
            "business profiles and map listings",
            "review platforms and the text of the reviews themselves",
            "industry directories and professional bodies",
            "local or trade press, and ordinary mentions on other sites",
        ) + P(
            "The important consequence is that your own website is one input among many, and often not the decisive one. A company can have an excellent site and still lose to a competitor whose details are described more consistently across everywhere else.",
        )),
        ("vs-seo", "How AEO differs from SEO", P(
            "The clearest difference is what success looks like. SEO aims at a position for a query. AEO aims at inclusion in an answer, which is not a ranked list and does not have positions in the same sense.",
            "The second difference is stability. A search ranking is reasonably stable and can be checked. An AI answer is probabilistic: ask the same question twice and you may get two different sets of companies. That makes single observations close to worthless and makes measurement across a fixed set of repeated questions essential.",
            "The third is the unit of attention. Search rewards pages. Answer engines reason about entities, meaning the business itself as a thing with a name, a location, a category and a reputation. A page can rank while the entity behind it stays vague, and a vague entity is hard to recommend.",
        )),
        ("overlap", "Where AEO and SEO overlap", P(
            "A great deal, and the overlap is more useful than the difference. Because several AI experiences retrieve from live search results, ranking well for a query is one of the more reliable routes into being cited for the equivalent question. Improving one frequently improves the other.",
            "The technical foundations are shared almost entirely. A page that cannot be crawled, renders slowly, or hides its content behind scripts is a problem for both. So is a site with an unclear structure, duplicated pages or thin content.",
            "The editorial foundations overlap too. Content that answers a real question directly, in the words a person would use, is easier for a reader to use and easier for a model to extract from. It is rare to find AEO advice that is genuinely bad for SEO, and when you do, it is usually a sign that the advice is bad generally.",
        )),
        ("influence", "What businesses can influence", P(
            "More than people expect, though none of it is a lever that produces a guaranteed outcome. The things that are genuinely within reach:",
        ) + UL(
            "<strong>Crawlability.</strong> Whether the relevant crawlers can reach and read your pages at all.",
            "<strong>Clarity.</strong> Whether your site states plainly what you do, who for, and where.",
            "<strong>Consistency.</strong> Whether your name, address, category and services agree everywhere they appear.",
            "<strong>Coverage.</strong> Whether you have a page that answers each question customers actually ask.",
            "<strong>Structured information.</strong> Machine-readable markup describing the business and its services.",
            "<strong>Reputation.</strong> Review volume, recency and what reviews actually say.",
            "<strong>Third-party presence.</strong> Accurate listings and legitimate mentions on sites that already carry weight.",
        )),
        ("cannot-control", "What businesses cannot control", P(
            "It is worth being blunt about this, because the category is full of people who are not.",
        ) + UL(
            "Which model a person is using, and which version of it.",
            "Whether that product retrieves live results or answers from training data.",
            "How the user phrased the question, which changes the answer considerably.",
            "The user's location and any personalisation applied to their session.",
            "Which sources the system has decided to trust for that topic.",
            "Whether the answer includes any businesses at all, rather than general advice.",
        ) + P(
            "Nobody can guarantee a position in an AI answer. What can be influenced is the probability of being included, and whether that probability is going up.",
        )),
        ("measure", "How AEO can be measured", P(
            "By repetition, against a fixed set of questions. Because any single answer can be noise, the only informative measurement is frequency across many prompts, re-run on a schedule.",
            "A workable measurement set usually includes:",
        ) + UL(
            "<strong>Recommendation presence.</strong> The share of a fixed prompt set in which the business is named.",
            "<strong>Share of voice.</strong> How often it appears relative to named competitors on the same prompts.",
            "<strong>Citation presence.</strong> How often its site or a supporting source appears where sources are shown.",
            "<strong>Search visibility.</strong> Conventional ranking for the equivalent non-branded queries.",
            "<strong>Commercial outcomes.</strong> Enquiries, bookings and calls attributable to organic and AI discovery.",
        ) + P(
            'The last one is the one that matters. Everything above it is a proxy. We describe how we run this in more detail on <a href="%s">Work</a>.' % L(UP, WORK),
        )),
        ("good-work", "What good AEO work looks like", P(
            "Unremarkable, mostly. Good work in this area tends to look like a sequence of small corrections rather than a single intervention, and the first phase is usually diagnosis rather than production.",
            "In practice it starts by establishing where a business currently appears, using a prompt set written the way its customers actually ask. That baseline is the thing most engagements skip, and skipping it makes every later claim unverifiable.",
            "From there the work is triage. If pages cannot be crawled, nothing else matters yet. If the site does not state clearly what the business does and where, that comes before content production. If the entity is described three different ways across the web, consistency comes before authority building. The order matters more than the list.",
            "Good work also involves saying no to things. A great deal of AEO advice circulating at the moment amounts to producing large volumes of content aimed at models rather than people, which tends to be expensive, tends not to work, and creates a site that is worse for the humans who do arrive.",
        )),
        ("misunderstood", "Frequently misunderstood ideas", P("") + '<h3>"You can submit your business to ChatGPT"</h3>' + P(
            "You cannot. There is no submission form and no index to be added to in that sense. Visibility is a consequence of what exists about you across the web and what the system retrieves.",
        ) + '<h3>"AEO replaces SEO"</h3>' + P(
            "It does not, and treating them as rivals usually produces worse results in both. Search visibility feeds AI visibility in several products, and conventional search remains a very large source of customers.",
        ) + '<h3>"It is about adding schema markup"</h3>' + P(
            "Structured data helps by removing ambiguity, and it is worth doing properly. It is not a mechanism for being recommended, and a business with excellent markup and no credible presence elsewhere will not be recommended because of it.",
        ) + '<h3>"Rankings will tell you how you are doing"</h3>' + P(
            "They tell you something, and they correlate in some products, but they are not the same measurement. A business can rank well for a query and still be absent from the answer to the equivalent question.",
        )),
        ("summary", "In summary", P(
            "Answer engine optimization is the work of making a business easy for AI systems to find, understand, trust and name. It shares most of its technical and editorial foundations with SEO, and differs mainly in what counts as success, how stable the result is, and how much attention is paid to the entity rather than the page.",
            "The parts a business controls are its own clarity, consistency, coverage and technical health, plus its reputation and the accuracy of how it is described elsewhere. The parts it does not control are considerable, which is why the honest framing is probability rather than position.",
            "If you want a concrete starting point, the most useful thing is a baseline: a set of questions your customers genuinely ask, run across several assistants, recorded. Whatever you do next, you will be able to tell whether it worked.",
        )),
    ],
    "sources": [
        'OpenAI, <a href="https://platform.openai.com/docs/bots" rel="nofollow">Overview of OpenAI crawlers</a>, which documents the user agents OpenAI uses and how site owners can control them.',
        'Google Search Central, <a href="https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers" rel="nofollow">Overview of Google crawlers and fetchers</a>.',
        'Schema.org, <a href="https://schema.org/LocalBusiness" rel="nofollow">LocalBusiness</a>, the vocabulary most commonly used to describe a business in structured data.',
    ],
    "related": ["aeo-vs-seo", "how-to-improve-visibility-in-chatgpt"],
}


# ==================================================================
#  ARTICLE 2
# ==================================================================
A2 = {
    "slug": "how-to-improve-visibility-in-chatgpt",
    "topic": "ChatGPT",
    "title": "How to Improve Your Visibility in ChatGPT",
    "dek": "What visibility in an assistant actually means, why the answer changes, and the work that makes being named more likely.",
    "description": "A practical guide to improving how often ChatGPT mentions your business: crawlability, search availability, entity clarity, reputation, citations and how to measure any of it.",
    "author": "emerson",
    "published": "2026-08-16",
    "updated": "2026-08-16",
    "reading": "13 min read",
    "cover": "ink",
    "sections": [
        ("what-it-means", "What does visibility in ChatGPT actually mean?", P(
            '<span class="alr-answer">It means how often your business is named when people ask the assistant questions that your business could answer.</span> It is a frequency, not a position, and there is no ranking to occupy.',
            "This distinction matters because it determines what you can sensibly aim for. There is no first place. There is no leaderboard. There is only the share of relevant conversations in which you come up, and whether that share is rising.",
            "Before anything else, it is worth accepting the shape of the problem: you are trying to make yourself a more probable answer, not a guaranteed one.",
        )),
        ("why-changes", "Why the answer can change", P(
            "Ask the same question twice and you can get two different sets of businesses. This is normal and it is not a fault in your setup.",
            "Several things move underneath a given answer. Responses are generated probabilistically rather than looked up. Some answers draw on live retrieval and others on training data, and which one happens is not exposed to the user. Location and any personalisation applied to a session change local results. Phrasing changes results substantially, and models are updated without notice.",
            "The practical consequence is that a single screenshot proves nothing, in either direction. If someone shows you one answer as evidence of a problem or a success, they are showing you a coin flip.",
        ) + CALLOUT(
            "A reasonable expectation",
            "Aim to move from being named occasionally to being named consistently across a set of questions. That is achievable and measurable. A promise of always appearing is not, and should be treated as a warning sign.",
        )),
        ("crawlability", "Website crawlability", P(
            "Start here, because everything else is wasted if this is broken. If the relevant crawlers cannot reach your pages, no amount of content or reputation work will help.",
            "Check that your robots.txt does not block the crawlers you want to allow, that important pages return a successful status rather than a redirect chain, and that your main content is present in the HTML rather than only appearing after JavaScript runs. That last point catches a surprising number of otherwise well built sites.",
            "OpenAI publishes the user agents it uses and how site owners can control them, which is worth reading directly rather than relying on summaries. It is a decision worth making deliberately: some publishers do block these crawlers, and that is a legitimate choice with a predictable cost.",
        )),
        ("search-availability", "Search availability", P(
            "Because assistants can retrieve live search results, being findable in conventional search is one of the more dependable routes into being mentioned.",
            "This is the part that most reliably rewards existing SEO work. If your pages are indexed, rank for the non-branded queries your customers use, and answer those queries clearly, you are already in the pool of material a retrieval step can draw on.",
            "It also means that if you have been neglecting conventional search on the assumption that it no longer matters, you have probably made your AI visibility worse rather than better.",
        )),
        ("entity-clarity", "Entity clarity", P(
            "A model has to work out what your business is before it can decide whether to recommend it. The easier that is, the better.",
            "Entity clarity means the basics agree wherever they appear: the legal and trading name, the address, the service area, the category of business, the services offered and how to make contact. If your website says one thing, your map profile says another and an old directory entry says a third, you are asking a system to resolve a conflict, and the cheapest resolution is often to recommend somebody less ambiguous.",
            "This is dull work with an unusually good return. It is also the area where we most often find something genuinely broken, typically a legacy listing nobody has looked at for years.",
        )),
        ("content", "Content usefulness", P(
            "Write the page that answers the question, then answer it in the first paragraph.",
            "Content aimed at models rather than people tends to fail at both. What works is closer to the opposite: identify the questions customers actually ask, give each one a page or a clearly labelled section, state the answer plainly up front, and then explain. Descriptive headings, explicit nouns rather than pronouns, and short definitions all make a passage easier to lift accurately.",
            "It helps to be specific about things a general model cannot know: your prices or price ranges, your service area, what you do not do, how long something takes, what happens at a first appointment. Specific information is more useful to a reader and more quotable to a system.",
        ) + PULL(
            "If a passage cannot be quoted accurately without the surrounding paragraph, it is probably not written clearly enough."
        )),
        ("authority", "Third-party authority", P(
            "What other sites say about you carries weight that your own site cannot carry on its own. This is the uncomfortable part of the work, because it is the least controllable.",
            "The realistic version is not a link building campaign. It is making sure you are present and accurately described in the places that already matter for your category: professional bodies, trade associations, legitimate industry directories, local press, supplier and partner sites, and any accreditation you actually hold.",
            "Quality matters far more than volume here, and low-quality directory submissions are largely a waste of money. One accurate entry on a body that genuinely governs your profession is worth more than fifty listings nobody consults.",
        )),
        ("citations", "Citations", P(
            "Where an assistant shows the sources behind an answer, those sources tell you what it currently trusts on that topic. This is the most useful free diagnostic available.",
            "Run the questions your customers ask, and look at what gets cited rather than only at who gets recommended. You will usually find a small set of sources doing most of the work in your category. Sometimes it is a review platform, sometimes a directory, sometimes a single well-written comparison article on a site you had never considered.",
            "Once you know what those sources are, the work becomes concrete: make sure you are present and correct on them, and understand why they are trusted.",
        )),
        ("reviews", "Reviews and public reputation", P(
            "Reviews function as evidence a system can point to when justifying a recommendation, which makes them more important here than in conventional search.",
            "Volume, recency and rating all appear to matter, though we would be cautious about anyone stating the exact weighting, because we have not seen a credible study establishing it and we have not finished our own. What is clearly true is that a business with almost no reviews gives a system very little to work with.",
            "The text is worth attention too. Reviews that mention the specific service, the location and the outcome give a model far more usable material than reviews that only say the experience was good.",
        )),
        ("local", "Local signals", P(
            "If you serve a specific area, local signals do a large amount of the work, because most commercially valuable questions have a location attached.",
            "The essentials are a complete and accurate map profile in the right primary category, an address and service area that match everywhere else, opening hours that are actually correct, and pages on your own site that name the areas you serve without descending into a list of a hundred near-identical location pages.",
            "Local intent also narrows the field considerably, which is good news: it is far easier to become a consistent answer for one city and one service than for a whole country.",
        )),
        ("structured", "Structured information", P(
            "Structured data does not make a business recommended. It makes a business easier to interpret without guessing, which is worth having.",
            "For most businesses the useful set is small: an Organization or LocalBusiness description, the services offered, and FAQ markup where you genuinely have questions and answers on the page. Keep it accurate and keep it consistent with the visible content, because markup that contradicts the page is worse than no markup.",
            "Treat it as removing ambiguity rather than sending a signal. That framing keeps expectations in the right place.",
        )),
        ("measuring", "Measuring visibility", P(
            "Build a fixed prompt set and re-run it on a schedule. Everything else is anecdote.",
            "A workable set is somewhere between fifty and a few hundred questions, written the way customers actually ask rather than the way marketers write keywords, covering your services, your area and the comparison questions people ask before choosing. Run it across the assistants your customers plausibly use, record whether you were named, and record who was named instead.",
            "Track the share of prompts naming you, your share against named competitors, and what gets cited. Then track whether enquiries are moving, because that is the only number that pays for the work.",
        )),
        ("mistakes", "Common mistakes", P("") + UL(
            "<strong>Judging by a single answer.</strong> One response tells you almost nothing.",
            "<strong>Asking a leading question.</strong> Typing your own company name and being pleased it appears is not a test.",
            "<strong>Abandoning SEO.</strong> In several products search visibility is the retrieval path.",
            "<strong>Publishing volume.</strong> Large amounts of thin content aimed at models is expensive and tends not to work.",
            "<strong>Ignoring the profile.</strong> An out-of-date listing quietly undermines everything else.",
            "<strong>Buying guarantees.</strong> Nobody can guarantee inclusion in a generated answer.",
        )),
        ("first", "What to do first", P(
            "In order, and without skipping the first one:",
        ) + OL(
            "Establish a baseline. Write thirty to fifty real customer questions and run them. Record what happens.",
            "Check crawlability and decide deliberately which crawlers you allow.",
            "Fix entity consistency. Name, address, category and services, everywhere they appear.",
            "Look at what gets cited for your questions, and make sure you are present and accurate there.",
            "Fill the obvious content gaps, answering each question directly at the top of the page.",
            "Work on reviews, steadily rather than in a burst.",
            "Re-run the same prompt set a month later and compare like for like.",
        ) + P(
            'If you would rather not assemble that yourself, our <a href="%s">free audit</a> is essentially step one done for you.' % L(UP, AUDIT),
        )),
    ],
    "sources": [
        'OpenAI, <a href="https://platform.openai.com/docs/bots" rel="nofollow">Overview of OpenAI crawlers</a>.',
        'Google Search Central, <a href="https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers" rel="nofollow">Overview of Google crawlers and fetchers</a>.',
    ],
    "related": ["what-is-answer-engine-optimization", "how-ai-recommends-local-businesses"],
}


# ==================================================================
#  ARTICLE 3
# ==================================================================
A3 = {
    "slug": "how-ai-recommends-local-businesses",
    "topic": "Local Search",
    "title": "How AI Systems Find and Recommend Local Businesses",
    "dek": "What happens between someone asking for a good local plumber and a specific company being named.",
    "description": "How AI assistants interpret local queries, retrieve information, and decide which businesses to recommend, and what a local business can do to improve its chances.",
    "author": "taliesin",
    "published": "2026-08-16",
    "updated": "2026-08-16",
    "reading": "14 min read",
    "cover": "warm",
    "sections": [
        ("direct-answer", "How do AI systems decide which local businesses to recommend?", P(
            '<span class="alr-answer">They interpret what the person wants and where they are, retrieve information from search results, business profiles, review platforms and directories, and then name businesses that appear both relevant and well evidenced across those sources.</span>',
            "No single source decides it. In our experience the businesses that get named consistently are rarely the ones with the most impressive website. They are the ones that are described the same way in a lot of places, have enough recent public feedback to be credible, and are unambiguous about what they do and where they do it.",
            "The rest of this article walks through the steps in roughly the order they happen, and then covers what a business can actually do about each one.",
        )),
        ("interpretation", "Query interpretation", P(
            "The first thing that happens is that the question gets turned into an intent. Someone asking for a good dentist near them, someone asking who does emergency root canals on a Sunday, and someone asking whether a particular practice is any good are three different problems.",
            "This matters more than it sounds. The phrasing determines whether the system looks for a shortlist at all. Some questions produce general advice with no companies named, some produce a category explanation, and some produce three names and a sentence each.",
            "It follows that the questions worth measuring are the ones that actually produce recommendations. Half the value of building a prompt set is discovering which phrasings do that in your category.",
        )),
        ("location", "Location", P(
            "Location is resolved from whatever the system has: an explicit place in the question, the user's stated location, or session context. If the question does not contain a place and the system has no other signal, answers become generic.",
            "For a business this has a practical consequence. Your service area needs to be stated in words on your own site, not only implied by an address in the footer. A practice in a suburb that serves three neighbouring towns should say so somewhere a machine can read it.",
            "It also means that the boundaries of your visibility are geographic, and testing should reflect that. Being recommended in your own postcode and invisible two towns over is a common and fixable pattern.",
        )),
        ("relevance", "Service relevance", P(
            "The system then needs to match the specific service to businesses that provide it. This is where vague positioning becomes expensive.",
            "A site that describes itself as offering comprehensive care is harder to match to a specific request than one that lists the treatments it performs. Generic professional language reads well to a human who already knows what you do and poorly to a system trying to establish whether you do a specific thing.",
            "Name the services. Use the terms customers use as well as the ones the profession uses. If you do not offer something people commonly assume you offer, say that too, because it prevents a certain kind of wasted enquiry.",
        )),
        ("retrieval", "Search retrieval", P(
            "Many assistants perform a live search and read the results before answering. When that happens, conventional ranking becomes a direct input into who gets considered.",
            "This is the most concrete link between SEO and AI recommendation, and it is why treating them as separate disciplines tends to produce worse outcomes in both. If you do not appear in results for the equivalent query, you are not in the pool of material that gets read.",
            "Not every answer works this way, and no product tells you which mode it used. But when the retrieval path runs through search, search visibility is close to a prerequisite.",
        )),
        ("website", "Website information", P(
            "Your site is where the system confirms the specifics: what you do, where, for whom, and how to proceed. It is also the source most likely to be quoted directly.",
            "The pages that do well here are unglamorous. A clear services list. A page per significant service that answers the obvious question in its first paragraph. Locations stated in text. Prices or ranges where you can give them. Opening hours that match your profile. Contact details that are consistent with everywhere else.",
            "What does not help is a site where the substance is spread across marketing copy that never quite states anything checkable.",
        )),
        ("profiles", "Business profiles", P(
            "Map and business profiles are among the most heavily used sources for local questions, and they are usually the fastest thing to fix.",
            "The essentials: correct primary category, complete service list, accurate address or service area, genuinely current opening hours, and a description that matches your website rather than one written years ago for a different positioning.",
            "The primary category deserves particular attention. It is a strong signal about what kind of business you are, and it is set once and then forgotten by most owners.",
        )),
        ("reviews", "Reviews", P(
            "Reviews are the most readily available evidence of whether other people found a business good, which makes them useful to a system that is being asked to vouch for somebody.",
            "Volume, recency and rating all appear to contribute. We would not put a precise weighting on them, because we have not seen a credible public study that establishes one and our own work on this is not finished. What is clear is that a thin or stale review profile gives a system very little to justify a recommendation with.",
            "The content is underrated. Reviews that name the treatment, the location or the outcome give far more usable material than a five-star rating with no text.",
        )),
        ("directories", "Directories", P(
            "Directories matter selectively. A small number carry real weight in each category, and a great many carry none at all.",
            "The ones that tend to count are those a human would actually consult: professional registers, trade bodies, licensing authorities, established local guides. The ones that tend not to count are the bulk submission services sold as an SEO product.",
            "The practical task is to find which ones appear in the sources behind answers in your category, and make sure your entry there is present and correct.",
        )),
        ("mentions", "Mentions", P(
            "Ordinary mentions elsewhere contribute to the sense that a business exists in the world and is regarded in a particular way. This includes local press, community pages, supplier and partner sites, sponsorships and event listings.",
            "None of these are links to be acquired in the old sense. They are evidence of activity, and they are more persuasive when they are genuine, which is inconvenient for anyone hoping to buy them.",
            "For most local businesses this accumulates slowly as a side effect of operating, and the useful intervention is simply making sure your name is spelled and described consistently when it happens.",
        )),
        ("citations", "Citations", P(
            "Where the assistant shows its sources, read them. This is the closest thing to seeing the working.",
            "Across a set of questions you will usually find a small group of sources doing most of the work in your category. That group is your actual competitive landscape for retrieval, and it is frequently not what the business expected.",
            "Once identified, it converts a vague objective into a concrete list: be present, be accurate, and understand why those sources are trusted.",
        )),
        ("ranking", "Search ranking", P(
            "Conventional ranking still matters, both as a retrieval path and as a source of customers in its own right.",
            "The relationship is not one to one. We have seen businesses rank well and still be absent from the equivalent AI answer, usually because the entity behind the ranking page is unclear or unsupported elsewhere. We have also seen the reverse, where a business with modest rankings is named consistently because the wider web describes it very clearly.",
            "Measuring both, and noticing when they disagree, is more informative than either on its own. This is one of the questions our research programme is currently looking at.",
        )),
        ("entity", "Entity clarity", P(
            "The single most common fixable problem we encounter. A business is described one way on its site, another on its map profile, and a third on a directory entry created years ago.",
            "Every inconsistency is something a system has to resolve, and resolving it in your favour is not guaranteed. Two trading names, a moved address that still appears somewhere, or a category that no longer reflects the business all cost more than they appear to.",
            "The fix is an audit and a cleanup rather than anything clever. It is boring and it works.",
        )),
        ("trust", "Trust signals", P(
            "Systems being asked to recommend a business tend to favour ones with visible, checkable credibility. Registration with a relevant body, named practitioners with stated qualifications, real contact details, a physical address where applicable and clear policies all contribute.",
            "None of these are magic. Collectively they make the difference between a business that can be vouched for and one that is merely present.",
            "For regulated professions in particular, presence on the relevant register is worth confirming rather than assuming.",
        )),
        ("why-differ", "Why recommendations differ", P(
            "Because these systems are probabilistic, because different products retrieve differently, because location and phrasing change the result, and because models change without notice.",
            "This is worth explaining to anyone who is comparing screenshots and drawing conclusions. Two colleagues in the same office can get different answers to the same question, and neither result is the truth.",
            "It is also the reason measurement has to be repeated and aggregated. The pattern across a hundred questions is real. Any individual answer is not.",
        )),
        ("improve", "How a business can improve its chances", P(
            "In the order we would usually do it:",
        ) + OL(
            "Establish a baseline across a realistic set of local questions.",
            "Fix entity consistency: name, address, service area, category and services everywhere.",
            "Complete and correct the map profile, starting with the primary category.",
            "Make sure the site states services and areas explicitly, in text.",
            "Answer the top customer questions directly, one page or clear section each.",
            "Build reviews steadily, and encourage specifics rather than just a rating.",
            "Get present and accurate on the sources that actually get cited in your category.",
            "Re-run the same questions and compare.",
        ) + P(
            'None of it is dramatic. Most of the businesses we see improve do so because a lot of small ambiguities got removed, not because of one clever intervention. There is more on how we measure this on <a href="%s">Work</a>.' % L(UP, WORK),
        )),
    ],
    "sources": [
        'Google Search Central, <a href="https://developers.google.com/search/docs/appearance/structured-data/local-business" rel="nofollow">Local business structured data</a>.',
        'Schema.org, <a href="https://schema.org/LocalBusiness" rel="nofollow">LocalBusiness</a>.',
    ],
    "related": ["how-to-improve-visibility-in-chatgpt", "what-is-answer-engine-optimization"],
}


# ==================================================================
#  ARTICLE 4
# ==================================================================
A4 = {
    "slug": "aeo-vs-seo",
    "topic": "AEO",
    "title": "AEO vs SEO: What's Actually Different?",
    "dek": "The differences are real but narrower than the marketing suggests, and the overlap is where most of the value sits.",
    "description": "A direct comparison of answer engine optimization and search engine optimization: what they share, where they genuinely differ, and why most businesses should treat them as one system.",
    "author": "emerson",
    "published": "2026-08-16",
    "updated": "2026-08-16",
    "reading": "11 min read",
    "cover": "",
    "sections": [
        ("short-answer", "What is the difference between AEO and SEO?", P(
            '<span class="alr-answer">SEO works to rank a page for a query. AEO works to have a business named inside a generated answer. They share most of their technical and editorial foundations, and differ mainly in what counts as success, how stable the result is, and whether the focus is a page or the business as an entity.</span>',
            "The honest summary is that these are two ends of one discipline rather than two disciplines. Most of the work that improves one improves the other, and the businesses treating them as opposed tend to underperform at both.",
        )),
        ("seo", "What SEO is", P(
            "Search engine optimization is the practice of improving how well a site's pages rank in conventional search results for the queries its audience uses.",
            "It covers technical health, information architecture, content quality and relevance, internal linking, and the external signals that suggest a page is worth surfacing. Success is measurable and reasonably stable: a position for a query, impressions, clicks and what those visitors go on to do.",
        )),
        ("aeo", "What AEO is", P(
            "Answer engine optimization is the practice of making a business easy for AI answer engines to find, understand, trust and name in a response.",
            "It covers much of the same ground, plus the accuracy and consistency of how a business is described everywhere else on the web, and the evidence supporting its credibility. Success is a frequency rather than a position: the share of relevant questions in which the business comes up.",
        )),
        ("shared", "What they share", P(
            "More than the marketing around either suggests.",
        ) + UL(
            "Pages have to be crawlable and readable.",
            "Site structure has to make sense.",
            "Content has to genuinely answer what was asked.",
            "The business has to be identifiable and consistently described.",
            "External credibility carries weight in both.",
            "Both are measured over time rather than judged on one observation.",
        ) + P(
            "If an AEO recommendation would actively damage your SEO, it is worth a second look. In our experience that combination usually indicates bad advice rather than a genuine trade-off.",
        )),
        ("ranking-vs-recommendation", "Ranking versus recommendation", P(
            "This is the difference that changes strategy. Ranking is ordinal and gradual: moving from position eleven to position six is real progress with real traffic attached.",
            "Recommendation is closer to binary. You are named or you are not, and there is no second page to be on. That compresses the competitive field and raises the cost of being nearly good enough.",
            "It also changes what a plateau means. In search, being stuck at position four is a position. In an answer, being the fourth best candidate when three get named is indistinguishable from being nowhere.",
        )),
        ("retrieval", "Retrieval", P(
            "Search retrieves from an index it maintains. Answer engines retrieve from a mixture of what the model absorbed in training and, in many products, live results fetched at the moment of asking.",
            "The live retrieval path is the one that connects the two disciplines most directly, and it is why search visibility remains one of the more reliable inputs into AI visibility.",
            "The training-data path behaves differently: it is fixed at a point in time and tends to favour entities that are extensively documented. A new business cannot influence it quickly, which is another argument for working on the retrievable web.",
        )),
        ("citations", "Citations", P(
            "Search results are the destination. Citations are supporting evidence attached to an answer, and they behave differently.",
            "A cited source is not necessarily the recommended business. Frequently it is a review platform, a directory or a comparison article that mentions several companies. That means being cited and being recommended are two separate things to measure, and improving one does not automatically improve the other.",
        )),
        ("entity", "Entity understanding", P(
            "Search can rank a page without a confident view of the organisation behind it. An answer engine recommending a business is making a claim about that organisation, so it needs a clearer picture.",
            "This is where AEO adds work that traditional SEO often skipped: making sure the name, location, category, services and credentials agree across the entire web rather than just reading well on the site.",
        )),
        ("authority", "Authority", P(
            "Both care about external credibility, but they weigh it differently. Search has historically leaned heavily on links as a proxy for authority.",
            "For recommendation, what tends to matter is corroboration: several independent sources describing the business consistently and positively. A professional register entry, an accurate directory listing and a body of recent reviews can carry more weight than a link that would once have been prized.",
        )),
        ("structure", "Website structure", P(
            "Largely the same requirements, with a stronger emphasis on extractability. Clear headings, one idea per section, explicit nouns instead of pronouns, and answers stated before elaboration.",
            "A useful test: can a section be quoted on its own without becoming misleading? If not, it is probably harder to use than it needs to be, for readers as well as machines.",
        )),
        ("content", "Content", P(
            "SEO rewards content that satisfies a query better than the alternatives. AEO rewards content that can be extracted accurately and attributed confidently.",
            "In practice the second is a stricter version of the first. Specific, checkable information does well under both. Vague marketing copy does poorly under both, and it has simply become more obvious which is which.",
        )),
        ("links", "Links", P(
            "Links still matter for search. For recommendation, the mention itself often does the work, whether or not it is linked.",
            "This shifts the emphasis from acquiring links to being accurately present in the right places. It also makes a certain amount of traditional link building look like a poor use of budget for a local business, compared with fixing its listings.",
        )),
        ("reviews", "Reviews", P(
            "Reviews have always influenced local search. For AI recommendation they take on an additional role as citable evidence supporting a claim about quality.",
            "Recency and specificity matter more than they used to. A wall of old five-star ratings with no text is weaker evidence than a smaller number of recent reviews that describe what actually happened.",
        )),
        ("measurement", "Measurement", P(
            "The clearest practical difference, and the one most often skipped.",
            "SEO is measured with rank tracking, impressions and clicks, and the numbers are stable enough to read week to week. AEO has to be measured by running a fixed set of prompts repeatedly and aggregating, because any single answer is noise.",
            "Anyone selling AEO without a repeatable measurement method is selling something unverifiable. That is the question worth asking first.",
        ) + TABLE(
            "AEO and SEO compared",
            ["", "SEO", "AEO"],
            [
                ["Goal", "Rank a page for a query", "Be named in a generated answer"],
                ["Result shape", "Ordinal position", "Frequency of inclusion"],
                ["Unit of focus", "The page", "The business as an entity"],
                ["Stability", "Reasonably stable", "Varies between identical asks"],
                ["Retrieval", "Search index", "Training data and live retrieval"],
                ["External signals", "Links weigh heavily", "Corroboration and mentions weigh heavily"],
                ["Reviews", "Influence local ranking", "Also act as citable evidence"],
                ["Measurement", "Rank, impressions, clicks", "Repeated prompt sets, share of voice, citations"],
                ["Guarantees", "None credible", "None credible"],
            ],
        )),
        ("one-system", "Why most businesses should treat them as one system", P(
            "Because the inputs are shared, the retrieval paths are connected, and splitting them creates work that gets done twice or not at all.",
            "A business that fixes its crawlability, states clearly what it does and where, answers real customer questions directly, keeps its listings accurate and accumulates genuine reviews has improved both at once. There is no separate AEO project hiding behind that list.",
            "Where AEO genuinely adds something is in measurement and in entity work: running prompt sets, tracking share of voice and citations, and taking consistency across the wider web more seriously than a conventional SEO engagement usually would.",
            'If you want to see what that looks like applied, <a href="%s">Work</a> covers how we measure it and <a href="%s">Research</a> covers what we are still trying to establish.' % (L(UP, WORK), L(UP, RESEARCH)),
        )),
    ],
    "sources": [
        'Google Search Central, <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" rel="nofollow">SEO Starter Guide</a>.',
        'OpenAI, <a href="https://platform.openai.com/docs/bots" rel="nofollow">Overview of OpenAI crawlers</a>.',
    ],
    "related": ["what-is-answer-engine-optimization", "how-to-improve-visibility-in-chatgpt"],
}


ARTICLES = [A1, A2, A3, A4]
BY_SLUG = {a["slug"]: a for a in ARTICLES}


def cover(article, cls="alr-cover"):
    mod = article.get("cover") or ""
    suffix = (" " + "alr-cover--" + mod) if mod else ""
    return '<div class="%s%s" aria-hidden="true"><span>%s</span></div>' % (cls, suffix, esc(article["topic"]))


def toc(article):
    items = "".join(
        '<li><a href="#%s">%s</a></li>' % (sid, esc(heading))
        for sid, heading, _ in article["sections"]
    )
    return """<nav class="alr-toc alr-glass" data-alr-toc aria-labelledby="alr-toc-title">
    <p class="alr-toc-title" id="alr-toc-title">Contents</p>
    <ol>%s</ol>
  </nav>""" % items


def build(article):
    a = article
    author = AUTHOR_META[a["author"]]
    body_sections = "".join(
        '<h2 id="%s">%s</h2>%s' % (sid, esc(heading), html)
        for sid, heading, html in a["sections"]
    )

    sources = ""
    if a.get("sources"):
        sources = (
            '<section class="alr-sources"><h2>Sources</h2><ol>%s</ol>'
            '<p class="alr-small" style="margin-top:14px">Where we describe how a system behaves without a citation, we are '
            'describing what we have observed rather than documented behaviour, and it may change.</p></section>'
            % "".join("<li>%s</li>" % s for s in a["sources"])
        )

    related = ""
    if a.get("related"):
        cells = []
        for slug in a["related"]:
            r = BY_SLUG[slug]
            cells.append(
                """<a class="alr-xlink" href="{href}">
          <span class="alr-tag">{topic}</span>
          <span class="alr-h4" style="margin-top:8px">{title}</span>
          <p>{dek}</p>
          <span class="alr-arrow" style="margin-top:6px">Read<i aria-hidden="true">&#8594;</i></span>
        </a>""".format(
                    href="/insights/" + r["slug"],
                    topic=esc(r["topic"]),
                    title=esc(r["title"]),
                    dek=esc(r["dek"]),
                )
            )
        related = (
            '<section class="alr-section alr-section--paper"><div class="alr-wrap">'
            '<div style="max-width:46ch;margin-bottom:24px"><p class="alr-eyebrow">Keep reading</p>'
            '<h2 class="alr-h2">Related</h2></div>'
            '<div class="alr-xlinks">%s</div></div></section>' % "".join(cells)
        )

    authorbox = """<div class="alr-authorbox">
    <div>
      <p class="alr-note-label">Written by</p>
      <p class="alr-h4" style="margin-top:6px"><a class="alr-link" href="{ahref}">{aname}</a></p>
      <p class="alr-small">{arole}</p>
    </div>
    <div>
      <p class="alr-note-label">About Answered Labs</p>
      <p class="alr-small" style="margin-top:6px">We are an answer engine optimization agency. We test how AI systems find and recommend businesses, publish what we learn, and apply it to client work. <a class="alr-link" href="{about}">More about us</a>.</p>
    </div>
  </div>""".format(
        ahref=L(UP, ABOUT) + "#" + author["anchor"],
        aname=esc(author["name"]),
        arole=esc(author["role"]),
        about=L(UP, ABOUT),
    )

    header = """<section class="alr-section alr-section--white" style="padding-bottom:clamp(28px,3.5vw,44px)">
  <div class="alr-wrap">
    <div class="alr-measure">
      {crumbs}
      <p class="alr-eyebrow alr-eyebrow--accent">{topic}</p>
      <h1 class="alr-display" style="font-size:clamp(32px,4.8vw,56px)">{title}</h1>
      <p class="alr-dek">{dek}</p>
      <div class="alr-metaline" style="margin-top:28px;padding-top:20px;border-top:1px solid var(--al-rule)">
        <a class="alr-link" href="{ahref}">{aname}</a>
        <span class="sep">&middot;</span>
        <time datetime="{published}">{published_h}</time>
        <span class="sep">&middot;</span>
        <span>{reading}</span>
      </div>
    </div>
  </div>
</section>""".format(
        crumbs=crumbs(UP, [("Home", "/"), ("Insights", L(UP, INSIGHTS)), (a["title"], None)]),
        topic=esc(a["topic"]),
        title=esc(a["title"]),
        dek=esc(a["dek"]),
        ahref=L(UP, ABOUT) + "#" + author["anchor"],
        aname=esc(author["name"]),
        published=a["published"],
        published_h=human_date(a["published"]),
        reading=esc(a["reading"]),
    )

    main = """<section class="alr-section alr-section--white" style="padding-top:0">
  <div class="alr-wrap">
    <div class="alr-article-layout">
      {toc}
      <div class="alr-article">
        {sections}
        {sources}
        {authorbox}
      </div>
    </div>
  </div>
</section>""".format(toc=toc(a), sections=body_sections, sources=sources, authorbox=authorbox)

    cta_block = """<section class="alr-section alr-section--paper">
  <div class="alr-wrap">
    <div class="alr-measure alr-cta">
      <h2 class="alr-h2">See where you currently appear</h2>
      <p class="alr-dek" style="margin-inline:auto">We will run a prompt set for your category and area, and show you who is being recommended today.</p>
      <div class="alr-cta-actions">
        <a class="alr-btn alr-btn--primary" href="{audit}">Get your free audit</a>
        <a class="alr-btn alr-btn--ghost" href="{book}">Book a call</a>
      </div>
    </div>
  </div>
</section>""".format(audit=L(UP, AUDIT), book=L(UP, BOOK))

    body = header + main + related + cta_block

    schema = [
        {
            "@type": "BlogPosting",
            "@id": "%s/insights/%s#article" % (ORIGIN, a["slug"]),
            "headline": a["title"],
            "description": a["description"],
            "inLanguage": "en",
            "datePublished": a["published"],
            "dateModified": a["updated"],
            "author": {
                "@type": "Person",
                "name": author["name"],
                "url": "%s/about#%s" % (ORIGIN, author["anchor"]),
            },
            "publisher": {"@id": ORIGIN + "/#organization"},
            "isPartOf": {"@id": ORIGIN + "/#website"},
            "mainEntityOfPage": "%s/insights/%s" % (ORIGIN, a["slug"]),
            "articleSection": a["topic"],
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": ORIGIN + "/"},
                {"@type": "ListItem", "position": 2, "name": "Insights", "item": ORIGIN + "/insights"},
                {"@type": "ListItem", "position": 3, "name": a["title"],
                 "item": "%s/insights/%s" % (ORIGIN, a["slug"])},
            ],
        },
    ]

    return {
        "file": "insights/%s.html" % a["slug"],
        "priority": "0.7",
        "modified": a["updated"],
        "page": {
            "slug": "insights/" + a["slug"],
            "depth": 1,
            "title": "%s | Answered Labs" % a["title"],
            "description": a["description"],
            "body": body,
            "schema_nodes": schema,
            "og_type": "article",
        },
    }


MONTHS = ["January", "February", "March", "April", "May", "June", "July",
          "August", "September", "October", "November", "December"]


def human_date(iso):
    y, m, d = iso.split("-")
    return "%d %s %s" % (int(d), MONTHS[int(m) - 1], y)
