"""
Editorial figures for the Insights articles.

A small set of composable primitives that render as semantic HTML styled by
the ARTICLE FIGURES block in theme.css. Every figure is static markup: no
canvas, no chart library, no script, and deliberately none of the
[data-alr-anim] / [data-alr-figure] hooks resources.js animates, so figures
render immediately and never move.

Two rules govern what these are allowed to say.

Evidence. A figure may only carry a number when that number is already
stated in the article it sits in, or comes from a source cited beneath it.
Everything else is an explanatory diagram, a comparison matrix or a
qualitative chart. Each figure declares which it is through the `kind` chip
in its header ("Conceptual", "Illustrative", "Framework"), so a reader can
never mistake a diagram for a measurement.

Accessibility. All labels are real DOM text rather than baked into an SVG.
Genuinely tabular comparisons use table markup. Purely decorative geometry
(placeholder result rows, prompt cells) is hidden from assistive technology
and its meaning is carried by a visible legend and the caption instead.
Comparisons never depend on colour alone: each side also carries a distinct
marker and its own label.
"""

import html


def esc(s):
    return html.escape(s, quote=True)


def _items(seq):
    return "".join("<li>%s</li>" % esc(s) for s in seq)


# ------------------------------------------------------------------
#  Wrappers
# ------------------------------------------------------------------
def figure(fid, title, body, caption, kind="Conceptual", source=None, size=""):
    """
    fid      unique id stem, used for the figure's accessible name
    title    a concise claim or question, plain text
    body     the figure itself, built from the primitives below
    caption  one or two sentences of what to take from it, may contain markup
    kind     "Conceptual" | "Illustrative" | "Framework" | "Empirical"
    source   required whenever the figure carries empirical data
    size     "" or "sm" for a compact figure
    """
    cls = "alr-fig" + ((" alr-fig--" + size) if size else "")
    src = ('<span class="alr-fig-src">%s</span>' % source) if source else ""
    return (
        '<figure class="{cls}" aria-labelledby="{fid}-t">'
        '<div class="alr-fig-head">'
        '<p class="alr-fig-kind">{kind}</p>'
        '<p class="alr-fig-title" id="{fid}-t">{title}</p>'
        "</div>"
        '<div class="alr-fig-plot">{body}</div>'
        '<figcaption class="alr-fig-cap">{caption}{src}</figcaption>'
        "</figure>"
    ).format(cls=cls, fid=fid, kind=esc(kind), title=esc(title),
             body=body, caption=caption, src=src)


def keyfindings(fid, findings):
    """
    findings: list of (lead, rest). `rest` may be empty for a bare statement.
    """
    lis = []
    for lead, rest in findings:
        tail = (" " + rest) if rest else ""
        lis.append("<li><strong>%s</strong>%s</li>" % (esc(lead), esc(tail)))
    return (
        '<aside class="alr-keyfind" aria-labelledby="{fid}">'
        '<p class="alr-keyfind-t" id="{fid}">Key findings</p>'
        "<ul>{lis}</ul>"
        "</aside>"
    ).format(fid=fid, lis="".join(lis))


# ------------------------------------------------------------------
#  Small parts
# ------------------------------------------------------------------
def chips(items, tone=""):
    t = "".join(" alr-fg-chips--" + x for x in tone.split()) if tone else ""
    return '<ul class="alr-fg-chips%s" role="list">%s</ul>' % (t, _items(items))


def lines(items, tone=""):
    """A ruled list. Easier to read than pills once entries run past a few
    words, which is most of the time inside a column."""
    t = (" alr-fg-lines--" + tone) if tone else ""
    return '<ul class="alr-fg-lines%s" role="list">%s</ul>' % (t, _items(items))


def note(text):
    return '<p class="alr-fg-note">%s</p>' % text


