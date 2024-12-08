// Write your code here
import React ,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";



function ExpenseItem(props) {
  const [title,setTitle] = useState(props.title)
    function buttonClickHandler(){
      console.log('button clicked')
      setTitle('new title')
    }
  return (
    <Card className="expense-item">
    <ExpenseDate calenderDate={props.date}/>
    <div className='expense-item__location'>{props.location}</div>
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${props.price}</div>
    </div>
    <button onClick={buttonClickHandler}>Edit Title</button>
  </Card>
  );
}

export default ExpenseItem;
