import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

import { schema } from '../theme'
import LocalStorage from '../helpers/LocalStorage'
import useMedia from '../hooks/useMedia'

const Context = createContext({
  toggleThemeMode: () => {},
  setThemeMode: () => {},
  size: 'small',
  mode: 'dark',
})

const Provider = ({ children }) => {
  const [modeState, setModeState] = useState(null)

  const mode = modeState || new LocalStorage().themeName
  const setMode = (mode) => {
    schema.validators.isMode.validateSync(mode)
    new LocalStorage().themeName = mode
    setModeState(mode)
  }

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  const isLarge = !!useMedia({ minWidth: 960 })
  const isMedium = !!useMedia({ minWidth: 600 })
  const size = isLarge && isMedium ? 'large' : isMedium ? 'medium' : 'small'

  return (
    <Context.Provider value={{ setMode, toggleMode, size, mode }}>
      {children}
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default { Consumer: Context.Consumer, Provider }
