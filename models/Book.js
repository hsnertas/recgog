
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: null
  },
  authors: [{
    type: String
  }],
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String,
    unique: true
  }
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
