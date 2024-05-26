const mongoose = require('mongoose');
const productsSchema = new mongoose.Schema({

        productName : {
            type :String ,
            required :true 
        },
        productImageUrl: {
            type :String ,
            required :true 
        },
        productPrice: {
            type :Number ,
            required :true 
        },
        productDetails: {
            type :String ,
            required :true 
        },
        productType: {
            type :String ,
            required :true 
        },
        productCompanyName: {
            type :String ,
            required :true 
        }
});
const Product= mongoose.model("Product",productsSchema)
module.exports  = Product;