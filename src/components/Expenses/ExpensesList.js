import React from 'react'
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) =>  {

    if (props.item.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
   
  return (
    <ul>
        {props.item.map( (data) => (
            <ExpenseItem
                key ={data.id}
                title = {data.title}
                amount ={data.amount}
                date = {data.date}
            />
        ))}
    </ul>
  )
}

export default ExpensesList