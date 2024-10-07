const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  element: { type: String, required: true },  // Element type (Fire, Water, Snow)
  value: { type: Number, required: true },    // Card value (1-10)
  rarity: { type: String, required: true },   // Card rarity (Common, Rare, Legendary)
});

const Card = mongoose.model("Card", CardSchema);
module.exports = Card;
