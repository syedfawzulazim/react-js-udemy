import React from 'react'
import styles from "./button.module.css"

function Button(props) {
    return (
        <button
            className={styles.btn}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button
