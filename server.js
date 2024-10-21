const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const userRoutes = require('./routes/User');

dotenv.config();
connectDB();  // Connect to MongoDB

const app = express();

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use('/api/users', userRoutes);  // Use the user routes

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));