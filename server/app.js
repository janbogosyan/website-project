const express = require('express');
const bodyParser = require('body-parser'); //ne e nujno da go instalirame otdelno, vkluchen e kum express version 4.16 i po novi paketni versii

const app = express(); //imeto e po izbor 

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));  //app.use - using body-parser for the whope app

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {         
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000); 