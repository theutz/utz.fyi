import { useContext } from 'react'

import ExecutionEnvironment from 'exenv'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import Head from 'next/head'

import WindowSizeSpy from '../components/WindowSizeSpy'
import ThemeContext from '../contexts/Theme'
import Meta from '../components/Meta'
import GlobalStyle from '../components/GlobalStyle'

const Page = ({ children }) => {
  const {
    state: { mode, size },
    dispatch,
  } = useContext(ThemeContext.Context)

  if (!mode && ExecutionEnvironment.canUseDOM) {
    dispatch({ type: 'LOAD_FROM_LOCAL_STORAGE' })
  }

  return (
    <ThemeProvider theme={{ mode, size }}>
      <>
        <WindowSizeSpy />
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
