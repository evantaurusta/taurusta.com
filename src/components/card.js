import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const h2 = styled.h2`
  background-color: grey;
`

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
