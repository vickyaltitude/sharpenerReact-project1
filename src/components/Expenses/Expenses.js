import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className='expenses'>
       <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
          {props.expenses.filter(exp => exp.date.getFullYear().toString() === filteredYear).map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
            location={expense.location}
          />
        );
      })}
    </Card>
  )
}

export default Expenses