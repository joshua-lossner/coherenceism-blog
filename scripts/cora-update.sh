#!/usr/bin/env bash
set -euo pipefail

echo "[cora] Updating submodule..."
# Ensure submodule exists and is initialized
git submodule update --init --recursive cora

# Fast-forward cora to latest main (does not auto-commit parent)
if git -C cora rev-parse --abbrev-ref HEAD >/dev/null 2>&1; then
  git -C cora fetch origin >/dev/null 2>&1 || true
  git -C cora checkout -q main || true
  git -C cora pull -q --ff-only origin main || true
fi

echo "[cora] Now at $(git -C cora rev-parse --short HEAD) on $(git -C cora rev-parse --abbrev-ref HEAD)"
echo "[cora] Remember to commit the updated submodule pointer if desired."

