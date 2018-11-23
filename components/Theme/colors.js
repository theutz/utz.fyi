const foreground = '#101935'
const background = '#fefefe'

const primary = '#0050C1'
const info = '#59D2D6'
const success = '#069E2D'
const warning = '#FFBA08'
const danger = '#D81E5B'

const light = {
  foreground,
  background,
  primary,
  info,
  success,
  warning,
  danger,
}

const dark = {
  foreground: background,
  background: foreground,
  ...light,
}

export default {
  light,
  dark,
}
