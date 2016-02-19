#!/usr/bin/env bash
./build.sh
export CLASSPATH=$CLASSPATH:lib/* 
node_modules/.bin/vertx run bin/app.js
  
