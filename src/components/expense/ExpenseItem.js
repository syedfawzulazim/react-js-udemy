import React, { useState } from 'react'
import './styles/expenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem({ title, amount, date }) {

    const [newTitle, setNewTitle] = useState(title);

    const clickHandler = () => {
        setNewTitle('updated')
    }

    return (
        <div className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{newTitle}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
            <button onClick={clickHandler}>Change</button>
        </div>
    )
}

export default ExpenseItem
