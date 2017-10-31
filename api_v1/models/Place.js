const mongoose = require('mongoose'),
      Schema = mongoose.Schema;


var placeSchema = mongoose.Schema({
    name: String,
    description: String,
    promos: [{type: Schema.Types.ObjectId, ref: 'Promo'}],
    address: String,
    phone: String,
    image: String 
    
});



var Place = mongoose.model('Place', placeSchema);

module.exports = Place;