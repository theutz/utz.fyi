import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import Head from 'next/head'

import ThemeContext from '../contexts/Theme'
import Meta from '../components/Meta'
import GlobalStyle from '../components/GlobalStyle'

const Page = ({ children }) => {
  const {
    state: { mode, size },
  } = useContext(ThemeContext.Context)

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
}

Page.displayName = 'Page'

Page.propTypes = {
  children: PropTypes.node,
}

export default Page
