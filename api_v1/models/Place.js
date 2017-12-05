const mongoose = require('mongoose'),
      Schema = mongoose.Schema;


var placeSchema = mongoose.Schema({
    name: String,
    description: String,
    promos: [],
    address: String,
    phone: String,
    image: String 
    
});



var Place = mongoose.model('Place', placeSchema);

module.exports = Place;