def legend(items):
    """items: list of (swatch tone, label). Swatches are decorative; the
    label carries the meaning."""
    cells = "".join(
        '<li><span class="alr-fg-sw alr-fg-sw--%s" aria-hidden="true"></span>%s</li>'
        % (tone, esc(label))
        for tone, label in items
    )
    return '<ul class="alr-fg-legend" role="list">%s</ul>' % cells


def pairs(items, tone=""):
    t = (" alr-fg-pairs--" + tone) if tone else ""
    return '<dl class="alr-fg-pairs%s">%s</dl>' % (t, "".join(
        "<dt>%s</dt><dd>%s</dd>" % (esc(k), esc(v)) for k, v in items
    ))


# ------------------------------------------------------------------
#  Columns
# ------------------------------------------------------------------
def panel(label, body, tone="", mark="", sub=""):
    """mark: "solid" | "hollow" — a non-colour cue so the two sides of a
    comparison stay distinguishable without relying on hue."""
    cls = "alr-fg-col" + ((" alr-fg-col--" + tone) if tone else "")
    m = ('<span class="alr-fg-mark alr-fg-mark--%s" aria-hidden="true"></span>' % mark) if mark else ""
    s = ('<p class="alr-fg-col-s">%s</p>' % esc(sub)) if sub else ""
    return '<div class="%s"><p class="alr-fg-col-t">%s%s</p>%s%s</div>' % (
        cls, m, esc(label), s, body
    )


def panels(cols):
    return '<div class="alr-fg-cols" style="--fg-n:%d">%s</div>' % (
        len(cols), "".join(cols)
    )


# ------------------------------------------------------------------
#  Result structures (illustrative wireframes, never data)
# ------------------------------------------------------------------
def ranks(n, marked=()):
    rows = []
    for i in range(1, n + 1):
        cls = "alr-fg-rank" + (" is-marked" if i in marked else "")
        rows.append(
            '<li class="%s"><span class="alr-fg-rank-n">%d</span>'
            '<span class="alr-fg-rank-lines" aria-hidden="true"><i></i><i></i></span></li>'
            % (cls, i)
        )
    return '<ol class="alr-fg-ranks">%s</ol>' % "".join(rows)


def slots(labels, excluded=""):
    lis = ['<li class="alr-fg-slot">%s</li>' % esc(l) for l in labels]
    if excluded:
        lis.append('<li class="alr-fg-slot alr-fg-slot--out">%s</li>' % esc(excluded))
    return '<ol class="alr-fg-slots">%s</ol>' % "".join(lis)


def cells(pattern):
    """pattern: list of booleans. Decorative — the legend and caption say
    what it means, so the grid itself is hidden from assistive tech."""
    out = "".join(
        '<span class="alr-fg-cell%s"></span>' % (" is-named" if p else "")
        for p in pattern
    )
    return '<div class="alr-fg-cells" aria-hidden="true">%s</div>' % out


def runs(rows):
    """rows: list of (label, pattern, annotation). Shows the shape of a goal
    across repeated runs of the same prompt set. Carries no measurements."""
    out = []
    for label, pattern, ann in rows:
        marks = "".join(
            '<span class="alr-fg-cell%s"></span>' % (" is-named" if p else "")
            for p in pattern
        )
        out.append(
            '<div class="alr-fg-run"><p class="alr-fg-run-t">%s</p>'
            '<div class="alr-fg-run-c" aria-hidden="true">%s</div>'
            '<p class="alr-fg-run-a">%s</p></div>' % (esc(label), marks, esc(ann))
        )
    return '<div class="alr-fg-runs">%s</div>' % "".join(out)


