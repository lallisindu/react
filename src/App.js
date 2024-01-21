import logo from './logo.svg';
import './App.css';
import ExpenseItem from './ExItem';
import NewExpense from './NewExpense/NewExpense';

const App= () => {
  const expenses=[
  {
    title:"Car Insurence",
    Amount:300,
    Date:new Date(2024,1,15),
},
{title:"Tv",
    Amount:5000,
    Date:new Date(2024,1,15),
},
{title:"Book",
    Amount:500,
    Date:new Date(2024,1,15),
},
{title:"Toy",
    Amount:200,
    Date:new Date(2024,1,15),
},
  ];
  
  return (
    <div><h1><NewExpense></NewExpense></h1>
    {expenses.map((expense, index) => (
        <ExpenseItem
          //key={index} // Ensure each item has a unique key
          title={expense.title}
          amount={expense.Amount}
          date={expense.Date}
        />
      ))}
    
    </div>
  );
}

export default App;
