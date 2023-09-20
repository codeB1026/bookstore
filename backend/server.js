
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotEnv = require('dotenv')
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors());



const port = process.env.PORT || 5000;

const url = process.env.MONGODB_URL

mongoose.connect(url , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const BooksRoute = require('../backend/routes/books.js')

app.use('/books', BooksRoute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

