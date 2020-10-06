class BookService {
    constructor() {
        this.uri = 'http://localhost:8000/api/books'
    }

    async getBooks() {
        const res = await fetch(this.uri)
        const books = await res.json()
        return books
    }

    async postBook(book) {
        try {
            const res = await fetch(this.uri, {
                method: 'POST',
                body: book
            })
            const data = await res.json()
            console.log(data)
            return data
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