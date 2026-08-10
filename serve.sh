#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

# Prefer PORT from environment, else from .env, else 8082.
if [ -z "${PORT:-}" ] && [ -f .env ]; then
  PORT="$(python3 - <<'PY'
from pathlib import Path
for line in Path(".env").read_text().splitlines():
  if line.startswith("PORT="):
    print(line.split("=", 1)[1].strip().strip('"').strip("'"))
    break
PY
)"
fi
PORT="${PORT:-8082}"
export PORT

# Reclaim the port if a previous server is still holding it.
for _ in 1 2 3 4 5; do
  if lsof -ti "tcp:$PORT" >/dev/null 2>&1; then
    lsof -ti "tcp:$PORT" | xargs kill -9 2>/dev/null || true
    sleep 0.4
  else
    break
  fi
done

if lsof -ti "tcp:$PORT" >/dev/null 2>&1; then
  echo "Port $PORT is still in use. Free it and retry." >&2
  exit 1
fi

# Detach from the terminal so closing the tab does not kill the site.
# Node server: static site + POST /api/free-audit (loads .env if present).
nohup node scripts/local-site-server.js >/tmp/aeo-serve.log 2>&1 &
echo $! >/tmp/aeo-serve.pid

sleep 1
if ! kill -0 "$(cat /tmp/aeo-serve.pid)" 2>/dev/null; then
  echo "Server failed to start. See /tmp/aeo-serve.log" >&2
  cat /tmp/aeo-serve.log >&2 || true
  exit 1
fi
echo "Serving http://127.0.0.1:$PORT/ (pid $(cat /tmp/aeo-serve.pid), log /tmp/aeo-serve.log)"
