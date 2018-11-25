import { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

import LocalStorage from '../helpers/LocalStorage'

const storage = new LocalStorage()

const initialState = {
  size: 'small',
  mode: null,
}

const Context = createContext()

function reducer(state, action) {
  const { type } = action

  switch (type) {
    case 'DARK':
      storage.themeName = 'dark'
      return { ...state, mode: 'dark' }
    case 'LIGHT':
      storage.themeName = 'light'
      return { ...state, mode: 'light' }
    case 'TOGGLE': {
      const mode = state.mode === 'dark' ? 'light' : 'dark'
      storage.themeName = mode
      return { ...state, mode }
    }
    case 'LOAD_FROM_LOCAL_STORAGE': {
      const mode = storage.themeName
      return { ...state, mode: mode }
    }
    case 'SMALL':
      return { ...state, size: 'small' }
    case 'MEDIUM':
      return { ...state, size: 'medium' }
    case 'LARGE':
      return { ...state, size: 'large' }
    case 'RESET':
      return { ...state, mode: 'dark', size: 'small' }
    default:
      throw new Error(`${type} is not a valid action type.`)
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default { Consumer: Context.Consumer, Provider, Context }
