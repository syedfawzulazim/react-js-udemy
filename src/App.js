import Expenses from "./components/expense/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    { id: 'e3', title: 'Food', amount: 130, date: new Date(2021, 2, 12) },
    { id: 'e2', title: 'Health Insurance', amount: 110, date: new Date(2021, 4, 1) },
    { id: 'e1', title: 'Dorm Rent', amount: 225, date: new Date(2021, 0, 3) },
    { id: 'e4', title: 'Transport', amount: 60, date: new Date(2021, 5, 25) }
  ]

  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseDate = {
      ...enteredExpenseDate,
      id: Math.random().toString()
    };
    console.log(expenseDate);
  };

  return (
    <div className="App">
      <h2 style={{ textAlign: 'center', padding: "20px", fontSize: "2.5rem" }}>Your Daily Expense Calculator</h2>
      <NewExpense onSaveExpenseData={saveExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
