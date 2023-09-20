const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
});

const books = mongoose.model('Book', bookSchema);

module.exports = books