const express = require('express');
const router = express.Router();
const authenticateToken = require('/C:\Users\Ellis\Documents\GitHub\elemental-clash\backend\Middleware\authenticateToken.jscateToken');  // Import JWT middleware

// A simple test route to check if the middleware works
router.get('/test-protected', authenticateToken, (req, res) => {
  res.status(200).json({ message: 'You have accessed a protected route!', user: req.user });
});

module.exports = router;
