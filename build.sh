#!/bin/bash

cd jspm
npm run build
cd -
cd webpack3
npm run build
cd -

echo 'jspm bundle:'
du -h jspm/dist/bundle.js
echo 'webpack3 bundle:'
du -h webpack3/dist/bundle.js