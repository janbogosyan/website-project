//controlles - connects model and view
//should only make sure that the two can communicate (in both directions)

//we put here logic related to products
// const products = []

const Product = require('../models/product');  //we get it from the model folder

exports.getAddProduct = (req, res, next) => {     //exports - with this syntax we can have multiple exports in one file easily/ and exports.getAddProduct(the name .getAddProduct its up to u)
    res.render('add-product', {
        addProductTitle: 'Add product',
        path: '/admin/add-product',
        formsCSS: true,
        productsCSS: true,
        activeAddProduct: true
    });
};

//and now this export we will use into our route/admin.js file so everything will be compact and good looking


exports.postAddProduct = (req, res, next) => {
    // products.push({ title: req.body.title });
    const product = new Product(req.body.title)  //така създаваме нов продукт от нашия class Product //title - взима го от add-product.ejs там имаме <input в който сме добавили nmae='title'
    product.save();          //и след като сме го създали го запазваме чрез нашия save() method който сме създали в models/product.js
    res.redirect('/');
};


exports.getProducts = (req, res, next) => { 
    Product.fetchAll( products => {   //inside Product.fetchAll we have anonymous function product => ... //here we call fetchAll from /models.products.js and need to pass a arrow function so when we get our products//така ще ни даде всички продукти , метода fetchAll() сме го създали ние в нашия class Product в models/product.js
        res.render('shop', {                   //products will be our (cb) argument/parameter we create in /models/products.js  ->  static fetchAll(cb)
            addProductTitle: 'GOKU Shop',
            prods: products,
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};