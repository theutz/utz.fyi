import * as yup from 'yup'

const modeShape = {
  light: yup.string().required(),
  dark: yup.string().required(),
}
const isModeMap = yup.object().shape(modeShape)
const modes = Object.keys(modeShape)
const isMode = yup.string().oneOf(modes)

const sizeShape = {
  small: yup.string().required(),
  medium: yup.string().required(),
  large: yup.string().required(),
}
const isSizeMap = yup.object().shape(sizeShape)
const sizes = Object.keys(sizeShape)
const isSize = yup.string().oneOf(sizes)

const weights = new Map([['normal', 400], ['bold', 700]])
const isWeight = yup.string().oneOf(Array.from(weights.keys()))

const spaces = new Map([['small', 0.75], ['medium', 1], ['large', 1.25]])
const isSpace = yup.number()

const fontSizes = new Map([
  ['small', [2.074, 1.728, 1.44, 1.2, 1, 0.833, 0.694, 0.579]],
  ['medium', [3.157, 2.369, 1.777, 1.333, 1, 0.75, 0.563, 0.422]],
  ['large', [5.063, 3.375, 2.25, 1.5, 1, 0.667, 0.444, 0.296]],
])
const isFontSize = yup
  .number()
  .min(0)
  .max(7)
  .integer()
  .positive()

const lineHeights = new Map([
  ['small', [1.45, 1.2]],
  ['medium', [1.45, 1.2]],
  ['large', [1.45, 1.2]],
])
const isLineHeight = yup
  .number()
  .positive()
  .integer()
  .min(0)
  .max(1)

const values = { modes, sizes, weights, spaces, fontSizes, lineHeights }
const validators = {
  isModeMap,
  isLineHeight,
  isSizeMap,
  isWeight,
  isSize,
  isMode,
  isSpace,
  isFontSize,
}

export { values, validators }
