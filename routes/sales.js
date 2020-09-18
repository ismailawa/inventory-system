const express = require('express');

const router = express.Router();



router.get('/', (req, res) => {
    res.render('sales', {"title": "Sales Page",});
});

router.post('/', (req,res)=>{

});

module.exports = router;