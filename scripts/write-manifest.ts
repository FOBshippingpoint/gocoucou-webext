import fs from "fs-extra";
import { getManifest } from "../src/manifest";
import { r, log, isDev } from "./utils";
import chokidar from "chokidar";
import logSymbols from "log-symbols";

export async function writeManifest() {
  await fs.writeJSON(r("src/manifest.json"), await getManifest(), {
    spaces: 2,
  });
  log.success(logSymbols.success, "write manifest");
}

// if (isDev) {
// chokidar
//   .watch([r("src/manifest.ts"), r("package.json")])
//   .on("change", async () => {
//     log.info("change detected: src/manifest.ts");
//     await writeManifest();
//   });
// }
