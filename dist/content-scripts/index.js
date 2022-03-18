// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dASAh":[function(require,module,exports) {
"use strict";
var HMR_HOST = "localhost";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "e792fbbdaa78ee84";
module.bundle.HMR_BUNDLE_ID = "69a4a7e4ee1104c7";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7J7fQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _umbrellajs = require("umbrellajs");
var _umbrellajsDefault = parcelHelpers.interopDefault(_umbrellajs);
var _cursor = require("./Cursor");
var _cursorDefault = parcelHelpers.interopDefault(_cursor);
var _webextensionPolyfill = require("webextension-polyfill");
var _webextensionPolyfillDefault = parcelHelpers.interopDefault(_webextensionPolyfill);
const defaultShortcuts = {
    "jump-to-result-keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
    ],
    upward: {
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        key: "k"
    },
    downward: {
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        key: "j"
    },
    "open-in-current-tab": {
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        key: "Enter"
    },
    "open-in-new-tab-but-stay-on-current": {
        ctrlKey: true,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        key: "Enter"
    },
    "open-in-new-tab-and-focus": {
        ctrlKey: true,
        shiftKey: true,
        altKey: false,
        metaKey: false,
        key: "Enter"
    }
};
let shortcuts = defaultShortcuts;
const sokobans = [];
// show ui
_umbrellajsDefault.default("div").filter(function(node) {
    return _umbrellajsDefault.default(node).data("sokoban-container") !== null;
}).each(function(node, i) {
    let key = shortcuts["jump-to-result-keys"][i];
    if (!key) key = i % 2 === 0 ? "🦉" : "🐣";
    _umbrellajsDefault.default(node).before('<div class="btn">' + key + "</div>");
    const wrapper = _umbrellajsDefault.default(node).wrap("<div class='sokoban-wrap'>").first();
    sokobans.push({
        el: wrapper,
        href: _umbrellajsDefault.default(node).find("a").attr("href")
    });
});
const cursor = new _cursorDefault.default(sokobans.length);
// log key at the end of the page
_umbrellajsDefault.default("body").after("<div id='log'></div>");
document.addEventListener("keydown", logKey);
const log = document.getElementById("log");
function logKey(e) {
    log.textContent += ` ${e.key}`;
}
const modifierKeys = [
    "ctrlKey",
    "shiftKey",
    "altKey",
    "metaKey"
];
document.addEventListener("keydown", (e)=>{
    if (!shortcuts) return;
    // jump to the target sokoban
    if (modifierKeys.every((v)=>e[v] === false
    )) {
        const index = shortcuts["jump-to-result-keys"].indexOf(e.key);
        if (index !== -1) {
            cursor.jumpTo(index);
            scroll();
            return;
        }
    }
    const command = shortcutMapping(e);
    switch(command){
        case "upward":
            cursor.prev();
            scroll();
            break;
        case "downward":
            cursor.next();
            scroll();
            break;
        case "open-in-current-tab":
            window.location.assign(sokobans[cursor.index].href);
            return;
        case "open-in-new-tab-but-stay-on-current":
            _webextensionPolyfillDefault.default.runtime.sendMessage({
                command: "open-in-new-tab",
                url: sokobans[cursor.index].href,
                active: false
            });
            break;
        case "open-in-new-tab-and-focus":
            _webextensionPolyfillDefault.default.runtime.sendMessage({
                command: "open-in-new-tab",
                url: sokobans[cursor.index].href,
                active: true
            });
            break;
        default:
            break;
    }
});
// scroll to the target sokoban
function scroll() {
    const sokoban = sokobans[cursor.index];
    sokoban.el.scrollIntoView({
        block: "center"
    });
    sokobans.forEach((s, i)=>{
        if (i === cursor.index) _umbrellajsDefault.default(s.el).addClass("focus");
        else _umbrellajsDefault.default(s.el).removeClass("focus");
    });
}
_webextensionPolyfillDefault.default.storage.local.get({
    shortcuts: defaultShortcuts
}).then((got)=>{
    console.log("get: ", got);
    shortcuts = got.shortcuts;
}, (err)=>{
    console.log("on error: ", err);
});
function shortcutMapping(e) {
    [
        "ctrlKey",
        "shiftKey",
        "altKey",
        "metaKey",
        "key"
    ].forEach((key)=>{
        console.log(key, ":", e[key]);
    });
    if (!shortcuts) return;
    let command;
    for(const prop in shortcuts){
        const shortcut = shortcuts[prop];
        if (Object.keys(shortcut).every((key)=>shortcut[key] === e[key]
        )) {
            command = prop;
            break;
        }
    }
    console.log("command: ", command);
    return command;
}

},{"umbrellajs":"f7cLR","@parcel/transformer-js/src/esmodule-helpers.js":"cZRUK","webextension-polyfill":"9z4H6","./Cursor":"dzqDm"}],"f7cLR":[function(require,module,exports) {
/* Umbrella JS 3.3.0 umbrellajs.com */ var u = function(t, e) {
    return this instanceof u ? t instanceof u ? t : ((t = "string" == typeof t ? this.select(t, e) : t) && t.nodeName && (t = [
        t
    ]), void (this.nodes = this.slice(t))) : new u(t, e);
};
u.prototype = {
    get length () {
        return this.nodes.length;
    }
}, u.prototype.nodes = [], u.prototype.addClass = function() {
    return this.eacharg(arguments, function(t, e) {
        t.classList.add(e);
    });
}, u.prototype.adjacent = function(o, t1, i) {
    return "number" == typeof t1 && (t1 = 0 === t1 ? [] : new Array(t1).join().split(",").map(Number.call, Number)), this.each(function(n, r) {
        var e1 = document.createDocumentFragment();
        u(t1 || {
        }).map(function(t, e) {
            e = "function" == typeof o ? o.call(this, t, e, n, r) : o;
            return "string" == typeof e ? this.generate(e) : u(e);
        }).each(function(t) {
            this.isInPage(t) ? e1.appendChild(u(t).clone().first()) : e1.appendChild(t);
        }), i.call(this, n, e1);
    });
}, u.prototype.after = function(t2, e2) {
    return this.adjacent(t2, e2, function(t, e) {
        t.parentNode.insertBefore(e, t.nextSibling);
    });
}, u.prototype.append = function(t3, e3) {
    return this.adjacent(t3, e3, function(t, e) {
        t.appendChild(e);
    });
}, u.prototype.args = function(t4, e, n) {
    return (t4 = "string" != typeof (t4 = "function" == typeof t4 ? t4(e, n) : t4) ? this.slice(t4).map(this.str(e, n)) : t4).toString().split(/[\s,]+/).filter(function(t) {
        return t.length;
    });
}, u.prototype.array = function(o) {
    var i = this;
    return this.nodes.reduce(function(t, e, n) {
        var r;
        return o ? (r = "string" == typeof (r = (r = o.call(i, e, n)) || !1) ? u(r) : r) instanceof u && (r = r.nodes) : r = e.innerHTML, t.concat(!1 !== r ? r : []);
    }, []);
}, u.prototype.attr = function(t5, e4, r) {
    return r = r ? "data-" : "", this.pairs(t5, e4, function(t, e) {
        return t.getAttribute(r + e);
    }, function(t, e, n) {
        n ? t.setAttribute(r + e, n) : t.removeAttribute(r + e);
    });
}, u.prototype.before = function(t6, e5) {
    return this.adjacent(t6, e5, function(t, e) {
        t.parentNode.insertBefore(e, t);
    });
}, u.prototype.children = function(t7) {
    return this.map(function(t) {
        return this.slice(t.children);
    }).filter(t7);
}, u.prototype.clone = function() {
    return this.map(function(t8, e) {
        var n = t8.cloneNode(!0), r = this.getAll(n);
        return this.getAll(t8).each(function(t, e) {
            for(var n in this.mirror)this.mirror[n] && this.mirror[n](t, r.nodes[e]);
        }), n;
    });
}, u.prototype.getAll = function(t) {
    return u([
        t
    ].concat(u("*", t).nodes));
}, u.prototype.mirror = {
}, u.prototype.mirror.events = function(t9, e) {
    if (t9._e) for(var n in t9._e)t9._e[n].forEach(function(t) {
        u(e).on(n, t.callback);
    });
}, u.prototype.mirror.select = function(t, e) {
    u(t).is("select") && (e.value = t.value);
}, u.prototype.mirror.textarea = function(t, e) {
    u(t).is("textarea") && (e.value = t.value);
}, u.prototype.closest = function(e) {
    return this.map(function(t) {
        do {
            if (u(t).is(e)) return t;
        }while ((t = t.parentNode) && t !== document)
    });
}, u.prototype.data = function(t, e) {
    return this.attr(t, e, !0);
}, u.prototype.each = function(t) {
    return this.nodes.forEach(t.bind(this)), this;
}, u.prototype.eacharg = function(n, r) {
    return this.each(function(e, t10) {
        this.args(n, e, t10).forEach(function(t) {
            r.call(this, e, t);
        }, this);
    });
}, u.prototype.empty = function() {
    return this.each(function(t) {
        for(; t.firstChild;)t.removeChild(t.firstChild);
    });
}, u.prototype.filter = function(e) {
    var t11 = e instanceof u ? function(t) {
        return -1 !== e.nodes.indexOf(t);
    } : "function" == typeof e ? e : function(t) {
        return t.matches = t.matches || t.msMatchesSelector || t.webkitMatchesSelector, t.matches(e || "*");
    };
    return u(this.nodes.filter(t11));
}, u.prototype.find = function(e) {
    return this.map(function(t) {
        return u(e || "*", t);
    });
}, u.prototype.first = function() {
    return this.nodes[0] || !1;
}, u.prototype.generate = function(t) {
    return /^\s*<tr[> ]/.test(t) ? u(document.createElement("table")).html(t).children().children().nodes : /^\s*<t(h|d)[> ]/.test(t) ? u(document.createElement("table")).html(t).children().children().children().nodes : /^\s*</.test(t) ? u(document.createElement("div")).html(t).children().nodes : document.createTextNode(t);
}, u.prototype.handle = function() {
    var t12 = this.slice(arguments).map(function(e) {
        return "function" == typeof e ? function(t) {
            t.preventDefault(), e.apply(this, arguments);
        } : e;
    }, this);
    return this.on.apply(this, t12);
}, u.prototype.hasClass = function() {
    return this.is("." + this.args(arguments).join("."));
}, u.prototype.html = function(e) {
    return void 0 === e ? this.first().innerHTML || "" : this.each(function(t) {
        t.innerHTML = e;
    });
}, u.prototype.is = function(t) {
    return 0 < this.filter(t).length;
}, u.prototype.isInPage = function(t) {
    return t !== document.body && document.body.contains(t);
}, u.prototype.last = function() {
    return this.nodes[this.length - 1] || !1;
}, u.prototype.map = function(t) {
    return t ? u(this.array(t)).unique() : this;
}, u.prototype.not = function(e) {
    return this.filter(function(t) {
        return !u(t).is(e || !0);
    });
}, u.prototype.off = function(t13, e6, n1) {
    var r = null == e6 && null == n1, o = null, i = e6;
    return "string" == typeof e6 && (o = e6, i = n1), this.eacharg(t13, function(e, n) {
        u(e._e ? e._e[n] : []).each(function(t) {
            (r || t.orig_callback === i && t.selector === o) && e.removeEventListener(n, t.callback);
        });
    });
}, u.prototype.on = function(t14, e7, o) {
    function i(t, e) {
        try {
            Object.defineProperty(t, "currentTarget", {
                value: e,
                configurable: !0
            });
        } catch (t15) {
        }
    }
    var c = null, n2 = e7;
    "string" == typeof e7 && (c = e7, n2 = o, e7 = function(n) {
        var r = arguments;
        u(n.currentTarget).find(c).each(function(t) {
            var e;
            t.contains(n.target) && (e = n.currentTarget, i(n, t), o.apply(t, r), i(n, e));
        });
    });
    function r1(t) {
        return e7.apply(this, [
            t
        ].concat(t.detail || []));
    }
    return this.eacharg(t14, function(t, e) {
        t.addEventListener(e, r1), t._e = t._e || {
        }, t._e[e] = t._e[e] || [], t._e[e].push({
            callback: r1,
            orig_callback: n2,
            selector: c
        });
    });
}, u.prototype.pairs = function(r, t16, e8, o) {
    var n3;
    return void 0 !== t16 && (n3 = r, (r = {
    })[n3] = t16), "object" == typeof r ? this.each(function(t, e) {
        for(var n in r)"function" == typeof r[n] ? o(t, n, r[n](t, e)) : o(t, n, r[n]);
    }) : this.length ? e8(this.first(), r) : "";
}, u.prototype.param = function(e) {
    return Object.keys(e).map((function(t) {
        return this.uri(t) + "=" + this.uri(e[t]);
    }).bind(this)).join("&");
}, u.prototype.parent = function(t17) {
    return this.map(function(t) {
        return t.parentNode;
    }).filter(t17);
}, u.prototype.prepend = function(t18, e9) {
    return this.adjacent(t18, e9, function(t, e) {
        t.insertBefore(e, t.firstChild);
    });
}, u.prototype.remove = function() {
    return this.each(function(t) {
        t.parentNode && t.parentNode.removeChild(t);
    });
}, u.prototype.removeClass = function() {
    return this.eacharg(arguments, function(t, e) {
        t.classList.remove(e);
    });
}, u.prototype.replace = function(t19, e10) {
    var n = [];
    return this.adjacent(t19, e10, function(t, e) {
        n = n.concat(this.slice(e.children)), t.parentNode.replaceChild(e, t);
    }), u(n);
}, u.prototype.scroll = function() {
    return this.first().scrollIntoView({
        behavior: "smooth"
    }), this;
}, u.prototype.select = function(t, e) {
    return t = t.replace(/^\s*/, "").replace(/\s*$/, ""), /^</.test(t) ? u().generate(t) : (e || document).querySelectorAll(t);
}, u.prototype.serialize = function() {
    var r = this;
    return this.slice(this.first().elements).reduce(function(e, n) {
        return !n.name || n.disabled || "file" === n.type || /(checkbox|radio)/.test(n.type) && !n.checked ? e : "select-multiple" === n.type ? (u(n.options).each(function(t) {
            t.selected && (e += "&" + r.uri(n.name) + "=" + r.uri(t.value));
        }), e) : e + "&" + r.uri(n.name) + "=" + r.uri(n.value);
    }, "").slice(1);
}, u.prototype.siblings = function(t) {
    return this.parent().children(t).not(this);
}, u.prototype.size = function() {
    return this.first().getBoundingClientRect();
}, u.prototype.slice = function(t) {
    return t && 0 !== t.length && "string" != typeof t && "[object Function]" !== t.toString() ? t.length ? [].slice.call(t.nodes || t) : [
        t
    ] : [];
}, u.prototype.str = function(e, n) {
    return function(t) {
        return "function" == typeof t ? t.call(this, e, n) : t.toString();
    };
}, u.prototype.text = function(e) {
    return void 0 === e ? this.first().textContent || "" : this.each(function(t) {
        t.textContent = e;
    });
}, u.prototype.toggleClass = function(t20, e11) {
    return !!e11 === e11 ? this[e11 ? "addClass" : "removeClass"](t20) : this.eacharg(t20, function(t, e) {
        t.classList.toggle(e);
    });
}, u.prototype.trigger = function(t22) {
    var o = this.slice(arguments).slice(1);
    return this.eacharg(t22, function(t, e) {
        var n, r = {
            bubbles: !0,
            cancelable: !0,
            detail: o
        };
        try {
            n = new window.CustomEvent(e, r);
        } catch (t21) {
            (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, o);
        }
        t.dispatchEvent(n);
    });
}, u.prototype.unique = function() {
    return u(this.nodes.reduce(function(t, e) {
        return null != e && !1 !== e && -1 === t.indexOf(e) ? t.concat(e) : t;
    }, []));
}, u.prototype.uri = function(t) {
    return encodeURIComponent(t).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+");
}, u.prototype.wrap = function(t23) {
    return this.map(function(e) {
        return u(t23).each(function(t24) {
            (function(t) {
                for(; t.firstElementChild;)t = t.firstElementChild;
                return u(t);
            })(t24).append(e.cloneNode(!0)), e.parentNode.replaceChild(t24, e);
        });
    });
}, "object" == typeof module && module.exports && (module.exports = u, module.exports.u = u);

},{}],"cZRUK":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9z4H6":[function(require,module,exports) {
(function(global, factory) {
    if (typeof define === "function" && define.amd) define("webextension-polyfill", [
        "module"
    ], factory);
    else if (typeof exports !== "undefined") factory(module);
    else {
        var mod = {
            exports: {
            }
        };
        factory(mod);
        global.browser = mod.exports;
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function(module) {
    /* webextension-polyfill - v0.8.0 - Tue Apr 20 2021 11:27:38 */ /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */ /* vim: set sts=2 sw=2 et tw=80: */ /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */ "use strict";
    if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
        const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
        const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
        // optimization for Firefox. Since Spidermonkey does not fully parse the
        // contents of a function until the first time it's called, and since it will
        // never actually need to be called, this allows the polyfill to be included
        // in Firefox nearly for free.
        const wrapAPIs = (extensionAPIs)=>{
            // NOTE: apiMetadata is associated to the content of the api-metadata.json file
            // at build time by replacing the following "include" with the content of the
            // JSON file.
            const apiMetadata = {
                "alarms": {
                    "clear": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "clearAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "get": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "bookmarks": {
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getChildren": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getRecent": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getSubTree": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTree": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "move": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeTree": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "browserAction": {
                    "disable": {
                        "minArgs": 0,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "enable": {
                        "minArgs": 0,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "getBadgeBackgroundColor": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getBadgeText": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getPopup": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTitle": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "openPopup": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "setBadgeBackgroundColor": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setBadgeText": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setIcon": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "setPopup": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setTitle": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "browsingData": {
                    "remove": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "removeCache": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeCookies": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeDownloads": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeFormData": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeHistory": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeLocalStorage": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removePasswords": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removePluginData": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "settings": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "commands": {
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "contextMenus": {
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "cookies": {
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAllCookieStores": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "set": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "devtools": {
                    "inspectedWindow": {
                        "eval": {
                            "minArgs": 1,
                            "maxArgs": 2,
                            "singleCallbackArg": false
                        }
                    },
                    "panels": {
                        "create": {
                            "minArgs": 3,
                            "maxArgs": 3,
                            "singleCallbackArg": true
                        },
                        "elements": {
                            "createSidebarPane": {
                                "minArgs": 1,
                                "maxArgs": 1
                            }
                        }
                    }
                },
                "downloads": {
                    "cancel": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "download": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "erase": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getFileIcon": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "open": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "pause": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeFile": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "resume": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "show": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "extension": {
                    "isAllowedFileSchemeAccess": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "isAllowedIncognitoAccess": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "history": {
                    "addUrl": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "deleteAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "deleteRange": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "deleteUrl": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getVisits": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "i18n": {
                    "detectLanguage": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAcceptLanguages": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "identity": {
                    "launchWebAuthFlow": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "idle": {
                    "queryState": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "management": {
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getSelf": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "setEnabled": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "uninstallSelf": {
                        "minArgs": 0,
                        "maxArgs": 1
                    }
                },
                "notifications": {
                    "clear": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getPermissionLevel": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "pageAction": {
                    "getPopup": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTitle": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "hide": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setIcon": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "setPopup": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setTitle": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "show": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "permissions": {
                    "contains": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "request": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "runtime": {
                    "getBackgroundPage": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getPlatformInfo": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "openOptionsPage": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "requestUpdateCheck": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "sendMessage": {
                        "minArgs": 1,
                        "maxArgs": 3
                    },
                    "sendNativeMessage": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "setUninstallURL": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "sessions": {
                    "getDevices": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getRecentlyClosed": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "restore": {
                        "minArgs": 0,
                        "maxArgs": 1
                    }
                },
                "storage": {
                    "local": {
                        "clear": {
                            "minArgs": 0,
                            "maxArgs": 0
                        },
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "remove": {
                            "minArgs": 1,
                            "maxArgs": 1
                        },
                        "set": {
                            "minArgs": 1,
                            "maxArgs": 1
                        }
                    },
                    "managed": {
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        }
                    },
                    "sync": {
                        "clear": {
                            "minArgs": 0,
                            "maxArgs": 0
                        },
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "remove": {
                            "minArgs": 1,
                            "maxArgs": 1
                        },
                        "set": {
                            "minArgs": 1,
                            "maxArgs": 1
                        }
                    }
                },
                "tabs": {
                    "captureVisibleTab": {
                        "minArgs": 0,
                        "maxArgs": 2
                    },
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "detectLanguage": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "discard": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "duplicate": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "executeScript": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getCurrent": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getZoom": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getZoomSettings": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "goBack": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "goForward": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "highlight": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "insertCSS": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "move": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "query": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "reload": {
                        "minArgs": 0,
                        "maxArgs": 2
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeCSS": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "sendMessage": {
                        "minArgs": 2,
                        "maxArgs": 3
                    },
                    "setZoom": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "setZoomSettings": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "update": {
                        "minArgs": 1,
                        "maxArgs": 2
                    }
                },
                "topSites": {
                    "get": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "webNavigation": {
                    "getAllFrames": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getFrame": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "webRequest": {
                    "handlerBehaviorChanged": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "windows": {
                    "create": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getCurrent": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getLastFocused": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                }
            };
            if (Object.keys(apiMetadata).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
            /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */ class DefaultWeakMap extends WeakMap {
                constructor(createItem, items){
                    super(items);
                    this.createItem = createItem;
                }
                get(key) {
                    if (!this.has(key)) this.set(key, this.createItem(key));
                    return super.get(key);
                }
            }
            /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */ const isThenable = (value)=>{
                return value && typeof value === "object" && typeof value.then === "function";
            };
            /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */ const makeCallback = (promise, metadata)=>{
                return (...callbackArgs)=>{
                    if (extensionAPIs.runtime.lastError) promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                    else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) promise.resolve(callbackArgs[0]);
                    else promise.resolve(callbackArgs);
                };
            };
            const pluralizeArguments = (numArgs)=>numArgs == 1 ? "argument" : "arguments"
            ;
            /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */ const wrapAsyncFunction = (name, metadata)=>{
                return function asyncFunctionWrapper(target, ...args) {
                    if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                    if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                    return new Promise((resolve, reject)=>{
                        if (metadata.fallbackToNoCallback) // This API method has currently no callback on Chrome, but it return a promise on Firefox,
                        // and so the polyfill will try to call it with a callback first, and it will fallback
                        // to not passing the callback if the first call fails.
                        try {
                            target[name](...args, makeCallback({
                                resolve,
                                reject
                            }, metadata));
                        } catch (cbError) {
                            console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                            target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                            // use the unsupported callback anymore.
                            metadata.fallbackToNoCallback = false;
                            metadata.noCallback = true;
                            resolve();
                        }
                        else if (metadata.noCallback) {
                            target[name](...args);
                            resolve();
                        } else target[name](...args, makeCallback({
                            resolve,
                            reject
                        }, metadata));
                    });
                };
            };
            /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */ const wrapMethod = (target, method, wrapper)=>{
                return new Proxy(method, {
                    apply (targetMethod, thisObj, args) {
                        return wrapper.call(thisObj, target, ...args);
                    }
                });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */ const wrapObject = (target, wrappers = {
            }, metadata = {
            })=>{
                let cache = Object.create(null);
                let handlers = {
                    has (proxyTarget, prop) {
                        return prop in target || prop in cache;
                    },
                    get (proxyTarget, prop, receiver) {
                        if (prop in cache) return cache[prop];
                        if (!(prop in target)) return undefined;
                        let value1 = target[prop];
                        if (typeof value1 === "function") {
                            // This is a method on the underlying object. Check if we need to do
                            // any wrapping.
                            if (typeof wrappers[prop] === "function") // We have a special-case wrapper for this method.
                            value1 = wrapMethod(target, target[prop], wrappers[prop]);
                            else if (hasOwnProperty(metadata, prop)) {
                                // This is an async method that we have metadata for. Create a
                                // Promise wrapper for it.
                                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                                value1 = wrapMethod(target, target[prop], wrapper);
                            } else // This is a method that we don't know or care about. Return the
                            // original method, bound to the underlying object.
                            value1 = value1.bind(target);
                        } else if (typeof value1 === "object" && value1 !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) // This is an object that we need to do some wrapping for the children
                        // of. Create a sub-object wrapper for it with the appropriate child
                        // metadata.
                        value1 = wrapObject(value1, wrappers[prop], metadata[prop]);
                        else if (hasOwnProperty(metadata, "*")) // Wrap all properties in * namespace.
                        value1 = wrapObject(value1, wrappers[prop], metadata["*"]);
                        else {
                            // We don't need to do any wrapping for this property,
                            // so just forward all access to the underlying object.
                            Object.defineProperty(cache, prop, {
                                configurable: true,
                                enumerable: true,
                                get () {
                                    return target[prop];
                                },
                                set (value) {
                                    target[prop] = value;
                                }
                            });
                            return value1;
                        }
                        cache[prop] = value1;
                        return value1;
                    },
                    set (proxyTarget, prop, value, receiver) {
                        if (prop in cache) cache[prop] = value;
                        else target[prop] = value;
                        return true;
                    },
                    defineProperty (proxyTarget, prop, desc) {
                        return Reflect.defineProperty(cache, prop, desc);
                    },
                    deleteProperty (proxyTarget, prop) {
                        return Reflect.deleteProperty(cache, prop);
                    }
                }; // Per contract of the Proxy API, the "get" proxy handler must return the
                // original value of the target if that value is declared read-only and
                // non-configurable. For this reason, we create an object with the
                // prototype set to `target` instead of using `target` directly.
                // Otherwise we cannot return a custom object for APIs that
                // are declared read-only and non-configurable, such as `chrome.devtools`.
                //
                // The proxy handlers themselves will still use the original `target`
                // instead of the `proxyTarget`, so that the methods and properties are
                // dereferenced via the original targets.
                let proxyTarget = Object.create(target);
                return new Proxy(proxyTarget, handlers);
            };
            /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */ const wrapEvent = (wrapperMap)=>({
                    addListener (target, listener, ...args) {
                        target.addListener(wrapperMap.get(listener), ...args);
                    },
                    hasListener (target, listener) {
                        return target.hasListener(wrapperMap.get(listener));
                    },
                    removeListener (target, listener) {
                        target.removeListener(wrapperMap.get(listener));
                    }
                })
            ;
            const onRequestFinishedWrappers = new DefaultWeakMap((listener)=>{
                if (typeof listener !== "function") return listener;
                /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */ return function onRequestFinished(req) {
                    const wrappedReq = wrapObject(req, {
                    }, {
                        getContent: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    });
                    listener(wrappedReq);
                };
            }); // Keep track if the deprecation warning has been logged at least once.
            let loggedSendResponseDeprecationWarning = false;
            const onMessageWrappers = new DefaultWeakMap((listener)=>{
                if (typeof listener !== "function") return listener;
                /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */ return function onMessage(message1, sender, sendResponse) {
                    let didCallSendResponse = false;
                    let wrappedSendResponse;
                    let sendResponsePromise = new Promise((resolve)=>{
                        wrappedSendResponse = function(response) {
                            if (!loggedSendResponseDeprecationWarning) {
                                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                                loggedSendResponseDeprecationWarning = true;
                            }
                            didCallSendResponse = true;
                            resolve(response);
                        };
                    });
                    let result;
                    try {
                        result = listener(message1, sender, wrappedSendResponse);
                    } catch (err1) {
                        result = Promise.reject(err1);
                    }
                    const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
                    // wrappedSendResponse synchronously, we can exit earlier
                    // because there will be no response sent from this listener.
                    if (result !== true && !isResultThenable && !didCallSendResponse) return false;
                     // A small helper to send the message if the promise resolves
                    // and an error if the promise rejects (a wrapped sendMessage has
                    // to translate the message into a resolved promise or a rejected
                    // promise).
                    const sendPromisedResult = (promise)=>{
                        promise.then((msg)=>{
                            // send the message value.
                            sendResponse(msg);
                        }, (error)=>{
                            // Send a JSON representation of the error if the rejected value
                            // is an instance of error, or the object itself otherwise.
                            let message;
                            if (error && (error instanceof Error || typeof error.message === "string")) message = error.message;
                            else message = "An unexpected error occurred";
                            sendResponse({
                                __mozWebExtensionPolyfillReject__: true,
                                message
                            });
                        }).catch((err)=>{
                            // Print an error on the console if unable to send the response.
                            console.error("Failed to send onMessage rejected reply", err);
                        });
                    }; // If the listener returned a Promise, send the resolved value as a
                    // result, otherwise wait the promise related to the wrappedSendResponse
                    // callback to resolve and send it as a response.
                    if (isResultThenable) sendPromisedResult(result);
                    else sendPromisedResult(sendResponsePromise);
                     // Let Chrome know that the listener is replying.
                    return true;
                };
            });
            const wrappedSendMessageCallback = ({ reject , resolve  }, reply)=>{
                if (extensionAPIs.runtime.lastError) {
                    // Detect when none of the listeners replied to the sendMessage call and resolve
                    // the promise to undefined as in Firefox.
                    // See https://github.com/mozilla/webextension-polyfill/issues/130
                    if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) resolve();
                    else reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (reply && reply.__mozWebExtensionPolyfillReject__) // Convert back the JSON representation of the error into
                // an Error instance.
                reject(new Error(reply.message));
                else resolve(reply);
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args)=>{
                if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                return new Promise((resolve, reject)=>{
                    const wrappedCb = wrappedSendMessageCallback.bind(null, {
                        resolve,
                        reject
                    });
                    args.push(wrappedCb);
                    apiNamespaceObj.sendMessage(...args);
                });
            };
            const staticWrappers = {
                devtools: {
                    network: {
                        onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                    }
                },
                runtime: {
                    onMessage: wrapEvent(onMessageWrappers),
                    onMessageExternal: wrapEvent(onMessageWrappers),
                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                        minArgs: 1,
                        maxArgs: 3
                    })
                },
                tabs: {
                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                        minArgs: 2,
                        maxArgs: 3
                    })
                }
            };
            const settingMetadata = {
                clear: {
                    minArgs: 1,
                    maxArgs: 1
                },
                get: {
                    minArgs: 1,
                    maxArgs: 1
                },
                set: {
                    minArgs: 1,
                    maxArgs: 1
                }
            };
            apiMetadata.privacy = {
                network: {
                    "*": settingMetadata
                },
                services: {
                    "*": settingMetadata
                },
                websites: {
                    "*": settingMetadata
                }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
        };
        if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
         // The build process adds a UMD wrapper around this file, which makes the
        // `module` variable available.
        module.exports = wrapAPIs(chrome);
    } else module.exports = browser;
});

},{}],"dzqDm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Cursor
);
class Cursor {
    #index = -1;
    #maxLength;
    constructor(maxLength){
        this.#maxLength = maxLength;
    }
    next() {
        if (this.#index < this.#maxLength - 1) this.#index++;
        else this.#index = 0;
        return this.#index;
    }
    prev() {
        if (this.#index > 0) this.#index--;
        else this.#index = this.#maxLength - 1;
        return this.#index;
    }
    jumpTo(index) {
        if (index < this.#maxLength && index >= 0) this.#index = index;
        return this.#index;
    }
    get index() {
        return this.#index;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"cZRUK"}]},["dASAh","7J7fQ"], "7J7fQ", "parcelRequired6fc")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsTUFBTSxDQUFDLENBQUM7UUFBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUFHLENBQUM7UUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSTtZQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQUUsTUFBTSxDQUFDLElBQUk7UUFBRSxDQUFDO1FBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFBQyxNQUFNLEdBQUcsSUFBSTtZQUFFLEdBQUcsR0FBRyxHQUFHO1FBQUUsQ0FBQztRQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBQyxHQUFHLENBQUMsQ0FBQztnQkFBQyxFQUFFLEdBQUcsZ0JBQWdCLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07WUFBSSxDQUFDLFFBQVMsQ0FBQztnQkFBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQUUsQ0FBQztRQUFDLENBQUM7SUFBQyxDQUFDO0FBQUUsQ0FBQztTQUU3OUIsMkJBQTJCLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxNQUFNO0lBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBUSxTQUFFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsTUFBTTtJQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFBRyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQVEsV0FBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMs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SyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7QUFBQyxDQUFDO0FBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBQyxDQUFDO1FBQUksTUFBTSxJQUFFLENBQUM7UUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO0lBQUEsQ0FBQztBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBQyxRQUFRLEdBQUUsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUEsQ0FBUSxXQUFFLE1BQU0sQ0FBQyxFQUFDLEtBQUcsRUFBQyxHQUFDLENBQUMsS0FBRyxFQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFDLEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFHLElBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUMsTUFBTSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLEdBQUcsQ0FBQyxFQUFDLEdBQUMsUUFBUSxDQUFDLHNCQUFzQjtRQUFHLENBQUMsQ0FBQyxFQUFDLElBQUUsQ0FBQztRQUFBLENBQUMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztZQUFBLENBQUMsR0FBQyxDQUFVLGFBQUUsTUFBTSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLElBQUUsQ0FBQztZQUFDLE1BQU0sQ0FBQSxDQUFRLFdBQUUsTUFBTSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQztRQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUUsRUFBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLE1BQUksRUFBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxXQUFXO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sRUFBQyxFQUFDLEdBQUMsQ0FBUSxXQUFFLE1BQU0sRUFBQyxFQUFDLEdBQUMsQ0FBVSxhQUFFLE1BQU0sQ0FBQyxFQUFDLEdBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUUsRUFBQyxJQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUcsRUFBQyxFQUFFLFFBQVEsR0FBRyxLQUFLLFdBQVcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTTtJQUFBLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJO0lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsR0FBRyxDQUFDLENBQUM7UUFBQyxNQUFNLENBQUMsQ0FBQyxJQUFFLENBQUMsR0FBQyxDQUFRLFdBQUUsTUFBTSxFQUFDLENBQUMsSUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsT0FBSyxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLGFBQVksQ0FBQyxLQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsS0FBSyxJQUFFLENBQUMsR0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFHLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQU8sU0FBQyxDQUFFLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUMsQ0FBQztJQUFDLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsR0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFDLENBQUM7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUMsUUFBUSxDQUFDLEVBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVE7SUFBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUMsUUFBUSxHQUFFLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsR0FBRyxDQUFDLENBQUMsR0FBQyxFQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1lBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQUUsQ0FBQyxHQUFFLENBQUM7SUFBQSxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFBLENBQUM7SUFBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFHLElBQUMsQ0FBQyxFQUFFLEtBQUs7QUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsQ0FBQztBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLEVBQUUsRUFBQyxFQUFDLENBQUMsRUFBRSxFQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsUUFBUTtJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFRLGFBQUksQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsS0FBSztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQVUsZUFBSSxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxLQUFLO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztXQUFFLENBQUM7WUFBQSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQUEsQ0FBQyxRQUFPLENBQUMsR0FBQyxDQUFDLENBQUMsVUFBVSxLQUFHLENBQUMsS0FBRyxRQUFRO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRSxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBRyxJQUFJO0FBQUEsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLEdBQUMsRUFBQyxDQUFDO1FBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQyxDQUFDLEVBQUMsSUFBSTtJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUMsUUFBUSxHQUFFLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxHQUFHLEdBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxHQUFHLENBQUMsR0FBQyxHQUFDLENBQUMsWUFBWSxDQUFDLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsTUFBTSxDQUFBLEVBQUUsS0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQUMsQ0FBQyxHQUFDLENBQVUsYUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsT0FBTyxJQUFFLENBQUMsQ0FBQyxpQkFBaUIsSUFBRSxDQUFDLENBQUMscUJBQXFCLEVBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUUsQ0FBRztJQUFDLENBQUM7SUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUM7QUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBRyxJQUFDLENBQUM7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFDLFFBQVEsR0FBRSxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFJLENBQUM7QUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxlQUFjLElBQUksQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBTyxTQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsUUFBUSxHQUFHLFFBQVEsR0FBRyxLQUFLLHFCQUFtQixJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQU8sU0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBRyxRQUFRLEdBQUcsUUFBUSxHQUFHLEtBQUssV0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUssT0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBRyxLQUFLLEdBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsR0FBRSxDQUFDO0lBQUEsR0FBRyxDQUFDLEdBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsTUFBTSxDQUFBLENBQVUsYUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUFBLENBQUMsQ0FBQyxjQUFjLElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsU0FBUztRQUFDLENBQUMsR0FBQyxDQUFDO0lBQUEsQ0FBQyxFQUFDLElBQUk7SUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLEdBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUMsUUFBUSxHQUFFLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFHLEtBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUc7QUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUcsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxJQUFFLENBQUUsSUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxTQUFTLEdBQUMsQ0FBQztJQUFBLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNO0FBQUEsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxDQUFDLEtBQUcsUUFBUSxDQUFDLElBQUksSUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFDLFFBQVEsR0FBRSxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLE1BQUksQ0FBQztBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLEtBQUcsSUFBSTtBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFHLENBQUM7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFDLFFBQVEsQ0FBQyxHQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxDQUFDO0lBQUEsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJLElBQUUsRUFBQyxJQUFFLElBQUksSUFBRSxFQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksRUFBQyxDQUFDLEdBQUMsRUFBQztJQUFDLE1BQU0sQ0FBQSxDQUFRLFdBQUUsTUFBTSxDQUFDLEVBQUMsS0FBRyxDQUFDLEdBQUMsRUFBQyxFQUFDLENBQUMsR0FBQyxFQUFDLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7YUFBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLGFBQWEsS0FBRyxDQUFDLElBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBRyxDQUFDLEtBQUcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsUUFBUTtRQUFDLENBQUM7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLFFBQVEsQ0FBQyxHQUFDLEVBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDO2FBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLEdBQUcsQ0FBQSxDQUFDO1lBQUEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsQ0FBZSxnQkFBQyxDQUFDO2dCQUFBLEtBQUssRUFBQyxDQUFDO2dCQUFDLFlBQVksR0FBRSxDQUFDO1lBQUEsQ0FBQztRQUFDLENBQUMsQ0FBQSxLQUFLLEVBQUMsR0FBQyxFQUFDLENBQUM7UUFBQSxDQUFDO0lBQUEsQ0FBQztJQUFBLEdBQUcsQ0FBQyxDQUFDLEdBQUMsSUFBSSxFQUFDLEVBQUMsR0FBQyxFQUFDO0lBQUMsQ0FBUSxXQUFFLE1BQU0sQ0FBQyxFQUFDLEtBQUcsQ0FBQyxHQUFDLEVBQUMsRUFBQyxFQUFDLEdBQUMsQ0FBQyxFQUFDLEVBQUMsR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxHQUFHLENBQUMsQ0FBQyxHQUFDLFNBQVM7UUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFBQSxHQUFHLENBQUMsQ0FBQztZQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sTUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsQ0FBQztJQUFDLENBQUM7YUFBVyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxNQUFNLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsQ0FBQztZQUFBLENBQUM7UUFBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUUsQ0FBQyxDQUFDO0lBQUUsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBQyxFQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRSxJQUFFLENBQUM7UUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFBQSxRQUFRLEVBQUMsRUFBQztZQUFDLGFBQWEsRUFBQyxFQUFDO1lBQUMsUUFBUSxFQUFDLENBQUM7UUFBQSxDQUFDO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLEdBQUMsRUFBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxHQUFHLENBQUMsRUFBQztJQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFHLEdBQUMsS0FBRyxFQUFDLEdBQUMsQ0FBQyxHQUFFLENBQUMsR0FBQyxDQUFDO0lBQUEsQ0FBQyxFQUFFLEVBQUMsSUFBRSxHQUFDLEdBQUUsQ0FBUSxXQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQVUsYUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFBRSxDQUFDLElBQUUsSUFBSSxDQUFDLE1BQU0sR0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBRyxDQUFDLElBQUUsQ0FBRTtBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFHLEtBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFFLENBQUMsRUFBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFHO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQyxHQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVTtJQUFBLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBQyxRQUFRLENBQUMsR0FBQyxFQUFDLEVBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBQyxFQUFDLEVBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFVBQVU7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsR0FBRSxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFVBQVUsSUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBQyxRQUFRLEdBQUUsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUMsUUFBUSxDQUFDLEdBQUMsRUFBQyxHQUFDLEVBQUMsQ0FBQztJQUFBLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBQyxFQUFDLEdBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsR0FBRSxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLENBQUM7UUFBQSxRQUFRLEVBQUMsQ0FBUTtJQUFBLENBQUMsR0FBRSxJQUFJO0FBQUEsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxPQUFPLFNBQVEsQ0FBRSxHQUFFLE9BQU8sU0FBUSxDQUFFLFNBQU8sSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsS0FBRyxDQUFDLElBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUMsUUFBUSxHQUFFLENBQUM7SUFBQSxHQUFHLENBQUMsQ0FBQyxHQUFDLElBQUk7SUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLE1BQU0sRUFBQyxDQUFDLENBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxRQUFRLElBQUUsQ0FBTSxVQUFHLENBQUMsQ0FBQyxJQUFJLHVCQUFxQixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBSSxDQUFDLENBQUMsT0FBTyxHQUFDLENBQUMsR0FBQyxDQUFpQixxQkFBRyxDQUFDLENBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFBQSxDQUFDLENBQUMsUUFBUSxLQUFHLENBQUMsSUFBRSxDQUFHLEtBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFFLENBQUcsS0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBQUUsQ0FBQyxHQUFFLENBQUMsSUFBRSxDQUFDLEdBQUMsQ0FBRyxLQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBRSxDQUFHLEtBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztJQUFDLENBQUMsRUFBQyxDQUFFLEdBQUUsS0FBSyxDQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSTtBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxRQUFRLEdBQUUsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQjtBQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsQ0FBQyxJQUFFLENBQUMsS0FBRyxDQUFDLENBQUMsTUFBTSxJQUFFLENBQVEsV0FBRSxNQUFNLENBQUMsQ0FBQyxJQUFFLENBQW1CLHVCQUFHLENBQUMsQ0FBQyxRQUFRLEtBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUUsQ0FBQyxJQUFFLENBQUM7UUFBQSxDQUFDO0lBQUEsQ0FBQyxHQUFDLENBQUMsQ0FBQztBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLE1BQU0sQ0FBQSxDQUFVLGFBQUUsTUFBTSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxRQUFRO0lBQUUsQ0FBQztBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBRyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLElBQUUsQ0FBRSxJQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFdBQVcsR0FBQyxDQUFDO0lBQUEsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBQyxRQUFRLENBQUMsR0FBQyxFQUFDLEdBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxHQUFFLEdBQUMsS0FBRyxHQUFDLEdBQUMsSUFBSSxDQUFDLEdBQUMsR0FBQyxDQUFVLFlBQUMsQ0FBYSxjQUFFLEdBQUMsSUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUMsUUFBUSxDQUFDLEdBQUMsRUFBQyxDQUFDO0lBQUEsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQztZQUFBLE9BQU8sR0FBRSxDQUFDO1lBQUMsVUFBVSxHQUFFLENBQUM7WUFBQyxNQUFNLEVBQUMsQ0FBQztRQUFBLENBQUM7UUFBQyxHQUFHLENBQUEsQ0FBQztZQUFBLENBQUMsR0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFDLENBQUMsQ0FBQSxLQUFLLEVBQUMsR0FBQyxFQUFDLENBQUM7YUFBQyxDQUFDLEdBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFhLGVBQUcsZUFBZSxDQUFDLENBQUMsR0FBRSxDQUFDLEdBQUUsQ0FBQyxFQUFDLENBQUM7UUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxRQUFRLEdBQUUsQ0FBQztJQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLE1BQU0sQ0FBQyxJQUFJLElBQUUsQ0FBQyxLQUFHLENBQUMsS0FBRyxDQUFDLElBQUUsRUFBRSxLQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFFLENBQUM7SUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FB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SyxHQUFHLENBQUM7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSztJQUNwQixDQUFDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCtydW50aW1lLWJyb3dzZXItaG1yQDIuMy4yX0BwYXJjZWwrY29yZUAyLjMuMi9ub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWJyb3dzZXItaG1yL2xpYi9ydW50aW1lLWYzNzg5NDZkNDFmMTA2YzIuanMiLCJzcmMvY29udGVudC1zY3JpcHRzL2luZGV4LnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3VtYnJlbGxhanNAMy4zLjEvbm9kZV9tb2R1bGVzL3VtYnJlbGxhanMvdW1icmVsbGEubWluLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrdHJhbnNmb3JtZXItanNAMi4zLjJfQHBhcmNlbCtjb3JlQDIuMy4yL25vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbEAwLjguMC9ub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsInNyYy9jb250ZW50LXNjcmlwdHMvQ3Vyc29yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBITVJfSE9TVCA9IFwibG9jYWxob3N0XCI7dmFyIEhNUl9QT1JUID0gbnVsbDt2YXIgSE1SX1NFQ1VSRSA9IGZhbHNlO3ZhciBITVJfRU5WX0hBU0ggPSBcImU3OTJmYmJkYWE3OGVlODRcIjttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQgPSBcIjY5YTRhN2U0ZWUxMTA0YzdcIjtcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07IGlmICghaXQpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gaXQuY2FsbChvKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdC5yZXR1cm4gIT0gbnVsbCkgaXQucmV0dXJuKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKiBnbG9iYWwgSE1SX0hPU1QsIEhNUl9QT1JULCBITVJfRU5WX0hBU0gsIEhNUl9TRUNVUkUgKi9cblxuLyo6OlxuaW1wb3J0IHR5cGUge1xuICBITVJBc3NldCxcbiAgSE1STWVzc2FnZSxcbn0gZnJvbSAnQHBhcmNlbC9yZXBvcnRlci1kZXYtc2VydmVyL3NyYy9ITVJTZXJ2ZXIuanMnO1xuaW50ZXJmYWNlIFBhcmNlbFJlcXVpcmUge1xuICAoc3RyaW5nKTogbWl4ZWQ7XG4gIGNhY2hlOiB7fFtzdHJpbmddOiBQYXJjZWxNb2R1bGV8fTtcbiAgaG90RGF0YTogbWl4ZWQ7XG4gIE1vZHVsZTogYW55O1xuICBwYXJlbnQ6ID9QYXJjZWxSZXF1aXJlO1xuICBpc1BhcmNlbFJlcXVpcmU6IHRydWU7XG4gIG1vZHVsZXM6IHt8W3N0cmluZ106IFtGdW5jdGlvbiwge3xbc3RyaW5nXTogc3RyaW5nfH1dfH07XG4gIEhNUl9CVU5ETEVfSUQ6IHN0cmluZztcbiAgcm9vdDogUGFyY2VsUmVxdWlyZTtcbn1cbmludGVyZmFjZSBQYXJjZWxNb2R1bGUge1xuICBob3Q6IHt8XG4gICAgZGF0YTogbWl4ZWQsXG4gICAgYWNjZXB0KGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIGRpc3Bvc2UoY2I6IChtaXhlZCkgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gYWNjZXB0KGRlcHM6IEFycmF5PHN0cmluZz4gfCBzdHJpbmcsIGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGRlY2xpbmUoKTogdm9pZCxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBBcnJheTwoRnVuY3Rpb24pID0+IHZvaWQ+LFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBBcnJheTwobWl4ZWQpID0+IHZvaWQ+LFxuICB8fTtcbn1cbmRlY2xhcmUgdmFyIG1vZHVsZToge2J1bmRsZTogUGFyY2VsUmVxdWlyZSwgLi4ufTtcbmRlY2xhcmUgdmFyIEhNUl9IT1NUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfUE9SVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX0VOVl9IQVNIOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfU0VDVVJFOiBib29sZWFuO1xuKi9cbnZhciBPVkVSTEFZX0lEID0gJ19fcGFyY2VsX19lcnJvcl9fb3ZlcmxheV9fJztcbnZhciBPbGRNb2R1bGUgPSBtb2R1bGUuYnVuZGxlLk1vZHVsZTtcblxuZnVuY3Rpb24gTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgT2xkTW9kdWxlLmNhbGwodGhpcywgbW9kdWxlTmFtZSk7XG4gIHRoaXMuaG90ID0ge1xuICAgIGRhdGE6IG1vZHVsZS5idW5kbGUuaG90RGF0YSxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBbXSxcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogW10sXG4gICAgYWNjZXB0OiBmdW5jdGlvbiBhY2NlcHQoZm4pIHtcbiAgICAgIHRoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKGZuIHx8IGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9LFxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uIGRpc3Bvc2UoZm4pIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaChmbik7XG4gICAgfVxuICB9O1xuICBtb2R1bGUuYnVuZGxlLmhvdERhdGEgPSB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5idW5kbGUuTW9kdWxlID0gTW9kdWxlO1xudmFyIGNoZWNrZWRBc3NldHNcbi8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiwgYWNjZXB0ZWRBc3NldHNcbi8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiwgYXNzZXRzVG9BY2NlcHRcbi8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi9cbjtcblxuZnVuY3Rpb24gZ2V0SG9zdG5hbWUoKSB7XG4gIHJldHVybiBITVJfSE9TVCB8fCAobG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cCcpID09PSAwID8gbG9jYXRpb24uaG9zdG5hbWUgOiAnbG9jYWxob3N0Jyk7XG59XG5cbmZ1bmN0aW9uIGdldFBvcnQoKSB7XG4gIHJldHVybiBITVJfUE9SVCB8fCBsb2NhdGlvbi5wb3J0O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cblxudmFyIHBhcmVudCA9IG1vZHVsZS5idW5kbGUucGFyZW50O1xuXG5pZiAoKCFwYXJlbnQgfHwgIXBhcmVudC5pc1BhcmNlbFJlcXVpcmUpICYmIHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gIHZhciBwb3J0ID0gZ2V0UG9ydCgpO1xuICB2YXIgcHJvdG9jb2wgPSBITVJfU0VDVVJFIHx8IGxvY2F0aW9uLnByb3RvY29sID09ICdodHRwczonICYmICEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KGhvc3RuYW1lKSA/ICd3c3MnIDogJ3dzJztcbiAgdmFyIHdzID0gbmV3IFdlYlNvY2tldChwcm90b2NvbCArICc6Ly8nICsgaG9zdG5hbWUgKyAocG9ydCA/ICc6JyArIHBvcnQgOiAnJykgKyAnLycpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgd3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50XG4gIC8qOiB7ZGF0YTogc3RyaW5nLCAuLi59ICovXG4gICkge1xuICAgIGNoZWNrZWRBc3NldHMgPSB7fVxuICAgIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiAgICA7XG4gICAgYWNjZXB0ZWRBc3NldHMgPSB7fVxuICAgIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiAgICA7XG4gICAgYXNzZXRzVG9BY2NlcHQgPSBbXTtcbiAgICB2YXIgZGF0YVxuICAgIC8qOiBITVJNZXNzYWdlICovXG4gICAgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgIC8vIFJlbW92ZSBlcnJvciBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhc3NldHMgPSBkYXRhLmFzc2V0cy5maWx0ZXIoZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiBhc3NldC5lbnZIYXNoID09PSBITVJfRU5WX0hBU0g7XG4gICAgICB9KTsgLy8gSGFuZGxlIEhNUiBVcGRhdGVcblxuICAgICAgdmFyIGhhbmRsZWQgPSBhc3NldHMuZXZlcnkoZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiBhc3NldC50eXBlID09PSAnY3NzJyB8fCBhc3NldC50eXBlID09PSAnanMnICYmIGhtckFjY2VwdENoZWNrKG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQuaWQsIGFzc2V0LmRlcHNCeUJ1bmRsZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICBhc3NldHMuZm9yRWFjaChmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgICAgICBobXJBcHBseShtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3NldHNUb0FjY2VwdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpZCA9IGFzc2V0c1RvQWNjZXB0W2ldWzFdO1xuXG4gICAgICAgICAgaWYgKCFhY2NlcHRlZEFzc2V0c1tpZF0pIHtcbiAgICAgICAgICAgIGhtckFjY2VwdFJ1bihhc3NldHNUb0FjY2VwdFtpXVswXSwgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIC8vIExvZyBwYXJjZWwgZXJyb3JzIHRvIGNvbnNvbGVcbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihkYXRhLmRpYWdub3N0aWNzLmFuc2kpLFxuICAgICAgICAgIF9zdGVwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciBhbnNpRGlhZ25vc3RpYyA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgIHZhciBzdGFjayA9IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA/IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA6IGFuc2lEaWFnbm9zdGljLnN0YWNrO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ/CfmqggW3BhcmNlbF06ICcgKyBhbnNpRGlhZ25vc3RpYy5tZXNzYWdlICsgJ1xcbicgKyBzdGFjayArICdcXG5cXG4nICsgYW5zaURpYWdub3N0aWMuaGludHMuam9pbignXFxuJykpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFJlbmRlciB0aGUgZmFuY3kgaHRtbCBvdmVybGF5XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgICB2YXIgb3ZlcmxheSA9IGNyZWF0ZUVycm9yT3ZlcmxheShkYXRhLmRpYWdub3N0aWNzLmh0bWwpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICB9O1xuXG4gIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS53YXJuKCdbcGFyY2VsXSDwn5qoIENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgd2FzIGxvc3QnKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXJyb3JPdmVybGF5KCkge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE9WRVJMQVlfSUQpO1xuXG4gIGlmIChvdmVybGF5KSB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZygnW3BhcmNlbF0g4pyoIEVycm9yIHJlc29sdmVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRXJyb3JPdmVybGF5KGRpYWdub3N0aWNzKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuaWQgPSBPVkVSTEFZX0lEO1xuICB2YXIgZXJyb3JIVE1MID0gJzxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiBibGFjazsgb3BhY2l0eTogMC44NTsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogd2hpdGU7IHBvc2l0aW9uOiBmaXhlZDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgcGFkZGluZzogMzBweDsgZm9udC1mYW1pbHk6IE1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlOyB6LWluZGV4OiA5OTk5O1wiPic7XG5cbiAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihkaWFnbm9zdGljcyksXG4gICAgICBfc3RlcDI7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgdmFyIGRpYWdub3N0aWMgPSBfc3RlcDIudmFsdWU7XG4gICAgICB2YXIgc3RhY2sgPSBkaWFnbm9zdGljLmNvZGVmcmFtZSA/IGRpYWdub3N0aWMuY29kZWZyYW1lIDogZGlhZ25vc3RpYy5zdGFjaztcbiAgICAgIGVycm9ySFRNTCArPSBcIlxcbiAgICAgIDxkaXY+XFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tdG9wOiAyMHB4O1xcXCI+XFxuICAgICAgICAgIFxcdUQ4M0RcXHVERUE4IFwiLmNvbmNhdChkaWFnbm9zdGljLm1lc3NhZ2UsIFwiXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxwcmU+XCIpLmNvbmNhdChzdGFjaywgXCI8L3ByZT5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgIFwiKS5jb25jYXQoZGlhZ25vc3RpYy5oaW50cy5tYXAoZnVuY3Rpb24gKGhpbnQpIHtcbiAgICAgICAgcmV0dXJuICc8ZGl2PvCfkqEgJyArIGhpbnQgKyAnPC9kaXY+JztcbiAgICAgIH0pLmpvaW4oJycpLCBcIlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICBcIikuY29uY2F0KGRpYWdub3N0aWMuZG9jdW1lbnRhdGlvbiA/IFwiPGRpdj5cXHVEODNEXFx1RENERCA8YSBzdHlsZT1cXFwiY29sb3I6IHZpb2xldFxcXCIgaHJlZj1cXFwiXCIuY29uY2F0KGRpYWdub3N0aWMuZG9jdW1lbnRhdGlvbiwgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5MZWFybiBtb3JlPC9hPjwvZGl2PlwiKSA6ICcnLCBcIlxcbiAgICAgIDwvZGl2PlxcbiAgICBcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfaXRlcmF0b3IyLmUoZXJyKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBfaXRlcmF0b3IyLmYoKTtcbiAgfVxuXG4gIGVycm9ySFRNTCArPSAnPC9kaXY+JztcbiAgb3ZlcmxheS5pbm5lckhUTUwgPSBlcnJvckhUTUw7XG4gIHJldHVybiBvdmVybGF5O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRzKGJ1bmRsZSwgaWQpXG4vKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovXG57XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGssIGQsIGRlcDtcblxuICBmb3IgKGsgaW4gbW9kdWxlcykge1xuICAgIGZvciAoZCBpbiBtb2R1bGVzW2tdWzFdKSB7XG4gICAgICBkZXAgPSBtb2R1bGVzW2tdWzFdW2RdO1xuXG4gICAgICBpZiAoZGVwID09PSBpZCB8fCBBcnJheS5pc0FycmF5KGRlcCkgJiYgZGVwW2RlcC5sZW5ndGggLSAxXSA9PT0gaWQpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKFtidW5kbGUsIGtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChnZXRQYXJlbnRzKGJ1bmRsZS5wYXJlbnQsIGlkKSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rKSB7XG4gIHZhciBuZXdMaW5rID0gbGluay5jbG9uZU5vZGUoKTtcblxuICBuZXdMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGluay5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgfVxuICB9O1xuXG4gIG5ld0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgLy8gJEZsb3dGaXhNZVxuICBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLnNwbGl0KCc/JylbMF0gKyAnPycgKyBEYXRlLm5vdygpKTsgLy8gJEZsb3dGaXhNZVxuXG4gIGxpbmsucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3TGluaywgbGluay5uZXh0U2libGluZyk7XG59XG5cbnZhciBjc3NUaW1lb3V0ID0gbnVsbDtcblxuZnVuY3Rpb24gcmVsb2FkQ1NTKCkge1xuICBpZiAoY3NzVGltZW91dCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdXG4gICAgICB2YXIgaHJlZlxuICAgICAgLyo6IHN0cmluZyAqL1xuICAgICAgPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gICAgICB2YXIgc2VydmVkRnJvbUhNUlNlcnZlciA9IGhvc3RuYW1lID09PSAnbG9jYWxob3N0JyA/IG5ldyBSZWdFeHAoJ14oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6JyArIGdldFBvcnQoKSkudGVzdChocmVmKSA6IGhyZWYuaW5kZXhPZihob3N0bmFtZSArICc6JyArIGdldFBvcnQoKSk7XG4gICAgICB2YXIgYWJzb2x1dGUgPSAvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KGhyZWYpICYmIGhyZWYuaW5kZXhPZih3aW5kb3cubG9jYXRpb24ub3JpZ2luKSAhPT0gMCAmJiAhc2VydmVkRnJvbUhNUlNlcnZlcjtcblxuICAgICAgaWYgKCFhYnNvbHV0ZSkge1xuICAgICAgICB1cGRhdGVMaW5rKGxpbmtzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjc3NUaW1lb3V0ID0gbnVsbDtcbiAgfSwgNTApO1xufVxuXG5mdW5jdGlvbiBobXJBcHBseShidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGFzc2V0XG4vKjogIEhNUkFzc2V0ICovXG4pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2NzcycpIHtcbiAgICByZWxvYWRDU1MoKTtcbiAgfSBlbHNlIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgdmFyIGRlcHMgPSBhc3NldC5kZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdO1xuXG4gICAgaWYgKGRlcHMpIHtcbiAgICAgIGlmIChtb2R1bGVzW2Fzc2V0LmlkXSkge1xuICAgICAgICAvLyBSZW1vdmUgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIHJlbW92ZWQgYW5kIHdpbGwgYmVjb21lIG9ycGhhbmVkLlxuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBzbyB0aGF0IGlmIHRoZSBhc3NldCBpcyBhZGRlZCBiYWNrIGFnYWluLCB0aGUgY2FjaGUgaXMgZ29uZSwgYW5kIHdlIHByZXZlbnQgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICAgICAgICB2YXIgb2xkRGVwcyA9IG1vZHVsZXNbYXNzZXQuaWRdWzFdO1xuXG4gICAgICAgIGZvciAodmFyIGRlcCBpbiBvbGREZXBzKSB7XG4gICAgICAgICAgaWYgKCFkZXBzW2RlcF0gfHwgZGVwc1tkZXBdICE9PSBvbGREZXBzW2RlcF0pIHtcbiAgICAgICAgICAgIHZhciBpZCA9IG9sZERlcHNbZGVwXTtcbiAgICAgICAgICAgIHZhciBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGZuID0gbmV3IEZ1bmN0aW9uKCdyZXF1aXJlJywgJ21vZHVsZScsICdleHBvcnRzJywgYXNzZXQub3V0cHV0KTtcbiAgICAgIG1vZHVsZXNbYXNzZXQuaWRdID0gW2ZuLCBkZXBzXTtcbiAgICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIGhtckFwcGx5KGJ1bmRsZS5wYXJlbnQsIGFzc2V0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaG1yRGVsZXRlKGJ1bmRsZSwgaWQpIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAobW9kdWxlc1tpZF0pIHtcbiAgICAvLyBDb2xsZWN0IGRlcGVuZGVuY2llcyB0aGF0IHdpbGwgYmVjb21lIG9ycGhhbmVkIHdoZW4gdGhpcyBtb2R1bGUgaXMgZGVsZXRlZC5cbiAgICB2YXIgZGVwcyA9IG1vZHVsZXNbaWRdWzFdO1xuICAgIHZhciBvcnBoYW5zID0gW107XG5cbiAgICBmb3IgKHZhciBkZXAgaW4gZGVwcykge1xuICAgICAgdmFyIHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgZGVwc1tkZXBdKTtcblxuICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG9ycGhhbnMucHVzaChkZXBzW2RlcF0pO1xuICAgICAgfVxuICAgIH0gLy8gRGVsZXRlIHRoZSBtb2R1bGUuIFRoaXMgbXVzdCBiZSBkb25lIGJlZm9yZSBkZWxldGluZyBkZXBlbmRlbmNpZXMgaW4gY2FzZSBvZiBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG5cblxuICAgIGRlbGV0ZSBtb2R1bGVzW2lkXTtcbiAgICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTsgLy8gTm93IGRlbGV0ZSB0aGUgb3JwaGFucy5cblxuICAgIG9ycGhhbnMuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgaG1yRGVsZXRlKGJ1bmRsZS5wYXJlbnQsIGlkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRDaGVjayhidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4sIGRlcHNCeUJ1bmRsZVxuLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki9cbikge1xuICBpZiAoaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlLCBpZCwgZGVwc0J5QnVuZGxlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIFRyYXZlcnNlIHBhcmVudHMgYnJlYWR0aCBmaXJzdC4gQWxsIHBvc3NpYmxlIGFuY2VzdHJpZXMgbXVzdCBhY2NlcHQgdGhlIEhNUiB1cGRhdGUsIG9yIHdlJ2xsIHJlbG9hZC5cblxuXG4gIHZhciBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgdmFyIGFjY2VwdGVkID0gZmFsc2U7XG5cbiAgd2hpbGUgKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgIHZhciB2ID0gcGFyZW50cy5zaGlmdCgpO1xuICAgIHZhciBhID0gaG1yQWNjZXB0Q2hlY2tPbmUodlswXSwgdlsxXSwgbnVsbCk7XG5cbiAgICBpZiAoYSkge1xuICAgICAgLy8gSWYgdGhpcyBwYXJlbnQgYWNjZXB0cywgc3RvcCB0cmF2ZXJzaW5nIHVwd2FyZCwgYnV0IHN0aWxsIGNvbnNpZGVyIHNpYmxpbmdzLlxuICAgICAgYWNjZXB0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2UsIHF1ZXVlIHRoZSBwYXJlbnRzIGluIHRoZSBuZXh0IGxldmVsIHVwd2FyZC5cbiAgICAgIHZhciBwID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIHZbMV0pO1xuXG4gICAgICBpZiAocC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHBhcmVudHMsIHRoZW4gd2UndmUgcmVhY2hlZCBhbiBlbnRyeSB3aXRob3V0IGFjY2VwdGluZy4gUmVsb2FkLlxuICAgICAgICBhY2NlcHRlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcGFyZW50cy5wdXNoLmFwcGx5KHBhcmVudHMsIF90b0NvbnN1bWFibGVBcnJheShwKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFjY2VwdGVkO1xufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRDaGVja09uZShidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4sIGRlcHNCeUJ1bmRsZVxuLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki9cbikge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkZXBzQnlCdW5kbGUgJiYgIWRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF0pIHtcbiAgICAvLyBJZiB3ZSByZWFjaGVkIHRoZSByb290IGJ1bmRsZSB3aXRob3V0IGZpbmRpbmcgd2hlcmUgdGhlIGFzc2V0IHNob3VsZCBnbyxcbiAgICAvLyB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uIE1hcmsgYXMgXCJhY2NlcHRlZFwiIHNvIHdlIGRvbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgICBpZiAoIWJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBobXJBY2NlcHRDaGVjayhidW5kbGUucGFyZW50LCBpZCwgZGVwc0J5QnVuZGxlKTtcbiAgfVxuXG4gIGlmIChjaGVja2VkQXNzZXRzW2lkXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2hlY2tlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYXNzZXRzVG9BY2NlcHQucHVzaChbYnVuZGxlLCBpZF0pO1xuXG4gIGlmICghY2FjaGVkIHx8IGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhtckFjY2VwdFJ1bihidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4pIHtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZS5ob3REYXRhID0ge307XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90KSB7XG4gICAgY2FjaGVkLmhvdC5kYXRhID0gYnVuZGxlLmhvdERhdGE7XG4gIH1cblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICBjYihidW5kbGUuaG90RGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlKGlkKTtcbiAgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgdmFyIGFzc2V0c1RvQWxzb0FjY2VwdCA9IGNiKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc2V0c1RvQWxzb0FjY2VwdCAmJiBhc3NldHNUb0FjY2VwdC5sZW5ndGgpIHtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVttZXRob2QtdW5iaW5kaW5nXVxuICAgICAgICBhc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGFzc2V0c1RvQWNjZXB0LCBhc3NldHNUb0Fsc29BY2NlcHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWNjZXB0ZWRBc3NldHNbaWRdID0gdHJ1ZTtcbn0iLCJpbXBvcnQgdSBmcm9tIFwidW1icmVsbGFqc1wiO1xyXG5pbXBvcnQgQ3Vyc29yIGZyb20gXCIuL0N1cnNvclwiO1xyXG5pbXBvcnQgYnJvd3NlciBmcm9tIFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0U2hvcnRjdXRzID0ge1xyXG4gIFwianVtcC10by1yZXN1bHQta2V5c1wiOiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIwXCJdLFxyXG4gIHVwd2FyZDoge1xyXG4gICAgY3RybEtleTogZmFsc2UsXHJcbiAgICBzaGlmdEtleTogZmFsc2UsXHJcbiAgICBhbHRLZXk6IGZhbHNlLFxyXG4gICAgbWV0YUtleTogZmFsc2UsXHJcbiAgICBrZXk6IFwia1wiLFxyXG4gIH0sXHJcbiAgZG93bndhcmQ6IHtcclxuICAgIGN0cmxLZXk6IGZhbHNlLFxyXG4gICAgc2hpZnRLZXk6IGZhbHNlLFxyXG4gICAgYWx0S2V5OiBmYWxzZSxcclxuICAgIG1ldGFLZXk6IGZhbHNlLFxyXG4gICAga2V5OiBcImpcIixcclxuICB9LFxyXG4gIFwib3Blbi1pbi1jdXJyZW50LXRhYlwiOiB7XHJcbiAgICBjdHJsS2V5OiBmYWxzZSxcclxuICAgIHNoaWZ0S2V5OiBmYWxzZSxcclxuICAgIGFsdEtleTogZmFsc2UsXHJcbiAgICBtZXRhS2V5OiBmYWxzZSxcclxuICAgIGtleTogXCJFbnRlclwiLFxyXG4gIH0sXHJcbiAgXCJvcGVuLWluLW5ldy10YWItYnV0LXN0YXktb24tY3VycmVudFwiOiB7XHJcbiAgICBjdHJsS2V5OiB0cnVlLFxyXG4gICAgc2hpZnRLZXk6IGZhbHNlLFxyXG4gICAgYWx0S2V5OiBmYWxzZSxcclxuICAgIG1ldGFLZXk6IGZhbHNlLFxyXG4gICAga2V5OiBcIkVudGVyXCIsXHJcbiAgfSxcclxuICBcIm9wZW4taW4tbmV3LXRhYi1hbmQtZm9jdXNcIjoge1xyXG4gICAgY3RybEtleTogdHJ1ZSxcclxuICAgIHNoaWZ0S2V5OiB0cnVlLFxyXG4gICAgYWx0S2V5OiBmYWxzZSxcclxuICAgIG1ldGFLZXk6IGZhbHNlLFxyXG4gICAga2V5OiBcIkVudGVyXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmxldCBzaG9ydGN1dHMgPSBkZWZhdWx0U2hvcnRjdXRzO1xyXG5cclxudHlwZSBTb2tvYmFuID0ge1xyXG4gIGVsOiBIVE1MRWxlbWVudDtcclxuICBocmVmOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBzb2tvYmFuczogU29rb2JhbltdID0gW107XHJcblxyXG4vLyBzaG93IHVpXHJcbnUoXCJkaXZcIilcclxuICAuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICByZXR1cm4gdShub2RlKS5kYXRhKFwic29rb2Jhbi1jb250YWluZXJcIikgIT09IG51bGw7XHJcbiAgfSlcclxuICAuZWFjaChmdW5jdGlvbiAobm9kZSwgaSkge1xyXG4gICAgbGV0IGtleSA9IHNob3J0Y3V0c1tcImp1bXAtdG8tcmVzdWx0LWtleXNcIl1baV07XHJcbiAgICBpZiAoIWtleSkge1xyXG4gICAgICBrZXkgPSBpICUgMiA9PT0gMCA/IFwi8J+miVwiIDogXCLwn5CjXCI7XHJcbiAgICB9XHJcbiAgICB1KG5vZGUpLmJlZm9yZSgnPGRpdiBjbGFzcz1cImJ0blwiPicgKyBrZXkgKyBcIjwvZGl2PlwiKTtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSB1KG5vZGUpLndyYXAoXCI8ZGl2IGNsYXNzPSdzb2tvYmFuLXdyYXAnPlwiKS5maXJzdCgpO1xyXG4gICAgc29rb2JhbnMucHVzaCh7IGVsOiB3cmFwcGVyLCBocmVmOiB1KG5vZGUpLmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpIH0pO1xyXG4gIH0pO1xyXG5cclxuY29uc3QgY3Vyc29yID0gbmV3IEN1cnNvcihzb2tvYmFucy5sZW5ndGgpO1xyXG5cclxuLy8gbG9nIGtleSBhdCB0aGUgZW5kIG9mIHRoZSBwYWdlXHJcbnUoXCJib2R5XCIpLmFmdGVyKFwiPGRpdiBpZD0nbG9nJz48L2Rpdj5cIik7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGxvZ0tleSk7XHJcbmNvbnN0IGxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nXCIpO1xyXG5mdW5jdGlvbiBsb2dLZXkoZSkge1xyXG4gIGxvZy50ZXh0Q29udGVudCArPSBgICR7ZS5rZXl9YDtcclxufVxyXG5cclxuY29uc3QgbW9kaWZpZXJLZXlzID0gW1wiY3RybEtleVwiLCBcInNoaWZ0S2V5XCIsIFwiYWx0S2V5XCIsIFwibWV0YUtleVwiXTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgaWYgKCFzaG9ydGN1dHMpIHJldHVybjtcclxuXHJcbiAgLy8ganVtcCB0byB0aGUgdGFyZ2V0IHNva29iYW5cclxuICBpZiAobW9kaWZpZXJLZXlzLmV2ZXJ5KCh2KSA9PiBlW3ZdID09PSBmYWxzZSkpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gc2hvcnRjdXRzW1wianVtcC10by1yZXN1bHQta2V5c1wiXS5pbmRleE9mKGUua2V5KTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgY3Vyc29yLmp1bXBUbyhpbmRleCk7XHJcbiAgICAgIHNjcm9sbCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21tYW5kID0gc2hvcnRjdXRNYXBwaW5nKGUpO1xyXG4gIHN3aXRjaCAoY29tbWFuZCkge1xyXG4gICAgY2FzZSBcInVwd2FyZFwiOlxyXG4gICAgICBjdXJzb3IucHJldigpO1xyXG4gICAgICBzY3JvbGwoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiZG93bndhcmRcIjpcclxuICAgICAgY3Vyc29yLm5leHQoKTtcclxuICAgICAgc2Nyb2xsKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIm9wZW4taW4tY3VycmVudC10YWJcIjpcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihzb2tvYmFuc1tjdXJzb3IuaW5kZXhdLmhyZWYpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICBjYXNlIFwib3Blbi1pbi1uZXctdGFiLWJ1dC1zdGF5LW9uLWN1cnJlbnRcIjpcclxuICAgICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgICBjb21tYW5kOiBcIm9wZW4taW4tbmV3LXRhYlwiLFxyXG4gICAgICAgIHVybDogc29rb2JhbnNbY3Vyc29yLmluZGV4XS5ocmVmLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsIC8vIHN0YXkgaW4gY3VycmVudCB0YWJcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIm9wZW4taW4tbmV3LXRhYi1hbmQtZm9jdXNcIjpcclxuICAgICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgICBjb21tYW5kOiBcIm9wZW4taW4tbmV3LXRhYlwiLFxyXG4gICAgICAgIHVybDogc29rb2JhbnNbY3Vyc29yLmluZGV4XS5ocmVmLFxyXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSwgLy8gZm9jdXMgbmV3IHRhYlxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gc2Nyb2xsIHRvIHRoZSB0YXJnZXQgc29rb2JhblxyXG5mdW5jdGlvbiBzY3JvbGwoKSB7XHJcbiAgY29uc3Qgc29rb2JhbiA9IHNva29iYW5zW2N1cnNvci5pbmRleF07XHJcbiAgc29rb2Jhbi5lbC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiBcImNlbnRlclwiIH0pO1xyXG4gIHNva29iYW5zLmZvckVhY2goKHMsIGkpID0+IHtcclxuICAgIGlmIChpID09PSBjdXJzb3IuaW5kZXgpIHtcclxuICAgICAgdShzLmVsKS5hZGRDbGFzcyhcImZvY3VzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdShzLmVsKS5yZW1vdmVDbGFzcyhcImZvY3VzXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5icm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2hvcnRjdXRzOiBkZWZhdWx0U2hvcnRjdXRzIH0pLnRoZW4oXHJcbiAgKGdvdCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJnZXQ6IFwiLCBnb3QpO1xyXG4gICAgc2hvcnRjdXRzID0gZ290LnNob3J0Y3V0cztcclxuICB9LFxyXG4gIChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib24gZXJyb3I6IFwiLCBlcnIpO1xyXG4gIH1cclxuKTtcclxuXHJcbmZ1bmN0aW9uIHNob3J0Y3V0TWFwcGluZyhlOiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgLy8gZGVidWcgcHJpbnRcclxuICBpZiAodHJ1ZSkge1xyXG4gICAgW1wiY3RybEtleVwiLCBcInNoaWZ0S2V5XCIsIFwiYWx0S2V5XCIsIFwibWV0YUtleVwiLCBcImtleVwiXS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coa2V5LCBcIjpcIiwgZVtrZXldKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFzaG9ydGN1dHMpIHJldHVybjtcclxuXHJcbiAgbGV0IGNvbW1hbmQ6IHN0cmluZztcclxuICBmb3IgKGNvbnN0IHByb3AgaW4gc2hvcnRjdXRzKSB7XHJcbiAgICBjb25zdCBzaG9ydGN1dCA9IHNob3J0Y3V0c1twcm9wXTtcclxuICAgIGlmIChPYmplY3Qua2V5cyhzaG9ydGN1dCkuZXZlcnkoKGtleSkgPT4gc2hvcnRjdXRba2V5XSA9PT0gZVtrZXldKSkge1xyXG4gICAgICBjb21tYW5kID0gcHJvcDtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhcImNvbW1hbmQ6IFwiLCBjb21tYW5kKTtcclxuXHJcbiAgcmV0dXJuIGNvbW1hbmQ7XHJcbn1cclxuIiwiLyogVW1icmVsbGEgSlMgMy4zLjAgdW1icmVsbGFqcy5jb20gKi9cblxudmFyIHU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIHU/dCBpbnN0YW5jZW9mIHU/dDooKHQ9XCJzdHJpbmdcIj09dHlwZW9mIHQ/dGhpcy5zZWxlY3QodCxlKTp0KSYmdC5ub2RlTmFtZSYmKHQ9W3RdKSx2b2lkKHRoaXMubm9kZXM9dGhpcy5zbGljZSh0KSkpOm5ldyB1KHQsZSl9O3UucHJvdG90eXBlPXtnZXQgbGVuZ3RoKCl7cmV0dXJuIHRoaXMubm9kZXMubGVuZ3RofX0sdS5wcm90b3R5cGUubm9kZXM9W10sdS5wcm90b3R5cGUuYWRkQ2xhc3M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoYXJnKGFyZ3VtZW50cyxmdW5jdGlvbih0LGUpe3QuY2xhc3NMaXN0LmFkZChlKX0pfSx1LnByb3RvdHlwZS5hZGphY2VudD1mdW5jdGlvbihvLHQsaSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHQmJih0PTA9PT10P1tdOm5ldyBBcnJheSh0KS5qb2luKCkuc3BsaXQoXCIsXCIpLm1hcChOdW1iZXIuY2FsbCxOdW1iZXIpKSx0aGlzLmVhY2goZnVuY3Rpb24obixyKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7dSh0fHx7fSkubWFwKGZ1bmN0aW9uKHQsZSl7ZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBvP28uY2FsbCh0aGlzLHQsZSxuLHIpOm87cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/dGhpcy5nZW5lcmF0ZShlKTp1KGUpfSkuZWFjaChmdW5jdGlvbih0KXt0aGlzLmlzSW5QYWdlKHQpP2UuYXBwZW5kQ2hpbGQodSh0KS5jbG9uZSgpLmZpcnN0KCkpOmUuYXBwZW5kQ2hpbGQodCl9KSxpLmNhbGwodGhpcyxuLGUpfSl9LHUucHJvdG90eXBlLmFmdGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRqYWNlbnQodCxlLGZ1bmN0aW9uKHQsZSl7dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHQubmV4dFNpYmxpbmcpfSl9LHUucHJvdG90eXBlLmFwcGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkamFjZW50KHQsZSxmdW5jdGlvbih0LGUpe3QuYXBwZW5kQ2hpbGQoZSl9KX0sdS5wcm90b3R5cGUuYXJncz1mdW5jdGlvbih0LGUsbil7cmV0dXJuKHQ9XCJzdHJpbmdcIiE9dHlwZW9mKHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KGUsbik6dCk/dGhpcy5zbGljZSh0KS5tYXAodGhpcy5zdHIoZSxuKSk6dCkudG9TdHJpbmcoKS5zcGxpdCgvW1xccyxdKy8pLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdC5sZW5ndGh9KX0sdS5wcm90b3R5cGUuYXJyYXk9ZnVuY3Rpb24obyl7dmFyIGk9dGhpcztyZXR1cm4gdGhpcy5ub2Rlcy5yZWR1Y2UoZnVuY3Rpb24odCxlLG4pe3ZhciByO3JldHVybiBvPyhyPVwic3RyaW5nXCI9PXR5cGVvZihyPShyPW8uY2FsbChpLGUsbikpfHwhMSk/dShyKTpyKWluc3RhbmNlb2YgdSYmKHI9ci5ub2Rlcyk6cj1lLmlubmVySFRNTCx0LmNvbmNhdCghMSE9PXI/cjpbXSl9LFtdKX0sdS5wcm90b3R5cGUuYXR0cj1mdW5jdGlvbih0LGUscil7cmV0dXJuIHI9cj9cImRhdGEtXCI6XCJcIix0aGlzLnBhaXJzKHQsZSxmdW5jdGlvbih0LGUpe3JldHVybiB0LmdldEF0dHJpYnV0ZShyK2UpfSxmdW5jdGlvbih0LGUsbil7bj90LnNldEF0dHJpYnV0ZShyK2Usbik6dC5yZW1vdmVBdHRyaWJ1dGUocitlKX0pfSx1LnByb3RvdHlwZS5iZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hZGphY2VudCh0LGUsZnVuY3Rpb24odCxlKXt0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdCl9KX0sdS5wcm90b3R5cGUuY2hpbGRyZW49ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNsaWNlKHQuY2hpbGRyZW4pfSkuZmlsdGVyKHQpfSx1LnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0LGUpe3ZhciBuPXQuY2xvbmVOb2RlKCEwKSxyPXRoaXMuZ2V0QWxsKG4pO3JldHVybiB0aGlzLmdldEFsbCh0KS5lYWNoKGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuIGluIHRoaXMubWlycm9yKXRoaXMubWlycm9yW25dJiZ0aGlzLm1pcnJvcltuXSh0LHIubm9kZXNbZV0pfSksbn0pfSx1LnByb3RvdHlwZS5nZXRBbGw9ZnVuY3Rpb24odCl7cmV0dXJuIHUoW3RdLmNvbmNhdCh1KFwiKlwiLHQpLm5vZGVzKSl9LHUucHJvdG90eXBlLm1pcnJvcj17fSx1LnByb3RvdHlwZS5taXJyb3IuZXZlbnRzPWZ1bmN0aW9uKHQsZSl7aWYodC5fZSlmb3IodmFyIG4gaW4gdC5fZSl0Ll9lW25dLmZvckVhY2goZnVuY3Rpb24odCl7dShlKS5vbihuLHQuY2FsbGJhY2spfSl9LHUucHJvdG90eXBlLm1pcnJvci5zZWxlY3Q9ZnVuY3Rpb24odCxlKXt1KHQpLmlzKFwic2VsZWN0XCIpJiYoZS52YWx1ZT10LnZhbHVlKX0sdS5wcm90b3R5cGUubWlycm9yLnRleHRhcmVhPWZ1bmN0aW9uKHQsZSl7dSh0KS5pcyhcInRleHRhcmVhXCIpJiYoZS52YWx1ZT10LnZhbHVlKX0sdS5wcm90b3R5cGUuY2xvc2VzdD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7ZG97aWYodSh0KS5pcyhlKSlyZXR1cm4gdH13aGlsZSgodD10LnBhcmVudE5vZGUpJiZ0IT09ZG9jdW1lbnQpfSl9LHUucHJvdG90eXBlLmRhdGE9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hdHRyKHQsZSwhMCl9LHUucHJvdG90eXBlLmVhY2g9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMubm9kZXMuZm9yRWFjaCh0LmJpbmQodGhpcykpLHRoaXN9LHUucHJvdG90eXBlLmVhY2hhcmc9ZnVuY3Rpb24obixyKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUsdCl7dGhpcy5hcmdzKG4sZSx0KS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3IuY2FsbCh0aGlzLGUsdCl9LHRoaXMpfSl9LHUucHJvdG90eXBlLmVtcHR5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0KXtmb3IoO3QuZmlyc3RDaGlsZDspdC5yZW1vdmVDaGlsZCh0LmZpcnN0Q2hpbGQpfSl9LHUucHJvdG90eXBlLmZpbHRlcj1mdW5jdGlvbihlKXt2YXIgdD1lIGluc3RhbmNlb2YgdT9mdW5jdGlvbih0KXtyZXR1cm4tMSE9PWUubm9kZXMuaW5kZXhPZih0KX06XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOmZ1bmN0aW9uKHQpe3JldHVybiB0Lm1hdGNoZXM9dC5tYXRjaGVzfHx0Lm1zTWF0Y2hlc1NlbGVjdG9yfHx0LndlYmtpdE1hdGNoZXNTZWxlY3Rvcix0Lm1hdGNoZXMoZXx8XCIqXCIpfTtyZXR1cm4gdSh0aGlzLm5vZGVzLmZpbHRlcih0KSl9LHUucHJvdG90eXBlLmZpbmQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB1KGV8fFwiKlwiLHQpfSl9LHUucHJvdG90eXBlLmZpcnN0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZXNbMF18fCExfSx1LnByb3RvdHlwZS5nZW5lcmF0ZT1mdW5jdGlvbih0KXtyZXR1cm4vXlxccyo8dHJbPiBdLy50ZXN0KHQpP3UoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpKS5odG1sKHQpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5ub2RlczovXlxccyo8dChofGQpWz4gXS8udGVzdCh0KT91KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKSkuaHRtbCh0KS5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5ub2RlczovXlxccyo8Ly50ZXN0KHQpP3UoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuaHRtbCh0KS5jaGlsZHJlbigpLm5vZGVzOmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpfSx1LnByb3RvdHlwZS5oYW5kbGU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnNsaWNlKGFyZ3VtZW50cykubWFwKGZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfTplfSx0aGlzKTtyZXR1cm4gdGhpcy5vbi5hcHBseSh0aGlzLHQpfSx1LnByb3RvdHlwZS5oYXNDbGFzcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzKFwiLlwiK3RoaXMuYXJncyhhcmd1bWVudHMpLmpvaW4oXCIuXCIpKX0sdS5wcm90b3R5cGUuaHRtbD1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZT90aGlzLmZpcnN0KCkuaW5uZXJIVE1MfHxcIlwiOnRoaXMuZWFjaChmdW5jdGlvbih0KXt0LmlubmVySFRNTD1lfSl9LHUucHJvdG90eXBlLmlzPWZ1bmN0aW9uKHQpe3JldHVybiAwPHRoaXMuZmlsdGVyKHQpLmxlbmd0aH0sdS5wcm90b3R5cGUuaXNJblBhZ2U9ZnVuY3Rpb24odCl7cmV0dXJuIHQhPT1kb2N1bWVudC5ib2R5JiZkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHQpfSx1LnByb3RvdHlwZS5sYXN0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZXNbdGhpcy5sZW5ndGgtMV18fCExfSx1LnByb3RvdHlwZS5tYXA9ZnVuY3Rpb24odCl7cmV0dXJuIHQ/dSh0aGlzLmFycmF5KHQpKS51bmlxdWUoKTp0aGlzfSx1LnByb3RvdHlwZS5ub3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiF1KHQpLmlzKGV8fCEwKX0pfSx1LnByb3RvdHlwZS5vZmY9ZnVuY3Rpb24odCxlLG4pe3ZhciByPW51bGw9PWUmJm51bGw9PW4sbz1udWxsLGk9ZTtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmKG89ZSxpPW4pLHRoaXMuZWFjaGFyZyh0LGZ1bmN0aW9uKGUsbil7dShlLl9lP2UuX2Vbbl06W10pLmVhY2goZnVuY3Rpb24odCl7KHJ8fHQub3JpZ19jYWxsYmFjaz09PWkmJnQuc2VsZWN0b3I9PT1vKSYmZS5yZW1vdmVFdmVudExpc3RlbmVyKG4sdC5jYWxsYmFjayl9KX0pfSx1LnByb3RvdHlwZS5vbj1mdW5jdGlvbih0LGUsbyl7ZnVuY3Rpb24gaSh0LGUpe3RyeXtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcImN1cnJlbnRUYXJnZXRcIix7dmFsdWU6ZSxjb25maWd1cmFibGU6ITB9KX1jYXRjaCh0KXt9fXZhciBjPW51bGwsbj1lO1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoYz1lLG49byxlPWZ1bmN0aW9uKG4pe3ZhciByPWFyZ3VtZW50czt1KG4uY3VycmVudFRhcmdldCkuZmluZChjKS5lYWNoKGZ1bmN0aW9uKHQpe3ZhciBlO3QuY29udGFpbnMobi50YXJnZXQpJiYoZT1uLmN1cnJlbnRUYXJnZXQsaShuLHQpLG8uYXBwbHkodCxyKSxpKG4sZSkpfSl9KTtmdW5jdGlvbiByKHQpe3JldHVybiBlLmFwcGx5KHRoaXMsW3RdLmNvbmNhdCh0LmRldGFpbHx8W10pKX1yZXR1cm4gdGhpcy5lYWNoYXJnKHQsZnVuY3Rpb24odCxlKXt0LmFkZEV2ZW50TGlzdGVuZXIoZSxyKSx0Ll9lPXQuX2V8fHt9LHQuX2VbZV09dC5fZVtlXXx8W10sdC5fZVtlXS5wdXNoKHtjYWxsYmFjazpyLG9yaWdfY2FsbGJhY2s6bixzZWxlY3RvcjpjfSl9KX0sdS5wcm90b3R5cGUucGFpcnM9ZnVuY3Rpb24ocix0LGUsbyl7dmFyIG47cmV0dXJuIHZvaWQgMCE9PXQmJihuPXIsKHI9e30pW25dPXQpLFwib2JqZWN0XCI9PXR5cGVvZiByP3RoaXMuZWFjaChmdW5jdGlvbih0LGUpe2Zvcih2YXIgbiBpbiByKVwiZnVuY3Rpb25cIj09dHlwZW9mIHJbbl0/byh0LG4scltuXSh0LGUpKTpvKHQsbixyW25dKX0pOnRoaXMubGVuZ3RoP2UodGhpcy5maXJzdCgpLHIpOlwiXCJ9LHUucHJvdG90eXBlLnBhcmFtPWZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3Qua2V5cyhlKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudXJpKHQpK1wiPVwiK3RoaXMudXJpKGVbdF0pfS5iaW5kKHRoaXMpKS5qb2luKFwiJlwiKX0sdS5wcm90b3R5cGUucGFyZW50PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdC5wYXJlbnROb2RlfSkuZmlsdGVyKHQpfSx1LnByb3RvdHlwZS5wcmVwZW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRqYWNlbnQodCxlLGZ1bmN0aW9uKHQsZSl7dC5pbnNlcnRCZWZvcmUoZSx0LmZpcnN0Q2hpbGQpfSl9LHUucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24odCl7dC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCl9KX0sdS5wcm90b3R5cGUucmVtb3ZlQ2xhc3M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoYXJnKGFyZ3VtZW50cyxmdW5jdGlvbih0LGUpe3QuY2xhc3NMaXN0LnJlbW92ZShlKX0pfSx1LnByb3RvdHlwZS5yZXBsYWNlPWZ1bmN0aW9uKHQsZSl7dmFyIG49W107cmV0dXJuIHRoaXMuYWRqYWNlbnQodCxlLGZ1bmN0aW9uKHQsZSl7bj1uLmNvbmNhdCh0aGlzLnNsaWNlKGUuY2hpbGRyZW4pKSx0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGUsdCl9KSx1KG4pfSx1LnByb3RvdHlwZS5zY3JvbGw9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5maXJzdCgpLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjpcInNtb290aFwifSksdGhpc30sdS5wcm90b3R5cGUuc2VsZWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9dC5yZXBsYWNlKC9eXFxzKi8sXCJcIikucmVwbGFjZSgvXFxzKiQvLFwiXCIpLC9ePC8udGVzdCh0KT91KCkuZ2VuZXJhdGUodCk6KGV8fGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHQpfSx1LnByb3RvdHlwZS5zZXJpYWxpemU9ZnVuY3Rpb24oKXt2YXIgcj10aGlzO3JldHVybiB0aGlzLnNsaWNlKHRoaXMuZmlyc3QoKS5lbGVtZW50cykucmVkdWNlKGZ1bmN0aW9uKGUsbil7cmV0dXJuIW4ubmFtZXx8bi5kaXNhYmxlZHx8XCJmaWxlXCI9PT1uLnR5cGV8fC8oY2hlY2tib3h8cmFkaW8pLy50ZXN0KG4udHlwZSkmJiFuLmNoZWNrZWQ/ZTpcInNlbGVjdC1tdWx0aXBsZVwiPT09bi50eXBlPyh1KG4ub3B0aW9ucykuZWFjaChmdW5jdGlvbih0KXt0LnNlbGVjdGVkJiYoZSs9XCImXCIrci51cmkobi5uYW1lKStcIj1cIityLnVyaSh0LnZhbHVlKSl9KSxlKTplK1wiJlwiK3IudXJpKG4ubmFtZSkrXCI9XCIrci51cmkobi52YWx1ZSl9LFwiXCIpLnNsaWNlKDEpfSx1LnByb3RvdHlwZS5zaWJsaW5ncz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5wYXJlbnQoKS5jaGlsZHJlbih0KS5ub3QodGhpcyl9LHUucHJvdG90eXBlLnNpemU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5maXJzdCgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpfSx1LnByb3RvdHlwZS5zbGljZT1mdW5jdGlvbih0KXtyZXR1cm4gdCYmMCE9PXQubGVuZ3RoJiZcInN0cmluZ1wiIT10eXBlb2YgdCYmXCJbb2JqZWN0IEZ1bmN0aW9uXVwiIT09dC50b1N0cmluZygpP3QubGVuZ3RoP1tdLnNsaWNlLmNhbGwodC5ub2Rlc3x8dCk6W3RdOltdfSx1LnByb3RvdHlwZS5zdHI9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwodGhpcyxlLG4pOnQudG9TdHJpbmcoKX19LHUucHJvdG90eXBlLnRleHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/dGhpcy5maXJzdCgpLnRleHRDb250ZW50fHxcIlwiOnRoaXMuZWFjaChmdW5jdGlvbih0KXt0LnRleHRDb250ZW50PWV9KX0sdS5wcm90b3R5cGUudG9nZ2xlQ2xhc3M9ZnVuY3Rpb24odCxlKXtyZXR1cm4hIWU9PT1lP3RoaXNbZT9cImFkZENsYXNzXCI6XCJyZW1vdmVDbGFzc1wiXSh0KTp0aGlzLmVhY2hhcmcodCxmdW5jdGlvbih0LGUpe3QuY2xhc3NMaXN0LnRvZ2dsZShlKX0pfSx1LnByb3RvdHlwZS50cmlnZ2VyPWZ1bmN0aW9uKHQpe3ZhciBvPXRoaXMuc2xpY2UoYXJndW1lbnRzKS5zbGljZSgxKTtyZXR1cm4gdGhpcy5lYWNoYXJnKHQsZnVuY3Rpb24odCxlKXt2YXIgbixyPXtidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsZGV0YWlsOm99O3RyeXtuPW5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoZSxyKX1jYXRjaCh0KXsobj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpKS5pbml0Q3VzdG9tRXZlbnQoZSwhMCwhMCxvKX10LmRpc3BhdGNoRXZlbnQobil9KX0sdS5wcm90b3R5cGUudW5pcXVlPWZ1bmN0aW9uKCl7cmV0dXJuIHUodGhpcy5ub2Rlcy5yZWR1Y2UoZnVuY3Rpb24odCxlKXtyZXR1cm4gbnVsbCE9ZSYmITEhPT1lJiYtMT09PXQuaW5kZXhPZihlKT90LmNvbmNhdChlKTp0fSxbXSkpfSx1LnByb3RvdHlwZS51cmk9ZnVuY3Rpb24odCl7cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh0KS5yZXBsYWNlKC8hL2csXCIlMjFcIikucmVwbGFjZSgvJy9nLFwiJTI3XCIpLnJlcGxhY2UoL1xcKC9nLFwiJTI4XCIpLnJlcGxhY2UoL1xcKS9nLFwiJTI5XCIpLnJlcGxhY2UoL1xcKi9nLFwiJTJBXCIpLnJlcGxhY2UoLyUyMC9nLFwiK1wiKX0sdS5wcm90b3R5cGUud3JhcD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHUodCkuZWFjaChmdW5jdGlvbih0KXshZnVuY3Rpb24odCl7Zm9yKDt0LmZpcnN0RWxlbWVudENoaWxkOyl0PXQuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIHUodCl9KHQpLmFwcGVuZChlLmNsb25lTm9kZSghMCkpLGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodCxlKX0pfSl9LFwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzJiYobW9kdWxlLmV4cG9ydHM9dSxtb2R1bGUuZXhwb3J0cy51PXUpOyIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsIi8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjguMCAtIFR1ZSBBcHIgMjAgMjAyMSAxMToyNzozOCAqL1xuLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cbi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cInVzZSBzdHJpY3RcIjtcblxuaWYgKHR5cGVvZiBicm93c2VyID09PSBcInVuZGVmaW5lZFwiIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihicm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcbiAgY29uc3QgU0VORF9SRVNQT05TRV9ERVBSRUNBVElPTl9XQVJOSU5HID0gXCJSZXR1cm5pbmcgYSBQcm9taXNlIGlzIHRoZSBwcmVmZXJyZWQgd2F5IHRvIHNlbmQgYSByZXBseSBmcm9tIGFuIG9uTWVzc2FnZS9vbk1lc3NhZ2VFeHRlcm5hbCBsaXN0ZW5lciwgYXMgdGhlIHNlbmRSZXNwb25zZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgc3BlY3MgKFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL01vemlsbGEvQWRkLW9ucy9XZWJFeHRlbnNpb25zL0FQSS9ydW50aW1lL29uTWVzc2FnZSlcIjtcblxuICAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXG4gIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXG4gIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxuICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXCJpbmNsdWRlXCIgd2l0aCB0aGUgY29udGVudCBvZiB0aGVcbiAgICAvLyBKU09OIGZpbGUuXG4gICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XG4gICAgICBcImFsYXJtc1wiOiB7XG4gICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiY2xlYXJBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYm9va21hcmtzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldENoaWxkcmVuXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRTdWJUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlVHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgXCJkaXNhYmxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJicm93c2luZ0RhdGFcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDYWNoZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDb29raWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVGb3JtRGF0YVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVIaXN0b3J5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQYXNzd29yZHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlUGx1Z2luRGF0YVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29tbWFuZHNcIjoge1xuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29udGV4dE1lbnVzXCI6IHtcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29va2llc1wiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxDb29raWVTdG9yZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGV2dG9vbHNcIjoge1xuICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgXCJldmFsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBhbmVsc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbGVtZW50c1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZVNpZGViYXJQYW5lXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVGaWxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImV4dGVuc2lvblwiOiB7XG4gICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFZpc2l0c1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImkxOG5cIjoge1xuICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1bmluc3RhbGxTZWxmXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFBlcm1pc3Npb25MZXZlbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBhZ2VBY3Rpb25cIjoge1xuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImhpZGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGxhdGZvcm1JbmZvXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRSZWNlbnRseUNsb3NlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzdG9yYWdlXCI6IHtcbiAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzeW5jXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgXCJjYXB0dXJlVmlzaWJsZVRhYlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzY2FyZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ29Gb3J3YXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImhpZ2hsaWdodFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJxdWVyeVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRvcFNpdGVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndlYk5hdmlnYXRpb25cIjoge1xuICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRMYXN0Rm9jdXNlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcGktbWV0YWRhdGEuanNvbiBoYXMgbm90IGJlZW4gaW5jbHVkZWQgaW4gYnJvd3Nlci1wb2x5ZmlsbFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAqIG5vdCBleGlzdCB3aGVuIGFjY2Vzc2VkLCBidXQgYmVoYXZlcyBleGFjdGx5IGFzIGFuIG9yZGluYXJ5IFdlYWtNYXBcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVJdGVtXG4gICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbiByZWNlaXZlcywgYXMgaXRzIG9ubHkgYXJndW1lbnQsIHRoZSBrZXkgYmVpbmcgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgfVxuXG4gICAgICBnZXQoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAqIHRoZXJlZm9yZSBiZSBhc3N1bWVkIHRvIGJlaGF2ZSBhcyBhIFByb21pc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB0aGVuYWJsZS5cbiAgICAgKi9cbiAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgKlxuICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICogICAgICAgIHByb21pc2UuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8XG4gICAgICAgICAgICAgICAgICAgKGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpKSB7XG4gICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJnc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IChudW1BcmdzKSA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIGEgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIG1ldGFkYXRhLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiAgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB3aGljaCBpcyBiZWluZyB3cmFwcGVkLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5taW5BcmdzXG4gICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBBc3luY0Z1bmN0aW9uID0gKG5hbWUsIG1ldGFkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7cmVzb2x2ZSwgcmVqZWN0fSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuXG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcblxuICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG4gICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7cmVzb2x2ZSwgcmVqZWN0fSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgKiBhcyBpdHMgZmlyc3QgYXJndW1lbnQsIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YCBvYmplY3QsIGZvbGxvd2VkIGJ5IGVhY2ggb2ZcbiAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAqICAgICAgICBUaGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgdGFyZ2V0IG9mIHRoZSBQcm94eVxuICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAqICAgICAgICBUaGUgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgYSBkaXJlY3QgaW52b2NhdGlvblxuICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJveHk8ZnVuY3Rpb24+fVxuICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsZXQgaGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gcHJlc2VudCBpbiB0aGlzIG9iamVjdCB0cmVlIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiB0aGVcbiAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgKiAgICAgICAgUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYXN5bmNocm9ub3VzLiBBbnkgZnVuY3Rpb24gaW5cbiAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAqICAgICAgICBhdXRvbWF0aWNhbGx5LWdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLCBhcyBkZXNjcmliZWQgaW5cbiAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn1cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwT2JqZWN0ID0gKHRhcmdldCwgd3JhcHBlcnMgPSB7fSwgbWV0YWRhdGEgPSB7fSkgPT4ge1xuICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgaGFzKHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cbiAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fFxuICAgICAgICAgICAgICAgICAgICAgIGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgd2UgbmVlZCB0byBkbyBzb21lIHdyYXBwaW5nIGZvciB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtcIipcIl0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgIC8vIHNvIGp1c3QgZm9yd2FyZCBhbGwgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcImdldFwiIHByb3h5IGhhbmRsZXIgbXVzdCByZXR1cm4gdGhlXG4gICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAvLyBwcm90b3R5cGUgc2V0IHRvIGB0YXJnZXRgIGluc3RlYWQgb2YgdXNpbmcgYHRhcmdldGAgZGlyZWN0bHkuXG4gICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAvLyBkZXJlZmVyZW5jZWQgdmlhIHRoZSBvcmlnaW5hbCB0YXJnZXRzLlxuICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShwcm94eVRhcmdldCwgaGFuZGxlcnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgKiB3cmFwcGluZyBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdGhhdCB0aG9zZSBtZXNzYWdlcyBhcmUgcGFzc2VkLlxuICAgICAqXG4gICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgKiBtYXAuIFN1YnNlcXVlbnQgY2FsbHMgdG8gYGFkZExpc3RlbmVyYCwgYGhhc0xpc3RlbmVyYCwgb3IgYHJlbW92ZUxpc3RlbmVyYFxuICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAqICAgICAgICBmb3IgYSBnaXZlbiBsaXN0ZW5lciBmdW5jdGlvbiB3aGVuIG9uZSBkb2VzIG5vdCBleGlzdCwgYW5kIHJldHJpZXZlXG4gICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICB9LFxuXG4gICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3Qgb25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIG9uUmVxdWVzdEZpbmlzaGVkIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gYVxuICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgKiBjYWxsYmFjayBBUEkuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICogICAgICAgIFRoZSBIQVIgZW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbmV0d29yayByZXF1ZXN0LlxuICAgICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gb25SZXF1ZXN0RmluaXNoZWQocmVxKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge30gLyogd3JhcHBlcnMgKi8sIHtcbiAgICAgICAgICBnZXRDb250ZW50OiB7XG4gICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgbWF4QXJnczogMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgLy8gS2VlcCB0cmFjayBpZiB0aGUgZGVwcmVjYXRpb24gd2FybmluZyBoYXMgYmVlbiBsb2dnZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBsZXQgbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGEgbWVzc2FnZSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IG1heSBzZW5kIHJlc3BvbnNlcyBiYXNlZCBvblxuICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgKiBzZW50IHdoZW4gdGhlIHByb21pc2UgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgKiAgICAgICAgVGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgb3RoZXIgZW5kIG9mIHRoZSBjaGFubmVsLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IHNlbmRSZXNwb25zZVxuICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAoIWxvZ2dlZFNlbmRSZXNwb25zZURlcHJlY2F0aW9uV2FybmluZykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oU0VORF9SRVNQT05TRV9ERVBSRUNBVElPTl9XQVJOSU5HLCBuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgICAgICAgICAgIGxvZ2dlZFNlbmRSZXNwb25zZURlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCB3cmFwcGVkU2VuZFJlc3BvbnNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpO1xuXG4gICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxuICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAvLyBwcm9taXNlKS5cbiAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gKHByb21pc2UpID0+IHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXG4gICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcbiAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgb25NZXNzYWdlIHJlamVjdGVkIHJlcGx5XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgLy8gY2FsbGJhY2sgdG8gcmVzb2x2ZSBhbmQgc2VuZCBpdCBhcyBhIHJlc3BvbnNlLlxuICAgICAgICBpZiAoaXNSZXN1bHRUaGVuYWJsZSkge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChzZW5kUmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoe3JlamVjdCwgcmVzb2x2ZX0sIHJlcGx5KSA9PiB7XG4gICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAvLyB0aGUgcHJvbWlzZSB0byB1bmRlZmluZWQgYXMgaW4gRmlyZWZveC5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXBseSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtyZXNvbHZlLCByZWplY3R9KTtcbiAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XG4gICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgIGRldnRvb2xzOiB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDN9KSxcbiAgICAgIH0sXG4gICAgICB0YWJzOiB7XG4gICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHttaW5BcmdzOiAyLCBtYXhBcmdzOiAzfSksXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgY2xlYXI6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICAgIGdldDoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgICAgc2V0OiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgfTtcbiAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgbmV0d29yazoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgICAgc2VydmljZXM6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICAgIHdlYnNpdGVzOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgfTtcblxuICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiBjaHJvbWUgIT0gXCJvYmplY3RcIiB8fCAhY2hyb21lIHx8ICFjaHJvbWUucnVudGltZSB8fCAhY2hyb21lLnJ1bnRpbWUuaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG4gIH1cblxuICAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gIC8vIGBtb2R1bGVgIHZhcmlhYmxlIGF2YWlsYWJsZS5cbiAgbW9kdWxlLmV4cG9ydHMgPSB3cmFwQVBJcyhjaHJvbWUpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBicm93c2VyO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yIHtcclxuICAjaW5kZXggPSAtMTtcclxuICAjbWF4TGVuZ3RoOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1heExlbmd0aDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLiNtYXhMZW5ndGggPSBtYXhMZW5ndGg7XHJcbiAgfVxyXG5cclxuICBuZXh0KCkge1xyXG4gICAgaWYgKHRoaXMuI2luZGV4IDwgdGhpcy4jbWF4TGVuZ3RoIC0gMSkge1xyXG4gICAgICB0aGlzLiNpbmRleCsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy4jaW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLiNpbmRleDtcclxuICB9XHJcblxyXG4gIHByZXYoKSB7XHJcbiAgICBpZiAodGhpcy4jaW5kZXggPiAwKSB7XHJcbiAgICAgIHRoaXMuI2luZGV4LS07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLiNpbmRleCA9IHRoaXMuI21heExlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuI2luZGV4O1xyXG4gIH1cclxuXHJcbiAganVtcFRvKGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmIChpbmRleCA8IHRoaXMuI21heExlbmd0aCAmJiBpbmRleCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuI2luZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuI2luZGV4O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGluZGV4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2luZGV4O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiYnJvd3NlciIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFIiwiU0VORF9SRVNQT05TRV9ERVBSRUNBVElPTl9XQVJOSU5HIiwid3JhcEFQSXMiLCJleHRlbnNpb25BUElzIiwiYXBpTWV0YWRhdGEiLCJrZXlzIiwibGVuZ3RoIiwiRXJyb3IiLCJEZWZhdWx0V2Vha01hcCIsIldlYWtNYXAiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZUl0ZW0iLCJpdGVtcyIsInVuZGVmaW5lZCIsImdldCIsImtleSIsImhhcyIsInNldCIsImlzVGhlbmFibGUiLCJ2YWx1ZSIsInRoZW4iLCJtYWtlQ2FsbGJhY2siLCJwcm9taXNlIiwibWV0YWRhdGEiLCJjYWxsYmFja0FyZ3MiLCJydW50aW1lIiwibGFzdEVycm9yIiwicmVqZWN0IiwibWVzc2FnZSIsInNpbmdsZUNhbGxiYWNrQXJnIiwicmVzb2x2ZSIsInBsdXJhbGl6ZUFyZ3VtZW50cyIsIm51bUFyZ3MiLCJ3cmFwQXN5bmNGdW5jdGlvbiIsIm5hbWUiLCJhc3luY0Z1bmN0aW9uV3JhcHBlciIsInRhcmdldCIsImFyZ3MiLCJtaW5BcmdzIiwibWF4QXJncyIsIlByb21pc2UiLCJmYWxsYmFja1RvTm9DYWxsYmFjayIsImNiRXJyb3IiLCJjb25zb2xlIiwid2FybiIsIm5vQ2FsbGJhY2siLCJ3cmFwTWV0aG9kIiwibWV0aG9kIiwid3JhcHBlciIsIlByb3h5IiwiYXBwbHkiLCJ0YXJnZXRNZXRob2QiLCJ0aGlzT2JqIiwiY2FsbCIsImhhc093blByb3BlcnR5IiwiRnVuY3Rpb24iLCJiaW5kIiwid3JhcE9iamVjdCIsIndyYXBwZXJzIiwiY2FjaGUiLCJjcmVhdGUiLCJoYW5kbGVycyIsInByb3h5VGFyZ2V0IiwicHJvcCIsInJlY2VpdmVyIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZGVzYyIsIlJlZmxlY3QiLCJkZWxldGVQcm9wZXJ0eSIsIndyYXBFdmVudCIsIndyYXBwZXJNYXAiLCJhZGRMaXN0ZW5lciIsImxpc3RlbmVyIiwiaGFzTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIm9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMiLCJvblJlcXVlc3RGaW5pc2hlZCIsInJlcSIsIndyYXBwZWRSZXEiLCJnZXRDb250ZW50IiwibG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nIiwib25NZXNzYWdlV3JhcHBlcnMiLCJvbk1lc3NhZ2UiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJkaWRDYWxsU2VuZFJlc3BvbnNlIiwid3JhcHBlZFNlbmRSZXNwb25zZSIsInNlbmRSZXNwb25zZVByb21pc2UiLCJyZXNwb25zZSIsInN0YWNrIiwicmVzdWx0IiwiZXJyIiwiaXNSZXN1bHRUaGVuYWJsZSIsInNlbmRQcm9taXNlZFJlc3VsdCIsIm1zZyIsImVycm9yIiwiX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fIiwiY2F0Y2giLCJ3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayIsInJlcGx5Iiwid3JhcHBlZFNlbmRNZXNzYWdlIiwiYXBpTmFtZXNwYWNlT2JqIiwid3JhcHBlZENiIiwicHVzaCIsInNlbmRNZXNzYWdlIiwic3RhdGljV3JhcHBlcnMiLCJkZXZ0b29scyIsIm5ldHdvcmsiLCJvbk1lc3NhZ2VFeHRlcm5hbCIsInRhYnMiLCJzZXR0aW5nTWV0YWRhdGEiLCJjbGVhciIsInByaXZhY3kiLCJzZXJ2aWNlcyIsIndlYnNpdGVzIiwiY2hyb21lIiwiaWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInZlcnNpb24iOjMsImZpbGUiOiJpbmRleC5qcy5tYXAifQ==