# ------------------------------------------------------------------
#  Process
# ------------------------------------------------------------------
def flow(nodes, vertical=False):
    """nodes: list of (label, subs). subs is a list of inputs shown feeding
    that stage, or None. A sub entry given as (label, "shared") is picked out
    in blue, for an input that is also an output of another lane."""
    lis = []
    for label, subs in nodes:
        sub = ""
        if subs:
            cells_ = []
            for s in subs:
                if isinstance(s, tuple):
                    cells_.append('<li class="is-%s">%s</li>' % (s[1], esc(s[0])))
                else:
                    cells_.append("<li>%s</li>" % esc(s))
            sub = '<ul class="alr-fg-sub" role="list">%s</ul>' % "".join(cells_)
        lis.append(
            '<li class="alr-fg-node"><span class="alr-fg-node-t">%s</span>%s</li>'
            % (esc(label), sub)
        )
    cls = "alr-fg-flow" + (" alr-fg-flow--v" if vertical else "")
    return '<ol class="%s">%s</ol>' % (cls, "".join(lis))


def lanes(items):
    return '<div class="alr-fg-lanes">%s</div>' % "".join(items)


def lane(label, body):
    return (
        '<div class="alr-fg-lane"><p class="alr-fg-lane-t">%s</p>'
        '<div class="alr-fg-lane-b">%s</div></div>' % (esc(label), body)
    )


def stack(items, up=False, emphasis=None):
    """
    items: list of (label, note). Rendered top to bottom in the order given.
    up=True renders a dependency stack instead: the list is given base-first
    but displayed with the base at the bottom, and numbering counts down.
    emphasis: the number to pick out as the figure's conclusion.
    """
    seq = list(items)
    n = len(seq)
    if up:
        seq = list(reversed(seq))
    lis = []
    for idx, (label, sub) in enumerate(seq):
        num = (n - idx) if up else (idx + 1)
        cls = "alr-fg-step" + (" is-emph" if emphasis == num else "")
        lis.append(
            '<li class="%s"><span class="alr-fg-step-n" aria-hidden="true">%d</span>'
            '<span class="alr-fg-step-b"><span class="alr-fg-step-t">%s</span>%s</span></li>'
            % (cls, num, esc(label),
               ('<span class="alr-fg-step-s">%s</span>' % esc(sub)) if sub else "")
        )
    return '<ol class="alr-fg-stack%s"%s>%s</ol>' % (
        " alr-fg-stack--up" if up else "",
        " reversed" if up else "",
        "".join(lis),
    )


def drivers(source, factors, outcome):
    return (
        '<div class="alr-fg-drive">'
        '<p class="alr-fg-drive-in">%s</p>'
        '<ul class="alr-fg-drive-f" role="list">%s</ul>'
        '<p class="alr-fg-drive-out">%s</p>'
        "</div>" % (esc(source), _items(factors), esc(outcome))
    )


def converge(label, items, nodes):
    """A band of independent inputs narrowing onto one or more conclusions.
    The last node is emphasised as the outcome."""
    last = len(nodes) - 1
    out = "".join(
        '<li class="alr-fg-conv-n%s">%s</li>' % ((" is-emph" if i == last else ""), esc(x))
        for i, x in enumerate(nodes)
    )
    head = ('<p class="alr-fg-band-t">%s</p>' % esc(label)) if label else ""
    return (
        '<div class="alr-fg-conv">%s%s<ol class="alr-fg-conv-out">%s</ol></div>'
        % (head, chips(items), out)
    )


# ------------------------------------------------------------------
#  Fields, layers and matrices
# ------------------------------------------------------------------
def system(foundation, columns, outcome):
    """One shared foundation feeding two sets of outputs that both report
    into a single outcome. `foundation` is a bands() block and `columns` a
    panels() block."""
    return (
        '<div class="alr-fg-sys">%s%s<p class="alr-fg-conv-n is-emph">%s</p></div>'
        % (foundation, columns, esc(outcome))
    )


def hub(core, sources):
    """A central concept with independent source categories around it. No
    source is drawn larger or closer than another, because nothing here
    establishes a weighting."""
    lis = "".join('<li class="alr-fg-hub-s">%s</li>' % esc(s) for s in sources)
    return (
        '<div class="alr-fg-hub">'
        '<ul class="alr-fg-hub-r" role="list">%s</ul>'
        '<p class="alr-fg-hub-c">%s</p>'
        "</div>" % (lis, esc(core))
    )


