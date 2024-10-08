const express = require('express');
const router = express.Router();
const Player = require('../models/Player');
const Card = require('../models/Card');
const authenticateToken = require('/C:\Users\Ellis\Documents\GitHub\elemental-clash\backend\Middleware\authenticateToken.js');  // Correct path


// Route to start a game for a player (fetch player's cards and simulate an opponent)
router.get('/start/:playerId', async (req, res) => {
  try {
    // Fetch the player and their cards
    const player = await Player.findById(req.params.playerId).populate('cards');
    const opponent = await getRandomOpponent();  // Fetch a random opponent

    // Compare the total value of the player's and opponent's cards
    const playerTotalValue = calculateTotalCardValue(player.cards);
    const opponentTotalValue = calculateTotalCardValue(opponent.cards);

    let result;
    if (playerTotalValue > opponentTotalValue) {
      result = 'Player wins!';
      player.wins += 1;  // Increment player's wins

      // (Optional) Take a random card from the opponent and give it to the player
      const randomOpponentCard = opponent.cards[Math.floor(Math.random() * opponent.cards.length)];
      player.cards.push(randomOpponentCard);
      await player.save();

      // Remove the card from the opponent
      opponent.cards = opponent.cards.filter(card => card._id.toString() !== randomOpponentCard._id.toString());
      await opponent.save();
    } else if (playerTotalValue < opponentTotalValue) {
      result = 'Opponent wins!';
      player.losses += 1;  // Increment player's losses
    } else {
      result = 'It\'s a tie!';
    }

    // Save player stats
    await player.save();

    res.json({
      playerCards: player.cards,
      opponentCards: opponent.cards,
      result: result,
      playerTotalValue,
      opponentTotalValue,
      playerWins: player.wins,
      playerLosses: player.losses
    });
  } catch (err) {
    res.status(500).json({ message: 'Error starting game', error: err });
  }
});

// Helper function to simulate a random opponent
async function getRandomOpponent() {
  const players = await Player.find();
  const randomIndex = Math.floor(Math.random() * players.length);
  return players[randomIndex];
}

// Helper function to calculate total card value
function calculateTotalCardValue(cards) {
  return cards.reduce((total, card) => total + card.value, 0);
}

module.exports = router;
