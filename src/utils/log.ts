import { getSettings } from "./settings";

let debug = false;

getSettings((settings) => {
  debug = settings.other_settings.debug_mode;
});

export function log(message?: any, ...optionalParams: any[]) {
  if (debug) {
    console.log(message, ...optionalParams);
  }
}
