// backend/routes/game.js
const express = require("express");
const router = express.Router();
const Player = require("../models/Player");
const Card = require("../models/Card");

// Endpoint to start a game and get player and opponent cards
router.get("/start", async (req, res) => {
  try {
    const player = await Player.findById(req.query.playerId).populate("cards");  // Fetch player cards
    const opponent = await getRandomOpponent();  // Simulate opponent

    res.json({
      playerCards: player.cards,
      opponentCards: opponent.cards,
    });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Simulate a random opponent player (replace this with real opponent logic later)
async function getRandomOpponent() {
  const players = await Player.find();  // Get all players from the database
  return players[Math.floor(Math.random() * players.length)];  // Return random player
}

module.exports = router;
