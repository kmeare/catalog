const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/acqu', {useMongoClient: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
    console.log(`you could use mongoose`);
});

