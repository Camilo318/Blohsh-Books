const { Router } = require('express')
const router = Router()
const fs = require('fs').promises
const path = require('path')
const cloudinary = require('cloudinary').v2

const Book = require('../models/Book')

router.get('/', async (req, res) => {
    const books = await Book.find()
    res.json(books)
})

router.post('/', async (req, res) => {
    const {title, author, review } = req.body

    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        const imagePath = result.secure_url 
        const publicID = result.public_id
        const newBook = new Book({
            title,
            author,
            review,
            imagePath,
            publicID
        })
        await newBook.save()
        fs.unlink(req.file.path).then(() => console.log('Image Uploaded'))
        res.json({message: 'Book Saved'})
    } 
    catch (error) {
        console.log(error)
    }
    
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        await cloudinary.uploader.destroy(deletedBook.publicID)
        res.json({
            deleted_book : deletedBook
        })    
    } 
    catch (error) {
        console.log(error)
    }
})

module.exports = router