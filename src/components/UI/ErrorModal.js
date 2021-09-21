import React from 'react'
import ReactDom from 'react-dom'
import Card from './Card'
import Button from './Button'
import styles from "./errorModal.module.css"


const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.errorHandler} />
}
const ModalOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.errorHandler}>Okay</Button>
            </footer>
        </Card>
    )
}

function ErrorModal(props) {
    return (
        <React.Fragment>
            {
                ReactDom.createPortal(<Backdrop errorHandler={props.errorHandler} />, document.getElementById('backdrop'))
            }
            {
                ReactDom.createPortal(<ModalOverlay titel={props.title} message={props.message} errorHandler={props.errorHandler} />, document.getElementById('modalOverlay'))
            }
        </React.Fragment>
    )
}

export default ErrorModal
