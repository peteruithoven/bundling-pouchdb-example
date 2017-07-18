SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "using-pouchdb/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "using-pouchdb": {
      "main": "using-pouchdb.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.1",
    "dns": "npm:jspm-nodelibs-dns@0.2.1",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "jsbn": "npm:jsbn@0.1.1",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "pouchdb": "npm:pouchdb@6.3.4",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.2",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "tls": "npm:jspm-nodelibs-tls@0.2.1",
    "tty": "npm:jspm-nodelibs-tty@0.2.1",
    "tweetnacl": "npm:tweetnacl@0.14.5",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:pouchdb@6.3.4": {
      "map": {
        "readable-stream": "npm:readable-stream@1.0.33",
        "inherits": "npm:inherits@2.0.3",
        "spark-md5": "npm:spark-md5@3.0.0",
        "argsarray": "npm:argsarray@0.0.1",
        "through2": "npm:through2@2.0.3",
        "immediate": "npm:immediate@3.0.6",
        "buffer-from": "npm:buffer-from@0.1.1",
        "clone-buffer": "npm:clone-buffer@1.0.0",
        "uuid": "npm:uuid@3.1.0",
        "level-write-stream": "npm:level-write-stream@1.0.0",
        "double-ended-queue": "npm:double-ended-queue@2.1.0-0",
        "ltgt": "npm:ltgt@2.2.0",
        "level-codec": "npm:level-codec@7.0.0",
        "vuvuzela": "npm:vuvuzela@1.0.3",
        "lie": "npm:lie@3.1.1",
        "debug": "npm:debug@2.6.4",
        "leveldown": "npm:leveldown@1.5.0",
        "levelup": "npm:levelup@1.3.8",
        "request": "npm:request@2.80.0"
      }
    },
    "npm:through2@2.0.3": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:readable-stream@1.0.33": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@0.10.31",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:readable-stream@2.3.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@1.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:lie@3.1.1": {
      "map": {
        "immediate": "npm:immediate@3.0.6"
      }
    },
    "npm:buffer-from@0.1.1": {
      "map": {
        "is-array-buffer-x": "npm:is-array-buffer-x@1.3.0"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:debug@2.6.4": {
      "map": {
        "ms": "npm:ms@0.7.3"
      }
    },
    "npm:level-write-stream@1.0.0": {
      "map": {
        "end-stream": "npm:end-stream@0.1.0"
      }
    },
    "npm:levelup@1.3.8": {
      "map": {
        "level-codec": "npm:level-codec@6.1.0",
        "xtend": "npm:xtend@4.0.1",
        "semver": "npm:semver@5.1.1",
        "prr": "npm:prr@1.0.1",
        "level-errors": "npm:level-errors@1.0.4",
        "level-iterator-stream": "npm:level-iterator-stream@1.3.1",
        "deferred-leveldown": "npm:deferred-leveldown@1.2.1",
        "node-semver": "npm:semver@5.1.1"
      }
    },
    "npm:request@2.80.0": {
      "map": {
        "uuid": "npm:uuid@3.1.0",
        "mime-types": "npm:mime-types@2.1.15",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "extend": "npm:extend@3.0.1",
        "performance-now": "npm:performance-now@0.2.0",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "caseless": "npm:caseless@0.12.0",
        "forever-agent": "npm:forever-agent@0.6.1",
        "combined-stream": "npm:combined-stream@1.0.5",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "http-signature": "npm:http-signature@1.1.1",
        "isstream": "npm:isstream@0.1.2",
        "stringstream": "npm:stringstream@0.0.5",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "form-data": "npm:form-data@2.1.4",
        "aws4": "npm:aws4@1.6.0",
        "har-validator": "npm:har-validator@4.2.1",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "hawk": "npm:hawk@3.1.3",
        "qs": "npm:qs@6.3.2"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@0.0.1",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.3",
        "stream-browserify": "npm:stream-browserify@1.0.0"
      }
    },
    "npm:leveldown@1.5.0": {
      "map": {
        "fast-future": "npm:fast-future@1.0.2",
        "bindings": "npm:bindings@1.2.1",
        "abstract-leveldown": "npm:abstract-leveldown@2.6.1",
        "nan": "npm:nan@2.4.0",
        "prebuild": "npm:prebuild@4.5.0"
      }
    },
    "npm:is-array-buffer-x@1.3.0": {
      "map": {
        "to-string-tag-x": "npm:to-string-tag-x@1.4.0",
        "has-to-string-tag-x": "npm:has-to-string-tag-x@1.4.0",
        "is-object-like-x": "npm:is-object-like-x@1.3.0"
      }
    },
    "npm:end-stream@0.1.0": {
      "map": {
        "write-stream": "npm:write-stream@0.4.3"
      }
    },
    "npm:level-iterator-stream@1.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@1.1.14",
        "xtend": "npm:xtend@4.0.1",
        "level-errors": "npm:level-errors@1.0.4"
      }
    },
    "npm:deferred-leveldown@1.2.1": {
      "map": {
        "abstract-leveldown": "npm:abstract-leveldown@2.4.1"
      }
    },
    "npm:write-stream@0.4.3": {
      "map": {
        "readable-stream": "npm:readable-stream@0.0.4"
      }
    },
    "npm:mime-types@2.1.15": {
      "map": {
        "mime-db": "npm:mime-db@1.27.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.6"
      }
    },
    "npm:form-data@2.1.4": {
      "map": {
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.15",
        "asynckit": "npm:asynckit@0.4.0"
      }
    },
    "npm:abstract-leveldown@2.6.1": {
      "map": {
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:abstract-leveldown@2.4.1": {
      "map": {
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:prebuild@4.5.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "minimist": "npm:minimist@1.2.0",
        "os-homedir": "npm:os-homedir@1.0.2",
        "execspawn": "npm:execspawn@1.0.1",
        "noop-logger": "npm:noop-logger@0.1.1",
        "github-from-package": "npm:github-from-package@0.0.0",
        "ghreleases": "npm:ghreleases@1.0.5",
        "pump": "npm:pump@1.0.2",
        "expand-template": "npm:expand-template@1.0.3",
        "npmlog": "npm:npmlog@2.0.4",
        "node-ninja": "npm:node-ninja@1.0.2",
        "rc": "npm:rc@1.2.1",
        "simple-get": "npm:simple-get@1.4.3",
        "tar-fs": "npm:tar-fs@1.15.3",
        "tar-stream": "npm:tar-stream@1.5.4",
        "async": "npm:async@1.5.2",
        "node-gyp": "npm:node-gyp@3.6.2"
      }
    },
    "npm:level-errors@1.0.4": {
      "map": {
        "errno": "npm:errno@0.1.4"
      }
    },
    "npm:to-string-tag-x@1.4.0": {
      "map": {
        "validate.io-undefined": "npm:validate.io-undefined@1.0.3",
        "lodash.isnull": "npm:lodash.isnull@3.0.0"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:errno@0.1.4": {
      "map": {
        "prr": "npm:prr@0.0.0"
      }
    },
    "npm:has-to-string-tag-x@1.4.0": {
      "map": {
        "has-symbol-support-x": "npm:has-symbol-support-x@1.4.0"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "assert-plus": "npm:assert-plus@0.2.0",
        "jsprim": "npm:jsprim@1.4.0",
        "sshpk": "npm:sshpk@1.13.1"
      }
    },
    "npm:is-object-like-x@1.3.0": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0",
        "is-function-x": "npm:is-function-x@1.4.0"
      }
    },
    "npm:tough-cookie@2.3.2": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:har-validator@4.2.1": {
      "map": {
        "har-schema": "npm:har-schema@1.0.5",
        "ajv": "npm:ajv@4.11.8"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:jsprim@1.4.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "extsprintf": "npm:extsprintf@1.0.2",
        "json-schema": "npm:json-schema@0.2.3",
        "verror": "npm:verror@1.3.6"
      }
    },
    "npm:buffer@5.0.6": {
      "map": {
        "base64-js": "npm:base64-js@1.2.1",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "cryptiles": "npm:cryptiles@2.0.5",
        "sntp": "npm:sntp@1.0.9",
        "boom": "npm:boom@2.10.1",
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:is-function-x@1.4.0": {
      "map": {
        "has-to-string-tag-x": "npm:has-to-string-tag-x@1.4.0",
        "to-string-tag-x": "npm:to-string-tag-x@1.4.0",
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:ghreleases@1.0.5": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "simple-mime": "npm:simple-mime@0.1.0",
        "url-template": "npm:url-template@2.0.8",
        "ghutils": "npm:ghutils@3.2.1",
        "after": "npm:after@0.8.2",
        "ghrepos": "npm:ghrepos@2.0.0"
      }
    },
    "npm:sshpk@1.13.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "getpass": "npm:getpass@0.1.7",
        "asn1": "npm:asn1@0.2.3",
        "dashdash": "npm:dashdash@1.14.1"
      }
    },
    "npm:node-ninja@1.0.2": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "npmlog": "npm:npmlog@2.0.4",
        "request": "npm:request@2.81.0",
        "semver": "npm:semver@5.3.0",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "glob": "npm:glob@7.1.2",
        "minimatch": "npm:minimatch@3.0.4",
        "path-array": "npm:path-array@1.0.1",
        "osenv": "npm:osenv@0.1.4",
        "which": "npm:which@1.2.14",
        "fstream": "npm:fstream@1.0.11",
        "nopt": "npm:nopt@3.0.6",
        "rimraf": "npm:rimraf@2.6.1",
        "tar": "npm:tar@2.2.1"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:simple-get@1.4.3": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "once": "npm:once@1.4.0",
        "unzip-response": "npm:unzip-response@1.0.2",
        "node-unzip-response": "npm:unzip-response@1.0.2"
      }
    },
    "npm:rc@1.2.1": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "strip-json-comments": "npm:strip-json-comments@2.0.1",
        "deep-extend": "npm:deep-extend@0.4.2",
        "ini": "npm:ini@1.3.4"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:tar-stream@1.5.4": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "readable-stream": "npm:readable-stream@2.3.3",
        "end-of-stream": "npm:end-of-stream@1.4.0",
        "bl": "npm:bl@1.2.1"
      }
    },
    "npm:tar-fs@1.15.3": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "pump": "npm:pump@1.0.2",
        "tar-stream": "npm:tar-stream@1.5.4",
        "chownr": "npm:chownr@1.0.1"
      }
    },
    "npm:request@2.81.0": {
      "map": {
        "qs": "npm:qs@6.4.0",
        "tunnel-agent": "npm:tunnel-agent@0.6.0",
        "extend": "npm:extend@3.0.1",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "performance-now": "npm:performance-now@0.2.0",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "aws4": "npm:aws4@1.6.0",
        "caseless": "npm:caseless@0.12.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "forever-agent": "npm:forever-agent@0.6.1",
        "form-data": "npm:form-data@2.1.4",
        "har-validator": "npm:har-validator@4.2.1",
        "hawk": "npm:hawk@3.1.3",
        "http-signature": "npm:http-signature@1.1.1",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "isstream": "npm:isstream@0.1.2",
        "mime-types": "npm:mime-types@2.1.15",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "stringstream": "npm:stringstream@0.0.5",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "uuid": "npm:uuid@3.1.0"
      }
    },
    "npm:pump@1.0.2": {
      "map": {
        "once": "npm:once@1.4.0",
        "end-of-stream": "npm:end-of-stream@1.4.0"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:node-gyp@3.6.2": {
      "map": {
        "npmlog": "npm:npmlog@4.1.2",
        "mkdirp": "npm:mkdirp@0.5.1",
        "glob": "npm:glob@7.1.2",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "minimatch": "npm:minimatch@3.0.4",
        "request": "npm:request@2.81.0",
        "semver": "npm:semver@5.3.0",
        "osenv": "npm:osenv@0.1.4",
        "which": "npm:which@1.2.14",
        "fstream": "npm:fstream@1.0.11",
        "nopt": "npm:nopt@3.0.6",
        "rimraf": "npm:rimraf@2.6.1",
        "tar": "npm:tar@2.2.1"
      }
    },
    "npm:execspawn@1.0.1": {
      "map": {
        "util-extend": "npm:util-extend@1.0.3"
      }
    },
    "npm:tunnel-agent@0.6.0": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:bcrypt-pbkdf@1.0.1": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.5"
      }
    },
    "npm:npmlog@2.0.4": {
      "map": {
        "are-we-there-yet": "npm:are-we-there-yet@1.1.4",
        "ansi": "npm:ansi@0.3.1",
        "gauge": "npm:gauge@1.2.7"
      }
    },
    "npm:glob@7.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.4",
        "once": "npm:once@1.4.0",
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "inflight": "npm:inflight@1.0.6",
        "path-is-absolute": "npm:path-is-absolute@1.0.1"
      }
    },
    "npm:npmlog@4.1.2": {
      "map": {
        "are-we-there-yet": "npm:are-we-there-yet@1.1.4",
        "gauge": "npm:gauge@2.7.4",
        "set-blocking": "npm:set-blocking@2.0.0",
        "console-control-strings": "npm:console-control-strings@1.1.0"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:getpass@0.1.7": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.1"
      }
    },
    "npm:ghutils@3.2.1": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "jsonist": "npm:jsonist@1.3.0"
      }
    },
    "npm:end-of-stream@1.4.0": {
      "map": {
        "once": "npm:once@1.4.0"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.1"
      }
    },
    "npm:ghrepos@2.0.0": {
      "map": {
        "ghutils": "npm:ghutils@3.2.1"
      }
    },
    "npm:osenv@0.1.4": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2",
        "os-tmpdir": "npm:os-tmpdir@1.0.2"
      }
    },
    "npm:are-we-there-yet@1.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3",
        "delegates": "npm:delegates@1.0.0"
      }
    },
    "npm:minimatch@3.0.4": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.8"
      }
    },
    "npm:fstream@1.0.11": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "rimraf": "npm:rimraf@2.6.1"
      }
    },
    "npm:dashdash@1.14.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:gauge@1.2.7": {
      "map": {
        "ansi": "npm:ansi@0.3.1",
        "has-unicode": "npm:has-unicode@2.0.1",
        "lodash.padend": "npm:lodash.padend@4.6.1",
        "lodash.pad": "npm:lodash.pad@4.5.1",
        "lodash.padstart": "npm:lodash.padstart@4.6.1"
      }
    },
    "npm:rimraf@2.6.1": {
      "map": {
        "glob": "npm:glob@7.1.2"
      }
    },
    "npm:bl@1.2.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:tar@2.2.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "fstream": "npm:fstream@1.0.11",
        "block-stream": "npm:block-stream@0.0.9"
      }
    },
    "npm:gauge@2.7.4": {
      "map": {
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "object-assign": "npm:object-assign@4.1.1",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "has-unicode": "npm:has-unicode@2.0.1",
        "aproba": "npm:aproba@1.1.2",
        "wide-align": "npm:wide-align@1.1.2",
        "string-width": "npm:string-width@1.0.2",
        "signal-exit": "npm:signal-exit@3.0.2"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:crypto-browserify@3.11.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hmac": "npm:create-hmac@1.1.6",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.12",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "create-hash": "npm:create-hash@1.1.3",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:path-array@1.0.1": {
      "map": {
        "array-index": "npm:array-index@1.0.0"
      }
    },
    "npm:which@1.2.14": {
      "map": {
        "isexe": "npm:isexe@2.0.0"
      }
    },
    "npm:nopt@3.0.6": {
      "map": {
        "abbrev": "npm:abbrev@1.1.0"
      }
    },
    "npm:brace-expansion@1.1.8": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@1.0.0"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:jsonist@1.3.0": {
      "map": {
        "bl": "npm:bl@1.0.3",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "xtend": "npm:xtend@4.0.1",
        "hyperquest": "npm:hyperquest@1.2.0"
      }
    },
    "npm:array-index@1.0.0": {
      "map": {
        "debug": "npm:debug@2.6.8",
        "es6-symbol": "npm:es6-symbol@3.1.1"
      }
    },
    "npm:bl@1.0.3": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:wide-align@1.1.2": {
      "map": {
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "code-point-at": "npm:code-point-at@1.1.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0"
      }
    },
    "npm:block-stream@0.0.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:debug@2.6.8": {
      "map": {
        "ms": "npm:ms@2.0.0"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.6",
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.4.0",
        "bn.js": "npm:bn.js@4.11.7",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "create-hash": "npm:create-hash@1.1.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.7",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "randombytes": "npm:randombytes@2.0.5",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.7",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:ajv@4.11.8": {
      "map": {
        "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
        "co": "npm:co@4.6.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.2"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:pbkdf2@3.0.12": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.6",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "create-hash": "npm:create-hash@1.1.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:hyperquest@1.2.0": {
      "map": {
        "through2": "npm:through2@0.6.5",
        "duplexer2": "npm:duplexer2@0.0.2"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:es6-symbol@3.1.1": {
      "map": {
        "d": "npm:d@1.0.0",
        "es5-ext": "npm:es5-ext@0.10.24"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.4.0",
        "bn.js": "npm:bn.js@4.11.7"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.1": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:d@1.0.0": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.24"
      }
    },
    "npm:es5-ext@0.10.24": {
      "map": {
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "es6-iterator": "npm:es6-iterator@2.0.1"
      }
    },
    "npm:stream-http@2.7.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "xtend": "npm:xtend@4.0.1",
        "readable-stream": "npm:readable-stream@2.3.3",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:through2@0.6.5": {
      "map": {
        "readable-stream": "npm:readable-stream@1.0.34",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.7"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:json-stable-stringify@1.0.1": {
      "map": {
        "jsonify": "npm:jsonify@0.0.0"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "inherits": "npm:inherits@2.0.3",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "brorand": "npm:brorand@1.1.0",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hash.js": "npm:hash.js@1.1.3"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.12",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3"
      }
    },
    "npm:duplexer2@0.0.2": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:es6-iterator@2.0.1": {
      "map": {
        "d": "npm:d@1.0.0",
        "es5-ext": "npm:es5-ext@0.10.24",
        "es6-symbol": "npm:es6-symbol@3.1.1"
      }
    },
    "npm:readable-stream@1.0.34": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@0.0.1",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.3",
        "stream-browserify": "npm:stream-browserify@1.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "brorand": "npm:brorand@1.1.0"
      }
    }
  }
});
