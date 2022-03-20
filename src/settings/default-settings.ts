import { Settings } from "../types";
import { defaultShortcuts } from "./default-shortcuts";

export const defaultSettings: Settings = {
  other_settings: {
    style_of_selected: "left_line_style",
    char_to_display: {
      odd: "科",
      even: "皓",
    },
    debug_mode: false,
  },
  shortcuts: defaultShortcuts,
};
