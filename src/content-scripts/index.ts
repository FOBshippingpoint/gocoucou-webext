import u from 'umbrellajs'
import Cursor from './Cursor'
import { Sokoban, Settings } from '../types/index'
import { getSettings } from '../utils/settings'
import { log } from '../utils/log'
import { keyboardEvent2text } from '../utils/shortcut-utils'
import { browser } from '../utils/browser'
// determine if the current page is dark mode using logo img src
let darkmode = true
if (u('#logo img').attr('src').search('light') === -1) {
  darkmode = false
}

if (u('.sokoban-wrap').length === 0) {
  getSettings(main)
}

function main (settings: Settings) {
  const sokobans: Sokoban[] = []
  const { shortcuts } = settings
  const focusClassName =
    'focus-' +
    settings.other_settings.sokoban_style +
    (darkmode ? '-dark' : '')
  const pageLinks = {
    next: u('#pnnext').attr('href'),
    prev: u('#pnprev').attr('href')
  }

  // finding sokobans
  u(
    'div[data-sokoban-container], div.V3FYCF, div.WC0BKe, div.PhiYYd.RdksUd.QBl4oe'
  ).each(function (node, i) {
    let key = shortcuts.jump_to_result_keys[i]
    // if result is greater than keys, use two symbols to represent it
    if (!key) {
      key =
        i % 2 === 0
          ? settings.other_settings.char_to_display.even
          : settings.other_settings.char_to_display.odd
    }
    const wrapper = u(node).wrap("<div class='sokoban-wrap'>")
    wrapper.prepend(
      `<div class="${darkmode ? 'flag-dark' : 'flag'}">${key}</div>`
    )
    sokobans.push({
      el: wrapper.first(),
      href: u(node).find('a').attr('href')
    })
  })

  const cursor = new Cursor(sokobans.length)
  // mark first result
  markFocused(0)

  document.addEventListener('keydown', (e) => {
    // prevent trigger shortcut when typing
    if (u(e.target).is('input')) return

    const command = commandMapping(e)
    const oldIdx = cursor.index
    switch (command) {
      case 'upward':
        cursor.upward()
        scroll()
        markFocused(oldIdx)
        break
      case 'downward':
        cursor.downward()
        scroll()
        markFocused(oldIdx)
        break
      case 'jump_to_result_keys': {
        const key = keyboardEvent2text(e)
        cursor.jumpTo(shortcuts.jump_to_result_keys.indexOf(key))
        scroll()
        markFocused(oldIdx)
        break
      }
      case 'open_in_current_tab':
        window.location.replace(sokobans[cursor.index].href)
        return
      case 'open_in_new_tab_but_stay_on_current':
        // browser.tabs API cannot access in content script.
        // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis
        browser.runtime.sendMessage({
          command: 'open_in_new_tab',
          url: sokobans[cursor.index].href,
          active: false // stay in current tab
        })
        break
      case 'open_in_new_tab_and_focus':
        browser.runtime.sendMessage({
          command: 'open_in_new_tab',
          url: sokobans[cursor.index].href,
          active: true // focus new tab
        })
        break
      case 'next_page':
        if (pageLinks.next) {
          window.location.assign(pageLinks.next)
        }
        break
      case 'previous_page':
        if (pageLinks.prev) {
          window.location.assign(pageLinks.prev)
        }
        break
      case 'go_to_search_box': {
        e.preventDefault()
        const input = u('input.gLFyf.gsfi').first()
        input.focus()
        // this will move cursor to the end
        const value = input.value
        input.value = ''
        input.value = value
        break
      }
      case 'go_to_search_box_and_select_text':
        e.preventDefault()
        u('input.gLFyf.gsfi').first()?.select()
        break
      case 'focus_on_result_type_tabs':
        console.log('hello')
        console.log('test', u('.MUFPAc').first().children)
        u('.MUFPAc').first().children[3].focus()
        break
    }
  })

  // scroll to the target sokoban
  function scroll () {
    const sokoban = sokobans[cursor.index]
    sokoban.el.scrollIntoView({ block: 'center' })
  }

  // mark sokoban at cursor position, and remove previous one
  function markFocused (toRemoveIdx: number) {
    u(sokobans[toRemoveIdx].el).removeClass(focusClassName)
    u(sokobans[cursor.index].el).addClass(focusClassName)
  }

  function commandMapping (e: KeyboardEvent): string | undefined {
    const shortcut = keyboardEvent2text(e)
    log('keyboard event key: ', e.key, ', shortcut: ', shortcut)
    if (shortcuts.jump_to_result_keys.includes(shortcut)) {
      return 'jump_to_result_keys'
    }

    return Object.keys(shortcuts).find((key) => shortcuts[key] === shortcut)
  }
}
