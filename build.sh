#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/127.0.0.1_8081/dl"
python3 build_hero.py
python3 resources-src/build_resources.py
echo "Rebuilt live HTML."
