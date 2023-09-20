const router = require("express").Router();
let books = require('../models/book');

router.route('/add').post((req,res) =>{
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    const newBook = new books({
        title,
        author,
        description
    })

    newBook.save().then(()=>{
        res.json ('books added')
    }).catch((error)=>{
        console.log(error)
    })
})

router.route('/').get((req,res)=>{
    books.find().then((books)=>{
        res.json(books)
    }).catch((error)=>{
        console.log(error)
    })
})

module.exports = router;