const express = require('express');
const { v4: uuidv4 } = require('uuid');
const connection = require('../db/db_connect');

const router = express.Router();

var products = [
    {
        "id": uuidv4(),
        "name": "performs",
        "prise": 500,
        "quantity": 30
    },
    {
        "id": uuidv4(),
        "name": "earphones",
        "prise": 450,
        "quantity": 100
    },
    {
        "id": uuidv4(),
        "name": "lamps",
        "prise": 200,
        "quantity": 15
    }
];

router.get('/', (req, res) => {
    connection().query("SELECT * FROM products", (error, products, fields) => {
        if(error){
            res.send("Error connecting to dabases");
        }else{
            res.render('products', { "title": "products page", products });
        }
        
    });
    
});
router.get('/add', (req, res) => {
    res.render('products/add_products', { "title": " Add Product page" });
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
        products = products.filter((product) => { return product.id != id; });
    res.redirect('/products');
})
router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const product = products.filter((product) => { return product.id == id; })[0];
    console.log(product);
    res.render('products/edit_product', { "title": " Edit Product page",  product });
})

router.post('/', (req, res) => {
    const product = {
        "id": uuidv4(),
        "name": req.body.name,
        "prise": req.body.prise,
        "quantity": req.body.quantity
    };
    products.push(product);
    res.redirect('/products');
});

router.post('/update', (req, res) => {

    const id = req.body.id;
    const product = products.filter((product)=> {return product.id == id})[0];
    products = products.filter((product)=> {return product.id != id});
    product.name = req.body.name;
    product.prise = req.body.prise;
    product.quantity = req.body.quantity;

    products.push(product);
    res.redirect('/products');
});



module.exports = router;