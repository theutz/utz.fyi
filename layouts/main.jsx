import { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import Media from 'react-media'

import GlobalStyle from '../components/GlobalStyle'
import { schema } from '../theme'
import LocalStorage from '../helpers/LocalStorage'

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

  componentDidMount() {
    const storage = new LocalStorage()
    this.setThemeMode(storage.themeName || 'dark')
  }

  setThemeMode = (mode) => {
    schema.validators.isMode.validateSync(mode)
    this.setState({ mode }, () => {
      const storage = new LocalStorage()
      storage.themeName = mode
    })
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
                  {this.props.children}
                </>
              </ThemeProvider>
            )}
          </Media>
        )}
      </Media>
    )
  }
}

export default Page
