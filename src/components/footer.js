import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FaTwitter, FaTumblr, FaInstagram, FaBook } from 'react-icons/fa';

const Footer = () => {
    const data = useStaticQuery(graphql `
        query {
            site {
                siteMetadata {
                    title
                    author
                    email
                    twitter
                    tumblr
                    instagram
                    ao3
                }
            }
        }
    `)

    return (
        <footer className="bg-gray-800 p-4 text-gray-200">
            <div className="container lg:container-lg mx-auto grid grid-cols-1 md:grid-cols-2">
                <div className="text-center md:text-left">{data.site.siteMetadata.author}  |  <a href={"mailto:" + data.site.siteMetadata.email}>{data.site.siteMetadata.email}</a> | <Link to="/">{data.site.siteMetadata.title}</Link> </div>
                <ul className="social-media flex justify-center md:justify-end mt-2 md:mt-0 py-1">
                    <li><a href={data.site.siteMetadata.twitter} target="_blank" rel="noreferrer"><FaTwitter title="Twitter"/> <span className="sr-only">Twitter</span></a> </li>
                    <li><a href={data.site.siteMetadata.tumblr} target="_blank" rel="noreferrer"><FaTumblr title="Tumblr"/> <span className="sr-only">Tumblr</span></a> </li>
                    <li><a href={data.site.siteMetadata.instagram} target="_blank" rel="noreferrer"><FaInstagram title="Instagram"/> <span className="sr-only">Instagram</span></a> </li>
                    <li><a href={data.site.siteMetadata.ao3} target="_blank" rel="noreferrer"><FaBook title="Archive of our Own"/> <span className="sr-only">Archive of Our Own</span></a> </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer