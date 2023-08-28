const express = require('express');
const path = require('path')
const bodyParser = require('body-parser'); //ne e nujno da go instalirame otdelno chrez npm install, vkluchen e kum express version 4.16 i po novi paketni versii

const app = express(); //imeto e po izbor 

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));  //app.use(kogato imame app.use tova znachi che e za celiq app) - using body-parser for the whope app
app.use(express.static(path.join(__dirname,'public')))  //chrez tova mojem statichno da dobavqme nashiq css ili js kudeto sme dobavili <link rel="stylesheet" href="/css/main.css"> (primerno v shop.html faila) zashtoto sme zadali da tursi v 'public' papkata 

app.use('/admin', adminData.routes);  //adminData refer to all the exports we can say
app.use(shopRoutes);

// app.use((req, res, next) => {                //za stranici koito ne otgovarqt na nikoi url path setvame error message
//     res.status(404).send('<h1>Page not found</h1>')
// })

app.use((req, res, next) => {                //za stranici koito ne otgovarqt na nikoi url path setvame error message
    res.status(404).sendFile(path.join(__dirname, 'views', 'error-page.html'))
})

app.listen(3000);


