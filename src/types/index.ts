export type Shortcut = {
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
  key: string;
};

export type Sokoban = {
  el: HTMLElement;
  href: string;
};

export interface Settings {
  shortcuts: {
    [command: string]: Shortcut | string[];
    jump_to_result_keys: string[];
  };
  other_settings: {
    style_of_selected: "left_line_style" | "dotted_rect_style";
    char_to_display: {
      odd: string;
      even: string;
    };
    debug_mode: boolean;
  };
}
