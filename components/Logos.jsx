import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoffee,
  faSmile,
  faCode,
  faUndo,
} from '@fortawesome/free-solid-svg-icons'

const logos = [faCoffee, faCode, faSmile, faUndo]

const Logos = ({ children }) => {
  const icons = logos.map((icon, index) => (
    <FontAwesomeIcon key={index} icon={icon} />
  ))

  return children({ icons })
}

Logos.propTypes = {
  children: PropTypes.func.isRequired,
}

Logos.displayName = 'Logos'

export default Logos
