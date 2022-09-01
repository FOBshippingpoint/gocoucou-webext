import { copyLocales } from "./copy-locales.ts";
import { writeManifest } from "./write-manifest.ts";

async function preprocess() {
  copyLocales();
  console.log(process.env.MANIFEST_VERSION)
  if (process.env.MANIFEST_VERSION == '3') {
    writeManifest(3);
  } else {
    writeManifest(2);
  }
}

preprocess();
