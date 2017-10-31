const express = require('express');

const router = express.Router();
let Promo = require('../models/Promo');

router.get('/',function(req, res){
    Promo.find({},function(err, promos){
        if(err){
            res.status(500).send(err);
        }
        res.status(200).send(promos);
    });
});


module.exports = router;