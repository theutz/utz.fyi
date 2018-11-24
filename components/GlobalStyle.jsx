import { normalize } from 'polished'
import { createGlobalStyle } from 'styled-components'

import { text, colors, space } from '../theme'

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  html {
    font-size: ${text.size(4)};
  }

  body {
    font-family: ${text.family};
    font-weight: ${text.weight('normal')};
    background: ${colors.background};
    color: ${colors.forground};
    line-height: ${text.lineHeight(0)};
    transition: all 100ms ease-in-out;
  }

  p {
    margin-bottom: 1.3em;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: ${space(1.414)} 0 ${space(0.5)};
    line-height: ${text.lineHeight(1)};
  }

  h1 {
    margin-top: 0;
    font-size: ${text.size(0)};
  }

  h2 {
    font-size: ${text.size(1)};
  }

  h3 {
    font-size: ${text.size(2)};
  }

  h4 {
    font-size: ${text.size(3)};
  }

  small {
    font-size: ${text.size(5)};
  }

  a {
    text-decoration: none;
    color: ${colors.primary};

    &:hover {
      text-decoration: underline;
    }
  }
`

export default GlobalStyle
