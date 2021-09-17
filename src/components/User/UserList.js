import React from 'react'
import Card from './UI/Card'
import styles from "./userList.module.css"
function UserList(props) {
    return (
        <Card className={styles.users}>
            <ul>
                {
                    props.users.map((user) => (
                        <li>{user.name}</li>
                    ))
                }
                {props.children}
            </ul>
        </Card>

    )
}

export default UserList
