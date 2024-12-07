
import "./ExpenseItem.css";

function ExpenseItem() {
    let showDate = new Date().toISOString()
    let location = 'Delhi';
    let product = 'Book';
    let price = 10;
  return (
    <div className='expense-item'>
      <div>{showDate}</div>
      <div className='expense-item__location'>{location}</div>
      <div className='expense-item__description'>
        <h2>{product}</h2>
        <div className='expense-item__price'>${price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
