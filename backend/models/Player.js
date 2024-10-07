const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
  rank: { type: Number, default: 0 },  // Players start at rank 0
});

const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;
