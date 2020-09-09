import React, { useState, useEffect } from 'react'
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

    // Nav
    const [ open, setOpen ] = useState(false)
    

    let navToggle = open ? "show" : ""
    let navIcon = open ?  <FaTimes title="Close Menu"/> : <FaBars title="Open Menu"/>
    
    useEffect(() => {
        const clickHandler = ({ target }) => {
          const container = document.getElementById(`nav`);
          if (container.contains(target)) return;
          setOpen(false);
        };
    
        document.addEventListener("click", clickHandler);
    
        // these functions clean up the event listeners
        return () => document.removeEventListener("click", clickHandler);
      });

    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (keyCode !== 27) return;
            setOpen(false);
        };
        document.addEventListener("keydown", keyHandler);

        return () => document.removeEventListener("keydown", keyHandler);
    });
    

    return (
        <div id="nav" className={"nav " + navToggle } aria-modal="true" role="dialog" aria-labelledby="nav-modal-label">
            <div tabindex="0"></div>
            <div className="nav-wrap">
                <nav className="nav-action" aria-labelledby="Action Links">
                    <ul>
                        <li>
                            <a 
                            href="#" 
                            role="button"
                            onClick={ () => setOpen(!open) }
                            aria-expanded={open === true ? "true" : "false"}
                            className={open === true ? "active" : ""} >               
                                {navIcon}<span className="sr-only">Toggle Menu</span>
                            </a>
                        </li>
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
                    <h2 id="nav-modal-label">Menu</h2>
                    <nav className="nav-menu" aria-labelledby="Site Menu">
                        <ul>
                            <li><Link to="/contact">Home</Link></li>
                            <li><Link to="/works">Works</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>

                    {/* <div className="work-context">
                        <p>Work Context</p>
                    </div> */}
                </div>
            </div>
            <div tabindex="0"></div>
        </div>
    )
}

export default Menu