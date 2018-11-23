import React from 'react'
import themes from './colors'

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export class Provider extends React.Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }))
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

export default ThemeContext.Consumer
