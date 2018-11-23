import React from 'react'
import themes from './themes'

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export class Provider extends React.Component {
  static displayName = 'ThemeProvider'

  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState((state) => {
        return {
          theme: state.theme === themes.dark ? themes.light : themes.dark,
        }
      })
    }

    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme,
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
