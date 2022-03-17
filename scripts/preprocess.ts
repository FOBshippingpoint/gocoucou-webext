import { copyLocales } from "./copy-locales";
import { deleteDist } from "./delete-dist";
import { writeManifest } from "./write-manifest";

async function preprocess() {
  // await deleteDist();
  copyLocales();
  writeManifest();
}

preprocess();
