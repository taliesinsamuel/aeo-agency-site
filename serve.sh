#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

PORT=8081

# Reclaim the port if a previous server is still holding it.
if lsof -ti "tcp:$PORT" >/dev/null 2>&1; then
  lsof -ti "tcp:$PORT" | xargs kill -9 2>/dev/null || true
  sleep 0.5
fi

# Detach from the terminal so closing the tab does not kill the site.
nohup python3 -m http.server "$PORT" --bind 127.0.0.1 >/tmp/aeo-serve.log 2>&1 &
echo $! >/tmp/aeo-serve.pid

sleep 1
echo "Serving http://127.0.0.1:$PORT/ (pid $(cat /tmp/aeo-serve.pid), log /tmp/aeo-serve.log)"
