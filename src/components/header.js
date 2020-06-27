import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title,
                }
            }
        }
    `)

    return (
        <header className="bg-gray-800 p-4">
            <h1 class="text-gray-200 text-right"> <Link to="/">{data.site.siteMetadata.title}</Link></h1>
            
        </header>
    )
}

export default Header