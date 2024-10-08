"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Define the Player schema
const playerSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    cards: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Card' }], // Array of card references
    rank: { type: Number, default: 0 }, // Player's rank
    wins: { type: Number, default: 0 }, // Track wins
    losses: { type: Number, default: 0 } // Track losses
});
// Create the Player model
const Player = mongoose_1.default.model('Player', playerSchema);
module.exports = Player;
