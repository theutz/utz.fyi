import styled from 'styled-components'
import { space, colors } from '../theme'

const Content = ({ children }) => (
  <Outer>
    <Inner>{children}</Inner>
  </Outer>
)

const Inner = styled.div`
  margin-top: ${space(9)};
`

const Outer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 ${space(2)};
  color: ${colors.foreground};
`

export default Content
