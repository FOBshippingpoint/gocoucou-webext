import { resolve } from "path";
import chalk from "chalk";

// https://github.com/nodejs/help/issues/2907
import path from "path";
import { fileURLToPath } from "url";

//we need to change up how __dirname is used for ES6 purposes
const dirname = path.dirname(fileURLToPath(import.meta.url));

export const port = parseInt(process.env.PORT || "") || 3303;
export const r = (...args: string[]) => resolve(dirname, "..", ...args);
export const isDev = process.env.NODE_ENV !== "production";

// log utils for cli
export const log = {
  success: (...messages: string[]) => {
    console.log(chalk.black.bgGreen(" SUCCESS "), messages.join(" "));
  },
  error: (...messages: string[]) => {
    console.log(chalk.black.bgRed(" ERROR "), messages.join(" "));
  },
  info: (...messages: string[]) => {
    console.log(chalk.black.bgCyan(" INFO "), messages.join(" "));
  },
  warn: (...messages: string[]) => {
    console.log(chalk.black.bgYellow(" WARN "), messages.join(" "));
  },
};
