import { validators, values } from './schema'

const space = (multiplier = 1) => {
  validators.isSpace.validateSync(multiplier)
  return (props) => {
    const { size } = props.theme
    const base = values.spaces.get(size)
    return base * multiplier + 'em'
  }
}

export { space }
