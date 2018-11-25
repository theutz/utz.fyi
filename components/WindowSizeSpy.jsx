import { useContext } from 'react'

import PropTypes from 'prop-types'

import ThemeContext from '../contexts/Theme'
import useMedia from '../hooks/useMedia'

const queries = {
  medium: { minWidth: 600, maxWidth: 959 },
  large: { minWidth: 960 },
}

function WindowSizeSpy() {
  const {
    dispatch,
    state: { size },
  } = useContext(ThemeContext.Context)

  const isMedium = useMedia(queries.medium)
  const isLarge = useMedia(queries.large)
  const calculatedSize = isLarge ? 'large' : isMedium ? 'medium' : 'small'

  if (size !== calculatedSize) {
    dispatch({ type: calculatedSize.toUpperCase() })
  }

  return null
}

WindowSizeSpy.propTypes = {
  children: PropTypes.oneOf([null]),
}

export default WindowSizeSpy
