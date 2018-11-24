import { mode } from './util'

const background = mode({ light: '#fefefe', dark: '#101935' })
const foreground = mode({ light: '#101935', dark: '#fefefe' })
const primary = mode({ light: '#59D2D6', dark: '#0063EF' })
const info = mode({ light: '#0063EF', dark: '#59D2D6' })
const success = mode({ light: '#069E2D', dark: '#069E2D' })
const warning = mode({ light: '#FFBA08', dark: '#FFBA08' })
const danger = mode({ light: '#D81E5B', dark: '#D81E5B' })

export { background, foreground, primary, info, success, warning, danger }
