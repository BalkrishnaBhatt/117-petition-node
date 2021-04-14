const mongoose = require('mongoose')
const key = require('./../config/key')

mongoose.connect(key.mongodbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

