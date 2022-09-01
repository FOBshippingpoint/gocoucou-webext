import { browser, isChrome } from '../utils/browser'
import { defaultSettings } from '../settings/default-settings'
import { Settings } from '../types/index'

export function getSettings (callback: (settings: Settings) => any) {
  if (isChrome) {
    browser.storage.local.get({ settings: defaultSettings }, (value) => {
      if (!value) console.log('getSettings:', err)

      if (value.settings.other_settings.debug_mode) {
        console.log('getSettings:', value)
      }
      callback(value.settings)
    })
    return
  }
  browser.storage.local.get({ settings: defaultSettings }).then(
    (value) => {
      if (value.settings.other_settings.debug_mode) {
        console.log('getSettings:', value)
      }
      callback(value.settings)
    },
    (err) => {
      console.log('getSettings:', err)
    }
  )
}
