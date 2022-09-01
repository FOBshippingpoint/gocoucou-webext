import * as fs from "fs";
import { getManifest } from "../src/manifest.ts";
import { r, log, isDev } from "./utils.ts";
import logSymbols from "log-symbols";

export async function writeManifest(version: number) {
  const data = JSON.stringify(await getManifest(version));
  fs.writeFileSync(r("src/manifest.json"), data);
  log.success(logSymbols.success, "write manifest version " + version);
}
