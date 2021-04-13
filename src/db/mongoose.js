const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/117-petition-node', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})