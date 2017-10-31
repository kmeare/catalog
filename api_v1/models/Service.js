var mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({
    name: String,
    description: String, 
    promos: [],
    image: String
})

var Service = mongoose.model('Service', serviceSchema);

module.exports = Service;