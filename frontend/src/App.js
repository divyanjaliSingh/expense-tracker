import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await axios.get('http://localhost:5000/api/expenses');
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h1>Expense Tracker</h1>
      <AddExpenseForm onAdd={fetchExpenses} />
      <ExpenseList expenses={expenses} onDelete={fetchExpenses} />
    </div>
  );
}

export default App;
