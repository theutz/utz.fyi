import { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import Media from 'react-media'

import Meta from '../components/Meta'
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
                  <Meta />
                  <Head>
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
