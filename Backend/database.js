const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://fullstack-books-db:dPsDiGpVLpYP1kZv@cluster0.lcq17.mongodb.net/test'

mongoose.set('useUnifiedTopology', true)
mongoose.connect(MONGO_URI, {useNewUrlParser: true})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err.message))