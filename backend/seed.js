require('dotenv').config();  // Load environment variables from .env
const mongoose = require('mongoose');
const Card = require('./models/Card');  // Assuming you have a Card model defined in models/Card.js

// Connect to MongoDB using the URI from the .env file
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    // Sample card data to seed the database
    const cards = [
      { element: "Fire", value: 5, rarity: "Common" },
      { element: "Water", value: 7, rarity: "Rare" },
      { element: "Snow", value: 3, rarity: "Legendary" }
    ];

    // Insert the sample cards into the database
    return Card.insertMany(cards);
  })
  .then(() => {
    console.log("Sample cards added successfully");
    // Close the connection after insertion
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error connecting to MongoDB or inserting data:", err);
  });
