import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Menu from '../components/menu'

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
        <header className="bg-gray-800 p-2">
            <h1 className="text-gray-200 text-right" class="sr-only"> <Link to="/">{data.site.siteMetadata.title}</Link></h1>
            <Menu />
        </header>
    )
}

export default Header