import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Fridge',
    amount: 99999,
    date: new Date(2020, 10, 10),
  },
  { id: 'e2', 
    title: 'Music Player', 
    amount: 7999, 
    date: new Date(2021, 3, 12) 
  },
  {
    id: 'e3',
    title: 'Health Insurance',
    amount: 29467.99,
    date: new Date(2021, 2, 20),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 4500,
    date: new Date(2021, 11, 12),
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;