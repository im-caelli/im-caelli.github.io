import React from 'react'

const Works = (props) => {

    return(
        <div id="works" className="works content p-8 my-8 container">
            <h2 className="text-center text-white my-4">Works</h2>
            <div className="card-container">
                {props.children}
            </div>   
        </div>
    )
}

export default Works