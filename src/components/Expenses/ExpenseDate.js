import React from 'react'
import './ExpenseDate.css'

let months = ['January','February','March','April','May','June','July','August','September','October','November','December']

const ExpenseDate = (props) => {

    let month = months[props.calenderDate.getMonth()]
    let year = props.calenderDate.getFullYear();
    let dates = props.calenderDate.getDate();
  return (
    <>
         <div className='expense-date'>
              <div className='expense-date__month'>{month}</div>
              <div className='expense-date__year'>{year}</div>
              <div className='expense-date__date'>{dates}</div>
          </div>
    </>
  )
}

export default ExpenseDate