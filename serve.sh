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

LOG="/tmp/aeo-serve-${PORT}.log"
PIDFILE="/tmp/aeo-serve-${PORT}.pid"

# Reuse a healthy existing server instead of killing it (prevents browse flakes).
if curl -fsS -m 1 -o /dev/null "http://127.0.0.1:${PORT}/" 2>/dev/null; then
  api_code="$(curl -sS -m 1 -o /dev/null -w "%{http_code}" "http://127.0.0.1:${PORT}/api/free-audit" 2>/dev/null || true)"
  if [ "$api_code" = "405" ] || [ "$api_code" = "400" ] || [ "$api_code" = "415" ] || [ "$api_code" = "503" ]; then
    if [ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
      echo "Already serving http://127.0.0.1:$PORT/ (pid $(cat "$PIDFILE"), log $LOG)"
    else
      echo "Already serving http://127.0.0.1:$PORT/ (existing process, log $LOG)"
    fi
    exit 0
  fi
fi

# Reclaim the port only when nothing healthy is serving.
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

# Detach from the terminal / agent shell so the site keeps running.
# Node server: static site + POST /api/free-audit (loads .env if present).
nohup node scripts/local-site-server.js >>"$LOG" 2>&1 &
echo $! >"$PIDFILE"
disown || true

sleep 1
if ! kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
  echo "Server failed to start. See $LOG" >&2
  tail -50 "$LOG" >&2 || true
  exit 1
fi
echo "Serving http://127.0.0.1:$PORT/ (pid $(cat "$PIDFILE"), log $LOG)"
