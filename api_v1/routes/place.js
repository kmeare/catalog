const router  = require('express').Router();
let Place = require('../models/Place');
let Promo = require('../models/Promo');

router.get('/',function(req, res){
    Place.find({},function(err, places){
        if(err){
            res.status(500).send(err);
        }
        res.status(200).send(places);
    });
});


router.get('/:id/promos',function(req, res){
    Place.findById(req.params.id).populate('promos').exec(function(err, place){
        if(err){
            res.status(500).send(err);
        }
        res.status(200).send(place);
    })
});


router.get('/:id',function(req,res){
    Place.findById(req.params.id, function(err, place){
        if(err){
            res.status(500).send(err);
        }
        res.status(200).send(place);
    });
});

router.post('/',function(req, res){
    var promo = new Promo({
        name:'caca'
    });

    promo.save(function(err){
        var place = new Place ({
            name: req.body.name,
            description: req.body.description,
            promos: promo._id
        });

        place.save(function(err, place){
            if(err){
                res.status(500).send(err);
            }
            res.status(201).send(place);
        });

    })
    
    
});

router.post('/:id/promos', function (req, res){
    let place = Place.findById(req.params.id, function(err, place){
        if(err){
            return err;
        }
        
        let promo = new Promo ({
            name: req.body.name,
            description: req.body.description
        });

        place.promos.push(promo);

        place.save(function(err, place){
            if(err){
                res.status(500).send(err);
            }
            res.status(201).send(place);
        });
        
    });
    

    
    

});

router.put('/:id',function(req, res){
    Place.findByIdAndUpdate({_id:req.params.id},{ $set: req.body }, function(err,place){
        if(err){
            res.status(500).send(err);
        }
        res.json(place);
    });
});

router.delete('/:id',function(req, res){
    Place.findByIdAndRemove({_id:req.params.id}, function(err,place){
        if(err){
            res.status(500).send(err);
        }
        res.json(place);
    });
});


module.exports = router;