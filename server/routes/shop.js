const express = require('express');
const path = require('path');
// const rootDir = require('../util/path');
// const adminData = require('./admin');

const router = express.Router();

const shopController = require('../controllers/shop')

// router.get('/', (req, res, next) => {
//     res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')) //s dve dolni cherti __dirname - will point to the path(folder)we are in, in this case routes 
//     console.log(adminData.products);
//     res.sendFile(path.join(rootDir, 'views', 'shop.html')) //more cleaner and short way to do it than the upper one
//     const products = adminData.products;
//     res.render('shop', {
//         addProductTitle:'GOKU Shop',
//         prods: products, 
//         path:'/',

//     }) // this is provided by express and will use our templated engine we set in app.js app.set('view engine','pug')
// })


//orders of routes matter, sometimes in some cases

//this routes folder work together with the controllers folder
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

// router.get('/products/delete') more specific routes shoukd be first

 ;  //for specific item with Id


router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders)

router.get('/checkout', shopController.getCheckout);

module.exports = router; 