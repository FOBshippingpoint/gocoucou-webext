import fs from "fs-extra";
import { getManifest } from "../src/manifest";
import { r, log, isDev } from "./utils";
import chokidar from "chokidar";
import logSymbols from "log-symbols";

export async function deleteDist() {
  try {
    await fs.emptyDir(r("dist"));
    log.success(logSymbols.success, "delete dist");
  } catch (err) {
    log.error(logSymbols.error, err);
  }
}
