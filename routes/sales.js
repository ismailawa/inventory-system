const express = require('express');

const router = express.Router();
const quantity = 'quantity';
const amount = 'amount';


router.get('/', (req, res) => {
    res.render('sales', {"title": "Sales Page",});
});

router.post('/', (req,res)=>{

});

module.exports = router;