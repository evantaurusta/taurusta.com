/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import Header from './header'
import GlobalStyle from '../styles/globalStyle'
// import Footer from './footer'

const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 80%;
  padding: 0 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <LayoutContainer>
        <main>{children}</main>
      </LayoutContainer>
      {/* <Footer /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
