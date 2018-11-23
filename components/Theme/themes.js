import { pipe, map, range, get } from 'lodash/fp'

const foreground = '#101935'
const background = '#fefefe'

const primary = '#0050C1'
const info = '#59D2D6'
const success = '#069E2D'
const warning = '#FFBA08'
const danger = '#D81E5B'

const largeScale = [3.157, 2.369, 1.777, 1.333, 1, 0.75, 0.563, 0.422]
const smallScale = [2.074, 1.728, 1.44, 1.2, 1, 0.833, 0.694, 0.579]
const sizes = [smallScale, largeScale]

const font = {
  weight: 400,
  lineHeight: [1.45, 1.2],
  size: (size, opts = {}) => {
    const { scale = 0, multiplier = 1 } = opts
    return sizes[scale][size] * multiplier + 'em'
  },
}

const spacer = (multiplier = 1) => 1 * multiplier + 'em'

const breakpoints = [0, 600, 960, 1280, 1920]

const base = { breakpoints, font, spacer }

const light = {
  ...base,
  color: {
    foreground,
    background,
    primary,
    info,
    success,
    warning,
    danger,
  },
}

const dark = {
  ...base,
  color: {
    ...light.color,
    foreground: background,
    background: foreground,
    primary: info,
    info: primary,
  },
}

export default {
  light,
  dark,
}
