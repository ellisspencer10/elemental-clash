const express = require('express');
const router = express.Router();
const authenticateToken = require('/backend/Middleware/authenticateToken.js');  // Import JWT middleware

// A protected route that only users with a valid token can access
router.get('/test-protected', authenticateToken, (req, res) => {
  res.status(200).json({ message: 'You have accessed a protected route!', user: req.user });
});

module.exports = router;
