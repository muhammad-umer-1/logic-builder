#!/bin/bash
#
# deploy_build.sh - Rebuild and deploy the Next.js app
# Intended to be run by CyberPanel Webhook on GitHub push.
#

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Allow git in this directory when run by webhook/cron user
git config --global --add safe.directory "$SCRIPT_DIR" 2>/dev/null || true

echo "=========================================="
echo "Logic Builder - Deploy Build"
echo "=========================================="
echo "Started at: $(date)"
echo "Directory: $SCRIPT_DIR"
echo ""

echo "[1/4] Pulling latest from GitHub..."
git fetch origin 2>/dev/null || true
BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "main")
git pull origin "$BRANCH" --rebase 2>/dev/null || git pull origin "$BRANCH" 2>/dev/null || true
echo ""

echo "[2/4] Installing dependencies..."
npm ci 2>/dev/null || npm install
echo ""

echo "[3/4] Building Next.js app..."
npm run build
echo ""

echo "[4/4] Verifying build..."
if [ -d "out" ]; then
  echo "Build successful. Output: $SCRIPT_DIR/out"
else
  echo "ERROR: Build did not produce 'out' directory."
  exit 1
fi

echo ""
echo "=========================================="
echo "Deploy finished at $(date)"
echo "=========================================="
