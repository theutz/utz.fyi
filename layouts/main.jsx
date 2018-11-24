import { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { normalize } from 'polished'
import styled from 'styled-components'
import Media from 'react-media'

import { text, schema, colors, space } from '../theme'

class Page extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mode: 'dark',
      size: 'small',
    }
  }

  static propTypes = {
    children: PropTypes.any,
  }

  static displayName = 'Page'

  setThemeMode = (mode) => {
    schema.validators.isMode.validateSync(mode)
    this.setState({ mode })
  }

  toggleThemeMode = () => {
    const { mode } = this.state
    this.setThemeMode(mode === 'light' ? 'dark' : 'light')
  }

  render() {
    const { mode } = this.state

    return (
      <Media query={{ minWidth: 600 }}>
        {(isNotSmall) => (
          <Media query={{ minWidth: 1024 }}>
            {(isNotMedium) => (
              <ThemeProvider
                theme={{
                  mode,
                  size:
                    isNotSmall && isNotMedium
                      ? 'large'
                      : isNotSmall
                      ? 'medium'
                      : 'small',
                }}
              >
                <>
                  <GlobalStyle />
                  <Head>
                    <link
                      rel="apple-touch-icon"
                      sizes="180x180"
                      href="/static/apple-touch-icon.png"
                    />
                    <link
                      rel="icon"
                      type="image/png"
                      sizes="32x32"
                      href="/static/favicon-32x32.png"
                    />
                    <link
                      rel="icon"
                      type="image/png"
                      sizes="16x16"
                      href="/static/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/static/site.webmanifest" />
                    <link
                      rel="mask-icon"
                      href="/static/safari-pinned-tab.svg"
                      color="#101935"
                    />
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <meta name="apple-mobile-web-app-title" content="utz.fyi" />
                    <meta name="application-name" content="utz.fyi" />
                    <meta name="msapplication-TileColor" content="#2b5797" />
                    <meta
                      name="msapplication-config"
                      content="/static/browserconfig.xml"
                    />
                    <meta name="theme-color" content="#ffffff" />
                    <meta
                      name="viewport"
                      content="initial-scale=1.0, width=device-width"
                      key="viewport"
                    />
                    <link
                      href="https://fonts.googleapis.com/css?family=Rubik:400,700"
                      rel="stylesheet"
                    />
                    <title>Michael Utz, FYI</title>
                  </Head>
                  <Container>
                    {this.props.children}
                    <ThemeTogglerContainer>
                      <ThemeToggler onClick={this.toggleThemeMode}>
                        <FontAwesomeIcon
                          icon={mode === 'dark' ? faSun : faMoon}
                        />
                      </ThemeToggler>
                    </ThemeTogglerContainer>
                  </Container>
                </>
              </ThemeProvider>
            )}
          </Media>
        )}
      </Media>
    )
  }
}

const Container = styled.div`
  color: ${colors.forground};
`

const ThemeToggler = styled.button`
  background: ${colors.foreground};
  color: ${colors.background};
  border-radius: 50%;
  padding: 0.5em;
  margin-bottom: 1em;
`

const ThemeTogglerContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
`

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

export default Page
