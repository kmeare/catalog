const mongoose = require('mongoose');


var promoSchema = mongoose.Schema({
    name: String, 
    description: String
})

var Promo = mongoose.model('Promo', promoSchema);

module.exports = Promo;