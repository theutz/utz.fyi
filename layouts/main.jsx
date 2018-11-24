import { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import ThemeProvider from '../components/ThemeProvider'
import Meta from '../components/Meta'
import GlobalStyle from '../components/GlobalStyle'

class Page extends Component {
  static displayName = 'Page'

  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  render() {
    return (
      <ThemeProvider>
        {({
          mode: themeMode,
          size: themeSize,
          toggleMode: toggleThemeMode,
          setMode: setThemeMode,
        }) => {
          return (
            <>
              <GlobalStyle />
              <Meta />
              <Head>
                <title>Michael Utz, FYI</title>
              </Head>
              {this.props.children({
                themeMode,
                themeSize,
                toggleThemeMode,
                setThemeMode,
              })}
            </>
          )
        }}
      </ThemeProvider>
    )
  }
}

export default Page
