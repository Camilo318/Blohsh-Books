import './styles/app.css'
import BookService from '../services/BookService'
const form = document.querySelector('#book-form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const review = document.querySelector('#review').value
    const bookImage = document.querySelector('#book-image').files

    const newBook = new FormData()
    newBook.append('title', title)
    newBook.append('author', author)
    newBook.append('review', review)
    newBook.append('image', bookImage[0])
    
    const bookService = new BookService()

    bookService.postBook(newBook)
})
