import React from 'react'
import styled from 'styled-components'

const Description = styled.h3`
  /* need to optimize the font wrap when in smaller screen */
  line-height: 1.45em;
  font-size: 25px;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.45rem;
  height: 100vh;
`

const Introduction = () => (
  <Container>
    <Description>
      <h1>Hi people!</h1>
      My name is Evan Lie. <br />
      I&#8217;m a software engineer based in Seattle <br />
      Focusing on building effective solutions for customer problems. <br />
    </Description>
  </Container>
)
export default Introduction
