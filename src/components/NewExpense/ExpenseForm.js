import React , {useState}from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [t,setT] = useState('');
    const [a,setA] = useState('');
    const [d,setD] = useState('');

    // const [user,setUser] = useState({
    //     title:'',
    //     amount:'',
    //     date:''
    // })

    const fun1 = (event) =>{
        setT(event.target.value)

        // setUser({
        //     ...user,
        //     title:event.target.value
        // })

        // setUser((prevState)=>{
        //    return { ...prevState, title:event.title.value}
        // })
    }

    const fun2 = (event) =>{
        setA(event.target.value)
    }

    const fun3 = (event) =>{
        setD(event.target.value)
    }

    const submit = (event) =>{
        event.preventDefault();

        const expenseData= {
            title:t,
            amount:a,
            date:new Date(d)
        }
        
        props.onSave(expenseData)
        // console.log(expenseData)
        setT('')
        setA('')
        setD('')

    }

  return (
    <form onSubmit={submit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value= {t} onChange={fun1}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value= {a}  min='0.01' step='0.01' onChange={fun2} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value= {d} min='2019-01-01' max='2022-12-31' onChange={fun3} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;