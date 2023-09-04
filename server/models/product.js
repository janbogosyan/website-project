const products = [];

module.exports = class Product {
    constructor(t) {            //here i want to receive a title for the product which i will then create inside my controller
        this.title = t;         //and then i create a property in this class, you do this with the this keyword and then this title is equal to the title im receiving as an argument here
    }
    save() {                    //this is method its like a function ,just without the function keyword
        products.push(this);    //this will refer to the object created based on the class and that is exactly i want to store in this array
    }

    static fetchAll() {         //i will add the static keyword which javascript offers which makes sure that i can call this method directly on the class itself and not on an instantiated object
        return products;   //obviously i want to be able to retrieve all products from that array and i also want to do that throuh my product model, however whereas save makes sense to be called on a concrete instantiated object basedd on product
    }                           //I also want to fetch all methods which is likee the utility function you could say.This is not called on a single instance of the product because it should fetch all products and i dont want to create a new object with the new keyword with some dummy title just to fetch all existing products 
}