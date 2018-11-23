import React from 'react'

import styled from 'styled-components'
import Link from 'next/link'

import { colors, space } from '../theme'
import Logos, {
  Container as BaseLogoContainer,
  Logo as BaseLogo,
} from '../components/Logos'

const Header = () => (
  <Container>
    <TitleBar>
      <Logos as={LogoContainer} with={Logo} />
      <Title>
        <Link href="/">
          <a>https://utz.fyi</a>
        </Link>
      </Title>
    </TitleBar>
    <MenuBar>
      {[['/', 'Home'], ['/background', 'Background']].map(
        ([url, text], index) => (
          <MenuItem key={index}>
            <Link href={url}>
              <a>{text}</a>
            </Link>
          </MenuItem>
        )
      )}
    </MenuBar>
  </Container>
)

const LogoContainer = styled(BaseLogoContainer)`
  color: ${colors.background};
`

const Logo = styled(BaseLogo)`
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
  margin: 0.5em;
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
  letter-spacing: ${space(0.25)};
`

const MenuBar = styled.menu`
  margin: 0;
  padding: 0 ${space(1)};
  display: flex;
  justify-content: flex-start;
`

const MenuItem = styled.div`
  margin-right: ${space(2)};

  &:last-child {
    margin-right: 0;
  }

  &,
  & a {
    text-align: center;
    color: ${colors.info};
  }
`

Header.displayName = 'Header'

export default Header
