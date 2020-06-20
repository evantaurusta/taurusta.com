import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

<<<<<<< HEAD
const Title = styled.h2`
  margin-bottom: 1rem;
  background-color: grey;
  padding: 0.3rem;
`
const Container = styled.div`
  width: 100%;
  background: red;
  padding: 0.75rem;
=======
const h2 = styled.h2`
  background-color: grey;
>>>>>>> cd7869da3879405c7fc36f494ca8a24bb61447fe
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
