// Load environment variables from .env file
require('dotenv').config();

// Import the Express app from app.js
const app = require('./app');

// Set the port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
