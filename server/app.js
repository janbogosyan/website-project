const express = require('express');

const app = express(); //imeto e po izbor 

//          app.use((req, res, next) => {
//     console.log('something');
//     next(); // Allows the request to continue to the next middleware in Line
// })

app.use('/products', (req, res, next) => {  //the more specific paths(middleware should be first) 
    console.log('something hi');          //  '/products'  its specific path , only '/' its not specific
    res.send('<h1>Products</h1>')
});


app.use('/', (req, res, next) => { 
    console.log('hi');
    res.send('<h1>Hi</h1>')
});


app.listen(3000);