import React,{useState} from "react";

const ExpenseForm =(props) =>{
    const [enteredTitle, setEnterdTitle] =useState('');
    const [enteredAmount, setEnterdAmount] =useState('');
    const [enteredDate, setEnterdDate] =useState('');
    const titleChangeHandler=(event) => {
        setEnterdTitle(event.target.value)
    }
    const amountChangeHandler=(event) => {
        setEnterdAmount(event.target.value)
    }
    const dateChangeHandler=(event) => {
        setEnterdDate(event.target.value)
    }
    const submitHandler=(event) => {
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnterdTitle('');
        setEnterdAmount('');
        setEnterdDate('');
    };
    
    return (<form onSubmit={submitHandler} >
        <div>
        <div><label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/></div>
        <div><label>Amount</label>
                <input type='number' min='0.1' step='0.1' value={enteredAmount} onChange={amountChangeHandler}/></div>
        <div><label>Date</label>
                <input type="date" min ='2023-01-01' max='2024-12-31' value={enteredDate} onChange={dateChangeHandler}/></div>


        </div>
        <div> <button type='submit'>AddExpense</button></div>






    </form>)
}
export default ExpenseForm;