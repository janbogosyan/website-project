
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
    const title = req.body.title;       //we take title,imageUrl..etc by name=  from add-product.ejs for example and creating new product
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title,imageUrl,price,description)  //така създаваме нов продукт от нашия class Product //title - взима го от add-product.ejs там имаме <input в който сме добавили nmae='title'
    product.save();          //и след като сме го създали го запазваме чрез нашия save() method който сме създали в models/product.js
    res.redirect('/');
};

exports.getProducts = (req,res,next) => {
    Product.fetchAll( products => {   //inside Product.fetchAll we have anonymous function product => ... //here we call fetchAll from /models.products.js and need to pass a arrow function so when we get our products//така ще ни даде всички продукти , метода fetchAll() сме го създали ние в нашия class Product в models/product.js
        res.render('admin/products', {                   //products will be our (cb) argument/parameter we create in /models/products.js  ->  static fetchAll(cb)
            addProductTitle: 'Admin products',
            prods: products,
            path: '/admin/products'
        });
    });
};