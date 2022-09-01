import fs from "fs-extra";
import { getManifest } from "../src/manifest.ts";
import { r, log, isDev } from "./utils.ts";
import logSymbols from "log-symbols";

export async function deleteDist() {
  try {
    await fs.emptyDir(r("dist"));
    log.success(logSymbols.success, "delete dist");
  } catch (err) {
    log.error(logSymbols.error, err);
  }
}
