import { validators } from '../theme/schema'

const THEME_KEY = 'themeName'

class LocalStorage {
  get themeName() {
    const defaultTheme = 'dark'
    if (!window || !global.window) return defaultTheme
    const theme = localStorage.getItem(THEME_KEY)
    if (!validators.isMode.isValidSync(theme)) return defaultTheme
    return theme
  }

  set themeName(name) {
    if (!window || !global.window) return

    validators.isMode.validateSync(name)
    localStorage.setItem(THEME_KEY, name)
  }
}

export default LocalStorage
