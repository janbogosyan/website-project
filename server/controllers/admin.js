
const Product = require('../models/product');  //we get it from the model folder , and class must be with Main latter 


exports.getAddProduct = (req, res, next) => {     //exports - with this syntax we can have multiple exports in one file easily/ and exports.getAddProduct(the name .getAddProduct its up to u)
    res.render('admin/add-product', {
        addProductTitle: 'Add product',
        path: '/admin/add-product',
        formsCSS: true,
        productsCSS: true,
        activeAddProduct: true
    });
};

//and now this export we will use into our route/admin.js file so everything will be compact and good looking


exports.postAddProduct = (req, res, next) => {          //създаваме продукт и го postvame  в нашия сайт 
    // products.push({ title: req.body.title });
    const product = new Product(req.body.title)  //така създаваме нов продукт от нашия class Product //title - взима го от add-product.ejs там имаме <input в който сме добавили nmae='title'
    product.save();          //и след като сме го създали го запазваме чрез нашия save() method който сме създали в models/product.js
    res.redirect('/');
};