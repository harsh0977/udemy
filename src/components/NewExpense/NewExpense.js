import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const saveExpenseData = (formdata) => {
    const exdata = {
      ...formdata,
      id : Math.random().toString()
    }
    props.onAddExpense(exdata)
    //console.log(exdata)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSave = {saveExpenseData}/>
    </div>
  );
};

export default NewExpense;