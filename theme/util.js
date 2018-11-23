import { validators } from './schema'
import theme from 'styled-theming'

const mode = (values) => {
  validators.isModeMap.validateSync(values)
  return theme('mode', values)
}

const size = (values) => {
  validators.isSizeMap.validateSync(values)
  return theme('size', values)
}

export { mode, size }
