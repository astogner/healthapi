const express = require('express')
const router = express.Router()
const Entry = require('./models/entry')

router.get('/', async (req,res) => {
    try {
        const Entry = await Entry.find()
        res.json(entrys)
    } catch(err){
        res.send('Error: ' + err)
    }
})

router.get('/:id', async (req,res) => {
    try {
        const Entry = await Entry.findById(erq.params.id)
        res.json(entrys)
    } catch(err) {
        res.send("Error: " + err)
    }
})

module.exports = router
