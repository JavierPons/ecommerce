const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    product_name:{type:String, required:true},
    price:{type:Number, required:true},
    image:{type:String}
    
    
})


const Product = mongoose.model('Product', product);
module.exports = Product;