import React, { useState, useRef } from 'react'
import Card from './UI/Card'
import Button from './UI/Button'
import styles from "./addUser.module.css"
import ErrorModal from './UI/ErrorModal'

function AddUser(props) {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const [error, setError] = useState()

    const onUserNameChange = (event) => {
        setUserName(event.target.value)
    }

    const onUserAgeChange = (event) => {
        setUserAge(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        console.log(enteredName, enteredAge)

        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty).'
            });
            return;
        }
        if (+userAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age.'
            });
            return;
        }

        props.onAddUser(userName, userAge)
        setUserName('')
        setUserAge('')
    }
    const errorHandler = () => {
        setError(null)
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} errorHandler={errorHandler} />}
            <Card className={styles.input}>
                <div>
                    <form onSubmit={onSubmitHandler}>
                        <label >User Name </label>
                        <input
                            type="text"
                            value={userName}
                            onChange={onUserNameChange}
                            ref={nameInputRef}
                        />
                        <label >User Age </label>
                        <input
                            type="number"
                            value={userAge}
                            onChange={onUserAgeChange}
                            ref={ageInputRef}
                        />
                        <Button type="submit">Add User</Button>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default AddUser
