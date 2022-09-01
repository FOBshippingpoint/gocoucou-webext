import u from 'umbrellajs'
import { browser } from '../utils/browser'

export function translate () {
  u('[data-i18n]').each(function (node) {
    const key = u(node).data('i18n')
    let text = ''
    if (key === 'char_to_display' || key === 'too_long') {
      text = browser.i18n.getMessage(key, 10)
    } else {
      text = browser.i18n.getMessage(key)
    }
    if (text === '') {
      text = key
    }
    u(node).append(document.createTextNode(text))
  })
}