def overlap(left, mid, right):
    """Two emphases sharing a common centre. left/mid/right are
    (label, items) tuples."""
    def zone(data, cls):
        return '<div class="%s"><p class="alr-fg-lap-t">%s</p>%s</div>' % (
            cls, esc(data[0]), chips(data[1])
        )
    return (
        '<div class="alr-fg-lap">%s%s%s</div>'
        % (zone(left, "alr-fg-lap-z alr-fg-lap-z--l"),
           zone(mid, "alr-fg-lap-z alr-fg-lap-z--m"),
           zone(right, "alr-fg-lap-z alr-fg-lap-z--r"))
    )


def bands(rows):
    """rows: list of (label, items, tone). Rendered as stacked layers, the
    first row on top."""
    out = []
    for label, items, tone in rows:
        cls = "alr-fg-band" + ((" alr-fg-band--" + tone) if tone else "")
        out.append(
            '<div class="%s"><p class="alr-fg-band-t">%s</p>%s</div>'
            % (cls, esc(label), chips(items))
        )
    return '<div class="alr-fg-bands">%s</div>' % "".join(out)


def matrix(headers, rows, tone=""):
    """A genuine comparison matrix, rendered as a table so it is readable
    with assistive technology and selectable as text. headers[0] labels the
    row-header column and is normally blank. tone="ab" tints the final
    column, for the matrices whose last column is the AEO side."""
    head = "".join("<th scope='col'>%s</th>" % esc(h) for h in headers)
    body = ""
    for r in rows:
        body += "<tr><th scope='row'>%s</th>%s</tr>" % (
            esc(r[0]), "".join("<td>%s</td>" % esc(c) for c in r[1:])
        )
    cls = "alr-fg-table" + ((" alr-fg-table--" + tone) if tone else "")
    return (
        '<div class="%s"><table class="alr-table alr-table--fig">'
        "<thead><tr>%s</tr></thead><tbody>%s</tbody></table></div>"
        % (cls, head, body)
    )


def quad(xlab, ylab, items):
    """items: four (title, note) cells in reading order — top left, top
    right, bottom left, bottom right."""
    cs = "".join(
        '<div class="alr-fg-quad-c"><p class="alr-fg-quad-t">%s</p>'
        '<p class="alr-fg-quad-n">%s</p></div>' % (esc(t), esc(n))
        for t, n in items
    )
    return (
        '<div class="alr-fg-quad">'
        '<p class="alr-fg-axis alr-fg-axis--y">%s</p>'
        '<div class="alr-fg-quad-g">%s</div>'
        '<p class="alr-fg-axis alr-fg-axis--x">%s</p>'
        "</div>" % (esc(ylab), cs, esc(xlab))
    )


def rings(core, layers):
    """layers: innermost first. Areas only, no map and no pins."""
    inner = '<p class="alr-fg-ring-c">%s</p>' % esc(core)
    for label in layers:
        inner = '<div class="alr-fg-ring"><p class="alr-fg-ring-t">%s</p>%s</div>' % (
            esc(label), inner
        )
    return '<div class="alr-fg-rings">%s</div>' % inner


# ------------------------------------------------------------------
#  Quantitative charts
# ------------------------------------------------------------------
# These plot real numbers, so they carry stricter obligations than the
# diagrams above. A chart may only be used with figure(kind="Empirical",
# source=...) when its values come from the cited study, or with
# kind="Illustrative" when the quantity is one the article itself states.
#
# Two implementation rules keep them honest and readable. Every value is
# printed as text beside its own bar, so the geometry is a reading aid and
# never the only carrier of a number, and no chart needs a hover or a
# tooltip to be understood. Bar length is expressed as a --v custom
# property holding the value as a percentage of the axis maximum, which lets
# CSS lay the same markup out horizontally or vertically at different widths
# without Python recomputing anything.


