import { Settings } from '../types'

export const defaultSettings: Settings = {
  other_settings: {
    sokoban_style: 'left_line_style',
    char_to_display: {
      odd: '+',
      even: '-'
    },
    debug_mode: false
  },
  shortcuts: {
    jump_to_result_keys: '1234567890',
    upward: 'K',
    downward: 'J',
    open_in_current_tab: 'Enter',
    open_in_new_tab_but_stay_on_current: 'Ctrl + Enter',
    open_in_new_tab_and_focus: 'Ctrl + Shift + Enter',
    next_page: 'L',
    previous_page: 'H',
    go_to_search_box: 'I',
    go_to_search_box_and_select_text: 'O',
    focus_on_result_type_tabs: 'T'
  }
}
