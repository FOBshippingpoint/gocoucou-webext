import fs from "fs-extra";
import type { Manifest } from "webextension-polyfill";
import type PkgType from "../package.json";
import { r } from "../scripts/utils";

const pkg = fs.readJSONSync(r("package.json")) as typeof PkgType;

export async function getManifest(version = 2) {
  const manifestV2: Manifest.WebExtensionManifest = {
    manifest_version: 2,
    name: "Goocoucou",
    version: pkg.version,
    author: "FOBshippingpoint",
    description: "__MSG_extension_description__",
    homepage_url: "https://github.com/FOBshippingpoint/goocoucou-webext",
    icons: {
      16: "assets/icon-16.png",
      48: "assets/icon-48.png",
      128: "assets/icon-128.png",
    },
    browser_action: {
      default_icon: "assets/icon-48.png",
      default_popup: "popup/index.html",
    },
    options_ui: {
      page: "options/index.html",
      open_in_tab: true,
    },
    background: {
      scripts: ["background/index.ts"],
    },
    content_scripts: [
      {
        matches: ["*://www.google.com/*"],
        js: ["content-scripts/index.ts"],
        css: ["assets/style.css"],
      },
    ],
    default_locale: "en",
    permissions: ["tabs", "storage"],
  };

  const manifestV3: Manifest.WebExtensionManifest = {
    manifest_version: 3,
    name: "Goocoucou",
    version: pkg.version,
    author: "FOBshippingpoint",
    description: "__MSG_extension_description__",
    homepage_url: "https://github.com/FOBshippingpoint/goocoucou-webext",
    icons: {
      16: "assets/icon-16.png",
      48: "assets/icon-48.png",
      128: "assets/icon-128.png",
    },
    action: {
      default_icon: {
        16: "assets/icon-16.png",
        48: "assets/icon-48.png",
        128: "assets/icon-128.png",
      },
      default_popup: "popup/index.html",
    },
    options_ui: {
      page: "options/index.html",
      open_in_tab: true,
      chrome_style: false,
    },
    background: {
      service_worker: "background/index.ts",
    },
    content_scripts: [
      {
        matches: ["*://www.google.com/*"],
        js: ["content-scripts/index.ts"],
        css: ["content-scripts/index.css"],
      },
    ],
    default_locale: "en",
    permissions: ["tabs", "storage"],
  };

  if (version === 2) {
    return manifestV2;
  } else if (version === 3) {
    return manifestV3;
  }
}
