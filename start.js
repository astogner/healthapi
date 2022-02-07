const mongoose = require('mongoose')
var app = require('./app.js')

const PORT = 3000

const url =  'mongodb://localhost/HealthDB'
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected to HealthDB...')
})

//node . to run server
app.listen(
    PORT,
    () => console.log(`Live on http://localhost:${PORT}`)
)