def _v(value, scale):
    """Value as a percentage of the axis maximum, clamped."""
    return round(max(0.0, min(1.0, float(value) / scale)) * 100, 2)


def _axis(ticks, unit=None):
    if not ticks:
        return ""
    out = '<p class="alr-fg-ax" aria-hidden="true">%s</p>' % "".join(
        "<span>%s</span>" % esc(t) for t in ticks
    )
    if unit:
        out += '<p class="alr-fg-ax-u">%s</p>' % esc(unit)
    return out


def bars(rows, scale, ticks=None, unit=None):
    """A ranked horizontal bar chart.

    rows   (label, value, display, tone), in the order they should appear.
           tone "" is the primary blue, "mute" a paler blue for supporting
           series and "grey" the charcoal used for comparison.
    scale  the axis maximum, which the caption or ticks should make explicit
    ticks  optional axis labels, evenly spaced from zero to the maximum
    unit   what the axis counts, for a scale a reader cannot infer from the
           numbers alone

    Renders a definition list, so a screen reader reads each label with its
    value and the bar itself contributes nothing it has to interpret.
    """
    out = []
    for label, value, display, tone in rows:
        t = (" alr-fg-bar--" + tone) if tone else ""
        out.append(
            '<div class="alr-fg-bar%s"><dt>%s</dt>'
            '<dd><span class="alr-fg-bar-t"><span class="alr-fg-bar-f" '
            'style="--v:%s" aria-hidden="true"></span></span>'
            '<span class="alr-fg-bar-v">%s</span></dd></div>'
            % (t, esc(label), _v(value, scale), esc(display))
        )
    return '<dl class="alr-fg-bars">%s</dl>%s' % ("".join(out), _axis(ticks, unit))


def stacked(rows, keys):
    """One or more 100% stacked horizontal bars.

    rows  (label, [(value, display), ...]) with one entry per key, in the
          same order as `keys`, summing to 100
    keys  (name, tone) describing each segment, rendered as a legend beneath

    A single-row chart carries each value in its legend entry as well as in
    its segment, which lets a very thin segment drop its inline number on a
    narrow screen without the reader losing it. A multi-row chart cannot do
    that, because one legend entry covers several values, so its inline
    numbers are always shown.
    """
    one = len(rows) == 1
    out = []
    for label, segs in rows:
        cells_ = []
        for (value, display), (name, tone) in zip(segs, keys):
            t = (" alr-fg-seg--" + tone) if tone else ""
            cells_.append(
                '<span class="alr-fg-seg%s" style="--v:%s">'
                '<span class="alr-fg-seg-v">%s</span></span>'
                % (t, _v(value, 100), esc(display))
            )
        out.append(
            '<div class="alr-fg-stk-r"><p class="alr-fg-stk-l">%s</p>'
            '<div class="alr-fg-stk-b">%s</div></div>' % (esc(label), "".join(cells_))
        )
    key = "".join(
        '<li><span class="alr-fg-sw alr-fg-sw--%s" aria-hidden="true"></span>%s</li>'
        % (tone or "named", esc(name))
        for name, tone in keys
    )
    return (
        '<div class="alr-fg-stk%s">%s<ul class="alr-fg-legend" role="list">%s</ul></div>'
        % (" alr-fg-stk--one" if one else "", "".join(out), key)
    )


