import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import { colors } from '../theme'

const Toggler = ({ onClick, isDark, ...props }) => (
  <Container {...props}>
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
    </Button>
  </Container>
)

const Button = styled.button`
  background: ${colors.foreground};
  color: ${colors.background};
  border-radius: 50%;
  padding: 0.5em;
  margin-bottom: 1em;
`

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
`

Toggler.displayName = 'Toggler'

export default Toggler
