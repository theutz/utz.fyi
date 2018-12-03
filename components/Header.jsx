import { useContext, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHistory,
  faHome,
  faPuzzlePiece,
  faInfoCircle,
  faBookmark,
  faTimes,
  faBars,
  faStar,
} from '@fortawesome/free-solid-svg-icons'

import { colors, space, text } from '../theme'
import ThemeContext from '../contexts/Theme'

const Header = (props) => {
  const {
    state: { mode },
  } = useContext(ThemeContext.Context)

  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const toggleMenuIsVisible = () => setMenuIsVisible(!menuIsVisible)

  return (
    mode && (
      <Container {...props}>
        <TitleBar onClick={toggleMenuIsVisible}>
          <Logo>
            <FontAwesomeIcon icon={faBars} fixedWidth />
          </Logo>
          <Title>
            https://utz.fyi<Blinking>_</Blinking>
          </Title>
        </TitleBar>
        <MenuBar isVisible={menuIsVisible}>
          {[
            ['/', 'Home', faHome],
            ['/info', 'Info', faInfoCircle],
            ['/features', 'Features', faStar],
            ['/skills', 'Skills', faPuzzlePiece],
            ['/education', 'Education', faBookmark],
            ['/history', 'History', faHistory],
          ].map(([url, text, icon], index) => (
            <MenuItem key={index}>
              <Link href={url}>
                <a>
                  <Icon>
                    <FontAwesomeIcon icon={icon} fixedWidth />
                  </Icon>
                  {text}
                </a>
              </Link>
            </MenuItem>
          ))}
          <MenuItem onClick={() => setMenuIsVisible(false)}>
            <Icon>
              <FontAwesomeIcon icon={faTimes} fixedWidth />
            </Icon>
            Close
          </MenuItem>
        </MenuBar>
      </Container>
    )
  )
}

const Icon = styled.span`
  margin-right: ${space(0.5)};
`

const blinking = keyframes`
  to {
    visibility: hidden;
  }
`

const Blinking = styled.span`
  animation: ${blinking} 1s steps(2, start) 10;
`

const Logo = styled.button`
  border: 0;
  color: ${colors.background};
  background-color: ${colors.foreground};
  margin-right: ${space(0.75)};
`

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: column;
`

const TitleBar = styled.div`
  margin: 0;
  padding: 0.25em 0.5em;
  display: flex;
  justify-content: space-between;
  background: ${colors.foreground};

  &,
  & a {
    color: ${colors.background};
  }
`

const Title = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  color: ${colors.background};
  letter-spacing: ${space(0.1)};
`

const MenuBar = styled.menu`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: start;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  background: ${colors.foreground};
  padding-top: ${space(0.5)};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: visibility 0s, opacity 0.3s ease-in-out;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};

  @media screen and (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    justify-content: space-evenly;
  }
`

const MenuItem = styled.div`
  padding: ${space(0.25)} ${space(0.5)};
  font-size: ${text.size(3)};

  &,
  & a {
    transition: color, background-color 0.3s ease;
    background: ${colors.foreground};
    color: ${colors.background};
  }

  &:hover,
  &:hover a {
    color: ${colors.foreground};
    background: ${colors.background};
  }
`

Header.displayName = 'Header'

export default Header
