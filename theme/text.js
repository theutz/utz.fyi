import { validators, values } from './schema'

const family = '"Rubik", sans-serif'

const weight = (key) => {
  validators.isWeight.validateSync(key)
  return values.weights.get(key)
}

const size = (size) => {
  validators.isFontSize.validateSync(size)
  return (props) => {
    const { theme } = props
    return values.fontSizes.get(theme.size)[size] + 'em'
  }
}

const lineHeight = (height) => {
  validators.isLineHeight.validateSync(height)
  return (props) => {
    const { size } = props.theme
    return values.lineHeights.get(size)[height]
  }
}

export { family, weight, size, lineHeight }
