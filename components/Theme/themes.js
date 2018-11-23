const foreground = '#101935'
const background = '#fefefe'

const primary = '#0050C1'
const info = '#59D2D6'
const success = '#069E2D'
const warning = '#FFBA08'
const danger = '#D81E5B'

const sizes = [3.157, 2.369, 1.777, 1.333, 1, 0.75, 0.563, 0.422]

const font = {
  weight: 400,
  lineHeight: [1.45, 1.2],
  size: (size, multiplier = 1) => sizes[size] * multiplier + 'em',
}

const spacer = (multiplier = 1) => 1 * multiplier + 'em'

const light = {
  font,
  spacer,
  foreground,
  background,
  primary,
  info,
  success,
  warning,
  danger,
}

const dark = {
  ...light,
  foreground: background,
  background: foreground,
  primary: info,
  info: primary,
}

export default {
  light,
  dark,
}
