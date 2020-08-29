import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div className="gatsby-app">
            <Header />
            <div className="main bg-blue-200 flex-1">
                <div className="content p-8 my-8 container bg-white">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout