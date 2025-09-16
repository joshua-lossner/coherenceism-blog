#!/usr/bin/env bash
set -euo pipefail

if [ ! -d "cora/context" ]; then
  echo "[cora] Submodule not found at ./cora. Run: git submodule update --init --recursive" >&2
  exit 1
fi

echo "[cora] Running context hygiene checks..."
(
  cd cora
  echo "Frontmatter block delimiters:"; rg -n "^---$" context | wc -l
  echo "kind lines:"; rg -n "^kind:\s*(project|methodology|tool|philosophy|working|documentation)" context | wc -l || true
  echo "title lines:"; rg -n "^title:\s+" context | wc -l || true
  echo "intent lines:"; rg -n "^intent:\s+" context | wc -l || true
  echo "status lines:"; rg -n "^status:\s+(draft|active|archived|reference)" context | wc -l || true
  echo "Context INDEX.md files (should be none):"; rg -n --files context | rg 'INDEX\.md$' || echo "None"
  echo "COHERENCE has template/example pointers:"; rg -n 'Templates:|_example\.md' context/*/COHERENCE.md | wc -l || true
)

echo "[cora] Done. Review counts above; zero INDEX.md is expected."

