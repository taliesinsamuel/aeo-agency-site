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

Figures follow the same rule and declare which kind they are through the
chip in their header. A conceptual figure explains how something works and
carries no number that is not already stated in the surrounding prose. An
empirical figure plots values from an external study, names the source
beneath itself, and adds that source to the article's Sources list. There
is no first-party dataset published on this site, so nothing here is
presented as Answered Labs research. Where a chart would have needed
invented data to work, it was built as a conceptual figure instead.
See resources-src/figures.py.
"""

from components import (
    ABOUT, AUDIT, BOOK, INSIGHTS, RESEARCH, WORK, L, arrow, crumbs, esc,
)
from figures import (
    anatomy, bands, bars, converge, depth, diverging, drivers, figure, flow,
    grouped, hub, keyfindings, lines, note, overlap, pairs, panel, panels,
    slope, stack, stacked, stats, subplots, system,
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
    "updated": "2026-08-20",
    "reading": "20 min read",
    "cover": "",
    "sections": [
        ("definition", "What is answer engine optimization?", P(
            '<span class="alr-answer">Answer engine optimization (AEO) is the practice of making a business easy for AI answer engines to find, understand, trust and name in a response.</span> It covers the work on a company\'s own website, the information about it elsewhere on the web, and the evidence that supports its credibility.',
            "The sharper version of the distinction is worth stating early. Conventional search engine optimization improves a page so that it can be found in a ranked retrieval environment, where a human makes the final choice from a list. AEO raises the probability that a business, product or source is <strong>retrieved</strong>, <strong>understood</strong>, <strong>trusted</strong>, <strong>cited</strong>, <strong>mentioned</strong> or <strong>recommended</strong> inside an answer the system has already composed.",
            "Those six are not one outcome under six names, and confusing them is the most common analytical error in this field. A source can be cited without the brand behind it being named anywhere in the answer. A brand can be mentioned in an answer that cites somebody else's website entirely. A business can be retrieved into the working set a system considers and then fail to survive into the output. Each of those is a different problem with a different fix, and the research on which is which is the subject of a separate article on "
            '<a href="/insights/what-makes-ai-cite-a-page">what makes AI cite a page</a>.',
            "The name is newer than the idea. What has changed is the destination. For twenty years the goal of being findable online was to occupy a position on a page of results and earn a click. Increasingly the goal is to be the business a system mentions when it answers a question directly, often without any page of results appearing at all.",
            "AEO is the work that makes that more likely. It is not a way to manipulate a model, and there is no setting inside any assistant that a business can adjust. It is closer to the unglamorous discipline of making yourself legible, verifiable and worth mentioning.",
        ) + keyfindings("kf-aeo", [
            ("AEO measures inclusion, not ranking.",
             "Success is being named in an answer, not occupying a position on a page."),
            ("Your website is one source among many.",
             "Search results, profiles, reviews, directories and press all feed the same answer."),
            ("AI answers are probabilistic.",
             "The same question can return different companies, so single observations are weak evidence."),
            ("AEO and SEO share almost all of their foundations.",
             "Crawlability, clear structure and genuinely useful content matter to both."),
            ("Answer engines reason about entities, not pages.",
             "A page can rank while the business behind it stays vague, and a vague entity is hard to recommend."),
            ("Nobody can guarantee inclusion.",
             "What can be influenced is the probability of being named, and whether it is rising."),
        ])),
        ("why", "Why AEO exists", P(
            "Answer engines changed what a query returns. When someone asks an assistant which company they should use, they are usually given a small number of named options with a short justification, rather than a page of links to work through themselves. A shortlist of three is a very different competitive environment from a list of ten.",
            "That compresses the field considerably. There is no second page, and the difference between being named and not being named is total. A business that ranks seventh for a search term still gets some traffic. A business that is not in an assistant's shortlist gets nothing from that conversation.",
        ) + figure(
            "fig-a1-field",
            "A shortlist compresses the visible field",
            bars([
                ("Conventional search, results on a page", 10, "10", "grey"),
                ("AI answer, options named", 3, "3", ""),
            ], scale=10, ticks=["0", "5", "10"]) + note(
                "Lower search positions still exist, and a business sitting in them still "
                "receives some attention. There is no equivalent of position seven inside a "
                "generated answer."
            ),
            "Illustrative comparison based on the example used in this article: roughly ten "
            "results against a shortlist of three. AI answers vary and do not always return "
            "exactly three businesses, so read the three as a placeholder for "
            "&ldquo;a few&rdquo; rather than a measured figure.",
            kind="Illustrative",
        ) + P(
            "Position seven is a worse version of the same thing: still visible, still occasionally chosen by somebody who scrolls. Being the fourth strongest candidate when three get named produces the same number as not existing.",
            "The deeper change is where the evaluation happens. A page of results hands the work of comparing to the person searching: they read the titles, click two or three and decide. A generated answer takes most of that work back and performs it on the user's behalf, then reports a conclusion.",
            "That reassignment is what creates the requirement. A search engine can rank a page it only partly understands, because a human is going to make the final judgement a second later. A system putting three names forward is making a claim about those businesses, and it needs enough evidence to justify the claim before it makes it. This is why so much of the practical work in AEO turns out to be about supplying evidence rather than optimising pages.",
        )),
        ("what-engines-do", "What answer engines actually do", P(
            "Broadly, an answer engine interprets the question, retrieves information it thinks is relevant, and composes a response from what it retrieved. The details vary between products and change frequently, but that shape is fairly consistent.",
        ) + figure(
            "fig-a1-pipeline",
            "Retrieval is the stage a business can reach",
            flow([
                ("Question", None),
                ("Interpretation", None),
                ("Retrieval", ["Model knowledge", "Live retrieval"]),
                ("Evidence", None),
                ("Answer", None),
            ]) + note(
                "Both retrieval paths converge before the evidence is assembled. Products "
                "combine them differently and none of them publish the ratio, which is why "
                "the same question can take a different route on two occasions."
            ),
            "Conceptual. The shape is fairly consistent across products, but the details "
            "vary and change frequently. Only the retrieval stage is open to influence, and "
            "only through what exists to be retrieved.",
        ) + P(
            "At a level of detail that is actually useful, six things tend to happen, in roughly this order:",
        ) + OL(
            "<strong>Interpret the request.</strong> Work out what is being asked, including whatever the conversation so far has established.",
            "<strong>Decompose or reformulate it.</strong> Break a broad question into narrower ones, or rewrite it into the forms that are likely to retrieve useful material. A single question can become several queries.",
            "<strong>Retrieve, or rely on what the model already holds.</strong> Fetch live material, draw on training data, or combine the two.",
            "<strong>Assess the available evidence.</strong> Decide which of the retrieved material is relevant, current and credible enough to use.",
            "<strong>Compose the answer.</strong> Write a response from the material that survived, in the register the question called for.",
            "<strong>Decide who is named.</strong> Choose which businesses and sources appear in the output, and which are dropped despite having been retrieved.",
        ) + P(
            "It is worth being clear about what that list is. It is a useful conceptual model, not documented internal architecture. No major assistant publishes its retrieval pipeline, the products differ from each other, and any one of them may skip, merge or reorder these stages depending on the question, the mode it is running in and the version it happens to be. Anybody presenting a diagram of the hidden mechanics with more confidence than this is guessing.",
            "What the model is good for is locating where a business can act. Steps one, two, five and six happen inside a system nobody outside it can influence. Step three is where a business appears or fails to, and it appears only through material that already exists somewhere retrievable. Step four is where evidence either supports naming you or does not.",
            "The retrieval step therefore matters most, and it behaves differently depending on which path a given answer takes. Some systems answer partly from what the model absorbed during training, which is fixed at a point in time and heavily weighted toward well documented entities. Others perform a live search and read the results before answering, which is why current search visibility can translate quite directly into being mentioned.",
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
        ) + figure(
            "fig-a1-sources",
            "Six independent descriptions of the same business",
            hub("Business recommendation", [
                "Own website",
                "Search results",
                "Business profiles",
                "Reviews",
                "Directories and professional bodies",
                "Press and third-party mentions",
            ]),
            "AI systems can assemble an answer from several independent descriptions of the "
            "same business. The website is one source among many. Every source is drawn the "
            "same size deliberately: nothing establishes how they are weighted against each "
            "other.",
        ) + P(
            "The useful way to think about this is that <strong>the wider web acts as corroborating evidence</strong>. A system assembling an answer about your business may be looking at what the company says about itself, what directories record, what reviews repeatedly describe, what publications have written, what a professional register confirms, what search surfaces for the equivalent query, and what unrelated sites happen to repeat. Where those agree, there is very little to resolve. Where they disagree, something has to give. A company can have an excellent site and still lose to a competitor described more consistently everywhere else.",
            "It is worth being precise about how conflict causes trouble, rather than treating it as a vague penalty. Nothing is deducting points. What happens is that the system has a choice to make it did not need to make, and one available resolution is always to name a business whose details do not conflict. The competitor with a duller website and one consistent story is the cheaper answer.",
            "In practice the conflicts we find are mundane. A trading name on the site and a legal name on the map profile. An address that moved three years ago and still appears on two directories. A service the business stopped offering, still listed. None of these look like an AEO problem on an audit spreadsheet, and collectively they are one of the largest ones.",
        )),
        ("vs-seo", "How AEO differs from SEO", P(
            "The clearest difference is what success looks like. SEO aims at a position for a query. AEO aims at inclusion in an answer, which is not a ranked list and does not have positions in the same sense.",
            "The second difference is stability. A search ranking is reasonably stable and can be checked. An AI answer is probabilistic: ask the same question twice and you may get two different sets of companies. That makes single observations close to worthless and makes measurement across a fixed set of repeated questions essential.",
            "The third is the unit of attention. Search rewards pages. Answer engines reason about entities, meaning the business itself as a thing with a name, a location, a category and a reputation. A page can rank while the entity behind it stays vague, and a vague entity is hard to recommend. That third difference does most of the work in practice, so it is worth a section of its own.",
        )),
        ("entity", "Why entity understanding matters", P(
            "<span class=\"alr-answer\">Because a system cannot recommend a business it cannot confidently identify.</span> Before anything else happens, the question of which organisation is being discussed has to resolve to one answer, and for a surprising number of businesses it does not.",
            "An entity, in this context, is the business as a single identifiable thing rather than as a collection of pages. Resolving it confidently means being able to establish a short list of facts and find them agreeing wherever they appear:",
        ) + UL(
            "<strong>A canonical name.</strong> One name that is clearly the primary one, with any legal or former names discoverable but subordinate to it.",
            "<strong>A category.</strong> What kind of business this is, in terms somebody outside the industry would recognise.",
            "<strong>Locations.</strong> Where it operates from, and separately, where it serves.",
            "<strong>Services.</strong> What it actually does, named specifically enough to be matched to a request.",
            "<strong>People.</strong> Who works there, in the categories where that matters, which is most professional services.",
            "<strong>Credentials.</strong> Registrations, licences, accreditations and memberships, verifiable against the body that issued them.",
            "<strong>Relationships.</strong> Parent companies, subsidiaries, brands, franchises and partnerships, where any of those could otherwise be mistaken for a separate business.",
            "<strong>Reputation.</strong> What the public record of experience with it says.",
            "<strong>External mentions.</strong> Where the wider web refers to it, and whether it refers to it consistently.",
        ) + figure(
            "fig-a1-entity",
            "An entity is what several independent descriptions agree on",
            converge(
                "What the web says about one business",
                ["Canonical name", "Category", "Locations", "Services", "People",
                 "Credentials", "Relationships", "Reputation", "External mentions"],
                ["Consistent across sources", "A business that can be resolved",
                 "A business that can be recommended"],
            ) + note(
                "The narrowing is the point. Each of these can be established from several "
                "sources, and a system only needs one of them to disagree to have a question "
                "it did not previously have."
            ),
            "Conceptual. The nine inputs are the fields listed in this section, not a ranked "
            "or weighted set, and nothing establishes that any system resolves entities in "
            "this order or through these categories.",
        ) + P(
            "Pages and entities are related but not interchangeable, and the difference explains a pattern that otherwise looks like a contradiction. A page is a document with a URL that can rank for a query. An entity is the thing several documents are about. Search can succeed at the page level while saying almost nothing at the entity level: a well-optimised service page can rank for a competitive term while the organisation behind it remains a name in a footer, with no category, no verifiable credentials and three different addresses in circulation.",
            "That is how a business ends up ranking well and being absent from the equivalent generated answer. Nothing has gone wrong with the page. The system simply has a page it can retrieve and not enough about the company to put it forward as a recommendation.",
            "The corollary is more encouraging. Entity work is unusually tractable, because most of it is correcting things that are already wrong rather than creating something new, and it is one of the few areas where a small business can be materially better documented than a larger competitor.",
        )),
        ("overlap", "Where AEO and SEO overlap", P(
            "A great deal, and the overlap is more useful than the difference. Conventional search work feeds AI visibility through two distinct routes, and keeping them separate makes the relationship much easier to reason about.",
            "The <strong>direct</strong> route is retrieval. Where an assistant fetches live results and reads them before answering, search visibility is close to being the retrieval mechanism itself: material that does not surface for the equivalent query is not in the pool being read.",
            "The <strong>indirect</strong> route is everything else SEO produces. Crawlable pages, sensible site structure, content that answers real questions, credible external references and general discoverability all improve the odds of being retrieved by any mechanism, including ones that have nothing to do with a search index. This route matters even in products that never run a search.",
            "What should not be claimed is that ranking is a prerequisite for citation. It plainly is not, and the numbers on this are worth knowing: in a study of 15,000 prompts, most AI-cited URLs did not rank in the top ten for the original prompt, and the large majority were not in the top hundred at all. We look at that data, and what it does and does not prove, in "
            '<a href="/insights/aeo-vs-seo">the AEO and SEO comparison</a>.',
            "The technical foundations are shared almost entirely. A page that cannot be crawled, renders slowly, or hides its content behind scripts is a problem for both. So is a site with an unclear structure, duplicated pages or thin content.",
            "The editorial foundations overlap too. Content that answers a real question directly, in the words a person would use, is easier for a reader to use and easier for a model to extract from. It is rare to find AEO advice that is genuinely bad for SEO, and when you do, it is usually a sign that the advice is bad generally.",
        ) + figure(
            "fig-a1-overlap",
            "Most of the work sits in the middle",
            overlap(
                ("SEO emphasis", ["Rankings", "Pages", "Links"]),
                ("Shared", ["Crawlability", "Clear structure", "Useful content",
                            "Search visibility", "Credibility", "Technical health"]),
                ("AEO emphasis", ["Entities", "Citations", "Recommendation presence",
                                  "Cross-web consistency"]),
            ),
            "Conceptual. The shared centre is where almost all of the practical work is, "
            "which is why advice that genuinely helps one discipline is rarely bad for the "
            "other.",
        )),
        ("influence", "What you can and cannot influence", P(
            "<span class=\"alr-answer\">You can influence the evidence available about your business. You cannot influence how any given system weighs it, or which system somebody happens to be using.</span> Keeping those two lists separate is what makes the work plannable.",
        ) + '<h3>Within reach</h3>' + P(
            "More than people expect, though none of it is a lever that produces a guaranteed outcome:",
        ) + UL(
            "<strong>Crawlability.</strong> Whether the relevant crawlers can reach and read your pages at all.",
            "<strong>Clarity.</strong> Whether your site states plainly what you do, who for, and where.",
            "<strong>Consistency.</strong> Whether your name, address, category and services agree everywhere they appear.",
            "<strong>Coverage.</strong> Whether you have a page that answers each question customers actually ask.",
            "<strong>Structured information.</strong> Machine-readable markup describing the business and its services.",
            "<strong>Reputation.</strong> Review volume, recency and what reviews actually say.",
            "<strong>Third-party presence.</strong> Accurate listings and legitimate mentions on sites that already carry weight.",
        ) + '<h3>Out of reach</h3>' + P(
            "It is worth being blunt about this, because the category is full of people who are not:",
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
            "Six measurements do the work, and the order they are read in matters as much as the values:",
        ) + UL(
            "<strong>Recommendation presence.</strong> The percentage of a fixed prompt universe in which the business is named. This is the headline number, and it only means anything if the prompt set does not change between runs.",
            "<strong>Share of voice.</strong> How frequently the business appears relative to the competitors named on the same prompts. Worth knowing that methodologies differ here: some count every appearance equally, others weight an appearance by how prominently it sits in the answer. Both are defensible and they will disagree, sometimes sharply, so the definition has to travel with the number.",
            "<strong>Citation presence.</strong> Whether the company's own pages, or third-party sources that describe it, appear where sources are shown. This is a different question from being named, and it is the one that tells you which evidence a system is actually reading.",
            "<strong>Citation share.</strong> How much of all the citation activity observed across the prompt set goes to a given source or domain. Useful for seeing who owns the evidence layer in your category, which is frequently not a competitor at all but a review platform or a trade publication.",
            "<strong>Search visibility.</strong> Conventional ranking for the equivalent non-branded intent. This is the baseline the AI numbers should be read against, not a separate report.",
            "<strong>Commercial outcomes.</strong> Enquiries, bookings, calls and revenue attributable to organic and AI discovery.",
        ) + P(
            "The hierarchy matters because every measurement above the last one is a proxy, and proxies fail in characteristic ways. Recommendation presence can rise on prompts nobody asks. Share of voice can improve because a competitor got worse. Citation presence can climb while the citations are all third-party pages that mention you unflatteringly. None of those are useless, and none of them are the objective.",
            "Reading them in order is what keeps the interpretation honest: a rising proxy is a reason to look for a commercial effect, not evidence that one occurred. The most common failure in this category is a report full of improving proxies attached to a business whose enquiry volume has not moved, and nobody noticing because the last number was never on the page.",
        ) + figure(
            "fig-a1-measure",
            "Five proxies and one outcome",
            stack([
                ("Recommendation presence",
                 "The share of a fixed prompt universe in which the business is named"),
                ("Share of voice",
                 "How often it appears relative to named competitors on the same prompts"),
                ("Citation presence",
                 "Whether its own pages or supporting third-party sources are cited"),
                ("Citation share",
                 "How much of the observed citation activity a source or domain receives"),
                ("Search visibility",
                 "Conventional ranking for the equivalent non-branded intent"),
                ("Commercial outcomes",
                 "Enquiries, bookings and calls attributable to organic and AI discovery"),
            ], emphasis=6),
            "Framework, not measured results. The first five are proxies for the sixth. "
            "Reading them in this order is what stops a rising share of voice from being "
            "mistaken for a rising number of customers.",
            kind="Framework",
        ) + P(
            'The last one is the one that matters. Everything above it is a proxy. We describe how we run this in more detail on <a href="%s">Work</a>.' % L(UP, WORK),
        )),
        ("screenshot", "Why one screenshot proves almost nothing", P(
            "<span class=\"alr-answer\">Because a single answer is one sample from a distribution, and you cannot see the distribution from one sample.</span> A screenshot showing your business is not evidence that the work is succeeding, and one showing a competitor instead is not evidence that it is failing.",
            "Seven things can differ between two observations without anything about the business changing:",
        ) + UL(
            "<strong>Probabilistic generation.</strong> Responses are generated rather than looked up, so the same input can produce different output.",
            "<strong>Retrieval variation.</strong> Whether live material was fetched, and what came back, can differ from one attempt to the next.",
            "<strong>Model updates.</strong> Versions change without notice, and a comparison across a few weeks may be comparing two different systems.",
            "<strong>Personalisation.</strong> Account history, memory features and prior conversation can all inform an answer.",
            "<strong>Wording.</strong> Small changes in phrasing move results substantially, and often decide whether any business is named at all.",
            "<strong>Location.</strong> Session or stated location changes local results completely and silently.",
            "<strong>Reasoning mode.</strong> Some products expose a faster and a more deliberate mode, and they demonstrably retrieve differently.",
        ) + P(
            "None of that means observation is worthless. It means the unit of evidence is a distribution rather than an instance: the same fixed set of questions, asked repeatedly, aggregated, and compared against the previous run of exactly the same set. That is a measurement. Two screenshots taken a month apart are two anecdotes.",
            "It also has a practical use, which is as a test of whoever is presenting the numbers. Anybody who shows a single answer as proof of a result either does not understand the variance or is relying on you not to. The variability itself is measurable, and we go through what moves it, and how much, in "
            '<a href="/insights/how-to-improve-visibility-in-chatgpt">how to improve your visibility in ChatGPT</a>.',
        )),
        ("good-work", "What good AEO work looks like", P(
            "Unremarkable, mostly. Good work in this area tends to look like a sequence of small corrections rather than a single intervention, and the first phase is usually diagnosis rather than production.",
            "A credible engagement moves through roughly the following sequence. It is a default order rather than a fixed methodology, and the sequence is the part that matters: several of these steps are wasted effort if the ones above them have been skipped.",
        ) + OL(
            "<strong>Establish the prompt universe.</strong> The set of questions that will be measured, written the way customers ask them, covering services, geography, comparisons and the objections that come up before a decision.",
            "<strong>Establish the baseline.</strong> Run that set across the assistants your customers plausibly use, and record what happened: who was named, who was not, and what was cited.",
            "<strong>Diagnose where visibility breaks.</strong> Not one score. Whether any business was returned at all, whether competitors were, whether your pages were reachable, and whether the cited sources describe you accurately.",
            "<strong>Fix technical access.</strong> Crawler policies, status codes, rendering, canonicalisation. Nothing further is worth doing while the pages cannot be read.",
            "<strong>Resolve entity inconsistencies.</strong> Name, category, address, service area, services and credentials brought into agreement everywhere they appear, including the listings nobody has looked at for years.",
            "<strong>Improve the pages that already matter.</strong> The commercially important pages usually need the answer moved to the top and the specifics added, not replacing.",
            "<strong>Fill the real content gaps.</strong> The questions from step one that have no page of the appropriate shape. This is usually a much shorter list than a keyword tool would suggest.",
            "<strong>Improve third-party evidence.</strong> Presence and accuracy on the sources that were actually being cited in step two, plus the registers and bodies that genuinely govern the category.",
            "<strong>Rerun the same baseline.</strong> The identical prompt set, compared like for like. A changed prompt set produces a number that cannot be compared to anything.",
            "<strong>Relate the change back to commercial outcomes.</strong> Enquiries and revenue, not proxies, with an honest account of what else was happening at the same time.",
        ) + P(
            "None of that is a guarantee, and it should not be presented as one. Businesses arrive at different points in the sequence, some steps turn out to be unnecessary and occasionally the diagnosis in step three sends you somewhere the list does not anticipate. What the order protects against is the far more common failure: producing content for a business whose pages cannot be crawled, or building authority for an entity the web describes three different ways.",
            "Good work also involves saying no to things. A great deal of AEO advice circulating at the moment amounts to producing large volumes of content aimed at models rather than people, which tends to be expensive, tends not to work, and creates a site that is worse for the humans who do arrive. The published research points the same way: the characteristics that accompany more citations are mostly about saying something specific about the right question, not about formatting. We go through that evidence in "
            '<a href="/insights/what-makes-ai-cite-a-page">what makes AI cite a page</a>.',
        )),
        ("misunderstood", "Frequently misunderstood ideas", P(
            "Four claims come up often enough to be worth addressing directly. Each one contains something true, which is why it survives.",
        ) + '<h3>"You can submit your business to ChatGPT"</h3>' + P(
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
        'Discovered Labs (2026), <a href="https://discoveredlabs.com/research/what-drives-ai-citations" rel="nofollow">What actually drives AI citations: a statistical analysis of 2M AI citations across 10K pages</a>, the citation research referred to above and covered in detail in <a href="/insights/what-makes-ai-cite-a-page">What Makes AI Cite a Page?</a>',
        'Ahrefs (2025), <a href="https://ahrefs.com/blog/ai-search-overlap/" rel="nofollow">Only 12% of AI cited URLs rank in Google&rsquo;s top 10 for the original prompt</a>, the source of the ranking overlap referred to above.',
    ],
    "related": ["what-makes-ai-cite-a-page", "aeo-vs-seo",
                "how-to-improve-visibility-in-chatgpt"],
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
    "published": "2026-05-12",
    "updated": "2026-08-20",
    "reading": "23 min read",
    "cover": "ink",
    "sections": [
        ("what-it-means", "What does visibility in ChatGPT actually mean?", P(
            '<span class="alr-answer">It means how often your business is named when people ask the assistant questions that your business could answer.</span> It is a frequency measured across a controlled set of prompts, not a position, and there is no ranking to occupy.',
            "The phrase ranking in ChatGPT gets used constantly and there is nothing for it to refer to. No index is ordered and no position exists to be won. What exists is a percentage: of the relevant questions you decided to measure, the share in which you were named, and whether that share is going up.",
            "Three outcomes hide inside the word visibility, and they need separating before any of the rest of this article is useful. A <strong>recommendation</strong> is the assistant putting your business forward as the thing to choose. A <strong>mention</strong> is your name appearing in the answer text, which may be neutral, comparative or unflattering. A <strong>citation</strong> is a source link attached to the answer, which may point at your website or at somebody else's page that happens to describe you.",
            "These move independently, and the gap between them is large enough to matter commercially. Being cited without being mentioned is common, as is the reverse. Most of the practical work below improves one of the three more than the others, which is the reason to know which one you are short of before starting. And throughout, the shape of the problem is worth accepting: you are trying to make yourself a more probable answer, not a guaranteed one.",
        ) + keyfindings("kf-chatgpt", [
            ("Visibility is frequency of inclusion, not a ranking.",
             "There is no first place and no leaderboard to occupy."),
            ("Individual answers are noisy.",
             "Repeated prompts reveal patterns; a single screenshot proves nothing in either direction."),
            ("Crawlability and conventional search remain fundamental.",
             "In several products, search visibility is the retrieval path."),
            ("Entity consistency reduces ambiguity.",
             "Where sources conflict, the cheapest resolution is often to recommend somebody less ambiguous."),
            ("Citations reveal which sources currently carry authority.",
             "They are the most useful free diagnostic available."),
            ("Commercial outcomes matter more than screenshots.",
             "Enquiries are the only number that pays for the work."),
        ])),
        ("why-changes", "Why the answer can change", P(
            "Ask the same question twice and you can get two different sets of businesses. This is normal and it is not a fault in your setup.",
            "Seven things move underneath a given answer, and it is worth knowing which is which, because they have different implications for how you test:",
        ) + UL(
            "<strong>Prompt wording.</strong> The largest single source of variation, and the one most people fail to control. Asking for the best plumber and asking who to call about a leak can return different businesses, or none at all.",
            "<strong>Conversation context.</strong> Everything already said in the thread informs the answer. A question asked cold and the same question asked after three exchanges are not the same input.",
            "<strong>Location.</strong> Whatever the system has, whether stated explicitly or inferred from the session, and it changes local answers completely.",
            "<strong>Retrieval mode.</strong> Whether live material was fetched or the answer came from what the model already held. This is not exposed to the user.",
            "<strong>Model and version.</strong> Products are updated without notice, so a comparison across several weeks may be comparing two systems rather than two states of your business.",
            "<strong>Reasoning mode.</strong> Where a product offers a faster and a more deliberate mode, they behave measurably differently, including in how much they cite.",
            "<strong>Probabilistic generation.</strong> Even with everything above held constant, responses are generated rather than retrieved from a table, so repetition alone produces variation.",
        ) + P(
            "The practical consequence is that a single screenshot proves nothing, in either direction. If someone shows you one answer as evidence of a problem or a success, they are showing you a coin flip.",
        ) + figure(
            "fig-a2-drivers",
            "The business does not change. The answer can.",
            drivers(
                "Same underlying business",
                ["Phrasing", "Retrieval path", "Location", "Personalisation",
                 "Model and version", "Probabilistic generation"],
                "Different possible answers",
            ),
            "Conceptual. Every factor in the middle can move without anything about the "
            "business itself changing. That is the whole reason a screenshot is not a "
            "measurement, and why comparing two of them tells you very little.",
        ) + CALLOUT(
            "A reasonable expectation",
            "Aim to move from being named occasionally to being named consistently across a set of questions. That is achievable and measurable. A promise of always appearing is not, and should be treated as a warning sign.",
        ) + figure(
            "fig-a2-reasoning",
            "ChatGPT's retrieval behaviour changes with reasoning mode",
            subplots([
                ("Responses containing citations", bars([
                    ("Minimal, Instant mode", 50, "50%", "grey"),
                    ("High, Thinking mode", 68, "68%", ""),
                ], scale=100, ticks=["0", "50%", "100%"])),
                ("Average citations per cited response", bars([
                    ("Minimal, Instant mode", 2.6, "2.6", "grey"),
                    ("High, Thinking mode", 4.5, "4.5", ""),
                ], scale=5, ticks=["0", "2.5", "5"])),
            ]),
            "Semrush ran 100 prompts through GPT-5.2 in minimal and high reasoning modes, "
            "producing 200 responses. High reasoning produced a higher citation rate and "
            "more citations per response, which illustrates why ChatGPT visibility cannot be "
            "treated as one completely fixed retrieval surface. The two panels have separate "
            "scales: one is a share of responses, the other a count.",
            kind="Empirical",
            source='Source: Semrush, June 2026, <a href="https://www.semrush.com/blog/chatgpt-reasoning-ai-visibility/" rel="nofollow">Only 25% of cited sources overlap between ChatGPT&rsquo;s different reasoning modes</a>.',
        ) + P(
            "More striking than either of those numbers is how little the two modes agreed about where to look. Across the same prompts, only a quarter of the cited domains were common to both.",
        ) + figure(
            "fig-a2-overlap",
            "Nearly three quarters of cited domains changed with reasoning mode",
            stacked([
                ("Cited domains across both modes", [(25.6, "25.6%"), (74.4, "74.4%")]),
            ], keys=[
                ("Shared between both modes, 25.6%", ""),
                ("Cited by only one mode, 74.4%", "grey"),
            ]),
            "From the same 100-prompt experiment on GPT-5.2. This measures overlap between "
            "the sets of domains cited in each mode, not similarity between the answers "
            "themselves, and the complement is arithmetic. It is one study of one model at "
            "one point in time rather than a standing property of ChatGPT, but it is a "
            "useful corrective to the idea that there is a single set of sources to get "
            "onto.",
            kind="Empirical",
            size="sm",
            source='Source: Semrush, June 2026, <a href="https://www.semrush.com/blog/chatgpt-reasoning-ai-visibility/" rel="nofollow">Only 25% of cited sources overlap between ChatGPT&rsquo;s different reasoning modes</a>.',
        ) + P(
            "That result is worth sitting with, because it undermines a common assumption about how this work is done. If two modes of one model on one set of questions agree on a quarter of their sources, then a source list assembled by watching a handful of answers is not a plan. It is a sample, and a small one.",
            "The practical response is not despair but sample size. Variability of this kind averages out across a large enough prompt set run repeatedly, which is exactly why the measurement discipline at the end of this article is not optional bureaucracy.",
        )),
        ("crawlability", "Website crawlability", P(
            "Start here, because everything else is wasted if this is broken. If the relevant crawlers cannot reach your pages, no amount of content or reputation work will help.",
            "The reason this matters more than it did is that a retrieval step is not a person. A human who hits a page that renders badly waits a moment, or reloads, or works out that the content is behind a tab. A fetch either returns usable text or it does not, and nothing downstream recovers from the second case. Accessibility to a retrieval system is binary in a way accessibility to a reader is not.",
            "The audit is short and mostly mechanical:",
        ) + UL(
            "<strong>robots.txt.</strong> Which user agents are allowed, and whether anything is being blocked by an old rule nobody remembers adding.",
            "<strong>Crawler policies.</strong> Any blocking at the CDN, firewall or bot-management layer, which is where most unintended blocks actually live rather than in robots.txt.",
            "<strong>Status codes.</strong> Important pages returning 200 rather than a redirect chain, a soft 404 or an intermittent 5xx under load.",
            "<strong>Canonical URLs.</strong> One canonical version per page, agreeing with internal links, the sitemap and whatever the CMS emits.",
            "<strong>noindex and nofollow.</strong> Directives left behind from a staging environment or a template, which is more common than it sounds.",
            "<strong>Server-rendered content.</strong> The substance of the page present in the initial HTML, not assembled after scripts run.",
            "<strong>JavaScript dependency.</strong> Whether the answer to the page's question survives with scripting unavailable. Tabs, accordions and lazy-loaded sections are the usual offenders.",
            "<strong>Internal links.</strong> Every page you care about reachable from somewhere, in ordinary anchor tags rather than script-driven navigation.",
            "<strong>Orphaned pages.</strong> Pages with no internal links at all, which happens routinely with landing pages built for campaigns.",
            "<strong>XML sitemap.</strong> Present, current, and not listing URLs that redirect or no longer exist.",
            "<strong>Interaction requirements.</strong> Whether the content is genuinely available without accepting a banner, dismissing a modal or clicking to expand.",
        ) + P(
            "That last point deserves emphasis because it catches otherwise well built sites. A pricing table inside a collapsed accordion, or a service description that appears only after a tab is clicked, may be perfectly present to a reader and effectively absent to anything fetching the page.",
            "On the question of which crawlers to allow, OpenAI publishes its user agents and how site owners can control them, and it is worth reading that documentation directly rather than a summary of it, because the agents and their purposes have changed more than once. Verify any crawler-specific claim against the current official documentation before acting on it, including the ones in older articles.",
            "It is a decision worth making deliberately rather than by default. Some publishers do block these crawlers, and that is a legitimate choice with a predictable cost: you are trading the possibility of being cited for control over how your content is used. What is not defensible is discovering two years later that a blanket block was inherited from a template.",
        )),
        ("search-availability", "Search availability", P(
            "Because assistants can retrieve live search results, being findable in conventional search is one of the more dependable routes into being mentioned.",
            "This is the part that most reliably rewards existing SEO work. If your pages are indexed, rank for the non-branded queries your customers use, and answer those queries clearly, you are already in the pool of material a retrieval step can draw on.",
            "The important nuance is that a page does not need to rank for the exact wording of somebody's prompt in order to be retrievable for it. A conversational question is a poor search query, so systems tend to reformulate: one prompt can become several retrieval queries, and the material that comes back may have been found through a synonym, an adjacent question, a narrower sub-question, a supporting fact or a broader concept than the one that was typed.",
            "This is sometimes called query fan-out, and the honest position is that its mechanics are not documented for any major assistant. What is observable is the consequence, which is well evidenced: cited pages frequently do not rank for the literal prompt. We look at the data on that in "
            '<a href="/insights/aeo-vs-seo">the AEO and SEO comparison</a>.',
            "Practically, this changes what a content gap looks like. The question is not only whether you rank for a phrase but whether anything you publish would be retrieved by any of the plausible reformulations of a customer's question. A page that covers a topic thoroughly and specifically has many routes in. A page built around one exact-match phrase has one.",
            "It also means that if you have been neglecting conventional search on the assumption that it no longer matters, you have probably made your AI visibility worse rather than better.",
        )),
        ("entity-clarity", "Entity clarity", P(
            "A model has to work out what your business is before it can decide whether to recommend it. The easier that is, the better.",
            "Entity clarity means the basics agree wherever they appear: the legal and trading name, the address, the service area, the category of business, the services offered and how to make contact. If your website says one thing, your map profile says another and an old directory entry says a third, you are asking a system to resolve a conflict, and the cheapest resolution is often to recommend somebody less ambiguous.",
            "The pattern is easier to see with a worked example. Suppose an illustrative dental practice, which we will call Harbour Dental, presents itself as follows. Its website is headed Harbour Dental. Its business profile is registered as Harbour Dental Clinic Ltd, because that is the legal entity. A directory entry created during a rebrand five years ago still says Harbour Cosmetic Dentistry, and lists the previous premises two streets away, which is also still on two aggregator sites that syndicated it at the time.",
            "None of that is a mistake anybody made. It is the ordinary residue of a business changing over five years. But consider what it looks like from outside: three names, two addresses, and a category (cosmetic dentistry) that no longer describes what the practice mostly does. A system trying to answer a question about emergency dentists in that area now has to decide whether these are one business or three, which address is current, and whether the entity it can most confidently identify actually provides the service being asked about.",
            "The fix is not clever. It is choosing one canonical name, deciding what the old names redirect or defer to, correcting the address everywhere it appears including the aggregators, updating the primary category, and then checking the same list again in six months because syndication reintroduces old data. This is dull work with an unusually good return, and it is the area where we most often find something genuinely broken.",
        )),
        ("content", "Content usefulness", P(
            "<span class=\"alr-answer\">Write the page that answers the question, then answer it immediately.</span> That is the principle, and stated on its own it is too abstract to act on, so the rest of this section is what it actually requires.",
        ) + '<h3>1. Name the subject explicitly</h3>' + P(
            "Do not make a reader or a retrieval system infer what it, this, we or our solution refers to. Where a sentence could plausibly be about the company, the service, the industry or the previous paragraph's example, name which one it is.",
            "This is not an instruction to repeat the company name in every sentence, which reads badly and helps nothing. It is an instruction to check the sentences that carry the important facts, because those are the ones that will be read out of context.",
        ) + '<h3>2. Answer before elaborating</h3>' + P(
            "If the heading asks how much Invisalign costs in Austin, the first paragraph should give a range, or explain specifically why no range can be given and what the price depends on. It should not open by observing that every smile is unique and arrive at the number six paragraphs later, under a subheading.",
            "The instinct behind the delay is usually commercial: the writer wants the reader invested before the price appears. It does not survive contact with how people read online, and it definitely does not survive a system looking for the passage that answers a question.",
        ) + '<h3>3. Include facts a general model cannot know</h3>' + P(
            "This is the highest-value paragraph in the section, because it is the part a language model cannot supply for itself. A competent model can already explain what a service is. It cannot know:",
        ) + UL(
            "your price, or an honest range with the variables named",
            "your service area, stated in place names rather than implied by an address",
            "your opening hours, and whether you handle urgent work outside them",
            "turnaround or waiting times, realistically",
            "what the process actually involves, step by step",
            "eligibility, prerequisites and who a service is not suitable for",
            "the qualifications and registrations of the people doing the work",
            "current availability, where that is a real constraint",
            "what is excluded, and what commonly surprises people",
            "what happens at a first appointment or during onboarding",
            "what a package or tier includes, specifically",
            "how your version differs from the two or three alternatives a buyer is weighing",
        ) + P(
            "A page containing six of those is doing something no amount of general explanatory content can substitute for. Most service pages contain none of them.",
        ) + '<h3>4. Make useful passages self-contained</h3>' + P(
            "A good paragraph should retain its meaning when extracted from the page. The test is mechanical: read it on its own and see whether it still says something checkable.",
            "Again, this is not a licence to write robotically. It means that the paragraph carrying your pricing should not depend on a subheading two screens up to establish which service is being priced, and the one describing your service area should not rely on the reader having noticed the city in the page title.",
        ) + '<h3>5. Organise around real questions</h3>' + P(
            "The source material for this is already inside the business, and it is better than anything a keyword tool produces. Recorded sales calls, the questions support answers repeatedly, the objections that surface before a decision, the comparisons prospects raise unprompted, the phrasing that appears in reviews, and where relevant the way people discuss the category in communities and forums.",
            "What that gives you, and keyword research does not, is the qualifiers. A tool returns implant cost. A sales call returns whether implant cost changes if you need a bone graft first, which is the actual question and the one nobody has written a page about.",
            "The failure mode to avoid is the opposite: generating a hundred near-identical FAQ pages from keyword variations. That produces a site that is worse for readers, thin from every other perspective, and no more likely to answer anything.",
        ) + '<h3>6. Prefer specificity to volume</h3>' + P(
            "One page that answers an important commercial question completely is usually worth more than ten pages covering minor variations of it. This is the trade most content plans get backwards, because volume is easier to brief, easier to measure and easier to sell.",
        ) + '<h3>7. Use page format deliberately</h3>' + P(
            "Different kinds of page carry different retrieval value depending on the question. A pricing page, a genuine comparison, a service page and a clearly structured explanation are not interchangeable containers for the same words, and the published research suggests format matters independently of how well a page is written. The evidence, and its limits, are in "
            '<a href="/insights/what-makes-ai-cite-a-page">what makes AI cite a page</a>.',
            "The practical question is whether the commercially important questions in your category have a page of the right shape at all. Many businesses have a blog and no page that states what anything costs.",
        ) + '<h3>8. Write for people, and make the answer recoverable</h3>' + P(
            "This is the synthesis, and it is less of a compromise than it sounds. The prose should read naturally, because humans are the ones who buy. The structure should make the meaning easy to recover, because that is what makes a passage usable by anything reading it, including a person skimming.",
            "The two goals only conflict when somebody is writing for machines, at which point both fail.",
        ) + PULL(
            "If the most important paragraph on the page cannot be quoted accurately without three paragraphs of surrounding context, rewrite it."
        )),
        ("authority", "Third-party authority", P(
            "What other sites say about you carries weight that your own site cannot carry on its own. This is the uncomfortable part of the work, because it is the least controllable.",
            "The realistic version is not a link building campaign. It is making sure you are present and accurately described in the places that already matter for your category: professional bodies, trade associations, legitimate industry directories, local press, supplier and partner sites, and any accreditation you actually hold.",
            "Quality matters far more than volume here, and low-quality directory submissions are largely a waste of money. One accurate entry on a body that genuinely governs your profession is worth more than fifty listings nobody consults.",
        ) + figure(
            "fig-a2-foundations",
            "Visibility sits on top of foundations",
            stack([
                ("Crawlability",
                 "Whether the relevant crawlers can reach and read the pages at all"),
                ("Search availability",
                 "Indexed, and ranking for the non-branded queries customers actually use"),
                ("Entity clarity",
                 "Name, address, category and services agreeing wherever they appear"),
                ("Useful content",
                 "The question answered directly, in the first paragraph, then explained"),
                ("Third-party authority",
                 "Accurate presence on the sources that already matter in the category"),
                ("Recommendation visibility",
                 "How often the business is named across a fixed set of relevant prompts"),
            ], up=True, emphasis=6) + note(
                "Read from the bottom up. Each layer depends on the ones beneath it, which is "
                "why crawlability comes first and why work aimed at the top layer is wasted "
                "while the base is broken."
            ),
            "Conceptual dependency stack, not a ranking of importance. Visibility is an "
            "outcome of the five layers below it rather than a separate task that can be "
            "worked on directly.",
        )),
        ("citations", "Citations", P(
            "Where an assistant shows the sources behind an answer, those sources tell you what it currently trusts on that topic. This is the most useful free diagnostic available, and almost nobody reads it systematically.",
            "The workflow is worth doing properly, because done casually it produces a list of domains and no decisions. For each important prompt:",
        ) + OL(
            "<strong>Record whether you were named,</strong> and separately whether you were recommended or merely mentioned. These are different results.",
            "<strong>Open every cited source.</strong> Not the domain, the actual page. The domain tells you very little about why it was used.",
            "<strong>Categorise it.</strong> Your own site, a competitor's site, a review platform, a directory, a professional register, trade press, a comparison article, a forum thread, something else.",
            "<strong>Record recurring domains across prompts.</strong> A domain that appears once is noise. One that appears across a third of your prompt set is part of your category's evidence layer.",
            "<strong>Identify what each page actually supplies.</strong> Prices? A list of providers? A definition? Reviews? Credentials? This is the part that turns a list into a diagnosis.",
            "<strong>Check whether you appear there, and accurately.</strong> Present, absent, present but wrong, or present but describing a version of the business from four years ago.",
            "<strong>Note the missing source types.</strong> If every cited source in your category is a review platform and you have thirty reviews, that is the finding.",
        ) + P(
            "What usually emerges is a small set of sources doing most of the work in a category, and it is frequently not what the business expected. Sometimes it is a review platform, sometimes a licensing body, sometimes a single well-written comparison article on a site nobody in the industry had heard of. Once identified, a vague objective becomes a concrete list: be present, be accurate, and understand why those sources are being trusted.",
            "One caution on scope. The set of sources differs by engine and, as the reasoning-mode research earlier in this article showed, can differ substantially within a single product. A source list built from one assistant is a starting point rather than a map.",
        ) + figure(
            "fig-a2-brand",
            "Different engines rely on brand-owned sources differently",
            stacked([
                ("ChatGPT", [(39, "39%"), (61, "61%")]),
                ("Gemini", [(14, "14%"), (86, "86%")]),
            ], keys=[("Brand-controlled URLs", ""), ("Third-party URLs", "grey")]),
            "In Discovered Labs&rsquo; 2 million-citation dataset, 39% of ChatGPT&rsquo;s "
            "unique cited URLs were brand-controlled, against 14% for Gemini. The "
            "third-party shares are the arithmetic complements of the reported figures. It "
            "is a reason not to assume a citation strategy works identically across engines, "
            "rather than a permanent property of either one.",
            kind="Empirical",
            source='Source: Discovered Labs, 2026, <a href="https://discoveredlabs.com/research/what-drives-ai-citations" rel="nofollow">What actually drives AI citations</a>.',
        ) + P(
            "The strategic reading is about where effort pays off. Where a large share of cited URLs are brand-controlled, improving your own pages is doing real work. Where most of them are third party, the pages that decide the answer are ones you do not own, and the useful effort goes into being accurately represented on them instead. Those are different budgets and different briefs.",
        )),
        ("diagnosis", "Diagnosing an absence", P(
            "<span class=\"alr-answer\">When a business is not appearing, the first job is to establish which kind of absence it is,</span> because they have almost nothing in common except the symptom. Work down these questions in order and most cases resolve within the first four.",
        ) + OL(
            "<strong>Was anything business-specific returned at all?</strong> If the answer was general advice with no companies named, this is not a visibility problem. The prompt does not produce recommendations, and no amount of work on the business will change that. Fix the prompt set.",
            "<strong>Are competitors appearing?</strong> If yes, the question produces recommendations and you are losing a comparison. If no competitors appear either, the category or the geography may simply be poorly documented, which is an opportunity rather than a deficit.",
            "<strong>Is the site indexed and retrievable?</strong> Check the mechanical things before the interpretive ones. A blocked crawler or a JavaScript-only service page explains a total absence better than any theory about authority.",
            "<strong>Are the competitors who appear better documented, or just bigger?</strong> Read their pages against yours on the specific question asked. Frequently they have stated a price, a service area or a qualification that you have not.",
            "<strong>Does the business visibly provide the requested service?</strong> Not implicitly, in words, on a page. A practice that does emergency work but describes itself only as a general practice will lose emergency questions.",
            "<strong>Is the geography explicit?</strong> Named towns, neighbourhoods and service areas in text, not an address in a footer and an assumption.",
            "<strong>Are the dominant cited sources third-party platforms you are missing from?</strong> If the answer is being assembled from three directories and a review site, being absent from those is the whole explanation.",
            "<strong>Is the reputation profile too thin or too stale to support a recommendation?</strong> A handful of reviews from three years ago gives a system very little to justify naming you with.",
            "<strong>Is the entity inconsistent?</strong> Two trading names, a moved address, a superseded category. This is the most common single cause we find and the least likely to be suspected.",
            "<strong>Is this simply variance?</strong> Ask again, several times, on several phrasings, before concluding anything. A business named in three runs out of ten is not absent.",
        ) + figure(
            "fig-a2-diagnosis",
            "Two very different absences, diagnosed differently",
            panels([
                panel("No businesses named", lines([
                    "The prompt does not produce recommendations",
                    "The category is thinly documented",
                    "The geography was never resolved",
                    "The question was informational, not commercial",
                ]), tone="grey", mark="hollow",
                    sub="Usually a prompt-set problem, not a visibility problem"),
                panel("Competitors named, you are not", lines([
                    "The site cannot be crawled or rendered",
                    "The service is not stated explicitly",
                    "The entity conflicts across sources",
                    "The cited third-party sources omit you",
                    "The reputation record is thin or stale",
                ], tone="blue"), tone="blue", mark="solid",
                    sub="A genuine competitive absence, with a specific cause"),
            ]),
            "Conceptual. The distinction between the two columns is the one that decides "
            "what to investigate: the left column is answered by changing what you measure, "
            "the right by changing something about the business or its evidence. Neither "
            "list is exhaustive or ordered by likelihood.",
        )),
        ("supporting", "Reputation, locality and structured data", P(
            "<span class=\"alr-answer\">These three do less on their own than the sections above and more in combination, which is why they belong together.</span> None of them will make an absent business appear. All of them make a business that is already plausible easier to justify naming.",
        ) + '<h3>Reviews and public reputation</h3>' + P(
            "Reviews function as evidence a system can point to when justifying a recommendation, which makes them more important here than in conventional search. Volume, recency and rating all appear to matter, though we would be cautious about anyone stating the exact weighting, because we have not seen a credible study establishing it and we have not finished our own. What is clearly true is that a business with almost no reviews gives a system very little to work with.",
            "The text is worth attention too. Reviews that mention the specific service, the location and the outcome give a model far more usable material than reviews that only say the experience was good. There is more on how reviews function in local answers specifically in "
            '<a href="/insights/how-ai-recommends-local-businesses">how AI systems find and recommend local businesses</a>.',
        ) + '<h3>Local signals</h3>' + P(
            "If you serve a specific area, local signals do a large amount of the work, because most commercially valuable questions have a location attached. The essentials are a complete and accurate map profile in the right primary category, an address and service area that match everywhere else, opening hours that are actually correct, and pages on your own site that name the areas you serve without descending into a list of a hundred near-identical location pages.",
            "Local intent also narrows the field considerably, which is good news: it is far easier to become a consistent answer for one city and one service than for a whole country.",
        ) + '<h3>Structured information</h3>' + P(
            "Structured data does not make a business recommended. It makes a business easier to interpret without guessing, which is worth having. For most businesses the useful set is small: an Organization or LocalBusiness description, the services offered, and FAQ markup where you genuinely have questions and answers on the page. Keep it accurate and consistent with the visible content, because markup that contradicts the page is worse than no markup.",
            "Treat it as removing ambiguity rather than sending a signal. That framing keeps expectations in the right place, and it is consistent with the citation research, which found no independent effect from markup once other factors were controlled for.",
        )),
        ("measuring", "Measuring visibility", P(
            "Build a fixed prompt set and re-run it on a schedule. Everything else is anecdote.",
            "A workable set is somewhere between fifty and a few hundred questions, written the way customers actually ask rather than the way marketers write keywords. Getting the composition right matters more than getting the size right, and a set that covers eight kinds of question is more informative than one covering three hundred variations of one:",
        ) + UL(
            "<strong>Informational.</strong> What a service is, how something works, what a term means. These often produce no companies at all, which is itself worth knowing.",
            "<strong>Recommendation.</strong> Who should I use, who is best, who do you suggest. The prompts that produce shortlists, and the core of the set.",
            "<strong>Comparison.</strong> This option against that one, or one named provider against another.",
            "<strong>Transactional.</strong> Pricing, booking, availability, how to get started.",
            "<strong>Location-based.</strong> The same questions with a place attached, at several levels of granularity.",
            "<strong>Service-specific.</strong> The individual named services rather than the category.",
            "<strong>Reputation.</strong> Is this provider any good, what do people say, is it trustworthy.",
            "<strong>Problem-led.</strong> The symptom rather than the solution, which is how a lot of people actually ask. Somebody with a leak does not search for plumbers.",
        ) + P(
            "Branded prompts should be a small minority of the set, and they should be labelled as such when reporting. Asking an assistant about your own company and being pleased that it knows who you are is not a visibility measurement: you have supplied the answer inside the question. A prompt set dominated by branded questions produces a number that looks excellent and moves in response to nothing.",
            "Run the set across the assistants your customers plausibly use, record whether you were named, and record who was named instead. Track the share of prompts naming you, your share against named competitors, and what gets cited. Then track whether enquiries are moving, because that is the only number that pays for the work.",
        ) + figure(
            "fig-a2-measure",
            "Repeatability is the point",
            flow([
                ("Prompt set", ["Fifty to a few hundred questions"]),
                ("Multiple assistants", None),
                ("Record mentions", None),
                ("Record competitors", None),
                ("Record citations", None),
                ("Re-run on a schedule", None),
                ("Compare like for like", None),
            ], vertical=True) + note(
                "The loop is what makes any of it evidence. The same questions, asked again "
                "and compared against the previous run, are the difference between a trend "
                "and a collection of anecdotes."
            ),
            "Conceptual workflow. The prompt set range shown is the one stated in this "
            "section: fifty to a few hundred questions, written the way customers ask rather "
            "than the way keywords are written.",
        )),
        ("mistakes", "Common mistakes", P(
            "<span class=\"alr-answer\">Nearly all of them are measurement errors rather than execution errors.</span> The work itself is not especially hard to get right; drawing conclusions from it is where most of the money gets wasted.",
        ) + UL(
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
        'Semrush (2026), <a href="https://www.semrush.com/blog/chatgpt-reasoning-ai-visibility/" rel="nofollow">Only 25% of cited sources overlap between ChatGPT&rsquo;s different reasoning modes</a>, the source of the reasoning-mode figures above.',
        'Discovered Labs (2026), <a href="https://discoveredlabs.com/research/what-drives-ai-citations" rel="nofollow">What actually drives AI citations: a statistical analysis of 2M AI citations across 10K pages</a>, the source of the brand-controlled citation shares above.',
        'Ahrefs (2025), <a href="https://ahrefs.com/blog/ai-search-overlap/" rel="nofollow">Only 12% of AI cited URLs rank in Google&rsquo;s top 10 for the original prompt</a>, on the gap between ranking for a prompt and being cited for it.',
    ],
    "related": ["what-makes-ai-cite-a-page", "what-is-answer-engine-optimization",
                "how-ai-recommends-local-businesses"],
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
    "published": "2026-01-21",
    "updated": "2026-08-20",
    "reading": "20 min read",
    "cover": "warm",
    "sections": [
        ("direct-answer", "How do AI systems decide which local businesses to recommend?", P(
            '<span class="alr-answer">They interpret what the person wants and where they are, retrieve information from search results, business profiles, review platforms and directories, and then name businesses that appear both relevant and well evidenced across those sources.</span>',
            "No single source decides it. In our experience the businesses that get named consistently are rarely the ones with the most impressive website. They are the ones that are described the same way in a lot of places, have enough recent public feedback to be credible, and are unambiguous about what they do and where they do it.",
            "What makes local recommendation harder than it looks is that a single short question contains at least six separate problems, each of which can be answered wrongly:",
        ) + UL(
            "<strong>What does the person actually want?</strong> A category, a specific service, an urgent solution or an opinion about one named business.",
            "<strong>Where are they?</strong> Explicitly stated, inferred from the session, or unknown, which changes the answer entirely.",
            "<strong>Which businesses genuinely provide it?</strong> Not which ones are nearby, which ones do this particular thing.",
            "<strong>Which of the available information is current?</strong> Hours, availability, whether a service is still offered, whether the business still exists.",
            "<strong>Which businesses are credible enough to name?</strong> Naming a business is a claim about it, and the system needs something behind the claim.",
            "<strong>Which sources support that conclusion?</strong> The evidence that can be pointed at, which is often not the business's own website.",
        ) + P(
            "A business can be a perfect answer to the first four and lose on the last two. It can also be a mediocre answer to the third and win everything else, which is how a general practice ends up being recommended for specialist work it barely does.",
            "The rest of this article walks through the steps in roughly the order they happen, and then covers what a business can actually do about each one.",
        ) + keyfindings("kf-local", [
            ("Recommendation starts with intent and location.",
             "The phrasing decides whether a shortlist is produced at all."),
            ("Clear service information improves matching.",
             "Named treatments are easier to match to a request than general professional language."),
            ("Search results often feed retrieval.",
             "When the retrieval path runs through search, ranking is close to a prerequisite."),
            ("Reviews and profiles provide supporting evidence.",
             "They are what a system can point to when it is asked to vouch for somebody."),
            ("Consistency across the web reduces ambiguity.",
             "Every inconsistency is something a system has to resolve, and not necessarily in your favour."),
            ("Measurement must aggregate many answers.",
             "The pattern across a hundred questions is real. Any individual answer is not."),
        ]) + figure(
            "fig-a3-adoption",
            "AI use for local recommendations rose sharply in one year",
            slope([
                ("2025", 6, "6%"),
                ("2026", 45, "45%"),
            ], ticks=["50%", "25%", "0"], scale=50),
            "BrightLocal&rsquo;s consumer research found that the share of consumers using "
            "AI tools to find local business recommendations rose from 6% in 2025 to 45% in "
            "2026. These are people who have used AI for a recommendation in the previous "
            "twelve months, not people using it exclusively or instead of search.",
            kind="Empirical",
            source='Source: BrightLocal Local Consumer Review Survey 2026, a representative panel of 1,002 US adult consumers. <a href="https://www.brightlocal.com/research/lcrs-ai-trust/" rel="nofollow">Nearly half of consumers are asking AI for business recommendations</a>.',
        )),
        ("interpretation", "Query interpretation", P(
            "The first thing that happens is that the question gets turned into an intent, and small changes in wording produce genuinely different candidate sets. Four questions about dentistry make the point:",
        ) + UL(
            "<strong>Best dentist near me.</strong> A broad category question with an implicit location. Almost any general practice qualifies, so the deciding factor becomes reputation and evidence rather than relevance.",
            "<strong>Emergency dentist open Sunday.</strong> Two hard constraints. Most practices are eliminated by availability before quality is considered at all, and a practice that does handle Sunday emergencies but has not said so is eliminated with them.",
            "<strong>Best dentist for nervous patients.</strong> A service-quality question with no clinical category attached. It rewards whoever has written something specific about sedation, appointment length or how they handle anxiety, and ignores everyone who has not.",
            "<strong>Is Harbour Dental good for implants?</strong> A branded verification question about one named business and one named procedure. Nobody else is being considered, and the answer depends almost entirely on what third parties say.",
        ) + P(
            "All four belong to dentistry. They have almost nothing else in common. The first is a reputation contest, the second an availability filter, the third a content gap and the fourth a due-diligence check on a single entity.",
            "The phrasing also determines whether a shortlist is produced at all. Some questions return general advice with no companies named, some return a category explanation, and some return three names and a sentence each. A prompt set that only contains the recommendation-shaped questions will overstate how visible you are; one that only contains informational questions will find nothing to measure.",
            "It follows that half the value of building a prompt set is discovering which phrasings produce recommendations in your category. That is a finding in itself, and it is usually the first surprise.",
        ) + figure(
            "fig-a3-pipeline",
            "From a question to a named business",
            flow([
                ("User question", None),
                ("Intent", None),
                ("Location", None),
                ("Service relevance", None),
                ("Retrieval", None),
                ("Evidence", ["Website", "Business profile", "Reviews",
                              "Directories", "Mentions", "Search results"]),
                ("Recommendation", None),
            ], vertical=True),
            "Conceptual. The stages are shown in roughly the order they happen, which is the "
            "order the rest of this article follows. The six sources under evidence are "
            "independent of each other and no weighting between them is implied.",
        )),
        ("location", "Location", P(
            "Location is resolved from whatever the system has, and there are more inputs to it than most businesses realise. In rough order of reliability:",
        ) + UL(
            "<strong>An explicit place in the question.</strong> The strongest signal, and the only one a business can plan around.",
            "<strong>Inferred or session location.</strong> Whatever the product has established about where the user is, which is neither visible nor controllable.",
            "<strong>Your registered address.</strong> What appears on your profile and in structured data.",
            "<strong>Your stated service area.</strong> The places you say you serve, which is a different claim from where you are based.",
            "<strong>Neighbourhood and district names.</strong> The granularity people actually use locally, and the one businesses most often omit.",
            "<strong>City and region.</strong> Broad enough that many businesses compete, so rarely decisive on its own.",
            "<strong>Proximity.</strong> Distance between the user and the business, where both are known.",
            "<strong>Opening hours and availability.</strong> Which turn a geographic question into a filtered one whenever the question has a time in it.",
        ) + P(
            "Compare London dentist with emergency dentist near King's Cross tonight. The first is a broad category question in a city of several thousand practices, where geography barely narrows anything and reputation decides. The second is almost entirely a filter: a small radius, an urgent service and an availability window, in which most of the field is eliminated before quality is considered at all. They are different retrieval problems and a business can dominate one while being invisible in the other.",
            "We would not put numbers on how any specific system weights these inputs, because nothing published establishes that and the honest answer is that it varies by product and by question. What is safe to say is that the inputs a business controls are the explicit ones: the address, the stated service area, the named neighbourhoods, the hours.",
            "The practical consequence is that your service area needs to be stated in words on your own site, not implied by an address in the footer. A practice in a suburb that serves three neighbouring towns should say which three. And because the boundaries of visibility are geographic, testing has to be too: being recommended in your own postcode and invisible two towns over is a common pattern, and it is invisible to any measurement that reports one national number.",
        )),
        ("relevance", "Service relevance", P(
            "<span class=\"alr-answer\">The system has to establish that you provide the specific thing being asked for, and it can only do that from what you have actually said.</span> This is where vague positioning becomes expensive, and the cost is usually invisible because nothing appears to be broken.",
            "Consider two sentences describing the same practice. The first: we offer comprehensive solutions for every smile. The second: we provide dental implants, emergency appointments, root canal treatment and Invisalign from our Hampstead clinic.",
            "The first resolves nothing. It is not badly written and it reads perfectly well to somebody who already knows the practice, but it cannot be matched to a request for implants, or emergency work, or a clinic in Hampstead, because none of those things are in it. The second resolves the category, four specific services and the location in a single sentence, in text.",
            "The operational version of this is short. Name the services individually rather than describing a philosophy of care. Use both vocabularies, the one customers use and the one the profession uses, because they frequently differ (patients say invisible braces, clinics say clear aligners). State where the service is delivered from and which areas it covers. And say what you do not do, because it prevents a category of wasted enquiry and because a stated exclusion is a more specific claim than silence.",
        )),
        ("retrieval", "Search retrieval", P(
            "Many assistants perform a live search and read the results before answering. When that happens, conventional ranking becomes a direct input into who gets considered.",
            "This is the most concrete link between SEO and AI recommendation, and it is why treating them as separate disciplines tends to produce worse outcomes in both. If you do not appear in results for the equivalent query, you are not in the pool of material that gets read.",
            "The nuance worth carrying over is that ranking for the literal question is not the requirement. Systems reformulate: a conversational question becomes several retrieval queries, and material can be found through a synonym, a narrower sub-question or a supporting fact rather than the phrase that was typed. Large-scale evidence bears this out, and we go through it in "
            '<a href="/insights/aeo-vs-seo">the AEO and SEO comparison</a>.',
            "Not every answer works this way, and no product tells you which mode it used. But when the retrieval path runs through search, search visibility is close to a prerequisite, and neglecting it on the assumption that AI has replaced it is a straightforwardly bad trade.",
            "The relationship is not one to one, and the disagreements are informative. We have seen businesses rank well and still be absent from the equivalent AI answer, usually because the entity behind the ranking page is unclear or unsupported elsewhere. We have also seen the reverse, where a business with modest rankings is named consistently because the wider web describes it very clearly. Measuring both, and noticing when they diverge, tells you more than either on its own, and it is one of the questions our research programme is currently looking at.",
        )),
        ("website", "Website information", P(
            "Your site is where the system confirms the specifics: what you do, where, for whom, and how to proceed. It is also the source most likely to be quoted directly.",
            "The facts worth stating explicitly, and the ones most sites omit, are narrow enough to list:",
        ) + UL(
            "<strong>The service, named.</strong> One page or one clearly headed section per significant service, using the term a customer would use.",
            "<strong>The price, or an honest range.</strong> With the variables named if a fixed figure is impossible.",
            "<strong>Availability.</strong> Whether you are taking new customers, and what the current wait is.",
            "<strong>Who provides it.</strong> Named people, where the category makes that relevant, which is most professional services.",
            "<strong>Qualifications and registrations.</strong> Stated in a form somebody could verify against the issuing body.",
            "<strong>Geography.</strong> Where the service is delivered from, and the areas covered, in place names.",
            "<strong>The process.</strong> What actually happens, in order, including the first appointment.",
            "<strong>Opening hours.</strong> Matching the business profile exactly, including how urgent work is handled outside them.",
            "<strong>Restrictions and exclusions.</strong> Who a service is not suitable for, and what is not included.",
            "<strong>How to book.</strong> The actual mechanism, not only a contact form.",
        ) + P(
            "The pages that do well here are unglamorous, and the reason is worth stating plainly: every item above is a fact a general-purpose model could not know without being told. Everything else on a typical service page is explanation the model can already produce for itself. What does not help is a site where the substance is diffused across marketing copy that never quite states anything checkable.",
        )),
        ("profiles", "Business profiles", P(
            "Map and business profiles are among the most heavily used sources for local questions, and they are usually the fastest thing to fix.",
            "The essentials: correct primary category, complete service list, accurate address or service area, genuinely current opening hours, and a description that matches your website rather than one written years ago for a different positioning.",
            "The primary category deserves particular attention, because it is unusually consequential and unusually neglected. It is the single field that most directly answers what kind of business is this, it is chosen once during setup, and it is frequently chosen by whoever happened to create the listing. A practice whose primary category still says cosmetic dentistry will lose emergency questions to a practice whose category says dentist, whatever either of them actually does.",
            "The wider principle is consistency rather than completeness. A profile that is fully populated but disagrees with the website about the address, the hours or the service list has added a conflict rather than resolved one. It is worth being explicit that no individual field guarantees anything: a correct primary category does not cause inclusion in an AI answer. What it does is remove one reason to be excluded, which is the realistic standard for most of this work.",
        )),
        ("reviews", "Reviews", P(
            "Reviews are the most readily available evidence of whether other people found a business good, which makes them useful to a system that is being asked to vouch for somebody.",
            "Volume, recency and rating all appear to contribute. We would not put a precise weighting on them, because we have not seen a credible public study that establishes one and our own work on this is not finished. What is clear is that a thin or stale review profile gives a system very little to justify a recommendation with.",
            "The content is underrated. Reviews that name the treatment, the location or the outcome give far more usable material than a five-star rating with no text.",
        ) + figure(
            "fig-a3-reviews",
            "Consumers look beyond the star rating",
            bars([
                ("Backed up by other reviews with similar sentiment", 56, "56%", ""),
                ("Describes a positive experience", 46, "46%", "mute"),
                ("Posted within the last month", 44, "44%", "mute"),
                ("Has a high star rating", 42, "42%", "mute"),
                ("The owner has responded", 37, "37%", "mute"),
            ], scale=60, ticks=["0", "30%", "60%"]),
            "BrightLocal&rsquo;s 2026 consumer survey asked which factors make a review "
            "matter. Consistent sentiment across several reviews ranked above star rating "
            "alone, with recency and owner responses also prominent. This measures what "
            "consumers say they weigh, and it is evidence about reviews as public reputation. "
            "It is not a list of factors any AI system has been shown to weight.",
            kind="Empirical",
            source='Source: BrightLocal Local Consumer Review Survey 2026, 1,002 US adults. <a href="https://www.brightlocal.com/research/local-consumer-review-survey/" rel="nofollow">Local Consumer Review Survey 2026</a>.',
        ) + P(
            "That caveat is worth repeating because the chart invites the wrong reading. These are the things consumers say make a review persuasive. They are not weights inside any AI system, and nobody has published weights inside any AI system. What the figure is genuinely evidence of is the shape of the reputation layer these systems are drawing on: a body of reviews that is consistent, recent, descriptive and responded to reads as credible to people, and it is the same body of text a system has available when it is asked to justify naming somebody.",
        )),
        ("verification", "AI recommendation is often the start of the decision, not the end", P(
            "<span class=\"alr-answer\">Being named by an assistant does not close the sale, because most people go and check.</span> BrightLocal's 2026 consumer research found that the overwhelming majority of AI users verify what they were told before acting on it.",
        ) + figure(
            "fig-a3-verify",
            "Consumers still verify AI recommendations",
            bars([
                ("Sometimes double-check AI recommendations against real reviews",
                 97, "97%", ""),
                ("Check whether a cited review is legitimate, or inspect its source",
                 88, "88%", "mute"),
                ("Always check reviews on native review platforms", 42, "42%", "grey"),
            ], scale=100, ticks=["0", "50%", "100%"],
                unit="Share of consumers who use AI for local recommendations") + note(
                "Three separate survey questions, not three slices of one distribution. The "
                "figures overlap and are not intended to sum."
            ),
            "From BrightLocal&rsquo;s 2026 research on AI and consumer trust, a "
            "representative panel of 1,002 US adults. The first figure is the share who at "
            "least sometimes cross-check an AI recommendation against real reviews; the "
            "second is the share who check either that a cited review is genuine (51%) or "
            "where it came from (37%); the third is the narrower group who always go to a "
            "native review platform. Because each answers a different question, the bars "
            "should be read individually rather than compared as parts of a whole.",
            kind="Empirical",
            source='Source: BrightLocal, 2026, <a href="https://www.brightlocal.com/research/lcrs-ai-trust/" rel="nofollow">Nearly half of consumers are asking AI for business recommendations</a>.',
        ) + P(
            "The strategic implication is the most commercially useful point in this article. AI visibility starts the consideration; it does not finish it. A business that wins the recommendation and then loses the verification step has gained nothing, and the verification step happens somewhere it does not control: a review platform, a map profile, a directory, a forum thread.",
            "This changes what the work is for. Improving your own pages raises the odds of being named. Improving the wider reputation layer decides whether being named converts. The second is slower, less satisfying to report on, and the reason a strong AI visibility number can sit alongside flat enquiry volume.",
            "It also argues against a specific kind of optimism. The businesses most exposed here are the ones whose recommendation rests on a well-written website and a thin public record: named in the answer, then checked, then found to have eleven reviews from 2023. The recommendation was real. It just did not survive five seconds of scrutiny.",
        )),
        ("third-party", "Directories, mentions and what actually gets cited", P(
            "<span class=\"alr-answer\">Third-party sources decide a large share of local answers, and the useful skill is identifying which ones rather than being present everywhere.</span> A small number carry real weight in each category and a great many carry none at all, and the difference is testable rather than a matter of opinion.",
        ) + '<h3>Choosing the directories that matter</h3>' + P(
            "A directory or third-party source is worth your attention when it meets several of these:",
        ) + UL(
            "<strong>It appears for your category.</strong> Search the category and the location and see whether it surfaces at all.",
            "<strong>It ranks for relevant intent.</strong> Not for its own brand name, for the questions your customers ask.",
            "<strong>It appears in the citations behind AI answers.</strong> The most direct test available, and the one almost nobody runs.",
            "<strong>Customers genuinely use it.</strong> Ask a few. In some categories the answer is a body nobody outside the trade has heard of.",
            "<strong>It has category authority.</strong> A licensing authority or professional register has standing that a general business listing does not.",
            "<strong>Its data is accurate.</strong> Including yours, and including whether it has quietly syndicated an address you left in 2021.",
        ) + P(
            "What tends to count, on those criteria, is the sources a human would actually consult: professional registers, trade bodies, licensing authorities, established local guides, sector-specific comparison sites. What tends not to count is the bulk submission service sold as an SEO product, which is measured in volume precisely because none of the individual entries can be justified.",
            "One entry on a body that genuinely governs your profession is worth more than fifty listings nobody consults, and the fifty carry a cost: each one is another place your details can go stale and contradict the others.",
        ) + '<h3>Ordinary mentions</h3>' + P(
            "Mentions elsewhere contribute to the sense that a business exists in the world and is regarded in a particular way. This includes local press, community pages, supplier and partner sites, sponsorships and event listings.",
            "None of these are links to be acquired in the old sense. They are evidence of activity, and they are more persuasive when they are genuine, which is inconvenient for anyone hoping to buy them.",
            "For most local businesses this accumulates slowly as a side effect of operating, and the useful intervention is simply making sure your name is spelled and described consistently when it happens. A mention that calls you by a former trading name is doing less work than one that does not, and correcting it is usually one email.",
        ) + figure(
            "fig-a3-mix",
            "Business websites dominated this local ChatGPT Search sample",
            stacked([
                ("Share of sources", [(58, "58%"), (27, "27%"), (15, "15%")]),
            ], keys=[
                ("Business websites", ""),
                ("Business mentions and publisher content", "mute"),
                ("Directories", "grey"),
            ]),
            "BrightLocal recorded the first ten sources surfaced across 800 manual "
            "local-business searches in ChatGPT Search. Business websites accounted for 58% "
            "of sources, business mentions for 27% and directories for 15%. The data was "
            "collected in November 2024 and is best treated as a snapshot of that product at "
            "that time rather than a general rule.",
            kind="Empirical",
            source='Source: BrightLocal, December 2024, <a href="https://www.brightlocal.com/research/uncovering-chatgpt-search-sources/" rel="nofollow">Uncovering ChatGPT Search Sources</a>.',
        ) + '<h3>Reading the citations</h3>' + P(
            "Where the assistant shows its sources, read them. This is the closest thing to seeing the working, and across a set of questions you will usually find a small group of sources doing most of the work in your category. That group is your actual competitive landscape for retrieval, and it is frequently not what the business expected.",
            "Once identified, a vague objective becomes a concrete list: be present, be accurate, and understand why those sources are trusted. The full workflow for doing that systematically, including how to categorise what each cited page is actually supplying, is in "
            '<a href="/insights/how-to-improve-visibility-in-chatgpt">how to improve your visibility in ChatGPT</a>'
            ", and the research on what characteristics make a page citable in the first place is in "
            '<a href="/insights/what-makes-ai-cite-a-page">what makes AI cite a page</a>.',
        )),
        ("entity", "Entity clarity", P(
            "The single most common fixable problem we encounter. A business is described one way on its site, another on its map profile, and a third on a directory entry created years ago.",
            "Every inconsistency is something a system has to resolve, and resolving it in your favour is not guaranteed. Two trading names, a moved address that still appears somewhere, or a category that no longer reflects the business all cost more than they appear to.",
            "The fix is an audit and a cleanup rather than anything clever. It is boring and it works.",
        ) + figure(
            "fig-a3-entity",
            "One business, three descriptions",
            panels([
                panel("Before", pairs([
                    ("Website", "Business A"),
                    ("Profile", "Business A Ltd"),
                    ("Directory", "Old Business Name"),
                    ("Address", "Two versions, one of them a former premises"),
                    ("Category", "No longer what the business does"),
                ]), tone="grey", mark="hollow", sub="Three things to reconcile"),
                panel("After", lines([
                    "Name",
                    "Category",
                    "Location",
                    "Services",
                ], tone="blue"), tone="blue", mark="solid",
                    sub="All sources agree, nothing left to resolve"),
            ]),
            "Illustrative schematic. &ldquo;Business A&rdquo; is a placeholder, not a client: "
            "the pattern is the point, and it is the most common fixable problem described in "
            "this section.",
            kind="Illustrative",
        )),
        ("trust", "Trust signals", P(
            "Systems being asked to recommend a business tend to favour ones with visible, checkable credibility, and the effect is most pronounced in the categories where a bad recommendation does the most damage: healthcare, legal, financial and professional services.",
            "In those categories the specific things worth having in place are:",
        ) + UL(
            "<strong>Named practitioners.</strong> Real people with names, not a team page of first names and job titles.",
            "<strong>Stated credentials.</strong> The actual qualification, awarding body and where relevant the registration number.",
            "<strong>Licensing and registration.</strong> Confirmed as current on the register itself, rather than asserted on your own site.",
            "<strong>Professional body membership.</strong> Listed both ways, on your site and in the body's own directory.",
            "<strong>A real address.</strong> Where the category implies premises, an address that resolves to them.",
            "<strong>Published policies.</strong> Complaints, cancellation, regulatory disclosures, whatever the category requires.",
            "<strong>Contact details that work.</strong> A phone number that is answered and an email that is monitored.",
        ) + P(
            "We would not describe any of these as hidden ranking factors, and it would be dishonest to imply they are individually rewarded. The mechanism is more mundane. Each one is a claim that can be independently checked, and a business made of checkable claims is one a system can justify naming. A business whose credibility rests entirely on its own assertions is not obviously untrustworthy; it is simply harder to vouch for than the alternative.",
            "For regulated professions in particular, presence on the relevant register is worth confirming rather than assuming. Registers go stale, practitioners move between practices without the record following them, and a lapsed or misfiled entry is both a compliance issue and a visibility one.",
        )),
        ("measuring-local", "Measuring local visibility", P(
            "<span class=\"alr-answer\">A single visibility percentage is close to meaningless for a local business, because local visibility is geographic and a national average hides exactly the variation that matters.</span> What you want at the end is a map, not a number.",
            "Two things make aggregation mandatory before geography even comes into it. Recommendations differ between identical asks, because these systems are probabilistic, because different products retrieve differently, because location and phrasing change the result, and because models change without notice. Two colleagues in the same office can get different answers to the same question and neither result is the truth. The pattern across a hundred questions is real; any individual answer is not. There is more on what moves a single answer, and by how much, in "
            '<a href="/insights/how-to-improve-visibility-in-chatgpt">how to improve your visibility in ChatGPT</a>.',
            "Given that, the useful design is to test across several dimensions at once and keep them separate in the reporting:",
        ) + UL(
            "<strong>By town.</strong> Each place you actually serve, tested as its own question set rather than assumed to follow from the head office location.",
            "<strong>By neighbourhood.</strong> The granularity locals use, which is frequently where a business is strong or absent for reasons nothing else explains.",
            "<strong>By service.</strong> Each named service separately. Being the answer for general work and invisible for the specialist work is common and commercially important.",
            "<strong>By modifier.</strong> Best, cheapest, near me, open now, for nervous patients. Each modifier is effectively a different question.",
            "<strong>By urgency.</strong> Emergency and same-day questions behave differently from planned ones, because availability filters before quality.",
            "<strong>By comparison.</strong> You against a named competitor, which is where a weak public record shows up fastest.",
            "<strong>By reputation query.</strong> Is this business any good, which tests the verification layer rather than the discovery one.",
        ) + P(
            "Cross those and you get a grid rather than a headline, and the value is in the gaps. A practice recommended for routine work across four towns and absent for implants in all of them has a content problem. One recommended in its own town for everything and absent one town over has a geography problem. One named in discovery questions and poorly reviewed in reputation questions has a verification problem, which is the hardest of the three to fix and the most expensive to ignore.",
            "The grid also makes the work finishable, which a single number never does. Local intent narrows the field considerably, and that is good news: it is far easier to become a consistent answer for one city and one service than for a whole country, and the grid tells you which one to pick.",
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
        'BrightLocal (2026), <a href="https://www.brightlocal.com/research/lcrs-ai-trust/" rel="nofollow">Nearly half of consumers are asking AI for business recommendations</a>, the source of the adoption figures above.',
        'BrightLocal (2024), <a href="https://www.brightlocal.com/research/uncovering-chatgpt-search-sources/" rel="nofollow">Uncovering ChatGPT Search Sources</a>, the source of the local source mix above.',
        'BrightLocal (2026), <a href="https://www.brightlocal.com/research/local-consumer-review-survey/" rel="nofollow">Local Consumer Review Survey 2026</a>, the source of the review factors above.',
        'Ahrefs (2025), <a href="https://ahrefs.com/blog/ai-search-overlap/" rel="nofollow">Only 12% of AI cited URLs rank in Google&rsquo;s top 10 for the original prompt</a>, on the relationship between ranking and citation referred to above.',
    ],
    "related": ["how-to-improve-visibility-in-chatgpt",
                "what-is-answer-engine-optimization", "what-makes-ai-cite-a-page"],
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
    "published": "2025-06-18",
    "updated": "2026-08-20",
    "reading": "17 min read",
    "cover": "silver",
    "sections": [
        ("short-answer", "What is the difference between AEO and SEO?", P(
            '<span class="alr-answer">SEO works to rank a page for a query. AEO works to have a business named inside a generated answer. They share most of their technical and editorial foundations, and differ mainly in what counts as success, how stable the result is, and whether the focus is a page or the business as an entity.</span>',
            "The honest summary is that these are two ends of one discipline rather than two disciplines. Most of the work that improves one improves the other, and the businesses treating them as opposed tend to underperform at both.",
            "It is worth saying what this article is not, because the genre is crowded with the alternative. It is not an argument that SEO is finished, and it is not an argument that AEO is a rebrand of it. Both of those positions are being sold, usually by people with something to sell. What actually changes when you move from ranking pages to being retrieved, cited or recommended is specific, measurable in places, and narrower than the marketing suggests. It is also more interesting than either extreme.",
        ) + keyfindings("kf-vs", [
            ("SEO ranks pages; AEO measures inclusion in answers.",
             "One is an ordinal position, the other a frequency."),
            ("Their technical foundations largely overlap.",
             "Crawlable pages, sensible structure and content that answers the question serve both."),
            ("AEO outcomes are less stable.",
             "Identical asks can differ, so measurement has to be repeated and aggregated."),
            ("Search visibility can feed AI retrieval.",
             "In many products the live retrieval path reads conventional results."),
            ("AEO leans harder on entity consistency and corroboration.",
             "Several independent sources describing the business the same way."),
            ("Most businesses should manage both as one connected system.",
             "Splitting them creates work that gets done twice or not at all."),
        ]) + figure(
            "fig-a4-glance",
            "Two ends of one discipline",
            panels([
                panel("SEO", pairs([
                    ("Result", "An ordinal position"),
                    ("Focus", "The page"),
                    ("Stability", "Reasonably stable"),
                    ("Retrieval", "A search index"),
                    ("Measurement", "Rank, impressions, clicks"),
                ]), tone="grey", mark="hollow", sub="Rank a page"),
                panel("AEO", pairs([
                    ("Result", "A frequency of inclusion"),
                    ("Focus", "The business as an entity"),
                    ("Stability", "Varies between identical asks"),
                    ("Retrieval", "Training data and live retrieval"),
                    ("Measurement", "Repeated prompt sets"),
                ]), tone="blue", mark="solid", sub="Be named in an answer"),
            ]),
            "Conceptual summary of what the rest of this article works through. The fuller "
            "comparison, including reviews, links and external signals, is in the table "
            "further down.",
        )),
        ("seo", "What SEO is", P(
            "Search engine optimization is the practice of improving how well a site's pages rank in conventional search results for the queries its audience uses.",
            "It is worth describing it properly rather than as a straw man, because the comparison only means something if both sides are stated at their best. Competent modern SEO covers:",
        ) + UL(
            "<strong>Crawling and indexing.</strong> Whether pages can be reached, rendered and stored, and whether the right ones are.",
            "<strong>Relevance.</strong> Matching a page to an intent, which for twenty years has meant topics and entities rather than keyword density.",
            "<strong>Rankings.</strong> Position for a query, across devices, locations and query variants.",
            "<strong>Result features.</strong> Snippets, panels, local packs, product results and everything else that occupies a results page alongside the ten links.",
            "<strong>Impressions and clicks.</strong> How often a page is shown, how often it is chosen, and the relationship between the two.",
            "<strong>Entity and local signals.</strong> Which good local SEO has taken seriously for a decade, well before anybody called it AEO.",
        ) + P(
            "Success is measurable and reasonably stable: a position for a query, impressions, clicks and what those visitors go on to do. The discipline is considerably more sophisticated than ranking ten blue links, and anyone describing AEO as the arrival of entities, structured data or user intent is describing SEO in about 2015.",
        )),
        ("aeo", "What AEO is", P(
            "Answer engine optimization is the practice of making a business easy for AI answer engines to find, understand, trust and name in a response.",
            "It covers much of the same ground, plus the accuracy and consistency of how a business is described everywhere else on the web, and the evidence supporting its credibility. Success is a frequency rather than a position: the share of relevant questions in which the business comes up.",
            "The part that genuinely differs is that AEO has four outcomes rather than one, and they need measuring separately because they move separately:",
        ) + UL(
            "<strong>Retrieval.</strong> Whether your material enters the set a system considers at all. Necessary for everything else and invisible from outside.",
            "<strong>Citation.</strong> Whether a source is attached to the answer, and whether it is yours. Frequently the citation is a third-party page describing you.",
            "<strong>Mention.</strong> Whether your name appears in the answer text. It may be positive, comparative or unflattering, and it may arrive with no citation of your site at all.",
            "<strong>Recommendation.</strong> Whether the answer puts you forward as the thing to choose. This is the commercial outcome, and it is the rarest of the four.",
        ) + P(
            "Collapsing these into visibility is the single most common analytical error in the category, and it produces reports that are internally inconsistent without anybody noticing. A rising citation count and a falling recommendation rate is a coherent and quite common situation. Described as visibility, it is unreadable.",
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
            "This is the difference that changes strategy. Ranking is ordinal and gradual: moving from position eleven to position six is real progress with real traffic attached, and it can be reported honestly as progress even when the destination is still some way off.",
            "Recommendation is closer to an inclusion threshold. You are named or you are not, and there is no second page to be on. In search, being the eleventh best candidate is worth something: some people scroll, and the traffic is small but real. Being the fourth best candidate when three get named produces the same number as being fortieth, so effort spent getting from tenth to fourth is not visible in the outcome at all until it crosses.",
            "The consequence for reporting is the part most people miss. A plateau just below the threshold looks identical to total absence, which is why measuring only recommendation presence can hide genuine progress. This is the practical argument for tracking citations and mentions alongside it: they move continuously where recommendation moves in steps, and they are how you tell a business that is nearly there from one that is nowhere near.",
        )),
        ("retrieval", "Retrieval", P(
            "Search retrieves from an index it maintains. Answer engines retrieve from a mixture of what the model absorbed in training and, in many products, live results fetched at the moment of asking.",
            "The live retrieval path is the one that connects the two disciplines most directly, and it is why search visibility remains one of the more reliable inputs into AI visibility.",
            "The training-data path behaves differently: it is fixed at a point in time and tends to favour entities that are extensively documented. A new business cannot influence it quickly, which is another argument for working on the retrievable web.",
            "The mechanism that most complicates the relationship is query fan-out. A conversational question is a poor search query, so systems appear to reformulate: one prompt becomes several retrieval queries covering synonyms, narrower sub-questions and supporting facts. Nobody publishes how this works for any major assistant, so it should be treated as a reasonable inference from observed behaviour rather than documented architecture. What it explains, though, is a result that otherwise looks impossible: cited pages frequently do not rank for the words the user actually typed.",
        ) + figure(
            "fig-a4-overlap",
            "Most AI citations do not rank for the original Google query",
            stacked([
                ("Where AI-cited URLs sit in Google", [
                    (12, "12%"), (8, "8%"), (80, "80%"),
                ]),
            ], keys=[
                ("Google top 10, 12%", ""),
                ("Positions 11 to 100, 8%, derived", "mute"),
                ("Not in the top 100, 80%", "grey"),
            ]),
            "In Ahrefs&rsquo; 15,000-query study, an average 12% of AI citations appeared in "
            "Google&rsquo;s top 10 for the original prompt, while 80% did not appear in the "
            "top 100 at all. The middle band is derived from those two reported figures "
            "rather than separately reported. This does not mean search visibility is "
            "unimportant, but it does show that AI retrieval is not simply a replay of the "
            "original search results.",
            kind="Empirical",
            source='Source: Ahrefs, August 2025, across ChatGPT, Gemini, Copilot and Perplexity. <a href="https://ahrefs.com/blog/ai-search-overlap/" rel="nofollow">Only 12% of AI cited URLs rank in Google&rsquo;s top 10 for the original prompt</a>.',
        ) + P(
            "It is worth being precise about what that chart proves and what it does not, because it gets used for both.",
            "What it establishes: <strong>AI retrieval is not the original Google results page rendered as prose.</strong> If it were, the top-ten share would be far higher than 12%. Something else is selecting the sources, and a strategy built purely on ranking for the literal prompt is aiming at the wrong target.",
            "What it does not establish: <strong>that SEO no longer matters.</strong> The study measures overlap with the top ten for the original prompt wording, which is exactly the thing query fan-out would break. A page found through a reformulated query was still found through search. The finding narrows what ranking guarantees; it does not show that search visibility is irrelevant, and the same study found engines varying enormously in how closely they tracked Google.",
        ) + P(
            "That last point deserves its own numbers, because the variation between assistants is larger than the headline average suggests.",
        ) + figure(
            "fig-a4-engines",
            "Search overlap differs sharply by assistant",
            bars([
                ("Perplexity", 28.6, "28.6%", ""),
                ("ChatGPT, in-text citations", 8.0, "8.0%", "grey"),
                ("ChatGPT, reference list", 6.1, "6.1%", "grey"),
            ], scale=30, ticks=["0", "15%", "30%"],
                unit="Share of cited URLs ranking in Google's top 10 for the original prompt"),
            "From the same Ahrefs study. Perplexity tracked Google&rsquo;s top ten roughly "
            "four times as closely as ChatGPT did, and ChatGPT&rsquo;s in-text citations and "
            "its reference list behaved slightly differently from each other. Only the "
            "engines whose exact values the study reports numerically are shown. The "
            "practical reading is that how much conventional ranking buys you depends on "
            "which product somebody is using.",
            kind="Empirical",
            size="sm",
            source='Source: Ahrefs, August 2025, 15,000 long-tail prompts. <a href="https://ahrefs.com/blog/ai-search-overlap/" rel="nofollow">Only 12% of AI cited URLs rank in Google&rsquo;s top 10 for the original prompt</a>.',
        ) + P(
            "This is the useful version of the finding. Not that ranking is obsolete, and not that it is sufficient, but that its value is engine-dependent and currently much higher in the products built around live search than in the general assistants. Any strategy that treats AI visibility as one surface is averaging over a fourfold difference.",
        )),
        ("citations", "Citations", P(
            "Search results are the destination. Citations are supporting evidence attached to an answer, and they behave differently.",
            "A cited source is not necessarily the recommended business. Frequently it is a review platform, a directory or a comparison article that mentions several companies. That means being cited and being recommended are two separate things to measure, and improving one does not automatically improve the other.",
        ) + figure(
            "fig-a4-mentions",
            "ChatGPT and Gemini treat citations and mentions very differently",
            grouped([
                ("ChatGPT", [87, 20.7]),
                ("Gemini", [21.4, 83.7]),
            ], series=[("Cited", ""), ("Mentioned", "grey")],
                scale=100, ticks=["0", "50%", "100%"]) + note(
                "Cited means the domain appeared as a source link. Mentioned means the brand "
                "name appeared in the answer text. Both are shares of the times a domain "
                "appeared at all."
            ),
            "Semrush observed sharply different behaviour by engine across 3,981 domain "
            "appearances. In its dataset ChatGPT cited domains frequently while naming brands "
            "relatively rarely, and Gemini showed close to the reverse. These are measurements "
            "of two products at one point in time, not permanent platform behaviour.",
            kind="Empirical",
            source='Source: Semrush, June 2026, 115 prompts across 14 countries. <a href="https://www.semrush.com/blog/the-ghost-citations-study/" rel="nofollow">Why 62% of AI citations don&rsquo;t lead to brand mentions</a>.',
        ) + P(
            "Across the whole of the same dataset, rather than split by engine, the gap between being cited and being named is the headline result:",
        ) + stats([
            ("61.7%", "Cited as a source, with no brand mention in the answer text"),
            ("13.2%", "Both cited and mentioned"),
            ("25.1%", "Mentioned in the answer, with no citation"),
        ], foot='Shares of 3,981 domain appearances observed across 115 prompts in 14 '
                'countries. Source: Semrush, June 2026, '
                '<a href="https://www.semrush.com/blog/the-ghost-citations-study/" '
                'rel="nofollow">Why 62% of AI citations don&rsquo;t lead to brand '
                'mentions</a>.') + P(
            "The first row is what gets called a ghost citation: your page is the evidence behind an answer that never says who you are. Whether that matters depends entirely on the outcome you are buying. If the objective is brand recognition, a ghost citation delivers almost none of it. If the objective is being the source a system relies on in your category, it is exactly the result you wanted, and it is invisible to any measurement that only counts brand mentions.",
            "The third row is the mirror image and is easy to overlook: a quarter of appearances were mentions with no citation at all, meaning the answer named a business on the strength of something it did not link to. No amount of work on your own pages produces that outcome directly. It comes from the wider record.",
        )),
        ("entity", "Entity understanding", P(
            "Search can rank a page without a confident view of the organisation behind it. An answer engine recommending a business is making a claim about that organisation, so it needs a clearer picture.",
            "The two can therefore diverge, and understanding why is more useful than the observation. Page-level success asks whether this document is a good response to this query. Entity-level confidence asks whether we know what this organisation is, well enough to put its name forward. Those questions have different evidence requirements, and a business can satisfy the first completely while failing the second.",
            "The practical shape of that failure is familiar: a well-optimised service page ranking respectably, behind which the organisation has two trading names in circulation, no stated category, credentials asserted but not verifiable, and an address that moved. Nothing is wrong with the page. There is simply not enough about the company to justify a recommendation, and a recommendation is a claim.",
            "This is where AEO adds work that traditional SEO often skipped: making sure the name, location, category, services and credentials agree across the entire web rather than just reading well on the site. It is also why the two disciplines can produce contradictory reports about the same business, and why reading them together is more informative than either alone.",
        )),
        ("authority", "Authority", P(
            "Both care about external credibility, but they weigh it differently, and the difference is one of emphasis rather than replacement.",
            "Search has historically leaned heavily on links, and it is worth being clear that this has not stopped mattering. Link-based authority still does at least four jobs that bear directly on AI visibility: it improves the odds of being discovered at all, it drives conventional ranking which is a live retrieval path, it contributes to whatever domain-level strength a system perceives, and the linking pages themselves frequently become the third-party sources that get cited. A trade publication that links to you is not only a link. It is a page that may end up as the evidence behind an answer.",
            "What AEO adds is explicit attention to things link-building was never aimed at:",
        ) + UL(
            "<strong>Mentions without links.</strong> A name in text, which does nothing for link equity and plenty for corroboration.",
            "<strong>Professional registers.</strong> Verifiable, categorical and usually unlinked.",
            "<strong>Directories that are consulted rather than counted.</strong> Chosen for whether they appear in answers, not for volume.",
            "<strong>Reviews.</strong> As a body of descriptive text, not as a star rating.",
            "<strong>Source diversity.</strong> Several independent kinds of source, rather than many of one kind.",
            "<strong>Consistent descriptions.</strong> All of the above saying the same thing about you.",
        ) + P(
            "For recommendation, what tends to matter is corroboration: several independent sources describing the business consistently and positively. A professional register entry, an accurate directory listing and a body of recent reviews can carry more weight than a link that would once have been prized. The relevant research also suggests that domain-level evidence outweighs individual page improvements by a wide margin, which is a fairly consequential claim and one we go through properly in "
            '<a href="/insights/what-makes-ai-cite-a-page">what makes AI cite a page</a>.',
        )),
        ("emphasis", "What changes in emphasis", P(
            "Most of the shared foundation is genuinely shared, so the useful way to describe the rest of the difference is as a change of emphasis on four things rather than four separate workstreams.",
        ) + '<h3>Structure</h3>' + P(
            "Largely the same requirements, with a stronger emphasis on extractability: clear headings, one idea per section, explicit nouns instead of pronouns, and answers stated before elaboration. The test is whether a section can be quoted on its own without becoming misleading. If it cannot, it is harder to use than it needs to be, for readers as well as machines.",
        ) + '<h3>Content</h3>' + P(
            "SEO rewards content that satisfies a query better than the alternatives. AEO rewards content that can be extracted accurately and attributed confidently, which is a stricter version of the same requirement rather than a different one.",
            "The change is which parts of a page carry the weight. Under SEO, a page competes as a whole document. Under AEO, a specific paragraph either survives into an answer or does not, so the facts a general model cannot supply for itself become disproportionately valuable: the price, the exclusion, the timescale, the eligibility rule. Vague marketing copy has always performed poorly. It has simply become more obvious which paragraphs were doing nothing.",
        ) + '<h3>Links</h3>' + P(
            "Links still matter for search, for the reasons set out above. What changes is that for recommendation the mention itself often does the work whether or not it is linked, which shifts the emphasis from acquiring links to being accurately present in the right places.",
            "For a local or professional services business this changes the budget allocation more than the tactics. Fixing eight inconsistent listings and getting onto two professional registers is usually a better use of the same money than a link campaign, and it is measurable within weeks rather than quarters.",
        ) + '<h3>Reviews</h3>' + P(
            "Reviews have always influenced local search. For AI recommendation they take on an additional role as citable evidence supporting a claim about quality, which changes which reviews are useful.",
            "Under the old model a rating was a signal and the text was for humans. Under the new one the text is the material: a review that names the service, the location and the outcome can support a specific claim, and a five-star rating with no words cannot support anything. Recency matters for the same reason, since evidence about how a business operated three years ago is weaker evidence about how it operates now.",
        )),
        ("measurement", "Measurement", P(
            "The clearest practical difference, and the one most often skipped.",
            "SEO measurement is comparatively direct. A ranking can be checked, impressions and clicks are reported by the platform itself, and the numbers are stable enough to read week to week without aggregation. When something moves, you can usually see it move.",
            "AEO measurement is indirect and statistical, because there is no position to check and any single answer is a sample. It requires a fixed prompt set, run repeatedly, aggregated, and compared against the previous run of exactly the same set. Five things are worth tracking, and they behave differently from their search equivalents:",
        ) + UL(
            "<strong>Recommendation presence.</strong> The share of prompts naming you. Moves in steps rather than smoothly.",
            "<strong>Citation presence.</strong> Whether your pages or supporting sources appear. Moves more continuously, and is the better early indicator.",
            "<strong>Mention presence.</strong> Whether your name appears in the text. Independent of the above, as the split earlier in this article showed.",
            "<strong>Share of voice.</strong> Your appearances relative to named competitors. Definition-sensitive, so the methodology has to travel with the number.",
            "<strong>Cross-engine variability.</strong> How much the picture differs by product. Not a vanity metric: it tells you how much any single engine's result can be trusted.",
        ) + P(
            "The consequence is that AEO reporting is only meaningful if the prompt set is frozen and the sample is large enough. Change the questions between runs and the comparison is worthless. Run ten prompts and the variance swamps the signal.",
            "Anyone selling AEO without a repeatable measurement method is selling something unverifiable. That is the question worth asking first, and the answer should include how many prompts, how often, across which products, and what happens to the set when the business changes.",
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
        ) + figure(
            "fig-a4-system",
            "One foundation, two sets of outputs, one outcome",
            system(
                bands([
                    ("Shared foundation", ["Crawlability", "Structure", "Useful content",
                                           "Search visibility", "Reputation",
                                           "Accurate listings"], "grey"),
                ]),
                panels([
                    panel("SEO outputs", lines([
                        "Rankings",
                        "Impressions",
                        "Clicks",
                    ]), mark="hollow"),
                    panel("AEO outputs", lines([
                        "Recommendation presence",
                        "Citations",
                        "AI share of voice",
                    ], tone="blue"), tone="blue", mark="solid"),
                ]),
                "Commercial outcomes",
            ) + note(
                "There is no separate AEO project hiding behind the foundation row. A business "
                "that fixes those six things has improved both sets of outputs at once."
            ),
            "Conceptual. Both output columns are measured differently and neither is the "
            "objective: they report into the same commercial outcome, which is the only one "
            "that pays for the work.",
        ) + P(
            "The operating model that follows from all of this is a single one with six components, not two competing programmes. Technical discovery, content, entity clarity, authority, reputation and measurement, feeding both search visibility and answer visibility, reporting into one commercial outcome.",
            "Read that list and notice what is missing: nothing on it is exclusively an AEO activity. Five of the six are things a good search programme was already doing, done with more attention to the entity and to consistency across the web. The sixth, measurement, is the one that genuinely has to be built from scratch, because rank tracking has no equivalent here and prompt sets do not exist until somebody writes them.",
            "That is the honest answer to what is actually different. Not the tactics, mostly. The unit of success, the stability of the result, the amount of attention paid to how the business is described in places you do not own, and the fact that you have to build the instrument before you can read it.",
            'If you want the fuller definition of the discipline, <a href="/insights/what-is-answer-engine-optimization">our introduction to AEO</a> covers it in more detail, and the evidence on what actually predicts citation is in <a href="/insights/what-makes-ai-cite-a-page">what makes AI cite a page</a>. If you want to see what it looks like applied, <a href="%s">Work</a> covers how we measure it and <a href="%s">Research</a> covers what we are still trying to establish.' % (L(UP, WORK), L(UP, RESEARCH)),
        )),
    ],
    "sources": [
        'Google Search Central, <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" rel="nofollow">SEO Starter Guide</a>.',
        'OpenAI, <a href="https://platform.openai.com/docs/bots" rel="nofollow">Overview of OpenAI crawlers</a>.',
        'Ahrefs (2025), <a href="https://ahrefs.com/blog/ai-search-overlap/" rel="nofollow">Only 12% of AI cited URLs rank in Google&rsquo;s top 10 for the original prompt</a>, the source of the retrieval overlap and per-engine figures above.',
        'Semrush (2026), <a href="https://www.semrush.com/blog/the-ghost-citations-study/" rel="nofollow">Why 62% of AI citations don&rsquo;t lead to brand mentions</a>, the source of the citation and mention rates above.',
        'Discovered Labs (2026), <a href="https://discoveredlabs.com/research/what-drives-ai-citations" rel="nofollow">What actually drives AI citations: a statistical analysis of 2M AI citations across 10K pages</a>, the citation research referred to above and covered in detail in <a href="/insights/what-makes-ai-cite-a-page">What Makes AI Cite a Page?</a>',
    ],
    "related": ["what-is-answer-engine-optimization", "what-makes-ai-cite-a-page",
                "how-to-improve-visibility-in-chatgpt"],
}


# ==================================================================
#  ARTICLE 5
#
#  The one article on the site whose subject is the evidence itself. It
#  carries most of the quantitative material deliberately, so that the
#  other four can stay explanatory and link here rather than each
#  reproducing the same coefficients.
#
#  Almost every number below comes from one study. That is stated in the
#  second section rather than buried in the sources list, because a reader
#  who does not know it will over-read the rest of the article.
# ==================================================================
A5 = {
    "slug": "what-makes-ai-cite-a-page",
    "topic": "AI Citations",
    "title": "What Makes AI Cite a Page?",
    "dek": "What large-scale citation research suggests about content alignment, page format, authority, freshness and the sources different AI systems choose.",
    "description": "Large-scale research on AI citations suggests content alignment, page format and domain authority matter more than the standard AEO checklist. What the evidence shows, and what it does not.",
    "author": "emerson",
    "published": "2026-07-05",
    "updated": "2026-07-05",
    "reading": "22 min read",
    "cover": "sage",
    "sections": [
        ("citation", "What does it mean for an AI system to cite a page?", P(
            '<span class="alr-answer">A citation is a source an assistant attaches to an answer as the evidence for something it said.</span> It is not a recommendation, it is not the same as having your brand named, and it is not a ranking position. Treating it as any of those things is the fastest way to misread the research in this article.',
            "It helps to separate four outcomes that get collapsed into the word visibility. A page is <strong>retrieved</strong> when a system pulls it into the working set of material it considers. It is <strong>cited</strong> when it survives that set and appears as a source beside the answer. A company is <strong>mentioned</strong> when its name appears in the answer text. It is <strong>recommended</strong> when the answer puts it forward as the thing the reader should choose.",
            "These come apart constantly. Semrush's 2026 analysis of nearly four thousand domain appearances found that 61.7% of them were citations without an accompanying brand mention, and a further 25.1% were mentions with no citation. Only 13.2% were both. So a page can be the evidence behind an answer that never names its author, and a company can be named in an answer that cites somebody else entirely.",
            "This article is about the narrowest of the four: what characteristics of a page appear to accompany more citations. That is a genuinely useful question, because citation is the outcome most directly tied to what is on a page. It is also the outcome least directly tied to revenue, which is why the wider framing in "
            '<a href="/insights/what-is-answer-engine-optimization">our introduction to AEO</a>'
            " and the measurement discipline in "
            '<a href="/insights/aeo-vs-seo">the AEO and SEO comparison</a>'
            " both still matter.",
        ) + keyfindings("kf-cite", [
            ("Alignment mattered most.",
             "How closely a page's language matched the way people actually prompt outweighed every other page-level feature measured."),
            ("Structural additions helped, but less.",
             "FAQ blocks, short summaries and author information showed small positive effects, none reaching a conventional small-effect threshold."),
            ("Page format mattered on its own.",
             "Pricing pages behaved differently from listicle reviews even after controlling for alignment, depth and domain."),
            ("Freshness is engine-dependent.",
             "Median age of cited content ranged from 5.1 months on Claude to 8.0 months on ChatGPT."),
            ("Authority sat above the page.",
             "A domain-level authority feature carried roughly six times the weight of the strongest individual page feature in the same model."),
            ("A citation is not a recommendation.",
             "Citation, brand mention and recommendation move independently and need measuring separately."),
        ])),
        ("evidence", "What this research can and cannot tell us", P(
            "It can tell us which characteristics of a page tend to accompany more citations across a large sample of pages that were actually cited. It cannot tell us how any assistant ranks sources, because none of them publish that, and none of the studies discussed here had access to it.",
            "That distinction is worth holding onto, because most published AEO advice is either pattern-matched from search engine optimization or generalised from a handful of screenshots. Observational research on a large sample is a real improvement on both. It is still observational.",
            "Almost every quantitative claim in this article comes from one study: Discovered Labs' 2026 analysis of roughly 2 million citation observations across four AI engines over a six-month window, joined to crawled and feature-engineered data on 10,000 of the cited pages. It is, as far as we know, the largest published analysis of citation predictors. It is also a single study of one population, and single studies are how fields end up confidently wrong.",
        ) + UL(
            "<strong>Correlation is not mechanism.</strong> A feature that accompanies more citations may be causing them, may be a proxy for something else, or may be a consequence of the same editorial care that produced the citations.",
            "<strong>Controls help, and they are not proof.</strong> The stronger findings below survive a multivariate model with domain fixed effects, content depth, page type and page age controlled for. That removes the most obvious confounders, not all of them.",
            "<strong>The population is specific.</strong> The dataset is oriented toward business-to-business subject matter and four particular engines. A local trades business or a consumer retailer is not obviously the same population.",
            "<strong>The systems change.</strong> These are measurements of products that were updated during the capture window and have been updated since. A coefficient is a photograph, not a law.",
            "<strong>Only cited pages were crawled.</strong> Feature analysis on a sample of pages that already earned citations tells you what distinguishes them from each other. It says less about what separates them from the pages that were never cited at all.",
        ) + P(
            "The honest summary is that this evidence should change what you prioritise, and should not be quoted as if it were documentation. Where a finding below is strong, we say so. Where it is one number from one model, we say that too.",
        )),
        ("alignment", "Content alignment appears to matter most", P(
            "<span class=\"alr-answer\">Of everything measured, how closely a page's language and concepts matched the way people actually prompt was by far the strongest page-level predictor of citation count.</span> Its standardised effect was roughly three times the size of the next-strongest page feature.",
            "The reported coefficient is +0.37, with a 95% confidence interval of +0.33 to +0.41. Within the study's model, a one standard deviation increase in alignment corresponded to roughly 30% more citations. The next three features on the list, in order, were FAQ sections at +0.07, a short summary or bottom-line-up-front block at +0.05, and an author bio at +0.02.",
        ) + figure(
            "fig-a5-alignment",
            "Prompt alignment was the dominant page-level signal",
            bars([
                ("Prompt-content alignment", 0.37, "+0.37", ""),
                ("FAQ section", 0.07, "+0.07", "mute"),
                ("TLDR or BLUF block", 0.05, "+0.05", "mute"),
                ("Author bio", 0.02, "+0.02", "mute"),
            ], scale=0.40, ticks=["0", "+0.20", "+0.40"],
                unit="Standardised effect on citation count"),
            "Standardised regression coefficients on citation count, from Discovered "
            "Labs&rsquo; analysis of roughly 2 million citation observations across 10,000 "
            "cited pages. Domain, content depth, page type and page age were controlled for, "
            "and the FAQ figure is the one reported for third-party pages. These are "
            "observed associations within one model on a business-to-business population, "
            "not a universal ranking formula.",
            kind="Empirical",
            source='Source: Discovered Labs, 2026, <a href="https://discoveredlabs.com/research/what-drives-ai-citations" rel="nofollow">What actually drives AI citations</a>.',
        ) + P(
            "Alignment was also the most robust finding in the study rather than merely the largest. It remained significant after false discovery rate correction, was selected in every one of 200 stability-selection bootstraps, and survived a double machine learning treatment that strips out confounder variance, coming through at +0.35. Most single features in a study this size do not clear all of that.",
            "That combination is what makes it worth acting on. A large coefficient that appears in one specification and vanishes in the next is a curiosity. A moderate coefficient that survives every attempt to break it is a finding.",
        ) + '<h3>What alignment actually means</h3>' + P(
            "Not keyword matching. A page is aligned when its language, concepts and factual coverage correspond to the questions people actually ask, at the level of detail they ask them.",
            "The difference is easiest to see in a real buying question. Somebody evaluating compliance software asks how much SOC 2 tooling costs for a fifty-person company. An aligned page states a price or a defensible range, says what team size the range assumes, names what is in and out of scope, and explains what the implementation actually involves. A page headed with an invitation to transform your compliance journey covers none of that, and no amount of repeating the phrase SOC 2 changes it.",
            "Alignment therefore starts with knowing the questions rather than with writing. The cheapest sources are the ones already in the business: recorded sales calls, the questions support answers repeatedly, the objections that come up before a decision, the comparisons prospects raise unprompted. A keyword tool will give you phrasings. It will not give you the fifty-person qualifier, which is the part that made the question specific.",
            "Two failure modes are worth naming. The first is answering a more general version of the question, which is what happens when a page is written from a keyword rather than from a conversation. The second is answering the right question in language nobody uses, which is common in regulated and technical categories where the internal vocabulary and the customer vocabulary have drifted apart. Both look like coverage on a content plan and neither is aligned.",
        )),
        ("depth", "Where on the page the answer sits", P(
            "<span class=\"alr-answer\">The paragraph engines cited most often sat at a median depth of 0.36 down the page, where 0 is the top and 1 is the bottom.</span> Roughly speaking, the best matching passage tended to be about a third of the way in.",
        ) + figure(
            "fig-a5-depth",
            "The strongest matching passage tended to appear relatively early",
            depth([
                (0.0, "0.0", "Top of the page", False),
                (0.36, "0.36", "Median depth of the paragraph engines cited most often",
                 True),
                (1.0, "1.0", "Bottom of the page", False),
            ]) + note(
                "A median, not a cut-off. Half of the best-matching paragraphs in the sample "
                "sat deeper than this line."
            ),
            "From Discovered Labs&rsquo; crawl of 10,000 cited pages. The statistic "
            "describes where the most frequently cited paragraph sat on a page, expressed as "
            "a proportion of the page's length. It does not establish that engines stop "
            "reading at any particular depth, and page length varies enormously across the "
            "sample, so the same proportion means very different word counts.",
            kind="Empirical",
            source='Source: Discovered Labs, 2026, <a href="https://discoveredlabs.com/research/what-drives-ai-citations" rel="nofollow">What actually drives AI citations</a>.',
        ) + P(
            "The tempting conclusion is that AI reads only the first third of a page. That is not what a median depth of 0.36 says. Half of the best-matching paragraphs sat deeper than that, and some sat a long way deeper. What the number does suggest is that pages which bury their strongest passage are competing against pages that do not.",
            "There is also a simpler explanation available, and it is worth preferring: well-written pages tend to put their best material early, because that is how you keep a reader. The statistic may be measuring editorial competence as much as machine behaviour. The practical advice happens to be the same either way, which is a comfortable position to be in.",
            "So the useful version of this is not a rule about the top third. It is a question to ask about any page you care about: if somebody quoted the single most useful paragraph on this page, where would it be, and is there a reason it is not closer to the beginning? Setup, background and qualification are often the reason, and they are usually movable.",
        )),
        ("structure", "Structural additions help, but much less than alignment", P(
            "<span class=\"alr-answer\">FAQ blocks, short summaries and author information all showed positive effects on citation count, and all of them were small.</span> The largest, an FAQ section at +0.07, is under a fifth of the alignment effect and does not reach the conventional threshold for a small effect at 0.10.",
            "This is the part of the study that most contradicts current practice, because the standard AEO checklist is largely made of these items. They are worth doing. They are not worth doing first, and they will not rescue a page that answers the wrong question.",
            "The more interesting results in this part of the analysis were the ones that came back empty. After controlling for domain, content depth, page type and page age, the study found no significant independent effect on citation count from:",
        ) + UL(
            "real-user Core Web Vitals, which collapsed into latent factors showing no significant effect once domain was controlled for",
            "synthetic Lighthouse performance scores",
            "schema markup, which the authors suggest contributes indirectly through content structure rather than as a standalone citation signal",
        ) + P(
            "It is important to read that correctly, because it is easy to turn into three bad conclusions. It does not mean speed does not matter, that structured data is useless, or that technical work can be skipped.",
            "What it means is narrower. Among pages that were already being cited, these attributes did not independently predict how often. That is entirely compatible with them mattering earlier in the chain: a page that loads badly or renders only after scripts execute may not be reliably retrievable in the first place, and structured data removes ambiguity about what a page is describing. Neither of those effects would show up as a citation-count coefficient in a sample of pages that had already cleared the bar.",
            "There is also a confounding explanation the study itself gestures at. Schema markup, decent performance and a clear author byline tend to co-occur with a competently run website. Once domain is controlled for, much of what those signals were standing in for has already been absorbed by the domain term. The signal has not disappeared. It has been reassigned.",
            "The practical position, then: treat this layer as hygiene rather than strategy. Implement it consistently, keep it accurate, and stop expecting it to move a number on its own.",
        )),
        ("format", "Page format changes the odds", P(
            "<span class=\"alr-answer\">What kind of page you publish mattered independently of how well it was written.</span> In a controlled model that already accounted for domain, content depth, alignment and page age, pricing pages carried a coefficient of +0.39 while listicle reviews sat at -0.12.",
        ) + figure(
            "fig-a5-format",
            "Page format still mattered after controlling for other factors",
            diverging([
                ("Pricing pages", 0.39, "+0.39", ""),
                ("Listicle reviews", -0.12, "-0.12", "grey"),
            ], scale=0.40, ticks=["-0.40", "0", "+0.40"],
                unit="Coefficient on citation count, against the reference category") + note(
                "Comparison and how-to formats sat near the reference category in the "
                "published analysis and are not plotted, because no coefficient was reported "
                "for them numerically."
            ),
            "Coefficients from Discovered Labs&rsquo; controlled multivariate model, which "
            "included domain fixed effects, content depth, alignment and page age. Because "
            "the effect persists after alignment is controlled for, format appears to carry "
            "information of its own rather than acting purely as a proxy for commercial "
            "intent. Only the two formats with published numerical coefficients are shown.",
            kind="Empirical",
            source='Source: Discovered Labs, 2026, <a href="https://discoveredlabs.com/research/what-drives-ai-citations" rel="nofollow">What actually drives AI citations</a>.',
        ) + P(
            "The likely mechanism is structural rather than mysterious. A pricing page is shaped like the answer to a transactional question. A comparison page that names alternatives and puts their differences side by side is shaped like the answer to an evaluation question. A listicle of loosely ranked options is shaped like something written to occupy a search result, and it tends to contain less of substance per paragraph than either.",
            "The wrong response to this is to convert your content plan into pricing pages. Format only helps when the format matches a question somebody is asking, and a pricing page for a service nobody prices, or a comparison page that compares nothing meaningfully, inherits none of the effect. The finding is about correspondence between the shape of a page and the shape of a question, which is really the alignment finding again, viewed from a different angle.",
            "The right response is narrower and more useful: check whether the commercially important questions in your category have a page of the appropriate shape at all. Many businesses have twenty blog posts and no page that states what anything costs.",
        ) + '<h3>Why specific commercial information carries weight</h3>' + P(
            "Because it is the material an answer cannot be assembled without. A general-purpose model can produce a competent paragraph about what dental implants are or how SOC 2 audits work. It cannot produce what you charge, how long your waiting list is, or which of your tiers includes a named feature.",
            "That makes a short list of facts disproportionately valuable, and they are usually the facts businesses are most reluctant to publish: prices or honest ranges, what is included and excluded, eligibility and prerequisites, realistic timescales, what the process involves step by step, what you do not do, and how your version differs from the two or three alternatives a buyer is actually weighing.",
            "The reluctance is understandable and usually mispriced. Withholding a price does not keep you in the conversation, it removes the page from the set of pages that can answer the question. If a genuine range is impossible, the useful move is to say why and give the variables: a page explaining that implant costs run between two figures depending on bone grafting, sedation and the number of units is more usable than either a fixed number or silence.",
        )),
        ("freshness", "Engines disagree about freshness", P(
            "<span class=\"alr-answer\">There is no single answer to how fresh content needs to be, because the four engines studied had measurably different appetites.</span> The median age of cited content ran from 5.1 months on Claude to 8.0 months on ChatGPT.",
        ) + figure(
            "fig-a5-freshness",
            "Different engines favour different content ages",
            bars([
                ("Claude", 5.1, "5.1", ""),
                ("Google AI", 6.0, "6.0", ""),
                ("Gemini", 7.8, "7.8", ""),
                ("ChatGPT", 8.0, "8.0", ""),
            ], scale=8, ticks=["0", "4", "8"],
                unit="Median age of cited content, months"),
            "Median ages of cited content across Discovered Labs&rsquo; six-month capture "
            "window. These describe what each engine cited, not how often anything should be "
            "published or updated. A median also says nothing about the spread: an engine "
            "with a median of eight months still cited plenty of recent material.",
            kind="Empirical",
            source='Source: Discovered Labs, 2026, <a href="https://discoveredlabs.com/research/what-drives-ai-citations" rel="nofollow">What actually drives AI citations</a>.',
        ) + P(
            "The same divergence shows up in the shape of the decay rather than only in its midpoint. Claude drew 60% of its citations from content less than six months old. ChatGPT drew 40% from the same band, meaning the majority of what it cited was older than half a year.",
        ) + figure(
            "fig-a5-recency",
            "Claude skewed more heavily toward recent content",
            bars([
                ("Claude", 60, "60%", ""),
                ("ChatGPT", 40, "40%", "grey"),
            ], scale=100, ticks=["0", "50%", "100%"],
                unit="Share of the engine's citations on content under six months old"),
            "The two ends of the range in the same dataset: Claude showed the steepest "
            "decline in citations as content aged and ChatGPT the shallowest. Both figures "
            "describe an engine's aggregate appetite over the capture window, and neither "
            "predicts how long a specific page will keep its citations.",
            kind="Empirical",
            size="sm",
            source='Source: Discovered Labs, 2026, <a href="https://discoveredlabs.com/research/what-drives-ai-citations" rel="nofollow">What actually drives AI citations</a>.',
        ) + P(
            "The conclusion this most invites is a refresh cadence, and that is the conclusion to be most careful about. Nothing here shows that republishing a page with a new date earns citations. What it shows is that the pool of content these engines cited skewed toward the recent, more sharply on some than others.",
            "The defensible reading is narrower than a cadence and more useful. Content whose facts move should not be allowed to become visibly stale, because a page with last year's prices, a discontinued service or a superseded regulation is wrong rather than merely old. Content whose facts do not move needs no schedule at all: an explanation of how a procedure works does not improve by being touched every quarter.",
            "So the question to ask about each page is not when it was last updated but whether anything on it has become untrue. That distinction is what separates maintenance from the practice of rewriting timestamps, which costs the same and achieves nothing.",
        )),
        ("authority", "Authority sits above the page", P(
            "<span class=\"alr-answer\">The strongest predictor in the whole analysis was not a property of the page at all.</span> A domain-level authority feature carried a mean absolute SHAP value of 0.38, against 0.06 for the strongest individual page-level feature other than alignment: roughly six times the influence, within that model.",
        ) + figure(
            "fig-a5-authority",
            "Domain-level authority dominated individual page signals in this model",
            bars([
                ("AI-perceived domain authority", 0.38, "0.38", ""),
                ("Strongest page-level feature beyond alignment", 0.06, "0.06", "grey"),
            ], scale=0.40, ticks=["0", "0.20", "0.40"],
                unit="Mean absolute SHAP value"),
            "SHAP values report how much a feature moved this model&rsquo;s predictions, "
            "which is not the same as how important a signal is in general. AI-perceived "
            "domain authority is a feature the study constructed, and it is not Moz&rsquo;s "
            "Domain Authority, Ahrefs&rsquo; Domain Rating or anything Google publishes. "
            "Read it as evidence about where a citation model put its weight rather than as a "
            "causal weight in any engine.",
            kind="Empirical",
            source='Source: Discovered Labs, 2026, <a href="https://discoveredlabs.com/research/what-drives-ai-citations" rel="nofollow">What actually drives AI citations</a>.',
        ) + P(
            "If the finding holds, it is the most commercially consequential one in the study, and the least convenient. It says the ceiling on what page-level work can achieve is set somewhere above the page, and that a challenger competing against a well-established domain is not going to close the gap with better formatting.",
            "It also explains a pattern that otherwise looks arbitrary: a thinly written page on a widely referenced domain being cited in preference to a better page on an unknown one. That is not a judgement about the two pages. It is the domain term doing most of the work.",
            "The caveat matters as much as the number. This is one model's attribution of its own predictions, using a feature its authors built. A different construction of authority would produce a different number, and possibly a different ranking. What survives the caveat is the direction: domain-level evidence appears to be upstream of page-level effort, which is consistent with how these systems are described and with what we see in client work.",
        ) + '<h3>What authority means in practice</h3>' + P(
            "Not a score, and nothing you can buy. In this context authority is an accumulation of independent evidence that a business exists, does what it says, and is regarded in a particular way by people who are not it.",
            "In practice that means being referenced rather than only publishing: coverage in trade or local press, entries on professional registers and licensing bodies that actually govern your category, accurate listings on directories a human would consult, citations in other people's research, mentions from suppliers, partners and clients, and reviews with enough text to describe something specific. What these have in common is that a third party chose to say something about you.",
            "The uncomfortable part is the timescale. Alignment work can change a page this week. Authority accrues over quarters, mostly as a side effect of operating visibly and doing things worth mentioning, and there is no version of it that runs faster because you spent more. The realistic strategy for a smaller business is not to win the authority contest but to compete where it is narrower: a specific service, a specific city, a specific question where the established domains have nothing precise to say.",
        )),
        ("ecosystems", "A source can matter to one engine and barely register in another", P(
            "<span class=\"alr-answer\">Engines do not draw on the same web.</span> In the same dataset, 97% of the LinkedIn citations observed came from Google AI alone. Claude and ChatGPT each drew under 0.4% of their third-party citations from LinkedIn, and Gemini produced none at all in that window.",
            "That figure needs reading precisely, because it is easy to inflate. It is not LinkedIn's share of all citations, and it does not make LinkedIn important. It says that among the citations of LinkedIn that were observed, almost all of them came from one engine. The platform was close to irrelevant to the other three.",
            "The same pattern shows up in how much weight each engine gives to a company's own pages. In this dataset 39% of ChatGPT's unique cited URLs were brand-controlled, against 14% for Gemini, which is a large difference in how much of the answer a business can supply itself. We look at that split, and what to do about it, in "
            '<a href="/insights/how-to-improve-visibility-in-chatgpt">the guide to ChatGPT visibility</a>.',
            "The practical consequence is that a source strategy built by watching one assistant will be miscalibrated for the others. It is also a reason to be sceptical of any list of the platforms AI cites: the list is engine-specific, and the only reliable version is the one you build by reading the sources actually shown for your own questions.",
        )),
        ("no-checklist", "There is no universal AEO checklist", P(
            "<span class=\"alr-answer\">The evidence supports a rough order of priority, not a list of tasks that produces citations when completed.</span> The order is more useful than the list, because most of the items only work when the ones above them are already in place.",
            "Read from the top. Answering the right questions is the precondition for everything else. Specific, checkable content is what makes an answer possible to assemble. Using a page format that matches the shape of the question multiplies content that is already aligned. Domain-level authority sets the ceiling and moves slowest. Keeping time-sensitive information current protects what you have. Structural additions and technical quality are cumulative and cheap, and they are the last place to look for a result.",
            "None of that reduces to a checkbox, which is precisely the problem with how AEO is currently sold. A page with impeccable schema, an FAQ block, a fast load time and a named author, answering a question nobody asks, on a domain nothing references, will not be cited. Every item on the standard checklist is present. The two things that mattered most are missing.",
        )),
        ("citation-ready", "What a citation-ready page looks like", P(
            "<span class=\"alr-answer\">A page that can be cited is one where a specific, checkable claim can be lifted out and attributed without distortion.</span> That is a higher bar than being well written, and a different one from being optimised.",
        ) + figure(
            "fig-a5-anatomy",
            "The parts of a page that make it quotable",
            anatomy(
                "A descriptive H1 naming the exact question the page answers",
                [
                    ("Direct answer",
                     "The question resolved in the opening paragraph, in the words a buyer would use",
                     True),
                    ("Specific facts",
                     "Prices or ranges, timings, eligibility, exclusions and anything a general model could not know",
                     True),
                    ("Evidence",
                     "First-hand experience, original data or named sources supporting the claims made",
                     False),
                    ("Comparison",
                     "How this option differs from the alternatives a reader is actually weighing, named",
                     False),
                    ("Frequently asked questions",
                     "Only where real questions genuinely remain after the body of the page",
                     False),
                    ("Entity details",
                     "Who publishes this, where they operate, and details that agree with every other source",
                     False),
                    ("Current information",
                     "A visible date and a real review cycle, on the pages whose facts actually move",
                     False),
                ],
            ),
            "Conceptual. The two emphasised blocks are the ones the research in this article "
            "speaks to most directly; the rest are supporting, and the order shown is a "
            "reading order rather than a required template. A page that needs none of the "
            "lower blocks is not a worse page.",
        ) + P(
            "The test that catches most problems is extraction. Take the single most useful paragraph on the page and read it on its own. If it still means what it meant in place, it can be cited. If it collapses because it depended on the previous three paragraphs to establish what it was referring to, it cannot, and a system looking for an answer will use somebody else's paragraph instead.",
            "In practice failures are almost always one of the same few things. The subject is a pronoun. The number has no unit or currency. The claim is hedged into meaninglessness. The geography is implied by an address in the footer. The comparison names no alternative. All of these are cheap to fix and none of them require writing for machines, which is the part most AEO advice gets backwards: extractable prose is just prose that says what it means.",
        )),
        ("not-justified", "What the evidence does not justify", P(
            "Several claims currently circulating are either unsupported by the research above or directly contradicted by it. They are worth stating plainly, because most of them are being sold.",
        ) + UL(
            "<strong>That schema markup makes you appear in ChatGPT.</strong> Schema showed no significant independent effect on citation count in this analysis. It reduces ambiguity, which is a reason to implement it accurately, not a mechanism for inclusion.",
            "<strong>That an FAQ block earns citations.</strong> It was the strongest of the structural signals and its effect was +0.07, below the conventional threshold for a small effect. It is a small positive, not a lever.",
            "<strong>That every page needs constant rewriting.</strong> The freshness findings describe what engines cited, not a publishing schedule. Pages whose facts do not move gain nothing from being touched.",
            "<strong>That length wins.</strong> Content depth was a control in these models rather than a headline finding, and adding words to a page that answers the wrong question changes nothing about which question it answers.",
            "<strong>That putting the answer first guarantees inclusion.</strong> A median matching depth of 0.36 is an observation about where good passages sat, not a rule about what gets read.",
            "<strong>That domain authority is a score you can buy.</strong> The authority feature here was constructed by the researchers from observed evidence across the web. It is not a purchasable metric and it is not any vendor's published score.",
            "<strong>That a citation is a recommendation.</strong> The majority of citations in Semrush's dataset came with no brand mention at all. Being the evidence behind an answer is not the same as being the answer.",
        ) + P(
            "The common thread is scale. Most of these claims take a real but small effect, or a descriptive statistic, and promote it to a mechanism. The research does not support mechanisms. It supports priorities.",
        )),
        ("apply", "How to apply the evidence", P(
            "The sequence below is our reading of the research rather than part of anybody's dataset. It is ordered by how much the evidence suggests each item matters, and by how long each one takes to move, which are not the same thing and both belong in a plan.",
        ) + TABLE(
            "Answered Labs interpretation of the research, not part of the source datasets",
            ["Priority", "Work", "Why it sits here"],
            [
                ["High", "Alignment between your pages and the questions people actually ask",
                 "The largest and most robust page-level effect measured"],
                ["High", "Page purpose and format matched to the shape of the question",
                 "Held up independently after alignment and depth were controlled for"],
                ["High", "Domain-level authority through third-party evidence",
                 "Outweighed every individual page feature, and moves the slowest"],
                ["Medium", "Specificity: prices, ranges, exclusions, process, timings",
                 "Supplies the facts an answer cannot be assembled without"],
                ["Medium", "Currency of time-sensitive information",
                 "Engine appetites for recent content differ, and stale facts are simply wrong"],
                ["Supporting", "FAQ blocks, summaries, author information, schema, technical quality",
                 "Small or indirect effects individually, cheap and cumulative together"],
            ],
        ) + P(
            "Two notes on using it. The order is a default, not a diagnosis: a business whose pages cannot be crawled has a technical problem sitting above everything in the table, and a business already aligned and well referenced should be spending its time further down. And nothing here is measurable without a baseline, which means a fixed set of questions, run repeatedly, recorded.",
            "What the evidence changes, in the end, is what you stop doing. It does not describe a new discipline. It suggests that a considerable amount of current AEO activity is concentrated in the layer with the smallest measured effects, and that the two things which mattered most, saying something specific about the right question and being referenced by other people, are the two things no checklist can complete for you. The practical version of that, for a single assistant, is in "
            '<a href="/insights/how-to-improve-visibility-in-chatgpt">how to improve your visibility in ChatGPT</a>.',
        )),
    ],
    "sources": [
        'Discovered Labs (2026), <a href="https://discoveredlabs.com/research/what-drives-ai-citations" rel="nofollow">What actually drives AI citations: a statistical analysis of 2M AI citations across 10K pages</a>, the source of the alignment, page depth, page format, freshness and domain authority figures above.',
        'Semrush (2026), <a href="https://www.semrush.com/blog/the-ghost-citations-study/" rel="nofollow">Why 62% of AI citations don&rsquo;t lead to brand mentions</a>, the source of the citation and mention split above.',
        'Google Search Central, <a href="https://developers.google.com/search/docs/appearance/page-experience" rel="nofollow">Understanding page experience in Google Search results</a>, on why performance work continues to matter for reasons other than citation count.',
        'Google Search Central, <a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" rel="nofollow">Introduction to structured data markup</a>, on what structured data does and does not claim to do.',
    ],
    "related": ["what-is-answer-engine-optimization",
                "how-to-improve-visibility-in-chatgpt", "aeo-vs-seo"],
}


ARTICLES = [A5, A1, A2, A3, A4]
BY_SLUG = {a["slug"]: a for a in ARTICLES}


# ------------------------------------------------------------------
#  Cover artwork
#
#  A background colour and nothing else in the markup. The animated square
#  field from the homepage hero is drawn into the box by cover-field.js,
#  which reads its colour from the cover's own CSS. There is deliberately
#  no label and no artwork inside a cover: the headline beside it is what
#  says what the article is about.
#
#  The key below names the cover's colour, not a subject. "" is the pale
#  blue default, "warm" the cream, "ink" the near-black, "silver" the
#  light neutral grey.
# ------------------------------------------------------------------
def cover(article, cls="alr-cover"):
    mod = article.get("cover") or ""
    suffix = (" alr-cover--" + mod) if mod else ""
    return '<div class="%s%s" data-alr-field aria-hidden="true"></div>' % (cls, suffix)


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
