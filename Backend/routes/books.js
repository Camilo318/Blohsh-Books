const { Router } = require('express')
const router = Router()
const fs = require('fs').promises

const Book = require('../models/Book')

router.get('/', async (req, res) => {
    const books = await Book.find()
    res.json(books)
})

router.post('/', async (req, res) => {
    const {title, author, review } = req.body
    const imagePath = '/uploads/' + req.file.filename
    const newBook = new Book({title, author, review, imagePath})
    console.log(newBook)
    await newBook.save()
    res.json({message: 'Book Saved'})
})

router.delete('/:id', async (req, res) => {
    const deletedBook = await Book.findByIdAndDelete(req.params.id)
    fs.unlink(`../public${deletedBook.imagePath}`)
    res.json({
        deleted_book : deletedBook
    })
})

module.exports = router