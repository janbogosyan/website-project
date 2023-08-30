const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')) //s dve dolni cherti __dirname - will point to the path(folder)we are in, in this case routes 
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html')) //more cleaner and short way to do it than the upper one
    const products = adminData.products;
    res.render('shop', {prods: products, docTitle: 'GOKU SHOP'}) // this is provided by express and will use our templated engine we set in app.js app.set('view engine','pug')
})

module.exports = router; 