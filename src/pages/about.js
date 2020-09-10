import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { FaTwitter, FaTumblr, FaInstagram, FaBook, FaGithub, FaRedditAlien } from 'react-icons/fa';

import Layout from '../components/layout'
// import Head from '../components/head'
import SEO from '../components/seo'
import Content from "../components/content"
import Hero from "../components/hero"

const AboutPage = () => {
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
                    reddit
                    github
                    ao3
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title="About " />
            <Hero>
                <h2 className="hero-title">About Me</h2>
                <p className="hero-tagline">I am learning to draw / write for fun just because. <br />
                Feel free to follow me on the socials:</p>
                <ul className="social-media flex justify-center md:justify-end mt-2 md:mt-0 py-1 my-4">
                    <li><a href={data.site.siteMetadata.twitter} target="_blank" rel="noreferrer"><FaTwitter title="Twitter"/> <span className="sr-only">Twitter</span></a> </li>
                    <li><a href={data.site.siteMetadata.tumblr} target="_blank" rel="noreferrer"><FaTumblr title="Tumblr"/> <span className="sr-only">Tumblr</span></a> </li>
                    <li><a href={data.site.siteMetadata.instagram} target="_blank" rel="noreferrer"><FaInstagram title="Instagram"/> <span className="sr-only">Instagram</span></a> </li>
                    <li><a href={data.site.siteMetadata.reddit} target="_blank" rel="noreferrer"><FaRedditAlien title="Reddit"/> <span className="sr-only">Reddit</span></a> </li>
                    <li><a href={data.site.siteMetadata.github} target="_blank" rel="noreferrer"><FaGithub title="Github"/> <span className="sr-only">Github</span></a> </li>
                    <li><a href={data.site.siteMetadata.ao3} target="_blank" rel="noreferrer"><FaBook title="Archive of our Own"/> <span className="sr-only">Archive of Our Own</span></a> </li>
                </ul>
            </Hero>
            <Content>
                <p>I have always been interested in art, stories and web development. I decided to make use of this 2020 stay at home nonsense to be productive and have some creative outlet for these fandom feels. </p>
                <h2>Art</h2>
                <p>I've tried drawing before, but got discouraged because I'm bad. I still am, but now that I'm older I'm approaching it as an actual learning experience rather than just producing stuff for an audience. I've also grown more patient and learned to recognize even the tiniest of progress. Lately I have been happy with some results, even though they aren't the best. My goal is to be more consistent, establish a style and be more painterly.</p>
                <h3>Tools</h3>
                <ul class="list-disc ml-5 mb-4">
                    <li>Wacom Intuos 5 MD</li>
                    <li>Krita</li>
                    <li>Clip Studio Paint</li>
                </ul>
                <p>I still use the Wacom Intuos 5 from way way back in the day. As far as apps go, I've grown tried with pirating adobe and just how heavy the suite is. I used Krita (Open Source!) for a while because I had repurposed an ancient macbook pro with Linux and it was ont of the more decent apps that ran on the OS. I've also recently caved and bought CSP during a sale (using on a Windows machine) and it's amazing! There's so much to learn with it.</p>
                <p>I usually dump art on Twitter / Tumbr / Instagram </p>
                <p><a className="btn btn-neutral" href={data.site.siteMetadata.twitter} target="_blank" rel="noreferrer"><FaTwitter title="Twitter" className="inline-block"/> Twitter</a> <a className="btn btn-neutral" href={data.site.siteMetadata.tumblr} target="_blank" rel="noreferrer"><FaTumblr title="Tumblr" className="inline-block" /> Tumblr</a> <a className="btn btn-neutral" href={data.site.siteMetadata.instagram} target="_blank" rel="noreferrer"><FaInstagram title="Instagram" className="inline-block" /> Instagram</a> </p> 
                <h2>Fics</h2>
                <p>It's crazy how easy it is to spot a really good (or bad) fic but then when you try for yourself it's like wait, how was it so good? WHy is mine not coming across the same? Anyway I am not a writer. I just love stories and sometimes I have ideas and stories in my head that I want to share somehow in a way that has more movement than a piece of drawing, and more detail than a comic strip and well, just more than any physical visual I guess. And I suppose the only way to learn and get better is to try and do it.</p>

                <h3>Tools</h3>
                <ul class="list-disc ml-5 mb-4">
                    <li>Ghostwriter (Open source distraction free app for Linux)</li>
                    <li>Markdown</li>
                    <li>Git</li>
                </ul>

                <p>I think it's just a weird coder in me (and the fact that I feed stories into this site using MD by design) That I actually write in MD syntax and also use git for version control. Lol.</p>

                <p>I only post on AO3.</p>

                <p><a className="btn btn-neutral" href={data.site.siteMetadata.ao3} target="_blank" rel="noreferrer"><FaBook title="Archive of our Own" className="inline-block"/> Archive of Our Own</a></p>

                <h2>This Portfolio</h2>
                <p>I wanted a visual experience to to present the stuff I've created in a way that the socials probably cant.</p>
                
                <p>And mostly as an interesting way to learn some new technologies</p>
                <h3>Tools</h3>
                <ul class="list-disc ml-5 mb-4">
                    <li>Figma (for design / wireframe / mocks)</li>
                    <li>Visual Studio Code</li>
                    <li>Terminal / Hyper</li>
                </ul>

                <h3>Tech I was exploring</h3>
                <ul class="list-disc ml-5 mb-4">
                    <li>React</li>
                    <li>Gatsby</li>
                    <li>Tailwind CSS / SCSS</li>
                </ul>

                <p>Of course I wanted this to be a pretty solid portfolio site but obviously I didn't end up launching it in a perfect state. I do plan on ensuring the accessibility and user experience, because why not! The point of this is to learn things and do them properly. You can see features / functions / behaviours / issues that I do plan on addressing and implementing on github.</p>
                <p><a className="btn btn-neutral" href="https://github.com/im-caelli/im-caelli.github.io/issues"><FaGithub title="Github" className="inline-block"/> View Issues</a></p>
            </Content>
        </Layout>
    )
}

export default AboutPage