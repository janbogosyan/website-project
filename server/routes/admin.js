const express = require('express');
const path = require('path')


const router = express.Router();

//   /admin/add-product => GET      zashtoto v app.js sme nastroili taka da e putq  app.use('/admin',adminRoutes);
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')) //  /admin/add-product
})

//   /admin/add-product => POST
router.post('/add-product', (req, res, next) => {  //the more specific paths(middleware should be first) 
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;