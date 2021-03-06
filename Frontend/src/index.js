import './styles/app.css'
import UI from './UI'
import bsCustomFileInput from 'bs-custom-file-input'

const handler = new UI()
const form = document.querySelector('#book-form')

document.addEventListener('DOMContentLoaded', () => {
    handler.renderBooks()
    bsCustomFileInput.init()
})

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
    
    handler.addNewBook(newBook)
    console.log(bookImage[0])
    handler.renderMessage(`Book was added`, 'success')
})


document.querySelector('#book-cards').addEventListener('click', e => {
    e.preventDefault()
    if (e.target.classList.contains('delete')) {
        handler.deleteBook(e.target.dataset.id)
        handler.renderMessage(`Book was deleted`, 'danger')
    }
})
