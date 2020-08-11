
'use strict';
const express = require('express');
const router = express.Router();
const axios = require('axios');
const googleBooksURI  ='https://www.googleapis.com/books/v1/volumes';

// GET /api/books/search
router.get('/', (req, res) => {
  const qParams = {
    q: req.query.q,
    key: process.env.GOOGLE_BOOKS_API_KEY
  };

  // Google Book API query
  axios
    .get(googleBooksURI, { params: qParams })
    .then(results => res.send(results.data))
    .catch(err => console.log(err));
});

module.exports = router;