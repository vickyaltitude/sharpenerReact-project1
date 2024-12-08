import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ShowFormOption from "./components/NewExpense/ShowFormOption";

function App() {
  const [expenses,setExpenses] = useState([
    { id: "1", date: new Date(2022, 7, 15), title: "Insurance", price: 100,location:'Bangalore' },
    { id: "2", date: new Date(2023, 3, 25), title: "Book", price: 10,location:'Delhi' },
    { id: "3", date: new Date(2024, 10, 11), title: "Pen", price: 1,location:'Hyderabad' },
    { id: "4", date: new Date(2025, 1, 14), title: "Laptop", price: 200,location:'Mumbai' },
  ]);
 const [showForm,setShowForm] = useState(false);
  function getNewExpenseInput(receivedIn){
    console.log(receivedIn)
    let dateArr = receivedIn.enteredDate.split('-')
    let updatedRec = {
      ...receivedIn,
      date: new Date(Number(dateArr[0]),Number(dateArr[1]),Number(dateArr[2])),
      title: receivedIn.enteredTitle,
      price: receivedIn.enteredAmount,
      location: receivedIn.enteredLocation
    }
     setExpenses([...expenses,updatedRec]);
  }
  return (
    <div>
      {!showForm &&  <ShowFormOption setShowForm={setShowForm}/>}
      {showForm && <NewExpense onNewExpenseData={getNewExpenseInput} setShowForm={setShowForm}/>}
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
