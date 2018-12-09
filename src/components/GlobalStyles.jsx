import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyles = createGlobalStyle`
  ${normalize()};

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyles
