import React, { useState } from 'react'

import './styles/expenses.css'
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'

function Expenses({ items }) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div className="expenses">
            <ExpensesFilter firstSelected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseItem title={items[0].title} amount={items[0].amount} date={items[0].date} />
            <ExpenseItem title={items[1].title} amount={items[1].amount} date={items[1].date} />
            <ExpenseItem title={items[2].title} amount={items[2].amount} date={items[2].date} />
            <ExpenseItem title={items[3].title} amount={items[3].amount} date={items[3].date} />
        </div>
    )
}

export default Expenses
