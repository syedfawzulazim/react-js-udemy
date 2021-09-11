import React, { useState } from 'react'

import './styles/expenses.css'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpenseChart from './ExpenseChart';

function Expenses({ items }) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = items.filter((item) => {
        return filteredYear === item.date.getFullYear().toString();
    })



    return (
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />

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