import React, { useState } from 'react'
import "./styles/newExpense.css"

function NewExpense(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    //one state to maintain all
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)

        //for one state method
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // //better way 
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     };
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)

    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amoount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <div className="new-expense">
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default NewExpense
