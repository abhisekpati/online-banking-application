const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Initialize dotenv to load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Routes
const accountRoutes = require('./routes/accountRoutes');
app.use('/api/accounts', accountRoutes);

// Simple test route
app.get('/', (req, res) => {
  res.send('Online Banking Backend is Running!');
});

// Set the port from environment variable or default to 5000
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

