import { validators } from '../theme/schema'

const THEME_KEY = 'themeName'

class LocalStorage {
  get themeName() {
    return localStorage.getItem(THEME_KEY)
  }

  set themeName(name) {
    validators.isMode.validateSync(name)
    localStorage.setItem(THEME_KEY, name)
  }
}

export default LocalStorage
