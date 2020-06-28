import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
import About from '../components/about'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <About />
    <Card company='Expedia Group' description='Working for 2 years' />
    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage
