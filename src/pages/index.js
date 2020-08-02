import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Introduction from '../components/introduction'
import About from '../components/about'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Introduction />
    <About />
    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage
