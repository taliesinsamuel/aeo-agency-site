# Answered Labs website

Production marketing site for [answeredlabs.com](https://answeredlabs.com).

Static Attio-based front end + Vercel serverless `POST /api/free-audit` → HubSpot CRM.

## Quick start (frontend + API)

Use the Node server so static pages and `POST /api/free-audit` share one origin.
A plain Python/static server on another port will **not** run the HubSpot API.

```bash
# 1) Required for real lead capture (never commit this file)
cp .env.example .env
# Edit .env and set HUBSPOT_ACCESS_TOKEN (HubSpot private app / service key)
# Scopes: crm.objects.contacts.read, crm.objects.contacts.write

# 2) Start local site + API (default PORT=8082 from .env)
npm run dev
# or: ./serve.sh
```

Open [http://127.0.0.1:8082/](http://127.0.0.1:8082/).

Without `HUBSPOT_ACCESS_TOKEN`, Free Audit correctly fails closed with
“We couldn’t save your details…” (`503 service_unavailable`).

```bash
npm run test:api       # offline handler/validation tests
npm run test:hubspot   # live HubSpot create/update/dedupe (needs token)
```

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
| `127.0.0.1_8081/dl/privacy.html` | Privacy Policy |
| `127.0.0.1_8081/dl/terms.html` | Terms of Use |
| `404.html` | Custom not-found page (Vercel + local) |
| `vercel.json` | Clean URLs + headers for production |
| `eSOZMHKB8k26.com/`, `9rWGDM7ILjb3.com/` | Local assets |
| `_archive/react-mvp/` | Abandoned — ignore |

## Deploy

1. Push to GitHub
2. Import the repo in Vercel (framework: Other / static)
3. Set environment variable `HUBSPOT_ACCESS_TOKEN` (Production; Preview optional)
4. Point Cloudflare DNS for `answeredlabs.com` at Vercel (**do not change MX/SPF/DKIM/DMARC**)
5. In HubSpot/Calendly accounts, confirm the official Calendly ↔ HubSpot integration is enabled

## Ignore

Do **not** work in `_archive/react-mvp/`. It is not the live site.
