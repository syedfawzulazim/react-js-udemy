import React, { useState } from 'react'

import './styles/expenses.css'
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'

function Expenses({ items }) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = items.filter((item) => {
        return filteredYear === item.date.getFullYear().toString();
    })

    let expensesContent = <p>No Expenses Found...!</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            {expensesContent}

        </div>
    )
}

export default Expenses

// <ExpenseItem
// key={expense.id}
// title={expense.title}
// amount={expense.amount}
// date={expense.date}
// />