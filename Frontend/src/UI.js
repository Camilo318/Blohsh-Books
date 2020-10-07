import BookService from '../services/BookService'
import { format } from 'timeago.js'


class UI {
    constructor() {
        this.handler = new BookService()
    }

    async renderBooks() {
        const books = await this.handler.getBooks()
        console.log(books)

        const booksContainer = document.querySelector('#book-cards')
        booksContainer.innerHTML = ''

        books.forEach(book => {
            const card = document.createElement('div')
            card.className = 'card mb-3'
            card.innerHTML = `
                <div class="row m-0">
                    <div
                    class="col-md-4 d-flex align-items-center py-3">
                        <img
                        class="img-fluid mx-auto d-block rounded"
                        src="http://localhost:8000${book.imagePath}"
                        alt="Book"/>
                    </div>
                    
                    <div class="col-md-8">
                        <div class="card-block p-2">
                            <h4 class="card-title font-weight-bolder">
                            ${book.title}
                            </h4>
                            <p class="card-subtitle text-muted font-weight-bold">
                            ${book.author}
                            </p>
                            <p class="card-text text-muted">
                            Review Score: ${book.review}
                            </p>
                            <button
                            data-id=${book._id}
                            class="btn btn-danger delete">
                            Delete
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    ${format(book.created_at)}
                </div>
            `
            booksContainer.appendChild(card)
        })
    }

    async addNewBook(book) {
        await this.handler.postBook(book)
        this.clearForm()
        this.renderBooks()
        
    }

    async deleteBook(id) {
        const book = await this.handler.deleteBook(id)
        this.renderBooks()
    }

    clearForm() {
        document.querySelector('#book-form').reset()
    }

    renderMessage(message, type, time=3000) {
        const alert = document.createElement('div')
        alert.innerText = message
        alert.className = `alert alert-${type}`
        const container = document.querySelector('.container-alert')
        const row = document.querySelector('.row-alert')
        container.insertBefore(alert, row)

        setTimeout(() => {
            alert.remove()
        }, time)

    }

}

export default UI