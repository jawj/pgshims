#!/usr/bin/env bash

if [ "$1" = "debug" ]; then
  DEBUG_ARG="--define:debug=true"
  MINIFY_ARG=""
else 
  DEBUG_ARG="--define:debug=false"
  MINIFY_ARG="--minify --line-limit=80"
fi

npx esbuild export/index.ts \
  --bundle \
  --keep-names \
  --inject:shims/shims.js \
  --loader:.pem=text \
  --format=cjs \
  --target=es2020 \
  --outfile=dist/npm/index.js \
  $DEBUG_ARG $MINIFY_ARG

npx esbuild export/index.ts \
  --bundle \
  --keep-names \
  --inject:shims/shims.js \
  --loader:.pem=text \
  --format=esm \
  --target=es2020 \
  --outfile=dist/npm/index.mjs \
  $DEBUG_ARG $MINIFY_ARG

# copy static assets

cp LICENSE README.md CHANGELOG.md CONFIG.md DEPLOY.md DEVELOP.md dist/npm/


# Note: --keep-names adds about 10KB to the bundle size, but it gives us error
# messages and stack traces with no short, cryptic variable names

# WITHOUT (see `xe`, `pe`):

# Uncaught:
# xe [NeonDbError]: db error: ERROR: function xnow() does not exist
# HINT: No function matches the given name and argument types. You might need to add explicit type casts.

# Caused by:
#     ERROR: function xnow() does not exist
#     HINT: No function matches the given name and argument types. You might need to add explicit type casts.
#     at processTicksAndRejections (node:internal/process/task_queues:95:5)
#     at pe (/Users/george/Development/neon/pgshims/dist/npm/index.js:1459:56) {
#   code: '42883',
#   sourceError: undefined
# }

# WITH:

# Uncaught NeonDbError: db error: ERROR: function xnow() does not exist
# HINT: No function matches the given name and argument types. You might need to add explicit type casts.

# Caused by:
#     ERROR: function xnow() does not exist
#     HINT: No function matches the given name and argument types. You might need to add explicit type casts.
#     at processTicksAndRejections (node:internal/process/task_queues:95:5)
#     at execute (/Users/george/Development/neon/pgshims/dist/npm/index.js:1539:48) {
#   code: '42883',
#   sourceError: undefined
# }
