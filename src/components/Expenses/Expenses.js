import React, {useState} from 'react';


import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

  const [year, setYear] = useState('2020')

  const fun1 = (yy) => {
    setYear(yy)
  
  }

  const filterExpense = props.items.filter((exp) => {
    return exp.date.getFullYear().toString() ===  year
  })


  return (
    <Card className="expenses">
      <ExpensesFilter selected = {year} onYear={fun1}/>
      <ExpensesChart expenses = {filterExpense}/>
      <ExpensesList  item = {filterExpense}/>
    </Card>
  );
}

export default Expenses;