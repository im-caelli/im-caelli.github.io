import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <div className="main bg-blue-200">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout