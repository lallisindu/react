import React from 'react';
import './ExItem.css';

function ExpensiveItem(props) {
  const handleDeleteExpense = () => {
    const expenseElement = document.getElementById(`expense-${props.id}`);

    if (expenseElement) {
      // Use the parentNode property to access the <div> and remove the expense
      const expensesContainer = expenseElement.parentNode;
      expensesContainer.removeChild(expenseElement);
    } else {
      console.log('Expense not found.');
    }
  };

  return (
    <div className='expense-item' id={`expense-${props.id}`}>
      <h2>{props.date.toISOString()}</h2>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <div className='expense-item__location'>{props.location}</div>
      <div>
        title={props.title}
        amount={props.amount}
        location={props.location}
      </div>
      <button onClick={handleDeleteExpense}>
        Delete Expense
      </button>
    </div>
  );
}

export default ExpensiveItem;
