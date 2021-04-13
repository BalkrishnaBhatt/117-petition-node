const express = require('express')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

require('./routes/user')(app)

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})