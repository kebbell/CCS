const express = require('express');
const bankDetailsRoutes = require('./routes/bankDetailsRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/bank-details', bankDetailsRoutes);

// Error Handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Server Error' });
});

module.exports = app;

