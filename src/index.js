const express = require('express')

const app = express()
const port = process.env.PORT || 5000

require('./routes/user')(app)

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})