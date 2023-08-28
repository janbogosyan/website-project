const express = require('express');
const path = require('path')
 const rootDir = require('../util/path')

const router = express.Router();

const products = [];

//   /admin/add-product => GET      zashtoto v app.js sme nastroili taka da e putq  app.use('/admin',adminRoutes);
router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')) //  /admin/add-product
    res.sendFile(path.join(rootDir, 'views', 'add-product.html')) //  /admin/add-product

})

//   /admin/add-product => POST
router.post('/add-product', (req, res, next) => {  //the more specific paths(middleware should be first) 
    products.push({title: req.body.title})
    res.redirect('/')
});

exports.routes = router;
exports.products = products;
