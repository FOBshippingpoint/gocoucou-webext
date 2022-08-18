import u from 'umbrellajs'
// import browser from "webextension-polyfill";
import { browser } from '../utils/browser'

export function translate () {
  u('[data-msg]').each(function (node) {
    const key = u(node).data('msg')
    let text = ''
    if (key === 'char_to_display' || key === 'too_long') {
      text = browser.i18n.getMessage(key, 10)
    } else {
      text = browser.i18n.getMessage(key)
    }
    text = text === '' ? key : text
    u(node).append(document.createTextNode(text))
  })
}
