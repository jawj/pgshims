#!/usr/bin/env bash

if [ "$1" = "debug" ]; then
  DEBUG_ARG="--define:debug=true"
  MINIFY_ARG=""
else 
  DEBUG_ARG="--define:debug=false"
  MINIFY_ARG="--minify"
fi

npx esbuild src/index.ts --bundle \
  --external:pg-native --inject:shims/shims.js --loader:.pem=text \
  --format=esm --outdir=dist/deploy --platform=neutral --main-fields=main \
  $DEBUG_ARG $MINIFY_ARG
