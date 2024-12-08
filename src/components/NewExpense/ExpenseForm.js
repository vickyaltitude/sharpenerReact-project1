import React,{useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = ()=>{
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate:""
      });
      
    
      const titleChangeHandler = (event) => {
    
        setUserInput((latestState) => {
          return {
            ...latestState,
            enteredTitle:event.target.value
           }
        })
       
      };
    
      const amountChangeHandler = (event) => {
        setUserInput((latestState) => {
          return {
            ...latestState,
            enteredAmount: event.target.value
          }
        })
      };
    
      const dateChangeHandler = (event) => {
        setUserInput((latestState) => {
          return {
            ...latestState,
            enteredDate: event.target.value
          }
        })
      };
     
      function formSubmitHandler(e){
        e.preventDefault();
        console.log(userInput);
        setUserInput({
            enteredTitle: "",
            enteredAmount: "",
            enteredDate:""
          })
      }
     
   return (
<form onSubmit={formSubmitHandler}>
        <div className='new-expense__controls' >
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={userInput.enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2023-01-01" value={userInput.enteredDate} max="2025-12-31" onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>

        </div>
</form>

   )
}

export default ExpenseForm