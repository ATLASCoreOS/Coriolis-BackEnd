// server.js

const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const incAccNrMissRoutes = require('./routes/IncAccNrMiss');  // Import the new routes for incident/accident reporting

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/reports', incAccNrMissRoutes);  // Routes for incidents, accidents, near misses

// Test route to check if API is running
app.get('/', (req, res) => {
  res.send('Coriolis QSMS API is running...');
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));