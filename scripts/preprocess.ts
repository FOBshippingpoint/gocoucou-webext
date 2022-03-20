import { copyLocales } from "./copy-locales";
import { writeManifest } from "./write-manifest";

async function preprocess() {
  copyLocales();
  writeManifest(2);
}

preprocess();
