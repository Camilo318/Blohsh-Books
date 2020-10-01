require('dotenv').config()
const express = require('express')
const fs = require('fs').promises
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')

//Init
const app = express()
require('./database')

//Settings
app.set('port', 3000)

//Middlewares
app.use(morgan('dev'))
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname))
    }
})
app.use(multer({storage}).single())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Routes
app.use('/api/books/', require('./routes/books'))

//Static Files
app.use(express.static(path.join(__dirname, 'public')))


//Start server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000')
})
