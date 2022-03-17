import fs from "fs-extra";
import { r, log, isDev } from "./utils";
import logSymbols from "log-symbols";

export async function copyLocales() {
  try {
    await fs.copy(r("src/_locales"), r("dist/_locales"));
    log.success(logSymbols.success, "copy locales");
  } catch (err) {
    log.error(logSymbols.error, err);
  }
}
