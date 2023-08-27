const express = require('express');

const router = express.Router(); 

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"> <input type="text" name="title"><button type="submit">Add Product</button></input></form>')
})

router.post('/product', (req, res, next) => {  //the more specific paths(middleware should be first) 
    console.log(req.body);          //  '/products'  its specific path , only '/' its not specific
    res.redirect('/')
}); 

module.exports = router;