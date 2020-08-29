import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FaBars, FaShareAlt, FaMoon, FaChevronUp, FaTimes } from 'react-icons/fa';

const Menu = () => {
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
        <div className="nav">
            <div className="nav-wrap">
                <nav className="nav-action" aria-labelledby="Action Links">
                    <ul>
                        <li><a href="#" role="button"><FaBars title="Menu"/> <span className="sr-only">Menu</span></a> </li>
                        <li><a href="#" role="button"><FaShareAlt title="Share"/> <span className="sr-only">Share</span></a> </li>
                        <li><a href="#" role="button"><FaMoon title="Dark Mode"/> <span className="sr-only">Dark Mode</span></a> </li>
                        {/* <li>
                            <ul className="work-anchors">
                                <li>1</li>
                            </ul>
                        </li> */}
                        <li className="btt"><a href="#" role="button"><FaChevronUp title="Menu"/> <span className="sr-only">Back to Top</span></a></li>
                    </ul>
                </nav>

                <div className="nav-modal">
                    <h2>Menu</h2>
                    <nav className="nav-menu" aria-labelledby="Site Menu">
                        <ul>
                            <li><Link to="/contact">Home</Link></li>
                            <li><Link to="/works">Works</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>

                    <div className="work-context">
                        <p>Work Context</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu