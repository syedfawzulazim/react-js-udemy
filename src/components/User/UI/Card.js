import React from 'react'
import styles from "./card.module.css"

function Card(props) {
    return (
        <div className={`${styles.card} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Card
