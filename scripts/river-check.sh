#!/usr/bin/env bash
set -euo pipefail

ROOT="src/content/journal"
shopt -s nullglob

echo "River Check (heuristic, non-blocking)"

for f in "$ROOT"/*.md; do
  # Extract slug and river
  river=$(rg -n "^river:\s*(.+)$" -r '$1' "$f" | head -n1 | tr -d ' \r' )
  content=$(sed -e '1,/^---$/d' "$f" | tr '[:upper:]' '[:lower:]')

  score_rest=$(echo "$content" | rg -o "\b(rest|rhythm|sleep|walk|walking|breath|breathing|glucose|pace|pacing|pause|restoration)\b" | wc -l | tr -d ' ')
  score_hai=$(echo "$content" | rg -o "\b(ai|algorithm|algorithms|model|models|llm|prompt|machine|machines|anthropic|openai)\b" | wc -l | tr -d ' ')
  score_sys=$(echo "$content" | rg -o "\b(governance|policy|policies|institution|institutions|system|systems|infrastructure|legitimacy|media|platforms|state|states)\b" | wc -l | tr -d ' ')
  score_agy=$(echo "$content" | rg -o "\b(how to|steps|method|workflow|workflows|command|commands|sop|practice|checklist)\b" | wc -l | tr -d ' ')
  score_awake=$(echo "$content" | rg -o "\b(silence|presence|wonder|mystery|prayer|meditation|sacred|alignment|attunement)\b" | wc -l | tr -d ' ')

  # Determine predicted river
  max=0; pred=""
  for kv in "rest-rhythm:$score_rest" "human-ai:$score_hai" "history-systems:$score_sys" "agency:$score_agy" "awakening-alignment:$score_awake"; do
    slug="${kv%%:*}"; val="${kv##*:}"
    if [ "$val" -gt "$max" ]; then max="$val"; pred="$slug"; fi
  done

  if [ "$max" -eq 0 ]; then
    echo "- $(basename "$f"): river=$river — no strong signal (ok)"
  elif [ "$pred" != "$river" ]; then
    echo "! $(basename "$f"): river=$river, predicted=$pred (scores: rest=$score_rest, human-ai=$score_hai, systems=$score_sys, agency=$score_agy, awakening=$score_awake)"
  else
    echo "✓ $(basename "$f"): river=$river (scores: rest=$score_rest, human-ai=$score_hai, systems=$score_sys, agency=$score_agy, awakening=$score_awake)"
  fi
done

echo "Note: heuristic only; treat as guidance."

