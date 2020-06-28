import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
  list-style: none;
`
const NavItem = styled.h4`
  display: inline-block;
  padding: 0px 20px;
  margin-bottom: 0;
  color: white;
`

const Navigation = () => (
  <NavContainer>
    <NavItem>About</NavItem>
    <NavItem>Movies</NavItem>
    <NavItem>Blog</NavItem>
  </NavContainer>
)
export default Navigation
