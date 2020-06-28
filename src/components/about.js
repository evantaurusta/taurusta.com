import React from 'react'
import styled from 'styled-components'

const Description = styled.h3`
  margin-bottom: 0;
`

const About = () => (
  <>
    <h1>Hi people</h1>
    <Description>My name is Evan Lie.</Description>
    <Description>I&#8217;m a software engineer based in Seattle</Description>
    <Description>
      Focusing on building effective solutions user facing problems
    </Description>
    <p>Now go build something great.</p>
  </>
)
export default About
