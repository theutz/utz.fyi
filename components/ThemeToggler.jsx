import { useContext } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import useWindowScrollPosition from '../hooks/useWindowScrollPosition'
import { colors, space } from '../theme'
import ThemeContext from '../contexts/Theme'

const Toggler = (props) => {
  const { y } = useWindowScrollPosition()
  const {
    state: { mode },
    dispatch,
  } = useContext(ThemeContext.Context)

  return (
    <Container {...props}>
      <Button onClick={() => dispatch({ type: 'TOGGLE' })} scrollY={y}>
        <FontAwesomeIcon icon={mode === 'dark' ? faSun : faMoon} />
      </Button>
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
  bottom: ${space(4)};
  right: 0;
  left: 0;
`

Toggler.displayName = 'Toggler'

export default Toggler
