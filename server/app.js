const express = require('express');

const path = require('path')

const bodyParser = require('body-parser'); //nujen e tozi package za da parsva requesti body(ne parsva vsichki tipove failove ,naprimer - JSON i t.n.)no v sluchaq shte ni parsne nashite bodyta koito sme izpratili pod <form>, zatova go postavame po na visoko nivo ,ne e nujno da go instalirame otdelno chrez npm install, vkluchen e kum express version 4.16 i po novi paketni versii
//console.log(req.body) bqhme izpolzvali v nachaloto pri app.use('/product',(req,res,next))...., i chrez body-parser shte vidim rezultata v konzolata..

const app = express(); //imeto e po izbor 

app.set('view engine', 'pug'); //you can't pass variables/values to pure html. The templating engine is something that looks at the data you pass and generates the html markup for you. and using pug which is templat eengine for express
app.set('views','views') // and here we say where to find this templates , first argument its to look , second its the name of the folder(can be any name, just we named our folder 'views')

const adminData = require('./routes/admin'); //the order of this imports doesnt matter
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));  //middleware function i app.use(kogato imame app.use tova znachi che e za celiq app) - using body-parser for the whope app
app.use(express.static(path.join(__dirname,'public')))  //chrez tova mojem statichno da dobavqme nashiq css ili js kudeto sme dobavili <link rel="stylesheet" href="/css/main.css"> (primerno v shop.html faila) zashtoto sme zadali da tursi v 'public' papkata 

app.use('/admin', adminData.routes);  //the order matters(but not here because we are using GET request in admin.js) / only files which start with /admin will go to admin.js data, because we set it here /    adminData refer to all the exports, we can say and its default
app.use(shopRoutes);                   

// app.use((req, res, next) => {                //za stranici koito ne otgovarqt na nikoi url path setvame error message
//     res.status(404).send('<h1>Page not found</h1>')
// })

app.use((req, res, next) => {                //za stranici koito ne otgovarqt na nikoi url path setvame error message tuk v app.js nai otdolu, ako nikoi path ne otgovarq na ochakvanoto vlizame tuk
    res.status(404).sendFile(path.join(__dirname, 'views', 'error-page.html'))
})


app.listen(3000);

//app.use   middleware will always fired, but if we use instead  app.get or app.post for example will fire only for incoming get or post requests so this is another form of filtering
//app.get allows us to filter only for incoming get requests ...etc

//get,post etc will do the exact match ('/something') , app.use will not do the exact match so the order matters there
