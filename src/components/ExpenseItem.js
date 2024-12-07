// Write your code here

import "./ExpenseItem.css";

let months = ['January','February','March','April','May','June','July','August','September','October','November','December']

function ExpenseItem(props) {
    let month = months[props.date.getMonth()]
    let year = props.date.getFullYear();
    let dates = props.date.getDate();
  return (
    <div className="expense-item">
          <div>
              <div>{month}</div>
              <div>{year}</div>
              <div>{dates}</div>
          </div>
    <div className='expense-item__location'>{props.location}</div>
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.price}</div>
    </div>
  </div>
  );
}

export default ExpenseItem;
