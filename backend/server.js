const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // Load environment variables from .env file

const gameRoutes = require('./routes/game');  // Import game routes
const testRoutes = require('./routes/test');  // Import the new test route

const app = express();
app.use(cors());  // Enable CORS for cross-origin requests
app.use(express.json());  // Middleware to parse incoming JSON requests

// Use the game routes and test routes
app.use('/game', gameRoutes);
app.use('/api', testRoutes);  // Add test route under '/api'

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
