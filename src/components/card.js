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

Card.PropTypes = {
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card
