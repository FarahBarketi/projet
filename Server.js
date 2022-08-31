const express = require ('express')
const connectDB = require('./connectDB/connectDB')
const user = require('./route/contact')
const app = express()
app.use(express.json())
connectDB()
// app.use('/api/users', user)
const port = 7000

app.listen( port , ()=> console.log(`database is connected on port ${port}`))