def grouped(groups, series, scale, ticks=None):
    """A grouped bar chart: columns on a wide container, rows on a narrow one.

    groups  (group label, [value, ...]) with one value per series
    series  (short name, display formatter tone) as (name, tone)
    scale   the axis maximum shared by every bar

    Each bar prints its own value and its own series name, so the chart reads
    without a legend and without depending on colour to tell the series
    apart. `scale` is shared across groups, which is what makes the columns
    comparable.
    """
    out = []
    for label, values in groups:
        bs = []
        for value, (name, tone) in zip(values, series):
            t = (" alr-fg-gb--" + tone) if tone else ""
            display = ("%g%%" % value) if scale == 100 else ("%g" % value)
            # --v sits on the wrapper so both the track and the fill can read
            # it: row mode scales the fill's width, column mode the track's
            # height.
            bs.append(
                '<div class="alr-fg-gb%s" style="--v:%s">'
                '<span class="alr-fg-gb-v">%s</span>'
                '<span class="alr-fg-gb-t"><span class="alr-fg-gb-f" '
                'aria-hidden="true"></span></span>'
                '<span class="alr-fg-gb-k">%s</span></div>'
                % (t, _v(value, scale), esc(display), esc(name))
            )
        out.append(
            '<div class="alr-fg-grp"><p class="alr-fg-grp-l">%s</p>'
            '<div class="alr-fg-grp-s">%s</div></div>' % (esc(label), "".join(bs))
        )
    return '<div class="alr-fg-grouped">%s</div>%s' % ("".join(out), _axis(ticks))


def slope(points, ticks, scale):
    """A two-point slope graph.

    points  (x label, value, display) for exactly two observations
    ticks   y-axis labels, highest first
    scale   the y-axis maximum

    The line is a stretched SVG with a non-scaling stroke, which stays
    straight and evenly weighted at any width. It is hidden from assistive
    technology because it carries no information the two printed values and
    their year labels do not already state.
    """
    (xa, va, da), (xb, vb, db) = points
    ya, yb = _v(va, scale), _v(vb, scale)
    pts = []
    for x, y, display in ((0, ya, da), (100, yb, db)):
        pts.append(
            '<span class="alr-fg-slope-p" style="--x:%s%%;--y:%s%%">'
            '<span class="alr-fg-slope-v">%s</span></span>' % (x, y, esc(display))
        )
    return (
        '<div class="alr-fg-slope">'
        '<div class="alr-fg-slope-y" aria-hidden="true">%s</div>'
        '<div class="alr-fg-slope-a">'
        '<svg class="alr-fg-slope-l" viewBox="0 0 100 100" preserveAspectRatio="none" '
        'aria-hidden="true" focusable="false">'
        '<line x1="0" y1="%s" x2="100" y2="%s" vector-effect="non-scaling-stroke"/>'
        "</svg>%s</div>"
        '<p class="alr-fg-slope-x"><span>%s</span><span>%s</span></p>'
        "</div>"
        % (
            "".join("<span>%s</span>" % esc(t) for t in ticks),
            round(100 - ya, 2), round(100 - yb, 2),
            "".join(pts), esc(xa), esc(xb),
        )
    )


def subplots(items):
    """Two small charts inside one figure, side by side on a wide container
    and stacked on a narrow one.

    items: (heading, body) pairs. Each sub-plot keeps its own axis, so the
    headings have to state what is being measured rather than relying on a
    shared scale the reader might assume.
    """
    return '<div class="alr-fg-sub2">%s</div>' % "".join(
        '<div class="alr-fg-sub2-c"><p class="alr-fg-sub2-t">%s</p>%s</div>'
        % (esc(h), b)
        for h, b in items
    )


def _half(value, scale):
    """Magnitude as a percentage of one half of a two-sided axis."""
    return round(min(1.0, abs(float(value)) / scale) * 50, 2)


