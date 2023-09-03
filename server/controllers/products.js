//we put here logic related to products


const products = []

exports.getAddProduct = (req, res, next) => {     //exports - with this syntax we can have multiple exports in one file easily/ and exports.getAddProduct(the name .getAddProduct its up to u)
    res.render('add-product', {
        addProductTitle: 'Add product',
        path: '/admin/add-product',
        formsCSS:true,
        productsCSS:true,
        activeAddProduct:true
    });
};

//and now this export we will use into our route/admin.js file so everything will be compact and good looking


exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
};
 

exports.getProducts = (req, res, next) => {
    res.render('shop', {
        addProductTitle: 'GOKU Shop',
        prods: products,
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS:true
    });
};