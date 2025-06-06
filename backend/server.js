const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to database
connectDB();

// Basic route to test server
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));