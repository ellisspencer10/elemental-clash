const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // Load .env file


const gameRoutes = require('./routes/game');  // Import game routes

const app = express();
app.use(cors());  // Enable CORS
app.use(express.json());  // Parse incoming JSON requests

// Use the game routes
app.use('/game', gameRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
