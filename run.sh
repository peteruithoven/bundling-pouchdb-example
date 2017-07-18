#!/bin/bash

cd jspm
npm install
npm run build
cd -
cd webpack3
npm install
npm run build
cd -

echo 'jspm bundle:'
ls -lh jspm/dist | grep bundle
echo 'webpack3 bundle:'
ls -lh webpack3/dist | grep bundle