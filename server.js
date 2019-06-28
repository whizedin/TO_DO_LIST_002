const express = require('express')
const Cors = require("cors");
const app = express()
const mongoose = require('mongoose')
app.use(Cors());
mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const todoRouter = require('./routes/todo')
app.use('/todo', todoRouter)
app.listen(8082, () => console.log('Server Started'))
