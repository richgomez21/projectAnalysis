const express = require('express');
const router = express.Router();
const fs = require('fs');

const booksFile = './database/books.json';
let books = [];

fs.readFile(booksFile, (err, data) => {
    if(err){
        throw err;
    }

    books = JSON.parse(data);
});

router.get('/', (req, res) => {
   console.log("hello");
   res.json(books);
});

//GET localhost:3000/books/search?title={title}
router.get('/search', (req, res) => {
    const bookTitle = req.query.title;
    // search
    const book = books.find(b => b.title === bookTitle);
    if(book){
        res.json(book)
    }else{
        res.status(404).send();
    }
});

//GET localhost:3000/books/id
router.get('/:id', (req, res) => {
    // get id from path params
    const bookId = parseInt(req.params.id);
    // look through array to find book with id passed
    const book = books.find(indivBook => indivBook === book.id);

    if(book){
        //if found, send down
        res.json(book);
    }else{
        //else, throw error
        res.status(404).json({error: 'Book not found'})
    }
    
    res.send();
 })

//POST localhost:3000
router.post('/', (req, res) => {
    const newBook = req.body;
    // console.log(req.body)
    newBook.id = books.length + 1;
    
    books.push(newBook);
    fs.writeFile(booksFile, JSON.stringify(books), (err) => {
        if(err){
            console.log('error writing file', err)
        }else{
            console.log('successfully wrote file')
        }
    });
   res.status(201).json({success: true, message: "Book created successfully"});

 });

 router.put('/:id', (req, res) => {
    

 });

 



module.exports = router;