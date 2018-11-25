import App, { Container } from 'next/app'

import ThemeContext from '../contexts/Theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ThemeContext.Provider>
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </Container>
    )
  }
}
