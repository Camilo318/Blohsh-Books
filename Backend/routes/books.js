const { Router } = require('express')
const router = Router()

const Book = require('../models/Book')

router.get('/', async (req, res) => {
    const books = await Book.find()
    res.json(books)
})

router.post('/', async (req, res) => {
    const {title, author, review } = req.body
    const newBook = new Book({title, author, review })
    console.log(newBook)
    await newBook.save()
    res.json({message: 'Book Saved'})
})

router.delete('/:id', async (req, res) => {
    const deletedBook = await Book.findByIdAndDelete(req.params.id)
    res.json({
        deleted_book : deletedBook
    })
})

module.exports = router