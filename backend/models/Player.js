const mongoose = require('mongoose');

// Define the Player schema
const playerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],  // Array of card references
  rank: { type: Number, default: 0 },  // Player's rank
  wins: { type: Number, default: 0 },  // Track wins
  losses: { type: Number, default: 0 } // Track losses
});

// Create the Player model
const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
