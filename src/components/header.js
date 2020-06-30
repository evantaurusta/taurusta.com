import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Navigation from './navigation'

const HeaderWrapper = styled.header`
  background: slategrey;
`
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 80%;
  padding: 1.45rem 1.0875rem;
`
const Logo = styled.h3`
  margin: 0;
`

const HeadingLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <Logo>
        <HeadingLink to='/'>Evan Lie</HeadingLink>
      </Logo>
      <Navigation />
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
