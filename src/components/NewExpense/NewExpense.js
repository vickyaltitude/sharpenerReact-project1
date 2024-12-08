import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props)=>{
    function saveExpenseDataHandler(receivedInput){
        let newProduct = {
            ...receivedInput,
            id: Math.random()
        }
        props.onNewExpenseData(newProduct)
    }
   return (
     <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
     </div>
   )
}

export default NewExpense