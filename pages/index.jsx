import { Component } from 'react'
import styled, { keyframes } from 'styled-components'

import SessionStorage from '../helpers/SessionStorage'
import { colors, space, text } from '../theme'
import Page from '../layouts/main'
import BaseHeader from '../components/Header'
import Footer from '../components/Footer'
import Logos, {
  Logo as BaseLogo,
  Container as BaseLogoContainer,
} from '../components/Logos'

class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      skipAnimation: null,
    }
  }

  componentDidMount() {
    const storage = new SessionStorage()
    this.setState({ skipAnimation: storage.skipAnimation }, () => {
      storage.skipAnimation = true
    })
  }

  render() {
    const { skipAnimation } = this.state

    return (
      skipAnimation !== null && (
        <Page>
          <Header animation={skipAnimation || fadeIn} />
          <Container>
            <Logos
              as={LogoContainer}
              with={({ index, ...props }) => {
                return (
                  <Logo
                    {...props}
                    delay={index + 1}
                    animation={skipAnimation || fadeIn}
                  />
                )
              }}
            />
            <Title animation={skipAnimation || fadeIn}>Michael Utz, FYI</Title>
          </Container>
          <Footer />
        </Page>
      )
    )
  }
}

const getAnimationName = (props) => props.animation

const Header = styled(BaseHeader)`
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 5s;
  animation-timing-function: ease-in-out;
  animation-name: ${getAnimationName};
`

const LogoContainer = styled(BaseLogoContainer)`
  width: 80vw;
  justify-content: space-around;
  font-size: ${text.size(0)};
  margin-bottom: ${space(1)};
`

const Logo = styled(BaseLogo)`
  color: ${colors.foreground};
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${({ delay }) => delay}s;
  animation-name: ${getAnimationName};
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  text-align: center;
  animation-fill-mode: both;
  animation-delay: 5s;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  color: ${colors.primary};
  animation-name: ${getAnimationName};
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

Index.displayName = 'HomePage'

export default Index
