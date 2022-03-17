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
    var key;
    if (!defaultShortcuts) return;
    let command;
    for(const prop in defaultShortcuts){
        const shortcut = defaultShortcuts[prop];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsTUFBTSxDQUFDLENBQUM7UUFBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUFHLENBQUM7UUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSTtZQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQUUsTUFBTSxDQUFDLElBQUk7UUFBRSxDQUFDO1FBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFBQyxNQUFNLEdBQUcsSUFBSTtZQUFFLEdBQUcsR0FBRyxHQUFHO1FBQUUsQ0FBQztRQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBQyxHQUFHLENBQUMsQ0FBQztnQkFBQyxFQUFFLEdBQUcsZ0JBQWdCLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07WUFBSSxDQUFDLFFBQVMsQ0FBQztnQkFBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQUUsQ0FBQztRQUFDLENBQUM7SUFBQyxDQUFDO0FBQUUsQ0FBQztTQUU3OUIsMkJBQTJCLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxNQUFNO0lBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBUSxTQUFFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsTUFBTTtJQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFBRyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQVEsV0FBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUk7SUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUssUUFBSSxDQUFDLEtBQUssQ0FBSyxNQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFBRyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQVcseURBQStDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxNQUFNO0FBQUcsQ0FBQztTQUV2WixpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU07SUFBRSxHQUFHLENBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFNLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFBSyxNQUFNLENBQUMsSUFBSTtBQUFFLENBQUM7QUFFdkwsRUFBeUQsQUFBekQscURBQXlELEFBQXpELEVBQXlELENBRXpELEVBZ0NFLEFBaENGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDRSxBQWhDRixFQWdDRSxDQUNGLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBNEI7QUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07U0FFM0IsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNCLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVU7SUFDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ1YsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTztRQUMzQixnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDcEIsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLFFBQVEsR0FBSSxDQUFDO1lBQUEsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUztBQUNuQyxDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTTtBQUM3QixHQUFHLENBQUMsYUFBYSxFQUVmLGNBQWMsRUFFZCxjQUFjO1NBSVAsV0FBVyxHQUFHLENBQUM7SUFDdEIsTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFNLFdBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBVztBQUMvRixDQUFDO1NBRVEsT0FBTyxHQUFHLENBQUM7SUFDbEIsTUFBTSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSTtBQUNsQyxDQUFDLEFBQUMsQ0FBd0MsQUFBeEMsRUFBd0MsQUFBeEMsc0NBQXdDO0FBRzFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNO0FBRWpDLEVBQUUsSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLGVBQWUsS0FBSyxNQUFNLENBQUMsU0FBUyxLQUFLLENBQVcsWUFBRSxDQUFDO0lBQzdFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsV0FBVztJQUMxQixHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU87SUFDbEIsR0FBRyxDQUFDLFFBQVEsR0FBRyxVQUFVLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxDQUFRLDBDQUFtQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUssT0FBRyxDQUFJO0lBQzFILEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBSyxPQUFHLFFBQVEsSUFBSSxJQUFJLEdBQUcsQ0FBRyxLQUFHLElBQUksR0FBRyxDQUFFLEtBQUksQ0FBRyxJQUFHLENBQWEsQUFBYixFQUFhLEFBQWIsV0FBYTtJQUVuRyxFQUFFLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBRSxLQUFLLEVBRTVCLENBQUM7UUFDRCxhQUFhLEdBQUcsQ0FBQztRQUFBLENBQUM7UUFHbEIsY0FBYyxHQUFHLENBQUM7UUFBQSxDQUFDO1FBR25CLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsR0FBRyxDQUFDLElBQUksR0FFTixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJO1FBRXZCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQVEsU0FBRSxDQUFDO1lBQzNCLEVBQXVDLEFBQXZDLHFDQUF1QztZQUN2QyxFQUFFLEVBQUUsTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFXLFlBQ2pDLGtCQUFrQjtZQUdwQixHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBRSxLQUFLLEVBQUUsQ0FBQztnQkFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssWUFBWTtZQUN2QyxDQUFDLEVBQUcsQ0FBb0IsQUFBcEIsRUFBb0IsQUFBcEIsa0JBQW9CO1lBRXhCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUUsS0FBSyxFQUFFLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUssUUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUksT0FBSSxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsWUFBWTtZQUN2SCxDQUFDO1lBRUQsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUNaLE9BQU8sQ0FBQyxLQUFLO2dCQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFFLEtBQUssRUFBRSxDQUFDO29CQUMvQixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSztnQkFDcEMsQ0FBQztnQkFFRCxHQUFHLENBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFJLENBQUM7b0JBQy9DLEdBQUcsQ0FBQyxFQUFFLEdBQUcsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUU1QixFQUFFLEdBQUcsY0FBYyxDQUFDLEVBQUUsR0FDcEIsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7Z0JBRXpDLENBQUM7WUFDSCxDQUFDLE1BQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1FBRTFCLENBQUM7UUFFRCxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFPLFFBQUUsQ0FBQztZQUMxQixFQUErQixBQUEvQiw2QkFBK0I7WUFDL0IsR0FBRyxDQUFDLFNBQVMsR0FBRywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FDNUQsS0FBSztZQUVULEdBQUcsQ0FBQyxDQUFDO2dCQUNILEdBQUcsQ0FBRSxTQUFTLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRyxDQUFDO29CQUNuRCxHQUFHLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxLQUFLO29CQUNoQyxHQUFHLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsS0FBSztvQkFDdEYsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFjLG1CQUFNLGNBQWMsQ0FBQyxPQUFPLEdBQUcsQ0FBSSxNQUFHLEtBQUssR0FBRyxDQUFNLFFBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBSTtnQkFDaEgsQ0FBRjtZQUNILENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ2IsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ2pCLENBQUMsUUFBUyxDQUFDO2dCQUNULFNBQVMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQztZQUVELEVBQUUsRUFBRSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQVcsWUFBRSxDQUFDO2dCQUNwQyxFQUFnQyxBQUFoQyw4QkFBZ0M7Z0JBQ2hDLGtCQUFrQjtnQkFDbEIsR0FBRyxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRyxDQUFhLEFBQWIsRUFBYSxBQUFiLFdBQWE7Z0JBRXRFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU87WUFDbkMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsRUFBRSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTztJQUN6QixDQUFDO0lBRUQsRUFBRSxDQUFDLE9BQU8sR0FBRyxRQUFRLEdBQUksQ0FBQztRQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQWtEO0lBQzlELENBQUY7QUFDSCxDQUFDO1NBRVEsa0JBQWtCLEdBQUcsQ0FBQztJQUM3QixHQUFHLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVTtJQUVoRCxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDWixPQUFPLENBQUMsTUFBTTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBMkI7SUFDdkMsQ0FBRDtBQUNILENBQUM7U0FFUSxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QyxHQUFHLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBSztJQUMxQyxPQUFPLENBQUMsRUFBRSxHQUFHLFVBQVU7SUFDdkIsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUF3TjtJQUV4TyxHQUFHLENBQUMsVUFBVSxHQUFHLDBCQUEwQixDQUFDLFdBQVcsR0FDbkQsTUFBTTtJQUVWLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsR0FBRyxDQUFFLFVBQVUsQ0FBQyxDQUFDLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFHLENBQUM7WUFDdEQsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSztZQUM3QixHQUFHLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSztZQUMxRSxTQUFTLElBQUksQ0FBdUgsdUhBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBaUMsa0NBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFtQyxvQ0FBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFFLElBQUksRUFBRSxDQUFDO2dCQUNqUyxNQUFNLENBQUMsQ0FBUyxjQUFHLElBQUksR0FBRyxDQUFRO1lBQ3BDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBRSxJQUFHLENBQTRCLDZCQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLENBQXNELHNEQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQTJDLDhDQUFJLENBQUUsR0FBRSxDQUFzQjtRQUNoUCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRztJQUNsQixDQUFDLFFBQVMsQ0FBQztRQUNULFVBQVUsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELFNBQVMsSUFBSSxDQUFRO0lBQ3JCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUztJQUM3QixNQUFNLENBQUMsT0FBTztBQUNoQixDQUFDO1NBRVEsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQzlCLEVBQXFDLEFBQXJDLGlDQUFxQyxBQUFyQyxFQUFxQyxDQUNyQyxDQUFDO0lBQ0MsR0FBRyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztJQUU1QixFQUFFLEdBQUcsT0FBTyxFQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFHWCxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNoQixHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBRWIsR0FBRyxDQUFFLENBQUMsSUFBSSxPQUFPLENBQ2YsR0FBRyxDQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRyxDQUFDO1FBQ3hCLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRXJCLEVBQUUsRUFBRSxHQUFHLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQ2hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFBLE1BQU07WUFBRSxDQUFDO1FBQUEsQ0FBQztJQUU1QixDQUFDO0lBR0gsRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQ2YsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtJQUd2RCxNQUFNLENBQUMsT0FBTztBQUNoQixDQUFDO1NBRVEsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVM7SUFFNUIsT0FBTyxDQUFDLE1BQU0sR0FBRyxRQUFRLEdBQUksQ0FBQztRQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQzFCLEVBQWEsQUFBYixXQUFhO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSTtJQUVwQyxDQUFDO0lBRUQsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFNLE9BQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBTSxPQUFFLEtBQUssQ0FBQyxDQUFHLElBQUUsQ0FBQyxJQUFJLENBQUcsS0FBRyxJQUFJLENBQUMsR0FBRyxJQUFLLENBQWEsQUFBYixFQUFhLEFBQWIsV0FBYTtJQUUxRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVc7QUFDeEQsQ0FBQztBQUVELEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSTtTQUVaLFNBQVMsR0FBRyxDQUFDO0lBQ3BCLEVBQUUsRUFBRSxVQUFVLEVBQ1osTUFBTTtJQUdSLFVBQVUsR0FBRyxVQUFVLENBQUMsUUFBUSxHQUFJLENBQUM7UUFDbkMsR0FBRyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBd0I7UUFFOUQsR0FBRyxDQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBSSxDQUFDO1lBQ3RDLEVBQWdDLEFBQWhDLDhCQUFnQztZQUNoQyxHQUFHLENBQUMsSUFBSSxHQUVOLEtBQUssQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQU07WUFDOUIsR0FBRyxDQUFDLFFBQVEsR0FBRyxXQUFXO1lBQzFCLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLEtBQUssQ0FBVyxhQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBZ0Qsa0RBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBRyxLQUFHLE9BQU87WUFDaEwsR0FBRyxDQUFDLFFBQVEsbUJBQW1CLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sTUFBTSxDQUFDLEtBQUssbUJBQW1CO1lBRS9HLEVBQUUsR0FBRyxRQUFRLEVBQ1gsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRCLENBQUM7UUFFRCxVQUFVLEdBQUcsSUFBSTtJQUNuQixDQUFDLEVBQUUsRUFBRTtBQUNQLENBQUM7U0FFUSxRQUFRLENBQUMsTUFBTSxFQUV0QixLQUFLLEVBRUwsQ0FBQztJQUNELEdBQUcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87SUFFNUIsRUFBRSxHQUFHLE9BQU8sRUFDVixNQUFNO0lBR1IsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBSyxNQUN0QixTQUFTO1NBQ0osRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBSSxLQUFFLENBQUM7UUFDL0IsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhO1FBRWxELEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUNULEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDO2dCQUN0QixFQUFpRSxBQUFqRSwrREFBaUU7Z0JBQ2pFLEVBQW9ILEFBQXBILGtIQUFvSDtnQkFDcEgsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUVqQyxHQUFHLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQ3JCLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUM3QyxHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHO29CQUNwQixHQUFHLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFO29CQUUvQyxFQUFFLEVBQUUsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQ3RCLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUVwQyxDQUFDO1lBRUwsQ0FBQztZQUVELEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFTLFVBQUUsQ0FBUSxTQUFFLENBQVMsVUFBRSxLQUFLLENBQUMsTUFBTTtZQUNsRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDO2dCQUFBLEVBQUU7Z0JBQUUsSUFBSTtZQUFBLENBQUM7UUFDaEMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUN0QixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLO0lBRWpDLENBQUM7QUFDSCxDQUFDO1NBRVEsU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFFLEVBQUUsQ0FBQztJQUM5QixHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO0lBRTVCLEVBQUUsR0FBRyxPQUFPLEVBQ1YsTUFBTTtJQUdSLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRSxHQUFHLENBQUM7UUFDaEIsRUFBOEUsQUFBOUUsNEVBQThFO1FBQzlFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUUsRUFBRSxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLEdBQUcsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBRSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHO1lBRXJELEVBQUUsRUFBRSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztRQUV6QixDQUFDLEFBQUMsQ0FBc0csQUFBdEcsRUFBc0csQUFBdEcsb0dBQXNHO1FBR3hHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRTtRQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFFLEVBQUcsQ0FBMEIsQUFBMUIsRUFBMEIsQUFBMUIsd0JBQTBCO1FBRW5ELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFFLEVBQUUsRUFBRSxDQUFDO1lBQzdCLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2xDLENBQUM7SUFDSCxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQ3RCLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUU7QUFFL0IsQ0FBQztTQUVRLGNBQWMsQ0FBQyxNQUFNLEVBRTVCLEVBQUUsRUFFRixZQUFZLEVBRVosQ0FBQztJQUNELEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLFlBQVksR0FDNUMsTUFBTSxDQUFDLElBQUk7SUFDWCxDQUF1RyxBQUF2RyxFQUF1RyxBQUF2RyxxR0FBdUc7SUFHekcsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRTtJQUMvQyxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUs7VUFFYixPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUs7UUFDckIsR0FBRyxDQUFDLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSTtRQUUxQyxFQUFFLEVBQUUsQ0FBQyxFQUNILEVBQStFLEFBQS9FLDZFQUErRTtRQUMvRSxRQUFRLEdBQUcsSUFBSTthQUNWLENBQUM7WUFDTixFQUF5RCxBQUF6RCx1REFBeUQ7WUFDekQsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFMUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ25CLEVBQWtGLEFBQWxGLGdGQUFrRjtnQkFDbEYsUUFBUSxHQUFHLEtBQUs7Z0JBQ2hCLEtBQUs7WUFDUCxDQUFDO1lBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUTtBQUNqQixDQUFDO1NBRVEsaUJBQWlCLENBQUMsTUFBTSxFQUUvQixFQUFFLEVBRUYsWUFBWSxFQUVaLENBQUM7SUFDRCxHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO0lBRTVCLEVBQUUsR0FBRyxPQUFPLEVBQ1YsTUFBTTtJQUdSLEVBQUUsRUFBRSxZQUFZLEtBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQztRQUN4RCxFQUEyRSxBQUEzRSx5RUFBMkU7UUFDM0UsRUFBeUUsQUFBekUsdUVBQXlFO1FBQ3pFLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUNoQixNQUFNLENBQUMsSUFBSTtRQUdiLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsWUFBWTtJQUN2RCxDQUFDO0lBRUQsRUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQ2xCLE1BQU0sQ0FBQyxJQUFJO0lBR2IsYUFBYSxDQUFDLEVBQUUsSUFBSSxJQUFJO0lBQ3hCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQzVCLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUFBLE1BQU07UUFBRSxFQUFFO0lBQUEsQ0FBQztJQUVoQyxFQUFFLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQzdELE1BQU0sQ0FBQyxJQUFJO0FBRWYsQ0FBQztTQUVRLFlBQVksQ0FBQyxNQUFNLEVBRTFCLEVBQUUsRUFFRixDQUFDO0lBQ0QsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDNUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDO0lBQUEsQ0FBQztJQUVuQixFQUFFLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPO0lBR2xDLEVBQUUsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFDN0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTztJQUNuQixDQUFDO0lBR0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtJQUN0QixNQUFNLENBQUMsRUFBRTtJQUNULE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFFeEIsRUFBRSxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUM1RCxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUUsRUFBRSxFQUFFLENBQUM7UUFDakQsR0FBRyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxRQUFRLEdBQUksQ0FBQztZQUN2QyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDMUMsQ0FBQztRQUVELEVBQUUsRUFBRSxrQkFBa0IsSUFBSSxjQUFjLENBQUMsTUFBTSxFQUM3QyxFQUErQixBQUEvQiw2QkFBK0I7UUFDL0IsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGtCQUFrQjtJQUVoRSxDQUFDO0lBR0gsY0FBYyxDQUFDLEVBQUUsSUFBSSxJQUFJO0FBQzNCLENBQUM7Ozs7QUN4ZEQsR0FBTTs7QUFDTixHQUFNOztBQUNOLEdBQU07O0FBRU4sS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUM7SUFDeEIsQ0FBcUIsc0JBQUUsQ0FBQztRQUFBLENBQUc7UUFBRSxDQUFHO1FBQUUsQ0FBRztRQUFFLENBQUc7UUFBRSxDQUFHO1FBQUUsQ0FBRztRQUFFLENBQUc7UUFBRSxDQUFHO1FBQUUsQ0FBRztRQUFFLENBQUc7SUFBQSxDQUFDO0lBQ3pFLE1BQU0sRUFBRSxDQUFDO1FBQ1AsT0FBTyxFQUFFLEtBQUs7UUFDZCxRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxFQUFFLEtBQUs7UUFDZCxHQUFHLEVBQUUsQ0FBRztJQUNWLENBQUM7SUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNULE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sRUFBRSxLQUFLO1FBQ2QsR0FBRyxFQUFFLENBQUc7SUFDVixDQUFDO0lBQ0QsQ0FBcUIsc0JBQUUsQ0FBQztRQUN0QixPQUFPLEVBQUUsS0FBSztRQUNkLFFBQVEsRUFBRSxLQUFLO1FBQ2YsTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPLEVBQUUsS0FBSztRQUNkLEdBQUcsRUFBRSxDQUFPO0lBQ2QsQ0FBQztJQUNELENBQXFDLHNDQUFFLENBQUM7UUFDdEMsT0FBTyxFQUFFLElBQUk7UUFDYixRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxFQUFFLEtBQUs7UUFDZCxHQUFHLEVBQUUsQ0FBTztJQUNkLENBQUM7SUFDRCxDQUEyQiw0QkFBRSxDQUFDO1FBQzVCLE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sRUFBRSxLQUFLO1FBQ2QsR0FBRyxFQUFFLENBQU87SUFDZCxDQUFDO0FBQ0gsQ0FBQztBQUVELEdBQUcsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCO0FBT2hDLEtBQUssQ0FBQyxRQUFRLEdBQWMsQ0FBQyxDQUFDO0FBRTlCLEVBQVUsQUFBVixRQUFVOzJCQUNSLENBQUssTUFDSixNQUFNLENBQUMsUUFBUSxDQUFFLElBQUksRUFBRSxDQUFDO0lBQ3ZCLE1BQU0sNEJBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFtQix3QkFBTSxJQUFJO0FBQ25ELENBQUMsRUFDQSxJQUFJLENBQUMsUUFBUSxDQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN4QixHQUFHLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFxQixzQkFBRSxDQUFDO0lBQzVDLEVBQUUsR0FBRyxHQUFHLEVBQ04sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUcsUUFBTSxDQUFHOytCQUU3QixJQUFJLEVBQUUsTUFBTSxDQUFDLENBQW1CLHFCQUFHLEdBQUcsR0FBRyxDQUFRO0lBQ25ELEtBQUssQ0FBQyxPQUFPLDhCQUFLLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBNEIsNkJBQUUsS0FBSztJQUNoRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFBQyxFQUFFLEVBQUUsT0FBTztRQUFFLElBQUksNkJBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFHLElBQUUsSUFBSSxDQUFDLENBQU07SUFBRSxDQUFDO0FBQ3JFLENBQUM7QUFFSCxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsd0JBQVEsUUFBUSxDQUFDLE1BQU07QUFFekMsRUFBaUMsQUFBakMsK0JBQWlDOzJCQUMvQixDQUFNLE9BQUUsS0FBSyxDQUFDLENBQXNCO0FBQ3RDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFTLFVBQUUsTUFBTTtBQUMzQyxLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBSztTQUNoQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDbEIsR0FBRyxDQUFDLFdBQVcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUc7QUFDOUIsQ0FBQztBQUVELEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQztJQUFBLENBQVM7SUFBRSxDQUFVO0lBQUUsQ0FBUTtJQUFFLENBQVM7QUFBQSxDQUFDO0FBRWpFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFTLFdBQUcsQ0FBQyxHQUFLLENBQUM7SUFDM0MsRUFBRSxHQUFHLFNBQVMsRUFBRSxNQUFNO0lBRXRCLEVBQTZCLEFBQTdCLDJCQUE2QjtJQUM3QixFQUFFLEVBQUUsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLO09BQUcsQ0FBQztRQUM5QyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFxQixzQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUc7UUFDNUQsRUFBRSxFQUFFLEtBQUssS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDbkIsTUFBTTtZQUNOLE1BQU07UUFDUixDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLENBQUM7SUFDakMsTUFBTSxDQUFFLE9BQU87UUFDYixJQUFJLENBQUMsQ0FBUTtZQUNYLE1BQU0sQ0FBQyxJQUFJO1lBQ1gsTUFBTTtZQUNOLEtBQUs7UUFDUCxJQUFJLENBQUMsQ0FBVTtZQUNiLE1BQU0sQ0FBQyxJQUFJO1lBQ1gsTUFBTTtZQUNOLEtBQUs7UUFDUCxJQUFJLENBQUMsQ0FBcUI7WUFDeEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSTtZQUNsRCxNQUFNO1FBQ1IsSUFBSSxDQUFDLENBQXFDO2lEQUNoQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sRUFBRSxDQUFpQjtnQkFDMUIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUk7Z0JBQ2hDLE1BQU0sRUFBRSxLQUFLO1lBQ2YsQ0FBQztZQUNELEtBQUs7UUFDUCxJQUFJLENBQUMsQ0FBMkI7aURBQ3RCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxFQUFFLENBQWlCO2dCQUMxQixHQUFHLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSTtnQkFDaEMsTUFBTSxFQUFFLElBQUk7WUFDZCxDQUFDO1lBQ0QsS0FBSzs7WUFFTCxLQUFLOztBQUVYLENBQUM7QUFFRCxFQUErQixBQUEvQiw2QkFBK0I7U0FDdEIsTUFBTSxHQUFHLENBQUM7SUFDakIsS0FBSyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUs7SUFDckMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUFDLEtBQUssRUFBRSxDQUFRO0lBQUMsQ0FBQztJQUM3QyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUssQ0FBQztRQUMxQixFQUFFLEVBQUUsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxLQUFLLDZCQUNsQixDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFPO3dDQUV0QixDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFPO0lBRS9CLENBQUM7QUFDSCxDQUFDO3FDQUVPLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFBQyxTQUFTLEVBQUUsZ0JBQWdCO0FBQUMsQ0FBQyxFQUFFLElBQUksRUFDNUQsR0FBRyxHQUFLLENBQUM7SUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLENBQU8sUUFBRSxHQUFHO0lBQ3hCLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUztBQUMzQixDQUFDLEdBQ0EsR0FBRyxHQUFLLENBQUM7SUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLENBQVksYUFBRSxHQUFHO0FBQy9CLENBQUM7U0FHTSxlQUFlLENBQUMsQ0FBZ0IsRUFBRSxDQUFDO1FBR3FCLEdBQUc7SUFLbEUsRUFBRSxHQUFHLGdCQUFnQixFQUFFLE1BQU07SUFFN0IsR0FBRyxDQUFDLE9BQU87SUFDWCxHQUFHLENBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxnQkFBZ0IsQ0FBRSxDQUFDO1FBQ3BDLEtBQUssQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsSUFBSTtRQUN0QyxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsR0FBSyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHO1dBQUksQ0FBQztZQUNuRSxPQUFPLEdBQUcsSUFBSTtZQUNkLEtBQUs7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBVyxZQUFFLE9BQU87SUFFaEMsTUFBTSxDQUFDLE9BQU87QUFDaEIsQ0FBQzs7O0FDektKLEVBQXNDLEFBQXRDLGtDQUFzQyxBQUF0QyxFQUFzQyxDQUV0QyxHQUFHLENBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMsR0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFDLENBQUMsS0FBRyxDQUFDLEdBQUMsQ0FBUSxXQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFFLENBQUMsS0FBRyxDQUFDLENBQUMsUUFBUSxLQUFHLENBQUMsR0FBQyxDQUFDO1FBQUEsQ0FBQztJQUFBLENBQUMsR0FBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0FBQUMsQ0FBQztBQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsQ0FBQztRQUFJLE1BQU0sSUFBRSxDQUFDO1FBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtJQUFBLENBQUM7QUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUMsUUFBUSxHQUFFLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFBLENBQVEsV0FBRSxNQUFNLENBQUMsRUFBQyxLQUFHLEVBQUMsR0FBQyxDQUFDLEtBQUcsRUFBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQyxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBRyxJQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLE1BQU0sSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxHQUFHLENBQUMsRUFBQyxHQUFDLFFBQVEsQ0FBQyxzQkFBc0I7UUFBRyxDQUFDLENBQUMsRUFBQyxJQUFFLENBQUM7UUFBQSxDQUFDLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7WUFBQSxDQUFDLEdBQUMsQ0FBVSxhQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxJQUFFLENBQUM7WUFBQyxNQUFNLENBQUEsQ0FBUSxXQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUM7UUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFFLEVBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxNQUFJLEVBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQztJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUMsUUFBUSxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsV0FBVztJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsUUFBUSxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLEVBQUMsRUFBQyxHQUFDLENBQVEsV0FBRSxNQUFNLEVBQUMsRUFBQyxHQUFDLENBQVUsYUFBRSxNQUFNLENBQUMsRUFBQyxHQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFFLEVBQUMsSUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFHLEVBQUMsRUFBRSxRQUFRLEdBQUcsS0FBSyxXQUFXLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU07SUFBQSxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLEdBQUcsQ0FBQyxDQUFDLEdBQUMsSUFBSTtJQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLEdBQUcsQ0FBQyxDQUFDO1FBQUMsTUFBTSxDQUFDLENBQUMsSUFBRSxDQUFDLEdBQUMsQ0FBUSxXQUFFLE1BQU0sRUFBQyxDQUFDLElBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLE9BQUssQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxhQUFZLENBQUMsS0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssSUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBRyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztJQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsUUFBUSxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFPLFNBQUMsQ0FBRSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFDLENBQUM7SUFBQyxDQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBQyxDQUFDO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQyxFQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRO0lBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFDLFFBQVEsR0FBRSxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLEdBQUcsQ0FBQyxDQUFDLEdBQUMsRUFBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztZQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUFFLENBQUMsR0FBRSxDQUFDO0lBQUEsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQSxDQUFDO0lBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBRyxJQUFDLENBQUMsRUFBRSxLQUFLO0FBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLENBQUM7QUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxFQUFFLEVBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFFBQVE7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBUSxhQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEtBQUs7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFVLGVBQUksQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsS0FBSztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7V0FBRSxDQUFDO1lBQUEsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRSxNQUFNLENBQUMsQ0FBQztRQUFBLENBQUMsUUFBTyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBRyxDQUFDLEtBQUcsUUFBUTtJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUUsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUcsSUFBSTtBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxHQUFDLEVBQUMsQ0FBQztRQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxHQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUMsQ0FBQyxFQUFDLElBQUk7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFDLFFBQVEsR0FBRSxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsR0FBRyxHQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsR0FBRyxDQUFDLEdBQUMsR0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLE1BQU0sQ0FBQSxFQUFFLEtBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUFDLENBQUMsR0FBQyxDQUFVLGFBQUUsTUFBTSxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBRSxDQUFDLENBQUMsaUJBQWlCLElBQUUsQ0FBQyxDQUFDLHFCQUFxQixFQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFFLENBQUc7SUFBQyxDQUFDO0lBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFDO0FBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUcsSUFBQyxDQUFDO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxRQUFRLEdBQUUsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBSSxDQUFDO0FBQUEsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sZUFBYyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQU8sU0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBRyxRQUFRLEdBQUcsS0FBSyxxQkFBbUIsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFPLFNBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxRQUFRLEdBQUcsUUFBUSxHQUFHLFFBQVEsR0FBRyxLQUFLLFdBQVMsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFLLE9BQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxRQUFRLEdBQUcsS0FBSyxHQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxRQUFRLEdBQUUsQ0FBQztJQUFBLEdBQUcsQ0FBQyxHQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLE1BQU0sQ0FBQSxDQUFVLGFBQUUsTUFBTSxDQUFDLENBQUMsR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFBQSxDQUFDLENBQUMsY0FBYyxJQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLFNBQVM7UUFBQyxDQUFDLEdBQUMsQ0FBQztJQUFBLENBQUMsRUFBQyxJQUFJO0lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxHQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFDLFFBQVEsR0FBRSxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBRyxLQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFHO0FBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFHLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsSUFBRSxDQUFFLElBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxDQUFDLENBQUMsU0FBUyxHQUFDLENBQUM7SUFBQSxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTTtBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsQ0FBQyxLQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxRQUFRLEdBQUUsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxNQUFJLENBQUM7QUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsTUFBTSxLQUFHLElBQUk7QUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBRyxDQUFDO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBQyxRQUFRLENBQUMsR0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsQ0FBQztJQUFBLEdBQUcsQ0FBQyxDQUFDLEdBQUMsSUFBSSxJQUFFLEVBQUMsSUFBRSxJQUFJLElBQUUsRUFBQyxFQUFDLENBQUMsR0FBQyxJQUFJLEVBQUMsQ0FBQyxHQUFDLEVBQUM7SUFBQyxNQUFNLENBQUEsQ0FBUSxXQUFFLE1BQU0sQ0FBQyxFQUFDLEtBQUcsQ0FBQyxHQUFDLEVBQUMsRUFBQyxDQUFDLEdBQUMsRUFBQyxHQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBQyxFQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO2FBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxhQUFhLEtBQUcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUcsQ0FBQyxLQUFHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFFBQVE7UUFBQyxDQUFDO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxRQUFRLENBQUMsR0FBQyxFQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQzthQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxHQUFHLENBQUEsQ0FBQztZQUFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFDLENBQWUsZ0JBQUMsQ0FBQztnQkFBQSxLQUFLLEVBQUMsQ0FBQztnQkFBQyxZQUFZLEdBQUUsQ0FBQztZQUFBLENBQUM7UUFBQyxDQUFDLENBQUEsS0FBSyxFQUFDLEdBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQztJQUFBLENBQUM7SUFBQSxHQUFHLENBQUMsQ0FBQyxHQUFDLElBQUksRUFBQyxFQUFDLEdBQUMsRUFBQztJQUFDLENBQVEsV0FBRSxNQUFNLENBQUMsRUFBQyxLQUFHLENBQUMsR0FBQyxFQUFDLEVBQUMsRUFBQyxHQUFDLENBQUMsRUFBQyxFQUFDLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsR0FBRyxDQUFDLENBQUMsR0FBQyxTQUFTO1FBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQUEsR0FBRyxDQUFDLENBQUM7WUFBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLENBQUM7SUFBQyxDQUFDO2FBQVcsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsTUFBTSxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLENBQUM7WUFBQSxDQUFDO1FBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQztJQUFFLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUMsRUFBQyxHQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBRSxDQUFDO1FBQUEsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQUEsUUFBUSxFQUFDLEVBQUM7WUFBQyxhQUFhLEVBQUMsRUFBQztZQUFDLFFBQVEsRUFBQyxDQUFDO1FBQUEsQ0FBQztJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxHQUFDLEVBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsR0FBRyxDQUFDLEVBQUM7SUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBRyxHQUFDLEtBQUcsRUFBQyxHQUFDLENBQUMsR0FBRSxDQUFDLEdBQUMsQ0FBQztJQUFBLENBQUMsRUFBRSxFQUFDLElBQUUsR0FBQyxHQUFFLENBQVEsV0FBRSxNQUFNLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFVLGFBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxLQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUUsQ0FBQyxJQUFFLElBQUksQ0FBQyxNQUFNLEdBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUcsQ0FBQyxJQUFFLENBQUU7QUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBRyxLQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBRSxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBRztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUMsR0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVU7SUFBQSxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUMsUUFBUSxDQUFDLEdBQUMsRUFBQyxFQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUMsRUFBQyxFQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxVQUFVO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxRQUFRLEdBQUUsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxVQUFVLElBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUMsUUFBUSxHQUFFLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFDLFFBQVEsQ0FBQyxHQUFDLEVBQUMsR0FBQyxFQUFDLENBQUM7SUFBQSxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztJQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUMsRUFBQyxHQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBRyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxRQUFRLEdBQUUsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxDQUFDO1FBQUEsUUFBUSxFQUFDLENBQVE7SUFBQSxDQUFDLEdBQUUsSUFBSTtBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsT0FBTyxTQUFRLENBQUUsR0FBRSxPQUFPLFNBQVEsQ0FBRSxTQUFPLElBQUksQ0FBQyxDQUFDLElBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEtBQUcsQ0FBQyxJQUFFLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFDLFFBQVEsR0FBRSxDQUFDO0lBQUEsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJO0lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxNQUFNLEVBQUMsQ0FBQyxDQUFDLElBQUksSUFBRSxDQUFDLENBQUMsUUFBUSxJQUFFLENBQU0sVUFBRyxDQUFDLENBQUMsSUFBSSx1QkFBcUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQUksQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLEdBQUMsQ0FBaUIscUJBQUcsQ0FBQyxDQUFDLElBQUksSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQUEsQ0FBQyxDQUFDLFFBQVEsS0FBRyxDQUFDLElBQUUsQ0FBRyxLQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBRSxDQUFHLEtBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUFFLENBQUMsR0FBRSxDQUFDLElBQUUsQ0FBQyxHQUFDLENBQUcsS0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUUsQ0FBRyxLQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUs7SUFBQyxDQUFDLEVBQUMsQ0FBRSxHQUFFLEtBQUssQ0FBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUk7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsUUFBUSxHQUFFLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBcUI7QUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLENBQUMsSUFBRSxDQUFDLEtBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBRSxDQUFRLFdBQUUsTUFBTSxDQUFDLENBQUMsSUFBRSxDQUFtQix1QkFBRyxDQUFDLENBQUMsUUFBUSxLQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFFLENBQUMsSUFBRSxDQUFDO1FBQUEsQ0FBQztJQUFBLENBQUMsR0FBQyxDQUFDLENBQUM7QUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxNQUFNLENBQUEsQ0FBVSxhQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsUUFBUTtJQUFFLENBQUM7QUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUcsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxJQUFFLENBQUUsSUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxXQUFXLEdBQUMsQ0FBQztJQUFBLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUMsUUFBUSxDQUFDLEdBQUMsRUFBQyxHQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sR0FBRSxHQUFDLEtBQUcsR0FBQyxHQUFDLElBQUksQ0FBQyxHQUFDLEdBQUMsQ0FBVSxZQUFDLENBQWEsY0FBRSxHQUFDLElBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFDLFFBQVEsQ0FBQyxHQUFDLEVBQUMsQ0FBQztJQUFBLEdBQUcsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FB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T0FBUCxHQUFpQjVILE9BQWpCO0EsQzs7Ozs7NkNDcnNDbUIsTUFBTTs7TUFBTixNQUFNO0lBQ3pCLENBQUMsS0FBSyxHQUFHLEVBQUU7SUFDWCxDQUFDLFNBQVM7Z0JBRUUsU0FBaUIsQ0FBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTO0lBQzdCLENBQUM7SUFFRCxJQUFJLEdBQUcsQ0FBQztRQUNOLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsRUFDbkMsSUFBSSxDQUFDLENBQUMsS0FBSzthQUVYLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDO1FBR2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLO0lBQ3BCLENBQUM7SUFFRCxJQUFJLEdBQUcsQ0FBQztRQUNOLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUNqQixJQUFJLENBQUMsQ0FBQyxLQUFLO2FBRVgsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDO1FBR25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLO0lBQ3BCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBYSxFQUFFLENBQUM7UUFDckIsRUFBRSxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksS0FBSyxJQUFJLENBQUMsRUFDdkMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFHckIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUs7SUFDcEIsQ0FBQztRQUVHLEtBQUssR0FBRyxDQUFDO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUs7SUFDcEIsQ0FBQyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1icm93c2VyLWhtckAyLjMuMl9AcGFyY2VsK2NvcmVAMi4zLjIvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1icm93c2VyLWhtci9saWIvcnVudGltZS1mMzc4OTQ2ZDQxZjEwNmMyLmpzIiwic3JjL2NvbnRlbnQtc2NyaXB0cy9pbmRleC50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS91bWJyZWxsYWpzQDMuMy4xL25vZGVfbW9kdWxlcy91bWJyZWxsYWpzL3VtYnJlbGxhLm1pbi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3RyYW5zZm9ybWVyLWpzQDIuMy4yX0BwYXJjZWwrY29yZUAyLjMuMi9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS93ZWJleHRlbnNpb24tcG9seWZpbGxAMC44LjAvbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCJzcmMvY29udGVudC1zY3JpcHRzL0N1cnNvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSE1SX0hPU1QgPSBcImxvY2FsaG9zdFwiO3ZhciBITVJfUE9SVCA9IG51bGw7dmFyIEhNUl9TRUNVUkUgPSBmYWxzZTt2YXIgSE1SX0VOVl9IQVNIID0gXCJlNzkyZmJiZGFhNzhlZTg0XCI7bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEID0gXCI2OWE0YTdlNGVlMTEwNGM3XCI7XCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdCA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdIHx8IG9bXCJAQGl0ZXJhdG9yXCJdOyBpZiAoIWl0KSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IGl0LmNhbGwobyk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuLyogZ2xvYmFsIEhNUl9IT1NULCBITVJfUE9SVCwgSE1SX0VOVl9IQVNILCBITVJfU0VDVVJFICovXG5cbi8qOjpcbmltcG9ydCB0eXBlIHtcbiAgSE1SQXNzZXQsXG4gIEhNUk1lc3NhZ2UsXG59IGZyb20gJ0BwYXJjZWwvcmVwb3J0ZXItZGV2LXNlcnZlci9zcmMvSE1SU2VydmVyLmpzJztcbmludGVyZmFjZSBQYXJjZWxSZXF1aXJlIHtcbiAgKHN0cmluZyk6IG1peGVkO1xuICBjYWNoZToge3xbc3RyaW5nXTogUGFyY2VsTW9kdWxlfH07XG4gIGhvdERhdGE6IG1peGVkO1xuICBNb2R1bGU6IGFueTtcbiAgcGFyZW50OiA/UGFyY2VsUmVxdWlyZTtcbiAgaXNQYXJjZWxSZXF1aXJlOiB0cnVlO1xuICBtb2R1bGVzOiB7fFtzdHJpbmddOiBbRnVuY3Rpb24sIHt8W3N0cmluZ106IHN0cmluZ3x9XXx9O1xuICBITVJfQlVORExFX0lEOiBzdHJpbmc7XG4gIHJvb3Q6IFBhcmNlbFJlcXVpcmU7XG59XG5pbnRlcmZhY2UgUGFyY2VsTW9kdWxlIHtcbiAgaG90OiB7fFxuICAgIGRhdGE6IG1peGVkLFxuICAgIGFjY2VwdChjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICBkaXNwb3NlKGNiOiAobWl4ZWQpID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGFjY2VwdChkZXBzOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nLCBjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBkZWNsaW5lKCk6IHZvaWQsXG4gICAgX2FjY2VwdENhbGxiYWNrczogQXJyYXk8KEZ1bmN0aW9uKSA9PiB2b2lkPixcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogQXJyYXk8KG1peGVkKSA9PiB2b2lkPixcbiAgfH07XG59XG5kZWNsYXJlIHZhciBtb2R1bGU6IHtidW5kbGU6IFBhcmNlbFJlcXVpcmUsIC4uLn07XG5kZWNsYXJlIHZhciBITVJfSE9TVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1BPUlQ6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9FTlZfSEFTSDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1NFQ1VSRTogYm9vbGVhbjtcbiovXG52YXIgT1ZFUkxBWV9JRCA9ICdfX3BhcmNlbF9fZXJyb3JfX292ZXJsYXlfXyc7XG52YXIgT2xkTW9kdWxlID0gbW9kdWxlLmJ1bmRsZS5Nb2R1bGU7XG5cbmZ1bmN0aW9uIE1vZHVsZShtb2R1bGVOYW1lKSB7XG4gIE9sZE1vZHVsZS5jYWxsKHRoaXMsIG1vZHVsZU5hbWUpO1xuICB0aGlzLmhvdCA9IHtcbiAgICBkYXRhOiBtb2R1bGUuYnVuZGxlLmhvdERhdGEsXG4gICAgX2FjY2VwdENhbGxiYWNrczogW10sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IFtdLFxuICAgIGFjY2VwdDogZnVuY3Rpb24gYWNjZXB0KGZuKSB7XG4gICAgICB0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaChmbiB8fCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgfSxcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiBkaXNwb3NlKGZuKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2goZm4pO1xuICAgIH1cbiAgfTtcbiAgbW9kdWxlLmJ1bmRsZS5ob3REYXRhID0gdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuYnVuZGxlLk1vZHVsZSA9IE1vZHVsZTtcbnZhciBjaGVja2VkQXNzZXRzXG4vKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4sIGFjY2VwdGVkQXNzZXRzXG4vKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4sIGFzc2V0c1RvQWNjZXB0XG4vKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovXG47XG5cbmZ1bmN0aW9uIGdldEhvc3RuYW1lKCkge1xuICByZXR1cm4gSE1SX0hPU1QgfHwgKGxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCA/IGxvY2F0aW9uLmhvc3RuYW1lIDogJ2xvY2FsaG9zdCcpO1xufVxuXG5mdW5jdGlvbiBnZXRQb3J0KCkge1xuICByZXR1cm4gSE1SX1BPUlQgfHwgbG9jYXRpb24ucG9ydDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5cbnZhciBwYXJlbnQgPSBtb2R1bGUuYnVuZGxlLnBhcmVudDtcblxuaWYgKCghcGFyZW50IHx8ICFwYXJlbnQuaXNQYXJjZWxSZXF1aXJlKSAmJiB0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICB2YXIgcG9ydCA9IGdldFBvcnQoKTtcbiAgdmFyIHByb3RvY29sID0gSE1SX1NFQ1VSRSB8fCBsb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cHM6JyAmJiAhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdChob3N0bmFtZSkgPyAnd3NzJyA6ICd3cyc7XG4gIHZhciB3cyA9IG5ldyBXZWJTb2NrZXQocHJvdG9jb2wgKyAnOi8vJyArIGhvc3RuYW1lICsgKHBvcnQgPyAnOicgKyBwb3J0IDogJycpICsgJy8nKTsgLy8gJEZsb3dGaXhNZVxuXG4gIHdzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudFxuICAvKjoge2RhdGE6IHN0cmluZywgLi4ufSAqL1xuICApIHtcbiAgICBjaGVja2VkQXNzZXRzID0ge31cbiAgICAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4gICAgO1xuICAgIGFjY2VwdGVkQXNzZXRzID0ge31cbiAgICAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4gICAgO1xuICAgIGFzc2V0c1RvQWNjZXB0ID0gW107XG4gICAgdmFyIGRhdGFcbiAgICAvKjogSE1STWVzc2FnZSAqL1xuICAgID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAvLyBSZW1vdmUgZXJyb3Igb3ZlcmxheSBpZiB0aGVyZSBpcyBvbmVcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXNzZXRzID0gZGF0YS5hc3NldHMuZmlsdGVyKGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgICByZXR1cm4gYXNzZXQuZW52SGFzaCA9PT0gSE1SX0VOVl9IQVNIO1xuICAgICAgfSk7IC8vIEhhbmRsZSBITVIgVXBkYXRlXG5cbiAgICAgIHZhciBoYW5kbGVkID0gYXNzZXRzLmV2ZXJ5KGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgICByZXR1cm4gYXNzZXQudHlwZSA9PT0gJ2NzcycgfHwgYXNzZXQudHlwZSA9PT0gJ2pzJyAmJiBobXJBY2NlcHRDaGVjayhtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0LmlkLCBhc3NldC5kZXBzQnlCdW5kbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgYXNzZXRzLmZvckVhY2goZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICAgICAgaG1yQXBwbHkobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzZXRzVG9BY2NlcHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaWQgPSBhc3NldHNUb0FjY2VwdFtpXVsxXTtcblxuICAgICAgICAgIGlmICghYWNjZXB0ZWRBc3NldHNbaWRdKSB7XG4gICAgICAgICAgICBobXJBY2NlcHRSdW4oYXNzZXRzVG9BY2NlcHRbaV1bMF0sIGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGF0YS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAvLyBMb2cgcGFyY2VsIGVycm9ycyB0byBjb25zb2xlXG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZGF0YS5kaWFnbm9zdGljcy5hbnNpKSxcbiAgICAgICAgICBfc3RlcDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgYW5zaURpYWdub3N0aWMgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICB2YXIgc3RhY2sgPSBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBhbnNpRGlhZ25vc3RpYy5zdGFjaztcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCfwn5qoIFtwYXJjZWxdOiAnICsgYW5zaURpYWdub3N0aWMubWVzc2FnZSArICdcXG4nICsgc3RhY2sgKyAnXFxuXFxuJyArIGFuc2lEaWFnbm9zdGljLmhpbnRzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBSZW5kZXIgdGhlIGZhbmN5IGh0bWwgb3ZlcmxheVxuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBjcmVhdGVFcnJvck92ZXJsYXkoZGF0YS5kaWFnbm9zdGljcy5odG1sKTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgfTtcblxuICB3cy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUud2FybignW3BhcmNlbF0g8J+aqCBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIHdhcyBsb3N0Jyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVycm9yT3ZlcmxheSgpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPVkVSTEFZX0lEKTtcblxuICBpZiAob3ZlcmxheSkge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2coJ1twYXJjZWxdIOKcqCBFcnJvciByZXNvbHZlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yT3ZlcmxheShkaWFnbm9zdGljcykge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmlkID0gT1ZFUkxBWV9JRDtcbiAgdmFyIGVycm9ySFRNTCA9ICc8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogYmxhY2s7IG9wYWNpdHk6IDAuODU7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHdoaXRlOyBwb3NpdGlvbjogZml4ZWQ7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IHRvcDogMHB4OyBsZWZ0OiAwcHg7IHBhZGRpbmc6IDMwcHg7IGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTsgei1pbmRleDogOTk5OTtcIj4nO1xuXG4gIHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZGlhZ25vc3RpY3MpLFxuICAgICAgX3N0ZXAyO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcbiAgICAgIHZhciBkaWFnbm9zdGljID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgdmFyIHN0YWNrID0gZGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBkaWFnbm9zdGljLmNvZGVmcmFtZSA6IGRpYWdub3N0aWMuc3RhY2s7XG4gICAgICBlcnJvckhUTUwgKz0gXCJcXG4gICAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwiZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLXRvcDogMjBweDtcXFwiPlxcbiAgICAgICAgICBcXHVEODNEXFx1REVBOCBcIi5jb25jYXQoZGlhZ25vc3RpYy5tZXNzYWdlLCBcIlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8cHJlPlwiKS5jb25jYXQoc3RhY2ssIFwiPC9wcmU+XFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICBcIikuY29uY2F0KGRpYWdub3N0aWMuaGludHMubWFwKGZ1bmN0aW9uIChoaW50KSB7XG4gICAgICAgIHJldHVybiAnPGRpdj7wn5KhICcgKyBoaW50ICsgJzwvZGl2Pic7XG4gICAgICB9KS5qb2luKCcnKSwgXCJcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgXCIpLmNvbmNhdChkaWFnbm9zdGljLmRvY3VtZW50YXRpb24gPyBcIjxkaXY+XFx1RDgzRFxcdURDREQgPGEgc3R5bGU9XFxcImNvbG9yOiB2aW9sZXRcXFwiIGhyZWY9XFxcIlwiLmNvbmNhdChkaWFnbm9zdGljLmRvY3VtZW50YXRpb24sIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+TGVhcm4gbW9yZTwvYT48L2Rpdj5cIikgOiAnJywgXCJcXG4gICAgICA8L2Rpdj5cXG4gICAgXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yMi5mKCk7XG4gIH1cblxuICBlcnJvckhUTUwgKz0gJzwvZGl2Pic7XG4gIG92ZXJsYXkuaW5uZXJIVE1MID0gZXJyb3JIVE1MO1xuICByZXR1cm4gb3ZlcmxheTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50cyhidW5kbGUsIGlkKVxuLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL1xue1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBrLCBkLCBkZXA7XG5cbiAgZm9yIChrIGluIG1vZHVsZXMpIHtcbiAgICBmb3IgKGQgaW4gbW9kdWxlc1trXVsxXSkge1xuICAgICAgZGVwID0gbW9kdWxlc1trXVsxXVtkXTtcblxuICAgICAgaWYgKGRlcCA9PT0gaWQgfHwgQXJyYXkuaXNBcnJheShkZXApICYmIGRlcFtkZXAubGVuZ3RoIC0gMV0gPT09IGlkKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChbYnVuZGxlLCBrXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBwYXJlbnRzID0gcGFyZW50cy5jb25jYXQoZ2V0UGFyZW50cyhidW5kbGUucGFyZW50LCBpZCkpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGluaykge1xuICB2YXIgbmV3TGluayA9IGxpbmsuY2xvbmVOb2RlKCk7XG5cbiAgbmV3TGluay5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxpbmsucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgIH1cbiAgfTtcblxuICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIC8vICRGbG93Rml4TWVcbiAgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zcGxpdCgnPycpWzBdICsgJz8nICsgRGF0ZS5ub3coKSk7IC8vICRGbG93Rml4TWVcblxuICBsaW5rLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0xpbmssIGxpbmsubmV4dFNpYmxpbmcpO1xufVxuXG52YXIgY3NzVGltZW91dCA9IG51bGw7XG5cbmZ1bmN0aW9uIHJlbG9hZENTUygpIHtcbiAgaWYgKGNzc1RpbWVvdXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjc3NUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXVxuICAgICAgdmFyIGhyZWZcbiAgICAgIC8qOiBzdHJpbmcgKi9cbiAgICAgID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICAgICAgdmFyIHNlcnZlZEZyb21ITVJTZXJ2ZXIgPSBob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgPyBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOicgKyBnZXRQb3J0KCkpLnRlc3QoaHJlZikgOiBocmVmLmluZGV4T2YoaG9zdG5hbWUgKyAnOicgKyBnZXRQb3J0KCkpO1xuICAgICAgdmFyIGFic29sdXRlID0gL15odHRwcz86XFwvXFwvL2kudGVzdChocmVmKSAmJiBocmVmLmluZGV4T2Yod2luZG93LmxvY2F0aW9uLm9yaWdpbikgIT09IDAgJiYgIXNlcnZlZEZyb21ITVJTZXJ2ZXI7XG5cbiAgICAgIGlmICghYWJzb2x1dGUpIHtcbiAgICAgICAgdXBkYXRlTGluayhsaW5rc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY3NzVGltZW91dCA9IG51bGw7XG4gIH0sIDUwKTtcbn1cblxuZnVuY3Rpb24gaG1yQXBwbHkoYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBhc3NldFxuLyo6ICBITVJBc3NldCAqL1xuKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGFzc2V0LnR5cGUgPT09ICdjc3MnKSB7XG4gICAgcmVsb2FkQ1NTKCk7XG4gIH0gZWxzZSBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIHZhciBkZXBzID0gYXNzZXQuZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXTtcblxuICAgIGlmIChkZXBzKSB7XG4gICAgICBpZiAobW9kdWxlc1thc3NldC5pZF0pIHtcbiAgICAgICAgLy8gUmVtb3ZlIGRlcGVuZGVuY2llcyB0aGF0IGFyZSByZW1vdmVkIGFuZCB3aWxsIGJlY29tZSBvcnBoYW5lZC5cbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3Nhcnkgc28gdGhhdCBpZiB0aGUgYXNzZXQgaXMgYWRkZWQgYmFjayBhZ2FpbiwgdGhlIGNhY2hlIGlzIGdvbmUsIGFuZCB3ZSBwcmV2ZW50IGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAgICAgICAgdmFyIG9sZERlcHMgPSBtb2R1bGVzW2Fzc2V0LmlkXVsxXTtcblxuICAgICAgICBmb3IgKHZhciBkZXAgaW4gb2xkRGVwcykge1xuICAgICAgICAgIGlmICghZGVwc1tkZXBdIHx8IGRlcHNbZGVwXSAhPT0gb2xkRGVwc1tkZXBdKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBvbGREZXBzW2RlcF07XG4gICAgICAgICAgICB2YXIgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICBobXJEZWxldGUobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBmbiA9IG5ldyBGdW5jdGlvbigncmVxdWlyZScsICdtb2R1bGUnLCAnZXhwb3J0cycsIGFzc2V0Lm91dHB1dCk7XG4gICAgICBtb2R1bGVzW2Fzc2V0LmlkXSA9IFtmbiwgZGVwc107XG4gICAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgICBobXJBcHBseShidW5kbGUucGFyZW50LCBhc3NldCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhtckRlbGV0ZShidW5kbGUsIGlkKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG1vZHVsZXNbaWRdKSB7XG4gICAgLy8gQ29sbGVjdCBkZXBlbmRlbmNpZXMgdGhhdCB3aWxsIGJlY29tZSBvcnBoYW5lZCB3aGVuIHRoaXMgbW9kdWxlIGlzIGRlbGV0ZWQuXG4gICAgdmFyIGRlcHMgPSBtb2R1bGVzW2lkXVsxXTtcbiAgICB2YXIgb3JwaGFucyA9IFtdO1xuXG4gICAgZm9yICh2YXIgZGVwIGluIGRlcHMpIHtcbiAgICAgIHZhciBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGRlcHNbZGVwXSk7XG5cbiAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBvcnBoYW5zLnB1c2goZGVwc1tkZXBdKTtcbiAgICAgIH1cbiAgICB9IC8vIERlbGV0ZSB0aGUgbW9kdWxlLiBUaGlzIG11c3QgYmUgZG9uZSBiZWZvcmUgZGVsZXRpbmcgZGVwZW5kZW5jaWVzIGluIGNhc2Ugb2YgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuXG5cbiAgICBkZWxldGUgbW9kdWxlc1tpZF07XG4gICAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07IC8vIE5vdyBkZWxldGUgdGhlIG9ycGhhbnMuXG5cbiAgICBvcnBoYW5zLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICBobXJEZWxldGUobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIGhtckRlbGV0ZShidW5kbGUucGFyZW50LCBpZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2soYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuLCBkZXBzQnlCdW5kbGVcbi8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovXG4pIHtcbiAgaWYgKGhtckFjY2VwdENoZWNrT25lKGJ1bmRsZSwgaWQsIGRlcHNCeUJ1bmRsZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBUcmF2ZXJzZSBwYXJlbnRzIGJyZWFkdGggZmlyc3QuIEFsbCBwb3NzaWJsZSBhbmNlc3RyaWVzIG11c3QgYWNjZXB0IHRoZSBITVIgdXBkYXRlLCBvciB3ZSdsbCByZWxvYWQuXG5cblxuICB2YXIgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gIHZhciBhY2NlcHRlZCA9IGZhbHNlO1xuXG4gIHdoaWxlIChwYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgdiA9IHBhcmVudHMuc2hpZnQoKTtcbiAgICB2YXIgYSA9IGhtckFjY2VwdENoZWNrT25lKHZbMF0sIHZbMV0sIG51bGwpO1xuXG4gICAgaWYgKGEpIHtcbiAgICAgIC8vIElmIHRoaXMgcGFyZW50IGFjY2VwdHMsIHN0b3AgdHJhdmVyc2luZyB1cHdhcmQsIGJ1dCBzdGlsbCBjb25zaWRlciBzaWJsaW5ncy5cbiAgICAgIGFjY2VwdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJ3aXNlLCBxdWV1ZSB0aGUgcGFyZW50cyBpbiB0aGUgbmV4dCBsZXZlbCB1cHdhcmQuXG4gICAgICB2YXIgcCA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCB2WzFdKTtcblxuICAgICAgaWYgKHAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBwYXJlbnRzLCB0aGVuIHdlJ3ZlIHJlYWNoZWQgYW4gZW50cnkgd2l0aG91dCBhY2NlcHRpbmcuIFJlbG9hZC5cbiAgICAgICAgYWNjZXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudHMucHVzaC5hcHBseShwYXJlbnRzLCBfdG9Db25zdW1hYmxlQXJyYXkocCkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhY2NlcHRlZDtcbn1cblxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuLCBkZXBzQnlCdW5kbGVcbi8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovXG4pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGVwc0J5QnVuZGxlICYmICFkZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdKSB7XG4gICAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgcm9vdCBidW5kbGUgd2l0aG91dCBmaW5kaW5nIHdoZXJlIHRoZSBhc3NldCBzaG91bGQgZ28sXG4gICAgLy8gdGhlcmUncyBub3RoaW5nIHRvIGRvLiBNYXJrIGFzIFwiYWNjZXB0ZWRcIiBzbyB3ZSBkb24ndCByZWxvYWQgdGhlIHBhZ2UuXG4gICAgaWYgKCFidW5kbGUucGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG1yQWNjZXB0Q2hlY2soYnVuZGxlLnBhcmVudCwgaWQsIGRlcHNCeUJ1bmRsZSk7XG4gIH1cblxuICBpZiAoY2hlY2tlZEFzc2V0c1tpZF0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNoZWNrZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGFzc2V0c1RvQWNjZXB0LnB1c2goW2J1bmRsZSwgaWRdKTtcblxuICBpZiAoIWNhY2hlZCB8fCBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRSdW4oYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuKSB7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBidW5kbGUuaG90RGF0YSA9IHt9O1xuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCkge1xuICAgIGNhY2hlZC5ob3QuZGF0YSA9IGJ1bmRsZS5ob3REYXRhO1xuICB9XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgY2IoYnVuZGxlLmhvdERhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZShpZCk7XG4gIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIHZhciBhc3NldHNUb0Fsc29BY2NlcHQgPSBjYihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChhc3NldHNUb0Fsc29BY2NlcHQgJiYgYXNzZXRzVG9BY2NlcHQubGVuZ3RoKSB7XG4gICAgICAgIC8vICRGbG93Rml4TWVbbWV0aG9kLXVuYmluZGluZ11cbiAgICAgICAgYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShhc3NldHNUb0FjY2VwdCwgYXNzZXRzVG9BbHNvQWNjZXB0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFjY2VwdGVkQXNzZXRzW2lkXSA9IHRydWU7XG59IiwiaW1wb3J0IHUgZnJvbSBcInVtYnJlbGxhanNcIjtcclxuaW1wb3J0IEN1cnNvciBmcm9tIFwiLi9DdXJzb3JcIjtcclxuaW1wb3J0IGJyb3dzZXIgZnJvbSBcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiO1xyXG5cclxuY29uc3QgZGVmYXVsdFNob3J0Y3V0cyA9IHtcclxuICBcImp1bXAtdG8tcmVzdWx0LWtleXNcIjogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMFwiXSxcclxuICB1cHdhcmQ6IHtcclxuICAgIGN0cmxLZXk6IGZhbHNlLFxyXG4gICAgc2hpZnRLZXk6IGZhbHNlLFxyXG4gICAgYWx0S2V5OiBmYWxzZSxcclxuICAgIG1ldGFLZXk6IGZhbHNlLFxyXG4gICAga2V5OiBcImtcIixcclxuICB9LFxyXG4gIGRvd253YXJkOiB7XHJcbiAgICBjdHJsS2V5OiBmYWxzZSxcclxuICAgIHNoaWZ0S2V5OiBmYWxzZSxcclxuICAgIGFsdEtleTogZmFsc2UsXHJcbiAgICBtZXRhS2V5OiBmYWxzZSxcclxuICAgIGtleTogXCJqXCIsXHJcbiAgfSxcclxuICBcIm9wZW4taW4tY3VycmVudC10YWJcIjoge1xyXG4gICAgY3RybEtleTogZmFsc2UsXHJcbiAgICBzaGlmdEtleTogZmFsc2UsXHJcbiAgICBhbHRLZXk6IGZhbHNlLFxyXG4gICAgbWV0YUtleTogZmFsc2UsXHJcbiAgICBrZXk6IFwiRW50ZXJcIixcclxuICB9LFxyXG4gIFwib3Blbi1pbi1uZXctdGFiLWJ1dC1zdGF5LW9uLWN1cnJlbnRcIjoge1xyXG4gICAgY3RybEtleTogdHJ1ZSxcclxuICAgIHNoaWZ0S2V5OiBmYWxzZSxcclxuICAgIGFsdEtleTogZmFsc2UsXHJcbiAgICBtZXRhS2V5OiBmYWxzZSxcclxuICAgIGtleTogXCJFbnRlclwiLFxyXG4gIH0sXHJcbiAgXCJvcGVuLWluLW5ldy10YWItYW5kLWZvY3VzXCI6IHtcclxuICAgIGN0cmxLZXk6IHRydWUsXHJcbiAgICBzaGlmdEtleTogdHJ1ZSxcclxuICAgIGFsdEtleTogZmFsc2UsXHJcbiAgICBtZXRhS2V5OiBmYWxzZSxcclxuICAgIGtleTogXCJFbnRlclwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5sZXQgc2hvcnRjdXRzID0gZGVmYXVsdFNob3J0Y3V0cztcclxuXHJcbnR5cGUgU29rb2JhbiA9IHtcclxuICBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3Qgc29rb2JhbnM6IFNva29iYW5bXSA9IFtdO1xyXG5cclxuLy8gc2hvdyB1aVxyXG51KFwiZGl2XCIpXHJcbiAgLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgcmV0dXJuIHUobm9kZSkuZGF0YShcInNva29iYW4tY29udGFpbmVyXCIpICE9PSBudWxsO1xyXG4gIH0pXHJcbiAgLmVhY2goZnVuY3Rpb24gKG5vZGUsIGkpIHtcclxuICAgIGxldCBrZXkgPSBzaG9ydGN1dHNbXCJqdW1wLXRvLXJlc3VsdC1rZXlzXCJdW2ldO1xyXG4gICAgaWYgKCFrZXkpIHtcclxuICAgICAga2V5ID0gaSAlIDIgPT09IDAgPyBcIvCfpolcIiA6IFwi8J+Qo1wiO1xyXG4gICAgfVxyXG4gICAgdShub2RlKS5iZWZvcmUoJzxkaXYgY2xhc3M9XCJidG5cIj4nICsga2V5ICsgXCI8L2Rpdj5cIik7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gdShub2RlKS53cmFwKFwiPGRpdiBjbGFzcz0nc29rb2Jhbi13cmFwJz5cIikuZmlyc3QoKTtcclxuICAgIHNva29iYW5zLnB1c2goeyBlbDogd3JhcHBlciwgaHJlZjogdShub2RlKS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKSB9KTtcclxuICB9KTtcclxuXHJcbmNvbnN0IGN1cnNvciA9IG5ldyBDdXJzb3Ioc29rb2JhbnMubGVuZ3RoKTtcclxuXHJcbi8vIGxvZyBrZXkgYXQgdGhlIGVuZCBvZiB0aGUgcGFnZVxyXG51KFwiYm9keVwiKS5hZnRlcihcIjxkaXYgaWQ9J2xvZyc+PC9kaXY+XCIpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBsb2dLZXkpO1xyXG5jb25zdCBsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ1wiKTtcclxuZnVuY3Rpb24gbG9nS2V5KGUpIHtcclxuICBsb2cudGV4dENvbnRlbnQgKz0gYCAke2Uua2V5fWA7XHJcbn1cclxuXHJcbmNvbnN0IG1vZGlmaWVyS2V5cyA9IFtcImN0cmxLZXlcIiwgXCJzaGlmdEtleVwiLCBcImFsdEtleVwiLCBcIm1ldGFLZXlcIl07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gIGlmICghc2hvcnRjdXRzKSByZXR1cm47XHJcblxyXG4gIC8vIGp1bXAgdG8gdGhlIHRhcmdldCBzb2tvYmFuXHJcbiAgaWYgKG1vZGlmaWVyS2V5cy5ldmVyeSgodikgPT4gZVt2XSA9PT0gZmFsc2UpKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHNob3J0Y3V0c1tcImp1bXAtdG8tcmVzdWx0LWtleXNcIl0uaW5kZXhPZihlLmtleSk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIGN1cnNvci5qdW1wVG8oaW5kZXgpO1xyXG4gICAgICBzY3JvbGwoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tbWFuZCA9IHNob3J0Y3V0TWFwcGluZyhlKTtcclxuICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgIGNhc2UgXCJ1cHdhcmRcIjpcclxuICAgICAgY3Vyc29yLnByZXYoKTtcclxuICAgICAgc2Nyb2xsKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImRvd253YXJkXCI6XHJcbiAgICAgIGN1cnNvci5uZXh0KCk7XHJcbiAgICAgIHNjcm9sbCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJvcGVuLWluLWN1cnJlbnQtdGFiXCI6XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oc29rb2JhbnNbY3Vyc29yLmluZGV4XS5ocmVmKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY2FzZSBcIm9wZW4taW4tbmV3LXRhYi1idXQtc3RheS1vbi1jdXJyZW50XCI6XHJcbiAgICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgY29tbWFuZDogXCJvcGVuLWluLW5ldy10YWJcIixcclxuICAgICAgICB1cmw6IHNva29iYW5zW2N1cnNvci5pbmRleF0uaHJlZixcclxuICAgICAgICBhY3RpdmU6IGZhbHNlLCAvLyBzdGF5IGluIGN1cnJlbnQgdGFiXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJvcGVuLWluLW5ldy10YWItYW5kLWZvY3VzXCI6XHJcbiAgICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgY29tbWFuZDogXCJvcGVuLWluLW5ldy10YWJcIixcclxuICAgICAgICB1cmw6IHNva29iYW5zW2N1cnNvci5pbmRleF0uaHJlZixcclxuICAgICAgICBhY3RpdmU6IHRydWUsIC8vIGZvY3VzIG5ldyB0YWJcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIHNjcm9sbCB0byB0aGUgdGFyZ2V0IHNva29iYW5cclxuZnVuY3Rpb24gc2Nyb2xsKCkge1xyXG4gIGNvbnN0IHNva29iYW4gPSBzb2tvYmFuc1tjdXJzb3IuaW5kZXhdO1xyXG4gIHNva29iYW4uZWwuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJjZW50ZXJcIiB9KTtcclxuICBzb2tvYmFucy5mb3JFYWNoKChzLCBpKSA9PiB7XHJcbiAgICBpZiAoaSA9PT0gY3Vyc29yLmluZGV4KSB7XHJcbiAgICAgIHUocy5lbCkuYWRkQ2xhc3MoXCJmb2N1c1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHUocy5lbCkucmVtb3ZlQ2xhc3MoXCJmb2N1c1wiKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCh7IHNob3J0Y3V0czogZGVmYXVsdFNob3J0Y3V0cyB9KS50aGVuKFxyXG4gIChnb3QpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2V0OiBcIiwgZ290KTtcclxuICAgIHNob3J0Y3V0cyA9IGdvdC5zaG9ydGN1dHM7XHJcbiAgfSxcclxuICAoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9uIGVycm9yOiBcIiwgZXJyKTtcclxuICB9XHJcbik7XHJcblxyXG5mdW5jdGlvbiBzaG9ydGN1dE1hcHBpbmcoZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gIC8vIGRlYnVnIHByaW50XHJcbiAgaWYgKGZhbHNlKSB7XHJcbiAgICBbXCJjdHJsS2V5XCIsIFwic2hpZnRLZXlcIiwgXCJhbHRLZXlcIiwgXCJtZXRhS2V5XCIsIFwia2V5XCJdLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhrZXksIFwiOlwiLCBlW2tleV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWRlZmF1bHRTaG9ydGN1dHMpIHJldHVybjtcclxuXHJcbiAgbGV0IGNvbW1hbmQ6IHN0cmluZztcclxuICBmb3IgKGNvbnN0IHByb3AgaW4gZGVmYXVsdFNob3J0Y3V0cykge1xyXG4gICAgY29uc3Qgc2hvcnRjdXQgPSBkZWZhdWx0U2hvcnRjdXRzW3Byb3BdO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHNob3J0Y3V0KS5ldmVyeSgoa2V5KSA9PiBzaG9ydGN1dFtrZXldID09PSBlW2tleV0pKSB7XHJcbiAgICAgIGNvbW1hbmQgPSBwcm9wO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiY29tbWFuZDogXCIsIGNvbW1hbmQpO1xyXG5cclxuICByZXR1cm4gY29tbWFuZDtcclxufVxyXG4iLCIvKiBVbWJyZWxsYSBKUyAzLjMuMCB1bWJyZWxsYWpzLmNvbSAqL1xuXG52YXIgdT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzIGluc3RhbmNlb2YgdT90IGluc3RhbmNlb2YgdT90OigodD1cInN0cmluZ1wiPT10eXBlb2YgdD90aGlzLnNlbGVjdCh0LGUpOnQpJiZ0Lm5vZGVOYW1lJiYodD1bdF0pLHZvaWQodGhpcy5ub2Rlcz10aGlzLnNsaWNlKHQpKSk6bmV3IHUodCxlKX07dS5wcm90b3R5cGU9e2dldCBsZW5ndGgoKXtyZXR1cm4gdGhpcy5ub2Rlcy5sZW5ndGh9fSx1LnByb3RvdHlwZS5ub2Rlcz1bXSx1LnByb3RvdHlwZS5hZGRDbGFzcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVhY2hhcmcoYXJndW1lbnRzLGZ1bmN0aW9uKHQsZSl7dC5jbGFzc0xpc3QuYWRkKGUpfSl9LHUucHJvdG90eXBlLmFkamFjZW50PWZ1bmN0aW9uKG8sdCxpKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgdCYmKHQ9MD09PXQ/W106bmV3IEFycmF5KHQpLmpvaW4oKS5zcGxpdChcIixcIikubWFwKE51bWJlci5jYWxsLE51bWJlcikpLHRoaXMuZWFjaChmdW5jdGlvbihuLHIpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTt1KHR8fHt9KS5tYXAoZnVuY3Rpb24odCxlKXtlPVwiZnVuY3Rpb25cIj09dHlwZW9mIG8/by5jYWxsKHRoaXMsdCxlLG4scik6bztyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT90aGlzLmdlbmVyYXRlKGUpOnUoZSl9KS5lYWNoKGZ1bmN0aW9uKHQpe3RoaXMuaXNJblBhZ2UodCk/ZS5hcHBlbmRDaGlsZCh1KHQpLmNsb25lKCkuZmlyc3QoKSk6ZS5hcHBlbmRDaGlsZCh0KX0pLGkuY2FsbCh0aGlzLG4sZSl9KX0sdS5wcm90b3R5cGUuYWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hZGphY2VudCh0LGUsZnVuY3Rpb24odCxlKXt0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdC5uZXh0U2libGluZyl9KX0sdS5wcm90b3R5cGUuYXBwZW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRqYWNlbnQodCxlLGZ1bmN0aW9uKHQsZSl7dC5hcHBlbmRDaGlsZChlKX0pfSx1LnByb3RvdHlwZS5hcmdzPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4odD1cInN0cmluZ1wiIT10eXBlb2YodD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoZSxuKTp0KT90aGlzLnNsaWNlKHQpLm1hcCh0aGlzLnN0cihlLG4pKTp0KS50b1N0cmluZygpLnNwbGl0KC9bXFxzLF0rLykuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0Lmxlbmd0aH0pfSx1LnByb3RvdHlwZS5hcnJheT1mdW5jdGlvbihvKXt2YXIgaT10aGlzO3JldHVybiB0aGlzLm5vZGVzLnJlZHVjZShmdW5jdGlvbih0LGUsbil7dmFyIHI7cmV0dXJuIG8/KHI9XCJzdHJpbmdcIj09dHlwZW9mKHI9KHI9by5jYWxsKGksZSxuKSl8fCExKT91KHIpOnIpaW5zdGFuY2VvZiB1JiYocj1yLm5vZGVzKTpyPWUuaW5uZXJIVE1MLHQuY29uY2F0KCExIT09cj9yOltdKX0sW10pfSx1LnByb3RvdHlwZS5hdHRyPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gcj1yP1wiZGF0YS1cIjpcIlwiLHRoaXMucGFpcnModCxlLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuZ2V0QXR0cmlidXRlKHIrZSl9LGZ1bmN0aW9uKHQsZSxuKXtuP3Quc2V0QXR0cmlidXRlKHIrZSxuKTp0LnJlbW92ZUF0dHJpYnV0ZShyK2UpfSl9LHUucHJvdG90eXBlLmJlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkamFjZW50KHQsZSxmdW5jdGlvbih0LGUpe3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0KX0pfSx1LnByb3RvdHlwZS5jaGlsZHJlbj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2xpY2UodC5jaGlsZHJlbil9KS5maWx0ZXIodCl9LHUucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQsZSl7dmFyIG49dC5jbG9uZU5vZGUoITApLHI9dGhpcy5nZXRBbGwobik7cmV0dXJuIHRoaXMuZ2V0QWxsKHQpLmVhY2goZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gdGhpcy5taXJyb3IpdGhpcy5taXJyb3Jbbl0mJnRoaXMubWlycm9yW25dKHQsci5ub2Rlc1tlXSl9KSxufSl9LHUucHJvdG90eXBlLmdldEFsbD1mdW5jdGlvbih0KXtyZXR1cm4gdShbdF0uY29uY2F0KHUoXCIqXCIsdCkubm9kZXMpKX0sdS5wcm90b3R5cGUubWlycm9yPXt9LHUucHJvdG90eXBlLm1pcnJvci5ldmVudHM9ZnVuY3Rpb24odCxlKXtpZih0Ll9lKWZvcih2YXIgbiBpbiB0Ll9lKXQuX2Vbbl0uZm9yRWFjaChmdW5jdGlvbih0KXt1KGUpLm9uKG4sdC5jYWxsYmFjayl9KX0sdS5wcm90b3R5cGUubWlycm9yLnNlbGVjdD1mdW5jdGlvbih0LGUpe3UodCkuaXMoXCJzZWxlY3RcIikmJihlLnZhbHVlPXQudmFsdWUpfSx1LnByb3RvdHlwZS5taXJyb3IudGV4dGFyZWE9ZnVuY3Rpb24odCxlKXt1KHQpLmlzKFwidGV4dGFyZWFcIikmJihlLnZhbHVlPXQudmFsdWUpfSx1LnByb3RvdHlwZS5jbG9zZXN0PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXtkb3tpZih1KHQpLmlzKGUpKXJldHVybiB0fXdoaWxlKCh0PXQucGFyZW50Tm9kZSkmJnQhPT1kb2N1bWVudCl9KX0sdS5wcm90b3R5cGUuZGF0YT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmF0dHIodCxlLCEwKX0sdS5wcm90b3R5cGUuZWFjaD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5ub2Rlcy5mb3JFYWNoKHQuYmluZCh0aGlzKSksdGhpc30sdS5wcm90b3R5cGUuZWFjaGFyZz1mdW5jdGlvbihuLHIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSx0KXt0aGlzLmFyZ3MobixlLHQpLmZvckVhY2goZnVuY3Rpb24odCl7ci5jYWxsKHRoaXMsZSx0KX0sdGhpcyl9KX0sdS5wcm90b3R5cGUuZW1wdHk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2Zvcig7dC5maXJzdENoaWxkOyl0LnJlbW92ZUNoaWxkKHQuZmlyc3RDaGlsZCl9KX0sdS5wcm90b3R5cGUuZmlsdGVyPWZ1bmN0aW9uKGUpe3ZhciB0PWUgaW5zdGFuY2VvZiB1P2Z1bmN0aW9uKHQpe3JldHVybi0xIT09ZS5ub2Rlcy5pbmRleE9mKHQpfTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6ZnVuY3Rpb24odCl7cmV0dXJuIHQubWF0Y2hlcz10Lm1hdGNoZXN8fHQubXNNYXRjaGVzU2VsZWN0b3J8fHQud2Via2l0TWF0Y2hlc1NlbGVjdG9yLHQubWF0Y2hlcyhlfHxcIipcIil9O3JldHVybiB1KHRoaXMubm9kZXMuZmlsdGVyKHQpKX0sdS5wcm90b3R5cGUuZmluZD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHUoZXx8XCIqXCIsdCl9KX0sdS5wcm90b3R5cGUuZmlyc3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2Rlc1swXXx8ITF9LHUucHJvdG90eXBlLmdlbmVyYXRlPWZ1bmN0aW9uKHQpe3JldHVybi9eXFxzKjx0cls+IF0vLnRlc3QodCk/dShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIikpLmh0bWwodCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpLm5vZGVzOi9eXFxzKjx0KGh8ZClbPiBdLy50ZXN0KHQpP3UoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpKS5odG1sKHQpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpLm5vZGVzOi9eXFxzKjwvLnRlc3QodCk/dShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5odG1sKHQpLmNoaWxkcmVuKCkubm9kZXM6ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCl9LHUucHJvdG90eXBlLmhhbmRsZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMuc2xpY2UoYXJndW1lbnRzKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZT9mdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9OmV9LHRoaXMpO3JldHVybiB0aGlzLm9uLmFwcGx5KHRoaXMsdCl9LHUucHJvdG90eXBlLmhhc0NsYXNzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXMoXCIuXCIrdGhpcy5hcmdzKGFyZ3VtZW50cykuam9pbihcIi5cIikpfSx1LnByb3RvdHlwZS5odG1sPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lP3RoaXMuZmlyc3QoKS5pbm5lckhUTUx8fFwiXCI6dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe3QuaW5uZXJIVE1MPWV9KX0sdS5wcm90b3R5cGUuaXM9ZnVuY3Rpb24odCl7cmV0dXJuIDA8dGhpcy5maWx0ZXIodCkubGVuZ3RofSx1LnByb3RvdHlwZS5pc0luUGFnZT1mdW5jdGlvbih0KXtyZXR1cm4gdCE9PWRvY3VtZW50LmJvZHkmJmRvY3VtZW50LmJvZHkuY29udGFpbnModCl9LHUucHJvdG90eXBlLmxhc3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2Rlc1t0aGlzLmxlbmd0aC0xXXx8ITF9LHUucHJvdG90eXBlLm1hcD1mdW5jdGlvbih0KXtyZXR1cm4gdD91KHRoaXMuYXJyYXkodCkpLnVuaXF1ZSgpOnRoaXN9LHUucHJvdG90eXBlLm5vdD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIXUodCkuaXMoZXx8ITApfSl9LHUucHJvdG90eXBlLm9mZj1mdW5jdGlvbih0LGUsbil7dmFyIHI9bnVsbD09ZSYmbnVsbD09bixvPW51bGwsaT1lO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYobz1lLGk9biksdGhpcy5lYWNoYXJnKHQsZnVuY3Rpb24oZSxuKXt1KGUuX2U/ZS5fZVtuXTpbXSkuZWFjaChmdW5jdGlvbih0KXsocnx8dC5vcmlnX2NhbGxiYWNrPT09aSYmdC5zZWxlY3Rvcj09PW8pJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIobix0LmNhbGxiYWNrKX0pfSl9LHUucHJvdG90eXBlLm9uPWZ1bmN0aW9uKHQsZSxvKXtmdW5jdGlvbiBpKHQsZSl7dHJ5e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiY3VycmVudFRhcmdldFwiLHt2YWx1ZTplLGNvbmZpZ3VyYWJsZTohMH0pfWNhdGNoKHQpe319dmFyIGM9bnVsbCxuPWU7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihjPWUsbj1vLGU9ZnVuY3Rpb24obil7dmFyIHI9YXJndW1lbnRzO3Uobi5jdXJyZW50VGFyZ2V0KS5maW5kKGMpLmVhY2goZnVuY3Rpb24odCl7dmFyIGU7dC5jb250YWlucyhuLnRhcmdldCkmJihlPW4uY3VycmVudFRhcmdldCxpKG4sdCksby5hcHBseSh0LHIpLGkobixlKSl9KX0pO2Z1bmN0aW9uIHIodCl7cmV0dXJuIGUuYXBwbHkodGhpcyxbdF0uY29uY2F0KHQuZGV0YWlsfHxbXSkpfXJldHVybiB0aGlzLmVhY2hhcmcodCxmdW5jdGlvbih0LGUpe3QuYWRkRXZlbnRMaXN0ZW5lcihlLHIpLHQuX2U9dC5fZXx8e30sdC5fZVtlXT10Ll9lW2VdfHxbXSx0Ll9lW2VdLnB1c2goe2NhbGxiYWNrOnIsb3JpZ19jYWxsYmFjazpuLHNlbGVjdG9yOmN9KX0pfSx1LnByb3RvdHlwZS5wYWlycz1mdW5jdGlvbihyLHQsZSxvKXt2YXIgbjtyZXR1cm4gdm9pZCAwIT09dCYmKG49ciwocj17fSlbbl09dCksXCJvYmplY3RcIj09dHlwZW9mIHI/dGhpcy5lYWNoKGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuIGluIHIpXCJmdW5jdGlvblwiPT10eXBlb2YgcltuXT9vKHQsbixyW25dKHQsZSkpOm8odCxuLHJbbl0pfSk6dGhpcy5sZW5ndGg/ZSh0aGlzLmZpcnN0KCkscik6XCJcIn0sdS5wcm90b3R5cGUucGFyYW09ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5rZXlzKGUpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy51cmkodCkrXCI9XCIrdGhpcy51cmkoZVt0XSl9LmJpbmQodGhpcykpLmpvaW4oXCImXCIpfSx1LnByb3RvdHlwZS5wYXJlbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0LnBhcmVudE5vZGV9KS5maWx0ZXIodCl9LHUucHJvdG90eXBlLnByZXBlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hZGphY2VudCh0LGUsZnVuY3Rpb24odCxlKXt0Lmluc2VydEJlZm9yZShlLHQuZmlyc3RDaGlsZCl9KX0sdS5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0KXt0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KX0pfSx1LnByb3RvdHlwZS5yZW1vdmVDbGFzcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVhY2hhcmcoYXJndW1lbnRzLGZ1bmN0aW9uKHQsZSl7dC5jbGFzc0xpc3QucmVtb3ZlKGUpfSl9LHUucHJvdG90eXBlLnJlcGxhY2U9ZnVuY3Rpb24odCxlKXt2YXIgbj1bXTtyZXR1cm4gdGhpcy5hZGphY2VudCh0LGUsZnVuY3Rpb24odCxlKXtuPW4uY29uY2F0KHRoaXMuc2xpY2UoZS5jaGlsZHJlbikpLHQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZSx0KX0pLHUobil9LHUucHJvdG90eXBlLnNjcm9sbD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmZpcnN0KCkuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOlwic21vb3RoXCJ9KSx0aGlzfSx1LnByb3RvdHlwZS5zZWxlY3Q9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdD10LnJlcGxhY2UoL15cXHMqLyxcIlwiKS5yZXBsYWNlKC9cXHMqJC8sXCJcIiksL148Ly50ZXN0KHQpP3UoKS5nZW5lcmF0ZSh0KTooZXx8ZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwodCl9LHUucHJvdG90eXBlLnNlcmlhbGl6ZT1mdW5jdGlvbigpe3ZhciByPXRoaXM7cmV0dXJuIHRoaXMuc2xpY2UodGhpcy5maXJzdCgpLmVsZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24oZSxuKXtyZXR1cm4hbi5uYW1lfHxuLmRpc2FibGVkfHxcImZpbGVcIj09PW4udHlwZXx8LyhjaGVja2JveHxyYWRpbykvLnRlc3Qobi50eXBlKSYmIW4uY2hlY2tlZD9lOlwic2VsZWN0LW11bHRpcGxlXCI9PT1uLnR5cGU/KHUobi5vcHRpb25zKS5lYWNoKGZ1bmN0aW9uKHQpe3Quc2VsZWN0ZWQmJihlKz1cIiZcIityLnVyaShuLm5hbWUpK1wiPVwiK3IudXJpKHQudmFsdWUpKX0pLGUpOmUrXCImXCIrci51cmkobi5uYW1lKStcIj1cIityLnVyaShuLnZhbHVlKX0sXCJcIikuc2xpY2UoMSl9LHUucHJvdG90eXBlLnNpYmxpbmdzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnBhcmVudCgpLmNoaWxkcmVuKHQpLm5vdCh0aGlzKX0sdS5wcm90b3R5cGUuc2l6ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmZpcnN0KCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCl9LHUucHJvdG90eXBlLnNsaWNlPWZ1bmN0aW9uKHQpe3JldHVybiB0JiYwIT09dC5sZW5ndGgmJlwic3RyaW5nXCIhPXR5cGVvZiB0JiZcIltvYmplY3QgRnVuY3Rpb25dXCIhPT10LnRvU3RyaW5nKCk/dC5sZW5ndGg/W10uc2xpY2UuY2FsbCh0Lm5vZGVzfHx0KTpbdF06W119LHUucHJvdG90eXBlLnN0cj1mdW5jdGlvbihlLG4pe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QuY2FsbCh0aGlzLGUsbik6dC50b1N0cmluZygpfX0sdS5wcm90b3R5cGUudGV4dD1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZT90aGlzLmZpcnN0KCkudGV4dENvbnRlbnR8fFwiXCI6dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe3QudGV4dENvbnRlbnQ9ZX0pfSx1LnByb3RvdHlwZS50b2dnbGVDbGFzcz1mdW5jdGlvbih0LGUpe3JldHVybiEhZT09PWU/dGhpc1tlP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKHQpOnRoaXMuZWFjaGFyZyh0LGZ1bmN0aW9uKHQsZSl7dC5jbGFzc0xpc3QudG9nZ2xlKGUpfSl9LHUucHJvdG90eXBlLnRyaWdnZXI9ZnVuY3Rpb24odCl7dmFyIG89dGhpcy5zbGljZShhcmd1bWVudHMpLnNsaWNlKDEpO3JldHVybiB0aGlzLmVhY2hhcmcodCxmdW5jdGlvbih0LGUpe3ZhciBuLHI9e2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxkZXRhaWw6b307dHJ5e249bmV3IHdpbmRvdy5DdXN0b21FdmVudChlLHIpfWNhdGNoKHQpeyhuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIikpLmluaXRDdXN0b21FdmVudChlLCEwLCEwLG8pfXQuZGlzcGF0Y2hFdmVudChuKX0pfSx1LnByb3RvdHlwZS51bmlxdWU9ZnVuY3Rpb24oKXtyZXR1cm4gdSh0aGlzLm5vZGVzLnJlZHVjZShmdW5jdGlvbih0LGUpe3JldHVybiBudWxsIT1lJiYhMSE9PWUmJi0xPT09dC5pbmRleE9mKGUpP3QuY29uY2F0KGUpOnR9LFtdKSl9LHUucHJvdG90eXBlLnVyaT1mdW5jdGlvbih0KXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHQpLnJlcGxhY2UoLyEvZyxcIiUyMVwiKS5yZXBsYWNlKC8nL2csXCIlMjdcIikucmVwbGFjZSgvXFwoL2csXCIlMjhcIikucmVwbGFjZSgvXFwpL2csXCIlMjlcIikucmVwbGFjZSgvXFwqL2csXCIlMkFcIikucmVwbGFjZSgvJTIwL2csXCIrXCIpfSx1LnByb3RvdHlwZS53cmFwPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gdSh0KS5lYWNoKGZ1bmN0aW9uKHQpeyFmdW5jdGlvbih0KXtmb3IoO3QuZmlyc3RFbGVtZW50Q2hpbGQ7KXQ9dC5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gdSh0KX0odCkuYXBwZW5kKGUuY2xvbmVOb2RlKCEwKSksZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh0LGUpfSl9KX0sXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHMmJihtb2R1bGUuZXhwb3J0cz11LG1vZHVsZS5leHBvcnRzLnU9dSk7IiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuOC4wIC0gVHVlIEFwciAyMCAyMDIxIDExOjI3OjM4ICovXG4vKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4vKiB2aW06IHNldCBzdHM9MiBzdz0yIGV0IHR3PTgwOiAqL1xuLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblwidXNlIHN0cmljdFwiO1xuXG5pZiAodHlwZW9mIGJyb3dzZXIgPT09IFwidW5kZWZpbmVkXCIgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKGJyb3dzZXIpICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuICBjb25zdCBTRU5EX1JFU1BPTlNFX0RFUFJFQ0FUSU9OX1dBUk5JTkcgPSBcIlJldHVybmluZyBhIFByb21pc2UgaXMgdGhlIHByZWZlcnJlZCB3YXkgdG8gc2VuZCBhIHJlcGx5IGZyb20gYW4gb25NZXNzYWdlL29uTWVzc2FnZUV4dGVybmFsIGxpc3RlbmVyLCBhcyB0aGUgc2VuZFJlc3BvbnNlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBzcGVjcyAoU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvTW96aWxsYS9BZGQtb25zL1dlYkV4dGVuc2lvbnMvQVBJL3J1bnRpbWUvb25NZXNzYWdlKVwiO1xuXG4gIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cbiAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgIC8vIEpTT04gZmlsZS5cbiAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRvd25sb2Fkc1wiOiB7XG4gICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImVyYXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzdW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaGlzdG9yeVwiOiB7XG4gICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVSYW5nZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGVudGl0eVwiOiB7XG4gICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImlkbGVcIjoge1xuICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm1hbmFnZW1lbnRcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0U2VsZlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XG4gICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwib3Blbk9wdGlvbnNQYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTmF0aXZlTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlc3Npb25zXCI6IHtcbiAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3RvcmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICBcImxvY2FsXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRhYnNcIjoge1xuICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImR1cGxpY2F0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdvQmFja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImluc2VydENTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0QWxsRnJhbWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3ZWJSZXF1ZXN0XCI6IHtcbiAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3aW5kb3dzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAqIG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcbiAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAqL1xuICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICB9XG5cbiAgICAgIGdldChrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAqL1xuICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XG4gICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAqXG4gICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHxcbiAgICAgICAgICAgICAgICAgICAoY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkpIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gKG51bUFyZ3MpID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cbiAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG5cbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEubm9DYWxsYmFjaykge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXG4gICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXG4gICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICovXG4gICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIC8qKlxuICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xuICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXG4gICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxuICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcbiAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcbiAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcbiAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFwiKlwiKSkge1xuICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXG4gICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XG4gICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxuICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG4gICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICpcbiAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXG4gICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXG4gICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgIH0sXG5cbiAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZFJlcSA9IHdyYXBPYmplY3QocmVxLCB7fSAvKiB3cmFwcGVycyAqLywge1xuICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICBtYXhBcmdzOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvLyBLZWVwIHRyYWNrIGlmIHRoZSBkZXByZWNhdGlvbiB3YXJuaW5nIGhhcyBiZWVuIGxvZ2dlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGxldCBsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgKiBpdHMgcmV0dXJuIHZhbHVlLCByYXRoZXIgdGhhbiBieSByZXR1cm5pbmcgYSBzZW50aW5lbCB2YWx1ZSBhbmQgY2FsbGluZyBhXG4gICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VuZGVyXG4gICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgKiAgICAgICAgQSBjYWxsYmFjayB3aGljaCwgd2hlbiBjYWxsZWQgd2l0aCBhbiBhcmJpdHJhcnkgYXJndW1lbnQsIHNlbmRzXG4gICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgKiAgICAgICAgVHJ1ZSBpZiB0aGUgd3JhcHBlZCBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHdoaWNoIHdpbGwgbGF0ZXJcbiAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IGRpZENhbGxTZW5kUmVzcG9uc2UgPSBmYWxzZTtcblxuICAgICAgICBsZXQgd3JhcHBlZFNlbmRSZXNwb25zZTtcbiAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmICghbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihTRU5EX1JFU1BPTlNFX0RFUFJFQ0FUSU9OX1dBUk5JTkcsIG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICAgICAgICAgICAgbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgIC8vIHdyYXBwZWRTZW5kUmVzcG9uc2Ugc3luY2hyb25vdXNseSwgd2UgY2FuIGV4aXQgZWFybGllclxuICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUgJiYgIWlzUmVzdWx0VGhlbmFibGUgJiYgIWRpZENhbGxTZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXG4gICAgICAgIC8vIHByb21pc2UpLlxuICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSAocHJvbWlzZSkgPT4ge1xuICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cpO1xuICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgIC8vIGlzIGFuIGluc3RhbmNlIG9mIGVycm9yLCBvciB0aGUgb2JqZWN0IGl0c2VsZiBvdGhlcndpc2UuXG4gICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCBzZW5kIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBhXG4gICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG4gICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7cmVqZWN0LCByZXNvbHZlfSwgcmVwbHkpID0+IHtcbiAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2lzc3Vlcy8xMzBcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmVwbHkgJiYgcmVwbHkuX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fKSB7XG4gICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXBseS5tZXNzYWdlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge3Jlc29sdmUsIHJlamVjdH0pO1xuICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgYXBpTmFtZXNwYWNlT2JqLnNlbmRNZXNzYWdlKC4uLmFyZ3MpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xuICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIG9uUmVxdWVzdEZpbmlzaGVkOiB3cmFwRXZlbnQob25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcnVudGltZToge1xuICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7bWluQXJnczogMSwgbWF4QXJnczogM30pLFxuICAgICAgfSxcbiAgICAgIHRhYnM6IHtcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge21pbkFyZ3M6IDIsIG1heEFyZ3M6IDN9KSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICBjbGVhcjoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgICAgZ2V0OiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgICBzZXQ6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICB9O1xuICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICBuZXR3b3JrOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgICBzZXJ2aWNlczoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgICAgd2Vic2l0ZXM6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIGNocm9tZSAhPSBcIm9iamVjdFwiIHx8ICFjaHJvbWUgfHwgIWNocm9tZS5ydW50aW1lIHx8ICFjaHJvbWUucnVudGltZS5pZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlwiKTtcbiAgfVxuXG4gIC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcbiAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IGJyb3dzZXI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xyXG4gICNpbmRleCA9IC0xO1xyXG4gICNtYXhMZW5ndGg6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobWF4TGVuZ3RoOiBudW1iZXIpIHtcclxuICAgIHRoaXMuI21heExlbmd0aCA9IG1heExlbmd0aDtcclxuICB9XHJcblxyXG4gIG5leHQoKSB7XHJcbiAgICBpZiAodGhpcy4jaW5kZXggPCB0aGlzLiNtYXhMZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMuI2luZGV4Kys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLiNpbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuI2luZGV4O1xyXG4gIH1cclxuXHJcbiAgcHJldigpIHtcclxuICAgIGlmICh0aGlzLiNpbmRleCA+IDApIHtcclxuICAgICAgdGhpcy4jaW5kZXgtLTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuI2luZGV4ID0gdGhpcy4jbWF4TGVuZ3RoIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy4jaW5kZXg7XHJcbiAgfVxyXG5cclxuICBqdW1wVG8oaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKGluZGV4IDwgdGhpcy4jbWF4TGVuZ3RoICYmIGluZGV4ID49IDApIHtcclxuICAgICAgdGhpcy4jaW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy4jaW5kZXg7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5kZXgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jaW5kZXg7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJicm93c2VyIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UiLCJTRU5EX1JFU1BPTlNFX0RFUFJFQ0FUSU9OX1dBUk5JTkciLCJ3cmFwQVBJcyIsImV4dGVuc2lvbkFQSXMiLCJhcGlNZXRhZGF0YSIsImtleXMiLCJsZW5ndGgiLCJFcnJvciIsIkRlZmF1bHRXZWFrTWFwIiwiV2Vha01hcCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlSXRlbSIsIml0ZW1zIiwidW5kZWZpbmVkIiwiZ2V0Iiwia2V5IiwiaGFzIiwic2V0IiwiaXNUaGVuYWJsZSIsInZhbHVlIiwidGhlbiIsIm1ha2VDYWxsYmFjayIsInByb21pc2UiLCJtZXRhZGF0YSIsImNhbGxiYWNrQXJncyIsInJ1bnRpbWUiLCJsYXN0RXJyb3IiLCJyZWplY3QiLCJtZXNzYWdlIiwic2luZ2xlQ2FsbGJhY2tBcmciLCJyZXNvbHZlIiwicGx1cmFsaXplQXJndW1lbnRzIiwibnVtQXJncyIsIndyYXBBc3luY0Z1bmN0aW9uIiwibmFtZSIsImFzeW5jRnVuY3Rpb25XcmFwcGVyIiwidGFyZ2V0IiwiYXJncyIsIm1pbkFyZ3MiLCJtYXhBcmdzIiwiUHJvbWlzZSIsImZhbGxiYWNrVG9Ob0NhbGxiYWNrIiwiY2JFcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwibm9DYWxsYmFjayIsIndyYXBNZXRob2QiLCJtZXRob2QiLCJ3cmFwcGVyIiwiUHJveHkiLCJhcHBseSIsInRhcmdldE1ldGhvZCIsInRoaXNPYmoiLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJGdW5jdGlvbiIsImJpbmQiLCJ3cmFwT2JqZWN0Iiwid3JhcHBlcnMiLCJjYWNoZSIsImNyZWF0ZSIsImhhbmRsZXJzIiwicHJveHlUYXJnZXQiLCJwcm9wIiwicmVjZWl2ZXIiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJkZXNjIiwiUmVmbGVjdCIsImRlbGV0ZVByb3BlcnR5Iiwid3JhcEV2ZW50Iiwid3JhcHBlck1hcCIsImFkZExpc3RlbmVyIiwibGlzdGVuZXIiLCJoYXNMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwib25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyIsIm9uUmVxdWVzdEZpbmlzaGVkIiwicmVxIiwid3JhcHBlZFJlcSIsImdldENvbnRlbnQiLCJsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmciLCJvbk1lc3NhZ2VXcmFwcGVycyIsIm9uTWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImRpZENhbGxTZW5kUmVzcG9uc2UiLCJ3cmFwcGVkU2VuZFJlc3BvbnNlIiwic2VuZFJlc3BvbnNlUHJvbWlzZSIsInJlc3BvbnNlIiwic3RhY2siLCJyZXN1bHQiLCJlcnIiLCJpc1Jlc3VsdFRoZW5hYmxlIiwic2VuZFByb21pc2VkUmVzdWx0IiwibXNnIiwiZXJyb3IiLCJfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18iLCJjYXRjaCIsIndyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrIiwicmVwbHkiLCJ3cmFwcGVkU2VuZE1lc3NhZ2UiLCJhcGlOYW1lc3BhY2VPYmoiLCJ3cmFwcGVkQ2IiLCJwdXNoIiwic2VuZE1lc3NhZ2UiLCJzdGF0aWNXcmFwcGVycyIsImRldnRvb2xzIiwibmV0d29yayIsIm9uTWVzc2FnZUV4dGVybmFsIiwidGFicyIsInNldHRpbmdNZXRhZGF0YSIsImNsZWFyIiwicHJpdmFjeSIsInNlcnZpY2VzIiwid2Vic2l0ZXMiLCJjaHJvbWUiLCJpZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwidmVyc2lvbiI6MywiZmlsZSI6ImluZGV4LmpzLm1hcCJ9