def diverging(rows, scale, ticks=None, unit=None):
    """A diverging bar chart, with zero at the centre of the track.

    rows   (label, value, display, tone). A negative value is drawn to the
           left of the zero line and a positive one to the right.
    scale  the axis maximum in each direction, so the axis spans
           -scale to +scale
    ticks  optional axis labels, evenly spaced across the whole span
    unit   what the axis counts

    The sign is carried three ways over: by which side of the line the bar
    sits on, by the tone, and by the printed value. Nothing about the
    direction of an effect depends on being able to see the chart.
    """
    out = []
    for label, value, display, tone in rows:
        t = (" alr-fg-dv--" + tone) if tone else ""
        side = "neg" if float(value) < 0 else "pos"
        out.append(
            '<div class="alr-fg-dv%s"><dt>%s</dt>'
            '<dd><span class="alr-fg-dv-t"><span class="alr-fg-dv-f '
            'alr-fg-dv-f--%s" style="--v:%s" aria-hidden="true"></span></span>'
            '<span class="alr-fg-dv-v">%s</span></dd></div>'
            % (t, esc(label), side, _half(value, scale), esc(display))
        )
    return '<dl class="alr-fg-divs">%s</dl>%s' % (
        "".join(out), _axis(ticks, unit)
    )


def depth(marks, rules=14):
    """A page-depth scale: a tall block standing for one page, with marked
    depths read off beside it.

    marks  (position from 0 to 1, key, label, emphasis bool). 0 is the top
           of the page and 1 the bottom, which is the convention the study
           being plotted uses.
    rules  how many decorative text rules to draw inside the page

    The block is a wireframe rather than a screenshot and is hidden from
    assistive technology: every position is printed as a number beside its
    own label, so the scale reads as an ordinary list.
    """
    body, keys = [], []
    for pos, key, label, emph in marks:
        pct = round(max(0.0, min(1.0, float(pos))) * 100, 2)
        if emph:
            body.append(
                '<span class="alr-fg-dep-r" style="--y:%s%%"></span>' % pct
            )
        keys.append(
            '<li class="alr-fg-dep-m%s" style="--y:%s%%">'
            '<span class="alr-fg-dep-k">%s</span>'
            '<span class="alr-fg-dep-l">%s</span></li>'
            % ((" is-emph" if emph else ""), pct, esc(key), esc(label))
        )
    return (
        '<div class="alr-fg-dep">'
        '<div class="alr-fg-dep-p" aria-hidden="true">%s%s</div>'
        '<ol class="alr-fg-dep-s">%s</ol>'
        "</div>" % ("<i></i>" * rules, "".join(body), "".join(keys))
    )


def anatomy(head, blocks):
    """An annotated page wireframe: the zones of a page, named where they
    would appear on it.

    head    the label for the page's opening block
    blocks  (label, note, emphasis bool)

    Emphasis carries a solid marker as well as an accent rule, so which
    blocks are doing the most work survives without colour.
    """
    out = []
    for label, note_, emph in blocks:
        out.append(
            '<li class="alr-fg-anat-b%s">'
            '<span class="alr-fg-mark alr-fg-mark--%s" aria-hidden="true"></span>'
            '<span class="alr-fg-anat-t">%s</span>'
            '<span class="alr-fg-anat-s">%s</span>'
            '<span class="alr-fg-anat-w" aria-hidden="true"><i></i><i></i></span>'
            "</li>"
            % ((" is-emph" if emph else ""), ("solid" if emph else "hollow"),
               esc(label), esc(note_))
        )
    return (
        '<div class="alr-fg-anat">'
        '<p class="alr-fg-anat-h">%s</p>'
        '<ol class="alr-fg-anat-l">%s</ol>'
        "</div>" % (esc(head), "".join(out))
    )


def stats(items, foot):
    """A compact row of figures for a result that needs a number and a
    sentence rather than a chart.

    items  (value, label) pairs
    foot   where the figures come from, including the link

    This is deliberately not a figure(): it carries no geometry, so it is
    not counted or captioned as one. It still names its source, because the
    numbers in it are external.
    """
    cells_ = "".join(
        '<div class="alr-fg-stat"><dt>%s</dt><dd>%s</dd></div>'
        % (esc(value), esc(label))
        for value, label in items
    )
    return (
        '<aside class="alr-datastat">'
        '<dl class="alr-fg-stats">%s</dl>'
        '<p class="alr-fg-stats-f">%s</p>'
        "</aside>" % (cells_, foot)
    )
