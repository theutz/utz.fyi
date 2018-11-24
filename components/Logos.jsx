import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoffee,
  faCode,
  faUndo,
  faShippingFast,
} from '@fortawesome/free-solid-svg-icons'

import { space } from '../theme'

const logos = [faCode, faCoffee, faShippingFast, faUndo]

const Logos = ({ as: Outer, with: Inner, children, ...props }) => {
  return (
    <Outer {...props}>
      {logos.map((icon, index) => {
        return (
          <Inner index={index} key={index}>
            <FontAwesomeIcon icon={icon} />
          </Inner>
        )
      })}
    </Outer>
  )
}

const renderable = PropTypes.oneOfType([PropTypes.object, PropTypes.func])
  .isRequired
Logos.propTypes = {
  as: renderable,
  with: renderable,
}

const Container = styled.div`
  max-width: ${space(150)};
  display: flex;
`

const Logo = styled.div`
  margin-right: ${space(0.25)};
`

Logo.displayName = 'Logo'

Logos.defaultProps = {
  as: Container,
  with: Logo,
}

Logos.displayName = 'Logos'

export { Container, Logo }

export default Logos
