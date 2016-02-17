#!/usr/bin/env bash
export CLASSPATH=$CLASSPATH:lib/* 
node_modules/.bin/vertx run bin/app.js \
  --redeploy="src/**/*" \
  --launcher-class=io.vertx.core.Launcher \
  --on-redeploy="./build.sh"
  