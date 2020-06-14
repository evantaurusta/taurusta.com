import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>Hi people</h1>
    <h3>My name is Evan...</h3>
    <p>I&#8217;m a software engineer based in Seattle</p>
    <p>Now go build something great.</p>
    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage
