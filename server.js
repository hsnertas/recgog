
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Load route(s)
const apiBooks = require('./routes/books');
const apiBooksSearch = require('./routes/search');

// Connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api/books', apiBooks);
app.use('/api/books/search', apiBooksSearch);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
