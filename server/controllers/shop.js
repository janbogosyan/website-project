
const Product = require('../models/product');  //we get it from the model folder , and class must be with Main latter 

exports.getProducts = (req, res, next) => { 
    Product.fetchAll( products => {   //inside Product.fetchAll we have anonymous function product => ... //here we call fetchAll from /models.products.js and need to pass a arrow function so when we get our products//така ще ни даде всички продукти , метода fetchAll() сме го създали ние в нашия class Product в models/product.js
        res.render('shop/product-list', {                   //products will be our (cb) argument/parameter we create in /models/products.js  ->  static fetchAll(cb)
            addProductTitle: 'GOKU Shop',
            prods: products,
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};

exports.getIndex = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/index',{
            prods:products,
            pageTitle:'shop',
            path:'/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};
