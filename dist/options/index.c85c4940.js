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
})({"du58Z":[function(require,module,exports) {
"use strict";
var HMR_HOST = "localhost";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "e792fbbdaa78ee84";
module.bundle.HMR_BUNDLE_ID = "9e4fd250c85c4940";
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

},{}],"cUHWv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webextensionPolyfill = require("webextension-polyfill");
var _webextensionPolyfillDefault = parcelHelpers.interopDefault(_webextensionPolyfill);
var _umbrellajs = require("umbrellajs");
var _umbrellajsDefault = parcelHelpers.interopDefault(_umbrellajs);
var _defaultShortcuts = require("../settings/default-shortcuts");
// replace translated
_umbrellajsDefault.default("[data-msg]").each(function(node) {
    const key = _umbrellajsDefault.default(node).data("msg");
    const text = _webextensionPolyfillDefault.default.i18n.getMessage(key);
    _umbrellajsDefault.default(node).text(text === "" ? key : text);
});
_webextensionPolyfillDefault.default.storage.local.get({
    shortcuts: _defaultShortcuts.defaultShortcuts
}).then(({ shortcuts  })=>{
    console.log(shortcuts);
    _umbrellajsDefault.default("input").each(function(node) {
        const command = _umbrellajsDefault.default(node).attr("id");
        const shortcut = shortcuts[command];
        _umbrellajsDefault.default(node).attr("value", shortcut2Text(shortcut));
    });
}, (err)=>{
    console.log(err);
});
// init shortcuts
let os;
_webextensionPolyfillDefault.default.runtime.getPlatformInfo().then((info)=>{
    os = info.os;
});
let formShortcuts = {
};
_umbrellajsDefault.default("input").on("keydown", function(e) {
    const input = _umbrellajsDefault.default(e.target).first();
    if (!input.id) return;
    formShortcuts[input.id] = {
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
        key: e.key
    };
    e.preventDefault();
    input.value = shortcut2Text(formShortcuts[input.id]);
});
_umbrellajsDefault.default("form").on("submit", ()=>{
    // ! no error handling
    _webextensionPolyfillDefault.default.storage.local.set({
        shortcuts: formShortcuts
    });
});
function shortcut2Text(shortcut) {
    const modifiers = [];
    if (shortcut.ctrlKey) modifiers.push("Ctrl");
    if (shortcut.shiftKey) modifiers.push("Shift");
    if (shortcut.altKey) modifiers.push("Alt");
    if (shortcut.metaKey) {
        if (os === "mac") modifiers.push("⌘");
        else if (os === "win") modifiers.push("Win");
    }
    let key = shortcut.key;
    if ([
        "Control",
        "Shift",
        "Alt",
        "Meta"
    ].includes(shortcut.key)) key = "";
    else if (key.length === 1) key = key.toUpperCase();
    if (modifiers.length > 0) return modifiers.join("+") + (key === "" ? key : "+" + key);
    else return key;
}

},{"webextension-polyfill":"9z4H6","umbrellajs":"f7cLR","@parcel/transformer-js/src/esmodule-helpers.js":"cZRUK","../settings/default-shortcuts":"lBZKK"}],"9z4H6":[function(require,module,exports) {
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

},{}],"f7cLR":[function(require,module,exports) {
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

},{}],"lBZKK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultShortcuts", ()=>defaultShortcuts
);
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"cZRUK"}]},["du58Z","cUHWv"], "cUHWv", "parcelRequired6fc")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsTUFBTSxDQUFDLENBQUM7UUFBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUFHLENBQUM7UUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSTtZQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQUUsTUFBTSxDQUFDLElBQUk7UUFBRSxDQUFDO1FBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFBQyxNQUFNLEdBQUcsSUFBSTtZQUFFLEdBQUcsR0FBRyxHQUFHO1FBQUUsQ0FBQztRQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBQyxHQUFHLENBQUMsQ0FBQztnQkFBQyxFQUFFLEdBQUcsZ0JBQWdCLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07WUFBSSxDQUFDLFFBQVMsQ0FBQztnQkFBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQUUsQ0FBQztRQUFDLENBQUM7SUFBQyxDQUFDO0FBQUUsQ0FBQztTQUU3OUIsMkJBQTJCLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxNQUFNO0lBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBUSxTQUFFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsTUFBTTtJQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFBRyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQVEsV0FBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUk7SUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUssUUFBSSxDQUFDLEtBQUssQ0FBSyxNQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFBRyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQVcseURBQStDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxNQUFNO0FBQUcsQ0FBQztTQUV2WixpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU07SUFBRSxHQUFHLENBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFNLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFBSyxNQUFNLENBQUMsSUFBSTtBQUFFLENBQUM7QUFFdkwsRUFBeUQsQUFBekQscURBQXlELEFBQXpELEVBQXlELENBRXpELEVBZ0NFLEFBaENGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDRSxBQWhDRixFQWdDRSxDQUNGLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBNEI7QUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07U0FFM0IsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNCLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVU7SUFDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ1YsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTztRQUMzQixnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDcEIsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLFFBQVEsR0FBSSxDQUFDO1lBQUEsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUztBQUNuQyxDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTTtBQUM3QixHQUFHLENBQUMsYUFBYSxFQUVmLGNBQWMsRUFFZCxjQUFjO1NBSVAsV0FBVyxHQUFHLENBQUM7SUFDdEIsTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFNLFdBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBVztBQUMvRixDQUFDO1NBRVEsT0FBTyxHQUFHLENBQUM7SUFDbEIsTUFBTSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSTtBQUNsQyxDQUFDLEFBQUMsQ0FBd0MsQUFBeEMsRUFBd0MsQUFBeEMsc0NBQXdDO0FBRzFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNO0FBRWpDLEVBQUUsSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLGVBQWUsS0FBSyxNQUFNLENBQUMsU0FBUyxLQUFLLENBQVcsWUFBRSxDQUFDO0lBQzdFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsV0FBVztJQUMxQixHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU87SUFDbEIsR0FBRyxDQUFDLFFBQVEsR0FBRyxVQUFVLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxDQUFRLDBDQUFtQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUssT0FBRyxDQUFJO0lBQzFILEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBSyxPQUFHLFFBQVEsSUFBSSxJQUFJLEdBQUcsQ0FBRyxLQUFHLElBQUksR0FBRyxDQUFFLEtBQUksQ0FBRyxJQUFHLENBQWEsQUFBYixFQUFhLEFBQWIsV0FBYTtJQUVuRyxFQUFFLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBRSxLQUFLLEVBRTVCLENBQUM7UUFDRCxhQUFhLEdBQUcsQ0FBQztRQUFBLENBQUM7UUFHbEIsY0FBYyxHQUFHLENBQUM7UUFBQSxDQUFDO1FBR25CLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsR0FBRyxDQUFDLElBQUksR0FFTixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJO1FBRXZCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQVEsU0FBRSxDQUFDO1lBQzNCLEVBQXVDLEFBQXZDLHFDQUF1QztZQUN2QyxFQUFFLEVBQUUsTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFXLFlBQ2pDLGtCQUFrQjtZQUdwQixHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBRSxLQUFLLEVBQUUsQ0FBQztnQkFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssWUFBWTtZQUN2QyxDQUFDLEVBQUcsQ0FBb0IsQUFBcEIsRUFBb0IsQUFBcEIsa0JBQW9CO1lBRXhCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUUsS0FBSyxFQUFFLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUssUUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUksT0FBSSxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsWUFBWTtZQUN2SCxDQUFDO1lBRUQsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUNaLE9BQU8sQ0FBQyxLQUFLO2dCQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFFLEtBQUssRUFBRSxDQUFDO29CQUMvQixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSztnQkFDcEMsQ0FBQztnQkFFRCxHQUFHLENBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFJLENBQUM7b0JBQy9DLEdBQUcsQ0FBQyxFQUFFLEdBQUcsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUU1QixFQUFFLEdBQUcsY0FBYyxDQUFDLEVBQUUsR0FDcEIsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7Z0JBRXpDLENBQUM7WUFDSCxDQUFDLE1BQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1FBRTFCLENBQUM7UUFFRCxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFPLFFBQUUsQ0FBQztZQUMxQixFQUErQixBQUEvQiw2QkFBK0I7WUFDL0IsR0FBRyxDQUFDLFNBQVMsR0FBRywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FDNUQsS0FBSztZQUVULEdBQUcsQ0FBQyxDQUFDO2dCQUNILEdBQUcsQ0FBRSxTQUFTLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRyxDQUFDO29CQUNuRCxHQUFHLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxLQUFLO29CQUNoQyxHQUFHLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsS0FBSztvQkFDdEYsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFjLG1CQUFNLGNBQWMsQ0FBQyxPQUFPLEdBQUcsQ0FBSSxNQUFHLEtBQUssR0FBRyxDQUFNLFFBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBSTtnQkFDaEgsQ0FBRjtZQUNILENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ2IsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ2pCLENBQUMsUUFBUyxDQUFDO2dCQUNULFNBQVMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQztZQUVELEVBQUUsRUFBRSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQVcsWUFBRSxDQUFDO2dCQUNwQyxFQUFnQyxBQUFoQyw4QkFBZ0M7Z0JBQ2hDLGtCQUFrQjtnQkFDbEIsR0FBRyxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRyxDQUFhLEFBQWIsRUFBYSxBQUFiLFdBQWE7Z0JBRXRFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU87WUFDbkMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsRUFBRSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTztJQUN6QixDQUFDO0lBRUQsRUFBRSxDQUFDLE9BQU8sR0FBRyxRQUFRLEdBQUksQ0FBQztRQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQWtEO0lBQzlELENBQUY7QUFDSCxDQUFDO1NBRVEsa0JBQWtCLEdBQUcsQ0FBQztJQUM3QixHQUFHLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVTtJQUVoRCxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDWixPQUFPLENBQUMsTUFBTTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBMkI7SUFDdkMsQ0FBRDtBQUNILENBQUM7U0FFUSxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QyxHQUFHLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBSztJQUMxQyxPQUFPLENBQUMsRUFBRSxHQUFHLFVBQVU7SUFDdkIsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUF3TjtJQUV4TyxHQUFHLENBQUMsVUFBVSxHQUFHLDBCQUEwQixDQUFDLFdBQVcsR0FDbkQsTUFBTTtJQUVWLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsR0FBRyxDQUFFLFVBQVUsQ0FBQyxDQUFDLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFHLENBQUM7WUFDdEQsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSztZQUM3QixHQUFHLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSztZQUMxRSxTQUFTLElBQUksQ0FBdUgsdUhBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBaUMsa0NBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFtQyxvQ0FBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFFLElBQUksRUFBRSxDQUFDO2dCQUNqUyxNQUFNLENBQUMsQ0FBUyxjQUFHLElBQUksR0FBRyxDQUFRO1lBQ3BDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBRSxJQUFHLENBQTRCLDZCQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLENBQXNELHNEQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQTJDLDhDQUFJLENBQUUsR0FBRSxDQUFzQjtRQUNoUCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRztJQUNsQixDQUFDLFFBQVMsQ0FBQztRQUNULFVBQVUsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELFNBQVMsSUFBSSxDQUFRO0lBQ3JCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUztJQUM3QixNQUFNLENBQUMsT0FBTztBQUNoQixDQUFDO1NBRVEsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQzlCLEVBQXFDLEFBQXJDLGlDQUFxQyxBQUFyQyxFQUFxQyxDQUNyQyxDQUFDO0lBQ0MsR0FBRyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztJQUU1QixFQUFFLEdBQUcsT0FBTyxFQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFHWCxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNoQixHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBRWIsR0FBRyxDQUFFLENBQUMsSUFBSSxPQUFPLENBQ2YsR0FBRyxDQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRyxDQUFDO1FBQ3hCLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRXJCLEVBQUUsRUFBRSxHQUFHLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQ2hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFBLE1BQU07WUFBRSxDQUFDO1FBQUEsQ0FBQztJQUU1QixDQUFDO0lBR0gsRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQ2YsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtJQUd2RCxNQUFNLENBQUMsT0FBTztBQUNoQixDQUFDO1NBRVEsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVM7SUFFNUIsT0FBTyxDQUFDLE1BQU0sR0FBRyxRQUFRLEdBQUksQ0FBQztRQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQzFCLEVBQWEsQUFBYixXQUFhO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSTtJQUVwQyxDQUFDO0lBRUQsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFNLE9BQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBTSxPQUFFLEtBQUssQ0FBQyxDQUFHLElBQUUsQ0FBQyxJQUFJLENBQUcsS0FBRyxJQUFJLENBQUMsR0FBRyxJQUFLLENBQWEsQUFBYixFQUFhLEFBQWIsV0FBYTtJQUUxRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVc7QUFDeEQsQ0FBQztBQUVELEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSTtTQUVaLFNBQVMsR0FBRyxDQUFDO0lBQ3BCLEVBQUUsRUFBRSxVQUFVLEVBQ1osTUFBTTtJQUdSLFVBQVUsR0FBRyxVQUFVLENBQUMsUUFBUSxHQUFJLENBQUM7UUFDbkMsR0FBRyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBd0I7UUFFOUQsR0FBRyxDQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBSSxDQUFDO1lBQ3RDLEVBQWdDLEFBQWhDLDhCQUFnQztZQUNoQyxHQUFHLENBQUMsSUFBSSxHQUVOLEtBQUssQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQU07WUFDOUIsR0FBRyxDQUFDLFFBQVEsR0FBRyxXQUFXO1lBQzFCLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLEtBQUssQ0FBVyxhQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBZ0Qsa0RBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBRyxLQUFHLE9BQU87WUFDaEwsR0FBRyxDQUFDLFFBQVEsbUJBQW1CLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sTUFBTSxDQUFDLEtBQUssbUJBQW1CO1lBRS9HLEVBQUUsR0FBRyxRQUFRLEVBQ1gsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRCLENBQUM7UUFFRCxVQUFVLEdBQUcsSUFBSTtJQUNuQixDQUFDLEVBQUUsRUFBRTtBQUNQLENBQUM7U0FFUSxRQUFRLENBQUMsTUFBTSxFQUV0QixLQUFLLEVBRUwsQ0FBQztJQUNELEdBQUcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87SUFFNUIsRUFBRSxHQUFHLE9BQU8sRUFDVixNQUFNO0lBR1IsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBSyxNQUN0QixTQUFTO1NBQ0osRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBSSxLQUFFLENBQUM7UUFDL0IsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhO1FBRWxELEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUNULEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDO2dCQUN0QixFQUFpRSxBQUFqRSwrREFBaUU7Z0JBQ2pFLEVBQW9ILEFBQXBILGtIQUFvSDtnQkFDcEgsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUVqQyxHQUFHLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQ3JCLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUM3QyxHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHO29CQUNwQixHQUFHLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFO29CQUUvQyxFQUFFLEVBQUUsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQ3RCLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUVwQyxDQUFDO1lBRUwsQ0FBQztZQUVELEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFTLFVBQUUsQ0FBUSxTQUFFLENBQVMsVUFBRSxLQUFLLENBQUMsTUFBTTtZQUNsRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDO2dCQUFBLEVBQUU7Z0JBQUUsSUFBSTtZQUFBLENBQUM7UUFDaEMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUN0QixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLO0lBRWpDLENBQUM7QUFDSCxDQUFDO1NBRVEsU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFFLEVBQUUsQ0FBQztJQUM5QixHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO0lBRTVCLEVBQUUsR0FBRyxPQUFPLEVBQ1YsTUFBTTtJQUdSLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRSxHQUFHLENBQUM7UUFDaEIsRUFBOEUsQUFBOUUsNEVBQThFO1FBQzlFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUUsRUFBRSxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLEdBQUcsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBRSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHO1lBRXJELEVBQUUsRUFBRSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztRQUV6QixDQUFDLEFBQUMsQ0FBc0csQUFBdEcsRUFBc0csQUFBdEcsb0dBQXNHO1FBR3hHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRTtRQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFFLEVBQUcsQ0FBMEIsQUFBMUIsRUFBMEIsQUFBMUIsd0JBQTBCO1FBRW5ELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFFLEVBQUUsRUFBRSxDQUFDO1lBQzdCLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2xDLENBQUM7SUFDSCxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQ3RCLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUU7QUFFL0IsQ0FBQztTQUVRLGNBQWMsQ0FBQyxNQUFNLEVBRTVCLEVBQUUsRUFFRixZQUFZLEVBRVosQ0FBQztJQUNELEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLFlBQVksR0FDNUMsTUFBTSxDQUFDLElBQUk7SUFDWCxDQUF1RyxBQUF2RyxFQUF1RyxBQUF2RyxxR0FBdUc7SUFHekcsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRTtJQUMvQyxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUs7VUFFYixPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUs7UUFDckIsR0FBRyxDQUFDLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSTtRQUUxQyxFQUFFLEVBQUUsQ0FBQyxFQUNILEVBQStFLEFBQS9FLDZFQUErRTtRQUMvRSxRQUFRLEdBQUcsSUFBSTthQUNWLENBQUM7WUFDTixFQUF5RCxBQUF6RCx1REFBeUQ7WUFDekQsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFMUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ25CLEVBQWtGLEFBQWxGLGdGQUFrRjtnQkFDbEYsUUFBUSxHQUFHLEtBQUs7Z0JBQ2hCLEtBQUs7WUFDUCxDQUFDO1lBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUTtBQUNqQixDQUFDO1NBRVEsaUJBQWlCLENBQUMsTUFBTSxFQUUvQixFQUFFLEVBRUYsWUFBWSxFQUVaLENBQUM7SUFDRCxHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO0lBRTVCLEVBQUUsR0FBRyxPQUFPLEVBQ1YsTUFBTTtJQUdSLEVBQUUsRUFBRSxZQUFZLEtBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQztRQUN4RCxFQUEyRSxBQUEzRSx5RUFBMkU7UUFDM0UsRUFBeUUsQUFBekUsdUVBQXlFO1FBQ3pFLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUNoQixNQUFNLENBQUMsSUFBSTtRQUdiLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsWUFBWTtJQUN2RCxDQUFDO0lBRUQsRUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQ2xCLE1BQU0sQ0FBQyxJQUFJO0lBR2IsYUFBYSxDQUFDLEVBQUUsSUFBSSxJQUFJO0lBQ3hCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQzVCLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUFBLE1BQU07UUFBRSxFQUFFO0lBQUEsQ0FBQztJQUVoQyxFQUFFLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQzdELE1BQU0sQ0FBQyxJQUFJO0FBRWYsQ0FBQztTQUVRLFlBQVksQ0FBQyxNQUFNLEVBRTFCLEVBQUUsRUFFRixDQUFDO0lBQ0QsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDNUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDO0lBQUEsQ0FBQztJQUVuQixFQUFFLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPO0lBR2xDLEVBQUUsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFDN0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTztJQUNuQixDQUFDO0lBR0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtJQUN0QixNQUFNLENBQUMsRUFBRTtJQUNULE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFFeEIsRUFBRSxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUM1RCxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUUsRUFBRSxFQUFFLENBQUM7UUFDakQsR0FBRyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxRQUFRLEdBQUksQ0FBQztZQUN2QyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDMUMsQ0FBQztRQUVELEVBQUUsRUFBRSxrQkFBa0IsSUFBSSxjQUFjLENBQUMsTUFBTSxFQUM3QyxFQUErQixBQUEvQiw2QkFBK0I7UUFDL0IsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGtCQUFrQjtJQUVoRSxDQUFDO0lBR0gsY0FBYyxDQUFDLEVBQUUsSUFBSSxJQUFJO0FBQzNCLENBQUM7Ozs7QUN4ZEQsR0FBTTs7QUFDTixHQUFNOztBQUVOLEdBQU07QUFFTixFQUFxQixBQUFyQixtQkFBcUI7MkJBQ25CLENBQVksYUFBRSxJQUFJLENBQUMsUUFBUSxDQUFFLElBQUksRUFBRSxDQUFDO0lBQ3BDLEtBQUssQ0FBQyxHQUFHLDhCQUFLLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBSztJQUM5QixLQUFLLENBQUMsSUFBSSx3Q0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUc7K0JBQ3RDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUUsSUFBRyxHQUFHLEdBQUcsSUFBSTtBQUN2QyxDQUFDO3FDQUVPLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFBQyxTQUFTO0FBQW1CLENBQUMsRUFBRSxJQUFJLEVBQzVELENBQUMsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTOytCQUNuQixDQUFPLFFBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBRSxJQUFJLEVBQUUsQ0FBQztRQUMvQixLQUFLLENBQUMsT0FBTyw4QkFBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUk7UUFDakMsS0FBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsT0FBTzttQ0FDaEMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFPLFFBQUUsYUFBYSxDQUFDLFFBQVE7SUFDOUMsQ0FBQztBQUNILENBQUMsR0FDQSxHQUFHLEdBQUssQ0FBQztJQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRztBQUNqQixDQUFDO0FBR0gsRUFBaUIsQUFBakIsZUFBaUI7QUFFakIsR0FBRyxDQUFDLEVBQUU7cUNBQ0UsT0FBTyxDQUFDLGVBQWUsR0FBRyxJQUFJLEVBQUUsSUFBSSxHQUFLLENBQUM7SUFDaEQsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFO0FBQ2QsQ0FBQztBQUVELEdBQUcsQ0FBQyxhQUFhLEdBQUcsQ0FBQztBQUFBLENBQUM7MkJBRXBCLENBQU8sUUFBRSxFQUFFLENBQUMsQ0FBUyxVQUFFLFFBQVEsQ0FBRSxDQUFnQixFQUFFLENBQUM7SUFDcEQsS0FBSyxDQUFDLEtBQUssOEJBQXVCLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSztJQUVqRCxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxNQUFNO0lBRXJCLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDekIsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtRQUNwQixNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU07UUFDaEIsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO1FBQ2xCLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRztJQUNaLENBQUM7SUFFRCxDQUFDLENBQUMsY0FBYztJQUNoQixLQUFLLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDcEQsQ0FBQzsyQkFFQyxDQUFNLE9BQUUsRUFBRSxDQUFDLENBQVEsYUFBUSxDQUFDO0lBQzVCLEVBQXNCLEFBQXRCLG9CQUFzQjt5Q0FDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLFNBQVMsRUFBRSxhQUFhO0lBQzFCLENBQUM7QUFDSCxDQUFDO1NBRVEsYUFBYSxDQUFDLFFBQWtCLEVBQUUsQ0FBQztJQUMxQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixFQUFFLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQU07SUFDM0MsRUFBRSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFPO0lBQzdDLEVBQUUsRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBSztJQUN6QyxFQUFFLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBSyxNQUNkLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBRzthQUNiLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBSyxNQUNyQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUs7SUFFeEIsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUc7SUFDdEIsRUFBRSxFQUFFLENBQUM7UUFBQSxDQUFTO1FBQUUsQ0FBTztRQUFFLENBQUs7UUFBRSxDQUFNO0lBQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUMzRCxHQUFHLEdBQUcsQ0FBRTtTQUNILEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDekIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXO0lBR3ZCLEVBQUUsRUFBRSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDdEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBRyxPQUFLLEdBQUcsS0FBSyxDQUFFLElBQUcsR0FBRyxHQUFHLENBQUcsS0FBRyxHQUFHO1NBRTFELE1BQU0sQ0FBQyxHQUFHO0FBRWQsQ0FBQzs7O0MsUSxDLE0sRSxPLEUsQztJLEUsRSxNLEMsTSxLLEMsYSxNLEMsRyxFLE0sQyxDLHdCLEM7USxDO0ksQyxFLE87UyxFLEUsTSxDLE8sSyxDLFksTyxDLE07UyxDO1EsRyxDLEcsRyxDO1ksTyxFLEM7WSxDO1EsQztRLE8sQyxHO1EsTSxDLE8sRyxHLEMsTztJLEM7QSxDLEUsTSxDLFUsSyxDLGEsVSxHLE0sQyxJLEssQyxhLEksRyxJLEUsUSxDLE0sRSxDO0lDcEZELEVBQUEsQUFBQSwyREFBQSxBQUFBLEVBQUEsQ0FDQSxFQUFBLEFBQUEseURBQUEsQUFBQSxFQUFBLENBQ0EsRUFBQSxBQUFBLCtCQUFBLEFBQUEsRUFBQSxDQUNBLEVBRUEsQUFGQTs7OERBRUEsQUFGQSxFQUVBLENBQ0EsQ0FBQTtJQUVBLEVBQUEsRUFBSSxNQUFBLENBQU9BLE9BQVAsS0FBbUIsQ0FBbkIsY0FBa0NDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkYsT0FBdEIsTUFBbUNDLE1BQU0sQ0FBQ0UsU0FBaEYsRUFBMkYsQ0FBM0Y7UUFDRSxLQUFBLENBQU1DLGdEQUFnRCxHQUFHLENBQXpEO1FBQ0EsS0FBQSxDQUFNQyxpQ0FBaUMsR0FBRyxDQUExQyx3UEFFQSxDQUZBLEFBRUEsRUFGQSxBQUVBLHlFQUZBO1FBR0EsRUFBQSxBQUFBLHNFQUFBO1FBQ0EsRUFBQSxBQUFBLDJFQUFBO1FBQ0EsRUFBQSxBQUFBLDBFQUFBO1FBQ0EsRUFBQSxBQUFBLDRCQUFBO1FBQ0EsS0FBQSxDQUFNQyxRQUFRLElBQUdDLGFBQWEsR0FBSSxDQUFsQztZQUNFLEVBQUEsQUFBQSw2RUFBQTtZQUNBLEVBQUEsQUFBQSwyRUFBQTtZQUNBLEVBQUEsQUFBQSxXQUFBO1lBQ0EsS0FBQSxDQUFNQyxXQUFXLEdBQUcsQ0FBcEI7Z0JBQ0UsQ0FBQSxTQUFVLENBQVY7b0JBQ0UsQ0FBQSxRQUFTLENBQVQ7d0JBQ0UsQ0FBQSxVQUFXLENBREo7d0JBRVAsQ0FBQSxVQUFXLENBQVg7b0JBRk8sQ0FERDtvQkFLUixDQUFBLFdBQVksQ0FBWjt3QkFDRSxDQUFBLFVBQVcsQ0FERDt3QkFFVixDQUFBLFVBQVcsQ0FBWDtvQkFGVSxDQUxKO29CQVNSLENBQUEsTUFBTyxDQUFQO3dCQUNFLENBQUEsVUFBVyxDQUROO3dCQUVMLENBQUEsVUFBVyxDQUFYO29CQUZLLENBVEM7b0JBYVIsQ0FBQSxTQUFVLENBQVY7d0JBQ0UsQ0FBQSxVQUFXLENBREg7d0JBRVIsQ0FBQSxVQUFXLENBQVg7b0JBRlEsQ0FBQTtnQkFiRixDQURRO2dCQW1CbEIsQ0FBQSxZQUFhLENBQWI7b0JBQ0UsQ0FBQSxTQUFVLENBQVY7d0JBQ0UsQ0FBQSxVQUFXLENBREg7d0JBRVIsQ0FBQSxVQUFXLENBQVg7b0JBRlEsQ0FEQztvQkFLWCxDQUFBLE1BQU8sQ0FBUDt3QkFDRSxDQUFBLFVBQVcsQ0FETjt3QkFFTCxDQUFBLFVBQVcsQ0FBWDtvQkFGSyxDQUxJO29CQVNYLENBQUEsY0FBZSxDQUFmO3dCQUNFLENBQUEsVUFBVyxDQURFO3dCQUViLENBQUEsVUFBVyxDQUFYO29CQUZhLENBVEo7b0JBYVgsQ0FBQSxZQUFhLENBQWI7d0JBQ0UsQ0FBQSxVQUFXLENBREE7d0JBRVgsQ0FBQSxVQUFXLENBQVg7b0JBRlcsQ0FiRjtvQkFpQlgsQ0FBQSxhQUFjLENBQWQ7d0JBQ0UsQ0FBQSxVQUFXLENBREM7d0JBRVosQ0FBQSxVQUFXLENBQVg7b0JBRlksQ0FqQkg7b0JBcUJYLENBQUEsVUFBVyxDQUFYO3dCQUNFLENBQUEsVUFBVyxDQURGO3dCQUVULENBQUEsVUFBVyxDQUFYO29CQUZTLENBckJBO29CQXlCWCxDQUFBLE9BQVEsQ0FBUjt3QkFDRSxDQUFBLFVBQVcsQ0FETDt3QkFFTixDQUFBLFVBQVcsQ0FBWDtvQkFGTSxDQXpCRztvQkE2QlgsQ0FBQSxTQUFVLENBQVY7d0JBQ0UsQ0FBQSxVQUFXLENBREg7d0JBRVIsQ0FBQSxVQUFXLENBQVg7b0JBRlEsQ0E3QkM7b0JBaUNYLENBQUEsYUFBYyxDQUFkO3dCQUNFLENBQUEsVUFBVyxDQURDO3dCQUVaLENBQUEsVUFBVyxDQUFYO29CQUZZLENBakNIO29CQXFDWCxDQUFBLFNBQVUsQ0FBVjt3QkFDRSxDQUFBLFVBQVcsQ0FESDt3QkFFUixDQUFBLFVBQVcsQ0FBWDtvQkFGUSxDQXJDQztvQkF5Q1gsQ0FBQSxTQUFVLENBQVY7d0JBQ0UsQ0FBQSxVQUFXLENBREg7d0JBRVIsQ0FBQSxVQUFXLENBQVg7b0JBRlEsQ0FBQTtnQkF6Q0MsQ0FuQks7Z0JBaUVsQixDQUFBLGdCQUFpQixDQUFqQjtvQkFDRSxDQUFBLFVBQVcsQ0FBWDt3QkFDRSxDQUFBLFVBQVcsQ0FERjt3QkFFVCxDQUFBLFVBQVcsQ0FGRjt3QkFHVCxDQUFBLHVCQUF3QixJQUF4QjtvQkFIUyxDQURJO29CQU1mLENBQUEsU0FBVSxDQUFWO3dCQUNFLENBQUEsVUFBVyxDQURIO3dCQUVSLENBQUEsVUFBVyxDQUZIO3dCQUdSLENBQUEsdUJBQXdCLElBQXhCO29CQUhRLENBTks7b0JBV2YsQ0FBQSwwQkFBMkIsQ0FBM0I7d0JBQ0UsQ0FBQSxVQUFXLENBRGM7d0JBRXpCLENBQUEsVUFBVyxDQUFYO29CQUZ5QixDQVhaO29CQWVmLENBQUEsZUFBZ0IsQ0FBaEI7d0JBQ0UsQ0FBQSxVQUFXLENBREc7d0JBRWQsQ0FBQSxVQUFXLENBQVg7b0JBRmMsQ0FmRDtvQkFtQmYsQ0FBQSxXQUFZLENBQVo7d0JBQ0UsQ0FBQSxVQUFXLENBREQ7d0JBRVYsQ0FBQSxVQUFXLENBQVg7b0JBRlUsQ0FuQkc7b0JBdUJmLENBQUEsV0FBWSxDQUFaO3dCQUNFLENBQUEsVUFBVyxDQUREO3dCQUVWLENBQUEsVUFBVyxDQUFYO29CQUZVLENBdkJHO29CQTJCZixDQUFBLFlBQWEsQ0FBYjt3QkFDRSxDQUFBLFVBQVcsQ0FEQTt3QkFFWCxDQUFBLFVBQVcsQ0FBWDtvQkFGVyxDQTNCRTtvQkErQmYsQ0FBQSwwQkFBMkIsQ0FBM0I7d0JBQ0UsQ0FBQSxVQUFXLENBRGM7d0JBRXpCLENBQUEsVUFBVyxDQUZjO3dCQUd6QixDQUFBLHVCQUF3QixJQUF4QjtvQkFIeUIsQ0EvQlo7b0JBb0NmLENBQUEsZUFBZ0IsQ0FBaEI7d0JBQ0UsQ0FBQSxVQUFXLENBREc7d0JBRWQsQ0FBQSxVQUFXLENBRkc7d0JBR2QsQ0FBQSx1QkFBd0IsSUFBeEI7b0JBSGMsQ0FwQ0Q7b0JBeUNmLENBQUEsVUFBVyxDQUFYO3dCQUNFLENBQUEsVUFBVyxDQURGO3dCQUVULENBQUEsVUFBVyxDQUFYO29CQUZTLENBekNJO29CQTZDZixDQUFBLFdBQVksQ0FBWjt3QkFDRSxDQUFBLFVBQVcsQ0FERDt3QkFFVixDQUFBLFVBQVcsQ0FGRDt3QkFHVixDQUFBLHVCQUF3QixJQUF4QjtvQkFIVSxDQTdDRztvQkFrRGYsQ0FBQSxXQUFZLENBQVo7d0JBQ0UsQ0FBQSxVQUFXLENBREQ7d0JBRVYsQ0FBQSxVQUFXLENBRkQ7d0JBR1YsQ0FBQSx1QkFBd0IsSUFBeEI7b0JBSFUsQ0FBQTtnQkFsREcsQ0FqRUM7Z0JBeUhsQixDQUFBLGVBQWdCLENBQWhCO29CQUNFLENBQUEsU0FBVSxDQUFWO3dCQUNFLENBQUEsVUFBVyxDQURIO3dCQUVSLENBQUEsVUFBVyxDQUFYO29CQUZRLENBREk7b0JBS2QsQ0FBQSxjQUFlLENBQWY7d0JBQ0UsQ0FBQSxVQUFXLENBREU7d0JBRWIsQ0FBQSxVQUFXLENBQVg7b0JBRmEsQ0FMRDtvQkFTZCxDQUFBLGdCQUFpQixDQUFqQjt3QkFDRSxDQUFBLFVBQVcsQ0FESTt3QkFFZixDQUFBLFVBQVcsQ0FBWDtvQkFGZSxDQVRIO29CQWFkLENBQUEsa0JBQW1CLENBQW5CO3dCQUNFLENBQUEsVUFBVyxDQURNO3dCQUVqQixDQUFBLFVBQVcsQ0FBWDtvQkFGaUIsQ0FiTDtvQkFpQmQsQ0FBQSxpQkFBa0IsQ0FBbEI7d0JBQ0UsQ0FBQSxVQUFXLENBREs7d0JBRWhCLENBQUEsVUFBVyxDQUFYO29CQUZnQixDQWpCSjtvQkFxQmQsQ0FBQSxnQkFBaUIsQ0FBakI7d0JBQ0UsQ0FBQSxVQUFXLENBREk7d0JBRWYsQ0FBQSxVQUFXLENBQVg7b0JBRmUsQ0FyQkg7b0JBeUJkLENBQUEscUJBQXNCLENBQXRCO3dCQUNFLENBQUEsVUFBVyxDQURTO3dCQUVwQixDQUFBLFVBQVcsQ0FBWDtvQkFGb0IsQ0F6QlI7b0JBNkJkLENBQUEsa0JBQW1CLENBQW5CO3dCQUNFLENBQUEsVUFBVyxDQURNO3dCQUVqQixDQUFBLFVBQVcsQ0FBWDtvQkFGaUIsQ0E3Qkw7b0JBaUNkLENBQUEsbUJBQW9CLENBQXBCO3dCQUNFLENBQUEsVUFBVyxDQURPO3dCQUVsQixDQUFBLFVBQVcsQ0FBWDtvQkFGa0IsQ0FqQ047b0JBcUNkLENBQUEsV0FBWSxDQUFaO3dCQUNFLENBQUEsVUFBVyxDQUREO3dCQUVWLENBQUEsVUFBVyxDQUFYO29CQUZVLENBQUE7Z0JBckNFLENBekhFO2dCQW1LbEIsQ0FBQSxXQUFZLENBQVo7b0JBQ0UsQ0FBQSxTQUFVLENBQVY7d0JBQ0UsQ0FBQSxVQUFXLENBREg7d0JBRVIsQ0FBQSxVQUFXLENBQVg7b0JBRlEsQ0FBQTtnQkFEQSxDQW5LTTtnQkF5S2xCLENBQUEsZUFBZ0IsQ0FBaEI7b0JBQ0UsQ0FBQSxTQUFVLENBQVY7d0JBQ0UsQ0FBQSxVQUFXLENBREg7d0JBRVIsQ0FBQSxVQUFXLENBQVg7b0JBRlEsQ0FESTtvQkFLZCxDQUFBLFlBQWEsQ0FBYjt3QkFDRSxDQUFBLFVBQVcsQ0FEQTt3QkFFWCxDQUFBLFVBQVcsQ0FBWDtvQkFGVyxDQUxDO29CQVNkLENBQUEsU0FBVSxDQUFWO3dCQUNFLENBQUEsVUFBVyxDQURIO3dCQUVSLENBQUEsVUFBVyxDQUFYO29CQUZRLENBQUE7Z0JBVEksQ0F6S0U7Z0JBdUxsQixDQUFBLFVBQVcsQ0FBWDtvQkFDRSxDQUFBLE1BQU8sQ0FBUDt3QkFDRSxDQUFBLFVBQVcsQ0FETjt3QkFFTCxDQUFBLFVBQVcsQ0FBWDtvQkFGSyxDQURFO29CQUtULENBQUEsU0FBVSxDQUFWO3dCQUNFLENBQUEsVUFBVyxDQURIO3dCQUVSLENBQUEsVUFBVyxDQUFYO29CQUZRLENBTEQ7b0JBU1QsQ0FBQSxxQkFBc0IsQ0FBdEI7d0JBQ0UsQ0FBQSxVQUFXLENBRFM7d0JBRXBCLENBQUEsVUFBVyxDQUFYO29CQUZvQixDQVRiO29CQWFULENBQUEsU0FBVSxDQUFWO3dCQUNFLENBQUEsVUFBVyxDQURIO3dCQUVSLENBQUEsVUFBVyxDQUFYO29CQUZRLENBYkQ7b0JBaUJULENBQUEsTUFBTyxDQUFQO3dCQUNFLENBQUEsVUFBVyxDQUROO3dCQUVMLENBQUEsVUFBVyxDQUFYO29CQUZLLENBQUE7Z0JBakJFLENBdkxPO2dCQTZNbEIsQ0FBQSxXQUFZLENBQVo7b0JBQ0UsQ0FBQSxrQkFBbUIsQ0FBbkI7d0JBQ0UsQ0FBQSxPQUFRLENBQVI7NEJBQ0UsQ0FBQSxVQUFXLENBREw7NEJBRU4sQ0FBQSxVQUFXLENBRkw7NEJBR04sQ0FBQSxvQkFBcUIsS0FBckI7d0JBSE0sQ0FBQTtvQkFEUyxDQURUO29CQVFWLENBQUEsU0FBVSxDQUFWO3dCQUNFLENBQUEsU0FBVSxDQUFWOzRCQUNFLENBQUEsVUFBVyxDQURIOzRCQUVSLENBQUEsVUFBVyxDQUZIOzRCQUdSLENBQUEsb0JBQXFCLElBQXJCO3dCQUhRLENBREY7d0JBTVIsQ0FBQSxXQUFZLENBQVo7NEJBQ0UsQ0FBQSxvQkFBcUIsQ0FBckI7Z0NBQ0UsQ0FBQSxVQUFXLENBRFE7Z0NBRW5CLENBQUEsVUFBVyxDQUFYOzRCQUZtQixDQUFBO3dCQURYLENBQUE7b0JBTkosQ0FBQTtnQkFSQSxDQTdNTTtnQkFtT2xCLENBQUEsWUFBYSxDQUFiO29CQUNFLENBQUEsU0FBVSxDQUFWO3dCQUNFLENBQUEsVUFBVyxDQURIO3dCQUVSLENBQUEsVUFBVyxDQUFYO29CQUZRLENBREM7b0JBS1gsQ0FBQSxXQUFZLENBQVo7d0JBQ0UsQ0FBQSxVQUFXLENBREQ7d0JBRVYsQ0FBQSxVQUFXLENBQVg7b0JBRlUsQ0FMRDtvQkFTWCxDQUFBLFFBQVMsQ0FBVDt3QkFDRSxDQUFBLFVBQVcsQ0FESjt3QkFFUCxDQUFBLFVBQVcsQ0FBWDtvQkFGTyxDQVRFO29CQWFYLENBQUEsY0FBZSxDQUFmO3dCQUNFLENBQUEsVUFBVyxDQURFO3dCQUViLENBQUEsVUFBVyxDQUFYO29CQUZhLENBYko7b0JBaUJYLENBQUEsT0FBUSxDQUFSO3dCQUNFLENBQUEsVUFBVyxDQURMO3dCQUVOLENBQUEsVUFBVyxDQUZMO3dCQUdOLENBQUEsdUJBQXdCLElBQXhCO29CQUhNLENBakJHO29CQXNCWCxDQUFBLFFBQVMsQ0FBVDt3QkFDRSxDQUFBLFVBQVcsQ0FESjt3QkFFUCxDQUFBLFVBQVcsQ0FBWDtvQkFGTyxDQXRCRTtvQkEwQlgsQ0FBQSxhQUFjLENBQWQ7d0JBQ0UsQ0FBQSxVQUFXLENBREM7d0JBRVosQ0FBQSxVQUFXLENBQVg7b0JBRlksQ0ExQkg7b0JBOEJYLENBQUEsU0FBVSxDQUFWO3dCQUNFLENBQUEsVUFBVyxDQURIO3dCQUVSLENBQUEsVUFBVyxDQUFYO29CQUZRLENBOUJDO29CQWtDWCxDQUFBLFNBQVUsQ0FBVjt3QkFDRSxDQUFBLFVBQVcsQ0FESDt3QkFFUixDQUFBLFVBQVcsQ0FBWDtvQkFGUSxDQWxDQztvQkFzQ1gsQ0FBQSxPQUFRLENBQVI7d0JBQ0UsQ0FBQSxVQUFXLENBREw7d0JBRU4sQ0FBQSxVQUFXLENBRkw7d0JBR04sQ0FBQSx1QkFBd0IsSUFBeEI7b0JBSE0sQ0FBQTtnQkF0Q0csQ0FuT0s7Z0JBK1FsQixDQUFBLFlBQWEsQ0FBYjtvQkFDRSxDQUFBLDRCQUE2QixDQUE3Qjt3QkFDRSxDQUFBLFVBQVcsQ0FEZ0I7d0JBRTNCLENBQUEsVUFBVyxDQUFYO29CQUYyQixDQURsQjtvQkFLWCxDQUFBLDJCQUE0QixDQUE1Qjt3QkFDRSxDQUFBLFVBQVcsQ0FEZTt3QkFFMUIsQ0FBQSxVQUFXLENBQVg7b0JBRjBCLENBQUE7Z0JBTGpCLENBL1FLO2dCQXlSbEIsQ0FBQSxVQUFXLENBQVg7b0JBQ0UsQ0FBQSxTQUFVLENBQVY7d0JBQ0UsQ0FBQSxVQUFXLENBREg7d0JBRVIsQ0FBQSxVQUFXLENBQVg7b0JBRlEsQ0FERDtvQkFLVCxDQUFBLFlBQWEsQ0FBYjt3QkFDRSxDQUFBLFVBQVcsQ0FEQTt3QkFFWCxDQUFBLFVBQVcsQ0FBWDtvQkFGVyxDQUxKO29CQVNULENBQUEsY0FBZSxDQUFmO3dCQUNFLENBQUEsVUFBVyxDQURFO3dCQUViLENBQUEsVUFBVyxDQUFYO29CQUZhLENBVE47b0JBYVQsQ0FBQSxZQUFhLENBQWI7d0JBQ0UsQ0FBQSxVQUFXLENBREE7d0JBRVgsQ0FBQSxVQUFXLENBQVg7b0JBRlcsQ0FiSjtvQkFpQlQsQ0FBQSxZQUFhLENBQWI7d0JBQ0UsQ0FBQSxVQUFXLENBREE7d0JBRVgsQ0FBQSxVQUFXLENBQVg7b0JBRlcsQ0FqQko7b0JBcUJULENBQUEsU0FBVSxDQUFWO3dCQUNFLENBQUEsVUFBVyxDQURIO3dCQUVSLENBQUEsVUFBVyxDQUFYO29CQUZRLENBQUE7Z0JBckJELENBelJPO2dCQW1UbEIsQ0FBQSxPQUFRLENBQVI7b0JBQ0UsQ0FBQSxpQkFBa0IsQ0FBbEI7d0JBQ0UsQ0FBQSxVQUFXLENBREs7d0JBRWhCLENBQUEsVUFBVyxDQUFYO29CQUZnQixDQURaO29CQUtOLENBQUEscUJBQXNCLENBQXRCO3dCQUNFLENBQUEsVUFBVyxDQURTO3dCQUVwQixDQUFBLFVBQVcsQ0FBWDtvQkFGb0IsQ0FBQTtnQkFMaEIsQ0FuVFU7Z0JBNlRsQixDQUFBLFdBQVksQ0FBWjtvQkFDRSxDQUFBLG9CQUFxQixDQUFyQjt3QkFDRSxDQUFBLFVBQVcsQ0FEUTt3QkFFbkIsQ0FBQSxVQUFXLENBQVg7b0JBRm1CLENBQUE7Z0JBRFgsQ0E3VE07Z0JBbVVsQixDQUFBLE9BQVEsQ0FBUjtvQkFDRSxDQUFBLGFBQWMsQ0FBZDt3QkFDRSxDQUFBLFVBQVcsQ0FEQzt3QkFFWixDQUFBLFVBQVcsQ0FBWDtvQkFGWSxDQUFBO2dCQURSLENBblVVO2dCQXlVbEIsQ0FBQSxhQUFjLENBQWQ7b0JBQ0UsQ0FBQSxNQUFPLENBQVA7d0JBQ0UsQ0FBQSxVQUFXLENBRE47d0JBRUwsQ0FBQSxVQUFXLENBQVg7b0JBRkssQ0FESztvQkFLWixDQUFBLFNBQVUsQ0FBVjt3QkFDRSxDQUFBLFVBQVcsQ0FESDt3QkFFUixDQUFBLFVBQVcsQ0FBWDtvQkFGUSxDQUxFO29CQVNaLENBQUEsVUFBVyxDQUFYO3dCQUNFLENBQUEsVUFBVyxDQURGO3dCQUVULENBQUEsVUFBVyxDQUFYO29CQUZTLENBVEM7b0JBYVosQ0FBQSxhQUFjLENBQWQ7d0JBQ0UsQ0FBQSxVQUFXLENBREM7d0JBRVosQ0FBQSxVQUFXLENBQVg7b0JBRlksQ0FiRjtvQkFpQlosQ0FBQSxnQkFBaUIsQ0FBakI7d0JBQ0UsQ0FBQSxVQUFXLENBREk7d0JBRWYsQ0FBQSxVQUFXLENBQVg7b0JBRmUsQ0FBQTtnQkFqQkwsQ0F6VUk7Z0JBK1ZsQixDQUFBLGdCQUFpQixDQUFqQjtvQkFDRSxDQUFBLFFBQVMsQ0FBVDt3QkFDRSxDQUFBLFVBQVcsQ0FESjt3QkFFUCxDQUFBLFVBQVcsQ0FBWDtvQkFGTyxDQURNO29CQUtmLENBQUEsU0FBVSxDQUFWO3dCQUNFLENBQUEsVUFBVyxDQURIO3dCQUVSLENBQUEsVUFBVyxDQUFYO29CQUZRLENBTEs7b0JBU2YsQ0FBQSxTQUFVLENBQVY7d0JBQ0UsQ0FBQSxVQUFXLENBREg7d0JBRVIsQ0FBQSxVQUFXLENBQVg7b0JBRlEsQ0FUSztvQkFhZixDQUFBLHFCQUFzQixDQUF0Qjt3QkFDRSxDQUFBLFVBQVcsQ0FEUzt3QkFFcEIsQ0FBQSxVQUFXLENBQVg7b0JBRm9CLENBYlA7b0JBaUJmLENBQUEsU0FBVSxDQUFWO3dCQUNFLENBQUEsVUFBVyxDQURIO3dCQUVSLENBQUEsVUFBVyxDQUFYO29CQUZRLENBQUE7Z0JBakJLLENBL1ZDO2dCQXFYbEIsQ0FBQSxhQUFjLENBQWQ7b0JBQ0UsQ0FBQSxXQUFZLENBQVo7d0JBQ0UsQ0FBQSxVQUFXLENBREQ7d0JBRVYsQ0FBQSxVQUFXLENBQVg7b0JBRlUsQ0FEQTtvQkFLWixDQUFBLFdBQVksQ0FBWjt3QkFDRSxDQUFBLFVBQVcsQ0FERDt3QkFFVixDQUFBLFVBQVcsQ0FBWDtvQkFGVSxDQUxBO29CQVNaLENBQUEsT0FBUSxDQUFSO3dCQUNFLENBQUEsVUFBVyxDQURMO3dCQUVOLENBQUEsVUFBVyxDQUZMO3dCQUdOLENBQUEsdUJBQXdCLElBQXhCO29CQUhNLENBVEk7b0JBY1osQ0FBQSxVQUFXLENBQVg7d0JBQ0UsQ0FBQSxVQUFXLENBREY7d0JBRVQsQ0FBQSxVQUFXLENBQVg7b0JBRlMsQ0FkQztvQkFrQlosQ0FBQSxXQUFZLENBQVo7d0JBQ0UsQ0FBQSxVQUFXLENBREQ7d0JBRVYsQ0FBQSxVQUFXLENBRkQ7d0JBR1YsQ0FBQSx1QkFBd0IsSUFBeEI7b0JBSFUsQ0FsQkE7b0JBdUJaLENBQUEsV0FBWSxDQUFaO3dCQUNFLENBQUEsVUFBVyxDQUREO3dCQUVWLENBQUEsVUFBVyxDQUZEO3dCQUdWLENBQUEsdUJBQXdCLElBQXhCO29CQUhVLENBdkJBO29CQTRCWixDQUFBLE9BQVEsQ0FBUjt3QkFDRSxDQUFBLFVBQVcsQ0FETDt3QkFFTixDQUFBLFVBQVcsQ0FGTDt3QkFHTixDQUFBLHVCQUF3QixJQUF4QjtvQkFITSxDQUFBO2dCQTVCSSxDQXJYSTtnQkF1WmxCLENBQUEsY0FBZSxDQUFmO29CQUNFLENBQUEsV0FBWSxDQUFaO3dCQUNFLENBQUEsVUFBVyxDQUREO3dCQUVWLENBQUEsVUFBVyxDQUFYO29CQUZVLENBREM7b0JBS2IsQ0FBQSxTQUFVLENBQVY7d0JBQ0UsQ0FBQSxVQUFXLENBREg7d0JBRVIsQ0FBQSxVQUFXLENBQVg7b0JBRlEsQ0FMRztvQkFTYixDQUFBLFNBQVUsQ0FBVjt3QkFDRSxDQUFBLFVBQVcsQ0FESDt3QkFFUixDQUFBLFVBQVcsQ0FBWDtvQkFGUSxDQVRHO29CQWFiLENBQUEsVUFBVyxDQUFYO3dCQUNFLENBQUEsVUFBVyxDQURGO3dCQUVULENBQUEsVUFBVyxDQUFYO29CQUZTLENBQUE7Z0JBYkUsQ0F2Wkc7Z0JBeWFsQixDQUFBLFVBQVcsQ0FBWDtvQkFDRSxDQUFBLG9CQUFxQixDQUFyQjt3QkFDRSxDQUFBLFVBQVcsQ0FEUTt3QkFFbkIsQ0FBQSxVQUFXLENBQVg7b0JBRm1CLENBRFo7b0JBS1QsQ0FBQSxrQkFBbUIsQ0FBbkI7d0JBQ0UsQ0FBQSxVQUFXLENBRE07d0JBRWpCLENBQUEsVUFBVyxDQUFYO29CQUZpQixDQUxWO29CQVNULENBQUEsa0JBQW1CLENBQW5CO3dCQUNFLENBQUEsVUFBVyxDQURNO3dCQUVqQixDQUFBLFVBQVcsQ0FBWDtvQkFGaUIsQ0FUVjtvQkFhVCxDQUFBLHFCQUFzQixDQUF0Qjt3QkFDRSxDQUFBLFVBQVcsQ0FEUzt3QkFFcEIsQ0FBQSxVQUFXLENBQVg7b0JBRm9CLENBYmI7b0JBaUJULENBQUEsY0FBZSxDQUFmO3dCQUNFLENBQUEsVUFBVyxDQURFO3dCQUViLENBQUEsVUFBVyxDQUFYO29CQUZhLENBakJOO29CQXFCVCxDQUFBLG9CQUFxQixDQUFyQjt3QkFDRSxDQUFBLFVBQVcsQ0FEUTt3QkFFbkIsQ0FBQSxVQUFXLENBQVg7b0JBRm1CLENBckJaO29CQXlCVCxDQUFBLGtCQUFtQixDQUFuQjt3QkFDRSxDQUFBLFVBQVcsQ0FETTt3QkFFakIsQ0FBQSxVQUFXLENBQVg7b0JBRmlCLENBQUE7Z0JBekJWLENBemFPO2dCQXVjbEIsQ0FBQSxXQUFZLENBQVo7b0JBQ0UsQ0FBQSxhQUFjLENBQWQ7d0JBQ0UsQ0FBQSxVQUFXLENBREM7d0JBRVosQ0FBQSxVQUFXLENBQVg7b0JBRlksQ0FESjtvQkFLVixDQUFBLG9CQUFxQixDQUFyQjt3QkFDRSxDQUFBLFVBQVcsQ0FEUTt3QkFFbkIsQ0FBQSxVQUFXLENBQVg7b0JBRm1CLENBTFg7b0JBU1YsQ0FBQSxVQUFXLENBQVg7d0JBQ0UsQ0FBQSxVQUFXLENBREY7d0JBRVQsQ0FBQSxVQUFXLENBQVg7b0JBRlMsQ0FBQTtnQkFURCxDQXZjTTtnQkFxZGxCLENBQUEsVUFBVyxDQUFYO29CQUNFLENBQUEsUUFBUyxDQUFUO3dCQUNFLENBQUEsUUFBUyxDQUFUOzRCQUNFLENBQUEsVUFBVyxDQURKOzRCQUVQLENBQUEsVUFBVyxDQUFYO3dCQUZPLENBREY7d0JBS1AsQ0FBQSxNQUFPLENBQVA7NEJBQ0UsQ0FBQSxVQUFXLENBRE47NEJBRUwsQ0FBQSxVQUFXLENBQVg7d0JBRkssQ0FMQTt3QkFTUCxDQUFBLGdCQUFpQixDQUFqQjs0QkFDRSxDQUFBLFVBQVcsQ0FESTs0QkFFZixDQUFBLFVBQVcsQ0FBWDt3QkFGZSxDQVRWO3dCQWFQLENBQUEsU0FBVSxDQUFWOzRCQUNFLENBQUEsVUFBVyxDQURIOzRCQUVSLENBQUEsVUFBVyxDQUFYO3dCQUZRLENBYkg7d0JBaUJQLENBQUEsTUFBTyxDQUFQOzRCQUNFLENBQUEsVUFBVyxDQUROOzRCQUVMLENBQUEsVUFBVyxDQUFYO3dCQUZLLENBQUE7b0JBakJBLENBREE7b0JBdUJULENBQUEsVUFBVyxDQUFYO3dCQUNFLENBQUEsTUFBTyxDQUFQOzRCQUNFLENBQUEsVUFBVyxDQUROOzRCQUVMLENBQUEsVUFBVyxDQUFYO3dCQUZLLENBREU7d0JBS1QsQ0FBQSxnQkFBaUIsQ0FBakI7NEJBQ0UsQ0FBQSxVQUFXLENBREk7NEJBRWYsQ0FBQSxVQUFXLENBQVg7d0JBRmUsQ0FBQTtvQkFMUixDQXZCRjtvQkFpQ1QsQ0FBQSxPQUFRLENBQVI7d0JBQ0UsQ0FBQSxRQUFTLENBQVQ7NEJBQ0UsQ0FBQSxVQUFXLENBREo7NEJBRVAsQ0FBQSxVQUFXLENBQVg7d0JBRk8sQ0FESDt3QkFLTixDQUFBLE1BQU8sQ0FBUDs0QkFDRSxDQUFBLFVBQVcsQ0FETjs0QkFFTCxDQUFBLFVBQVcsQ0FBWDt3QkFGSyxDQUxEO3dCQVNOLENBQUEsZ0JBQWlCLENBQWpCOzRCQUNFLENBQUEsVUFBVyxDQURJOzRCQUVmLENBQUEsVUFBVyxDQUFYO3dCQUZlLENBVFg7d0JBYU4sQ0FBQSxTQUFVLENBQVY7NEJBQ0UsQ0FBQSxVQUFXLENBREg7NEJBRVIsQ0FBQSxVQUFXLENBQVg7d0JBRlEsQ0FiSjt3QkFpQk4sQ0FBQSxNQUFPLENBQVA7NEJBQ0UsQ0FBQSxVQUFXLENBRE47NEJBRUwsQ0FBQSxVQUFXLENBQVg7d0JBRkssQ0FBQTtvQkFqQkQsQ0FBQTtnQkFqQ0MsQ0FyZE87Z0JBNmdCbEIsQ0FBQSxPQUFRLENBQVI7b0JBQ0UsQ0FBQSxvQkFBcUIsQ0FBckI7d0JBQ0UsQ0FBQSxVQUFXLENBRFE7d0JBRW5CLENBQUEsVUFBVyxDQUFYO29CQUZtQixDQURmO29CQUtOLENBQUEsU0FBVSxDQUFWO3dCQUNFLENBQUEsVUFBVyxDQURIO3dCQUVSLENBQUEsVUFBVyxDQUFYO29CQUZRLENBTEo7b0JBU04sQ0FBQSxpQkFBa0IsQ0FBbEI7d0JBQ0UsQ0FBQSxVQUFXLENBREs7d0JBRWhCLENBQUEsVUFBVyxDQUFYO29CQUZnQixDQVRaO29CQWFOLENBQUEsVUFBVyxDQUFYO3dCQUNFLENBQUEsVUFBVyxDQURGO3dCQUVULENBQUEsVUFBVyxDQUFYO29CQUZTLENBYkw7b0JBaUJOLENBQUEsWUFBYSxDQUFiO3dCQUNFLENBQUEsVUFBVyxDQURBO3dCQUVYLENBQUEsVUFBVyxDQUFYO29CQUZXLENBakJQO29CQXFCTixDQUFBLGdCQUFpQixDQUFqQjt3QkFDRSxDQUFBLFVBQVcsQ0FESTt3QkFFZixDQUFBLFVBQVcsQ0FBWDtvQkFGZSxDQXJCWDtvQkF5Qk4sQ0FBQSxNQUFPLENBQVA7d0JBQ0UsQ0FBQSxVQUFXLENBRE47d0JBRUwsQ0FBQSxVQUFXLENBQVg7b0JBRkssQ0F6QkQ7b0JBNkJOLENBQUEsYUFBYyxDQUFkO3dCQUNFLENBQUEsVUFBVyxDQURDO3dCQUVaLENBQUEsVUFBVyxDQUFYO29CQUZZLENBN0JSO29CQWlDTixDQUFBLFVBQVcsQ0FBWDt3QkFDRSxDQUFBLFVBQVcsQ0FERjt3QkFFVCxDQUFBLFVBQVcsQ0FBWDtvQkFGUyxDQWpDTDtvQkFxQ04sQ0FBQSxrQkFBbUIsQ0FBbkI7d0JBQ0UsQ0FBQSxVQUFXLENBRE07d0JBRWpCLENBQUEsVUFBVyxDQUFYO29CQUZpQixDQXJDYjtvQkF5Q04sQ0FBQSxTQUFVLENBQVY7d0JBQ0UsQ0FBQSxVQUFXLENBREg7d0JBRVIsQ0FBQSxVQUFXLENBQVg7b0JBRlEsQ0F6Q0o7b0JBNkNOLENBQUEsWUFBYSxDQUFiO3dCQUNFLENBQUEsVUFBVyxDQURBO3dCQUVYLENBQUEsVUFBVyxDQUFYO29CQUZXLENBN0NQO29CQWlETixDQUFBLFlBQWEsQ0FBYjt3QkFDRSxDQUFBLFVBQVcsQ0FEQTt3QkFFWCxDQUFBLFVBQVcsQ0FBWDtvQkFGVyxDQWpEUDtvQkFxRE4sQ0FBQSxZQUFhLENBQWI7d0JBQ0UsQ0FBQSxVQUFXLENBREE7d0JBRVgsQ0FBQSxVQUFXLENBQVg7b0JBRlcsQ0FyRFA7b0JBeUROLENBQUEsT0FBUSxDQUFSO3dCQUNFLENBQUEsVUFBVyxDQURMO3dCQUVOLENBQUEsVUFBVyxDQUFYO29CQUZNLENBekRGO29CQTZETixDQUFBLFFBQVMsQ0FBVDt3QkFDRSxDQUFBLFVBQVcsQ0FESjt3QkFFUCxDQUFBLFVBQVcsQ0FBWDtvQkFGTyxDQTdESDtvQkFpRU4sQ0FBQSxTQUFVLENBQVY7d0JBQ0UsQ0FBQSxVQUFXLENBREg7d0JBRVIsQ0FBQSxVQUFXLENBQVg7b0JBRlEsQ0FqRUo7b0JBcUVOLENBQUEsU0FBVSxDQUFWO3dCQUNFLENBQUEsVUFBVyxDQURIO3dCQUVSLENBQUEsVUFBVyxDQUFYO29CQUZRLENBckVKO29CQXlFTixDQUFBLFlBQWEsQ0FBYjt3QkFDRSxDQUFBLFVBQVcsQ0FEQTt3QkFFWCxDQUFBLFVBQVcsQ0FBWDtvQkFGVyxDQXpFUDtvQkE2RU4sQ0FBQSxjQUFlLENBQWY7d0JBQ0UsQ0FBQSxVQUFXLENBREU7d0JBRWIsQ0FBQSxVQUFXLENBQVg7b0JBRmEsQ0E3RVQ7b0JBaUZOLENBQUEsVUFBVyxDQUFYO3dCQUNFLENBQUEsVUFBVyxDQURGO3dCQUVULENBQUEsVUFBVyxDQUFYO29CQUZTLENBakZMO29CQXFGTixDQUFBLGtCQUFtQixDQUFuQjt3QkFDRSxDQUFBLFVBQVcsQ0FETTt3QkFFakIsQ0FBQSxVQUFXLENBQVg7b0JBRmlCLENBckZiO29CQXlGTixDQUFBLFNBQVUsQ0FBVjt3QkFDRSxDQUFBLFVBQVcsQ0FESDt3QkFFUixDQUFBLFVBQVcsQ0FBWDtvQkFGUSxDQUFBO2dCQXpGSixDQTdnQlU7Z0JBMm1CbEIsQ0FBQSxXQUFZLENBQVo7b0JBQ0UsQ0FBQSxNQUFPLENBQVA7d0JBQ0UsQ0FBQSxVQUFXLENBRE47d0JBRUwsQ0FBQSxVQUFXLENBQVg7b0JBRkssQ0FBQTtnQkFERyxDQTNtQk07Z0JBaW5CbEIsQ0FBQSxnQkFBaUIsQ0FBakI7b0JBQ0UsQ0FBQSxlQUFnQixDQUFoQjt3QkFDRSxDQUFBLFVBQVcsQ0FERzt3QkFFZCxDQUFBLFVBQVcsQ0FBWDtvQkFGYyxDQUREO29CQUtmLENBQUEsV0FBWSxDQUFaO3dCQUNFLENBQUEsVUFBVyxDQUREO3dCQUVWLENBQUEsVUFBVyxDQUFYO29CQUZVLENBQUE7Z0JBTEcsQ0FqbkJDO2dCQTJuQmxCLENBQUEsYUFBYyxDQUFkO29CQUNFLENBQUEseUJBQTBCLENBQTFCO3dCQUNFLENBQUEsVUFBVyxDQURhO3dCQUV4QixDQUFBLFVBQVcsQ0FBWDtvQkFGd0IsQ0FBQTtnQkFEZCxDQTNuQkk7Z0JBaW9CbEIsQ0FBQSxVQUFXLENBQVg7b0JBQ0UsQ0FBQSxTQUFVLENBQVY7d0JBQ0UsQ0FBQSxVQUFXLENBREg7d0JBRVIsQ0FBQSxVQUFXLENBQVg7b0JBRlEsQ0FERDtvQkFLVCxDQUFBLE1BQU8sQ0FBUDt3QkFDRSxDQUFBLFVBQVcsQ0FETjt3QkFFTCxDQUFBLFVBQVcsQ0FBWDtvQkFGSyxDQUxFO29CQVNULENBQUEsU0FBVSxDQUFWO3dCQUNFLENBQUEsVUFBVyxDQURIO3dCQUVSLENBQUEsVUFBVyxDQUFYO29CQUZRLENBVEQ7b0JBYVQsQ0FBQSxhQUFjLENBQWQ7d0JBQ0UsQ0FBQSxVQUFXLENBREM7d0JBRVosQ0FBQSxVQUFXLENBQVg7b0JBRlksQ0FiTDtvQkFpQlQsQ0FBQSxpQkFBa0IsQ0FBbEI7d0JBQ0UsQ0FBQSxVQUFXLENBREs7d0JBRWhCLENBQUEsVUFBVyxDQUFYO29CQUZnQixDQWpCVDtvQkFxQlQsQ0FBQSxTQUFVLENBQVY7d0JBQ0UsQ0FBQSxVQUFXLENBREg7d0JBRVIsQ0FBQSxVQUFXLENBQVg7b0JBRlEsQ0FyQkQ7b0JBeUJULENBQUEsU0FBVSxDQUFWO3dCQUNFLENBQUEsVUFBVyxDQURIO3dCQUVSLENBQUEsVUFBVyxDQUFYO29CQUZRLENBQUE7Z0JBekJELENBQUE7WUFqb0JPLENBQXBCO1lBaXFCQSxFQUFBLEVBQUlQLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZRCxXQUFaLEVBQXlCRSxNQUF6QixLQUFvQyxDQUF4QyxFQUNFLEtBQUEsQ0FBTSxHQUFBLENBQUlDLEtBQUosQ0FBVSxDQUFWO1lBR1IsRUFTSixBQVRJOzs7Ozs7Ozs7T0FTSixBQVRJLEVBU0osT0FDVUMsY0FBTixTQUE2QkMsT0FBN0I7NEJBQ2NFLFVBQUQsRUFBYUMsS0FBSyxDQUFjLENBQTNDRjtvQkFDRSxLQUFBLENBQU1FLEtBQU47b0JBQ0EsSUFBQSxDQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjtnQkFDRCxDQUFBO2dCQUVERyxHQUFHLENBQUNDLEdBQUQsRUFBTSxDQUFURDtvQkFDRSxFQUFBLEdBQUssSUFBQSxDQUFLRSxHQUFMLENBQVNELEdBQVQsR0FDSCxJQUFBLENBQUtFLEdBQUwsQ0FBU0YsR0FBVCxFQUFjLElBQUEsQ0FBS0osVUFBTCxDQUFnQkksR0FBaEI7b0JBR2hCLE1BQUEsQ0FBTyxLQUFBLENBQU1ELEdBQU4sQ0FBVUMsR0FBVjtnQkFDUixDQUFBOztZQUdILEVBTUosQUFOSTs7Ozs7O09BTUosQUFOSSxFQU1KLENBQ0ksS0FBQSxDQUFNRyxVQUFVLElBQUdDLEtBQUssR0FBSSxDQUE1QjtnQkFDRSxNQUFBLENBQU9BLEtBQUssSUFBSSxNQUFBLENBQU9BLEtBQVAsS0FBaUIsQ0FBMUIsV0FBc0MsTUFBQSxDQUFPQSxLQUFLLENBQUNDLElBQWIsS0FBc0IsQ0FBbkU7WUFDRCxDQUZEO1lBSUEsRUE4QkosQUE5Qkk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQThCSixBQTlCSSxFQThCSixDQUNJLEtBQUEsQ0FBTUMsWUFBWSxJQUFJQyxPQUFELEVBQVVDLFFBQVYsR0FBdUIsQ0FBNUM7Z0JBQ0UsTUFBQSxLQUFXQyxZQUFKLEdBQXFCLENBQTVCO29CQUNFLEVBQUEsRUFBSXJCLGFBQWEsQ0FBQ3NCLE9BQWQsQ0FBc0JDLFNBQTFCLEVBQ0VKLE9BQU8sQ0FBQ0ssTUFBUixDQUFlLEdBQUEsQ0FBSXBCLEtBQUosQ0FBVUosYUFBYSxDQUFDc0IsT0FBZCxDQUFzQkMsU0FBdEIsQ0FBZ0NFLE9BQTFDO3lCQUNWLEVBQUEsRUFBSUwsUUFBUSxDQUFDTSxpQkFBVCxJQUNDTCxZQUFZLENBQUNsQixNQUFiLElBQXVCLENBQXZCLElBQTRCaUIsUUFBUSxDQUFDTSxpQkFBVCxLQUErQixLQURoRSxFQUVMUCxPQUFPLENBQUNRLE9BQVIsQ0FBZ0JOLFlBQVksQ0FBQyxDQUFEO3lCQUU1QkYsT0FBTyxDQUFDUSxPQUFSLENBQWdCTixZQUFoQjtnQkFFSCxDQVREO1lBVUQsQ0FYRDtZQWFBLEtBQUEsQ0FBTU8sa0JBQWtCLElBQUlDLE9BQUQsR0FBYUEsT0FBTyxJQUFJLENBQVgsR0FBZSxDQUFmLFlBQTRCLENBQXBFOztZQUVBLEVBeUJKLEFBekJJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BeUJKLEFBekJJLEVBeUJKLENBQ0ksS0FBQSxDQUFNQyxpQkFBaUIsSUFBSUMsSUFBRCxFQUFPWCxRQUFQLEdBQW9CLENBQTlDO2dCQUNFLE1BQUEsQ0FBTyxRQUFBLENBQVNZLG9CQUFULENBQThCQyxNQUE5QixLQUF5Q0MsSUFBekMsRUFBK0MsQ0FBdEQ7b0JBQ0UsRUFBQSxFQUFJQSxJQUFJLENBQUMvQixNQUFMLEdBQWNpQixRQUFRLENBQUNlLE9BQTNCLEVBQ0UsS0FBQSxDQUFNLEdBQUEsQ0FBSS9CLEtBQUosRUFBVyxrQkFBQSxFQUFvQmdCLFFBQVEsQ0FBQ2UsT0FBUSxDQUFBLENBQUEsRUFBR1Asa0JBQWtCLENBQUNSLFFBQVEsQ0FBQ2UsT0FBVixFQUFtQixLQUFBLEVBQU9KLElBQUssQ0FBQSxRQUFBLEVBQVVHLElBQUksQ0FBQy9CLE1BQU87b0JBR2xJLEVBQUEsRUFBSStCLElBQUksQ0FBQy9CLE1BQUwsR0FBY2lCLFFBQVEsQ0FBQ2dCLE9BQTNCLEVBQ0UsS0FBQSxDQUFNLEdBQUEsQ0FBSWhDLEtBQUosRUFBVyxpQkFBQSxFQUFtQmdCLFFBQVEsQ0FBQ2dCLE9BQVEsQ0FBQSxDQUFBLEVBQUdSLGtCQUFrQixDQUFDUixRQUFRLENBQUNnQixPQUFWLEVBQW1CLEtBQUEsRUFBT0wsSUFBSyxDQUFBLFFBQUEsRUFBVUcsSUFBSSxDQUFDL0IsTUFBTztvQkFHakksTUFBQSxDQUFPLEdBQUEsQ0FBSWtDLE9BQUosRUFBYVYsT0FBRCxFQUFVSCxNQUFWLEdBQXFCLENBQXhDO3dCQUNFLEVBQUEsRUFBSUosUUFBUSxDQUFDa0Isb0JBQWIsRUFDRSxFQUFBLEFBQUEseUZBQUE7d0JBQ0EsRUFBQSxBQUFBLG9GQUFBO3dCQUNBLEVBQUEsQUFBQSxxREFBQTt3QkFDQSxHQUFBLENBQUksQ0FBSjs0QkFDRUwsTUFBTSxDQUFDRixJQUFELEtBQVVHLElBQWhCLEVBQXNCaEIsWUFBWSxDQUFDLENBQW5DZTtnQ0FBb0NOLE9BQUQ7Z0NBQVVILE1BQUFBOzRCQUFWLENBQUQsRUFBb0JKLFFBQXBCO3dCQUNuQyxDQUZELENBRUUsS0FBQSxFQUFPbUIsT0FBUCxFQUFnQixDQUFqQjs0QkFDQ0MsT0FBTyxDQUFDQyxJQUFSLElBQWdCVixJQUFLLENBQUEsNERBQUEsSUFDUixDQURiLCtDQUM2RFEsT0FEN0Q7NEJBR0FOLE1BQU0sQ0FBQ0YsSUFBRCxLQUFVRyxJQUFoQixFQUVBLENBRkFELEFBRUEsRUFGQUEsQUFFQSwyRUFGQUE7NEJBR0EsRUFBQSxBQUFBLHNDQUFBOzRCQUNBYixRQUFRLENBQUNrQixvQkFBVCxHQUFnQyxLQUFoQzs0QkFDQWxCLFFBQVEsQ0FBQ3NCLFVBQVQsR0FBc0IsSUFBdEI7NEJBRUFmLE9BQU87d0JBQ1IsQ0FBQTs2QkFDSSxFQUFBLEVBQUlQLFFBQVEsQ0FBQ3NCLFVBQWIsRUFBeUIsQ0FBL0I7NEJBQ0NULE1BQU0sQ0FBQ0YsSUFBRCxLQUFVRyxJQUFoQjs0QkFDQVAsT0FBTzt3QkFDUixDQUhNLE1BSUxNLE1BQU0sQ0FBQ0YsSUFBRCxLQUFVRyxJQUFoQixFQUFzQmhCLFlBQVksQ0FBQyxDQUFuQ2U7NEJBQW9DTixPQUFEOzRCQUFVSCxNQUFBQTt3QkFBVixDQUFELEVBQW9CSixRQUFwQjtvQkFFckMsQ0ExQk07Z0JBMkJSLENBcENEO1lBcUNELENBdENEO1lBd0NBLEVBa0JKLEFBbEJJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQkosQUFsQkksRUFrQkosQ0FDSSxLQUFBLENBQU11QixVQUFVLElBQUlWLE1BQUQsRUFBU1csTUFBVCxFQUFpQkMsT0FBakIsR0FBNkIsQ0FBaEQ7Z0JBQ0UsTUFBQSxDQUFPLEdBQUEsQ0FBSUMsS0FBSixDQUFVRixNQUFWLEVBQWtCLENBQXpCO29CQUNFRyxLQUFLLEVBQUNDLFlBQUQsRUFBZUMsT0FBZixFQUF3QmYsSUFBeEIsRUFBOEIsQ0FBbkNhO3dCQUNFLE1BQUEsQ0FBT0YsT0FBTyxDQUFDSyxJQUFSLENBQWFELE9BQWIsRUFBc0JoQixNQUF0QixLQUFpQ0MsSUFBakM7b0JBQ1IsQ0FBQTtnQkFIc0IsQ0FBbEI7WUFLUixDQU5EO1lBUUEsR0FBQSxDQUFJaUIsY0FBYyxHQUFHQyxRQUFRLENBQUNGLElBQVQsQ0FBY0csSUFBZCxDQUFtQjNELE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQnVELGNBQXBDO1lBRXJCLEVBc0JKLEFBdEJJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bc0JKLEFBdEJJLEVBc0JKLENBQ0ksS0FBQSxDQUFNRyxVQUFVLElBQUlyQixNQUFELEVBQVNzQixRQUFRLEdBQUcsQ0FBQTtZQUFBLENBQXBCLEVBQXdCbkMsUUFBUSxHQUFHLENBQUE7WUFBQSxDQUFuQyxHQUEwQyxDQUE3RDtnQkFDRSxHQUFBLENBQUlvQyxLQUFLLEdBQUc5RCxNQUFNLENBQUMrRCxNQUFQLENBQWMsSUFBZDtnQkFDWixHQUFBLENBQUlDLFFBQVEsR0FBRyxDQUFmO29CQUNFN0MsR0FBRyxFQUFDOEMsV0FBRCxFQUFjQyxJQUFkLEVBQW9CLENBQXZCL0M7d0JBQ0UsTUFBQSxDQUFPK0MsSUFBSSxJQUFJM0IsTUFBUixJQUFrQjJCLElBQUksSUFBSUosS0FBakM7b0JBQ0QsQ0FIWTtvQkFLYjdDLEdBQUcsRUFBQ2dELFdBQUQsRUFBY0MsSUFBZCxFQUFvQkMsUUFBcEIsRUFBOEIsQ0FBakNsRDt3QkFDRSxFQUFBLEVBQUlpRCxJQUFJLElBQUlKLEtBQVosRUFDRSxNQUFBLENBQU9BLEtBQUssQ0FBQ0ksSUFBRDt3QkFHZCxFQUFBLElBQU1BLElBQUksSUFBSTNCLE1BQVYsR0FDRixNQUFBLENBQU92QixTQUFQO3dCQUdGLEdBQUEsQ0FBSU0sTUFBSyxHQUFHaUIsTUFBTSxDQUFDMkIsSUFBRDt3QkFFbEIsRUFBQSxFQUFJLE1BQUEsQ0FBTzVDLE1BQVAsS0FBaUIsQ0FBckIsV0FBaUMsQ0FBakM7NEJBQ0UsRUFBQSxBQUFBLGtFQUFBOzRCQUNBLEVBQUEsQUFBQSxjQUFBOzRCQUVBLEVBQUEsRUFBSSxNQUFBLENBQU91QyxRQUFRLENBQUNLLElBQUQsTUFBVyxDQUE5QixXQUNFLEVBQUEsQUFBQSxnREFBQTs0QkFDQTVDLE1BQUssR0FBRzJCLFVBQVUsQ0FBQ1YsTUFBRCxFQUFTQSxNQUFNLENBQUMyQixJQUFELEdBQVFMLFFBQVEsQ0FBQ0ssSUFBRDtpQ0FDNUMsRUFBQSxFQUFJVCxjQUFjLENBQUMvQixRQUFELEVBQVd3QyxJQUFYLEdBQWtCLENBQTFDO2dDQUNDLEVBQUEsQUFBQSw0REFBQTtnQ0FDQSxFQUFBLEFBQUEsd0JBQUE7Z0NBQ0EsR0FBQSxDQUFJZixPQUFPLEdBQUdmLGlCQUFpQixDQUFDOEIsSUFBRCxFQUFPeEMsUUFBUSxDQUFDd0MsSUFBRDtnQ0FDOUM1QyxNQUFLLEdBQUcyQixVQUFVLENBQUNWLE1BQUQsRUFBU0EsTUFBTSxDQUFDMkIsSUFBRCxHQUFRZixPQUF2Qjs0QkFDbkIsQ0FMTSxNQU1MLEVBQUEsQUFBQSw4REFBQTs0QkFDQSxFQUFBLEFBQUEsaURBQUE7NEJBQ0E3QixNQUFLLEdBQUdBLE1BQUssQ0FBQ3FDLElBQU4sQ0FBV3BCLE1BQVg7d0JBRVgsQ0FqQkQsTUFpQk8sRUFBQSxFQUFJLE1BQUEsQ0FBT2pCLE1BQVAsS0FBaUIsQ0FBakIsV0FBNkJBLE1BQUssS0FBSyxJQUF2QyxLQUNDbUMsY0FBYyxDQUFDSSxRQUFELEVBQVdLLElBQVgsS0FDZFQsY0FBYyxDQUFDL0IsUUFBRCxFQUFXd0MsSUFBWCxJQUN4QixFQUFBLEFBQUEsb0VBQUE7d0JBQ0EsRUFBQSxBQUFBLGtFQUFBO3dCQUNBLEVBQUEsQUFBQSxVQUFBO3dCQUNBNUMsTUFBSyxHQUFHc0MsVUFBVSxDQUFDdEMsTUFBRCxFQUFRdUMsUUFBUSxDQUFDSyxJQUFELEdBQVF4QyxRQUFRLENBQUN3QyxJQUFEOzZCQUM3QyxFQUFBLEVBQUlULGNBQWMsQ0FBQy9CLFFBQUQsRUFBVyxDQUFYLEtBQ3ZCLEVBQUEsQUFBQSxvQ0FBQTt3QkFDQUosTUFBSyxHQUFHc0MsVUFBVSxDQUFDdEMsTUFBRCxFQUFRdUMsUUFBUSxDQUFDSyxJQUFELEdBQVF4QyxRQUFRLENBQUMsQ0FBRDs2QkFDN0MsQ0FBTjs0QkFDQyxFQUFBLEFBQUEsb0RBQUE7NEJBQ0EsRUFBQSxBQUFBLHFEQUFBOzRCQUNBMUIsTUFBTSxDQUFDb0UsY0FBUCxDQUFzQk4sS0FBdEIsRUFBNkJJLElBQTdCLEVBQW1DLENBQW5DbEU7Z0NBQ0VxRSxZQUFZLEVBQUUsSUFEbUI7Z0NBRWpDQyxVQUFVLEVBQUUsSUFGcUI7Z0NBR2pDckQsR0FBRyxJQUFHLENBQU5BO29DQUNFLE1BQUEsQ0FBT3NCLE1BQU0sQ0FBQzJCLElBQUQ7Z0NBQ2QsQ0FMZ0M7Z0NBTWpDOUMsR0FBRyxFQUFDRSxLQUFELEVBQVEsQ0FBWEY7b0NBQ0VtQixNQUFNLENBQUMyQixJQUFELElBQVM1QyxLQUFmO2dDQUNELENBQUE7NEJBUmdDLENBQW5DOzRCQVdBLE1BQUEsQ0FBT0EsTUFBUDt3QkFDRCxDQUFBO3dCQUVEd0MsS0FBSyxDQUFDSSxJQUFELElBQVM1QyxNQUFkO3dCQUNBLE1BQUEsQ0FBT0EsTUFBUDtvQkFDRCxDQTlEWTtvQkFnRWJGLEdBQUcsRUFBQzZDLFdBQUQsRUFBY0MsSUFBZCxFQUFvQjVDLEtBQXBCLEVBQTJCNkMsUUFBM0IsRUFBcUMsQ0FBeEMvQzt3QkFDRSxFQUFBLEVBQUk4QyxJQUFJLElBQUlKLEtBQVosRUFDRUEsS0FBSyxDQUFDSSxJQUFELElBQVM1QyxLQUFkOzZCQUVBaUIsTUFBTSxDQUFDMkIsSUFBRCxJQUFTNUMsS0FBZjt3QkFFRixNQUFBLENBQU8sSUFBUDtvQkFDRCxDQXZFWTtvQkF5RWI4QyxjQUFjLEVBQUNILFdBQUQsRUFBY0MsSUFBZCxFQUFvQkssSUFBcEIsRUFBMEIsQ0FBeENIO3dCQUNFLE1BQUEsQ0FBT0ksT0FBTyxDQUFDSixjQUFSLENBQXVCTixLQUF2QixFQUE4QkksSUFBOUIsRUFBb0NLLElBQXBDO29CQUNSLENBM0VZO29CQTZFYkUsY0FBYyxFQUFDUixXQUFELEVBQWNDLElBQWQsRUFBb0IsQ0FBbENPO3dCQUNFLE1BQUEsQ0FBT0QsT0FBTyxDQUFDQyxjQUFSLENBQXVCWCxLQUF2QixFQUE4QkksSUFBOUI7b0JBQ1IsQ0FBQTtnQkEvRVksQ0FBZixDQWtGQSxDQWxGZSxBQWtGZixFQWxGZSxBQWtGZix1RUFsRmU7Z0JBbUZmLEVBQUEsQUFBQSxxRUFBQTtnQkFDQSxFQUFBLEFBQUEsZ0VBQUE7Z0JBQ0EsRUFBQSxBQUFBLDhEQUFBO2dCQUNBLEVBQUEsQUFBQSx5REFBQTtnQkFDQSxFQUFBLEFBQUEsd0VBQUE7Z0JBQ0EsRUFBQTtnQkFDQSxFQUFBLEFBQUEsbUVBQUE7Z0JBQ0EsRUFBQSxBQUFBLHFFQUFBO2dCQUNBLEVBQUEsQUFBQSx1Q0FBQTtnQkFDQSxHQUFBLENBQUlELFdBQVcsR0FBR2pFLE1BQU0sQ0FBQytELE1BQVAsQ0FBY3hCLE1BQWQ7Z0JBQ2xCLE1BQUEsQ0FBTyxHQUFBLENBQUlhLEtBQUosQ0FBVWEsV0FBVixFQUF1QkQsUUFBdkI7WUFDUixDQWhHRDtZQWtHQSxFQWVKLEFBZkk7Ozs7Ozs7Ozs7Ozs7OztPQWVKLEFBZkksRUFlSixDQUNJLEtBQUEsQ0FBTVUsU0FBUyxJQUFHQyxVQUFVLElBQUssQ0FBakM7b0JBQ0VDLFdBQVcsRUFBQ3JDLE1BQUQsRUFBU3NDLFFBQVQsS0FBc0JyQyxJQUF0QixFQUE0QixDQUF2Q29DO3dCQUNFckMsTUFBTSxDQUFDcUMsV0FBUCxDQUFtQkQsVUFBVSxDQUFDMUQsR0FBWCxDQUFlNEQsUUFBZixNQUE2QnJDLElBQWhEO29CQUNELENBSDhCO29CQUsvQnNDLFdBQVcsRUFBQ3ZDLE1BQUQsRUFBU3NDLFFBQVQsRUFBbUIsQ0FBOUJDO3dCQUNFLE1BQUEsQ0FBT3ZDLE1BQU0sQ0FBQ3VDLFdBQVAsQ0FBbUJILFVBQVUsQ0FBQzFELEdBQVgsQ0FBZTRELFFBQWY7b0JBQzNCLENBUDhCO29CQVMvQkUsY0FBYyxFQUFDeEMsTUFBRCxFQUFTc0MsUUFBVCxFQUFtQixDQUFqQ0U7d0JBQ0V4QyxNQUFNLENBQUN3QyxjQUFQLENBQXNCSixVQUFVLENBQUMxRCxHQUFYLENBQWU0RCxRQUFmO29CQUN2QixDQUFBO2dCQVg4QixDQUFMOztZQWM1QixLQUFBLENBQU1HLHlCQUF5QixHQUFHLEdBQUEsQ0FBSXJFLGNBQUosRUFBbUJrRSxRQUFRLEdBQUksQ0FBakU7Z0JBQ0UsRUFBQSxFQUFJLE1BQUEsQ0FBT0EsUUFBUCxLQUFvQixDQUF4QixXQUNFLE1BQUEsQ0FBT0EsUUFBUDtnQkFHRixFQU9OLEFBUE07Ozs7Ozs7U0FPTixBQVBNLEVBT04sQ0FDTSxNQUFBLENBQU8sUUFBQSxDQUFTSSxpQkFBVCxDQUEyQkMsR0FBM0IsRUFBZ0MsQ0FBdkM7b0JBQ0UsS0FBQSxDQUFNQyxVQUFVLEdBQUd2QixVQUFVLENBQUNzQixHQUFELEVBQU0sQ0FBbkM7b0JBQUEsQ0FBQSxFQUFzRCxDQUF6Qjt3QkFDM0JFLFVBQVUsRUFBRSxDQUFaQTs0QkFDRTNDLE9BQU8sRUFBRSxDQURDOzRCQUVWQyxPQUFPLEVBQUUsQ0FBVEE7d0JBRlUsQ0FBQTtvQkFEd0MsQ0FBekI7b0JBTTdCbUMsUUFBUSxDQUFDTSxVQUFEO2dCQUNULENBUkQ7WUFTRCxDQXRCaUMsRUF3QmxDLENBRkMsQUFFRCxFQUZDLEFBRUQscUVBRkM7WUFHRCxHQUFBLENBQUlFLG9DQUFvQyxHQUFHLEtBQTNDO1lBRUEsS0FBQSxDQUFNQyxpQkFBaUIsR0FBRyxHQUFBLENBQUkzRSxjQUFKLEVBQW1Ca0UsUUFBUSxHQUFJLENBQXpEO2dCQUNFLEVBQUEsRUFBSSxNQUFBLENBQU9BLFFBQVAsS0FBb0IsQ0FBeEIsV0FDRSxNQUFBLENBQU9BLFFBQVA7Z0JBR0YsRUFnQk4sQUFoQk07Ozs7Ozs7Ozs7Ozs7Ozs7U0FnQk4sQUFoQk0sRUFnQk4sQ0FDTSxNQUFBLENBQU8sUUFBQSxDQUFTVSxTQUFULENBQW1CeEQsUUFBbkIsRUFBNEJ5RCxNQUE1QixFQUFvQ0MsWUFBcEMsRUFBa0QsQ0FBekQ7b0JBQ0UsR0FBQSxDQUFJQyxtQkFBbUIsR0FBRyxLQUExQjtvQkFFQSxHQUFBLENBQUlDLG1CQUFKO29CQUNBLEdBQUEsQ0FBSUMsbUJBQW1CLEdBQUcsR0FBQSxDQUFJakQsT0FBSixFQUFZVixPQUFPLEdBQUksQ0FBakQ7d0JBQ0UwRCxtQkFBbUIsR0FBRyxRQUFBLENBQVNFLFFBQVQsRUFBbUIsQ0FBekNGOzRCQUNFLEVBQUEsR0FBS04sb0NBQUwsRUFBMkMsQ0FBM0M7Z0NBQ0V2QyxPQUFPLENBQUNDLElBQVIsQ0FBYTNDLGlDQUFiLEVBQWdELEdBQUEsQ0FBSU0sS0FBSixHQUFZb0YsS0FBNUQ7Z0NBQ0FULG9DQUFvQyxHQUFHLElBQXZDOzRCQUNELENBQUE7NEJBQ0RLLG1CQUFtQixHQUFHLElBQXRCOzRCQUNBekQsT0FBTyxDQUFDNEQsUUFBRDt3QkFDUixDQVBEO29CQVFELENBVHlCO29CQVcxQixHQUFBLENBQUlFLE1BQUo7b0JBQ0EsR0FBQSxDQUFJLENBQUo7d0JBQ0VBLE1BQU0sR0FBR2xCLFFBQVEsQ0FBQzlDLFFBQUQsRUFBVXlELE1BQVYsRUFBa0JHLG1CQUFsQjtvQkFDbEIsQ0FGRCxDQUVFLEtBQUEsRUFBT0ssSUFBUCxFQUFZLENBQWI7d0JBQ0NELE1BQU0sR0FBR3BELE9BQU8sQ0FBQ2IsTUFBUixDQUFla0UsSUFBZjtvQkFDVixDQUFBO29CQUVELEtBQUEsQ0FBTUMsZ0JBQWdCLEdBQUdGLE1BQU0sS0FBSyxJQUFYLElBQW1CMUUsVUFBVSxDQUFDMEUsTUFBRCxFQUV0RCxDQUZBLEFBRUEsRUFGQSxBQUVBLDZEQUZBO29CQUdBLEVBQUEsQUFBQSx1REFBQTtvQkFDQSxFQUFBLEFBQUEsMkRBQUE7b0JBQ0EsRUFBQSxFQUFJQSxNQUFNLEtBQUssSUFBWCxLQUFvQkUsZ0JBQXBCLEtBQXlDUCxtQkFBN0MsRUFDRSxNQUFBLENBQU8sS0FBUDtvQkFHRixDQUZDLEFBRUQsRUFGQyxBQUVELDJEQUZDO29CQUdELEVBQUEsQUFBQSwrREFBQTtvQkFDQSxFQUFBLEFBQUEsK0RBQUE7b0JBQ0EsRUFBQSxBQUFBLFVBQUE7b0JBQ0EsS0FBQSxDQUFNUSxrQkFBa0IsSUFBSXpFLE9BQUQsR0FBYSxDQUF4Qzt3QkFDRUEsT0FBTyxDQUFDRixJQUFSLEVBQWE0RSxHQUFHLEdBQUksQ0FBcEIxRTs0QkFDRSxFQUFBLEFBQUEsd0JBQUE7NEJBQ0FnRSxZQUFZLENBQUNVLEdBQUQ7d0JBQ2IsQ0FIRCxHQUdHQyxLQUFLLEdBQUksQ0FBWDs0QkFDQyxFQUFBLEFBQUEsOERBQUE7NEJBQ0EsRUFBQSxBQUFBLHlEQUFBOzRCQUNBLEdBQUEsQ0FBSXJFLE9BQUo7NEJBQ0EsRUFBQSxFQUFJcUUsS0FBSyxLQUFLQSxLQUFLLFlBQVkxRixLQUFqQixJQUNWLE1BQUEsQ0FBTzBGLEtBQUssQ0FBQ3JFLE9BQWIsS0FBeUIsQ0FEcEIsVUFFUEEsT0FBTyxHQUFHcUUsS0FBSyxDQUFDckUsT0FBaEI7aUNBRUFBLE9BQU8sR0FBRyxDQUFWOzRCQUdGMEQsWUFBWSxDQUFDLENBQWJBO2dDQUNFWSxpQ0FBaUMsRUFBRSxJQUR4QjtnQ0FFWHRFLE9BQUFBOzRCQUZXLENBQUQ7d0JBSWIsQ0FsQkQsRUFrQkd1RSxLQWxCSCxFQWtCU04sR0FBRyxHQUFJLENBQWY7NEJBQ0MsRUFBQSxBQUFBLDhEQUFBOzRCQUNBbEQsT0FBTyxDQUFDc0QsS0FBUixDQUFjLENBQWQsMENBQXlESixHQUF6RDt3QkFDRCxDQXJCRDtvQkFzQkQsQ0F2QkQsQ0F5QkEsQ0FGQyxBQUVELEVBRkMsQUFFRCxpRUFGQztvQkFHRCxFQUFBLEFBQUEsc0VBQUE7b0JBQ0EsRUFBQSxBQUFBLCtDQUFBO29CQUNBLEVBQUEsRUFBSUMsZ0JBQUosRUFDRUMsa0JBQWtCLENBQUNILE1BQUQ7eUJBRWxCRyxrQkFBa0IsQ0FBQ04sbUJBQUQ7b0JBR3BCLENBRkMsQUFFRCxFQUZDLEFBRUQsK0NBRkM7b0JBR0QsTUFBQSxDQUFPLElBQVA7Z0JBQ0QsQ0F2RUQ7WUF3RUQsQ0E5RnlCO1lBZ0cxQixLQUFBLENBQU1XLDBCQUEwQixJQUFJLENBQXBDLENBQXFDekUsTUFBRCxHQUFTRyxPQUFBQSxFQUFULENBQUQsRUFBb0J1RSxLQUFwQixHQUE4QixDQUE3QjtnQkFDbEMsRUFBQSxFQUFJbEcsYUFBYSxDQUFDc0IsT0FBZCxDQUFzQkMsU0FBMUI7b0JBQ0UsRUFBQSxBQUFBLDhFQUFBO29CQUNBLEVBQUEsQUFBQSx3Q0FBQTtvQkFDQSxFQUFBLEFBQUEsZ0VBQUE7b0JBQ0EsRUFBQSxFQUFJdkIsYUFBYSxDQUFDc0IsT0FBZCxDQUFzQkMsU0FBdEIsQ0FBZ0NFLE9BQWhDLEtBQTRDNUIsZ0RBQWhELEVBQ0U4QixPQUFPO3lCQUVQSCxNQUFNLENBQUMsR0FBQSxDQUFJcEIsS0FBSixDQUFVSixhQUFhLENBQUNzQixPQUFkLENBQXNCQyxTQUF0QixDQUFnQ0UsT0FBMUM7dUJBRUosRUFBQSxFQUFJeUUsS0FBSyxJQUFJQSxLQUFLLENBQUNILGlDQUFuQixFQUNMLEVBQUEsQUFBQSx1REFBQTtnQkFDQSxFQUFBLEFBQUEsbUJBQUE7Z0JBQ0F2RSxNQUFNLENBQUMsR0FBQSxDQUFJcEIsS0FBSixDQUFVOEYsS0FBSyxDQUFDekUsT0FBaEI7cUJBRVBFLE9BQU8sQ0FBQ3VFLEtBQUQ7WUFFVixDQWpCRDtZQW1CQSxLQUFBLENBQU1DLGtCQUFrQixJQUFJcEUsSUFBRCxFQUFPWCxRQUFQLEVBQWlCZ0YsZUFBakIsS0FBcUNsRSxJQUFyQyxHQUE4QyxDQUF6RTtnQkFDRSxFQUFBLEVBQUlBLElBQUksQ0FBQy9CLE1BQUwsR0FBY2lCLFFBQVEsQ0FBQ2UsT0FBM0IsRUFDRSxLQUFBLENBQU0sR0FBQSxDQUFJL0IsS0FBSixFQUFXLGtCQUFBLEVBQW9CZ0IsUUFBUSxDQUFDZSxPQUFRLENBQUEsQ0FBQSxFQUFHUCxrQkFBa0IsQ0FBQ1IsUUFBUSxDQUFDZSxPQUFWLEVBQW1CLEtBQUEsRUFBT0osSUFBSyxDQUFBLFFBQUEsRUFBVUcsSUFBSSxDQUFDL0IsTUFBTztnQkFHbEksRUFBQSxFQUFJK0IsSUFBSSxDQUFDL0IsTUFBTCxHQUFjaUIsUUFBUSxDQUFDZ0IsT0FBM0IsRUFDRSxLQUFBLENBQU0sR0FBQSxDQUFJaEMsS0FBSixFQUFXLGlCQUFBLEVBQW1CZ0IsUUFBUSxDQUFDZ0IsT0FBUSxDQUFBLENBQUEsRUFBR1Isa0JBQWtCLENBQUNSLFFBQVEsQ0FBQ2dCLE9BQVYsRUFBbUIsS0FBQSxFQUFPTCxJQUFLLENBQUEsUUFBQSxFQUFVRyxJQUFJLENBQUMvQixNQUFPO2dCQUdqSSxNQUFBLENBQU8sR0FBQSxDQUFJa0MsT0FBSixFQUFhVixPQUFELEVBQVVILE1BQVYsR0FBcUIsQ0FBeEM7b0JBQ0UsS0FBQSxDQUFNNkUsU0FBUyxHQUFHSiwwQkFBMEIsQ0FBQzVDLElBQTNCLENBQWdDLElBQWhDLEVBQXNDLENBQXhEO3dCQUF5RDFCLE9BQUQ7d0JBQVVILE1BQUFBO29CQUFWLENBQXRDO29CQUNsQlUsSUFBSSxDQUFDb0UsSUFBTCxDQUFVRCxTQUFWO29CQUNBRCxlQUFlLENBQUNHLFdBQWhCLElBQStCckUsSUFBL0I7Z0JBQ0QsQ0FKTTtZQUtSLENBZEQ7WUFnQkEsS0FBQSxDQUFNc0UsY0FBYyxHQUFHLENBQXZCO2dCQUNFQyxRQUFRLEVBQUUsQ0FBVkE7b0JBQ0VDLE9BQU8sRUFBRSxDQUFUQTt3QkFDRS9CLGlCQUFpQixFQUFFUCxTQUFTLENBQUNNLHlCQUFEO29CQURyQixDQUFBO2dCQURELENBRFc7Z0JBTXJCcEQsT0FBTyxFQUFFLENBQVRBO29CQUNFMkQsU0FBUyxFQUFFYixTQUFTLENBQUNZLGlCQUFEO29CQUNwQjJCLGlCQUFpQixFQUFFdkMsU0FBUyxDQUFDWSxpQkFBRDtvQkFDNUJ1QixXQUFXLEVBQUVKLGtCQUFrQixDQUFDOUMsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEIsQ0FBOUIsY0FBNkMsQ0FBMURrRDt3QkFBMkRwRSxPQUFPLEVBQUUsQ0FBVjt3QkFBYUMsT0FBTyxFQUFFLENBQVRBO29CQUFiLENBQTdDO2dCQUhOLENBTlk7Z0JBV3JCd0UsSUFBSSxFQUFFLENBQU5BO29CQUNFTCxXQUFXLEVBQUVKLGtCQUFrQixDQUFDOUMsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEIsQ0FBOUIsY0FBNkMsQ0FBMURrRDt3QkFBMkRwRSxPQUFPLEVBQUUsQ0FBVjt3QkFBYUMsT0FBTyxFQUFFLENBQVRBO29CQUFiLENBQTdDO2dCQURULENBQUE7WUFYZSxDQUF2QjtZQWVBLEtBQUEsQ0FBTXlFLGVBQWUsR0FBRyxDQUF4QjtnQkFDRUMsS0FBSyxFQUFFLENBQVBBO29CQUFRM0UsT0FBTyxFQUFFLENBQVY7b0JBQWFDLE9BQU8sRUFBRSxDQUFUQTtnQkFBYixDQURlO2dCQUV0QnpCLEdBQUcsRUFBRSxDQUFMQTtvQkFBTXdCLE9BQU8sRUFBRSxDQUFWO29CQUFhQyxPQUFPLEVBQUUsQ0FBVEE7Z0JBQWIsQ0FGaUI7Z0JBR3RCdEIsR0FBRyxFQUFFLENBQUxBO29CQUFNcUIsT0FBTyxFQUFFLENBQVY7b0JBQWFDLE9BQU8sRUFBRSxDQUFUQTtnQkFBYixDQUFBO1lBSGlCLENBQXhCO1lBS0FuQyxXQUFXLENBQUM4RyxPQUFaLEdBQXNCLENBQXRCOUc7Z0JBQ0V5RyxPQUFPLEVBQUUsQ0FBVEE7b0JBQVUsQ0FBQSxJQUFLRyxlQUFMO2dCQUFELENBRFc7Z0JBRXBCRyxRQUFRLEVBQUUsQ0FBVkE7b0JBQVcsQ0FBQSxJQUFLSCxlQUFMO2dCQUFELENBRlU7Z0JBR3BCSSxRQUFRLEVBQUUsQ0FBVkE7b0JBQVcsQ0FBQSxJQUFLSixlQUFMO2dCQUFELENBQUE7WUFIVSxDQUF0QjtZQU1BLE1BQUEsQ0FBT3ZELFVBQVUsQ0FBQ3RELGFBQUQsRUFBZ0J3RyxjQUFoQixFQUFnQ3ZHLFdBQWhDO1FBQ2xCLENBMXFDRDtRQTRxQ0EsRUFBQSxFQUFJLE1BQUEsQ0FBT2lILE1BQVAsSUFBaUIsQ0FBakIsWUFBOEJBLE1BQTlCLEtBQXlDQSxNQUFNLENBQUM1RixPQUFoRCxLQUE0RDRGLE1BQU0sQ0FBQzVGLE9BQVAsQ0FBZTZGLEVBQS9FLEVBQ0UsS0FBQSxDQUFNLEdBQUEsQ0FBSS9HLEtBQUosQ0FBVSxDQUFWO1FBR1IsQ0FGQyxBQUVELEVBRkMsQUFFRCx1RUFGQztRQUdELEVBQUEsQUFBQSw2QkFBQTtRQUNBZ0gsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdEgsUUFBUSxDQUFDbUgsTUFBRDtJQUMxQixDQTVyQ0QsTUE2ckNFRSxNQUFNLENBQUNDLE9BQVAsR0FBaUI1SCxPQUFqQjtBLEM7OztBQ3JzQ0YsRUFBc0MsQUFBdEMsa0NBQXNDLEFBQXRDLEVBQXNDLENBRXRDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQyxHQUFDLENBQUMsWUFBWSxDQUFDLEdBQUMsQ0FBQyxLQUFHLENBQUMsR0FBQyxDQUFRLFdBQUUsTUFBTSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUUsQ0FBQyxLQUFHLENBQUMsQ0FBQyxRQUFRLEtBQUcsQ0FBQyxHQUFDLENBQUM7UUFBQSxDQUFDO0lBQUEsQ0FBQyxHQUFFLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7QUFBQyxDQUFDO0FBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBQyxDQUFDO1FBQUksTUFBTSxJQUFFLENBQUM7UUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO0lBQUEsQ0FBQztBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBQyxRQUFRLEdBQUUsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUEsQ0FBUSxXQUFFLE1BQU0sQ0FBQyxFQUFDLEtBQUcsRUFBQyxHQUFDLENBQUMsS0FBRyxFQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFDLEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFHLElBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUMsTUFBTSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLEdBQUcsQ0FBQyxFQUFDLEdBQUMsUUFBUSxDQUFDLHNCQUFzQjtRQUFHLENBQUMsQ0FBQyxFQUFDLElBQUUsQ0FBQztRQUFBLENBQUMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztZQUFBLENBQUMsR0FBQyxDQUFVLGFBQUUsTUFBTSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLElBQUUsQ0FBQztZQUFDLE1BQU0sQ0FBQSxDQUFRLFdBQUUsTUFBTSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQztRQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUUsRUFBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLE1BQUksRUFBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxXQUFXO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sRUFBQyxFQUFDLEdBQUMsQ0FBUSxXQUFFLE1BQU0sRUFBQyxFQUFDLEdBQUMsQ0FBVSxhQUFFLE1BQU0sQ0FBQyxFQUFDLEdBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUUsRUFBQyxJQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUcsRUFBQyxFQUFFLFFBQVEsR0FBRyxLQUFLLFdBQVcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTTtJQUFBLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJO0lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsR0FBRyxDQUFDLENBQUM7UUFBQyxNQUFNLENBQUMsQ0FBQyxJQUFFLENBQUMsR0FBQyxDQUFRLFdBQUUsTUFBTSxFQUFDLENBQUMsSUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsT0FBSyxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLGFBQVksQ0FBQyxLQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsS0FBSyxJQUFFLENBQUMsR0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFHLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQU8sU0FBQyxDQUFFLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUMsQ0FBQztJQUFDLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsR0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFDLENBQUM7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUMsUUFBUSxDQUFDLEVBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVE7SUFBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUMsUUFBUSxHQUFFLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsR0FBRyxDQUFDLENBQUMsR0FBQyxFQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1lBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQUUsQ0FBQyxHQUFFLENBQUM7SUFBQSxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFBLENBQUM7SUFBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFHLElBQUMsQ0FBQyxFQUFFLEtBQUs7QUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsQ0FBQztBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLEVBQUUsRUFBQyxFQUFDLENBQUMsRUFBRSxFQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsUUFBUTtJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFRLGFBQUksQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsS0FBSztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQVUsZUFBSSxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxLQUFLO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztXQUFFLENBQUM7WUFBQSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQUEsQ0FBQyxRQUFPLENBQUMsR0FBQyxDQUFDLENBQUMsVUFBVSxLQUFHLENBQUMsS0FBRyxRQUFRO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRSxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBRyxJQUFJO0FBQUEsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLEdBQUMsRUFBQyxDQUFDO1FBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQyxDQUFDLEVBQUMsSUFBSTtJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUMsUUFBUSxHQUFFLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxHQUFHLEdBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxHQUFHLENBQUMsR0FBQyxHQUFDLENBQUMsWUFBWSxDQUFDLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsTUFBTSxDQUFBLEVBQUUsS0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQUMsQ0FBQyxHQUFDLENBQVUsYUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsT0FBTyxJQUFFLENBQUMsQ0FBQyxpQkFBaUIsSUFBRSxDQUFDLENBQUMscUJBQXFCLEVBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUUsQ0FBRztJQUFDLENBQUM7SUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUM7QUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBRyxJQUFDLENBQUM7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFDLFFBQVEsR0FBRSxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFJLENBQUM7QUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxlQUFjLElBQUksQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBTyxTQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsUUFBUSxHQUFHLFFBQVEsR0FBRyxLQUFLLHFCQUFtQixJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQU8sU0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBRyxRQUFRLEdBQUcsUUFBUSxHQUFHLEtBQUssV0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUssT0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBRyxLQUFLLEdBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsR0FBRSxDQUFDO0lBQUEsR0FBRyxDQUFDLEdBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsTUFBTSxDQUFBLENBQVUsYUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUFBLENBQUMsQ0FBQyxjQUFjLElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsU0FBUztRQUFDLENBQUMsR0FBQyxDQUFDO0lBQUEsQ0FBQyxFQUFDLElBQUk7SUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLEdBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUMsUUFBUSxHQUFFLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFHLEtBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUc7QUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUcsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxJQUFFLENBQUUsSUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxTQUFTLEdBQUMsQ0FBQztJQUFBLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNO0FBQUEsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxDQUFDLEtBQUcsUUFBUSxDQUFDLElBQUksSUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFDLFFBQVEsR0FBRSxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLE1BQUksQ0FBQztBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLEtBQUcsSUFBSTtBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFHLENBQUM7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFDLFFBQVEsQ0FBQyxHQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxDQUFDO0lBQUEsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJLElBQUUsRUFBQyxJQUFFLElBQUksSUFBRSxFQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksRUFBQyxDQUFDLEdBQUMsRUFBQztJQUFDLE1BQU0sQ0FBQSxDQUFRLFdBQUUsTUFBTSxDQUFDLEVBQUMsS0FBRyxDQUFDLEdBQUMsRUFBQyxFQUFDLENBQUMsR0FBQyxFQUFDLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7YUFBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLGFBQWEsS0FBRyxDQUFDLElBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBRyxDQUFDLEtBQUcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsUUFBUTtRQUFDLENBQUM7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLFFBQVEsQ0FBQyxHQUFDLEVBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDO2FBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLEdBQUcsQ0FBQSxDQUFDO1lBQUEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsQ0FBZSxnQkFBQyxDQUFDO2dCQUFBLEtBQUssRUFBQyxDQUFDO2dCQUFDLFlBQVksR0FBRSxDQUFDO1lBQUEsQ0FBQztRQUFDLENBQUMsQ0FBQSxLQUFLLEVBQUMsR0FBQyxFQUFDLENBQUM7UUFBQSxDQUFDO0lBQUEsQ0FBQztJQUFBLEdBQUcsQ0FBQyxDQUFDLEdBQUMsSUFBSSxFQUFDLEVBQUMsR0FBQyxFQUFDO0lBQUMsQ0FBUSxXQUFFLE1BQU0sQ0FBQyxFQUFDLEtBQUcsQ0FBQyxHQUFDLEVBQUMsRUFBQyxFQUFDLEdBQUMsQ0FBQyxFQUFDLEVBQUMsR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxHQUFHLENBQUMsQ0FBQyxHQUFDLFNBQVM7UUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFBQSxHQUFHLENBQUMsQ0FBQztZQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sTUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsQ0FBQztJQUFDLENBQUM7YUFBVyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFBQSxNQUFNLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsQ0FBQztZQUFBLENBQUM7UUFBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUUsQ0FBQyxDQUFDO0lBQUUsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBQyxFQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRSxJQUFFLENBQUM7UUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFBQSxRQUFRLEVBQUMsRUFBQztZQUFDLGFBQWEsRUFBQyxFQUFDO1lBQUMsUUFBUSxFQUFDLENBQUM7UUFBQSxDQUFDO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLEdBQUMsRUFBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxHQUFHLENBQUMsRUFBQztJQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFHLEdBQUMsS0FBRyxFQUFDLEdBQUMsQ0FBQyxHQUFFLENBQUMsR0FBQyxDQUFDO0lBQUEsQ0FBQyxFQUFFLEVBQUMsSUFBRSxHQUFDLEdBQUUsQ0FBUSxXQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQVUsYUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFBRSxDQUFDLElBQUUsSUFBSSxDQUFDLE1BQU0sR0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBRyxDQUFDLElBQUUsQ0FBRTtBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFHLEtBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFFLENBQUMsRUFBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFHO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQyxHQUFDLEVBQUMsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVTtJQUFBLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBQyxRQUFRLENBQUMsR0FBQyxFQUFDLEVBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBQyxFQUFDLEVBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFVBQVU7SUFBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsR0FBRSxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFVBQVUsSUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBQyxRQUFRLEdBQUUsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUMsUUFBUSxDQUFDLEdBQUMsRUFBQyxHQUFDLEVBQUMsQ0FBQztJQUFBLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBQyxFQUFDLEdBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsR0FBRSxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLENBQUM7UUFBQSxRQUFRLEVBQUMsQ0FBUTtJQUFBLENBQUMsR0FBRSxJQUFJO0FBQUEsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxPQUFPLFNBQVEsQ0FBRSxHQUFFLE9BQU8sU0FBUSxDQUFFLFNBQU8sSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsS0FBRyxDQUFDLElBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUMsUUFBUSxHQUFFLENBQUM7SUFBQSxHQUFHLENBQUMsQ0FBQyxHQUFDLElBQUk7SUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLE1BQU0sRUFBQyxDQUFDLENBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxRQUFRLElBQUUsQ0FBTSxVQUFHLENBQUMsQ0FBQyxJQUFJLHVCQUFxQixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBSSxDQUFDLENBQUMsT0FBTyxHQUFDLENBQUMsR0FBQyxDQUFpQixxQkFBRyxDQUFDLENBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFBQSxDQUFDLENBQUMsUUFBUSxLQUFHLENBQUMsSUFBRSxDQUFHLEtBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFFLENBQUcsS0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBQUUsQ0FBQyxHQUFFLENBQUMsSUFBRSxDQUFDLEdBQUMsQ0FBRyxLQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBRSxDQUFHLEtBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztJQUFDLENBQUMsRUFBQyxDQUFFLEdBQUUsS0FBSyxDQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSTtBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxRQUFRLEdBQUUsQ0FBQztJQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQjtBQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsQ0FBQyxJQUFFLENBQUMsS0FBRyxDQUFDLENBQUMsTUFBTSxJQUFFLENBQVEsV0FBRSxNQUFNLENBQUMsQ0FBQyxJQUFFLENBQW1CLHVCQUFHLENBQUMsQ0FBQyxRQUFRLEtBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUUsQ0FBQyxJQUFFLENBQUM7UUFBQSxDQUFDO0lBQUEsQ0FBQyxHQUFDLENBQUMsQ0FBQztBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFBLE1BQU0sQ0FBQSxDQUFVLGFBQUUsTUFBTSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxRQUFRO0lBQUUsQ0FBQztBQUFBLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBRyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLElBQUUsQ0FBRSxJQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFdBQVcsR0FBQyxDQUFDO0lBQUEsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBQyxRQUFRLENBQUMsR0FBQyxFQUFDLEdBQUMsRUFBQyxDQUFDO0lBQUEsTUFBTSxHQUFFLEdBQUMsS0FBRyxHQUFDLEdBQUMsSUFBSSxDQUFDLEdBQUMsR0FBQyxDQUFVLFlBQUMsQ0FBYSxjQUFFLEdBQUMsSUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUFDLENBQUM7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUMsUUFBUSxDQUFDLEdBQUMsRUFBQyxDQUFDO0lBQUEsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUEsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQztZQUFBLE9BQU8sR0FBRSxDQUFDO1lBQUMsVUFBVSxHQUFFLENBQUM7WUFBQyxNQUFNLEVBQUMsQ0FBQztRQUFBLENBQUM7UUFBQyxHQUFHLENBQUEsQ0FBQztZQUFBLENBQUMsR0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUFDLENBQUMsQ0FBQSxLQUFLLEVBQUMsR0FBQyxFQUFDLENBQUM7YUFBQyxDQUFDLEdBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFhLGVBQUcsZUFBZSxDQUFDLENBQUMsR0FBRSxDQUFDLEdBQUUsQ0FBQyxFQUFDLENBQUM7UUFBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQUMsQ0FBQztBQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFD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MkIsNEJBQUUsQ0FBQztRQUM1QixPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPLEVBQUUsS0FBSztRQUNkLEdBQUcsRUFBRSxDQUFPO0lBQ2QsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3J1bnRpbWUtYnJvd3Nlci1obXJAMi4zLjJfQHBhcmNlbCtjb3JlQDIuMy4yL25vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtYnJvd3Nlci1obXIvbGliL3J1bnRpbWUtZDE5ZDJkYTRmOGM2M2E5NC5qcyIsInNyYy9vcHRpb25zL2luZGV4LnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbEAwLjguMC9ub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS91bWJyZWxsYWpzQDMuMy4xL25vZGVfbW9kdWxlcy91bWJyZWxsYWpzL3VtYnJlbGxhLm1pbi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3RyYW5zZm9ybWVyLWpzQDIuMy4yX0BwYXJjZWwrY29yZUAyLjMuMi9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInNyYy9zZXR0aW5ncy9kZWZhdWx0LXNob3J0Y3V0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSE1SX0hPU1QgPSBcImxvY2FsaG9zdFwiO3ZhciBITVJfUE9SVCA9IG51bGw7dmFyIEhNUl9TRUNVUkUgPSBmYWxzZTt2YXIgSE1SX0VOVl9IQVNIID0gXCJlNzkyZmJiZGFhNzhlZTg0XCI7bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEID0gXCI5ZTRmZDI1MGM4NWM0OTQwXCI7XCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdCA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdIHx8IG9bXCJAQGl0ZXJhdG9yXCJdOyBpZiAoIWl0KSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IGl0LmNhbGwobyk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuLyogZ2xvYmFsIEhNUl9IT1NULCBITVJfUE9SVCwgSE1SX0VOVl9IQVNILCBITVJfU0VDVVJFICovXG5cbi8qOjpcbmltcG9ydCB0eXBlIHtcbiAgSE1SQXNzZXQsXG4gIEhNUk1lc3NhZ2UsXG59IGZyb20gJ0BwYXJjZWwvcmVwb3J0ZXItZGV2LXNlcnZlci9zcmMvSE1SU2VydmVyLmpzJztcbmludGVyZmFjZSBQYXJjZWxSZXF1aXJlIHtcbiAgKHN0cmluZyk6IG1peGVkO1xuICBjYWNoZToge3xbc3RyaW5nXTogUGFyY2VsTW9kdWxlfH07XG4gIGhvdERhdGE6IG1peGVkO1xuICBNb2R1bGU6IGFueTtcbiAgcGFyZW50OiA/UGFyY2VsUmVxdWlyZTtcbiAgaXNQYXJjZWxSZXF1aXJlOiB0cnVlO1xuICBtb2R1bGVzOiB7fFtzdHJpbmddOiBbRnVuY3Rpb24sIHt8W3N0cmluZ106IHN0cmluZ3x9XXx9O1xuICBITVJfQlVORExFX0lEOiBzdHJpbmc7XG4gIHJvb3Q6IFBhcmNlbFJlcXVpcmU7XG59XG5pbnRlcmZhY2UgUGFyY2VsTW9kdWxlIHtcbiAgaG90OiB7fFxuICAgIGRhdGE6IG1peGVkLFxuICAgIGFjY2VwdChjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICBkaXNwb3NlKGNiOiAobWl4ZWQpID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGFjY2VwdChkZXBzOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nLCBjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBkZWNsaW5lKCk6IHZvaWQsXG4gICAgX2FjY2VwdENhbGxiYWNrczogQXJyYXk8KEZ1bmN0aW9uKSA9PiB2b2lkPixcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogQXJyYXk8KG1peGVkKSA9PiB2b2lkPixcbiAgfH07XG59XG5kZWNsYXJlIHZhciBtb2R1bGU6IHtidW5kbGU6IFBhcmNlbFJlcXVpcmUsIC4uLn07XG5kZWNsYXJlIHZhciBITVJfSE9TVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1BPUlQ6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9FTlZfSEFTSDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1NFQ1VSRTogYm9vbGVhbjtcbiovXG52YXIgT1ZFUkxBWV9JRCA9ICdfX3BhcmNlbF9fZXJyb3JfX292ZXJsYXlfXyc7XG52YXIgT2xkTW9kdWxlID0gbW9kdWxlLmJ1bmRsZS5Nb2R1bGU7XG5cbmZ1bmN0aW9uIE1vZHVsZShtb2R1bGVOYW1lKSB7XG4gIE9sZE1vZHVsZS5jYWxsKHRoaXMsIG1vZHVsZU5hbWUpO1xuICB0aGlzLmhvdCA9IHtcbiAgICBkYXRhOiBtb2R1bGUuYnVuZGxlLmhvdERhdGEsXG4gICAgX2FjY2VwdENhbGxiYWNrczogW10sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IFtdLFxuICAgIGFjY2VwdDogZnVuY3Rpb24gYWNjZXB0KGZuKSB7XG4gICAgICB0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaChmbiB8fCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgfSxcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiBkaXNwb3NlKGZuKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2goZm4pO1xuICAgIH1cbiAgfTtcbiAgbW9kdWxlLmJ1bmRsZS5ob3REYXRhID0gdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuYnVuZGxlLk1vZHVsZSA9IE1vZHVsZTtcbnZhciBjaGVja2VkQXNzZXRzXG4vKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4sIGFjY2VwdGVkQXNzZXRzXG4vKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4sIGFzc2V0c1RvQWNjZXB0XG4vKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovXG47XG5cbmZ1bmN0aW9uIGdldEhvc3RuYW1lKCkge1xuICByZXR1cm4gSE1SX0hPU1QgfHwgKGxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCA/IGxvY2F0aW9uLmhvc3RuYW1lIDogJ2xvY2FsaG9zdCcpO1xufVxuXG5mdW5jdGlvbiBnZXRQb3J0KCkge1xuICByZXR1cm4gSE1SX1BPUlQgfHwgbG9jYXRpb24ucG9ydDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5cbnZhciBwYXJlbnQgPSBtb2R1bGUuYnVuZGxlLnBhcmVudDtcblxuaWYgKCghcGFyZW50IHx8ICFwYXJlbnQuaXNQYXJjZWxSZXF1aXJlKSAmJiB0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICB2YXIgcG9ydCA9IGdldFBvcnQoKTtcbiAgdmFyIHByb3RvY29sID0gSE1SX1NFQ1VSRSB8fCBsb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cHM6JyAmJiAhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdChob3N0bmFtZSkgPyAnd3NzJyA6ICd3cyc7XG4gIHZhciB3cyA9IG5ldyBXZWJTb2NrZXQocHJvdG9jb2wgKyAnOi8vJyArIGhvc3RuYW1lICsgKHBvcnQgPyAnOicgKyBwb3J0IDogJycpICsgJy8nKTsgLy8gJEZsb3dGaXhNZVxuXG4gIHdzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudFxuICAvKjoge2RhdGE6IHN0cmluZywgLi4ufSAqL1xuICApIHtcbiAgICBjaGVja2VkQXNzZXRzID0ge31cbiAgICAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4gICAgO1xuICAgIGFjY2VwdGVkQXNzZXRzID0ge31cbiAgICAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4gICAgO1xuICAgIGFzc2V0c1RvQWNjZXB0ID0gW107XG4gICAgdmFyIGRhdGFcbiAgICAvKjogSE1STWVzc2FnZSAqL1xuICAgID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAvLyBSZW1vdmUgZXJyb3Igb3ZlcmxheSBpZiB0aGVyZSBpcyBvbmVcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXNzZXRzID0gZGF0YS5hc3NldHMuZmlsdGVyKGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgICByZXR1cm4gYXNzZXQuZW52SGFzaCA9PT0gSE1SX0VOVl9IQVNIO1xuICAgICAgfSk7IC8vIEhhbmRsZSBITVIgVXBkYXRlXG5cbiAgICAgIHZhciBoYW5kbGVkID0gYXNzZXRzLmV2ZXJ5KGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgICByZXR1cm4gYXNzZXQudHlwZSA9PT0gJ2NzcycgfHwgYXNzZXQudHlwZSA9PT0gJ2pzJyAmJiBobXJBY2NlcHRDaGVjayhtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0LmlkLCBhc3NldC5kZXBzQnlCdW5kbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgYXNzZXRzLmZvckVhY2goZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICAgICAgaG1yQXBwbHkobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzZXRzVG9BY2NlcHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaWQgPSBhc3NldHNUb0FjY2VwdFtpXVsxXTtcblxuICAgICAgICAgIGlmICghYWNjZXB0ZWRBc3NldHNbaWRdKSB7XG4gICAgICAgICAgICBobXJBY2NlcHRSdW4oYXNzZXRzVG9BY2NlcHRbaV1bMF0sIGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGF0YS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAvLyBMb2cgcGFyY2VsIGVycm9ycyB0byBjb25zb2xlXG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZGF0YS5kaWFnbm9zdGljcy5hbnNpKSxcbiAgICAgICAgICBfc3RlcDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgYW5zaURpYWdub3N0aWMgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICB2YXIgc3RhY2sgPSBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBhbnNpRGlhZ25vc3RpYy5zdGFjaztcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCfwn5qoIFtwYXJjZWxdOiAnICsgYW5zaURpYWdub3N0aWMubWVzc2FnZSArICdcXG4nICsgc3RhY2sgKyAnXFxuXFxuJyArIGFuc2lEaWFnbm9zdGljLmhpbnRzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBSZW5kZXIgdGhlIGZhbmN5IGh0bWwgb3ZlcmxheVxuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBjcmVhdGVFcnJvck92ZXJsYXkoZGF0YS5kaWFnbm9zdGljcy5odG1sKTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgfTtcblxuICB3cy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUud2FybignW3BhcmNlbF0g8J+aqCBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIHdhcyBsb3N0Jyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVycm9yT3ZlcmxheSgpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPVkVSTEFZX0lEKTtcblxuICBpZiAob3ZlcmxheSkge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2coJ1twYXJjZWxdIOKcqCBFcnJvciByZXNvbHZlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yT3ZlcmxheShkaWFnbm9zdGljcykge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmlkID0gT1ZFUkxBWV9JRDtcbiAgdmFyIGVycm9ySFRNTCA9ICc8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogYmxhY2s7IG9wYWNpdHk6IDAuODU7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHdoaXRlOyBwb3NpdGlvbjogZml4ZWQ7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IHRvcDogMHB4OyBsZWZ0OiAwcHg7IHBhZGRpbmc6IDMwcHg7IGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTsgei1pbmRleDogOTk5OTtcIj4nO1xuXG4gIHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZGlhZ25vc3RpY3MpLFxuICAgICAgX3N0ZXAyO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcbiAgICAgIHZhciBkaWFnbm9zdGljID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgdmFyIHN0YWNrID0gZGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBkaWFnbm9zdGljLmNvZGVmcmFtZSA6IGRpYWdub3N0aWMuc3RhY2s7XG4gICAgICBlcnJvckhUTUwgKz0gXCJcXG4gICAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwiZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLXRvcDogMjBweDtcXFwiPlxcbiAgICAgICAgICBcXHVEODNEXFx1REVBOCBcIi5jb25jYXQoZGlhZ25vc3RpYy5tZXNzYWdlLCBcIlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8cHJlPlwiKS5jb25jYXQoc3RhY2ssIFwiPC9wcmU+XFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICBcIikuY29uY2F0KGRpYWdub3N0aWMuaGludHMubWFwKGZ1bmN0aW9uIChoaW50KSB7XG4gICAgICAgIHJldHVybiAnPGRpdj7wn5KhICcgKyBoaW50ICsgJzwvZGl2Pic7XG4gICAgICB9KS5qb2luKCcnKSwgXCJcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgXCIpLmNvbmNhdChkaWFnbm9zdGljLmRvY3VtZW50YXRpb24gPyBcIjxkaXY+XFx1RDgzRFxcdURDREQgPGEgc3R5bGU9XFxcImNvbG9yOiB2aW9sZXRcXFwiIGhyZWY9XFxcIlwiLmNvbmNhdChkaWFnbm9zdGljLmRvY3VtZW50YXRpb24sIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+TGVhcm4gbW9yZTwvYT48L2Rpdj5cIikgOiAnJywgXCJcXG4gICAgICA8L2Rpdj5cXG4gICAgXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yMi5mKCk7XG4gIH1cblxuICBlcnJvckhUTUwgKz0gJzwvZGl2Pic7XG4gIG92ZXJsYXkuaW5uZXJIVE1MID0gZXJyb3JIVE1MO1xuICByZXR1cm4gb3ZlcmxheTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50cyhidW5kbGUsIGlkKVxuLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL1xue1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBrLCBkLCBkZXA7XG5cbiAgZm9yIChrIGluIG1vZHVsZXMpIHtcbiAgICBmb3IgKGQgaW4gbW9kdWxlc1trXVsxXSkge1xuICAgICAgZGVwID0gbW9kdWxlc1trXVsxXVtkXTtcblxuICAgICAgaWYgKGRlcCA9PT0gaWQgfHwgQXJyYXkuaXNBcnJheShkZXApICYmIGRlcFtkZXAubGVuZ3RoIC0gMV0gPT09IGlkKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChbYnVuZGxlLCBrXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBwYXJlbnRzID0gcGFyZW50cy5jb25jYXQoZ2V0UGFyZW50cyhidW5kbGUucGFyZW50LCBpZCkpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGluaykge1xuICB2YXIgbmV3TGluayA9IGxpbmsuY2xvbmVOb2RlKCk7XG5cbiAgbmV3TGluay5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxpbmsucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgIH1cbiAgfTtcblxuICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIC8vICRGbG93Rml4TWVcbiAgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zcGxpdCgnPycpWzBdICsgJz8nICsgRGF0ZS5ub3coKSk7IC8vICRGbG93Rml4TWVcblxuICBsaW5rLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0xpbmssIGxpbmsubmV4dFNpYmxpbmcpO1xufVxuXG52YXIgY3NzVGltZW91dCA9IG51bGw7XG5cbmZ1bmN0aW9uIHJlbG9hZENTUygpIHtcbiAgaWYgKGNzc1RpbWVvdXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjc3NUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXVxuICAgICAgdmFyIGhyZWZcbiAgICAgIC8qOiBzdHJpbmcgKi9cbiAgICAgID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICAgICAgdmFyIHNlcnZlZEZyb21ITVJTZXJ2ZXIgPSBob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgPyBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOicgKyBnZXRQb3J0KCkpLnRlc3QoaHJlZikgOiBocmVmLmluZGV4T2YoaG9zdG5hbWUgKyAnOicgKyBnZXRQb3J0KCkpO1xuICAgICAgdmFyIGFic29sdXRlID0gL15odHRwcz86XFwvXFwvL2kudGVzdChocmVmKSAmJiBocmVmLmluZGV4T2Yod2luZG93LmxvY2F0aW9uLm9yaWdpbikgIT09IDAgJiYgIXNlcnZlZEZyb21ITVJTZXJ2ZXI7XG5cbiAgICAgIGlmICghYWJzb2x1dGUpIHtcbiAgICAgICAgdXBkYXRlTGluayhsaW5rc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY3NzVGltZW91dCA9IG51bGw7XG4gIH0sIDUwKTtcbn1cblxuZnVuY3Rpb24gaG1yQXBwbHkoYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBhc3NldFxuLyo6ICBITVJBc3NldCAqL1xuKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGFzc2V0LnR5cGUgPT09ICdjc3MnKSB7XG4gICAgcmVsb2FkQ1NTKCk7XG4gIH0gZWxzZSBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIHZhciBkZXBzID0gYXNzZXQuZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXTtcblxuICAgIGlmIChkZXBzKSB7XG4gICAgICBpZiAobW9kdWxlc1thc3NldC5pZF0pIHtcbiAgICAgICAgLy8gUmVtb3ZlIGRlcGVuZGVuY2llcyB0aGF0IGFyZSByZW1vdmVkIGFuZCB3aWxsIGJlY29tZSBvcnBoYW5lZC5cbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3Nhcnkgc28gdGhhdCBpZiB0aGUgYXNzZXQgaXMgYWRkZWQgYmFjayBhZ2FpbiwgdGhlIGNhY2hlIGlzIGdvbmUsIGFuZCB3ZSBwcmV2ZW50IGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAgICAgICAgdmFyIG9sZERlcHMgPSBtb2R1bGVzW2Fzc2V0LmlkXVsxXTtcblxuICAgICAgICBmb3IgKHZhciBkZXAgaW4gb2xkRGVwcykge1xuICAgICAgICAgIGlmICghZGVwc1tkZXBdIHx8IGRlcHNbZGVwXSAhPT0gb2xkRGVwc1tkZXBdKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBvbGREZXBzW2RlcF07XG4gICAgICAgICAgICB2YXIgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICBobXJEZWxldGUobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBmbiA9IG5ldyBGdW5jdGlvbigncmVxdWlyZScsICdtb2R1bGUnLCAnZXhwb3J0cycsIGFzc2V0Lm91dHB1dCk7XG4gICAgICBtb2R1bGVzW2Fzc2V0LmlkXSA9IFtmbiwgZGVwc107XG4gICAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgICBobXJBcHBseShidW5kbGUucGFyZW50LCBhc3NldCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhtckRlbGV0ZShidW5kbGUsIGlkKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG1vZHVsZXNbaWRdKSB7XG4gICAgLy8gQ29sbGVjdCBkZXBlbmRlbmNpZXMgdGhhdCB3aWxsIGJlY29tZSBvcnBoYW5lZCB3aGVuIHRoaXMgbW9kdWxlIGlzIGRlbGV0ZWQuXG4gICAgdmFyIGRlcHMgPSBtb2R1bGVzW2lkXVsxXTtcbiAgICB2YXIgb3JwaGFucyA9IFtdO1xuXG4gICAgZm9yICh2YXIgZGVwIGluIGRlcHMpIHtcbiAgICAgIHZhciBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGRlcHNbZGVwXSk7XG5cbiAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBvcnBoYW5zLnB1c2goZGVwc1tkZXBdKTtcbiAgICAgIH1cbiAgICB9IC8vIERlbGV0ZSB0aGUgbW9kdWxlLiBUaGlzIG11c3QgYmUgZG9uZSBiZWZvcmUgZGVsZXRpbmcgZGVwZW5kZW5jaWVzIGluIGNhc2Ugb2YgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuXG5cbiAgICBkZWxldGUgbW9kdWxlc1tpZF07XG4gICAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07IC8vIE5vdyBkZWxldGUgdGhlIG9ycGhhbnMuXG5cbiAgICBvcnBoYW5zLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICBobXJEZWxldGUobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIGhtckRlbGV0ZShidW5kbGUucGFyZW50LCBpZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2soYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuLCBkZXBzQnlCdW5kbGVcbi8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovXG4pIHtcbiAgaWYgKGhtckFjY2VwdENoZWNrT25lKGJ1bmRsZSwgaWQsIGRlcHNCeUJ1bmRsZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBUcmF2ZXJzZSBwYXJlbnRzIGJyZWFkdGggZmlyc3QuIEFsbCBwb3NzaWJsZSBhbmNlc3RyaWVzIG11c3QgYWNjZXB0IHRoZSBITVIgdXBkYXRlLCBvciB3ZSdsbCByZWxvYWQuXG5cblxuICB2YXIgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gIHZhciBhY2NlcHRlZCA9IGZhbHNlO1xuXG4gIHdoaWxlIChwYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgdiA9IHBhcmVudHMuc2hpZnQoKTtcbiAgICB2YXIgYSA9IGhtckFjY2VwdENoZWNrT25lKHZbMF0sIHZbMV0sIG51bGwpO1xuXG4gICAgaWYgKGEpIHtcbiAgICAgIC8vIElmIHRoaXMgcGFyZW50IGFjY2VwdHMsIHN0b3AgdHJhdmVyc2luZyB1cHdhcmQsIGJ1dCBzdGlsbCBjb25zaWRlciBzaWJsaW5ncy5cbiAgICAgIGFjY2VwdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJ3aXNlLCBxdWV1ZSB0aGUgcGFyZW50cyBpbiB0aGUgbmV4dCBsZXZlbCB1cHdhcmQuXG4gICAgICB2YXIgcCA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCB2WzFdKTtcblxuICAgICAgaWYgKHAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBwYXJlbnRzLCB0aGVuIHdlJ3ZlIHJlYWNoZWQgYW4gZW50cnkgd2l0aG91dCBhY2NlcHRpbmcuIFJlbG9hZC5cbiAgICAgICAgYWNjZXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudHMucHVzaC5hcHBseShwYXJlbnRzLCBfdG9Db25zdW1hYmxlQXJyYXkocCkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhY2NlcHRlZDtcbn1cblxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuLCBkZXBzQnlCdW5kbGVcbi8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovXG4pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGVwc0J5QnVuZGxlICYmICFkZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdKSB7XG4gICAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgcm9vdCBidW5kbGUgd2l0aG91dCBmaW5kaW5nIHdoZXJlIHRoZSBhc3NldCBzaG91bGQgZ28sXG4gICAgLy8gdGhlcmUncyBub3RoaW5nIHRvIGRvLiBNYXJrIGFzIFwiYWNjZXB0ZWRcIiBzbyB3ZSBkb24ndCByZWxvYWQgdGhlIHBhZ2UuXG4gICAgaWYgKCFidW5kbGUucGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG1yQWNjZXB0Q2hlY2soYnVuZGxlLnBhcmVudCwgaWQsIGRlcHNCeUJ1bmRsZSk7XG4gIH1cblxuICBpZiAoY2hlY2tlZEFzc2V0c1tpZF0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNoZWNrZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGFzc2V0c1RvQWNjZXB0LnB1c2goW2J1bmRsZSwgaWRdKTtcblxuICBpZiAoIWNhY2hlZCB8fCBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRSdW4oYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuKSB7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBidW5kbGUuaG90RGF0YSA9IHt9O1xuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCkge1xuICAgIGNhY2hlZC5ob3QuZGF0YSA9IGJ1bmRsZS5ob3REYXRhO1xuICB9XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgY2IoYnVuZGxlLmhvdERhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZShpZCk7XG4gIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIHZhciBhc3NldHNUb0Fsc29BY2NlcHQgPSBjYihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChhc3NldHNUb0Fsc29BY2NlcHQgJiYgYXNzZXRzVG9BY2NlcHQubGVuZ3RoKSB7XG4gICAgICAgIC8vICRGbG93Rml4TWVbbWV0aG9kLXVuYmluZGluZ11cbiAgICAgICAgYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShhc3NldHNUb0FjY2VwdCwgYXNzZXRzVG9BbHNvQWNjZXB0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFjY2VwdGVkQXNzZXRzW2lkXSA9IHRydWU7XG59IiwiaW1wb3J0IGJyb3dzZXIgZnJvbSBcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiO1xyXG5pbXBvcnQgdSBmcm9tIFwidW1icmVsbGFqc1wiO1xyXG5pbXBvcnQgeyBTaG9ydGN1dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBkZWZhdWx0U2hvcnRjdXRzIH0gZnJvbSBcIi4uL3NldHRpbmdzL2RlZmF1bHQtc2hvcnRjdXRzXCI7XHJcblxyXG4vLyByZXBsYWNlIHRyYW5zbGF0ZWRcclxudShcIltkYXRhLW1zZ11cIikuZWFjaChmdW5jdGlvbiAobm9kZSkge1xyXG4gIGNvbnN0IGtleSA9IHUobm9kZSkuZGF0YShcIm1zZ1wiKTtcclxuICBjb25zdCB0ZXh0ID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2Uoa2V5KTtcclxuICB1KG5vZGUpLnRleHQodGV4dCA9PT0gXCJcIiA/IGtleSA6IHRleHQpO1xyXG59KTtcclxuXHJcbmJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoeyBzaG9ydGN1dHM6IGRlZmF1bHRTaG9ydGN1dHMgfSkudGhlbihcclxuICAoeyBzaG9ydGN1dHMgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc2hvcnRjdXRzKTtcclxuICAgIHUoXCJpbnB1dFwiKS5lYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgIGNvbnN0IGNvbW1hbmQgPSB1KG5vZGUpLmF0dHIoXCJpZFwiKTtcclxuICAgICAgY29uc3Qgc2hvcnRjdXQgPSBzaG9ydGN1dHNbY29tbWFuZF07XHJcbiAgICAgIHUobm9kZSkuYXR0cihcInZhbHVlXCIsIHNob3J0Y3V0MlRleHQoc2hvcnRjdXQpKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbik7XHJcblxyXG4vLyBpbml0IHNob3J0Y3V0c1xyXG5cclxubGV0IG9zO1xyXG5icm93c2VyLnJ1bnRpbWUuZ2V0UGxhdGZvcm1JbmZvKCkudGhlbigoaW5mbykgPT4ge1xyXG4gIG9zID0gaW5mby5vcztcclxufSk7XHJcblxyXG5sZXQgZm9ybVNob3J0Y3V0cyA9IHt9O1xyXG5cclxudShcImlucHV0XCIpLm9uKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gdShlLnRhcmdldCkuZmlyc3QoKTtcclxuXHJcbiAgaWYgKCFpbnB1dC5pZCkgcmV0dXJuO1xyXG5cclxuICBmb3JtU2hvcnRjdXRzW2lucHV0LmlkXSA9IHtcclxuICAgIGN0cmxLZXk6IGUuY3RybEtleSxcclxuICAgIHNoaWZ0S2V5OiBlLnNoaWZ0S2V5LFxyXG4gICAgYWx0S2V5OiBlLmFsdEtleSxcclxuICAgIG1ldGFLZXk6IGUubWV0YUtleSxcclxuICAgIGtleTogZS5rZXksXHJcbiAgfTtcclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGlucHV0LnZhbHVlID0gc2hvcnRjdXQyVGV4dChmb3JtU2hvcnRjdXRzW2lucHV0LmlkXSk7XHJcbn0pO1xyXG5cclxudShcImZvcm1cIikub24oXCJzdWJtaXRcIiwgKCkgPT4ge1xyXG4gIC8vICEgbm8gZXJyb3IgaGFuZGxpbmdcclxuICBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHtcclxuICAgIHNob3J0Y3V0czogZm9ybVNob3J0Y3V0cyxcclxuICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBzaG9ydGN1dDJUZXh0KHNob3J0Y3V0OiBTaG9ydGN1dCkge1xyXG4gIGNvbnN0IG1vZGlmaWVycyA9IFtdO1xyXG4gIGlmIChzaG9ydGN1dC5jdHJsS2V5KSBtb2RpZmllcnMucHVzaChcIkN0cmxcIik7XHJcbiAgaWYgKHNob3J0Y3V0LnNoaWZ0S2V5KSBtb2RpZmllcnMucHVzaChcIlNoaWZ0XCIpO1xyXG4gIGlmIChzaG9ydGN1dC5hbHRLZXkpIG1vZGlmaWVycy5wdXNoKFwiQWx0XCIpO1xyXG4gIGlmIChzaG9ydGN1dC5tZXRhS2V5KSB7XHJcbiAgICBpZiAob3MgPT09IFwibWFjXCIpIHtcclxuICAgICAgbW9kaWZpZXJzLnB1c2goXCLijJhcIik7XHJcbiAgICB9IGVsc2UgaWYgKG9zID09PSBcIndpblwiKSB7XHJcbiAgICAgIG1vZGlmaWVycy5wdXNoKFwiV2luXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IGtleSA9IHNob3J0Y3V0LmtleTtcclxuICBpZiAoW1wiQ29udHJvbFwiLCBcIlNoaWZ0XCIsIFwiQWx0XCIsIFwiTWV0YVwiXS5pbmNsdWRlcyhzaG9ydGN1dC5rZXkpKSB7XHJcbiAgICBrZXkgPSBcIlwiO1xyXG4gIH0gZWxzZSBpZiAoa2V5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAga2V5ID0ga2V5LnRvVXBwZXJDYXNlKCk7XHJcbiAgfVxyXG5cclxuICBpZiAobW9kaWZpZXJzLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiBtb2RpZmllcnMuam9pbihcIitcIikgKyAoa2V5ID09PSBcIlwiID8ga2V5IDogXCIrXCIgKyBrZXkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ga2V5O1xyXG4gIH1cclxufVxyXG4iLCIvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC44LjAgLSBUdWUgQXByIDIwIDIwMjEgMTE6Mjc6MzggKi9cbi8qIC0qLSBNb2RlOiBpbmRlbnQtdGFicy1tb2RlOiBuaWw7IGpzLWluZGVudC1sZXZlbDogMiAtKi0gKi9cbi8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG4vKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICh0eXBlb2YgYnJvd3NlciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYnJvd3NlcikgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgY29uc3QgQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFID0gXCJUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuXCI7XG4gIGNvbnN0IFNFTkRfUkVTUE9OU0VfREVQUkVDQVRJT05fV0FSTklORyA9IFwiUmV0dXJuaW5nIGEgUHJvbWlzZSBpcyB0aGUgcHJlZmVycmVkIHdheSB0byBzZW5kIGEgcmVwbHkgZnJvbSBhbiBvbk1lc3NhZ2Uvb25NZXNzYWdlRXh0ZXJuYWwgbGlzdGVuZXIsIGFzIHRoZSBzZW5kUmVzcG9uc2Ugd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIHNwZWNzIChTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9Nb3ppbGxhL0FkZC1vbnMvV2ViRXh0ZW5zaW9ucy9BUEkvcnVudGltZS9vbk1lc3NhZ2UpXCI7XG5cbiAgLy8gV3JhcHBpbmcgdGhlIGJ1bGsgb2YgdGhpcyBwb2x5ZmlsbCBpbiBhIG9uZS10aW1lLXVzZSBmdW5jdGlvbiBpcyBhIG1pbm9yXG4gIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxuICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAvLyBuZXZlciBhY3R1YWxseSBuZWVkIHRvIGJlIGNhbGxlZCwgdGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIGJlIGluY2x1ZGVkXG4gIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxuICBjb25zdCB3cmFwQVBJcyA9IGV4dGVuc2lvbkFQSXMgPT4ge1xuICAgIC8vIE5PVEU6IGFwaU1ldGFkYXRhIGlzIGFzc29jaWF0ZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGFwaS1tZXRhZGF0YS5qc29uIGZpbGVcbiAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgLy8gSlNPTiBmaWxlLlxuICAgIGNvbnN0IGFwaU1ldGFkYXRhID0ge1xuICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImNsZWFyQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRSZWNlbnRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0U3ViVHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYnJvd3NlckFjdGlvblwiOiB7XG4gICAgICAgIFwiZGlzYWJsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwib3BlblBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInNldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ2FjaGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVEb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRm9ybURhdGFcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVMb2NhbFN0b3JhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlUGFzc3dvcmRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0dGluZ3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImNvb2tpZXNcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsQ29va2llU3RvcmVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgXCJpbnNwZWN0ZWRXaW5kb3dcIjoge1xuICAgICAgICAgIFwiZXZhbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYW5lbHNcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAzLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDMsXG4gICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZWxlbWVudHNcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZG93bmxvYWRzXCI6IHtcbiAgICAgICAgXCJjYW5jZWxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXJhc2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0RmlsZUljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwicGF1c2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXN1bWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICBcImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiaXNBbGxvd2VkSW5jb2duaXRvQWNjZXNzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJoaXN0b3J5XCI6IHtcbiAgICAgICAgXCJhZGRVcmxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZVJhbmdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZVVybFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBY2NlcHRMYW5ndWFnZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImlkZW50aXR5XCI6IHtcbiAgICAgICAgXCJsYXVuY2hXZWJBdXRoRmxvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaWRsZVwiOiB7XG4gICAgICAgIFwicXVlcnlTdGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwibWFuYWdlbWVudFwiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRTZWxmXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInNldEVuYWJsZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwibm90aWZpY2F0aW9uc1wiOiB7XG4gICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBlcm1pc3Npb25zXCI6IHtcbiAgICAgICAgXCJjb250YWluc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICBcImdldEJhY2tncm91bmRQYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuT3B0aW9uc1BhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWVzdFVwZGF0ZUNoZWNrXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInNlbmROYXRpdmVNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNldFVuaW5zdGFsbFVSTFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2Vzc2lvbnNcIjoge1xuICAgICAgICBcImdldERldmljZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzdG9yZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgIFwibG9jYWxcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWFuYWdlZFwiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGFic1wiOiB7XG4gICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZHVwbGljYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImV4ZWN1dGVTY3JpcHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Wm9vbVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ29CYWNrXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdvRm9yd2FyZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaW5zZXJ0Q1NTXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVsb2FkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0Wm9vbVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgXCJnZXRBbGxGcmFtZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0RnJhbWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndlYlJlcXVlc3RcIjoge1xuICAgICAgICBcImhhbmRsZXJCZWhhdmlvckNoYW5nZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndpbmRvd3NcIjoge1xuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoT2JqZWN0LmtleXMoYXBpTWV0YWRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBXZWFrTWFwIHN1YmNsYXNzIHdoaWNoIGNyZWF0ZXMgYW5kIHN0b3JlcyBhIHZhbHVlIGZvciBhbnkga2V5IHdoaWNoIGRvZXNcbiAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICogb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxuICAgICAqICAgICAgICBrZXkgd2hpY2ggZG9lcyBub3QgZXhpc3QsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGFjY2Vzc2VkLiBUaGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICovXG4gICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcbiAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcbiAgICAgIH1cblxuICAgICAgZ2V0KGtleSkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICB0aGlzLnNldChrZXksIHRoaXMuY3JlYXRlSXRlbShrZXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBvYmplY3Qgd2l0aCBhIGB0aGVuYCBtZXRob2QsIGFuZCBjYW5cbiAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICovXG4gICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcbiAgICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxuICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XG4gICAgICpcbiAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXG4gICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXG4gICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxuICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcbiAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAqICAgICAgICBwcm9taXNlLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxuICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3RcbiAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fFxuICAgICAgICAgICAgICAgICAgIChjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSkge1xuICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSAobnVtQXJncykgPT4gbnVtQXJncyA9PSAxID8gXCJhcmd1bWVudFwiIDogXCJhcmd1bWVudHNcIjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggZmV3ZXIgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAqICAgICAgIFRoZSBnZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxuICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcbiAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe3Jlc29sdmUsIHJlamVjdH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFwiLCBjYkVycm9yKTtcblxuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG5cbiAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBBUEkgbWV0aG9kIG1ldGFkYXRhLCBzbyB0aGF0IHRoZSBuZXh0IEFQSSBjYWxscyB3aWxsIG5vdCB0cnkgdG9cbiAgICAgICAgICAgICAgLy8gdXNlIHRoZSB1bnN1cHBvcnRlZCBjYWxsYmFjayBhbnltb3JlLlxuICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICBtZXRhZGF0YS5ub0NhbGxiYWNrID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe3Jlc29sdmUsIHJlamVjdH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcbiAgICAgKiBpbnRlcmNlcHRlZCBieSB0aGUgZ2l2ZW4gd3JhcHBlciBmdW5jdGlvbi4gVGhlIHdyYXBwZXIgZnVuY3Rpb24gcmVjZWl2ZXMsXG4gICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2RcbiAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZXJcbiAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcbiAgICAgKiAgICAgICAgbWV0aG9kIGluIGl0cyBwbGFjZS5cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xuICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgLyoqXG4gICAgICogV3JhcHMgYW4gb2JqZWN0IGluIGEgUHJveHkgd2hpY2ggaW50ZXJjZXB0cyBhbmQgd3JhcHMgY2VydGFpbiBtZXRob2RzXG4gICAgICogYmFzZWQgb24gdGhlIGdpdmVuIGB3cmFwcGVyc2AgYW5kIGBtZXRhZGF0YWAgb2JqZWN0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgKiAgICAgICAgVGhlIHRhcmdldCBvYmplY3QgdG8gd3JhcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbd3JhcHBlcnMgPSB7fV1cbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyB3cmFwcGVyIGZ1bmN0aW9ucyBmb3Igc3BlY2lhbCBjYXNlcy4gQW55XG4gICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICogICAgICAgIG1ldGhvZCBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUuIFRoZXNlXG4gICAgICogICAgICAgIHdyYXBwZXIgbWV0aG9kcyBhcmUgaW52b2tlZCBhcyBkZXNjcmliZWQgaW4ge0BzZWUgd3JhcE1ldGhvZH0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhID0ge31dXG4gICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgbWV0YWRhdGEgdXNlZCB0byBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlXG4gICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICogICAgICAgIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZSB3aGljaCBoYXMgYSBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIG9iamVjdFxuICAgICAqICAgICAgICBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYG1ldGFkYXRhYCB0cmVlIGlzIHJlcGxhY2VkIHdpdGggYW5cbiAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICogICAgICAgIHtAc2VlIHdyYXBBc3luY0Z1bmN0aW9ufVxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICovXG4gICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBsZXQgaGFuZGxlcnMgPSB7XG4gICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgc3BlY2lhbC1jYXNlIHdyYXBwZXIgZm9yIHRoaXMgbWV0aG9kLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gYXN5bmMgbWV0aG9kIHRoYXQgd2UgaGF2ZSBtZXRhZGF0YSBmb3IuIENyZWF0ZSBhXG4gICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAvLyBvcmlnaW5hbCBtZXRob2QsIGJvdW5kIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICBoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgLy8gbWV0YWRhdGEuXG4gICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAvLyBXcmFwIGFsbCBwcm9wZXJ0aWVzIGluICogbmFtZXNwYWNlLlxuICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBkbyBhbnkgd3JhcHBpbmcgZm9yIHRoaXMgcHJvcGVydHksXG4gICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldChwcm94eVRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xuICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGNhY2hlLCBwcm9wKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcbiAgICAgIC8vIG5vbi1jb25maWd1cmFibGUuIEZvciB0aGlzIHJlYXNvbiwgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcbiAgICAgIC8vIGFyZSBkZWNsYXJlZCByZWFkLW9ubHkgYW5kIG5vbi1jb25maWd1cmFibGUsIHN1Y2ggYXMgYGNocm9tZS5kZXZ0b29sc2AuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXG4gICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBgcHJveHlUYXJnZXRgLCBzbyB0aGF0IHRoZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZVxuICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cbiAgICAgIGxldCBwcm94eVRhcmdldCA9IE9iamVjdC5jcmVhdGUodGFyZ2V0KTtcbiAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNldCBvZiB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYW4gZXZlbnQgb2JqZWN0LCB3aGljaCBoYW5kbGVzXG4gICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgKlxuICAgICAqIEEgc2luZ2xlIHdyYXBwZXIgaXMgY3JlYXRlZCBmb3IgZWFjaCBsaXN0ZW5lciBmdW5jdGlvbiwgYW5kIHN0b3JlZCBpbiBhXG4gICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgKiByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgd3JhcHBlciwgc28gdGhhdCAgYXR0ZW1wdHMgdG8gcmVtb3ZlIGFcbiAgICAgKiBwcmV2aW91c2x5LWFkZGVkIGxpc3RlbmVyIHdvcmsgYXMgZXhwZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RlZmF1bHRXZWFrTWFwPGZ1bmN0aW9uLCBmdW5jdGlvbj59IHdyYXBwZXJNYXBcbiAgICAgKiAgICAgICAgQSBEZWZhdWx0V2Vha01hcCBvYmplY3Qgd2hpY2ggd2lsbCBjcmVhdGUgdGhlIGFwcHJvcHJpYXRlIHdyYXBwZXJcbiAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAqICAgICAgICBhbiBleGlzdGluZyBvbmUgd2hlbiBpdCBkb2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwRXZlbnQgPSB3cmFwcGVyTWFwID0+ICh7XG4gICAgICBhZGRMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyLCAuLi5hcmdzKSB7XG4gICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgfSxcblxuICAgICAgaGFzTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmVMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAqIGBnZXRDb250ZW50KClgIHByb3BlcnR5IHdoaWNoIHJldHVybnMgYSBgUHJvbWlzZWAgcmF0aGVyIHRoYW4gdXNpbmcgYVxuICAgICAgICogY2FsbGJhY2sgQVBJLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXFcbiAgICAgICAqICAgICAgICBUaGUgSEFSIGVudHJ5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5ldHdvcmsgcmVxdWVzdC5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xuICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9IC8qIHdyYXBwZXJzICovLCB7XG4gICAgICAgICAgZ2V0Q29udGVudDoge1xuICAgICAgICAgICAgbWluQXJnczogMCxcbiAgICAgICAgICAgIG1heEFyZ3M6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGxpc3RlbmVyKHdyYXBwZWRSZXEpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIC8vIEtlZXAgdHJhY2sgaWYgdGhlIGRlcHJlY2F0aW9uIHdhcm5pbmcgaGFzIGJlZW4gbG9nZ2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgbGV0IGxvZ2dlZFNlbmRSZXNwb25zZURlcHJlY2F0aW9uV2FybmluZyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrLiBJZiB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UsIHRoZSByZXNwb25zZSBpc1xuICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxuICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAqICAgICAgICBEZXRhaWxzIGFib3V0IHRoZSBzZW5kZXIgb2YgdGhlIG1lc3NhZ2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAqICAgICAgICB0aGF0IHZhbHVlIGFzIGEgcmVzcG9uc2UuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICogICAgICAgIHlpZWxkIGEgcmVzcG9uc2UuIEZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICBsZXQgc2VuZFJlc3BvbnNlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKCFsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFNFTkRfUkVTUE9OU0VfREVQUkVDQVRJT05fV0FSTklORywgbmV3IEVycm9yKCkuc3RhY2spO1xuICAgICAgICAgICAgICBsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTtcblxuICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyByZXNwb25zZSBzZW50IGZyb20gdGhpcyBsaXN0ZW5lci5cbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgLy8gcHJvbWlzZSkuXG4gICAgICAgIGNvbnN0IHNlbmRQcm9taXNlZFJlc3VsdCA9IChwcm9taXNlKSA9PiB7XG4gICAgICAgICAgcHJvbWlzZS50aGVuKG1zZyA9PiB7XG4gICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgLy8gUHJpbnQgYW4gZXJyb3Igb24gdGhlIGNvbnNvbGUgaWYgdW5hYmxlIHRvIHNlbmQgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgLy8gcmVzdWx0LCBvdGhlcndpc2Ugd2FpdCB0aGUgcHJvbWlzZSByZWxhdGVkIHRvIHRoZSB3cmFwcGVkU2VuZFJlc3BvbnNlXG4gICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cbiAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtyZWplY3QsIHJlc29sdmV9LCByZXBseSkgPT4ge1xuICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcbiAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgLy8gQ29udmVydCBiYWNrIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpbnRvXG4gICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZENiID0gd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2suYmluZChudWxsLCB7cmVzb2x2ZSwgcmVqZWN0fSk7XG4gICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICBkZXZ0b29sczoge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgb25SZXF1ZXN0RmluaXNoZWQ6IHdyYXBFdmVudChvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBydW50aW1lOiB7XG4gICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHttaW5BcmdzOiAxLCBtYXhBcmdzOiAzfSksXG4gICAgICB9LFxuICAgICAgdGFiczoge1xuICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7bWluQXJnczogMiwgbWF4QXJnczogM30pLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgIGNsZWFyOiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgICBnZXQ6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICAgIHNldDoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgIH07XG4gICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgIG5ldHdvcms6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICAgIHNlcnZpY2VzOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgICB3ZWJzaXRlczoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgIH07XG5cbiAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgY2hyb21lICE9IFwib2JqZWN0XCIgfHwgIWNocm9tZSB8fCAhY2hyb21lLnJ1bnRpbWUgfHwgIWNocm9tZS5ydW50aW1lLmlkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xuICB9XG5cbiAgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXG4gIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gYnJvd3Nlcjtcbn1cbiIsIi8qIFVtYnJlbGxhIEpTIDMuMy4wIHVtYnJlbGxhanMuY29tICovXG5cbnZhciB1PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiB1P3QgaW5zdGFuY2VvZiB1P3Q6KCh0PVwic3RyaW5nXCI9PXR5cGVvZiB0P3RoaXMuc2VsZWN0KHQsZSk6dCkmJnQubm9kZU5hbWUmJih0PVt0XSksdm9pZCh0aGlzLm5vZGVzPXRoaXMuc2xpY2UodCkpKTpuZXcgdSh0LGUpfTt1LnByb3RvdHlwZT17Z2V0IGxlbmd0aCgpe3JldHVybiB0aGlzLm5vZGVzLmxlbmd0aH19LHUucHJvdG90eXBlLm5vZGVzPVtdLHUucHJvdG90eXBlLmFkZENsYXNzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaGFyZyhhcmd1bWVudHMsZnVuY3Rpb24odCxlKXt0LmNsYXNzTGlzdC5hZGQoZSl9KX0sdS5wcm90b3R5cGUuYWRqYWNlbnQ9ZnVuY3Rpb24obyx0LGkpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0JiYodD0wPT09dD9bXTpuZXcgQXJyYXkodCkuam9pbigpLnNwbGl0KFwiLFwiKS5tYXAoTnVtYmVyLmNhbGwsTnVtYmVyKSksdGhpcy5lYWNoKGZ1bmN0aW9uKG4scil7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3UodHx8e30pLm1hcChmdW5jdGlvbih0LGUpe2U9XCJmdW5jdGlvblwiPT10eXBlb2Ygbz9vLmNhbGwodGhpcyx0LGUsbixyKTpvO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP3RoaXMuZ2VuZXJhdGUoZSk6dShlKX0pLmVhY2goZnVuY3Rpb24odCl7dGhpcy5pc0luUGFnZSh0KT9lLmFwcGVuZENoaWxkKHUodCkuY2xvbmUoKS5maXJzdCgpKTplLmFwcGVuZENoaWxkKHQpfSksaS5jYWxsKHRoaXMsbixlKX0pfSx1LnByb3RvdHlwZS5hZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkamFjZW50KHQsZSxmdW5jdGlvbih0LGUpe3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0Lm5leHRTaWJsaW5nKX0pfSx1LnByb3RvdHlwZS5hcHBlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hZGphY2VudCh0LGUsZnVuY3Rpb24odCxlKXt0LmFwcGVuZENoaWxkKGUpfSl9LHUucHJvdG90eXBlLmFyZ3M9ZnVuY3Rpb24odCxlLG4pe3JldHVybih0PVwic3RyaW5nXCIhPXR5cGVvZih0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChlLG4pOnQpP3RoaXMuc2xpY2UodCkubWFwKHRoaXMuc3RyKGUsbikpOnQpLnRvU3RyaW5nKCkuc3BsaXQoL1tcXHMsXSsvKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQubGVuZ3RofSl9LHUucHJvdG90eXBlLmFycmF5PWZ1bmN0aW9uKG8pe3ZhciBpPXRoaXM7cmV0dXJuIHRoaXMubm9kZXMucmVkdWNlKGZ1bmN0aW9uKHQsZSxuKXt2YXIgcjtyZXR1cm4gbz8ocj1cInN0cmluZ1wiPT10eXBlb2Yocj0ocj1vLmNhbGwoaSxlLG4pKXx8ITEpP3Uocik6cilpbnN0YW5jZW9mIHUmJihyPXIubm9kZXMpOnI9ZS5pbm5lckhUTUwsdC5jb25jYXQoITEhPT1yP3I6W10pfSxbXSl9LHUucHJvdG90eXBlLmF0dHI9ZnVuY3Rpb24odCxlLHIpe3JldHVybiByPXI/XCJkYXRhLVwiOlwiXCIsdGhpcy5wYWlycyh0LGUsZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5nZXRBdHRyaWJ1dGUocitlKX0sZnVuY3Rpb24odCxlLG4pe24/dC5zZXRBdHRyaWJ1dGUocitlLG4pOnQucmVtb3ZlQXR0cmlidXRlKHIrZSl9KX0sdS5wcm90b3R5cGUuYmVmb3JlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRqYWNlbnQodCxlLGZ1bmN0aW9uKHQsZSl7dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHQpfSl9LHUucHJvdG90eXBlLmNoaWxkcmVuPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zbGljZSh0LmNoaWxkcmVuKX0pLmZpbHRlcih0KX0sdS5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCxlKXt2YXIgbj10LmNsb25lTm9kZSghMCkscj10aGlzLmdldEFsbChuKTtyZXR1cm4gdGhpcy5nZXRBbGwodCkuZWFjaChmdW5jdGlvbih0LGUpe2Zvcih2YXIgbiBpbiB0aGlzLm1pcnJvcil0aGlzLm1pcnJvcltuXSYmdGhpcy5taXJyb3Jbbl0odCxyLm5vZGVzW2VdKX0pLG59KX0sdS5wcm90b3R5cGUuZ2V0QWxsPWZ1bmN0aW9uKHQpe3JldHVybiB1KFt0XS5jb25jYXQodShcIipcIix0KS5ub2RlcykpfSx1LnByb3RvdHlwZS5taXJyb3I9e30sdS5wcm90b3R5cGUubWlycm9yLmV2ZW50cz1mdW5jdGlvbih0LGUpe2lmKHQuX2UpZm9yKHZhciBuIGluIHQuX2UpdC5fZVtuXS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3UoZSkub24obix0LmNhbGxiYWNrKX0pfSx1LnByb3RvdHlwZS5taXJyb3Iuc2VsZWN0PWZ1bmN0aW9uKHQsZSl7dSh0KS5pcyhcInNlbGVjdFwiKSYmKGUudmFsdWU9dC52YWx1ZSl9LHUucHJvdG90eXBlLm1pcnJvci50ZXh0YXJlYT1mdW5jdGlvbih0LGUpe3UodCkuaXMoXCJ0ZXh0YXJlYVwiKSYmKGUudmFsdWU9dC52YWx1ZSl9LHUucHJvdG90eXBlLmNsb3Nlc3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe2Rve2lmKHUodCkuaXMoZSkpcmV0dXJuIHR9d2hpbGUoKHQ9dC5wYXJlbnROb2RlKSYmdCE9PWRvY3VtZW50KX0pfSx1LnByb3RvdHlwZS5kYXRhPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYXR0cih0LGUsITApfSx1LnByb3RvdHlwZS5lYWNoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm5vZGVzLmZvckVhY2godC5iaW5kKHRoaXMpKSx0aGlzfSx1LnByb3RvdHlwZS5lYWNoYXJnPWZ1bmN0aW9uKG4scil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlLHQpe3RoaXMuYXJncyhuLGUsdCkuZm9yRWFjaChmdW5jdGlvbih0KXtyLmNhbGwodGhpcyxlLHQpfSx0aGlzKX0pfSx1LnByb3RvdHlwZS5lbXB0eT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24odCl7Zm9yKDt0LmZpcnN0Q2hpbGQ7KXQucmVtb3ZlQ2hpbGQodC5maXJzdENoaWxkKX0pfSx1LnByb3RvdHlwZS5maWx0ZXI9ZnVuY3Rpb24oZSl7dmFyIHQ9ZSBpbnN0YW5jZW9mIHU/ZnVuY3Rpb24odCl7cmV0dXJuLTEhPT1lLm5vZGVzLmluZGV4T2YodCl9OlwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpmdW5jdGlvbih0KXtyZXR1cm4gdC5tYXRjaGVzPXQubWF0Y2hlc3x8dC5tc01hdGNoZXNTZWxlY3Rvcnx8dC53ZWJraXRNYXRjaGVzU2VsZWN0b3IsdC5tYXRjaGVzKGV8fFwiKlwiKX07cmV0dXJuIHUodGhpcy5ub2Rlcy5maWx0ZXIodCkpfSx1LnByb3RvdHlwZS5maW5kPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdShlfHxcIipcIix0KX0pfSx1LnByb3RvdHlwZS5maXJzdD1mdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGVzWzBdfHwhMX0sdS5wcm90b3R5cGUuZ2VuZXJhdGU9ZnVuY3Rpb24odCl7cmV0dXJuL15cXHMqPHRyWz4gXS8udGVzdCh0KT91KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKSkuaHRtbCh0KS5jaGlsZHJlbigpLmNoaWxkcmVuKCkubm9kZXM6L15cXHMqPHQoaHxkKVs+IF0vLnRlc3QodCk/dShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIikpLmh0bWwodCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmNoaWxkcmVuKCkubm9kZXM6L15cXHMqPC8udGVzdCh0KT91KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmh0bWwodCkuY2hpbGRyZW4oKS5ub2Rlczpkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KX0sdS5wcm90b3R5cGUuaGFuZGxlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5zbGljZShhcmd1bWVudHMpLm1hcChmdW5jdGlvbihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2Z1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX06ZX0sdGhpcyk7cmV0dXJuIHRoaXMub24uYXBwbHkodGhpcyx0KX0sdS5wcm90b3R5cGUuaGFzQ2xhc3M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pcyhcIi5cIit0aGlzLmFyZ3MoYXJndW1lbnRzKS5qb2luKFwiLlwiKSl9LHUucHJvdG90eXBlLmh0bWw9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/dGhpcy5maXJzdCgpLmlubmVySFRNTHx8XCJcIjp0aGlzLmVhY2goZnVuY3Rpb24odCl7dC5pbm5lckhUTUw9ZX0pfSx1LnByb3RvdHlwZS5pcz1mdW5jdGlvbih0KXtyZXR1cm4gMDx0aGlzLmZpbHRlcih0KS5sZW5ndGh9LHUucHJvdG90eXBlLmlzSW5QYWdlPWZ1bmN0aW9uKHQpe3JldHVybiB0IT09ZG9jdW1lbnQuYm9keSYmZG9jdW1lbnQuYm9keS5jb250YWlucyh0KX0sdS5wcm90b3R5cGUubGFzdD1mdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGVzW3RoaXMubGVuZ3RoLTFdfHwhMX0sdS5wcm90b3R5cGUubWFwPWZ1bmN0aW9uKHQpe3JldHVybiB0P3UodGhpcy5hcnJheSh0KSkudW5pcXVlKCk6dGhpc30sdS5wcm90b3R5cGUubm90PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4hdSh0KS5pcyhlfHwhMCl9KX0sdS5wcm90b3R5cGUub2ZmPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1udWxsPT1lJiZudWxsPT1uLG89bnVsbCxpPWU7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJihvPWUsaT1uKSx0aGlzLmVhY2hhcmcodCxmdW5jdGlvbihlLG4pe3UoZS5fZT9lLl9lW25dOltdKS5lYWNoKGZ1bmN0aW9uKHQpeyhyfHx0Lm9yaWdfY2FsbGJhY2s9PT1pJiZ0LnNlbGVjdG9yPT09bykmJmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLHQuY2FsbGJhY2spfSl9KX0sdS5wcm90b3R5cGUub249ZnVuY3Rpb24odCxlLG8pe2Z1bmN0aW9uIGkodCxlKXt0cnl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJjdXJyZW50VGFyZ2V0XCIse3ZhbHVlOmUsY29uZmlndXJhYmxlOiEwfSl9Y2F0Y2godCl7fX12YXIgYz1udWxsLG49ZTtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGM9ZSxuPW8sZT1mdW5jdGlvbihuKXt2YXIgcj1hcmd1bWVudHM7dShuLmN1cnJlbnRUYXJnZXQpLmZpbmQoYykuZWFjaChmdW5jdGlvbih0KXt2YXIgZTt0LmNvbnRhaW5zKG4udGFyZ2V0KSYmKGU9bi5jdXJyZW50VGFyZ2V0LGkobix0KSxvLmFwcGx5KHQsciksaShuLGUpKX0pfSk7ZnVuY3Rpb24gcih0KXtyZXR1cm4gZS5hcHBseSh0aGlzLFt0XS5jb25jYXQodC5kZXRhaWx8fFtdKSl9cmV0dXJuIHRoaXMuZWFjaGFyZyh0LGZ1bmN0aW9uKHQsZSl7dC5hZGRFdmVudExpc3RlbmVyKGUsciksdC5fZT10Ll9lfHx7fSx0Ll9lW2VdPXQuX2VbZV18fFtdLHQuX2VbZV0ucHVzaCh7Y2FsbGJhY2s6cixvcmlnX2NhbGxiYWNrOm4sc2VsZWN0b3I6Y30pfSl9LHUucHJvdG90eXBlLnBhaXJzPWZ1bmN0aW9uKHIsdCxlLG8pe3ZhciBuO3JldHVybiB2b2lkIDAhPT10JiYobj1yLChyPXt9KVtuXT10KSxcIm9iamVjdFwiPT10eXBlb2Ygcj90aGlzLmVhY2goZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gcilcImZ1bmN0aW9uXCI9PXR5cGVvZiByW25dP28odCxuLHJbbl0odCxlKSk6byh0LG4scltuXSl9KTp0aGlzLmxlbmd0aD9lKHRoaXMuZmlyc3QoKSxyKTpcIlwifSx1LnByb3RvdHlwZS5wYXJhbT1mdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmtleXMoZSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnVyaSh0KStcIj1cIit0aGlzLnVyaShlW3RdKX0uYmluZCh0aGlzKSkuam9pbihcIiZcIil9LHUucHJvdG90eXBlLnBhcmVudD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHQucGFyZW50Tm9kZX0pLmZpbHRlcih0KX0sdS5wcm90b3R5cGUucHJlcGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkamFjZW50KHQsZSxmdW5jdGlvbih0LGUpe3QuaW5zZXJ0QmVmb3JlKGUsdC5maXJzdENoaWxkKX0pfSx1LnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHQpe3QucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpfSl9LHUucHJvdG90eXBlLnJlbW92ZUNsYXNzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaGFyZyhhcmd1bWVudHMsZnVuY3Rpb24odCxlKXt0LmNsYXNzTGlzdC5yZW1vdmUoZSl9KX0sdS5wcm90b3R5cGUucmVwbGFjZT1mdW5jdGlvbih0LGUpe3ZhciBuPVtdO3JldHVybiB0aGlzLmFkamFjZW50KHQsZSxmdW5jdGlvbih0LGUpe249bi5jb25jYXQodGhpcy5zbGljZShlLmNoaWxkcmVuKSksdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlLHQpfSksdShuKX0sdS5wcm90b3R5cGUuc2Nyb2xsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmlyc3QoKS5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6XCJzbW9vdGhcIn0pLHRoaXN9LHUucHJvdG90eXBlLnNlbGVjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0PXQucmVwbGFjZSgvXlxccyovLFwiXCIpLnJlcGxhY2UoL1xccyokLyxcIlwiKSwvXjwvLnRlc3QodCk/dSgpLmdlbmVyYXRlKHQpOihlfHxkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbCh0KX0sdS5wcm90b3R5cGUuc2VyaWFsaXplPWZ1bmN0aW9uKCl7dmFyIHI9dGhpcztyZXR1cm4gdGhpcy5zbGljZSh0aGlzLmZpcnN0KCkuZWxlbWVudHMpLnJlZHVjZShmdW5jdGlvbihlLG4pe3JldHVybiFuLm5hbWV8fG4uZGlzYWJsZWR8fFwiZmlsZVwiPT09bi50eXBlfHwvKGNoZWNrYm94fHJhZGlvKS8udGVzdChuLnR5cGUpJiYhbi5jaGVja2VkP2U6XCJzZWxlY3QtbXVsdGlwbGVcIj09PW4udHlwZT8odShuLm9wdGlvbnMpLmVhY2goZnVuY3Rpb24odCl7dC5zZWxlY3RlZCYmKGUrPVwiJlwiK3IudXJpKG4ubmFtZSkrXCI9XCIrci51cmkodC52YWx1ZSkpfSksZSk6ZStcIiZcIityLnVyaShuLm5hbWUpK1wiPVwiK3IudXJpKG4udmFsdWUpfSxcIlwiKS5zbGljZSgxKX0sdS5wcm90b3R5cGUuc2libGluZ3M9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMucGFyZW50KCkuY2hpbGRyZW4odCkubm90KHRoaXMpfSx1LnByb3RvdHlwZS5zaXplPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmlyc3QoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKX0sdS5wcm90b3R5cGUuc2xpY2U9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJjAhPT10Lmxlbmd0aCYmXCJzdHJpbmdcIiE9dHlwZW9mIHQmJlwiW29iamVjdCBGdW5jdGlvbl1cIiE9PXQudG9TdHJpbmcoKT90Lmxlbmd0aD9bXS5zbGljZS5jYWxsKHQubm9kZXN8fHQpOlt0XTpbXX0sdS5wcm90b3R5cGUuc3RyPWZ1bmN0aW9uKGUsbil7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dC5jYWxsKHRoaXMsZSxuKTp0LnRvU3RyaW5nKCl9fSx1LnByb3RvdHlwZS50ZXh0PWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lP3RoaXMuZmlyc3QoKS50ZXh0Q29udGVudHx8XCJcIjp0aGlzLmVhY2goZnVuY3Rpb24odCl7dC50ZXh0Q29udGVudD1lfSl9LHUucHJvdG90eXBlLnRvZ2dsZUNsYXNzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuISFlPT09ZT90aGlzW2U/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0odCk6dGhpcy5lYWNoYXJnKHQsZnVuY3Rpb24odCxlKXt0LmNsYXNzTGlzdC50b2dnbGUoZSl9KX0sdS5wcm90b3R5cGUudHJpZ2dlcj1mdW5jdGlvbih0KXt2YXIgbz10aGlzLnNsaWNlKGFyZ3VtZW50cykuc2xpY2UoMSk7cmV0dXJuIHRoaXMuZWFjaGFyZyh0LGZ1bmN0aW9uKHQsZSl7dmFyIG4scj17YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGRldGFpbDpvfTt0cnl7bj1uZXcgd2luZG93LkN1c3RvbUV2ZW50KGUscil9Y2F0Y2godCl7KG49ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSkuaW5pdEN1c3RvbUV2ZW50KGUsITAsITAsbyl9dC5kaXNwYXRjaEV2ZW50KG4pfSl9LHUucHJvdG90eXBlLnVuaXF1ZT1mdW5jdGlvbigpe3JldHVybiB1KHRoaXMubm9kZXMucmVkdWNlKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIG51bGwhPWUmJiExIT09ZSYmLTE9PT10LmluZGV4T2YoZSk/dC5jb25jYXQoZSk6dH0sW10pKX0sdS5wcm90b3R5cGUudXJpPWZ1bmN0aW9uKHQpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQodCkucmVwbGFjZSgvIS9nLFwiJTIxXCIpLnJlcGxhY2UoLycvZyxcIiUyN1wiKS5yZXBsYWNlKC9cXCgvZyxcIiUyOFwiKS5yZXBsYWNlKC9cXCkvZyxcIiUyOVwiKS5yZXBsYWNlKC9cXCovZyxcIiUyQVwiKS5yZXBsYWNlKC8lMjAvZyxcIitcIil9LHUucHJvdG90eXBlLndyYXA9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKGUpe3JldHVybiB1KHQpLmVhY2goZnVuY3Rpb24odCl7IWZ1bmN0aW9uKHQpe2Zvcig7dC5maXJzdEVsZW1lbnRDaGlsZDspdD10LmZpcnN0RWxlbWVudENoaWxkO3JldHVybiB1KHQpfSh0KS5hcHBlbmQoZS5jbG9uZU5vZGUoITApKSxlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHQsZSl9KX0pfSxcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmKG1vZHVsZS5leHBvcnRzPXUsbW9kdWxlLmV4cG9ydHMudT11KTsiLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdFNob3J0Y3V0cyA9IHtcclxuICBcImp1bXAtdG8tcmVzdWx0LWtleXNcIjogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMFwiXSxcclxuICB1cHdhcmQ6IHtcclxuICAgIGN0cmxLZXk6IGZhbHNlLFxyXG4gICAgc2hpZnRLZXk6IGZhbHNlLFxyXG4gICAgYWx0S2V5OiBmYWxzZSxcclxuICAgIG1ldGFLZXk6IGZhbHNlLFxyXG4gICAga2V5OiBcImtcIixcclxuICB9LFxyXG4gIGRvd253YXJkOiB7XHJcbiAgICBjdHJsS2V5OiBmYWxzZSxcclxuICAgIHNoaWZ0S2V5OiBmYWxzZSxcclxuICAgIGFsdEtleTogZmFsc2UsXHJcbiAgICBtZXRhS2V5OiBmYWxzZSxcclxuICAgIGtleTogXCJqXCIsXHJcbiAgfSxcclxuICBcIm9wZW4taW4tY3VycmVudC10YWJcIjoge1xyXG4gICAgY3RybEtleTogZmFsc2UsXHJcbiAgICBzaGlmdEtleTogZmFsc2UsXHJcbiAgICBhbHRLZXk6IGZhbHNlLFxyXG4gICAgbWV0YUtleTogZmFsc2UsXHJcbiAgICBrZXk6IFwiRW50ZXJcIixcclxuICB9LFxyXG4gIFwib3Blbi1pbi1uZXctdGFiLWJ1dC1zdGF5LW9uLWN1cnJlbnRcIjoge1xyXG4gICAgY3RybEtleTogdHJ1ZSxcclxuICAgIHNoaWZ0S2V5OiBmYWxzZSxcclxuICAgIGFsdEtleTogZmFsc2UsXHJcbiAgICBtZXRhS2V5OiBmYWxzZSxcclxuICAgIGtleTogXCJFbnRlclwiLFxyXG4gIH0sXHJcbiAgXCJvcGVuLWluLW5ldy10YWItYW5kLWZvY3VzXCI6IHtcclxuICAgIGN0cmxLZXk6IHRydWUsXHJcbiAgICBzaGlmdEtleTogdHJ1ZSxcclxuICAgIGFsdEtleTogZmFsc2UsXHJcbiAgICBtZXRhS2V5OiBmYWxzZSxcclxuICAgIGtleTogXCJFbnRlclwiLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJicm93c2VyIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UiLCJTRU5EX1JFU1BPTlNFX0RFUFJFQ0FUSU9OX1dBUk5JTkciLCJ3cmFwQVBJcyIsImV4dGVuc2lvbkFQSXMiLCJhcGlNZXRhZGF0YSIsImtleXMiLCJsZW5ndGgiLCJFcnJvciIsIkRlZmF1bHRXZWFrTWFwIiwiV2Vha01hcCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlSXRlbSIsIml0ZW1zIiwidW5kZWZpbmVkIiwiZ2V0Iiwia2V5IiwiaGFzIiwic2V0IiwiaXNUaGVuYWJsZSIsInZhbHVlIiwidGhlbiIsIm1ha2VDYWxsYmFjayIsInByb21pc2UiLCJtZXRhZGF0YSIsImNhbGxiYWNrQXJncyIsInJ1bnRpbWUiLCJsYXN0RXJyb3IiLCJyZWplY3QiLCJtZXNzYWdlIiwic2luZ2xlQ2FsbGJhY2tBcmciLCJyZXNvbHZlIiwicGx1cmFsaXplQXJndW1lbnRzIiwibnVtQXJncyIsIndyYXBBc3luY0Z1bmN0aW9uIiwibmFtZSIsImFzeW5jRnVuY3Rpb25XcmFwcGVyIiwidGFyZ2V0IiwiYXJncyIsIm1pbkFyZ3MiLCJtYXhBcmdzIiwiUHJvbWlzZSIsImZhbGxiYWNrVG9Ob0NhbGxiYWNrIiwiY2JFcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwibm9DYWxsYmFjayIsIndyYXBNZXRob2QiLCJtZXRob2QiLCJ3cmFwcGVyIiwiUHJveHkiLCJhcHBseSIsInRhcmdldE1ldGhvZCIsInRoaXNPYmoiLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJGdW5jdGlvbiIsImJpbmQiLCJ3cmFwT2JqZWN0Iiwid3JhcHBlcnMiLCJjYWNoZSIsImNyZWF0ZSIsImhhbmRsZXJzIiwicHJveHlUYXJnZXQiLCJwcm9wIiwicmVjZWl2ZXIiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJkZXNjIiwiUmVmbGVjdCIsImRlbGV0ZVByb3BlcnR5Iiwid3JhcEV2ZW50Iiwid3JhcHBlck1hcCIsImFkZExpc3RlbmVyIiwibGlzdGVuZXIiLCJoYXNMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwib25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyIsIm9uUmVxdWVzdEZpbmlzaGVkIiwicmVxIiwid3JhcHBlZFJlcSIsImdldENvbnRlbnQiLCJsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmciLCJvbk1lc3NhZ2VXcmFwcGVycyIsIm9uTWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImRpZENhbGxTZW5kUmVzcG9uc2UiLCJ3cmFwcGVkU2VuZFJlc3BvbnNlIiwic2VuZFJlc3BvbnNlUHJvbWlzZSIsInJlc3BvbnNlIiwic3RhY2siLCJyZXN1bHQiLCJlcnIiLCJpc1Jlc3VsdFRoZW5hYmxlIiwic2VuZFByb21pc2VkUmVzdWx0IiwibXNnIiwiZXJyb3IiLCJfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18iLCJjYXRjaCIsIndyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrIiwicmVwbHkiLCJ3cmFwcGVkU2VuZE1lc3NhZ2UiLCJhcGlOYW1lc3BhY2VPYmoiLCJ3cmFwcGVkQ2IiLCJwdXNoIiwic2VuZE1lc3NhZ2UiLCJzdGF0aWNXcmFwcGVycyIsImRldnRvb2xzIiwibmV0d29yayIsIm9uTWVzc2FnZUV4dGVybmFsIiwidGFicyIsInNldHRpbmdNZXRhZGF0YSIsImNsZWFyIiwicHJpdmFjeSIsInNlcnZpY2VzIiwid2Vic2l0ZXMiLCJjaHJvbWUiLCJpZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwidmVyc2lvbiI6MywiZmlsZSI6ImluZGV4LmM4NWM0OTQwLmpzLm1hcCJ9
