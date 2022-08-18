export type Sokoban = {
  el: HTMLElement;
  href: string;
};

export interface Settings {
  shortcuts: {
    [command: string]: string;
  };
  other_settings: {
    sokoban_style: 'left_line_style' | 'dotted_rect_style';
    char_to_display: {
      odd: string;
      even: string;
    };
    debug_mode: boolean;
  };
}
