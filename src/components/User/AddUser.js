import React, { useState } from 'react'
import Card from './UI/Card'
import Button from './UI/Button'
import styles from "./addUser.module.css"

function AddUser(props) {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')

    const onUserNameChange = (event) => {
        setUserName(event.target.value)
    }

    const onUserAgeChange = (event) => {
        setUserAge(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            return;
        }
        if (+userAge < 1) {
            return;
        }
        console.log(userName, userAge)
        props.onAddUser(userName, userAge)
        setUserName('')
        setUserAge('')
    }

    return (
        <Card className={styles.input}>
            <div>
                <form onSubmit={onSubmitHandler}>
                    <label >User Name </label>
                    <input type="text" value={userName} onChange={onUserNameChange} />
                    <label >User Age </label>
                    <input type="number" value={userAge} onChange={onUserAgeChange} />
                    <Button type="submit">Add User</Button>
                </form>
            </div>
        </Card>
    )
}

export default AddUser
