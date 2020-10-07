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
            const div = document.createElement('div')
            div.className = ''
            div.innerHTML = `
                <div class="card m-2">
                    <div class="row">
                        <div
                        class="col-md-4 d-flex align-items-center justify-content-center">
                            <img
                            class="img-fluid mx-auto d-block rounded"
                            src="http://localhost:8000${book.imagePath}"
                            alt="Book"/>
                        </div>
                        
                        <div class="col-md-8">
                            <div class="card-block p-2">
                                <h4 class="card-title">
                                ${book.title}
                                </h4>
                                <p class="card-text">
                                ${book.author}
                                </p>
                                <p class="card-text">
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
                </div>
            
                `
            booksContainer.appendChild(div)
        })
    }

    async addNewBook(book) {
        await this.handler.postBook(book)
        this.clearForm()
        this.renderBooks()
    }

    async deleteBook(id) {
        await this.handler.deleteBook(id)
        this.renderBooks()
    }

    clearForm() {
        document.querySelector('#book-form').reset()
    }

    renderMessage() {

    }

}

export default UI