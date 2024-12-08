import React from 'react'
import './ExpenseForm.css'
import './NewExpense.css'

const ShowFormOption = ({setShowForm}) => {

    function updateShowFormState(){
        setShowForm(true)
    }

  return (
    <div className="new-expense">
   <div className='new-expense__control'>
        <button className="new-expense__actions" onClick={updateShowFormState}>Add Expense</button>
    </div>
    </div>
 
  )
}

export default ShowFormOption