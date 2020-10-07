class BookService {
    constructor() {
        this.uri = 'http://localhost:8000/api/books'
    }

    async getBooks() {
        try {
            const res = await fetch(this.uri)
            const books = await res.json()
            return books
        }
        catch(error) {
            console.log(error.message)
        }
    }

    async postBook(book) {
        try {
            const res = await fetch(this.uri, {
                method: 'POST',
                body: book
            })
            const data = await res.json()
        }
        catch(err) {
            console.log(err.message)
        }
    }

    async deleteBook(id) {
        const res = await fetch(`${this.uri}/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })

        const data = await res.json()
        return data
    }
}

export default BookService