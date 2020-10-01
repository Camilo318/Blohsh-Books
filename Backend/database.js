const mongoose = require('mongoose')

mongoose.set('useUnifiedTopology', true)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))