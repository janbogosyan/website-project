const express = require('express');

const path = require('path')

const rootDir = require('../util/path')  // importvame go

const router = express.Router();

const products = [];

//   /admin/add-product => GET      zashtoto v app.js sme nastroili taka da e putq  app.use('/admin',adminRoutes) i ne e nujno tuk da pishem /admin;
router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')) //  /admin/add-product
    res.sendFile(path.join(rootDir, 'views', 'add-product.html')) // instead  /admin/add-product  we use our custom rootDir

})

//   /admin/add-product => POST
router.post('/add-product', (req, res, next) => {  //the more specific paths(middleware should be first) 
    products.push({ title: req.body.title })
    res.redirect('/')
});

exports.routes = router;
exports.products = products;


//same path can be use if the method differ router.get('/add-product' and router.post('/add-product', same paths but with get and post methods