import React from 'react'
import themes from './themes'

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
  themeName: 'dark',
})

export class Provider extends React.Component {
  static displayName = 'ThemeProvider'

  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState(({ themeName }) => {
        return {
          theme: themeName === 'dark' ? themes.light : themes.dark,
          themeName: themeName === 'dark' ? 'light' : 'dark',
        }
      })
    }

    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme,
      themeName: 'dark',
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

ThemeContext.Consumer.displayName = 'ThemeContext'

export default ThemeContext.Consumer
