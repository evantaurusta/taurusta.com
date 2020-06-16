import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ company, description }) => {
  return (
    <>
      <h2>{company}</h2>
      <h4>{description}</h4>
    </>
  )
}

<<<<<<< HEAD
Card.propTypes = {
=======
Card.PropTypes = {
>>>>>>> c9a799c8a61161ff6cdd85663e69ce4270d0b8ad
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card
