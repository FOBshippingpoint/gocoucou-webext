import fs from "fs-extra";
import type { Manifest } from "webextension-polyfill";
import type PkgType from "../package.json";
import { isDev, port, r } from "../scripts/utils";

export async function getManifest() {
  const pkg = (await fs.readJSON(r("package.json"))) as typeof PkgType;

  // update this file to update this manifest.json
  // can also be conditional based on your need
  const manifest: Manifest.WebExtensionManifest = {
    manifest_version: 2,
    name: pkg.displayName || pkg.name,
    version: pkg.version,
    description: pkg.description,
    browser_action: {
      // default_icon: "./assets/icon-512.png",
      default_popup: "popup/index.html",
    },
    options_ui: {
      page: "options/index.html",
      open_in_tab: true,
      chrome_style: false,
    },
    background: {
      scripts: ["background/index.ts"],
    },
    // // icons: {
    //   16: "./assets/icon-512.png",
    //   48: "./assets/icon-512.png",
    //   128: "./assets/icon-512.png",
    // },
    content_scripts: [
      {
        matches: ["*://*.google.com/*"],
        js: ["content-scripts/index.ts"],
        css: ["content-scripts/index.css"],
      },
    ],
    // default_locale: "zh_TW",
    default_locale: "en",
    commands: {
      "toggle-feature": {
        suggested_key: {
          default: "Alt+Shift+U",
          linux: "Ctrl+Shift+U",
        },
        description: "Send a 'toggle-feature' event to the extension",
      },
      "do-another-thing": {
        suggested_key: {
          default: "Ctrl+Shift+Y",
        },
      },
    },
    permissions: ["tabs", "storage"],
  };

  // if (isDev) {
  //   // for content script, as browsers will cache them for each reload,
  //   // we use a background script to always inject the latest version
  //   // see src/background/contentScriptHMR.ts
  //   delete manifest.content_scripts;
  //   manifest.permissions?.push("webNavigation");

  //   // this is required on dev for Vite script to load
  //   manifest.content_security_policy = `script-src \'self\' http://localhost:${port}; object-src \'self\'`;
  // }

  return manifest;
}
