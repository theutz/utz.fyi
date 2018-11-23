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
    return sessionStorage.getItem(SKIP_ANIMATION_KEY) === 'true'
  }

  /**
   * @param {boolean} value
   * @throws {ValidationError}
   */
  set skipAnimation(value) {
    yup.boolean().validateSync(value)
    sessionStorage.setItem(SKIP_ANIMATION_KEY, value)
  }
}

export default SessionStorage
