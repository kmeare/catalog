const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let db = require('./config/connection');

let placeRouter = require('./routes/place');
let promoRouter = require('./routes/promo');

const port = 8000;


//parse applicaiton/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));


//parse application/json
app.use(bodyParser.json());

//use the place router
app.use('/place', placeRouter);
app.use('/promo', promoRouter);

app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    console.log(`listen on port ${port}`);

});