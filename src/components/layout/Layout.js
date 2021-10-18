import React from 'react'
import styles from './Layout.module.css'
import MainNavigation from './MainNavigation'
function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main className={styles.main}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout
