const mongoose = require('mongoose');
let Schema = mongoose.Schema;


var placeSchema = mongoose.Schema({
    name: String,
    description: String,
    promos: [{type: Schema.Types.ObjectId, ref: 'Promo'}],
    address: String,
    phone: String 
    
});



var Place = mongoose.model('Place', placeSchema);

module.exports = Place;