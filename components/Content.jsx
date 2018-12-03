import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space, colors, text } from '../theme'

const Content = ({ children }) => (
  <Outer>
    <Inner>{children}</Inner>
  </Outer>
)

const Inner = styled.div`
  margin-top: ${space(4)};
`

const Outer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 ${space(2)};
  color: ${colors.foreground};
`

export const Title = styled.h2`
  border-bottom: solid 1px ${colors.foreground};
  padding-bottom: ${space(0.75)};
`

export const P = styled.p`
  font-size: ${text.size(3)};
`
export const A = styled.a`
  color: ${colors.info};
`

Content.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Content
