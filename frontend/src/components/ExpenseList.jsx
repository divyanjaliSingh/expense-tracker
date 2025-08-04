import React from 'react';
import axios from 'axios';

const ExpenseList = ({ expenses, onDelete }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`);
    onDelete();
  };

  return (
    <ul>
      {expenses.map(exp => (
        <li key={exp._id}>
          {exp.title} - ₹{exp.amount} - {exp.category} on {new Date(exp.date).toLocaleDateString()}
          <button onClick={() => handleDelete(exp._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
