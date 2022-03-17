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
})({"24beb":[function(require,module,exports) {
"use strict";
var HMR_HOST = "localhost";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "e792fbbdaa78ee84";
module.bundle.HMR_BUNDLE_ID = "07ec0ae5210eaf0a";
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

},{}],"8KAMa":[function(require,module,exports) {
"use strict";
/* global window */ var env = window.chrome || window.browser;
env.runtime.onMessage.addListener(function(msg) {
    if (msg.__parcel_hmr_reload__) env.runtime.reload();
});

},{}]},["24beb","8KAMa"], "8KAMa", "parcelRequired6fc")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsTUFBTSxDQUFDLENBQUM7UUFBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUFHLENBQUM7UUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSTtZQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQUUsTUFBTSxDQUFDLElBQUk7UUFBRSxDQUFDO1FBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFBQyxNQUFNLEdBQUcsSUFBSTtZQUFFLEdBQUcsR0FBRyxHQUFHO1FBQUUsQ0FBQztRQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBQyxHQUFHLENBQUMsQ0FBQztnQkFBQyxFQUFFLEdBQUcsZ0JBQWdCLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07WUFBSSxDQUFDLFFBQVMsQ0FBQztnQkFBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQUUsQ0FBQztRQUFDLENBQUM7SUFBQyxDQUFDO0FBQUUsQ0FBQztTQUU3OUIsMkJBQTJCLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxNQUFNO0lBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBUSxTQUFFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsTUFBTTtJQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFBRyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQVEsV0FBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMs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QUVoRSxDQUFDO0lBR0gsY0FBYyxDQUFDLEVBQUUsSUFBSSxJQUFJO0FBQzNCLENBQUM7OztBQ3hkRCxDQUFZO0FBRVosRUFBbUIsQUFBbkIsZUFBbUIsQUFBbkIsRUFBbUIsQ0FDbkIsR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPO0FBQ3pDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUUsR0FBRyxFQUFFLENBQUM7SUFDaEQsRUFBRSxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsRUFDM0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNO0FBRXRCLENBQUMiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3J1bnRpbWUtYnJvd3Nlci1obXJAMi4zLjJfQHBhcmNlbCtjb3JlQDIuMy4yL25vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtYnJvd3Nlci1obXIvbGliL3J1bnRpbWUtMWFhMGUyMmM2NWY1NGE3NS5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3RyYW5zZm9ybWVyLXdlYmV4dGVuc2lvbkAyLjMuMl9AcGFyY2VsK2NvcmVAMi4zLjIvbm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItd2ViZXh0ZW5zaW9uL2xpYi9ydW50aW1lL2F1dG9yZWxvYWQtYmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEhNUl9IT1NUID0gXCJsb2NhbGhvc3RcIjt2YXIgSE1SX1BPUlQgPSBudWxsO3ZhciBITVJfU0VDVVJFID0gZmFsc2U7dmFyIEhNUl9FTlZfSEFTSCA9IFwiZTc5MmZiYmRhYTc4ZWU4NFwiO21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRCA9IFwiMDdlYzBhZTUyMTBlYWYwYVwiO1widXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBpdC5jYWxsKG8pOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0LnJldHVybiAhPSBudWxsKSBpdC5yZXR1cm4oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbi8qIGdsb2JhbCBITVJfSE9TVCwgSE1SX1BPUlQsIEhNUl9FTlZfSEFTSCwgSE1SX1NFQ1VSRSAqL1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7XG4gIEhNUkFzc2V0LFxuICBITVJNZXNzYWdlLFxufSBmcm9tICdAcGFyY2VsL3JlcG9ydGVyLWRldi1zZXJ2ZXIvc3JjL0hNUlNlcnZlci5qcyc7XG5pbnRlcmZhY2UgUGFyY2VsUmVxdWlyZSB7XG4gIChzdHJpbmcpOiBtaXhlZDtcbiAgY2FjaGU6IHt8W3N0cmluZ106IFBhcmNlbE1vZHVsZXx9O1xuICBob3REYXRhOiBtaXhlZDtcbiAgTW9kdWxlOiBhbnk7XG4gIHBhcmVudDogP1BhcmNlbFJlcXVpcmU7XG4gIGlzUGFyY2VsUmVxdWlyZTogdHJ1ZTtcbiAgbW9kdWxlczoge3xbc3RyaW5nXTogW0Z1bmN0aW9uLCB7fFtzdHJpbmddOiBzdHJpbmd8fV18fTtcbiAgSE1SX0JVTkRMRV9JRDogc3RyaW5nO1xuICByb290OiBQYXJjZWxSZXF1aXJlO1xufVxuaW50ZXJmYWNlIFBhcmNlbE1vZHVsZSB7XG4gIGhvdDoge3xcbiAgICBkYXRhOiBtaXhlZCxcbiAgICBhY2NlcHQoY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgZGlzcG9zZShjYjogKG1peGVkKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBhY2NlcHQoZGVwczogQXJyYXk8c3RyaW5nPiB8IHN0cmluZywgY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gZGVjbGluZSgpOiB2b2lkLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IEFycmF5PChGdW5jdGlvbikgPT4gdm9pZD4sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IEFycmF5PChtaXhlZCkgPT4gdm9pZD4sXG4gIHx9O1xufVxuZGVjbGFyZSB2YXIgbW9kdWxlOiB7YnVuZGxlOiBQYXJjZWxSZXF1aXJlLCAuLi59O1xuZGVjbGFyZSB2YXIgSE1SX0hPU1Q6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9QT1JUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfRU5WX0hBU0g6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9TRUNVUkU6IGJvb2xlYW47XG4qL1xudmFyIE9WRVJMQVlfSUQgPSAnX19wYXJjZWxfX2Vycm9yX19vdmVybGF5X18nO1xudmFyIE9sZE1vZHVsZSA9IG1vZHVsZS5idW5kbGUuTW9kdWxlO1xuXG5mdW5jdGlvbiBNb2R1bGUobW9kdWxlTmFtZSkge1xuICBPbGRNb2R1bGUuY2FsbCh0aGlzLCBtb2R1bGVOYW1lKTtcbiAgdGhpcy5ob3QgPSB7XG4gICAgZGF0YTogbW9kdWxlLmJ1bmRsZS5ob3REYXRhLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IFtdLFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBbXSxcbiAgICBhY2NlcHQ6IGZ1bmN0aW9uIGFjY2VwdChmbikge1xuICAgICAgdGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2goZm4gfHwgZnVuY3Rpb24gKCkge30pO1xuICAgIH0sXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gZGlzcG9zZShmbikge1xuICAgICAgdGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKGZuKTtcbiAgICB9XG4gIH07XG4gIG1vZHVsZS5idW5kbGUuaG90RGF0YSA9IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmJ1bmRsZS5Nb2R1bGUgPSBNb2R1bGU7XG52YXIgY2hlY2tlZEFzc2V0c1xuLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuLCBhY2NlcHRlZEFzc2V0c1xuLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuLCBhc3NldHNUb0FjY2VwdFxuLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL1xuO1xuXG5mdW5jdGlvbiBnZXRIb3N0bmFtZSgpIHtcbiAgcmV0dXJuIEhNUl9IT1NUIHx8IChsb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKCdodHRwJykgPT09IDAgPyBsb2NhdGlvbi5ob3N0bmFtZSA6ICdsb2NhbGhvc3QnKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9ydCgpIHtcbiAgcmV0dXJuIEhNUl9QT1JUIHx8IGxvY2F0aW9uLnBvcnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuXG52YXIgcGFyZW50ID0gbW9kdWxlLmJ1bmRsZS5wYXJlbnQ7XG5cbmlmICgoIXBhcmVudCB8fCAhcGFyZW50LmlzUGFyY2VsUmVxdWlyZSkgJiYgdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgdmFyIHBvcnQgPSBnZXRQb3J0KCk7XG4gIHZhciBwcm90b2NvbCA9IEhNUl9TRUNVUkUgfHwgbG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHBzOicgJiYgIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QoaG9zdG5hbWUpID8gJ3dzcycgOiAnd3MnO1xuICB2YXIgd3MgPSBuZXcgV2ViU29ja2V0KHByb3RvY29sICsgJzovLycgKyBob3N0bmFtZSArIChwb3J0ID8gJzonICsgcG9ydCA6ICcnKSArICcvJyk7IC8vICRGbG93Rml4TWVcblxuICB3cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnRcbiAgLyo6IHtkYXRhOiBzdHJpbmcsIC4uLn0gKi9cbiAgKSB7XG4gICAgY2hlY2tlZEFzc2V0cyA9IHt9XG4gICAgLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuICAgIDtcbiAgICBhY2NlcHRlZEFzc2V0cyA9IHt9XG4gICAgLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuICAgIDtcbiAgICBhc3NldHNUb0FjY2VwdCA9IFtdO1xuICAgIHZhciBkYXRhXG4gICAgLyo6IEhNUk1lc3NhZ2UgKi9cbiAgICA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG5cbiAgICBpZiAoZGF0YS50eXBlID09PSAndXBkYXRlJykge1xuICAgICAgLy8gUmVtb3ZlIGVycm9yIG92ZXJsYXkgaWYgdGhlcmUgaXMgb25lXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFzc2V0cyA9IGRhdGEuYXNzZXRzLmZpbHRlcihmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIGFzc2V0LmVudkhhc2ggPT09IEhNUl9FTlZfSEFTSDtcbiAgICAgIH0pOyAvLyBIYW5kbGUgSE1SIFVwZGF0ZVxuXG4gICAgICB2YXIgaGFuZGxlZCA9IGFzc2V0cy5ldmVyeShmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIGFzc2V0LnR5cGUgPT09ICdjc3MnIHx8IGFzc2V0LnR5cGUgPT09ICdqcycgJiYgaG1yQWNjZXB0Q2hlY2sobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldC5pZCwgYXNzZXQuZGVwc0J5QnVuZGxlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgICAgIGhtckFwcGx5KG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2V0c1RvQWNjZXB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGlkID0gYXNzZXRzVG9BY2NlcHRbaV1bMV07XG5cbiAgICAgICAgICBpZiAoIWFjY2VwdGVkQXNzZXRzW2lkXSkge1xuICAgICAgICAgICAgaG1yQWNjZXB0UnVuKGFzc2V0c1RvQWNjZXB0W2ldWzBdLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgLy8gTG9nIHBhcmNlbCBlcnJvcnMgdG8gY29uc29sZVxuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGRhdGEuZGlhZ25vc3RpY3MuYW5zaSksXG4gICAgICAgICAgX3N0ZXA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIGFuc2lEaWFnbm9zdGljID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgdmFyIHN0YWNrID0gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lID8gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lIDogYW5zaURpYWdub3N0aWMuc3RhY2s7XG4gICAgICAgICAgY29uc29sZS5lcnJvcign8J+aqCBbcGFyY2VsXTogJyArIGFuc2lEaWFnbm9zdGljLm1lc3NhZ2UgKyAnXFxuJyArIHN0YWNrICsgJ1xcblxcbicgKyBhbnNpRGlhZ25vc3RpYy5oaW50cy5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gUmVuZGVyIHRoZSBmYW5jeSBodG1sIG92ZXJsYXlcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICAgIHZhciBvdmVybGF5ID0gY3JlYXRlRXJyb3JPdmVybGF5KGRhdGEuZGlhZ25vc3RpY3MuaHRtbCk7IC8vICRGbG93Rml4TWVcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3cy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XG4gIH07XG5cbiAgd3Mub25jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLndhcm4oJ1twYXJjZWxdIPCfmqggQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciB3YXMgbG9zdCcpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVFcnJvck92ZXJsYXkoKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoT1ZFUkxBWV9JRCk7XG5cbiAgaWYgKG92ZXJsYXkpIHtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdbcGFyY2VsXSDinKggRXJyb3IgcmVzb2x2ZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFcnJvck92ZXJsYXkoZGlhZ25vc3RpY3MpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3ZlcmxheS5pZCA9IE9WRVJMQVlfSUQ7XG4gIHZhciBlcnJvckhUTUwgPSAnPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6IGJsYWNrOyBvcGFjaXR5OiAwLjg1OyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiB3aGl0ZTsgcG9zaXRpb246IGZpeGVkOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyB0b3A6IDBweDsgbGVmdDogMHB4OyBwYWRkaW5nOiAzMHB4OyBmb250LWZhbWlseTogTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2U7IHotaW5kZXg6IDk5OTk7XCI+JztcblxuICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGRpYWdub3N0aWNzKSxcbiAgICAgIF9zdGVwMjtcblxuICB0cnkge1xuICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgZGlhZ25vc3RpYyA9IF9zdGVwMi52YWx1ZTtcbiAgICAgIHZhciBzdGFjayA9IGRpYWdub3N0aWMuY29kZWZyYW1lID8gZGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBkaWFnbm9zdGljLnN0YWNrO1xuICAgICAgZXJyb3JIVE1MICs9IFwiXFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcImZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbi10b3A6IDIwcHg7XFxcIj5cXG4gICAgICAgICAgXFx1RDgzRFxcdURFQTggXCIuY29uY2F0KGRpYWdub3N0aWMubWVzc2FnZSwgXCJcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPHByZT5cIikuY29uY2F0KHN0YWNrLCBcIjwvcHJlPlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgXCIpLmNvbmNhdChkaWFnbm9zdGljLmhpbnRzLm1hcChmdW5jdGlvbiAoaGludCkge1xuICAgICAgICByZXR1cm4gJzxkaXY+8J+SoSAnICsgaGludCArICc8L2Rpdj4nO1xuICAgICAgfSkuam9pbignJyksIFwiXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIFwiKS5jb25jYXQoZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9uID8gXCI8ZGl2PlxcdUQ4M0RcXHVEQ0REIDxhIHN0eWxlPVxcXCJjb2xvcjogdmlvbGV0XFxcIiBocmVmPVxcXCJcIi5jb25jYXQoZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9uLCBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkxlYXJuIG1vcmU8L2E+PC9kaXY+XCIpIDogJycsIFwiXFxuICAgICAgPC9kaXY+XFxuICAgIFwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvcjIuZShlcnIpO1xuICB9IGZpbmFsbHkge1xuICAgIF9pdGVyYXRvcjIuZigpO1xuICB9XG5cbiAgZXJyb3JIVE1MICs9ICc8L2Rpdj4nO1xuICBvdmVybGF5LmlubmVySFRNTCA9IGVycm9ySFRNTDtcbiAgcmV0dXJuIG92ZXJsYXk7XG59XG5cbmZ1bmN0aW9uIGdldFBhcmVudHMoYnVuZGxlLCBpZClcbi8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi9cbntcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgaywgZCwgZGVwO1xuXG4gIGZvciAoayBpbiBtb2R1bGVzKSB7XG4gICAgZm9yIChkIGluIG1vZHVsZXNba11bMV0pIHtcbiAgICAgIGRlcCA9IG1vZHVsZXNba11bMV1bZF07XG5cbiAgICAgIGlmIChkZXAgPT09IGlkIHx8IEFycmF5LmlzQXJyYXkoZGVwKSAmJiBkZXBbZGVwLmxlbmd0aCAtIDFdID09PSBpZCkge1xuICAgICAgICBwYXJlbnRzLnB1c2goW2J1bmRsZSwga10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgcGFyZW50cyA9IHBhcmVudHMuY29uY2F0KGdldFBhcmVudHMoYnVuZGxlLnBhcmVudCwgaWQpKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmspIHtcbiAgdmFyIG5ld0xpbmsgPSBsaW5rLmNsb25lTm9kZSgpO1xuXG4gIG5ld0xpbmsub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsaW5rLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICB9XG4gIH07XG5cbiAgbmV3TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAvLyAkRmxvd0ZpeE1lXG4gIGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykuc3BsaXQoJz8nKVswXSArICc/JyArIERhdGUubm93KCkpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgbGluay5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdMaW5rLCBsaW5rLm5leHRTaWJsaW5nKTtcbn1cblxudmFyIGNzc1RpbWVvdXQgPSBudWxsO1xuXG5mdW5jdGlvbiByZWxvYWRDU1MoKSB7XG4gIGlmIChjc3NUaW1lb3V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3NzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV1cbiAgICAgIHZhciBocmVmXG4gICAgICAvKjogc3RyaW5nICovXG4gICAgICA9IGxpbmtzW2ldLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgICAgIHZhciBzZXJ2ZWRGcm9tSE1SU2VydmVyID0gaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnID8gbmV3IFJlZ0V4cCgnXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTonICsgZ2V0UG9ydCgpKS50ZXN0KGhyZWYpIDogaHJlZi5pbmRleE9mKGhvc3RuYW1lICsgJzonICsgZ2V0UG9ydCgpKTtcbiAgICAgIHZhciBhYnNvbHV0ZSA9IC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QoaHJlZikgJiYgaHJlZi5pbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pICE9PSAwICYmICFzZXJ2ZWRGcm9tSE1SU2VydmVyO1xuXG4gICAgICBpZiAoIWFic29sdXRlKSB7XG4gICAgICAgIHVwZGF0ZUxpbmsobGlua3NbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNzc1RpbWVvdXQgPSBudWxsO1xuICB9LCA1MCk7XG59XG5cbmZ1bmN0aW9uIGhtckFwcGx5KGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgYXNzZXRcbi8qOiAgSE1SQXNzZXQgKi9cbikge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChhc3NldC50eXBlID09PSAnY3NzJykge1xuICAgIHJlbG9hZENTUygpO1xuICB9IGVsc2UgaWYgKGFzc2V0LnR5cGUgPT09ICdqcycpIHtcbiAgICB2YXIgZGVwcyA9IGFzc2V0LmRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF07XG5cbiAgICBpZiAoZGVwcykge1xuICAgICAgaWYgKG1vZHVsZXNbYXNzZXQuaWRdKSB7XG4gICAgICAgIC8vIFJlbW92ZSBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgcmVtb3ZlZCBhbmQgd2lsbCBiZWNvbWUgb3JwaGFuZWQuXG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHNvIHRoYXQgaWYgdGhlIGFzc2V0IGlzIGFkZGVkIGJhY2sgYWdhaW4sIHRoZSBjYWNoZSBpcyBnb25lLCBhbmQgd2UgcHJldmVudCBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gICAgICAgIHZhciBvbGREZXBzID0gbW9kdWxlc1thc3NldC5pZF1bMV07XG5cbiAgICAgICAgZm9yICh2YXIgZGVwIGluIG9sZERlcHMpIHtcbiAgICAgICAgICBpZiAoIWRlcHNbZGVwXSB8fCBkZXBzW2RlcF0gIT09IG9sZERlcHNbZGVwXSkge1xuICAgICAgICAgICAgdmFyIGlkID0gb2xkRGVwc1tkZXBdO1xuICAgICAgICAgICAgdmFyIHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgZm4gPSBuZXcgRnVuY3Rpb24oJ3JlcXVpcmUnLCAnbW9kdWxlJywgJ2V4cG9ydHMnLCBhc3NldC5vdXRwdXQpO1xuICAgICAgbW9kdWxlc1thc3NldC5pZF0gPSBbZm4sIGRlcHNdO1xuICAgIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgICAgaG1yQXBwbHkoYnVuZGxlLnBhcmVudCwgYXNzZXQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBobXJEZWxldGUoYnVuZGxlLCBpZCkge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChtb2R1bGVzW2lkXSkge1xuICAgIC8vIENvbGxlY3QgZGVwZW5kZW5jaWVzIHRoYXQgd2lsbCBiZWNvbWUgb3JwaGFuZWQgd2hlbiB0aGlzIG1vZHVsZSBpcyBkZWxldGVkLlxuICAgIHZhciBkZXBzID0gbW9kdWxlc1tpZF1bMV07XG4gICAgdmFyIG9ycGhhbnMgPSBbXTtcblxuICAgIGZvciAodmFyIGRlcCBpbiBkZXBzKSB7XG4gICAgICB2YXIgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBkZXBzW2RlcF0pO1xuXG4gICAgICBpZiAocGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgb3JwaGFucy5wdXNoKGRlcHNbZGVwXSk7XG4gICAgICB9XG4gICAgfSAvLyBEZWxldGUgdGhlIG1vZHVsZS4gVGhpcyBtdXN0IGJlIGRvbmUgYmVmb3JlIGRlbGV0aW5nIGRlcGVuZGVuY2llcyBpbiBjYXNlIG9mIGNpcmN1bGFyIGRlcGVuZGVuY2llcy5cblxuXG4gICAgZGVsZXRlIG1vZHVsZXNbaWRdO1xuICAgIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdOyAvLyBOb3cgZGVsZXRlIHRoZSBvcnBoYW5zLlxuXG4gICAgb3JwaGFucy5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBobXJEZWxldGUoYnVuZGxlLnBhcmVudCwgaWQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrKGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgaWRcbi8qOiBzdHJpbmcgKi9cbiwgZGVwc0J5QnVuZGxlXG4vKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qL1xuKSB7XG4gIGlmIChobXJBY2NlcHRDaGVja09uZShidW5kbGUsIGlkLCBkZXBzQnlCdW5kbGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gVHJhdmVyc2UgcGFyZW50cyBicmVhZHRoIGZpcnN0LiBBbGwgcG9zc2libGUgYW5jZXN0cmllcyBtdXN0IGFjY2VwdCB0aGUgSE1SIHVwZGF0ZSwgb3Igd2UnbGwgcmVsb2FkLlxuXG5cbiAgdmFyIHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICB2YXIgYWNjZXB0ZWQgPSBmYWxzZTtcblxuICB3aGlsZSAocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgdmFyIHYgPSBwYXJlbnRzLnNoaWZ0KCk7XG4gICAgdmFyIGEgPSBobXJBY2NlcHRDaGVja09uZSh2WzBdLCB2WzFdLCBudWxsKTtcblxuICAgIGlmIChhKSB7XG4gICAgICAvLyBJZiB0aGlzIHBhcmVudCBhY2NlcHRzLCBzdG9wIHRyYXZlcnNpbmcgdXB3YXJkLCBidXQgc3RpbGwgY29uc2lkZXIgc2libGluZ3MuXG4gICAgICBhY2NlcHRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgcXVldWUgdGhlIHBhcmVudHMgaW4gdGhlIG5leHQgbGV2ZWwgdXB3YXJkLlxuICAgICAgdmFyIHAgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgdlsxXSk7XG5cbiAgICAgIGlmIChwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gcGFyZW50cywgdGhlbiB3ZSd2ZSByZWFjaGVkIGFuIGVudHJ5IHdpdGhvdXQgYWNjZXB0aW5nLiBSZWxvYWQuXG4gICAgICAgIGFjY2VwdGVkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnRzLnB1c2guYXBwbHkocGFyZW50cywgX3RvQ29uc3VtYWJsZUFycmF5KHApKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWNjZXB0ZWQ7XG59XG5cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrT25lKGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgaWRcbi8qOiBzdHJpbmcgKi9cbiwgZGVwc0J5QnVuZGxlXG4vKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qL1xuKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGRlcHNCeUJ1bmRsZSAmJiAhZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXSkge1xuICAgIC8vIElmIHdlIHJlYWNoZWQgdGhlIHJvb3QgYnVuZGxlIHdpdGhvdXQgZmluZGluZyB3aGVyZSB0aGUgYXNzZXQgc2hvdWxkIGdvLFxuICAgIC8vIHRoZXJlJ3Mgbm90aGluZyB0byBkby4gTWFyayBhcyBcImFjY2VwdGVkXCIgc28gd2UgZG9uJ3QgcmVsb2FkIHRoZSBwYWdlLlxuICAgIGlmICghYnVuZGxlLnBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhtckFjY2VwdENoZWNrKGJ1bmRsZS5wYXJlbnQsIGlkLCBkZXBzQnlCdW5kbGUpO1xuICB9XG5cbiAgaWYgKGNoZWNrZWRBc3NldHNbaWRdKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjaGVja2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBhc3NldHNUb0FjY2VwdC5wdXNoKFtidW5kbGUsIGlkXSk7XG5cbiAgaWYgKCFjYWNoZWQgfHwgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaG1yQWNjZXB0UnVuKGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgaWRcbi8qOiBzdHJpbmcgKi9cbikge1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlLmhvdERhdGEgPSB7fTtcblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QpIHtcbiAgICBjYWNoZWQuaG90LmRhdGEgPSBidW5kbGUuaG90RGF0YTtcbiAgfVxuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIGNiKGJ1bmRsZS5ob3REYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdO1xuICBidW5kbGUoaWQpO1xuICBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICB2YXIgYXNzZXRzVG9BbHNvQWNjZXB0ID0gY2IoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXNzZXRzVG9BbHNvQWNjZXB0ICYmIGFzc2V0c1RvQWNjZXB0Lmxlbmd0aCkge1xuICAgICAgICAvLyAkRmxvd0ZpeE1lW21ldGhvZC11bmJpbmRpbmddXG4gICAgICAgIGFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoYXNzZXRzVG9BY2NlcHQsIGFzc2V0c1RvQWxzb0FjY2VwdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhY2NlcHRlZEFzc2V0c1tpZF0gPSB0cnVlO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBnbG9iYWwgd2luZG93ICovXG52YXIgZW52ID0gd2luZG93LmNocm9tZSB8fCB3aW5kb3cuYnJvd3NlcjtcbmVudi5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAobXNnKSB7XG4gIGlmIChtc2cuX19wYXJjZWxfaG1yX3JlbG9hZF9fKSB7XG4gICAgZW52LnJ1bnRpbWUucmVsb2FkKCk7XG4gIH1cbn0pOyJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJhdXRvcmVsb2FkLWJnLjIxMGVhZjBhLmpzLm1hcCJ9
