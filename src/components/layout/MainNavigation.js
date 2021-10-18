import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Great Quotes</div>
            <nav className={styles.nav}>
                <ul>
                    <li><NavLink to="/quotes" activeClassName={styles.active}>All Quotes </NavLink></li>
                    <li><NavLink to="/new-quote" activeClassName={styles.active}>Add a Quotes </NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
