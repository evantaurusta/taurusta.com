import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h2`
  margin-bottom: 1rem;
  background: lightcoral;
  color: white;
  padding: 0.3rem;
`
const Container = styled.div`
  background: slateblue;
  color: white;
  padding: 0.75rem;
`

const Card = ({ company, description }) => {
  return (
    <Container>
      <Title>{company}</Title>
      <h4>{description}</h4>
    </Container>
  )
}

Card.propTypes = {
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card
