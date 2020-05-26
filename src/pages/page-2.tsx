// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title='Page two' />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({props.path})</p>
<<<<<<< HEAD
    <Link to='/'>Go back to the homepage </Link>
=======
    <Link to='/'>Go back to the homepage</Link>
>>>>>>> 0fec2893a4be10b5563e8ef0e14ad53d56b6ca95
  </Layout>
)

export default SecondPage
