import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


const Footer = () => {
    const data = useStaticQuery(graphql `
        query {
            site {
                siteMetadata {
                    author
                    twitter
                }
            }
        }
    `)

    return (
        <footer>
            <p>FOOTER {data.site.siteMetadata.author}  {data.site.siteMetadata.twitter} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae in fuga nulla pariatur enim velit vero rerum nobis, obcaecati architecto doloribus quis. Assumenda molestiae rerum error voluptatum est corrupti obcaecati.</p>
        </footer>
    )
}

export default Footer