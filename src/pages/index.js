import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from "../components/hero"
import Works from "../components/works"
import Cards from "../components/cards"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <h2 className="hero-title">Hi, I'm Caelli</h2>
        <p className="hero-tagline">Just a nerd who sometimes draws and writes to cope with fandom feels. This is the dumpster for embarrassing trash fan works I've created.</p>
        <Link to="/about" className="btn btn-neutral">More About Me</Link>
      </Hero>
      <Works>
        <Cards 
          title="Test Title" 
          post="/about"
          summary="Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem." 
          cover="https://via.placeholder.com/750x400" 
          fandom="The Legend of Korra" 
          ship="Korrasami" 
          rating="Mature" />

        <Cards 
          title="Test Title" 
          post="/about"
          summary="Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem." 
          cover="https://via.placeholder.com/750x400" 
          fandom="The Legend of Korra" 
          ship="Korrasami" 
          rating="Mature" />

        <Cards 
          title="Test Title"
          post="/about" 
          summary="Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem." 
          cover="https://via.placeholder.com/750x400" 
          fandom="The Legend of Korra" 
          ship="Korrasami" 
          rating="Mature" />

        <Cards 
          title="Test Title" 
          post="/about"
          summary="Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem." 
          cover="https://via.placeholder.com/750x400" 
          fandom="The Legend of Korra" 
          ship="Korrasami" 
          rating="Mature" />
      </Works>
    </Layout>
  )
}

export default IndexPage