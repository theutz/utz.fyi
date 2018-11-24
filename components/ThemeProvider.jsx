import { Component } from 'react'
import PropTypes from 'prop-types'
import Media from 'react-media'
import { ThemeProvider } from 'styled-components'

import { schema } from '../theme'
import LocalStorage from '../helpers/LocalStorage'

class Provider extends Component {
  static propTypes = {
    children: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.state = { mode: 'dark', size: 'small' }
  }

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
    return (
      <Media query={{ minWidth: 600 }}>
        {(isNotSmall) => (
          <Media query={{ minWidth: 1024 }}>
            {(isNotMedium) => {
              const { mode } = this.state
              const size =
                isNotSmall && isNotMedium
                  ? 'large'
                  : isNotSmall
                  ? 'medium'
                  : 'small'

              return (
                <ThemeProvider theme={{ mode, size }}>
                  <>
                    {this.props.children({
                      mode,
                      size,
                      toggleMode: this.toggleThemeMode,
                      setMode: this.setThemeMode,
                    })}
                  </>
                </ThemeProvider>
              )
            }}
          </Media>
        )}
      </Media>
    )
  }
}

export default Provider
