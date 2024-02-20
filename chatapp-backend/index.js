const express = require('express')
var cors = require('cors');
const connectDB = require('./config/DB');
var app = express()
app.use(express.json()); // to store json data
require('dotenv').config()
app.use(cors())
const port = process.env.PORT || 5000
connectDB()

const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const chatRoutes = require('./routes/chatRoutes');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

