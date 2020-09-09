import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Head from '../components/head'
import SEO from '../components/seo'
import Content from "../components/content"
import Hero from "../components/hero"

const IndexPage = () => {
  return (
    <Layout>
      {/* <Head title="Home"/> */}
      <SEO title="Home" />
      <Hero>
        <h1>Test Hero</h1>
      </Hero>
      <Content>
        <h1>Hello</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
        <p><a href="/contact">Contact Me</a></p>
        <p><Link to="/contact">Contact Me</Link></p>
      </Content>
    </Layout>
  )
}

export default IndexPage