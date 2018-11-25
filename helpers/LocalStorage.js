import root from 'window-or-global'

import { validators } from '../theme/schema'

const THEME_KEY = 'themeName'
const DEFAULT_THEME = 'dark'

class LocalStorage {
  get themeName() {
    if (!root.localStorage) return DEFAULT_THEME
    const theme = root.localStorage.getItem(THEME_KEY)
    if (!validators.isMode.isValidSync(theme)) return DEFAULT_THEME
    return theme
  }

  set themeName(name) {
    if (!root.localStorage) return
    validators.isMode.validateSync(name)
    root.localStorage.setItem(THEME_KEY, name)
  }
}

export default LocalStorage
