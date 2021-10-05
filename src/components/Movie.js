import React from 'react'

function Movie(props) {
    return (
        <li>
            <h2>{props.title}</h2>
            <h3>{props.openingText}</h3>
            <p>{props.releaseDate}</p>
        </li>
    )
}

export default Movie
