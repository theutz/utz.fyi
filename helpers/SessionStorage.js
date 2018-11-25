import root from 'window-or-global'
import * as yup from 'yup'

const SKIP_ANIMATION_KEY = 'doSkipAnimation'

/**
 * Retrieve or store items in Session Storage
 *
 * Be sure only to use this in DOM enabled settings, such as
 * `componentDidMount`, as the `sessionStorage` API only exists there.
 */
class SessionStorage {
  /**
   * Skip if true
   *
   * @returns {boolean}
   */
  get skipAnimation() {
    if (!root.sessionStorage) return false

    const skipAnimation = sessionStorage.getItem(SKIP_ANIMATION_KEY) === 'true'
    return skipAnimation
  }

  /**
   * @param {boolean} value
   * @throws {ValidationError}
   */
  set skipAnimation(value) {
    if (!root.sessionStorage) return

    yup.boolean().validateSync(value)
    sessionStorage.setItem(SKIP_ANIMATION_KEY, value)
  }
}

export default SessionStorage
