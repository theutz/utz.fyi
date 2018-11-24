import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import Head from 'next/head'

import ThemeContext from '../components/ThemeContext'
import Meta from '../components/Meta'
import GlobalStyle from '../components/GlobalStyle'

const Page = ({ children }) => {
  return (
    <ThemeContext.Provider>
      <ThemeContext.Consumer>
        {({ mode, size }) => {
          return (
            <ThemeProvider theme={{ mode, size }}>
              <>
                <GlobalStyle />
                <Meta />
                <Head>
                  <title>Michael Utz, FYI</title>
                </Head>
                {children}
              </>
            </ThemeProvider>
          )
        }}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  )
}

Page.displayName = 'Page'

Page.propTypes = {
  children: PropTypes.node,
}

export default Page
