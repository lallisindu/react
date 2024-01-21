import React  from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense=() => {
    const SaveExpenseDataHandler=(enteredExpenseData) =>{
const expenseData={
    ...enteredExpenseData,
    id:Math.random().toString()
};
props.onAddExpense(expenseData);
//console.log(expenseData);
    }
    return <div><ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}></ExpenseForm></div>
}
export default NewExpense;