import React from 'react'
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  return (
    <>
          {props.expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
            location={expense.location}
          ></ExpenseItem>
        );
      })}
    </>
  )
}

export default Expenses