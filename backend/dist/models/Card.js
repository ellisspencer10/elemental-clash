"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CardSchema = new mongoose_1.default.Schema({
    element: { type: String, required: true }, // Element type (Fire, Water, Snow)
    value: { type: Number, required: true }, // Card value (1-10)
    rarity: { type: String, required: true }, // Card rarity (Common, Rare, Legendary)
});
const Card = mongoose_1.default.model("Card", CardSchema);
module.exports = Card;
