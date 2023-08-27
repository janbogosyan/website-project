const express = require('express');

const router = express.Router(); 

//   /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/product" method="POST"> <input type="text" name="title"><button type="submit">Add Product</button></input></form>')
})

//   /admin/add-product => POST
router.post('/add-product', (req, res, next) => {  //the more specific paths(middleware should be first) 
    console.log(req.body);          //  '/products'  its specific path , only '/' its not specific
    res.redirect('/')
}); 

module.exports = router;