# Answered Labs website

Production marketing site for [answeredlabs.com](https://answeredlabs.com).

Static Attio-based front end + Vercel serverless `POST /api/free-audit` → HubSpot CRM.

## Quick start

```bash
./serve.sh
```

Open [http://127.0.0.1:8081/](http://127.0.0.1:8081/)

Optional CRM testing: copy `.env.example` → `.env` and set `HUBSPOT_ACCESS_TOKEN`.

## Edit the site

1. Change copy/animations in `127.0.0.1_8081/dl/parts/` or `build_hero.py`
2. Rebuild:

```bash
./build.sh
```

3. Hard-refresh the browser

## Layout

| Path | Role |
|------|------|
| `127.0.0.1_8081/dl/parts/*.frag` | Editable page fragments (source of truth) |
| `127.0.0.1_8081/dl/build_hero.py` | Rebuilds live HTML from fragments |
| `127.0.0.1_8081/dl/*.html` | Generated pages |
| `api/free-audit.js` | Vercel serverless Free Audit → HubSpot |
| `vercel.json` | Clean URLs + headers for production |
| `eSOZMHKB8k26.com/`, `9rWGDM7ILjb3.com/` | Local assets |
| `_archive/react-mvp/` | Abandoned — ignore |

## Deploy

1. Push to GitHub
2. Import the repo in Vercel (framework: Other / static)
3. Set environment variable `HUBSPOT_ACCESS_TOKEN`
4. Point Cloudflare DNS for `answeredlabs.com` at Vercel (**do not change MX/SPF/DKIM/DMARC**)

## Ignore

Do **not** work in `_archive/react-mvp/`. It is not the live site.
