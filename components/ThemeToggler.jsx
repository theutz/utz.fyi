import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import useWindowScrollPosition from '../hooks/useWindowScrollPosition'
import { colors, space } from '../theme'
import ThemeContext from './ThemeContext'

const Toggler = (props) => {
  const { y } = useWindowScrollPosition()

  return (
    <Container {...props}>
      <ThemeContext.Consumer>
        {({ toggleMode, mode }) => (
          <Button onClick={toggleMode} scrollY={y}>
            <FontAwesomeIcon icon={mode === 'dark' ? faSun : faMoon} />
          </Button>
        )}
      </ThemeContext.Consumer>
    </Container>
  )
}

const Button = styled.button`
  background: ${colors.foreground};
  color: ${colors.background};
  border-radius: 50%;
  border: none;
  padding: 0.5em;
  outline: none;
  margin-bottom: ${space(1)};
  position: absolute;
  right: ${(props) => (props.scrollY > 10 ? space(1)(props) : '50%')};
  transform: translateX(${(props) => (props.scrollY > 10 ? '0' : '50%')});
  transition: all 300ms;
`

const Container = styled.div`
  position: fixed;
  /* top: 0; */
  bottom: ${space(4)};
  right: 0;
  left: 0;
`

Toggler.displayName = 'Toggler'

export default Toggler
