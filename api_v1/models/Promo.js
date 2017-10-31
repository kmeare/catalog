const mongoose = require('mongoose'),
    Schema = mongoose.Schema


var promoSchema = mongoose.Schema({
    name: String, 
    description: String,
    image: String,
    places: [{type: Schema.Types.ObjectId, ref: 'Place'}]
})

var Promo = mongoose.model('Promo', promoSchema);

module.exports = Promo;