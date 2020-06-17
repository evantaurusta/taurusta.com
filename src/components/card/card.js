import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import c from './card.scss'

const Card = ({ company, description }) => {
  return (
    <>
      <h2>{company}</h2>
      <h4>{description}</h4>
    </>
  )
}

Card.propTypes = {
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card
