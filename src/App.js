import React, { useState } from 'react'
// import Expenses from "./components/expense/Expenses"
// import NewExpense from "./components/NewExpense/NewExpense";

// import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList"
// import CourseInput from "./components/CourseGoals/CourseInput/CourseInput"

import AddUser from "./components/User/AddUser"
import UserList from "./components/User/UserList"


// const DUMMY_EXPENSE = [
//   { id: 'e3', title: 'Food', amount: 130, date: new Date(2021, 2, 12) },
//   { id: 'e2', title: 'Health Insurance', amount: 110, date: new Date(2021, 4, 1) },
//   { id: 'e1', title: 'Dorm Rent', amount: 225, date: new Date(2021, 0, 3) },
//   { id: 'e4', title: 'Transport', amount: 60, date: new Date(2021, 5, 25) }
// ]


function App() {

  // const [expenses, setExpenses] = useState(DUMMY_EXPENSE)

  // const addExpenseDataHandler = (enteredExpenseDate) => {
  //   const expenseDate = {
  //     ...enteredExpenseDate,
  //     id: Math.random().toString()
  //   };

  //   setExpenses((prevExpenses) => {
  //     return [expenseDate, ...prevExpenses]
  //   })

  // };


  // section 6


  // const [courseGoals, setCourseGoals] = useState([
  //   { text: 'Do all exercises!', id: 'g1' },
  //   { text: 'Finish the course!', id: 'g2' }
  // ]);

  // const addGoalHandler = enteredText => {
  //   setCourseGoals(prevGoals => {
  //     const updatedGoals = [...prevGoals];
  //     console.log(updatedGoals)

  //     updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
  //     console.log(updatedGoals)
  //     return updatedGoals;
  //   });
  // };

  // const deleteItemHandler = goalId => {
  //   setCourseGoals(prevGoals => {
  //     const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
  //     return updatedGoals;
  //   });
  // };

  // let content = (
  //   <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  // );

  // if (courseGoals.length > 0) {
  //   content = (
  //     <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
  //   );
  // }



  // Section 8

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevState) => {
      return [...prevState, { name: uName, age: uAge }];

    })
  }



  return (
    <div className="App">
      {/* <h2 style={{ textAlign: 'center', padding: "20px", fontSize: "2.5rem" }}>Your Daily Expense Calculator</h2>
      <NewExpense onSaveExpenseData={addExpenseDataHandler} />
      <Expenses items={expenses} /> */}


      {/* Section-6 */}

      {/* <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}

        //alternavtive way
        { {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        }}


      </section> */}

      {/* Section 8 */}

      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />



    </div>
  );
}

export default App;
