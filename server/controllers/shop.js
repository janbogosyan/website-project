
const Product = require('../models/product');  //we get it from the model folder , and class must be with Main latter 

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {   //inside Product.fetchAll we have anonymous function = product => ... //here we call fetchAll from /models/products.js and need to pass a arrow function so when we get our products//така ще ни даде всички продукти , метода fetchAll() сме го създали ние в нашия class Product в models/product.js
        res.render('shop/product-list', {                   //products will be our (cb) argument/parameter we create in /models/products.js  ->  static fetchAll(cb)
            addProductTitle: 'All products',
            prods: products,
            path: '/products'
        });
    });
};

exports.getProduct = (req, res, next) => {   //our productId comes from /routes/shop/    bcs there we set our route to :productId (it can be any name)  router.get('/products/:productId', shopController.getProduct )
    const prodId = req.params.productId;    //express.js give us this req.params by default The req.params property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /student/:id, then the “id” property is available as req.params.id. This object defaults to {}. 
    Product.findById(prodId, product => {   //findById is our custom static function from the mode
        res.render('shop/product-details',{
            product: product, 
            addProductTitle: product.title,
            path: '/products'
        }); // product: product - product in the left side is the key which we will use in the view folder product-details.ejs
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            addProductTitle: 'Shop',
            path: '/'
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        addProductTitle: 'Your Cart'
    });
};
 
exports.postCard = (req,res,next) => {
    const prodId = req.body.productId;   //extract the data  productId its from product-details by name=''
    console.log(prodId);
    res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        addProductTitle: 'Your Orders'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        addProductTitle: 'Checkout'
    });
};
