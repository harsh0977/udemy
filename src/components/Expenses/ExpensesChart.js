import React from 'react'

import Chart from '../Chart/Chart'; 
const ExpensesChart = (props) =>  {

    const arr = [
        {label : 'Jan' , value:0},
        {label : 'Feb' , value:0},
        {label : 'Mar' , value:0},
        {label : 'Apr' , value:0},
        {label : 'May' , value:0},
        {label : 'Jun' , value:0},
        {label : 'July' , value:0},
        {label : 'Aug' , value:0},
        {label : 'Sep' , value:0},
        {label : 'Oct' , value:0},
        {label : 'Nov' , value:0},
        {label : 'Dec' , value:0}
    ]

    for(const exp of props.expenses)
    {
        const expenseMonth = exp.date.getMonth();
        arr[expenseMonth].value += exp.amount; 
    }

  return (
    <Chart dataPoint = {arr} />
  )
}

export default ExpensesChart