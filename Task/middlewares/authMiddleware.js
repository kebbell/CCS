const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
  
    const token = authHeader.split(' ')[1];
    // Mock token validation
    if (token !== 'mock-token') {
      return res.status(403).json({ error: 'Unauthorized' });
    }
  
    next();
  };

