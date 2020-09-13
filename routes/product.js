const express = require('express');

const router = express.Router();

const products = [
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
    res.render('products', {"title": "products page", products });
});

router.post('/', (req,res)=>{

});

module.exports = router;