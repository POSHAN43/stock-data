const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    id:String,
    name:String,
    image:String,
    current_price:Number,
    last_updated:String
});

module.exports = mongoose.model('stock-data',stockSchema);