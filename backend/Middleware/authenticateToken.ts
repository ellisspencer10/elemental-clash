const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];  // Get the token from the request's headers
  const token = authHeader && authHeader.split(' ')[1];  // Extract the token from 'Bearer token'

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });  // If no token is found, deny access
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });  // If the token is invalid, return an error
    }

    req.user = user;  // Attach the user info from the token to the request
    next();  // Move on to the next middleware or route handler
  });
}

module.exports = authenticateToken;
