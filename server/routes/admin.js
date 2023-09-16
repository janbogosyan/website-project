const express = require('express');

// const path = require('path')

// const rootDir = require('../util/path')  // importvame go

const adminController = require('../controllers/admin');

const router = express.Router();



// const products = [];

//   /admin/add-product => GET      zashtoto v app.js sme nastroili taka da e putq  app.use('/admin',adminRoutes) i ne e nujno tuk da pishem /admin;
// router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')) //  /admin/add-product
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html')) // instead  /admin/add-product  we use our custom rootDir
    // res.render('add-product', {addProductTitle: 'Add product', path: '/admin/add-product'}) //here we render template with a special method provided by express,that render method will always look for register view engine(our register view engine is in the beggining of app.js) 
    // and this 'add-product' is our add-product.ejs file in views,but if its in subfolder will be like products/add-product
// })


//   /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct); //we dont execute this function productsController.getAddProduct instead we just pass a reference to this function we just telling express, the express router that it should take it and store it and whenever request reaches this route it should go ahead and execute it

//   /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {  //the more specific paths(middleware should be first) 
    // products.push({ title: req.body.title })  //vremenno reshenie predi da vmukna database
    // res.redirect('/')
// });


//need to add controller function with it
router.get('/products');


//   /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);


// exports.routes = router;
// exports.products = products;


module.exports = router;

//same path can be use if the method differ router.get('/add-product' and router.post('/add-product', same paths but with get and post methods