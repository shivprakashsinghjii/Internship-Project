// Load environment variables from .env file
require("dotenv").config();

// Import required modules
const express = require("express");
const cors = require("cors");
const router = require("./Routes/router");
require("./db/conn");

// Initialize Express application
const app = express();
const PORT = process.env.PORT || 4002; // Use PORT defined in .env or default to 4002

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors());
app.use(router); // Enable CORS

// Connect to database
// connectDB(); // Ensure this function is correctly defined in db/conn.js

// Routes
// Define your routes here if needed

// Start server
app.listen(PORT, () => {
  console.log(`Server started at Port No: ${PORT}`);
});
