const express = require('express');
const {Product} = require('../models/product');
const {Category} = require('../models/category');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const productList = await Product.find();


    if(!productList) {
        res.status(500).json({
            success: false,
            message: 'No products found,'
        })

        res.send(productList);
    }
    
        


    res.status(200).json({
        success: true,
        count : products.length,
        data: products
    });
});



// POST Route
router.post(`/`,async (req, res) => {
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid category');
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        isFeatured: req.body.isFeatured,
        dateCreated: req.body.dateCreated,
    })
    product = await product,save();

    if(!product) 
        return res.status(400).send('The product cannot be created');
    res.send(product);
})


module.exports = router;