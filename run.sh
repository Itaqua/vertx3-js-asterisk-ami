#!/usr/bin/env bash
./build.sh
export CLASSPATH=$CLASSPATH:lib/* 
node_modules/.bin/vertx run bin/app.js \
  --redeploy="src/**/*" \
  --launcher-class=io.vertx.core.Launcher \
  --on-redeploy="./build.sh"
  