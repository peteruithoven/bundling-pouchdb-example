Comparing bundle sizes with PouchDB using JSPM and Webpack3
==================================================

Run:
```
sh install.sh
sh build.sh
```

My result:
```
jspm bundle:
164K	jspm/dist/bundle.js
webpack3 bundle:
1,1M	webpack3/dist/bundle.js
```

Update: I used  a source map type not suitable for production. 
I used `eval-source-map` instead of for example `source-map`, see: https://webpack.js.org/configuration/devtool/
Result:
```
jspm bundle:
164K	jspm/dist/bundle.js
webpack3 bundle:
156K	webpack3/dist/bundle.js
```