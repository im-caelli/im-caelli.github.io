import React from 'react'


const Content = (props) => {
    return (
        <div className="content p-8 my-8 container bg-white">
            {props.children}
        </div>
    )
}

export default Content