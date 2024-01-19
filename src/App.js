import React from 'react';
import ExpensiveItem from './components/ExItem.js';
import ExpenseDate from './components/ExpenseDate'; // Import ExpenseDate component
import ExpenseDetails from './components/ExpenseDetails'; // Import ExpenseDetails component

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

const App = () => {
  return (
    <div>
      <h1>Lets start</h1>
      {expenses.map((expense) => (
        <ExpensiveItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </div>
  );
};

export default App;
