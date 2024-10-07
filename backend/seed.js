// backend/seed.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Card = require("./models/Card");

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");

    // Insert sample cards
    const cards = [
      { element: "Fire", value: 5, rarity: "Common" },
      { element: "Water", value: 7, rarity: "Rare" },
      { element: "Snow", value: 3, rarity: "Legendary" },
    ];

    Card.insertMany(cards)
      .then(() => {
        console.log("Sample cards added successfully");
        mongoose.connection.close(); // Close the connection after insertion
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
