import React from 'react'
import Layout from './layout'

export default function Card({ company, description }) {
  return (
    <Layout>
      <h2>{company}</h2>
      <h4>{description}</h4>
    </Layout>
  )
}
