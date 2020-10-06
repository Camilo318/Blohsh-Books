import './styles/app.css'

const form = document.querySelector('#book-form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const score = document.querySelector('#score').value
    const bookImage = document.querySelector('#book-image').files

    console.log(title, author, score, bookImage)
})
