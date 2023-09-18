// To put it simply, the data transmitted between the database and the user interface is handled by this logic. The term “domain object” or
//  “domain entity” refers to the model. In the express, models are responsible for creating a logical layer to communicate with the database.

// Model folder - responsible for REPRESENTING(like model :D) your data
//responsible for managing your data(saving,fetching, etc)
//doesnt matter if you manage data in memory,files,databases
//contains data-related logic
//Models- This folder would contain all your schema files and and the functions required for the schema would also lie over here

//views folder - responsible for what user sees
//shouldnt contain too much logic, your logic should be in the model or partly in the controller
//because the controller should do everything that needs to be done to connect your model and view





const fs = require('fs'); //Build in Node.js file system module - help us store,access, and manage data
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json'); //filename is part of the object process.mainModule(and it will set the  root  directory -  folder 'data') in folder data will create automatic folder with name products.json and there will store our data

const getProductsFromFile = (cb) => {  //cb = 'callback' its passed function Functions are data, and therefore can be passed around just like other values. This means a function can be passed to another function as an argument.
    fs.readFile(p, (err, fileContent) => { //fileContent(the name fileContent we set and its only here) its our list of products stored in folder data/products.json and will be updated everytime by the server when we add new product from the website
        if (err) {
            return cb([]);             //if no products return empty arr
        }
        cb(JSON.parse(fileContent));   // JSON.parse will return our fileContent as an array(array of our products) because now its just a string
    });
};

module.exports = class Product {     // its product.js because the core thing here its we will create 1 product with this model and then we will store every product in array  products
    constructor(title,imageUrl,price, description) {            //here in constructor() i want to receive a title for the product which i will then create inside my controller folder
        this.title = title;         //and then i create a property(variable) in this class, you do this with the 'this' keyword and then this title is equal to the title im receiving as an argument here
        this.imageUrl = imageUrl;   // ima znachenie tqhnata podredba tuk, zashtoto gi izpolzvah v /views/shop/product-list i tam podredbata im trqbva da e kato tuk inache description otiva na mqstoto na price i prochie
        this.price = price;
        this.description = description;  //views/admin/add-product.ejs там ги използваме PODREDBATA E VAJNA na title,imageUrl,description,price , trqbva da e sushtata tuk i tam
    }
    save() {
        this.id = Math.random().toString();    //u can use toString or toNumber its up to you //adding dummy id (prefered way will be with some bibloteque like uniqId or etc..bcs Math.random( dont guarantee everytime will be different number ))
        getProductsFromFile(products => {
            products.push(this); ////this will refer to the object created (ще е името на продукта който сме сетнали в конструктора),based on the class and that is exactly i want to store in this array// this' - refer to the class Product and we should use arrow functions otherwise 'this' will not reffer to the class anymore, here we use arrow function so its good
            fs.writeFile( p, JSON.stringify(products), err => {         //and now need to save it back into the file 
                console.log(err);
            })
        });
    };

        //we will set cb(callback) here and we will use it as a passed function and after that we go to our controllers folder in products.js to use it    //i will add the static keyword which javascript offers which makes sure that i can call this method directly on the class itself and not on an instantiated object
    static fetchAll(cb) {    
        getProductsFromFile(cb);  //we pass cb , so we can use it  as this (we already use this logic in const getProductsFromFile) ->  cb(JSON.parse(fileContent)); so we just need to pass here cb(or other name as a parameter(argument))

        // const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        // fs.readFile(p, (err, fileContent) => { //fileContent its our list of products stored in folder data and will be updated everytime by the server when we add new product from the website
        //     if (err) {
        //         cb([]);             //if no products return empty arr
        //     }
        //     cb(JSON.parse(fileContent)); // JSON.parse will return our fileCOntent as an array because now its just a string
        // })
        // return products;   //obviously i want to be able to retrieve all products from that array and i also want to do that throuh my product model, however whereas save makes sense to be called on a concrete instantiated object basedd on product
    }                           //I also want to fetch all methods which is likee the utility function you could say.This is not called on a single instance of the product because it should fetch all products and i dont want to create a new object with the new keyword with some dummy title just to fetch all existing products 
}