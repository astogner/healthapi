const express = require('express')
const bodyParser = require('body-parser')

const usersRoutes = require('./routes/users.js')

const app = express()

app.use(bodyParser.json())
app.use('/users', usersRoutes)
app.use('/products', productsRoutes)

module.exports = app
