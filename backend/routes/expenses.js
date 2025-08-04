const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Get all expenses
router.get('/', async (req, res) => {
  const expenses = await Expense.find().sort({ date: -1 });
  res.json(expenses);
});

// Create a new expense
router.post('/', async (req, res) => {
  console.log('📩 New expense received:', req.body);

  const { title, amount, category, date } = req.body;
  const expense = new Expense({ title, amount, category, date });
  await expense.save();
  res.json(expense);
});

// Delete an expense
router.delete('/:id', async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: 'Expense deleted' });
});

module.exports = router;
