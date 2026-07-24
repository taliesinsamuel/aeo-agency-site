# AEO Agency Site

This repo **is** the static Attio-based AEO website. That is the default and only active project.

## Quick start

```bash
./serve.sh
```

Open [http://127.0.0.1:8081/](http://127.0.0.1:8081/)

## Edit the site

1. Change copy/animations in `127.0.0.1_8081/dl/build_hero.py`
2. Rebuild:

```bash
./build.sh
```

3. Hard-refresh the browser

## Layout

| Path | Role |
|------|------|
| `index.html` | Entry point (opens the live site) |
| `127.0.0.1_8081/dl/build_hero.py` | Source of truth for site edits |
| `127.0.0.1_8081/dl/original-attio-backup.html.bak` | Clean Attio backup (builder input) |
| `127.0.0.1_8081/dl/*.html` | Generated live page |
| `9rWGDM7ILjb3.com/`, `eSOZMHKB8k26.com/` | Local assets |
| `_archive/react-mvp/` | Old abandoned React experiment — ignore |

## Ignore

Do **not** work in `_archive/react-mvp/`. It is not the live site.
