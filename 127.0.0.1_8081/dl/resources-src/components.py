"""
Shared building blocks for the Resources pages.

Every helper returns a string of HTML. Links are built through L() so a
page rendered at /insights/<slug> resolves to the same files as one
rendered at /work.
"""

import html


def esc(s):
    return html.escape(s, quote=True)


def L(up, target):
    """Depth-aware internal link. up is "" at the root, "../" one level in."""
    return up + target


# Canonical internal destinations, so a rename happens in one place.
WORK = "work.html"
RESEARCH = "research.html"
INSIGHTS = "insights.html"
ABOUT = "about.html"
PRICING = "pricing.html"
AUDIT = "contact.html"
BOOK = "book.html"


def home(up):
    return up if up else "./"


def arrow(label, href, extra=""):
    return (
        '<a class="alr-arrow" href="%s"%s>%s<i aria-hidden="true">&#8594;</i></a>'
        % (href, (" " + extra) if extra else "", esc(label))
    )


def crumbs(up, trail):
    """trail: list of (label, href_or_None). The last item has no link."""
    items = []
    for label, href in trail:
        if href:
            items.append('<li><a href="%s">%s</a></li>' % (href, esc(label)))
        else:
            items.append("<li>%s</li>" % esc(label))
    return '<nav aria-label="Breadcrumb"><ol class="alr-crumbs">%s</ol></nav>' % "".join(items)


def hero(eyebrow, heading, dek, extra="", crumbs_html=""):
    return """<section class="alr-section alr-section--white">
  <div class="alr-wrap">
    {crumbs}<p class="alr-eyebrow">{eyebrow}</p>
    <h1 class="alr-display">{heading}</h1>
    <p class="alr-dek">{dek}</p>
    {extra}
  </div>
</section>""".format(
        crumbs=crumbs_html,
        eyebrow=esc(eyebrow),
        heading=heading,
        dek=dek,
        extra=extra,
    )


def cta(up, heading, copy, primary_label="Get your free audit", secondary_label="Book a call"):
    return """<section class="alr-section alr-section--paper">
  <div class="alr-wrap">
    <div class="alr-measure alr-cta">
      <h2 class="alr-h2">{heading}</h2>
      <p class="alr-dek" style="margin-inline:auto">{copy}</p>
      <div class="alr-cta-actions">
        <a class="alr-btn alr-btn--primary" href="{audit}">{primary}</a>
        <a class="alr-btn alr-btn--ghost" href="{book}">{secondary}</a>
      </div>
    </div>
  </div>
</section>""".format(
        heading=heading,
        copy=copy,
        audit=L(up, AUDIT),
        book=L(up, BOOK),
        primary=esc(primary_label),
        secondary=esc(secondary_label),
    )


def xlinks(items):
    """items: list of (title, description, href)."""
    cells = []
    for title, desc, href in items:
        cells.append(
            """<a class="alr-xlink" href="{href}">
        <span class="alr-h4">{title}</span>
        <p>{desc}</p>
        <span class="alr-arrow" style="margin-top:6px">Read<i aria-hidden="true">&#8594;</i></span>
      </a>""".format(href=href, title=esc(title), desc=desc)
        )
    return '<div class="alr-xlinks">%s</div>' % "".join(cells)


def author_chip(author, up, note=""):
    return """<span class="alr-author">
  <span class="alr-author-mark" aria-hidden="true">{initials}</span>
  <span>
    <a class="alr-link" href="{href}">{name}</a>
    <span class="alr-small" style="display:block">{role}{note}</span>
  </span>
</span>""".format(
        initials=esc(author["initials"]),
        href=L(up, ABOUT) + "#" + author["anchor"],
        name=esc(author["name"]),
        role=esc(author["role"]),
        note=(" " + note) if note else "",
    )
