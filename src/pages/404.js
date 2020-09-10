import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from "../components/hero"

const error404 = () => {
  return (
    <Layout>
      <SEO title="404 Error Page" />
      <Hero>
        <h2 className="hero-title">Oops, there's nothing here!</h2>
        <p className="hero-tagline">You might be a little lost.</p>
        <Link to="/" className="btn btn-neutral">Go Back Home!</Link>
      </Hero>
    </Layout>
  )
}

export default error404