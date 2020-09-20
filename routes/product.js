const express = require('express');

const router = express.Router();

var products = [
    {
        "name": "performs",
        "prise": 500,
        "quantity": 30
    },
    {
        "name": "earphones",
        "prise": 450,
        "quantity": 100
    },
    {
        "name": "lamps",
        "prise": 200,
        "quantity": 15
    }
];

router.get('/', (req, res) => {
    res.render('products', { "title": "products page", products });
});
router.get('/add', (req, res) => {
    res.render('add_products', { "title": " Add Product page" });
});
router.get('/:id', (req, res) => {
    const name = req.params.id;
    products = products.filter((product) => !product.name.match(name));
    res.redirect('/products');
})

router.post('/', (req, res) => {
    console.log(req.body.name);
    console.log(req.body.prise);
    console.log(req.body.quantity);
    products.push({
        "name": req.body.name,
        "prise": req.body.prise,
        "quantity": req.body.quantity
    })
    res.redirect('/products');
});



module.exports = router;