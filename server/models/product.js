// const products = [];

const fs = require('fs'); //Build in Node.js file system module - help us store,access, and manage data
const path = require('path');


module.exports = class Product {
    constructor(t) {            //here i want to receive a title for the product which i will then create inside my controller
        this.title = t;         //and then i create a property in this class, you do this with the this keyword and then this title is equal to the title im receiving as an argument here
    }
    save() {                                   //this is method its like a function ,just without the function keyword
        // products.push(this);                   //this will refer to the object created based on the class and that is exactly i want to store in this array
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');   // in data folder i want to store my file and my file name will be products.json and i give extension json bcs i wanna store my file in json format
        fs.readFile(p, (err, fileContent) => {   //read file p , after read we get err-error or fileContent- данните от файла p    //to store a new product in products.json first of all i need to get the existing array of products,so i will first read that file.So lets use fs read file
            let products = [];
            if (!err) {
                //fileContent ще е продукта който добавим от нашия сайт и ще се запазва в папка data която сме създали
                products = JSON.parse(fileContent)
            }
            products.push(this); //this' - refer to the class Product and we should use arrow functions otherwise 'this' will not reffer to the class anymore, here we use arrow function so its good
            fs.writeFile(p, JSON.stringify(products), (err) => {         //and now need to save it back into the file 
                console.log(err);
            })
        });
    }

    static fetchAll() {         //i will add the static keyword which javascript offers which makes sure that i can call this method directly on the class itself and not on an instantiated object
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        fs.readFile(p, (err, fileContent) => { //fileContent its our list of products stored in folder data and will be updated everytime by the server when we add new product from the website
            if (err) {
                return [];             //if no products return empty arr
            }
            return JSON.parse(fileContent); // JSON.parse will return our fileCOntent as an array because now its just a string
        })
        // return products;   //obviously i want to be able to retrieve all products from that array and i also want to do that throuh my product model, however whereas save makes sense to be called on a concrete instantiated object basedd on product
    }                           //I also want to fetch all methods which is likee the utility function you could say.This is not called on a single instance of the product because it should fetch all products and i dont want to create a new object with the new keyword with some dummy title just to fetch all existing products 
}