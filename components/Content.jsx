import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space, colors } from '../theme'

const Content = ({ children }) => (
  <Outer>
    <Inner>{children}</Inner>
  </Outer>
)

const Inner = styled.div`
  margin-top: ${space(4)};

  & a {
    color: ${colors.info};
  }
`

const Outer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 ${space(2)};
  color: ${colors.foreground};
`

Content.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Content
