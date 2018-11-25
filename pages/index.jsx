import { Component } from 'react'
import styled, { keyframes } from 'styled-components'

import SessionStorage from '../helpers/SessionStorage'
import { colors, space, text } from '../theme'
import Page from '../layouts/main'
import BaseHeader from '../components/Header'
import Footer from '../components/Footer'
import Logos from '../components/Logos'

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
            <Hero>
              <LogoContainer>
                <Logos>
                  {({ icons }) =>
                    icons.map((icon, index) => (
                      <Logo
                        key={index}
                        delay={index + 1}
                        animation={skipAnimation || fadeIn}
                      >
                        {icon}
                      </Logo>
                    ))
                  }
                </Logos>
              </LogoContainer>
              <Title animation={skipAnimation || fadeIn}>Hello</Title>
            </Hero>
            <Content>
              <Exposition>
                <p>My name is Michael Utz.</p>
                <p>I&apos;m a web developer that likes both people and code.</p>
                <p>I&apos;d love to hear from you!</p>
              </Exposition>
            </Content>
          </Container>
          <Footer />
        </Page>
      )
    )
  }
}

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const Exposition = styled.div`
  color: ${colors.foreground};
  margin-bottom: 30vh;
  font-size: ${text.size(3)};
`

const getAnimationName = (props) => props.animation

const Header = styled(BaseHeader)`
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 5s;
  animation-timing-function: ease-in-out;
  animation-name: ${getAnimationName};
`

const LogoContainer = styled.div`
  width: 80vw;
  justify-content: space-around;
  font-size: ${text.size(0)};
  margin-bottom: ${space(0.5)};
  display: flex;
`

const Logo = styled.div`
  color: ${colors.foreground};
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${({ delay }) => delay}s;
  animation-name: ${getAnimationName};
`

const Content = styled.div`
  max-width: 960px;
  margin: 0 ${space(1)};
`

const Container = styled.div`
  width: 100vw;
`

const Title = styled.h1`
  text-align: center;
  animation-fill-mode: both;
  animation-delay: 5s;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  color: ${colors.foreground};
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
