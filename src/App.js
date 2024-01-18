import React from 'react';
import ExpenciveItem from './components/ExItem.js';

const expenses = [
  {
    id: 1,
    title: 'paper',
    amount: 50,
    date: new Date(2024, 1, 18),
    location: 'India',
  },
  {
    id: 2,
    title: 'TV',
    amount: 50000,
    date: new Date(2024, 1, 18),
    location: 'India',
  },
  // Add more expenses
];

const App=() =>{
  return (
    <div>
      <h1>Lets start</h1>
      {expenses.map((expense) => (
        <ExpenciveItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
        
      ))}
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={expenses.title}
        amount={expenses.amount}
        location={expenses.location}
      />
      
    </div>
  );
}

export default App;
