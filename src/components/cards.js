import React from 'react'
import { Link } from 'gatsby'

const Cards = ({title, summary, fandom, ship, rating, cover, post, collection, feature}) => {

    return(
        <Link to={post} className="card">

            <div className="card-cover">
                <img src={cover} />
            </div>
            <div className="card-info">
                    <h3>{title}</h3>
                    <ul className="card-meta">
                        <li>Fandom: {fandom}</li>
                        <li>Ship: {ship}</li>
                        <li>Rating: {rating}</li>
                    </ul>
                    <p className="card-summary"> {summary}</p>
            </div>
        </Link>
    )
}

export default Cards