import React, { useState } from 'react';
import axios from 'axios';

const AddExpenseForm = ({ onAdd }) => {
  const [form, setForm] = useState({ title: '', amount: '', category: '', date: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/expenses', form);
    setForm({ title: '', amount: '', category: '', date: '' });
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
      <input type="number" placeholder="Amount" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} />
      <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
      <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
