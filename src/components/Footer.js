import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin-top: 0;
  padding: 7rem 1.45rem;
  /* background: #fcfbff; */
  background: lightgrey;
`
const SocialWrapper = styled.div`
  border: 5px solid green;
  padding: 1rem;
`
const CopyrightWrapper = styled.div`
  border: 5px solid red;
  padding: 1rem;
`

const Footer = () => (
  <Container>
    <CopyrightWrapper>
      <footer>
        © All Rights are reserved | {new Date().getFullYear()} | Built with{' '}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </footer>
    </CopyrightWrapper>
    <SocialWrapper />
  </Container>
)

export default Footer
