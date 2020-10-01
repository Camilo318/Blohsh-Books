const { Schema, model} = require('mongoose')

const BookSchema = new Schema({
    title: { type: String, required: true},
    author: {type: String, required: true},
    review: {type: Number, required: true},
    imagePath: {type: String, required: false},
    created_at: {type: Date, default: Date.now}
})

module.exports = model('Book', BookSchema)
