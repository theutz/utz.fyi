import styled from 'styled-components'
import PropTypes from 'prop-types'
import { range, inRange } from 'lodash/fp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const Rating = ({ level }) => (
  <Container>
    {range(0, Math.ceil(level)).map((_, index) => (
      <Star key={index}>
        <FontAwesomeIcon
          icon={
            Number.isInteger(level) || !inRange(0, 1, level - index)
              ? faStar
              : faStarHalf
          }
        />
      </Star>
    ))}
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`

const Star = styled.span``

Rating.propTypes = {
  level: PropTypes.number.isRequired,
}

export default Rating
