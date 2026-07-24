# AEO Agency Site

**Source of truth:** the static Attio-based site under `127.0.0.1_8081/dl/`.

That is the latest website (hero chat animation, platform pillars, mobile hero fix, AEO copy). Work there — not in `aeo-site/`.

## Do not use

| Path | What it is |
|------|------------|
| `aeo-site/` | Early React MVP. Incomplete. Abandoned. Ignore it. |

## Latest site (use this)

| Path | What it is |
|------|------------|
| `127.0.0.1_8081/dl/build_hero.py` | Build script. Edits go here, then rebuild. |
| `127.0.0.1_8081/dl/original-attio-backup.html.bak` | Clean Attio backup (input to the builder). |
| `127.0.0.1_8081/dl/ua=Mozilla…attio.com/.html` | Generated live page (output of the builder). |
| `index.html` | Redirects into the generated page. |
| `9rWGDM7ILjb3.com/`, `eSOZMHKB8k26.com/` | Local assets the page loads. |

## Run locally

From the repo root:

```bash
python3 -m http.server 8081
```

Open: [http://127.0.0.1:8081/](http://127.0.0.1:8081/)

## After you change the site

```bash
cd 127.0.0.1_8081/dl
python3 build_hero.py
```

That regenerates the live HTML from the backup + your edits in `build_hero.py`. Hard-refresh the browser.
