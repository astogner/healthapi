const { response } = require('express')
const express = require('express')
const user = require('../models/user')
const router = express.Router()
const Product = require('./models/product')
const User = require('./models/user')

//get all products
router.get('/', async (req,res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch(err){
        res.send('Error: ' + err)
    }
})

//Get a specific product by id
router.get('/:id', async (req,res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch(err) {
        res.send("Error: " + err)
    }
})

//Change maybe????
router.get('/:id', async (req,res) => {
    const product = await Product.findById(req.params.id)
    .then( response => {
        if(response.error) {
            //error
        } else {
            res.json(product).status(200)
        }
    })
    .catch()
})

//Get a specific product by prodName
router.get('/:prodName', async (req,res) => {
    try {
        const product = await Product.where("prodName").equals(req.prodName)
        res.json(product)
    } catch(err) {
        res.send("Error: " + err)
    }
})

//Create new product
router.post('/', async (req,res) => {
    //Need to check if product already exists
    if(!(await Product.exists({ prodName: req.body.prodName }))) {
        res.send('Error: item already exists!')
        throw new Error
    }

    const product = new Product({
        prodName: req.body.prodName,
        servingSize: req.body.servingSize,
        calories: req.body.calories,
        servingsPer: req.body.servingsPer,
        protein: req.body.protein,
        carbs: req.body.carbs,
        fat: req.body.fat,
        tags: req.body.tags
    })

    try {
        const p1 = await Product.save()
        res.json(p1)
    } catch(err) {
        res.send('Error: ' + err)
    }
})

//User update an existing product by id
//But only if they are the ones that created it



//User update an existing product by prodName
//But only if they are the ones that created it



//User delete existing product
//But only if they are the ones that created it



//Admin only update an existing product by id
router.patch('/:id', async(req,res)=> {
    const user = await User.findById(req.params.id)
    
    
    if (user.isAdmin.equals(false)) {
        //error user not admin
    }

    try{
        const product = await Product.findById(req.params.id) 
        
        

        const p1 = await product.save()
        res.json(p1)   
    }catch(err){
        res.send('Error')
    }

})

//Admin only update an existing product by prodName



//Admin only delete an existing product



module.exports = router
