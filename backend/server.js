const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Other middleware
app.use(express.json());

// Your routes
const gameRoutes = require('./routes/game');
app.use('/game', gameRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
