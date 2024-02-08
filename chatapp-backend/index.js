const express = require('express')
var cors = require('cors')
var app = express()
app.use(express.json()); // to store json data
require('dotenv').config()
app.use(cors())
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})