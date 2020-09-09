import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Hero = (props) => {

    return(
        <div className="hero">
            {props.children}
        </div>
    )
}

export default Hero