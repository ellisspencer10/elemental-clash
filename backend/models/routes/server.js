// backend/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import the game routes
const gameRoutes = require("./routes/game");

// Use the game routes for API calls that start with /game
app.use("/game", gameRoutes);

// MongoDB connection and socket.io setup...
